---
layout: post
title: IE iframe ardalanında beyaz renk sorunu
Date: 2008-06-24 10:05
Category: XHTML
tags: [allowtransparency, beyaz ardaaln sorunu, iframe, internet explorer, İnternet Tarayıcısı]
---

Sitelerimizde <iframe\> kullandığımızda Internet Explorer bu <iframe\>
ardalanını beyaz bir blok şeklinde görüntüleyecektir. Bu Ardalanı beyaz
olan sitelerde sorun değil ama ardalanında resim veya farklı renk olan
sitelerde sorun çıkarıyor. Bu durumu engellemek için <iframe\> koduna
çok basit bir özellik eklemesi yeterli oluyor.


{% highlight html %}
<iframe allowtransparency="true"></iframe>
{% endhighlight %}
	
