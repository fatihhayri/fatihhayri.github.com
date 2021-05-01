---
layout: post
title: jQuery'den kurtulma seansları. data() vs. dataset
Date: 2017-07-04 10:05
categories: [Javascript]
tags: [normal js, data, dataset, jquery]
---

HTML nesneleri üzerinde veri taşıma alışkanlığımız HTML5 öncesine dayanıyor. HTML5 bunu standart hale getirdi ve kullanımı yaygınlaştı. Bir ögeye ait verilerin ögenin üzerinde taşıması bize bazı durumlarda çok büyük katkı sağlıyor. İşi abartmamakta yara var :) Hemen örnek ile devam edelim.

```html
<ol>
 <li data-length="2m11s">Deniz kenarı</li>
 ...
</ol>
```

bu veriyi javascript tarafında yakalamak için jQuery'nin güzel bir metodu var. data()

```javascript
$(this).data('length') // 2m11s
```

veri atamak için

```javascript
$(this).data('lat', '41.015137')
```

çok kullanışlı bir kod ve kolay bir kullanım.

İnsan normal javascript'te de aynı şeyi arıyor. Arayan buluyor :)

**classList** benzeri bir kolay erişim özelliği olarak HTML5 **dataset** özelliği var. Kullanımı jQuery gibi kolay.

```javascript
<div id="user" data-id="33" data-user="kucka" data-date-of-birth>John Doe</div>
```

veri yakalamak için

```javascript
let el = document.querySelector('#user');

el.dataset.id // '33' değerini verir
el.dataset.user // 'kucka' değerini verir

el.dataset.dateOfBirth = '26-02-1987'; // veriyi atayalım
```

jQuery ile ilişkimizi sonlandırmaya kararlıyım. Tarayıcı desteğini bizim site için güzel IE11 ve sonrası. Daha eski tarayıcılara destek verenler için getAttribute denenebilir.

Kalın sağlıcakla

## Kaynaklar

 - [http://html5doctor.com/html5-custom-data-attributes/](http://html5doctor.com/html5-custom-data-attributes/)
 - [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
 - [http://caniuse.com/#search=dataset](http://caniuse.com/#search=dataset)
 - [https://api.jquery.com/data/](https://api.jquery.com/data/)