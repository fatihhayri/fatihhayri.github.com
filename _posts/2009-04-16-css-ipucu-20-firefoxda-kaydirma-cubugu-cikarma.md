---
layout: post
title: CSS İpucu 20&#58; Firefox&#039;da Kaydırma Çubuğu Çıkarma
Date: 2009-04-16 10:21
categories: [CSS]
tags: [Firefox, ipucu, kaydırma-çubuğu, mozilla, overflow]
---

Firefox İnternet Explorer'un tersine eğer sayfa yüksekliği kaydırma
çubuğu çıkarmayacak kadar yüksekliğe sahip değilse kaydırma çubuğu
çıkarmıyor. Bu özellikle çerçeveli sayfalarda sorun çıkarabilir. Bunun
için bir çözüm.

```css
html{
    overflow:-moz-scrollbars-vertical;
}
```
