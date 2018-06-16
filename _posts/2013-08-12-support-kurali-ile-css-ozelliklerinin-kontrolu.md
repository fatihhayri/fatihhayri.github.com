---
layout: post
title: support kuralı ile CSS özelliklerinin kontrolü
Date: 2013-08-12 18:00
Category: CSS
tags: [support-kuralı kontrol css]
---

Bir özelliğin tarayıcılar tarafından desteklenip desteklenmediğini genelde javascript ile kontrol ediyoruz. @support kuralı sayesinde artık CSS ile bu kontrolü yapabiliyoruz.

@media kuralına benzer basit bir kullanımı var. Farklı tarayıcılar için kod yazmaya ihtiyaç duyan bizler için çok süper bir özellik. [Modernizr](http://modernizr.com/)’ın javascript ile yaptığını css ile yapacağız artık.

## Basit Yapısı

{% highlight css %}
@supports(ozellik:deger) {
    /* stilleri buraya yaz */
}
{% endhighlight %}

Bir örnek yapacak olursak;

{% highlight css %}
@supports (display:flex) {
    section { display: flex }
}
{% endhighlight %}

Tarayıcı eğer display:flex’i destekliyorsa bu blok css’e eklenecektir.

**@media** kuralı gibi **and, or** ve **not** operatörleri kullanılabilmektedir.

## ve(and) operatörü

Birden fazla koşula bağlı sorgular oluşturabiliyoruz.

{% highlight css %}
@supports (display: table-cell) and (display: list-item){
    ...
}
{% endhighlight %}

## veya(or) operatörü

Veya operatörü yardımı ile iki koşul öne sürüp birisinin gerçekleşmesi durumu için css tanımları yapılabiliyor. Örneğin farklı tarayıcı önekleri için;

{% highlight css %}
@supports (display: -webkit-flex) or
           (display: -moz-flex) or
           (display: flex) {
     /* stiller buraya */
}
{% endhighlight %}

## Olumsuzluk(not) operatörü

Desteklemiyorsa sorgusu için not operatörünü kullanabiliyoruz.

{% highlight css %}
@supports not (display: flex) {
    div { float: left; } /* alternatif stil */
}
{% endhighlight %}

## Tarayıcı Desteği

Yeni nesil tarayıcılar desteğini sunarken İnternet Explorer’ın ve mobil tarafının eksik kalması işin kötü kısmı. Asıl İnternet Explorer için gerekli bir özellik aslında :D


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**28**|*desteklemiyor*|**22**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**4.4**|*desteklemiyor*|**35.0**|
{: .tarayici-uyumi}

## Kaynaklar

* [http://www.w3.org/TR/css3-conditional/#at-supports](http://www.w3.org/TR/css3-conditional/#at-supports)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)
* [https://dev.opera.com/articles/native-css-feature-detection/](https://dev.opera.com/articles/native-css-feature-detection/)
* [http://caniuse.com/#search=@support](http://caniuse.com/#search=@support)
* [http://davidwalsh.name/css-supports](http://davidwalsh.name/css-supports)
* [http://www.sitepoint.com/supports-native-css-feature-detection/](http://www.sitepoint.com/supports-native-css-feature-detection/)
* [http://www.inserthtml.com/2012/09/css3-conditional-statements/](http://www.inserthtml.com/2012/09/css3-conditional-statements/)
* http://docs.webplatform.org/wiki/css/atrules/@supports

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
