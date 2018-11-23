---
layout: post
title: CSS ile animasyon uygulanan alanlarda z-index sorunu ve çözümü
description: CSS animation-fill-mode forward ve both tanımlandığı alanlarda zindex sorunu
lang: tr_TR
Date: 2018-11-22 03:06
Category: CSS
tags: [animation, animation-fill-mode, z-index]
---

Çalıştığım projede([vault.live](https://vault.live/){:target='_blank' title='vault.live'}) [animated.css](https://daneden.github.io/animate.css/){:target='_blank' title='animate.css'} kütüphanesi kullanılıyor. Bir sorun ile kaşılaştık. animasyon uygulanan kutularda açılan menüler diğer kutuların altında kalıyordu. 

Bir arama sonucu stackoverflow.com'da cevabını buldum.

{% highlight css %}
.animated {
	animation-duration: 1s;
	animation-fill-mode: both;
}
{% endhighlight %}

`animation-fill-mode`'un `forwards` değeri ve bu değeri kapsayan `both` değerlerinin tanımlandığı durumlarda sorun oluyor. `initial` olarak tanımlamak sorunu giderdi.

{% highlight css %}
.animated {
	animation-duration: 1s;
	animation-fill-mode: initial;
}
{% endhighlight %}

Benzer bir sorunla karşılaşırsanız aklınızda oldun.

Sağlıcakla kalın.

# Kaynak

 - [https://stackoverflow.com/a/39495529/296373](https://stackoverflow.com/a/39495529/296373){:target='_blank'}