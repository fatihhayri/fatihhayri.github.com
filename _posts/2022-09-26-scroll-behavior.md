---
layout: post
title: scroll-behavior
description: scroll-behavior özelliğinin tanımı ve örneklemesi
lang: tr_TR
Date: 2022-09-26 11:00
Category: CSS
tags: [scroll, animasyon]
---

Bir başka Safari bekleyen özellikte daha birlikteyiz. Şöyle bir avantajımız var ki Safari kullanıcıları sistemlerini ve dolayısıyla tarayıcılarını hızlı güncellediği için çok beklemiyoruz. 

W3C geliştiricileri uzun süre scroll stili ve işlemleriyle alakalı gelişmelere uzak kaldı. Son yıllarda ise bu konuda olabildiğince iyi gelişmeler oldu. Gerek scroll stilini belirlemede gerekse scroll ile yapılan işlemlerde gayet güzel gelişmeler yaşıyoruz. 

 - Scroll stillendirme işleri
	 - [webkit](https://fatihhayrioglu.com/css-ile-ozel-kaydirma-cubugu-yapmak/)
	 - [standart](https://fatihhayrioglu.com/css-ile-kaydirma-cubugu-ozellestirme/)
 - Scroll davranışını kontol edebilme ([overscroll-behavior](https://fatihhayrioglu.com/overscroll-behavior/ "CSS overscroll-behavior"))
 - Yumuşak scroll hareketi imkanı (**scroll-behavior**)
 - Belirli alanlara odaklı scroll geliştirme imkanı (scroll-snap)
 - En son scroll konumu zamanına göre işlemler yapabilme imkanı sağlayan (scroll-timeline)

Biz geliştiriciler şimdiye kadar scroll işlemlerimizi alternatif yöntemlerle çözüyorduk. Bu özellikler çıktıktan sonra artık standart ve basit bir şekilde scroll işlemlerimizi yabiliyoruz.

`scroll-behavior` özelliği sayfa içindeki bir alana bir bağlantı yaptığımızda kullanıcının o alana giderken scroll hareketinin nasıl gerçeleşmesi gerektiğini belirlememiz sağlar. 

<iframe height="300" style="width: 100%;" scrolling="no" title="scroll-behavior - öncesi" src="https://codepen.io/fatihhayri/embed/NWMagdG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/NWMagdG">
  scroll-behavior - öncesi</a> by Fatih  (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki örnekte normal davranışı görebilirsiniz. Yukarıdaki linklere tıkladığımızda sayfa içi ilgili alana giderken direk herhangi bir scroll animasyonu olamadan gider. Aynı şekilde yukarı oka tıklayınca sayfanın en üstüne yine herhangibir scroll animasyonu olmadan gider. 

Bu koda sadece bir satır CSS kodu  ekleyerek

```css
html {
  scroll-behavior: smooth;
}
```

ilgili alana scroll'un yumuşak bir şekilde gitmesini sağlayabiliyoruz. 

<iframe height="300" style="width: 100%;" scrolling="no" title="scroll-behavior - sonrası" src="https://codepen.io/fatihhayri/embed/KKRXqag?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/KKRXqag">
  scroll-behavior - sonrası</a> by Fatih  (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Burada dikkat edilmesi gereken bir konu; eğer bu tanımın tüm sayfayı etkilemesini istiyorsak `html` elementine tanımlamak gerekiyor.  Sadece bir kapsayıcının içinde uygulanmasını istiyorsak ilgili kapsayıcıya bu tanımı yapmamız yeterli.

Benzer şekilde yatay scroll işlerinde de bize yumuşak bir geçiş sağlıyor. Örneğin caraousel komponentini sadece CSS ile yapmak mümkün. Süper değil mi? Aha burda yapılmışı da var. [Can I create Netflix’s video carousel with CSS only?](https://www.youtube.com/watch?v=b--q6Fsf_cA)

Javascript ile bu işi yapmak istediğimizde

```javascript
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
})
```

şeklinde tanımlama yapabiliyoruz.

Bu özelliğin erişilebilirlik kısmı da önemli. `prefers-reduced-motion` medya sorgusunda şöyle bir tanım yapmak 

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

Animasyon istemeyen kullanıcılara zorla animasyon uygulamaktan kurtarır bizi.

Tarayıcı desteği konusunda gayet iyi nokta bu özellik. Tarayıcı desteği %95 seviyelerine ulaşmış.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/css-scroll-behavior-1741163443513.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/css-scroll-behavior-1741163443513.png">
<img src="https://caniuse.bitsofco.de/static/v1/css-scroll-behavior-1741163443513.jpg" alt="Data on support for the css-scroll-behavior feature across the major browsers from caniuse.com">
</picture>

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
 - [https://css-tricks.com/almanac/properties/s/scroll-behavior/](https://css-tricks.com/almanac/properties/s/scroll-behavior/)
 - [https://www.youtube.com/watch?v=nTtUg8EuJ_8](https://www.youtube.com/watch?v=nTtUg8EuJ_8)
 - [https://caniuse.com/?search=scroll-behavior](https://caniuse.com/?search=scroll-behavior)
 - [https://codyhouse.co/ds/components/info/smooth-scrolling](https://codyhouse.co/ds/components/info/smooth-scrolling)
 - [https://kilianvalkhof.com/2022/css-html/preventing-smooth-scrolling-with-javascript/](https://kilianvalkhof.com/2022/css-html/preventing-smooth-scrolling-with-javascript/)
 - https://egghead.io/lessons/css-use-css-scroll-behavior-for-animated-anchor-scrolls
 - [https://coryrylan.com/blog/css-smooth-scroll-behavior](https://coryrylan.com/blog/css-smooth-scroll-behavior)
 - [https://dev.to/pqina/css-smooth-scrolling-4m7f](https://dev.to/pqina/css-smooth-scrolling-4m7f)
 - https://codepen.io/rolandtoth/pen/eMamVK (CSS ile yukarı butonu yapımı)
