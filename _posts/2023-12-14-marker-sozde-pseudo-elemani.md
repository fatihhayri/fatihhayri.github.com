---
layout: post
title: ::marker sözde (pseudo) elemanı
description: ::marker sözde (pseudo) elemanı ile listelere işaretçi tanımlamak
lang: tr_TR
Date: 2023-12-11 10:00
Category: CSS
tags: [marker, işaretçi]
image:
  feature: marker-pseudo-element.png
---

W3C'nin son zamanlarda yaptığı güzel ataklar bize doğru yolu bulduklarını gösteriyor. Geriden de gelseler sektörün ihtiyaçlarına kulak vermeleri güzel.  `::marker` ile bunun ne alakası var derseniz şöyle açıklayayım: Yıllarca list işaretleyici (marker) için çeşitli yöntemler geliştirdik ve kullandık sonra `::marker` sözde elementi çıktı ve bu yaptığımız alternatif yöntemlere gerek kalmadı. **Standart koyucular yerleşik olarak gelen elemanlara yeterince CSS ile erişim sağlarlarsa hem daha standart hem de daha kolay yönetilebilir bir mecraya kavuşabiliriz.** Son yıllardaki atılım bu konuda beklenen çizgiye geldiğini gösteriyor.

Gelelim konumuza HTML'de üç çeşit liste elementi var. Sıralı listeler (`<ol>`) ve sırasız listeler (`<ul>`) ve tanımlı listeler(`<dl>` `<dd>`) Biz burada işaretçisi olan `<ul>`ve `<ol>` elementi inceleyeceğiz.

Bu HTML etiketlerini oluşturduğumuzda bize tarayıcıların standart stilleri ile görünürler.  Biz bu görünümleri değiştirmek için şimdiye kadar alternatif yöntemler kullanıyorduk. Şimdi `::marker` sözde elementi ile bunu kolaylıkla yapabiliyoruz.

<iframe height="332.296875" style="width: 100%;" scrolling="no" title="Listeler" src="https://codepen.io/fatihhayri/embed/wvNZGeO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/wvNZGeO">
  Listeler</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki listede yuvarlak işaretçiyi veya rakamları değiştirmek istesek te W3C'nin bize sunduğu alternatiflerden birini kullanmak durumundaydık. Kendi özel işaretçimizi kullanmak için genelde `list-style: none;` ile işaretçiyi gizleyip `:before` ile kendi işaretçimizi ekliyorduk.

Şimdi `::marker` sözde elemanı yardımı ile bu işaretçilerin özelliklerine erişip değiştirebiliyoruz.

<iframe height="341.765625" style="width: 100%;" scrolling="no" title="Listeler" src="https://codepen.io/fatihhayri/embed/poGByVj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/poGByVj">
  Listeler</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Bunun dışında işaretçilerin yerine resim veya emoji koyabiliyoruz.

<iframe height="488.6953125" style="width: 100%;" scrolling="no" title="Listeler" src="https://codepen.io/fatihhayri/embed/VwgNaEd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/VwgNaEd">
  Listeler</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ::marker sözde sınıfına tanımlanabilen özellikler

Şu an uygulanabilen tanımlar aşağıdakilerdir.

-   `font-*` özellikleri
-   `white-space`
-   `color`
-   `direction`
-   `content`
-   `animation`
-   `transition`

Şu an `background`, `margin`, `padding`, `width`, `height` özelliklerine müdahale edemiyoruz umarım bunlarda eklenir.

## Tarayıcıda görünümü

Liste işaretçilerini tarayıcılarda görüntüleyip üzerinde işlem yapabiliyoruz.

![marker tarayıcıda görünümü](https://fatihhayrioglu.com/images/marker-tarayici.png)


Tarayıcı desteği de gayet iyi. Yazıyı yazdığımda %95 desteği var.

Kalın sağlıcakla.

## Kaynaklar

 - https://css-tricks.com/css-counters-custom-list-number-styling/
 - https://codepen.io/ines/pen/qXrYQO
 - https://codepen.io/t_afif/pen/GRYZeqr
 - https://codepen.io/DuskoStamenic/pen/LYeEqbm
 - https://codepen.io/5t3ph/pen/KKgqeNB
 - https://webdesign.tutsplus.com/next-level-list-bullets-with-css-marker--cms-37212t
 - https://youtu.be/2awepiNoaZI?si=LFm0QOT5gap_x3AW
 - https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/
 - https://web.dev/articles/css-marker-pseudo-element?hl=tr