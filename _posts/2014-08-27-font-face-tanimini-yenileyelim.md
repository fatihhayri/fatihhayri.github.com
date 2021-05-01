---
layout: post
title: font-face tanımını yenileyelim
Date: 2014-08-27 14:55
categories: [CSS]
tags: [css font-face woff ttf]
---

Sitemizde özel yazı tiplerini kullanmak için kullandığımız @font-face bize çok güzel imkanlar sağladığı kesin. Bir sorunu var bu özelliğin kod bloku çok uzun ve karışık. Daha önce yazdığım [font-face kullanımı](/font-face-kullanimi/) yazısının üzerinden çok zaman geçti. Bir çok tarayıcı bu listeden düştü. En son ie8 düştü.

```css
@font-face {
    font-family: 'BenimYaziTipim';
    src: url('GraublauWeb.eot'); /*ie 6-8 */
    src: local('Graublau Web Regular'), local('Graublau Web'),
    url('GraublauWeb.woff') format('woff'),
    url('GraublauWeb.svg#GraublauWeb') format('svg'),
    url('GraublauWeb.otf') format('opentype');
}
```

Kodun da **eot**, **otf** ve **svg** kodlarına gerek kalmadı. Kodumuz daha basit bir hal aldı. 

```css
@font-face {
  font-family: 'BenimYaziTipim';
  src: url('font.woff') format('woff'), 
       url('font.ttf') format('truetype');      
}
```

**ttf**'in tutunmasının nedeni mobildeki Android tarayıcısı. Zamanla ttf'inde bitip tek başına **woff** kullanımına ulaşacağız inşallah.

woff'un tarayıcı desteğini hatırlamakta yarar var. Mobildeki android tarayıcılar sorun oluyor :/

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**5.0+**|**9+**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**4.4+**|**5.1+**|**36+**|
{: .tarayici-uyumi}

## Kaynak

 - [http://css-tricks.com/snippets/css/using-font-face/](http://css-tricks.com/snippets/css/using-font-face/)
 - [http://caniuse.com/#search=woff](http://caniuse.com/#search=woff)

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
