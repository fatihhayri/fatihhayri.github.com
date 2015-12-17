---
layout: post
title: jquery-ui'ın bower ile yüklenmesi
Date: 2015-12-17 08:40
Category: jquery
tags: javascript jquery jqueryui bower
---

![enter image description here](http://fatihhayrioglu.com/images/jqueryui-bower.jpg)
{: .resimler-sagda}

jquery'nin gelişmiş arayüz elemanları kütüphanesi jquery-ui yüksek boyutuna rağmen tercih edilen bir kütüphanedir. Ben yüksek boyutundan dolayı kullanmasam da bazen ihtiyacımı en iyi gören kütüphane olduğunda tercih ederim. 

Kullanacağımız arayüz elemanına özel Jquery-ui'ı indirebiliyoruz. [jQuery-ui indirme](http://jqueryui.com/download/) sayfasında gerekli elemanları seçip indir dediğimizde jquery-ui çekirdek kodu ve kullanılan elmanların javascriptlerini bize sunuyor. Buraya kadar her şey güzel. 

Bu makaleyi yazmama sebep olan durum ise yeni arayüz geliştirme ortamlarında yoğun olarak kullanılan [bower](http://fatihhayrioglu.com/arayuz-gelistiriciler-icin-paket-yonetimi-bower/) ile jquery-ui'ın kullanım kısmı. Tüm kütüphaneyi ekleyeceksek kolay. 

{% highlight html %}
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/jquery-ui/jquery-ui.min.js"></script>
<script>
    $( "#projects" ).accordion();
</script>
{% endhighlight %}

adresini kodunuzun ilgili kısmına eklemeniz yeterli. 

jquery-ui'ın tüm elemanlarını değilde sadece bir veya iki tanesini kullanmak istediğimizde ne yapmalıyız? 
Klasik yöntemde indirme sayfasında ilgili elemanları seçip indir dememiz yeterli. 

Peki bower ile eklerken nasıl oluyor?

Mesela sadece sıralama işi için kullanacağımız dosyaları yüklemek istediğimizde ne yapmalıyız. 

Aşağıdaki gibi bir yol izlemek gerekiyor çözüm için.

{% highlight html %}
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/jquery-ui/ui/core.js"></script>
<script src="bower_components/jquery-ui/ui/mouse.js"></script>
<script src="bower_components/jquery-ui/ui/widget.js"></script>
<script src="bower_components/jquery-ui/ui/sortable.js"></script>
<script>
    $( "#projects" ).accordion();
</script>
{% endhighlight %}

İstediğiniz elemanı eklerken hangi çekirdek koda ihtiyacımız olduğunu nasıl anlayacağız. 

**bower_components/jquery-ui/ui/** klasörü içindeki eklemek istediğiniz elemanın ilgili dosyasını açın. Örneğin sıralama ( sorting ) için **sortable.js**

{% highlight javascript %}
(function( factory ) {
if ( typeof define === "function" && define.amd ) {

	// AMD. Register as an anonymous module.
	define([
			"jquery",
			"./core",
			"./mouse",
			"./widget"
		], factory );
....
{% endhighlight %}

Yukarıdaki kod kısmında ihtiyacı olan çekirdek eleman listesi var. Bunu kullanacağız.

Aynı şekilde tüm elemanlara uygulanabilir.

## Kaynak

 - [https://learn.jquery.com/jquery-ui/environments/bower/](https://learn.jquery.com/jquery-ui/environments/bower/)