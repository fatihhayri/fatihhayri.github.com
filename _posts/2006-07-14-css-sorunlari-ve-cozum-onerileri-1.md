---
layout: post
title: CSS İpuçları - 1
Slug: css-sorunlari-ve-cozum-onerileri-1
Date: 2006-07-14 23:14
Category: CSS
tags: CSS, font, font-isimleri, yazı tipi, yazı-tipi isimleri
---

Bir yazı tipi(font) tanımlaması yapılırken eğer yazı tipi adı arasında
boşluk varsa(örn: Times New Roman) uygulamada sorun olur. Sorunun çözümü
boşluk olan yazı tipi ismini çift tırnak("") içine almaktır.

	:::css
	body{
		font-family: times, "times new roman", serif;
	}

