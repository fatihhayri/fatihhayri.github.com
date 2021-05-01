---
layout: post
title: Sayfa planlama sihirbazı grid-template-areas
description: CSS Izgara ile sihirbazlık yapıyoruz. grid-template-areas ve grid-area özelliklerini açıklıyoruz.
lang: tr_TR
Date: 2019-04-22 09:10
categories: [CSS]
tags: [css-grid, grid-template-areas, grid-area]
image:
  feature: grid-area-line-tanimi.jpg
---

 - [CSS Grid'e (Izgara) Giriş](https://fatihhayrioglu.com/css-grid-giris/)
 - [CSS Grid Özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/)
 - [fr birimi](https://fatihhayrioglu.com/fr-birimi/)
 - [CSS Izgara çizgi isimlendirmesi ve kullanımı](https://fatihhayrioglu.com/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
 

CSS Grid yazılarımıza devam ediyoruz. [Css grid özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/) yazımızda grid ögelerini yerleştirmenin birkaç yöntemi var demiştik, `grid-template-area` özelliği bu yöntemlerden biridir. 

[Bir önceki yazıda](https://fatihhayrioglu.com/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/) grid çizgi isimlendirmesi yardımıyla grid ögelerinin konumunu belirlemiştik. Bu makalede `grid-area` ile tanımladığımız grid alanlarını daha önce görülmemiş bir şekilde ASCII karakter dizilimiyle (görsel olarak) konumlandırmayı göreceğiz. 

İlk olarak `grid-area` özelliğini öğrenelim.

## grid-area özelliği

CSS grid ögesi özelliklerinden olan `grid-area` özelliği grid alanlarını konumlandırmak için kullanılır. Web sayfalarımızı oluştururken belli alanlara bölerek kodlarız. grid yapılarında bu alanları `grid-area` özelliğiyle belirler ve grid satır ve sütunları üzerine yerleştirmesini yaparız. 

```css
grid-area: satir-baslangici / kolon-baslangici / satir-sonu / kolon-sonu;
```
![grid-area](https://fatihhayrioglu.com/images/grid-area-line-tanimi.jpg)

Bir grid alanının, grid üzerindeki yerini dört nokta değeriyle konumlandırabiliyoruz. Bu tanımları grid çizgisini belirleyen rakamlar veya bir önceki yazımızda belirttiğimiz grid çizgi isimleriyle yapabiliriz. Bir yöntem daha vardır ki o da bu yazımızın konusu. `grid-area` özelliğine bizim belirleyeceğimiz bir isim tanımlamak ve sonra bu isimleri `grid-template-area` özelliğiyle ızgaramız üzerine yerleştirmek.

```css
grid-area: ust-alan;
```
Bu isimlendirdiğimiz sayfa öğelerini daha sonra yerlerine oturtacağız.

```css
header {
  grid-area: ust-alan;
}

aside {
  grid-area: sol-menu;
}

section {
  grid-area: icerik;
}

.banner-alani {
  grid-area: banner-alani;
}

footer {
  grid-area: alt-alan;
}
````

Sayfamızı oluşturan ögeleri / alanları isimlendirdikten sonra bu alanları kod yazarken kullanacağız.

`grid-template-areas` tanımı yaparken kodun görsel hali (sırası, boşluklar ve yeri) tarayıcının kodu yorumlamasında etkili oluyor. Görsel yapının tam oturması için özellik ve tanımın ayrı satırlarda tanımlanmak dah mantıklı. 

Her bir **grid alan ismi** sayfadaki yerine göre kod blokunda yerleştirilir aralarında boşluk olur, her satır tırnaklarla belirtilir ve bir sonraki satır enter ile aşağı atılır.

```css 
grid-template-areas: 
  "ust-alan ust-alan ust-alan"
  "sol-menu icerik banner-alani"
  "alt-alan alt-alan alt-alan"
```

tanımıyla yerleşimimiz yapıyoruz. Kodumuzu uyumlu web öncelikli yaparsak.

```css 
grid-template-areas: 
  "ust-alan"
  "sol-menu"
  "icerik"
  "banner-alani"
  "alt-alan"

@media(max-width: 1024px) {
  grid-template-areas: 
    "ust-alan ust-alan ust-alan"
    "sol-menu icerik banner-alani"
    "alt-alan alt-alan alt-alan"
}
```

> codepen örneklerinde masaüstü görünümünü görmek için zoom değerini 0.25x seçiniz.

<iframe height="364" style="width: 100%;" scrolling="no" title="grid-template-areas - 1" src="//codepen.io/fatihhayri/embed/gyzypB/?height=364&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Süper değil mi? Sihir gibi. **Sayfa planlama sihirbazı.**

Bu yapıyla farklı sayfa planlarını çok kolay bir şekilde kodlayabiliriz. Mesela `alt-alan` grid alanının birinci kolonu `sol-menu`alanına üçüncü kolonunu da `banner-alani`'na vermek için sadece iki değişiklik yapmamız yeterli.

```css
grid-template-areas: 
  "ust-alan ust-alan ust-alan"
  "sol-menu icerik banner-alani"
  "sol-menu alt-alan banner-alani"
```

> codepen örneklerinde masaüstü görünümünü görmek için zoom değerini 0.25x seçiniz.

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template-areas - 2" src="//codepen.io/fatihhayri/embed/rbvbLM/?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Yapboz parçalarını yerleştirir gibi sayfamızı planlayabiliyoruz. Burada aklımızda olması gereken bir kuralı hatırlatmakta yarar var. Bu tanımlar kare veya dikdörtgen alanları tanımlamak için geçerlidir.

![grid-template-areas](https://fatihhayrioglu.com/images/grid-template-areas.gif)

Yukarıdaki örnekler hep eşit kolonlu yapılar için verilmiş örnekler, gerçekte eşit olmayan kolonlar için boş alanlar tanımlamamız gerekir. Bu gibi boş alan tanımları için `grid-template-areas`özelliğinde boşluk gelen yerleri nokta (.) koyarak belirtiriz.

Bu özelliği başta tanımlarken görselliğin önemli olduğunu söylemiştik. Tek nokta kolon yapılarını eşit göstermediği için düzensiz görünebilir kolon genişliklerini eşitlemek için tek nokta yerine bitişik olarak kolon genişliği kadar (......) nokta koyabiliriz. 

> codepen örneklerinde masaüstü görünümünü görmek için zoom değerini 0.25x seçiniz.

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template-areas - aksak kolon" src="//codepen.io/fatihhayri/embed/NmMmrZ/?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

> Noktalar arasına boşluk koyarsak herbir nokta bir grid alanı anlamına gelir.

Bu özelliği anlamak için örnek kodlar üzerine değişiklik yaparak pekiştirin. Bu denemeler çok eğlenceli. :)

Grid'e devam edeceğiz. 


Kalın sağlıcakla.

Serkan Bektaş'a teşekkürü unutmayalım. 

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
 - [https://alligator.io/css/css-grid-layout-grid-areas/](https://alligator.io/css/css-grid-layout-grid-areas/)
 - [https://css-tricks.com/simple-named-grid-areas/](https://css-tricks.com/simple-named-grid-areas/)
 - [https://thoughtbot.com/blog/concise-media-queries-with-css-grid](https://thoughtbot.com/blog/concise-media-queries-with-css-grid)
 - [https://dev.to/kenbellows/css-grid-areas-are-amazing-1gha](https://dev.to/kenbellows/css-grid-areas-are-amazing-1gha)
 - [https://www.smashingmagazine.com/2018/04/art-directing-web-css-grid/](https://www.smashingmagazine.com/2018/04/art-directing-web-css-grid/)
 - [https://twitter.com/Una/status/846159483197894656?s=20](https://twitter.com/Una/status/846159483197894656?s=20)
 - [https://twitter.com/jtucholski/status/1084664028260114432?s=20](https://twitter.com/jtucholski/status/1084664028260114432?s=20)
 - [https://hashnode.com/post/grid-template-areas-css-grid-system-cjqoozpee015i1fs1ezmipxg1](https://hashnode.com/post/grid-template-areas-css-grid-system-cjqoozpee015i1fs1ezmipxg1)
 - [https://www.youtube.com/watch?v=v5KzBPUEgGQ](https://www.youtube.com/watch?v=v5KzBPUEgGQ)
 - [https://www.joomlashack.com/blog/tutorials/how-to-place-items-with-grid-template-areas/](https://www.joomlashack.com/blog/tutorials/how-to-place-items-with-grid-template-areas/)