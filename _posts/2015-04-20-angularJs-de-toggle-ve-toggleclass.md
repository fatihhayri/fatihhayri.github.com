---
layout: post
title: AngularJs'de toggle ve toggleClass
Date: 2015-04-20 16:41
Category: angularjs
tags: toggle toggleClass ng-class
---

Genelde jquery'den angular'a geçtiğimiz için daha önceki alışkanlıkları ve kolaylıkları angular'da da arıyoruz. Bunlardan bir taneside **toggle** ve **toggleClass**.

AngularJs ile **toggle** ve **toggleClass** uygulamak çok basit.

Basit bit **toggle** yapalım. Bir değişken(acKapa) tanımlayıp, bu değişkenin değerine göre gizle göster yapacağız. Değer kontrolünü **acKapa=!acKapa** kısayolu ile yapıyoruz.

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/PqYyjX/?height=268&theme-id=13521' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

**toggleClass** içinde benzer bir yol izliyoruz. **ng-class** yönergesini(directive) kullanıyoruz.

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/GJKYOw/?height=268&theme-id=13521' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

## Kaynaklar

 - http://stackoverflow.com/questions/15397252/angularjs-toggle-class-using-ng-class
 - http://geniuscarrier.com/ng-toggle-in-angularjs/
 - [https://docs.angularjs.org/api/ng/directive/ngClass](https://docs.angularjs.org/api/ng/directive/ngClass)