---
layout: post
title: Internet Explorer 6 olmasa hayat daha kolay ve zevkli olurdu
Date: 2008-09-10 10:23
Category: CSS, Javascript, Web Standartları, XHTML
tags: ie6, internet explorer, İnternet Tarayıcısı
---

![][100]

Web kod yazarlarını en çok zorlayan konulardan biri farklı tarayıcılara
uyumlu kod yazmaktır. Birinin düzgün yorumladığını diğer farklı yorumlar
ve bizim için arayış ve çile başlar, çözünce geçici bir sevinç yaşarız
genelde. Farklı tarayıcılara göre kod yazmak bu iş için devamlı bir
sorun olarak kalacağını düşünüyorum. Peki bu durumu nasıl aşacağız
derseniz, yaşadığım süreçlerden size şunu söyliyebilirimki zamanla aynı
hataları aldığımız için çözümü fazla zaman almıyor. Azda olsa farklı
hatalarla karşılaşıyoruz, bunlarıda arayıp çözüyoruz. 

Web kod yazarları her zaman bir tarayıcı ile uğraşır. Vakti zamanında
Netscape Navigator 4, Internet Explorer 5, Internet Explorer 5.5
uğraştık. Şimdide ve son olarakta Internet Explorer 6 ile uğraşıyoruz.
27 Ağustos'ta Internet Explorer 6 7.senesini doldurdu.

**Ama asıl sorun standart dışı tarayıcılar için ürettiğimiz fazla
kodlar. İşte burada Internet Explorer 6 sorun olmaya başlıyor.**



Yaklaşık 1-1,5 senedir yazdığım tüm kodlarda Internet Explorer 6 ile
sorunlar yaşamaktayım. Yaşadığımız sorunlardan dolayı moralimizin
bozulması ve çalışma azmimizi kırılmasını. Harcadığımız gayret ve zamanı
düşünürsek bu olay web kod yazarları için çok büyük bir dert. Bu
sorunların manevi olduğu kadar maddi kayıplarıda var kaybedilen zaman
düşünüldüğünde bir çok firma için ciddi parasal kayıp söz konusu. Buna
Türkiye'deki bir çok firma bilmiyor, bilenlerde çare aramıyor. Ama
yurtdışında durum farklı.

Internet Explorer 6
ile uğraşırken kaybedilen zaman ve eforu düşüne bazı firmalar(Facebook,
Apple ve 37signals) web sitelerinde internet Explorer
6 sürümü için destek vermeyeceklerini bildirdi. Ayrıca internet Explorer
6'a karşı kampanya düzenleyen sitler var. Bir çok kod yazarı
bu sorunu en kısa zamanda çözmek için çabalıyor. M. Dave Auayan  Mart 2009'da internet Explorer 6 uyumuna
son vermek için bir site açtı IE[ Death March][].

Internet Explorer 6. sürümünün bizi bu kadar uğraştırmasında
Microsoft'un yeni sürüm çıkarmak için çok beklemesinin çok büyük katkısı
var. Kullanıcı için bu bir bakıma iyi bir bakıma kötü sonuçlar doğurdu.
İyi sonuçları bu süreçte alternatif tarayıcıların büyümesine katkı
sağladı. Kötü sonuçlarını ise daha çok web kod yazarları çekiyor. Her
yazdığı kodu internet Explorer 6'ya göre test edip uyarlamak zorundayız.
Bu zorunluluğu hala Internet Explorer 6 kullanan %20-25'in üzerinde olan
kullanıcı yüzdesi. Farklı istatistik sitelerinde farklı değerler
alıyoruz. Benim sitemde %14 gibi bir oran var. 

CSS Problemleri ve Çözüm Önerileri adlı bölümdeki 14 konudan 10 tanesi
internet Explorer ile ilgili sorunlar. Bunları sayarsak;

-   [IE’de Hata Ayıklamak için şartlı Yorumlar Kullanmak][]
-   [CSS Hata Ayıklama Yöntemleri][]
-   [Css de kodumuzu İE’den gizleme][]
-   [CSS ile Kutu modeli, sorunları ve çözümleri][]
-   [IE’da İkikat görülen Margin Problemi ve Çözümü][]
-   [IE’da min-width, min-height,max-width, max-height Kullanmak][]
-   [IE6′un Tekrarlayan Karakter Sorunu][]
-   [IE’un 3 piksel Metin Öteleme Hatası][]
-   [IE6′da CEE-EEE(peek-a-boo) Hatası][]
-   [Göreceli-Mutlak Konumlandırma Sorunu][]
-   [Kenar Boşluğu(Margin) Çökmesi][]
-   [Float Uygulanmış Elementleri Tam Kapsayamama Sorunu][]
-   [Internet Explorer 6 için saydam PNG desteği][]

Bunun dışında diğer konulardaki Internet Explorer 6 sorunlarını
listelersek

-   [Özellik Seçicileri(Attribute Selectors)][]ie 6 desteklemiyor
-   [Pseudo-sınıfları ve Pseudo-elementleri][] ie 6 bir çok sınıfı
    desteklemiyor
-   [Sabit Konumlandırma (Postion:fixed)][] ie 6 desteklemiyor
-   [CSS ile Menü Yapmak III - Dikey Açılır Menüler][]
-   [CSS ile Menü Yapmak IV - Yatay Açılır Menüler][]

Görüldüğü gibi neredeyse yazdığım yazıların yarısında Internet Explorer
6 ile sorun yaşamışız ve çözüm üretmek zorunda kalmışız. 

İnsanı şöyle bir düşünce sarıyor. Bu insanlar hala niye Internet
Explorer 6 kullanıyor. Bu konuda css-tricks'in ayrıntılı güzel bir
çalışması
var. [http://css-tricks.com/why-people-still-use-ie-6/][] isteyen
bakabilir ben kısa kısa geçeceğim;

-   Bir çok büyük şirket sürüm yükseltmekte yavaş davranıyor ve birçok
    kullanıcı şirketlerinden eski sürümlerden interneti dolaşıyor.
-   Eski sürüm işletim sistemi kullanan kullanıcılar Windows 2000,
    Windows Me ve 98 hala ie6'yı kullanıyor
-   Pasif internet kullanıcıları sistemlerini yenilemediği müddetçe yeni
    sürüme yükseltmesi 
-   Yeni sürüm ve avantajlarından bi haber kullanıcılar

Sonuç olarak şunu söyleyebiliriz ki biz ie6 ile uğraşmaya yaklaşık 1-2
sene daha devam edeceğiz gibi görünüyor. Microsoft'un ie 8 çıkarması
belki bu süreci hızlandırabilir, ama ben pek ümitli değilim. Biz web kod
yazarları bu konuda müşterinin istekleri doğrultusunda kod yazdığımız
için elimizden gelen pek bir şey olmuyor açıkçası. 

Ne diyelim Internet Explorer 6'ya ölüm.

## Kaynaklar

-   http://wisdump.com/web-programming/campaigns-to-kill-the-web-browser-that-just-wont-die-internet-explorer-6
-   [http://cdharrison.com/2008/09/04/death-to-ie6/][]
-   [http://www.webmaster-source.com/2008/09/04/fighting-internet-explorer-6/][]
-   http://leblog.exuberance.com/2006/03/the_explorer_ta.html
-   [http://www.siberkultur.com/?q=37signals-ie6-destegini-kaldiriyor][]
-   [http://www.w3counter.com/globalstats.php][]
-   http://www.thecounter.com/stats/2008/August/browser.php
-   http://www.savethedevelopers.org/
-   [http://sonspring.com/journal/time-to-drop-ie6][]
-   [http://www.infoq.com/news/2008/07/ie6_on_its_way_out][]
-   [http://www.sitepoint.com/blogs/2008/08/25/is-it-time-to-ditch-ie6/][]
-   [http://css-tricks.com/why-people-still-use-ie-6/][]
-   http://elliotjaystocks.com/blog/archive/2008/death-to-ie6/
-   [http://iedeathmarch.org/][]
-   http://www.devlounge.net/column/the-death-of-internet-explorer-6-still-prematurely-called
-   [http://websitetips.com/css/solutions/][]
-   [http://my.opera.com/zomg/blog/2007/07/31/common-crossbrowser-css-issues][]


  [100]: /images/ie6-dur.gif

  [ Death March]: http://iedeathmarch.org/ "ie 6 death"
  [IE’de Hata Ayıklamak için şartlı Yorumlar Kullanmak]: http://www.fatihhayrioglu.com/?p=236
  [CSS Hata Ayıklama Yöntemleri]: http://www.fatihhayrioglu.com/?p=242
  [Css de kodumuzu İE’den gizleme]: http://www.fatihhayrioglu.com/?p=31
  [CSS ile Kutu modeli, sorunları ve çözümleri]: http://www.fatihhayrioglu.com/?p=13
  [IE’da İkikat görülen Margin Problemi ve Çözümü]: http://www.fatihhayrioglu.com/?p=131
  [IE’da min-width, min-height,max-width, max-height Kullanmak]: http://www.fatihhayrioglu.com/?p=182
  [IE6′un Tekrarlayan Karakter Sorunu]: http://www.fatihhayrioglu.com/?p=232
  [IE’un 3 piksel Metin Öteleme Hatası]: http://www.fatihhayrioglu.com/?p=231
  [IE6′da CEE-EEE(peek-a-boo) Hatası]: http://www.fatihhayrioglu.com/?p=235
  [Göreceli-Mutlak Konumlandırma Sorunu]: http://www.fatihhayrioglu.com/?p=240
  [Kenar Boşluğu(Margin) Çökmesi]: http://www.fatihhayrioglu.com/?p=362
  [Float Uygulanmış Elementleri Tam Kapsayamama Sorunu]: http://www.fatihhayrioglu.com/?p=373
  [Internet Explorer 6 için saydam PNG desteği]: http://www.fatihhayrioglu.com/?p=492
  [Özellik Seçicileri(Attribute Selectors)]: http://www.fatihhayrioglu.com/?p=243
  [Pseudo-sınıfları ve Pseudo-elementleri]: http://www.fatihhayrioglu.com/?p=86
  [Sabit Konumlandırma (Postion:fixed)]: http://www.fatihhayrioglu.com/?p=431
  [CSS ile Menü Yapmak III - Dikey Açılır Menüler]: http://www.fatihhayrioglu.com/?p=216
  [CSS ile Menü Yapmak IV - Yatay Açılır Menüler]: http://www.fatihhayrioglu.com/?p=217
  [http://css-tricks.com/why-people-still-use-ie-6/]: http://css-tricks.com/why-people-still-use-ie-6/
  [http://cdharrison.com/2008/09/04/death-to-ie6/]: http://cdharrison.com/2008/09/04/death-to-ie6/
  [http://www.webmaster-source.com/2008/09/04/fighting-internet-explorer-6/]: http://www.webmaster-source.com/2008/09/04/fighting-internet-explorer-6/
  [http://www.siberkultur.com/?q=37signals-ie6-destegini-kaldiriyor]: http://www.siberkultur.com/?q=37signals-ie6-destegini-kaldiriyor
  [http://www.w3counter.com/globalstats.php]: http://www.w3counter.com/globalstats.php
  [http://sonspring.com/journal/time-to-drop-ie6]: http://sonspring.com/journal/time-to-drop-ie6
  [http://www.infoq.com/news/2008/07/ie6_on_its_way_out]: http://www.infoq.com/news/2008/07/ie6_on_its_way_out
  [http://www.sitepoint.com/blogs/2008/08/25/is-it-time-to-ditch-ie6/]: http://www.sitepoint.com/blogs/2008/08/25/is-it-time-to-ditch-ie6/
  [http://iedeathmarch.org/]: http://iedeathmarch.org/
  [http://websitetips.com/css/solutions/]: http://websitetips.com/css/solutions/
  [http://my.opera.com/zomg/blog/2007/07/31/common-crossbrowser-css-issues]: http://my.opera.com/zomg/blog/2007/07/31/common-crossbrowser-css-issues
