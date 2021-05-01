---
layout: post
title: Grid geliştirme araçları
description: CSS grid geliştirme araçları, Firefox grid aracı, ipuçları ve grdi oyunları
lang: tr_TR
Date: 2020-01-21 10:52
categories: [CSS]
tags: [grid, firefox, devtools, oyun]
image:
  feature: firefox-grid-tool.png
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
 12. [CSS grid ile ögeleri üst üste bindirme](/css-grid-ile-ogeleri-ust-uste-bindirme/)

CSS grid yazılarımızın 13.sindeyiz. Buraya kadar sizlere grid teorisi hakkında bilgi vermeye çalıştık. Bu yazımızdaysa grid kodlarken yararlanabileceğimiz araçlardan bahsedeceğiz.

Grid yazılarımızın ilkinden itibaren 17 adet tanımın olduğunu ve bu nedenle öğrenme eğrisinin daha yüksek olduğunu söylemiştik. Nasıl daha kolay öğreniriz ve uygularız için birkaç araç var bu yazımızda.

Bu yazıyı 3 başlık altında inceleyeceğiz.

 - Tarayıcı geliştirme araçlarında grid
 - Grid özelliklerinin hepsinin bir arada olduğu kopya kağıtları
 - Grid özelliklerini pekiştirmek için yapılan oyunlar

Bu araçların hepsinde grid tanımlarının çokluğu nedeniyle hangi özellik hangi amaçla kullanıldığını hatırlayamamamız nedeniyle çıkmıştır. CSS grid özellik bilinirliğini arttırmaya yarar. Ama en önemlisi olan tarayıcıların grid araçlarıdır ki bize grid kodlarken, düzenleme yaparken ve hataları bulup çözerken çok büyük yardımı olur.

## Tarayıcı geliştirici araçlarında grid

Bu başlık önemli. Geliştiriciler olarak hayatımız tarayıcılar ve tarayıcı geliştirme araçlarıyla geçmektedir. Kod yazarken geliştirici araçlarından yararlanıyoruz. Peki CSS grid kullandığımızda bu araçlar bize nasıl bir avantaj sağlıyor? Firefox burada diğer tarayıcılara fark atıyor, Firefox'un grid için geliştirilen araçları çok kullanışlı.

Firefox grid aracıyla düzenleme yapma, değişiklik yapma, hata ayıklama işlemlerini yapmak çok kolay.

![Firefox Grid Alanı](https://fatihhayrioglu.com/images/firefox-grid-tool.png){: loading="lazy" }

- Grid alanını görünür hale getirir.
- Grid satır çizgilerini gösterir. Rakamlarını ve isimlerini gösterir.
- Grid çizgilerinin renklerini değiştirme imkanıyla görünürlüğünü arttırma imkanı sağlar.
- Grid kısayolarının açık hallerini gösterir.
- Grid tanımlarının otomatik tamamlamayla hatırlamamızı ve kodlamamızı kolaylaştırır.
- Tanımlı ve tanımsız alan farkını gösterir.
- Grid gibi subgrid'leri de gösterir.

### grid görüntüleme
Grid alanını görüntülemek için 2 seçeneğimiz var. 

![Firefox HTML panel](https://fatihhayrioglu.com/images/html-pane.png){: loading="lazy" }

HTML panelinden ilgili elemanın yanında görünen **grid** yazısını tıklayarak ya da CSS **rule** panelinden ilgili seçicinin yanındaki ızgara ikonuna tıklayarak görebiliriz. 

![Firefox CSS Panel](https://fatihhayrioglu.com/images/css-pane.png){: loading="lazy" }

 ızgara çizgileri görünür.

![Firefox grid satır numaraları](https://fatihhayrioglu.com/images/grid-line-view.png){: loading="lazy" } 

## grid paneli

![Firefox Layout panel](https://fatihhayrioglu.com/images/layout-pane.png){: loading="lazy" }

Layout içine yerleştirilen grid panelinde sayfadaki tüm gridler gösterilir. 

![Firefox overlay grid](https://fatihhayrioglu.com/images/firefox-secili-grid.png){: loading="lazy" }

**Overlay grid** başında işaret kutuları olan grid tanımlarını gösterir. Baştaki işaret kutularının işareti klenip kaldırılarak hangi elemanı etkilediği görülebilir.

![Firefox Grid Display](https://fatihhayrioglu.com/images/firefox-grid-alani.png){: loading="lazy" }

**Grid Display settings** 
  - **Display line number:** grid ögelerini konumlandırmak için kullandığımız satır numaralarını göstermek için
![Firefox grid satır numaraları](https://fatihhayrioglu.com/images/grid-line-view.png){: loading="lazy" }
  - **Display area name:** grid ögeleri tanımlarında satır veya kolon numaraları kullanıldığı gibi bizim belirlediğimiz isimler de kullanılabilir. Eğer isim kullanıyorsak bu alan ile gösterip gizleyebiliyoruz.
 ![Fİrefox grid isimleri](https://fatihhayrioglu.com/images/grid-name-view.png){: loading="lazy" }
  - **Extend lines infinitely:** Başlagıç değeri olarak sadece grid içindeki çizgilerin gösterimi yapılırken bu işaret seçilrse çiiler sayfa boyunca gösterilecktir.
  - **Mini grid view:** Seçilen grid elemanın öngörünüm olarak gösterilir. Grid ögeleri üzene geldiğimizde sayfadaki karşılıkları ön plana çıkacak şekilde görünür. 

Aşağıdaki hareketli gif bize mini grid görünümünü daha iyi açıklayacaktır.

![Firefox mini grid görünümü](https://fatihhayrioglu.com/images/mini-grid-view.gif){: loading="lazy" }

Chrome için [Gridman](https://chrome.google.com/webstore/detail/gridman-css-grid-inspecto/cmplbmppmfboedgkkelpkfgaakabpicn) eklentisi var ama Firefox'un grid aracının çok gerisinde.

## Grid özellik listeleri

Bu tip sayfalar bize tüm özellikleri bir arada sunarak daha hızlı erişim imkanı verir. Özellikleri hatırlamakta çok sorun yaşıyorsak çıktısını alıp yakınımızda bir yere asmak mantıklı.

[http://grid.malven.co/](http://grid.malven.co/)

![grid malven](https://fatihhayrioglu.com/images/grid.malven.co.jpg){: loading="lazy" }

[https://github.com/alsacreations/guidelines/blob/master/grid-cheatsheet.pdf](https://github.com/alsacreations/guidelines/blob/master/grid-cheatsheet.pdf)

![grdi kopyası](https://fatihhayrioglu.com/images/alsacreations.jpg){: loading="lazy" }

[https://devhints.io/css-grid](https://devhints.io/css-grid)

![devhints](https://fatihhayrioglu.com/images/devhints.io.jpg){: loading="lazy" }

[https://www.cheatography.com/idvali/cheat-sheets/css-grid/](https://www.cheatography.com/idvali/cheat-sheets/css-grid/)

![Grid kopya](https://fatihhayrioglu.com/images/cheatography.com.jpg){: loading="lazy" }

## Grid oyunları

Oyun olarak cssgridgarden'ı denedim. Özellik hatırlama konusunda çok iyi bence.

[https://cssgridgarden.com/#tr](https://cssgridgarden.com/#tr)

![CSS garden](https://fatihhayrioglu.com/images/cssgridgarden.jpg){: loading="lazy" }

[https://www.gridcritters.com/](https://www.gridcritters.com/) Ücretli

![grid critters](https://fatihhayrioglu.com/images/gridcritters.jpg){: loading="lazy" }

## Kaynaklar
 - https://www.smashingmagazine.com/2017/12/grid-inspector/
 - https://scotch.io/tutorials/debugging-css-grid-with-firefox-dev-tools
 - https://www.youtube.com/watch?v=16enLRDbOyY  (Announcing CSS Grid & the Firefox Grid Inspector Tool)
 - http://grid.malven.co/
 - https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts
 - https://www.quackit.com/css/grid/tutorial/inspect_a_grid.cfm
 - https://mozilladevelopers.github.io/playground/css-grid/03-firefox-devtools
 - https://www.mozilla.org/en-US/developer/css-grid/
 - https://www.joomlashack.com/blog/joomla-news/css-grid-additional-concepts/
 - https://umaar.com/dev-tips/157-css-grid-debugging/
 - https://morioh.com/p/caebd9f65e10
 - https://www.sitepoint.com/css-grid-generators/
 - https://medium.com/better-programming/debug-css-grid-with-firefox-devtools-949f328aab88
 - https://gridbyexample.com/learn/2016/12/17/learning-grid-day17/
