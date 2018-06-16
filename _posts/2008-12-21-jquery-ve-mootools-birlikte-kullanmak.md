---
layout: post
title: jQuery ve mootools birlikte kullanmak
Date: 2008-12-21 14:01
Category: Ajax, Javascript
tags: [Javascript, jquery, mootools]
---

Ben genellikle jQuery ile çalışıyorum, ama bazen diğer javascript
kütüphaneleride kullanmak gerekiyor. Bende yeni projemde mootools'un
multibox lightbox kolonunu kullandım. Tabi jquery ve mootools ile
birlikte kullanmamdan dolayı hata vermeye başladı. Çözüm çok basit $
işareti yerine jQuery yazmak yeterli.

{% highlight javascript %}
$.ajax
{% endhighlight %}

yerine

{% highlight javascript %}
jQuery.ajax
{% endhighlight %}
