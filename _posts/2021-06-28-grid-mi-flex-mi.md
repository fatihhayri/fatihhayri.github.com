---
layout: post
title: Grid mi Flex mi?
description: Grid mi Flex mi? hayır her ikisi de
lang: tr_TR
Date: 2021-06-28 11:00
Category: CSS
tags: [grid, flex]
image:
  feature: flex-grid.png
---

Karşılaştırmaya girmeden bir önceki [Grid ile Uyumlu(Responsive) Sayfalar Yapmak](https://fatihhayrioglu.com/grid-ve-uyumlu-responsive-sayfalar-yapmak/ "Grid ile Uyumlu(Responsive) Sayfalar Yapmak") yazısının girişinde yazdığımız aşağıdaki paragrafları tekrar hatırlayalım.

> CSS grid modülü çıkana kadar sayfa planlama biz geliştiricilere modül, özellik grubu veya tanım olarak bir çözüm sunmamıştı. Geliştiriciler mevcut şartları sağlayacak özellikleri sayfa planlaması için kullandı.
> 
> İlk olarak `<table>` etiketiyle ve `position` tanımlarıyla HTML yoğunluklu çözmeye çalıştık. Daha sonra `<div>` etiketi ve `float`, `width` tanımlarıyla CSS yoğun çözümlerle çözmeye çalıştık. Daha sonra `flex` ile çözmeye çalıştık ancak bunların hiçbiri W3C’nin sayfa planlama için çıkardığı özellikler değildi. Belli bir amaca hizmet ediyordu ve geliştiriciler tarafından sayfa planlama için kullanıldı.
> 
> İlk defa sayfa planlama için bir modül olarak grid modülünü biz geliştiricilere sundu. Tüm ihtiyaçları gidermesi zor olsa da birçok ihtiyacı karşılıyor. Yeni eklenen `subgrid` özelliği de sayfa planlamadaki ihtiyaçları karşılamaya yönelik. Ayrıca daha yeni eklenen grid `masonry` özelliği standart koyucuların ihtiyaçlara göre çözüm üretme eğiliminde olduğunu gösteriyor.

Yani kısaca sayfa planlama grid'in işi. Artık sayfa planında grid kullanacağız. Sadece planlama mı? Yazının devamında detaylarına bakalım.

CSS Grid ilk çıktığı günden beri flex ile karşılaştırılıyor. Flex önceki döneme(float ile sayfa planladığımız zamanlar) göre bize avantajlar sağladığı için bir çok geliştrici çabuk benimsedi ve kullanmaya başladı. CSS Grid öğrenilmesi biraz daha zor olan bir konu olduğu için geliştiriciler flex ile sayfa planlamaya devam ediyorlar. Sadece geliştiriciler değil React Native bile hala CSS Grid özelliklerini adapte edebilmiş değil. [React Native geliştirmesi istenilen özellikler listesinde başlarda](https://react-native.canny.io/feature-requests/p/css-grid-layout-supporting) sırasını bekliyor. 

Bu makalede ne paylaşacağımızı açıkladıktan sonra bilgilerimizi tazeleme zamanı.

Bu karşılaşmayı yapmadan önce flex 

-   [Yenilenmiş Flex(Esnek Kutu) Modülü](https://fatihhayrioglu.com/yenilenmis-flex-modulu/)
    -   [Flex ile yatayda ve dikeyde ortalı alanlar oluşturmak](https://fatihhayrioglu.com/flex-ile-yatayda-ve-dikeyde-ortali-alanlar-olusturmak/)
    -   [Flex’ın gizli kalmış güzel bir özelliği](https://fatihhayrioglu.com/flexin-gizli-kalmis-guzel-bir-ozelligi/)
    -   [Flex ile sayfa dibine yapışık alt alanlar (sticky footer) yapmak](https://fatihhayrioglu.com/flex-ile-sayfa-dibine-yapisik-alt-alanlar-sticky-footer-yapmak/)
    -   [Flex ile 100% Genişlik ve 100% Yükseklikte Sayfa İskeleti Hazırlama](https://fatihhayrioglu.com/flex-ile-100-genislik-ve-100-yukseklite-sayfa-iskeleti-hazirlama/)

ve CSS grid ile olarakta;

-   [CSS Grid’e (Izgara) Giriş](https://fatihhayrioglu.com/css-grid-giris/)
    -   [CSS Grid Özellikleri](https://fatihhayrioglu.com/css-grid-ozellikleri/)
    -   [fr birimi](https://fatihhayrioglu.com/fr-birimi/)
    -   [CSS Izgara çizgi isimlendirmesi ve kullanımı](https://fatihhayrioglu.com/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
    -   [Sayfa planlama sihirbazı grid-template-areas](https://fatihhayrioglu.com/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas")
    -   [Explicit(belirlenmiş) ve implicit(belirlenmemiş) grid ögeleri](https://fatihhayrioglu.com/explicit-belirlenmis-ve-implicit-belirlenmemis-grid-ogeleri/)
    -   [CSS minmax işlevsel değeri](https://fatihhayrioglu.com/css-minmax-islevsel-degeri/)
    -   [repeat() işlevi, auto-fill ve auto-fit değerleri](https://fatihhayrioglu.com/repeat-islevi-auto-fill-ve-auto-fit-degerleri/)
    -   [CSS Grid öge özellikleri](https://fatihhayrioglu.com/css-grid-oge-ozellikleri/)
    -   [Grid hizalama ve sıralama işlemleri](https://fatihhayrioglu.com/grid-hizalama-ve-siralama-islemleri/)
    -   [CSS Grid kısayolları - grid-template ve grid](https://fatihhayrioglu.com/css-grid-kisayollari-grid-template-ve-grid/)
    -   [CSS grid ile ögeleri üst üste bindirme](https://fatihhayrioglu.com/css-grid-ile-ogeleri-ust-uste-bindirme/)
    -   [Grid geliştirme araçları](https://fatihhayrioglu.com/grid-gelistirme-araclari/)
    -   [Grid ile Uyumlu(Responsive) Sayfalar Yapmak](https://fatihhayrioglu.com/grid-ve-uyumlu-responsive-sayfalar-yapmak/)

Okumanızı öneririm. Şimdi aradaki önemli farkları inceleyelim.

## Eksen farkı

Daha önceki grid yazılarımda da bahsetmiştim, flex tek eksende(dikey veya yatay) etki yaparken grid iki eksende etki eder. 

![iki eksenli planlama](https://fatihhayrioglu.com/images/iki-eksenli.png)
Daha önceleri tek eksenli sayfa kodlamaları yaptığımız için uyumlu web sayfalarındaki bazı yer değiştirmeleri zor oluyordu, bazı tasarımları gerçekleştirme imkanı olmadığı için bazı kod bloklarının iki kopyasını oluşturduğumuz oluyordu. Bu durum grid’in iki eksenli yapısıyla tarihe karıştı.

Zingat’ta ilan detay sayfasında breadcrumb’ın yeri sorun olmuştu. Mobilde resmin altında olan breadcrumb desktopta tüm içerik ve sağ kolonun üzerinde konumlandırılmak istenmişti. Tek eksenli bir düşünce ile bu işi halletmek çok zor bir iş olduğu için biz içeriği iki kere sayfaya ekleyip mobilde birini desktop’ta diğerini göstererek geçmiştik. Şimdi iki eksenli bir grid ile bu işi nasıl yaparım diye düşününce nispeten basit ve tek içerik ile bu durumu çözebiliyoruz.

<iframe height="300" style="width: 100%;" scrolling="no" title="LYpexOm" src="https://codepen.io/fatihhayri/embed/LYpexOm?height=300&theme-id=13521&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Responsive zorluklarını bir anda kolaylaştıran bir özellik.

## İçerik eksenli yaklaşım / sayfa planlama eksenli yaklaşım

Flexbox ve Grid arasındaki bir diğer önemli fark, Flexbox'ın içerik temelli bir yapısı varken Grid'in sayfa planını temelli bir yapısının olmasıdır. 

![flex vs Grid](https://fatihhayrioglu.com/images/flex-grid.png)

Flexbox tek yönlü olduğu için, flex tanımladığımız kapsayıcının **içeriği** kolon/sütun planın nasıl olacağını belirler. 

Grid'de ise `display:grid`  tanımladığımız kapsayıcının içindeki öğelerini satır ve sütun sayılarını belirleyerek ögelerin sayfa planını belirleriz. İçeriğin ne olduğundan bağımsız planı uygularız.

<iframe height="300" style="width: 100%;" scrolling="no" title="flex reverse" src="https://codepen.io/fatihhayri/embed/VwpYzLv?height=300&theme-id=13521&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Yukarıdaki örnekteki gibi ızgara yapısına ters tasarımlar için flex daha mantıklı tercih olur.

## Sonuç

CSS grid flex'in yerine gelen bir modül değil, birlikte kullanılacak iki özellik. İhtiyacımıza göre tercihimiz yapıp kodlayacağız. Her ikisinin kendine göre avantajlı olduğunu durumlar var. Kullandığımız sayfa, komponente hangisi uygunsa onunla kodlayacağız.

Kalın sağlıcakla.


## Kaynaklar

 - Flexbox vs. CSS Grid — Which is Better? https://www.youtube.com/watch?v=hs3piaN4b5I
 - [https://ishadeed.com/article/grid-layout-flexbox-components/](https://ishadeed.com/article/grid-layout-flexbox-components/)
 - [https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/)
 - [https://blog.logrocket.com/flexbox-vs-css-grid/](https://blog.logrocket.com/flexbox-vs-css-grid/)
 - [https://www.srijan.net/blog/css-grid-vs-flexbox](https://www.srijan.net/blog/css-grid-vs-flexbox)
 - [https://x-team.com/blog/css-grid-vs-flexbox/](https://x-team.com/blog/css-grid-vs-flexbox/)
 - [https://css-irl.info/to-grid-or-to-flex/](https://css-irl.info/to-grid-or-to-flex/)
 - [https://www.cqlcorp.com/insights/the-basics-of-css-grid-layout-vs-flexbox/](https://www.cqlcorp.com/insights/the-basics-of-css-grid-layout-vs-flexbox/)
 - [https://css-tricks.com/css-grid-replace-flexbox/](https://css-tricks.com/css-grid-replace-flexbox/)
 - [https://www.webdesignerdepot.com/2018/09/grid-vs-flexbox-which-should-you-choose/](https://www.webdesignerdepot.com/2018/09/grid-vs-flexbox-which-should-you-choose/)
 - Perfect Responsive Grid Layout | Flexbox vs CSS Grids [https://www.youtube.com/watch?v=5OPPLNmlXhg](https://www.youtube.com/watch?v=5OPPLNmlXhg)
 - [https://codeburst.io/css-grid-vs-flexbox-building-simple-layouts-43e569a66f0a](https://codeburst.io/css-grid-vs-flexbox-building-simple-layouts-43e569a66f0a)
 - [https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/](https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/)
 - Using Flexbox + CSS Grid Together: Easy Gallery Layout [https://www.youtube.com/watch?v=dQHtT47eH0M](https://www.youtube.com/watch?v=dQHtT47eH0M)
 - [https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf](https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf)
 - [https://www.freecodecamp.org/news/the-main-differences-between-flexbox-and-css-grid-667c03461d2b/](https://www.freecodecamp.org/news/the-main-differences-between-flexbox-and-css-grid-667c03461d2b/)
 - [https://ayushgupta.tech/blog/grid-vs-flex](https://ayushgupta.tech/blog/grid-vs-flex)
