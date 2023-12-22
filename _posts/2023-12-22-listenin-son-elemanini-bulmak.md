---
layout: post
title: Listenin son elemanını bulmak
description: CSS ile listenin son elemanını bulmak
lang: tr_TR
Date: 2023-12-22 10:00
Category: CSS
tags: [last-of-type, nth-last-child]
---

Geçen gün [baklava](https://github.com/Trendyol/baklava) select komponentine arama ekleme işini yapıyordu [Erbil](https://twitter.com/koalafied_dev). Bu geliştirme sırasında şöyle bir şey yaşadık; `hidden` özniteliği ile gizlediğimiz listenin son elemanından dolayı son elemanın alt çizgisinin gizleme kodu çalışmıyordu. 

Olayı şöyle örnekleyebilirim.

<iframe height="300" style="width: 100%;" scrolling="no" title="last-of-type" src="https://codepen.io/fatihhayri/embed/LYaPwmB?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

İlk listede normal durumda son elemanın altındaki çizgi gözükmüyor. İkinci örnekte sondan bir önceki eleman gizlendiği için yine gözükmüyor ancak son örnekte son elemanı gizlediğimiz için çizgi gözüküyor. `:last-of-type` seçicisi listenin gizlenmiş ögelerini dikkate almıyor. Çözmek için ürettiğimiz `:not([hidden]):last-of-type` seçicisi de işlemedi.

Bu konu hakkındaki araştırmalarımız sonucu [stackoverflow'daki](https://stackoverflow.com/a/8300258/296373) bu çözüm bize yol gösterdi. `:nth-last-child(1 of :not([hidden]))` ile sorun çözüldü.

Shadow DOM kaynaklı bir sorun nedeni ile baklavada çözmedi ama CSS ile böyle bir sorun yaşayanlar için not olsun diye buraya ekliyeyim dedim :)

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child#browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child#browser_compatibility)
 - [https://stackoverflow.com/questions/8300185/combining-last-child-with-not-class-selector-in-css](https://stackoverflow.com/questions/8300185/combining-last-child-with-not-class-selector-in-css)