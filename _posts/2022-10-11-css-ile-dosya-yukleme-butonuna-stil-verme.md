---
layout: post
title: CSS ile dosya yükleme butonuna stil verme
description: CSS ile dosya yükleme butonuna stil verme
lang: tr_TR
Date: 2022-10-11 12:00
Category: CSS
tags: [file, input, file-selector-button]
image:
  feature: dosya-yukleme.png
---

Dün twitter'da aşağıdaki konuyu tartışırken 

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">Should HTML get new controls like &lt;accordion&gt;, &lt;tooltip&gt;, &lt;carousel&gt;, &lt;tabs&gt;, or &lt;typeahead&gt; or leave that to JS frameworks?</p>&mdash; Nicole Sullivan (@stubbornella) <a href="https://twitter.com/stubbornella/status/1578512416052166656?ref_src=twsrc%5Etfw">October 7, 2022</a></blockquote>

Konu [Uğur](https://twitter.com/ugurdalkiran)'un da cevabıyla dosya yükleme elemanına geldi.

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="tr" dir="ltr">file inputa stil verebilmek için opacity 0 yapıp, üzerine HTML elemanları ekleyerek tasarım yapmak zorunda kalıyoruz hala. 😢</p>&mdash; Uğur Dalkıran (@ugurdalkiran) <a href="https://twitter.com/ugurdalkiran/status/1579435606262034432?ref_src=twsrc%5Etfw">October 10, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Ben de çözüm için `::file-selector-button` pseudo elemanından bahsettim. Uğur tam ikna olmadı. Bence tam olmasa da çözüm olması güzel. :) Bu konuyu yazayım da bir yerde not olarak kalsın dedim. 

## Dosya yükleme butonuna stil verme

Dosya upload işini görmek için;  `input` elementine `file` özniteliği vermemiz yeterli.

```html
<input typye="file" />
```

Bu kadar kolay. Ancak buradaki sorunumuz bu tanım ile gelen buton ve yazıya müdahele edip stillendiremiyorduk. Standart şeklideki kodumuz aşağıdaki gibi görünüyor.

<iframe height="300" style="width: 100%;" scrolling="no" title="input file standart" src="https://codepen.io/fatihhayri/embed/QWrJPXm?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

Böyle olunca bu butonu görünmez yapıp kendi istediğimiz stili uyguluyorduk. 

Yakın zamanda gelen `::file-selector-button` pseudo elemanı sayesinde artık butona stil verebiliyoruz. 

[Şurada](https://codepen.io/sazzad/pen/ALwwPy) gördüğüm bir örnek dosya yükleme örneğini yapayım dedim.

<iframe height="198" style="width: 100%;" scrolling="no" title="input file pure css" src="https://codepen.io/fatihhayri/embed/PoexgEz?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

`::file-selector-button` pseudo elemanının tarayıcı desteği de gayet iyi. 

Kullandığımız elemanların (şimdilerde daha sık kullandığımız adıyla komponent) HTML eleman olarak kodlamak bize birçok bakımdan avantaj sağlıyor. Tabi HTML elemanlarının bize yeterince stillerini değiştirme imkanı vermesi önemli yoksa yine alternatif çözüm yollarına başvurmak zorunda kalırız.

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button](https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button)
 - [https://nikitahl.com/custom-styled-input-type-file](https://nikitahl.com/custom-styled-input-type-file)
 - [https://medium.com/@adambene/custom-file-upload-button-with-pure-css-5aacf39aa0a](https://medium.com/@adambene/custom-file-upload-button-with-pure-css-5aacf39aa0a)
 - [https://css-tricks.com/almanac/selectors/f/file-selector-button/](https://css-tricks.com/almanac/selectors/f/file-selector-button/)
 - [https://codepen.io/sazzad/pen/ALwwPy](https://codepen.io/sazzad/pen/ALwwPy)
