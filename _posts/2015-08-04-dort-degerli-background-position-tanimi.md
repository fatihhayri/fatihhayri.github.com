---
layout: post
title: Dört değerli background-position tanımı
Date: 2015-08-04 13:18
Category: css
tags: css background-position right bottom css3
---

CSS'in devamlı geliştirilmekte olmasının avantajları ve dezavantajları var. Dezavantajlara flex özelliğinin 3 kere değişmesini gösterebiliriz. Avantajları çok tabi. Bunlardan bir tanesine örnek bu makalenin konusudur. Artalan resimlerinin konumlandırmasında bazı sorunlar vardı. Bu sorunları görerek mevcut tanım geliştirildi.

Daha önce anlattığımız [artalan tanımına](http://fatihhayrioglu.com/hizli-css-referansi/) artı özellikler eklendi. 

{% highlight css %}
div {
    background-position: 20px 30px;
}
{% endhighlight %}

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/jPXgmX/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/fatihhayri/pen/jPXgmX/'>jPXgmX</a> by Fatih  (<a href='http://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

yukarıdaki örnekte yaptığımız gibi sabit hizalama tanımı yaptığımızda her zaman elemanın sol ve üst köşesine göre mesafe belirtebiliyorduk. Tam işte burada yenilik geldi. Gerçi yenilik geleli bayağı zaman oluyor. Ben bu yazıyı daha önce yazmak istemiştim ama zamanım olmamıştı. Şimdiye nasipmiş.

Yeni gelen özellikten sonra artık sağ ve alttan belli mesafede artalan resmi hizalayabiliyoruz. Hemen bir örnek yapalım. 

{% highlight css %}
div {
    background-position: right 20px bottom 80px;
}
{% endhighlight %}

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/qdLeXa/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/fatihhayri/pen/qdLeXa/'>qdLeXa</a> by Fatih  (<a href='http://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Gayet kullanışlı bir özellik. Zamanında çok aramışlığım vardı. Eskiden çözüm için genelde Photoshop'ta resime sağdan ve alttan belirttiğimiz mesafeyi verip saydam olarak kaydederdik.

Tarayıcı desteği konusunda da gayet güzel bir noktada. 

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**9+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**4.4+**|**+**|**+**|
{: .tarayici-uyumi}

Kalın sağlıcakla.

## Kaynaklar

- [https://drafts.csswg.org/css-backgrounds-3/#background-position](https://drafts.csswg.org/css-backgrounds-3/#background-position)
- [http://caniuse.com/#feat=css-background-offsets](http://caniuse.com/#feat=css-background-offsets)
- [https://css-tricks.com/almanac/properties/b/background-position/](https://css-tricks.com/almanac/properties/b/background-position/)
- [http://stackoverflow.com/a/16528840/296373](http://stackoverflow.com/a/16528840/296373)

[firefox]: http://fatihhayrioglu.com//images/ff.png
[chrome]: http://fatihhayrioglu.com//images/ch.png
[explorer]: http://fatihhayrioglu.com//images/ie.png
[msafari]:http://fatihhayrioglu.com//images/sm.png
[android]:http://fatihhayrioglu.com//images/an.png