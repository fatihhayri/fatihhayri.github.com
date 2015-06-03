---
layout: post
title: Angularjs İle Şablonda Üçlü Operatör (ternary operators) Kullanımı
Date: 2015-06-03 16:00
Category: angularjs
tags: angularjs üçlü-operatörler 
---

Angularjs'in şablonlar (HTML) üzerindeki hakimiyetini seviyorum. Basit bir konu ama yazmakta yarar var. 

Javascript ve diğer dillerden aşina olduğumuz üçlü operatörleri AngularJs ile şablonlarda kullanabiliyoruz. 

Kullanımı çok basit.

{% highlight javascript %}
{% raw %}
{{ Koşul ? "koşul doğru ise" : "koşul yanlış ise" }}
{% endraw %}
{% endhighlight %}

Bunu html üzerinde kullanmak çok güzel oluyor. Örneğin bir resim alanımız var ve bu resim alanında resim olması halinde resim görünsün ama resim yoksa da bizim standart tasarladığımız resim yok tasarımımız görünsün dediğimiz alanlarda.

{% highlight javascript %}
{% raw %}
<img ng-src="{{resminKaynagi && 'resim.png' || 'resim-yok.png'}}"/>
{% endraw %}
{% endhighlight %}

Kodu basit ve hızlı bir çözüm oluşturuyor.

Kalın sağlıcakla. 

## Kaynaklar

 - [https://github.com/angular/angular.js/commit/6798fec4390a72b7943a49505f8a245b6016c84b](https://github.com/angular/angular.js/commit/6798fec4390a72b7943a49505f8a245b6016c84b)
 - [http://codybonney.com/conditionally-show-content-in-angularjs-templates-using-ternary-operators/](http://codybonney.com/conditionally-show-content-in-angularjs-templates-using-ternary-operators/)
 - [http://stackoverflow.com/a/13999837/296373](http://stackoverflow.com/a/13999837/296373)