---
layout: post
title: CSS scroll-snap
description: CSS scroll-snap özelliklerinin tanımları
lang: tr_TR
Date: 2023-11-20 10:00
Category: CSS
tags: [scroll-snap, slider]
image:
  feature: scroll-snap-bg.png
---

Yatay scroll tercih sebepleri genelde kullanıcının yoğun kullandığı alandaki yerin paylaşım sorunlarını aşmaktır. Bu paylaşım sorunu mobil ortamlarda daha fazla ortaya çıkıyor. Birçok e-ticaret ve haber sitesinde yer alan caraousel yapıları bunun en önemli örneğidir. Bu yapılar genel olarak javascript ile çözüle gelmekte idi. Sonra standart koyucular bunun CSS ile de yapılacağı bir özellik grubu açıkladı bu özellik grubunu `scroll-snap` olarak tanımlıyoruz.

Bir içeriği kaydırırken genelde kaydırılan içeriğin neresine kadar kaydırdığımıza dikkat etmek zorunda kalırız. Çünkü arada atlama olmasını istemeyiz.  Günümüzde sonsuz kaydırmalı yapıların çoğalarak kullanıldığı yapılarda bu daha çok önem kazanır. `scroll-snap`   özelliği kaydırmanın belli noktalara mıknatıs gibi yapışmasını sağlıyor. Böylece kullanıcı fazladan dikkat etmek zorunda kalmadan kaydırma yapabiliyor. 

`scroll-snap`  özellikleri kaydırma yapılacak içeriği kapsayan elemana tanımlana özellikler ve kaydırılan içeriğe atana özellikler diye ikiye ayırırız.

 - Kapsayıcı tanımları
	 - `scroll-snap-type`
	 - `scroll-padding`
 - Alt eleman tanımları
	 - `scroll-snap-align`
	 - `scroll-margin`

Kapsayıcı eleman tanımları ile başlayalım;

## scroll-snap-type

Kaydırma işlemenin yapılacağı içeriğin kapsayıcısına tanımlanır. Tanımlanan kapsayıcının yatayda mı, dikeyde mi kaydırma yapacağını belirliyoruz bir de kaydırma işleminin tutma işleminin katı mı yoksa yarı katı mı olacağını belirliyoruz.

- **mandatory**: Kaydırma işlemi yaparken kati bir şekilde belirlene noktaları tutmasını istiyorsak.
- **proximity**: Kaydırma işlemi yaparken kullanıcı yarıyı geçen kadar zorlama ama yarıyı geçtikten sonra yapıştır demek için kullanılır.

Bu iki ayrımı örneklerde daha iyi göreceksiniz diyelim ve diğer tanıma geçelim.

mandatory örneği:
<iframe height="300" style="width: 100%;" scrolling="no" title="scroll snap" src="https://codepen.io/fatihhayri/embed/ExrgJxa?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/ExrgJxa">
  scroll snap</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

proximity örneği: 
<iframe height="300" style="width: 100%;" scrolling="no" title="scroll snap" src="https://codepen.io/fatihhayri/embed/qBgawRq?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/qBgawRq">
  scroll snap</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## scroll-padding  

Kaydırma işlemi yaparken sayfamızda veya içeriğimizde yapışık alanlar varsa veya tam belirli bir yerden değilde 20px öncesinde dursun dediğimiz durumları sağlar bize.

<iframe height="400" style="width: 100%;" scrolling="no" title="scroll snap" src="https://codepen.io/fatihhayri/embed/JjxraML?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/JjxraML">
  scroll snap</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Gelelim alt eleman tanımlarına;

## scroll-snap-align

Kaydırma yapılancak içerikteki ögelerin neresine hizalanacağını belirlememize yarıyor. Üç değer alır.

 - start: Kaydırma ögenin başlangıcına göre yapılır.
 - center: Kaydırma ögenin ortasına göre yapılır.
 - end: Kaydırma ögenin sonuna göre yapılır.

<iframe height="426" style="width: 100%;" scrolling="no" title="scroll-snap-align" src="https://codepen.io/fatihhayri/embed/LYqjwwv?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/LYqjwwv">
  scroll-snap-align</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Not: İlk öge hep start ile başlar sonraki ögelerde tanıma göre değişir.

## scroll-margin

`scroll-padding` ile aynı işlevi görür. `scroll-padding` kapsayıcıya tanımlanırken `scroll-margin` alt elemana tanımlanır. 

<iframe height="400" style="width: 100%;" scrolling="no" title="scroll-margin" src="https://codepen.io/fatihhayri/embed/mdvBGzY?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/mdvBGzY">
  scroll-margin</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Tarayıcıların geliştirici araçlarındaki görünümü

![chrome scroll-snap](https://fatihhayrioglu.com/images/scroll-snap.png)
Chrome'un geliştirici aracında scroll-snap çok iyi düzenleniyor ve görünüyor. Kaydırma yapılacak alan scroll-snap kullandığı gösteriliyor. `scroll-snap-align` bilgisi padding ve margin bilgisi gösteriliyor. Kaydırma yapılan ögelerin izdüşümleri gösteriliyor. Firefox ve Safari'de gösteriyor ancak Chrome'un gösterimi çok iyi.

## Tarayıcı desteği

%95 gibi gayet güzel bir desteği var. 

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

## Sonuç

`scroll-snap` özelliği bizlere bir çok yönüyle kolaylık sağlıyor. Tabi projelerimizdeki tüm kaydırma alanı ihtiyaçlarımızı karşıladığını söyleyemeyiz. Bir careousel yapabiliriz ama bu careousel'e ok eklemek istediğimizde ya statik ekleyeceğiz ya da javascript yardımı almamız gerekir. Benzer şekilde gezinmek için nokta koyduğumuzda da benzer durum geçerli. Şimdilik ihtiyaca göre javascirpt desteği sağlanıp çözüm üretmek mantıklı görünüyor. 

![slider scroll-snap + js](https://fatihhayrioglu.com/images/scroll-snap+js.jpg)

[Şu örnek](https://codepen.io/mobalti/pen/GRPMpyj) scroll-snap + js kullanımı için mükemmel bence.

Bİr diğer konu da yeni gelecek olan kaydırma çubuğuna bağlı animasyon ile birlikte çok güzel uygulamalar ortaya çıkacaktır. Bu konuda [şöyle bir makale](https://www.bram.us/2023/06/21/synchronize-videos-3d-models-to-scroll-driven-animations/) var.

İki yönlü uygulama olarak bir takvim uygulaması gayet başarılı. [Örnek](https://x.com/raphaelschaad/status/1636641781407264768?s=20)

Tayfun Erbilen'in [örneği de](https://x.com/tayfunerbilen/status/1269650827691638792?s=20) gayet güzel. 

Tabi pozitif yanlarını yanında negatif yanları da var. Bu işi js ile yapanların çıkardığı bir [negatif yanlar yazısı var.](https://alvarotrigo.com/blog/why-not-to-use-css-scroll-snap/)

Sonuç olarak tüm ihtiyaçları karşılaması zor bir alan ama en azından büyük çoğunluğun ihtiyacını karşılayacak bir özellik. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://web.dev/css-scroll-snap/](https://web.dev/css-scroll-snap/)
 - https://twitter.com/CanIDevTools/status/1580409354209009664 - Chrome dev tools da gösterimi
 - [https://12daysofweb.dev/2022/css-scroll-snap/](https://12daysofweb.dev/2022/css-scroll-snap/)
 - [https://www.youtube.com/watch?v=pohyK8iz-SQ](https://www.youtube.com/watch?v=pohyK8iz-SQ)
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap
- https://css-tricks.com/practical-css-scroll-snapping/
- [https://css-tricks.com/how-i-added-scroll-snapping-to-my-twitter-timeline/](https://css-tricks.com/how-i-added-scroll-snapping-to-my-twitter-timeline/)
- https://ishadeed.com/article/css-scroll-snap/
- https://alvarotrigo.com/blog/why-not-to-use-css-scroll-snap/
- https://www.filamentgroup.com/lab/introducing-snapper.html
- https://blog.logrocket.com/how-to-use-css-scroll-snap/
- https://www.youtube.com/watch?v=0Og_kQUsxEw
- https://twitter.com/addyosmani/status/1485024476974694400
- https://twitter.com/argyleink/status/1456979682344128517
- https://codepen.io/argyleink/pen/wvgmMXe
- https://codepen.io/mobalti/pen/GRPMpyj
- [https://x.com/iamakulov/status/1693563645773701422?s=20](https://x.com/iamakulov/status/1693563645773701422?s=20)
- [https://x.com/mattgperry/status/1546838506789552133?s=20](https://x.com/mattgperry/status/1546838506789552133?s=20)
- [https://youtu.be/WMRbz_AjDvU?si=JPHuP0Q-GxZ8XKwL](https://youtu.be/WMRbz_AjDvU?si=JPHuP0Q-GxZ8XKwL) - CSS Scroll Snap Kullanımı - PROTOTURK
- [https://x.com/davidm_ml/status/1635593787371327488?s=20](https://x.com/davidm_ml/status/1635593787371327488?s=20)
- [https://x.com/the_ross_man/status/1691913040168657348?s=20](https://x.com/the_ross_man/status/1691913040168657348?s=20) 