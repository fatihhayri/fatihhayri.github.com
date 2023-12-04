---
layout: post
title: accent-color tanımı
description: CSS'de accent-color tanımı ve detayları
lang: tr_TR
Date: 2023-12-04 10:00
Category: CSS
tags: [accent-color, brand, renk, form]
image:
  feature: accent-color.png
---

HTML form elemanları genelde tarayıcıların belirlediği standart stiller ile gelir. Çoğu zaman projelerimizde standart gelen renkleri değiştirmek için farklı yollar izleriz. Son zamanlarda genel olarak `appearance: none` ile tarayıcı stillerini ve davranışlarını ezip ekstra div veya `:before`, `:after` sözde sınıflarını kullanarak stillendiriyoruz. Bu yöntemler ile özelleştirilen form elemanları tarayıcının bize sunduğu özellikleri ezmemiz anlamına geliyor. Özellikle erişilebilirlik konusunda sorunlu hale geliyor. 

W3C bu sorunları görüp `accent-color` tanımı çıkardı. `accent-color` tanımı basitçe form elemanlarımızın tarayıcı tarafından belirlenmiş rengini değiştirmemizi sağlayan özelliktir. Tüm form elemanlarına uygulanmıyor.

## Uygulanan form elemanları

`accent-color` tanımı belirli form elemanlarında geçerli. Bu elemanlar

-   `<input type="checkbox">`
-   `<input type="radio">`
-   `<input type="range">`
-   `<progress>`

Aşağıdaki örnekte de görüleceği gibi bu form elemanlarına sadece `accent-color` tanımı yaparak rengini değiştirebiliyoruz.

<iframe height="412.83984375" style="width: 100%;" scrolling="no" title="Accent-color" src="https://codepen.io/fatihhayri/embed/XWOBdYb?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/XWOBdYb">
  Accent-color</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Diğer form elemanları

Şimdilik yukarıdaki form elemanları için çalışan bu kod ileride yenilerinin eklenmesiyle daha etkin kullanılacaktır.

[Adam Argyle'ın yazısındaki](https://web.dev/accent-color/) ek kod da değiştirebileceğimiz alanlar için güzel ipucu kod:

```css
html { 
  --brand: hotpink;
  scrollbar-color: hotpink Canvas;
}

:root { accent-color: var(--brand); }
:focus-visible { outline-color: var(--brand); }
::selection { background-color: var(--brand); }
::marker { color: var(--brand); }

:is(
  ::-webkit-calendar-picker-indicator,
  ::-webkit-clear-button,
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button
) {
  color: var(--brand);
}
```

Umarım gelecekte select'in seçili option bg, takvim elemanın vb. renk değişimlerini de sağlarız. Ne kadar form elemanına erişirsek o kadar kolaylaşacak bu iş. 

## Koyu / Açık mod durumları

Artık birçok sitede açık / koyu mod farkı kullanılmakta. Ayrıca sistemdeki tema seçimine göre `prefers-color-scheme` ile yazılan CSS kodunu da düşünmek lazım.

Aşağıdaki resimde görüldüğü gibi farklı `accent-color` seçimine göre tarayıcılar farklı renk seçeneklerine otomatik geçiyorlar. Normalde bizim özelleştirdiğimiz durumlarda bu tip durumları bizim düşünmemiz gerekiyor. 

Detay vermek gerekirse aşağıdaki görüntüde renk değişince checkbox'ın işareti rengin kontrastına göre siyah veya beyaz oluyor. Benzer şekilde progress'in çubuğunun rengi beyaz yada siyah oluyor. Radio'nun seçili ard alanı beyaz veya siyah oluyor.

![accent-color](https://fatihhayrioglu.com/images/accent-color.gif)

## Sonuç

Sonuç olarak tüm projelerimizdeki sorunları çözmese de bazı projelerdeki ihtiyaçlarımızı karşılayacak bir özellik. Belki başka yenilikler ve yeni form elemanlarıyla daha da geliştirildiği takdirde daha çok projede kullanılabilir.

Kalın sağlıcakla.

- [https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color)
- [https://css-tricks.com/almanac/properties/a/accent-color/](https://css-tricks.com/almanac/properties/a/accent-color/)
- [https://web.dev/articles/accent-color?hl=en](https://web.dev/articles/accent-color?hl=en)
- [https://www.smashingmagazine.com/2021/09/simplifying-form-styles-accent-color/](https://www.smashingmagazine.com/2021/09/simplifying-form-styles-accent-color/)
- [https://blog.logrocket.com/simplify-form-styles-using-css-accent-color/](https://blog.logrocket.com/simplify-form-styles-using-css-accent-color/)
- [https://dev.to/dostonnabotov/the-css-accent-color-property-explained-4h9o](https://dev.to/dostonnabotov/the-css-accent-color-property-explained-4h9o)
- [https://caniuse.com/mdn-css_properties_accent-color](https://caniuse.com/mdn-css_properties_accent-color)
- [https://codepen.io/jh3y/pen/qBmeBjw](https://codepen.io/jh3y/pen/qBmeBjw)
- [https://davidwalsh.name/css-accent-color](https://davidwalsh.name/css-accent-color)
- [https://x.com/argyleink/status/1500897519500333057?s=20](https://x.com/argyleink/status/1500897519500333057?s=20)