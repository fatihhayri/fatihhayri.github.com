---
layout: post
title: Angularjs'de doğrulanmayan input değerine erişmek
Date: 2014-11-12 18:05
categories: [AngularJs]
---

Sahibinden.com'da angularjs ile çalışıyoruz. Bazı sorunlarla karşılaşıyoruz. Bunları buraya yazmanın benzer sorunları yaşayanlar için güzel bir kaynak olacağını düşündüm. 

Başlıkta tam olarak açıklayamadığım sorunu şöyle anlatabilirim; Bir inputumuz olsun, biz bu inputa girilen değeri başka bir alanda kullanıcı yazarken göstermek isteyelim. İşte sorun da tam bu noktada oluyor. Eğer bu değerini alacağımız inputa bir form kontrolü tanımlandı isek mesela *ng-minlength="5"* başka bir alanda göstermek istediğimiz bu girdi değeri bu içerik 5 karakter olana kadar görüntülenmiyor. Sorun input doğrulanmadığı için değeri model'e yazılmamasından kaynaklanıyor.

Çözüm için bir direktif yazmak gerekiyor. Şu kod işimi gördü.

<iframe frameborder="0" src="http://embed.plnkr.co/m1V8kiFWBfC4KbVEdpkb/preview" width="100%" height="400"></iframe>

Angularjs 1.3 sürümünde bu sorun çözülmüş bu arada :D

## Kaynak

 - [https://github.com/angular/angular.js/issues/1412](https://github.com/angular/angular.js/issues/1412)