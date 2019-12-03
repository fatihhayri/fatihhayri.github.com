---
layout: post
title: Web&#039;de Yazı Tipi Sorunları ve Google Font API
Date: 2010-06-09 22:20
Category: CSS, Web Standartları
tags: [aliasing, font-face, google font api, sorunlar, yazı tipi, yazı tipi gömme]
---

![][100]Web sitelerini oluşturan öğelerden en önemlisi muhakkak yazılardır.
Resimler ve videolarda önemli olsa da çoğunlukla yazılar ön plandadır
web sitelerinde. CSS kod yazanlar için diğer öğelere göre daha
erişebilir ve esnektir yazılar. Yapılan yenilikler bu konuda daha
avantajlı duruma geliyoruz.

Daha önce yazı tipi hakkında bir çok makale yazmıştım. 

-   [Yazı Tipi özellikleri][]
-   [CSS'de Metin Özellikleri][]
-   [CSS ve Tipografi][]
-   [Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)][]
-   [@font-face kullanımı][]
-   [CSS ile metinlere gölge vermek][]
-   vd. metin ile ilgili makaleler



Yukarıda görüldüğü gibi yazı tipi ve web sitelerinin tipografisi ile
alakalı bir çok konuyu ele aldık. Peki yeterli mi? hayır bence henüz
yeterli değil. Henüz tam olarak yeterli değil. Hala bazı sorunlar mevcut
bu konuda.

Biz web sitelerimizde yazı tiplerini kullanırken genel kullanıcı
bilgisayarındaki yazı tiplerini kullanmak zorunda idik. Eğer
kullanıcının bilgisayarında olmayan bir yazı tipi kullanılmış ise
tasarımda bu yazıyı çeşitli yöntemler kullanarak sitemize ekliyorduk ve
hala ekliyoruz. Bu yöntemler yukarıda linkinide verdiğim **Metin Yerine
Resim/Flash ekleme teknikleri** yazısında anlattım. Bu şekilde yapılan
çözümlerin anlamlı kod yazma, esnek kodlama, erişebilirlik vd. yönlerden
sakıncalarıda olsa diğer yöntemlere göre daha avantajlıdır.

Daha sonra web geliştiricileri ve standart oluşturucular bu konudaki
sorunları gidermek için @font-face kullanımını çıkardılar. Bu yöntem ile
web sitesinde her türlü yazı tipi kullanabiliyoruz, tabi bunun için ilk
önce yazı tipimizi kullanıcının bilgisayarına yüklüyoruz ve sonra
sitemizde istediğimiz yerde bu yazı tipini kullanabiliyoruz. Bu
yöntemide [@font-face kullanımı][] adlı yazımda açıkladım.

Gelelim sorunlara;

**Lisans Sorunu**

İlk sorun yazı tipi geliştiricilerinden geldi, her ne kadar ülkemizde
pek ses getirmesede dünyada genel olarak lisans hakkı sorunu çıktı. Bu
sorun üzerinde çalışmalar yapılıyor, çeşitli topluluklar konu üzerinde
çalışıyor. Bazı gelişmeler olsada kesin bir çözün bulunabilmiş değil.

**Yazı Tipi Uzantılarında Standartlaşamama Sorunu**

@font-face yazımda belirttiğim gibi neredeyse her tarayıcının kendine
özgü bir yazı tipi mevcut, ve diğerlerini desteklemiyor.

![][1]

Ancak son zamanlarda bu konuda da büyük bir gelişme oldu. En büyük ayak
diretici Microsoft yeni çıkaracağı sürümde(ie9) woff desteğini
getireceğini duyurdu ve woff grubu ile çalışmayı kabul etti. Diğer yazı
tipi uzantılarından daha küçük boyutlara sahip olan woff gelecek için
ümit veriyor. Bu konuda gelecek ümit verici.

**Yazı Tipi Kenarlarını Yumuşatamama Sorunu**

Tasarımcıların kullandığı grafik geliştirme araçlarındaki(Phoshop,
Fireworks vd.) yazı tiplerini daha estetik gösteren yazı tipi aliasing
sorunu var. Aşağıdaki örnektede görüldüğü gibi @font-face ile
uyguladığımız yazı tiplerinde bu sorun nedeni ile tam olarak
sitelerimizde bu özelliği kullanamıyoruz.

![][2]

Burada şöyle bir sorunda daha varki ClearType özelliği başlangıçta
seçili olarak gelmeyen Windows Xp hala dünyada çok büyük bir yüzdeye
sahip. Bu konuda Mac'ler gayet güzel sonuçlar verdiğinin söyleyebiliriz.

Bu konuda her ne kadar yenide olsa webkit'ten gelen güzel bir haber var.
[-webkit-font-smoothing][] özelliğini üzerinde çalışılıyor. Bu özellik
eğer standartlaşırsa süper olacak. Sonuçları görmeden konuşmak için
erken.

**Yazı Tipi Yüklenme Sorunu**

@font-face kullanımındaki bir diğer sorunumuzda yazı tipinin
kullanıcının bilgisayarına yüklenmesinden kaynaklana sorunlar var. Eğer
kullanıcının internet hızı yavaş ise içerikler yükleniyor ve sonra yazı
tipi yüklendikten sonra siteye uygulanıyor. Buda site sahiplerinin
istemediği bir durum. Konu hakkında farklı tarayıcılarda farklı
sorunlarda var.

İşte bu noktada Google her zaman ki gibi web mecrasının geliştirmek ve
hızlandırmak konusundaki çabaları kendini gösterdi ve [Google Font][] aracını bizlerin kullanımına sundu.

Peki bu araç ne işimize yarayacak? Bu araç sayesinde ortak bir yazı tipi
havuzu oluşturulmuş olacak. Ayrıca bir çok site tarafından kullanılınca
bu araç sizin kullandığınız yazı tipini daha önce bilgisayarına bir defa
yüklemiş bir kullanıcı sizin sitenize geldiğinde yazı tipi uyarlaması
daha hızlı çalışacaktır. Yani kullanıcının ön belleğinde tutulma
yüzdesini arttırmış oluyoruz böylece. Yazı tipi bant genişliği
sorunlarıda giderilmiş oluyor ayrıca.

Tabi burada da şöyle bir sorunumuz varki oda Google Font Apı'nin
içerdiği yazı tiplerinde şimdilik Türkçe karakter yok. Ümit ediyoruz ki
yakında eklenir ve bizlerde bu kaynaktan yararlanırız. 

## Sonuç

Her ne kadar burada yazdığım sorunlar şimdilik giderilmese de ilerisi
için atılan adımlar olumlu yönde. Ümit ediyorum yakında metinlerimiz
daha özgür olacaktır. Arayüz geliştiricilerinin eli daha da
kuvvetlenecektir.

Kalın Sağlıcakla

## Kaynaklar

-   [http://www.ozdtasarim.com/blog/googledan-font-face-hizmeti-google-font-api.html][]
-   [http://code.google.com/apis/webfonts/docs/getting_started.html][]
-   [http://css-tricks.com/google-font-api-interview/][]
-   [http://designshack.co.uk/articles/css/how-to-use-the-new-google-font-api][]
-   [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-google-fonts-api-youre-going-to-love-this/][]
-   [http://www.bloggerbuster.com/2010/05/how-to-use-googles-font-api-with.html][]
-   [http://mashable.com/2010/05/27/type-and-the-web][]
-   [http://sixrevisions.com/web_design/google-font-api-guide/][]

  [100]: http://www.google.com/images/logos/font_api_logo_beta.gif
  [Yazı Tipi özellikleri]: http://fatihhayrioglu.com/font-ozellikleri/
    "Yazı Tipi özellikleri"
  [CSS'de Metin Özellikleri]: http://fatihhayrioglu.com/cssde-metintext-ozellikleri/
    "CSS'de Metin Özellikleri"
  [CSS ve Tipografi]: http://fatihhayrioglu.com/css-ve-tipografi/
    "CSS ve Tipografi"
  [Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)]: http://fatihhayrioglu.com/metin-yerine-resimflash-ekleme-teknikleri-image-replacement/
    "Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)"
  [@font-face kullanımı]: http://fatihhayrioglu.com/font-face-kullanimi/
    "@font-face kullanımı"
  [CSS ile metinlere gölge vermek]: http://fatihhayrioglu.com/css-ile-metinlere-golge-vermek/
    "CSS ile metinlere gölge vermek"
  [1]: /images/fontface_destek_tablosu.gif
  [2]: /images/anti_aliasing.gif
  [-webkit-font-smoothing]: http://maxvoltar.com/archive/-webkit-font-smoothing
    "-webkit-font-smoothing"
  [Google Font]: https://fonts.google.com/
    "Google Font"
  [http://www.ozdtasarim.com/blog/googledan-font-face-hizmeti-google-font-api.html]: http://www.ozdtasarim.com/blog/googledan-font-face-hizmeti-google-font-api.html
    "http://www.ozdtasarim.com/blog/googledan-font-face-hizmeti-google-font-api.html"
  [http://code.google.com/apis/webfonts/docs/getting_started.html]: http://code.google.com/apis/webfonts/docs/getting_started.html
    "http://code.google.com/apis/webfonts/docs/getting_started.html"
  [http://css-tricks.com/google-font-api-interview/]: http://css-tricks.com/google-font-api-interview/
    "http://css-tricks.com/google-font-api-interview/"
  [http://designshack.co.uk/articles/css/how-to-use-the-new-google-font-api]: http://designshack.co.uk/articles/css/how-to-use-the-new-google-font-api
    "http://designshack.co.uk/articles/css/how-to-use-the-new-google-font-api"
  [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-google-fonts-api-youre-going-to-love-this/]: http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-google-fonts-api-youre-going-to-love-this/
    "http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-google-fonts-api-youre-going-to-love-this/"
  [http://www.bloggerbuster.com/2010/05/how-to-use-googles-font-api-with.html]: http://www.bloggerbuster.com/2010/05/how-to-use-googles-font-api-with.html
    "http://www.bloggerbuster.com/2010/05/how-to-use-googles-font-api-with.html"
  [http://mashable.com/2010/05/27/type-and-the-web]: http://mashable.com/2010/05/27/type-and-the-web
    "http://mashable.com/2010/05/27/type-and-the-web"
  [http://sixrevisions.com/web_design/google-font-api-guide/]: http://sixrevisions.com/web_design/google-font-api-guide/
    "http://sixrevisions.com/web_design/google-font-api-guide/"
