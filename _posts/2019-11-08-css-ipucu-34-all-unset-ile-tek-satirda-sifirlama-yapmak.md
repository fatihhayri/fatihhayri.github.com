---
layout: post
title: CSS ipucu 34 - all unset ile tek satırda sıfırlama yapmak
description: seçici özelinde sıfırlama yapmak için all unset kullanımı
lang: tr_TR
Date: 2019-11-01 08:10
Category: CSS
tags: [all, unset, reset, sıfırlama]
image:
  feature: css-dersleri.png
---

HTML elementlerinin farklı tarayıcı ve ortamlardaki davranışlarını ortak hale getirmek için genelde reset css kodları kullanırız. meyer, normalizer vs.

Aslında bu listelerde yapılan belirtilen elemanların değerlerini bilinen ortak değer ataması yapmaktır.

CSS `all: unset` tanımıyla birlikte bir seçicinin tüm değerlerinin tarayıcının belirlediği başlangıç değerine veya kalıtsal değerine döndürmek çok kolay. Bu özellik aslında reset css ile yaptığımızı yapıyor. `unicode-bidi` ve `direction` hariç tarayıcıların belirlediği değerlere döndüren bir özellik. Bu özellik `inherit` ve `initial`'ın birlikte kullanılmış halidir. Eğer kalıtsal bir değer alıyorsa kalıtsal değerine döndüren, kalıtsal değeri yoksa başlangıç değerine döndüren bir kısayoldur. CSS Değişkenlerine de etki etmez.

`unset` değeri tanımlanmış değerleri ve etkinlikleri (Specificity) daha düşük olan değerleri başlangıç değerine döndürür.

```css
.dunya { color: red; font-size: 44px; margin: 40px;}
.turkiye { font-size: 32px; color: blue; }
.button { border: 3px solid red; background: yellow; font-size: 40px; color: pink; padding: 40px; display: block; }
.deneme { all: unset; color: pink; }
```

HTML kodu

```html
<div class="dunya">
  <p class="turkiye">
    <span class="istanbul">
      <strong class="pendik">
        <button class="deneme button">Deneme</button>
      </strong>
    </span>
  </p>
</div>

```

Sonuç aşağıdaki gibi olacaktır. 

<iframe height="300" style="width: 100%;" scrolling="no" title="all: unset test" src="https://codepen.io/fatihhayri/embed/oNNqMvX?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fatihhayri/pen/oNNqMvX'>all: unset test</a> by Fatih 
  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Farklı tanımlardan etkilenmiş button ögesi `all:unset` ile sıfırlanmıştır. Tek satır kod ile bunu yapabilmek çok güzel.

İyi planlanmamış projelerde bazen bir elemana uygulanan atamaları sıfırlamak gerekiyor, bu gibi durumlar için çok süper özellik. Gönül ister ki projeler başta daha iyi planlansın ve bu tip ihtiyaçlar olmasın ama gerçek böyle olmuyor maalesef.

Firefox geliştirme aracında çok güzel bir gösterme şekli var. `all:unset` ile değişen ve değiştiremediği (örnek color) değerleri gösteriyor. 

![all unset](https://fatihhayrioglu.com/images/firefox-dev-unset.png)

`all` özelliği bunun dışında `initial`, `inherit` ve `revert` değerleri alır. Bu değerler ve farklarını da başka bir makale yazsak iyi olur.

Kalın sağlıcakla.

## Kaynaklar

 - [https://drafts.csswg.org/css-cascade/#all-shorthand](https://drafts.csswg.org/css-cascade/#all-shorthand)
 - [https://mcc.id.au/blog/2013/10/all-unset](https://mcc.id.au/blog/2013/10/all-unset)
 - [https://css-tricks.com/almanac/properties/a/all/](https://css-tricks.com/almanac/properties/a/all/)
 - [https://www.hongkiat.com/blog/css-shorthand-longhand-notations/](https://www.hongkiat.com/blog/css-shorthand-longhand-notations/)
 - [https://tympanus.net/codrops/css_reference/all/](https://tympanus.net/codrops/css_reference/all/)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/all](https://developer.mozilla.org/en-US/docs/Web/CSS/all)
 - [https://aastudio.fr/Don-t-forget-initial-inherit-and.html](https://aastudio.fr/Don-t-forget-initial-inherit-and.html)
 - [https://www.bitdegree.org/learn/css-unset](https://www.bitdegree.org/learn/css-unset)