---
layout: post
title: CSS3 Dönüştürme Özellikleri(Transforms) ve 2B Dönüştürme
Date: 2012-05-19 15:35
Category: CSS, XHTML
tags: [css3, dönüştürme, matrix, rotate, scale, skew, transfor-origin, transform, translate]
---

Webkit ekibinin ilk olarak 2008 yılında CSS’e kattığı bu özellik daha
sonra w3c tarafından standartlara girdi. HTML elemanlarını döndürmek,
boyutlandırmak, eğmek gibi eylemleri gerçekleştirmemize yarıyor. 2d
Transform özelliği 3d’ye göre tarayıcı desteği konusunda çok avantajlı.
2B Dönüştürme özelliklerini ie9+ desteklerken, 3B Dönüştürme
özelliklerini henüz betası çıkmış olan ie10+ destekliyor.

![][100]

Bu makalede CSS3 transform 2 Boyutlu Dönüştürme konusunu inceleyeceğiz.
3 Boyutlu Dönüştürme konusuna daha sonra değineceğim.

## 2 Boyutlu Dönüştürme(2d Transform)

CSS 2d Transform özelliği  iki boyutlu düzende elemanları dönüştürmeye
olanak sağlıyor. Tabi böyle tanımlama yaparak anlamak zor en kolayı
özellikleri tanımlayıp örnek yapmak.

Dönüştürme tanımları 3 bölümde inceleniyor.

-   transform Özelliği
-   transform-origin özelliği
-   Dönüştürme fonksiyonları (transform özelliği değerleri – translate,
    rotate, scale ve skew)

Aslında transform özelliği ve değerleri bir kabul edilirse iki adet
genel tanımımız var. Bu özellikler bize çok büyük kolaylık sağlıyor.
Dönüştürme özellikleri desteğini her tarayıcı kendi ön eki ile
sağlamaktadır. Ben burada tanımlamalarımı standart olan özellik ile
göstereceğim, tabi örneklerde tüm tarayıcı kodlarını kullanacağım.

## transform Özelliği

transform özelliği **none**, bir veya daha fazla transform değeri alır.

Genel kullanımı


**Yapısı :** transform: none | &lt;dönüştürme-fonksiyonu&gt;[&lt;dönüştürme-fonksiyonu&gt;]*\\
**Aldığı Değerler :** [ none | matrix | translte | translateX | translateY | scale | scaleX | scaleY | rotate | skew | skewX | skewY ]\\
**Başlangıç değeri:** none\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi }

Aldığı değerleri dönüşüm fonksiyonları bölümünde detaylı bir şekilde
inceleyeceğiz.

{% highlight css %}
p{
	transform: translate(-150px, 75px);
}
{% endhighlight %}

Uygulandığı paragrafı kendi orijin noktasına göre 75px sağa ve 150px
aşağıya öteleyecektir. Göreceli bir tanımda(örn: % gibi) referans olarak
elemanın kapsayıcısını değil kendi orijinini alacaktır.

## transform-origin Özelliği

Dönüşümün orjin olarak nereye referans alacağını tanımlamamızı sağlar.

**Yapısı :** transform-origin: deger deger\\
**Aldığı Değerler :** [ [ [ &lt;yüzde&gt; | &lt;değer&gt; | left | center | right ] [ &lt;yüzde&gt; |&lt;değer&gt;|top|center|bottom]?]&lt;değer&gt;?]|[[[left|center| right ] || [top | center | bottom ] ] &lt;değer&gt;? ]\\
**Başlangıç değeri:** 50% 50%\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi }

Başlangıç değeri olarak 50% 50% gelir. Bu elemanın tam ortasını
gösterir.(Bundan dolayı elemanı ölçeklendirdiğimizde veya
döndürdüğümüzde elmanın ortasında göre işlem yapar.) Üstten 50% soldan
50%. Biz bu değeri değiştirebiliyoruz. Değer olarak CSS değerleri
tanımlanabilir. İlk değeri X ekseninden mesafesini, ikinci değer Y
sekseninden mesafesini tanımlar.

{% highlight css %}
p{
	transform-origin:0, 0;
}
{% endhighlight %}

Yüzde değerlerinde referans olarak elemanın kutu alanı alınır.

Daha iyi anlamak için aşağıda da göreceğimiz döndürme(rotate)
uygulayarak görelim.

{% highlight css %}
transform: rotate(-10deg);
{% endhighlight %}

![][1]

Yukarıda görsel olarak verilmiş örnekte kırmızı olanlar normal halleri,
gri olanlar ise dönüşüm uygulanmış hallerini göstermektedir. İlk eleman
başlangıç değeri olan **center center** uygulanmıştır, bu nedenle eleman
mutlak konumuna göre hareket etmiştir. İkinci eleman **left center**
tanımlanmıştır, bu nedenle eleman sol tarafın dikey ortasına göre
dönmüştür. En son örnekte 100% 50% tanımı yapılmıştır, bu nedenle bu
örnek sağ tarafa dualı dikeyde ortalı bir şekilde döndürülmüştür.

## Dönüşüm Fonksiyonları

Dönüşüm fonksiyonlar translate(değiştir - dönüştür), rotate(döndürme),
scale(ölçeklendirme) ve skew(eğme) olmak üzere 4 adettir. Birde rotate
hariç bunların X ve Y için ayrı tanımlarıda var. Aşağıda detaylı
incelemede göreceğiz.

**translate(değiştir - dönüştür)**

CSS3 sayesinde javascript veya flash’a gerek kalmadan animasyon veya
dönüştürme işlemlerini yapabiliyoruz. Biz burada bir CSS3 transform
özelliği ile nasıl sayfa içindeki elemanları taşıyacağımızı göreceğiz.

translate değeri elemanı bir noktadan başka bir noktaya taşımamızı
sağlıyor.

{% highlight css %}
translate (x, y)
{% endhighlight %}

Bu sayede biz elemanı orijinal konumundan x-ekseninde soldan mesafesi ve
y-ekseninde üstten mesafesini tanımlayarak taşıyabiliyoruz. Basit bir
kullanımı vardır.

Bir örnek yapalım;

{% highlight css %}
#tasinan{
 	transform:translate(150px,100px);
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/s6hZX/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**- Eksene Özgü Yöntemler**

Elemanları sadece bir eksen hareket ettirmek için translateX ve
translateY özelliklerini kullanabiliriz.

Yukarıdaki örneği

{% highlight css %}
#tasinan{
 	transform:translateX(150px);
}
{% endhighlight %}

aynı şekilde y ekseninde hareket için

{% highlight css %}
#tasinan{
 	transform:translateY(100px);
}
{% endhighlight %}

şeklinde uygulanabilir.

**- Animasyon Yardımlı Örnek**

İleride göreceğimiz transition özelliği yardımı ile ufak bir kod ile
animasyon oluşturabiliriz. Hem translate özelliğini daha iyi anlamış
oluruz.

{% highlight css %}
#tasinan{
 	transition: all 5s;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/AF5hS/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Fare imlecinin mavi alan üzerine getirdiğimizde animasyonlu bir şekilde
kutu translate komutu ile atadığımız yeni yerine hareket edecektir.
İleride CSS3 transition konusunda daha detaylı göreceğiz.

**rotate(Döndürme)**

rotate değeri yardımı ile sabit bir noktaya göre elemanı belirlenen açı
ile döndürebiliyoruz. Bu sabit nokta transform-origin tanımı ile
değiştirilebiliyor.

{% highlight css %}
rotate(<açı>)
{% endhighlight %}

Bir örnek ile konuyu daha iyi anlayalım.

{% highlight css %}
.deneme{
 	transform:rotate(45deg);
}
{% endhighlight %}

Yukarıdaki kod ile tanımlanan HTML elemanını 45 (deg-degrees)derece
döndürdük. Saat yönüne çevirdiğimiz gibi, eksi değer vererek saat
yönünün tersinede döndürme işlemi yapabiliyoruz.

Döndürme tanımlarında 4 adet değer var. deg(açı), grad(gradyen),
rad(radyen) ve turn.

turn değerini biraz daha inceleyelim. turn değeri dairenin etrafını
gösteriyor.

{% highlight css %}
.deneme{
 	transform:rotate(.5trun);
}
{% endhighlight %}

0.5 olarakta tanımlanabilecek bu değer elemanımızı yarım daire kadar
döndürecektir.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/cyFrq/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**- Animasyon Yardımlı Örnek**

Bir örnekte animasyonlu yapalım.

{% highlight css %}
.deneme{
 	transition: all 0.5s;
}

.deneme:hover{    
	transform:rotate(45deg);
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/aCKL9/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Yukarıdaki örnektede görüldüğü gibi birçok güzel uygulama bu yöntem ile
yapılabilir.

**scale(Ölçekleme)**

scale değeri yardımı ile belirlene elemanın X ve Y ekseninde ölçeğini
büyütebilir veya küçültebiliriz.

3 adet ölçeklendirme fonksiyonu vardır.

-   scale(&lt;sayı&gt;[, &lt;sayı&gt;])
-   scaleX(&lt;sayı&gt;)
-   scaleY(&lt;sayı&gt;)

Bir örnek ile konuyu daha iyi anlayalım.

{% highlight css %}
.denemeBuyut{
 	transform:scale(1.5);
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/eCb2C/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Daha iyi bir anlatım için örnekte iki kutu kullandım birisi kutunun
normal hali(mavi kutu), diğer ise kutunun ölçeklenmiş hali(kırmızı
kutu). Altta kalan kutunun görünmesi için üstteki kutuya saydamlık
verdim.

**- Eksene Özgü Yöntemler**

Elemanları sadece bir eksen ölçeklemek için scaleX ve scaleY
özelliklerini kullanabiliriz.

Yukarıdaki örneği

{% highlight css %}
.denemeBuyut{
 	transform:scaleX(1.5);
}
{% endhighlight %}

aynı şekilde y ekseninde hareket için

{% highlight css %}
.denemeBuyut{
 	transform:scaleY(2);
}
{% endhighlight %}

şeklinde uygulanabilir.

**- Animasyon Yardımlı Örnek**

Bir tanede animasyonlu bir örnek yapalım.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/J7n6w/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**skew(eğme)**

skew ile eleman veya eleman gruplarına X ve Y eksenin için belirli
açılar verilerek eğiklik ve yamukluk elde edebiliyoruz. 3 adet skew
tanımımız vardır;

-   skew(<açı> [, <açı>])
-   skewX(<açı>)
-   skewY(<açı>)

Eğiklik tanımı yaparken tek tanım yapabildiğimiz gibi iki tanım ile x ve
y için farklı açı değerleride belirleyebiliyoruz.

Bir örnek yapalım.

{% highlight css %}
.deneme{
 	transform: skew(10deg, 20deg);
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/fRpmS/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**- Eksene Özgü Yöntemler**

Elemanları sadece bir eksen eğmek için skewX ve skewY özelliklerini
kullanabiliriz.

Yukarıdaki örneği

{% highlight css %}
.denemeBuyut{
	transform:skewX(10deg);
}
{% endhighlight %}

aynı şekilde y ekseninde eğiklik için

{% highlight css %}
.denemeBuyut{
 	transform:skewY(20deg);
}
{% endhighlight %}

şeklinde uygulanabilir.

**- Animasyon Yardımlı Örnek**

Bir tanede animasyonlu bir örnek yapalım.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/bGunN/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Çoklu Değer Kullanımı

Dönüşüm fonksiyonları yukarıda tanımladığımız gibi tek tek
tanımlanabildiği gibi kısaltma olarak arada boşluk bırakılarak
birliktede tanımlanabilir.

{% highlight css %}
div {
 	transform: translate(10px 30%) scale(2.0) rotate(45deg) skew(5deg, 20deg);
}
{% endhighlight %}

Böylece kodlamamızda bayağı bir kısaltmaya gitmiş oluruz. Çoklu tanım
uygulandığında bu fonksiyonlar soldan sağa doğru sırası ile
uygulanacaktır.

## Matris Sistemi

[w3c’nin geliştirmekte olduğu matris sistemi][] ile transform tanımı
yapımı karmaşık bir yapıya sahiptir. Muhtemelen kullanmayacağımız bir
yapı yada belirli araçlar ile oluşturulacak bir kod yapısına sahip.
Dönüştürme fonksiyonlarının her biri matriste kendine bir yer edinerek
oluşturulan değerdir. Örneğin scale(1.5,1.2) tanımı matris olarak
aşağıdaki şekilde gösterilir

1.5    |    0    |    0
0    |    1.2    |    0
0    |    0    |    1

Bu yazımı css koduna çevirirsek;

{% highlight css %}
transform: matrix(1.5, 0, 0, 1.2, 0, 0)
{% endhighlight %}

Matris değerleri hakkında daha fazla bilgi için
[http://www.w3.org/TR/SVG/coords.html#EstablishingANewUserSpace][]
inceleyin.

## Çevrimiçi Dönüşüm Aracı

CS3 bize birçok kolaylık sağlamaktadır. Bununla birlikte kodlama biraz
karmaşık hal almaktadır. Bu karmaşayı engellemek amacı ile de çeşitli
araçlar geliştirilmektedir. CSS3 2B dönüştürme için
[http://westciv.com/tools/transforms/index.html][]  sayfasındaki araç
kullanılabilir. Bize bir çok bakımdan kolaylık sağlayan bir araç,
denemeye değer.

**Tarayıcı Destekleme Listesi**
Firefox 3.5+ (-moz- öneki ile)
Chrome 10+ (-webkit- öneki ile)
Safari 3.2+ (-webkit- öneki ile)
Opera 10.6 (-o- öneki ile)
İnternet Explorer 9+ (-ms- öneki ile)
**Mobil Tarayıcılar**
iOS Safari 3.2+ (-webkit- öneki ile)
Opera Mobile 11+ (-o- öneki ile)
Android Browser 2.1+ (-webkit- öneki ile)
{: .tarayiciuyum }

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**10+ (-webkit)**|**9+ (-ms)**|**3.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

ie6-8 için çözüm [http://www.useragentman.com/IETransformsTranslator/][]
sitesindeki araç ile üretilmiştir. Dönüştürme kadar esnek olmasada çok
acil ihtiyaçlar için kullanılabilir.

## Sonuç

CSS3 ile web sayfası öğelerinin görünümünü değiştirebileceğimizi gördük.
Daha önce javascript yardımı ile yaptığımız bu işleri artık CSS3 yardımı
ile yapacağız. CSS3 ile yeni gelen bu özellikleri bazı sorunları olsa da
zamanla bu sorunlarında aşılması ile çok büyük bir kolaylıklar
sağlayacaktır.

## Kaynaklar

-   [http://www.vanseodesign.com/css/transforms/][]
-   [http://gazpo.com/2011/02/css3-transforms/][] (güzel)
-   [http://www.westciv.com/tools/transforms/index.html][] (çevrimiçi araç)
-   [http://www.w3.org/TR/css3-2d-transforms/][]
-   [http://24ways.org/2009/going-nuts-with-css-transitions][]
-   [http://www.the-art-of-web.com/css/css-animation/][]
-   [http://css3.bradshawenterprises.com/][]
-   [https://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/][]
-   [http://www.shayhowe.com/tutorial/css3-animated-owl-tutorial/][]
-   [http://www.useragentman.com/IETransformsTranslator/][] (ie için çözüm)
-   [http://www.standardista.com/css3-transforms][]
-   [http://www.webdesigncreare.co.uk/blog/html-css/css3-transforms.html][]
-   http://professionalaspnet.com/archive/2011/03/17/IE9-Supports-CSS3-Transforms_2100_.aspx
-   [http://www.sitepoint.com/a-primer-on-css3-transforms/][]
-   [https://developer.mozilla.org/en/css/-moz-transform][]
-   [http://blog.typekit.com/2011/01/25/case-study-getting-hardboiled-with-css3-2d-transforms/][]
-   [http://css3.bradshawenterprises.com/transforms/][]
-   [http://doctype.com/javascript-image-zoom-css3-transforms-calculate-origin-example][]
-   [http://designshack.co.uk/articles/css/achieving-multi-step-animations-with-css-transitions/][]
-   [http://www.impressivewebs.com/css3-transitions-without-hover/][] (güzel animasyon olmuş)
-   [http://speckyboy.com/2011/08/15/how-to-build-a-fully-functional-css3-only-content-slider][]
-   [http://www.impressivewebs.com/replace-flash-with-css3-animation/][]
-   [http://www.netmagazine.com/tutorials/masterclass-css-animations][]
-   [http://coding.smashingmagazine.com/2011/09/14/the-guide-to-css-animation-principles-and-examples/][]
-   [http://tympanus.net/codrops/2011/10/24/creative-css3-animation-menus/][] (çok güzle menü örnekleri)
-   [http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/css3-transitions-and-transforms-from-scratch/][]
-   [http://www.dynamicdrive.com/style/csslibrary/item/spinning_icons_using_css3_transform/][]
-   [http://designshack.net/articles/css/mastering-mouse-enter-and-exit-events-with-css-transitions/][]
-   [http://www.splashnology.com/article/cross-browser-2d-transformations-with-animation/1827/][]
-   [http://www.htmlgoodies.com/html5/css/learn-css3-from-a-z-2d-transformations.html#fbid=CH7CpzZeM2i][]
-   [http://johnbhall.com/iphone-4s/][] iphone 4s örnek
-   [http://www.dynamicdrive.com/style/csslibrary/item/spinning_icons_using_css3_transform/][] Basit döndirme örneği
-   [http://css3.bradshawenterprises.com/transforms/][]
-   http://css3playground.com/slinky.php
-   [http://coding.smashingmagazine.com/2010/04/28/css3-solutions-for-internet-explorer/][] rotate ie için
-   [http://www.impressivewebs.com/alternative-units-css3-rotate-transforms/][] (farklı değerler)
-   [http://www.html5rocks.com/en/tutorials/webgl/webgl_transforms/][]
-   [http://ricostacruz.com/jquery.transit/][] (jquery yardımı ile test)
-   [http://www.blackinci.com/css/59-css3-ile-2ci-boyuta-gecis-transform.html][]
-   [http://www.developerdrive.com/2012/02/moving-web-page-elements-using-the-css3-translate-transform/][]
-   [http://www.developerdrive.com/2012/02/scaling-web-page-elements-using-the-css3-scale-transform/][]
-   [http://www.developerdrive.com/2012/02/skewing-web-page-elements-using-the-css3-skew-transform/][]
-   [http://www.developerdrive.com/2012/05/rotating-web-page-elements-using-the-css3-rotate-transform/][]
-   [http://www.webdirections.org/blog/2d-transforms-in-css3/][]
-   [http://www.impressivewebs.com/alternative-units-css3-rotate-transforms/][] (rotate değerleri)
-   [http://msdn.microsoft.com/en-us/magazine/gg709742.aspx][]
-   [http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/][]
-   [http://www.alsacreations.com/article/lire/1418-css3-transformations-2d.html][] (yazıdan sonra)

  [100]: https://lh5.googleusercontent.com/JcPwBvaI5FirsLOn05KPDROBP9kw5Dxl9Mt2TSekP1JgLmmxrkn9diiKqmt0XrVg2BnkV2vp-Dh0RxNBtSV-LsW84Dc1H02k5SIGYxiEo8A4kmNUyr0
  [1]: https://lh5.googleusercontent.com/ACGi7LXZqwCP3pSpRyK21hQojElg4DfwhpwEQDziAYMe4YDZTuphSOoF6W2Ib1Y-vbcOwpYcGxGy7wIrE0YD87EYXetxAvqed9fu1VKCMFS3g1RQi1c
  [w3c’nin geliştirmekte olduğu matris sistemi]: http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined
  [http://www.w3.org/TR/SVG/coords.html#EstablishingANewUserSpace]: http://www.w3.org/TR/SVG/coords.html#EstablishingANewUserSpace
  [http://westciv.com/tools/transforms/index.html]: http://westciv.com/tools/transforms/index.html
  [http://www.useragentman.com/IETransformsTranslator/]: http://www.useragentman.com/IETransformsTranslator/
  [http://www.vanseodesign.com/css/transforms/]: http://www.vanseodesign.com/css/transforms/
  [http://gazpo.com/2011/02/css3-transforms/]: http://gazpo.com/2011/02/css3-transforms/
  [http://www.westciv.com/tools/transforms/index.html]: http://www.westciv.com/tools/transforms/index.html
  [http://www.w3.org/TR/css3-2d-transforms/]: http://www.w3.org/TR/css3-2d-transforms/
  [http://24ways.org/2009/going-nuts-with-css-transitions]: http://24ways.org/2009/going-nuts-with-css-transitions
  [http://www.the-art-of-web.com/css/css-animation/]: http://www.the-art-of-web.com/css/css-animation/
  [http://css3.bradshawenterprises.com/]: http://css3.bradshawenterprises.com/
  [https://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/]: https://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/
  [http://www.shayhowe.com/tutorial/css3-animated-owl-tutorial/]: http://www.shayhowe.com/tutorial/css3-animated-owl-tutorial/
  [http://www.standardista.com/css3-transforms]: http://www.standardista.com/css3-transforms
  [http://www.webdesigncreare.co.uk/blog/html-css/css3-transforms.html]: http://www.webdesigncreare.co.uk/blog/html-css/css3-transforms.html
  [http://www.sitepoint.com/a-primer-on-css3-transforms/]: http://www.sitepoint.com/a-primer-on-css3-transforms/
  [https://developer.mozilla.org/en/css/-moz-transform]: https://developer.mozilla.org/en/css/-moz-transform
  [http://blog.typekit.com/2011/01/25/case-study-getting-hardboiled-with-css3-2d-transforms/]: http://blog.typekit.com/2011/01/25/case-study-getting-hardboiled-with-css3-2d-transforms/
  [http://css3.bradshawenterprises.com/transforms/]: http://css3.bradshawenterprises.com/transforms/
  [http://doctype.com/javascript-image-zoom-css3-transforms-calculate-origin-example]: http://doctype.com/javascript-image-zoom-css3-transforms-calculate-origin-example
  [http://designshack.co.uk/articles/css/achieving-multi-step-animations-with-css-transitions/]: http://designshack.co.uk/articles/css/achieving-multi-step-animations-with-css-transitions/
  [http://www.impressivewebs.com/css3-transitions-without-hover/]: http://www.impressivewebs.com/css3-transitions-without-hover/
  [http://speckyboy.com/2011/08/15/how-to-build-a-fully-functional-css3-only-content-slider]: http://speckyboy.com/2011/08/15/how-to-build-a-fully-functional-css3-only-content-slider
  [http://www.impressivewebs.com/replace-flash-with-css3-animation/]: http://www.impressivewebs.com/replace-flash-with-css3-animation/
  [http://www.netmagazine.com/tutorials/masterclass-css-animations]: http://www.netmagazine.com/tutorials/masterclass-css-animations
  [http://coding.smashingmagazine.com/2011/09/14/the-guide-to-css-animation-principles-and-examples/]: http://coding.smashingmagazine.com/2011/09/14/the-guide-to-css-animation-principles-and-examples/
  [http://tympanus.net/codrops/2011/10/24/creative-css3-animation-menus/]: http://tympanus.net/codrops/2011/10/24/creative-css3-animation-menus/
  [http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/css3-transitions-and-transforms-from-scratch/]: http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/css3-transitions-and-transforms-from-scratch/
  [http://www.dynamicdrive.com/style/csslibrary/item/spinning_icons_using_css3_transform/]: http://www.dynamicdrive.com/style/csslibrary/item/spinning_icons_using_css3_transform/
  [http://designshack.net/articles/css/mastering-mouse-enter-and-exit-events-with-css-transitions/]: http://designshack.net/articles/css/mastering-mouse-enter-and-exit-events-with-css-transitions/
  [http://www.splashnology.com/article/cross-browser-2d-transformations-with-animation/1827/]: http://www.splashnology.com/article/cross-browser-2d-transformations-with-animation/1827/
  [http://www.htmlgoodies.com/html5/css/learn-css3-from-a-z-2d-transformations.html#fbid=CH7CpzZeM2i]: http://www.htmlgoodies.com/html5/css/learn-css3-from-a-z-2d-transformations.html#fbid=CH7CpzZeM2i
  [http://johnbhall.com/iphone-4s/]: http://johnbhall.com/iphone-4s/
  [http://coding.smashingmagazine.com/2010/04/28/css3-solutions-for-internet-explorer/]: http://coding.smashingmagazine.com/2010/04/28/css3-solutions-for-internet-explorer/
  [http://www.impressivewebs.com/alternative-units-css3-rotate-transforms/]: http://www.impressivewebs.com/alternative-units-css3-rotate-transforms/
  [http://www.html5rocks.com/en/tutorials/webgl/webgl_transforms/]: http://www.html5rocks.com/en/tutorials/webgl/webgl_transforms/
  [http://ricostacruz.com/jquery.transit/]: http://ricostacruz.com/jquery.transit/
  [http://www.blackinci.com/css/59-css3-ile-2ci-boyuta-gecis-transform.html]: http://www.blackinci.com/css/59-css3-ile-2ci-boyuta-gecis-transform.html
  [http://www.developerdrive.com/2012/02/moving-web-page-elements-using-the-css3-translate-transform/]: http://www.developerdrive.com/2012/02/moving-web-page-elements-using-the-css3-translate-transform/
  [http://www.developerdrive.com/2012/02/scaling-web-page-elements-using-the-css3-scale-transform/]: http://www.developerdrive.com/2012/02/scaling-web-page-elements-using-the-css3-scale-transform/
  [http://www.developerdrive.com/2012/02/skewing-web-page-elements-using-the-css3-skew-transform/]: http://www.developerdrive.com/2012/02/skewing-web-page-elements-using-the-css3-skew-transform/
  [http://www.developerdrive.com/2012/05/rotating-web-page-elements-using-the-css3-rotate-transform/]: http://www.developerdrive.com/2012/05/rotating-web-page-elements-using-the-css3-rotate-transform/
  [http://www.webdirections.org/blog/2d-transforms-in-css3/]: http://www.webdirections.org/blog/2d-transforms-in-css3/
  [http://msdn.microsoft.com/en-us/magazine/gg709742.aspx]: http://msdn.microsoft.com/en-us/magazine/gg709742.aspx
  [http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/]: http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
  [http://www.alsacreations.com/article/lire/1418-css3-transformations-2d.html]: http://www.alsacreations.com/article/lire/1418-css3-transformations-2d.html

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png