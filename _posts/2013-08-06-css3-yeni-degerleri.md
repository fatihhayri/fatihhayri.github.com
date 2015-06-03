---
layout: post
title: CSS3 Yeni Değerleri
Date: 2013-08-06 15:10
Category: CSS
tags: CSS, CSS3, CSS-Değerleri, ch, rem, vw, vh, vmin, vmax, rgba, hsl, hsla, turn, calc(), counter(), attr(), cycle()
---

CSS3 özelliklerini anlatan makalelerden sonra, yeni CSS3 değerleri hakkında bir makale yazmam gerektiğini fark ettim..

CSS tanımları 3 ana yapıdan oluşmaktadır. Seçiciler, özellikler ve değerler. CSS3 ile gelen yeni seçicileri [CSS3 Seçicileri](http://fatihhayrioglu.com/css3-secicileri/) makalesinde anlatmıştık. CSS3 özelliklerini CSS Dersleri altındaki CSS3 başlığı altında anlattık. Sıra geldi CSS3 ile gelen yeni değerlere.

Bir liste olarak sıralarsak;

* Anahtar Kelime Değeri
    * initial Değeri
* Göreceli Değerler
    * ch
    * rem
* Bakış Alanı Değerleri (View Port)
    * vw
    * vh
    * vmin
    * vmax
* Renk Değerleri
    * [rgba renk değeri](http://fatihhayrioglu.com/css3-rgba-renk-tanimi/)
    * hsl renk değeri
    * hsla renk değeri
* Açı Değeri
    * turn
* Fonksiyonel Değerler
    * [calc()](http://fatihhayrioglu.com/css3-calc-degeri/)
    * counter()
    * attr()
    * cycle()

Değerleri CSS3 ile birlikte geldi. Tek tek incelersek.

## Anahtar Kelime Değeri

**initial Değeri**

initial değeri atanan elemanın belirlenen özelliğinin başlangıç değerine(User Agent) döndürmek için kullanılır.

Tarayıcılar HTML elemanları yorumlarken belirli başlangıç değerleri kabul ederek yorumlarlar. User Agent Stilleri olarak adlandırılan bu özelliklere sonradan tanımlanan CSS özellikleri ezer. Her tarayıcının kendine özel UA Stillleri vardır. CSS3 ile gelen initial değeri ile başlangıç değerine döndürme imkanımız oluyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%;overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/wAJel?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Örnekte görüldüğü gibi kapsayıcı **div** elemanına atanan kırmızı rengi ilk paragraf için **initial** değeri ile tarayıcının ilk kabul değerine(siyah) döndürülmüştür.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+**|*desteklemiyor*|**19+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**1.0+**|**destekliyor**|**-**|
{: .tarayici-uyumi}

## Göreceli Değerler

**ch değeri**

1ch değeri sıfır "0" karakter kutusunun genişliğine eş değerdir.  Her karakterin sabit genişlikte olduğu monospace yazı tiplerine uygun bir tanım.

![ch değeri](https://lh6.googleusercontent.com/u37sIJEYI4ncu1kqWM8HXZP225cmrkmBu_sQdzxo1jt2R--qIHZbVx6g8zGO525qeA0ChiTPGpia0yTqBCcAIQMuozLurd3tH1x1ZZm2VOTtYgfflqgf6MMWZA)

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%;overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/xcGsn?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Örnekte de görüldüğü gibi her yazı tipinin sıfır karakteri genişli farklıdır.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|*desteklemiyor*|*9+*|*+*|
{: .tarayici-uyumi}

**rem Değeri**

Tanımlanan yazı tipine göre  baz alınan değerdir. **em** değerine benzerdir. **em** değeri elemana tanımlanan yazı tipini baz alırken **rem** değeri her zaman kök(root) elementinin yazı tipini baz alır. HTML bir dokümanda kök eleman her zaman html’dir. font-size:1em tanımı html elemanı yazı tipi boyutuna eşit olacaktır.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**8.0+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## Bakış Alanı Değerleri (View Port)

Yüzdeli genişlik kullanımı şu an sıkıntı olmasa da gelecekte sıkıntılara neden olacaktır. Yüzde değerleri kapsayıcının genişliğine göre hareket eder. Bunun yenire kapsayıcı elemanın sabit genişliğine bağlı olmayan, göreceli bir değere bağlı olan değerler kullanım açısından daha mantıklıdır. Bu değerlerde vw, vh, vmin ve vmax değerleridir.

viewport’un kısaltması v olarak belirlenmiş, vw genişliği(width-w) ve yüksekliği(height-h) olarak belirlenen değerler, Bakış alanına göre göreceli olarak genişliğe ve yüksekliğe göre belirlenir.

Bakış Alanı = Tarayıcı Penceresi Boyutu = Window Nesnesi

Bakış Alanının %1 değeri bu üçüne de eşittir. Örneğin Bakış alanı 50cm ise 1vw = 0.5cm’dir.

Bir elemanın yüksekliğinin yarısını ifade etmek için

{% highlight css %}
div{
	height:50vh;
}
{% endhighlight %}

tanımını yapmamız yeterli olacaktır.

Genelde biz tasarımlarımızı kullanıcının bakış alanına sığdırmak isteriz. Daha önceleri bunu javascript ile yapıyorduk.

İlk başta bakış alanını belirleyip sonra sayfa boyutu değiştiğinde buna göre hareket sağlar. Kullanıcı tarayıcı penceresinin boyutu ile oynadığında hesaplamalar tekrar yapılır. vw, vh, vmin ve vmax değerleri bakış alanına göre göreceli değerlerdir.

1vw = Bakış Alanı genişliğinin %1

1vh = Bakış Alanı yüksekliğinin %1

1vmin = 1vw veya 1vh hangisi küçük ise ona eşdeğer

1vmax = 1vw veya 1vh hangisi büyük ise ona eşdeğer

Bakış Alanı değerleri ekranın satır uzunluğunu okunabilir seviyede tutmazı olanak sağlar. Metinlerin ekranı farklı araçlarda optimum sığmasına olanak sağlarlar.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**26+ (-webkit)**|**9.0+ (kısmen)**|**19+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|*desteklemiyor*|**6.0 (kısmen)**|**36**|
{: .tarayici-uyumi}

## Renk Değerleri

**rgba() Değeri**

Daha önce bu değeri anlatmıştım. [CSS3 RGBA Renk Tanımı](http://fatihhayrioglu.com/css3-rgba-renk-tanimi/)

**hsl ve hsla Değerleri**

HSL(Hue, Saturation ve Lightness) Hue = Renk, Saturation = Koyuluk, Lightness =Işık Miktarı anlamındadır. En geniş renk spektrumudur. Hem RGB, hem de CMYK renk dünyasını içine alır.

Hue(renk) renk çemberinde 0 ile 360 arasındaki renklere karşılık gelir. 0 kırmızı, 120 yeşil ve 240 mavidir. Saturation yani koyuluk, gri gölge ve tam renk arasında bir yüzde değerdir. Aynı şekilde Lightness yani ışık için de beyaz ve siyah arasında bir yüzde değer girilir. alıntı: [http://www.yakuter.com/css3-color-renk-modulu/](http://www.yakuter.com/css3-color-renk-modulu/)

Örnek :

{% highlight css %}
.div {
	color:hsl(240,%50,%50)
}
{% endhighlight %}

hsla değeride rgb ve rgba benzeridir. Renk değerine opaklık değeri eklenmiş halidir.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**9+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## Açı Değeri

**turn Değeri**

Turn değeri bir daireyi ifade eder. Animasyon işlerin çok işe yarar bir değerdir. 5turn değeri elemanın 5 kere döneceğini tanımlar.

* 90deg = 100grad = 0.25turn ≈ 1.5708rad
* 180deg = 200grad = 0.5turn ≈ 3.1416rad
* -90deg = -100grad = -0.25turn ≈ -1.5708rad

CSS tanımlarında derece ve turn değer tek değerdir, bundan dolayı kullanılırken derece ile yapışık kullanılmalıdır, araya boşluk bırakılmamalıdır.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**9.0+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|*desteklemiyor*|*desteklemiyor*|*desteklemiyor*|
{: .tarayici-uyumi}

## Fonsiyonel Değerler

**calc() Değeri**

Daha önce bu konuya değinmiştim. [CSS3 calc() değeri](http://fatihhayrioglu.com/css3-calc-degeri/)

**cycle() Değeri**

Yeni değerlerden biride cycle() değeri. cycle() değeri iç içe elemanlar arasında aynı özelliğin farklı değerlerini sırası ile uygulamak için kullanılır.

{% highlight css %}
li > ul {
	list-style-type: cycle(disk, circle, square, box);
}
{% endhighlight %}

5 adet iç içe liste elemanlarına sırası ile disk, circle, square, box işaretleri uygulanır. Şu an hiç bir tarayıcı desteklememektedir.

**attr() Değeri**

attr() fonksiyon değeri seçilen elemanın bir özniteliğini(attribute) almak ve css içinde kullanmak için kullanılır. Genelde sözde elemanlarda kullanılır.

Bu fonksiyonu kullanarak basit bir tooltip uygulaması yapabiliriz.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%;overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/uDsHn?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Örneği incelediğimizde html içinde bağlantıya **data-title** özniteliği olarak eklenen bilgilendirme **:hover** durumunda elemanın sözde :after sınıfı ile görünür hale getirilmektedir.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**8.0+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

Basit kullanımı tüm tarayıcılarda varken CSS3 ile birlikte gelen yenilikleri henüz destekleyen tarayıcı yok. Daha önce sadece **content** özelliği desteği varken CSS3 ile tüm özellik desteği geldi, CSS2’de sadece **string** döndürürken CSS3 ile string dışında değer döndürme desteği de geldi.

**counter() Değeri**

counter() değeri CSS ile sıralı rakamlar oluşturmamızı sağlar.

İç içe listelerde kitap indekslerindeki gibi bir rakamlandırma bu özellik sayesinde yapabiliyoruz.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/Inmdu?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Kodu [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Counters?redirectlocale=en-US&redirectslug=CSS%2FCounters)’de gördüm. Değeri tanımlamak için güzel bir örnek.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**8.0+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|*desteklemiyor*|*desteklemiyor*|*desteklemiyor*|
{: .tarayici-uyumi}


## Kaynaklar

* [http://www.w3.org/TR/css3-values/](http://www.w3.org/TR/css3-values/) (tümü)
* [http://www.standardista.com/css3/css-values-lengths-times-frequenc-angles/](http://www.standardista.com/css3/css-values-lengths-times-frequenc-angles/) (tümü)
* [https://developer.mozilla.org/en-US/docs/CSS/length](https://developer.mozilla.org/en-US/docs/CSS/length) (tümü)
* [http://www.kabayview.com/css3/whats-new-in-css3-values-and-units](http://www.kabayview.com/css3/whats-new-in-css3-values-and-units) (tümü)
* [http://html.nhndesign.com/html_guide/?appendix/CSS3_Values___Units](http://html.nhndesign.com/html_guide/?appendix/CSS3_Values___Units) (tümü)
* [http://www.tumblr.com/tagged/values-and-units](http://www.tumblr.com/tagged/values-and-units) (tümü)
* [http://generatedcontent.org/post/11933972962/css3values](http://generatedcontent.org/post/11933972962/css3values) (tümü)
* [http://www.inserthtml.com/2012/04/guide-css3-units/](http://www.inserthtml.com/2012/04/guide-css3-units/) (tümü) ****
* [https://developer.mozilla.org/en-US/docs/CSS/angle](https://developer.mozilla.org/en-US/docs/CSS/angle) (açı)
* [http://snook.ca/archives/html_and_css/font-size-with-rem](http://snook.ca/archives/html_and_css/font-size-with-rem) (rem)
* [http://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/](http://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/) (rem)
* [http://xph.us/2009/02/02/rem-in-firefox.html](http://xph.us/2009/02/02/rem-in-firefox.html) (rem)
* [http://blog.typekit.com/2011/11/09/type-study-sizing-the-legible-letter/](http://blog.typekit.com/2011/11/09/type-study-sizing-the-legible-letter/)
* [http://jsbin.com/acide4/8](http://jsbin.com/acide4/8)
* [http://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/](http://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/) (rem)
* [http://www.inserthtml.com/2012/04/guide-css3-units/](http://www.inserthtml.com/2012/04/guide-css3-units/) (css3 değerleri)
* [http://generatedcontent.org/post/21279324555/viewportunits](http://generatedcontent.org/post/21279324555/viewportunits) (esnek değerler)
* [http://css-tricks.com/viewport-sized-typography/](http://css-tricks.com/viewport-sized-typography/) (viewport)
* [http://snook.ca/archives/html_and_css/vm-vh-units](http://snook.ca/archives/html_and_css/vm-vh-units) (viewport)
* [http://dev.opera.com/articles/css-viewport-units/](http://dev.opera.com/articles/css-viewport-units/) (viewport)
* [http://caniuse.com/viewport-units](http://caniuse.com/viewport-units)
* [http://www.impressivewebs.com/alternative-units-css3-rotate-transforms/](http://www.impressivewebs.com/alternative-units-css3-rotate-transforms/) (turn)
* [http://cssvalues.com/](http://cssvalues.com/)
* [http://demosthenes.info/blog/345/Understanding-UA-StyleSheets-and-the-CSS3-initial-Value](http://demosthenes.info/blog/345/Understanding-UA-StyleSheets-and-the-CSS3-initial-Value) initial değeri
* [http://lea.verou.me/2012/02/simpler-css-typing-animation-with-the-ch-unit/](http://lea.verou.me/2012/02/simpler-css-typing-animation-with-the-ch-unit/) ch değeri
* [http://lists.w3.org/Archives/Public/www-style/1999Dec/0048.html](http://lists.w3.org/Archives/Public/www-style/1999Dec/0048.html) ch değeri
* [http://meyerweb.com/eric/thoughts/2012/05/15/defining-ch/](http://meyerweb.com/eric/thoughts/2012/05/15/defining-ch/) ch değeri
* [http://programlama.eu.com/HTMLandCSS/css3/colors/css3-colors-s1.htm](http://programlama.eu.com/HTMLandCSS/css3/colors/css3-colors-s1.htm) (hsl)
* [http://www.yakuter.com/css3-color-renk-modulu/](http://www.yakuter.com/css3-color-renk-modulu/)
* [http://www.suburban-glory.com/blog?page=130](http://www.suburban-glory.com/blog?page=130)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/attr](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)
* [http://demosthenes.info/blog/345/Understanding-UA-StyleSheets-and-the-CSS3-initial-Value](http://demosthenes.info/blog/345/Understanding-UA-StyleSheets-and-the-CSS3-initial-Value) (initial değeri)


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png