---
layout: post
title: Renk geçişli ve Hareketli kenar çizgileri
description: Renk geçişli ve Hareketli kenar çizgileri yapmak
lang: tr_TR
Date: 2024-01-22 10:30
Category: CSS
tags: [border-image, hareketli-kenar-çizgisi]
image:
  feature: hareketli-renk-gecisli-kenar.png
---

İnternette gezerken gördüğüm kodu basit etkisi büyük örnekleri paylaşma yazılarıma devam ediyorum. Herhangi bir elemanın kenar çizgilerini birden fazla renk tanımlamak ve üstüne bunu hareketli yapma örneklerini çok gördüm. Bu yazıda bunu anlatmaya çalışacağım.

## Doğrusal renk geçişi örneği

<iframe height="300" style="width: 100%;" scrolling="no" title="Animated gradient border" src="https://codepen.io/fatihhayri/embed/gOEmREo?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

```css
border-image: linear-gradient(to bottom right,#ffb56b,#ac255e) 1;
```

`border-image` ve `linear-gradient` birlikte kullanımı ile çözümü hemen bulduk. Mükemmel. Tabi uygulamada kenar çizgilerini bu kadar büyük kullanmayız muhtemelen. Örneğin daha öne çıkması için kenar çizgi kalınlığını yüksek tuttum. 

## Konik renk geçişi örneği

<iframe height="300" style="width: 100%;" scrolling="no" title="Animated gradient border" src="https://codepen.io/fatihhayri/embed/WNmpEge?default-tab=Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

`conic-gradient` ile daha farklı seçenekler görmek mümkün. 

## Hareketli renk geçişi örneği

<iframe height="300" style="width: 100%;" scrolling="no" title="Animated gradient border -3" src="https://codepen.io/fatihhayri/embed/oNVZeaq?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

İşe hareket katmakta kolay. `linear-gradient` tanımındaki yön tanımını açılı verip bu açıyı animasyon ile döndürdüğümüzde işte animayonlu kenar çizgisi. Tabi burada dikkat açı tanımının `@property` tanımını da yapmalıyız. 

## Köşeleri oval renk geçiş örneği 

`border-image` ile `border-radius` birlikte çalışmasının sorunları var. Birçok örnek sorunu çözmek için `:before` ve `mask` ile sonuca gitmiş. Ancak `background`'a renk geçişi ekleyip `box-shadow: inset`  ile içini beyaz (istediğiniz renk)  ile dolduruyoruz. Son olarakta kenar çizgilerinin görünmesi için saydam olarak tanımladık. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Animated gradient border" src="https://codepen.io/fatihhayri/embed/YzgZQmx?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

Kalın sağlıcakla.


## Kaynaklar

 - [https://www.bram.us/2021/01/29/animating-a-css-gradient-border/](https://www.bram.us/2021/01/29/animating-a-css-gradient-border/)
 - [https://stackoverflow.com/a/76297213/296373](https://stackoverflow.com/a/76297213/296373)
 - [https://x.com/andiicodes/status/1621181175577411588?s=20](https://x.com/andiicodes/status/1621181175577411588?s=20)
 - [https://x.com/tejinder_id/status/1536955048806080512?s=20](https://x.com/tejinder_id/status/1536955048806080512?s=20)
 - [https://x.com/argyleink/status/1470763758972653571?s=20](https://x.com/argyleink/status/1470763758972653571?s=20)
 - [https://x.com/codewithshripal/status/1572177594291830784?s=20](https://x.com/codewithshripal/status/1572177594291830784?s=20)
 - [https://codepen.io/seyedi/pen/OJdEVXZ](https://codepen.io/seyedi/pen/OJdEVXZ)