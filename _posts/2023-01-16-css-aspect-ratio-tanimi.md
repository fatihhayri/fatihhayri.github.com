---
layout: post
title: CSS aspect-ratio tanımı
description: CSS aspect-ratio tanımı
lang: tr_TR
Date: 2023-01-16 11:30
Category: CSS
tags: [aspect-ratio, en-boy]
image:
  feature: aspect-ratio.png
---

CSS ile resim, video ve iframe yapılarını uyumlu web gereği genişlik/yükseklik oranına (aspect ratio) göre küçültmek veya büyültmek için farklı bir yöntem kullanıyorduk. Artık aspect-ratio tanımı ile alternatif çözüme gerek kalmadı. Ayrıca bu tanım ile Chrome ekibinin performans kriterlerinden **Cumulative Layout Shift (CLS):** sorununu da çözebiliyoruz.

Şimdi özelliğin bize kazandırdıklarına bir göz atalım.

## Eski çözüm yolları

Uyumlu(responsive) web hayatımıza girdiğinden beri bazı sorunlarla karşılaşıyoruz. Bunlardan en önemlisi galiba kullandığımız resimlerin boyutlarının istediğimiz oranda küçülmesi olabilir. Bu sorunu aşmak için çeşitli yöntemlerimiz vardı. 

Bunlardan birisi resimlere `width: 100%;` verip yüksekliğinide `height: auto;` tanımlayıp esnek bir resim el etmekti. 

<iframe height="300" style="width: 100%;" scrolling="no" title="aspect-ratio" src="https://codepen.io/fatihhayri/embed/QWBvWYq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Ancak bu yöntem ardalan resimlerinde işe yaramıyordu.

<iframe height="300" style="width: 100%;" scrolling="no" title="aspect-ratio" src="https://codepen.io/fatihhayri/embed/vYamYwN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/vYamYwN">
  aspect-ratio</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Mavi kutunun sağ alt kısmındaki boyutlandırma ikonundan büyültüp küçülterek sonucu görebilirsiniz.

Bir diğer yöntem de yüzde padding-top değeri kullanımıdır.

-   1:1 aspect ratio = 1 / 1 = 1 = `padding-top: 100%`
-   4:3 aspect ratio = 3 / 4 = 0.75 = `padding-top: 75%`
-   3:2 aspect ratio = 2 / 3 = 0.66666 = `padding-top: 66.67%`
-   16:9 aspect ratio = 9 / 16 = 0.5625 = `padding-top: 56.25%`

Yukarıdaki gibi bir hesaplama ile resimlerin belli bir boy/en oranıyla küçülmesini sağlayabiliyorduk.

<iframe height="300" style="width: 100%;" scrolling="no" title="aspect-ratio - bg" src="https://codepen.io/fatihhayri/embed/NWBjWZa?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## aspect-ratio tanımı

Tabi sonra bu işi kökten çözen `aspect-ratio`  özelliği çıktı ve bir satır CSS kodu ile çözüm oluşturdu. 

Aynı örneği `aspect-ratio` ile yaparsak.

<iframe height="300" style="width: 100%;" scrolling="no" title="aspect-ratio - padding-top hack" src="https://codepen.io/fatihhayri/embed/qBymOyw?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Bu tanımı sadece resim, video ve iframe'de değil normal bir etikete de uygulayabiliriz.  Örneğin üç kolonlu bir içeriğin `div`'lerine uygulayabiliriz.

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/fatihhayri/embed/rNrmraw?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Tabi içerik eğer en/boy oranını bozacak şekilde uzunsa oran bozuluyor. Ancak normal şartlarda en/boy oranını koruyor.

## aspect-ratio medya sorguları

aspect-ratio medya sorgularında da kullanılabiliyor.
```css
@media (aspect-ratio: 1/1) {
  body {
    background: lightblue;
  }
}
```

gibi sadece o orana göre kod yazıldığı gibi `min-aspect-ratio`
 ve `max-aspect-ratio` gibi daha geniş yelpazeye göre de medya sorgusu ekleyebiliyoruz.

## performansa aspect-ratio'lu çözüm

Yazının başında da belirttiğimiz gibi `aspect-ratio` tanımı CLS çözümü olarakta kullanılabilmektedir. Aşağıda görüldüğü gibi resmin sonradan yüklenmesiyle layout zıplaması oluyor.

![aspect-ration CLS çözümü](https://fatihhayrioglu.com/images/cls-2.gif)

> **Cumulative Layout Shift (CLS):** Tarayıcı ek veriler yüklendikçe sayfada meydana gelen zıplamayı (shift) ölçer.

Bu sorunu aşmak için resimlerimize `aspect-ratio` tanımlamamız yeterli. Performans açısından süper bir kolaylık.

Tarayıcı desteği konusunda da gayet iyi bir durumda.

Kalın sağlıcakla.

## Kaynaklar

 - [https://web.dev/aspect-ratio/](https://web.dev/aspect-ratio/)
 - [https://ishadeed.com/article/css-aspect-ratio/](https://ishadeed.com/article/css-aspect-ratio/)
 - [https://egghead.io/lessons/css-use-css-variables-to-maintain-the-aspect-ratio-for-an-element](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
 - [https://css-irl.info/aspect-ratio-is-great/](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
 - [https://css-tricks.com/aspect-ratio-boxes/](https://css-tricks.com/aspect-ratio-boxes/)
 - [https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
 - [https://blog.logrocket.com/a-closer-look-at-the-css-aspect-ratio/](https://blog.logrocket.com/a-closer-look-at-the-css-aspect-ratio/)
 - [https://www.aleksandrhovhannisyan.com/blog/css-aspect-ratio/](https://www.aleksandrhovhannisyan.com/blog/css-aspect-ratio/)
 - [https://caniuse.com/?search=aspect-ratio](https://twitter.com/mgechev/status/1409368511772872707)
 - [https://www.youtube.com/watch?v=FF3fuYLnApQ](https://twitter.com/mgechev/status/1409368511772872707)
 - [https://twitter.com/addyosmani/status/1468483568166862848](https://twitter.com/mgechev/status/1409368511772872707)
 - [https://twitter.com/mgechev/status/1409368511772872707](https://twitter.com/mgechev/status/1409368511772872707)
 - [https://twitter.com/stackblitz/status/1514975439911100420](https://www.youtube.com/watch?v=tStiWGcnkWI&t=477s)
 - [https://www.youtube.com/watch?v=tStiWGcnkWI&t=477s](https://www.youtube.com/watch?v=tStiWGcnkWI&t=477s)
 - [https://jakearchibald.com/2022/img-aspect-ratio/](https://jakearchibald.com/2022/img-aspect-ratio/)
