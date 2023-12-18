---
layout: post
title: CSS ile dinamik arka planlarda metin rengini otomatik değiştirtmek
description: CSS ile dinamik arka planlarda metin rengini otomatik değiştirtmek
lang: tr_TR
Date: 2023-12-18 10:00
Category: CSS
tags: [mix-blend-mode, dinamik-arka-plan, ipucu]
image:
  feature: mix-blend-bg.png
---

Durumu şöyle açıklayabilirim: Aslında başlıkta açıklamış gibiyim :) Değişen arka planların olduğu bir yapının üzerindeki metinlerin rengini dinamik değiştirmeyi göreceğiz.

Böyle bir ihtiyacımız olmuştu daha önce bunu nasıl yaparız diye düşünüp çözemeyince farklı yollara başvurmuştuk.

Hatırladığım dört örnek var. Kendilerini bulamasam da benzer örnekler üzerinden sorunları ve çözümlerini anlatmaya çalışacağım. Son örnek benim sitemden olduğu için onu önceki ve sonraki hallerini resim olarak ekledim.

## Dinamik arka planlı carousel 

Çok eskilerde bir iş yapmıştım bir carousel yapıda resim üzerinde yazıların olduğu bir örnek vardı. Tasarımcının yaptığı örnekler mükemmeldi ancak iş kodlamaya dökülüp gerçek veriler girdiğinde hiçte hoş olmayan bir durum ortaya çıktı.

Üzerinden çok süre geçtiği için o carousel'i bulamadım. Onun yerine [scroll-snap](https://fatihhayrioglu.com/css-scroll-snap/ "CSS scroll-snap") yazısındaki örneğe bir yazı ekleyip göstereyim dedim. Örnek olsun diye ilk resmi metin rengi ile aynı olacak şekilde ardalanı beyaz bir köpek resmi ekledim. İlk resimde yazını altına beyaz ardalan geldiği için normalde yazı gözükmeyecekti. Biz burada `mix-blend-mode: difference;` ekleyerek yazının arkada gelen resimden bağımsız görünmesini sağladık.

<iframe height="699.53515625" style="width: 100%;" scrolling="no" title="Social Media Carousel with Scroll-Driven Animations" src="https://codepen.io/fatihhayri/embed/BaMgZLb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/BaMgZLb">
  Social Media Carousel with Scroll-Driven Animations</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Koddaki başlık olan `h2`'den `mix-blend-mode: difference;`  özelliğini kaldırarak sorunlu halini görebilirsiniz.

## Mobilde liste üstü buton
Bir diğer soruna uzun bir ürün listenin olduğu alanın üstüne buton koyduğumuzda yaşadığımız benzer sorun. Buton rengine yakın renkteki listeki resimlerin üzerine geldiğimizde butonun görünürlüğü azalıyordu.

Şöyle bir örnek gördüm codepen.io'da [jhey](https://twitter.com/jh3yy)'in yaptığı çözüm ile bu sorunu da halledebiliyormuşuz. `mix-blend-mode: difference;`  uygulaması ile çözülmüş.

﻿﻿<iframe height="300" style="width: 100%;" scrolling="no" title="mix-blend-mode fixed button 🤙" src="https://codepen.io/jh3y/embed/gOqGgGz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jh3y/pen/gOqGgGz">
  mix-blend-mode fixed button 🤙</a> by Jhey (<a href="https://codepen.io/jh3y">@jh3y</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Bastıkça dolan buton

Diğer sorun yaşadığım konu bir butonun mobilde tıklma ile değil de basıldığı sürece içinin dolduğu bir animasyon uyguladığımızda metin rengiyle ilgili yaşadığımız sorun.

<iframe height="300" style="width: 100%;" scrolling="no" title="UI Button #3 w/ Mix-Blend-Mode" src="https://codepen.io/dan10gc/embed/EQbjgP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dan10gc/pen/EQbjgP">
  UI Button #3 w/ Mix-Blend-Mode</a> by Daniel Gonzalez (<a href="https://codepen.io/dan10gc">@dan10gc</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Benzer bir örnek buldum codepen.io'da. Çözüm yine `mix-blend-mode: difference;` ile yapılmış.

## Sitemdeki resimli başlıkların resim ile olan uyumu

Sitemdeki yazıların başlıkları altına resim olan bir tema kullanıyorum, burada her zaman resim ve üzerindeki yazıyı düşünerek bir şeyler üretmem gerekiyor. `mix-blend-mode: difference;` uygulayarak birçok başlık ve resmindeki sorunu çözmüş oluyorum. 

![mix-blend-mode](https://fatihhayrioglu.com/images/mix-blen--title.webp)
Genel itibariyle sorunumu çözdü. Sadece bazı yazı içeren karmaşık arka plan resimlerinin olduğu başlıklar güzel sonuç vermedi. Bundan sonra yazılarıma arka plan resmi hazırlarken yazı olmamasına dikkat etmem yeterli olacak.

Tarayıcı desteği konusunda gayet iyi. Türkiye için %96.

Kalın sağlıcakla.

## Kaynaklar

 - [https://www.marioaraque.com/mix-blend-mode-change-color](https://www.marioaraque.com/mix-blend-mode-change-color)
 - [https://dev.to/kaos/dynamic-text-effects-with-css-mix-blend-mode-242a](https://dev.to/kaos/dynamic-text-effects-with-css-mix-blend-mode-242a)
 - [https://css-tricks.com/methods-contrasting-text-backgrounds/](https://css-tricks.com/methods-contrasting-text-backgrounds/)
 - [https://codepen.io/deepak_kharah/pen/wvNeqpo](https://codepen.io/deepak_kharah/pen/wvNeqpo)
 - [https://codepen.io/dan10gc/pen/EQbjgP](https://codepen.io/dan10gc/pen/EQbjgP)
 - [https://codepen.io/jalinb/pen/ExOgOBZ](https://codepen.io/jalinb/pen/ExOgOBZ) Dİnamik bg güzel bir örnek