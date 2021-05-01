---
layout: post
title: iOS'ta overflow uygulanmış alanlardaki kaydırma sorunu ve çözümü
description: ios Safaride kaydırma sorunu ve çözümü
lang: tr_TR
Date: 2018-08-25 16:06
categories: [CSS]
tags: [ios, safari, webkit]
---

Mobilde `overflow-x: auto` veya `overflow-y: auto`  uyguladığımız  alanlardaki kaydırma işlemlerinde Android'lerde akıcı bir şekilde çalışırken iOS telefon ve tabletlerde akıcılığını kaybediyor. Süründürüyor resmen.

![ios iphone kaydırma](/images/ilk.gif)

Stackoverflow'da çözümünü buldum ve sizlerle paylaşmak istedim.

```css
* {
    -webkit-overflow-scrolling: touch;
}
```

şeklinde tüm elemanlara uyguladığımız gibi sadece istediğimiz elemana da uygulayabiliriz. 

![ios düzeldi](/images/ikinci.gif)

Kalın sağlıcakla.

## Kaynaklar

 - [https://stackoverflow.com/a/38977324/296373](https://stackoverflow.com/a/38977324/296373)
 - [https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)