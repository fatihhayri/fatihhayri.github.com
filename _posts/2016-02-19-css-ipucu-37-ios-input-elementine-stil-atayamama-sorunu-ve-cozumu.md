---
layout: post
title: CSS İpucu 37 - iOS input elementine stil atayamama sorunu ve çözümü
Date: 2016-02-19 12:00
categories: [CSS]
tags: [ipucu webkit input]
---

iOS Safari'de karşılaştığım bir sorundu çözümüde çok basit paylaşayım hemen.

iOS input elementine yaptığımız CSS tanımlarını uygulamıyor. Webkit'in form elemanları konusunda bazı takıntıları var.

Normalde aşağıdaki gibi görünmesi gereken buton;

![enter image description here](https://fatihhayrioglu.com/images/ios-webkit-bug-2.png){:height="40px" width="400px"}

Böyle görünüyor

![enter image description here](https://fatihhayrioglu.com/images/ios-webkit-bug.png){:height="27px" width="400px"}

Çözümü ise çok basit

```css
  input {
    -webkit-appearance: none;
  }
```

Tanımını ekledikten sonra sizin stillerinizi algılıyor.

## Kaynaklar

 - [http://stackoverflow.com/a/2918716/296373](http://stackoverflow.com/a/2918716/296373)
 - [http://trentwalton.com/2010/07/14/css-webkit-appearance/](http://trentwalton.com/2010/07/14/css-webkit-appearance/)
 - blog.antenna.io/2013/02/remove-default-input-styling-from-webkit