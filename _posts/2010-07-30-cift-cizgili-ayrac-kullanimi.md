---
layout: post
title: Çift çizgili ayraç kullanımı
Date: 2010-07-30 18:19
Category: CSS, XHTML
tags: [çift çizgi, grove, menü, rgba]
---

Genelde menülerde kullanılan bir durumdur bu. Menü öğelerini ayırmak
için araya çizilen çizgilerin iki farklı renkte olması durumunda nasıl
bir çözüm üretmek gerektiğine dair bir ipucu. Bazen resim olarak
kullanıyorum, ama bazende soldaki öğenin sağ kenar çizgisine bir renk,
sağdaki öğenin sol kenar çizgisine farklı bir renk atayarak çözüm
üretmeyi deniyorum.

{% highlight css %}
.clearfix:after{
	clear: both;
	content: ".";
	display: block;
	height: 0;
	visibility: hidden;
}

.clearfix{
	display: inline-block;
}

* html .clearfix{
	height: 1%;
}

.clearfix{
	display: block;
}

ul{
	background-color: #008bc6;
	margin: 0 auto;
	padding: 10px;
	width: 450px;
}

ul li{
	border-left: 1px solid #05a3e6;
	border-right: 1px solid #046e9b;
	float: left;
	list-style: none;
}

ul li a{
	color: #fff;
	display: block;
	font: bold 12px Arial, Helvetica, sans-serif;
	margin-right: 10px;
	padding: 0 10px;
	text-decoration: none;
}
{% endhighlight %}

HTML

{% highlight html %}
<ul class="clearfix">
   <li><a href="">Bak postacı</a></li>
    <li><a href="">geliyor</a></li>
    <li><a href="">selam veriyor</a></li>
    <li><a href="">her kes ona bakıyor</a></li>
</ul>
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

İlk öğenin solundaki kenar çizgisi ile son öğenin sağ kenar çizgisini
kaldırmak için bu öğelere sınıf atamalıyız ve bu kenar çizgilerini
sıfırlamalıyız.

{% highlight css %}
ul li.ilkOge{
	border-left:0;
}

ul li.sonOge{
	border-right:0;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

![][100]

Bu uygulamayı dikey menü olarakta yapabiliriz.

{% highlight css %}
ul{
	background-color: #008bc6;
	margin: 0 auto;
	padding: 10px;
	width: 200px;
}

ul li{
	border-bottom: 1px solid #05a3e6;
	border-top: 1px solid #046e9b;
	list-style: none;
}

ul li.ilkOge{
	border-top: 0;
}

ul li.sonOge{
	border-bottom: 0;
}

ul li a{
	color: #fff;
	display: block;
	font: bold 12px Arial, Helvetica, sans-serif;
	margin-right: 10px;
	padding: 10px 0;
	text-decoration: none;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][2]

![][3]

Bu yazıyı yazmaya karar verdiğimde "[css ile buton yapmak][]" adlı
yazının hazırlıkları da devam ediyordu, oradada butonları araştırırken
[Firefox’un sitesinde][] uyguladığı bir metot bu konuyu ilgilendiren bir
metot olduğunu gördüm. Onuda buraya yazayım. Ancak bu metot İnternet
Explorer’da çalışmayacaktır.

HTML kodu

{% highlight html %}
<a href="">
	+ <span>Çizgili buton</span>
</a>
{% endhighlight %}

CSS kodu

{% highlight css %}
a{
	background-color:#ed145b;
	padding:5px 10px;
	color:#fff;
	text-decoration:none;
	font-weight:bold;
	font-size:16px;
}

a span{
	border-left:2px groove rgba(144, 71, 95, 0.55);
	display:inline-block;
	padding-left:6px
}
{% endhighlight %}

Koda biraz açıklama getirelim. border’a verilen groove özelliği bizim
istediğimiz etkiyi yapan bir özelliktir. Bu özellik ile eklenen çizgiler
gri renklidir. Biz bu çizgiye biraz saydamlık kazandırıp zemin rengine
uyum sağlamasına yarar.

Örneği görmek için [tıklayınız.][4]

![][5]

  [tıklayınız.]: /dokumanlar/cift_cizgili_ayrac_kullanimi/cc_yatay_menuler.html
  [1]: /dokumanlar/cift_cizgili_ayrac_kullanimi/cc_yatay_menuler_2.html
  [100]: https://lh5.googleusercontent.com/3kw9YRieW_VXzEOEOqV96vRUKzMyrMD5Ov0n6065pDryNdmTfT6v7Ck17GEdG9SUwHI6KMr2kgtfpkqXctUafIbhJ3EndKnzWm9TAlRHsn1fJzvF
  [2]: /dokumanlar/cift_cizgili_ayrac_kullanimi/cc_dikey_menuler_2.html
  [3]: https://lh6.googleusercontent.com/kNhVcSKGO9UtLs9C63ZGCMCLQTz1p8Y6Uo4CxiYTXspEMvrgFj14NSpGf2qq3ZBH6Q28oD4MJZKMb0fqJBP2lngN4WsWhTlLNQeXzBk6JJ9TzGNKXw
  [css ile buton yapmak]: http://fatihhayrioglu.com/css-ile-buton-yapmak/
  [Firefox’un sitesinde]: https://addons.mozilla.org/en-US/firefox/
  [4]: /dokumanlar/cift_cizgili_ayrac_kullanimi/cc_border_grove.html
  [5]: https://lh4.googleusercontent.com/QG6mKNTajXXLlILJu0BXBTG4dGpNPJjm2s06_-XE9rbV9p5P0XKgiD05j1DCCAxEwdZo-iliMvdRkxKLWFuctdaPB1_HVX1msMaLK4PtUFoISnSB
