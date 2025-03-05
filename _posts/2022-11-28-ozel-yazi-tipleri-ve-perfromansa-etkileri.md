---
layout: post
title: Özel yazı tipleri ve performansa etkileri
description: Özel yazı tipleri ve performansa etkileri
lang: tr_TR
Date: 2022-11-28 13:00
Category: CSS
tags: [font, yazı-tipi, performans]
image:
  feature: font-face.webp
---

Web sitelerinde özel yazı tiplerinin kullanımı eskiden beri tercih edilegelmiştir. Özel yazı tipleri tasarımın güzelliği, marka bilinirliği, okunurluk, erişebilirlik açısından tercih ediliyor. Eskiden daha zor olan özel  yazı tipi kullanımı `@font-face` standardı sonrası kolaylaştı. Bu makalede `font-face` kullanımının performans etkisine değinmeye çalışacağım. 

## Tipografi

Yazı tipinden bahsedip tipografiden bahsetmemek olmaz. Tipografi tanımını hatırlatalım.

> "**“Tipografi**([Yunanca](http://tr.wikipedia.org/wiki/Yunanca)τύπος (_typos_)=”form” ve γραφία (_graphia_)=”yazmak” sözcüklerinden) yazıyı bir forma sokma sanatı ve tekniğidir. Font (yazı tipi), font büyüklüğü, satır uzunluğu, satır arası boşluk ve benzeri unsurların kombinasyonları ile yapılır. Yayımlanacak yazınsal içeriğin bir forma sokulması veya tasarımı olarak ta tanımlanabilir."

Tipografi tanımından da anlaşılacağı gibi bu konu derinliği olan bir konu. Tipografi'ye değindim çünkü işin sadece bir web ögesi olarak değil arkasında derya deniz bir alan olduğunu göstermek istedim. Burada sadece bu hatırlatmayı yapmayı yeterli görüp bir sonraki bölüme geçelim. Konu hakkında daha önce yazdığım yazıya bakmanızı öneririm. [CSS ve Tipografi](https://fatihhayrioglu.com/css-ve-tipografi/ "CSS ve Tipografi")

## Web'de yazı tipi kullanımı

Web sitelerinde yazı tiplerini iki şekilde kullanılmaktadır. 

 - Sistemde yüklü olan yazı tipleri 
 - Özel yazı tipleri 

### Sistem yüklü yazı tiplerinin kullanımı

Sistemde yüklü yazı tipleri kullanıcının aracında (bilgisayar, telefon, vd.) daha önceden yüklenmiş yazı tipleridir. Bu yazı tiplerinin sayısı kısıtlıdır ve işletim sistemine göre değişim gösterir. Ancak sistemde yüklü olduğu için ekstra istek ve dosya yükleme gereksinimi yoktur. En performanslı yöntemdir. 

Sistem yazı tipleri önceleri basitti. PC ve Mac kullanıcılarını da düşünerek aşağıdaki gibi bir kod ile sistem yazı tiplerini kullanabiliyorduk.

```css
font-family: Arial, Helvetica, sans-serif;
```
Ancak mobil telefonların ve çeşitli araçların da işin içine girdiği ortamda bu liste şöyle bir hal aldı.

```css
font-family: -apple-system,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
Oxygen-Sans,
Ubuntu,
Cantarell,
"Helvetica Neue",
sans-serif;
```
Neysek ki burdaki soruna çözüm olarak 

```css
font-family: system-ui;
```

tanımı geldi. Yukarıdaki iki kod aynı etkiyi yapacaktır. Detaylı bilgi için. [CSS4 sistem fontu (system-ui) değeri](https://fatihhayrioglu.com/css4-sistem-fontu-system-ui-degeri/ "CSS4 sistem fontu (system-ui) değeri") makalesine bakabilirler.

### Özel yazı tiplerinin kullanımı

Özel yazı tipleri tasarımın güzelliği, marka bilinirliği, okunurluk, erişebilirlik açısından kullanılır.

[almanac.httparchive.org](https://almanac.httparchive.org/en/2022/fonts)  verisine göre 2022 yılında dünyadaki web sitelerinin %84'ü özel yazı tipi kullanmaktadır.

Özel yazı tiplerini web sitelerimize ekleme işi uzun süredir yapılan bir iş ancak `font-face`  tanımı öncesinde özel yazı tipi eklemek bayağı zor bir iş idi.

İlk başlarda resim olarak ekleniyordu. Sonra js yardımıyla ekleme yöntemi cufon ve [flash içine ekleme yönetimi olan sIFR](https://fatihhayrioglu.com/sifr-3-kullanimi-ve-ipuclari/) gibi yöntemleri denedik. Sonuçta font-face standardının gelmesiyle buradaki garip tekniklerden kurtulmuş olduk.

Standart özel yazı tipi ekleme yöntemimiz.
```css
@font-face {  
	font-family: 'MyFont';  
	src: url('MyFont.woff2') format('woff2');  
}

p { 
    font-family: MyFont, serif; 
}
```

Burada başlangıçta özel yazı tiplerinin farklı formatlarını (.eot, ttf, otf, svg, .woff) destekleyen tarayıcılar nedeniyle bir karmaşa vardı. `woff2` formatının tüm tarayıcılar tarafından desteklenmesiyle kod sade ve temiz olan son halini aldı.

## Tarayıcıların özel yazı tiplerini yorumlamaları

Yazı tiplerinin yüklenmesinde iki farklı yöntem var. 

-  FOIT (**Flash of Invisible Text**) Özel yazı tipi yüklenene kadar yazıyı gizle, yüklendikten sonra yazıları göster
-  FOUT (**Flash of Unstyled Text**) Özel yazı tipi yüklemesini beklemeden yazıyı sistem yazı tipi ile göster, özel yazı tipi yüklenince yazıları tekrar yorumla.

Aşağıdaki örnekte daha net anlaşılıyor.

![FOIT ve FOUT](https://fatihhayrioglu.com/images/foit-fout-animation.gif)
Resmin kaynağı: https://www.malthemilthers.com/font-loading-strategy-acceptable-flash-of-invisible-text

Yukarıdaki kabuller tarayıcıların kabulleridir. İki yönteminde avantaj ve dezavantajları var. Tarayıcılar ve standart oluşturucular burada avantaj ve dezavantajı kendi durumuna göre kullanmak isteyen web geliştiricilere bırakma kararı aldılar ve bu tercihi `font-display` tanımı ile web geliştiricilere bıraktılar.

`font-display`tanımı detaylarına girmeden sizlere burada bir grafik ile özetini vereyim. 

![font-display](https://fatihhayrioglu.com/images/font-display.webp)

`font-display`tanımı detayı için [font-display özelliği](https://fatihhayrioglu.com/font-display-ozelligi/ "font-display özelliği") makalesine sizi yönlendireyim.

## Özel Fontların Performansa Etkileri

Buraya kadar yazı tipi ekleme konusuna değinmeye çalıştık. Gelelim özel yazı tipinin sayfanın performansına olan etkisine.

![tarayıcının akışı](https://fatihhayrioglu.com/images/tarayici-yukleme-akisi.webp)
Yukarıda tarayıcıların bir web sayfasını tarama zamanları ve bu işlemler sırasında tarayıcı işleyişinin bloklandığı yerleri görüyoruz. T1 - T2 arasında metinler oluşturulurken bir bloklama olduğunu görüyoruz. Özel  yazı tiplerinin sayfa performansına etki ettiği ilk kısım burası.

Google Chrome ekibi son zamanlarda performans metrikleri olarak belirlediği Core Web Vitals'in 3 maddesi:

 - **Large Contentful Paint**
 - First Input Delay
 - **Cumulative Layout Shift**

Yukarıda kalın yazıyla belirttiklerime özel yazı tipi yüklemeleri etki ediyor.

**Largest Contentful Paint (LCP):** Largest Contentful Paint (LCP), bir web sayfasındaki en büyük resim, video veya **metin bloğunun** görünür olduğu ilk ana kadar geçen süredir. Metin yüklenmesi geciktikçe LCP artacaktır. Burada şöyle bir bilgi verebilirim, eğer sayfa yazı ağırlıklı ise bu parametreye etki eder.

**Cumulative Layout Shift (CLS):** Tarayıcı ek veriler yüklendikçe sayfada meydana gelen zıplamayı (shift) ölçer. Sistem yazı tipinden özel yazı tipine geçiş yapan bir tarayıcı zıplamaya neden olur.

Sayfamızda zıplama olup olmadığını anlamak bazen zor oluyor. Bu durumda Google Chrome Dev Tools'u kullanarak çözebiliriz.

Cumulative Layout Shifts'i görmek için Google Chrome Performans sekmesinden yararlanırız.

![enter image description here](https://fatihhayrioglu.com/images/chrome-dev-tools.webp)

Chrome DevTools'da performans sekmesini çalıştırdığımızda kırmızı ile gösterilen **Layout Shift** alanları görmemiz kolay. Bu alan tıklayınca altta özet alanında ilişkili node kısmında bu zıplamaya ne neden oluyor onu görebiliyoruz.

Gerek tarayıcıların web sayfalarını yorumlama sırasındaki bloklaması ve gerekse Core Web Vitals metrikleri göz önüne alındığında özel yazı yükleme ve yorumlaması performans açısından değerlendirilmesi gereken bir konudur.

## Hızlı özel yazı tipleri yükleme yöntemleri

Özel yazı tipi yükleme ve yorumlanmasından kaynaklı performans etkilerini nasıl yok edebiliriz veya en aza indirebiliriz. Bunun için aşağıda çözüm olarak 6 madde sıralayacağım. Bu maddeler kodladığımız web sitesinin içeriğine ve beklentilerine göre çözüm olarak tercih edilebilir. Hepsini uygulayacağız diye bir şey söz konusu değildir.

1.  Doğru formatın seçimi  
2.  font-display seçimi
3.  Yazı tipi dosyalarının önden yüklenmesi
4.  Kullanılmayan karakterleri silelim
5.  Yazı tipi dosyalarını kendi sunucularımızda barındıralım
6.  Yazı tipi geçişlerindeki zıplamalardan kurtulalım

**1- Doğru yazı tipi formatının seçimi:** Burada başlangıçta özel yazı tiplerinin farklı formatlarını (.eot, ttf, otf, svg, .woff) destekleyen tarayıcılar nedeniyle bir karmaşa vardı. `woff2` formatını tüm tarayıcıların desteklemesiyle böyle bir karmaşadan kurtulmuş olduk. Hala bazı sitelerde woff tanımları kalmış olabilir kontrol edip woff2'ye çevirmek performans olarak %15 ~ 30 arasında kazanım sağlayacaktır.

**2 - font-display seçimi** `font-display` özelliği tarayıcıların yazı tipi yüklerken farklı davranışlarını web geliştiricilerin seçme olanağı sundu.

`font-display` ilk çıktığında genel tercih `font-display: swap` idi. Bunu yaparken ki düşünce olabildiğince hızlı bir şekilde kullanıcıya bir şeyler göstermekti. Özel yazı tipi hızlıca yüklendi ise özel yazı tipini göster yüklenmedi ise sistem fontu yüklenene kadar göster mantığı ile tercih edildi.

![font-display](https://fatihhayrioglu.com/images/font-display.webp)
Ancak **Googel Web Vital - Cumulative Layout Shifts** işin rengini değiştirdi. `swap` ile zıplama(shift) nedeniyle tercih edilmemeye başlandı. `font-display: optional` seçimi artık tercih edilmeye başlandı. Böylece özel yazı nedeniyle içerikte meydana gelen zıplamaları en aza indirmiş oluyoruz.

**3 - Yazı tipi dosyalarının önden yüklenmesi:** Yazı tiplerinin daha önce yükleyerek zamanı geldiğinde beklemeden yada daha az bekleyerek yazı tiplerini işlemek için kullanılan bir yöntemdir. Daha önce de bahsettiğimiz gibi yazı tip dosyaları T1-T2 arasında yüklenmektedir ancak biz bu sıralamayı değiştirip T0 anında yüklenmesini sağlayabiliriz.

![tarayıcının akışı](https://fatihhayrioglu.com/images/tarayici-yukleme-akisi.webp)

```html
<link rel="preload" 
    href="font.woff2"
    as="font"
    type="font/woff2" 
    crossorigin>
```
 `<head>` kısmına yukarıdaki kodu ekleyerek yazı tip dosyalarımızın yüklenmesini öne çekebiliriz. Burada dikkat etmemiz gereken konu çok fazla yazı tipi dosyasını önceden yükleyerek diğer dosyaların gecikmesine neden olacağını unutmamak gerekir. Sitede kullanılan önemli yazı tipi dosyasını eklemek mantıklı bir tercih gibi duruyor. Tabi başta bahsettiğim gibi bu tercihler sizin sitenizin yapısına göre değişebilir.

**4 - Kullanılmayan karakterleri (glif) silelim:** Yazı tipi dosyaları karakterlerin (glif) bir araya gelmesiyle oluşan dosyalardır. Temel karakterler dışından bazı ekstra karakter gruplarını da içerir. Mesela Türkçe yazı tiplerinde biz 'Latin Extended' grubunu ekliyoruz. Sitemize eklediğimiz özel yazı dosyalarının içeriğini inceleyip gerekli olmayan karakterleri silebiliriz. Böylece yazı tipi dosya boyutlarını azaltabiliriz. Bu işi çevirimiçi araçlarla yapabiliriz. Benim gördüğüm şöyle bir site var [Font Subsetter](https://everythingfonts.com/subsetter)

Kullanılmayan yazı tipi karakterlerini silme işinin bazı dezavantajları olabilir. Site içeriğinin tam olarak hangi karakterlere gereksinim duyduğunu iyi analiz etmek gerekir. Bunun için Zach Leatherman'ın geliştirdiği [glyphhanger](https://github.com/zachleat/glyphhanger) komut satırı aracı kullanışlı bir araç. Bu araç ile sitenizi veya sayfanızı taratıp hangi karakterleri içerdiğini bulabiliyorsunuz. 

![Yazı tipi glif listesi](https://fatihhayrioglu.com/images/glif.webp)

**5 - Yazı tipi dosyalarını kendi sunucularımızda barındıralım:** Yazı tipi dosyalarını google font, adobe font vb. yerlerden kullandığımızda bu bize hızlı kullanım imkanı ve ön belleğe alınarak yüklenme zamanından kurtulma imkanı sağlar. Son zamanlarda yazı tipi host eden şirketlerin aşağıdaki sebeplerden dolayı avantajı kalmadı.

-   Tarayıcılar son zamanlarda güvenlik nedeniyle artık yazı tipi dosyalarını önbelleğe almamayı tercih ediyorlar.
-   Farklı bir domain üzerinden alınan dosyaların DNS bağlantı maliyetleri yüksektir.

Bu değişiklikler nedeniyle yazı tipi dosyalarını kendi sunucumuzdan sunmanın daha avantajlı olduğu sonucu çıkıyor.

**6 - Yazı tipi geçişlerindeki zıplamalardan kurtulalım:** Cumulative Layout Shift(CLS) sorununu çözmek için Google ekibinden yeni bir CSS tanımı geldi. Aslında bir tanım değil de tanımlar grubu demek daha mantıklı.

-   size-adjust  
-   descent-override  
-   ascent-override  
-   line-gap-override

Bu tanımların genel mantığı özel yazı tipi ile sistem yazı tipi arasındaki geçiş sırasında meydana gelen zıplamayı engellemek için iki yazı tipini de kapsayan bir satır yüksekliğine karar vermek. Google ekibinin  **size-adjust**  özelliğini tanıtırken paylaştığı aşağıdaki resimde aslında çıkan tanımların ne iş yaptığını anlayabiliriz. 

![size-adjust](https://fatihhayrioglu.com/images/size-adjust_AdobeExpress.gif)

Görüldüğü gibi soldaki normal durumda yazı tiplerinin geçişinde yükseklik farkından dolayı bir zıplama olurken sağdaki durumda belirlenen yükseklik nedeniyle herhangi bir zıplama olmuyor. 

İki yazı tipi arasındaki bu farkı yüzde olarak bulmak için bazı araçlar geliştirilmiş durumda bu tanımların yaparken bu araçlardan yararlanmak işimiz bayağı kolaylaştırıyor. Benim gördüğüm çevrimiçi araçlardan birsi [https://screenspan.net/fallback](https://screenspan.net/fallback)

![Fallback font generator](https://fatihhayrioglu.com/images/fallback-font-generator.png)

Kodumuz şöyle oluyor:

```css
@font-face  {
	font-family:  'Roboto';
	font-style:  normal;
	font-weight:  normal;
	src:  url('roboto-regular-webfont.woff2')  format('woff2');
}

@font-face {
    font-family: 'Adjusted Arial Fallback';
    src: local(Arial);
    size-adjust: 102%;
    ascent-override: 105%;
    descent-override: normal;
    line-gap-override: normal;
}

h1 {
    font-family: 'Roboto', 'Adjusted Arial Fallback';
}
```

 - İlk başta özel yazı tipi tanımı
 - İkinci olarak `size-adjust`tanımlarının olduğu geçiş yazı tipi tanımı
 - Son satır ise site içinde kullandığımız kod

Bu özelliklerin tarayıcı desteği Safari hariç iyi durumda. Umarım yakında Safari'de destekler.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/font-size-adjust-1741163496207.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/font-size-adjust-1741163496207.png">
<img src="https://caniuse.bitsofco.de/static/v1/font-size-adjust-1741163496207.jpg" alt="Data on support for the font-size-adjust feature across the major browsers from caniuse.com">
</picture>

## Sonuç

Özel yazı tipleri ve performans konusunda ilk ciddi deneyimim [zingat.com](https://zingat.com)'da çalışırken oldu. 2017-2018 gibi bu konu üzerine çalışırken bir makale yazmayı düşünüyordum ancak olmamıştı.  O zaman ki notlarım ile şimdi yazdığım yazı arasında bazı değişimler oldu. Örneğin o zaman daha çok CDN (google font, adobe font) kullanımı önerilirken şimdi kendi sunucularda barındırma öneriliyor. Ayrıca  o zaman farklı formatlar sorun iken şimdi o sorun ortadan kalktı. O zaman `font-display: swap` önerilirken şimdi `font-display: optional`öneriliyor. Gelişmeleri takip etmek her zaman ki gibi önemli. O zaman uçuk bir örnek olarak yazı tipi dosyasını Base64 koda çevirip localstorage'da saklayıp oradan kullandığımız zamanlardı.

Sonuç olarak özel yazı tiplerinin performans etkilerini en aza indirmek için yeterli tanımlarımız var. Tabi son tanımların Safari desteğinin olmaması üzücü.

Sitemizde kullandığımız özel yazı tiplerinin etkilerini azaltmak için yukarıda sunduğumuz çözümleri uygulamamız yeterli. Listeyi özetlersek:

 1. **woff2** formatını kullanacağız
 2. `font-display: optional` seçimi yapacağız
 3. Kritik yazı tiplerini önden yüklüyoruz.
 4. Gereksiz karakter varsa siliyoruz.
 5. Yazı tipi dosyalarını kendi sunucumuzda barındıyoruz.
 6. `size-adjust` kodu oluşturup Safari hariç zıplamalardan kurtuluyoruz

Kalın sağlıcakla.

## Kaynaklar

- https://www.smashingmagazine.com/2021/05/reduce-font-loading-impact-css-descriptors/ (Font da yenili özellikler var)
- https://iainbean.com/posts/2021/5-steps-to-faster-web-fonts/ (Temiz, sade, anlaşılır)
- https://web.dev/font-best-practices/ (Yeni, google)
- https://nitropack.io/blog/post/font-loading-optimization (Performans ile ilişkilendirilmiş)
- https://web.dev/optimize-webfont-loading/
- https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/ (uzun yazı, yeni)
- https://www.zachleat.com/web/comprehensive-webfonts/ (base, eski, detaylı)
- https://www.malthemilthers.com/font-loading-strategy-acceptable-flash-of-invisible-text/ (ekran görüntüsü iyi, eski)
- https://medium.com/carwow-product-engineering/optimising-web-fonts-for-an-improvement-in-core-web-vitals-cls-score-8721eb20feed
- [https://www.youtube.com/watch?v=DLq_eQUuZFo](https://www.youtube.com/watch?v=DLq_eQUuZFo)
- [https://web.dev/css-size-adjust/](https://web.dev/css-size-adjust/)
- [https://www.ctrl.blog/entry/font-size-adjust.html](https://www.ctrl.blog/entry/font-size-adjust.html)
- [https://www.industrialempathy.com/posts/high-performance-web-font-loading](https://www.industrialempathy.com/posts/high-performance-web-font-loading)
- [https://clagnut.com/blog/2418/](https://clagnut.com/blog/2418/) (Karakter silme için detay)
- [https://andydavies.me/blog/2019/02/12/preloading-fonts-and-the-puzzle-of-priorities/](https://andydavies.me/blog/2019/02/12/preloading-fonts-and-the-puzzle-of-priorities/)
- [https://lostworldsfairs.com/eldorado/](https://lostworldsfairs.com/eldorado/)
