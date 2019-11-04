---
layout: post
title: Placeholder(yertutucu)'ları :placeholder-shown sözde sınıfı ile daha kullanışlı hale gitirmek
description: kullanıcı bir içerik girdiğinde yertutucunun üstüne doğru kaymasını sağlayan uygulamalar
lang: tr_TR
Date: 2019-11-01 08:10
Category: CSS
tags: [grid, explicit, implicit]
image:
  feature: placeholder-shown.png
---

Kullanıcıdan bilgi aldığımız girdi alanlarının (input) kullanımını kolaylaştırmak ux (kullanıcı deneyimi) açısından önemli. Bunun için ilk olarak placeholder (yer tutucu)'ları HTML'e ekledik. Sonra bunları stilize ettik. Konuyla alakalı "[CSS ile HTML5 Yer Tutucu’ya(placeholder) Stil Vermek](https://fatihhayrioglu.com/css-ile-html5-yer-tutucu-ya-placeholder-stil-vermek/ "CSS ile HTML5 Yer Tutucu’ya(placeholder) Stil Vermek")" yazıma bakabilirsiniz. Daha sonra kullanıcının içeriği girdiğinde yertutucunun kaybolması bir eksiklik olarak görüldü ve kullanıcı bir içerik girdiğinde yertutucunun üstüne doğru kaymasını sağlayan uygulamalar yapmaya başladık. Bu işleri javascript yardımıyla yaparken şimdi daha doğrusu 2-3 senedir bunu CSS ile yapıyoruz. 

Bu yazımda sizelere CSS ile bunu nasıl yaptığımızı anlatacağım. 

```html
<form>
  <div class="input-satiri">
    <input name="ad" placeholder="İsminizi girin">
    <label>İsim</label>
  </div>
</form>
```

Bir girdi alanı ve sonrasına bir `label` ekliyoruz. İlk durumda yertutucu `placeholder="İsminizi girin"` ile bilgilendirici mesajı gösteriyoruz. 

Kullanıcı girdi alanına bir şeyler girdiğinde yertutucu kayboluyor onun yerine `label` içindeki bilgilendirme metnini gösteriyoruz. `:placeholder-shown` placeholder görüntülendiğinde durumunu yaklamamızı sağlar. Bize placeholder'ın gizlendiği hali lazım. Onun için de `:not(:placeholder-shown)` sözde sınıfı işimizi görecek.

<iframe height="300" style="width: 100%;" scrolling="no" title=":placeholder-shown test" src="https://codepen.io/fatihhayri/embed/vYYWwqp?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Tarayıcı desteği konusunda da çok iyi.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

Kalın sağlıcakla.


## Kaynaklar

 - [https://callmenick.com/dev/floated-labels-with-placeholder-shown/](https://callmenick.com/dev/floated-labels-with-placeholder-shown/)
 - [https://css-tricks.com/almanac/selectors/p/placeholder-shown/](https://css-tricks.com/almanac/selectors/p/placeholder-shown/)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown)
 - [https://codepen.io/andreasstorm/pen/gKGbxo?editors=1100](https://codepen.io/andreasstorm/pen/gKGbxo?editors=1100)
 - [https://caniuse.com/#search=%3Aplaceholder-shown](https://caniuse.com/#search=%3Aplaceholder-shown)