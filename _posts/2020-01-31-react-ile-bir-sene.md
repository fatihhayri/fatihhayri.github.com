---
layout: post
title: React ile 1 sene
description: React ile 1 sene geliştirme sonucundaki izlenimlerim
lang: tr_TR
Date: 2020-01-31 10:52
Category: Javascript
tags: [react, düşünceler]
image:
  feature: react.png
---

Yaklaşık olarak 1 senedir React ile geliştirme yapmaya çalışıyorum. Bu bir senelik süreçte yaşadıklarımı bu yazıda yazmaya çalışacağım.

React kullanıcı arayüzü (UI) geliştirmek için üretilmiş bir javascript kütüphanesidir. Nedir bu kullanıcı arayüzü? Aslında düşündüğümde Önyüz (front-end) dediğimiz alanın tamamıdır diyebiliriz. CSS, HTML ve Javascript.

İlk react'ı duyduğumda CSS ve HTML'in Javascript yani react içinde yazılıyor olması benim hoşuma gitmemişti. Hala CSS'in react içinde yazılmasına alışamadım. (SASS kullanıp import ederek de bu sorun aşılabiliyor), HTML'in react içinde yazılıyor olması aslında uzun süredir hayatımızda olan template kodlarıyla(swig, pug, handlebars, vb.) zaten hayatımızdaydı. Tabi react ile bu biraz daha abartılı kullanılıyor.

Şimdi genel başlıklar altında react hakkında görüşlerimi yazmaya çalışacağım.

## Topluluğunun Zengin olması

Bu çok önemli bir konu. Javascript kütüphanelerinin yeni ortaya çıktığı dönemlerde [mootols](https://mootools.net/) diye bir kütüphane vardı animasyon kısmı çok güzel diye bir kaç projede kullanmıştım, jquery'ye olan ilgi daha fazla olunca mootols silindi gitti. Yeterli sayıda geliştiriciyi arkasına alamayınca zamanla kayboldu canım kütüphane.

Benzer bir durum React'ta da var. React topluluğu ve geliştirici desteği çok fazla bundan dolayı aradığınız bir çok eklentiyi ve yardımı bulmak çok kolay. Bu bir anaçatı için çok önemli. Bu sayede ayakta kalıp gelişimini devam ettiriyor.

Aşağıda [Stackoverflow anketinde](https://insights.stackoverflow.com/survey/2019) geliştiricilerin sevdikleri kütüphaneler ve yüzdeleri yer alıyor.

![Stackoverflow react en sevilen](https://fatihhayrioglu.com/images/react-stackoverflow.png)

Burada facebook'un desteğini de unutmamak gerekiyor. Kendi kullanıp geliştirmesi çok büyük avantaj. Angular'ın bu konuda bir dezavantajı var. Google aktif bir şekilde tüm projelerinde angular'ı tercih etmemesi düşündürücü.

Aşağıdaki grafikte npm tends sitesinde 3 kütüphanenin grafiği görülüyor.

![npm trends react](https://fatihhayrioglu.com/images/react-npm-trends.png)

[https://www.npmtrends.com/react-vs-vue-vs-@angular/core](https://www.npmtrends.com/react-vs-vue-vs-@angular/core)

## Yazılım felsefesinin olması

Fonksiyonel programlama paradigmasını ve kurallarını ilk olarak react kullanmaya başlayınca öğrendim. Evet aslında kullandığımız kurallar ancak bir kabul ile uygulamadığımız için eksik kalıyordu. Yazdığımız javascript'in nesne tabanlı kod olduğunu sanıyorduk ancak javascript'in aslında tam bir nesne tabanlı dil olmadığını öğrendik. 

Bir programlama paradigmasına bağlı kalmak ve bu yolda ilerlemek ufuk açan kazanımlara neden oluyor. Eski alışkanlıklar mı dersiniz yoksa kolayımımazı geliyor dersiniz bilemiyorum ama bazen yine eskisi gibi kurallara uymadan yazdığımız yerlerde oluyor. Yeniden yazım(refactor) şart. :)

## Hızlı yenilenme

Facebook geliştiricileri ve topluluğun geniş olmadığı birçok konuda yaşanan sorunları hızlıca çözme ve yeniliklere adapte olma imkanı sağlıyor.

Javascript topluluğuyla olan yakın ilişkisiyle bir çok yeni javascript özelliği react ile kullanılıyor. Kütüphane sizi buna yönlendiriyor. Diğer kütüphanelerde bu tamamen sizin insiyatifinizde. İsterseniz kullanıyorsunuz istemezseniz eski standartla devam edebiliyorsunuz.

Mesela ES6 yeni özellikleri ilk aşamasından itibaren react içinde kullanılıyor olması çok büyük avantaj. Bu nedenle birçok react kaynağında ilk dersleri ES6 üzerine oluyor.

Yaşam döngüsü metotları(React Lifecycle Methods) çok karışık bir yapıydı Hook ile bu soruna çözüm getirdiler. Artık basitçe buradaki ihtiyaçlarımızı giderebiliyoruz.

## Öğrenme zamanı

jQuery ve Vuejs'e göre öğrenilmesi daha çok zaman alan bir kütüphane olduğunu kabul etmek lazım. Angular'a kıyasla daha az diye bilirim. Tabi burada ilk öğrendiğim SPA(Single Page Application / Tek sayfalık siteler) Angular olmasının etkisi olabilir.

Birçok kaynaktan yararlanılabiliyor olmak ve react blog sitesinin güzel içerik sunuyor olması avantaj. Yakın zamanda React blog sitesine Türkçe dil desteği de geldi.

Bu süreçte görsel ve yazılı birçok kaynaktan faydalandım ve faydalanıyorum, bunlardan aklımda kalan önemli iki tanesi:

 - İlki [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/share/101WbyAEoZclpWTXQ=/) kursu.
 - İkincisi O'Reilly'den çıkan [Learning React](http://shop.oreilly.com/product/0636920049579.do) kitabı. Kitap hakkındaki ufak bir değerlendirmem [şurada](/kitap-incelemesi-learn-react/).

## İş imkanı

Son 2-3 senedir ciddi bir React geliştirici arayışı var. Yurtiçi ve yurtdışında bu konuda birçok şirket react ve react native geliştirici arayışında. 

Aşağıdaki kaynakta Angularjs ve Reactjs iş imkanlarının artarak devam ettiğini gösteriyor. Benim piyasada gördüğüm Reactjs'in daha fazla iş arayışı olduğu. 

![İş olanakları](https://fatihhayrioglu.com/images/react-is-imkanlari.png)

https://www.hiringlab.org/2019/12/12/big-picture-tech-skill-trends/

## Esneklik

Angular gibi tüm ihtiyaçlarını beraberinde getiren bir kütüphane değil React. Bu bazı durumlarda dezavantaj bazı durumlarda avantaj olabilir. Şöyle açıklamaya çalışayım. Eğer topluluğunuz yeteri kadar büyük değilse tümleşik yapılar daha avatajlı ancak topluluğunuz genişse ve yeterli desteği veriyorsa ihtiyaçlar konusındaki çeşitlilik, esneklik tabiki avantaj. Bu konuda React avantajlı konumda. 

## Sonuç

Genel anlamda react önyüz geliştiricilerinin tüm ihtiyaçlarını karşılıyor. Yazımda bahsetmediğim react native kısmı da ayrı bir avantaj. Ben henüz react native ile bir geliştirme yapmadığım için bu konuya girmedim. 

Hiç mi sorunu yok derseniz elbette bazı sorunları var.
 - CSS'in Javascript içinde yazılması. SASS ile çözüm var ancak birçok yerde ve örnekte javascript içinde CSS tercih ediliyor olması sorun bence.
 - State yönetmek için Redux yapısı güzel ancak çok fazla dosyada (constants, actions, saga, reducer, selector) işlem yapıyor olmak sorun. 
 - Bileşenler ve alt bileşenlere prop'lar ile veri göndermek sorun. Bunun için Context API var çözüm olarak ancak onun içinde [bazı çekinceler](https://twitter.com/sebmarkbage/status/1219836431972978689?s=20) var diyorlar.

React hakkında zamanım oldukça ve daha çok kavradıkça birşeyler yazmayı düşünüyorum. 

Kalın sağlıcakla.