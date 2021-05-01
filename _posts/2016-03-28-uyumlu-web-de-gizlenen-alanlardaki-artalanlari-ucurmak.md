---
layout: post
title: CSS İpucu 38 - Uyumlu web'de gizlenen alanlardaki artalanları uçurmak
Date: 2016-03-28 10:00
categories: [CSS]
tags: [ipucu background-image uyumlu-web]
---

Mobilde her kilobaytın hesabı yapıldığı için ve masaüstüne göre nispeten daha yavaş bağlantılar nedeniyle uyumlu web çalışmalarında performan daha fazla önem kazanıyor.

Tasarım icabı mobilde gizlenecek alanlardaki artalan resimleri kaldırmamız bize avantaj sağlayacaktır.

```css
  .logo {
    background: url(logo.png) 0 0 no-repeat;
  }
  
  @media (max-width: 979px) {
     .logo { 
        display: none;
     }
  }
```

yerine

```css
  .logo {
    background: url(logo.png) 0 0 no-repeat;
  }
  
  @media (max-width: 979px) {
     .logo { 
        background-image: none
     }
  }
```

kullanımı bize performans olarak geri dönecektir.

## Kaynaklar

 - [http://stackoverflow.com/a/12444431/296373](http://stackoverflow.com/a/12444431/296373)
