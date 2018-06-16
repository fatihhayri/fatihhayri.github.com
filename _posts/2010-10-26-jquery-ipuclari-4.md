---
layout: post
title: jquery ipuçları - 4
Date: 2010-10-26 23:04
Category: Javascript, jquery
tags: [closest(), console.log, delay(), has(), next(), parent(), parents(), prev()]
---

[Jquery ipuçları - 1][]
[Jquery ipuçları - 2][]
[Jquery ipuçları - 3][]

## 1 - Mümkünse Class yerine Id kullanmayı tercih edin

jQuery ile kod yazarken bize çok büyük kolaylıklar kazandırır. Bunlardan
bir tanesi elemana atanmış sınıfı yardımı ile kolayca seçebilme
özelliğidir, ancak burada şöyle bir durum söz konusudur; jquery id ile
atanmış elemanları normal javascriptteki gibi **getElementById** ile
yakaladığı için daha hızlı çalışırken normal olarak sınıf ile
yakalamalarda daha yavaş çalışacaktır.

Bu nedenle mümkün olduğunca seçicilerde id kullanmaya dikkat
edilmelidir. Tabi bazı durumlarda sınıf kullanmak zorunda kalabiliriz o
başka.

![][100]

**kaynak:** net.tutsplus.com

## 2 - next() ve prev() kullanımı

Bu özelliklerin kullanımı bazen can kurtarıyor ancak kullanırken dikkat
etmek lazım, bazende sorunlara yol açabiliyor. Sonradan eklediğiniz bir
eleman sizin next ve prev kabullerinizi mahvedebiliyor

**next()** : next fonksiyonu bir sonraki elemanı yakalar. Sadece sonraki
elemanı yakalar alt elemanlarını yakalamaz.

next fonksiyonu filtreleme özelliği vardır, yani next('li.secili')
tanımı ile en yakın bir sonraki secili sınıfı tanımlı li elemanını
yakalayabiliriz.

Bir örnek verelim.

{% highlight html %}
<ul>
    <li>Adana</li>
    <li>Ankara</li>
    <li class="secili">İstanbul</li>
    <li>İzmir</li>
    <li>Trabzon</li>
</ul>
{% endhighlight %}

Şeklindeki bir html kodundan

{% highlight javascript %}
$('li.secili').next().css('border-bottom', '1px solid #999');
{% endhighlight %}

next() fonksiyonu yardımı ile bir sonraki elemanı yakalayabiliriz.

**prev() :** prev fonksiyonu bir önceki elemanı yakalar. Sadece önceki
elemanı yakalar alt elemanlarını yakalamaz.

prev fonksiyonu filtreleme özelliği vardır, yani prev('li.secili')
tanımı ile en yakın bir onceki secili sınıfı tanımlı li elemanını
yakalayabiliriz.

Bir örnek verelim.

{% highlight html %}
<ul>
    <li>Adana</li>
    <li>Ankara</li>
    <li class="secili">İstanbul</li>
    <li>İzmir</li>
    <li>Trabzon</li>
</ul>
{% endhighlight %}

Şeklindeki bir html kodundan

{% highlight javascript %}
$('li.secili').prev().css('border-bottom', '1px solid #999');
{% endhighlight %}

prev() fonksiyonu yardımı ile bir önceki elemanı yakalayabiliriz.

## 3 - Üst Eleman Bulma - parent(), parents() ve closest()

**parent()**

Bir üst elemanı bulma. Geriye bir adet üst eleman döndürür.

{% highlight javascript %}
$('td.secili').parent().css('border-bottom', '#999');
$('div').parent('.large').css('font-size', '14px');
{% endhighlight %}

İlk kod üst elemanı yakalarken, ikinci satırda ise seçme işlemini biraz
daha daraltarak .large sınıfı tanımlı olan üst  elmanı yakala diyoruz.

**parents()**

Belirlenen elemanın tüm üst elemanlarını bulmaya yarar.

{% highlight javascript %}
$('li').parents().css('background-color', 'red');
$('li').parents(&quot;ul&quot;).css('background-color', 'red');
{% endhighlight %}


İlk satır li'nin tüm üst elemanlarını yakalarken, ikinci satır li'nin
tüm **ul** etiketli üst elemanlarını yakalar.

**closest()**

En yakın üst elemanı bulmak içindir.

{% highlight javascript %}
$(document).ready(function() {
	$('li.urunler').closest('ul').css('background-color', 'red');
});
{% endhighlight %}


HTML

{% highlight html %}
<ul>
    <li>Üst Menü
        <ul>
        <li class="urunler">Ürün 1</li>
        <li class="urunler">Ürün 2</li>
        </ul>
    </li>
</ul>
{% endhighlight %}

İçiçe girmiş birçok listede yukarıdaki tanım 'urunler' sınıfı
tanımlanmış öğenin ilk üst ul elemanını yakalamamıza yardım eder.

## 4 - Firebug ve console.log ile kodumuzu izlemek

Firebug'ın çalışma hayatımızdaki yerini biliyoruz. jquery ile hata
yakalama amacı ile console.log kullanıyoruz. Daha önceleri javascript
ile kod yazarken alert fonksiyonun çok kullanırdım. Şimdi aynı işi
**console.log** yapıyor ancak popup çıkarıp bizi rahatsız etmiyor.

{% highlight javascript %}
var count = 0; while(count < 1000) {
	count++;
	console.log(count);
	setTimeout("takistHesapla";, 1000);
}
{% endhighlight %}

yazın ve Firebug'ın console sekmesine bakın. Bu kod Chrome'da da
çalışıyor.

Örneği görmek için [tıklayınız.][] Tabi **takistHesapla**diye bieşy
bulamadım diye size bin tane hata verecek oda gayet normal.

Bir uyarı işinizi yayına atarken bu satırı silin yoksa ie'de hata verir.

## 5 - Animasyon ve Efektleri Geciktirme (delay)

jQuery 1.4 ile birlikte gelen yeni bir özellik olan delay()
animasyonlarımıza belli bir süre ara vermemizi sağlat, daha önceleri bu
işi yapmak için setTimeout metodunu kullanıyorduk.

{% highlight javascript %}
$("div").fadeIn().delay(4000).fadeOut();
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

seçtiğimiz katmana fadeIn efekti ver ve sonra 4000 milisaniye bekle ve
sonra fadeOut efekti ver diyoruz.

## 6 - has() Metodu

jQuery 1.4 ile birlikte gelen bir başka yeni özellik **has()**
metodudur. Daha önceki sürümlerde :has seçicisi vardı, şimdi **has()**
metodu ile daha kolay yakalama işi yapabileceğiz.

{% highlight html %}
<ul>
<li>list item 1</li>
<li>list item 2
    <ul>
    <li>list item 2-a</li>
    <li>list item 2-b</li>
    </ul>
</li>
<li>list item 3</li>
<li>list item 4</li>
</ul>
{% endhighlight %}

Yukarıdaki kodda alt menüsü olan li elemanını yakalamak için bu metodu
kullanabiliriz.

{% highlight javascript %}
$('li').has('ul').css('background-color', 'red');
{% endhighlight %}

Örneği görmek için [tıklayınız.][2]

Şeklinde altında ul etiketi olan li'leri ki burada bir tane var oda
**list item 2** içeriğine sahip olandır.

## Kaynaklar

-   [http://www.tripwiremagazine.com/2009/10/jquery-and-general-javascript-tips-to-improve-your-code.html][]
-   [http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx][]
-   [http://www.smashingmagazine.com/2010/08/04/commonly-confused-bits-of-jquery/][]

  [Jquery ipuçları - 1]: http://www.fatihhayrioglu.com/jquery-ipuclari/
  [Jquery ipuçları - 2]: http://www.fatihhayrioglu.com/jquery-ipuclari-2/
  [Jquery ipuçları - 3]: http://www.fatihhayrioglu.com/jquery-ipuclari-3/
  [100]: /images/jquery_4_ipuc.png
  [tıklayınız.]: /dokumanlar/console_log.html
  [1]: /dokumanlar/delay_metodu.html
  [2]: /dokumanlar/has_metodu.html
  [http://www.tripwiremagazine.com/2009/10/jquery-and-general-javascript-tips-to-improve-your-code.html]: http://www.tripwiremagazine.com/2009/10/jquery-and-general-javascript-tips-to-improve-your-code.html
  [http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx]: http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx
  [http://www.smashingmagazine.com/2010/08/04/commonly-confused-bits-of-jquery/]: http://www.smashingmagazine.com/2010/08/04/commonly-confused-bits-of-jquery/
