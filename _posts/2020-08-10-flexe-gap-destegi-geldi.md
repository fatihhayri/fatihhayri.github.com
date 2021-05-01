---
layout: post
title: Flex'e gap desteği geldi
description: Grid ile gelen gap flex'e de geldi. 
lang: tr_TR
Date: 2020-08-10 15:00
categories: [CSS]
tags: [flex, gap, grid, column]
---

CSS grid ile gelen ögeler arasında boşluk verme özelliği(grid-gap) flex özelliğine de geldi. Çok yerinde bir geliştirme. Daha önce eksi margin ve farklı yöntemlerle çözmeye çalıştığımız bu işi tek bir tanım ile çözmek süper. Tabi `grid-gap` olarak standartlaşan yapı genele yayıdığı için artık `gap` olarak yoluna devam edecek.

Şu an Firefox (63+) ve Chrome 84 destekliyor. Safari'ye de destek gelirse değme keyfimize.

Hemen bir örnek üzerinde test edelim. 

<iframe height="300" style="width: 100%;" scrolling="no" title="flex gap" src="https://codepen.io/fatihhayri/embed/yLYEQNj?height=300&theme-id=13521&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Görüldüğü gibi gap değeri sadece yatayda değil yatayda (column-gap) ve dikeyde (row-gap) tanımlanabiliyor. `gap` tanımı yatay ve dikey için ortak değer olduğunda kısaltma olarak kullanılabilir.

Çoklu kolon'a da `gap` desteği geldi. Çok fazla kullanmasam [CSS3 Çoklu Kolonlara](https://fatihhayrioglu.com/css3-coklu-kolonlar/ "CSS3 Çoklu Kolonlar") da `gap` desteği gelmiş olması sevindirici. Daha önce `column-gap` olarak kullandığımız değer artık `gap` oldu.

Kalın sağlıcakla.

## Kaynaklar

- https://web.dev/flexbox-gap/
- https://developer.mozilla.org/en-US/docs/Web/CSS/gap
- https://medium.com/@schofeld/mind-the-flex-gap-c9cd1b4b35d8
- https://coryrylan.com/blog/css-gap-space-with-flexbox (Eski yöntem)
- https://caniuse.com/#feat=flexbox-gap
- https://www.bram.us/2020/05/12/spacing-grid-flexbox-items-in-css-with-the-gap-property/
