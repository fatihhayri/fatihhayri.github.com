---
layout: post
title: ES6 ile DOM'dan bir eleman silmek
description: ES6 ile DOM'dan bir eleman silmek için remove fonksiyonu kullanmak
lang: tr_TR
Date: 2018-05-15 11:06
Category: Javascript
tags: [es6, remove, sil]
image:
  feature: es6.jpeg
---

zingat.com'da IE11 desteğini sonlandırdıktan sonra ES6'in yeniliklerinden yararlanıyoruz.

jQuery ile basit bir şekilde yaptığımız DOM'dan eleman silme işini aynı kolaylıkla ES6 ile yapıyoruz.

jQuery ile 

{% highlight javascript %}
$('.deneme').remove();
{% endhighlight %}
	
ES6 ile 

{% highlight javascript %}
let eleman = document.querySelector('#bosBeles');

eleman.remove();
{% endhighlight %}
	
Süper. 

Peki siz hala IE11 destekliyorsanız size de eskiye destek için [remove polyfills](https://github.com/cferdinandi/vanilla-javascript-cheat-sheet/blob/master/polyfills/remove.js)'ini öneriyorum.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

Kalın sağlıcakla.