---
layout: post
title: WordPress&#039;de Türkçe sorununu nasıl çözmeye çalışıyorum
Date: 2006-04-23 22:10
Category: WordPress
tags: [Crimson Editor, Türkçe karakter sorunu, utf-8, WordPress]
---

WordPress kuran herkes gibi benimde Türkçe Karakterlerle sorunum oldu.
Ben WordPress Türkçe sitesinde bahsedildiği gibi baştan bir Türkçe
karakter tanımı yapmamıştım. Bu nedenle sonradan
veritabanından karakter tanımı yapılan tüm alanları Türkçe karakterli
haline getirdim. Bundan sonra veritabanından gelen veriler de(yazı
içerikleri yorum içerikleri) Türkçe karakter sorunu kalktı. Daha sonra
sayfalarda geçen utf-8 karakter kodu tanımlarını iso-8859 çevirdim. Php
sayfalarda sorunlar kaldı onlarıda .php uzantılı sayfaları notepad'de
açarak kaydederken de utf-8 seçerek düzelttim. Yanlız wp-includes
içindeki template-functions-links.php yapınca sayfalar şaşırdı. İlginç
php sayfalarındaki sorun sayfaları utf-8 olarak kaydetmemektenmiş. Bu
işi Notpad ile yapınca sorun oluyor. [Ceyhun][]'un önerdiği
[http://www.crimsoneditor.com/][] editörü kullanınca sorunlar halloldu.
Editör'ün ücretsiz olması güzel. Her dökümanı açtıktan sonra Document
Menüsünden Encoding Type kısmından UTF-8 Encoding (w/o BOM) seçerek
kaydetmeniz yeterli.

  [Ceyhun]: http://www.jayhoon.com/ "Web amelesi"
  [http://www.crimsoneditor.com/]: http://www.crimsoneditor.com/
    "harika bir editör"
