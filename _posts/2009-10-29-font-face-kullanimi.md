---
layout: post
title: font-face kullanımı
Date: 2009-10-29 19:15
Category: CSS, XHTML
tags: farklı tarayıcılara göre kod yazmak, font-face, yazı tipi, yazı tipi gömme
---

## @font-face Genel Bilgi

@font-face özelliği web sitelerimizde sistemde yüklü olmayan yazı
tiplerini kullanma imkanı verir. @font-face kodu ile kullanıcının
bilgisayarına kullanılacak yazı tipleri yüklenir. @font-face özelliği
ilk olarak CSS2 ile birlikte geldi, ancak sonradan bazı problemlerden
dolayı CSS2.1'de kaldırıldı ve şimdi CSS3 ile birlikte yeniden geldi.

Tipografi hakkında bir çok makale yazıldı ve yazılmaktadır. Bende
zamanında [CSS ve Tipografi][] adlı bir makale yayınlamıştım ve orada
yazı tipi seçiminin öneminden bahsetmiştim. Biz halihazırda farklı yazı
tiplerini sitelerimizde kullanmak için [sIFR][],  [Cufón][] vd. bazı
yöntemleri kullanmaktayız. Bu yöntemler işimizi görse de bazı
dezavantajları yok değildi. @font-face bu sorunları gidermek ve
yenilikler getirmek için bizlere sunuldu. Bu konuda ümitliyim.

@font-face özelliğini tüm yeni nesil tarayıcılar destekliyor. Diğer
özelliklerden farklı olarak ilk defa bu özelliği Firefox, Opera ve
Safari sonradan destekledi. Şu an ki durumda kullanmak mümkün olsa da
bence en az 4-5 aylık(Firefox'un eski sürümlerinin yerini Firefox 3.5
alması için) bir süre sonra tam anlamıyla bir projede kullanılabilir.
Tabi tek sorunumuz bu ise.

![fontface_destek_tablosu][]

Kaynak: [Vikipedia][]



## @font-face Yazı tipi Çeşitleri

@font-face kullanımında farklı tarayıcılar farklı yazı tipi dosya
uzantılarını desteklediği için birden fazla yazı tipi dosyası
hazırlamalıyız. İnternet Explorer .eot uzantılı yazı tiplerini
desteklerken, diğer tarayıcılar .ttf ve .otf uzantılı yazı tiplerini
desteklemektedir. Biz kullanacağımız yazı tiplerinin ie için .eot
uzantılı ve diğerleri için .ttf veya .otf uzantılı dosyalarını
hazırlamamız gerekecektir. Ayrıca Opera9 ve Google Chrome içinde .svg
uzantılı dosya hazırlamalıyız. 

@font-face kodu ile sayfalarımıza ekleyebileceğimiz yazı tipi
çeşitlerini incelersek;

-   **.eot Uzantılı dosyalar:** .eot(Embedded OpenType) Microsfot'un
    baştan beri desteklediği yazı tipi dosya uzantısıdır. Diğer yazı
    tipi çeşitlerine destek vermeyi pek düşünmeyen İnternet Explorer bu
    konuda da ayak bağı olacağa benzer. WEFT aracı ile .ttf uzantılı
    dosyalarınızı .eot uzantılı dosyalara çevirebilirsiniz. Biraz
    karışık geldi bu program bana.
-   **.ttf ve .otf uzantılı dosyalar:** Genelde Windows işletim
    sistemininde kullandığı bu yazı tipi dosya çeşitlerini Firefox,
    Safari, Opera desteklemektedir. 
-   **.svg uzantılı yazı tipi dosyaları:** Vektörel, esnek yapılı yazı
    tipi dosya çeşidi. Safari, Google Chrome, Opera destekliyor.
    FontForge sitesindeki SVG uzantılı oluşturulan Opera'da sorun
    oluyor. [Batik][] bu araç var, ama nasıl kullanıldığını öğrenebilmiş
    değilim. Önerim [fontsquirrel.com][] sitesindeki aracı kullanmanız.
-   **woff uzantılı yazı tipi dosyaları:**Web için kullanılacak bir
    standart. Boyut olarak diğelerine nazaran %40'lara varan bir avantaj
    sağlıyor. Firefox 3.6 sonrasında destekleyeceğini açıkladı.

**Yazı tip dosyalarını birbirine çevirme araçları**

-   ttf yazı tipinizi font-face'in desteklediğin tüm yazı
    tiplerini(.eot, .svg, ttf, woff) üreten güzel bir araç:
    [http://www.fontsquirrel.com/fontface/generator][]
-   ttf yazı tiplerini eot'ya çevirmek için çevirim içi araç:
    [http://www.kirsle.net/wizards/ttf2eot.cgi][]
-   Farklı yazı tiplerini birbirine çeviren çevirim içi araç:
    [http://onlinefontconverter.com/][]
-   ttf'den eot ye çeviren başka bir çevirim içi araç
    [http://ttf2eot.sebastiankippe.com/][]
-   ttf'den svg'ye çevirme aracı:
    [http://xmlgraphics.apache.org/batik/tools/font-converter.html][]

Bunların dışında bazı programlar varsa da bunlar yeterli araçlar bence.

Burada şunu söylemeden geçemeyeceğim, fontsquirrel.com sitesi farklı
yazı tipi dosyaları üretmede çok yardımcı oldu. Bir çok site ve program
farklı yazı tipi dosyaları üretirken Ethan'ın sitesi web'de kullanılacak
tüm yazı tipi dosya uzantılarını üreterek bana çok yardımcı oldu. İlk
kez fontsquirrel.com sitesindeki aracı kullandığımda .svg uzantılı
dosyaların Opera'da kesik göründüğünü fark ettim. Sonra bu sorunu site
sahibi ile paylaşmak istedi, sağ olsun Ethan ilgilendi ve aracı
geliştirdi. Buradan Ethan'a tekrar teşekkürlerimi sunuyorum. Thanks,
Ethan  

## @font-face Kodu

Evet yazı tipi dosyalarımız hazırsa kodumuzu yazmaya başlayabiliriz.
@font-face kod yapısı

{% highlight css %}
@font-face {
    font-family: Gentium;
    src: url(http://site/fonts/Gentium.ttf);
}

p { 
    font-family: Gentium, serif; 
}
{% endhighlight %}


Kod yapımız iki kısımdan oluşmaktadır. İlk başta özel yazı tipimizi
sisteme yüklüyoruz. Sonra da bu yazı tipini kullanıyoruz. 

Ancak durum bu kadar kolay değil. Buradan itibaren ie kendini gösteriyor
ve farklı yazı tipi ile farklı kod yazmamız gerekiyor. Bundan başka bir
kaç sorunuda gidermek için [Paul Irish][]'in yazdığı makaleden
çıkardığımız kod:

{% highlight css %}
@font-face {
    font-family: 'Graublau Web';
    src: url('GraublauWeb.eot');
    src: local('Graublau Web Regular'), local('Graublau Web'),
    url('GraublauWeb.woff') format('woff'),
    url('GraublauWeb.svg#GraublauWeb') format('svg'),
    url('GraublauWeb.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

p { 
    font-family: "Graublau Web", serif; 
}
{% endhighlight %}


11 Kasım 2011 eklendi: font-weight: normal; font-style: normal;
Chrome'un kalın ve normal anlama problemi nedeni ile eklendi.

Bu kodlamanın özel yazı tipini sisteme tanıtırken ilk olarak .eot
uzantılı yazı tipini ekliyoruz ie için. Sonrasındaki satır ise diğer
tarayıcılar için yazılan kod. Buradaki yereldeki (local) tanımı eğer bu
yazı tipi kullanıcının bilgisayarında var ise yüklenmeden kullanılması
için ve de  sonraki kodu ie'den gizlemek içindir. Devamı kodlamada diğer
tarayıcılar içindir.

**Kendi Örneğimizi Yapalım**

[Hasan Yalçın'ın sitesinden][] Türkçe yazı tipi indiriyoruz. **TR
Centurion Old Italik.TTF** yazı tipini seçtim, sonra
[http://www.fontsquirrel.com/fontface/generator][] sitesinden farklı
yazı tiplerini ürettim. Şimdi elimde hem .ttf uzantılı hemde .eot
uzantılı yazı tipim var.

[http://fontface.codeandmore.com/][],
[http://onlinefontconverter.com/][1] ve [http://www.font2web.com/][]
diğer farklı yazı tipi üretme araçları

.ttf ve .eot uzantılı dosyalarım hazırsa kodu yazmaya başlayabiliriz.

{% highlight css %}
@font-face {
        font-family: 'TR Centurion Old  Italic';
        src: url('TR_Centurion_Old_Italik.eot');
        src: local('TR Centurion Old  Italic'), local('TRCenturionOldItalic'), url('TR_Centurion_Old_Italik.woff') format('woff'), url('TR_Centurion_Old_Italik.svg#TRCenturionOldItalic') format('svg'), url('TR_Centurion_Old_Italik.TTF') format('truetype');
}
{% endhighlight %}

Daha sonra bu yazı tipini sayfamızda kullanabiliriz.

{% highlight css %}
h1{font:44px 'TR Centurion Old Italic', Arial, sans-serif; color:#1259C7;}
h3{font:24px 'TR Centurion Old Italic', Arial, sans-serif; color:#1259C7;}
p.ilkParagraf{font:16px/1.5em 'TR Centurion Old Italic', Arial, sans-serif;}
{% endhighlight %}

Örnek sayfayı görmek için [tıklayınız.][] Yazı tipi özgürlüğüne hoş
geldiniz. 

## @font-face Yükleme Zamanı

Kullanıcının bilgisayarına yükletilen yazı tipi dosyaları yüklü dosyalar
olabiliyor. Sitede kullanılmayacak bazı yazı tipi karakterleri
kaldırılabilir. Bazı TTF dosyaları 1Mb bulduğunu düşünürsek biraz
yükleme zamanını düşünmek lazım. Yazı tipi dosyaları belli karakter
setlerini içerir. Latin harfleri, Yunan harfleri, Para işaretleri vd. Bu
karakter setlerinde kullanmadıklarımızı silip yazı tipi dosyasının
boyutunu azaltabiliriz. Aynı şekilde tek tek karakterleride
silebiliriz. 

Yazı tipi dosyaların iki şekilde yorumlanıyor. İlk olarak Firefox'un
yorumlaması; Sayfa genel yazı tipi ile açılıyor taki gömülen yazı tipi
dosyası yüklenene kadar. Yazı tipi dosyası yüklenince asıl yazı
tiplerini görüyoruz. İkinci yorum ise diğer tarayıcıların tercih ettiği
yol. Bu yorumda yazı tipi dosyası yüklenene kadar kullanıcı bekliyor,
yükleme tamamlanınca yazı görünüyor.

Bu nedenden dolayı font-face tanımını sayfamızın en üstüne koymalıyız.
Script dosyalarımız varsa onları tanımlamamızdan sonraya koymalıyız.

Yazı tipi dosyalarımızı sıkıştırabiliyoruz. sunucumuz gzip'i
destekliyorsa yazı tipi dosyalarımızı sıkıştırıp zaman kazanabiliriz.
Ayrıntılı bilgi için [tıklayınız.][2]

Yazı tipi dosyaları ön belleğe alındığı için kullanıcının sonraki
ziyaretlerinde daha az bekleme yapacaktır.

## @font-face Sorunları

-   Örnek sayfamıza farklı tarayıcılarda baktığımızda her bir
    tarayıcının ufak tefek farklılıklarla sayfayı gösterdiğini
    göreceğiz. Ben yaptığım örneklerde yazı tipine göre değişiyor bazı
    yazı tiplerinde mükemmele yakın sonuç verirken bazılarında köşeleri
    yumuşatmadığı için kötü sonuçlar elde edebiliyoruz. Bizim
    kullandığımız yazı tipi(**TR Centurion Old Italik**) eğik olduğu
    için pek belirgin bir fark görünmüyor, gayetde hoş oldu. 
-   En büyük sorunlarda biri hala ağırlıklı olarak kullanılan Windows
    XP'de ClearType seçeneğinin başlangıçta aktif olmamasıdır. Mac
    kullanıcılarının işletim sisteminin yazıları daha yumuşak kenarlı
    göstermesinden dolayı yazıları daha göze hoş şekilde göreceklerdir.
    Windows kullanıcılarının ClearType seçili durumda standarda nazaran
    daha iyi görüntüler elde edeceği aşikar, ancak Mac'e göre
    kıyaslarsak Mac bayağı bir fark atıyor PC'ye. 
-   @font-face'in sifR vd. yöntemlere göre en büyük dezavantajı
    anti-aliasing özelliğinden yoksun olması. Ancak kullanılan yazı
    tiplerinin seçiminde eğer daha seçici olursak bu durumu
    halledebiliriz.
-   font-face kullanımındaki en büyük sorunlardan biriside kullanıcının
    bilgisayarına indirilebilen ve isteyenleri kolayca elde edebileceği
    yazı tipi dosyalarının lisans haklarının nasıl korunacağı
    konusundadır. CSS2.0 sonrası kaldırılmasının ana nedenlerinden
    biriside budur. Bazı çözümler üretilse de tam anlamıyla bir çözüm
    elde edilmiş değildir.
-   Firefox 3.5 ile font-face kullanımını desteklemeye başladı. Firefox
    farklı hostlardan yazı tipi kullanmaya izin vermiyor(Böyle bir durum
    için .htcaccess dosyasına bir ekleme yapmak gerekiyor). Ayrıca
    font-stretch, unicode-range ve SVG yazı tipi dosyalarını da
    desteklemiyor. Firefox 3.6 sürümünden sonrası için yeni yazı tipi
    gelişmelerini destekleyeceğini açıkladı.
-   Opera'da local() yazı tipi tanımlamasında tırnak kullanmayınca sorun
    yaşayabilirsiniz. Bu nedenle tanımlarda hep tek veya çift tırnak
    kullanmalıyız.
-   Ziyaretçinin bilgisayarındaki isim ile bizim yazı tipi ismi aynı
    değilse local() tanımı pek bi işe yaramayacaktır. Bu nedenle
    bildiğimiz tüm isimleri ard arda local() tanımı içinde yazarak bu
    sorunu aşabiliriz. src: local("**TR Centurion Old Italik**"),
    local('**TRCenturionOldItalik**'),
    local("**Centurion Old Italik**"),
    local('**CenturionOld**'),
    url(../font/font.ttf) format('truetype');
-   FontForge programı ve fontsquirrel.com sitesinde üretilen .svg
    dosyaları Opera'da içiçe görünüyor. Çözüm için [Batik][]'i
    öneriyorlar.
-   Bir çok ücretsiz yazı tipi indirebileceğimiz site var ve bir çoğu
    yabancı site. Burada şöyle bir sorun var, çoğu Türkçe karakter
    içermiyor. Bunun için bizim bu karakterleri eklememiz gerekiyor.
    Google'da şöyle bir arama yaptım "[Font türkçeleştirme][]" bu işi
    anlata bir çok site var. 
-   Firefox kullanıcıları ilk olarak yazı tipi gömülmemiş halini
    görürler, ne zaman yazı tipi yüklenirse o zaman özel yazı tipimizi
    görürler.

## @font-face'in Geleceği ve Sonuç

Genel olarak küçük boyutlu fontlar güzel görünürken büyük boyutlu
fontlarda iyi görüntü alamayabiliyoruz. Ayrıca kıvrımlı hatlara sahip
yazı tiplerinde kenarlar daha pürüzlü görünüyor. Bence kullandığınız
fontu Windows xp'de test etmeden yayına almayınız. 

[Tarayıcı kullanım oranlarını][] incelediğimizde %94'lik bir font-face
destekleyen tarayıcı grubu var. 4-5 ay sonra bu oran 98 - 99 civarına
gelecektir.

@font-face özelliğinin bu kadar geç desteklenmesindeki en büyük sebep
elbetteki yazı tipi üretenlerin haklarının korunmasıdır. 

@font-face kullanılan sayfalardaki sonuçlar zamanla daha iyi sonuçlar
vereceğini düşünüyorum. İşletim sistemleri, tarayıcılar ve yazı tipi
geliştiricileri zamanla bu özelliğin farkına varıp buna göre kendilerini
geliştireceklerini düşünürsek zamanla daha iyi sonuçlar alacağımız
kesin.

Yazı tipi özelinde Tipografi genelindeki bu konuda araştırdığımız ve
öğrendiğimiz kadarını sizlerle paylaşmaya çalıştım, ancak konu çok geniş
ve derin olduğu için bir çok yönden eksik kalmış olabilir. Bir kusurumuz
aksaklığımız oldu ise affola.

## Kaynaklar

-   [http://www.useragentman.com/blog/2009/09/20/font-face-in-depth/][]
    (ayrıntılı makale)
-   [http://nickcowie.com/2008/font-face/][]
-   [http://www.w3.org/TR/css3-webfonts/#font-descriptions][]
-   [http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/][]
    (kod yapısı)
-   [http://www.kadirgunay.com/font-face-kullanimi-ve-kolayliklari.html][]
-   [http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/][]
    (detaylı)
-   [http://randsco.com/index.php/2009/07/04/p680][] (farklı tarayıcılar
    için)
-   [http://craigmod.com/journal/font-face/][]
-   [http://nimbupani.com/blog/font-in-your-face.html][]
-   [http://opentype.info/blog/2009/07/29/why-webfont-services-are-the-future-of-fonts-on-the-web/][]
    (detaylı anlatım)
-   [http://www.zeldman.com/2009/08/17/web-fonts-and-standards/][]
-   [http://blog.themeforest.net/tutorials/css-font-face-and-15-free-fonts-you-can-use-today/][]
-   <div>
    [http://www.stevesouders.com/blog/2009/10/13/font-face-and-performance/][](hız)
    </div>
-   [http://snook.ca/archives/html_and_css/becoming-a-font-embedding-master][]
-   [http://randsco.com/index.php/2009/09/04/better_font_face_syntax][]
-   [http://hacks.mozilla.org/2009/10/font-control-for-designers/][]
    (Firefox 3.6 ile yeni font tipi desteği)
-   [http://www.font-face.com/][]
-   [http://www.alistapart.com/articles/cssatten][]
-   [http://jontangerine.com/log/2008/10/font-face-in-ie-making-web-fonts-work][]
-   [http://reference.sitepoint.com/css/at-fontface][]
-   [http://www.seomium.com/xhtml-css-javascript-kodlama/ucretsiz-ve-yasal-fontlarla-font-face-kullanimi.html][]
-   [http://randsco.com/index.php/2009/07/04/p680][]
-   [http://opentype.info/demo/webfontdemo.html][] (örnek)
-   [http://devfiles.myopera.com/articles/593/webfonts.html][] (örnek)
-   [http://www.hipertipo.org/stuff/webfonts/ModularSerif.html][]
    (örnek)
-   [http://www.typotheque.com/webfonts/sample][] (örnek)
-   [http://nimbupani.com/blog/about-fonts-in-svg.html][] (SVG hakkında)
-   [http://www.spoono.com/html/tutorials/tutorial.php?id=19][] (EOT
    hakkında bilgi)
-   [http://www.phpied.com/gzip-your-font-face-files/][] (optimizasyon)
-   [http://www.stevesouders.com/blog/2009/10/13/font-face-and-performance/][]
-   [http://paulirish.com/2009/the-direction-forward-with-web-fonts/][]
-   [http://spyrestudios.com/21-awesome-font-face-embedable-typefaces/][]
    (örnekler)
-   [http://blog.themeforest.net/tutorials/how-to-achieve-cross-browser-font-face-support/][]

  [CSS ve Tipografi]: http://www.fatihhayrioglu.com/css-ve-tipografi/
    "CSS ve Tipografi"
  [sIFR]: http://www.fatihhayrioglu.com/metin-yerine-resimflash-ekleme-teknikleri-image-replacement/
    "sIFR"
  [Cufón]: http://www.yakuter.com/cufon-bir-sifr-alternatifi-hakkinda-her-sey/
    "Cufón"
  [fontface_destek_tablosu]: /images/fontface_destek_tablosu.gif
    "fontface_destek_tablosu"
  [Vikipedia]: http://en.wikipedia.org/wiki/Web_typography "Vikipedia"
  [Batik]: http://xmlgraphics.apache.org/batik/tools/font-converter.html
    "Batik"
  [fontsquirrel.com]: http://www.fontsquirrel.com/fontface/generator
  [http://www.fontsquirrel.com/fontface/generator]: http://www.fontsquirrel.com/fontface/generator
    "http://www.fontsquirrel.com/fontface/generator"
  [http://www.kirsle.net/wizards/ttf2eot.cgi]: http://www.kirsle.net/wizards/ttf2eot.cgi
    "http://www.kirsle.net/wizards/ttf2eot.cgi"
  [http://onlinefontconverter.com/]: http://onlinefontconverter.com/
    "http://onlinefontconverter.com/"
  [http://ttf2eot.sebastiankippe.com/]: http://ttf2eot.sebastiankippe.com/
    "http://ttf2eot.sebastiankippe.com/"
  [http://xmlgraphics.apache.org/batik/tools/font-converter.html]: http://xmlgraphics.apache.org/batik/tools/font-converter.html
    "http://xmlgraphics.apache.org/batik/tools/font-converter.html"
  [Paul Irish]: http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/
    "Paul Irish"
  [Hasan Yalçın'ın sitesinden]: http://www.hasanyalcin.com/turkce-fontlar/
    "Hasan Yalçın'ın sitesinden"
  [http://fontface.codeandmore.com/]: http://fontface.codeandmore.com/
  [1]: http://onlinefontconverter.com/
  [http://www.font2web.com/]: http://www.font2web.com/
  [tıklayınız.]: /dokumanlar/font_face/ornek.html
  [2]: http://www.phpied.com/gzip-your-font-face-files/ "tıklayınız."
  [Font türkçeleştirme]: http://www.google.com.tr/search?hl=tr&client=opera&rls=en&hs=wGu&q=font+T%C3%BCrk%C3%A7ele%C5%9Ftirme&btnG=Ara&meta=&aq=f&oq=
    "Font türkçeleştirme"
  [Tarayıcı kullanım oranlarını]: http://gs.statcounter.com/#browser_version-TR-monthly-200910-200910-bar
    "Tarayıcı kullanım oranlarını"
  [http://www.useragentman.com/blog/2009/09/20/font-face-in-depth/]: http://www.useragentman.com/blog/2009/09/20/font-face-in-depth/
    "http://www.useragentman.com/blog/2009/09/20/font-face-in-depth/"
  [http://nickcowie.com/2008/font-face/]: http://nickcowie.com/2008/font-face/
    "http://nickcowie.com/2008/font-face/"
  [http://www.w3.org/TR/css3-webfonts/#font-descriptions]: http://www.w3.org/TR/css3-webfonts/#font-descriptions
    "http://www.w3.org/TR/css3-webfonts/#font-descriptions"
  [http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/]: http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/
    "http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/"
  [http://www.kadirgunay.com/font-face-kullanimi-ve-kolayliklari.html]: http://www.kadirgunay.com/font-face-kullanimi-ve-kolayliklari.html
    "http://www.kadirgunay.com/font-face-kullanimi-ve-kolayliklari.html"
  [http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/]: http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/
    "http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/"
  [http://randsco.com/index.php/2009/07/04/p680]: http://randsco.com/index.php/2009/07/04/p680
    "http://randsco.com/index.php/2009/07/04/p680"
  [http://craigmod.com/journal/font-face/]: http://craigmod.com/journal/font-face/
    "http://craigmod.com/journal/font-face/"
  [http://nimbupani.com/blog/font-in-your-face.html]: http://nimbupani.com/blog/font-in-your-face.html
    "http://nimbupani.com/blog/font-in-your-face.html"
  [http://opentype.info/blog/2009/07/29/why-webfont-services-are-the-future-of-fonts-on-the-web/]: http://opentype.info/blog/2009/07/29/why-webfont-services-are-the-future-of-fonts-on-the-web/
    "http://opentype.info/blog/2009/07/29/why-webfont-services-are-the-future-of-fonts-on-the-web/"
  [http://www.zeldman.com/2009/08/17/web-fonts-and-standards/]: http://www.zeldman.com/2009/08/17/web-fonts-and-standards/
    "http://www.zeldman.com/2009/08/17/web-fonts-and-standards/"
  [http://blog.themeforest.net/tutorials/css-font-face-and-15-free-fonts-you-can-use-today/]: http://blog.themeforest.net/tutorials/css-font-face-and-15-free-fonts-you-can-use-today/
    "http://blog.themeforest.net/tutorials/css-font-face-and-15-free-fonts-you-can-use-today/"
  [http://www.stevesouders.com/blog/2009/10/13/font-face-and-performance/]: http://www.stevesouders.com/blog/2009/10/13/font-face-and-performance/
    "http://www.stevesouders.com/blog/2009/10/13/font-face-and-performance/"
  [http://snook.ca/archives/html_and_css/becoming-a-font-embedding-master]: http://snook.ca/archives/html_and_css/becoming-a-font-embedding-master
    "http://snook.ca/archives/html_and_css/becoming-a-font-embedding-master"
  [http://randsco.com/index.php/2009/09/04/better_font_face_syntax]: http://randsco.com/index.php/2009/09/04/better_font_face_syntax
    "http://randsco.com/index.php/2009/09/04/better_font_face_syntax"
  [http://hacks.mozilla.org/2009/10/font-control-for-designers/]: http://hacks.mozilla.org/2009/10/font-control-for-designers/
    "http://hacks.mozilla.org/2009/10/font-control-for-designers/"
  [http://www.font-face.com/]: http://www.font-face.com/
    "http://www.font-face.com/"
  [http://www.alistapart.com/articles/cssatten]: http://www.alistapart.com/articles/cssatten
    "http://www.alistapart.com/articles/cssatten"
  [http://jontangerine.com/log/2008/10/font-face-in-ie-making-web-fonts-work]: http://jontangerine.com/log/2008/10/font-face-in-ie-making-web-fonts-work
    "http://jontangerine.com/log/2008/10/font-face-in-ie-making-web-fonts-work"
  [http://reference.sitepoint.com/css/at-fontface]: http://reference.sitepoint.com/css/at-fontface
    "http://reference.sitepoint.com/css/at-fontface"
  [http://www.seomium.com/xhtml-css-javascript-kodlama/ucretsiz-ve-yasal-fontlarla-font-face-kullanimi.html]: http://www.seomium.com/xhtml-css-javascript-kodlama/ucretsiz-ve-yasal-fontlarla-font-face-kullanimi.html
    "http://www.seomium.com/xhtml-css-javascript-kodlama/ucretsiz-ve-yasal-fontlarla-font-face-kullanimi.html"
  [http://opentype.info/demo/webfontdemo.html]: http://opentype.info/demo/webfontdemo.html
    "http://opentype.info/demo/webfontdemo.html"
  [http://devfiles.myopera.com/articles/593/webfonts.html]: http://devfiles.myopera.com/articles/593/webfonts.html
    "http://devfiles.myopera.com/articles/593/webfonts.html"
  [http://www.hipertipo.org/stuff/webfonts/ModularSerif.html]: http://www.hipertipo.org/stuff/webfonts/ModularSerif.html
    "http://www.hipertipo.org/stuff/webfonts/ModularSerif.html"
  [http://www.typotheque.com/webfonts/sample]: http://www.typotheque.com/webfonts/sample
    "http://www.typotheque.com/webfonts/sample"
  [http://nimbupani.com/blog/about-fonts-in-svg.html]: http://nimbupani.com/blog/about-fonts-in-svg.html
    "http://nimbupani.com/blog/about-fonts-in-svg.html"
  [http://www.spoono.com/html/tutorials/tutorial.php?id=19]: http://www.spoono.com/html/tutorials/tutorial.php?id=19
    "http://www.spoono.com/html/tutorials/tutorial.php?id=19"
  [http://www.phpied.com/gzip-your-font-face-files/]: http://www.phpied.com/gzip-your-font-face-files/
    "http://www.phpied.com/gzip-your-font-face-files/"
  [http://paulirish.com/2009/the-direction-forward-with-web-fonts/]: http://paulirish.com/2009/the-direction-forward-with-web-fonts/
    "http://paulirish.com/2009/the-direction-forward-with-web-fonts/"
  [http://spyrestudios.com/21-awesome-font-face-embedable-typefaces/]: http://spyrestudios.com/21-awesome-font-face-embedable-typefaces/
    "http://spyrestudios.com/21-awesome-font-face-embedable-typefaces/"
  [http://blog.themeforest.net/tutorials/how-to-achieve-cross-browser-font-face-support/]: http://blog.themeforest.net/tutorials/how-to-achieve-cross-browser-font-face-support/
    "http://blog.themeforest.net/tutorials/how-to-achieve-cross-browser-font-face-support/"
