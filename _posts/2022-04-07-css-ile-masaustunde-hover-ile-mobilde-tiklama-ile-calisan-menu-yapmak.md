---
layout: post
title: CSS ile masaüstünde hover ile mobilde tıklama ile çalışan menü yapmak
description: CSS ile masaüstünde hover ile mobilde tıklama ile çalışan menü yapmak
lang: tr_TR
Date: 2022-04-07 09:00
Category: CSS
tags: [CSS, medya-sorguları]
image:
  feature: hover-kilik-ayrimi.png
---

Bu konuya ilgim ilk olarak "responsive mi? adaptive mi?" konusunu tartışırken geldi. Bir menümüz var ve bunu responsive yaparsak menüyü masaüstünde hover ile mobilde ise tıklama ile çözmemiz lazım ve bu ayrımı yakalamak için javascript kullanmalıyız diye bir negatif yönünden bahsedildi. (Negatiflik, javascript kaynaklarını geç yüklenmesi ve bundan ötürü ilk açılırken menünün aktifleşmesinin gecikmesi) Yeni gelen medya sorgularıyla bunu CSS ile yapmanın mümkün olacağını söyledim.

Daha sonra bunu nasıl yaparım diye bir örnek yapmaya karar verdim. Örnek ve yazı böylece çıktı.

[Medya sorgularının 4. seviyesiyle](https://www.w3.org/TR/mediaqueries-4/) birlikte [hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover), [any-hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover), [pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) ve [any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer) tanımları geldi. Biz bu tanımları kullanarak örneğimizi yapacağız.

Burada normal responsive kodlamadan farklı olarak fare ile tıklama yapanların kodu ile dokunmatik araçlardaki kodlar ayrı birer medya bloku içinde yazmamız gerekiyor. Bunun sebebi birisi için yazdığımız kodun diğerini etkilemesini engellemek.

Kodumuzu iki bölüme ayıracağız;

**Dokumantik araçlarda yani mobilde;**

```css
/* dokunmatik menü */
@media (hover: none) {
  ul li ul {
    position:absolute;
    transform: translateX(-300px);
    transition:transform .2s ease-in-out;
    border-bottom: 1px solid black;
  }
  
  .menuAC:checked + ul {
    transform: translateX(0);
    height:auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
  }
}
```
`@media (hover: none)` ile dokunmatik araçlara uygula diyoruz. Sonrası bildiğmiz tıklama ile menü açma kodumuz.

![Mobil menü](https://fatihhayrioglu.com/images/mobil-menu-medya.gif)

Masaüstü araçlar için;

```css
/* Desktop menu */
@media(hover: hover) and (pointer: fine) {
  ul li ul {
    position:absolute;
    display: none;
  }
  
  ul li ul li {
    display: block;
  }
  
  ul li:hover ul {
    top: 30px;
    left: 0;
    display: block;
  }
}
```

`@media(hover: hover) and (pointer: fine)` kodu ile bu alandaki kodların sadece hover ile çalışan araçlarda çalışmasını sağlıyoruz. Sonrasındaki kod bildiğimiz hover ile açılır menü kodu.

<iframe height="300" style="width: 100%;" scrolling="no" title="Mobil - Desktop click / hover menu" src="https://codepen.io/fatihhayri/embed/XWRwrNZ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Tarayıcı desteği de gayer iyi.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

## Kaynaklar

 - [https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c](https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c)
 - [https://ferie.medium.com/detect-a-touch-device-with-only-css-9f8e30fa1134](https://ferie.medium.com/detect-a-touch-device-with-only-css-9f8e30fa1134)
