---
layout: post
title: HTML Akordiyon bileşeni
description: HTML Akordiyon bileşeni ve uygulalamarı
lang: tr_TR
Date: 2024-05-13 9:30
Category: HTML
tags: [css, akordiyon, detail, summary, name]
image:
  feature: akordiyon-html.png
---

Uzun içerikli yapıları daha az yer kaplayacak şekilde ve daha işlevsel kullanmak için genelde akordiyon yapılarını kullanırız.  Uzun süredir kullanıla gelen bu bileşenlerin genelde işlevselliğini javascript ile yapıyoruz. HTML ve CSS ile yapılan akordiyonlar için son günlerde gelen `name` attribute ile işlevsellik yönünden eksik kalan kısım tamamlandı. 

`name` attribute tam olarak ne sağlıyor?

`<details>` ve `<summary>` kullanımı ile oluşturduğumuz akordiyonlar başlığa tıkladığımızda açılan detay içeriği gösteriliyor. Biz daha çok başlığa tıklandığında açılıyor ve aynı zamanda açık olan başka içerik kapanıyor. 

Örneklerde daha iyi anlarız. 

 > Örnekleri trendyol'da geliştirdiğimiz baklava tasarım sisteminde uyguladığımız tasarımları kullandım. Bu arada görmeyenler için baklava github linkini de buraya ekliyeyim. [https://github.com/Trendyol/baklava/](https://github.com/Trendyol/baklava/)


 > Bir diğer not da baklava design system açık kaynak bir proje katılıp katkı verebileceğiniz güzel bir proje olduğunu düşünüyorum. Katkılarınızı bekleriz.

## Mevcut akordiyon (checkbox gibi)

Mevcut durumda kullanılan ve tarayıcı desteği gayet iyi olan tip bu.

<iframe height="450" width="100%" style="width: 100%;" scrolling="no" title="akordiyon - checkbox gibi" src="https://codepen.io/fatihhayri/embed/qBgoRzW?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/qBgoRzW">
  akordiyon - checkbox gibi</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki örnekte sadece HTML ve CSS kullandık. Kendi stillerimizi uyguladık sadece. 

## name ile oluşturulan akordiyon (radio gibi)

Chrome 120 ve Safari 17.2 ile birlikte gelen `name` özniteliği desteği ile artık tıklanan ögenin dışındakileri kapatan akordiyonları da yapabileceğiz. 

<iframe height="450" width="100%" style="width: 100%;" scrolling="no" title="akordiyon - radio gibi" src="https://codepen.io/fatihhayri/embed/eYxMvOb?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/eYxMvOb">
  akordiyon - radio gibi</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Eğer Chrome ve Safari'nin developer sürümlerini yüklemediyseniz yukarıdaki kod sizde bir öncekiyle aynı gözükecektir.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iB9KDtbUufU?si=PHiXZ-iiItBBn30K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Açık gelen akordiyon
Başlangıç durumunda bir akordiyon elemanının açık gelmesini istiyorsanız. Açık gelmesini istediğiniz akordiyon elemanında `open` öz niteliğini eklemeniz yeterli. Örnek: `<details open>`

<iframe height="450" width="100%" style="width: 100%;" scrolling="no" title="akordiyon - radio gibi" src="https://codepen.io/fatihhayri/embed/mdvxWRm?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/mdvxWRm">
  akordiyon - radio gibi</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Örnekte görüldüğü gibi ikinci öge açık olarak belirtildiği için açık gelmiştir.

## Sonuç

W3C'nin tarayıcıların bünyesindeki bileşenleri arttırma ve geliştirme çabalarını takdir ile karşılıyorum. Her projede ayrı ayrı kod yazmaktan ve uğraşmaktan kurtarıyor, erişebilirlik sorunlarını çözüyor. Standart bir tasarım desteği sunuyor. Umarım bir çok UI kütüphanesindeki bileşenler bu şekilde eklenir.

Kalın sağlıcakla.

## Kaynaklar

- [https://open-ui.org/components/accordion.explainer/](https://open-ui.org/components/accordion.explainer/)
- [https://www.zachleat.com/web/details-utils/](https://www.zachleat.com/web/details-utils/)
- [https://blog.openreplay.com/creating-accordions-with-just-html-and-css/](https://blog.openreplay.com/creating-accordions-with-just-html-and-css/)
- [https://x.com/jh3yy/status/1707939551312765206?s=20](https://x.com/jh3yy/status/1707939551312765206?s=20)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [https://web.dev/learn/html/details?hl=en](https://web.dev/learn/html/details?hl=en)
- [https://www.scottohara.me/blog/2022/09/12/details-summary.html](https://www.scottohara.me/blog/2022/09/12/details-summary.html)
- [https://12daysofweb.dev/2021/details-summary/](https://12daysofweb.dev/2021/details-summary/)
- [https://css-tricks.com/how-to-animate-the-details-element/](https://css-tricks.com/how-to-animate-the-details-element/)
- [https://stackoverflow.com/questions/38213329/how-to-add-css3-transition-with-html5-details-summary-tag-reveal](https://stackoverflow.com/questions/38213329/how-to-add-css3-transition-with-html5-details-summary-tag-reveal)
- [https://medium.com/@jgustavo.wd/solved-how-to-fully-animate-the-details-html-element-with-only-css-no-javascript-b7d32c53a9d7](https://medium.com/@jgustavo.wd/solved-how-to-fully-animate-the-details-html-element-with-only-css-no-javascript-b7d32c53a9d7)
- [https://codepen.io/stepfray/pen/LYWYxPM](https://codepen.io/stepfray/pen/LYWYxPM) animasyon
- [https://x.com/jensimmons/status/1724885940416450810?s=20](https://x.com/jensimmons/status/1724885940416450810?s=20) Safari desteği de geldi.
- [https://github.com/atherosai/ui/blob/main/accordion-04/index.html](https://github.com/atherosai/ui/blob/main/accordion-04/index.html) Örnek akordiyon

## Mevcut UI kütüphanelerinde akordiyon

- [https://mui.com/material-ui/react-accordion/](https://mui.com/material-ui/react-accordion/)
- [https://getbootstrap.com/docs/5.3/components/accordion/](https://getbootstrap.com/docs/5.3/components/accordion/)
- [https://ant.design/components/collapse](https://ant.design/components/collapse)
- [https://semantic-ui.com/modules/accordion.html#/definition](https://semantic-ui.com/modules/accordion.html#/definition)