---
layout: post
title: Sitenin Alt Yapısını Değiştirdik
Date: 2012-10-15 11:54
Category: Haberler
tags: [fatihhayrioglu.com, wordpress, pelican, github]
---

Uzun süredir wordpress alt yapısı ile devam ettiğim sitemi hosting
sorunları nedeni ile değiştirmek zorunda kaldım. Şu an yeni sistem
üzerinden sizlere ulaşıyorum. Biliyorum bir çok eksiğim var, zamanla
düzeltmeyi öngörüyorum.

Wordpress’in sistemi kullanıcı sayısı belli bir sayının üzerine çıkınca
sistemi zorluyor. İlk sorunu seneler önce tekil kullanıcı sayısının
100’ü geçmesi ile yaşadım. Hosting şirketimi değiştirdim. İkinci
sorunumu 2-3 sene önce tekil kullanıcı sayısı 700-800 civarında iken
yaşadım, cache eklentisi kurarak onu aştım. Üçüncü ve son sorunumu geçen
hafta yaşadım tekil kullanıcı sayım 1300-1500 aralığında idi ve hosting
şirketi cpu’ya çok yüklendiğim için sitemi kapatmıştı. Zor anlardı benim
için belli bir uğraş sonunda sorunu düzeltemedim ve wordpress ile olan
birlikteliğime son verme kararı aldık. Hakkını vermeliyim Wordpress’in
bana çok büyük katkıları oldu.  Ben wordpress alt yapısını çok
bilmediğimden de bu sorun olabilir. [Murat Çorlu][]’nun önerisi ve
yardımı ile siteyi statik html’e çevirmeye karar verdik. Sonuçta bilgi
paylaşmaktı amaç. Sitemi statik html çevirmek ve github’dan host etmeye
karar verdik. [Pelican][] ve [github][] alt yapısını kullandık. Yorumlar
zaten [http://disqus.com/][] dan alıyordum. Statik sitenin dinamik olan
bir kaç parçası hariç her şeyinin böylelikle daha basit ve sorunsuz
olarak yayınlayabilirdik. Kurulum ve desteği için Murat Çorlu’ya ne
kadar teşekkür etsem azdır.

Her yenilik beraberinde bazı sorunları getiriyor. Aşağıdaki listeyi
çıkardım, yavaş yavaş bunları düzelteceğim. Sizlerinde gördüğü eksikler
olursa bana iletirseniz çok sevinirim.

Sitenin Eksikleri
-----------------

1.  RSS Düzelt
2.  Fontu Değiştir.
3.  İçeriği düzenle
	1.  Türkçe karakter sorunu var highlight içeriğinde
    2.  Highlight ikinci satırlar patlak
    3.  Dipteki linkler sorunlu
    4.  **İçerikteki üstte sağda bilgi alanına genişlik ver .post-info
        width:200px**
    5.  Kod kısmını düzenle
    6.  Sayfalardan info kısmını kaldır
    7.  Kitap sayfasını düzelt
    8.  Temayı Türkçeleştir
    9.  Arama ekle
    10. Tarayıcı Uyumu kısmı sorunlu
    11. Yapısı Bölümü sorunlu
    12. Siteden gelen resimler sorunlu
    13. Sitedeki örnek htmller sorunlu (https://fatihhayrioglu.com/static/dokumanlar/ardalan_ekle4.html)
4.  Highlight tasarımını değiştir
5.  Site tasarımına el at.
6.  Açılmayan Sayfalar
	1.  [https://fatihhayrioglu.com/kutu-modeli-margin-ozellikleri/][]

  [Murat Çorlu]: http://muratcorlu.com/
  [Pelican]: http://docs.getpelican.com/en/3.0/
  [github]: https://github.com/
  [http://disqus.com/]: http://disqus.com/
  [https://fatihhayrioglu.com/kutu-modeli-margin-ozellikleri/]: https://fatihhayrioglu.com/kutu-modeli-margin-ozellikleri/