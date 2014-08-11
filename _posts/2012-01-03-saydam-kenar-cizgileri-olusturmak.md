---
layout: post
title: Saydam Kenar Çizgileri Oluşturmak
Date: 2012-01-03 00:01
Category: CSS
tags: css3, saydam köşeler
---

İlk olarak Facebook’un popup ve lightbox olarak uyguladığı, en azından
benim orada gördüğüm bir uygulama idi.

![][100]

Benzer bir uygulamayı yapmak için kodları yazdım. Daha önce bahsettiğim
[rgba tanımı][] ile bu iş çok basit olacaktı.

{% highlight css %}
 #popup{
	position: absolute;
	top: 90px;
	left: 40%;
	border: 10px solid rgba(0,0,0, 0.5);
	text-align: center;
	font-size: 24px;
	background-color: #FFFFFF;
	width: 350px;
	padding: 50px 0;
	border-radius: 10px;
	z-index: 100;
}
{% endhighlight %}

Ancak aşağıdaki gibi bir görüntü elde ettim.
![][1]

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/UYJWH/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Çözümü biraz araştırdım ancak pek bir şey bulamadım derken css-tricks’in
çözümü bana ilaç gibi geldi. Çözüm [background-clip özelliği][] tanımı
ile sağlanıyor.

{% highlight css %}
#popup{
	position: absolute;
	top: 90px;
	left: 40%;
	border: 10px solid rgba(0,0,0, 0.5);
	text-align: center;
	font-size: 24px;
	background-color: #FFFFFF;
	width: 350px;
	padding: 50px 0;
	border-radius: 10px;
	z-index: 100;
	moz-background-clip: padding;
	webkit-background-clip: padding;
	background-clip: padding-box;
}
{% endhighlight %}

![][2]

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/qjmyS/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Kaynak

-   [http://css-tricks.com/transparent-borders-with-background-clip/][]

  [100]: https://lh5.googleusercontent.com/_SHFSSO6P4rp8S4nZY3vxCmgDN6E4T4s388AlMh0qsEPBkUtJTheYUlsBJ6scDYACwDYDlM7FOieyXgENGEmWzpUohoMOcsXmASOjoTHB5Jub4ojri0
  [rgba tanımı]: http://www.fatihhayrioglu.com/css3-rgba-renk-tanimi/
  [1]: https://lh4.googleusercontent.com/HG1aPLVyrPkO-QDocagwVvy3t2Ib1jSb8P8LG9TYrNOXo7QEQBayw6Bk8BlztGYU2Cd5CnBV7eYWR8GT0bXk-E6bAZ_Jh8OyzHGEbaOeQPSpO9yvYYs
  [background-clip özelliği]: http://www.fatihhayrioglu.com/css3-background-origin-ve-background-clip-ozellikleri/
  [2]: https://lh5.googleusercontent.com/A5kRKORp2QXmurGBD_WaoXQl_V0P6Fi3Ojm1JhB3cDVLfIvjTApd8K-VjxIbP8cQ-rQ47kPfj9gimC6IbudkTi7CITtaTGo4Lf2Fy4aybKvGmYXZBnU
  [http://css-tricks.com/transparent-borders-with-background-clip/]: http://css-tricks.com/transparent-borders-with-background-clip/
