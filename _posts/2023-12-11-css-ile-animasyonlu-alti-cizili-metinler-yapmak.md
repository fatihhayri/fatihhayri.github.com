---
layout: post
title: CSS ile animasyonlu altı çizili metinler yapmak
description: CSS ile animasyonlu altı çizili metinler yapmak
lang: tr_TR
Date: 2023-12-11 10:00
Category: CSS
tags: [animasyon, altı-çizili]
image:
  feature: alti-cizili-metinler.png
---

Bu sıralar CSS ile yapabileceklerimiz konusunda codepen.io'da çok vakit geçiriyorum. Gördüklerimden güzel olanları burada paylaşmaya çalışıyorum. Bu yazıda animasyonlu altı çizli metinler yapmayı anlatmaya çalışacağım. Benim genelde basit ve kolay çözümler daha çok hoşuma gidiyor.  Çok eskilerde bu animasyonu genelde flash sitelerin menülerinde kullanıyorduk. 

Bu animasyonu yapmak için farklı yöntemler(underline, background- box-shadow) var ancak elemanın `:before` sözde elemanı ile yapmak en mantıklısı.

```css
a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  bottom: 2px;
  left: 0;
  background: var(--underline-color);
  transform: scaleX(0);
  transition: transform 0.25s ease-out;
}
```

`transform: scaleX(0);` ile çizgiyi gizliyoruz. Aslında animasyonu da bunun üzerinden yapacağız.  Animasyonu `transition: transform 0.25s ease-out;` kodu ile ayarladık.

```css
a:hover::before {
  transform: scaleX(1);
}
```
Sadece `transform: scaleX(1);` kodu ile animasyonu tamamladık.

<iframe height="300" style="width: 100%;" scrolling="no" title="animasyonlu altı çizgili metinler" src="https://codepen.io/fatihhayri/embed/vYbPOxz?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/vYbPOxz">
  animasyonlu altı çizgili metinler</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Animasyonun yönünü değiştirebiliriz. 

## Soldan sağa animasyon

Burada sadece `transform-origin: bottom left;` kodu ile bunu değiştirebiliyoruz.

```css
.soldan:before {
  transform-origin: bottom left;
}
```

## Sağdan sola animasyon

Burada sadece `transform-origin: bottom right;` kodu ile bunu değiştirebiliyoruz.

```css
.sagdan:before {
  transform-origin: bottom right;
}
```

Çok çeşitli örnekler var. Kaynaklar kısmına göz atmanızı öneririm. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://codepen.io/VladykoD/pen/ZEYMmVg](https://codepen.io/VladykoD/pen/ZEYMmVg)
 - [https://tobiasahlin.com/blog/css-trick-animating-link-underlines/](https://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
 - [https://css-irl.info/animating-underlines/](https://css-irl.info/animating-underlines/)
 - [https://codepen.io/jstn/pen/mdoOZJ?editors=1100](https://codepen.io/jstn/pen/mdoOZJ?editors=1100)
 - [https://tympanus.net/Development/LineHoverStyles/](https://tympanus.net/Development/LineHoverStyles/) Güzel örnekler
 - [https://paulund.co.uk/css-animation-link-underline](https://paulund.co.uk/css-animation-link-underline)