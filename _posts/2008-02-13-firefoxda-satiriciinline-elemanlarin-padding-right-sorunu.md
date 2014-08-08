---
layout: post
title: Firefox&#039;da satıriçi(inline) elemanların padding-right sorunu
Date: 2008-02-13 00:07
Category: CSS, XHTML
tags: Firefox, hata, Hata ayıklama, padding-right
---

Şimdiye kadar hep Internet Explorer ile ilgili sorunlara değindim. Şimdi
ise size en çok sevdiğim tarayıcı Firefox'un küçük bir sorununu
aktarmaya çalışacağım. Amaç sorunu bilip ona göre kod yazmak.

Birden fazla satır içeren satıriçi(inline) elemanlara padding-right
değeri atandığında, satıriçi elemanın sonuna padding-right değeri
eklenir. Firefox 2 ve alt sürümlerinde pading-right değeri uygulandığı
satıriçi elemanın tümüne uygulanacaktır. Bu problem Padding-left'de
yoktur.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<style>
		div#kapsul {
			width: 260px;
			border: 1px dotted #999;
			margin: 40px
		}

		span#metin {
			background: red;
			padding: 0 3em 0 0;
		}
	</style>
	</head>
	<body>
		<div id="kapsul"><span id="metin">This is a longer line with some more text to see how the line will wrap in container</span> </div>
	</body>
	</html>

Örnek sayfayı görmak için [tıklayınız][].

![][100]

Internet Explorer 7(sorunusuz)

![][1]

Firefox (sorunlu)

Ben hala Firefox'u çok seviyorum :D

Kaynak: [https://bugzilla.mozilla.org/show_bug.cgi?id=122795][]


  [tıklayınız]: /dokumanlar/ornek_padding_right_sorunu.html
  [100]: /images/ie7.gif
  [1]: /images/ff.gif
  [https://bugzilla.mozilla.org/show_bug.cgi?id=122795]: https://bugzilla.mozilla.org/show_bug.cgi?id=122795
