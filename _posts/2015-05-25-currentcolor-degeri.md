---
layout: post
title: currentColor değeri
Date: 2015-05-25 16:00
Category: css
tags: css currentColor değişken inherit
---


CSS'de değişken kullanmak şu an için mümkün değil. Eğer CSS Önişlemcilerini kullanıyorsanız o başka. **currentColor** değerini bir değişken olarak kabul edebiliriz. Tarayıcı desteğine baktığımızda tüm yeni nesil tarayıcılar destekliyor, ayrıca ie9+, gayet güzel. 

**currentColor** değeri; Mevcut elemanın **color** değerini referans alan bir değişkendir. **inherit** değerine benzerdir, **inherit** değerinin genişletilmiş kullanımı gibi düşünelim. Renk değerinin tanımlandığı her yerde( kenar çigilerinin renkleri, kutu gölgelerinde, dış hat çizgilerinde, ardalan renklerinde) kullanılır. Eleman ve alt elemanlarına uygulanır.

Kalıtsallık(inherit) değerinin geliştirilmiş halidir. Kalıtsallık tüm değerler için kullanılırken **currentColor** sadece renkler için kullanılır.

Bir iki kullanım örneği ile daha iyi anlayacağımızı düşünüyorum.

## SVG içeriğine renk tanımlama

SVG içeriğine CSS ile müdahale edebiliyoruz. Mesela bir ikon yaptık bunun rengini CSS ile değiştirebiliyoruz.

<iframe height='328' scrolling='no' src='//codepen.io/fatihhayri/embed/doOMyZ/?height=328&theme-id=13521&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

## Renk geçişinde kullanımı

Bir sitenin farklı temaları için renk tanımları yaparken renk geçişlerin de ve renk tanımların da kullanılabilir.

  background-image: linear-gradient(to bottom, currentColor, #fff);

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**9+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/currentcolor/](https://css-tricks.com/currentcolor/)
 - [http://www.quirksmode.org/css/color/currentcolor.html](http://www.quirksmode.org/css/color/currentcolor.html)
 - [http://blogs.adobe.com/dreamweaver/2015/02/extending-the-color-cascade-with-the-css-currentcolor-variable.html#.VV744lm8PRY](http://blogs.adobe.com/dreamweaver/2015/02/extending-the-color-cascade-with-the-css-currentcolor-variable.html#.VV744lm8PRY)
 - [http://osvaldas.info/keeping-css-short-with-currentcolor](http://osvaldas.info/keeping-css-short-with-currentcolor)
 - [http://ademilter.com/arayuz-gelistiriciyi-gelistiren-kodlar/](http://ademilter.com/arayuz-gelistiriciyi-gelistiren-kodlar/)
 - [http://demosthenes.info/blog/908/The-First-CSS-Variable-currentColor](http://demosthenes.info/blog/908/The-First-CSS-Variable-currentColor)
 - [http://caniuse.com/#feat=currentcolor](http://caniuse.com/#feat=currentcolor)
 - [http://codepen.io/scottkellum/pen/Fhxql/](http://codepen.io/scottkellum/pen/Fhxql/)
 - [http://la-cascade.ghost.io/la-premiere-variable-css-currentcolor/](http://la-cascade.ghost.io/la-premiere-variable-css-currentcolor/)


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png