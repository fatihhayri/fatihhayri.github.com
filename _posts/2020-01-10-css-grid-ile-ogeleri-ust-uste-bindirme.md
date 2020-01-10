---
layout: post
title: CSS grid ile ögeleri üst üste bindirme
description: CSS grid ile ögeleri üst üste bindirme postion:absolute a alternatif
lang: tr_TR
Date: 2020-01-10 09:52
Category: HTML
tags: [grid, üst-üste, grid-area, grid-row, grid-column]
image:
  feature: grid-ust-uste-1.png
---

 1. [CSS Grid'e (Izgara) Giriş](/css-grid-giris/)
 2. [CSS Grid Özellikleri](/css-grid-ozellikleri/)
 3. [fr birimi](/fr-birimi/)
 4. [CSS Izgara çizgi isimlendirmesi ve kullanımı](/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
 5. [Sayfa planlama sihirbazı grid-template-areas](/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas")
 6. [Explicit(belirlenmiş) ve implicit(belirlenmemiş) grid ögeleri](/explicit-belirlenmis-ve-implicit-belirlenmemis-grid-ogeleri/)
 7. [CSS minmax işlevsel değeri](/css-minmax-islevsel-degeri/)
 8. [repeat() işlevi, auto-fill ve auto-fit değerleri](/repeat-islevi-auto-fill-ve-auto-fit-degerleri/)
 9. [CSS Grid öge özellikleri](/css-grid-oge-ozellikleri/)
 10. [Grid hizalama ve sıralama işlemleri](/grid-hizalama-ve-siralama-islemleri/)
 11. [CSS Grid kısayolları - grid-template ve grid](/css-grid-kisayollari-grid-template-ve-grid/)


CSS ile ögeleri diğer ögelerin üstüne çıkarmak için genelde `postion:absolute` özelliğini kullanırız. Ancak bu yöntemin şöyle bir sıkıntısı vardır. `position: absolute` tanımlanmış öge normal akıştan çıktığı için genişliğinin ve yüksekliğinin hesaplanması her zaman problemdir. CSS grid modülü, bu soruna da çözüm oldu.

Plandaki iki ögeye aynı grid hücresinin tanımı yapılıp üst üste binmesi sağlanabilir. Hangi ögenin önde hangi ögenin arkada olması gerektiğini de `z-index` değeriyle belirleyebiliriz.

Bir örnek verelim.

```css
.oge1 {
    grid-row: 1 / span 4;
    grid-column: 1 / span 4;
    background: lime;
}
.oge2 {
    grid-row: 4 / span 4;
    grid-column: 2 / span 4;
    background: rgba(255, 192, 203, .9);
    z-index: 1;
}
.oge3 {
    grid-row: 7 / span 4;
    grid-column: 7 / span 4;
    background: lightblue;
}
.oge4 {
    grid-row: 4 / span 7;
    grid-column: 3 / span 2;
    background: rgb(255, 255, 0, .7);
}
.oge5 {
    grid-row: 2 / span 3;
    grid-column : 4 / span 5;
    background: rgba(128, 0, 128, .8);
}
```

Yukarıda görüldüğü üzere kullanılan elemanlara yapılan tanımlarla grid hücrelerini birden fazla öge kullanabiliyor. Bu şekilde üst üste binen alanlar oluşturuluyor. `oge2` elemanında yaptığımız gibi `z-index` tanımıyla istediğimiz ögeyi üste çıkarabiliyoruz. Bu şekilde üste çıkarılan ögeler normal akışta bulunduğu için `position: absolute` tanımı gibi yükseklik ve genişlik sorunları yaşamıyoruz. Diyeceksiniz ki artık `position: absolute` tanımına gerek var mı? Hayır. Normal akışın dışına çıkarmak istediğimiz durumlar için ve grid kullanmadığımız durumlar için `position: absolute` tanımına ihtiyacımız var. 

Grid ile birlikte popüler olan magazin tipi sayfalarda genelde gördüğümüz üzerine binme işlerini bu şekilde kolayca halledebiliriz.

[Jen SIMMONS](https://twitter.com/jensimmons)'ın verdiği [örnek](https://labs.jensimmons.com/2018/01-011.html) üzerinden gidelim.

![grid üst üste binme](https://fatihhayrioglu.com/images/grid-ust-uste-1.png)

Bir resim ve üzerinde bir başlık ve açıklama alanını kodlayalım.

```css
article {
    display: grid;
    grid-template-columns: 1fr minmax(0, 30ch) 1fr;
    grid-template-rows: 20% 2fr auto auto 1fr;
}
````

3 kolon 5 satırlık bir plan yapalım. 

![grid üst üste binme](https://fatihhayrioglu.com/images/grid-ust-uste-2.png)

Resmi (`<img>`) 1. ve 3. kolon aralığına, 1. ve 6. satır aralığına koyalım.

```css
img {
  grid-column: 1 / 3;
  grid-row: 1 / 6;
}
```

Başlığı (`<h1>`) 2. ve 4. kolon aralığına, 3. ve 4. satır aralığına koyalım. Ayrıca satır ve kolon sonuna hizalayalım.

```css
h1 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  align-self: end;
}
```

Son olarak da detay yazısını (`<p>`) 2. ve 4. kolon arasına, 4. ve 5. satır arasına yerleştirelim. Hizalama olarak da bu hücrelerin başına hizlayalım ki başlık ile alt alta gelsin.

Yukarıda dikkat ederseniz ögeler 2. kolon ve 3. ve 4. satrıları **ortak** kullanıyorlar. Resmi diğer ögelerin altına almak için `z-index: -1` tanımlayalım.

```css
img {
  grid-column: 1 / 3;
  grid-row: 1 / 6;
  z-index: -1;
}
```

Sonuç aşağıdaki gibi olacaktır. 

<iframe height="300" style="width: 100%;" scrolling="no" title="PowQdoN" src="https://codepen.io/fatihhayri/embed/PowQdoN?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

**Absolute**'a göre en büyük avantajı belirttiğimiz gibi içeriğin veya başlığı uzun veya kısa gelmesi duruma göre ayrıca iş yapmamıza gerek yoktur.

Bir başka örnekte daha önce çalıştığım bir projede zamanımı alan bir konuda grid ile çok basit ve kolay çözmek oldu.

İlk bölümde resmin yarısından başlayıp sayfanın en sonuna kadar uzanan ardalan eklemek için biraz zaman harcamıştım. Şimdi grid ile daha az kod ile daha kolay çözdüm.

<iframe height="300" style="width: 100%;" scrolling="no" title="grid üst üste deneme" src="https://codepen.io/fatihhayri/embed/QWwQBdy?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Kaynaklardaki örnekleri de incelemenizi öneriyorum.

Daha önce CSS ile çözümü olmayan bir konuya grid çözüm sağlayarak bizleri bir kez daha sevindirdi. :)

Yardımlarından dolayı [Serkan Bektaş](https://twitter.com/serkanbektasim)'a teşekkürlerimi sunarım. 

Sağlıcakla kalın.

## Kaynaklar

 - https://gedd.ski/post/overlapping-grid-items/
 - https://bricampgomez.com/blog/how-to-overlap-images-in-css/
 - https://www.joomlashack.com/blog/tutorials/layering-items-within-css-grid/
 - https://medium.com/@JonWongCodes/overlapping-and-positioning-using-css-grid-5de7b1f09335
 - https://www.cmuir.co.nz/post/overlapping-elements-with-css-grid/
 - https://twitter.com/wesbos/status/1189603952230371332?s=20
 - https://twitter.com/shshaw/status/1189610604757213185?s=20
 - https://youtu.be/EashgVqboWo
 - https://codepen.io/GD_Design/pen/vPXQem (örnek katman)
 - https://codepen.io/dannievinther/pen/LevJxp (Örnek sayfa)
 - https://cdpn.io/maddesigns/debug/GjKkAd
