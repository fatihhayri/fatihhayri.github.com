---
layout: post
title: İnternet Explorer 7&#039;yi Bitirmeli miyiz?
Slug: internet-explorer-7-bitirmeli-miyiz
Date: 2012-06-14 12:56
categories: [CSS]
tags: [after, before, ie7, internet explorer]
---

[“IE6 Sonrası Kod Yazma Alışkanlıklarımızı Güncellemek”][] yazısından
sonra ie7 istatistikleri daha çok ilgimi çeker oldu. Şu anki
istatistiklere bakarsak %4 civarında(makaleye başladığımda %10 idi.) ie7
kullanan kullanıcı var, peki biz bunları yoksayabilirmiyiz ve yok
sayarsak bize neler kazandırır bu makalemde bunları irdeleyeceğim.

İnternet Explorer 7. sürümünü bundan yaklaşık 5 sene önce çıkardı.
Genelde ie6’nın kötü namının yanında iyi olarak görünse de Microsoft’un
işi düzeltemediği ara sürümlerden biri oldu hep. Windows Vista’nın
Windows Xp ve Windows 7 arasında kalması ile pek rağbet görmedi dersek
yeridir.

![][100]

kaynak: http://blogs.msdn.com/b/ie/

Yukarıdaki grafiği Microsoft’un kendi blog sitesinden aldım. Bir çok
şeyin göstergesi aslında yukarıdaki resim. CSS2.1 tam desteğini ancak
ie8 ile veren Microsoft ne kadar geride olduğunuda gösteriyor.

**hasLayout Sorunları:** Geçenki makalemde genel olarak bahsettiğim
[hasLayout sorunları][] sayfa yapılarının yerleşiminde çok sık
rastladığımız sorunların ana kaynağı.

**:before ve :after desteği:**Çoklu kenar çizgisi kullanımı, css3 renk
geçişi kullanılan elementlere ikon eklemek istediğimizde, resimsiz
tooltip oluşturmak istediğimizde vb birçok kullanım alanı olan bu iki
özelliği kullanabileceğiz artık. Önemli bir konu [Murat Çorlu][]'nun bu
konuda bir makale hazırlığı var. Dört gözle bekliyoruz.

**content değeri desteği:** CSS ile html içine içerik ekleme imkanı
sağlayan güzel bir özelliği artık kullanabileceğiz.

**outline desteği:** Odaklanılan alanları belirlemek için kullanılan bu
özelliği erişebilirlik açısından önemli. Artık Standart çizgilerin
dışında istediğimiz görüntüyü veribileceğiz.

**Performans farkı:**İnternet Explorer’un kendi günlük sitesinden
öğrendiğimize göre ie7 ile ie8 arasında en az 2,5 katlık bir performans
farkı var.


 - **Ağ İyileştirmeleri:** ie7 ve altı tarayıcılarda bir sunucudan en
fazla 2 öğe indirilebilirken ie8’de bu sayı 6’ya çıkarılmıştır. Buda
sırada az sayıda bekleme ve site açılış hızının artması demek oluyor.

 - **Script Geliştirmeleri:** Sayfadaki script yorumlamada ciddi
hızlanmalar olmuş. SunSpider test aracına göre ie7 ile ie8 arasında
%400’lık hız farkı var.

 - **Bellek Kullanımında İyileştirmeler:**ie8’de bellek ile alakalı
400’den fazla iyileştirme yapılmış.

 - **Yorumlayıcı Motor Yenilikleri:** Yeni CSS2.1’e tam uyumlu yorumlayıcı
ile daha az hatalı bir yorumlayıcıya kavuştu.

 - **Native Json Desteği:** ie8 ile birlikte gelen native jSON desteği
ile daha hızlı işlem yapabiliyoruz. Ajax isteklerimiz daha hızlı artık.

**HTML5 Selector API Desteği:** Javascript ile element bulmak için
**getElementById()**, **getElementsByName()** and
**getElementsByTagName()** metotlarını kullanıyoruz. HTML5 Selector API
desteği ile **[querySelector()][]** ve **[querySelectorAll()][]** diye
iki adet metot daha gelmektedir. jQuery’den aşina olduğumuz bu seçiciler
bize çok büyük avantajlar sağlıyor.

**localStorage Özelliği:**Kısaca çerezlerin(cookies) daha gelişmiş
sürümü olarak tanımlayabiliriz bu özelliği.

**:focus desteği:** Klavyeden elementlere odaklanmamızı sağlayan ve
erişebilirlik için önemli olan bu özelliği artık uygulayabiliyoruz.

**Data URI Desteği:**Internet Explorer 8 ile birlikte DATA URI desteği
geliyor. DATA URI kısaca html dosyasından ayrı yapıların yani resimlerin
html içine gömme imkanı verir bize. internet Explorer 8 sadece css
dosyalarına eklenmesine izin veriyor ayrıca bir kısıtlama var ie8 en
fazla 32kb boyutuna kadar destekliyor.

**box-sizing:** box-sizing özelliği bize kutunun genişliğinin border ve
padding değerlerinin içerip içermemesi gerektiğini tanımlama imkanı
sağlıyor. Detaylı bilgi için [tıklayınız.][]

**:active Sözde sınıfı**işlevselliği arttı ie7’de sadece
bağlantılara(<a\>) verilirken artık tüm HTML elementlerini kapsıyor.

**IE8 Geliştirici Aracı geldi:** Firebug kadar olmasada ie içinde böyle
bir aracın olması büyük bir avantaj. CSS özelliklerini görebilmek ve
değiştirme imkanı bile yeter. İnternet Explorer 7’den daha gelişmiş bir
geliştirici aracı ile javascript hatalarımızı görmek büyük avanataj.
Geliştirici Aracının diğer özellikleride ie8'de geliştirilmiş durumda.

**Yazı ve Metin Özellikleri:** Yazı ve metin özellikler için CSS2.1 için
tam destek geliyor. [font-weight][], [white-space][] (pre-wrap ve
pre-line değerleri destekleniyor), [word-spacing][]. Ayrıca
**text-decoration** özelliğinin **overline** değeride destekleniyor.

**Test Zamanı:** Bir çok arayüz geliştirici yazdığı kodları farklı
tarayıcılar ile test eder. Şu an benim test ettiğim tarayıcılar (ie7,
ie8, ie9, Chrome ve Firefox) bunların arasında en fazla zamanımı ie7
testleri alıyor. İnternet Explorer 7 sonrasında test sürelerimde ciddi
azalma olacağını düşünüyorum.

onhashchange özelliğini ie8+
https://developer.mozilla.org/en/DOM/window.onhashchange

## Diğer Kazanımlar

-   inline-block özelliğini sorunsuz kullanacağız artık.
    **display:inline-block** tanımını kullanımında ie6 ve ie7 için
    ayrıca düzeltme kodu yazıyorduk, artık buna gerek kalmadı.
    [http://fatihhayrioglu.com/super-bir-ozellik-displayinline-block/][]
-   eksi margin sorunları için çözüm üretmeye son.
    [http://fatihhayrioglu.com/eksi-margin-kullanimi/][]
-   **display:table** desteği artık var. Dikey ortalamada fazladan
    yazdığımız kodlara son.
    [http://fatihhayrioglu.com/genisligi-belli-olmayan-blok-level-elemanlari-yatayda-ortalamak/][]
-   ie7 z-index sorunlarının sonu
    [http://fatihhayrioglu.com/z-index/][]
-   ilk harfi büyük göstermede artık sorun yaşamayacağız
    [http://fatihhayrioglu.com/ilk-harfi-buyukdrop-caps-paragraflar-olusturmak/][]
-   lang seçici desteği atrık var.
-   [Float Uygulanmış Elementleri Tam Kapsayamama Sorunu][] için artık
    sadece **:after**ile çözüm yeterli olacak.
-   [Tablo Satırına Verilen Ardalan Resminin Tekrarlama Sorunu][] ie
    için yok artık.
-   [İnternet Explorer 6 ve 7 için Tablo tr elementine kenar çizgisi atamak][] sorunu yok artık
-   [İnternet Explorer’da sağdaki sabit kaydırma çubuğunu kaldırmak sorunu][] yok artık
-   [ie6/7′da postion:relative Uygulanmış Elemanlarda z-index Sorunu][] yok artık
-   [overflow ve position:relative kullanımında ie sorunu][] yok artık
-   [IE6 ve IE7′de bağlantılardaki cursor sorunu][] yok artık
-   [overflow:auto içinde %100 genişlikte tablo kullanımında ie7’de yatay kaydırma çubuğu sorunu][] yok artık
-   [İE7 Bitişik Kardeş Seçicisi Sorunu][] yok artık
-   [Kenar Boşluğu(Margin) Çökmesi][] sorunu yok artık
-   @import tanımlarındaki ie7 sorunları yok artık.
-   [border:hidden][] sorunu yok artık
-   [border-style outset renk farklılığı sorunu][] yok artık
-   <p> elementi standart padding değeri ie7’de farklı idi. Şimdi çözüldü.
-   Microsoft’un kutu modeli kabülü ile w3c’nin kutu modeli arasındaki fark artık yok.
-   **:first-child** dinamik kullanım sorunu ie8 ile birlikte çözüldü.
-   **counters** desteği **counter-increment** ve **counter-reset**
-   **position desteği** [http://www.quirksmode.org/css/position.html][]
-   **tablo border desteği** [http://www.quirksmode.org/css/columns.html][]
-   **tablo visibility:collape desteği**[http://www.quirksmode.org/css/columns.html][]
-   **empty-cells desteği** [http://www.quirksmode.org/css/tables.html][]
-   **border-collapse sorunları** [http://www.quirksmode.org/css/tables.html][]
-   **border-spacing desteği** [http://www.quirksmode.org/css/tables.html][]
-   **caption-size desteği** [http://www.quirksmode.org/css/tables.html][]
-   [http://ajaxian.com/archives/display-table][]

## Sonuç

Microsoft’un tarayıcı üretimindeki umursamaz tutumu sonucu oluşmuş ie7
tarayıcısının kullanım oranının hızla düştüğü bu günlerde ie7 sonrası
neler kazanacağımızı görmek arayüz geliştiriciler için önemlidir.
ie6’nın yanında ufak görünse bile aslında bir çok uğraştan bizi
kurtardığını yukarıda gördük. Benim tahminim yaz aylarında
ie7 desteğini keseceğiz gibi görünüyor. Sene sonu olarak
güncelliyorum.

[sahibinden.com][] Haziran istatistiklerine göre %4 olan ie7’nin normal
kullanıcılar için %5’in altına indiğinde bırakılması sorun
oluşturmayacaktır. Ancak büyük kullanıcı kitlelerine erişim sağlayan
sitelerde %2’nin altına inmeden desteği kaldırmak mantıklı görünmüyor.

- Google uygulamalarında geçen sene ie7 desteğini kaldırdı.
- Facebook yeni zaman tünelinde ie7 desteğini kaldırdı.
- Drupal 8 ile ie7 desteğini kaldırdı.
- wordpress 3.3 veya 3.4’den itibaren ie7 desteğini kaldırmayı
düşünüyor.

Son olarak [Internet Explorer 8′i 7 gibi yorumlama kodu][] eklediğiniz
sitelerden kaldırmayı unutmayın.

## Kaynaklar

-   blogs.msdn.com/b/ie/archive/2008/03.aspx
-   blogs.msdn.com/b/ie/archive/2008/03/07/internet-explorer-8-beta-1-for-developers-standards-highlights.aspx
-   blogs.msdn.com/b/ie/archive/2008/07.aspx
-   blogs.msdn.com/b/ie/archive/2008/04/10/html-and-dom-standards-compliance-in-ie8-beta-1.aspx
-   blogs.msdn.com/b/ie/archive/2009/01.aspx
-   blogs.msdn.com/b/ie/archive/2008/08/19/more-tests-submitted-to-the-w3c-css-2-1-test-suite.aspx
-   blogs.msdn.com/b/ie/archive/2008/08/26/ie8-performance.aspx
-   blogs.msdn.com/b/ie/archive/2008/09/08/microsoft-css-vendor-extensions.aspx
-   blogs.msdn.com/b/ie/archive/2009/03/24/what-s-new-in-jscript-for-ie8.aspx
-   blogs.msdn.com/b/ie/archive/2009/03/12/site-compatibility-and-ie8.aspx
-   [http://css-tricks.com/browser-support-pseudo-elements/][]
-   [http://share.ez.no/forums/general/browser-support-no-support-for-ie7][]
-   [http://www.netmagazine.com/news/google-apps-ditches-support-ie7][]
-   [http://fatihhayrioglu.com/internet-explorer-8in-nihai-surum-cikti/][]
-   [http://fatihhayrioglu.com/internet-explorer-8e-kisa-bir-bakis/][]
-   msdn.microsoft.com/en-us/library/cc304082(VS.85).aspx
-   http://blog.zimbra.com/blog/archives/2006/10/ie-7-vs-ie-6.html
-   www.nuricankaya.com/default.asp?gunluk_id=407
-   jclaes.blogspot.com/2010/11/html5-new-in-javascript-selector-api.html
-   msdn.microsoft.com/en-us/library/cc304082(v=vs.85).aspx
-   http://haslayout.net/haslayout
-   [http://ejohn.org/blog/javascript-in-internet-explorer-8/][]
-   [http://www.evotech.net/blog/2009/03/ie8-css-support/][]
-   [http://coding.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/][]
    (güzel)
-   blogs.msdn.com/b/ie/archive/2009/03/12/site-compatibility-and-ie8.aspx
-   [http://www.standardista.com/browsers/ie8-css-support-hac][] (güzel)
-   [http://www.quirksmode.org/css/contents.html#t15][]
-   computerworld.com/s/article/9217279/Google_to_dump_support_for_Microsoft_s_IE7
-   [http://thenextweb.com/facebook/2011/12/30/not-a-fan-of-timeline-on-facebook-use-ie7-facebook-stopped-supporting-it/][]
-   [http://drupal.org/node/1217788][]
-   [http://theie7countdown.com/][]
-   [http://gmailblog.blogspot.com/2011/06/our-plans-to-support-modern-browsers.html][]
-   [http://blogs.missouristate.edu/web/2012/03/26/goodbye-ie7-we-wont-miss-you/][]
-   [http://caniuse.com/#compare=y&b1=ie+7&b2=ie+8][]


  [“IE6 Sonrası Kod Yazma Alışkanlıklarımızı Güncellemek”]: http://fatihhayrioglu.com/ie6-sonrasi-kod-yazma-aliskanliklarimizi-guncellemek/
  [100]: https://lh4.googleusercontent.com/w0y8NKzSAkoVYSxwu3S_dL-6YFeEdqa8zYEjbgLRZ5_vx_AdB9ZtGweRi3h7Hi9s3PqDJ-qdcR4DKWo8ydjWA2zQC15AWhSnFLcrgZlhP-sg0A5LdhY
  [hasLayout sorunları]: http://fatihhayrioglu.com/internet-explorer-haslayout-kabulu-ve-sorunlari/
  [Murat Çorlu]: https://twitter.com/#!/muratcorlu
  [querySelector()]: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  [querySelectorAll()]: https://developer.mozilla.org/en-us/docs/Web/API/Document/querySelectorAll
  [tıklayınız.]: http://fatihhayrioglu.com/css3-box-sizing-ozelligi/
  [font-weight]: http://fatihhayrioglu.com/font-ozellikleri/
  [white-space]: http://fatihhayrioglu.com/css-siniflandirma-liste-ozellikleri/
  [word-spacing]: http://fatihhayrioglu.com/cssde-metintext-ozellikleri/
  [http://fatihhayrioglu.com/super-bir-ozellik-displayinline-block/]: http://fatihhayrioglu.com/super-bir-ozellik-displayinline-block/
  [http://fatihhayrioglu.com/eksi-margin-kullanimi/]: http://fatihhayrioglu.com/eksi-margin-kullanimi/
  [http://fatihhayrioglu.com/genisligi-belli-olmayan-blok-level-elemanlari-yatayda-ortalamak/]: http://fatihhayrioglu.com/genisligi-belli-olmayan-blok-level-elemanlari-yatayda-ortalamak/
  [http://fatihhayrioglu.com/z-index/]: http://fatihhayrioglu.com/z-index/
  [http://fatihhayrioglu.com/ilk-harfi-buyukdrop-caps-paragraflar-olusturmak/]: http://fatihhayrioglu.com/ilk-harfi-buyukdrop-caps-paragraflar-olusturmak/
  [Float Uygulanmış Elementleri Tam Kapsayamama Sorunu]: http://fatihhayrioglu.com/float-uygulanmis-elementleri-tam-kapsayamama-sorunu/
  [Tablo Satırına Verilen Ardalan Resminin Tekrarlama Sorunu]: http://fatihhayrioglu.com/tablo-satirina-verilen-ardalan-resminin-tekrarlama-sorunu/
  [İnternet Explorer 6 ve 7 için Tablo tr elementine kenar çizgisi atamak]: http://fatihhayrioglu.com/internet-explorer-6-ve-7-icin-tablo-tr-elementine-kenar-cizgisi-atamak/
  [İnternet Explorer’da sağdaki sabit kaydırma çubuğunu kaldırmak sorunu]: http://fatihhayrioglu.com/internet-explorerda-sagdaki-sabit-kaydirma-cubugunu-kaldirmak/
  [ie6/7′da postion:relative Uygulanmış Elemanlarda z-index Sorunu]: http://fatihhayrioglu.com/ie67da-postionrelative-uygulanmis-elemanlarda-z-index-sorunu/
  [overflow ve position:relative kullanımında ie sorunu]: http://fatihhayrioglu.com/overflow-ve-positionrelative-kullaniminda-ie-sorunu/
  [IE6 ve IE7′de bağlantılardaki cursor sorunu]: http://fatihhayrioglu.com/ie6-ve-ie7de-baglantilardaki-cursor-sorunu/
  [overflow:auto içinde %100 genişlikte tablo kullanımında ie7’de yatay kaydırma çubuğu sorunu]: http://fatihhayrioglu.com/overflowauto-icinde-genislikte-tablo-kullaniminda-ie7de-yatay-kaydirma-cubugu-sorunu/
  [İE7 Bitişik Kardeş Seçicisi Sorunu]: http://fatihhayrioglu.com/ie7-bitisik-kardes-secicisi-sorunu/
  [Kenar Boşluğu(Margin) Çökmesi]: http://fatihhayrioglu.com/kenar-boslugumargin-cokmesi/
  [border:hidden]: http://test.csswg.org/suites/css2.1/20110111/html4/border-conflict-w-001.htm
  [border-style outset renk farklılığı sorunu]: http://test.csswg.org/suites/css2.1/20110111/html4/border-conflict-w-006.htm
  [http://www.quirksmode.org/css/position.html]: http://www.quirksmode.org/css/position.html
  [http://www.quirksmode.org/css/columns.html]: http://www.quirksmode.org/css/columns.html
  [http://www.quirksmode.org/css/tables.html]: http://www.quirksmode.org/css/tables.html
  [http://ajaxian.com/archives/display-table]: http://ajaxian.com/archives/display-table
  [sahibinden.com]: http://sahibinden.com/
  [Internet Explorer 8′i 7 gibi yorumlama kodu]: http://fatihhayrioglu.com/internet-explorer-8i-7-gibi-yorumla-kodu/
  [http://css-tricks.com/browser-support-pseudo-elements/]: http://css-tricks.com/browser-support-pseudo-elements/
  [http://share.ez.no/forums/general/browser-support-no-support-for-ie7]: http://share.ez.no/forums/general/browser-support-no-support-for-ie7
  [http://www.netmagazine.com/news/google-apps-ditches-support-ie7]: http://www.netmagazine.com/news/google-apps-ditches-support-ie7
  [http://fatihhayrioglu.com/internet-explorer-8in-nihai-surum-cikti/]: http://fatihhayrioglu.com/internet-explorer-8in-nihai-surum-cikti/
  [http://fatihhayrioglu.com/internet-explorer-8e-kisa-bir-bakis/]: http://fatihhayrioglu.com/internet-explorer-8e-kisa-bir-bakis/
  [http://ejohn.org/blog/javascript-in-internet-explorer-8/]: http://ejohn.org/blog/javascript-in-internet-explorer-8/
  [http://www.evotech.net/blog/2009/03/ie8-css-support/]: http://www.evotech.net/blog/2009/03/ie8-css-support/
  [http://coding.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/]: http://coding.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/
  [http://www.standardista.com/browsers/ie8-css-support-hac]: http://www.standardista.com/browsers/ie8-css-support-hac
  [http://www.quirksmode.org/css/contents.html#t15]: http://www.quirksmode.org/css/contents.html#t15
  [http://thenextweb.com/facebook/2011/12/30/not-a-fan-of-timeline-on-facebook-use-ie7-facebook-stopped-supporting-it/]: http://thenextweb.com/facebook/2011/12/30/not-a-fan-of-timeline-on-facebook-use-ie7-facebook-stopped-supporting-it/
  [http://drupal.org/node/1217788]: http://drupal.org/node/1217788
  [http://theie7countdown.com/]: http://theie7countdown.com/
  [http://gmailblog.blogspot.com/2011/06/our-plans-to-support-modern-browsers.html]: http://gmailblog.blogspot.com/2011/06/our-plans-to-support-modern-browsers.html
  [http://blogs.missouristate.edu/web/2012/03/26/goodbye-ie7-we-wont-miss-you/]: http://blogs.missouristate.edu/web/2012/03/26/goodbye-ie7-we-wont-miss-you/
  [http://caniuse.com/#compare=y&b1=ie+7&b2=ie+8]: http://caniuse.com/#compare=y&b1=ie+7&b2=ie+8
