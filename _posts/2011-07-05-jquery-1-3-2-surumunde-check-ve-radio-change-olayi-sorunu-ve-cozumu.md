---
layout: post
title: jquery 1.3.2 sürümünde check ve radio change olayı sorunu ve çözümü
Date: 2011-07-05 19:48
Category: Javascript, jquery
---

jQuery biz arayüz geliştiriciler için çok büyük bir yardımcı. Devamlı
güncellenen jquery kütüphanesi bazı geniş çaplı sitelerde yeni sürüme
geçmek o kadarda kolay olmuyor. Burada yaşadığımız sorun eski sürüm
jquery kütüphanesinin bir problemine kütüphane güncellemeden çözüm
üretmek olacak. Sorun şu; chackbox veya radio butonlara atanan change
olayının işlememesi, daha doğrusu ilk tıklamada değil ikinci tıklamada
çalışması ve bu sorunun sadece Internet Explorer sürümlerinde(6,7,8)
meydana gelmesi.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/Y4n5j/1/embedded/"></iframe>

Çözüm için yapmamız gerekn çok basit

{% highlight javascript %}
$("#fatih").click(function() {
	this.blur();
});
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/zEBUg/embedded/"></iframe>

Aslında yaptığımız input alanından focus’u kaldırmak oldu. Evet belki
pek işinize yaramıyacak ama benim gibi çok arayan bir kişi buradan
yararlansa yeter.

## Kaynak

-   [http://blog.megamon.com/tag/jquery/][]
-   [http://jquery14.com/day-01/jquery-14][]


  [http://blog.megamon.com/tag/jquery/]: http://blog.megamon.com/tag/jquery/
  [http://jquery14.com/day-01/jquery-14]: http://jquery14.com/day-01/jquery-14
