---
layout: post
title: CSS3 background-size özelliği
Date: 2011-07-21 22:00
Category: CSS
tags: [ardalan boyutu, background-size, contain, cover, css3]
---

background-size özelliği background-image ile tanımlanan resmin
boyutlarını tanımlamamıza yarar.

**Yapısı :** background-size: [&lt;bg-size&gt;[, &lt;bg-size&gt; ]\\
**Aldığı Değerler :** [ <yuzde_deger\> | <uzunluk\> | auto ] |
contain | cover\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

İki değer tanımlandığında ilk değer genişlik için ikinci değer yükseklik
için uygulanır, tek değer atanmış ise hem genişlik hemde yükseklik için
bu değer geçerlidir demektir.

Uzunluk olarak standart değerleri alabilir. Yüzde değerler
tanımlandığında kapsayıcı elemana göre konumlanır, ardalan resmine göre
değil. Örneğin genişlik ve yükseklik tanımı olarak 100% tanımlandığında
ardalan resmi kapsayıcı elemanın zeminini dolduracak şekilde yayılır.
Resmi gerçek boyutlarında kullanmak için auto değeri atanır.

Standart değerlerden başka iki farklı değer daha alır:  cover ve
container değerleri. Her ikiside tarayıcı boyutuna göre orantılı olarak
ardalan resmini boyutlandırır.

**cover:** Resmin genişlik veya yükseklik değerinden en küçük olanına
göre kapsayıcı elemanın ardalanını tamamen kaplar. Ardalan resmi tüm
kapsayıcı elemanın zeminini kaplayacak şekilde ayarlanır ve resmin kalan
kısmı kesik görünür.

**contain:** Ardalan resminin genişlik veya yüksekliğinden en büyük
olanına göre ardalan alanın içine uydurur. Resmi herhangi bir yerini
kesmeden tamamını gösterir, ancak bazı bölgeler ardalan resmi olmadan
görünür.

![][100]

Yukarıdaki grafikte görüldüğü gibi gerçek resmin genişliği büyük,
yüksekliği küçüktür.
contain tanımlandığında genişlik ve yükseklikten *büyük* olanı yani
burada genişliğin uzunluğu kapsayıcı genişliğine sığıncaya kadar
orantılı şekilde küçültülerek atanmış. Kapsayıcı elemanın üst ve at
kısmı boş kaldı.  

cover tanımlandığında genişlik ve yükseklikten *küçük* olanı yani burada
yüksekliğin uzunluğu kapsayıcı genişliğine sığıncaya kadar orantılı
şekilde büyütülerek atanmış. Ardalan resminin sağ ve soldan taşan
kısımları kesik görünecektir.

gif, jpeg ve png gibi resim formatları yeniden boyutlandırıldığında pek
hoş görüntüler ortaya çıkmıyor. Vektörel resimler(svg) desteği ile daha
güzel görüntüler elde edeceğiz. Negatif değerlere izin vermemektedir.
background-size:0 değeri resmin görünmemesini sağlar.

CSS3 diğer özelliklerinde olduğu gibi background-size özelliğini
destekleyen farklı tarayıcılar kendi öneklerini kullanmaktadır.

{% highlight css %}
.deneme {
	background-image: url(bg-image.png);
	-moz-background-size: 100% 100%;           /* Firefox 3.6 */
	-o-background-size: 100% 100%;           /* Opera 9.5 */
	-webkit-background-size: 100% 100%;           /* Safari 3.0, Chrome */
	background-size: 100% 100%;           /* w3c, Firefox 4.0, ie9  */
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+ (-webkit)**|**9+**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

<iframe width="100%" height="300" src="https://jsfiddle.net/fatihhayri/TrWy2/11/embedded/result,css,html" frameborder="0"></iframe>

Daha detaylı örnekler için [http://whereswalden.com/files/mozilla/background-size/more-examples.html][] sitesine bakınız.

## Sonuç

Birçok yerde kullanabileceğimiz bu özellik yardımı ile ardalandaki
resimlerimizi daha iyi organize edebileceğiz. Sayfa zeminini tam
kaplayan alanlar oluşturmak için, css sprite resimlerini daha iyi
kullanabilme imkanı, esnek yapılı sayfa planlarında ardalan resimlerini
yayma konularında vd. konularda bizlerin elini sağlamlaştıran güzel bir
özellik.  IE9 ve sonrasında desteklediği için şimdi uygulamak zor gibi,
ancak mobil araçlar için hazırlanan sayfalarda uygulanabilir.

Sayfa Zeminini Tamamen Kaplayan Resimler Tanımlamak diye bir makale
yazmak şart oldu.

Kalın sağlıcakla

## Kaynaklar

-   [http://www.w3.org/TR/2002/WD-css3-background-20020802/][]
-   [https://developer.mozilla.org/en/CSS/background-size][]
-   [https://developer.mozilla.org/en/CSS/Scaling_background_images][]
-   [http://robertnyman.com/css3/background-size/background-size.html][]
-   [http://dev.opera.com/articles/view/css-text-shadows-and-background-sizing/][]
-   [http://hacks.mozilla.org/2009/12/css-backgrounds-firefox-36/][]
-   [http://www.css3.info/preview/background-size/][]
-   [http://www.w3schools.com/cssref/css3_pr_background-size.asp][]
-   [http://www.quirksmode.org/css/background.html][]
-   http://webdesign.about.com/od/styleproperties/p/blspbgsize.htm
-   [http://www.css3.info/liquid-faux-columns-with-background-size/][]
-   [http://css-tricks.com/3458-perfect-full-page-background-image/][]
-   [http://www.cssplay.co.uk/boxes/css3-background.html][] (örnek)
-   [http://www.alistapart.com/articles/supersize-that-background-please/][]
-   [http://whereswalden.com/files/mozilla/background-size/more-examples.html][]
-   [http://dev.w3.org/csswg/css3-page/img_scale.png][]
-   [][]

  [100]: https://lh6.googleusercontent.com/vPFmtJY6MNPZQFrtimtMV9QRAkfyAQa0EUmCeBZGKEXqWMi-lBwCGcNG7AxW8REH67JGVB55m-oyZtM4uixFH-F5J2KjTvtO2SpQ-qvBq-XR54vsRks
  [http://whereswalden.com/files/mozilla/background-size/more-examples.html]: http://whereswalden.com/files/mozilla/background-size/more-examples.html
  [http://www.w3.org/TR/2002/WD-css3-background-20020802/]: http://www.w3.org/TR/2002/WD-css3-background-20020802/
  [https://developer.mozilla.org/en/CSS/background-size]: https://developer.mozilla.org/en/CSS/background-size
  [https://developer.mozilla.org/en/CSS/Scaling_background_images]: https://developer.mozilla.org/en/CSS/Scaling_background_images
  [http://robertnyman.com/css3/background-size/background-size.html]: http://robertnyman.com/css3/background-size/background-size.html
  [http://dev.opera.com/articles/view/css-text-shadows-and-background-sizing/]: http://dev.opera.com/articles/view/css-text-shadows-and-background-sizing/
  [http://hacks.mozilla.org/2009/12/css-backgrounds-firefox-36/]: http://hacks.mozilla.org/2009/12/css-backgrounds-firefox-36/
  [http://www.css3.info/preview/background-size/]: http://www.css3.info/preview/background-size/
  [http://www.w3schools.com/cssref/css3_pr_background-size.asp]: http://www.w3schools.com/cssref/css3_pr_background-size.asp
  [http://www.quirksmode.org/css/background.html]: http://www.quirksmode.org/css/background.html
  [http://www.css3.info/liquid-faux-columns-with-background-size/]: http://www.css3.info/liquid-faux-columns-with-background-size/
  [http://css-tricks.com/3458-perfect-full-page-background-image/]: http://css-tricks.com/3458-perfect-full-page-background-image/
  [http://www.cssplay.co.uk/boxes/css3-background.html]: http://www.cssplay.co.uk/boxes/css3-background.html
  [http://www.alistapart.com/articles/supersize-that-background-please/]: http://www.alistapart.com/articles/supersize-that-background-please/
  [http://dev.w3.org/csswg/css3-page/img_scale.png]: http://dev.w3.org/csswg/css3-page/img_scale.png
  [100]: /images/background-size_cover_contain.gif

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png