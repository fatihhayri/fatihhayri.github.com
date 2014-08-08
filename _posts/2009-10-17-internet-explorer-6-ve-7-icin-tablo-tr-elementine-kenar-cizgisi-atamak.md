---
layout: post
title: İnternet Explorer 6 ve 7 için Tablo tr elementine kenar çizgisi atamak
Date: 2009-10-17 18:54
Category: CSS
tags: ie6, ie7, internet explorer, kenar-çizgisi, problem
---

Yine bir İnternet Explorer sorunu ile karşı karşıyayız. Bu seferki
sorunum ile bir tablo satırına alt kenar çizgisi tanım yapınca
karşılaştım. 

	:::css
	table{
		border-collapse:collapse
	}

	table tr{
		border-bottom:1px solid #000;
	}

Gayet basit normal bir tanım. Ancak ie6 ve 7 için durum öyle değil.
Karmaşık gelmiş olmalı ki bu atamayı uygulamadı.
border-collapse:collapse tanımı kenar çizgileri arasında boşluk
olmamaısı için kullanıyoruz.

Peki İnternet Explorer 6 ve 7 için nasıl bir çözüm üretmeliyiz. Satıra
değilde satırı oluşturan hücrelere kenar çizgisi verirsek sorunumuz
ortadan kalkıyor.

	:::css
	table{
		border-collapse:collapse
	}

	table td{
		border-bottom:1px solid #000;
	}

Örneği görmek için [tıklayınız.][]

## Kaynak

[http://www.csarven.ca/tr-border-trick-for-ie][]

  [tıklayınız.]: /dokumanlar/tablo_satiri_kenar.html
  [http://www.csarven.ca/tr-border-trick-for-ie]: http://www.csarven.ca/tr-border-trick-for-ie
    "http://www.csarven.ca/tr-border-trick-for-ie"
