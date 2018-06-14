---
layout: post
title: İlk harfi büyük(drop caps) paragraflar oluşturmak
Date: 2010-04-29 23:40
Category: CSS, Web Standartları, XHTML
tags: :first-child, :first-letter, css3, drop caps, font-face, ie6, ie7, ilk harfi büyük paragraf
---

Geçen gün Kadir Günay bana sormuştu bu konuyu benim aklımda da css ile
bir çözümü olduğu ancak ie6 ile sorunu olduğu kalmıştı. Biraz araştırdım
ie6 ile sorunu yok, var ama ufak tefek. Araştırmışken birde makale
yazayım herkes yararlansın dedim.

İlk harfi büyük paragraflar oluşturma işi aslında dergilerde sık
uygulanan bir yöntemdir. Genelde dergilerin başlangıç paragrafının ilk
harfi 2 veya daha fazla satır yüksekliğinde oluşturarak farklı ve güzel
bir görünüm kazandırırlar. Bu durumu biz css ile yapabiliyoruz. 

Biz bu görüntüyü [first-letter][] seçicisi ile elde edebiliyoruz. Hatta
bu seçicinin adı drop caps-ilk harfi büyük harf seçicisi diyede geçiyor.
Bizim için en büyük avantajı ie6 dahil tüm tarayıcıların bu özelliği
desteklemesi.

:first-letter seçicisini tanımlanabilen özellikler listesi;

-   font özellikleri
-   color özellikleri
-   background özellikleri
-   text-decoration
-   vertical-align (**float** değeri **none** ise)
-   text-transform
-   line-height
-   margin özellikleri
-   padding özellikleri
-   border özellikleri
-   float
-   text-shadow
-   clear

## İlk Denememiz

HTML kodlarımız

{% highlight html %}
<p class="introduction">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
{% endhighlight %}

CSS kodlarımız

{% highlight css %}
p{
	width:350px;
	background-color:#272722;
	padding:10px;
	color:#fff;
}

p.introduction:first-letter {
	font-size:4.2em;
	float: left;
	line-height: 1em;
	margin: 0.13em 0.13em 0.13em 0;
}
{% endhighlight %}


Örneği görmek için [tıklayınız.][]

![][100]

Firefox'da yukarıdaki görüntüyü elde ederken

![][1]

İnternet Explorer'da yukarıdaki gibi bir görüntü elde ederiz. Dikkat
ederseniz bir explorerda L harfi yukarıya daha yakın.

Sorunu gidermek için **line-height** değerini **1em** olarak atıyoruz.
Farklı line-height değerleri ile padding uygulamalarında ie 6 ve 7'de
sorun çıkıyor, line-height değerini 1 em'de tutmak mantık en azından ie
için 1em yapmak gerekiyor.

![][2]

## Fark stillerde uygulamalar yapabiliriz.

İlk harfi [font-face][] ile özel bir yazı tipi ile oluşturarak güzel bir
görüntü elde edebiliriz. Yazı tipini(PaladinFLF)
[http://www.fontsquirrel.com/fontface][] sitesinden aldım.

{% highlight css %}
@font-face {
	font-family:'PaladinFLFRegular';
	src: url('PaladinFLF.eot');
	src: local('☺'), url('PaladinFLF.ttf') format('truetype'), url('PaladinFLF.svg#webfont') format('svg');
}

p{
	width:350px;
	background-color:#272722;
	padding:10px;
	color:#fff;
}

p.introduction:first-letter {
	font: 4.2em/1em 'PaladinFLFRegular', Arial, sans-serif;
	float: left;
	margin: 0.13em 0.13em 0.13em 0;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][3]

![][4]

## İşe Biraz daha renk katalım

İlk harfin etrafına kenar çizgisi atayıp ardalan rengini değiştirelim.

{% highlight css %}
@font-face {
	font-family: 'PaladinFLFRegular';
	src: url('PaladinFLF.eot');
	src: local('☺'), url('PaladinFLF.ttf') format('truetype'), url('PaladinFLF.svg#webfont') format('svg');
}

p{
	width:350px;
	background-color:#272722;
	padding:10px;
	color:#fff;
}

p.introduction:first-letter {
	font: 4.2em/0.6em 'PaladinFLFRegular', Arial, sans-serif;
    float: left;
    margin: 0.13em 0.13em 0 0;
	border:3px solid #fff;
	padding:0.13em;
	background-color:#F30;
	line-height:1em;
}
{% endhighlight %}

HTML kodları

{% highlight html %}
<p class="introduction">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
{% endhighlight %}

Örneği görmek için [tıklayınız.][5]

![][6]

## Ardalan Resmi ile

Harfin ardalanına bir resim koyup üzerine harfi koymayı deniyorum.

{% highlight css %}
 @font-face {
	font-family: 'PaladinFLFRegular';
	src: url('PaladinFLF.eot');
	src: local('☺'), url('PaladinFLF.ttf') format('truetype'), url('PaladinFLF.svg#webfont') format('svg');
}

p{
	width:350px;
	background-color:#272722;
	padding:10px;
	color:#fff;
}

p.introduction:first-letter {
	font: 4em/1em 'PaladinFLFRegular', Arial, sans-serif;
    float: left;
    margin: 0.13em 0.13em 0 0;
	padding:0.4em 0.5em 0.4em 0.3em ;
	background-color:#F30;
	background:url(t.jpg) 0 0 no-repeat;
	text-shadow:2px 2px 2px #999
}
{% endhighlight %}


Örneği görmek için [tıklayınız.][7]

![][8]

Firefox ile yukarıdaki gibi güzel bir sonuç elde ediyoruz. Ancak
İnternet Explorer'da sorun yaşıyoruz. 

![][9]

Bu duruma çözüm üretmek için bir kaç yol var. İlki resmi direk içeriğe
ekleyip **float:left** ile sola yaslayarak çözmek 

{% highlight css %}
p{
	width:350px;
	background-color:#272722;
	padding:10px;
	color:#fff;
}

p.introduction img {
	float:left;
	margin-right:0.8em
}
{% endhighlight %}

HTML kodu

{% highlight html %}
<p class="introduction"><img src="t1.jpg" width="93" height="100" />empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Velit esse cillum dolore eu fugiat nulla pariatur</p>
{% endhighlight %}


Örneği görmek için [tıklayınız.][10]

![][11]

Diğer bir yöntem bu harfi span içine alıp background olarak
tanımlamaktır.

## CSS3 ile ekstra kod kullanmadan

Sayfamızın ilk paragrafının ilk harfine uygulama yapıyoruz.
[first-child][] seçicisi bu imkanı bize sağlar. ancak bu özelliği ie < 9 desteklemiyor.

{% highlight css %}
p:first-child:first-letter{
  font-size: 4.2em;  
  float: left;  
  line-height: 1em;  
  margin: 0.13em 0.13em 0.13em 0;
}
{% endhighlight %}


## Kaynaklar

-   [http://www.sitepoint.com/blogs/2010/04/15/a-simple-css-drop-cap/][]
-   [http://safalra.com/web-design/typography/css-drop-caps/][]
-   [http://www.learningjquery.com/2006/12/multiple-fancy-drop-caps][] (jquery ile)
-   [http://www.htmldog.com/articles/dropcaps/][]
-   [http://css-tricks.com/snippets/css/drop-caps/][]
-   [http://azizname.blogspot.com/2006/10/magazine-style-drop-caps.html][]
-   [http://dailydropcap.com/][] (günlük örnekler)
-   [http://jackosborne.co.uk/articles/pseudo-drop-caps/][]
-   [http://www.akxl.net/labs/articles/text-wrapped-drop-caps-in-css-using-the-first-letter-selector/][]
-   [http://www.users.globalnet.co.uk/~arcus/html/dropcaps.html][]

  [first-letter]: https://fatihhayrioglu.com/pseudo-siniflari-ve-pseudo-elementleri/
  [tıklayınız.]: /dokumanlar/ilk_harf_buyuk/ilk_harf_buyuk.html
  [100]: /images/drop_caps_01.gif
  [1]: /images/drop_caps_02.gif
  [2]: /images/drop_caps_03.gif
  [font-face]: http://www.fatihhayrioglu.com/font-face-kullanimi/
  [http://www.fontsquirrel.com/fontface]: http://www.fontsquirrel.com/fontface
  [3]: /dokumanlar/ilk_harf_buyuk/ilk_harf_buyuk2.html
  [4]: /images/drop_caps_04.gif
  [5]: /dokumanlar/ilk_harf_buyuk/ilk_harf_buyuk3.html
  [6]: /images/drop_caps_05.gif
  [7]: /dokumanlar/ilk_harf_buyuk/ilk_harf_buyuk4.html
  [8]: /images/drop_caps_06.gif
  [9]: /images/drop_caps_07.gif
  [10]: /dokumanlar/ilk_harf_buyuk/ilk_harf_buyuk4c.html
  [11]: /images/drop_caps_08.gif
  [first-child]: https://fatihhayrioglu.com/pseudo-siniflari-ve-pseudo-elementleri/
  [http://www.sitepoint.com/blogs/2010/04/15/a-simple-css-drop-cap/]: http://www.sitepoint.com/blogs/2010/04/15/a-simple-css-drop-cap/
  [http://safalra.com/web-design/typography/css-drop-caps/]: http://safalra.com/web-design/typography/css-drop-caps/
  [http://www.learningjquery.com/2006/12/multiple-fancy-drop-caps]: http://www.learningjquery.com/2006/12/multiple-fancy-drop-caps
  [http://www.htmldog.com/articles/dropcaps/]: http://www.htmldog.com/articles/dropcaps/
  [http://css-tricks.com/snippets/css/drop-caps/]: http://css-tricks.com/snippets/css/drop-caps/
  [http://azizname.blogspot.com/2006/10/magazine-style-drop-caps.html]: http://azizname.blogspot.com/2006/10/magazine-style-drop-caps.html
  [http://dailydropcap.com/]: http://dailydropcap.com/
  [http://jackosborne.co.uk/articles/pseudo-drop-caps/]: http://jackosborne.co.uk/articles/pseudo-drop-caps/
  [http://www.akxl.net/labs/articles/text-wrapped-drop-caps-in-css-using-the-first-letter-selector/]: http://www.akxl.net/labs/articles/text-wrapped-drop-caps-in-css-using-the-first-letter-selector/
  [http://www.users.globalnet.co.uk/~arcus/html/dropcaps.html]: http://www.users.globalnet.co.uk/~arcus/html/dropcaps.html
