---
layout: post
title: CSS Grid öge özellikleri
description: CSS Grid ögesine ait özellikleri tanımlayacağız
lang: tr_TR
Date: 2019-12-12 11:10
Category: CSS
tags: [grid, grid-column-start, grid-column-end, grid-row-start, grid-row-end, grid-column, grid-row, grid-area]
image:
  feature: grid-ogesi.png
---

 1. [CSS Grid'e (Izgara) Giriş](https://fatihhayrioglu.com/css-grid-giris/)
 2. [CSS Grid Özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/)
 3. [fr birimi](https://fatihhayrioglu.com/fr-birimi/)
 4. [CSS Izgara çizgi isimlendirmesi ve kullanımı](https://fatihhayrioglu.com/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
 5. [Sayfa planlama sihirbazı grid-template-areas](https://fatihhayrioglu.com/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas")
 6. [Explicit(belirlenmiş) ve implicit(belirlenmemiş) grid ögeleri](https://fatihhayrioglu.com/explicit-belirlenmis-ve-implicit-belirlenmemis-grid-ogeleri/)
 7. [CSS minmax işlevsel değeri](https://fatihhayrioglu.com/css-minmax-islevsel-degeri/)
 8. [repeat() işlevi, auto-fill ve auto-fit değerleri](https://fatihhayrioglu.com/repeat-islevi-auto-fill-ve-auto-fit-degerleri/)

Grid yazılarımızın 9. sındayız. Bu yazıda grid öge özelliklerine değineceğiz.

Şimdiye kadar ki yazılarda hep kapsayıcı elemana yapılan tanımlarla CSS grid ögelerini konumlandırdık. Bu yazıdaysa grid ögesine yapılan atamalarla grid ögesini konumlandırmayı göreceğiz. Şimdiye kadar yapılan tanımlar genel tanımlarken bu yazımızda bahsedeceğimiz tanımlar özel tanımlar olacak.

![CSS Grid Modülü terimleri](https://fatihhayrioglu.com/images/grid-terimleri.png)

Bu tanımlar genelde grid izi sayıları üzerinden yapılıyor. Bu sayılar soldan sağa doğru yazılan diller için soldan sağa iken sağdan sola yazılan diller için sağdan sola numaralandırılır. Bir de `grid-template-area` ile kullandığımız ve grid ögelerine tanımladığımız grid isimleriyle de aynı şeyleri yapabiliriz. 

`grid-column-start`, `grid-column-end`, `grid-row-start` ve `grid-row-end` tanımları ve bu tanımların kısayolları olan `grid-column`, `grid-row` ve `grid-area` tanımlarını anlatmaya çalışacağız. Son olarak da `span` anahtar kelime değerinden bahsedeceğiz.
 
Bu tanımlar css grid ögesinin sol/sağ ve üst/alt sınırlarını belirler. Sırasıyla `grid-columm-start/grid-column-end` ve `grid-row-start/grid-row-end` tanımlarıyla bu işi yapıyoruz.

```css
.icerik {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
}
```

Tanımıyla **icerik** elemanı kolon olarak 2. ve 4. ızgara satır çizgisi arasında ve satır olarak 2. ve 4. satır çizgisi arasında konumlanacaktır. Benzer şekilde diğer elemanları da yerleştirebiliriz. 

Sadece tek grid kapsamı olan kolon ve satır tanımlarında `-start` tanımları yeterli olur. Örneğin

```css
.tanitim {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 5;
}
```
Kolon tanımı tek bir hücreyi kapsadığı için tanımını aşağıdaki gibi yazabiliriz.
```css
.tanitim {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 5;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="grid öge özellikleri" src="https://codepen.io/fatihhayri/embed/MWYwEgQ?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

### Negatif değerler

Grid öge tanımlarında sadece artı değerler değil eksi değerle de kullanılabilir. Negatif değerler tanımlı ızgara çizgilerinin sondan başa doğru tanımlamamızı sağlar. Bu tanımlar kapsayıcı elemanın alt/sağ çizgilerine göre yerleştirme yapar.

```css
.ust-alan {
    grid-column-start: 1;
    grid-column-end: 4;
}
```

Tüm satırı kaplayan bir grid ögesi yapmak için

```css
.ust-alan {
    grid-column-start: 1;
    grid-column-end: -1;
}
```
Her zaman ızgara izinin sonuna dayanacaktır. 

Yukarıdaki tanımın hepsini de eksi değer ile de yapabiliriz.

```css
.ust-alan {
    grid-column-start: -4;
    grid-column-end: -1;
}
```

kodu aynı sonucu verecektir.

## grid-column ve grid-row
 Grid ögelerine yapılan `grid-column-start`, `grid-column-end`, `grid-row-start` ve `grid-row-end` daha kısa yazmamızı sağlayan özelliklerdir.

```css
.icerik {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
}
```

Yukarıdaki örneği tekrar yazalım.

```css
.icerik {
    grid-column: 2 / 4;
    grid-row: 2 / 4;
}
```

Tüm sayfayı bu şekilde kısaltırsak

<iframe height="300" style="width: 100%;" scrolling="no" title="grid öge özellikleri kısaltma" src="https://codepen.io/fatihhayri/embed/bGNpmvE?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

İlk baştaki kod 52 satır iken son yaptığımız 45 satıra düştü.

Izgara çizgi isimleri kullanıyorsak kısayollarda bu isimleri de yazabiliriz.
 
## grid-area kısaltması

Yukarıda yaptığımız kısaltmayı daha da kısaltabiliriz. Kolon ve satırları tek tanımda toplamak için `grid-area` kısayolu kullanırız. 

```css
grid-area: row-start / col-start / row-end / col-end;
```

Sıralamayı unutursanız, hatırlamak için şöyle düşünebilirsiniz: ilk üst/sol (row-start / column-start)  sonra alt/sağ (row-end / column-end) tanımlarının geldiğini düşünün. 

```css
.tanitim {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
}
```

Yukarıdaki tanımı tek satırda 

```css
.tanitim {
    grid-area: 3 / 1 / 5 / 2;
}
```

## span tanımı

CSS grid ögesini genişletmek için kullanılır. Izgara hücrelerini bileştirmek için `span` anahtar değerini de kullanabiliriz. Örneğin 

```css
.tanitim {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
}
```

Kodunu aşağıdaki gibi de yazabiliriz.

```css
.tanitim {
    grid-column: 1;
    grid-row: 3 / span 2;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="grid öge özellikleri" src="https://codepen.io/fatihhayri/embed/MWYwEgQ?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

Kalın sağlıcakla.

## Kaynaklar

 - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
 - https://www.joomlashack.com/blog/tutorials/line-placing-in-css-grid/
 - https://www.sitepoint.com/seven-ways-you-can-place-elements-using-css-grid-layout/
 - [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
 - [CSS GRID: Placing Grid Items — 10 of 25 - wesbos](https://www.youtube.com/watch?v=9Ji-02JsV0U)
 - [CSS Grid Layout // Placing Items on the Grid](https://www.youtube.com/watch?v=8XemT4I_c8I)
 - https://css-irl.info/debugging-css-grid-part-3-auto-flow-order-and-item-placement/
 - https://blogs.igalia.com/mrego/2016/05/27/css-grid-layout-and-positioned-items/
 - https://dev.to/ziizium/css-grid-part-1-3f57
 - https://alligator.io/css/css-grid-layout-span-keyword/
 - [CSS Grid Layout Course #10: Use "span"](https://www.youtube.com/watch?v=P9eFUr_mrE8)
 - [https://www.joomlashack.com/blog/tutorials/sizing-grid-items/](https://www.joomlashack.com/blog/tutorials/sizing-grid-items/)