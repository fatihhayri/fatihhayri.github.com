---
layout: post
title: CSS İpuçları - 2
Slug: hata-yakalama-yontemleri
Date: 2006-07-15 23:59
Category: CSS
tags: background, CSS, Hata ayıklama, kenar-çizgisi
---

CSS ile sayfa planlama ve gelişmiş sayfa tasarımlarında başınıza bir çok
hata gelebilir. Bu gayet normal bir haldir. Mesele bu hataları
çözmektir. Hata çözmede izlenecek yöntemlerden bir tanesi elementlere
kenar çizgisi(border) atamaktır.

{% highlight css %}
li a {
  border: 1px solid red;
}
{% endhighlight %}

Diğer bir yöntemde elemente ardalan rengi(background-color) uygulamaktır.

CSS kodu;

{% highlight css %}
.icerikalani {
  background-color:#999;
}
{% endhighlight %}

Böylece elementin etki alanı görülecek ve hatayı tespit kolaylaşacaktır.
