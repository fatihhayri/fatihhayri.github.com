---
layout: post
title: Sass mı SCSS mi
Date: 2015-09-03 12:18
Category: css
tags: sass css-önişlemcileri uzantı-seçimi
---

Sass ile kod yazmaya başlarken ikileme düşüren bir sorun. Sass mı kullansam SCSS  ( Sassy CSS - Sass'lı CSS ) mı kullansam tercihidir. Sass ilk kodlanmaya başladığında [Haml](http://haml.info/) ile birlikte çıktığı için söz dizimi benzer şekilde uygulanmış ve uzantıları .sass olarak üretilmeye başlanmış. Sonra Sass 3 ile birlikte SCSS kullanılmaya başlanmış. Şu an her ikisine de destek vermektedir. Bir tercih imkanı vermesi güzel ama yeni başlayanlar için bir kafa karışıklığına neden olması da dezavantaj.

SCSS CSS3'ün gelişmiş bir kullanımı olarak sunulmakatadır. Ayrıca SCSS'nin için CSS kodlarını direk ekleme imkanı da var.

Örnekle aradaki farklı inceleyelim.

Sass

{% highlight sass %}
// Variable
$primary-color: #FFFFFF

// Mixin
=border-radius($radius)
    -webkit-border-radius: $radius
    -moz-border-radius: $radius
    border-radius= $radius

.my-element
    $color: primary-color
    width: 100%
    overflow: hidden

.my-other-element
    +border-radius(5px)
{% endhighlight %}

SCSS

{% highlight scss %}
// Variable
$primary-color: #FFFFFF;

// Mixin
@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
}

.my-element {
    color: $primary-color;
    width: 100%;
    overflow: hidden;
}

.my-other-element {
    @include border-radius(5px);
}
{% endhighlight %}


Kod sonrasında iki tercih arasındaki artılar sıralarsak;

**Sass'ın artıları**

 - Kısa ve kolay sözdizimi
 - Noktalı virgül, süslü parantez kullanılmıyor; @mixin, @include yerine = ve + kullanılıyor.
 - Daha temiz bir görünüm
 - Blokların seviyelerini daha hızlı düzenleme imkanı

**SCSS artıları**

 - CSS ile tam uyumluk
 - CSS'e yakın sözdizimi. CSS'den daha hızlı geçiş imkanı
 - Daha düzenli kullanım

[sasstoscss](http://www.sasstoscss.com/) gibi çevrimiçi araçlar sayesinde iki seçenek arasında çevirim yapmak kolay. Bence siz hangisinde rahat ediyorsanız onu tercih edin. Ben Stylus'tan geçtiğim için .sass daha kullanışlı geliyor bana. 

{% highlight bash %}
Error: Invalid CSS after "float: left": expected ";", was ".about {"
on line 2 of sass\example.scss
{% endhighlight %}

Gibi bir noktalı virgülü (;) unuttum diye hata almak istemiyorum. Bu arada ekip olarak SCSS kullanıyoruz. Ekibi ikna edebilirsen Sass'a geçeceğiz. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better)
 - [http://www.sitepoint.com/whats-difference-sass-scss/](http://www.sitepoint.com/whats-difference-sass-scss/)
 - [http://sass-lang.com/documentation/](http://sass-lang.com/documentation/)
 - [http://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass](http://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass)
 - [http://stackoverflow.com/questions/5745316/why-use-sass-not-scss](http://stackoverflow.com/questions/5745316/why-use-sass-not-scss)
 - [https://www.youtube.com/watch?v=-Z3qznaE9vc](https://www.youtube.com/watch?v=-Z3qznaE9vc)
 - [https://responsivedesign.is/articles/difference-between-sass-and-scss](https://responsivedesign.is/articles/difference-between-sass-and-scss)
 - [http://www.sasstoscss.com/](http://www.sasstoscss.com/)
 - [http://designshack.net/articles/css/sass-vs-stylus-who-wins-the-minimal-syntax-battle/](http://designshack.net/articles/css/sass-vs-stylus-who-wins-the-minimal-syntax-battle/)
 - https://www.makerscabin.com/web/sass/learn/syntax