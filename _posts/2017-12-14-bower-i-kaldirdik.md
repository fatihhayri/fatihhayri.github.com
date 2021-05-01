---
layout: post
title:  Bower'ı kaldırdık
Date: 2017-12-14 16:37
categories: [Genel]
tags: [bower, yarn, npm]
---

Arayüz geliştiricileri (Front-end) dünyası çok hızlı bir şekilde güncelleniyor. Her gün birçok kütüphane ve araç çıkıyor ve bazıları kendilerini sonlandırıyor. Arayüz geliştiriciler için bu yeniliklerin takibi önemli bir konu. Kendini güncel tutmak için yenilikleri takip etmek olmazsa olmaz. Çıkan yenilikleri çalışma hayatımızı kolaylaştıran yenilikler, bunlardan haberdar olmak bizim iş yükümüzü azaltıyor. Aynı şekilde eskiyen ve yayından kalkan kütüphane ve araçları sistemimizden kaldırmak ve güncellemek bizim için bir görev.

```npm
npm WARN deprecated bower@1.8.2: ...psst! 
Your project can stop working at any moment because its dependencies can change. 
Prevent this by migrating to Yarn: 
https://bower.io/blog/2017/how-to-migrate-away-from-bower/
```

[zingat.com](https://www.zingat.com)'da middleware olarak nodejs kullanıldığı için client olarak tanımlanan tarafta için iki tane paket yöneticimiz vardı. npm (yarn) ve bower. Bower geliştirmeyi sonlandırdıktan sonra acaba tüm paketleri yarn'a mı geçirsek diye ara sıra konuşuyorduk. Sonra [Doğan](https://twitter.com/dodothebird) ile birikte bir gün kaldıralım bu bower'ı ne olacak dedik ve işe giriştik.

Bazı paketlerde sıkıntı yaşasakta bower kaldırma işlemi beklediğimizden daha kolay geçti.

İlk olarak *bower.json* dosyasındaki bağımlılıkları npm'e taşıdık.


```bash
"dependencies": {
  "bootstrap": "3.3.1",
  "highcharts": "4.1.10",
  "jquery": "1.11.2",
  "jsUri": "1.3.0",
  "bootstrap-select": "1.12.1",
  "jquery.tablesorter": "2.18.4",
  "lodash": "4.15.0",
  "jquery-validation": "1.13.1",
  "jquery-mask-plugin": "1.14.0",
  "bootbox": "4.4.0",
  "moment": "2.9.0",
  "numeral": "1.5.3",
  "notifyjs": "jpillora/notifyjs#0.3.2",
  "jquery.cookie": "1.4.1",
  "jquery-ui": "1.11.4",
  "jquery-touchswipe": "1.6.18",
  "slick-carousel": "1.6.0",
  "df-visible": "1.2.0",
  "moment-timezone": "0.5.4",
  "async": "2.0.1",
  "DOMPurify": "dompurify#0.8.4",
  "nouislider": "9.2.0",
  "Watch.JS": "watch#1.3.1",
  "multiple-circular-player":"0.0.2",
  "jquery-lazy": "1.7.5"
}
```


sonra nodejs ile ön tarafta kullandığımız kütüphaneleri bu listeden sildik. lodash, moment, numeral vs.

Sonra **bower_component**, **node_modules** klasörü ve **.bowerrc** ve **bower.json** dosyalarını sildik. Ayrıca zingat.com yayına alma süreçlerindeki bazı kısımlardan da sildik.

```bash
yarn cache clean
```

ve

```bash
yarn
```


diyerek tüm bağımlılıklarımızı yükledik. Burada bower'dan taşıdığımız bazı kütüphaneler uyarı verdi. Belirttiğimiz sürümlerin yerine daha yeni sürümleri var diye. Bazı bağımlılıkları da bulamadı.
yarn'ın bulamadığı kütüphaneleri [https://yarnpkg.com/lang/en/](https://yarnpkg.com/lang/en/) sitesinden aradık. Bazılarının isimleri npm'de farklılık gösterdiği için yükleyememişti. Yeni isimlerini **package.json**'a ekledik ve komut satırından yarn komutu çalıştırdık.

Sıra geldi bu kütüphaneleri koda ekleyen **grunt-concat** yürütücüsünde **bower_component** geçen yerleri düzelttik.

Sonra kendi bilgisayarımızda projeyi ayağa kaldırdığımız da bazı scriptlerin çalışmadığını gördük. Çalışmayan kütüphaneler ismini değiştirdiğimiz kütüphanelerdi, bunları yeni **node_module**'deki karşılıkları ile değiştirdik.

İşlem bitti.

Bunların dışında sitenin yayına çıkma süreçlerinde bazı düzenleme işleri çıktı. Site iyi bir testten geçtikten sonra bower’sız bir şekilde yayına çıktı.

Bower'ı o kadar kullandık ama artık zamanı geçti. Ne diyelim "Toprağı bol olsun" diyelim. :)

## Kaynaklar

 - [https://bower.io/blog/](https://bower.io/blog/)
 - [https://gofore.com/stop-using-bower/](https://gofore.com/stop-using-bower/)
 - [https://medium.com/netscape/bye-bye-bower-or-how-to-migrate-from-bower-to-npm-and-webpack-4eb2e1121a50](https://medium.com/netscape/bye-bye-bower-or-how-to-migrate-from-bower-to-npm-and-webpack-4eb2e1121a50)
