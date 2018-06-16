---
layout: post
title: jQuery İpuçları - 2
Date: 2010-02-19 23:36
Category: Javascript, jquery
tags: [ie6, ipuçları, jquery, kontrol kutuları, metot zincirleme, toggle, toggleClass, zebra tablolar]
---

Genel olarak kullandığım ve dikkatimi çeken jquery ipuçlarını sizlerle
paylaşmaya devam ediyorum. [İpucu serisinin ilkine buradan ulaşabilirsiniz.][]

## 1- toggle() ile kolayca gizle/göster yapmak.

Javascript ile en çok yaptığımız işlerden biriydi bir bağlantıya veya
elemana tıklayınca açılan bir daha tıklayınca kapanan alanlar
oluşturmak. jQuery bu iş için bize toggle() fonksiyonunu tanımlamış.
Çeşitli kullanım şekilleri olsada ben size burada en basit şeklini
anlatacağım.

{% highlight javascript %}
$('p.hidden').toggle ();
{% endhighlight %}

Bu kadar basit bir kod ile işlem tamamdır. toggle() fonksiyonuna çeşitli
animasyonlar ve işler ekleyebiliyoruz. Gayet kullanışlı bir özellik.

## 2- toggleClass() ile toogle uyguladığımız elemanlara sınıf tanımlama

Yukarıda yaptığımız uygulamaya ek olarak tetiklenen elemana bir sınıf
tanımlamak için

{% highlight javascript %}
$('p.hidden').toggleClass("acik");
{% endhighlight %}

bu kod sayesinde mesela çok basit şekilde aç-kapa butonu yapabiliriz.

## 3- click() ile tetiklenen bağlantılarda ie6 sorununu gidermek

Bir bağlantıya jquery ile erişip click() metodunu uyguladığımızda ie6
ile sorun yaşıyoruz. [Ben bu sorun için bir çözüm bulmuştum ancak Hüseyin Mert daha iyi bir çözüm buldu.][] Ben bu çözümü burada sizlerle
paylaşmak istedim.

{% highlight javascript %}
$("a").click(function(event){
	event.preventDefault();
	// yapılacaklar
});
{% endhighlight %}

Böylece sorunu aşmış oluyoruz. Hüseyin Mert'e teşekkürler tekrar.

## 4 - Metot Zincirleme özelliği ile daha kısa kodlar üretmek

Bir çok metodu ard arda aynı elemana yazmaktansa zincirleme kullanabilme
özelliği sunuyor bize jQuery.

{% highlight javascript %}
$('p.ilkParagraf').css ('color', '#ff0000').text ('Giriş').addClass ('yazi').fadeTo (1000,1);
{% endhighlight %}

Yukarıdaki örnekte görüldüğü gibi ard arda metotları kullanabiliriz.
Ancak çok fazla kullanmanın performansı etkilediğini unutmadan bu
özelliği kullanalım.

## 5- Kontrol kutularının(checkbox) kontrolü

jquery ile kontrol kutularını kontrol etmenin bir kaç yolu var

{% highlight javascript %}
 if($('#deneme:checked').val() != null) {
	// işaretli ise bunu yap
}
//veya

if($('#deneme:checked').length != 0) {
	// işaretli ise bunu yap
}
//veya

$('input[name=deneme]').is(':checked')
$('input[name=deneme]').attr('checked') // işaretli veya degil
$('input[name=deneme]').attr('checked', true);
{% endhighlight %}

## 6 - Arama metinlerini değiştirmek

Arama kutuları içine açıklayıcı metinler yazarız. "Anahtar Kelime",
"Arama" vb. gibi. bu metinleri yazarız, ancak kullanıcı bu alana
odaklandığında bu metni kaldırmalıyız ve kullanıcı bir şey yazmadan
çıkarsa o zamanda genel yazdığımız metni geri getirmeliyiz.

{% highlight javascript %}
var aramaKutusu = $("#aramaAlani");
var aramaKutusuBasDeg = "Aranacak Kelime";
aramaKutusu.attr("value", aramaKutusuBasDeg);
aramaKutusu.focus(function(){
	if(jQuery.trim($(this).attr("value")) == aramaKutusuBasDeg)
	$(this).attr("value", "");
});

aramaKutusu.blur(function(){
	if(jQuery.trim($(this).attr("value")) == "")
	$(this).attr("value",aramaKutusuBasDeg);
})
{% endhighlight %}

**Güncelleme:** Bu kullanımın daha basit bir şekli var. yedincisenol'un
yazdığı kod daha basit ve kullanışlı.

{% highlight javascript %}
function doldur(o){
	if(o.value==o.defaultValue){o.value="";}
	else if(o.value==""){o.value=o.defaultValue;}
	o.onblur=function(){doldur(o)}}
{% endhighlight %}

ve kodu sonra çağırmak için (jquery ile)

{% highlight javascript %}
$("#inputId").focus(function(){
	doldur(this)
});
{% endhighlight %}

veya html içinden

{% highlight html %}
<input name="adınız" value="Adınızı girini" onfocus="doldur(this)"/>
{% endhighlight %}

Kod için yedincisenol'a teşekkürler

## 7- Zebra tablo yapmak

Tablo okunabilirliğini arttırmak için bir satır farklı bir renk veya
stil tanımlarız. Bunu javascript ile uzun yoldan yaparken jquery ile tek
satır kod ile yapabiliyoruz

{% highlight javascript %}
$("tr:nth-child(odd)").addClass("farkliSatir");
{% endhighlight %}

## 8 - Çok tekrarlanan seçicileri bir değişkene tanımlamak

{% highlight javascript %}
$('p.ilkParagraf').css ('color','#000000');
$('p.ilkParagraf').text ('Giriş');
$('p.ilkParagraf').addClass ('yazi');
$('p.ilkParagraf').fadeTo (1000,1);
{% endhighlight %}

Yukarıdaki gibi bir kullanımda çok fazla tekrarlayan bir seçiciye bir
değişkene atayıp daha optimum bir kod elde edebiliriz.

{% highlight javascript %}
var $p = $('p.ilkParagraf');
$p.css ('color', '#000000');
$p.text ('Giriş');
$p.addClass('yazi');
$p.fadeTo (1000, 1);
{% endhighlight %}

Bu kullanım ile eleman ilk başta bir değişkene atanıp ön belleğe
alınıyor ve daha hızlı erişiliyor.

## Kaynaklar

-   [http://ff.im/dAPK6][Ben bu sorun için bir çözüm bulmuştum ancak Hüseyin Mert daha iyi bir çözüm buldu.]
-   http://www.myinkblog.com/2009/08/04/10-tips-for-writing-better-jquery-code
-   [http://drupal.org/node/116548][]
-   [http://snipplr.com/view/25148/jquery-search-text-replace/][]
-   [http://docs.google.com/Doc?docid=0AXwjxxctLLc5ZGZwYnQ3Z2RfNTBkZjZ3MnJmOA&hl=tr][]

  [İpucu serisinin ilkine buradan ulaşabilirsiniz.]: http://www.fatihhayrioglu.com/jquery-ipuclari/
  [Ben bu sorun için bir çözüm bulmuştum ancak Hüseyin Mert daha iyi bir çözüm buldu.]: http://ff.im/dAPK6
  [http://drupal.org/node/116548]: http://drupal.org/node/116548
  [http://snipplr.com/view/25148/jquery-search-text-replace/]: http://snipplr.com/view/25148/jquery-search-text-replace/
  [http://docs.google.com/Doc?docid=0AXwjxxctLLc5ZGZwYnQ3Z2RfNTBkZjZ3MnJmOA&hl=tr]: http://docs.google.com/Doc?docid=0AXwjxxctLLc5ZGZwYnQ3Z2RfNTBkZjZ3MnJmOA&hl=tr
