---
layout: post
title: SASS'ın sonu geldi mi?
description: SASS'ın sonu geldi mi? SASS yazmayı bırakmalı mıyız?
lang: tr_TR
Date: 2023-08-21 09:30
Category: CSS
tags: [iç-içe-yazım, nesting, sass]
image:
  feature: sass-a-veda.png
---

Bir önceki yazımdan [CSS iç içe (nesting) yazım](https://fatihhayrioglu.com/css-ic-ice-nesting-yazim/ "CSS iç içe (nesting) yazım") sonra ilk akla gelen sorulardan bir tanesi acaba SASS ile yolları ayırma vakti geldi mi? 

 > Yazı genelinde SASS olarak belirteceğim ancak benzer şeyler diğer CSS önişlemcileri (LESS, Stylus, PostCSS) için de geçerli. PostCSS belki bunlardan ayrı tutulabilir. PostCSS modüler olarak sadece istediğiniz özelliği kullanma imkanı sağlıyor.

CSS önişlemcilerinin bizlere sağladığı avantajları sıralarsak

 - **~~Değişkenler~~**: Değişkenlerden daha yetenekli Custom Properties CSS'e geldi. [CSS Değişkenleri (Custom Properties)](https://fatihhayrioglu.com/css-degiskenleri-custom-properties/ "CSS Değişkenleri (Custom Properties)")
 - **~~İç içe yazım avantajı~~**: Bir iki ufak dezavantajı olsa da avantajları ile CSS'e iç içe yazım geldi. [CSS iç içe (nesting) yazım](https://fatihhayrioglu.com/css-ic-ice-nesting-yazim/ "CSS iç içe (nesting) yazım")
 - **Mixins ve placeholder**: Yeterli olmasa da aşağıda bahsettiğim bir alternatif çözüm var.
 - **~~Renk çözümleri~~**: Yeni renk tanımı ve fonksiyonlarıyla bu özellikler CSS'e de geldi/geliyor. `color-mix()`, `lch()`
 - **~~Matematiksel işlemler:~~** Tümü olmasa da büyük çoğunluğu CSS'e de geldi. calc(), clamp(), min(), max(), vd.
 - **Döngüler, koşul kullanımı ve `map.get`**: Şuanlık eksik.


Mixin için alternatif çözüm [Chris Coyier](https://twitter.com/chriscoyier) attığı örnek ile ufkumuzu açtı.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The CSS feature `@​container style()` is pretty neat! <br><br>Are you familiar with `@​mixin` in Sass? It&#39;s a little bit like that. <br><br>1) Declare a chunk of CSS you want to re-use<br>2) Set a --custom-property to trigger it <a href="https://t.co/555iliifdt">pic.twitter.com/555iliifdt</a></p>&mdash; Chris Coyier (@chriscoyier) <a href="https://twitter.com/chriscoyier/status/1686829896512016384?ref_src=twsrc%5Etfw">August 2, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## SASS ile aradaki farklar

SASS ile alıştığımız kullanımdan farklılıklar. Aradaki farkları bilirsek geçişlerde nasıl bir yol izlememiz gerektiğine daha doğru karar veririz.

#### 1. HTML elementleri `&` ile kullanmak

HTML elementlerini iç içe kullanırken `&`kullanmak gerekiyor. Firefox'un da öncü olduğu yeni standartlar ile bu fark ortadan kalkacak.

#### 2. BEM desteği

BEM gibi yapılarda kullanmaya alışık olduğumuz `&__` gibi yapıları birleştirme desteği yok.

#### 3. Etkinlik (Specifity) sorunu

CSS iç içe yazımının SASS'a göre bir başka farkı, iç içe kullanılan seçiçileri :is() ile sarması. Sass ise bu seçicileri kopyalayıp yapıştırılmış gibi ayrı ayrı kullanır. 

#### 4. Çoklu satır yorum 

Önceki makaleyi yazdıktan sonra bir tane daha fark buldum SASS ile çoklu satır yorum yazılabilirken CSS'de tek satır yorum yazıla biliyor.

#### 5. import

CSS'de import var ancak asenkron çalışmadığı için çok tercih edilmiyor. Ancak biz bu dosyaları genelde webpack, vite gibi araçlarla kullandığımız için çok aramıyoruz ancak böyle bir araç ile kullanmayanlar için sorun olabilir orada da [ESBuild](https://esbuild.github.io/) ile [bir çözüm olduğundan](https://gomakethings.com/is-it-time-to-drop-sass/#a-leaner-compiler-and-extending-native-features) bahsediliyor. 

## Sonuç

Genel hatlarıyla CSS önişlemcilerin (SASS, LESS, Stylus, PostCSS) sağladığı bir çok avantaj CSS'de bulunuyor artık. Ben yazdığım SASS kodlarını inceledim büyük çoğunluğunda değişken, iç içe tanım, matematiksel işlemler yer alıyor. mixin, `for`, `if else` ve `map-get` gibi kullanımlara çok nadiren başvuruyoruz. 

Tabi burada mevcut projelerimizde SASS'dan CSS'e geçmenin bir maliyeti olacağını unutmayalım. Yukarıda yazdığım SASS ile farklar kısmındaki değişiklikleri tek tek düzenlemek gibi bir iş çıkacaktır.

Daha önce [jQuery'nin sonu mu geldi?](https://fatihhayrioglu.com/jquery-nin-sonu-mu-geldi/ "jQuery'nin sonu mu geldi?") yazısında da bahsettiğim gibi teknolojilerin / araçların savunucusu olmayın bu araçlar sizin işlerinizi kolaylaştırmak için var. İşinizi gördüğü müddetçe kullanın, ihtiyaç kalmadığında ise bırakmasını da bilin.

SASS'ın bırakılması için erken bence iç içe kullanımın tüm tarayıcılarda tam desteği 4-5 ay alacaktır. O zaman değerlendirilebilir. 

## Kaynaklar

 - [https://dev.to/robole/do-not-drop-sass-for-css-1ofm](https://dev.to/robole/do-not-drop-sass-for-css-1ofm)
 - [https://gomakethings.com/is-it-time-to-drop-sass/](https://gomakethings.com/is-it-time-to-drop-sass/)
 - [https://blog.snehasishnayak.com/difference-between-css-and-scss-a-guide-for-web-developers/](https://blog.snehasishnayak.com/difference-between-css-and-scss-a-guide-for-web-developers/)
 - [https://dbushell.com/2023/05/15/css-upgrades-spring-2023-edition/](https://dbushell.com/2023/05/15/css-upgrades-spring-2023-edition/)
 - [https://www.roboleary.net/frontend/2023/06/02/do-not-drop-sass-for-css.html](https://www.roboleary.net/frontend/2023/06/02/do-not-drop-sass-for-css.html)
