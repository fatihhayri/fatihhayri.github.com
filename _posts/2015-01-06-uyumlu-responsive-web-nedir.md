---
layout: post
title: Uyumlu(Responsive) Web Nedir?
Date: 2015-01-06 11:05
Category: css
tags: [css media-query uyumlu-web responsive]
---

Herkesin dilinde olan responsive web tasarımı nedir? Farklı çeviri önerileri var, ben **Uyumlu web** çevirisini beğendim ve bundan sonra Uyumlu web diye kullanacağım. 

**Uyumlu web**; kısaca farklı çözünürlükler için tasarlanan ve kodlanan web sayfalarına denebilir. Burada şöyle bir yanlış anlaşılma var; farklı **araçlar için değil farklı çözünürlükler** için sayfa üretmeye uyumlu web diyoruz. 

Uyumlu web çıkış noktası mobil cihazların yaygınlaşması ile oldu. Aslında mobil cihaz değilde akıllı telefonların yaygınlaşması ile ihtiyaç haline geldi desek daha doğru olacak. Çünkü ilk nesil mobil araçlar pekte internete girilesi telefonlar değildi. Zamanında Siemens S 35(Bende vardı :) ile internette dolaşmak bir hayaldi. Ne zamanki bilgisayara benzer mobil araçlar çıkmaya başladı, yani telefonlar akıllandı, işte o zaman web siteleri için bir ihtiyaç doğdu. Artık insanlar bir çok ihtiyacını mobil aracı(akıllı telefon, tablet vs.) ile hallediyor. 

[Sahibinden.com](http://www.sahibinden.com) sitesine mobil araçlar ile giren kullanıcı oranı %32(Aralık 2014 verileri) civarında. Bu siteyi gezenlerin neredeyse 1/3'ünün mobil üzerinden geldiğini gösteriyor. 

Durum böyle olunca masaüstü için tasarlanan ve kodlanan web siteleri mobil cihazlar için nasıl uyumlu hale getiririz konusuna yoğunlaşan kod yazarlarının imdadına uyumlu web yetişti. Her ne kadar mobil uygulamanın yerini tutmuyor diyenler olsa da, bence gayette tutar. Yeter ki baştan iyi projelendirilip kodlansın.

Bir arada masaüstü için farklı mobil için farklı site tasarlanıp kodlamayı seçenler olsa da, bu işten yavaş yavaş vaz geçiliyor.

![Uyumlu Web][uyumlu_web]

Yukarıdaki resimdeki örnekte görüldüğü gibi tarayıcınızın genişliğini değiştirdiğinizde farklı tasarımlar görmektesiniz. Bu sayede siteniz farklı araçlara aynı kaynak üzerinde **uyumlu** hale gelmiş oldu. Tabi web sitelerini uyumlu hale getirmek emek isteyen bir çalışma gerektirmektedir. Üç liraya beş köfte olmuyor maalesef. Projelenmesinden tasarımına ve kodlanmasına kadar eski alışkanlıklarınızı değiştirmemiz gerekiyor.

## Niçin Uyumlu web sayfaları yapmalıyız

Tamam iyi güzel de web sitelerimizi niçin uyumlu hale getirmeliyiz? Bu soru aslında avantajları sıralamak için bir başlık. Yani uyumlu web sayfaları kodlamanın avantajları nedir?

### Tüm platformlarda web siteniz düzgün görünür

Uyumlu web sayfaları kodlayarak farklı platformlar için kodlanan sayfalar tüm platformlarda aynı standartta ve görsellikte kullanıcıya görünecektir. Benzer kullanıcı deneyimi ile sitenize kullanıcıların aşinalığını bozmadan farklı mecralardan gezmelerini sağlamış oluruz. 

### Daha az çalışma zamanı

Uyumlu web sayfası hazırlarken bir site üzerinden tüm platforma ait işler yapılırken. Diğer seçeneklerde akıllı telefonlar için ayrı, masaüstü için ayrı, tabletler için ayrı kodlama yapmak gerekir. Bu da çok büyük bir zaman kaybına neden olur.

Uyumlu web ile tüm platformlar için tek elden site yönetimi sağlanır. Websiteniz her platformdan erişilebilir olur. Doğru bir yapı kurarak ileride ortaya çıkabilecek farklı araçlar için otomatik çözüm üretmiş olursunuz.

### Bakım kolaylığı

Web sitenizin birden çok farklı sürümünü oluşturmak hantal bir yapı ve yavaş bir içerik yönetimine neden olur. Bir güncelleme yapmak için her platform(iphone, ipad vd.) için ayrı ayrı iş yapmak gerekir. Uyumlu web sayfalarında ise tek bir yerden yapılan güncelleme ile tüm platformlar aynı anda güncellenmiş olur. Uyumlu web sayfalarında farklı sürümler ve bunların güncelleme sorunları ile uğraşmazsınız.

### Daha az para

Farklı platformlar için uygulama veya site yaptırmak fazladan para harcamasına neden olacaktır. iPad uygulaması için ayrı emek ve para, iphone için ayrı emek ve para, Android uygulaması için ayrı emek ve para, masaüstü site için ayrı emek ve para harcaması bir çok şirket için büyük bir gider kalemi olarak görülebilir. 

Uyumlu web sayfaları ile tek bir site ile bu farklı araç ve platformlara tek yerden çözüm ve tek ödeme yapma imakanımız var. Patronlar, kulağa hoş geliyor değil mi?

### Arama motorlarında daha iyi sonuç

Arama motoru deyince akıllara hemen google geliyor. Google web sayfası geliştirenlere uyumlu sayfalar oluşturmaları yönünde destek vermektedir. Aramalarda daha değerli olacağını söylemektedir. Arama sonuçlarında [mobile uygun](http://googlewebmastercentral.blogspot.com.tr/2014/11/helping-users-find-mobile-friendly-pages.html) ibarelerini koyuyor artık google.

Tek bağlantı üzerine içeriği zenginleştirmek size büyük avantaj sağlar. Diğer seçeneklerde farklı araçlar farklı url'leriniz olduğu için her biri için tek tek seo çalışmanız gerekecektir.

Ayrıca aynı içeriğin tekrar tekrar farklı adreslerden yayınlanması google'un istemediği bir durumdur. Tekrarlanan içerikten dolayı google'un cezalandırmasına uğrayabilirsiniz.

### İleriye dönük uyumluluk

Uyumlu web sayflarının esnekliği sayesinde yeni çıkacak olan araçlar ve platformlara hemen uyum sağlama imkanı sağlıyor. Yeni yeni filizlenen giyilebilir teknolojiler için ayrı bir site yapmak yerine mevcut sitenizi giyilebilir araçlara uyumlu hale getirmek için ufak bir iki değişiklik yapmak yeterli olacaktır.

### Paylaşıma tek çözüm

Paylaşım yapılan bir sayfamızın farklı platformlardan erişiminde sorun yaşamayız. Diğer seçeneklerde iki farklı url'leden dolayı sorun yaşanır. Örneğin akıllı telefondan bakarken paylaşılan bağlantıya masaüstü kullanıcı açtığında karşısına mobil için tasarlanmış sayfa gelir. Buda güzel bir deneyim olmaz.

### Yüksek tarayıcı destek oranı

Uyumlu web sayfaları kodlarken kullandığımız @media sorgularını ie8 hariç tüm tarayıcılar desteklemektedir. Şu an ki orana baktığımızda tarayıcı destek oranı %97'dir. Bu oran çok yüksek bir oran. 

## Sonuç

Sonuç olarak baktığımızda arkasına aldığı rüzgar ile eksiklerinide yakın zamanda gidereceğini düşünürsek web sitelerinin uyumlu web dünyasına hızlıca gireceğini tahmin etmek çok büyük bir kehanet değildir. Resim ve performans sorunları için üretilen çözümler ile ihtiyaçları tam karşılayan bir yapı olarak önümüze çıkıyor uyumlu web. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://isadoradesign.com/web-design-journal/web-design/benefits-of-responsive-web-design/](http://isadoradesign.com/web-design-journal/web-design/benefits-of-responsive-web-design/)
 - [http://www.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/](http://www.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/)
 - [http://mediaqueri.es/](http://mediaqueri.es/)
 - [http://alistapart.com/article/responsive-web-design](http://alistapart.com/article/responsive-web-design)
 - [http://googlewebmastercentral.blogspot.com.tr/2014/11/helping-users-find-mobile-friendly-pages.html](http://googlewebmastercentral.blogspot.com.tr/2014/11/helping-users-find-mobile-friendly-pages.html)
 -  [http://caniuse.com/#search=media](http://caniuse.com/#search=media)
 - borayalcin.me/2012/03/08/responsive-design-icin-turkce-karsilik/

[uyumlu_web]: /images/uyumlu_web.png
