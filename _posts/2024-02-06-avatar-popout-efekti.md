---
layout: post
title: Avatar Popout Efekti
description: Avatar Popout Efekti uygulaması
lang: tr_TR
Date: 2024-02-06 10:30
Category: CSS
tags: [popout, efekt]
image:
  feature: popout-efekt.png
---

CSS ile yapılanlar serisinde bu yazımda sizlere bir köşeli veya yuvarlak alan içindeki resmin üzerine gelince köşeli ve yuvarlak alanın dışına taşacak uygulamayı anlatmaya çalışacağım.

## Köşeli alanlarda popout efekti

<iframe height="350" width="100%" style="width: 100%;" scrolling="no" title="pop-up avatar" src="https://codepen.io/fatihhayri/embed/zYbjYxX?default-tab=css%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Bir kapsayıcı `.kapsayici` içinde yer alan resmi `position: absolute;` ve `bottom: 0;` ile kapsayıcının altına hizalıyoruz. Normal durumda biraz resmi küçültüyoruz. Farenin üzerine geldiğinde resmi büyüttüğümüzde `transform: scale(1.4);` istediğimiz sonuç ortaya çıktı. 

## Oval alanlarda popout efekti

<iframe height="350" width="100%" style="width: 100%;" scrolling="no" title="pop-up avatar - border-radius" src="https://codepen.io/fatihhayri/embed/QWorWNr?default-tab=css%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Oval alanlarda popout efekti yapmak için köşeliye göre bir fazla kapsayıcı `.resim-kabi` daha eklememiz gerekiyor. Ovallik kazandırmak için `.kapsayici` ve  `.resim-kabi` elemanlarına `border-radius` tanımladık. Bu örnekte farklı olarak resim ve kapsayıcısını da büyüttük. Ayrıca resme gölge de ekledik. 

## Tek elemanla çözüm

Oval örneğin sadece bir adet HTML elemanı (`<img>`) ile yapan örnekler de var. [https://css-tricks.com/a-fancy-hover-effect-for-your-avatar/](https://css-tricks.com/a-fancy-hover-effect-for-your-avatar/)  Temani Afif'in yazısı gayet başarılı.

<iframe height="350" width="100%" style="width: 100%;" scrolling="no" title="Fancy hover effect on avatar" src="https://codepen.io/t_afif/embed/MWBjraa?default-tab=css%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/t_afif/pen/MWBjraa">
  Fancy hover effect on avatar</a> by Temani Afif (<a href="https://codepen.io/t_afif">@t_afif</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Az eleman kullanması güzel bir avantaj olsa da kodu karışıklığı beni biraz düşündürdü. Siz projenize göre bri tanesini seçip ilerleyebilirsiniz.

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/a-fancy-hover-effect-for-your-avatar/](https://css-tricks.com/a-fancy-hover-effect-for-your-avatar/)
 - [https://www.smashingmagazine.com/2023/09/re-creating-pop-out-hover-effect-css-part1/](https://www.smashingmagazine.com/2023/09/re-creating-pop-out-hover-effect-css-part1/)
 - [https://youtu.be/1zDRqHifoX0?si=YcEEn2r2EGztObXg](https://youtu.be/1zDRqHifoX0?si=YcEEn2r2EGztObXg)
 - [https://youtu.be/mi-p_q2J8Ek?si=ZR1FIoBwr2LTKuK6](https://youtu.be/mi-p_q2J8Ek?si=ZR1FIoBwr2LTKuK6)
 - [https://codepen.io/dannievinther/pen/yLgMdWO](https://codepen.io/dannievinther/pen/yLgMdWO)
 - [https://codepen.io/sparshgupta007/pen/XWaQoOX](https://codepen.io/sparshgupta007/pen/XWaQoOX)
 - [https://codepen.io/jlevin/pen/eYvgBwy](https://codepen.io/jlevin/pen/eYvgBwy)
 - [https://codepen.io/ainalem/pen/QWGNzYm](https://codepen.io/ainalem/pen/QWGNzYm)
 - [https://codepen.io/t_afif/pen/qBQzrwq](https://codepen.io/t_afif/pen/qBQzrwq)
 - [https://codepen.io/matthewtole/pen/MWQWmGd](https://codepen.io/matthewtole/pen/MWQWmGd)