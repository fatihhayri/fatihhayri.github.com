---
layout: post
title: Flex ile sayfa dibine yapışık alt alanlar (sticky footer) yapmak
Date: 2018-02-05 16:43
Category: CSS
tags: [flex, css3]
---

Daha önce bu konuda bir yazı yazmıştım. 
[Sayfa Dibine Yapışık Alt Alanlar (Sticky Footer)](
Sayfa Dibine Yapışık Alt Alanlar(Sticky Footer)) Yazının tarihi 2009. Flex ile bu işin daha kolay yapıldığını daha önce görmüştüm ama bir türlü zaman ayırıp bir yazı yazamamıştım. Nasip şimdiyeymiş.

![sticky footer](https://fatihhayrioglu.com/images/sticky-oncesi.gif)

2009'daki yazıyı incelerseniz kodlar biraz hack içeriyor. Flex ise bu konuya basit bir şekilde çözüm üretiyor. Dün yazdığım yazıdaki çözüm ile bir çözüm oluşturuyoruz. `margin-top: auto` güzel bir kullanım.

<iframe height='488' scrolling='no' title='Yapışık alt alan' src='//codepen.io/fatihhayri/embed/qxNgPa/?height=388&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/qxNgPa/'>Yapışık alt alan</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
{% highlight css %}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin: auto 0 0 0;
}
{% endhighlight %}

Bu kadarcık kod işimizi gördü.

Bir başka çözüm de içerik alanının alt alan kadar uzayan bir ardalan rengi istiyorsak.

<iframe height='445' scrolling='no' title='Yapışık alt alan' src='//codepen.io/fatihhayri/embed/NyrJxQ/?height=345&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/NyrJxQ/'>Yapışık alt alan</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Koddaki fark alt alandaki **margin** değerini kaldırıp içerik alanına **flex** tanımı yapmamız.

{% highlight css %}
main {
  flex: 1 0 auto;
}
{% endhighlight %}

Yerine göre kullanım tercihi edebilirsiniz.

Kalın sağlıcakla.

## Kaynaklar

 - [https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/)
 - [https://css-tricks.com/couple-takes-sticky-footer/](https://css-tricks.com/couple-takes-sticky-footer/)
 - [https://teamtreehouse.com/library/css-flexbox-layout/building-a-layout-with-flexbox/creating-a-sticky-footer-with-flexbox](https://teamtreehouse.com/library/css-flexbox-layout/building-a-layout-with-flexbox/creating-a-sticky-footer-with-flexbox)
 - [https://medium.com/@paynoattn/flexbox-sticky-footer-d19dab50c34](https://medium.com/@paynoattn/flexbox-sticky-footer-d19dab50c34)
 - [https://www.erbilen.net/css-flex-ile-sticky-footer-yapmak/](https://www.erbilen.net/css-flex-ile-sticky-footer-yapmak/)
 - [https://fatihhayrioglu.com/flexin-gizli-kalmis-guzel-bir-ozelligi/](https://fatihhayrioglu.com/flexin-gizli-kalmis-guzel-bir-ozelligi/)