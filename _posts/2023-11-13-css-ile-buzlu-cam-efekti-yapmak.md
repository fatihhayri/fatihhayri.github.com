---
layout: post
title: CSS ile buzlu cam efekti yapmak
description: CSS ile buzlu cam efekti yapmak
lang: tr_TR
Date: 2023-06-11 10:00
Category: CSS
tags: [buzlu-cam-efekti, efekt]
image:
  feature: buzlu-cam-efekti.png
---

Buzlu cam efekti yapmak, [:user-invalid seçicisi](https://fatihhayrioglu.com/user-invalid-secicisi/ ":user-invalid seçicisi") yazısındaki örnekte de kullandığım bir teknikti. CSS'in bizlere kazandırdıklarını göstermek açısından güzel örnek.

Peki buzlu cam desenli ardalanlar nasıl yapılıyor?

Ben bu efekti ilk olarak Kyle Wetton'ın [CodePen](https://codepen.io/kylewetton/pen/bGbaazX)'deki örneğinde görmüştüm. 

Kod olarak da çok basit bir uygulaması var. Arka tarafında büyük bir resim olan bir kutunu ard alanına `backdrop-filter: blur(18px);` tanım yaparız. Uyguladığımız yere göre ard alanına beyaz veya siyah bir renk tanımlayıp saydamlığını da `0.3` tanımladıktan sonra son olarak kutuya bir gölge vermekte güzel etki yapıyor. Sonuçta kod:

```css
.glass {
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  box-shadow: 0px 20px 18px rgba(0, 0, 0, 0.30);
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS - Frosted Glass" src="https://codepen.io/fatihhayri/embed/qBmBNbZ?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/qBmBNbZ">
  CSS - Frosted Glass</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Üste yapışık menülerde de güzel efekt veriyor. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Grid: grid-auto-flow: dense" src="https://codepen.io/fatihhayri/embed/rNPmKZO?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/rNPmKZO">
  Grid: grid-auto-flow: dense</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Bunların dışında bir çok örnek var. İncelemek isterseniz codpen [linki](https://codepen.io/tag/frosted-glass) 

 > Not: `filter: blur(10px)` ile benzer sonuçlar elde edilebilir. 

## Tarayıcı Desteği

Türkiye'de şu an %95'lik desteği ile kullanılır durumda.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

Kalın sağlıcakla.


## Kaynaklar

 - [https://webdesign.tutsplus.com/how-to-create-a-frosted-glass-effect-in-css--cms-32535t](https://webdesign.tutsplus.com/how-to-create-a-frosted-glass-effect-in-css--cms-32535t)
 - [https://dev.to/tolentinoel/frosted-glass-on-css-37bg](https://dev.to/tolentinoel/frosted-glass-on-css-37bg)
 - [https://css.glass/](https://css.glass/)
 - [https://dev.to/khush2706/frosted-glass-effect-in-css-27p4](https://dev.to/khush2706/frosted-glass-effect-in-css-27p4)
 - [https://silentlad.com/frosted-glass-effect-using-css](https://silentlad.com/frosted-glass-effect-using-css)
