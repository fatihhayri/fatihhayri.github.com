---
layout: post
title: Explicit(belirlenmiş) ve implicit(belirlenmemiş) grid ögeleri
description: explicit (belirlenmiş), implicit(belirlenmemiş)  tanımları, grid-auto-columns, grid-template-rows ve grid-auto-flow özellikleri
lang: tr_TR
Date: 2019-11-01 08:10
categories: [CSS]
tags: [grid, explicit, implicit]
image:
  feature: grid-terimleri.png
---

 1. [CSS Grid'e (Izgara) Giriş](https://fatihhayrioglu.com/css-grid-giris/)
 2. [CSS Grid Özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/)
 3. [fr birimi](https://fatihhayrioglu.com/fr-birimi/)
 4. [CSS Izgara çizgi isimlendirmesi ve kullanımı](https://fatihhayrioglu.com/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
 5. [Sayfa planlama sihirbazı grid-template-areas](https://fatihhayrioglu.com/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas")

CSS grid yazılarımızın 6. sında sizlere explicit (belirlenmiş), implicit(belirlenmemiş)  tanımlarını, `grid-auto-columns`, `grid-template-rows` ve `grid-auto-flow`  özelliklerini anlatacağım. 

`display:grid` tanımı yapılan kapsayıcı elemanın altındaki tüm birincil ögeler grid ögesi olur. Bu ögelerin `grid-template-columns`, `grid-template-rows` ve `grid-template-areas` tanımları yardımıyla konumu ve boyutu belirlenir. Bu konumu ve boyutu belirlenmiş grid ögelerine **explicit (belirlenmiş) grid ögeleri**, bunların dışındaki ögelere **implicit (belirlenmemiş) grid ögeleri** denir. 

Belirlenmiş (explicit) ögelerin alanların tanımları bellidir. Peki geri kalan Belirlenmemiş (implicit) ögeler ne olacak. Bu ögeler için de `grid-auto-columns` ve `grid-auto-rows` tanımları devreye giriyor. Açıkta öge kalmasın :) 

İçeriği dinamik olarak oluşan yapılarda genelde yeni gelen ögeler belirlenmemiş (implicit) öge olarak oluşur. `grid-auto-columns` ve `grid-auto-rows` tanımları bu sorunları gidermek bire bir özelliklerdir..

## grid-auto-columns ve grid-auto-rows

**Yapısı :** grid-auto-column: \<iz-listesi|> |minmax(\<iz-listesi\>,\<iz-listesi\>)\\
**Aldığı Değerler :**  \<iz-listesi\> |minmax(\<iz-listesi\>,\<iz-listesi\>)\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** Kapsayıcı ızgaralara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi} 


`<grid-listesi>` seti boşluklarla ayrılarak tekrar edebilir değerlerden oluşur.

```
.grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-auto-rows: 200px;
  grid-gap: 20px;
}
```

![enter image description here](https://fatihhayrioglu.com/images/grid-auto-x.png)

<iframe height="542" style="width: 100%;" scrolling="no" title="NWWaBjq" src="https://codepen.io/fatihhayri/embed/NWWaBjq?height=542&theme-id=13521&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Yukarıdaki grid için 4 kolon ve 2 satır tanımlanmıştır. 3. satırdaki ögeler için ise `grid-auto-rows: 200px;` tanımı yapılmıştır. 

Firefox geliştirici aracında explicit ve implicit ayrımını göstermektedir. Explicit grid öge alanı tam kenar çizgisiyle gösterilirken implicit alanlar kesik çizgi olarak gösterilir.

![enter image description here](https://fatihhayrioglu.com/images/grid-auto-x-firefox.png)

grid-template-x (`grid-template-columns`, `grid-template-rows` ve `grid-template-areas`) ve grid-auto-x (`grid-auto-columns` ve `grid-auto-rows`) tanımlarının şöyle bir farkı vardır. `grid-template-x` tanımları tanımladığı grid ögelerinin hem konumunu hemde boyutunu belirlerken grid-auto-x özellikleri sadece boyutunu belirler. 

Bu özellikleri niçin kullandığımızı düşününce bu farklılık daha anlaşılır olur. `grid-template-x` özellikleri explicit grid ögeleri oluşturmak için tanımlanırken, `grid-auto` tanımı ise tanımlanmış implicit (belirlenmemiş) grid ögelerinin boyutunu belirler. Birisi sıfırdan tanımlarken birisi tanımlanmış ögenin boyutunu belirler.


## grid-auto-flow

**Yapısı :** grid-auto-flow: [ row | column ] ‖ dense\\
**Aldığı Değerler :**  [ row | column ] ‖ dense\\
**Başlangıç değeri:** row\\
**Uygulanabilen elementler:** Kapsayıcı ızgaralara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi} 

Bu özellik tanımlanmış ögelerin dışındakilerin nasıl davranacağını belirlememizi sağlar.

Aldığı değerler ve anlamları:

**row** Bu değer başlangıç değeridir. Otomatik yerleştirme algoritması her  grid ögesinin satırlara yerleştirecektir ve yeni eklenen grid ögeleri içinde yeni satırlar açacaktır.

**column**: Otomatik yerleştirme algoritması her  grid ögesini kolonlara yerleştirecektir ve yeni eklenen grid ögeleri içinde yeni kolonlar açacaktır.

**dense** Bu tanım grid ögelerinin akışının içindeki davranışına karar verdiğimiz bir özelliktir. 

Grid ögeleri normalde sırayla yerleştirilir. Boyutu sığmayan ögeler bir alt satıra itilir. 

Örnekle bu konuyu daha iyi anlayacağız. Rachel Andrew'in örneği üzerinden gidersek.

![enter image description here](https://fatihhayrioglu.com/images/grdi-auto-flow.png)

**Striped Balloon** içeriği daha geniş olduğu için üst satırdan aşağı atılmıştır. Bundan dolayı üst satır boş kalmıştır. Kırmızıyla işaretlenen yer.

![enter image description here](https://fatihhayrioglu.com/images/grdi-auto-flow-dense.png)

**Fortnum & Mason** içeriği daha küçük olduğu için yukarıdaki boşluğa sığdırılır. Galeri sayfaları için çok güzel bir özellik. 

Galeriye örnek:  https://codepen.io/FilipVitas/pen/pQBYQd

Kalın sağlıcakla.

## Kaynaklar

 - https://bitsofco.de/understanding-the-difference-between-grid-template-and-grid-auto/
 - https://css-tricks.com/difference-explicit-implicit-grids/
 - https://www.quackit.com/css/grid/tutorial/explicit_vs_implicit_grid.cfm
 - https://www.joomlashack.com/blog/tutorials/explicit-implicit-grid/
 - [CSS GRID: Implicit vs Explicit Tracks — 5 of 25](https://www.youtube.com/watch?v=8_153Zz4YI8)
 - [https://www.youtube.com/watch?v=tFKrK4eAiUQ&feature=youtu.be](https://www.youtube.com/watch?v=tFKrK4eAiUQ&feature=youtu.be)
 - [https://www.smashingmagazine.com/2018/04/best-practices-grid-layout/](https://www.smashingmagazine.com/2018/04/best-practices-grid-layout/)
 - [https://tympanus.net/codrops/css_reference/grid/#section_grid-auto-columns-rows](https://tympanus.net/codrops/css_reference/grid/#section_grid-auto-columns-rows)
 - [https://www.quackit.com/css/css3/properties/css_grid-auto-columns.cfm](https://www.quackit.com/css/css3/properties/css_grid-auto-columns.cfm)
 - [https://learncssgrid.com/#implicit-grid](https://learncssgrid.com/#implicit-grid)
 - [https://medium.freecodecamp.org/things-ive-learned-about-css-grid-layout-932777c2d6d7](https://medium.freecodecamp.org/things-ive-learned-about-css-grid-layout-932777c2d6d7)
 - [CSS Grid #16: The grid-auto-flow: dense Property](https://www.joomlashack.com/blog/tutorials/grid-auto-flow-dense-property/)