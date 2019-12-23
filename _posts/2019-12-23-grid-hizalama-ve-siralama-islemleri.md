---
layout: post
title: Grid hizalama ve sıralama işlemleri
description: Grid hizalama ve sıralama özelliklerini öğreniyoruz
lang: tr_TR
Date: 2019-12-23 09:10
Category: CSS
tags: [grid, justify-items, align-items, justify-content, justify-content, justify-self, align-self, place-items, place-content, place-self]
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
 9. [CSS Grid öge özellikleri](/css-grid-oge-ozellikleri/)

CSS grid yazılarımızın 10. sundayız. Yazımızın konusu hizalama ve sıralama hakkında olacaktır.

CSS grid ögesi ve kapsayıcısına atanan toplam 9 adet hizalama tanımları vardır. 

 - `justify-items`
 - `align-items`
 - `place-items`
 - `justify-content`
 - `align-content`
 - `place-content` 
 - `justify-self`
 - `align-self`
 - `place-self` 

[W3C'nin kutu modeli hizalama modülü](https://www.w3.org/TR/css-align-3/) olarak belirlediği modülün özellikleridir bunlar. Hem grid hemde flex hizalamaları için kullanılır. 

`justify-items`, `align-items`, tanımlarıyla `justify-content`, `align-content`,  tanımları arasındaki fark `-items` ile bitenlere atanan değerler kapsayıcı içindeki her bir ögeye ayrı ayrı uygulanırken, `-content` ile bitenlere atananlar kapsayıcı içindeki ögelerin hepsi bir içerik olarak kabul edilip topluca uygulanırlar.

Eğer [flex hizalama özelliklerini ve etkilerini](https://fatihhayrioglu.com/yenilenmis-flex-modulu/) biliyorsanız benzer şeyler grid içinde geçerlidir. Grid ögelerinin hizalamasında flex'e göre şöyle bir fark vardır: grid iki eksen üzerine etki ederken flex tek eksene etki eder.

![iki eksenli planlama](https://fatihhayrioglu.com/images/iki-eksenli.png)

Bu yazıda flex'te anlattığımız bilgileri tazeleyeceğiz. Bu özellikler kapsayıcıya yaptığı etki ile grid ögesine yaptığı etkileri ayrı ayrı inceleyelim.

## Kapsayıcı grid hizalama özellikleri

6'sı grid kapsayıcısına

 - `justify-items`
 - `align-items`
 - `place-items` kısaltması
 - `justify-content`
 - `align-content`
 - `place-content` kısaltması

3'ü grid ögesine atanır.

 - `justify-self`
 - `align-self`
 - `place-self` kısaltması

Grid kapsayıcı ve grid öge hizalama tanımları aşağıdaki değerleri alır.

-   `auto`
-   `normal`
-   `start`
-   `end`
-   `center`
-   `stretch`
-   `baseline`
-   `first baseline`
-   `last baseline`

 > Aşağıda verdiğimiz grid hizalama örneklerini sadece bir değer için vereceğiz. Siz yukarıdaki değerlerin her birini tek tek deneyerek sonuçlarını görebilirsiniz.

### justify-items

Kapsayıcı grid içindeki ögelerinin tamamının yatayda hizalanması için kullanılır.

```css
.kapsayici {
   display: grid;
   grid-gap: 1rem;
   grid-template-columns:  repeat(5, 150px);
   grid-template-rows: repeat(5, 100px);
   justify-items: center;
}
```

![justify-items](https://fatihhayrioglu.com/images/justify-items.png)

Yatayda tüm grid ögelerini ortlamış olduk. Grid ögesinin içeriği grid hücresinin alanından daha büyükse bu özellik işlevsel olur.

<iframe height="300" style="width: 100%;" scrolling="no" title="justify-items" src="https://codepen.io/fatihhayri/embed/jOEVOyM?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

`justify-items` atanmış kapsayıcı içindeki her bir grid ögesinin `justify-self` değerine atanmış gibi davranır.

### align-items

Kapsayıcı grid içindeki ögelerinin tamamının dikeyde hizalanması için kullanılır.

```css
.kapsayici {
   display: grid;
   grid-gap: 1rem;
   grid-template-columns:  repeat(5, 150px);
   grid-template-rows: repeat(5, 100px);
   align-items: center;
}
```

![align-items](https://fatihhayrioglu.com/images/align-items.png)

Dikeyde tüm grid ögelerini ortlamış olduk. 

<iframe height="300" style="width: 100%;" scrolling="no" title="align-items" src="https://codepen.io/fatihhayri/embed/PowpwMp?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

`align-items` atanmış kapsayıcı içindeki her bir grid ögesinin `align-self` değerine atanmış gibi davranır.

### place-items kısaltması

`place-items` tanımı yukarıda tanımladığımız `align-items` ve `justify-items` tanımlarının kısaltmasıdır. Yatay ve dikey tanımları ortak bir yerden yapılmış oluruz.

```css
.kapsayici {
   display: grid;
   grid-gap: 1rem;
   grid-template-columns:  repeat(2, 100px);
   grid-template-rows: repeat(3, 50px);
   justify-content: center end;
}
```
<iframe height="337" style="width: 100%;" scrolling="no" title="place-items" src="https://codepen.io/fatihhayri/embed/Powpqye?height=337&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

`place-` tanımları grid ile birlikte geldiği için diğer tanımlara göre tarayıcı desteği daha düşüktür. Şu an baktığımda %87 (Aralık 2019)

### justify-content

Grid ögelerinin genişliği kapsayıcıdan az olduğu durumlar için etkindir. Grid kapsayıcı içindeki ögeleri tek bir içerik gibi kabul edip ona göre atanan değerleri uygular. `justify-content` yatayda hizalama yapar.

Yukarıdaki değerlere ek olarak 

-   `space-around`
-   `space-between`
-   `space-evenly`

değerlerini de alır. 

```css
.kapsayici {
   display: grid;
   grid-gap: 1rem;
   grid-template-columns:  repeat(2, 100px);
   grid-template-rows: repeat(3, 50px);
   justify-content: center;
   width: 315px;
   height: 250px;
}
```

![justify-content](https://fatihhayrioglu.com/images/justify-content.png)

<iframe height="384" style="width: 100%;" scrolling="no" title="justify-content" src="https://codepen.io/fatihhayri/embed/YzPZXWG?height=384&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Grid kapsayıcı içindeki tüm ögeler bir içerik gibi kabul edip tümü birden yatayda ortalandı.

### align-content
Grid ögelerinin yüksekliği kapsayıcıdan az olduğu durumlar için etkindir. Grid kapsayıcı içindeki ögeleri tek bir içerik gibi kabul edip ona göre atanan değerleri uygular. `align-content` tanımı içeriği dikeyde hizalar.

Yukarıdaki değerler ek olarak 

-   `space-around`
-   `space-between`
-   `space-evenly`

değerlerini de alır. 

```css
.kapsayici {
   display: grid;
   grid-gap: 1rem;
   grid-template-columns:  repeat(2, 100px);
   grid-template-rows: repeat(3, 50px);
   align-content: center;
   width: 315px;
   height: 250px;
}
```
![align-content](https://fatihhayrioglu.com/images/align-content.png)

<iframe height="420" style="width: 100%;" scrolling="no" title="align-content" src="https://codepen.io/fatihhayri/embed/vYExOYK?height=420&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Grid kapsayıcı içindeki tüm ögeler bir içerik gibi kabul edilip tümü birden dikeyde ortalandı.

### place-content kısaltması

`place-content` tanımı `align-content` ve `justify-content` tanımlarının kısaltmasıdır.

```css
.kapsayici {
   display: grid;
   grid-gap: 1rem;
   grid-template-columns:  repeat(2, 100px);
   grid-template-rows: repeat(3, 50px);
   place-content: start center;
}
```

<iframe height="376" style="width: 100%;" scrolling="no" title="place-content" src="https://codepen.io/fatihhayri/embed/gObmpZe?height=376&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>


`place-` tanımları grid ile birlikte geldiği için diğer tanımlara göre tarayıcı desteği daha düşüktür. Şu an baktığımda %87 (Aralık 2019)

## Grid ögesi tanımları

CSS grid ögesi hizalama tanımları 3 tanedir. 

 - `align-self`
 - `justify-self`
 - `place-self` kısaltması

Aldığı değerler kapsayıcı değerleriyle aynıdır.

### justify-self

Tanımlandığı Css grid ögesinin yatayda hazilanmasını sağlar.

```css
.oge1 {
    justify-self: start
}
```

![justify-self](https://fatihhayrioglu.com/images/justify-self.png)

<iframe height="378" style="width: 100%;" scrolling="no" title="justify-self" src="https://codepen.io/fatihhayri/embed/PowpqRQ?height=378&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

`oge1`sınıfı tanımlı ilk eleman belirlenen hücrenin başlangıç çizgisine hizalanmıştır.

### align-self
CSS grid ögesine atanan bu tanımlama ile sadece tanımlı ögenin dikeydeki hizasını ayarlarız.

```css
.item1 {
    align-self: end;
}
```

![align-self](https://fatihhayrioglu.com/images/align-self.png)

<iframe height="300" style="width: 100%;" scrolling="no" title="align-self" src="https://codepen.io/fatihhayri/embed/MWYpwGd?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

`oge1`sınıfı tanımlı ilk eleman belirlenen hücrenin alt çizgisine hizalanmıştır.

### place-self kısaltması

CSS ögesine atanan `align-self` ve `justify-self` tanımları kısaltıp tek tanımda birleştirebilriz.

```css
.item1 {
    place-self: center right
}
``` 

<iframe height="300" style="width: 100%;" scrolling="no" title="place-self" src="https://codepen.io/fatihhayri/embed/xxbqGJV?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

`place-` tanımları grid ile birlikte geldiği için diğer tanımlara göre tarayıcı desteği daha düşüktür. Şu an baktığımda %87 (Aralık 2019)

## Sıralama order özelliği

`order` özelliği flex'ten bildiğimiz bir özellik. CSS grid ögeleri de tanımlanan `order` değerine göre sırasını ayaralar. `order` tanımı grid tarafından otomatik olarak sıralanmış ögelere etki eder, `grid-column`, `grid-rows` ve `grid-area`ile sıralaması özel olarak etikilenmiş ögelere etki etmez.

İçeriği dinamik olarak eklenen ögelerin olduğu bir yapıda `order` özelliği kullanılabilir. Dinamik birçok öge eklediğimiz bir yapıda bir ögenin her zaman en son sırada olmasını `order` ile sağlayabiliriz.

Flex'tekinin aksine grid ögelerinin sıralaması için sadece `order` özelliği yoktur. Yukarıda gördüğümüz ve diğer yazılarda gördüğümüz özellikler ile sıralama işini yapabiliyoruz. Grid yapısı içinde `order` çok aranacak bir özellik değil gibi.

 > Grid ögelerinin sıralama özellikleri sadece görsel olarak etki eder. Kaynak kodun sıralamasına etki etmediği için erişebilirlik açısından sorunlar çıkarabilir. Bu konuya dikkat etmek gerekir. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://alligator.io/css/align-justify/](https://alligator.io/css/align-justify/)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
 - [https://www.joomlashack.com/blog/tutorials/the-justify-content-and-align-content-properties/](https://www.joomlashack.com/blog/tutorials/the-justify-content-and-align-content-properties/)
 - [https://www.joomlashack.com/blog/tutorials/center-and-align-items-in-css-grid/](https://www.joomlashack.com/blog/tutorials/center-and-align-items-in-css-grid/)
 - [Wes Bos CSS GRID: Alignment + Centering — 17 of 25](https://www.youtube.com/watch?v=nxyk6yKD56c)
 - [CSS Grid Tutorial #6 - Aligning & Justifying Items](https://www.youtube.com/watch?v=X2-x-4wA9V4)
 - [CSS Grid Layout // Aligning Items on the Grid](https://www.youtube.com/watch?v=mnTu0E7V1AI)
 - [https://www.quackit.com/css/grid/tutorial/css_grid_alignment.cfm](https://www.quackit.com/css/grid/tutorial/css_grid_alignment.cfm)
 - [https://www.sitepoint.com/order-align-items-grid-layout/](https://www.sitepoint.com/order-align-items-grid-layout/)
 - [Wes Bos # CSS GRID: Re-ordering Grid Items — 18 of 25](https://www.youtube.com/watch?v=rBoveH7tdJU)
 - [Brian Haferkamp# Reorder Elements in CSS Grid Layout](https://www.youtube.com/watch?v=7GFWddR7SkA)
 - [Peter Sommerhoff # CSS Grid Layout Course #13: Source-Order Independence](https://www.youtube.com/watch?v=27J5G87U45U)
 - [https://css-irl.info/debugging-css-grid-part-3-auto-flow-order-and-item-placement/](https://css-irl.info/debugging-css-grid-part-3-auto-flow-order-and-item-placement/)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/place-self](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self)