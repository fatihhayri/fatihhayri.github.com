---
layout: post
title: jQuery İpuçları - 5
Date: 2013-11-05 14:59
Category: jQuery
tags: [jQuery, preventDefault, popup, sayaç]
---


## event.preventDefault()

Eğer bu fonksiyon çağrıldı ise başlangıçta tetiklenen olay çalışmayacaktır. event.preventDefault() jQuery bağlantı kontrolü için sık sık başvurduğumuz bir metottur.

Bir örnek ile daha kolay açıklarız durumu

{% highlight html %}
<a href="#">Tıkla</a>
{% endhighlight %}

Yukarıdaki gibi bir bağlantımız olsun. Biz bu bağlantıya müdahale edip bir işlem yaptırmak istediğimizde tarayıcı bunu bir bağlantı olarak gördüğü için **href** içindeki değeri uygulayacaktır. **href** içinde diyez(#) olduğundan sayfayı yukarı kaydıracaktır. Biz tarayıcının **href** değerini yorumlamasını durdurmak ve kendi işimizi yapmak için **event.preventDefault()** metodunu kullanırız.

{% highlight javascript %}
$("a").click(function(e) {
   e.preventDefault();
   // kendi işimizi yapalım
}
{% endhighlight %}

fonksiyona parametre olarak **event(e)** vererek **e.preventDefault();** kısaltmasını kullanabiliyoruz. Bağlantı fonksiyonun ilk satırında olması önemli. Basit ama bilinmesi gereken bir konu.

## Her zamana son versiyonu çekmek için

jQuery sürümlerini güncellemek bazen sıkıntı olabiliyor. İlk jQuery ipuçları makalemde yazdığım

{% highlight javascript %}
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript">
 $(document).ready(function() {
    //isler burada
 });
</script>
{% endhighlight %}

Koda bakarsak, jquery 1.2.6 sürümü çekiliyor. Bunun yerine her daim güncel bir jQuery sürümü çekmek için

{% highlight javascript %}
<script type="text/javascript"
src="http://code.jquery.com/jquery-latest.min.js" charset="utf-8">
</script>
{% endhighlight %}

jQuery’nini kendi CDN son sürümü çekebiliyoruz.

## Form elemanları sıfırlamak için

Bazen form elemanlarını sıfırlamak sorun olabiliyor. jQuery ile bir yöntem ararken stackoverflow’da gördüğüm bir cevabı not edeyim dedim.

{% highlight javascript %}
function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}

// kullanımı:
resetForm($('#myform')); // id ile
resetForm($('form[name=myName]')); // name ile
{% endhighlight %}

**kaynak:** [http://stackoverflow.com/questions/680241/blank-out-a-form-with-jquery][1]

## popup penceresi açmak

Ey gidi eski günler. Ne popup kullanırdık. Şimdilerde çok nadir kullanılsa da ihtiyaç olduğu durumlar için basit bir yöntem gördüm ve paylaşayım dedim.

{% highlight javascript %}
$('a.popup').live('click', function(){
        newwindow=window.open($(this).attr('href'),'','height=200,width=150');
        if (window.focus) {newwindow.focus()}
        return false;
});
{% endhighlight %}

**kaynak:** [http://www.jquery4u.com/windows/jquery-cleanly-open-links-popup-windows/][2]

## textarea karakter sayımı

Kullanıcının yazdığı metin girdi alanlarına belli sayıda karakter girmesi istendiğinde girdi alanı üzerine, altına veya herhangi bir yanına bir sayaç koyarız. Bu işi jQuery ile yapmak gayet basit.

HTML kodu;

{% highlight html %}
<span class="count">0</span>
<textarea name="textarea" rows="10" cols="30"></textarea>
{% endhighlight %}

jQuery Kodu;

{% highlight javascript %}
$('textarea').bind('keydown keyup keypress change',function(){
	var thisValueLength = $(this).val().length;
	$('.count').html(thisValueLength);
});
{% endhighlight %}

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%;border: none; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/CzjJI?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

kaynak: [http://black-flag.net/jquery/20120229-3696.html][103]

## Jquery Trim() sorunu ve çözümü

Son olarakta sizlerle karşılaştığım bir sorunu ve çözümünü paylaşmak istiyorum. Bir form elemanı değerini **trim()** fonksiyonu yardımı ile alıp kullandığım kodun bir kısmında ie8’de sorun yaşadım.

{% highlight javascript %}
if($('#test').val().trim()!=''){
{% endhighlight %}

> Message: Object doesn't support this property or method

Hatasını veriyordu ie8, çözümü stackoverflow’da buldum. Yazılımcı dostu site sağ olsun tüm aradıklarımı buluyorum. Çözüm;

{% highlight javascript %}
if($.trim($('#test').val()) != ''){
{% endhighlight %}

şeklinde yazınca sorun çözüldü.

**kaynak:** [http://stackoverflow.com/questions/3439316/ie8-and-jquerys-trim][3]

Bunların dışında gördüğüm güzel linkleri aşağıda kaynaklar bölümünde paylaştım. Her biri incelemeye değer.

Kalın sağlıcakla.

## Kaynaklar

- [http://james.padolsey.com/javascript/jquery-code-smells/][4]
- [http://www.tutorialspoint.com/jquery/event-preventdefault.htm][6]
- [http://css-tricks.com/return-false-and-prevent-default/][7]
- http://neeraj.name/2010/10/25/return-false-in-jquery-1.4.3.html
- [http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx][9]
- [http://net.tutsplus.com/tutorials/javascript-ajax/20-helpful-jquery-methods-you-should-be-using/][10]
- [http://www.tuttoaster.com/some-good-and-advanced-jquery-techniques/][12]
- [http://www.codenothing.com/archives/2010/8-jquery-micro-optimization-tips/][13]
- [http://www.tripwiremagazine.com/2010/01/jquery-1.4-released-sneak-peek-on-new-features-and-enhancements.html][14]
- [http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx][15]
- [http://css-plus.com/2010/10/4-useful-jquery-selectors/][16]
- [http://www.javascriptbank.com/more-10-jquery-javascript-tips-tricks-improve-code.html][17]
- [http://jquerybyexample.blogspot.com/2012/06/get-url-parameters-using-jquery.html][18]
- http://fuelyourcoding.com/jquery-events-stop-misusing-return-false/
- [http://css-tricks.com/return-false-and-prevent-default/][21]
- [http://www.quirksmode.org/js/events_order.html][22]
- [http://javascript.info/tutorial/bubbling-and-capturing][23]
- [http://jquerybyexample.blogspot.com/2010/11/fadetoggle-method-in-jquery-144.html][25]
- [http://api.jquery.com/event.preventDefault/][26]
- [http://jquerybyexample.blogspot.com/2011/04/how-to-always-reference-latest-version.html][27]

  [1]: http://stackoverflow.com/questions/680241/blank-out-a-form-with-jquery
  [2]: http://www.jquery4u.com/windows/jquery-cleanly-open-links-popup-windows/
  [3]: http://stackoverflow.com/questions/3439316/ie8-and-jquerys-trim
  [4]: http://james.padolsey.com/javascript/jquery-code-smells/
  [6]: http://www.tutorialspoint.com/jquery/event-preventdefault.htm
  [7]: http://css-tricks.com/return-false-and-prevent-default/
  [9]: http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx
  [10]: http://net.tutsplus.com/tutorials/javascript-ajax/20-helpful-jquery-methods-you-should-be-using/
  [12]: http://www.tuttoaster.com/some-good-and-advanced-jquery-techniques/
  [13]: http://www.codenothing.com/archives/2010/8-jquery-micro-optimization-tips/
  [14]: http://www.tripwiremagazine.com/2010/01/jquery-1.4-released-sneak-peek-on-new-features-and-enhancements.html
  [15]: http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx
  [16]: http://css-plus.com/2010/10/4-useful-jquery-selectors/
  [17]: http://www.javascriptbank.com/more-10-jquery-javascript-tips-tricks-improve-code.html
  [18]: http://jquerybyexample.blogspot.com/2012/06/get-url-parameters-using-jquery.html
  [21]: http://css-tricks.com/return-false-and-prevent-default/
  [22]: http://www.quirksmode.org/js/events_order.html
  [23]: http://javascript.info/tutorial/bubbling-and-capturing
  [25]: http://jquerybyexample.blogspot.com/2010/11/fadetoggle-method-in-jquery-144.html
  [26]: http://api.jquery.com/event.preventDefault/
  [27]: http://jquerybyexample.blogspot.com/2011/04/how-to-always-reference-latest-version.html
  [103]: http://black-flag.net/jquery/20120229-3696.html
