---
layout: post
title:  CSS3 ile resimleri oranını koruyarak sığdırma
Date: 2017-11-20 10:37
Category: CSS
tags: [css, object-fit, objct-position, aspect-ratio]
---

Ardalan resimler için uyguladığımız [background-size](http://fatihhayrioglu.com/css3-background-size-ozelligi/) ve [background-position](http://fatihhayrioglu.com/hizli-css-referansi/) özelliklerine benzer bir kullanımı `<img>` ve `<video>` etiketleri içine uygulamamızı sağlayan özellikler. 

Bu özelliğe ihtiyacımız çok eksilere dayanır. Görsel içeriğin kullanıcı tarafından girildiği sitelerde gelen resim boyutlarını istenen tasarımdaki içerik kutusuna sığdırma isteklerini karşılamak için bu özellikleri kullanırız. Bu özellik yaygınlaşmadan önce bu gibi ihtiyaçları karşılamak için resimleri ardalan resmine çevirip, **background-size** ve **background-position** ile halletmeye çalışırdım. Şimdi tarayıcı desktek oranları bayağı arttı ve artık kullanabiliriz. 

## object-fit

**Yapısı :** object-fit: [ deger ]\\
**Aldığı Değerler :** fill | contain | cover | none | scale-down\\
**Başlangıç değeri:** fill\\
**Uygulanabilen elementler:** yerine konabilir elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**object-fit** özelliği, bir öğenin içerik kutusunun yüksekliğine ve genişliğine nasıl tepki verdiğini tanımlar. **object-position** özelliği ile birlikte resimler, videolar vd. medya formatları için tasarlanmıştır. **object-fi**t içerik kutusuna nesneyi en/boy oranını koruyarak, mümkün olduğunca uzatarak veya mümkün olduğunca fazla yer kaplayacak şekilde yerleştirmeyi sağlar.

Aldığı değerler

 - fill: En/boy oranına bakılmaksızın görüntüyü içerik kutusuna uyacak şekilde uzatan varsayılan değerdir.
 - contain: En/boy oranını korurken kutuya doldurmak için duruma göre resmin boyutunu artırır veya azaltır.
 - cover: Resim, en/boy oranını koruyarak ancak işlem sırasında resmi kırparak kutunun yüksekliğini ve genişliğini dolduracaktır.
 - scale-down: Resim, en küçük somut nesne boyutunu bulmak için none ve contains arasındaki farkı karşılaştıracaktır ve uygun olanı uygulayacaktır.
 - none: Resim orijinal halindeki boyutlarını korur ve içerik kutusu içine sığmaya çalışmaz. İçerik kutusundan taşan kısımlar kırpılır.

Örnek ile daha iyi anlayacağız.

<iframe height='648' scrolling='no' title='POEqBg' src='//codepen.io/fatihhayri/embed/POEqBg/?height=648&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/POEqBg/'>POEqBg</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## object-position

object-position özelliği bir objenin içerik kutusundaki yerini ayarlamamızı sağlar.

**Yapısı :** object-position: [ deger ]\\
**Aldığı Değerler :** left | center | right | top | bottom | uzunluk değerleri | yüzde değerleri \\
**Başlangıç değeri:** 50% 50%\\
**Uygulanabilen elementler:** yerine konabilir elementler\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

Örneğin üye resmi, adı ve soyadının olduğu bir alanımız var.

<iframe height='300' scrolling='no' title='object-fit öncesi' src='//codepen.io/fatihhayri/embed/KyZeZK/?height=300&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/KyZeZK/'>object-fit öncesi</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Görüldüğü gibi normal şartlarda resimler büzülmüş görünecektir. `object-fit: cover;` tanımı yaptığımızda en/boy oranı korunduğu için büzülme düzelcektir, ancak şimdide resimlerin üste çok yakın olması sorunu vardır. Bunu da halletmek için `object-position: 50% 15%;` tanımı yaparsak isteidiğimize yakın bir sonuç elde etmiş oluruz.

<iframe height='300' scrolling='no' title='object-fit öncesi' src='//codepen.io/fatihhayri/embed/POEBbo/?height=300&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/POEBbo/'>object-fit öncesi</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Bu gibi bir çok durum için kullanışlı özellikler. 

**Tarayıcı desteği**

<p class="ciu_embed" data-feature="object-fit" data-periods="future_1,current,past_1,past_2">  <a href="http://caniuse.com/#feat=object-fit">Can I Use object-fit?</a> Data on support for the object-fit feature across the major browsers from caniuse.com. </p>

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/on-object-fit-and-object-position/](https://css-tricks.com/on-object-fit-and-object-position/)
 - [https://alligator.io/css/cropping-images-object-fit/](https://alligator.io/css/cropping-images-object-fit/)
 - [https://www.sitepoint.com/using-css-object-fit-object-position-properties/](https://www.sitepoint.com/using-css-object-fit-object-position-properties/)
 - [https://tympanus.net/codrops/css_reference/object-fit/](https://tympanus.net/codrops/css_reference/object-fit/)
 - [https://helloanselm.com/2013/fix-image-resizing-with-object-fit/](https://helloanselm.com/2013/fix-image-resizing-with-object-fit/)
 - [https://caniuse.com/#search=object-fit](https://caniuse.com/#search=object-fit)
 - [https://developer.mozilla.org/tr/docs/Web/CSS/object-fit](https://developer.mozilla.org/tr/docs/Web/CSS/object-fit)
 - [https://codepen.io/dudleystorey/pen/myPZwN](https://codepen.io/dudleystorey/pen/myPZwN)
 - [https://codepen.io/jensimmons/pen/ZWRzjQ?limit=all&page=2&q=object-fit](https://codepen.io/jensimmons/pen/ZWRzjQ?limit=all&page=2&q=object-fit)
 - [https://codepen.io/ntoye/pen/kXKaPE](https://codepen.io/ntoye/pen/kXKaPE)