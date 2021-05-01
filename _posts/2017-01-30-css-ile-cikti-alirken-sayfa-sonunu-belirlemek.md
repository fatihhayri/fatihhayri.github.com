---
layout: post
title: CSS ile çıktı alırken sayfa sonunu belirlemek
Date: 2017-01-30 10:26
categories: [CSS]
tags: [çıktı-alma, sayfa-sonu]
image:
  feature: puan-tablosu-cikti-al.gif
---

Daha öncede birkaç kere aynı soru ile karşılaştım. 

Soru: Çıktı alırken web sitemin belirlediğim yerden sayfalara ayrılması için ne yapabilirim?

CSS ile bunun çözümü kolay. Örneğin tablolardan oluşan bir web sayfanız var. Çıktı alırken bu tabloların ortadan bölünmesini istemiyoruz. Belirlediğimiz yerde sayfanın sonu gelsin istiyoruz.

Aşağıdaki gibi bir sayfamız olsun.

![enter image description here](https://fatihhayrioglu.com/images/puan-tablosu.gif)

Bu sayfanın çıktısı almak istediğimizde

![enter image description here](https://fatihhayrioglu.com/images/puan-tablosu-cikti-al.gif)

İki tabloyu çıktı alırken ayırsak iyi olur.

```css
@media all {
  .page-break { display: none; }
}

@media print {
  .page-break { display: block; page-break-before: always; }
}
```

Sayfayı bölmek istediğimiz yere

```html
<div class="page-break"></div>
```

ekliyoruz. Sonuç

![enter image description here](https://fatihhayrioglu.com/images/puan-tablosu-son.gif)

Benzer mantıkla çıktı alırken sayfalama ayrımı yapabiliriz.

Kalın sağlıcakla.

## Kaynaklar

 - [https://davidwalsh.name/css-page-breaks](https://davidwalsh.name/css-page-breaks)
 - [https://css-tricks.com/almanac/properties/p/page-break/](https://css-tricks.com/almanac/properties/p/page-break/)
 - [http://www.hongkiat.com/blog/css3-page-break/](http://www.hongkiat.com/blog/css3-page-break/)