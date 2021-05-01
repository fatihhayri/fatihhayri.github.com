---
layout: post
title: Javascript ile medya kontrolü
Date: 2017-02-17 16:05
categories: [Javascript]
tags: [medya-sorgusu, css]
---

CSS ile birlikte çok fazla medya kontrolünü kullanıyoruz.


```css
/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
}

/* Desktops and laptops ----------- */
@media only screen and (min-width : 1224px) {
}

/* Large screens ----------- */
@media only screen and (min-width : 1824px) {
}
```

Peki bu kontrolleri javascript tarafında nasıl yaparız diye araştırınca `window.matchMedia` ile karşılaştım. Bildiğimiz CSS medya kulanımının aynısını yapabiliyoruz.

```javascript
var ms = window.matchMedia("SORGU");
```

SORGU yazan kısma CSS'de yazdığımız kısmı birebir yazıp kontrol edebiliyoruz.

```javascript
var ms = window.matchMedia("screen and (min-width:720px)");
```

Sonra kontrolümüzü yapalım.

```javascript
if (ms.matches) {
  // ekran genişliği en az 720px
} else {
  // ekran genişliği 720px den büyük olanlar.
}
```

Tarayıcı desteğinin %100'e yakın olması da ayrı bi güzellik.

## Kaynaklar

 -  [https://www.w3.org/TR/cssom-view-1/#dom-window-matchmedia](https://www.w3.org/TR/cssom-view-1/#dom-window-matchmedia)
 - [https://www.sitepoint.com/javascript-media-queries/](https://www.sitepoint.com/javascript-media-queries/)
