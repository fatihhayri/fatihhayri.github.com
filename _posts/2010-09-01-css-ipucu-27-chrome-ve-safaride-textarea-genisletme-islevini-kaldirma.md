---
layout: post
title: CSS İpucu 27&#58; Chrome ve Safari&#039;de textarea genişletme işlevini kaldırma
Date: 2010-09-01 14:45
Category: CSS
tags: Google Chrome, safari, textarea, textarea genişletme, WebKit
---

Webkit tabanlı tarayıcılarda(Google Chrome ve Safari) textarea’ların sağ
alt köşesinde textarea’yı genişletmeye yarayan bir işaret bulunur bu
işretin üzerine mouse ile basıp genişliği ve yüksekliği arttıra biliriz.
Bu işlem kullanıcının uzun içerik girdiği durumlar düşünülerek
konulmuştur ve yararlı bir özelliktir. Ancak bazen bu işaret ve işlevini
kullanmak istemediğimiz durumlar olur ve bu işareti kaldırmak isteriz.
Bu durum için çok kısa bir css kodu işimizi görüyor.

![][100]

{% highlight css %}
textarea{
	resize:none
}
{% endhighlight %}

Sadece bu kod ile istediğimizi elde edebiliriz. Tek sakıncası bu kodu sadece webkit tabanlı tarayıcılar desteklediği için sayfamızı w3c CSS kontrolünden geçirdiğimizde hata verecek olmasıdır.

## Kaynak

-   [http://www.google.com/support/forum/p/Chrome/thread?tid=5f9cd62207e2c7a8&hl=en][]
-   [http://www.electrictoolbox.com/disable-textarea-resizing-safari-chrome/][]

  [100]: /images/textarea.gif "textarea"
  [http://www.google.com/support/forum/p/Chrome/thread?tid=5f9cd62207e2c7a8&hl=en]: http://www.google.com/support/forum/p/Chrome/thread?tid=5f9cd62207e2c7a8&hl=en
  [http://www.electrictoolbox.com/disable-textarea-resizing-safari-chrome/]: http://www.electrictoolbox.com/disable-textarea-resizing-safari-chrome/
