---
layout: post
title: Yeni bakış alanı(viewport) değerleri
description: Yeni bakış alanı(viewport) değerlerini inceleme. dvh, lvh, svh
lang: tr_TR
Date: 2023-31-09 10:30
Category: CSS
tags: [bakışalanı, viewport, dvh, svh, lvh]
image:
  feature: dvh.jpeg
---

[Bakış Alanı Değerleri (View Port)](https://fatihhayrioglu.com/css3-yeni-degerleri/) konusunu 2013 yılında yazmıştım. Uzun süredir kullanılan birimler. Masaüstünde güzel bir şekilde çalışırken mobilde sorunları vardı. Telefonun ekranı sabit bir yükseklikte değil. İlk durumda adres çubuğu ve altta gezinme menüsünün olduğu durumlarda `vh` tanımı ihtiyacı karşılamıyordu. Çözüm için [Javascript](https://gist.github.com/getify/150ea5a3b30b8822dee7798883d120b9) ile yan yollara sapıp hallediyorduk.

CSS ile bu sorunu çözmek için dinamik bakış alanı çıktı. Bu yazıda sizlere bu yeni dinamik bakış alanı birimlerini anlatmaya çalışacağım.

![css dvh birimi](https://fatihhayrioglu.com/images/dvh.jpeg)
Resim kaynağı: [https://web.dev/blog/state-of-css-2022](https://web.dev/blog/state-of-css-2022?hl=tr#viewport_units)

Resimden de görüleceği gibi sadece dinamik bakış alanı değeri değil mobil tarayıcıların tam boy birimleri(lvh) ve küçük boy birimleri(svh) de geldi. 

-   **Tamboy bakış alanı**(**Large viewport**): Tarayıcının tüm araçlarının gizlendiği durumdaki yüksekliği temsil eder. Örneğin üstteki adres barı ve alttaki sekme menüsünün kullanıcının scroll'u aşağı kaydırmasıyla kaybolmasıyla oluşan alan. Bakış alanı birimlerinin bir benzere bu tanım için de geçerlidir. `lvw`, `lvh`, `lvi`, `lvb`, `lvmin` ve `lvmax`
-   **Küçük bakış alanı**(**Small Viewport**: Tarayıcının genelde başlangıç durumundaki araçların açık olduğu durumlardaki bakış alanı birimidir. Bakış alanı birimlerinin bir benzere bu tanım için de geçerlidir. `svw`, `svh`, `svi`, `svb`, `svmin` ve `svmax`.
-  **Dinamik bakış alanı birimleri**: Adındanda anlaşılabileceği gibi dinamik bir birimdir. Mobil tarayıcının başlangıçta görünen adres alanı ve altta görünen sekme menüsünün olduğu durumlarda bu alanların dışında kalan alanı temsil ederken, kullanıcının scroll etmesi ile adres çubuğunun ve sekme menüsünün kaybolmasıyla oluşan tam boy alanı temsil eder. Bakış alanı değerlerinin hepsi bu birim içinde türetilmiştir. `dvw`, `dvh`, `dvi`, `dvb`, `dvmin` ve `dvmax`. Burada şöyle bir güzellikte sağlıyor bu tanımlara bize: Mobildeki farklı tarayıcıların farklı arayüzleri olabiliyor. Mesela birinde hem adres çubuğu hem de altta sekme menüsü olurken bazılarında sadece adres çubuğu olabiliyor.  Bu gibi  farklılıkları da içeren bir birim olduğu için bu gibi durumları dert etmeye gerek kalmadan işimizi çözüyor. 

<iframe height="300" style="width: 100%;" scrolling="no" title="yeni viewport değerleri" src="https://codepen.io/fatihhayri/embed/jOdEPxO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/jOdEPxO">
  yeni viewport değerleri</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki kodu bir mobil tarayıcıda açıp aşağı doğru kaydırdığımızda değerler daha anlaşılır oluyor.

![Bakış alanı değerleri](https://fatihhayrioglu.com/images/bakisacisi-degerleri.gif)

Burada belirtmemiz gereken bir kaç nokta var:

 - Bakış alanı değerleri kaydırma çubuğunu hesaba katmaz.
 - Dinamik bakış alanı değerinin dinamik geçişi 60fps olmadığı için geçişte zıplamalar olabilir.
 - Klavyenin açık olma durumu da bakış alanı değerlerince değerlendirilmez.

Bu notları da aklımızda tutarak projelerimizde bu değerleri kullanabiliriz.

 > [webflow](https://youtu.be/7judyqwqmKo?si=0NrSCETLiUlDAa9x)'un youtube kanalında kaydırma çubuğu akışkanlığı için `svh` kullanımının daha güzel sonuçlar verdiğini söylüyor. Yazdığınız projeye göre tercihler değişebilir.


## Tarayıcı Desteği

Türkiye için %92'lik güzel bir desteği var.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

Kalın sağlıcakla.

## Kaynaklar

 - [https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/](https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/)
 - [https://ishadeed.com/article/new-viewport-units](https://ishadeed.com/article/new-viewport-units)
 - [https://x.com/bramus/status/1597516790430679040?s=20](https://x.com/bramus/status/1597516790430679040?s=20)
 - [https://x.com/Stanchev14/status/1634766097042767873?s=20](https://x.com/Stanchev14/status/1634766097042767873?s=20)
 - [https://web.dev/viewport-units/](https://web.dev/viewport-units/)
 - [https://12daysofweb.dev/2022/new-viewport-units/](https://12daysofweb.dev/2022/new-viewport-units/)
 - [https://css-tricks.com/the-large-small-and-dynamic-viewports/](https://css-tricks.com/the-large-small-and-dynamic-viewports/)
 - [https://medium.com/@alekswebnet/fix-mobile-100vh-bug-in-one-line-of-css-dynamic-viewport-units-in-action-102231e2ed56](https://medium.com/@alekswebnet/fix-mobile-100vh-bug-in-one-line-of-css-dynamic-viewport-units-in-action-102231e2ed56)
 - [https://dev.to/renancferro/new-css-viewport-units-you-should-know-to-improve-your-appux-and-that-solved-my-ux-app-problem-4849](https://dev.to/renancferro/new-css-viewport-units-you-should-know-to-improve-your-appux-and-that-solved-my-ux-app-problem-4849)
 - [https://www.youtube.com/watch?v=veEqYQlfNx8](https://www.youtube.com/watch?v=veEqYQlfNx8) - The problems with viewport units / Kevin Powell
 - [https://www.youtube.com/watch?v=5m6JOJLy5B0](https://www.youtube.com/watch?v=5m6JOJLy5B0) - Learn Every CSS Viewport Unit In 10 Minutes / Web Dev Simplified
 - [https://caniuse.com/viewport-unit-variants](https://caniuse.com/viewport-unit-variants)

