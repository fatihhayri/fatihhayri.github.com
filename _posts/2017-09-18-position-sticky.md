---
layout: post
title: position:sticky 
Date: 2017-09-18 09:37
Category: CSS
tags: [css3, position, sticky]
---

Daha önce bu özelliği kullanacaktım ancak Chrome desteğini kaldırdığı için kullanım oranı çok düşüktü. Chrome 56'dan itibaren tekrar desteklemeye başladığı için artık  kullanabiliriz.

**position:sticky** tanımlanan eleman kaydırma çubuğu gelene kadar **position:relative** gibi davranır, kaydırma çubuğu geldikten sonra **position:fixed** gibi davranır. 

Örnek ile daha iyi anlayacağız.

<iframe height='300' scrolling='no' title='jGPLgO' src='//codepen.io/fatihhayri/embed/jGPLgO/?height=300&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/jGPLgO/'>jGPLgO</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Daha önce bu tip ihtiyaçları **position:fixed** ile yapıp kaydırma çubuğu gelene kadarki kısmı javascript yardımı ile çözüyorduk. Çünkü **postion:fixed** olan eleman **position:absolute** gibi davranıp her halükarda kendini aynı yerde sabitliyor. 

Sticky kullanımlarında kaydırma çubuğu, elemana gelene kadar sabit kalsın ama kaydırma çubuğu gelince **fixed** olsun gibi istekler ile karşılaşıyorduk. Bu istekleri karşılamak için javascript çözümlerine başvuruyorduk. **position:sticky** güzel ve tek satrılık çözümü süper oldu.

Elemanın sticky olması için dikeydeki kaydırmalarda **top / bottom** değeri, yataydaki kaydırmalarda **left / right** değeri tanımlamak gerekiyor.

<iframe height='681' scrolling='no' title='POEqBg' src='//codepen.io/fatihhayri/embed/POEqBg/?height=681&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/POEqBg/'>POEqBg</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Desteklemeyen tarayıcılar için çözüm

Bu yazıyı yazdığımda Türkiye için destek %82 idi. Desteği olmayan tarayıcılar için iki seçenek var. Javascript ile destek sağlamak veya desteklemeyenlerde **position:relative** olarak tanımlamak.

### Javascript ile çözüm

Javascript ile çözüm oluşturmak için aşağıdaki çözümlerden biri tercih edilebilir.

 - [https://github.com/wilddeer/stickyfill](https://github.com/wilddeer/stickyfill) 
 - [https://philipwalton.github.io/polyfill/](https://philipwalton.github.io/polyfill/) 
 - [http://wd.dizaina.net/en/scripts/stickyfill/](http://wd.dizaina.net/en/scripts/stickyfill/)

### CSS ile çözüm

İkinci çözüm desteği olmayanlar için **position:relative** olarak bırakmak.

{% highlight css %}
.sticky-element{
  position: relative; 
}

@supports(position:sticky){
  .sticky-element{
    position: sticky;
    top: 0px;
  }
}
{% endhighlight %}

## Sonuç

Kullanıcı ihtiyacı olan bir özellik. Standartlaşması süper. W3C kullanıcı ihtiyaçlarını karşılamada çok yavaş kalıyor. Bu nedenle birçok şeyi olması gerektiği gibi değil çakma çözümler ile yapıyoruz. Umarım zamanla bu değişir.

**Tarayıcı desteği**

<p class="ciu_embed" data-feature="css-sticky" data-periods="future_1,current,past_1,past_2">  <a href="http://caniuse.com/#feat=css-sticky">Can I Use css-sticky?</a> Data on support for the css-sticky feature across the major browsers from caniuse.com. </p>


## Kaynaklar

 - [https://developer.mozilla.org/tr/docs/Web/CSS/position](https://developer.mozilla.org/tr/docs/Web/CSS/position)
 - [http://gedd.ski/post/position-sticky/](http://gedd.ski/post/position-sticky/)
 - [https://www.sitepoint.com/css-position-sticky-introduction-polyfills/](https://www.sitepoint.com/css-position-sticky-introduction-polyfills/)
 - [https://webdesign.tutsplus.com/tutorials/sticky-positioning-with-nothing-but-css--cms-24042](https://webdesign.tutsplus.com/tutorials/sticky-positioning-with-nothing-but-css--cms-24042)
 - [https://developers.google.com/web/updates/2016/12/position-sticky](https://developers.google.com/web/updates/2016/12/position-sticky)