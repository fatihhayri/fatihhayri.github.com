---
layout: post
title: progress elementini stillendirelim
description: progress elementini stillendirelim
lang: tr_TR
Date: 2022-12-30 11:30
Category: HTML
tags: [progress, HTML]
---

<blockquote  class="twitter-tweet"  data-partner="tweetdeck"><p  lang="en"  dir="ltr">Should HTML get new controls like &lt;accordion&gt;, &lt;tooltip&gt;, &lt;carousel&gt;, &lt;tabs&gt;, or &lt;typeahead&gt; or leave that to JS frameworks?</p>&mdash; Nicole Sullivan (@stubbornella) <a  href="https://twitter.com/stubbornella/status/1578512416052166656?ref_src=twsrc%5Etfw">October 7, 2022</a></blockquote>

Yukarıda bahsedildiği gibi web sayfalarında kullanılan bileşenleri HTML karşılamalı bence. Tabi burada şöyle bir şey var, CSS ile de bu bileşenin her yerine stil verebilelim. `<progress>` elementi aslında tam bu kapsamda bir element. Her projede bir şekilde ürettiğimiz bu bileşenin standart hali.

Bu makalede `<progress>` elementini inceleyeceğiz. `<progress>` elementi kullanıcıya bir işlemin ilerleme durumu hakkında bilgi vermek için kullanılan yapılardır.

Hiç bir özniteliği (attribute) yoksa **kara şimşek** efekti ile görünür.

<iframe height="300" style="width: 100%;" scrolling="no" title="progress element" src="https://codepen.io/fatihhayri/embed/mdjJeNP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## Öznitelikler 

`<progress>` elementi iki adet öznitelik alır.

 - **max** özniteliği ilerleme çubuğunun en fazla alacağı değeri tanımlamamızı sağlıyor
 - **value** özniteliği ilerleme çubuğunun mevcut değerini göstermemizi sağlıyor

<iframe height="300" style="width: 100%;" scrolling="no" title="progress element" src="https://codepen.io/fatihhayri/embed/PoBqeKj?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## Stil vermek

Eğer Chrome Developer Tools'da "Show user agent shadow DOM" özelliği açıksa `<progress>` elementini incelediğinizde aşağıdaki gibi bir görüntü ile karşılaşacaksınız. Aslında bu bizim bu elemanın hangi alanlarına müdahale edebileceğimizi de gösteriyor. 

![Show user agent shadow DOM](https://fatihhayrioglu.com/images/progress-shdow-dom.png)

Webkit tabanlı tarayıcılarda (Safari, Chrome, Opera, Edge, Samsung Internet) iki adet sözde sınıfı var. `::-webkit-progress-bar` ve `::-webkit-progress-value` Mozilla tabanlı tarayıcı (Firefox) da  `::-moz-progress-bar` sözde sınıfı var. 

<iframe height="300" style="width: 100%;" scrolling="no" title="progress element  stillendirmek" src="https://codepen.io/fatihhayri/embed/XWBddVv?default-tab=result%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Tabi tasarım olarak daha güzel sonuç veren örnekler de yapılabilir. 

<iframe height="300" style="width: 100%;" scrolling="no" title="progress element  stillendirmek - 2" src="https://codepen.io/fatihhayri/embed/XWBdKbX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

[Örneğin kaynağı](https://codepen.io/zolash/pen/vYBjPoY)  Kaynaklar kısmında farklı örnekler de var.

## Sonuç

HTML'de  artık sabitleşmiş bileşenlerin çözümlerinin olması çok güzel. Bu elementin benzeri `<meter>`elementi de var. `<progress>` ile `<meter>` arasındaki fark basitçe şöyle tanımlanabilir; `<progress>` dinamik `<meter>` statik sonuçları göstermek için kullanılıyor.

Kalın sağlıcakla.

## Kaynaklar

 - [https://web.dev/building-a-loading-bar-component/](https://web.dev/building-a-loading-bar-component/)
 - [https://nikitahl.com/progress-bar-css](https://nikitahl.com/progress-bar-css)
 - https://www.youtube.com/watch?v=rrf99Suqmd4
 - [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
 - [https://codepen.io/team/css-tricks/pen/PNNQxm?editors=1100](https://codepen.io/team/css-tricks/pen/PNNQxm?editors=1100)
 - [https://codepen.io/alexdevp/pen/JXRWrJ](https://codepen.io/alexdevp/pen/JXRWrJ)
 - [https://codepen.io/arendon/pen/kYeGep](https://codepen.io/arendon/pen/kYeGep)