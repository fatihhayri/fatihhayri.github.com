---
layout: post
title: CSS minmax işlevsel değeri
description: Grid ile birilkte kullanılan CSS minmax işlevsel değeri ve aldığı değerleri anlatıyoruz.
lang: tr_TR
Date: 2019-11-25 13:10
Category: CSS
tags: [minmax, grid, max-content, min-content, uyumul-web, responsive]
image:
  feature: grid-terimleri.png
---

 1. [CSS Grid'e (Izgara) Giriş](https://fatihhayrioglu.com/css-grid-giris/)
 2. [CSS Grid Özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/)
 3. [fr birimi](https://fatihhayrioglu.com/fr-birimi/)
 4. [CSS Izgara çizgi isimlendirmesi ve kullanımı](https://fatihhayrioglu.com/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
 5. [Sayfa planlama sihirbazı grid-template-areas](https://fatihhayrioglu.com/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas")
 6. [Explicit(belirlenmiş) ve implicit(belirlenmemiş) grid ögeleri](https://fatihhayrioglu.com/explicit-belirlenmis-ve-implicit-belirlenmemis-grid-ogeleri/)

CSS grid makalelerimizn bu 7. sinde sizlere `minmax()` işlevini anlatmaya çalışacağım. CSS grid standartları ilk yazılmaya başlandığında çok karmaşık ve anlaşılması zor diye mesafeli yaklaşıyordum ancak beraberinde getirdiklerini öğrendikçe ve uyguladıkça daha iyi anlıyor ve seviyorum.

CSS minmax işlevi tanımlandığı grid ögesine en az (min) verilen değerine eşit ve daha büyük ve en fazla (max) değerine eşit ve daha küçük bir boyut aralığı tanımlar. Sadece CSS grid içinde kullanılır.

```css
minmax(min, max)
```

İlk parametresi minimum değeri, ikinci parametresi maksimum değeri belirler.

Maksimum değeri eğer minimum değerden küçükse maksimum değeri tarayıcı tarafından yorumlanmaz ve minimum değer uygulanır.

Minimum değer fr birimli değer alamaz, maksimum değer fr birimli değer alabilir.

CSS minimax işlevi 5 farklı birimde değer alır.

1 - Ölçü değerleri (px, em, vm, vh, ...)
2 - Esnek değerler (fr)
3 - max-content
4 - min-content
5 - auto

Bu değerlere göz atalım.

## Ölçü değerleri

CSS uzunluk (px, em, vm vh, …) değerleri ve yüzde değerler. Tanımlanan değer kolon genişliğini belirler ve eksi değer alamaz. Örneğin 25%, 250px, 100vw gibi.

Ölçü değerleri minmax işlevinin en basit halini gösterir.

```css
.kapsayici {
    display: grid;
    grid-template-columns: minmax(80px, 240px) 100px 100px;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid minmax işlevi" src="https://codepen.io/fatihhayri/embed/KKKJYKp?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

![CSS grid minmax sabit ölçüleri](https://fatihhayrioglu.com/images/minmax-sabit-deger.gif)

Kapsayıcı eleman için tanımlanmış `grid-template-columns` değeriyle 2. ve 3. ögeler 100px ile sabitlenmişken 1. öge görüntülenen alanın genişliğine göre en az 100px en fazla 200px genişlik değeri alır.

Yüzde değerlerine bir örnek yapalım. Yüzde değerler kapsayıcının boyutuna göre daha esnek değerlerdir.

```css
.kapsayici {
    display: grid;
    grid-template-columns: minmax(50%, 80%) 100px 100px;
}
```

## Esnek değerler

**Esnek değer**, fr(ing. fraction) birimi 'kesir' anlamına gelir. px veya % gibi bir uzunluk değil, bunun yerine 'esnek' bir birim olarak kabul edilir. CSS grid ile birlikte gelen bir değerdir. Kullanılabilir alanı tanımlamamızı sağlayan esnek bir birimdir. İleride bu değere daha detaylı değineceğiz. [fr birimi](https://fatihhayrioglu.com/fr-birimi)

```css
.kapsayici {
display: grid;
grid-template-columns: minmax(50%, 1fr) 1fr 1fr;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid minmax işlevi esnek değerli" src="https://codepen.io/fatihhayri/embed/GRRayeY?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

![CSS grid minmax esnek değerler](https://fatihhayrioglu.com/images/minmax-esnek-deger.gif)

Esnek değerler ile uyumlu bir yapı kazanır grid ögelerimiz.

![min-content ve max-content tanımları](https://fatihhayrioglu.com/images/min-content-max-content.jpg)

## max-content

Izgara izi içindeki boşluklar da dahil en geniş içerikli ögesinin değeridir. Metin bir alt satıra kaydırılmadan boyut ölçülür. 

```css
.kapsayici {
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) 1fr 1fr;
}
````

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid minmax işlevi max-content" src="https://codepen.io/fatihhayri/embed/dyyEJBm?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

![CSS grdi minmax max-content](https://fatihhayrioglu.com/images/minmax-max-content.gif)

Diğer kutular genişlik daralınca iki satıra düşerken `max-content` tanımlı kutu içeriğininin uzunluğunca sabit kalıyor. 

## min-content

Izgara izi içindeki ızgara ögesinin en az daraldığı durumdaki değeridir. Metin taşmadan daralabileceği en son noktadaki değerdir. Yada ızgara ögesi içindeki satıriçi ögenin genişliği kadardır. 

```css
.kapsayici {
  display: grid;
  grid-template-columns: minmax(min-content, min-content) minmax(max-content, max-content) 1fr;
}
````

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid minmax işlevi min-content" src="https://codepen.io/fatihhayri/embed/GRRaQYR?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

![CSS grid minmax min-content](https://fatihhayrioglu.com/images/minmax-min-content.gif)

`min-content` tanımlanan eleman scroll çıkmadan ufalacağı en dar genişliğe gelir.

## auto

auto tanımlanan grid ögesi en fazla `max-content` değeri kadar, en az `min-content` değeri kadar değer alır.

```css
.kapsayici {
  display: grid;
  grid-template-columns: minmax(auto, auto) 1fr 1fr;
}
````

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid minmax işlevi auto" src="https://codepen.io/fatihhayri/embed/GRRaQYR?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

![CSS grid minmax auto](https://fatihhayrioglu.com/images/minmax-auto.gif)

## Kaynaklar

- [https://developer.mozilla.org/en-US/docs/Web/CSS/minmax](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)
- [https://bitsofco.de/how-the-minmax-function-works/](https://bitsofco.de/how-the-minmax-function-works/)
- [https://www.joomlashack.com/blog/tutorials/css-grid-12-the-minimax-function/](https://www.joomlashack.com/blog/tutorials/css-grid-12-the-minimax-function/)
- [https://codepen.io/michellebarker/post/css-grid-more-flexibility-with-minmax](https://codepen.io/michellebarker/post/css-grid-more-flexibility-with-minmax)
- [https://twitter.com/jensimmons/status/988761825218056192?s=20](https://twitter.com/jensimmons/status/988761825218056192?s=20)
- [MinMax in CSS Grid — 3/3 Flexibility](https://m.youtube.com/watch?v=mVQiNpqXov8#)
- [https://alligator.io/css/css-grid-layout-minmax-function/](https://alligator.io/css/css-grid-layout-minmax-function/)
- [https://www.hongkiat.com/blog/css-grid-layout-minmax/](https://www.hongkiat.com/blog/css-grid-layout-minmax/)
- [https://dev.to/evanminto/intrinsically-responsive-css-grid-with-minmax-and-min-1n55](https://dev.to/evanminto/intrinsically-responsive-css-grid-with-minmax-and-min-1n55)
- [https://fatihhayrioglu.com/css-grid-ozellikleri/](https://fatihhayrioglu.com/css-grid-ozellikleri/)
- [# Min & Max Content Sizing in CSS Grid — 1/3 Flexibility](https://www.youtube.com/watch?v=lZ2JX_6SGNI)