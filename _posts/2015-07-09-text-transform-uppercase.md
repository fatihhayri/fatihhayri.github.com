---
layout: post
title: text-transform:uppercase
Date: 2015-07-01 13:18
categories: [CSS]
tags: [css, text-transform, uppercase, lang]
---

Daha önce denediğimde bazı tarayıcıların sorun çıkardığını hatırlıyorum. Aklımda öyle kalmış. Bundan dolayı bu özelliği bugüne kadar hiç kullanmadım. Bir iş dolayısıyla kullanmam gerektiğinde çalıştığını görünce sevindim. Hatta denedeğim tüm tarayıcılarda (IE8 dahi) çalıştı.

2006'da yazdığım [CSS'de Metin(Text) Özellikleri](/cssde-metintext-ozellikleri/) yazısından **text-transform**'dan bahsetmişim. Kod yapısı basit.

HTML kodu:

```html

<h1>Bu başlığı büyük harflerle göster</h1>

```

CSS kodu:

```css

h1 {
    text-transform: uppercase
}

```

Tabi birde dilimizi belirtmemiz gerekiyor ki tarayıcı hangi dilde büyültme yapacağını bilsin. 

HTML kodunu şöyle değiştirelim. **h1**'e **lang="tr"** ekleyelim.

```html

<h1 lang="tr">Bu başlığı büyük harflerle göster</h1>

```

<iframe height='120' scrolling='no' src='//codepen.io/fatihhayri/embed/gpzrdB/?height=120&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Kalın sağlıcakla

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
 - [https://css-tricks.com/almanac/properties/t/text-transform/](https://css-tricks.com/almanac/properties/t/text-transform/)
 - [http://stackoverflow.com/a/22606493/296373](http://stackoverflow.com/a/22606493/296373)