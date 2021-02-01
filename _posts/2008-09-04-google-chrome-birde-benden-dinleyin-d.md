---
layout: post
title: Google Chrome - Birde benden dinleyin :D
Date: 2008-09-04 16:38
Category: Haberler
tags: [Google Chrome, İnternet Tarayıcısı, safari, Web Standartları, web tarayıcısı, WebKit]
---

![][100]{: .resimler-sagda} Her yeni çıkan tarayıcının ardından inceleme yapıp yazı
yazıyorum genelde. Tabi Google Chrome içinde bunu yapacaktım ki baktım
çok fazla kaynak var. Beni asıl hayrete düşüren Türkçe kaynaklarında çok
fazla olması idi. Sonra bir birinin tekrarı içerik oluşturmamak için
gördüğüm linkleri kaynaklar kısmına ekledim. Ben ise sadece CSS ve Web
Standartları açısından değerlendirmeye karar verdim.

Google Chrome Safari'nin de alt yapısını oluşturan Webkit alt yapısı ile
çalışıyor, buda bize Safari neyi destekliyorsa Google Chrome onu
destekler ipucunu veriyor. Bir iki özellik(text-shadow ve @font-face)
dışında aynı özellikleri destekliyor. CSS destek listesini görmek
için[tıklayınız.][]

Benim gördüğüm tek sorun kısayol background tanımında tanımlanan
renkerler gelmiyor. Sayfa yenileme ve 5-10 saniye geçtikten sonra
geliyor.

{% highlight css %}
background:#f00 url(../images/ardalan.gif) top left repaet-x;
{% endhighlight %}

ardalan rengi olan #f00 gelmiyor.

CSS filtrelemesi olarak Safari için kullanılan filtreleme
kullanılabilir.

{% highlight html %}
<html>
<head>
<style>
body:nth-of-type(1) p{
   color: #ff0000; // sadece safari ve chrome görecek
}
</style>
</html>
<body>
<p>deneme olarak bunu yazıyorum</p>
</body>
</html>
{% endhighlight %}


Javascript ile yakalamak içinde 

{% highlight javascript %}
var is_chrome = navigator.userAgent.toLowerCase().indexOf(‘chrome’) > -1;
{% endhighlight %}

yeterli oluyor. Ayrıca javascript hata yakalama konsolu
için http://www1.qainsight.net:8080/2008/09/04/How+To+View+JavaScript+Errors+In+Google+Chrome.aspx siteyi
incelmenizi öneririm.

Erişilebilirlik açısından karnesi kötü
bulunmuş. [http://www.paciellogroup.com/blog/?p=92][] sitesinde
yazdığına göre erişilebilirlik açısından yeterli not alamamış. Tabi bu
sitenin testi ne kadar kriter onu bilemem.

Eklentilerinin olmaması görünen en büyük eksiklik gibi. Yakında eklenti
desteği geleceğini duymak bizi sevindirdi. 

Sonuç olarak tüm işlerini internetten gören Google gibi bir şirket için
bir tarayıcı çıkarmak gecikmiş bir olay. Ayrıca benim acayibime giden
Google'un Firefox ile arama alanı için 2011'e kadar uzattığı haberinin
üzerinden kısa bir süre geçmesinden sonra internet tarayıcısı çıkarması.
İşin içinde farklı hesaplar var gibi. 2006'da Firefox'a 56 milyon dolar
ödediğini düşünürsek çok da anlamsız gelmiyor. 

Her yeni çıkan tarayıcının ardından web kod yazarları acaba bu da sorun
çıkarırmı düşüncesi sarar ve hemen kodladığı sitleri kontrol eder ki
bende öyle yaptım Allah şükür benim sitem(Üst menü ile resim arasında
mesafede sorun var) hariç bir sorun yok. Google Chrome Acid 2 testinden
geçerken [Acid 3][] testinden de mevcut tarayıcıların en yüksek puanı
olan 79 alması ve standartlar uyması çok güzel bir gelişme. Böyle
tarayıcının başımızın üstünde yeri var deriz.

### Kaynaklar

Türkçe kaynak

-   [http://www.macosxpc.com/2008/09/02/googledan-webkit-tabanli-internet-tarayicisi/][]
-   http://cnetturkiye.com/haberler/1267
-   http://www.savassakar.com/?p=2029
-   kurumsalhaberler.com/google/bultenler/googledan-yeni-web-tarayicisi-google-chrome
-   [http://www.potkal.com/yazi_icerik.asp?y1405][]
-   http://www.mondaynay.com/2008/09/google-chrome-beta-web-browser/
-   http://www.blicca.com/programlar/internet-tarayicilari/google-chrome-beta.html
-   turk.internet.com/haber/yazigoster.php3?yazi21847
-   http://www.burakkutbay.com/google-chrome-tarayici-analizi/
-   [http://www.chip.com.tr/konu/Google-Chrome-dan-ilk-guvenlik-acigi_8529.html][]
-   http://blog-tr-ego.blogspot.com/2008/09/chrome-nedir.html
-   http://notoku.com/google-chrome-acik-kaynakli-tarayici-projesi/
-   http://zokoba.blogspot.com/2008/09/google-chrome-ilk-izlenimler.html
-   [http://www.mafiamax.com/2008/09/google-chrome-on-incelemesi.html][]
-   [http://www.siberkultur.com/?q=google-chrome-cikti][]
-   [http://www.webrazzi.com/2008/09/03/google-chrome-hakkindaki-goruslerim-ve-gorusleriniz/][]
-   http://www.mmistanbul.com/makale/title/google-chrome-ve-browser-savaslari

Genel kaynak

-   [http://www.google.com/chrome/][]
-   [http://gizmodo.com/5044958/dr-frankensteins-browser-the-strangely-obvious-ancestry-of-google-chrome][]
-   [http://www.mattcutts.com/blog/google-chrome-communication/][]
-   [http://mashable.com/2008/09/03/awesome-google-chrome/][]
-   [http://blog.wired.com/business/2008/09/chrome-eliminat.html][]
-   http://www.popularmechanics.com/technology/industry/4280717.html
-   blogs.zdnet.com/hardware/?p=2481
-   [http://googlesystem.blogspot.com/2008/09/google-chromes-about-pages.html][]
-   [http://lifehacker.com/5044484/google-chrome-first-look][]
-   http://www.readwriteweb.com/archives/does_google_have_rights_to_all.php
-   [http://mashable.com/2008/09/03/awesome-google-chrome/][]
-   [http://mashable.com/2008/09/02/chrome-windows/][]
-   [http://www.niallkennedy.com/blog/2008/09/google-chrome.html][]
-   [http://gigaom.com/2008/09/02/why-did-google-abandon-firefox/][]
-   http://www.tgdaily.com/content/view/39174/118
-   [http://www.techcrunch.com/2008/09/02/getclicky-analytics-service-tracking-2-google-chrome-usage/][]
-   [http://ptech.allthingsd.com/20080902/first-test-of-googles-new-browser/][]
-   http://webworkerdaily.com/2008/09/02/google-chrome-is-it-ready-for-web-workers
-   news.cnet.com/8301-17939_109-10030718-2.html?part=rss&tag=feed&subj=Webware
-   news.cnet.com/8301-17939_109-10030962-2.html?part=rss&tag=feed&subj=Webware
-   [http://www.zeldman.com/2008/09/03/a-bug-in-google-chrome/][]
-   [http://www.evotech.net/blog/2008/09/css-hack-for-google-chrome-and-safari-31/][]
-   [http://davidwalsh.name/detecting-google-chrome-javascript][]
-   [http://lifehacker.com/5044518/enable-chromes-best-features-in-firefox][]
-   [http://lifehacker.com/5044668/beta-browser-speed-tests-which-is-fastest][]

javascript motoru 

-   [http://arstechnica.com/journals/linux.ars/2008/09/03/new-firefox-javascript-engine-is-faster-than-chromes-v8][]
-   [http://prosenjit23.wordpress.com/2008/09/03/google-chrome-mozilla-firefox-microsoft-ie-sunspider-javascript-performance-test-results/][]

  [100]: /images/chrome_438x359-300x245.jpg
    "Google Chrome"

  [tıklayınız.]: http://www.evotech.net/blog/2008/09/google-chrome-browser-css-selector-support/
    "css özellik listesi"
  [http://www.paciellogroup.com/blog/?p=92]: http://www.paciellogroup.com/blog/?p=92
  [Acid 3]: http://acid3.acidtests.org/ "Acid 3"
  [http://www.macosxpc.com/2008/09/02/googledan-webkit-tabanli-internet-tarayicisi/]: http://www.macosxpc.com/2008/09/02/googledan-webkit-tabanli-internet-tarayicisi/
  [http://www.potkal.com/yazi_icerik.asp?y1405]: http://www.potkal.com/yazi_icerik.asp?y1405
  [http://www.chip.com.tr/konu/Google-Chrome-dan-ilk-guvenlik-acigi_8529.html]: http://www.chip.com.tr/konu/Google-Chrome-dan-ilk-guvenlik-acigi_8529.html
  [http://www.mafiamax.com/2008/09/google-chrome-on-incelemesi.html]: http://www.mafiamax.com/2008/09/google-chrome-on-incelemesi.html
  [http://www.siberkultur.com/?q=google-chrome-cikti]: http://www.siberkultur.com/?q=google-chrome-cikti
  [http://www.webrazzi.com/2008/09/03/google-chrome-hakkindaki-goruslerim-ve-gorusleriniz/]: http://www.webrazzi.com/2008/09/03/google-chrome-hakkindaki-goruslerim-ve-gorusleriniz/
  [http://www.google.com/chrome/]: http://www.google.com/chrome/
    "Google Chrome"
  [http://gizmodo.com/5044958/dr-frankensteins-browser-the-strangely-obvious-ancestry-of-google-chrome]: http://gizmodo.com/5044958/dr-frankensteins-browser-the-strangely-obvious-ancestry-of-google-chrome
  [http://www.mattcutts.com/blog/google-chrome-communication/]: http://www.mattcutts.com/blog/google-chrome-communication/
  [http://mashable.com/2008/09/03/awesome-google-chrome/]: http://mashable.com/2008/09/03/awesome-google-chrome/
  [http://blog.wired.com/business/2008/09/chrome-eliminat.html]: http://blog.wired.com/business/2008/09/chrome-eliminat.html
  [http://googlesystem.blogspot.com/2008/09/google-chromes-about-pages.html]: http://googlesystem.blogspot.com/2008/09/google-chromes-about-pages.html
  [http://lifehacker.com/5044484/google-chrome-first-look]: http://lifehacker.com/5044484/google-chrome-first-look
  [http://mashable.com/2008/09/02/chrome-windows/]: http://mashable.com/2008/09/02/chrome-windows/
  [http://www.niallkennedy.com/blog/2008/09/google-chrome.html]: http://www.niallkennedy.com/blog/2008/09/google-chrome.html
  [http://gigaom.com/2008/09/02/why-did-google-abandon-firefox/]: http://gigaom.com/2008/09/02/why-did-google-abandon-firefox/
  [http://www.techcrunch.com/2008/09/02/getclicky-analytics-service-tracking-2-google-chrome-usage/]: http://www.techcrunch.com/2008/09/02/getclicky-analytics-service-tracking-2-google-chrome-usage/
  [http://ptech.allthingsd.com/20080902/first-test-of-googles-new-browser/]: http://ptech.allthingsd.com/20080902/first-test-of-googles-new-browser/
  [http://www.zeldman.com/2008/09/03/a-bug-in-google-chrome/]: http://www.zeldman.com/2008/09/03/a-bug-in-google-chrome/
  [http://www.evotech.net/blog/2008/09/css-hack-for-google-chrome-and-safari-31/]: http://www.evotech.net/blog/2008/09/css-hack-for-google-chrome-and-safari-31/
  [http://davidwalsh.name/detecting-google-chrome-javascript]: http://davidwalsh.name/detecting-google-chrome-javascript
  [http://lifehacker.com/5044518/enable-chromes-best-features-in-firefox]: http://lifehacker.com/5044518/enable-chromes-best-features-in-firefox
  [http://lifehacker.com/5044668/beta-browser-speed-tests-which-is-fastest]: http://lifehacker.com/5044668/beta-browser-speed-tests-which-is-fastest
  [http://arstechnica.com/journals/linux.ars/2008/09/03/new-firefox-javascript-engine-is-faster-than-chromes-v8]: http://arstechnica.com/journals/linux.ars/2008/09/03/new-firefox-javascript-engine-is-faster-than-chromes-v8
  [http://prosenjit23.wordpress.com/2008/09/03/google-chrome-mozilla-firefox-microsoft-ie-sunspider-javascript-performance-test-results/]: http://prosenjit23.wordpress.com/2008/09/03/google-chrome-mozilla-firefox-microsoft-ie-sunspider-javascript-performance-test-results/