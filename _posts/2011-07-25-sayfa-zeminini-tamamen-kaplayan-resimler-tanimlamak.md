---
layout: post
title: Sayfa Zeminini Tamamen Kaplayan Resimler Tanımlamak
Date: 2011-07-25 22:02
Category: CSS
tags: background-size, tam ekran, zemin-resmi
---

Sitem üzerinden birçok mesaj aldım bu konuda. Sonunda yazmaya karar
verdim, bir önceki makalemde [CSS3’ün background-size özelliğini anlattım][], orada da bahsettiğim gibi **background-size** özelliğini
kullanarak bu işi çok kolay bir şekilde yapabiliriz. Buradaki
problemimiz bu özelliği desteklemeyen tarayıcılar için nasıl bir çözüm
bulmalıyız.

Bu makalede farklı tarayıcılar için sayfamızın zeminini tam kaplayan
ardalan resimlerini nasıl tanımlayacağımızı anlatmaya çalışacağım.

## CSS3 background-size ile basit şekilde yapalım

Bir önceki makalede de anlattığım gibi background-size özelliği bu iş
için biçilmiş kaftandır. Çok basit bir kod ile istediğimize ulaşırız.

{% highlight css %}
html {
	background: url(images/bg.jpg) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
{% endhighlight %}

Bir örnek yapalım

{% highlight css %}
html{
    background:url("zemin_resmi.jpg") 0 0 no-repeat fixed;
    background-size:cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][100]

Ardalan resmini
[http://interfacelift.com/wallpaper/details/2421/empty_bottles.html][]
aldım.

**html** elementine vermemizin nedeni **body** tanımlamalarında bazı
tarayıcılarda sorun yaşamamızdır. Kaydırma çubuğunun hareketi ile zemin
resmi kaymaması için resmi sabitledik(**fixed**). **cover** özelliği ile
resmi zemine yaydık. [Daha detaylı bilgi için tıklayınız.][CSS3’ün background-size özelliğini anlattım]

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+**|**9+**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

İnternet Explorer 9 sürümünden önceki sürümlerinin bu özelliği
desteklememesidir. İnternet Explorer için **filter** ile bir çözüm
üretebiliriz.

{% highlight css %}
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.zemin_resmi.jpg', sizingMethod='scale');
-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='zemin_resmi.jpg', sizingMethod='scale')";
{% endhighlight %}

Bu kod ile ie içinde çözüm üretilmiş olacaktır. Linklerde ve içerik
seçmede bazı orunlar olabiliyor.

## Tüm Tarayıcılar İçin Çözüm

{% highlight html %}
<div id="tamEkranArdAlan"><img src="http://www.fatihhayrioglu.com/images/emptybottles.jpg" width="100%" height="100%" /></div>
<div id="icerik">
...
</div
{% endhighlight %}

Sayfamızı içerik ve ardalan resmi olarak ikiye ayırıyoruz.

{% highlight css %}
html, body {height:100%; margin:0; padding:0;}
{% endhighlight %}

Sayfanın boşluklarını sıfırlıyoruz.

{% highlight css %}
#tamEkranArdAlan {
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
{% endhighlight %}

Zemine yerleştirilecek resmi sabitleyip üstten ve soldan başlangıç
noktasına yerleştiriyoruz ve genişlik ve yükseklik değerini %100
veriyoruz.

{% highlight css %}
#icerik {
	position:relative;
	z-index:1;
	width:650px;
	padding:20px;
	font:14px/1.8em Arial;
	margin:40px auto;
	border-radius:10px;
	color:#333;
	background-color:#fff
}
{% endhighlight %}

İçerik alanını **postion:relative; z-index:1** değeri atayarak
içerikteki seçilme ve linklerde sorun olmasını engelliyoruz. Diğer
tanımlar içerik alanının görselliğini ayarlamak içindir.

Bu kodlar ie6 hariç çalışırken ie6’da çalışmıyor ie6’da çalışması için

{% highlight css %}
*html {
	overflow-y:hidden;
}

*html body {
	overflow-y:auto;
}

*html #tamEkranArdAlan {
	position:absolute;
	z-index:-1;
}

*html #icerik{
	position:static;
	padding:20px;
}
{% endhighlight %}

ie6 **postipon:fixed** desteklemediği için **postion:absolute** değeri
tanımlıyoruz. İçerik alanınıda **postion:static** tanımlıyoruz. Kaydırma
çubuğu sorunlarını halletmek için **body** ve **html** tanımlarımızı
yapıyoruz.

Sonuç olarak tüm tarayıcılarda çalışan sayfa zeminini kapsayan zemin
resmi tanımlamış olduk.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/ePxPv/embedded/css,html,result"></iframe>

## Sonuç

Sonuç olarak CSS3 ile birlikte gelen **background-size** özelliği tam
işimizi görsede İnternet Explorer’un desteklememesi projelerimizde
uygulamak için bizi düşündürüyor.

Tüm tarayıcıların desteklediği ikinci yöntem sadece CSS ile çözüm
ürettiği için tercih edilebilir. Ayrıca javascript ile bazı çözümler
olsa da ben css ile çözümü olan bir kodu javascript ile çözme taraftarı
değilim. Javascript uygulamaları için[http://css-tricks.com/3458-perfect-full-page-background-image/][]
linkindeki örnekleri incelemenizi öneriyorum.

Baktığım sitelerdeki uygulanabilir bu iki yöntemi sizlerle paylaştım
uyguladıkça ve diğer yöntemleri gördükçe buraya ekleme yapabilirim.
Birazda ihtiyaca göre yöntem uygulamak gerekiyor bu işte.

Kalın sağlıcakla

## Kaynaklar

-   [http://css-tricks.com/3458-perfect-full-page-background-image/][]
-   [http://cookbooks.adobe.com/post_Scale_Background_image_to_browser_size-17590.html][]
-   [http://css-tricks.com/766-how-to-resizeable-background-image/][]
-   [http://paulmason.name/blog/item/full-screen-background-image-pure-css-code][]
-   [http://www.quackit.com/html/codes/html_stretch_background_image.cfm][]
-   [http://www.cssplay.co.uk/layouts/background.html][]

  [CSS3’ün background-size özelliğini anlattım]: http://www.fatihhayrioglu.com/css3-background-size-ozelligi/
  [tıklayınız.]: /dokumanlar/tam_sayfa_bg.html
  [100]: https://lh6.googleusercontent.com/x55IiCT52mJIMb9oYddTeHpX7Ww7ti3puoZiped0VQ-SflPtR_mrldscvuWoco7aOWi0dbQ2llnOVRuch-2dgpR_LSkZU76CiKam4NThM2DYry7j-Po
  [http://interfacelift.com/wallpaper/details/2421/empty_bottles.html]: http://interfacelift.com/wallpaper/details/2421/empty_bottles.html
  [http://css-tricks.com/3458-perfect-full-page-background-image/]: http://css-tricks.com/3458-perfect-full-page-background-image/
  [http://cookbooks.adobe.com/post_Scale_Background_image_to_browser_size-17590.html]: http://cookbooks.adobe.com/post_Scale_Background_image_to_browser_size-17590.html
  [http://css-tricks.com/766-how-to-resizeable-background-image/]: http://css-tricks.com/766-how-to-resizeable-background-image/
  [http://paulmason.name/blog/item/full-screen-background-image-pure-css-code]: http://paulmason.name/blog/item/full-screen-background-image-pure-css-code
  [http://www.quackit.com/html/codes/html_stretch_background_image.cfm]: http://www.quackit.com/html/codes/html_stretch_background_image.cfm
  [http://www.cssplay.co.uk/layouts/background.html]: http://www.cssplay.co.uk/layouts/background.html


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png