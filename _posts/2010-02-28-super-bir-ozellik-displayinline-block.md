---
layout: post
title: Süper bir özellik display:inline-block
Date: 2010-02-28 21:28
Category: CSS, XHTML
tags: [dikey-ortalama, display, inline-block, Kutu-Modeli, kutular, vertical-align]
---

Alışkanlıklar kolay kolay bırakılmıyor. Zamanında
**display:inline-block** özelliğini Firefox desteklemediği(Firefox
desteği 3. sürümden itibaren geldi) için kullanmıyordum. Hala orada
kalmışım hiç kullanmıyorum bu özelliği, şimdi bir projede gerekti ve
kullandım. Çok hoşuma gitti. Tekrar bir hatırlayalım
**display:inline-block** özelliği hibrit bir özelliktir. Bir yanı satır
içi davranırken bir yanı blok davranır.

display:inline-block tanımı yapılmış elemanlar satır için akış içinde
satır içi eleman gibi davranırken, elemente genişlik, yükseklik ve dikey
margin değerleri tanımlanırsa satır içinde blok-level özelliğine
bürünür.

**display:inline-block** elementler çevresindeki elementlere ve satır
içi kutu içeriklerine göre farklı davranışlar gösterir.

Durumu daha iyi anlamak için genel bir örnek yapalım. 3 paraftan oluşan
bir içeriğimiz olsun ve bu içerikteki belli bir kısmı paragraf etiketi
içine alalım ve bunlara sırası ile **display:block**, **display:inline**
ve **display:inline-block** tanımları atayalım

{% highlight html %}
<div id="denemeBir"> Lorem ipsum dolor sit amet... <p>Praesent id nunc eros. Integer mauris orci, venenatis ac tempor ut, gravida ac diam. </p> Pellentesque...</div>
<div id="denemeIki">Quisque at venenatis nulla...<p>Nam fermentum porttitor hendrerit.</p> Mauris ante nulla..</div>
<div id="denemeUc"> Sed urna neque...<p>Sed est lacus, laoreet at malesuada quis, convallis ut nibh.</p> Sed dapibus...</div>
{% endhighlight %}

CSS kodu

{% highlight css %}
div{
	border: 1px solid #000;
	margin: 10px 0;
}

p{
	border: 1px dotted #000;
}

div#denemeBir p{
	background-color: #FF0;
	display: block;
	text-align: center;
	width: 50px;
}

div#denemeIki p{
	background-color: #0FF;
	display: inline;
	text-align: center;
	width: 50px;
}

div#denemeUc p{
	background-color: #F0F;
	display: inline-block;
	text-align: center;
	width: 50px;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][100]

Aynı yapıdaki elemanların display özelliğine sırası ile block, inline ve
inline-block tanımlarını atadık.

**display:block uygulanan paragraf** kendisine atanan **width,
text-align:center** özelliğini yorumlamış ve blok-level bir element
olarak sonrasına bir boşluk bırakmıştır.

**display:inline tanımı yapılmış paragraf** kendisine atanan **width,
text-align:center**tanımlarını görmemiştir.

**display:inline-block uygulanmış paragraf**ise kendisine uygulanan
**width ve text-align:center** tanımlarını görmüş ama bir blok-level
element gibi sonrasına bir boşluk bırakmamıştır. Tam bir hibrit özellik
göstermiştir.

**display:inline-block**tanımını daha iyi anlamak için nerelerde
kullanırız neler yapabiliriz buna bakalım.

## Float kullanmadan display:inline-block ile elemanları yan yana dizmek

{% highlight html %}
<div id="menu">
	<a href="">Ana Sayfa</a>
	<a href="">Ürünler</a>
	<a href="">İletişim</a>
</div>
{% endhighlight %}

CSS kodumuzu yazalım;

{% highlight css %}
#menu a{
  width:150px;
  height:50px;
  display: inline-block;
  margin:0;
  padding:5px;
  color: #1B1B1B;
  background-color: #E2E2E2;
  text-decoration: none;
  border-top:5px solid #999
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

![][2]

Bu kod ile biz öğeleri yan yana dizeriz. Normalde hiç bir tanım yapmasak
da bu elemanlar yan yana dizilecekti, ancak bu elemanlar arasındaki
mesafeyi ayarlıyamıyacaktık. Hem satır içi eleman gibi yan yana dursun
hemde genişlik, yükseklik ve margin tanımlarını uygulayalım istersek
display:inline-block tanımı yapmalıyız.

## Dikeyde ortalama

Float uygulanmış elemanların dikeyde ortalamak çok zordur, aksine
display:inline-block uyguladığımız elemanları sadece vertical-align
özelliği kullanarak dikey ortalama yaparız. Dikeyde ortalama aynı
seviyedeki elemanlar arasında olduğunu unutmamak lazım.

Bir örnek yapalım. Yan yana dizilmiş üç kutu hazırlayalım ve bunları
kapsayıcı katmana göre dikey olarak üstte, ortada ve altta hizalayalım.

{% highlight html %}
<div class="anaKapsul">
    <div class="solKutu">Sol</div>
    <div class="ortaKutu">Orta</div>
    <div class="sagKutu">Sağ</div>
</div>
{% endhighlight %}

CSS kodumuzu yazalım.

{% highlight css %}
.anaKapsul{
	border: 1px gray solid;
	padding: 5px;
	text-align: center;
}
.solKutu{
	background-color: lightblue;
	display: inline-block;
	height: 200px;
	vertical-align: middle;
	width: 200px;
}
.ortaKutu{
	background-color: yellow;
	display: inline-block;
	height: 150px;
	vertical-align: middle;
	width: 200px;
}
.sagKutu{
	background-color: gray;
	display: inline-block;
	height: 100px;
	vertical-align: bottom;
	width: 200px;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][3]

![][4]

Firefox, Safari, Google Chrome, Opera ve İE8'de bu görüntüyü elde
ederiz. Ancak ie7 ve ie6'da durum böyle değildir.

Bu tarayıcılarda aynı sonucu elde etmek için bu tarayıcılar için bu
elemnalara **display:inline ve zoom:1** tanımı yapmalıyız. Bunun için
[tüm tarayıcılar için düzeltmeler][] kısmındaki kodlardan
yararlanacağım.

{% highlight css %}
*:first-child+html div.anaKapsul div{
	display: inline;
	zoom: 1;
}
* html div.anaKapsul div{
	display: inline;
	zoom: 1;
}
{% endhighlight %}

Bu kodları ekledikten sonra sorunumuz düzeldi.

## Kaynaklar

-   [http://www.search-this.com/2008/08/28/lets-all-get-inline-in-a-block-in-a-block/][]
-   [http://foohack.com/2007/11/cross-browser-support-for-inline-block-styling/][]
-   [http://helephant.com/2009/08/a-great-big-welcome-to-inline-block/][]
-   [http://blog.mozilla.com/webdev/2009/02/20/cross-browser-inline-block/][]
-   http://kempwire.com/browsers/firefox-2-does-not-support-inline-block.html
-   [http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/][]
-   [http://www.quirksmode.org/css/display.html#t03][]
-   [http://www.sitepoint.com/forums/showthread.php?t=596130][] (sorun )

  [tıklayınız.]: /dokumanlar/display_inline_block.html
  [100]: /images/display_inline_block.jpg
    "display_inline_block"
  [1]: /dokumanlar/display_inline_block2.html
  [2]: /images/display_inline_block2.gif
    "display_inline_block2"
  [3]: /dokumanlar/display_inline_block3.html
  [4]: /images/display_inline_block3.gif
    "display_inline_block3"
  [tüm tarayıcılar için düzeltmeler]: http://www.fatihhayrioglu.com/tum-tarayicilar-icin-css-duzeltmelerihack/
  [http://www.search-this.com/2008/08/28/lets-all-get-inline-in-a-block-in-a-block/]: http://www.search-this.com/2008/08/28/lets-all-get-inline-in-a-block-in-a-block/
  [http://foohack.com/2007/11/cross-browser-support-for-inline-block-styling/]: http://foohack.com/2007/11/cross-browser-support-for-inline-block-styling/
  [http://helephant.com/2009/08/a-great-big-welcome-to-inline-block/]: http://helephant.com/2009/08/a-great-big-welcome-to-inline-block/
  [http://blog.mozilla.com/webdev/2009/02/20/cross-browser-inline-block/]: http://blog.mozilla.com/webdev/2009/02/20/cross-browser-inline-block/
  [http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/]: http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/
  [http://www.quirksmode.org/css/display.html#t03]: http://www.quirksmode.org/css/display.html#t03
  [http://www.sitepoint.com/forums/showthread.php?t=596130]: http://www.sitepoint.com/forums/showthread.php?t=596130
