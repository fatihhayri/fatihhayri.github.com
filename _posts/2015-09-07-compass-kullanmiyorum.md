---
layout: post
title: Compass kullanmıyorum
Date: 2015-09-07 17:03
categories: [CSS, SASS]
tags: [sass css-önişlemcileri]
---


[Compass](http://compass-style.org/); Sass'ın araç kutusu gibi tanımlayabiliriz. Önek sorununa çözüm oluşturan mixinleri, otomatik sprite yapma imkanı, dikey hizalama kolaylıkları, kolay ızgara sayfa planları sunan bir Sass araç kutusu olarak tanımlanabilir. Ayrıca eklenti desteği yardımı ile daha fazla geliştirilebilen bir araç kutusu. 

Peki ben niye Compass kullanmıyoum. Compass'ın bana sunduğu tüm bu yetenekleri ben grunt / gulp ile halledebildiğim için ben compass kullanmıyorum. Compass proje büyüdükçe yavaşlığa sebep olurken grunt / gulp çözümleri bana bu imkanları daha hızlı sağlaması da cabası. 

## Önek Çözümü 

Compass'ın kolaylıklarından biri önek sorununa çözüm oluşturan hazır mixinleri içinde barındırması.

Önek sorunu CSS3'ün ilk yayılmaya başladığında ciddi bir sorundu ve tüm tarayıcılar için önek üretmek gerekiyordu ancak şu an bir çok özellikte öneksiz kullanım imkanı var. Kalanlar içinde grunt/gulp'ın [Autoprefixer](https://github.com/postcss/autoprefixer) eklentisini kullanmak daha mantıklı ya da kendi mixinlerini yazmak.

## Sprite

Compass'ın avantajlarından biri de dinamik sprite oluşturma imkanının olması. Sprite resimlerini elle yapmaktansa dinamik oluşturmak güzel bir yöntem ancak bunun için de grunt/gulp eklentileri var. Hem de compass'ın çözümünden daha kolay kullanımı var. [spritesmith](https://github.com/Ensighten/grunt-spritesmith) eklentisi gayet kullanışlı.

## Diğer araçlar

Compass'ın sağladığı diğer birkaç aracı da her proje kullanmıyoruz. Kullandıklarımız içinde farklı çözümler oluşturulabilir. Örneğin kolay renk tanımları, yetenekli matematiksel işlemler ve sayfa planlaması için ızgara kullanım kolaylığı. 

## Sonuç

Sonuç olarak şunu söyleyebilirim ki; bir projeyi kodlarken bütün popüler kütüphaneleri kullanacağız diye bir şey yok. Eğer gerekiyorsa kullanırız, gerekmiyorsa boşa şişkinlik yapmaya gerek yok. Ben yaptığım projelerde compass kullanmıyorum ve hiç de aramadım. Yani tercih meselesi, ama kullanmadan önce iyi bir araştırın sonra karar verin derim. Bu arada mixin yazarken compass’ın dokümantasyonundan yararlanıyorum o ayrı :)

Kalın sağlıcakla.

## Kaynaklar

 - bensmithett.com/goodbye-compass
 - [http://www.sitepoint.com/dont-use-compass-anymore/](http://www.sitepoint.com/dont-use-compass-anymore/)
 - [http://www.scottohara.me/article/compass.html](http://www.scottohara.me/article/compass.html)
 - [http://compass-style.org/](http://compass-style.org/)
 - [http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/](http://www.sitepoint.com/compass-or-bourbon-sass-frameworks/)
 - [http://www.webdesignerdepot.com/2013/11/how-to-write-simple-elegant-css-with-compass-sass/](http://www.webdesignerdepot.com/2013/11/how-to-write-simple-elegant-css-with-compass-sass/)