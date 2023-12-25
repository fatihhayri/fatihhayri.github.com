---
layout: post
title: CSS ile tip tanımı @property
description: CSS ile değişkenlere tip tanımı @property
lang: tr_TR
Date: 2023-12-25 10:00
Category: CSS
tags: [property, initial-value, inherits]
image:
  feature: property.png
---

@property nedir? CSS'in yeni bir özelliği mi? Aslında yeni bir CSS tanımı ve özelliği değil. @property geliştiriciler olarak bizim hiç dahil omadığımız alanlara girmemize izin verilen bir tanım daha doğrusu [CSS Houdini](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini)'nin bir parçasıdır.

 > CSS Houdini, Tarayıcı API'leri koleksiyonu için bir çatı terim olan Houdini, web geliştirme sürecine ve genel olarak CSS standartlarının geliştirilmesine önemli iyileştirmeler getirmeyi amaçlamaktadır. Front-end geliştiricileri, JavaScript kullanarak CSS'i yeni özelliklerle genişletebilecek, CSS oluşturma motoruna bağlanabilecek ve tarayıcıya bir oluşturma işlemi sırasında CSS'i nasıl uygulayacağını söyleyebilecek. Houdini'nin tarayıcı desteği gelişiyor ve bazı API'ler bugün kullanıma hazır. 

Kısaca, tarayıcı geliştiricilerin biz web geliştiricilere gelin birazda siz geliştirin diye açtığı kapıdır CSS Houdini. @property'de CSS Houdini'nin bir parçasıdır. Parçanın parçası, evet çok fazla parça oldu :) 

@property, biz geliştiricilere  [CSS değişkenleri (Custom Properties)](https://fatihhayrioglu.com/css-degiskenleri-custom-properties/ "CSS Değişkenleri (Custom Properties)")'nin tipini, başlangıç değerini ve kalıtsallığını tarayıcıya bildirmemize olanak sağlar. 

Genel yapısı:

```css
@property  --anaRenk {
  syntax: '<color>';
  initial-value: blue;
  inherits: false;
}
```
Söz dizimi(syntax) `<length>, <number>, <percentage>, <length-percentage>, <color>, <image>, <url>, <integer>, <angle>, <time>, <resolution>, <transform-function>, <custom-ident>, <transform-list>` değerlerinden birini alabiliyor.

Bu tanımı yaptığımızda tarayıcı, CSS değişkenini belirttiğimiz türde  kaydederek. Daha sonra geçişlerde ve animasyonlarda kullanıldığında bu özelliğin değerlerini nasıl enterpolasyona tabi tutacağını bilir.

[slashdev.io](https://x.com/slashdev_io/status/1728782613039739059?s=20)'nun örneği konuyu anlamak için çok güzel. 

<iframe height="375.6015625" style="width: 100%;" scrolling="no" title="@property  - öncesi" src="https://codepen.io/fatihhayri/embed/QWYeQgm?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/QWYeQgm">
</iframe>

Rengi ve boyutu değişen bir kutu animasyonu yapalım. Tabi buradaki `--scale: .5;` değerinin tipini anlamayan tarayıcı kutu boyutunu değiştirme kısmını uygulamayacak.

<iframe height="476.88671875" style="width: 100%;" scrolling="no" title="@property  - sonrası" src="https://codepen.io/fatihhayri/embed/NWoQyvy?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/NWoQyvy">
</iframe>

```css
@property --scale {
  syntax: "<number>";
  inherits: false;
  initial-value: 1;
}
```

tanımıyla tarayıcıya bunun bir sayı olduğunu söylediğimizde animasyon istediğimiz gibi çalışacaktır.

## Tarayıcıların geliştirme ortamında yönetimi

Şimdilik sadece Chrome'da tarayıcı geliştirme aracında gösterim var. Safari desteği var ama gösterim yok. Firefox'da yeni ekledi zamanla ekleyeceklerini düşünüyorum.

![property](https://fatihhayrioglu.com/images/property-tanimi.png)

Üzerine gelince çıkan popup'da gösteriyor ve ayrıca listenin en altında da gösteriyor.

 ## Tarayıcı desteği

Tarayıcı desteği konusunda gayet iyi yerlerde. Türkiye'de %91'lik bir oranla desteği var.

## Kaynaklar

- [https://nerdy.dev/cant-break-this-design-system](https://nerdy.dev/cant-break-this-design-system)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/@property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)
- [https://blog.logrocket.com/using-property-loosely-typed-css-custom-properties/](https://blog.logrocket.com/using-property-loosely-typed-css-custom-properties/)
- [https://css-tricks.com/exploring-property-and-its-animating-powers/](https://css-tricks.com/exploring-property-and-its-animating-powers/)
- [https://web.dev/articles/at-property?hl=en](https://web.dev/articles/at-property?hl=en)
- [https://obetomuniz.medium.com/css-custom-properties-with-property-3a86a04f9d05](https://obetomuniz.medium.com/css-custom-properties-with-property-3a86a04f9d05)
- [https://www.bram.us/2023/02/01/the-gotcha-with-animating-custom-properties/](https://www.bram.us/2023/02/01/the-gotcha-with-animating-custom-properties/)
- [https://x.com/jecfish/status/1726827782775218270?s=20](https://x.com/jecfish/status/1726827782775218270?s=20) tarayıcıda property gösterimi
- [https://x.com/aaroniker_me/status/1706946055059685492?s=20](https://x.com/aaroniker_me/status/1706946055059685492?s=20)
- [https://x.com/argyleink/status/1697672085181698444?s=20](https://x.com/argyleink/status/1697672085181698444?s=20)
- [https://x.com/slashdev_io/status/1728782613039739059?s=20](https://x.com/slashdev_io/status/1728782613039739059?s=20)
- [https://css-tricks.com/animating-number-counters/](https://css-tricks.com/animating-number-counters/) sayı animasyonu
- [https://x.com/amit_sheen/status/1602661845034229763?s=20](https://x.com/amit_sheen/status/1602661845034229763?s=20)
- [https://x.com/argyleink/status/1681724861834723328?s=20](https://x.com/argyleink/status/1681724861834723328?s=20)
- [https://x.com/argyleink/status/1648777788915322885?s=20](https://x.com/argyleink/status/1648777788915322885?s=20)