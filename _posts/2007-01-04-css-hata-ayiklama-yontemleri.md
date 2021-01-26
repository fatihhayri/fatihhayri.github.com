---
layout: post
title: CSS Hata Ayıklama Yöntemleri
Date: 2007-01-04 23:05
Category: CSS, XHTML
tags: [Attribute, backslash, CSS, Çocuk-Seçicileri, Firefox, Hata ayıklama, ie-fix, ie-hata, ie6, ie7, important, Opera, owen, XHTML]
---

[IE'de Hata Ayıklamak için şžartlı Yorumlar Kullanmak][] adlı makalede
bahsettiğimiz gibi "CSS ile web sitesi kodlamanın en büyük sorunu CSS'in
özelliklerini yorumlayamayan veya yanlış yorumlayan web tarayıcılarıdır.
Bu nedenle CSS ile web sitesi kodlarken bu tip hataları ayıklamamız
gerekiyor. **CSS ile hata ayıklama web tarayıcı gruplarının veya bir
kısım web tarayıcısı için kuralları veya bildirimleri gizlemek veya
göstermek şeklinde uygulanır.**"

Biz CSS'de hata ayıklamak için bir çok yöntem kullanırız. Bunların en
çok kullanılanları aşağıda anlatılmıştır.

#### Çocuk Seçicileri Kullanarak Hata Ayıklamak

Çocuk seçicilerini incelemek için [tıklayınız][]. Çocuk Seçicileri CSS
hata ayıklama yöntemi olarak kullanılabilir. Çocuk Seçicileri Windows
sistemlerinde kurulu olan IE6 ve alt versiyonlarında
görüntülenmeyecektir, bu nedenle IE6 ve altı versiyonlarda görünmesi
istenmeyen tanımlar Çocuk Seçicileri kullanarak gizlenebilir.

Her tanımlamadan sonra ikinci bir tanımlama olarak kullanılır. İkinci
tanımlama çocuk seçicisi olmalıdır.

	:::css
	.icerik h3 {
		height:21px;
	}

	.icerik > h3{
		height:auto;
		min-height:21px;
	}

[IE 7 Çocuk Seçicilerini desteklemektedir.][] Bu metot uygulanırken bu
dikkate alınmalıdır.

## Özellik(Attribute) Seçicileri Kullanarak Hata Ayıklamak

Diğer bir hata ayıklama yöntemi Özellik Seçicileri kullanarak hata
ayıklamaktır. Bir çok yeni nesil web tarayıcısı (FF ve Safari) bu
kullanımı destekler, ancak IE6 ve altı versiyonlar bu özelliği
desteklemez. [IE7 bu kullanımı desteklemektedir.][IE 7 Çocuk Seçicilerini desteklemektedir.] Bu hata ayıklama yöntemi yukarıda
bahsettiğimiz "Çocuk Seçicileri ile Hata ayıklama" yöntemi gibi
kullanılır.

Özellik Seçicileri kullanarak elementlerin id'lerine göre atamalar
yapabiliriz. Bu bize bir çok avantaj sağlar. Bu avantajları hata
ayıklamak içinde kullanabiliriz.

	:::html
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<title>Test</title>
		<style type="text/css">
	    p{background: red; /* Tüm web tarayıcılarında görünür */}
	    body[class|="sayfaYapisi"] p{ background: green; /* IE 7 ve Yeni web tarayıcılarında görünür Opera hariç */}
	    </style>
	</head>
	<body class="sayfaYapisi">
		<p>Test</p>
	</body>
	</html>

## Genel Seçicileri (*) Kullanarak Hata Ayıklamak

Her ne kadar bu hata IE7 ile birlikte düzeltildiyse de çok kullanışlı
bir hata ayıklama metodudur. Kullanımı çok basittir.

	:::css
	a:hover {border: 1px dotted black;}
	* html a:hover { // bu tanımlamayı ie6+ ve altı versiyonlarda görünmeyecektir.
		border-style: solid;
	}

## Ters Bölü İşareti() İle Hata Ayıklama

IE5x/Win versiyonları bu karakteri yorumlamazlar bu nedenle IE5x/win
versiyonlarından kodumuzu gizlemek için bu yöntemi kullanabiliriz. CSS
kodu yazarken en çok ihtiyacımız olan genişlik tanımının IE5x
versiyonlarda yanlış algılanmasıdır. bu hatayı düzeltmek için bu yöntem
kullanılabilir.

	:::css
	#icerik {
	  width: 770px;
	  wid\th: 750px; /* ie5x - win bu kodu görmeyecek */
	}

Ben şahsen kutu modelinde hata ayıklamak için [tantek][]'in kullandığı
[metodu][] kullanıyorum, daha sağlıklı ve tüm web tarayıcıları göze
alınarak hazırlanmış bir hata ayıklama metodudur tavsiye ederim. Ama bu
yönteminde kullanıldığını bilelim.

## Alt Çizgi (_) ile Hata Ayıklama

Bu yöntemde IE4-6 versiyonlarda hata düzeltmek için kullanılabilir.

	:::css
	#menu {
	  position: fixed;
	  _position: static;
	}

Burada yeni nesil web tarayıcıları ikinci tanımlamayı görecek ve buna
göre yorumlama yapacaktır. Ancak IE4-6/win versiyonları (_)
anlayamadığı için bu kodu yorumlamayacak ve ilk koda göre hareket
edecektir.

## Owen Yöntemi ile Hata Ayıklama

şžimdiye kadar ki tüm yöntemler Internet Explorer içindi. Bunun nedeni
bir çok hatanın IE'den kaynaklanmasıdır tabi. şžimdi kullanacağımız
metod ise Opera için bir hata ayıklamasıdır.

	:::css
	.solAlan {
		background-image: none
	}

	/*  Asagidaki bolum Opera 6 ve altı veya IE6/win görünmeyecek */
	head:first-child+body .solAlan {
		background-image: url(menu.png);
		background-attachment: fixed;
	}

Bu yöntem hem Opera 6 ve altı hem de IE6 ve altı versiyonlar için
geçerlidir. Sadece Opera 6 ve altı versiyonlar için kod yazmak istersek

	:::css
	html>body div.alt {
		c\olor: red; /* sadece Opera 6 için */
	}

	head:first-child+body div.alt {
		color: black;
	}

## Yorum Kodları içinde () Kullanımı ile IE/Mac'de Hata Ayıklama

IE/Mac versiyonlarında yorum satırı içindeki ters bölme işaretini()
yorumlamamaktadır. Bu nedenle IE/Mac versiyonlarında hata ayıklamak için
bu yöntem kullanılabilir.

	:::css
	/* bu alani IE5/Mac den gizleyelim \*/
	* html {
		height: 1px;
	}
	/* hata ayiklama sonu */

Bunların dışında kutu modeli hata ayıklaması için kullandığımız
[tantek][1]'in yöntemi, [Css de kodumuzu İE'den gizleme][] adlı makalede
kullandığımız **!important** yöntemi ve [IE'da min-width, min-height,max-width, max-height Kullanmak][] makalesinde kullandığımız
**expression()** yöntemleride vardır. Bunlardan daha önce bahsettiğimiz
için değinmedik. Bunların dışında kullanılan diğer bazı yöntemler olsa
da biz burada genel kabul görmüş yöntemleri yazmayı uygun bulduk.

## Kaynaklar

-   [http://www.webdevout.net/articles/css_hacks.php][]
-   http://swik.net/CSS/CSS+Hacks
-   css-discuss.incutio.com/?page=CssHack
-   [http://www.quirksmode.org/css/csshacks.html][]
-   [http://tantek.com/CSS/Examples/boxmodelhack.html][tantek]
-   http://www.albin.net/CSS/OwenHack.html

  [IE'de Hata Ayıklamak için şžartlı Yorumlar Kullanmak]: http://fatihhayrioglu.com/iede-hata-ayiklamak-icin-sartli-yorumlar-kullanmak/
    "IE'de Hata Ayıklamak için şartlı Yorumlar Kullanmak"
  [tıklayınız]: http://fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/
  [IE 7 Çocuk Seçicilerini desteklemektedir.]: http://fatihhayrioglu.com/internet-explorer-7-ve-css/
  [tantek]: http://tantek.com/CSS/Examples/boxmodelhack.html
  [metodu]: http://fatihhayrioglu.com/kutu-modeli-sorunlari-ve-cozumleri/
  [1]: http://fatihhayrioglu.com/?p=13
  [Css de kodumuzu İE'den gizleme]: http://fatihhayrioglu.com/?p=31
  [IE'da min-width, min-height,max-width, max-height Kullanmak]: http://fatihhayrioglu.com/?p=182
  [http://www.webdevout.net/articles/css_hacks.php]: http://www.webdevout.net/articles/css_hacks.php
  [http://www.quirksmode.org/css/csshacks.html]: http://www.quirksmode.org/css/csshacks.html
