---
layout: post
title: CSS Izgara çizgi isimlendirmesi ve kullanımı
description: CSS Izgara çizgi isimlendirmesi ve kullanımı. Izgara çizgileri ne işe yarar?
lang: tr_TR
Date: 2019-03-19 14:47
categories: [CSS]
tags: [css-grid, grid-, css-ızgara, ızgara-çizgi-ismi, grid-column, grid-row]
image:
  feature: grid-cizgi-isimleri.jpg
---

CSS, tanımları, değerleri ve birimleri W3C tarafından belirlenen bir standarttır.

```css
body {
    font-size: 16px;
}
```

özellik (font-size), değer (16) ve birim (px) W3C tarafından belirlenir.

CSS Grid modülündeyse bu kuralı değiştirip kullanıcının girdiği bazı değerleri anlamlandırmıştır. Grid isimlendirme başlığı altında anlatacağımız bu tanımlar birazının bizim birazının W3C'nin belirlediği isimlerdir. 

Bu makalede daha önce [grid özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/) yazımızda kısaca bahsedip geçtiğimiz grid çizgisi isimlendirmesi ve kullanımını göreceğiz.

Kendi belirlediğimiz değerlerin CSS'te kullanılması alışık olmadığımız durumlar olduğu için başta garipseyebiliriz ancak alışınca güzel oluyor.

![CSS Grid Modülü terimleri](https://fatihhayrioglu.com/images/grid-terimleri.png)

CSS Grid örneklerinde grid çizgisini belirleyen rakamlar yerine isimleri kullanmak daha okunaklı olmasını sağlar. 

Basit yapılı grid kodlarında çok ihtiyaç duymasak ta daha gelişmiş yapıdaki sayfa planlarının geliştirilmesi ve yönetilmesinde grid çizgi isimleri işe yarıyor. 

Bu tanımları yorum satırıyla çözemez miydik? Evet çözerdik ama buradaki tanımları yeri geldiğinde grid hücre ve alanlarını konumlandırırken kullanabiliyoruz. Bizim belirlediğimiz isimleri bir CSS değeri gibi kullanacağız.

İnsanlar rakamlara göre isimleri daha anlaşılır bulur.

CSS grid, sayfa yapılarımızı daha kolay oluşturmamızı sağlar. Üç kolonlu bir sayfa planını nasıl yapacağımızı görelim. Bu örnek üzerinde grid çizgi isimlendirmeyi anlatmaya çalışalım.

```html
<main>
  <header></header>
  <aside></aside>
  <div class="content"></div>
  <div class="banner"></div>
  <footer></footer
</main>
```

HTML'imiz yukarıdaki gibi olur. 

CSS kodunu yazmadan önce sayfa yapısını düşünelim.

3 kolonlu bir sayfa planımız olacak, yani `grid-template-columns` özelliğine 3 adet tanım yapacağız. 3 adet de satır olacak `grid-template-rows` özelliğine 3 tanım yapacağız.

Belirlediğimiz bu 3 kolonun genişlikleri sabit genişlik olarak belirlendiyse tek tek bu genişlikleri tanımlarız ama esnek bir yapı olsun istersek dikeyde tahminen 10 parça bir alanımız olsa bunları içeriklerine göre 3 e bölersek 3 birim 5 birim ve 2 birim gibi bir sonuç çıkar. Kolon kodumuz `grid-template-columns: 3fr 5fr 2fr` olur.

Gelelim satırları belirlemeye satır yüksekliği genelde içeriğe göre şekillenir ancak biz satır yüksekliklerini de esnek 3 parçaya bölelim. Yükseklik tanımlarında ilk olarak gösteren aracın yüksekliğini almak için `height: 100vh` tanımlarız. 11 parçaya bölüp gelecek içeriğe göre 3'e bölersek satırları `grid-template-rows: 3fr 6fr 2fr` şeklinde paylaştırabiliriz.

Kodumuz aşağıdaki gibi olacaktır. 

```css
.kapsayici {
  display:grid;
  grid-template-columns: 3fr 5fr 2fr;
  grid-template-rows: 3fr 6fr 2fr;
  grid-gap: 15px;
  height: 100vh;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="grid çizgi isimlendirme" src="//codepen.io/fatihhayri/embed/RdQwNG/?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Yukarıdaki gibi bir sonuç çıkar. Burada `<header>` ve `<footer>` alanlarının tam satırı kaplayacak şekilde genişletmemiz gerekiyor. CSS Grid ile bunu yapmanın birçok yöntemi var. Şimdiye kadar anlatmadığımız ve ilerde anlatmayı planladığımız grid ögesi özellikleri yardımıyla bu işi yapalım.

![grid çizgi numaraları](https://fatihhayrioglu.com/images/grid-satir-numaralari.jpg)

```css
main header {
  grid-column: 1 / 4;
  grid-row: 1;
}

main footer {
  grid-column: 1 / 4;
  grid-row: 3;
}
```

<iframe height="334" style="width: 100%;" scrolling="no" title="grid çizgi isimlendirme -2" src="//codepen.io/fatihhayri/embed/eXMmJY/?height=334&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

İstediğimiz sonucu elde ettik. 

Kodu biraz yorumlarsak. Grid çizgilerine tarayıcılar yukarıda görüldüğü gibi rakamlar atar. Biz bu rakamları kullanarak grid ögelerimizi ve grid alanlarımızı konumlandırabiliyoruz. `<header>` için yaptığımız tanımda `grid-column: 1 / 4`
tanımı **header** elemanının  kolon yerleşiminin grid çizgisinin 1.'sinden başlayıp 4.'ünde sonlandığını belirtiyor. `grid-row` tanımıysa header elemanının dikey grid çizgisinin 1.'sinde olduğunu gösteriyor. Aslında burada da başı ve sonu olarak tanımlayabilriz, `grid-row: 1/2` şeklinde. Buradaki yazım kısayoludur. 

Benzer şekilde **footer** elemanına da tanımlar yaptık tek fark footer elemanı dikeyde 3. satırın sonrasında olması.

## Grid İsimlendirme

Gelelim bizim konumuza, buradaki örneğimiz çok basit bir 3 kolon 3 satırlı bir örnekti. Bir çok projede durum çok daha karmaşık hal alır. Karmaşık yapılı sistemlerde bu rakamlar bize anlamsız gelir. Bunun çözümü **Grid Çizgi İsimlerini** kullanmaktan geçiyor. 

Yukarıdaki örneği çizgi isimlerini kullanarak yapalım.

![grid çizgi isimleri](https://fatihhayrioglu.com/images/grid-cizgi-isimleri.jpg)
{: .resmi-ortala}

`grid-template-columns: [sol-menu-star] 3fr [icerik-start] 5fr [banner-alani-start] 2fr;`

şeklinde tanımlarımızı isimlendirerek koda anlam kattık. Tanımlara dikkat edersek başını bizim belirlediğimiz ama sonu sabit isimlerdir.

`*-start` 

gibi. Aynı şekilde 

`*-end`

kullanımı da çizgi ismi bitişi için kullanılır. Tanımlarımızı köşeli parantez [] içinde kullanıyoruz. Bu tanımları sadece başlangıç değerleriyle yapabildiğimiz gibi başlangıç ve bitiş değerlerini yazarak da yapabiliriz. 

> Izgara çizgi isimlerinde CSS'in kullandığı anahtar kelimler kullanılamaz `auto` ve `span` vd.

----

`grid-template-columns: [sol-menu-start] 3fr [sol-menu-end icerik-start] 5fr [icerik-end banner-alani-start] 2fr [banner-alani-end];`

Kodumuz daha da anlamlı hale geldi.

Aynı şekilde dikeydeki çizgi isimlerini kullanarak satır tanımlarımızı da güncelleyelim.

`grid-template-rows: [ust-alan-start] 3fr [ust-alan-end icerik-start] 6fr [icerik-end alt-alan-start] 2fr [alt-alan-end];`

Grid isimlendirmenin kodu anlamlandırmanın dışında CSS değeri olarak atanma özelliği de vardır. Yine yukarıdaki örnekle devam edelim. `<header>` ve `<footer>` için yaptığımız tanımları aşağıdaki gibi değiştirelim.

```css
main header {
  grid-column: [sol-menu-start] / [banner-alani-end];
  grid-row: [ust-alan-start];
}

main footer {
  grid-column:[sol-menu-start] / [banner-alani-end] ;
  grid-row: [alt-alan-start alt-alan-end];
}
``` 
Tanımladığımız isimlerin işlevsel olarak kullanılıyor olması süper bir avantaj. Rakam yerine isim kullanmak anlaşılabilirliği arttırıyor.

<iframe height="424" style="width: 100%;" scrolling="no" title="grid çizgi isimlendirme -3" src="//codepen.io/fatihhayri/embed/wOmjNO/?height=424&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

**Uyumlu (responsive) web öncelikli bir kod yapısı kullanırsak**

Mobil öncelikli bir yapı ve uyumlu web kodlarını eklersek kod rakamlı kullanım için daha da karmaşıklaşır. Ancak isimlendirme ile yapılan uyumlu web kodları bu karışıklığı da önleyerek işimizi kolaylaştırıyor.

<iframe height="462" style="width: 100%;" scrolling="no" title="grid çizgi isimlendirme uyumlu web" src="//codepen.io/fatihhayri/embed/Lardma/?height=462&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Uyumlu web kodlarken `grid-template-area` ile yazmak daha kolay ve avantajlı ancak bu yazıda bahsettiğimiz gibi bir seçeneğin olduğunu bilmek güzel.

Kalın sağlıcakla.

## Kaynaklar

 - https://www.w3.org/TR/css-grid-1/#named-lines
 - https://www.joomlashack.com/blog/tutorials/how-to-name-grid-lines/
 - https://webdesign.tutsplus.com/tutorials/quick-tip-name-your-css-grid-lines-just-in-case--cms-27844
 - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines
 - https://gedd.ski/post/naming-css-grid-lines/
 - https://www.smashingmagazine.com/2017/10/naming-things-css-grid-layout/
 - https://learncssgrid.com/#naming-positioning-lines-same-name
 - https://www.youtube.com/watch?v=mQ5r8u1bT50
 - https://mozilladevelopers.github.io/playground/css-grid/09-named-lines
 - https://codepen.io/airen/pen/RGkXqZ?editors=1100
 - https://rachelandrew.co.uk/archives/2013/04/29/css-grid-layout-named-grid-lines-and-areas/
 - https://www.smashingmagazine.com/2017/10/naming-things-css-grid-layout/