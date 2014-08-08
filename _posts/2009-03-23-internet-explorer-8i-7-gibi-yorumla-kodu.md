---
layout: post
title: Internet Explorer 8&#039;i 7 gibi yorumlama kodu
Slug: internet-explorer-8i-7-gibi-yorumla-kodu
Date: 2009-03-23 16:32
Category: XHTML
tags: ie7, ie8, internet explorer, İnternet Tarayıcısı
---

Bildiğiniz gibi Microsoft Internet Explorer 8'i geçen hafta duyurdu.
Eğer sitelerimiz IE8'e tam olarak uygun değilse sayfamıza bir satırlık
bir kod ekleyerek bu sorunu çözebiliyoruz.

	:::html
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />

Kodunu sitemize eklememiz yeterli. Bu META etiketi sayesinde Sayfalarımız Internet Explorer 7'de görünüyor gibi yorumlanacaktır. Bir projede meta'ların ilk başına yazınca olmadı,
</head\>'in bir öncesine koyunca oldu aklınızda bulunsun.
