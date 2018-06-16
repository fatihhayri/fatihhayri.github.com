---
layout: post
title: HTML5 download özniteliği
Date: 2014-12-12 18:05
Category: html
tags: [html5 download ]
---

HTML'de bir dokümanı kullanıcıya indirtmek için bir bağlantı verdiğimizde parantez içinde "sağ tılayın ve çıkan menüden farklı kaydet'e basın" ibaresini yazardık. Bu konuda farklı çözümler var; tarayıcıya eklenti kuranlar, .htcacces'den ayar yapanlar filan. Tabi kullanıcılar için çok iyi bir deneyim değil ve kod yazanlar için ayrı bir uğraş gerektiren çözümler. W3C bunu fark etmiş olmalı ki bize basit ve güzel bir çözüm üretmiş. 

## HTML5 download özniteliği

Kullanımı çok basit;

{% highlight html %}
<a href="dersin_dokumani.pdf" download>Dersi indir</a>
{% endhighlight %}

Yukarıda görüldüğü gibi gayet basit bir çözüm var.

Ayrıca bu özniteliğe bir değer atayıp indirilen dosya ismini belirleyebiliyoruz.

{% highlight html %}
<a href="dersin_dokumani.pdf" download="html5">Dokümanı indir</a>
{% endhighlight %}

Dinamik üretilen bağlantılar için güzel bir çözüm bence;

{% highlight html %}
<a href="rapor_20141223.pdf" download="rapor">Raporu indir</a>
{% endhighlight %}

Ayrıca inidirilecek dokümanın formatını değiştirebiliyoruz.

{% highlight html %}
<a href="https://fatihhayrioglu.com/last-child-secisi/index.html" download="last_child.txt">last-child seçicisi makalesini indir(txt)</a>
{% endhighlight %}

Örnek: <a href="https://fatihhayrioglu.com/last-child-secisi/index.html" download="last_child.txt">last-child seçicisi makalesini indir(txt)</a>


> Dosya eğer bağlantı ile aynı domain değilse Firefox eski indirme alışkanlıklarına dönüyor.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**14**|**-**|**20**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**4.4**|**-**|**39**|
{: .tarayici-uyumi}


## Kaynaklar

 - [http://davidwalsh.name/download-attribute](http://davidwalsh.name/download-attribute)
 - [http://www.alsacreations.com/astuce/lire/1603-html5-attribut-download.html](http://www.alsacreations.com/astuce/lire/1603-html5-attribut-download.html)
 - [http://www.hongkiat.com/blog/html5-download-attribute/](http://www.hongkiat.com/blog/html5-download-attribute/)
 - [http://www.sitepoint.com/new-html5-attributes-hyperlinks-download-media-ping/](http://www.sitepoint.com/new-html5-attributes-hyperlinks-download-media-ping/)
 - [http://updates.html5rocks.com/2011/08/Downloading-resources-in-HTML5-a-download](http://updates.html5rocks.com/2011/08/Downloading-resources-in-HTML5-a-download)
 - [http://sixrevisions.com/html5/download-attribute/](http://sixrevisions.com/html5/download-attribute/)
 - [http://caniuse.com/#feat=download](http://caniuse.com/#feat=download)
 - [http://svarden.se/blog/2013-04-22-right-click-and-save-as/](http://svarden.se/blog/2013-04-22-right-click-and-save-as/)

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
