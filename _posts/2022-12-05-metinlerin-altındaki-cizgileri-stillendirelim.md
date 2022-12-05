---
layout: post
title: Metinlerin altındaki çizgileri stillendirelim
description: text-decoration tanımlarının açıklamaları ve örnekleri
lang: tr_TR
Date: 2022-12-05 11:00
Category: CSS
tags: [text-decoration, metinleri-alt-çizgisi]
image:
  feature: alt-cizgi-banner.png
---

Daha önce bu konuda tasarımcı arkadaşların bir isteği olmuştu. Yazının rengi ile alt çizginin rengini ayırmak ve alt çizginin kalınlığını değiştirmek istiyorduk. O zamanlar böyle bir imkan yoktu. Hatırladığım `border-bottom` ile veya resim ile yapmıştık ama sonra iptal olmuştu. 

Alternatif çözümlerin bazı sorunları oluyor bir tanesi metnin temel çizgisinin altında kalan karakterlerin (ğ, g, y, p gibi) üzerini çizmesi. 

> `text-decoration` ve diğer tanımları alt çizgi olarak belirtmek  yanlış oldu ancak bizim eskiden beri bildiğimiz anlamıyla bu bir metin alt çizgi stillendirme olduğu için yazının başlığını bu şekilde kullanmayı tercih ettim.

Metinlerin altındaki / üstündeki / üzerindeki çizgileri artık basit ve standart yollarla ekleyip stil verebiliyoruz.

## text-decoration-line

`text-decoration-line` özelliği çizilecek çizginin türünü ayarlamamızı sağlar. Buradaki türden kasıt alt çizgi (underline), üst çizgi (overline) ve üstünü çizme (line-through) değerleridir. `blink` değeri vardı ancak uygulamadan kaldırıldı. Tek değer alabildiği gibi birden fazla değer de alabilir.

<iframe height="360" style="width: 100%;" scrolling="no" title="text-decoration-line" src="https://codepen.io/fatihhayri/embed/YzvJzbx?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## text-decoration-thickness

`text-decoration-thickness`özelliği çizilen çizginin kalınlığını belirlememizi sağlar.

Bu özellik şu değerler alır. `auto` (tarayıcı karar versin demek), sayısal değerler (3px, 2em) ve yüzde değerler (tarayıcı desteği düşük) alabiliyor. 

<iframe height="360" style="width: 100%;" scrolling="no" title="text-decoration-line" src="https://codepen.io/fatihhayri/embed/XWYxJJm?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## text-decoration-color

`text-decoration-color` özelliği çizilen çizginin rengini tanımlamamızı sağlar.

Tüm renk tanımlarını alabiliyor. Benim yıllar önce aradığım özelliğe nihayet erişmiş oldum.

<iframe height="360" style="width: 100%;" scrolling="no" title="text-decoration-thickness" src="https://codepen.io/fatihhayri/embed/YzvJPOj?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## text-decoration-style

`text-decoration-style` özelliği çizilen çizginin stilini tanımlamamızı sağlar.

-   `dashed` (tireli)
-   `double` (çift çizgi)
-   `dotted` (nokta)
-   `solid` (tek çizgi)
-   `wavy` (dalgalı)

değerlerini alabiliyor. `wavy` çok hoşuma gitti. Hemen sitemdeki bağlantıların stilini değiştirip dalgalı yaptım. :)

<iframe height="360" style="width: 100%;" scrolling="no" title="text-decoration-style" src="https://codepen.io/fatihhayri/embed/eYKPJGZ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## text-decoration

Yukarıdaki tanımların kısayolu olarak bu özelliği kullanıyoruz. 

<iframe height="360" style="width: 100%;" scrolling="no" title="text-decoration-style" src="https://codepen.io/fatihhayri/embed/VwdEerX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Safari'de kısayol `thickness` değeri olmayan ve `-webkit-` ön eki ile çalışıyor.

Bu özelliklerin dışında metin altı(üstü, üzeri) ile alakalı bir iki tanım daha var. Onları da bu konu içinde incelemekte fayda var.

## text-underline-offset

`text-underline-offset` özelliği alt çizginin konumunu belirlemek için kullanılıyor. Bu özellik `overline` ve `line-through` tanımlarına etki etmiyor.

<iframe height="360" style="width: 100%;" scrolling="no" title="text-underline-offset" src="https://codepen.io/fatihhayri/embed/MWXPyam?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Bu özellikle eksi değer vererek yazı üzerine ve üstüne çıkarabiliyoruz. Ancak yukarıdaki tanım gibi becerili değil. Sadece yazının üzerine gelsin ama yazının arkasında kalsın isteği olursa bu çözüyor.

## text-decoration-skip-ink

Bir diğer özellik `text-decoration-skip-ink` özelliği. Bu özellik metnin temel çizgisinin altında kalan karakterlerin (ğ, g, y, p gibi) karakterlerin üzeri çizilsin mi yoksa çizilmesin mi kararını vermemizi sağlıyor.

<iframe height="360" style="width: 100%;" scrolling="no" title="text-decoration-style" src="https://codepen.io/fatihhayri/embed/BaVqPGY?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/styling-underlines-web/](https://css-tricks.com/styling-underlines-web/)
 - [https://www.digitalocean.com/community/tutorials/css-text-decoration](https://www.digitalocean.com/community/tutorials/css-text-decoration)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
 - [https://htmldog.com/techniques/underlines/](https://htmldog.com/techniques/underlines/)
 - [https://www.youtube.com/watch?v=sZS-7RX_c7g](https://www.youtube.com/watch?v=sZS-7RX_c7g)
 - [https://www.tempertemper.net/blog/styling-underlines-with-css](https://www.tempertemper.net/blog/styling-underlines-with-css)
 - [https://css-irl.info/animating-underlines/](https://css-irl.info/animating-underlines/)
 - [https://www.youtube.com/watch?v=bagpd8xGnLE](https://www.youtube.com/watch?v=bagpd8xGnLE)  (CSS Dersleri -73 / text-decoration Özelliği)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink)
 - [https://codepen.io/nodws/pen/PEoeER](https://codepen.io/nodws/pen/PEoeER) Güzel örnek

