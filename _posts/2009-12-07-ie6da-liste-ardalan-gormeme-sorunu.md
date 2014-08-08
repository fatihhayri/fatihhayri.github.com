---
layout: post
title:  IE6&#039;da Liste Ardalan Görmeme Sorunu
Date: 2009-12-07 16:55
Category: CSS, XHTML
tags: ardalan-görünmeme, ardalan-özellikleri, hata, ie, ie6
---

![][100]İE hatalar serisini devam ediyoruz, ben uğraşmaktan ve yazmaktan
bıktım ama ie hata vermekten bıkmadı.

Bu seferki hataya menüde denk geldim. Menüme background-image ile bir
ikon koydum, her şey güzel ama ie6 görmedi. Araştırdım ve sonuç ie
sorunu çıktı tabiki. Sorunun tam tanımı şöyle; listeleri(ul, ol ve dl)
kapsayan elemana eğer float ve position:relative tanımı yaptı iseniz,
ie6 liste background özelliklerini(resim veya renk) görmüyor.

Bu durmu bir örnek ile gösterelim.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>ie lsite ardalan sorunu</title>
	<style>
	#menuKapsul{
	position:relative;
	float:left;
	}
	ul li{
	background:url(ikon.gif) 3px 9px no-repeat;
	list-style:none;
	padding-left:12px;
	}
	</style>
	</head>
	<body>
	<div id="menuKapsul">
		<ul>
	    	<li>Liste 1</li>
	        <li>Liste 2</li>
	        <li>Liste 3</li>
	    </ul>
	</div>
	</body>
	</html>


Yukarı görülen basit bir listenin ardalanına resim yerleştiriyoruz.
Kapsayıcı elemanada **position:relative;** ve **float:left;** tanımları
atanmış olsun. Aktif tarayıcıların tümünde sorunsuz çalışan kodumuz,
ie6'da sorunlu görünecektir. Sorun liste ardalan resminin
görünmemesidir. Sorunu çözerken bayağı bir cebelleşmiştim. Sonunda
çözümü bulunca ve bu çözümde çok basit olunca sevineyim mi üzüleyim mi
şaşırdım.

Çözüm ise çok basit. Ardalan resmi uyguladığımız liste öğesine
**postion:relative** tanımı yapıyoruz ve bu kadar düzeliyor.

	:::css
	ul li{
		background:url(ikon.gif) 3px 9px no-repeat;
		list-style:none;
		padding-left:12px;
		position:relative
	}

bu kadar bu kod bizim sorunlarımızı gideriyor.

Bir başka çözüm yoluda kapsayıcı bir eleman daha ekleyerek bu elemana
farklı konumlandırma değeri atayıp çözebiliriz, ama bu pek mantıklı
değil, fazladan kod eklememiz gerektiği için. En iyi position:relative
ekleyip sonuca gitmek.

Örnek kodu görmek için [tıklayınız.][]

Bir ie6 sorununun daha üstesinden geldik bir başka ie6 sorunu ile daha
karşınızda olana dek hoşça kalın.(Bu ie6 oldukça nasıl hoş kalacağız oda
ayrı bir konu.)

-   [http://www.positioniseverything.net/explorer/ie-listbug.html][]
-   [http://www.adobe.com/cfusion/communityengine/index.cfm?event=showdetails&productId=1&postId=481][]

  [100]: /images/ie_liste_sorunu.gif
  [tıklayınız.]: /dokumanlar/liste_ardalani.html
  [http://www.positioniseverything.net/explorer/ie-listbug.html]: http://www.positioniseverything.net/explorer/ie-listbug.html
    "http://www.positioniseverything.net/explorer/ie-listbug.html"
  [http://www.adobe.com/cfusion/communityengine/index.cfm?event=showdetails&productId=1&postId=481]: http://www.adobe.com/cfusion/communityengine/index.cfm?event=showdetails&productId=1&postId=481
    "http://www.adobe.com/cfusion/communityengine/index.cfm?event=showdetails&productId=1&postId=481"
