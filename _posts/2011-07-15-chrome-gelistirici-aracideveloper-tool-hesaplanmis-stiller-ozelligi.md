---
layout: post
title: Chrome Geliştirici Aracı(Developer Tool) Hesaplanmış Stiller Özelliği
Date: 2011-07-15 10:02
Category: CSS
tags: chrome geliştirici aracı, firebug, hesaplanmış stiller
---

Firefox kullanmamdaki en büyük sebeplerden birisi tabiki Firebug,
Firebug dışında diğer geliştirici araçlarınıda arasıra kullansam da pek
Firebug kolaylığı sağlamadığı için tercih etmiyorum. Bugün(yarım saat
önce) Chrome geliştirici aracı ile çalışırken Firebug’da olmasını
istediğim bir özelliği gördüm ve ilk defa Firebug’a bir konuda eksi puan
verdim. Hesaplanmış stiller olarak Türkçe’ye çevirebileceğimiz Computed
Styled özelliği, bu özellik şu işimize yarıyor; Bir elemana uygulanmış
veya kalıtsal olarak(inherit) gelen atamaları tarayıcının
hesabından(yorumlamasından) sonra uygulanan değerlerin listesini bize
sunuyor. Böylece biz elemanın o an hangi değeri aldığını görebiliyoruz.
Benim Firebug’da eksik gördüğüm kısım bu hesaplanan sonuç değerinin
nerede atandığını göstermemesi idi. Chrome işte bu noktada tam benim
düşündüğüm şeyi yapmış.

![][100]

**Firebug**

![][1]

**Chrome Geliştirici Aracı(Developer Tool)**

Chrome Geliştirici Aracı ekran görüntüsünde görüldüğü gibi tarayıcının son gösterdiği değerin hangi css dosyasında
olduğunu ve satır numarasını bize veriyor. Tamda benim istediğim şey.
Ayrıca kalıtsal tanımları göster-gizle yapmak için sağ üstteki “Show
inherited” işaret kutucuğuda güzel bir özellik olmuş. Rekabet her zaman
güzeldir umarım yakında Firebug’a da eklenir.

  [100]: /images/firebug_hes_stil.gif
  [1]: /images/chrome_hep_stil.gif
