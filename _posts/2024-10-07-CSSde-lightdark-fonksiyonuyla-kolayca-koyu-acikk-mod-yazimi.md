---
layout: post
title: CSS'de lightdark() fonksiyonuyla kolayca koyu / açık mod yazımı
description: CSS'de lightdark() fonksiyonuyla kolayca koyu / açık mod yazımı
lang: tr_TR
Date: 2024-10-07 12:30
Category: CSS
tags: [lightdark, light, dark]
image:
  feature: light-dark-func.png
---

Bir önceki yazımda bahsettiğim gibi CSS'in yeni özelliklerinin bazıları çığır açan özellikler, bazıları kulllanıcı deneyimini iyileştirme yönünde özellikler bazıları da `lightdark()` fonksiyonu gibi yazım kolaylığı sağlayan özellikler. 

`lightdark()` fonksiyonu mevcut uyumlu web yazımındaki büyük sorun olan aşağıdaki kullanımı daha anlaşılır ve düzenli hale getirmeye yarıyor.

```css
:root {
  color-scheme: light dark;

  --dark-color: #292524;
  --light-color: #f5f5f4;

  --text-color: var(--dark-color);
  --bg-color: var(--light-color);
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: var(--light-color);
    --bg-color: var(--dark-color);
  }
}

body {
  color: var(--text-color);
  background-color: var(--bg-color);
}
````

Bu tip koyu/açık tanımlarını ayrı ayrı yapmak yerine 

```css
:root {
  color-scheme: light dark;

  --light: #292524;
  --dark: #f5f5f4;
}

body {
  color: light-dark(var(--light), var(--dark));
  background-color: light-dark(var(--dark), var(--light));
}
```

Böylece daha kısa ve anlaşılır bir kod yapısına kavuşmuş oluyoruz. 

<iframe height="420" width="100%" style="width: 100%;" scrolling="no" title="lightdark() fonksiyonu" src="https://codepen.io/fatihhayri/embed/rNXLRer?default-tab=css%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Geliştirici araçlarındaki Styles sekmesindeki sağdan ikinci ikon yardımıyla dark / light arasında geçiş yapıp durumu simüle edebiliriz. 

![Developer tool light dark](https://fatihhayrioglu.com/images/light-dark.png)

Mevcut kodlarımızda kod boyutunu azaltacak bir özellik.

Bu yazıyı yazdığımda tüm tarayıcıların yeni sürümlerinde desteği vardı. Türkiye'de oran %85. Güzel oran. 

## Kaynaklar 

 - [https://www.bram.us/2023/10/09/the-future-of-css-easy-light-dark-mode-color-switching-with-light-dark/](https://www.bram.us/2023/10/09/the-future-of-css-easy-light-dark-mode-color-switching-with-light-dark/)
 - [https://web.dev/articles/light-dark#:~:text=light%2Ddark()%20is%20a,the%20first%20value%20gets%20returned.](https://web.dev/articles/light-dark#:~:text=light-dark%28%29%20is%20a,the%20first%20value%20gets%20returned.)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
 - [https://frontendmasters.com/blog/dark-and-light/](https://frontendmasters.com/blog/dark-and-light/)
 - [https://dev.to/stuffbreaker/dark-mode-in-web-components-is-about-to-get-awesome-4i14](https://dev.to/stuffbreaker/dark-mode-in-web-components-is-about-to-get-awesome-4i14)
 - [https://daverupert.com/2024/05/light-dark-experiment/](https://daverupert.com/2024/05/light-dark-experiment/)
 - [https://matuzo.at/blog/2024/100daysof-day107](https://matuzo.at/blog/2024/100daysof-day107)
 - [https://dev.to/janeori/css-lightdark-mode-implementation-without-duplicating-vars-22c9](https://dev.to/janeori/css-lightdark-mode-implementation-without-duplicating-vars-22c9)
 - [https://x.com/natebirdman/status/1757224685614645290](https://x.com/natebirdman/status/1757224685614645290)
 - [https://www.youtube.com/watch?v=1-yzpfTTGIg](https://www.youtube.com/watch?v=1-yzpfTTGIg)
 - [https://x.com/colisscom/status/1719151455075197210](https://x.com/colisscom/status/1719151455075197210)
 - [https://pawelgrzybek.com/light-dark-mode-simplified-by-the-css-light-dark-function/](https://pawelgrzybek.com/light-dark-mode-simplified-by-the-css-light-dark-function/)
 - [https://caniuse.com/?search=light-dark](https://caniuse.com/?search=light-dark)