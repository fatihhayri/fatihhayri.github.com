---
layout: post
title: CSS Grid kısayolları - grid-template ve grid
description: CSS Grid kısayolları grid-template ve grid anlattık
lang: tr_TR
Date: 2019-12-23 09:10
categories: [CSS]
tags: [grid, grid-template, kısatlma]
image:
  feature: grid-kisaltma.png
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
 10. [Grid hizalama ve sıralama işlemleri](/grid-hizalama-ve-siralama-islemleri/)

CSS grid yazılarımızın 11.sindeyiz. CSS grid modülünün öğrenilmesi diğer CSS modüllerine göre daha zor ve karışık. Toplamda 17 adet tanım olduğu düşünülürse bu karmaşa daha iyi anlaşılır. Bu tanımları azaltmak için kısaltmalar kullanılmıştır. Buraya kadar yazdığımız makalelerde yeri geldikçe bu kısaltmalardan bahsettik. Şimdiye kadar bahsettiğimiz kısaltmalar:

 - [`grid-column-start` ve `grid-column-end` kısaltması `grid-column`](/css-grid-oge-ozellikleri/)
 - [`grid-row-start` ve `grid-row-end` kısaltması `grid-row`](/css-grid-oge-ozellikleri/)
 - [`grid-column` ve `grid-row `kısaltması `grid-area`](/css-grid-oge-ozellikleri/)
 - [`align-content` ve `justify-content` kısaltması `place-content`](/grid-hizalama-ve-siralama-islemleri/)
 - [`align-items` ve `justify-items` kısaltması `place-items`](/grid-hizalama-ve-siralama-islemleri/)
 - [`align-self` ve `justify-self` kısaltması `place-self`](/grid-hizalama-ve-siralama-islemleri/)
 - [`grid-gap-column` ve `grid-gap-row `kısayolu `grid-gap`](https://fatihhayrioglu.com/css-grid-ozellikleri/)

Bu yazımızda ise
 - `grid-template`
 - `grid` 

kısaltmalarından bahsedeceğiz.

## grid-template kısaltması

`grid-template-columns`, `grid-template-rows` ve `grid-template-area` özelliklerinin kısaltmasıdır. 

Bu özelliklerin tanımını ve kullanımını [CSS Grid Özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/ "CSS Grid Özellikleri") yazımızda anlatmıştık.

```css
.kapsul {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
}
```
 tanımını aşağıdaki şekilde kısaltabiliriz.

```css
/* grid-template-rows / grid-template-columns */
.kapsul {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template kısayolu" src="https://codepen.io/fatihhayri/embed/abzWKRo?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

`grid-template-areas` tanımını da bu kısaltma içinde kullanabiliyoruz.

```css
/* grid-template-areas grid-template-rows / grid-template-columns */
  grid-template: 
            "menu ust ust" 4ch
            "menu icerik icerik" auto
            "baner alt alt" 4em / 20% 20px 1fr;
```

Bu kodun açık hali

```css
grid-template-rows: 4ch auto 4em;
grid-template-columns: 20% 20px 1fr;
grid-template-areas: "menu ust ust" "menu icerik icerik" "baner alt alt";
``` 
şeklindedir.

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template kısayolu - 2" src="https://codepen.io/fatihhayri/embed/PowmayK?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

Firefox, CSS **grid** ve **flex** konusunda diğer tarayıcılara göre daha iyi araçlar sunuyor. Grid kısayollarını kullanırken açık halini görmek çok kolay. Tanımın yanındaki sağ ok butonuna tıklayınca tek tek tanımını gösteriyor.

![grid kısayolu detayı](https://fatihhayrioglu.com/images/grid-template-firefox.png){: loading="lazy" }

## grid kısaltması

Grid kısaltması sadece tanımlı ve tanımsız grid atamalarını kısaltır. CSS grid alt özellikleri bu kısaltma kapsamında değildir. Ara boşluk değerini (gap) bu kısaltma ile sıfırlanamaz.

**Belirlenmiş (explicit) tanımlar:**
 - `grid-template-columns`
 - `grid-template-rows`
 - `grid-template-areas`

**Belirlenmemiş (implicit) tanımlar:**
 - `grid-auto-rows` 
 - `grid-auto-columns`
 - `grid-flow`

Yukarıda sıralanan tanımların kısayolu olarak `grid` tanımını kullanabiliriz.

İlk örneğimizi `grid-template-x`tanımlarının kısayolu olarak kullanımı için yapalım.

```css 
.container  { 
    grid: 100px 300px / 3fr 1fr;
}
```
kodunun açılımı:

<iframe height="300" style="width: 100%;" scrolling="no" title="grid kısayolu - 1" src="https://codepen.io/fatihhayri/embed/VwYWppB?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

Bir başka örnek explicit (**belirlenmiş**) ve implicit(**belirlenmemiş**) tanımların birlikte kullanımına yapalım.

```css
.kapsul {
    display: grid;
    grid-template-rows: repeat(3, [line1 line2 line3] 150px);
    grid-auto-columns: 100px;
    grid-auto-flow: column;
}
```

Kısaltırsak:

```css
.kapsul  {
    /* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
   display: grid;
   grid: repeat(3, [line1 line2 line3] 150px) / auto-flow 100px;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="grid kısayolu - 2" src="https://codepen.io/fatihhayri/embed/BayZWRX?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

Bir başka örnek:

```css
.kapsul  { 
    grid-template-columns: repeat(3, [line1 line2] minmax(20em, max-content));
    grid-auto-rows: 50px;
    grid-auto-flow: dense;
}
```

Kısaltması:

```css
.kapsul  { 
    grid: auto-flow dense 50px / repeat(3, [line1 line2 line3] minmax(20em, max-content));
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="grid kısayolu - 3" src="https://codepen.io/fatihhayri/embed/oNgwZey?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

CSS kısayolları kullanmayı severim ancak CSS grid kısayollarındaysa aynı şeyi söyleyemeyeceğim. Bu biraz da grid ile yeni yeni kodluyor olmamızdan  kaynaklanıyor olabilir. Grid kısayolu kullandığımızda kodumuz ilk bakışta anlamsız bir kod yığını gibi duruyor. Bu kodu bir editör ile yönetiyorsanız sorun değil ama kendiniz yazıp yönetecekseniz sıkıntı. Belli bir süre açık halini kullanıp iyice aşina olduktan sonra kısayolları kullanabiliriz.

Yardımlarından dolayı [Serkan Bektaş](https://twitter.com/serkanbektasim)'a teşekkürlerimi sunarım. 

Kalın sağlıcakla.

##  Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
 - [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
 - [https://gridbyexample.com/learn/2016/12/22/learning-grid-day22/](https://gridbyexample.com/learn/2016/12/22/learning-grid-day22/)
 - [https://cssreference.io/property/grid-template/](https://cssreference.io/property/grid-template/)
 - [https://www.quackit.com/css/css3/properties/css_grid-template.cfm](https://www.quackit.com/css/css3/properties/css_grid-template.cfm)
 - [https://tympanus.net/codrops/css_reference/grid/#section_grid-template](https://tympanus.net/codrops/css_reference/grid/#section_grid-template)
 - [https://www.geeksforgeeks.org/css-grid-template-property/](https://www.geeksforgeeks.org/css-grid-template-property/)
 - [https://webdesign.tutsplus.com/tutorials/save-time-with-the-css-grid-shorthand-property--cms-31590](https://webdesign.tutsplus.com/tutorials/save-time-with-the-css-grid-shorthand-property--cms-31590)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
 - [https://cssreference.io/property/grid/](https://cssreference.io/property/grid/)
 - [https://tympanus.net/codrops/css_reference/grid/#section_grid](https://tympanus.net/codrops/css_reference/grid/#section_grid)
 - [https://www.quackit.com/css/css3/properties/css_grid.cfm](https://www.quackit.com/css/css3/properties/css_grid.cfm)
