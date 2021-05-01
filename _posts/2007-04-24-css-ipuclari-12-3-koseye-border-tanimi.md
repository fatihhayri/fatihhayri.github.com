---
layout: post
title: CSS İpuçları - 12 &#58; 3 köşeye border tanımı
Date: 2007-04-24 16:26
categories: [CSS]
tags: [CSS, HTML]
---

Normalde tüm köşelere kenarlık(border) tanımlarken:

```css
border: 1px solid #333;
```

kullanılır. Tek köşeye kenarlık vermek içinse:

```css
border-[top-right-bottom-left]: 1px solid #333;
```

kullanılır. köşeye kenarlık vermek için her birini ayrı ayrı
tanımlamamız gerekir.

```css
border-top: 1px solid #333;
border-right: 1px solid #333;
border-left: 1px solid #333;
```

Bunun yerine olmayan kenarı(örn: alt kenar) görünmez yaparak hallede
biliriz.

```css
border: 1px solid #333;
border-bottom: 1px solid #fff;
```

