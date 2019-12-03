---
layout: post
title: Webkit Tabanlı Tarayıcılar(Chrome ve Safari) İçin Düzeltme(Hack) Sorunu ve Çözümü
Date: 2011-09-21 15:52
Category: CSS
tags: [chrome, css düzeltme, media, safari, WebKit]
---

Genelde [tarayıcı düzeltmelerini][] ie için yaparız. Ancak bu sefer
Chrome için bir düzeltme yapmam gerekti(Chrome’un line-height ile olan
sorun) araştırdım ve media sorgusu ile bir düzeltme kodu buldum.

{% highlight css %}
@media screen and (-webkit-min-device-pixel-ratio:0) {
    .arama { background-color: #FF0000; }
    #solAlan {color: #0000FF;}
}
{% endhighlight %}

Şeklinde bir kod işimi gördü, ancak projeyi yayına atarken sıkıştırıp
gönderiyoruz ve sıkıştırılınca

{% highlight css %}
@media screen and(-webkit-min-device-pixel-ratio:0)
{% endhighlight %}

Satırındaki **and** ve **(** arasındaki boşluğu sıkıştırma esnasında yok
ediyor ve buda bu düzeltmenin uygulanmamasına neden oluyor. Çözüm için
araya çakma bir yöntem(**/*!*/**) ile boşluk bırakmalıyız.

{% highlight css %}
@media screen and/*!*/(-webkit-min-device-pixel-ratio:0) {
	...
}
{% endhighlight %}


Şeklinde çözüm üretebiliyoruz.

Belki küçük bir ipucu ama lazım olur günün birinde

## Kaynaklar

-   [http://www.evotech.net/blog/2008/09/css-hack-for-google-chrome-and-safari-31/][]
-   [http://stackoverflow.com/questions/4104004/whats-the-semantic-of-media-screen-and-webkit-min-device-pixel-ratio0][]
-   [http://yuilibrary.com/projects/yuicompressor/ticket/2528087][]


  [tarayıcı düzeltmelerini]: http://fatihhayrioglu.com/tum-tarayicilar-icin-css-duzeltmelerihack/
  [http://www.evotech.net/blog/2008/09/css-hack-for-google-chrome-and-safari-31/]: http://www.evotech.net/blog/2008/09/css-hack-for-google-chrome-and-safari-31/
  [http://stackoverflow.com/questions/4104004/whats-the-semantic-of-media-screen-and-webkit-min-device-pixel-ratio0]: http://stackoverflow.com/questions/4104004/whats-the-semantic-of-media-screen-and-webkit-min-device-pixel-ratio0
  [http://yuilibrary.com/projects/yuicompressor/ticket/2528087]: http://yuilibrary.com/projects/yuicompressor/ticket/2528087
