---
layout: post
title: last-child seçicisi
Date: 2014-10-21 14:55
Category: css
tags: [last-child]
---

Daha önce [CSS3 seçicileri](/css3-secicileri/) kısmında biraz anlattım. Burada biraz daha detay bilgi vereceğim. 

:last-child seçicisi bir html seçicisi ile birilikte çalışıyor. Yani HTML'de p, h3, li gibi html seçicileri kullanmalıyız.

{% highlight css %}
ul li:last-child a{
    border-right:none;
}
{% endhighlight %}

peki biz bunu farklı elemanlar için kullanbilirmiyiz? Evet 

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-default-tab="css" data-height="250" src="//codepen.io/fatihhayri/embed/HJkjq?type=stylus&amp;height=250" id="cp_embed_hgplm"></iframe>

Evrensel seçici(*) ile sorunumuzu çözdük.

Bunun dışında belli bir sınıf tanımı yapılarakta bir çözüm oluşturulabilir.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" data-default-tab="css" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/KGcEm?type=stylus&amp;height=250" id="cp_embed_hgplm"></iframe>

Ancak bu sınıflı çözümün bir sorunu var. Eğer son elemandan sonra bir eleman daha var ise seçim yapılmıyor ve sorun oluyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" data-default-tab="css" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/ohJKf?type=stylus&amp;height=250" id="cp_embed_hgplm"></iframe>