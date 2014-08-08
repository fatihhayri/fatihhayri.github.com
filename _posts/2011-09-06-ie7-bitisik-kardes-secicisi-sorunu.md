---
layout: post
title: İE7 Bitişik Kardeş Seçicisi Sorunu
Date: 2011-09-06 18:45
Category: CSS
tags: bitişik kardeş seçiciler, ie7, sorun
---

Geçen hafta “IE6 Sonrası Kod Yazma Alışkanlıklarımızı Güncellemek” adlı
makale ile ie6 ile vedalaştık. Tabi orada söylediğimiz gibi ie6’nın
bitmiş olması sorunlarımızın bitmiş olduğu anlamına gelmiyor. İşte
sizinle o makalede artık rahat rahat kullanabileceğimizi söylediğimizi
Bitişik Kardeş Seçicisi ile ilgili bir sorunu burada sizlerle
paylaşacağım.

Çözümü çok basit olan bir sorun ama bu sorunu anlatmamın nedenlerinden
biriside sorunların olacağı, ama bizim bu sorunları görüp çözmemiz
gerektiğini anlatmaktır. İyi bir arayüz geliştirici ve hatta iyi bir
programcı hataları bulup üzerine gidip çözebilendir.

Soruna gelirsek; Sorun Bitişik Kardeş Seçicileri kullandığımız elemanlar
arasında eğer HTML yorum satırı eklersek ie7 bitişik kardeş seçicisi ile
tanımladığımız bildirimleri yorumlamıyor.

	:::html
	<h2>Başlık</h2>
	<!-- html yorumu -->
	<p>Paragraf</p>


CSS kodu

	:::css
	h2 + p {
		background-color: #fc0;
	}

<iframe style="width: 100%; height: 200px" src="http://jsfiddle.net/fatihhayri/Ubk9Q/embedded/result,html,css"></iframe>

Uygulaması bütün tarayıcılarda sorunsuz çalışırken ie7’de sonuç
vermeyecektir. DOM’daki öğelerin konumuna göre çalışan bu seçicinin
çalışmasında ie7 aradaki yorum satırlarınıda dikkate alarak istenen
sonucunu vermediğini göreceğiz.

Çözüm için yorum satırını kullanmaya ne gerek var silelim demek ve
yorumları silmek bir çözümdür. Ama ben ie ile sorun yaşıyorum diye yorum
satırımı silmek istemem. Çözüm[ie6 sorunları][] ile uğraşırken
bulduğumuz şekilde olacaktır. Şartlı yorumları kullanarak çözüme
ulaşmakta mümkündür.

	:::html
	<h2>Başlık</h2>
	<!--[if !IE]>Başlık yaz <![endif]-->
	<p>Paragraf</p>
	<p>Paragraf 2</p>

Şeklinde bir çözüm işimizi görecektir.

## Kaynaklar

-   [http://oncemade.com/adjacent-sibling-selector-bug-ie7/][]
-   [http://www.fatihhayrioglu.com/ie6un-tekrarlayan-karakter-sorunu/][ie6 sorunları]


  [ie6 sorunları]: http://www.fatihhayrioglu.com/ie6un-tekrarlayan-karakter-sorunu/
  [http://oncemade.com/adjacent-sibling-selector-bug-ie7/]: http://oncemade.com/adjacent-sibling-selector-bug-ie7/
