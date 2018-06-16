---
layout: post
title: z-index koordinasyonu
Date: 2014-09-24 14:55
Category: css
tags: [z-index]
---

z-index kullanımı; tek kişi ile çalışılan ve daha basit yapılı sitelerde pek sorun çıkarmıyor. Ama çok kişinin çalıştığı ve büyük boyutlu projelerde farklı kişilerin tanımladığı z-index değerleri birbirini eziyor ve sorunlara neden oluyor. z-index sorunları nedeni ile sitemizde gözükmeyen veya belli durumlarda gözükmemesi gereken alanların görünmesi gibi görsel sorunlara neden olabilir. 

Bu makalede z-index yönetmek ve bu sorunlara çözüm bulmak için neler yapabiliriz konularını inceleyeceğiz. Bu çözümü dinamik CSS(Stylus, SASS, LESS) ile yardımı ile yapacağız. Site boyutu büyük ise zaten dinamik CSS kullanmalı mantığı ile gidiyorum.

Çözüm olarak ayrı bir z-index dosyası oluşturmak gerekiyor. Sonra her seviye için bir z-index değeri değişkene atayıp bu değişkenler üzerinden z-index değerlerini yönetmek üzerine kurulu bir sistem.

Bootstrap'in benzer bir çözümü mevcut (LESS)

{% highlight css %}
//-- Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.
//
// Note: These variables are not generated into the Customizer.

@zindex-navbar:            1000;
@zindex-dropdown:          1000;
@zindex-popover:           1060;
@zindex-tooltip:           1070;
@zindex-navbar-fixed:      1030;
@zindex-modal-background:  1040;
@zindex-modal:             1050;
{% endhighlight %}

Şeklinde bir çözümü var boostrap'in.

Benzer bir çözümü biz kullanabiliriz. 

**zindex.styl** isimli bir stylus dosyası oluşturalım. Stylus hakkında detaylı bilgi almak için [tıklayınız](https://fatihhayrioglu.com/stylus-ile-dinamik-css-yazmak/).

{% highlight css %}
zindexBelow =           -1
zindexZero =            0
zindexDropdown =        100
zindexPopover =         200
zindexTooltip =         300
zindexOverlay =         400
zindexDialog =          500
{% endhighlight %}

Şeklinde bir zindex dosyası oluşturup site genelinde bu değişkenleri kullanarak çözüme ulaşabiliriz. Bu sayede tüm sitedeki z-index değerleri görülebiliyor ona göre tüm durumları göz önüne alarak ilgili elemana değeri atayabiliyoruz. Yukarıdaki koda dikkat ederseniz değerler arasında belli boşluklar(100 kadar) var, bu boşluklar ileride araya bir katman daha girer diye bırakıldı.

Örnekleri stylus üzerinden verdim. Bu tip işleri dinamik bir CSS yapısı ile yapmak işi kolaylaştırıyor. 

Bu zindex dosyamızı

{% highlight css %}
@import zindex
{% endhighlight %}

kendi dosyamıza ekliyoruz. Sonra kullanmak için

{% highlight css %}
.modal
    zindex zindexDialog
{% endhighlight %}

şeklinde kullanıyoruz.

Eski kodlarımızı inceleyince bu konuda çok hovarda olduğumuzu gördüm, yukarıdaki gibi bir kod yapısı ile daha düzenli ve anlamlı kullanıma ulaşacağız.

Daha önce çok fazla z-index kullanımından dolayı yukarıdaki yöntem ile çözüm oluştururken bazı sorunlarım oldu. Genelde bu durumlarla karşılaştığım yerler ard arda rakamlar tanımlanmış yerlerde oldu. Bu gibi durumları tanımları genişleterek değilde dinamik css özelliklerinde yararlanarak çözebiliriz.

{% highlight css %}
.balon
    position relative
    
    // balonun oku
    &:before
        z-index 3
    
    // okun çizgisi
    &:after
        z-index 4
{% endhighlight %}

Şeklinde bir tanım için

{% highlight css %}
.balon
    position relative
    
    &:before
        z-index zindexPopover - 1
    
    &:after
        z-index zindexPopover
{% endhighlight %}

Tek bir tanım ile ardışık iki z-index değeri elde etmiş olduk. Benzer kullanımdaki yerler için bu tip çözüm üretmek daha mantıklı geldi bana. Fazladan değişken tanımlamaktan kurtatırıyor bizi.

## Sonuç

z-index sorunu başta dediğim gibi basit yapılı sitelerde çok karşılaştığımız bir sorun değil. Ama daha büyük boyutlu sitelerde her an karşılacağımız bir sorun. Bence basit sitelerde dahi alışkanlık olması için bu yapı kullanılabilir.

Dinamik CSS artık hayatımızın bir parçası ve bir çok avantajları var. Bir çok sıkıntımıza çözüm sunması bizi kendine daha çok bağlıyor.

Düzenli olmak her zaman iyidir.

Kalın sağlıcakla.

## Kaynaklar

 - [http://css-tricks.com/handling-z-index/](http://css-tricks.com/handling-z-index/)
 - [http://www.smashingmagazine.com/2014/06/12/sassy-z-index-management-for-complex-layouts/](http://www.smashingmagazine.com/2014/06/12/sassy-z-index-management-for-complex-layouts/)
 - [http://www.sitepoint.com/better-solution-managing-z-index-sass/](http://www.sitepoint.com/better-solution-managing-z-index-sass/)
 - [https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)