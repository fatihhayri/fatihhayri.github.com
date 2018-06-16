---
layout: post
title: İnternet Explorer&#039;da Renk Geçişi Sorunu ve Çözümü
Date: 2012-05-16 10:18
Category: CSS, XHTML
tags: [hasLayout, ie, problem, renk geçişi, sorun, zoom]
---

[CSS3 ile renk geçişi hakkında yazdığımız][] makalede İnternet Explorer
içinde çözüm üretmiştik. Uygulamada bazı durumlarda renk geçişinin
İnternet Explorer’larda çalışmadığını gördüm.

Biraz araştırınca bu sorunun [hasLayout’][]tan kaynaklanan bir sorun
olduğunu gördüm.

CSS3 ile renk geçişi için [http://www.colorzilla.com/gradient-editor/][]
sitesini kullanıyorum.

Sorunu görmek için aşağıdaki gibi bir örnek yaptım;

{% highlight css %}
#test{
	padding:10px;
	background: #ffffff; /* Old browsers */
	background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#e5e5e5)); /* Chrome,Safari4+*/
	background: -webkit-linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,#ffffff 0%,#e5e5e5 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* IE10+ */
	background: linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0 ); /* IE6-9 */
}
{% endhighlight %}
<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/2gKwm/4/embedded/css,result,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

ie7’de(6’yı kâle bile almıyorum :D) renk geçişinin uygulanmadığını görüyoruz.

![][100]

Çözüm ise bir önceki [hasLayout][hasLayout’] makalesinde olduğu gibi sadece zoom:1 eklemek.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/Q2z89/embedded/css,result,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Ben tüm renk geçişi kodlarımın sonuna unutmazsam zoom:1 ekliyorum sizede öneririm.

## Kaynaklar

-   [http://stackoverflow.com/questions/7257170/background-gradient-ie7-css-problem][]
-   [http://stackoverflow.com/questions/213750/gradient-colors-in-internet-explorer][]
-   [http://www.fatihhayrioglu.com/internet-explorer-haslayout-kabulu-ve-sorunlari/][hasLayout’]

  [CSS3 ile renk geçişi hakkında yazdığımız]: http://www.fatihhayrioglu.com/css-renk-gecisleri-gradients/
  [hasLayout’]: http://www.fatihhayrioglu.com/internet-explorer-haslayout-kabulu-ve-sorunlari/
  [http://www.colorzilla.com/gradient-editor/]: http://www.colorzilla.com/gradient-editor/
  [100]: https://lh6.googleusercontent.com/2lOKPVgbBkBb_8z4TjqvsEfttZ-yDRJnYrBCsjrG_zuxoF49BWbqDiBerJSzAPm74ZR7ORDg-SJqn6T0JgM6y7TRFX0Dov4LKLolJb5xmH4VwRR9Qek
  [http://stackoverflow.com/questions/7257170/background-gradient-ie7-css-problem]: http://stackoverflow.com/questions/7257170/background-gradient-ie7-css-problem
  [http://stackoverflow.com/questions/213750/gradient-colors-in-internet-explorer]: http://stackoverflow.com/questions/213750/gradient-colors-in-internet-explorer
