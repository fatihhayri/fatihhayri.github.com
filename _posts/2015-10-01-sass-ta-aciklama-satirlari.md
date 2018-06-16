---
layout: post
title: Sass'ta açıklama satırları
Date: 2015-10-01 10:03
Category: css
tags: [sass css-önişlemcileri açıklama-satırı]
---

Açıklama satırlarının önemini tekrar anlatmaya gerek yok. Bir çok zaman unuttuğumuz veya iki kelime ile geçiştirdiğimiz açıklama satırları takım çalışmaları ve uzun süreli projelerin olmazsa olmazı. Yani tüm projelerin :)

Sass [CSS'in açıklama satırı](https://fatihhayrioglu.com/css-yorum-kodu-ekleme/) kullanımını aynen destekler.

{% highlight sass %}
/* Programcının kodu 
 * okuyup anlayamacağı 
 * noktalarını yazalım */
.yildiz
    display: block
{% endhighlight %}

Sass'ın CSS'te olmayan tek satırlık açıklama satırı desteği de vardır. Javascript'ten alışık olduğumuz iki bölme işareti ( // ) ile kullanılır.

{% highlight sass %}
/* Programcının kodu 
 * okuyup anlayamacağı 
 * noktalarını yazalım */
.yildiz
    // Her şeyi yazalım
    display:block
{% endhighlight %}
    
Burada şöyle bir durum var. Tek satırlık açıklama satırları CSS tarafından desteklenmediği için bu açıklama satırları derlenince silinecektir. Yukarıdaki kodun CSS çıktısı

{% highlight css %}
/* Programcının kodu
 * okuyup anlayamacağı 
 * noktalarını yazalım */
.yildiz {
  display: block;
}
{% endhighlight %}

şeklinde olacaktır. CSS standardı olan açıklama satırları dururken tek satırlık açıklama satırı silinmiştir. Bu genelde istenen bir özelliktir. 

Ayrıca sass'ınızı sıkıştırıyorsanız açıklama satırlarınız sıkıştırma sırasında silinir. Silinmemesini istiyorsanız açıklama satırınız **/*!** ile başlamalıdır.

{% highlight sass %}
/*! Programcının kodu
 * okuyup anlayamacağı 
 * noktalarını yazalım */
body
  background-color: #9ab1c7
{% endhighlight %}

Bu kodu derlediğimizde 

{% highlight bash %}
sass --watch sass/deneme.sass:css/deneme.css --style compressed
{% endhighlight %}

CSS kod çıktısı

{% highlight css %}
/*! Programcının kodu
 * okuyup anlayamacağı 
 * noktalarını yazalım */ body{background-color:#9ab1c7}.deneme{width:450px;height:250px;display:block;position:relative;top:20px}.deneme h1{color:red}
/*# sourceMappingURL=deneme.css.map */
{% endhighlight %}

şeklinde olacaktır.

Sass'ın bize kazandırdığı değişken tanımlarını açıklama satırı içinde kullabiliyoruz. 

{% highlight sass %}
$developer: 'Fatih Hayrioğlu'
$version : '1.0.1'

/* Bu site #{$developer} tarafından yazılmıştır. Sürümü #{$version}. */
{% endhighlight %}

CSS çıktısı

{% highlight css %}
/* Bu site Fatih Hayrioğlu tarafından yazılmıştır. Sürümü 1.0.1. */
body {
...
{% endhighlight %}

şeklinde olacaktır.

## Açıklama satırı ile düzenli kod blokları oluşturmak

Açıklama satırlarını belirli tiplere ayırarak kodlarımızı daha düzenli hale getirebiliriz. Bootstrap 4. sürümündeki örnekleri incelersek.

[Giriş açıklama kodu.](https://github.com/twbs/bootstrap/blob/v4-dev/scss/bootstrap.scss) 

{% highlight sass %}
/*!
 * Bootstrap v4.0.0-alpha (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
{% endhighlight %}

Tanımın başında **/*!** ile Sass derlemesinde yorumların silinmemesi için eklenmiş.

Genel dosya yapısını incelediğimizde örneğin [_variables.scss](https://raw.githubusercontent.com/twbs/bootstrap/v4-dev/scss/_variables.scss) dosyasına bakalım.

**Ana başlıklar**

{% highlight sass %}
// Variables
//
// Copy settings from this file into the provided `_custom.scss` to override
// the Bootstrap defaults without modifying key, versioned files.
...
...
// Buttons
//
// For each of Bootstrap's buttons, define text, background and border color.

$btn-padding-x: 1rem !default
$btn-padding-y: .375rem !default
$btn-font-weight: normal !default
{% endhighlight %}
    
Yukarıdaki standarda baktığımızda ana başlıklar bir boşluk sonrasında bir açıklama alanı içeriyor.

**İçindekiler tablosu**

{% highlight sass %}
// Table of Contents
//
// Colors
// Options
// Spacing
// Body
// Links
// Grid breakpoints
// Grid containers
// Grid columns
// Fonts
// Components
{% endhighlight %}

İçeriği büyük dosyalarda içerik tablosu kullanmak mantıklı.

**Standart açıklama satırı**

Kod aralarındaki açıklamalar için tek satırlık açıklama satırı eklenir.

{% highlight sass %}
// Pixel value used to responsively scale all typography. Applied to the `<html>` element.
$font-size-root: 16px !default
{% endhighlight %}

Bootstrap güzel bir örnek ancak başka örneklerde mevcut onlarıda inceleyip benzer bir yapıyı kendi projelermize entegre edebiliriz.

Kalın sağlıcakla.

## Kaynaklar

 - [http://www.yunusbassahan.com/blog/sass/sass-yorum-satirlari.html](http://www.yunusbassahan.com/blog/sass/sass-yorum-satirlari.html)
 - [http://www.sitepoint.com/css-sass-styleguide/](http://www.sitepoint.com/css-sass-styleguide/)
 - [http://createstopbecreative.com/2015/05/12/sass-practically-applying-comments/](http://createstopbecreative.com/2015/05/12/sass-practically-applying-comments/)
 - [https://github.com/twbs/bootstrap/tree/v4-dev](https://github.com/twbs/bootstrap/tree/v4-dev)