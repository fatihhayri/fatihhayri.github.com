---
layout: post
title: jQuery closest yerine closest() metodunu kullanalım
description: jQuery'de nkurtulma yöntemlerine devam ediyoruz. Bu sefer closest anlattık
lang: tr_TR
Date: 2018-09-29 03:06
Category: Javascript
tags: [javascript, closest, no-jquery]
image:
  feature: dogal-javascript.png
---

`closest()` metodu seçtiğimiz elemanın belirttiğimiz seçici kuralına göre en yakın olan ebeveynini (kendisi de bu kontrole dahildir) bulur ve bize döner. Eğer bulamazsa `null` değeri döner.

{% highlight html %}
<ul>
    <li>Üst Menü
        <ul>
	        <li class="urunler">
		        <a href='#' class='selected'>Ürün 1</a>
		    </li>
	        <li class="urunler">
		        <a href='#'>Ürün 2</a>
		    </li>
        </ul>
    </li>
</ul>
{% endhighlight %}

`selected` sınıfı tanımlı bir bağlatının DOM sıralamasına göre yukarıya doğru ilk `ul` elemanını yakalamak gibi bir amacımız olsun.

Bunun için `closest` öncesi şöyle bir iş yapıyorduk.

{% highlight javascript %}
const seciliEleman = document.querySelector('.selected');

seciliEleman.parentNode.parentNode.classList.add('hayde');
{% endhighlight %}

<iframe height='300' scrolling='no' title='closest öncesi' src='//codepen.io/fatihhayri/embed/preview/aRbaex/?height=300&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

`closest` sonrası ise çok basit:

{% highlight javascript %}
const seciliEleman = document.querySelector('.selected');

seciliEleman.closest('ul').classList.add('hayde');
{% endhighlight %}

<iframe height='300' scrolling='no' title='closest öncesi' src='//codepen.io/fatihhayri/embed/preview/bmGmGo/?height=300&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Eski yöntemde daha yukarılarda bir eleman yakalamak istediğimizde iş çığırından çıkıyordu.  Bazı durumlarda dinamik oluşan yerlerde yakalayacağımız elemanın hangi seviyede olduğuda belli değilse çık işin içinden. `closest` bu konuda çok büyük rahatlık getirdi.

Ebeveyn bulmanın dışında closest'ı  tıklanan elemanın belirlediğimiz seçiciyle uyumlu bir eleman veya içindeki herhangi bir eleman olup olmadığını kontrol etmek için de kullanabiliriz.

{% highlight javascript %}
if (!event.target.closest('.adamim')) return;
{% endhighlight %}

Tıkladığımız eleman `adamim` sınıflı elemansa işine devam edecektir.

jQuery'den kurtulmayı kolaylaştıran metotlardan birini daha öğrenmiş olduk. 

Tarayıcı desteği konusunda gayet iyi noktada.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="6+" %}

Eğer hala IE11 desteğini dert ediyorsanız aşağıdaki linklerde **Polyfill** kodu var.

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/API/Element/closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest){:target='_blank'}
 - [https://gomakethings.com/a-native-vanilla-javascript-way-to-get-the-closest-matching-parent-element/](https://gomakethings.com/a-native-vanilla-javascript-way-to-get-the-closest-matching-parent-element/){:target='_blank'}
 - [https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/](https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/){:target='_blank'}