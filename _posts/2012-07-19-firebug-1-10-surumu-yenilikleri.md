---
layout: post
title: Firebug 1.10 Sürümü Yenilikleri
Slug: firebug-1-10-surumu-yenilikleri
Date: 2012-07-19 14:48
Category: CSS
tags: çerez düzenleme, firebug, Firefox, medya sorguları
---

Firebug kodlama hayatımızda önemli bir yere sahip, Google Developer Bar
ile şu aralar çekişseler de Firebug’ın bendeki yeri ayrı.

Firebug 1.10 ile birlikte gelen yeni özellikler;

## Çerez Sekmesi

En büyük yeniliklerden birisi Çerez yönetim sekmesinin eklenmesi.
Belirli siteler için çerez kullanımını engelleyebilirsiniz, var olanı
değiştirebilir veya yeni çerez ekleyebiliyoruz.

![][100]

## Tarayıcıyı Aç-Kapa Yok

Yeni Firebug güncellendikten sonra tarayıcıyı açıp-kapmaya gerek yok.
Direk güncelleme sonrası yeni sürüme geçiş oluyor.

**Not:**1.9 önceki sürüm yüklü ise aç-kapa gerekiyor.

## Yükleme Geciktirmiyor

Firebug Firafox’un başlangıcını yavaşlatmıyor artık. Firebug
kullanıcının ilk isteği ile yükleniyor. Tarayıcı ilk açıldığında sadece
Firebug ikonu ve menüsü yükleniyor.

## Komut Editörü Renklendirilmiş

Komut satırı artık renklendirilmiş durumda. Renklendirilmiş komut satırı
daha okunaklı ve güzel görünüyor.

![][1]

## Otomatik tamamlama geliştirilmiş

Firebug’ın Google Web Developer Tools’dan geri kaldığı özelliklerden
birisi otomatik tamamlama özelliğinin yeteri kadar iyi olmaması idi.
Yeni sürüm ile birlikte bu alanda geliştirmeler yapılmış.

![][2]

Bu özellik CSS özellikleri, İzleme(Watch) panelinde değişkenleri
yakalamada, break-point ile koşullarında, renk, yazı tipi isimi vs.
otomatik tamamlama çalışıyor.

## Stil geçmişini İzleyebiliriz

Yine Google Developer Tools’da olan güzel bir özellik Firebug’a
eklenmiş. Bir eleman üzerine tanımlanmış CSS özelliklerinin sırası ile
izlememizi sağlayan güzel bir özellik.

![][3]

Computed sekmesinde aktif olan atama siyah, pasif olan atamalar ise gri
olarak gösterilmiş.

## :focus Sözde Sınıfını Desteği

Daha önce :hover, :active gibi sözde sınıfları destekleyen Firebug şimdi
:focus desteğini sağlayarak güzel bir özellik daha eklemiş bünyesine.

![][4]

bu sayede elemana odaklandığında bir CSS tanımı yapıldı ise bunu
yakalamak artık daha kolay.

## Media Query Özelliklerini Düzenleme İmkanı

Uyumlu(responsive) web ile çok büyük önem kazanan media sorguları,
Firebug’ın yeni sürümünde de gözden kaçmamış. Medya sorgularını Firebug
ile düzenleyebiliyoruz artık.

![][5]

## @font-face Tanımları

font-face ile tanımlanan harici fontlar font listesinde görünüyor artık.

![][6]

## CSS Özelliklerini Silme

Bir yeni özellik; Firebug CSS özelliklerine sağ tıklayıp silebilme
imkanı veriyor

![][7]

## Diğer Yeni Özellikler

Yukarıda saydıklarımızın haricinde aşağıdaki yeni özelliklerde eklenmiş;

-   HTML sekmesinde gösterilen kodun formatını değiştirebiliyoruz.
-   Kod içindeki gösterilen renk tanımlarının formatını
    değiştirebiliyoruz
-   Menüdeki elemanların açıklamalarını tooltip ile gösterimi eklenmiş.
-   Konsolda help yazarak API comutlarının özet tanımlarına
    erişebiliyoruz.
-   Bunlardan başka [79 geliştirme daha][] yapılmış.

## Sonuç

Google Geliştirme Aracı ile rekabete giren Firebug bu yeni sürüm ile bir
çok yeni güzellik eklemiş. Google Geliştirme aracındaki kod ayrıştırma
özelliğini de ekleseler süper olacaktı.

## Kaynaklar

-   [https://blog.getfirebug.com/2012/07/13/firebug-1-10-0/][]
-   [http://hacks.mozilla.org/2012/07/firebug-1-10-new-features/][]
-   [http://www.sitepoint.com/firebug-1-10-whats-new/#fbid=ovoh-eTTYCI][]
-   [http://www.h-online.com/open/news/item/Firebug-1-10-released-with-new-cookie-manager-1641591.html][]
-   [http://www.softwareishard.com/blog/firebug/firebug-tip-trace-styles/][]
-   [https://getfirebug.com/cookies][]

  [100]: https://lh5.googleusercontent.com/tKZ-6Kzyaf6STFtwuEUm95oGkQqWiJaAkwl3OxkloAty_KrqehN6L1xNaOv6RQWde9-J9oDn_1VXB29aGzEiVm-Sv1HM192D52tDjY2tx3awGo6ggQQ
  [1]: https://lh4.googleusercontent.com/eQvJVbwp0haG4ivJXEumOG1QiKjuzIiL-7lsfkjnnTV1_AT66lmUQ-BOXUlRJFSoo4ZxBTyy4XRmyYQc6WvtErNMbH_jrNNEQrF65SyvGevKVAfU_-0
  [2]: https://lh4.googleusercontent.com/mtR9xJnxS6SR7uqXKTTb4W26T46FU1yN8XwxInp2wHAAjieLBjQU3VqaHnnXCYV3Luv6s2AZ3PQ1ofpFNdYt1TXIB4HFWWAoAdwG8TNrW7xKqtwVKJI
  [3]: https://lh5.googleusercontent.com/npXwZoTMZAxE3pTtW6zXjcjbJiFJiDyyaiAB-vdowVQFfnJvfV7UOaixBoYrTyGz3HJhuOUZJzH4cP3NvdlsxM6nbwWxhg7vT4BghflOsd7D12aHXnE
  [4]: https://lh5.googleusercontent.com/X3ZH15NWzxfnuYxp16s1rpaTzp_Gtps_cy8IP6TsLHoamLaK3c4t4I_YXTGB0QFI4xYo9xPPyojoCy4IDYpcKHEExTCQfTICh83FYejigS7fYtNhjEE
  [5]: https://lh3.googleusercontent.com/yiWS1E2CgTbrOsJ_6mfbXwWT58SckeLh428UWkz5bme1gTGmF6KkR-v2AJXMv79wcYfZTsnRkOhLpbjH5hB_rsYROVJL6lnNsoW9LRR7Bjgzu7soQ5c
  [6]: https://lh3.googleusercontent.com/RHIaTQhu4HPkUBxBuYTmD-mn4H8yH292PUEE4D07cEE0m7u_xLr6fmldehuEwX7Pd_fkWgwA7B76jotpStqU5HyMGjcpgWI7hi-bVI-lQP3P4A7Amc4
  [7]: https://lh3.googleusercontent.com/jrWMGGwv_Z9gPIATGHLZXIF2mxqtO2BkEdvyccxn9HqmOObPOo2rspGJO7gM2fivEIUwbPRRfFd9jeMR43nlMPErPCJPXxsMw8bUGCYJI69ULmkWujY
  [79 geliştirme daha]: http://code.google.com/p/fbug/issues/list?can=1&q=label%3Afixed-1.10+label%3AType-Enhancement&colspec=ID+Type+Status+Owner+Test+Summary+Reporter&cells=tiles
  [https://blog.getfirebug.com/2012/07/13/firebug-1-10-0/]: https://blog.getfirebug.com/2012/07/13/firebug-1-10-0/
  [http://hacks.mozilla.org/2012/07/firebug-1-10-new-features/]: http://hacks.mozilla.org/2012/07/firebug-1-10-new-features/
  [http://www.sitepoint.com/firebug-1-10-whats-new/#fbid=ovoh-eTTYCI]: http://www.sitepoint.com/firebug-1-10-whats-new/#fbid=ovoh-eTTYCI
  [http://www.h-online.com/open/news/item/Firebug-1-10-released-with-new-cookie-manager-1641591.html]: http://www.h-online.com/open/news/item/Firebug-1-10-released-with-new-cookie-manager-1641591.html
  [http://www.softwareishard.com/blog/firebug/firebug-tip-trace-styles/]: http://www.softwareishard.com/blog/firebug/firebug-tip-trace-styles/
  [https://getfirebug.com/cookies]: https://getfirebug.com/cookies
