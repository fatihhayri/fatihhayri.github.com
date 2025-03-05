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

```javascript
$('.deneme').remove();
```
	
ES6 ile 

```javascript
let eleman = document.querySelector('#bosBeles');

eleman.remove();
```
	
Süper. 

Peki siz hala IE11 destekliyorsanız size de eskiye destek için [remove polyfills](https://github.com/cferdinandi/vanilla-javascript-cheat-sheet/blob/master/polyfills/remove.js)'ini öneriyorum.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/childnode-remove-1741162555877.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/childnode-remove-1741162555877.png">
<img src="https://caniuse.bitsofco.de/static/v1/childnode-remove-1741162555877.jpg" alt="Data on support for the childnode-remove feature across the major browsers from caniuse.com">
</picture>

Kalın sağlıcakla.