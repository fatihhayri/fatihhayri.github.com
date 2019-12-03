---
layout: post
title: repeat() işlevi, auto-fill ve auto-fit değerleri
description: CSS Grid repeat() işlevi, auto-fill ve auto-fit değerlerinin anlatımı. auto-fill ve auto-fit farkı
lang: tr_TR
Date: 2019-12-03 08:10
Category: CSS
tags: [grid, uyumul-web, responsive, auto-fit, auto-fill, minmax, repeat]
image:
  feature: grid-ozellikleri-resmi.png
---

 1. [CSS Grid'e (Izgara) Giriş](https://fatihhayrioglu.com/css-grid-giris/)
 2. [CSS Grid Özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/)
 3. [fr birimi](https://fatihhayrioglu.com/fr-birimi/)
 4. [CSS Izgara çizgi isimlendirmesi ve kullanımı](https://fatihhayrioglu.com/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
 5. [Sayfa planlama sihirbazı grid-template-areas](https://fatihhayrioglu.com/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas")
 6. [Explicit(belirlenmiş) ve implicit(belirlenmemiş) grid ögeleri](https://fatihhayrioglu.com/explicit-belirlenmis-ve-implicit-belirlenmemis-grid-ogeleri/)
 7. [CSS minmax işlevsel değeri](https://fatihhayrioglu.com/css-minmax-islevsel-degeri/)

CSS grid yazılarımızın 8. sinde sizlere `repeat` işlevi ve beraberinde kullanılan `auto-fit`, `auto-fill` ve `minmax` değerlerini anlatacağım. [minmax işlevinden bir önceki yazımızda bahsetmiştim](https://fatihhayrioglu.com/css-minmax-islevsel-degeri/). Burada sadece `minmax`'ın `repeat` içindeki kullanımına değineceğim. 

CSS grid'in göz alıcı özelliklerinden birisi ögeleri otomatik olarak yerleştirmesidir. Medya sorguları olmadan sayfa planlarımızı uyumlu hale getirmek benim hayal ettiğim bir özellikti. Tabi bunun sadece tekrarlanan grid ögeleri için olması üzücü, umarım ilerde tüm grid ögeleri için benzer bir özellik olur.

## repeat işlevi

`repeat` işlevi uyguladığımız `grid-template-columns` ve `grid-template-rows` tanımlarının içindeki tekrarlayan yapıları teke indiren bir kısayoldur. 

Örneğin 12 kolonlu ve kolonları eşit olarak yayılan esnek bir sayfa yapısını kodlamak isteyelim.

```css
display:grid;
grid-template-area: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
```
Uğraşı isteyen ve kötü gözüken bir kod, işte tam burada CSS grid `repeat` işlevi devreye giriyor.

```css
display: grid;
grid-template-columns: repeat(12, 1fr);
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid repeat " src="https://codepen.io/fatihhayri/embed/OJJeeEb?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Bu kadar. Nasıl çok basit değil mi?

```css
repeat(12, 1fr)
````

İlk parametre tekrarın adedi, ikinci parametre tekrarlanacak grid ögesinin boyutunu gösteriyor. Değer olarak ızgara izi değerlerinin tümünü (ölçü değerleri, fr, min-content, max-content ve auto) alır.

Başka bir örnek yapalım. Bu sefer farklı boyutlardaki tekrarlayan kolonlarımız olsun.

```css
display: grid;
grid-template-columns:40px 1fr 2fr 40px 1fr 2fr 40px 1fr 2fr 40px 1fr 2fr;
```
gibi bir kodu tekrar eden blokları birleştirerek aşağıdaki gibi yazabiliriz.

```css
display: grid;
grid-template-columns: repeat(4, 40px 1fr 2fr);
```
şeklinde yazabiliriz. 

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid repeat 2" src="https://codepen.io/fatihhayri/embed/GRRVKJB?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Solda 40px ile başladık ancak en sağa 40px tekrar etmediği için koyamadık. Izgara izi tanımlarında `repeat` işlevini tekrar etmeyen değerlerle birlikte de kullanabiliyoruz.

```css
display: grid;
grid-template-columns:repeat(3, 40px 1fr 2fr) 40px;
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid repeat 3" src="https://codepen.io/fatihhayri/embed/ZEEgOrx?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

şeklinde bir tanım ile istediğimiz sonucu alırız. Bu şekilde sayfa planımızda tekrarlayan alanlar ve tekrarlamayan alanları birlikte kullanarak bir çok çözüm üretebiliriz. Aynı şekilde birden fazla `repeat` işlevini de kullanabiliriz.

Örnekleri genelde kolonlar üzerinden versek te satırlar içinde aynı durum geçerlidir.

## repeat ve minmax işlevini birlikte kullanalım

Yukarıdaki örnekler de gördüğümüz gibi geniş alanlarda esnek değerler iyi sonuç verirken daha küçük alanlarda ögeler büzüşüp işlevsiz görünmektedir. Bu durumu engellemek için bir önceki yazımda anlattığım `minmax` işlevini kullanacağız.

```css
display: grid;
grid-template-columns: repeat(12, minmax(200px, 1fr));
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid repeat ve minmax" src="https://codepen.io/fatihhayri/embed/yLLmvVL?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Bu kodlama sonucunda da sayfada yatay kaydırma çubuğu çıkacaktır. Bu kaydırmayı engellemek için `auto-fit` ve `auto-fill` değerlerini kullanabiliriz.

## auto-fit ve auto-fill değerleri

Bu değerler sayfa yapısını ve kolonları/satırları görüntüleyen aracın boyutuna göre bir alt satıra/yan kolona geçişini otomatik bir şekilde ayarlar. Bunu medya sorgusu kullanmadan yapmaları müthiş. Bu değerler özetle CSS grid ögelerinin satır içinde alt satıra kayıp kaymayacağını ayarlar.

Farklı bir örnekle bu değerleri anlamaya çalışalım.

```css
.container {
   display: grid;
   grid-template-columns: repeat(4, 200px);
   grid-gap: 1.5rem;
}
```
Genişliği 200px olan grid ögelerini 4'lü kolonlara ayırır. Gösterilen aracın durumuna göre sağ tarafta boşluk oluşabilir. Masaüstü ekranlarda 5. öge ilk satıra sığardı ancak biz 4 kolon tanımı yaptığımız için 4 kolondan sonrasını bir alt satıra atacaktır. Uyumlu bir sayfa planını düşündüğümüzde eğer sığıyorsa bir üst satırda göstermek daha güzel olurdu. Bunun için görüntülenen aracın boyutuna göre medya sorgularıyla `grid-template-columns` değeri tanımlamak gerekirdi. İşte burada yardımımıza tekrarlanan ögeler için `auto-fill` ve `auto-fit` değerleri  yetişiyor.

Yukarıdaki tanımı aşağıdaki şekilde değiştirerek

```css
grid-template-columns: repeat(auto-fill, 200px);
```

200px'lik kolonlar dizilecektir. Yukarıdaki gibi 4 adet kolon olarak sınırlanmayacak dizilen kolonların sağında 200px'lik veya daha fazla boşluk olduğunda bir ögeyi ilk satıra çıkaracaktır. Bir de `auto-fit`tanımı var.

```css
grid-template-columns: repeat(auto-fit, 200px);
```

`auto-fill` ile `auto-fit` tanımlarının arasındaki fark ancak satır genişliğinin, grid ögelerinin toplam genişliğinden daha fazla olduğu durumlarda ortaya çıkar.  `auto-fill` ile `auto-fit` tanımları sayesinde grid ögelerinin fazladan kalan boşluğu nasıl değerlendirmesi gerektiğine biz karar verirriz. Aşağıdaki hareketli giflerde durum daha iyi anlaşılır.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid repeat, auto-fill ve auto-fit" src="https://codepen.io/fatihhayri/embed/vYEYgBj?height=300&theme-id=13521&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

![auto-fill auto-fit karşılaştırma](https://fatihhayrioglu.com/images/repeat-auto-fill-auto-fit.gif)

Hareketli gif'te görüldüğü gibi kapsayıcı genişliği içerik toplam genişliğini geçince fark anlaşılıyor. `auto-fill`tanımında boş kolonlar eklerken, `auto-fit`tanımında boş alanları mevcut öge genişliğine ekliyor.  

Farkı görmek için bir diğer örnek ise [Wes Bos'un videosunda anlattığı örnek](https://www.youtube.com/watch?v=asfqwwrXis4&t=5s).

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid repeat, auto-fill ve auto-fit 2" src="https://codepen.io/fatihhayri/embed/xxbxmJe?height=300&theme-id=13521&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

En son elemana -1 tanımı yapalım. Daha sonraki bir yazımızda grid ögesi tanımlarını öğreneceğiz.

```css
.grid-ogesi-7 {
  grid-column-end: -1;
}
````

Kodu 7 numaralı elemanı grid kapsayıcısının en sağına yaslamış olduk. Tabi bunu `auto-fill` tanımlı kapsayıcıda görebiliyoruz. `auto-fit`tanımlı kapsayıcı içindeki ögeler boş alanı doldurduğu için böyle bir durum söz konusu bile olamıyor.

Kalın sağlıcakla.

## Kaynaklar

- https://alligator.io/css/css-grid-layout-repeat-notation/
- https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
- [https://www.joomlashack.com/blog/tutorials/auto-fill-and-auto-fit-keywords-in-css-grid/](https://www.joomlashack.com/blog/tutorials/auto-fill-and-auto-fit-keywords-in-css-grid/)
- [https://medium.com/@erdemuslu/css-grid-auto-fill-ve-auto-fit-c496f6d89405](https://medium.com/@erdemuslu/css-grid-auto-fill-ve-auto-fit-c496f6d89405)
- [https://rachelandrew.co.uk/archives/2016/04/12/flexible-sized-grids-with-auto-fill-and-minmax/](https://rachelandrew.co.uk/archives/2016/04/12/flexible-sized-grids-with-auto-fill-and-minmax/)
- [https://dev.to/nunocpnp/css-grid-auto-fit-auto-fill-4hkh](https://dev.to/nunocpnp/css-grid-auto-fit-auto-fill-4hkh)
- [CSS Grid Auto-fit vs Auto-fill](https://www.youtube.com/watch?v=6LJjEDOO23o)
- [https://twitter.com/wesbos/status/925799760438624257](https://twitter.com/wesbos/status/925799760438624257)
- [https://stackoverflow.com/questions/43129360/css-grid-wrapping](https://stackoverflow.com/questions/43129360/css-grid-wrapping)
- [https://dev.to/jonstodle/responsive-layout-with-css-grid-part-2-auto-fill--auto-fit-dij](https://dev.to/jonstodle/responsive-layout-with-css-grid-part-2-auto-fill--auto-fit-dij)
- [CSS GRID: auto-fit and auto-fill — 12 of 25](https://www.youtube.com/watch?v=asfqwwrXis4&t=5s)