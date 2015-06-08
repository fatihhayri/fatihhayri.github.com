---
layout: post
title: CSS3 ile yuvarlak kenarlı resim yapmak
Date: 2011-02-02 00:45
Category: CSS
tags: border-radius, css3, Firefox, Google Chrome, problem, safari
---

Bir resminize kenar çizgisi tanımı yapıp daha sonrada köşelerini
ovalleştirmek istediğinizde köşelerdeki kenar çizgilerinde sorun
yaşıyoruz.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>border-radius</title>
<style>
	img{ border:2px solid #999; -webkit-border-radius:8px; -moz-border-radius:8px; border-radius:8px;}
</style>
</head>
<body>
	<img src="gudi.jpg" width="75" height="75" />
</body>
</html>
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][100]

Kırmızı ile işaretlediğim yere dikkat ederseniz sorunlu gözüken
kısımalar var. Bu sorun tarayıcıların bir sorunu gibi duruyor. Eğer
ie’nin sorunları ile bu kadar zaman kaybetmemiş olsa idik şimdi böyle
güzel sorunlarla uğraşacaktık ve tarayıcılar bu sorunları düzletmek için
uğraşacaktı.

## Çözüm1:

Çözüm için dışa bir kapsayıcı div atayıp kenar çizgisi tanımını bu
katmana yaparak çözebiliyoruz.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>css3</title>
<style>
	.resimKapsulu{border:2px solid #999; width:75px; height:75px; -webkit-border-radius:12px; -moz-border-radius:12px; border-radius:12px;}
	.resimKapsulu img{width:75px; height:75px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px;}
</style>
</head>
<body>
	<div class="resimKapsulu"><img src="gudi.jpg" width="75" height="75" /></div>
</body>
</html>
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

![][2]

Kodunu aldığım sitede resim ve kapsayıcı katmana aynı border-radius
değeri verilmiş, ancak ben öyle yapınca Chrome’da beyazlıklar ortaya
çıktı bu nedenle bende kapsüle 12px verirken resme 10px border-radius
verdim.

Örnek Safari ve Chrome’da çalışırken Firefox3.6 ve Opera11’de
çalışmıyor.

Firefox4 ve yeni webkit tabanlı tarayıcılarda bu sorun ise kökten
çözülmüş, tanımı direk resme verebileceğiz.

## Çözüm2:

Firefox3.6 ve Opera için [CSS3 Rounded Image With jQuery][]
makalesindeki yöntemden yaralanabiliriz.

HTML kodumuzu şöyle değiştirelim

{% highlight html %}
<div class="resimKapsulu" style="background: url(gudi.jpg) no-repeat center center; width: 75px; height: 75px;">
	<img src="gudi.jpg" width="75" height="75" style="opacity: 0;" />
</div>
{% endhighlight %}

Resme saydamlık verilip görünmez yapılıyor ve satır için css kodları
tanımlanıyor, amaç buradaki kodları jquery yardımı ile bg olarak
tanımlamak .

jQuery kodumuz

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>css3</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<script type="text/javascript">
 $(document).ready(function() {

	$(".resimKapsulu").load(function() {
		$(this).wrap(function(){
			return '<span class="' + $(this).attr('class') + '" style="background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />';
		});
		$(this).css("opacity","0");
	});

 });
</script>
<style>
.resimKapsulu{border:2px solid #999; width:75px; height:75px; -webkit-border-radius:12px; -moz-border-radius:12px; border-radius:12px;}
.resimKapsulu img{width:75px; height:75px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px;}
</style>
</head>
<body>
<div class="resimKapsulu" style="background: url(gudi.jpg) no-repeat center center; width: 75px; height: 75px;">
	<img src="gudi.jpg" width="75" height="75" style="opacity: 0;" />
</div>
</body>
</html>
{% endhighlight %}

Örneği görmek için [tıklayınız.][3]

![][4]

Ben bu çalışmayı iphone ve ipad için kod geliştirirken denk geldiğim
için diğer tarayıcıların benim için pek önemi yoktu açıkçası. iphone ve
ipad için ilk çözümü uygulayıp geçtim açıkçası, ama lazım olanlar için
ikinci yöntem de kullanılabilir.

## Kaynaklar

-   [http://trentwalton.com/2010/08/03/css3-border-radius-rounded-avatars/][]
-   [http://www.webdesignerwall.com/tutorials/css3-rounded-image-with-jquery/][CSS3 Rounded Image With jQuery]
-   [http://www.swedishfika.com/2010/03/19/rounded-corners-on-images-with-css3-2/][]

  [tıklayınız.]: /dokumanlar/border_radius_resim_.html
  [100]: https://lh5.googleusercontent.com/gLndP4VPjq8o0ReURiijye0gHVHNWXVLgerrYuZ7rDSTu5ZOkhayATtTmspfym08AUQhceJxvnhmSz_03Tr325FWhugB4g5-aC6OarKEqxlF0gcTiA
  [1]: /dokumanlar/border_radius_resim.html
  [2]: https://lh6.googleusercontent.com/BguAW9wciO-kWJxCqLkWj7-0VoGg6RRXe_UfOCBWrAXJMc41F-Qt3EtMTz9nwNJo2grEnNe83nG4Je2u1uPE-mSBlm6cj0IIfam1ucRN9k0EYQJjVQ
  [CSS3 Rounded Image With jQuery]: http://www.webdesignerwall.com/tutorials/css3-rounded-image-with-jquery/
  [3]: /dokumanlar/border_radius_resim2.html
  [4]: https://lh3.googleusercontent.com/HIOubjsFMP0fFhreTxPL2NxZltLCUsIANHwS9C193L8OIiw5fEIgs37R3XusyJUn8NeQZYR3u6pK5JevZJi1YhbcKBksfgNeT0mIC4sTGiTQ8uK-_w
  [http://trentwalton.com/2010/08/03/css3-border-radius-rounded-avatars/]: http://trentwalton.com/2010/08/03/css3-border-radius-rounded-avatars/
  [http://www.swedishfika.com/2010/03/19/rounded-corners-on-images-with-css3-2/]: http://www.swedishfika.com/2010/03/19/rounded-corners-on-images-with-css3-2/
