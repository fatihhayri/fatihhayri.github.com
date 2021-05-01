---
layout: post
title: CSS3 background-origin ve background-clip özellikleri
Date: 2011-09-23 21:18
categories: [CSS]
tags: [webkit-background-clip, webkit-text-fill-color, background-clip, background-origin, css3]
---

[background özelliklerini][] anlatırken background tanımlarının içerik
ve padding alanının ardalanını etkilediğini söylemiştik. CSS2.1’de
tanımladığımız ardalan resimleri içeriği ve padding uygulanan alanları
kapsıyor. CSS3 ile birlikte buradaki kabul değişti. Artık kenar
çizgileride dahil edilebiliyor veya içerik alanı ile
sınırlandırılabiliyor. Bize bu imkanı CSS3’ün **background-clip** ve
**background-origin** özellikleri sağlıyor.

İlk olarak **background-origin** özelliğini inceleyerek başlayalım.

## background-origin

**background-image** konumunu hesaplamada elementin kutusunun
sınırlarını belirler. CSS3’den önce bu sabit bir değer olarak
padding-box idi. Bu özellik bize farklı konumlandırma imkanı sağlar.

**Yapısı:** background-origin: <bg-box\>\\
**Aldığı Değerler:**<bg-box\> border-box | padding-box | content-box\\
**Başlangıç değeri:**padding-box\\
**Uygulanabilen elementler:** Tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Aldığı değerleri kısaca açıklarsak

-   **border-box:** background-image konumu border alanından başlar
-   **padding-box:** background-image konumu padding alanından başlar
-   **content-box:** background-image konumu içerik alanından başlar

![][100]

```css
#kutu1 {
    -moz-background-origin: border;
    -webkit-background-origin: border;
    -webkit-background-origin: border-box;
    background-origin: border-box;
}
#kutu2 {
    -moz-background-origin: padding;
    -webkit-background-origin: padding;
    -webkit-background-origin: padding-box;
    background-origin: padding-box;
}
#kutu3 {
    -moz-background-origin: content;
    -webkit-background-origin: content;
    -webkit-background-origin: content-box;
    background-origin: content-box;
}
```

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/Rf6Mv/49/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**background-position:fixed** tanımlı elementlere etki etmez.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+**|**9+**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## background-clip

**background-clip** ardalanın nerede gösterileceğini tanımlar. Daha önce
padding dahil içerik alanı sabit olarak geliyordu, artık border alanıda
dahil edilebiliyor veya padding alanı kapsamdan çıkarılabiliyor

**Yapısı:** background-clip: <bg-box\>\\
**Aldığı Değerler:** <bg-box\> border-box | padding-box | content-box\\
**Başlangıç değeri:** border-box\\
**Uygulanabilen elementler:** Tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Aldığı değerleri kısaca açıklarsak

-   **border-box:**Ardalan içerik alanı + padding alanı + border alanını
    kapsar.
-   **padding-box:** Ardalan içerik alanı + padding alanını kapsar
-   **content-box:** Ardalan sadece içerik alanını kapsar.

![][1]

**border-box** tanımı eğer **background-origin:border-box** ise
uygulanır.

```css
#kutu1{
 -moz-background-origin: border;
 -webkit-background-origin: border;
 -webkit-background-origin: border-box;
 background-origin: border-box;
 -moz-background-clip:border;
 -webkit-background-clip:border;
 -webkit-background-clip:border-box;
 background-clip:border-box;
}

#kutu2{
 -moz-background-origin: border;
 -webkit-background-origin: border;
 -webkit-background-origin: border-box;
 -moz-background-clip:padding;
 -webkit-background-clip:padding;
 -webkit-background-clip:padding-box;
 background-clip:padding-box;
}

#kutu3{
      -moz-background-origin: border;
 -webkit-background-origin: border;
 -webkit-background-origin: border-box;
 -moz-background-clip:content;
 -webkit-background-clip:content;
 -webkit-background-clip:content-box;
 background-clip:content-box;
}
```

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/Rf6Mv/50/embedded/result,css,html"></iframe>

**background-origin:border-box** olarak tanımladığımızda
**background-clip** özelliğini daha iyi anlarız. Her üç kutudaki
farkları gördüğünüz gibi. Resim sırası ile border, padding ve içerik
alanından kırpılmıştır.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+**|**9+**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**backgroun-origin** özelliği **background-image** konumunun kapsama
alanını belirlerken, **background-clip** ise background alanını kırpmak
için kullanılır. **background-origin** sadece ardalan resmini etkilerken
**background-clip** ardalan resmi ve ardalan renginide etkiler.

Bu özellikleri destekleyen farklı tarayıcılar için önek ile çözüm
üretilir. Diğer önek uygulamalarında farklı olarak bu özelliklerin
değerlerinde de tarayıcı sürümleri arasında farklılıklar vardır. Firefox
ve Webkit’in eski sürümlerinde değer olarak **border, content**
ve**padding** değerlerini desteklerken son çıkan sürümler standartlaşan
**content-box, border-box** ve **padding-box** değerlerini
desteklemektedirler.

## background-clip: text Değeri

Webkit tabanlı tarayıcılarda diğerlerinden farklı olarak text değeride
vardır. Henüz standartlarda bulunmayan bu değeri sadece webkit kullanan
Chrome ve Safari desteklemektedir. Bu değer atandığında metinin
ardalanına resim uygulanıyor geri kalan kısımlara ise saydam ardalan
olarak kalıyor.

```css
#kutu1 {
   -moz-background-origin: border;
   -webkit-background-origin: border;
   -webkit-background-origin: border-box;
   background-origin: border-box;
   -webkit-background-clip:text;
   -webkit-text-fill-color:transparent;
   font:bold 72px Arial, Helvetica, sans-serif;
}
```

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/gqaC9/9/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**-webkit-text-fill-color:transparent** ile metnin ardalanını
saydamlaştırıyoruz ve elemanın ardalanındaki resmi gösteriyoruz. Çok
güzel görsel çalışmaları bu şekilde yapabiliriz, ancak henüz sadece
Chrome ve Safari desteklediği için pek kullanışlı değil.

## Kaynaklar

-   [http://www.css3.info/preview/background-origin-and-background-clip/][]
-   [http://www.w3.org/TR/css3-background/][]
-   [http://www.quirksmode.org/css/background.html][]
-   [http://www.w3schools.com/cssref/css3_pr_background-clip.asp][]
-   [http://www.standardista.com/css3/css3-background-properties/][]
-   http://css-tricks.com/7423-transparent-borders-with-background-clip
-   [https://developer.mozilla.org/en-us/docs/Web/CSS/background-clip][]
-   [https://developer.mozilla.org/en-us/docs/Web/CSS/background-origin][]
-   https://dev.opera.com/articles/css3-border-background-boxshadow/
-   [http://www.sitepoint.com/new-properties-and-values-in-backgrounds-with-css3/][]
-   [http://www.css3.info/webkit-introduces-background-cliptext/][]
-   http://www.cssreset.com/2010/css-tutorials/fun-with-webkit-background-clip-and-font-face
-   [http://www.webkit.org/blog/164/background-clip-text/][] (text)
-   [http://www.impressivewebs.com/background-clip-css3/][] (güzel)
-   css-class.com/test/css/backgrounds/background-origin1.htm
-   [http://css-infos.net/property/background-origin][]
-   [https://www.youtube.com/watch?v=7xVS2FX2Mao&feature=related][]

  [background özelliklerini]: http://fatihhayrioglu.com/hizli-css-referansi/
  [100]: https://lh6.googleusercontent.com/-PsvxlredrDNUaFBqk4tcxuxsLaw9XJAeTIfp53XKqD2CkZgPqnN7UkCvkm1nSveS_plE_wPOGgUzpVVJ1JGeq_6bWXEkSun-0KS9CC1JMnz19Lusfw
  [1]: https://lh6.googleusercontent.com/MOaRt6WqnrAxmlxJNMcvGKvA-Ki9x0IQOpz_Az4iqzZU6Ug3Dt1vutHFus__ZMQSORq3eLvhtrgzeWFPMzptoBB5pMxLHIWjoA26SO009nYr4fxoUrU
  [http://www.css3.info/preview/background-origin-and-background-clip/]: http://www.css3.info/preview/background-origin-and-background-clip/
  [http://www.w3.org/TR/css3-background/]: http://www.w3.org/TR/css3-background/
  [http://www.quirksmode.org/css/background.html]: http://www.quirksmode.org/css/background.html
  [http://www.w3schools.com/cssref/css3_pr_background-clip.asp]: http://www.w3schools.com/cssref/css3_pr_background-clip.asp
  [http://www.standardista.com/css3/css3-background-properties/]: http://www.standardista.com/css3/css3-background-properties/
  [https://developer.mozilla.org/en-us/docs/Web/CSS/background-clip]: https://developer.mozilla.org/en-us/docs/Web/CSS/background-clip
  [https://developer.mozilla.org/en-us/docs/Web/CSS/background-origin]: https://developer.mozilla.org/en-us/docs/Web/CSS/background-origin
  [http://www.sitepoint.com/new-properties-and-values-in-backgrounds-with-css3/]: http://www.sitepoint.com/new-properties-and-values-in-backgrounds-with-css3/
  [http://www.css3.info/webkit-introduces-background-cliptext/]: http://www.css3.info/webkit-introduces-background-cliptext/
  [http://www.webkit.org/blog/164/background-clip-text/]: http://www.webkit.org/blog/164/background-clip-text/
  [http://www.impressivewebs.com/background-clip-css3/]: http://www.impressivewebs.com/background-clip-css3/
  [http://css-infos.net/property/background-origin]: http://css-infos.net/property/background-origin
  [https://www.youtube.com/watch?v=7xVS2FX2Mao&feature=related]: https://www.youtube.com/watch?v=7xVS2FX2Mao&feature=related

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png