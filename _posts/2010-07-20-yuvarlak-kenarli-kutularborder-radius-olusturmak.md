---
layout: post
title: Yuvarlak kenarlı kutular(border-radius) oluşturmak
Date: 2010-07-20 22:52
Category: CSS, XHTML
tags: border-radius, css3, ie6, ie7, ie8, yuvarlak kenar, yuvarlak kenarlı kutular
---

Web tasarımcılarını tercih ettiği tekniklerden biridir yuvarlak köşeli
alanlar oluşturmak.  <s>IE hariç css ile bu yapıyı kurmak çok basittir.</s>
Burada beraber yuvarlak kenarlı yapıları oluşturmayı göreceğiz. <s>Ayrıca
IE için javascript çözümlerini ele alacağız.</s>

border-radius özelliği CSS3 ile birlikte geldi ve HTML elemanlarına
yuvarlak kenar özelliği verme işine yarıyor. Web 2.0 ve yeni stiller ile
birlikte bir çok sitede yerini alan yuvarlak kenarlı yapılar
kullanılıyor, buda bu özelliği önemli kılıyor.

Köşeli yapılardan kaçan bir çok tasarımcı artık yuvarlak köşeli
tasarımları tercih ediyor. Bu arada şunuda söylemeden geçemeyeceğim bazı
sitelerde hiç hoş durmuyor yuvarlak kenar, her şeyi yerinde ve göz
zevkine uygun kullanmak en iyisi.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+**|**9+**|**1.0+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

**Tek değer atanmış ise,** dört köşeyede aynı değer uygulanır.
**İki değer atanmış ise,** ilk değer sol üst ve sağ alt köşeye; ikinci
değer sağ üst ve sol alt köşeye uygulanır.
**Dört değer atanmış ise,** sırası ile sol üst, sağ üst, sağ alt ve sol
alt köşelere uygulanır.
**Üç değer atanmış ise,** ikinci değer sağ üst ve sol alt köşeye
uygulanır.

**Tarayıcı Uyumu:**
Internet Explorer desteklemiyor (İE9 da gelecek) 
Firefox 2+
Safari 3+ (kısmen)
Opera 10.50+
W3C's CSS Level 3+
CSS Profile 3.0
{: .tarayiciuyum}


- Safari yüzde değerleri desteklemiyor. **
- Safari/Webkit tabanlı tarayıcılar her 4 köşeye sadece bir tanımı
kabul ediyor.**
- Safari/webkit tarayıcıları (/) ile ayrılan değerleri kabul etmiyor.
Bu gibi değerleri kullanmak için aşağıdaki gibi bir atama yapmalıyız.
Elips şeklinde sonuçlar elde etmke için (/) ayracı kullanılır.

CSS kodu;

{% highlight css %}
border-radius:  40px/10px;
{% endhighlight %}

**Uygulama**

<s>Bugünkü durumda border-radius tanımı tek bir tanımlama olarak
atanmamaktadır, farklı tarayıcılar ön ek kullanarak bu özelliği
desteklemektedir. Webkit tabanlı tarayıcılar(Safari ve Google Chrome)
için -webkit, Gecko tabanlı(Firefox) tarayıcılar için -moz ön ekleri
kullanılmaktadır. </s>

<s>Bu durum bazen çok uzun kodlar üretmemize neden oluyor. İleride umarım
bu durum düzelir. </s>

İlk örneğimizi yapalım

{% highlight css %}
div#kutu {
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    background: #F00;
    margin-bottom: 10px;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][100]

İkinci örnek

{% highlight css %}
div#kutu{
    width: 400px;
    padding: 20px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #F00;
    white-space:pre
 }
 {% endhighlight %}

Örneği görmek için [tıklayınız.][1]

![][2]

[http://muddledramblings.com/table-of-css3-border-radius-compliance][] 
ve [http://shapeshed.com/examples/border-radius/][] adresindeki örnekler
inceleyerek bu özellik ile neler yapabileceğimizi görebiliriz.

## İnternet Explorer Desteği

Yukarıda anlattığımız tanımları maalesef İnternet Explorer
desteklememektedir, daha ön görünümü yayınlanan ie9'da desteklediğini
açıkladı.

İnternet explorer için çözüm üreten bir çok javascript kodu mevcut, ben
burada sizlere belli başlılarının linklerini vereceğim ve ufak bilgiler
vereceğim.

[DD roundies][]

Bu script güzel çalışıyor. Bir çok farklı durumlar için güzel bir çözüm
üretiyor. Herhangi bir javascript kütüphanesine ihtiyacı yoktur. CSS3
border-radius özelliğini destekleyenler için bu özelliği
desteklemeyenler için ise javascript kodunu ekleyerek bize güzel bir
çözüm üretir. Köşe yumuşatması güzel

[Curvy Corners][] ve [jQuery Plugin Curvy Corners][]

Diğer güzel çözüm önerilerinden ikiside bu scriptlerdir. Köşe
yumuşatması güzel. Background resimleri ile iyi çalışıyor, ancak CSS3
ile olan uygulamalarda sorun çıkarıyor. CSS3 border-radius destekleyen
tarayıcı kontrolü yapmıyorlar ve fazladan yüklenmeye neden oluyorlar.

[Nifty Corners][] ve [jquery Corner][]

Köşe yumuşatması güzel değil. Yuvarlak kenar için üretilen kodda
gereksiz bir çok eleman var. Pek önerilebilecek bir çözüm değil.

[HTML Remix][]

Bu çözümün en güzel yanı yuvarlak kenar için ekstra kod yazmaya gerek
olmaması. Yazdığımız border-radius değerini alıp desteklemeyen
tarayıcılara göre kod yazıyor. Script tanımını css kodu içerisinden
yapıyoruz.

{% highlight css %}
.curved {
    border-radius:10px;
    behavior:url(border-radius.htc);
}
{% endhighlight %}

Köşe yumuşatması güzeldir. 4.8 kb'lık dosya boyutu ile çok cazip boyuta
sahip.

[css3pie][]

CSS 3'ü desteklemeyen tarayıcılar için komple bir çözüm üreten bu script
İnternet Explorer için üretilen çözümlerden birisidir. Tek sorunu
bütünleşik bir çözüm sunduğu için dosya boyutunun biraz büyük olmasıdır.
Köşe yumuşaklığı güzel. CSS3'ü destekleyen tarayıcılar için css kodunu
desteklemeyen tarayıcılar için ise script kodunu uyguluyor olması güzel.

## Sonuç

border-radius tanımını destekleyen tarayıcılar açısından bir sorunumuz
yoktur. Sorunumuz desteği sağlamayan ie ile dir. 

Javascript ile ürettiğimiz çözümler normal tanımın yerini tutmayacaktır
hiç bir zaman. Sayfa içerisinden bir çok elemana yuvarlak kenar
uygulandığında ie için üretilen çözüm sayfanın fazladan yavaşlamasına
neden olacaktır. 

Bir elemana yuvarlak kenar ve gölge uygulandığında ie için üretilen bir
çok çözümde bazı sorunlar ile karşılaşılabilir. Bu gibi durumlarda resim
ile çözüm üretmeniz tavsiye olunur. 

İE için üretilen çözümler için yukarıda yazdıklarım kendi gördüklerim ve
internette araştırıp gördüklerim bilgilerden derlemedir. Bu
değerlendirmelere sizin kendi uygulamalarınızdaki sonuçlarıda ekleyerek
bir scripti seçmenizi öneririm. 

Bence en güzeli eğer tercih imkanınız varsa destekleyen tarayıcılar için
kodu yazmak desteklemeyenler için olduğu gibi bırakmak (twitter.com
sitesinde olduğu gibi.)

## Kaynaklar

-   [http://webdesignernotebook.com/css/an-ode-to-border-radius/][]
-   [http://leaverou.me/2009/02/css3-border-radius-today/][]
-   [http://www.the-art-of-web.com/css/border-radius/][] (border-radius)
-   [http://www.css3.info/preview/rounded-border/][]
-   [http://24ways.org/2006/rounded-corner-boxes-the-css3-way][]
-   [http://www.css3.info/border-radius-apple-vs-mozilla/][]
-   [http://woork.blogspot.com/2009/08/css3-rounded-corners-for-every-browser.html][]
-   [http://www.smileycat.com/miaow/archives/000044.php][] (tüm makalelerin listesi)
-   [http://www.netzgesta.de/corner/][] (javascript)
-   [http://www.curvycorners.net/demos/][] (javascript)
-   [http://www.html.it/articoli/niftycube/index.html][] (javascript)
-   [http://www.dillerdesign.com/experiment/DD_roundies/#animation][] (javascript)
-   [http://www.w3.org/TR/css3-background/#border-radius][]
-   [http://www.htmlremix.com/css/curved-corner-border-radius-cross-browser][] (javascript)
-   [http://doctype.com/having-trouble-styling-cross-browser-buttons-input-submit][] (sorunlar)
-   [http://muddledramblings.com/table-of-css3-border-radius-compliance][](taraycı destek tablosu)
-   [http://stackoverflow.com/questions/2687804/emulating-css3-border-radius-and-box-shadow-in-ie7-8][]

  [tıklayınız.]: /dokumanlar/border_radius1.html
  [100]: /images/border_radius_1.jpg
  [1]: /dokumanlar/border_radius2.html
  [2]: /images/border_radius_2.jpg
  [http://muddledramblings.com/table-of-css3-border-radius-compliance]: http://muddledramblings.com/table-of-css3-border-radius-compliance
    "http://muddledramblings.com/table-of-css3-border-radius-compliance"
  [http://shapeshed.com/examples/border-radius/]: http://shapeshed.com/examples/border-radius/
  [DD roundies]: http://dillerdesign.com/experiment/DD_roundies/#
    "DD roundies"
  [Curvy Corners]: http://www.curvycorners.net/
  [jQuery Plugin Curvy Corners]: http://blue-anvil.com/jquerycurvycorners/test.html
  [Nifty Corners]: http://www.html.it/articoli/niftycube/index.html
  [jquery Corner]: http://www.methvin.com/jquery/jq-corner-demo.html
  [HTML Remix]: http://www.htmlremix.com/
  [css3pie]: http://css3pie.com/ "css3pie"
  [http://webdesignernotebook.com/css/an-ode-to-border-radius/]: http://webdesignernotebook.com/css/an-ode-to-border-radius/
    "http://webdesignernotebook.com/css/an-ode-to-border-radius/"
  [http://leaverou.me/2009/02/css3-border-radius-today/]: http://leaverou.me/2009/02/css3-border-radius-today/
    "http://leaverou.me/2009/02/css3-border-radius-today/"
  [http://www.the-art-of-web.com/css/border-radius/]: http://www.the-art-of-web.com/css/border-radius/
    "http://www.the-art-of-web.com/css/border-radius/"
  [http://www.css3.info/preview/rounded-border/]: http://www.css3.info/preview/rounded-border/http://www.css3.info/preview/rounded-border/
    "http://www.css3.info/preview/rounded-border/"
  [http://24ways.org/2006/rounded-corner-boxes-the-css3-way]: http://24ways.org/2006/rounded-corner-boxes-the-css3-way
    "http://24ways.org/2006/rounded-corner-boxes-the-css3-way"
  [http://www.css3.info/border-radius-apple-vs-mozilla/]: http://www.css3.info/border-radius-apple-vs-mozilla/
    "http://www.css3.info/border-radius-apple-vs-mozilla/"
  [http://woork.blogspot.com/2009/08/css3-rounded-corners-for-every-browser.html]: http://woork.blogspot.com/2009/08/css3-rounded-corners-for-every-browser.html
    "http://woork.blogspot.com/2009/08/css3-rounded-corners-for-every-browser.html"
  [http://www.smileycat.com/miaow/archives/000044.php]: http://www.smileycat.com/miaow/archives/000044.php
    "http://www.smileycat.com/miaow/archives/000044.php"
  [http://www.netzgesta.de/corner/]: http://www.netzgesta.de/corner/
    "http://www.netzgesta.de/corner/"
  [http://www.curvycorners.net/demos/]: http://www.curvycorners.net/demos/
    "http://www.curvycorners.net/demos/"
  [http://www.html.it/articoli/niftycube/index.html]: http://www.html.it/articoli/niftycube/index.html
    "http://www.html.it/articoli/niftycube/index.html"
  [http://www.dillerdesign.com/experiment/DD_roundies/#animation]: http://www.dillerdesign.com/experiment/DD_roundies/#animation
    "http://www.dillerdesign.com/experiment/DD_roundies/#animation"
  [http://www.w3.org/TR/css3-background/#border-radius]: http://www.w3.org/TR/css3-background/#border-radius
    "http://www.w3.org/TR/css3-background/#border-radius"
  [http://www.htmlremix.com/css/curved-corner-border-radius-cross-browser]: http://www.htmlremix.com/css/curved-corner-border-radius-cross-browser
    "http://www.htmlremix.com/css/curved-corner-border-radius-cross-browser"
  [http://doctype.com/having-trouble-styling-cross-browser-buttons-input-submit]: http://doctype.com/having-trouble-styling-cross-browser-buttons-input-submit
    "http://doctype.com/having-trouble-styling-cross-browser-buttons-input-submit"
  [http://stackoverflow.com/questions/2687804/emulating-css3-border-radius-and-box-shadow-in-ie7-8]: http://stackoverflow.com/questions/2687804/emulating-css3-border-radius-and-box-shadow-in-ie7-8
    "http://stackoverflow.com/questions/2687804/emulating-css3-border-radius-and-box-shadow-in-ie7-8"


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png