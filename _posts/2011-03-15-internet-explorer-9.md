---
layout: post
title: Internet Explorer 9
Date: 2011-03-15 22:17
Category: CSS, Haberler, HTML5
tags: css3, GPU, html5, internet explorer 9
---

Dün(14 Mart) akşamı Microsoft İnternet Explorer tarayıcısını son sürümü
olan 9'un final sürümünü yayınladı. Yeni arayüzü, geliştirilmiş
performansı, Windows 7 entegrasyonu vd. özellikleri ile dikkat çekiyor. 

Web mecrasında çalışanları tarayıcıları ve yetenekleri konusunda çok iyi
bilgi sahibi olması gerekir. Helede Arayüz Geliştiricileri için çok
önemlidir. Çünkü kodumuzu yazarken farklı tarayıcılara göre yazıyoruz. 

Bu yazımda İnternet Explorer 9'un önemli özelliklerinde bahsedeceğim. 

## Yeni Görünüm

![][100]

En büyük değişimlerden biri görünümde gerçekleşmiş. Yeni nesil
tarayıcılardaki anlayış ile hareket edilmiş menü ve adres çubuklarının
kapladığı alan en aza indirilerek gösterilen sayfa alanı
genişletilmiştir. 

Yukarıda görüldüğü gibi gittikçe tarayıcılar orta noktada buluşuyorlar.

Bunun dışında;

-   Sekmelerin yapısı ve görünümüde değiştirilmiş.
-   Yeni sekme açıldığında karşımıza çıkan boş ve anlamsız bir sayfa
    yerine split görünmlü en sık açtığımız siteler listeleniyor.
-   Yeni bir bildirim alanı eklenmiş. İndirilen dosyalara ait
    bilgililerin gösterilmesi, popup pencerelerini ait bilgiler,
    güvenliğe ait uyarılar, şifre kayıtları vd. bildirimleri artık
    tarayıcının alt kısmında gösteriliyor.
-   Dosya yüklemek için kullanılan Yükleme Yöneticisi kısmı yenilenmiş
    ve kullanışlı bir yapıya kavuşturulmuş.

## Standartlar ve Performans

İnternet Explorer 9'un alt yapısal olarak en büyük yeniliği GPU destekli
yani "Hardware Acceleration" destekli yeni javascript tarama
motoru(çakra) sayesinde web sitelerini daha hızlı yorumluyor. 

İnternet Explore 9'un geneline baktığımızda diğer tarayıcılara göre en
büyük avantajı GPU destekli tarama motoru olarak görünüyor. Bu sayede
web sayfalarını masaüstü programlar gibi hızlı ve beklemeksizin kullanım
imkanı sunmayı düşünüyor. GPU destekli "Hardware Acceleration" kastımız
şudur; grafik desteğini bilgisayar işlemcisinden(cpu) grafik
işlemcisine(gpu) taşımayı sağlayan javascript motoru sayesinde ana
işlemci üzerindeki yükü dağıtarak daha fazla verim almayı sağlıyor. Buda
bize web'de görsel bakımdan zengin içerikli siteleri daha hızlı gezme
imkanı sağlıyor.

Bu yenilenen ve hızlandırılan tarama motorları HTML5 desteğini sunuyor.
Burada şöyle bir liste var. Destekleme konusunda İnternet Explorer'un
eski sürümlerine göre çok büyük eklemeler var, ancak diğer tarayıcıların
son sürümlerini dikkate aldığımızda neredeyse yarı yarıya bir eksiklik
var.

[http://www.findmebyip.com/litmus][]

Sitesini incelemenizi öneriyorum. 

Aşağıda İnternet Explorer 9'un <u>desteklemediği</u> özelliklerin belli
başlıları listesi var.

-   Application Cache (offline)
-   Web Workers (threads in JavaScript)
-   HTML5 Forms (validation mechanism, CSS3 selectors)
-   JavaScript Strict Mode
-   ForeignObject (embed external content in SVG)
-   SMIL Animations (SVG animations)
-   File API
-   WebGL (3D)
-   CSS3 Transitions (for animations)
-   CSS3 Text Shadow
-   CSS3 Gradients
-   CSS3 Border Image
-   CSS3 Flex box model
-   ClassList APIs
-   FormData
-   HTML5 History API
-   Drag'n Drop from Desktop

Pek iç açıcı bir tablo değil.

Performansla ilgili bir çok yayınlanan grafik var. Bunlara bakıldığında
İnternet Explorer 9 kendi ailesinin en hızlı ve yeni nesil tarayıcılara
yaklaşan performansı var. 

## **Windows 7 ile Sorunsuz ve Tümleşik Çalışma**

![][1]

Masaüstünüzü ikiye ayırarak geniş ekranlarda iki farklı siteyi tek ekran
görme imkanı sağlayan bir yapıyı kullanabilirisiniz. 

Windows 7'nin programlar için sunduğu en sık kullanılan sitelere daha
hızlı erişimi sağlayan yapı web sitelerinde sağlanmış. Sık kullandığımız
web sitelerini programlar gibi alt barımıza sabitleyebiliyoruz.

## Eklenti Desteği ve Eklenti Performans Göstergesi

![][3]

Eklenti Performans göstergesi bize eklentilerin ne kadar zaman kaybına
neden olduğunu gösteriyor. Biz bu verilere göre eklentiyi kaldırıyor
veya bize lazım ise kalmasına karar veriyor. Bence diğer tarayıcılarında
edinmesi gereken bir özellik bu.

## Gelişmiş Adres Çubuğu

![][4]

Adres çubuğu hem arama yapmamıza, hemde web sitelerinde gezmeye yarayan
bir yapıya kavuşturulmuş. Buna "Tek Kutu" adı verilmiş. Bir çok yeni
nesil tarayıcının yöneldiği bu sisteme İnternet Explorer 9'da
getirilmesi güzel.

Diğer tarayıcılardan elimizin alıştığı ve bize çok hız kazandıran bu
yapı tüm tarayıcılar için güzel bir gelişme.

## Sonuç

Sonuç olarak şunu söyleyebilirim ki yukarıda açıkladığım ve araştırdığım
kadarı ile bir çok yönü ile gayet başarılı bir tarayıcı olarak görünüyor
İnternet Explorer 9, ancak gerek HTML5 ve gerekse CSS3 özelliklerini
destekleme konusundaki eksiklikleri beni düşündürüyor. Anlayamadığım bir
olay varki bir çok yönden gelişmiş bir tarayıcı sunmasına rağmen nasıl
oluyorda bu özellikleri desteklemiyor, anlam verebilmiş değilim. Ayrıca
Windows XP'ye yüklenemeyecek olmasıda ilginç.

Chrome'daki güncelleme mantığı ile gelen bir yapıya sahip olsa idi bu
durumda bir türlü geçiştirilebilirdi, ancak böyle bir yapıda olmadığını
görünce üzülüyorum açıkçası. Hala %60 seviyelerinde kullanıcısı olan bir
tarayıcıdan daha sorunsuz bir tarayıcı çıkarmasını bekliyordum. 

Mevcut tarayıcıları düşündüğümde belki sadece GPU nedeni ile belki
kullanılabilir ama bu sene içinde çıkacak diğer tarayıcılarında bu
özelliği kazanacağını ve İnternet Explorer 9 ile belki geçici bir
yükselme yaşansa bile daha sonra düşüşün devam edeceğini düşünüyorum.

## Kaynaklar

-   [http://articles.sitepoint.com/article/whats-new-in-ie9][]
-   [http://lifehacker.com/#!5638885/internet-explorer-screenshot-tour-the-best-new-features-in-ie9][]
-   [http://windows.microsoft.com/tr-TR/internet-explorer/products/ie-9/features/fast][]
-   [http://blogs.msdn.com/ie/archive/2010/03/16/IE9-Platform-Preview-Feedback.aspx][]
-   [http://blogs.msdn.com/ie/archive/2010/03/16/html5-hardware-accelerated-first-ie9-platform-preview-available-for-developers.aspx][]
-   [http://blogs.msdn.com/ie/archive/2010/03/18/the-new-javascript-engine-in-internet-explorer-9.aspx][] (yeni javascript motoru ile ilgili)
-   [http://blogs.msdn.com/ie/archive/2010/03/18/svg-in-ie9-roadmap.aspx][] (ie9'un svg desteği)
-   [http://arstechnica.com/microsoft/news/2010/03/platform-preview-gives-web-developers-first-taste-of-ie9.ars][]
-   [http://robertnyman.com/2010/03/17/testing-the-internet-explorer-platform-preview-ie9-reviewing-the-good-the-bad-and-the-main-letdown/][]
-   [http://msdn.microsoft.com/en-us/ie/ff468705.aspx][]
-   [http://www.guardian.co.uk/technology/blog/2010/mar/16/internet-explorer-9-preview-microsoft][]
-   [http://daron.yondem.com/tr/PermaLink.aspx?guid=619ab009-08e7-4d56-9017-1b85cc2d806a][]
-   [http://mashable.com/2010/03/16/ie9-preview/][]
-   [http://www.techradar.com/news/internet/ie9-crazy-fast-but-rivals-still-have-the-speed-edge-677295][]
-   [http://blogs.msdn.com/ie/archive/2010/03/17/test-drive-104-new-professional-grade-tests-for-web-standards.aspx][]
-   [http://shiftdelete.net/internet-explorer-9dan-yeni-detaylar-19151.html][]
-   [http://shiftdelete.net/internet-explorer-9dan-kotu-haber-19178.html][] (windows xp desteğinin olmamaası)
-   [http://web.archive.org/web/20010602021058/microsoft.com/windows/ie/preview/default.asp][]
-   [http://www.computerworld.com/s/article/9185338/Internet_Explorer_9_beta_strips_down_for_speed][]
-   **[http://www.bildirgec.org/yazi/internet-explorer-9-un-beta][]**
-   **[http://gizmodo.com/5638742/internet-explorer-9-uh-nice][]**
-   **[http://lifehacker.com/5638885/internet-explorer-screenshot-tour-the-best-new-features-in-ie9][]**
-   **[http://www.turk.internet.com/portal/yazigoster.php?yaziid=29437][]**
-   **[http://www.nuricankaya.com/default.asp?gunluk_id=455][]**
-   **[http://www.nuricankaya.com/resimler/2010_Eylul/ie9guide.pdf][] **
-   **[http://www.engadget.com/2011/03/14/internet-explorer-9-launches-tonight-weve-got-your-early-look/][] **
-   [http://msdn.microsoft.com/en-us/ie/ff468705][] (css3 ve html5 desteği)

  [100]: /images/ie9_01.png
  [http://www.findmebyip.com/litmus]: http://www.findmebyip.com/litmus
  [1]: /images/ie9_03.jpg
  [2]: /images/ie9_03.jpg
  [3]: /images/ie9_05.jpg
  [4]: /images/ie9_06.jpg
  [http://articles.sitepoint.com/article/whats-new-in-ie9]: http://articles.sitepoint.com/article/whats-new-in-ie9
  [http://lifehacker.com/#!5638885/internet-explorer-screenshot-tour-the-best-new-features-in-ie9]: http://lifehacker.com/#!5638885/internet-explorer-screenshot-tour-the-best-new-features-in-ie9
  [http://windows.microsoft.com/tr-TR/internet-explorer/products/ie-9/features/fast]: http://windows.microsoft.com/tr-TR/internet-explorer/products/ie-9/features/fast
  [http://blogs.msdn.com/ie/archive/2010/03/16/IE9-Platform-Preview-Feedback.aspx]: http://blogs.msdn.com/ie/archive/2010/03/16/IE9-Platform-Preview-Feedback.aspx
  [http://blogs.msdn.com/ie/archive/2010/03/16/html5-hardware-accelerated-first-ie9-platform-preview-available-for-developers.aspx]: http://blogs.msdn.com/ie/archive/2010/03/16/html5-hardware-accelerated-first-ie9-platform-preview-available-for-developers.aspx
  [http://blogs.msdn.com/ie/archive/2010/03/18/the-new-javascript-engine-in-internet-explorer-9.aspx]: http://blogs.msdn.com/ie/archive/2010/03/18/the-new-javascript-engine-in-internet-explorer-9.aspx
  [http://blogs.msdn.com/ie/archive/2010/03/18/svg-in-ie9-roadmap.aspx]: http://blogs.msdn.com/ie/archive/2010/03/18/svg-in-ie9-roadmap.aspx
  [http://arstechnica.com/microsoft/news/2010/03/platform-preview-gives-web-developers-first-taste-of-ie9.ars]: http://arstechnica.com/microsoft/news/2010/03/platform-preview-gives-web-developers-first-taste-of-ie9.ars
  [http://robertnyman.com/2010/03/17/testing-the-internet-explorer-platform-preview-ie9-reviewing-the-good-the-bad-and-the-main-letdown/]: http://robertnyman.com/2010/03/17/testing-the-internet-explorer-platform-preview-ie9-reviewing-the-good-the-bad-and-the-main-letdown/
  [http://msdn.microsoft.com/en-us/ie/ff468705.aspx]: http://msdn.microsoft.com/en-us/ie/ff468705.aspx
  [http://www.guardian.co.uk/technology/blog/2010/mar/16/internet-explorer-9-preview-microsoft]: http://www.guardian.co.uk/technology/blog/2010/mar/16/internet-explorer-9-preview-microsoft
  [http://daron.yondem.com/tr/PermaLink.aspx?guid=619ab009-08e7-4d56-9017-1b85cc2d806a]: http://daron.yondem.com/tr/PermaLink.aspx?guid=619ab009-08e7-4d56-9017-1b85cc2d806a&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+daronyondem+%28Daron+Y%C3%B6ndem%29&utm_content=Google+Reader
  [http://mashable.com/2010/03/16/ie9-preview/]: http://mashable.com/2010/03/16/ie9-preview/
  [http://www.techradar.com/news/internet/ie9-crazy-fast-but-rivals-still-have-the-speed-edge-677295]: http://www.techradar.com/news/internet/ie9-crazy-fast-but-rivals-still-have-the-speed-edge-677295
  [http://blogs.msdn.com/ie/archive/2010/03/17/test-drive-104-new-professional-grade-tests-for-web-standards.aspx]: http://blogs.msdn.com/ie/archive/2010/03/17/test-drive-104-new-professional-grade-tests-for-web-standards.aspx
  [http://shiftdelete.net/internet-explorer-9dan-yeni-detaylar-19151.html]: http://shiftdelete.net/internet-explorer-9dan-yeni-detaylar-19151.html
  [http://shiftdelete.net/internet-explorer-9dan-kotu-haber-19178.html]: http://shiftdelete.net/internet-explorer-9dan-kotu-haber-19178.html
  [http://web.archive.org/web/20010602021058/microsoft.com/windows/ie/preview/default.asp]: http://web.archive.org/web/20010602021058/microsoft.com/windows/ie/preview/default.asp
  [http://www.computerworld.com/s/article/9185338/Internet_Explorer_9_beta_strips_down_for_speed]: http://www.computerworld.com/s/article/9185338/Internet_Explorer_9_beta_strips_down_for_speed
  [http://www.bildirgec.org/yazi/internet-explorer-9-un-beta]: http://www.bildirgec.org/yazi/internet-explorer-9-un-beta
  [http://gizmodo.com/5638742/internet-explorer-9-uh-nice]: http://gizmodo.com/5638742/internet-explorer-9-uh-nice
  [http://lifehacker.com/5638885/internet-explorer-screenshot-tour-the-best-new-features-in-ie9]: http://lifehacker.com/5638885/internet-explorer-screenshot-tour-the-best-new-features-in-ie9
  [http://www.turk.internet.com/portal/yazigoster.php?yaziid=29437]: http://www.turk.internet.com/portal/yazigoster.php?yaziid=29437
  [http://www.nuricankaya.com/default.asp?gunluk_id=455]: http://www.nuricankaya.com/default.asp?gunluk_id=455
  [http://www.nuricankaya.com/resimler/2010_Eylul/ie9guide.pdf]: http://www.nuricankaya.com/resimler/2010_Eylul/ie9guide.pdf
  [http://www.engadget.com/2011/03/14/internet-explorer-9-launches-tonight-weve-got-your-early-look/]: http://www.engadget.com/2011/03/14/internet-explorer-9-launches-tonight-weve-got-your-early-look/
  [http://msdn.microsoft.com/en-us/ie/ff468705]: http://msdn.microsoft.com/en-us/ie/ff468705
