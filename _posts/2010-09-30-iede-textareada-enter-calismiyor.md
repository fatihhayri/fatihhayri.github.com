---
layout: post
title: IE&#039;de Textarea&#039;da Enter çalışmıyor
Date: 2010-09-30 21:22
Category: CSS, XHTML
tags: enter çalışmıyor, ie, sıfırlama, white-space, white-space:normal, white-space:pre
---

Projede karşılaştığım sorunlardan biri textarea elemanı içinde enter’a
basınca alt satıra geçmiyordu. Diğer tarayıcılarda sorun yokken ie
sürümlerinde böyle bir sorun çıkıyordu.

Sonra incelediğimde ve araştırdığımda bu sorunun benim kullandığım
sıfırlama kodundaki bir durumdan kaynaklandığını gördüm.

	:::css
	textarea, input, select {
	    font:inherit;
	    white-space:normal;
	}

Örneği görmek için [tıklayınız.][]

Sıfırlama kodundaki yukarıdaki kodda white-space:normal; tanımlaması
sorunu çıkarıyor. Bu kodu çıkarınca sorun ortadan kalkıyor. Ancak yinede
ie’nin textarea’daki white-space:normal; kullanımında sorun oluşturduğu
gerçeğini bu ortadan kaldırmıyor.

Bu durumu halletmenin daha düzgün bir yolu var

	:::css
	textarea {
		white-space:pre;
	}

Örneği görmek için [tıklayınız.][1]

Tanımıda bu sorunu gidermek için yeterlidir.

## Kaynaklar

-   [http://stackoverflow.com/questions/1282202/enter-does-not-work-in-textarea-in-internet-explorer-8][]
-   [http://www.fourmilab.ch/fourmilog/archives/2005-04/000510.html][]
-   [http://stackoverflow.com/questions/737614/textarea-css-ie7-and-enter-key-creating-inline-space][]

  [tıklayınız.]: /dokumanlar/textareada_enter_calistirmak.html
  [1]: /dokumanlar/textareada_enter_calistirmak2.html
  [http://stackoverflow.com/questions/1282202/enter-does-not-work-in-textarea-in-internet-explorer-8]: http://stackoverflow.com/questions/1282202/enter-does-not-work-in-textarea-in-internet-explorer-8
  [http://www.fourmilab.ch/fourmilog/archives/2005-04/000510.html]: http://www.fourmilab.ch/fourmilog/archives/2005-04/000510.html
  [http://stackoverflow.com/questions/737614/textarea-css-ie7-and-enter-key-creating-inline-space]: http://stackoverflow.com/questions/737614/textarea-css-ie7-and-enter-key-creating-inline-space
