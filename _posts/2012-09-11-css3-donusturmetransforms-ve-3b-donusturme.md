---
layout: post
title: CSS3 Dönüştürme(Transforms) ve 3B Dönüştürme
Date: 2012-09-11 13:50
Category: Haberler
tags: [css3, matrix3d, perspective, rotate3d, rotateX, rotateY, rotateZ, scale3d, scaleZ, transform-style, translate3d, translateZ]
---

CSS3 Dönüştürme özelliği 2 ve 3 boyutlu dönüştürme özelliği olmak üzere
ikiye ayrılıyor. Daha önce [2 Boyutlu Dönüştürme özelliklerini][]
incelemiştik. Bu makalede 3 Boyutlu Dönüştürme işlemlerini
inceleyeceğiz. Bu konular daha çok örnek yapıp pekiştirilecek konular,
ancak ilk başta teorisini öğrenmek gerektiğini düşünüyorum.

2 boyutlu dönüştürme özelliklerine göre daha az tarayıcı desteğine sahip
olan bu özellikler, zamanla daha çok yer kazanacaktır.

3 Boyutlu dönüşüm özelliklerinin tanımına girmeden biraz web’de 3.
boyutu biraz irdelemekte yarar var. Web mecrasın hep 2 boyutlu düzlem
üzerinde çalıştı. Tüm özellikler iki boyutlu düzlem için geliştirildi
genişlik, yükseklik tanımları örnek olarak verilebilir. Bir başka örnek
konumlandırma özelliklerinden verilebilir. Konumlandırma tanımları
sol(left), sağ(right), üst(top) ve alt(bottom) olarak kullanılmaktadır.

z-index tanımında anlattığımız gibi 3. boyut kavramında girdiğimizde
z-ekseni tanımını göz önünde bulundurmamız gerekiyor.

![z-index][50]

Şeklinde çizdiğimiz z-ekseni bize 3. boyutu göstermektedir.

3 Boyutlu Dönüşüm özelliklerini inceleyelim.

Dönüşüm Stili(transform-style) Özelliği
---------------------------------------

3 Boyutlu dönüşüm özelliklerinden ilk inceleyeceğimiz özellik dönüşüm
stili olarak tanımlayacağımız özellik transform-style. Eğer dönüşüm
uygulanan elemanın alt elemanlarınada 3. boyutu uygulayacak iseniz bu
özelliğin preserve-3d tanımını  kullanmalısınız. Bunun anlamı alt
elemanlar kapsayıcı eleman gibi 3. boyutu davransın demektir.

**Yapısı :** transform-style: keyword;\\
**Aldığı Değerler :** [ flat | preserve-3d ]\\
**Başlangıç değeri:** flat\\
**Uygulanabilen elementler:** Blok-level ve satıriçi elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi }

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/p24Mk/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

[http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-transform-style.html][]


## 3 Boyutlu Dönüşüm Fonksiyonları

2 Boyutlu dönüşümü tanımlarken kullandığımız transform özelliği 3
Boyutlu tanımlarımız içinde geçerlidir. Farklı olan 3. boyutun
fonksiyonlarıdır.

-   perspective
-   translateX, translateY, translateZ, translate3d
-   matrix3d
-   rotateX, rotateY, rotateZ, rotate3d
-   scaleX, scaleY, scaleZ, scale3d

2 Boyutlu dönüştürme özelliklerine z-ekseni eklenmiş özelliklerdir.

## Bakış Açısı(perspective)

Perspective özelliği elemanların görüntüsünün bakış açısını
değiştirmek(derinlik hissi) için kullanılır. perspective özelliği 3
Boyutlu Dönüştürme işlemleri için önemli bir özelliktir. perspective
özelliği kolay kullanımı vardır, tabi karışık yapılı  alanlardaki
kullanımı hariç.

> “Perspektif, [nesnelerin][] görünümünü 3 boyutlu olarak düz bir yüzeyde,
yani 2 boyuta indirgeyerek, göstermeye yarayan bir iz düşüm tekniğidir.
Yani, teknik bir çizimdir. Perspektif çizimde, nesnenin gözlemciye göre
olan pozisyonunun ve uzaklığının etkileri esas alınarak çizim yapılır.
Söz konusu çizimler gözlemcide, biçim ve orantı bakımından, renklerden
bağımsız olarak, 3 boyutlu bir gerçeklik izlenimi yaratır.” -
[wikipedia.org][]

{% highlight css %}
div {
    transform: perspective(derinlik);
}
{% endhighlight %}


Derinlik değeri bir uzunluğu(px olarak) veya none değerlerini alır.

**Yapısı :** transform: perspective(derinlik)
**Aldığı Değerler :**none | <uzunluk>
**Başlangıç değeri:** none
**Uygulanabilen elementler:** Blok-level ve satır içi elemanlar
**Kalıtsallık:** Yok
{: .deneme_class }

Derinlik hissini anlamak için aşağıdaki örneklere bir göz atın. İlk
kodumuz normal perspective ataması olmayan bir kutu

{% highlight css %}
transform: translate(0px, 0px, -200px);
{% endhighlight %}


İkinci sağdaki kutu ise perspective uygulanmış kutu;

{% highlight css %}
transform: perspective(500px) translate3d(0px, 0px, -200px);
{% endhighlight %}


<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/Cjwcw/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Bir örnek daha yaparak ile pekiştirelim.

soldaki kutu

{% highlight css %}
transform: rotatey(30deg);
{% endhighlight %}


sağdaki kutu

{% highlight css %}
transform: perspective(300px) rotatey(30deg);
{% endhighlight %}


<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/HECGV/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Perspektifi anlamak için güzel bir örnek ryancollins.me/?p=993

## translateX, translateY, translateZ, translate3d

translateX ve translateY tanımlarını dha önce 2 boyutlu Dönüştürme
özelliklerinde incelemiştik. Şimdi de translateZ ve üçünü bir arada
kullanabildiğimiz translate3d kullanımlarını göreceğiz.

translateZ değeri z-ekseninde elemanı hareket ettirmeye yarar. Yüzde
değeri almaz.

{% highlight css %}
div {
    transform: translateZ(uzunluk);
}
{% endhighlight %}


Uzunluk değeri bir sayıdır. Perspective özelliğini anlatırken verdiğimiz
ilk örnekte bu özelliğe değinmiştik.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/Cjwcw/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

translate3d tanımı 3 ekseninde aynı anda tanımını sağlamamızı sağlayan
bir kısaltmadır.

{% highlight css %}
translate3d(x, y, z)
{% endhighlight %}


Bir örnek kod yazarsak

{% highlight css %}
 div {
    transform: translate3d(20px, 60px, 30px);
}
{% endhighlight %}


<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/kTTm3/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Görünümü konumlandırma ile sağlayabilirdik ancak buradaki izometrik
hissi transitions ve animasyon uygulamalarında daha çok ön plana
çıkacaktır.

## scaleX, scaleY, scaleZ, scale3d

2 boyutlu dönüştürmede bahsettiğimiz gibi scale özelliği elemanları
büyütmek veya küçültmek için kullanılır. scaleX ve scaleY değerlerini
daha önce görmüştük. Burada scaleZ ve scale3d özelliklerini
tanımlayacağız.

**- scaleZ**

{% highlight css %}
div {
    transform: scaleZ(number);
}
{% endhighlight %}

scaleZ tanımı biraz farklı davranır. Dönüşüm uygulanmış elemanlarda
büyültme veya küçültme işlemi 3 boyutlu eksen yapmak mümkün değil.
Burada yaptığımız daha çok 3 boyutlu eksende 2 boyutlu görüntü elde
etmektir. Bundan dolayı scaleZ değeri translateZ, rotate veya
perspective değerlerinin bir ile kullanmak daha anlamlı olacaktır.

{% highlight css %}
div {
    transform: perspective(500px) scaleZ(2) rotateX(45deg);
}
{% endhighlight %}


<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/6Uaet/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Yıldız savaşları filmindeki yazılara benzer bir görüntü elde ediyoruz.

**- scale3d**

scale3d özelliği tüm scale özelliklerini bir tanımda toplayan bir
kısaltmadır.

{% highlight css %}
scale3d(x, y, z)
{% endhighlight %}


**rotateX, rotateY, rotateZ ve rotate3d**

[İki boyutlu düzlemde rotate değeri][2 Boyutlu Dönüştürme özelliklerini]tek tanım ile yetinilirken 3 boyutlu düzlemde 3 adet
rotate tanımı yapmak gerekir. Bundan dolayı rotateX, rotateY ve rotateZ
tanımları 3 boyutlu düzlemde döndürme işlemleri için tanımlanmıştır.

Tanımların sayısı üçe çıksa da tanımlar 2 boyutlu tanım ile aynıdır.
Negatif değer alabilirler.

**- rotateX**

{% highlight css %}
rotateX(<açı>)
{% endhighlight %}


rotateX tanımı ile verilen açı değeri kadar saat yönünde elemanı
x-ekseninde çevirmeye yarar.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/mNFnR/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Yatay eksende elemanımız orta noktasından 45 derece saat yönünde
eğilmiştir.

**- rotateY**

{% highlight css %}
rotateY(<açı>)
{% endhighlight %}


rotateY tanımı ile verilen açı değeri kadar saat yönünde elemanı
y-ekseninde çevirmeye yarar.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/ScQL3/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Dikey eksende elemanımız orta noktasından 45 derece saat yönünde
eğilmiştir.

**- rotateZ**

{% highlight css %}
rotateZ(<açı>)
{% endhighlight %}


rotateZ tanımı ile verilen açı değeri kadar saat yönünde elemanı
z-ekseninde çevirmeye yarar.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/PQBcR/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

z-ekseninde elemanımız orta noktasından 45 derece saat yönünde
eğilmiştir.

**- rotate3d**

{% highlight css %}
rotate3d(<rakam>, <rakam>, <rakam>,<açı>)
{% endhighlight %}


rotate3d özelliği saat yönünde 3 boyutlu döndürme işlemi yapar. Son
değer açı değerini verirken ilk üç değer vektörel tabanlı rakamlar
olarak tanımlanır. Başlangıç değeri 0,0,0 olarak tanımlıdır. Rakamlar
[Kartezyen koordinat sistemi][]’ne göre değer alır. Ben bu rakamlara pek
takılmayalım diyorum, çevrimiçi araçlar ile bu işi halledebiliriz gibime
geliyor.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/ubkKv/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**İpucu:**Japon makaledeki örnek hoşuma gitti göz atmakta yarar var.
[http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-rotatexyz.html][]

**matrix3d**

matrix3d fonksiyonu tek elden 3 boyutlu dönüşüm yapmamıza olanak
sağlamak amacıyla oluşturulan 4x4 bir matrisi olan 16 değerli bir
özelliktir.

Bana biraz karışık gelen bir durum. Programatik olarak 3 boyutlu
dönüşümleri yapmaya yarayan bir fonksiyon olarak tanımlayabilirim.

{% highlight css %}
div {
transform: matrix3d( m01,m02,m03,m04, m05,m06,m07,m08,m09,m10,m11,m12, m13,m14,m15,m16);
}
{% endhighlight %}

Bu araç ile matrix3d daha kullanışlı oluyor.

## perspective-origin

perspektif özelliği ile birlikte kullanılır, elemanın görüntülenen bakış
açısının orijin noktasını değiştirmemizi sağlar. Elemanın perspektif
görüntüsünün açısını değiştirir. x ve y değerleri alır. Başlangıç değeri
kapsayıcının orta noktası olan 50% 50%’dir.

![perspective-origin][1]

x-değeri sol(left), sağ(right) ve orta(center) değerlerini alır.
y-değeri üst(top), alt(bottom) ve orta(center) değerleri alır. Yüzde
değerleri de alır.

Bu durumu şöyle düşünebiliriz; bir kameramız olsun baktığımız alana
farklı bir açıdan bakmak istediğimizde perspektif orijinimizi
değiştiriyoruz.

![perspective-origin][2]

[http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-perspective-origin.html][]

## transform-origin

Dönüşümün orjin olarak nereye referans alacağını tanımlamamızı sağlar.

2 boyutlu dönüştürmede bahsettiğimiz bu özellik 3 boyutlu dönüşümde
benzer bir kullanımı var ek olarak z-ekseni tanımıda eklenmektedir.

{% highlight css %}
transform-origin: x,y,z;
{% endhighlight %}


z tanımı z-eksenindeki mesafeyi belirtmemiz için kullanılmaktadır.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/s2vE2/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

[http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-transform-origin.html][]

## backface-visibility

Bu özellik 3 boyutlu elemanın arkasının gösterilip gösterilmeyeceğini
belirliyor. visibility özelliği gibi işliyor. hidden ve visible
değerlerini alıyor.

[Carousel örneğinde][] bu özelliği daha iyi anlarız.

{% highlight css %}
figure{
    -webkit-backface-visibility:visible;
    -moz-backface-visibility:visible;
    -ms-backface-visibility:visible;
    -o-backface-visibility:visible;
    backface-visibility:visible;
}
{% endhighlight %}

![Carousel örneğinde][3]

{% highlight css %}
figure{
    -webkit-backface-visibility:hidden;
    -moz-backface-visibility:hidden;
    -ms-backface-visibility:hidden;
    -o-backface-visibility:hidden;
    backface-visibility:hidden;
}
{% endhighlight %}

![Carousel örneğinde][4]

Yukarıda görüldüğü gibi ilk resimde elemanların arkası görünürken ikinci
resimde gizlenmiştir.

## Tarayıcı Desteği

Yeni nesil tarayıcıların dahi son zamanlarda desteklediği 3 boyutlu
dönüşüm özellikleri, sessiz tarayıcı güncellemeleri sayesinde Firefox,
Chrome’un tam desteğine kavuştu. Aynı şeyi İnternet Explorer için
söyleyemiyoruz maalesef. İnternet Explorer henüz yayınlanmayan 10.
sürümünden itibaren destekliyor.

**Tarayıcı Destekleme Listesi**
Firefox 12+ (-moz- öneki ile)
Chrome 12+ (-webkit- öneki ile)
Safari 5.1+ (-webkit- öneki ile)
Opera desteklemiyor
İnternet Explorer 10+ (-ms- öneki ile)
Mobil Tarayıcılar
iOS Safari 3.2+ (-webkit- öneki ile)
Opera Mobile desteklemiyor
Android Browser 3.0+ (-webkit- öneki ile)
{: .tarayiciuyum }

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**12+ (-webkit)**|**10+ (-ms)**|**12+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**3.0+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Kaynaklar

-   [http://www.w3.org/TR/css3-3d-transforms/][]
-   [http://www.queness.com/post/11403/embrace-the-awesome-css-3d-transforms][]
-   [http://coding.smashingmagazine.com/2012/01/06/adventures-in-the-third-dimension-css-3-d-transforms/][]
-   http://www.webstuffshare.com/2012/04/showing-product-information-with-css3-3d-transform/
-   http://www.addyosmani.com/resources/3dstack/
-   [http://www.webkit.org/blog/386/3d-transforms/][]
-   [http://24ways.org/2010/intro-to-css-3d-transforms][]
-   http://sandbox.webpro.nl/css3/3d-transforms-interactive-demo.html
-   [http://css3.bradshawenterprises.com/demos/cubecarousel.php][]
-   [http://www.developerdrive.com/2012/04/transforming-elements-in-3d-using-css3/][]
-   [http://www.queness.com/post/11493/create-css-3d-transform-card-flip-gallery][]
-   [http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/][]
-   [http://www.netmagazine.com/features/20-stunning-examples-css-3d-transforms][]
-   [http://www.caniuse.com/#feat=transforms3d][]
-   [http://bartaz.github.com/meetjs/css3d-summit/#/title][]
-   [http://www.developerdrive.com/2012/05/how-to-make-smooth-transitions-with-css3/][]
-   [http://tutorialzine.com/2012/02/apple-like-login-form/][] (apple gibi form)
-   [http://www.inserthtml.com/2012/03/css-3d-transforms/][]
-   [http://www.inserthtml.com/2011/09/css3-3d-transforms-keyframes/][]
-   developer.mozilla.org/en-US/CSS/transform-function#translate3d%28%29
-   blogs.msdn.com/b/ie/archive/2012/02/02/css3-3d-transforms-in-ie10.aspx
-   http://ie.microsoft.com/testdrive/Graphics/hands-on-css3/hands-on_3d-transforms.htm
-   [http://msdn.microsoft.com/en-us/library/ie/hh673529%28v=vs.85%29.aspx][]
-   [http://www.found.co.uk/css3-3d-transforms-the-future-of-user-experience/][] (kullanıcı deneyimlerine etkisi hakkında)
-   [http://www.html5-css3.fr/css3/transformations-3d-css3][] (fransızca)
-   [http://www.inserthtml.com/2012/03/css-3d-transforms/][]
-   [http://www.satine.org/research/webkit/snowleopard/snowstack.html][]
-   [http://unformedbuilding.com/articles/learn-about-css-transforms/](http://unformedbuilding.com/articles/learn-about-css-transforms/)
-   developer.mozilla.org/en-US/CSS/transform-function
-   [http://desandro.github.com/3dtransforms/docs/perspective.html][]
-   [http://caniuse.com/#feat=transforms3d][]

  [2 Boyutlu Dönüştürme özelliklerini]: http://fatihhayrioglu.com/css3-donusturme-ozellikleritransforms-ve-2b-donusturme/
  [50]: https://lh5.googleusercontent.com/FqOtVg0Y4BZkUpShrSu1wFcWannArGxh5edEiR-5YkTQQJbH_wPcaUFB5rb7AgazIxwKBc89hLsxobUZad1lQ9LuznL0eg9F_KXIdAMQEsGxFioDs0o
  [http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-transform-style.html]: http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-transform-style.html
  [nesnelerin]: http://tr.wikipedia.org/wiki/Nesne
  [wikipedia.org]: http://wikipedia.org/
  [Kartezyen koordinat sistemi]: http://tr.wikipedia.org/wiki/Kartezyen_koordinat_sistemi
  [http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-rotatexyz.html]: http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-rotatexyz.html
  [1]: https://lh3.googleusercontent.com/X06_E_pJOi7N5Ks5qP3b3PmAWRO6WGhSsmUGiqsvSUNi1E0Hy8uhCGnb1I9fG9XGSxypWDToKaS8UckIB8rCeL1_cu-b8eq4qMFMofq0lS3y8PsGd8M
  [2]: https://lh3.googleusercontent.com/JKKV66baIfWahnoL-PwOvPBdkfaZ1NQbwfhDbJK0OY5GvrlHY1Ae46Is4LO5NKNCeAKXIFAxNBbVonVpLiLqzfXDh_RRzQOo424GIX1BdhHfG3Z-l6U
  [http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-perspective-origin.html]: http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-perspective-origin.html
  [http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-transform-origin.html]: http://unformedbuilding.com/demo/2012/css-transforms/3d/3d-transform-origin.html
  [Carousel örneğinde]: http://desandro.github.com/3dtransforms/examples/carousel-01.html
  [3]: https://lh5.googleusercontent.com/-_u7c5fYsGBuRvvC7sZcjcFv7cPrnxHdzIK_I9BSS1YAo-iCG7kqLabPr6nH70Ddy3gSBIf7qXQOcxWOOVTD84gOunmLxBwm_HOWZNFw1_1PKP2bF4I
  [4]: https://lh6.googleusercontent.com/4_txr7vPaKubClq_bmUHbO8e15bHpHPC9echzaXq1Qeu3DwwTIT4Gs060WD0dtA0rLNIOf0aI_yiglZJsJcYAO8JEWh2MdbuTPTSUf3Oo9taTgazbI8
  [http://www.w3.org/TR/css3-3d-transforms/]: http://www.w3.org/TR/css3-3d-transforms/
  [http://www.queness.com/post/11403/embrace-the-awesome-css-3d-transforms]: http://www.queness.com/post/11403/embrace-the-awesome-css-3d-transforms
  [http://coding.smashingmagazine.com/2012/01/06/adventures-in-the-third-dimension-css-3-d-transforms/]: http://coding.smashingmagazine.com/2012/01/06/adventures-in-the-third-dimension-css-3-d-transforms/
  [http://www.webkit.org/blog/386/3d-transforms/]: http://www.webkit.org/blog/386/3d-transforms/
  [http://24ways.org/2010/intro-to-css-3d-transforms]: http://24ways.org/2010/intro-to-css-3d-transforms
  [http://2012.beercamp.com/]: http://2012.beercamp.com/
  [http://css3.bradshawenterprises.com/demos/cubecarousel.php]: http://css3.bradshawenterprises.com/demos/cubecarousel.php
  [http://www.developerdrive.com/2012/04/transforming-elements-in-3d-using-css3/]: http://www.developerdrive.com/2012/04/transforming-elements-in-3d-using-css3/
  [http://www.queness.com/post/11493/create-css-3d-transform-card-flip-gallery]: http://www.queness.com/post/11493/create-css-3d-transform-card-flip-gallery
  [http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/]: http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/
  [http://www.netmagazine.com/features/20-stunning-examples-css-3d-transforms]: http://www.netmagazine.com/features/20-stunning-examples-css-3d-transforms
  [http://www.caniuse.com/#feat=transforms3d]: http://www.caniuse.com/#feat=transforms3d
  [http://bartaz.github.com/meetjs/css3d-summit/#/title]: http://bartaz.github.com/meetjs/css3d-summit/#/title
  [http://www.developerdrive.com/2012/05/how-to-make-smooth-transitions-with-css3/]: http://www.developerdrive.com/2012/05/how-to-make-smooth-transitions-with-css3/
  [http://tutorialzine.com/2012/02/apple-like-login-form/]: http://tutorialzine.com/2012/02/apple-like-login-form/
  [http://www.inserthtml.com/2012/03/css-3d-transforms/]: http://www.inserthtml.com/2012/03/css-3d-transforms/
  [http://www.inserthtml.com/2011/09/css3-3d-transforms-keyframes/]: http://www.inserthtml.com/2011/09/css3-3d-transforms-keyframes/
  [http://msdn.microsoft.com/en-us/library/ie/hh673529%28v=vs.85%29.aspx]: http://msdn.microsoft.com/en-us/library/ie/hh673529%28v=vs.85%29.aspx
  [http://www.found.co.uk/css3-3d-transforms-the-future-of-user-experience/]: http://www.found.co.uk/css3-3d-transforms-the-future-of-user-experience/
  [http://www.html5-css3.fr/css3/transformations-3d-css3]: http://www.html5-css3.fr/css3/transformations-3d-css3
  [http://www.satine.org/research/webkit/snowleopard/snowstack.html]: http://www.satine.org/research/webkit/snowleopard/snowstack.html
  [http://desandro.github.com/3dtransforms/docs/perspective.html]: http://desandro.github.com/3dtransforms/docs/perspective.html
  [http://caniuse.com/#feat=transforms3d]: http://caniuse.com/#feat=transforms3d

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png