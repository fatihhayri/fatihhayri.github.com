---
layout: post
title: Medya sorgularında aralıklı genişlik tanımlama
description: CSS Medya sorgularında aralıklı genişlik tanımlama
lang: tr_TR
Date: 2023-10-09 11:30
Category: CSS
tags: [media, meai-query,]
image:
  feature: medya-sorgusu-yeni.png
---

Responsive(uyumlu) web kodlarken en büyük yardımcımız olan [medya sorguları](https://fatihhayrioglu.com/css-3-medya-sorgulari/) hakkında güzel bir gelişme var. Responsive(uyumlu) web kodlarken kullandığımız minimum genişlik ve maksimum genişlik kullanımının sonuna geldik, zaten kullanırken de çoğu zaman kafa karışıklığına neden oluyorlardı.

Artık javascript'te kullandığımız matematiksel işaretler yardımı ile genişlik sorgularını kullanabiliyoruz. Bu işaretler şunlar; 

-   `<`
-   `<=`
-   `>`
-   `>=`
-   `=`

Şimdi eski veyi karşılaştırması için örneklere bakalım.

<iframe height="300" style="width: 100%;" scrolling="no" title="media query range" src="https://codepen.io/fatihhayri/embed/KKbGmba?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/KKbGmba">
  media query range</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Eskiden;

```css
@media (min-width: 1100px)  {
	// bir şeyler yaz
}
```
Cihaz genişliği 1100 piksel ve üzeri olduğunda CSS devreye giriyor. Yeni kullanım

```css
@media (width >= 1100px)  {
  // bir şeyler yaz
} 
```
böylelikle kafa karışıklığı da olmayacaktır.

Bir diğer kullanım şekli de;

```css
@media (max-width: 480px)  {
  // bir şeyler yaz
}
```
Cihaz genişliği 480 piksel ve altında olduğunda CSS devreye giriyor. Yeni kuralla birlikte

```css
@media  (width <= 480px)  {
  // bir şeyler yaz
}
```

Son olarak bir aralığı belirtmek için

```css
@media (min-width: 480px) and (max-width: 1100px) {
  // bir şeyler yaz
}
```

Cihaz genişliği 480 piksel ile 1100px arasında olduğunda CSS devreye giriyor. Yeni kuralla birlikte

```css
@media (480px <= width <= 1100px) {
  // bir şeyler yaz
}
```
Süper.

<iframe height="300" style="width: 100%;" scrolling="no" title="media query range - 2" src="https://codepen.io/fatihhayri/embed/mdazwNW?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/mdazwNW">
  media query range - 2</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Tarayıcı Desteği

Yeni yeni çıkmasına rağmen yüzdesi gayet güzel.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/css-media-range-syntax-1741163726096.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/css-media-range-syntax-1741163726096.png">
<img src="https://caniuse.bitsofco.de/static/v1/css-media-range-syntax-1741163726096.jpg" alt="Data on support for the css-media-range-syntax feature across the major browsers from caniuse.com">
</picture>

## Sonuç

Sonuç olarak yeni tanımlar daha basit ve anlaşılabilir. Bence CSS bir sorununu daha düzeltti ve geliştirdi. Zamanında yavaşlıklarından dolayı eleştirdiğim W3C'yi tebrik ediyorum.

Kalın sağlıcakla.

## Kaynaklar

 - [https://www.freecodecamp.org/news/media-queries-width-ranges/](https://www.freecodecamp.org/news/media-queries-width-ranges/)
 - [https://css-tricks.com/the-new-css-media-query-range-syntax/](https://css-tricks.com/the-new-css-media-query-range-syntax/)
 - [https://blog.webdevsimplified.com/2022-12/css-range-media-queries/](https://blog.webdevsimplified.com/2022-12/css-range-media-queries/)
 - [https://youtu.be/xt-MHg_2XpA?si=9ZW_Vt95EPZtdB6g](https://youtu.be/xt-MHg_2XpA?si=9ZW_Vt95EPZtdB6g) - CSS Media Query Ranges - Steve Griffith
 - [https://youtu.be/BvB8kSmgMcM?si=eQoKVexTz0pKEkEX](https://youtu.be/BvB8kSmgMcM?si=eQoKVexTz0pKEkEX) - A new way to write media queries is coming to CSS: range syntax / Kevin Powell
 - https://x.com/w3bits_/status/1651927658991693824?s=20
 - [https://developer.chrome.com/blog/media-query-range-syntax/](https://developer.chrome.com/blog/media-query-range-syntax/)
 - [https://blog.saeloun.com/2022/12/02/css-media-query-range-context/](https://blog.saeloun.com/2022/12/02/css-media-query-range-context/)
 - [https://www.bram.us/2021/10/26/media-queries-level-4-media-query-range-contexts/](https://www.bram.us/2021/10/26/media-queries-level-4-media-query-range-contexts/)
 - [https://filisantillan.com/bits/media-query-ranges/](https://filisantillan.com/bits/media-query-ranges/)
 - [https://caniuse.com/css-media-range-syntax](https://caniuse.com/css-media-range-syntax)
