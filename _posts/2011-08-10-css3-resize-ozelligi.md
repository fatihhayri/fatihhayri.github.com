---
layout: post
title: CSS3 resize özelliği
Date: 2011-08-10 13:18
Category: CSS
tags: boyut değiştirme, css3, resize
---

resize özelliği kullanıcıya elementin boyutlarını ayarlama imkanı
vermemizi sağlar. Kullanıcı bu elemanın boyutunu istediği gibi
değiştirme imkanına kavuşur

**Yapısı:** resize: <deger\>\\
**Aldığı Değerler:** both | horizontal | vertical | none | inherit\\
**Başlangıç Değeri:** none\\
**Uygulanabilen Elementler:** block-level ve replaced elementler, tablo
hücreleri ve inline block elementler\\
**Kalıtsallık:** yok
{: .cssozelliktanimi}

**both:** Her iki yöne boyutlandırmaya izin verir.
**horizontal:** yatayda boyutlandırmaya izin verir.
**vertical:** dikeyde boyutlandırmaya izin verir.
**none:** boyutlandırma seçeneğini kaldırır
**inherit:** kalıtsal olarak bu değeri üst elementten alır.

{% highlight css %}
div{
	overflow:auto; /* bu tanim gerekli */
	resize:both;
}
{% endhighlight %}

overflow değeri scroll, auto veya hidden değerlerinde etki ederken
overflow: visible tanımında ise etki yapmaz.

Bu özellik Chrome ve Safaride textarea alanları için otomatik
gelmektedir. Tarayıcı bu eleman için bu değeri otomatik uygulamaktadır.
Daha önce ipucu olarak [yazdığım gibi][] bu otomatik tanımı css ile
kaldırabiliyoruz.

Bir örnek yapalım

{% highlight css %}
.icerik{
    box-shadow: rgb(136, 136, 136) 5px 5px 5px;
    border-radius: 5px;
    resize: both;
    overflow: auto;
    border: 1px solid #dedede;
    padding:10px;
    width: 300px;
    height: 200px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/aDnP6/3/embedded/result,css,html"></iframe>

Sadece bir yöne boyutlandırabiliyoruz

{% highlight css %}
.siir{
    width: 170px;
    height: 200px;
    resize: vertical;
    overflow: hidden;
    position: relative;
    padding: 0 25px;
    border: 1px solid #DDD;
    font-family: georgia, serif;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/k2wHc/2/embedded/result,css,html"></iframe>

min-height ve min-width değerleri ile boyutlandırmanın minimum
değerlerini belirleyebiliyoruz. Anı şekilde max-height ve max-width
değerleri ile de maksimum değerleri belirlenebilir. Bu özelliklerle
kullanıcının sayfa görünümünü bozmasını engelleyebiliriz.

{% highlight css %}
.siir{
    width: 170px;
    height: 200px;
    resize: vertical;
    overflow: hidden;
    position: relative;
    padding: 0 25px;
    border: 1px solid #DDD;
    font-family: georgia, serif;
    max-height: 650px;
    min-height: 200px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/yLZDQ/embedded/result,css,html"></iframe>

Resimler için güzel bir uygulama olabilir.

{% highlight css %}
.vasak{
	width: 200px;
	margin: 0 10px;
	height: 150px;
	resize: both;
	overflow: hidden;
	position: relative;
	padding: 15px;
	border: 1px solid #DDD;
}

.vasak img{
	width:100%;
	height:auto;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/Xk3Gr/10/embedded/result,css,html"></iframe>

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**5.0+**|*desteklemiyor*|**4.0+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|*desteklemiyor*|*desteklemiyor*|*desteklemiyor*|
{: .tarayici-uyumi}


resize özelliği W3C Basic User Interface Module ile önerilen bir
özelliğidir. Tarayıcıların destekleme durumuna göre ileride
standartlaşıp standartlaşmayacağı belirlenecek bir özellik olarak
görünse de Firefox desteği standartlaşması daha olasıdır.

## Kaynaklar

-   [http://www.css3.info/preview/resize/][]
-   [http://www.impressivewebs.com/css3-resize/][] (detaylı ve karşıt)
-   [http://www.w3schools.com/cssref/css3_pr_resize.asp][]
-   [http://www.w3.org/TR/css3-ui/][]
-   [http://www.cssplay.co.uk/menu/resize.html][]
-   [https://developer.mozilla.org/en/CSS/resize][]
-   [http://www.yousaytoo.com/the-css3-resize-property/784883][]
-   [http://robertnyman.com/css3/][]

  [yazdığım gibi]: http://www.fatihhayrioglu.com/css-ipucu-27-chrome-ve-safaride-textarea-genisletme-islevini-kaldirma/
  [http://www.css3.info/preview/resize/]: http://www.css3.info/preview/resize/
  [http://www.impressivewebs.com/css3-resize/]: http://www.impressivewebs.com/css3-resize/
  [http://www.w3schools.com/cssref/css3_pr_resize.asp]: http://www.w3schools.com/cssref/css3_pr_resize.asp
  [http://www.w3.org/TR/css3-ui/]: http://www.w3.org/TR/css3-ui/
  [http://www.cssplay.co.uk/menu/resize.html]: http://www.cssplay.co.uk/menu/resize.html
  [https://developer.mozilla.org/en/CSS/resize]: https://developer.mozilla.org/en/CSS/resize
  [http://www.yousaytoo.com/the-css3-resize-property/784883]: http://www.yousaytoo.com/the-css3-resize-property/784883
  [http://robertnyman.com/css3/]: http://robertnyman.com/css3/


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
