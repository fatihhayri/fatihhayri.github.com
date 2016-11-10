---
layout: post
title: LESS ile değişkenlere değer ekleme çıkarma
Date: 2016-11-10 11:27
Category: css
tags: less, foknsiyon, yükleniyor
---

Konu kısa hemen anlatıp bitireyim. zingat.com'da CSS önişlemcisi LESS. Boostrap'den dolayı LESS tercih edilmiş. Neyse soruna gelelim. Bir css fonksiyonunu (mixin) yazmaya karar verdim. Bir hareketli yükleniyor ikonu  yapayım dedim. Herşey güzel gidiyordu ta ki değerini 24px değilde 24 olarak göndereyim dediğimde sorun ortaya çıktı.

{% highlight scss %}
.loading(24, @color-secondary, @color-primary)
{% endhighlight %}

Sonra bu değeri alıp css fonksiyonununda kullandığımda,

{% highlight scss %}
&:before,
&:after {
  font-size: @size + 'px';
  box-sizing: border-box;
  content: '';
  position: fixed;
  border-radius: 50%;
  border: solid .6em;
  animation: rotation 1s linear infinite;
}
{% endhighlight %}

ilk aklıma gelen yazım  `font-size: @size + 'px'` şekli oldu. Yok olmadı. sonra `font-size: @size+px` oda olmadı. Bide `font-size: @size+0px` denedim olmadı.

Sonra dedim niye bunu ağaya sormuyorum. stackoverflow'da aradığım ikinci sonuç beni çözüme ulaştırdı. 

**Çözüm:**

{% highlight scss %}
&:before,
&:after {
  font-size: (@size*1px);
  box-sizing: border-box;
  content: '';
  position: fixed;
  border-radius: 50%;
  border: solid .6em;
  animation: rotation 1s linear infinite;
}
{% endhighlight %}

çözüm bu `font-size: (@size*1px);` değişkeni 1px ile çarpmak. Aynı şeyi çıkarma (-1px) içinde yapabiliyoruz. 

Bu arada loading css fonksiyonunu görmek isteyenler için kod burada [https://gist.github.com/fatihhayri/baf7e0234df785d49d4b20fb3558d302](https://gist.github.com/fatihhayri/baf7e0234df785d49d4b20fb3558d302) daha geliştirilmesi gerekiyor ama neyse şimdilik bu kadar.

Kalın sağlıcakla.

## Kaynaklar
 - [http://stackoverflow.com/questions/14384803/negate-a-numerical-variable-and-add-px-to-it-in-lesscss](http://stackoverflow.com/questions/14384803/negate-a-numerical-variable-and-add-px-to-it-in-lesscss)
 - [https://github.com/raphaelfabeni/css-loader](https://github.com/raphaelfabeni/css-loader)