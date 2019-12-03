---
layout: post
title: Kutulara Gölge Vermek (box-shadow)
Date: 2010-06-21 22:18
Category: CSS, Web Standartları, XHTML
tags: [box-shadow, css3, gölgeli kutular, kutu gölgesi]
---

<s>Şuanki şartlar düşünüldüğünde normal olarak bir kutunun gölgesini vermek için daha öncede açıkladığımız gibi bir kaç yöntem var. Bu yöntemleri incelemek için http://fatihhayrioglu.com/css-ile-golge-vermek/ bağlantısındaki yazıya göz atalım.</s> Buradaki yöntemleri incelediğimizde çok fazla gereksiz ve fazladan katman(div) kullanmak zorunda kaldığımızı
göreceksiniz. CSS3 ile gelen box-shadow özelliği sayesinde çok basit bir tanımlama ile bu fazlalıklar ve zorluklardan kurtulabiliyoruz.

box-shadow yapısını inceleyelim.

**Yapısı :** box-shadow: (değer)
**Aldığı Değerler :** none | (gölge) [ , (gölge) ] 
**Başlangıç değeri:** tanımlama yok 
**Uygulanabilen elementler:** tüm elementler 
**Kalıtsallık:**Yok
{: .cssozelliktanimi}

Temel kullanımı.

{% highlight css %}
.golgeliKutu {
  box-shadow: 3px 3px 4px #000;
}
{% endhighlight %}

Değerler metinlere gölge verme (text-shadow) özelliği ile aynı anlamı taşır.

**3px;** İlk değer yataydaki mesafe içindir. Artı değerler kutunun sağından itibaren uzaklık değeridir, negatif değerler kutunun soluna doğru mesafeyi gösterir.

**3px;** İkinci değer dikeydeki mesafe içindir. Artı değerler kutunun altına doğru mesafeyi gösterir, eksi değerler ise kutunun üstüne doğru mesafesini gösterir.

**4px;** Bulanıklık(blur) değeridir. Gölgelerin gerçeğe yaklaşması için kullanılır. Bulanık yatay ve dikey için verilen değerler göre şekil alır.

**#000;** renk değeri. Gölgenin renk değerini gösterir.

<s>Farklı tarayıcılar için ön ek kullanılarak çözüm üretilir. -moz Firefox için, -webkit Safari ve Google Chrome için.</s>

{% highlight css %}
.golgeliKutu {
   box-shadow: 3px 3px 4px #000;
   -moz-box-shadow: 3px 3px 4px #000;
   -webkit-box-shadow: 3px 3px 4px #000;
 }
 {% endhighlight %}

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

Örnek bir kutu görmek için bir kaç tanım daha ekleyelim.

{% highlight css %}
.golgeli-kutu {
  box-shadow: 2px 2px 6px #000;
  width:250px;
  padding:5px;
  font:12px Arial, Helvetica, sans-serif;
  background:#CCC
}
{% endhighlight %}

HTML kodu

{% highlight html %}
<div class="golgeli-kutu"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper commodo fermentum. Proin eu sollicitudin neque. Sed enim tellus, condimentum sed interdum vitae, mattis et nisl. Sed nec nisl est, sagittis lobortis eros. Integer pharetra turpis eu est eleifend faucibus. Phasellus pulvinar massa sagittis nisl posuere at rhoncus velit blandit. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
{% endhighlight %}

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/XXzeBR/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Bu kod sayesinde bir çok avantaj sağlarız. Fazla kod yığınından kurtuluruz, kolay içerik yenileme imkanı sağlar, hızlı yüklenir, geleceğe uyumludur. <s>Dezavantaj olarak ie'nin desteklememesi sayıla bilir.</s>

**Birden çok gölge kullanımı**

box-shadow tanımında tek bir gölge tanımı yapılabildiği gibi, birden fazla gölge tanımıda yapılabilmektedir. Her bir tanım birbirinden virgül ile ayrılır.

{% highlight css %}
.golgeli-kutu {
  box-shadow: 0.5em -0.5em 0.4em red, 0.5em 0.5em 0.4em gold, -0.5em 0.5em 0.4em lime, -0.5em -0.5em 0.4em blue;
  width:250px;
  padding:5px;
  font:12px Arial, Helvetica, sans-serif;
  background:#CCC;
}
{% endhighlight %}

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/mVqBGv/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

**inset ile kutu içine gölge vermek**

Kutulara gölge verirken kutu içinede gölge verebiliyoruz. **inset** eklemesi ile kutu içine gölge verme imkanımız var.

{% highlight css %}
.golgeli-kutu {
  box-shadow: inset 0 0 0.5em blue;;
  width:250px;
  padding:5px;
  font:12px Arial, Helvetica, sans-serif;
}
{% endhighlight %}

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/YwErJJ/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

## İE İçin Çözüm

İE içinde çözümler üretilmiştir. Her ne kadar **box-shadow** esnekliği ve kolaylığını bize sağlamasada bir çözüm yöntemi vardır.

İnternet Explorer için çözüm üretilirken **DropShadow** ve **Shadow** filtrelerinden yararlanılır.

Dropshadow filtresi uygulamasında bulanıklık ataması yapılmadan daha keskin gölgeler görürüz. X ve Y değerleri ile açı verebiliriz. Shadow filtresi daha gerçekçi çözümler üretir ancak shadow filtresinde de x ve y tanımlarını yapmamıza izin vermez.

{% highlight css %}
/* For IE 8 */
-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
/* For IE 5.5 - 7 */
filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000');
{% endhighlight %}

İE8 için farklı diğer ie'ler için farklı kodlar yazıyoruz. Bu kodu
yukarıdaki kod ile birleştirirsek

{% highlight css %}
.golgeli-kutu {
    width:250px;
    font:12px Arial, Helvetica, sans-serif;
    background:#CCC;
    padding:5px;
    box-shadow: 3px 3px 4px #000;
    /* For IE 8 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
    /* For IE 5.5 - 7 */
    filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000');
}
{% endhighlight %}

![ie gölgeli kutu][]

Örneği görmek için [tıklayınız.][3]

Tam olarak box-shadow etkisi gibi etki etmese de bir çözüm olarak kullanılabilir.

## Kaynaklar

-   [http://www.w3.org/TR/css3-background/#box-shadow][]
-   [http://robertnyman.com/2010/03/16/drop-shadow-with-css-for-all-web-browsers/][]
-   [http://www.ruzee.com/blog/shadedborder][] (javascript)
-   [http://dimox.net/cross-browser-css3-box-shadow/][]
-   http://nick-dunn.co.uk/article/cross-browser-drop-shadows-using-pure-css
-   [http://www.position-absolute.com/articles/how-to-get-css3-box-shadow-accepted-as-a-viable-option-at-your-workplace/][]
-   [https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow][]
-   http://css.flepstudio.org/en/css3/box-shadow.html
-   [http://www.westciv.com/tools/boxshadows/index.html][] (box-shadow üretici)
-   [http://css-tricks.com/snippets/css/css-box-shadow/][]
-   [http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/][]
-   [http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html][]
-   [http://davidwalsh.name/css-box-shadow][]

## Yazı Sonrası Linkler

-   [http://blog.w3conversions.com/2011/09/css3-spread-value-and-box-shadow-on-one-side-only/][]

  [Gölgeli Kutu]: /dokumanlar/box_shadow/box_shadow_1.gif
  [tıklayınız.]: /dokumanlar/box_shadow/golgeli_kutu.html
  [Çoklu Gölgeli Kutu]: /dokumanlar/box_shadow/box_shadow_2.gif
  [1]: /dokumanlar/box_shadow/golgeli_kutu_coklu.html
  [İçe Gölge]: /dokumanlar/box_shadow/box_shadow_3.gif
  [2]: /dokumanlar/box_shadow/golgeli_kutu_icegolge.html
  [ie gölgeli kutu]: /dokumanlar/box_shadow/box_shadow_ie.gif
  [3]: /dokumanlar/box_shadow/golgeli_kutu_ie.html
  [http://www.w3.org/TR/css3-background/#box-shadow]: http://www.w3.org/TR/css3-background/#box-shadow
  [http://robertnyman.com/2010/03/16/drop-shadow-with-css-for-all-web-browsers/]: http://robertnyman.com/2010/03/16/drop-shadow-with-css-for-all-web-browsers/
  [http://www.ruzee.com/blog/shadedborder]: http://www.ruzee.com/blog/shadedborder
  [http://dimox.net/cross-browser-css3-box-shadow/]: http://dimox.net/cross-browser-css3-box-shadow/
  [http://www.position-absolute.com/articles/how-to-get-css3-box-shadow-accepted-as-a-viable-option-at-your-workplace/]: http://www.position-absolute.com/articles/how-to-get-css3-box-shadow-accepted-as-a-viable-option-at-your-workplace/
  [https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow]: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
  [http://www.westciv.com/tools/boxshadows/index.html]: http://www.westciv.com/tools/boxshadows/index.html
  [http://css-tricks.com/snippets/css/css-box-shadow/]: http://css-tricks.com/snippets/css/css-box-shadow/
  [http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/]: http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/
  [http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html]: http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html
  [http://davidwalsh.name/css-box-shadow]: http://davidwalsh.name/css-box-shadow
  [http://blog.w3conversions.com/2011/09/css3-spread-value-and-box-shadow-on-one-side-only/]: http://blog.w3conversions.com/2011/09/css3-spread-value-and-box-shadow-on-one-side-only/


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png