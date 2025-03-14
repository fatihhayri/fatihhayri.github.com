---
layout: post
title: CSS subgrid
description: subgrid tanımı
lang: tr_TR
Date: 2023-10-03 14:30
Category: CSS
tags: [grid, subgrid]
image:
  feature: subgrid.png
---

CSS'in son yıllardaki atağından önceki en önemli gelişme grid özelliğiydi. Grid çıkarken `subgrid`'ide içeren bir standart ile çıkacakken tam olgunlaşmadığı için bir sonraki adıma bırakılmıştı. Şuan grid iyice yerleştiğine göre artık `subgrid`'i de ekleyelim dedi W3C.  Chrome'un geçen hafta desteğini açıklamasıyla tüm tarayıcıların desteklediği bir tanım oldu artık. 

![CSS Grid Modülü terimleri](https://fatihhayrioglu.com/images/grid-terimleri.png)
Kapsayıcı elemana `display: grid` tanımı yapıldığında grid sadece bir seviye alttaki elemanları grid ögesi yaparak onlara erişir. Onlarında altındaki ikinci seviye ögelere erişemez.  Torun ögelere de erişimi bize `subgrid` sağlıyor. 

İçiçe grid kullanımlarında alttaki grid üst elemandan ayrı bir şekilde hareket eder. Ana grid'in tanımlarını alt grid'e de kalıtsal olarak etkilemesini sağlamak için `subgrid`tanımını kullanırız. 

 > Burada şöyle bir çözüm de var `display: contents`ile de aynı çözüm sağlanıyor fakat arada farklar var. `subgrid`'in avantajları grid özelinde daha çok.

## Nasıl kullanılır

Subgrid, içiçe kullanılmış grid elemanlarından iki alt seviyedeki elemanların üstteki tanımları alsın mı almasın mı kararını vermemizi sağlar. `grid-template-columns` ve `grid-template-rows` özelliklerine atanabilen bir tanım `subgrid`. 

Örnekle anlaması daha kolay olacak. 

## Kart örneği

Subgrid'i anlatan makalelerde çok fazla karşılaştığımız kart örneğini yapalım. Daha önce kodladığım bir sitede benzer bir yapıyı flex ile yapmıştım ve tabi çözemediğim için sabit bir yükseklik verip geçtiğim örnek aklıma geldi.

<iframe height="440" style="width: 100%;" scrolling="no" title="subgrid" src="https://codepen.io/fatihhayri/embed/eYbKPJV?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/eYbKPJV">
  subgrid</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Sayfa üç kolonlu ana yapıdan oluşuyor. Ama bizim odaklanacağımız kısım sağdaki `main` alanı. `main` alanı içinde 4 kart var ve bunların içeriği değişkenlik gösterebiliyor. Tabi biz burada sabit bir yükseklik kullandığımız için gelen içeriğe göre bu yükseklik değerini değiştirmemiz gerekiyordu. Bu örnek için bu çok sorun olmadı çünkü içerik çok fazla değişmiyordu. Daha dinamik olan benzer örneklerde çözüm bulmak büyük sıkıntı. 

Gelelim `subgrid` ile olan çözüme;

- `main`ana grid tanımımızın olduğu kısım `grid-template-columns: repeat(4, 1fr);` ile 4 kolonlu bir grid üretiyor. 
- İçteki `section` alanı alt grid `display: grid;` 
- `section`içeriğini oluşturacak satırları tanımlıyoruz `grid-row: span 4;`
- Son olarakta `section`kısmının yatayda bir subgrid olduğu bildiriyoruz `grid-template-rows: subgrid;`

Bu kod ile biz içiçe iki grid kullandığımızı ve `section` kısmının satırlarının da bu subgrid'in satırları olduğunu belirtiyoruz. Böylece satırların içeriğine göre yatayda dengelemiş oluyoruz. Mükemmel değil mi?

## Form örneği

Bir diğer örnekte [Miriam Suzanne](https://front-end.social/@mia)'ın kaynaklar kısmında verdiği form örneği. Başka yerlerde de bu örnek kodlanmış ancak ben ilk olarak Miriam'ın anlatımında gördüğüm için onun örneği üzerinden gideceğim. 

<iframe height="478" style="width: 100%;" scrolling="no" title="Subgrid Forms" src="https://codepen.io/fatihhayri/embed/poqOVzG?default-tab=html%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/poqOVzG">
  Subgrid Forms</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Bu örnekte subgrid'in kolonlarda dengelemesine bir örnek.

 - `form`elemanına `grid-template-columns: max-content 1fr;` tanımı yapıyoruz. Bu ana grid tanımımız.
 - `.field` alt grid elemanı

```css
.field {
  grid-column: span 2;
  display: grid;
  grid-template-columns: subgrid;
}
```
tanımı yaparak dikeyde dengeleme yapıyoruz.

### gap değeri 

İçteki grid ana grid'den farklı gap değeri alabilir. Subgrid tanımı yapıldığında içteki grid ana grid'in gap değerini alır. Biz bunu değiştirmek istediğimizde `gap` tanımı (`column-gap` veya `row-gap`) değiştirebiliriz. 

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.card {
  grid-row: auto / span 2;
  display: grid;
  grid-template-rows: subgrid;
  gap: 1px;
}
```

şeklinde bir kodlama ile üstteki grid'in gap değeri `20px`  iken içerdeki grid'in değerini `1px` olarak tanımlayabiliyoruz.

### Devtools görünümü

Bu tip tanımların geliştirici araçlarında gösterilmesi güzel bir standart haline geldi. Firefox ve Chrome tabanlı tarayıcılarda `subgrid`etiketi ile gösteriliyor. 

![subgrid chrome](https://fatihhayrioglu.com/images/chrome-subgrid.png)

![Firefox subgrid](https://fatihhayrioglu.com/images/firefox-subgrid.png)

Bu `subgrid` etiketini tıkladığımızda `grid` etiketine tıkladığımız gibi etkisi var. 

## Tarayıcı desteği

En son Chrome'un desteğinin gelmesiyle Türkiye'deki desteği %85'lere yükseldi. Yakın zamanda %95'leri görürüz.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/css-subgrid-1741163681431.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/css-subgrid-1741163681431.png">
<img src="https://caniuse.bitsofco.de/static/v1/css-subgrid-1741163681431.jpg" alt="Data on support for the css-subgrid feature across the major browsers from caniuse.com">
</picture>

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
 - [https://ishadeed.com/article/learn-css-subgrid/](https://ishadeed.com/article/learn-css-subgrid/)
 - [https://12daysofweb.dev/2022/css-subgrid/](https://12daysofweb.dev/2022/css-subgrid/)
 - [https://www.youtube.com/watch?v=IIQa9f0REtM](https://www.youtube.com/watch?v=IIQa9f0REtM) - Easy and more consistent layouts using subgrid - Kevin Powell
 - [https://www.youtube.com/watch?v=UwV4LtO0nHo](https://www.youtube.com/watch?v=UwV4LtO0nHo) - Creating a robust grid system using subgrid - Kevin Powell
 - [https://youtu.be/R7aHcgIeATE?si=TqWMmsTeW8lWRuwj](https://youtu.be/R7aHcgIeATE?si=TqWMmsTeW8lWRuwj) - You can't do this without subgrid - Kevin Powell
 - [https://css-tricks.com/just-another-1-for-subgrid/](https://css-tricks.com/just-another-1-for-subgrid/)
 - https://twitter.com/fatihhayri/status/1506945488137949185
 - [https://gridbyexample.com/examples/#css-grid-level-2-examples](https://gridbyexample.com/examples/#css-grid-level-2-examples)
 - [https://x.com/chriscoyier/status/1701732144358543473?s=20](https://x.com/chriscoyier/status/1701732144358543473?s=20) Twit değil makale :)
 - [https://youtu.be/gmQlK3kRft4?si=Gw8QeYfy_2RLiLbI](https://youtu.be/gmQlK3kRft4?si=Gw8QeYfy_2RLiLbI) - Laying out Forms using Subgrid
 - [https://youtu.be/lLnFtK1LNu4?si=iFYhYvUotEhBVXHy](https://youtu.be/lLnFtK1LNu4?si=iFYhYvUotEhBVXHy) - Don't Wait to Use Subgrid for Better Card Layouts
 - [https://www.youtube.com/watch?v=gmQlK3kRft4](https://www.youtube.com/watch?v=gmQlK3kRft4) Laying out Forms using Subgrid - Miriam Suzanne
