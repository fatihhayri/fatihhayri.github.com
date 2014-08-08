---
layout: post
title: Firefox 3.1 Yenilikleri
Date: 2008-10-21 10:50
Category: CSS, Haberler, Javascript, Web Standartları, XHTML
tags: Firefox, font-face, geode, gps, internet, İnternet Tarayıcısı, Javascript, tarayıcı, yazı tipi
---

Firefox 3.1 Beta1 çıktı. Aslında sadece bir haber değeri taşıyan bir
bilgi, ancak Firefox 3.1 ile birlikte bir çok sevindirici gelişmeler
getirdiği için dikkate değer bir yenileme. Bir ara sürüm değilde sanki
yeni bir sürüm gibi. Yeni özelliklere bir göz atalım.

## Geolocation

Geode internet tarayıcıları için yeni kavram. Mozilla laboratuarlarının
[geleceğin tarayıcıları hakkındaki düşüncelerinden][] biri idi bu.
Kullanıcıların yerini belirleyip ona göre sayfalar ve içerikler sunmak .
Örneğin yeni bir yere taşındınız ve en yakın yemek yyiyecek yeri veya
marketi bulmak için internet tarayıcını size yardımcı olabilecek.

Firefox 3 ile eklenti yardımı ile gelen bu özelliği, isterseniz
deneyebilirsiniz. [Buradan][] indirip deneyebilirsiniz. Deneme yapmak
için örnek bir siteye yönlendiriyor, ancak Türkiye'den kullananlar için
hata veriyor. Türkiye'deki ip durumu düşünüldüğünde pek kullanışlı bir
araç olmayacak. Ama ne diyelim gelecekten ümitliyiz.

Gizlilik konusuda düşünülerek kullanıcının verdiği kadar bilgi ile
sonuçları gösteriyor. Üst barda çıkan bilgi ekranı yardımı ile
yapılacak.

Firefox3.1 ile birlikte gelecek olan özellik Geode eklentisinden daha
iyi olacağı [W3C Geolocation specification][] standartlarını destekleyen
bir yapı kullanılacağı belirtiliyor. Bu standardı javascript gibi
düşünebiliriz.

İnternet tarayıcıları gittikçe kullanıcıya daha çok düşünen araçlar
olmaya başlıyor. Son zamanlardaki rekabet en çok kullanıcıya yaradığı
kesin.

http://www.informationweek.com/galleries/showImage.jhtml?galleryID=263&articleID=211201744
sitesinde 3-10 arasındaki resimler bize işleyişin nasıl olduğunu güzel
bir şekilde gösteriyor.

## @font-face ile yazı tipi desteği

Web kod yazarları ve tasarımcıların en büyük sorunlarından birisi
işletim sistemin desteklediği başlangıçta yüklü yazı tipleri dışındaki
yazı tiplerini web sitelerinde kullanamama sıkıntısıdır. Tam bir
kullanamama diyemeyiz tabi kullanabiliyoruz ama başlangıçta yüklü
olanlar gibi değil.

Firefox 3.1 ile birlikte gelen bu özellik desteği sayesinde farklı yazı
tipleri kullanımında büyük bir adım daha atılmış oluyor. Gelecek ümit
veriyor bize.

Mac ve Windows kullanıcıları için eklenen bu özelikle Linux için Firefox
3.1 kararlı sürümü ile birlikte gelecekmiş.

Beni en çok sevindiren özelliği bu oldu açıkçası.

	:::css
	@font-face {
		font-family: "Bitstream Vera Serif Bold";
		src: url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
	}

![][100]

## Video ve Auido Desteği

HTML 5 ile birlikte gelen <video> ve< auido> elemanı desteği Firefox
3.1 ile birlikte geliyor. Bu elemanlar sayesinde görüntülü ve işitsel
öğeleri web sayfalarına eklemek daha basit olacak. Ayrıca Javascript ile
bu nesneleri etkileşimli kullanabileceğiz.

## Adres Çubuğunda Yenilikler

Adres çubuğunda özel karakterler ile arama sağlanarak sınırlarımızı
belirlememiz sağlanmış. Yeni çıkan tarayıcılarda adres çubuğu artık çok
fonksiyonlu hale getirilmeye başlandı. Firefox3.1 ile gelen özel arama
karakterleri yardımı ile aramayı neredeyse tek adres çubuğuna taşımışlar
diyebiliriz.

![][1]

^ işareti ile geçmişte gezdiğimiz sayfalarda arama yapabiliyoruz.
* işareti ile favorimize eklediğimiz sitelerde arama yapabiliyoruz
+ işareti ile eklediğimiz etiketlerde arama yapabiliyoruz.
\# işareti hem başlıkta hemde etiketde arama yapmak için kullanıyor.

## Yeni Javascript Motoru - TraceMonkey

Yeni Javascript motoru ile Google Chrome’un tahtını elinden aldı.
SunSpider JavaScript testinde bir numara. Google Chrome’un geliştirdiği
Javascript motoru ile tarayıcılar Javascript motorlarını tekrar gözden
geçirmek zorunda kaldı. Firefox yeni Javascript motoru ile hızını
arttırdı. Rekabet kullanıcıya yarıyor.

TraceMonkey başlangıçta kapalı geliyor açmak için

​1. Adres bara *about:config* yazın
2. Filter alanında *javascript.options.jit.content* girip üzerine iki
kere tıklayıp false olan değeri true yapın
3. Tarayıcıyı açıp kapatın

## XHR

XMLHttpRequest (XHR) API'si. Javascript ve diğer diller tarafından
kullanılan bu API, sunucu ve istemci arasında XML ve diğer verilerin
aktarılmasını sağlıyor. Bu API'nin Firefox 3.0 ile beraber gelmemesine
sebep olarak, XHR'nin spesifikasyonlarının kesinleşmesi ve güvenlik
modelinin iyileştirilmesi için biraz daha zamanın olmasıymış. Mozilla
yeterli zamanın geçtiğine kanaat getirmiş ki 3.1 bu özelliği eklemiş.

## Bu özelliklere ek olarak

-   Web Standartlarına daha uygun:Gecko düzen motorunu web
    standartlarına daha uygun hale getirilmiş. Acid 3 testinden 89
    alarak mevcut tarayıcılar(Google Chrome, İnternet Explorer7 – 8 b2)
    arasındaki en iyi notu aldı.
-   CSS 2.1 ve CSS 3 özelliklerinin desteği eklenmiş
-   Daha önce eklenti ile yapılan sekmeler arası geçiş için ön izleme
    görünümü eklenmiş.
-   Adres bar da girdiğimiz kelimeleri filtreleme özelliği eklenmiş.

## Kararlı Sürüm ile gelecek özellikler

## Özel Mod

Google Chrome ve Internet Explorer 8 ile birlikte gelen özel mod
özelliği Firefox 3.1 ile birlikte gelecek. Bu özellik sayesinde

## Speed Dial

Speed Dial ile yeni açılan sekmede en sık kullanılan web sitelerini
küçük resimleri ile birlikte listeleyebiliyoruz. Daha önce eklentiler
ile kullandığımız bu özellik yeni sürüm ile birlikte geliyor.**
**

## Daha fazla yenilik

Bunun haricinde Firefox 3.1 ile birlikte bir çok kullanışlı özellikler
getirilecek.

-   [http://developer.mozilla.org/web-tech/2008/10/14/firefox-31-beta-1-an-overview-of-features-for-web-developers/][]
-   [http://www.siberkultur.com/?q=firefox-3-1][]
-   [http://mehmetergin.blogspot.com/2008/10/firefox-geolocation-api-specification.html][]
-   [http://lifehacker.com/5063481/firefox-31-adds-keyword-filters-to-the-awesomebar][]
-   [http://lifehacker.com/396154/firefox-31-new-features-already-in-the-works][]
-   [http://lifehacker.com/5048604/firefox-31-to-add-private-browsing-mode][]
-   [http://lifehacker.com/5049728/firefox-31-to-enable-color-profile-support-by-default][]
-   [http://lifehacker.com/5062744/firefox-31-to-include-smarter-session-restore][]
-   [http://lifehacker.com/5063202/firefox-31-beta-1-now-available-for-download-first-look][]
-   [http://www.readwriteweb.com/archives/firefox_31_beta_1_geolocation.php][]
-   [http://blogs.zdnet.com/hardware/?p=2781][]
-   [http://news.cnet.com/8301-17939_109-10066397-2.html?part=rss&tag=feed&subj=Webware][]
-   [http://ed.agadak.net/2008/07/firefox-31-restricts-matches-keywords][]
-   [http://www.tgdaily.com/html_tmp/content-view-39752-140.html][]
-   [http://www.informationweek.com/galleries/showImage.jhtml?galleryID=263&articleID=211201744][]
-   [http://www.pclabs.com.tr/2008/05/23/mozilla-firefox-31-bu-sene-sonunda-cikiyor/][]

  [geleceğin tarayıcıları hakkındaki düşüncelerinden]: http://labs.mozilla.com/projects/concept-series/
    "Geleceğin konsept tarayıcıları"
  [Buradan]: https://people.mozilla.com/%7Edolske/dist/geode/geode-latest.xpi
    "Buradan"
  [W3C Geolocation specification]: http://dev.w3.org/geo/api/spec-source.html
    "W3C Geolocation specification"
  [100]: /images/font_face-300x78.gif
    "font-face"
  [1]: /images/firefox31_adres_bar-300x61.gif
    "Adres Bar"
  [http://developer.mozilla.org/web-tech/2008/10/14/firefox-31-beta-1-an-overview-of-features-for-web-developers/]: http://developer.mozilla.org/web-tech/2008/10/14/firefox-31-beta-1-an-overview-of-features-for-web-developers/
  [http://www.siberkultur.com/?q=firefox-3-1]: http://www.siberkultur.com/?q=firefox-3-1
  [http://mehmetergin.blogspot.com/2008/10/firefox-geolocation-api-specification.html]: http://mehmetergin.blogspot.com/2008/10/firefox-geolocation-api-specification.html
  [http://lifehacker.com/5063481/firefox-31-adds-keyword-filters-to-the-awesomebar]: http://lifehacker.com/5063481/firefox-31-adds-keyword-filters-to-the-awesomebar
  [http://lifehacker.com/396154/firefox-31-new-features-already-in-the-works]: http://lifehacker.com/396154/firefox-31-new-features-already-in-the-works
  [http://lifehacker.com/5048604/firefox-31-to-add-private-browsing-mode]: http://lifehacker.com/5048604/firefox-31-to-add-private-browsing-mode
  [http://lifehacker.com/5049728/firefox-31-to-enable-color-profile-support-by-default]: http://lifehacker.com/5049728/firefox-31-to-enable-color-profile-support-by-default
  [http://lifehacker.com/5062744/firefox-31-to-include-smarter-session-restore]: http://lifehacker.com/5062744/firefox-31-to-include-smarter-session-restore
  [http://lifehacker.com/5063202/firefox-31-beta-1-now-available-for-download-first-look]: http://lifehacker.com/5063202/firefox-31-beta-1-now-available-for-download-first-look
  [http://www.readwriteweb.com/archives/firefox_31_beta_1_geolocation.php]: http://www.readwriteweb.com/archives/firefox_31_beta_1_geolocation.php
  [http://blogs.zdnet.com/hardware/?p=2781]: http://blogs.zdnet.com/hardware/?p=2781
  [http://news.cnet.com/8301-17939_109-10066397-2.html?part=rss&tag=feed&subj=Webware]: http://news.cnet.com/8301-17939_109-10066397-2.html?part=rss&tag=feed&subj=Webware
  [http://ed.agadak.net/2008/07/firefox-31-restricts-matches-keywords]: http://ed.agadak.net/2008/07/firefox-31-restricts-matches-keywords
  [http://www.tgdaily.com/html_tmp/content-view-39752-140.html]: http://www.tgdaily.com/html_tmp/content-view-39752-140.html
  [http://www.informationweek.com/galleries/showImage.jhtml?galleryID=263&articleID=211201744]: http://www.informationweek.com/galleries/showImage.jhtml?galleryID=263&articleID=211201744
  [http://www.pclabs.com.tr/2008/05/23/mozilla-firefox-31-bu-sene-sonunda-cikiyor/]: http://www.pclabs.com.tr/2008/05/23/mozilla-firefox-31-bu-sene-sonunda-cikiyor/
