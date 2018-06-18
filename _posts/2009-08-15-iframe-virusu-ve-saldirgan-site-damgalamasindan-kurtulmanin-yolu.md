---
layout: post
title: iframe virüsü ve Saldırgan Site damgalamasından kurtulmanın yolu
Date: 2009-08-15 22:51
Category: XHTML
tags: [google-web-master-tools, iframe, malware]
---

Yaklaşık 2-3 haftadır bir çok yerde karşılaştığımız bu sorunun
kaynağının ne olduğu konusunda bir çok makale okudum. Çözümler okudum
uygulamalar yaptım sonuç olarak konuyu şöyle özetleyebiliriz.

Çeşitli yollardan bize musallat olan virüs(aslında pek virüs mantığı ile
hareket etmiyor.) Sistemimizdeki ftp bilgilerini alıp bu bilgiler
üzerinden sitelere otomatik olarak bir iframe kodu ekliyor. Genellikle
index.xxx ve default.xxx isimli dosyalara otomatik olarak eklenen bir
iframe kodu bu. Eklenen bu iframe kodu bazen boş bir sayfayı açarken
bazende malware olarak adlandırılan kullanıcının bilgisayarına sızan bir
virüs yükletmeye çalışıyor. Eklenen bu iframe genelde gizli olarak
kodlandığı için(visibility:hidden) göremiyoruz.

![iframe_kodu][]

Belli bir süre sonra Google siteyi tararken bu kodlamayı görüyor ve
linki takip edincede siteden virüs yayılmaya çalışıyor diye sitenizi
Saldırgan Site sınıflandırmasını sokuyor. 

![google-warning][]

Saldırgan Site sınıfına giren sitemiz Google Chrome ve Firefox ile
sitemize açmayan kişilere yukarıdakine benzer bir ekran ile karşılık
verecektir ve kullanıcılar sitenize erişemeyecektir. 

Peki biz bu işten nasıl kurtulacağız. İlk olarak siteden bu kodları
arayıp(genelde body etiketi sonrasına eklendiği için bulmak kolay.)
bulup kaldıracağız. Ayrıca bilgisayarımızı sağlam bir virüs taramasından
geçirip, tüm ftp şifrelerimizi değiştirmeyi unutmayalım. 

Bir sonraki adım olarak google'un saldırgan site listesinden çıkmak için
[Google Webmaster Tools][]'una gireceğiz.

Siteye girdikten sonra sırası ile(İngilizce seçili olarak girdiğiniz
farz ederek devam edeceğim. İşlerin hızlı yürümesi için İngilizceyi
tercih etmenizi öneririm)

-   **Add Site** deyip sitemizi
    ekleyeceğiz. **http://www.orneksite.com/**
-   ****Continue**basıp ilerleyince karşımıza** Site
    verification** **sayfası çıkacak. Sitenin bize ait olup olmadığını
    kontrol için
-   Burada iki tür doğrulama isteniyor bizden **Meta tag** ve **HTML
    file** diye iki yolumuz var. Ben Meta tag'i seçip ilerliyorum. 
-   Site bize bir meta etiketi veriyor. Bu kodu alıp
    sitemize(<head>...</head> arasına) ekliyoruz. Sadece ana sayfaya
    eklemek yeterli. 

![google-webmaster-tools][]

Sonra sitenin bize ait olduğunu anlayan goole bize sitemizin saldırgan
site olarak listelendiğini söylüyor ve bundan kurtulmak için bir çare
gösteriyor. 

![badware][]

**Request a review** linkine tıklıyoruz. İşaret kutucuğunu işaretleyip
metin girdi alanına bir cümlelik bir  durum beyan ediyoruz. 

Bu işlemlerden sonra google yaklaşık olarak 2-3 saat içinde sitemizi
saldırgan site listesinden çıkarıyor.

## Kaynaklar

-   [http://sites.google.com/site/webmasterhelpforum/en/faq-malware-and-hacked-sites](http://sites.google.com/site/webmasterhelpforum/en/faq-malware-and-hacked-sites)
-   http://www.cogzidel.com/blog/2009/07/malware-affects-your-google-listing-google-webmaster-tools-will-save-you/

  [iframe_kodu]: /images/iframe_kodu1.gif
    "iframe_kodu"
  [google-warning]: /images/google-warning-300x127.jpg
    "google-warning"
  [Google Webmaster Tools]: http://www.google.com/webmasters/tools/
    "Google Webmaster Tools"
  [google-webmaster-tools]: /images/google-webmaster-tools-300x173.png
    "google-webmaster-tools"
  [badware]: /images/badware-300x154.png
    "badware"
