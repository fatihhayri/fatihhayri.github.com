---
layout: post
title: CSS Grid'e (Izgara) Giriş
description: CSS Grid nedir nasıl kullanılır ve terminolojisi nedir? Bunları göreceğiz.
lang: tr_TR
Date: 2019-02-25 10:47
Category: CSS
tags: [css, grid, ızgara, grid-container, grid-cell, grid-track, grid-areas]
image:
  feature: grid-terimleri.png
---

CSS Grid (Izgara) hakkında bir şeyler yazmaya daha önce karar verdim. Ancak CSS'in diğer konularına göre öğrenmesi biraz daha zor olan bu konuyu anlatmak da zor. 17 tane özelliği ve yeni terimleriyle anlaşılması zor bir konu. Nereden nasıl başlayacağım konusunda kararsız kaldım. Nihayet bu ilk yazıyla ilk adımı attım. Bu yazıda giriş yazısı ve terminolojiyi anlatmaya çalışacağım.

2011 yılında Microsoft ekibi tarafından W3C'ye önerildi ve ilk olarak IE10 **-ms** öneki ile adapte edildi. Ben de ilk olarak Microsoft tarafından geliştiriliyor olmasıyla biraz mesafeli yaklaştım. Malum Internet Explorer ile yaşadığımız kötü geçmişimizden kaynaklı. Zamanla CSS Grid'e alıştım.

## Giriş

CSS uzun süre önce sayfa planını HTML'den (tablo ile sayfa planı yaptığımız günler) aldı. **float** kullanımı ve **position** değerleri ile sayfa planları oluşturduk ancak bazı konularda (dikey de ortalama gibi, eşit yükseklikte kolonlar ve tuğla yapılı (masonry) sayfa planlarını oluşturmak gibi ihtiyaçlar için farklı çözümler denememiz gerekti) sorunlara rağmen CSS bu konuda bayağı yol kat etti. Sonra **flex** ile bu sorunlara bazılarına çözümler bulduk. 

Sayfa planları bir çerçeve içine alınacak ve basitçe çözülecek yapılar değildir. Çok farklı tiplerdeki sayfa planlarını kapsayacak bir çözüm aradı standart geliştiriciler (W3C). Uyumlu web ile birlikte zorluk derecesi daha da arttı. Artık esnek yapılı sayfa planlarını da kapsayan çözümler gerekiyor. Bu sorunları çözmek için çeşitli standartlar geliştirildi. Son çıkan çözüm **CSS Grid Sayfa Planlama Modülü**. 

Sayfa planlama konusunda **grid** ile birlikte önemli kazanımlarımız oldu. Bunların başında **float** ve **flex** ile devam eden tek eksenli sayfa planlamaları yerine iki eksenli sayfa planlamasını yapabiliyoruz artık. 

İki eksenli sayfa planlamayı en son tablo ile  sayfa planı oluştururken kullanıyorduk. Tekrar iki eksenli sayfa planlama metoduyla sayfalarımız kurgulamamız gerekiyor. Bu tek eksenli planlamaya göre büyük kolaylıklar sağlıyor. Bu arada aklınıza tablo ile iki eksenli sayfa planı yapıyorduk niye grid’e gerek var demeyin. Tablo yapıları çok sabit yapılardı esnek ve üzerine geçen sistemler için çok uygun değildi. 

İki eksenli sayfa planlamanın uyumlu (responsive) web geliştirmelerinde büyük kolaylığı var. Örneğin mobilde en alt sırada olan bir öğeyi masaüstünde sağ üste koymak grid öncesinde zordu. İki eksenli sayfa planından sayfadaki tüm ögeler ve sıralaması html'deki yerinden bağımsız şekilde sıralana biliyor ve  farklı özellikleri tanımlanabiliyor. Süper değil mi?

Tüm interneti düşününce tüm sayfa planlarına çözüm bulmak çokta kolay bir şey değildir. Grid bunu yapmak için ortaya çıktığı için anlaşılması diğer CSS özelliklerine göre nispeten daha zor bir konu oldu. İş karmaşık olunca haliyle çözümü de biraz karmaşıklaşıyor. Basit sayfa planlarını yapmak için basit iki satırlık kodlar yeterli olurken karmaşık sayfa planlarını oluştururken biraz işin inceliklerini bilmek gerekiyor.

Makalenin ve yazı dizisinin devamında CSS Grid Sayfa Planı Modülü kısaca **Grid** olarak adlandırılacaktır.

## CSS Grid (Izgara) Modülü Terimleri

Bir işe girişirken önce o işin terimlerine bilmekte fayda var deyip hemen Izgara modülünün terimlerine göz atalım.

![CSS Grid Modülü terimleri](https://fatihhayrioglu.com/images/grid-terimleri.png)

**Grid container** (Kapsayıcı Izgara) ve **Grid item** (Izgara ögesi) tanımlarıyla başlayalım. Flex özellikleriyle benzer bir yapıdır. Flex yapılara alışık olanlar için yabancılık çekilmeyecek terimler. 

Grid container; kapsadığı elemanları ızgara öğesi haline getirir. Grid davranışı grid container tanımıyla başlar. 

Grid container **display** özelliğine aşağıdakilerden biri tanımlayınca oluşur.

 - **display: grid** tanımlanan elemanı blok bir ızgara kapsayıcı yapar
 - **display: inline-grid** tanımlanan elemanı satır içi bir ızgara kapsayıcı yapar
 - **display: subgrid** tanımlanan eleman hem ızgara öğesi hemde bir ızgara kapsayıcısı olur

> Dikkat: subgrid değeri CSS Grid Layout Level 2 ile birlikte gelecek, henüz hiçbir tarayıcı desteklemiyor.

Kapsayıcı Izgara elemanı atamasından sonra birinci seviye altındaki tüm çocuk elemanları birer grid ögesi olur. 

Grid tanımı yapıldıktan sonra görünümde bir fark yoktur. Bu ilk aşamadıki farkı ancak tarayıcının geliştirici araçlarında görebiliriz. 

<iframe height="300" style="width: 100%;" scrolling="no" title="grid container" src="//codepen.io/fatihhayri/embed/BMprVy/?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fatihhayri/pen/BMprVy/'>grid container</a> by Fatih 
  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

![enter image description here](https://fatihhayrioglu.com/images/firefox-grid.png)
Firefox geliştirme aracında elemanı seçince ızgara şeklinde bir ikon çıkıyor. Bu ikonu tıklayınca görüntü aşağıdaki gib oluyor.

![enter image description here](https://fatihhayrioglu.com/images/firefox-grid-selected.png)

### Grid line (Izgara çizgileri)

Grid Line (Izgara çizgileri); ızgarayı yatay ve dikeyde bölen çizgilerdir. Her bir ızgara çizgisi, grid container'ın en dış kenarından başlayarak sırasıyla bir numara verir. Numara vermeye 1'den başlar. Yukarıdaki Firefox geliştirici aracı görüntüsünde bu sayıları görüyoruz. Kodumuzu yazarken her bir ızgara hücresini bu numaraları referans alarak yerleştirebiliriz. İlerideki örneklerde bunu göreceğiz.

![grid line](https://fatihhayrioglu.com/images/grid-line.jpg)

### Grid track (Izgara izi)

İki çizgi arasındaki alanları ifade etmek için kullanılır. Yatay ve dikey olabilir. Izgara satır ve kolonlarını kapsayan bir terimdir.

![grid track](https://fatihhayrioglu.com/images/grid-track.jpg)

### Grid cell (Izgara ögesi)

Izgara kapsayıcı içindeki en küçük yapıdır. Dört tarafı ızgara çizgileri ve boşluklarla kaplı olan ızgara birimidir. 

![grid cell](https://fatihhayrioglu.com/images/grid-cell.jpg)

### Grid Areas (Izgara alanı)

Izgara alanı dört ızgara çizgisi arasında kalan alandır. Bir ve birden fazla ızgara biriminden oluşur. Her ızgara ögesi aynı zamanda bir ızgara alanıdır diye biliriz.

![grid areas](https://fatihhayrioglu.com/images/grid-areas.jpg)

### Tarayıcı desteği

Tarayıcı desteği konusunda çok güzel yerlerde CSS Grid Modülü. Makaleyi yazdığım bugün baktığımda %92'lik bir desteği vardı.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__grid-1741162760190.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__grid-1741162760190.png">
<img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__grid-1741162760190.jpg" alt="Data on support for the mdn-css__properties__grid feature across the major browsers from caniuse.com">
</picture>

Yardımlarından dolayı [Serkan Bektaş](https://twitter.com/serkanbektasim)'a teşekkürlerimi sunarım. 

## Kaynaklar

- alligator.io/css/css-grid-layout-intro
- [https://bitsofco.de/css-grid-terminology/#gridcolumnsgridrowsandgridtracks](https://bitsofco.de/css-grid-terminology/#gridcolumnsgridrowsandgridtracks)
- [https://codepen.io/stacy/pen/ObmjeZ](https://codepen.io/stacy/pen/ObmjeZ)
- joomlashack.com/blog/joomla-news/basics-of-css-grid/
- [https://caniuse.com/#feat=css-grid](https://caniuse.com/#feat=css-grid)