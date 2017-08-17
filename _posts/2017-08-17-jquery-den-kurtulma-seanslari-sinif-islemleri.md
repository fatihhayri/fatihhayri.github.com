---
layout: post
title: jQuery'den kurtulma seansları. sınıf (class) işlemleri
Date: 2017-08-17 18:37
Category: Javascript
tags: [normal js, classList, jquery]
---

jQuery'de en çok kullandığımız özelliklerinden birisi de sınıf tanımlama, silme, varlığını kontrol etme ve toggleClass.

Peki bunların normal javascript'te karşılığı var mı ve bu kadar kolay kullanabiliyor muyuz? Elbette. Sırası ile inceleyelim.

## Sınıf (class) ekleme

Seçtiğimiz elemana bir sınıf tanımlamak istediğimizde

**jQuery ile**

{% highlight javascript %}
  $el.addClass('aktif');
{% endhighlight %}

**Normal Js ile**

{% highlight javascript %}
  el.classList.add('aktif');
{% endhighlight %}

çok benzer tanımlar.

## Sınıf (class) silme

Seçtiğimiz elemana ait sınıfı silmek istediğimizde

**jQuery ile**

{% highlight javascript %}
  $el.removeClass('aktif');
{% endhighlight %}

**Normal Js ile**

{% highlight javascript %}
 el.classList.remove('aktif');
{% endhighlight %}

yine çok benzer tanımlar.

## Sınıfın varlığını kontrol edelim

Bir çok yerde seçilen eleman atanmış bir sınıfın olup olmadığını kontrol ederiz ve buna göre işlem yaparız.

**jQuery ile**

{% highlight javascript %}
 $el.hasClass('aktif');
{% endhighlight %}

**Normal Js ile**

{% highlight javascript %}
 el.classList.contains('aktif');
{% endhighlight %}

benzer kullanım.

## Sınıf geçişi (toggle)

Çok tercih edilen bir diğer sınıf işlemedir. 

**jQuery ile**

{% highlight javascript %}
 $el.toggleClass('aktif');
{% endhighlight %}

**Normal Js ile**

{% highlight javascript %}
 el.classList.toggle('aktif');
{% endhighlight %}

çok kullanışlı bu özelliğin normal js olması süper.

## Sonuç 

jQuery'den esinlenerek classList API'yi geliştirdiler. Artık aynı yetenekler normal javascript'te de var.

jQuery ile aynı kolaylıkta bir kullanım sağlayan normal js çözümlerini tercih etmek bize hız kazandıracaktır. 

IE10 ve sonrası için desteği olan bu özellikleri rahatlıkla kullanabiliriz.

<p class="ciu_embed" data-feature="classlist" data-periods="future_1,current,past_1,past_2">  <a href="http://caniuse.com/#feat=classlist">Can I Use classlist?</a> Data on support for the css-line-clamp feature across the major browsers from caniuse.com. </p>
	
## Kaynaklar

 - [https://github.com/oneuijs/You-Dont-Need-jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery)
 - [http://youmightnotneedjquery.com/](http://youmightnotneedjquery.com/)
 - [https://www.sitepoint.com/exploring-classlist-api/](https://www.sitepoint.com/exploring-classlist-api/)
 - [http://blog.teamtreehouse.com/manipulating-classes-using-classlist-api](http://blog.teamtreehouse.com/manipulating-classes-using-classlist-api)
 - [https://davidwalsh.name/classlist](https://davidwalsh.name/classlist)