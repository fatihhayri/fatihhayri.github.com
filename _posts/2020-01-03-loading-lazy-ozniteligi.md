---
layout: post
title: loading lazy özniteliği
description: Resimleri ve iframe'i gerektiğinde yükleme işini tarayıcıya devrettik
lang: tr_TR
Date: 2020-01-03 09:10
Category: HTML
tags: [loading, lazy, chrome]
image:
  feature: lazy-load.png
---

Chrome 76. sürümü ile birlikte gelen `loading="lazy"` özniteliği (attribute) tanımı sayesinde gerektiğinde yükleme (lazy loading) için kullandığımız scriptlere gerek kalmıyor artık. Tarayıcı kendi bünyesinde bu işi yapıyor. Tarayıcılar bu kadar derin işlere de girmeli mi mevzusu başka bir tartışmanın konusu.

Genel olarak resimler için kullandığımız bu yöntem aslında iframe ve haricen yüklenen her dosya (js, css vb.) için de geçerlidir. "Kullanıcının görüntü alanı içindeki öğeleri yükleyelim henüz daha görmediği alanlardaki kaynakları boşa yüklemeyelim." diye düşündüğümüz ve uyguladığımız yöntem artık tarayıcıların bünyesinde geliyor.

Chrome ekibinin performans konusundaki titizliği sonucu hızlıca Blink alt yapısı kullanan tarayıcılara desteğini eklediği bu özellik sayesinde lazy load scriptlerine gerek kalmadan bu özelliği sayfalarımıza kazandırıyor.

Ben kendi sitemde denedim. Öncesinde sayfa yükleme zamnı 2.91 sn iken `loading="lazy"`özniteliği eklemesi sonrası 1.78 sn düştü sayfa yüklemesi. (Not: Sunucu durumuna göre değişklik gösterebiliyor)

Bu arada ufak bir ipucu olsun markdown ([jekyll](https://jekyllrb.com/)'de) kullananlar için kod şöyle 

```markdown
![grid kısayolu](/images/grid.png){: loading="lazy" }
```

Ben sitemde çok fazla resim kullanmıyorum ancak kod bloku paylaşımı için [codepen](https://codepen.io/)'i kullanıyorum. codepen'in iframe'ine `loading="lazy"`özniteliğini ekleyince daha çok etki etti.

Halihazırda bunun için script kullananlar için destekleyenler için bu olsun desteklemeyenlere script yazsak ne güzel olur derseniz. [Hybrid Lazy Loading: A Progressive Migration To Native Lazy Loading](https://www.smashingmagazine.com/2019/05/hybrid-lazy-loading-progressive-migration-native/) yazısının içindeki kodu kullanabilirsiniz.

Sonuç olarak şimdiden `loading="lazy"`özniteliği eklemenin zararı yok ama yararı çok. Türkiye'de toplamda %76,3'lük desteği var şu an. (3 Ocak 2020)

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/loading-lazy-attr-1741163185590.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/loading-lazy-attr-1741163185590.png">
<img src="https://caniuse.bitsofco.de/static/v1/loading-lazy-attr-1741163185590.jpg" alt="Data on support for the loading-lazy-attr feature across the major browsers from caniuse.com">
</picture>

## Kaynaklar

 - [https://addyosmani.com/blog/lazy-loading/](https://addyosmani.com/blog/lazy-loading/)
 - [https://web.dev/native-lazy-loading/](https://web.dev/native-lazy-loading/)
 - [https://css-tricks.com/native-lazy-loading/](https://css-tricks.com/native-lazy-loading/)
 - [https://davidwalsh.name/loading-lazy](https://davidwalsh.name/loading-lazy)
 - [https://scotch.io/bar-talk/native-lazy-loading-launched-on-chrome-76](https://scotch.io/bar-talk/native-lazy-loading-launched-on-chrome-76)
 - [https://www.smashingmagazine.com/2019/05/hybrid-lazy-loading-progressive-migration-native/](https://www.smashingmagazine.com/2019/05/hybrid-lazy-loading-progressive-migration-native/)