---
layout: post
title: display:inline elemanlar arasındaki doğal boşluklar
Date: 2010-07-14 22:14
Category: CSS, XHTML
tags: boşluk, display:inline, display:inline-block, menü
---

Daha önce gözüme çarpmamış olmaması ilginç geldi. Belki çarpmıştırda ben
es geçmişimdir. Durumu şöyle açıklayayım. Basit bir menü oluşturmak
istedim.

{% highlight html %}
<ul>
  <li>deneme</li>
  <li>olarak</li>
  <li>bir örnek </li>
</ul>
{% endhighlight %}

Yatay bir menü olacağı için

{% highlight css %}
ul li{
	display:inline;
}
{% endhighlight %}

eklemesini yaptım, daha sonra da padding değerleri ekleyince fark ortaya
çıktı.

{% highlight css %}
ul li{
	padding:0 12px;
	background-color:#999
}
{% endhighlight %}

İşin aslı İnternet Explorer 6 ve 7’de istediğim gibi olurken yeni nesil
tarayıcılarda arada fazladan boşluklar atanmış gördüm. margin:0 değeri
atadım ama olmadı biraz araştırınca gördüm ki display:inline
elemanlar(display:inline-block’ta da oluyor) arasında kod kısmında
boşluk varsa bu boşluklar yorumlanan sayfada da görünüyor.

![][100]

Aradaki boşlukları kaldırmak için bir kaç yöntem var. Yatay menü
oluşturmak için diğer bir yöntem olan float yöntemini denemek bunlardan
biri

{% highlight css %}
ul li{
	float:left
}
{% endhighlight %}

Diğer bir çözüm yolu ise aradaki boşlukları kaldırmak.

{% highlight html %}
<ul>
	<li>deneme</li><li>olarak</li><li>bir örnek </li>
</ul>
{% endhighlight %}

  [100]: https://lh4.googleusercontent.com/pEfwOl1XzeOmHs7SKQmlHJ4bY4pKA47H_mfon9utneJmtdtYIHjs-DNtAKzVYBZ1ngfV27w1Xty-BLB7bwIi3CyOP5mUsiRznL08IYJHKqK9a762
