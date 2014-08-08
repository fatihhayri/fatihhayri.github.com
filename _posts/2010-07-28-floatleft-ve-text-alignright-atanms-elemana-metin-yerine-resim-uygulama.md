---
layout: post
title: Float:left ve Text-align:right Atanmş Elemana Metin Yerine Resim Uygulama
Date: 2010-07-28 22:22
Category: CSS, XHTML
tags: float:left, metin yerine resim koymak, text-align:right, text-indent
---

Daha önce [Metin Yerine Resim ekleme][] yöntemini anlatmıştım ve bir çok
yerde örnekler ile göstermiştim. Bu yöntemin uygulandığı eleman içindeki
metni ekran dışına çıkarmak için text-indent:-9999px değeri atarız.

	:::css
	h1 {
		text-indent: -9999px;
		background:url(selam.gif) no-repeat;
		width: 62px;
		height:19px;
	}


Burada şöyle bir sorunumuz oluyor eğer bu elemana text-align:right
tanımıda atamış isek. Maalesef metin ekran dışına çıkmıyor.

	:::css
	h1 {
		text-indent: -9999px;
		background:url(selam.gif) no-repeat;
		width: 62px;
		height:19px;
	    text-align:right
	}

Bu sorunu gidermek için sola dayalı sistemlerde negatif text-indent
değeri veriyoruz, sağa dayalı sistemlerde de pozitif değer vererek bu
durumu çözebiliyoruz. Bu çözüm yeni nesil tarayıcılarda sorun
çıkarmazken İnternet Explore’da scroll çıkarmak kaydı ile sorun
oluşturuyor.

	:::css
	h1 {
		text-indent: 9999px;
		background:url(selam.gif) no-repeat;
		width: 62px;
		height:19px;
	}


Tüm tarayıcılarda çözüm için ise yapmamız çok kolay bir şey aslında.
text-align:left tanımı atamak. Metin yerine resim koyma metodu uygulanan
metinlerin hizalaması sola olmalıdır.

	:::css
	h1 {
		text-indent: -999px;
		background:url(selam.gif) no-repeat;
		width: 62px;
		height:19px;
	    text-align:left
	}

Bu sorun ile genelde metin yerine resim metodu uygulanmış elemanını
kapsayan bir elemana text-align:right uygulandığında rastlarız.
Kalıtsallık ile bu özellik tüm alt elemanlarınıda etkilediği için biz bu
elemana text-align:right değerini atamasak dahi elemanımız bu değeri üst
elemanından kalıtsal olarak alır ve böyle bir soruna neden olur.

## Kaynak:

-   [http://indianapoliswebdesign.blogspot.com/2009/01/web-design-tips-text-replacement-with.html][]

  [Metin Yerine Resim ekleme]: http://www.fatihhayrioglu.com/metin-yerine-resimflash-ekleme-teknikleri-image-replacement/
  [http://indianapoliswebdesign.blogspot.com/2009/01/web-design-tips-text-replacement-with.html]: http://indianapoliswebdesign.blogspot.com/2009/01/web-design-tips-text-replacement-with.html
