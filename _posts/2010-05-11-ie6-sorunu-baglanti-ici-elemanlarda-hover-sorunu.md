---
layout: post
title: İE6 sorunu&#58; Bağlantı içi elemanlarda hover sorunu
Date: 2010-05-11 23:19
Category: CSS
tags: :hover, bağlantı içi, ie6, sorun
---

Yine bir ie6 sorunu ile karşı karşıyayız. Evet proje biraz dallı budaklı
olunca ie6 sorunları başa bela olmaya başladı. Normal standart site
tasarımında sorunlar belli idi, ona göre kod yazıyordum, ancak şimdi
proje normal site şablonlarından farklı olunca sorunlarda çalışmadığımız
yerleden glemeye başladı.

Gelelim sorunun ne olduğuna; sorun şudur ki zemininden resim olan
genişleyebilir alanlarda kullandığımız bir yöntem olan Sliding
Doors(aynı yöntemi [şurada da kullandım][]) yaptığım bir alanda hover
efekti vermeye çalıştığımda karşılaştığım bir sorun. Daha kolay
anlaşılmasıması ve benim içinde anlatması kolay olduğu için
kaynaklardaki bir örneği vereceğim burada size ben.

HTML kodu

{% highlight html %}
<div>
	<a href="#">foo<span>bar</span></a>
</div>
{% endhighlight %}

CSS Kodu

{% highlight css %}
span {
	display: none;
}

a:hover span {
	display: inline;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

Burada yapılan çok basit bir iştir. Bağlantı üzerine gelince span
içindeki bar yazısını gösteriyoruz. Ancak ie6'da bu sayfaya baktığımızda
bar görüntülenmeyecektir. 

**Peki çözüm nedir?**

Sorun hasLayout sorunu gibi görünsede genel hasLayout çözümleri pek işe
yaramıyor. Haslayout sorunları ie6 ve ie7 de görülür, ancak Microsoft bu
sorunu ie7 çözmüş görünüşe göre.

[friendlybit.com][] sitesindeki çözüm yolu şöyle; **a:hover** elemanına
**padding-top:0** değeri atayıp sonrada **a:hover span** seçicisinede
**padding-top:0** değeri atayınca oluyor.

{% highlight css %}
a:hover{
	padding-top:0;
}

span {
	display:none;
}

a:hover span {
	display: inline;
	padding-top:0;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

## Kaynaklar

-   http://haslayout.net/css/Sub-Hover-Bug
-   [http://friendlybit.com/css/ie6-bug-ignored-selector-hover-bug/][]


  [şurada da kullandım]: http://www.fatihhayrioglu.com/css-ile-sekmelitab-menu-yapimi/
  [tıklayınız.]: /dokumanlar/sub_hover/ie_sub_hover.html
  [friendlybit.com]: http://friendlybit.com "friendlybit.com"
  [1]: /dokumanlar/sub_hover/ie_sub_hover_coz.html
  [http://friendlybit.com/css/ie6-bug-ignored-selector-hover-bug/]: http://friendlybit.com/css/ie6-bug-ignored-selector-hover-bug/
