---
layout: post
title: Resimlerimizi retina ekranlara uygun hale getirmek
Date: 2014-02-06 14:59
categories: [CSS]
tags: [retina, uyumlu-web, picture, srcset]
---

İlk defa bir konuda yeterli Türkçe kaynak bulma sevincini yaşıyorum. Kaynaklar kısmındaki Türkçe bağlantıların her biri çok güzel bilgiler veriyor. Bana yazacak bir şey kalmadı :D Süper, süper, süper.

Ben sizlere bu makalelerden okuduklarımı özet olarak yazacağım.

**Retina ekran** tanımı ile ilk iPhone 4 ile tanıştık. Retina ekran yüksek çözünürlüklü ekran manasınadır. Görüntü teknolojilerinin gelişmesi ile  firmalar daha net görüntü elde edecek çözümlere yöneliyor.

İnsanlar hızla yüksek çözünürlükte aletler satın alıyor ve buda biz web sitesi geliştiricilere fazladan iş yükü çıkarıyor. Bir yandan gelişmeler sevindirirken, bir yandan fazladan iş çıkması üzüyor.

Genelde hazırlanan resimlerin kaliteleri, retina ekranlar için düşük kalır. Bundan dolayı retina ekranlarda resimlerimiz daha bulanık görünür.

![bulanık görüntü][20]

Yukarıdaki resimde görüldüğü gibi resmin normal halinde net bir görüntü var iken sağdaki 2 kat büyütülmüş resimdeki net olmayan bulanık bir görüntü görünmektedir.

![retina oranlar][21]

Yukarıdaki görüntü kısaca olayı özetliyor aslında. Android ekranlar 1.5:1 oranına sahip, apple ürünleri(retina) 2:1 oranına sahip.

Evet elimizde yeni bir sorunumuz daha var. Peki bu sorunu nasıl çözeriz. Bu sorunun çözümü için çeşitli yöntemler var. Bunları sırası ile aktarmaya çalışacağım. Kendi projenize hangisi uygun ise siz onu kullanabilirsiniz.

## 1 - CSS ile uyarlama

```css
/* düşük çözünürlükteki tanım */
.logo {
    background-image: url(/images/logo.png);
    height: 300px;
    width: 200px;
}
/* yüksek çözünürlük için tanım */
@media (min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
    .image {
        background: url(/images/logo@2x.png) no-repeat;
        background-size: 200px 300px; /* ilki genişlik ikinici yükseklik */
    }
}
```

CSS’in güzel özelliklerinden biri olan medya sorgularını kullanarak yüksek çözünürlükteki ekranları yakaladık. Yakaladığımız bu sınıfa yüksek çözünürlükte bir resim tanımladık. Burada illa ki **@2x** ismi vermek zorunda değiliz, ancak daha anlaşılır olsun diye ve normal resim ile karışmasın diye bu tanım genelde kullanılmakta.

İkinci püf noktası **backgrund-size** tanımı ile retina için oluşturduğumuz resmimizi normal boyutunda görünmesini sağlamaktır. Yoksa resim hazırlandığı gibi iki kat büyük görünür.

## 2 - CSS ile image-set tanımı

Webkit tarafından geliştirilen bu yöntem ile basit bir şekilde farklı piksel yoğunluğundaki araçlar için **background-image** tanımı yapabiliyoruz. Bu sayede cihaza göre en iyi çözünürlükte resim sunma imkanı sağlıyor.

```css
background-image:  -webkit-image-set(
  url(icon1x.jpg) 1x,
  url(icon2x.jpg) 2x
);
```

Her piksel yoğunluğu için bir resim tanımı yapabiliyoruz. Biz iki tanım yapıyoruz, tarayıcı bunlardan birisini seçerek kullanıcıya gösteriyor. Bu özelliği sadece webkit tabanlı tarayıcılar destekliyor. Zamanla desteği çoğalırsa güzel olacak.

## 3 - Javascript ile çözüm üretmek

CSS ile bütünleşik kolay bir çözüm yok, bunun için ufak bir javascript ile bu sorunu tüm projemizde çözebiliriz.

Javascript ile bir kaç çözüm mevcut bu konuda. En mantıklı çözüm eğer kullanıcı retina kullanan bir makineden geliyor ise resimlerin 2x hallerini göster, window.matchMedia metodu bu işi için biçilmiş kaftan tabi bu metodu desteklemeyen tarayıcılar bir sorun olarak ortaya çıkıyor. Destekleyenler için bu metodu kullanan; desteklemeyenler için alternatif çözüm üreten bir kod yazmış Scott Jehl diye bir arkadaş. [Picturefill][1] adını verdiği kodun kullanımı;

```html
<span data-picture data-alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
        <span data-src="small.jpg"></span>
        <span data-src="medium.jpg"     data-media="(min-width: 400px)"></span>
        <span data-src="large.jpg"      data-media="(min-width: 800px)"></span>
        <span data-src="extralarge.jpg" data-media="(min-width: 1000px)"></span>
        <!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
        <noscript>
            <img src="small.jpg" alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
        </noscript>
</span>
```

Boyutu gayet küçük güzel bir çözüm.

Şimdilik kaydı ile güzel bir çözüm olarak kullanılabilir, ama buna HTML’in bir çözüm bulması şart.

## 4 - HTML5 ile uyarlanabilir resim çözümü

2012 senesinde HTML5 geliştiricileri uyarlanabilir web içindeki sorunlardan biri olan resimlerin uyarlanması konusunda çalışmalar yaptı. Geniş katılımlı ortak bir çözüm arayan grup, bu sorunun çözümüne dair önerileri ve bazı sonuçlara varıldı.

Bu konuda bir organizasyon oluşturup birde site açıldı [http://responsiveimages.org/][2] sitesinden bilgi almak mümkün. **Responsive Images Community Group (RICG)**, W3C’den farklı bir oluşum.

Farklı tarayıcı üreticileri konu hakkında fikirlerini sunduğu bu platformda

```html
<picture>
  <source media="(min-width: 40em)" srcset="big.jpg 1x, big-hd.jpg 2x">
  <source srcset="small.jpg 1x, small-hd.jpg 2x">
  <img src="fallback.jpg" alt="">
</picture>
```

Yeni bir element(**&lt;picture&gt;**) ile üretilen yukarıdaki gibi bir sonuç kod bloku çıktı. Farklı medya tipleri için resim tanımı yapılabilen bir çözüm.

Farklı görüşlerin ve önerileri çıktığı topluluktan herkesin kabul ettiği bir çözüm çıkmadı. Ancak bir çok programcı **&lt;picture&gt;** etiketine olumlu bakıyor.

## 5 - W3C’nin (srcset) parametresi ile çözüm

w3c yeni **&lt;picture&gt;** elementi yerine mevcut **&lt;img&gt;** elementi içinde yeni bir parametre olarak **srcset** konarak bir çözüm oluşturma yoluna gitti.

```html
<img src="logo.jpg" alt="SampleCorp"
  srcset="large.png 600w 200h 1x,
    large_2x-res.png 600w 200h 2x,
    mobile-icon.png 200w 200h">
```

Mantık olarak aynı ancak yazım olarak farklı bir yöntem. **600w = 600px** genişlikte ve **200h = 200px** yükseklikteki araçlar için **large.png**; 2x ile belirtilen retina ekranlarda **large_2x-res.png** resmini yüklenmesini; daha düşük boyutlardaki ekranlarda  **mobile-icon.png** yüklenmesini belirtiyor yukarıdaki kod.

Webkit’in desteği ile bir adım öne çıkın bu kod, genel kabul görür mü bakacağız.

Ayrıca desteklemeyenler için [https://github.com/borismus/srcset-polyfill][3] bir çözüm olarak kullanılabilir.

> **polyfill**; özelliklerin farklı tarayıcılar tarafından destekleyen/desteklemeyen ayrımını javascript yardımı ile tek bir noktada toplamaya yarayan kod blokları olarak açıklanabilir.

## 6 - İkonik resimler için @font-face ile çözüm

Sitenizde çok fazla ikon kullanıyorsanız bunların her biri için retina çözümleri oluşturmak sorun olacaktır. Burada resim yerine ikonları **[@font-face][4]** ile ekleyerek bu sorunu çözebiliriz. Yazı tipleri gibi yaz tipi içindeki vektörel ikonlarda kendiliğinden retina ekrana uyumlu hale gelecektir.

İkonlarınız için bir yazı tipi dosyası oluşturup sitenize ekleyerek tüm ikonlarınızı retinaya uyumlu hale getirmiş olursunuz.

```html
<h3>
  <span aria-hidden="true" data-icon="&#x21dd;"></span>
  Stats
</h3>
```

span etiketi data özniteliğine kullanacağımız ikonun unicode’unu yazıyoruz ve CSS kodu;

```css
[data-icon]:before {
  font-family: icons; /* BYO icon font, mapped smartly */
  content: attr(data-icon);
}
```

CSS ile data özniteliğinden aldığımız içeriği elemanın öncesine ekliyoruz.

## 7 - Bitmap resim yerine SVG resim kullanarak çözüm üretmek

Bitmap resimler retina ekranlarda yukarıda bahsettiğimiz bozulmaya neden olurken vektörel resimler(SVG) çözünürlüğün artması veya azalması ile bozulmaz. Bu sayede iki kere resim yükleme derdinde kurtulmuş oluruz.

Çok renkli resimler hariç tüm resimler ve ikonlarımız için SVG kullanabiliriz.

```html
<img src="deneme.svg" width="150" height="200"/>
```

CSS kodu;

```css
.image {
    background-image: url(example.svg);
    background-size: 150px 200px;
    height: 150px;
    width: 200px;
}
```

SVG desteğinin ie8 hariç olması bizim için büyük avantaj. SVG konusuna ayrıca daha detaylı değinmemiz gerekiyor. Şimdilik bu kadar ile yetinelim.

## Sonuç

Bu konu için henüz tam ve kolay bir çözüm üzerinde anlaşılmamış olsa da işimizi görecek kodlar mevcut. Konu hakkındaki gelişmeleri izlemeye devam edeceğiz.

Yukarıdaki çözümlerden yaptığımız projeye göre en uygunun olan bir veya birkaçını kullanacağız artık.

Kalın sağlıcakla.

## Kaynaklar

 - http://www.ozdemir.info.tr/?p=396
 - http://www.huseyinemanet.com/post/43506500952/retina-display-icin-kod-yazmak
 - [http://css-tricks.com/snippets/css/retina-display-media-query/][7]
 - [http://www.sitepoint.com/css-techniques-for-retina-displays/][8]
 - [http://www.leemunroe.com/designing-for-high-resolution-retina-displays/][9]
 - [http://mashable.com/2013/05/22/convert-to-retina/][10]
 - [http://bjango.com/articles/designingforretina/][11]
 - [http://metinyilmaz.me/retina-display-ve-website-optimizasyonu/][12]
 - [http://designmodo.com/design-retina-displays/][13]
 - studiopress.com/design/css-background-size-graphics.htm
 - [https://coderwall.com/p/6ltcnw][15]
 - [http://www.html5rocks.com/en/mobile/high-dpi/][16]
 - [http://net.tutsplus.com/tutorials/html-css-techniques/better-responsive-images-with-the-picture-element/][17]
 - [http://html5doctor.com/html5-adaptive-images-end-of-round-one/][18]
 - [http://css-tricks.com/examples/IconFont/][19]


  [1]: https://github.com/scottjehl/picturefill
  [2]: http://responsiveimages.org/
  [3]: https://github.com/borismus/srcset-polyfill
  [4]: https://fatihhayrioglu.com/font-face-kullanimi/
  [7]: http://css-tricks.com/snippets/css/retina-display-media-query/
  [8]: http://www.sitepoint.com/css-techniques-for-retina-displays/
  [9]: http://www.leemunroe.com/designing-for-high-resolution-retina-displays/
  [10]: http://mashable.com/2013/05/22/convert-to-retina/
  [11]: http://bjango.com/articles/designingforretina/
  [12]: http://metinyilmaz.me/retina-display-ve-website-optimizasyonu/
  [13]: http://designmodo.com/design-retina-displays/
  [15]: https://coderwall.com/p/6ltcnw
  [16]: http://www.html5rocks.com/en/mobile/high-dpi/
  [17]: http://net.tutsplus.com/tutorials/html-css-techniques/better-responsive-images-with-the-picture-element/
  [18]: http://html5doctor.com/html5-adaptive-images-end-of-round-one/
  [19]: http://css-tricks.com/examples/IconFont/
  [20]: /images/retina_ornek.png
  [21]: /images/retina_2.png
