---
layout: post
title: HTML içine html eklemek(import)
description: HTML sayfalarına CSS, Javascript, resim video, ses vd. dosyaları ekleyebilirken diğer html dosyalarını eklemek için iframe, ajax isteği ile veya çakma script dosyası gibi gösterilmiş html dosyaları ile ekleyerek yapıyorduk. HTML import ile artık html dosyalarımızı html içine ekleyebileceğiz.
lang: tr_TR
Date: 2014-12-30 11:05
categories: [HTML]
tags: [html5 import asyn]
---


HTML sayfalarına CSS, Javascript, resim video, ses vd. dosyaları ekleyebilirken diğer html dosyalarını eklemek için iframe, ajax isteği ile veya çakma script dosyası gibi gösterilmiş html dosyaları ile ekleyerek yapıyorduk/yapıyoruz. HTML import ile artık html dosyalarımızı html içine ekleyebileceğiz.

HTML kodlama yapımızı değiştirecek bu yapıyı henüz sadece Chrome ve Chrome alt yapısını kullanan tarayıcılar(Opera ve Chrome mobil) destekliyor. 

HTML içine HTML'i eklerken normal CSS ve Javascript ekler gibi ekliyoruz. Bir iki farklı yanı var. İlk fark **rel="import"** kısmı. İkinci fark ise direk HTML içine eklenmiyor içerik. Bu kod ile tarayıcı yüklüyor, sahne arkasında saklanarak kulanıma hazır hale geliyor. Biz kullanmak istediğimizde javascript ile bu içeriği ekliyoruz.

Kullanımı;

```html
<head>
  <link rel="import" href="/sablonlar/ekmek.html">
</head>
```

> **Önemli bir not:** Bu yöntem ile aynı domain altındaki dosyaları ekleyebiliyoruz. Farklı domain'den çağıralacak dosyalar için [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) özelliğinin açılması gerekmektedir.

Daha sonra işin içine javascript giriyor. 

```html
<link rel="import" id="sablon" href="ekmek.html">
```

İlk olarak javascript ile daha kolay erişmek için import koduna bir **id="sablon"** ekleyelim. Daha sonra ayrı html dosyası oluşturalım mevcut HTML'in içine ekleyeceğimiz. 

ekmek.html;

```html
<section id="icerik">Ekmke 1 TL</section>
```

Mevcut HTML'in **body** kısmında javascript ile **import** elemanını yakalayalım.

```javascript
var ekmekAl = document.querySelector('#sablon');
```

Sonra içe aktracağımız HTML'in içindeki elemanı yakalayalım. 

```javascript
var ekmekIci = ekmekAl.import.querySelector('#icerik');
```

Son olarakta aldığımız bu içeriği mevcut HTML içine ekleyelim.

```javascript
document.body.appendChild(document.importNode(ekmekIci, true));
```

Sonuç aşağıdaki ekran görüntüsündeki gibi olacaktır. 

![HTML import][import]

> Örnek bir dokümanı oluşturup, kendi bilgisayarınızda açtığınızda yukarıdaki sonucu göremeyeceksiniz. Görmek için bir Server'a ihtiyacınız olacak. Örneğin http://localhost gibi bir urlde erişmeniz gerekecek.

Eklenen html dosyası CSS ve Javascript dosyaları gibi mevcut HTML'in yüklenmesini bloklayacaktır.  Bunu engellemek için **async** özniteğini eklemek yeterlidir.

```html
<link rel="import" id="sablon" href="ekmek.html" async>
```

## Desteklemeyen tarayıcılar için 

Bu özelliği başta belirttiğim gibi sadece Chrome tabanlı tarayıcılar desteklemektedir. Peki desteklemeyenler için bir çözüm yokmudur derseniz.  İlk olarak bu özelliği taracının destekleyip desteklemediğini kontrol etmek için

```javascript
if ('import' in document.createElement('link')) {
    // HTML imports destekleniyor
} else {
    // HTML imports desteklenmiyor.
}
```

böyle bir javascript kodu var. Ayrıca [Polymer](https://www.polymer-project.org/) grubunun ürettiği [HTMLImports](https://github.com/polymer/HTMLImports) adlı bir çözüm var. 

## Sonuç

Bir çok alanda kullanılabilecek güzel bir yapı. Benim ilk duyduğumda sadece html ile yapılan bir yapı olduğunu düşünmüştüm. Sonra işin içine javascript girdiğini öğrendiğimde biraz soğudum, ama buda iyidir. Sadece html ile yapmak daha güzel olurdu. 

Sonuç olarak güzel bir özellik ama bazı sorunlarıda beraberinde getiriyor. Örneğin sonradan javascript yardımı ile eklenen html arama motorlarının tarama alanı dışana çıkması sorunu oluşturacaktır. Google'un javascriptleri yorumlayacağı durumda bu sorun olmaktan çıkacak gibi. Ama henüz erken.


## Kaynaklar

 - w3c.github.io/webcomponents/spec/imports/
 - [http://www.html5rocks.com/en/tutorials/webcomponents/imports/](http://www.html5rocks.com/en/tutorials/webcomponents/imports/)
 - [http://blog.teamtreehouse.com/introduction-html-imports](http://blog.teamtreehouse.com/introduction-html-imports)
 - [http://www.hongkiat.com/blog/html-import/](http://www.hongkiat.com/blog/html-import/)
 - [http://caniuse.com/#search=import](http://caniuse.com/#search=import)
 - [http://sehmusgokce.com/iis-7de-cors-ozelligini-acma-ve-rest-api-sorunlarini-giderme-253.html](http://sehmusgokce.com/iis-7de-cors-ozelligini-acma-ve-rest-api-sorunlarini-giderme-253.html)

[import]: /images/html_import.jpg
