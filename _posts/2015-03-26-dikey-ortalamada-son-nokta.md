---
layout: post
title: Dikey Ortalamada Son Nokta
Date: 2015-03-26 16:41
Category: css
tags: [dikey-ortalama transform]
---

CSS'de sorun olan noktalardan biridir dikeyde elemanları ortalamak. Farklı çözüm önerileri sunulmuştur. Bende daha önce yazmıştım bir tane. [CSS ile Dikey Ortalama](/css-ile-dikey-ortalama/)

CSS3 ile birlikte bu soruna bazı çözümler üretildi. Benim burada anlatacağım **transform** ile üretilen çözüm.

Kod çok basit;

{% highlight css %}
.dikey-ortala {
   position: relative;
   top: 50%;
   transform: translateY(-50%);
}
{% endhighlight %}

Kod bu kadar

<iframe height='320' width='100%' scrolling='no' src='//codepen.io/fatihhayri/embed/zxeQRO/?height=320&theme-id=0' data-default-tab='css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Son olarak belirtmem gereken şeyler var. 

 - Kapsayıcı elemanın **sabit bir yüksekliği** olmalıdır.
 - İçeriği yoğun olan sayfalarda **transform** uygulanan elemanda **bulanıklık** oluyor. Çözüm için kapsayıcı elemana **transform-style: preserve-3d;** atamak yeterli oluyor.
 - Dikey ortalama uygulanan elemana tanımlanan **üst ve alt padding, margin veya border** sıkıntı çıkarıyor.
 - Dinamik CSS yazıyorsanız bunu bir mixin haline getirmek mantıklı

Kalın sağlıcakla.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**9+(-ms)**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+ (-webkit)**|**+(-webkit)**|**+**|
{: .tarayici-uyumi}

## Kaynaklar

 - [http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/)
 - http://brantsteen.com/blog/vertical-alignment-with-css/
 - [http://davidwalsh.name/css-vertical-center](http://davidwalsh.name/css-vertical-center)
 - [http://daker.me/2014/04/4-css-tricks-for-vertical-alignment.html](http://daker.me/2014/04/4-css-tricks-for-vertical-alignment.html)

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png