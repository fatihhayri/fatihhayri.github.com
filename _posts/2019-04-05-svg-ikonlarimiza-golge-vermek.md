---
layout: post
title: SVG ikonlarımıza gölge vermek
description: SVG ikonlarımıza gölge vermeyi anlatıyoruz. box-shadow değil filter drop-shadow kullanın.
lang: tr_TR
Date: 2019-04-05 09:27
Category: CSS
tags: [box-shadow, filter, drop-shadow, ipucu]
image:
  feature: video-cover.png
---

Video örnek resim üzerine ikon koymak isteyince SVG'ye gölge uygulama ihtiyacım oldu. İhtiyaç tam olarak şöyle 

![gölgeli svg](https://fatihhayrioglu.com/images/video-cover.png)

Video örnek resim dosyası üzerine oynatma ikonu koyacağız ve bu oynatma ikonu beyaz olacak. Tabi beyaz okun altına beyaz zemin gelince ayrışması için gölge koyulmuş. Ben ikonu satır içi (inline) SVG olarak koydum. Sonra `box-shadow` uygulayayım dedim.  Sonuç beklediğim gibi olmadı.

<iframe height="617" style="width: 100%;" scrolling="no" title="SVG box-shadow" src="//codepen.io/fatihhayri/embed/BEKVwb/?height=617&theme-id=13521&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

`box-shadow` svg'yi bir kutu gibi algılayıp kare şeklinde gölge verdi. Çözüm için aklıma CSS filter'ın `drop-shadow` özelliği geldi. Biraz araştırınca benzer cevaplar gördüm. 

<iframe height="654" style="width: 100%;" scrolling="no" title="SVG drop-shadow" src="//codepen.io/fatihhayri/embed/BEKVvg/?height=654&theme-id=13521&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Aklınızın bir kenarında bulunsun.

Kalın sağlıcakla.

## Kaynaklar

 - [CSS Filtre Efektleri](https://fatihhayrioglu.com/css-filtre-efektleri/)
 - [https://stackoverflow.com/a/13624469/296373](https://stackoverflow.com/a/13624469/296373)