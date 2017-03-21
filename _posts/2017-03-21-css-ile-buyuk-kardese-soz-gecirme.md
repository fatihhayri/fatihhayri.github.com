---
layout: post
title: CSS ile büyük kardeşe söz geçirme
Date: 2017-02-17 16:05
Category: CSS
tags: [kardeş seçici, ipucu]
image:
  feature: anasayfa-ilk-gornum.png
---

Başlığa bakınca sanki bir aile olayına dair bir yazı geçecek anlamı çıkarmayın. HTML'deki elemanların birbiriyle olan ilişkilerini anlatmak için soyağacı benzetmesi yaparız ve birçok yerde kullanırız. Ebeveyn, çocuk, kardeş seçicileri gibi. Bu yazımın konusunda CSS'in seçicileri ile ilgili olacaktır.

CSS ile aynı seviyedeki elemanların ilişkilerini kullanarak bazı seçme işleri yaparız.  Bu durumlar için iki adet seçicimiz vardır. [Bitişik kardeş seçicisi](http://fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/) (+) artı işareti ile kullandığımız ve [genel kardeş seçicisi](http://fatihhayrioglu.com/css3-secicileri/) (~) tilda işareti ile kullandığımız. Gayet kullanışlı seçiciler olan bu kardeş kökenli seçicilerimizin bir sorunu var. Sorunu yine soyağacı benzetmemiz üzerinden tanımlarsak, büyük kardeşe erişememe sorunumuz vardır. Belirlediğimiz bir elemanın öncesindeki kardeşi seçecek bir CSS seçicisi yoktur. Sorunu anladığımıza göre benim bu sorunu tekrar hatırlamama neden olan durumu da açıklayayım size.

![zingat.com kutular](http://fatihhayrioglu.com/images/anasayfa-kutular.jpg)

[zingat.com](zingat.com) anasayfasındaki büyük resmin üzerindeki gri kutuların hepsi gri yani pasif görünüyordu. Üzerine gelince büyüyor, rengi değişiyor. Yeni istek ise, ilki aktif gözüksün, diğerlerinin üzerine gelince ilki pasif olsun.  İş küçük bir iş gibi görünse de ilk olarak aklıma CSS ile bunu yapmanın imkanı yok javascript ile yapmak lazım dedim. Sonra işi flex ve order yardımı ile yapabileceğim fikri aklıma geldi ve bu yazı ortaya çıktı.

Mantık şöyle; CSS önceki elemana erişemiyorsa bende ilk elemanı sona atarım ve CSS ile işimi çözerim.

flex tanımlı bir kapsayıcı içindeki kutuları order ile sona atarsam artık CSS ile erişilebilir hale getirmiş oluyorum. Kod örneği aşağıdaki gibi.

<iframe height='500' scrolling='no' title='YZEKMz' src='//codepen.io/fatihhayri/embed/YZEKMz/?height=500&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Belki sizin de işinize yarar.

Kalın sağlıcakla.