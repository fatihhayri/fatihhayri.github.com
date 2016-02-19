---
layout: post
title: CSS İpucu 37 - iOS input elementine stil atayamama sorunu ve çözümü
Date: 2016-02-19 12:00
Category: css
tags: ipucu webkit input
---

iOS Safari'de karşılaştığım bir sorundu çözümüde çok basit paylaşayım hemen.

iOS input elementine yaptığımız CSS tanımlarını uygulamıyor. Webkit'in form elemanları konusunda bazı takıntıları var.

Normalde aşağıdaki gibi görünmesi gereken buton;

![enter image description here](http://fatihhayrioglu.com/images/ios-webkit-bug-2.gif)

Böyle görünüyor

![enter image description here](http://fatihhayrioglu.com/images/ios-webkit-bug.png)

Çözümü ise çok basit

{% highlight css %}
  input {
    -webkit-appearance: none;
  }
{% endhighlight %}

Tanımını ekledikten sonra sizin stillerinizi algılıyor.

## Kaynaklar

 - [http://stackoverflow.com/a/2918716/296373](http://stackoverflow.com/a/2918716/296373)
 - [http://trentwalton.com/2010/07/14/css-webkit-appearance/](http://trentwalton.com/2010/07/14/css-webkit-appearance/)
 - [http://blog.antenna.io/2013/02/remove-default-input-styling-from-webkit/](http://blog.antenna.io/2013/02/remove-default-input-styling-from-webkit/)