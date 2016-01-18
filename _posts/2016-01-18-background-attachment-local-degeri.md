---
layout: post
title: background-attachment local değeri
Date: 2016-01-18 08:40
Category: css
tags: css background-attachment css3
---

**background-attechment** özelliğinden çok öncelerden [bahsetmiştim](http://localhost:4000/hizli-css-referansi/). Benim bahsettiğimde iki değer alıyordu; **scroll** ve **fixed** değerleri. Ancak bunlara CSS3 ile birlikte yeni bir değer daha eklenmiş; **local** değeri. Gerçi ekleneli bayağı olmuş. (2009)

Benim yazdığım ilk makalede şöyle tanımlamışım bu özelliği "background-attachment özelliği zemine eklenen resmin sayfa ile
scroll etmesini veya sayfanın zeminin de çakılı kalmasını sağlar."

Bu tanımda eksik kalan kısımları tamamlayalım. **background-attechment** özelliği iki farklı görünüme hitap eder:  Birincisi ana kapsayıcı yani tarayıcı, ikincisi bizim oluşturduğumuz kapsayıcı diğer adı ile yerel (local).

**background-attechment: local** tanımı ana kapsayıcının kaydırma hareketinden etkilenmez, sadece bizim oluşturduğumuz elemanın kaydırma çubuğu hareketinden etkilenerek artalanı çakılı kalır.

<iframe height='800' scrolling='no' src='//codepen.io/fatihhayri/embed/OMjdyY/?height=800&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Yukarıdaki örneği incelersek;

**background-attechment: scroll** ana kaydırma etki etmez, yerel kaydırmada artalan resmi kaydırılır.

**background-attechment: fixed** ana kaydırma ve yerel kaydırmada artalan resmi çakılı kalır.

**background-attechment: local** ana kaydırma etki etmez, yerel kaydırmada artalan resmi çakılı kalır.

Örneği inceleyerek tanımları daha iyi anlayabiliriz.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**-**|**8+**|**+**|
{: .tarayici-uyumi}

Kalın sağlıcakla.

## Kaynaklar

 - [http://lea.verou.me/2012/04/background-attachment-local/](http://lea.verou.me/2012/04/background-attachment-local/)
 - [https://css-tricks.com/almanac/properties/b/background-attachment/](https://css-tricks.com/almanac/properties/b/background-attachment/)
 - [http://caniuse.com/#feat=background-attachment](http://caniuse.com/#feat=background-attachment)
 - [http://tympanus.net/codrops/css_reference/background-attachment/](http://tympanus.net/codrops/css_reference/background-attachment/)


[firefox]: http://fatihhayrioglu.com//images/ff.png
[chrome]: http://fatihhayrioglu.com//images/ch.png
[explorer]: http://fatihhayrioglu.com//images/ie.png
[msafari]:http://fatihhayrioglu.com//images/sm.png
[android]:http://fatihhayrioglu.com//images/an.png