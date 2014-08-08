---
layout: post
title: Jquery holdReady() fonksiyonu
Date: 2011-05-10 22:24
Category: Javascript, jquery
tags: document.ready, dom, holdReady()
---

Jquery son sürümü 1.6 çıktı. Dokümanları incelerken gözüme holdReady()
fonksiyonu takıldı.

Jquery holdReady fonksiyonu document.ready olayını tutar veya devam
etmesini sağlar. Boolean(true / false) tipi değer döndürür. true değeri
dönerse document.redy olayını tutar, false değeri gelirse bırakır ve
document.ready olayı gerçekleşir.

document.ready olayı DOM yüklenir yüklenmez devreye girer. Ancak bazen
öyle durumlar olur ki DOM’un yüklenmesini beklemeden yüklememiz gereken
javascript dosyaları veya referans aldığımız eklenti dosyaları olur, bu
gibi durumlarda araya girip bu dosyaları yükletmemiz gerekir ve sonra
işleyişi devam ettirmemiz gerekir. İşte bu gibi durumlarda holdReady
fonksiyonu kullanılabilir.

	:::javascript
	$.holdReady(true); // biraz bekle
	$.getScript("myplugin.js", function() { // dosyayi yukledik
	     $.holdReady(false); // simdi sen isine donebilirsin
	});

Bu metot <head\> içinde document.ready olayından önce çağrılmalıdır.
Eğer sonrasında çağrılırsa işlevsiz kalır. En iyi kullanım yeri jquery
kütüphanesi eklendikten sonrasıdır.

Küçük bir örnek yapalım;

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Başlıksız Belge</title>
	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.min.js"></script>
	<script>
	$.holdReady(true); // durdur
	$.getScript("deneme.js", function() { // yukle
		$("p").css("background-color", "#f00");
	     $.holdReady(false); // devam et
	});

	$(document).ready(function(e) {
	    $("p").css("background-color", "#9C6");
		alert("iki");
	});
	</script>
	</head>

	<body>
	<p>Deneme.</p>
	</body>
	</html>

Eklediğimiz deneme.js

	:::javascript
	// ilk yüklenecek dosya
	$("p").css("background-color", "#ff0");
	alert("bir");

Örneği görmek için [tıklayınız.][]

Sayfa yükleme sırası;

1- DOM yani yukarıdaki sayfa <p>Deneme.</p> ve deneme.js dosyası
birlikte yorumlanacak. (bir)

2- Sonrasında yükleme sonrası işlemler yapılacak. (iki)

3- $.holdReady(false); sonrasında document.ready içerisindeki kod
yorumlanacak. (üç)

Son olarak bir not: birden fazla holdReady kullanımı halinde
document.ready olayı tüm holdReady fonksiyonlarının bırakılmasını
bekler.

## Kaynaklar

-   [http://api.jquery.com/jQuery.holdReady/][]
-   [http://jquerybyexample.blogspot.com/2011/05/jqueryholdready-new-in-jquery-16.html][]
-   [http://blogs.sitepoint.com/whats-new-in-jquery-16/][]

  [tıklayınız.]: /dokumanlar/holdReady.html
  [http://api.jquery.com/jQuery.holdReady/]: http://api.jquery.com/jQuery.holdReady/
  [http://jquerybyexample.blogspot.com/2011/05/jqueryholdready-new-in-jquery-16.html]: http://jquerybyexample.blogspot.com/2011/05/jqueryholdready-new-in-jquery-16.html
  [http://blogs.sitepoint.com/whats-new-in-jquery-16/]: http://blogs.sitepoint.com/whats-new-in-jquery-16/
