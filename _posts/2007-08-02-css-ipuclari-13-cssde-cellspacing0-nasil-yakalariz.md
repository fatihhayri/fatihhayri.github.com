---
layout: post
title: CSS İpuçları 13 - CSS&#039;de Cellspacing=&quot;0&quot; nasıl yakalarız
Date: 2007-08-02 09:24
Category: CSS
tags: [border-collapse, border-spacing, CSS, tablo]
---

Artık sayfalarımızı CSS ile oluşturup şekillendiriyoruz. Tabloların
Cellspacing="0" atamasını css ile nasıl yaparız. İşte cevabı:

{% highlight css %}
table{
    border-spacing: 0px;
    border-collapse: collapse;
}
{% endhighlight %}

Bu kadar.

## Kaynak

-   http://www.mularien.com/blog/2007/07/29/css-tip-css-equivalent-to-cellspacing0/
