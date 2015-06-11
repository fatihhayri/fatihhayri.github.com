---
layout: post
title: Sitemi temizleme ve hızlandırma çalışmalarım
Date: 2008-10-16 09:19
Category: Haberler
tags: hızlandırma, Ön-bellek, site, temizleme, WordPress
---

Siteyi yeniledikten sonra daha önce eğilmediğim bazı konulara eğilmeye
başladım. Siteyi daha hızlı hale nasıl getirebilirim diye araştırdım.
Tam olarak bir karar veremesem de cach ile ilgili bir eklenti kurmayı
düşünüyordum. Muhammet Sevim’in önerisi üzerine [wp-Cache][] eklentisini
kurdum. Ayrıca eklentileri kurunca veritabanına bir sürü tablo atıyor
Wordpress, bunun yanında sitenin hızını etkileyecek wp_options
tablosunu değerler atıyor. WordPress’in eksikliklerinden birisi eklenti
eklerken oluşturduğu tabloları ve diğer bilgileri kaldıramıyoruz.
dmry.net'de [bahsedilen][] eklenti ile wp_options’taki bilgileri
silebiliyoruz. (Tablodaki girdi sayısını 336'dan 229'a indirdim) Ama
eklentiye ait tüm bilgileri silemiyoruz. WordPress için Windows’daki
Program Ekle/Kaldır’ın kaldırı gibi eklenen eklentinin tüm bileşenlerini
kaldıran bir araç yada eklenti eklenmeli. Ben biraz araştırdım ama bu
işi görecek bir eklenti veya araç göremedim. Sitemi hızlandırmak için
Wordpress Temanızdan Silebileceğiniz 13 Etiket yazısındakileride
yaptım. Hissedilebilir bir hızlanma odlumu bilmiyorum. Ben pek bir şey
hissetmedim.

-   [http://blog.wolkanca.com/wordpress-25-ve-wp-super-cache/][]
-   [http://blog.wolkanca.com/wordpress-js-ve-css-onbellek-eklentileri/][]

  [wp-Cache]: http://wordpress.org/extend/plugins/wp-cache/
  [bahsedilen]: http://www.dmry.net/wordpress-blogunuzdaki-gereksiz-ayar-verilerini-silin
  [http://blog.wolkanca.com/wordpress-25-ve-wp-super-cache/]: http://blog.wolkanca.com/wordpress-25-ve-wp-super-cache/
  [http://blog.wolkanca.com/wordpress-js-ve-css-onbellek-eklentileri/]: http://blog.wolkanca.com/wordpress-js-ve-css-onbellek-eklentileri/
