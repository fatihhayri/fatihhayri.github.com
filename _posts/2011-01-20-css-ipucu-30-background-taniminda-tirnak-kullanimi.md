---
layout: post
title: CSS İpucu 30 background tanımında tırnak kullanımı
Date: 2011-01-20 21:49
Category: CSS, XHTML
tags: [background, Dreamweaver, tırnak işareti]
---

CSS kodu yazarken background tanımlarında bazı yerlerde tırnaklı tanım
yapıldığını, bazı yerlerde ise tırnaksız tanım yapıldığını
görmüşsünüzdür.

{% highlight css %}
background("deneme.gif");
{% endhighlight %}

veya

{% highlight css %}
background(deneme.gif);
{% endhighlight %}

Ben birkaç güne kadar arada bir farkın olmadığını düşünüyordum.(Aslında
benim gibi özel durumlar hariç bir fark olmadığı hakkındaki düşüncem
devam ediyor.)

Projede css’de kullanılan resimlerin ön belleğe alınmaması için
background:url(denem.gif?v={VERSION}) diye bir yol izliyoruz versiyon
kısmına her atılan versiyonun numarası yazıyor ve böylelikle tarayıcılar
resimler önbelleğe almıyor özelliklede Chrome!

Tabi bu kullanım Dreamweaver’da css otomatik tamamlamasını ve bu
tanımdan sonraki özelliklerin renklendirmesini bozuyor.

![][100]

{% highlight css %}
background(deneme.gif?v={VERSION});
{% endhighlight %}

Dün ise eğer bu tanımı tırnak içinde yazarsam Dreamweaver otomatik
tamamlaması ve kod renklendirmesini bozmadığını gördüm ve sevindim.

{% highlight css %}
background("deneme.gif?v={VERSION}");
{% endhighlight %}

![][1]

Sağlıcakla kalın.


  [100]: https://lh6.googleusercontent.com/c2haOdbn_8pek9LRNqb_K3pbsv7JgYkP5xY_TEYYiIois0PDeoASRt6dlcpoMFoVwT3e1_W1cBJHHnwtjAKarM1BpOKv5MeKS3UExtaZQzwoHLinPQ
  [1]: https://lh6.googleusercontent.com/tvGJgIBOa6BkpPjn5HbU5Ecc4eYSlZpWSOLJC-cWMja15xXORM1edFzFNtOvXYvWe8JgDzMouVdhBaLthGWjwiUkzEqqyI3qYpQPE-H49YkcpEIr3A
