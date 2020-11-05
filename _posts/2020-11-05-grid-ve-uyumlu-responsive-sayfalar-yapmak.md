---
layout: post
title: Grid ile Uyumlu(Resposive) Sayfalar Yapmak
description: Grid ile Uyumlu(Resposive) Sayfalar Yapmak
lang: tr_TR
Date: 2020-11-05 12:00
Category: HTML
tags: [grid, resposive, uyumlu-web]
image:
  feature: firefox-grid-tool.png
---

 1. [CSS Grid'e (Izgara) Giriş](/css-grid-giris/)
 2. [CSS Grid Özellikleri](/css-grid-ozellikleri/)
 3. [fr birimi](/fr-birimi/)
 4. [CSS Izgara çizgi isimlendirmesi ve kullanımı](/css-izgara-cizgi-isimlendirmesi-ve-kullanimi/)
 5. [Sayfa planlama sihirbazı grid-template-areas](/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas")
 6. [Explicit(belirlenmiş) ve implicit(belirlenmemiş) grid ögeleri](/explicit-belirlenmis-ve-implicit-belirlenmemis-grid-ogeleri/)
 7. [CSS minmax işlevsel değeri](/css-minmax-islevsel-degeri/)
 8. [repeat() işlevi, auto-fill ve auto-fit değerleri](/repeat-islevi-auto-fill-ve-auto-fit-degerleri/)
 9. [CSS Grid öge özellikleri](/css-grid-oge-ozellikleri/)
 10. [Grid hizalama ve sıralama işlemleri](/grid-hizalama-ve-siralama-islemleri/)
 11. [CSS Grid kısayolları - grid-template ve grid](/css-grid-kisayollari-grid-template-ve-grid/)
 12. [CSS grid ile ögeleri üst üste bindirme](/css-grid-ile-ogeleri-ust-uste-bindirme/)
 13. [Grid geliştirme araçları](/grid-gelistirme-araclari/)

Grid yazılarımızın 14. sünde sizlere CSS Grid ile uyumlu web(responsive) hakkında bir şeyler paylaşacağız. CSS grid modülü çıkana kadar sayfa planlama biz geliştiricilere modül, özellik grubu veya tanım olarak bir çözüm sunmamıştı. Geliştiriciler mevcut şartları sağlayacak özellikleri sayfa planlaması için kullandı.

İlk olarak `<table>` etiketiyle ve `position` tanımlarıyla HTML yoğunluklu çözmeye çalıştık. Daha sonra `<div>` etiketi ve float, width tanımlarıyla CSS yoğun çözümlerle çözmeye çalıştık. Daha sonra flex ile çözmeye çalıştık ancak bunların hiçbiri W3C'nin sayfa planlama için çıkardığı özellikler değildi. Belli bir amaca hizmet ediyordu ve geliştiriciler tarafından sayfa planlama için kullanıldı. 

İlk defa sayfa planlama için bir modül olarak grid modülünü biz geliştiricilere sundu.  Tüm ihtiyaçları gidermesi zor olsa da birçok gerekliliği karşılıyor. Yeni eklenen `subgrid` özelliği de sayfa planlamadaki ihtiyaçları karşılamaya yönelik. Ayrıca daha yeni eklenen grid `masonry`  özelliği standart koyucuların ihtiyaçlara göre çözüm üretme eğiliminde olduğunu gösteriyor.

CSS Grid modülü ve özellikleri uyumlu sayfalar üretmek için yeni avantajlar sunuyor. Bu yazımızda bu avatajlardan bahsetmeye çalışacağım.

## İki eksen avatanjı

Daha önceleri tek eksenli sayfa kodlamaları yaptığımız için uyumlu web sayfalarındaki bazı yer değiştirmeleri zor oluyordu, bazı tasarımları gerçekleştirme imkanı olmadığı için bazı kod bloklarının iki kopyasını oluşturduğumuz oluyordu. Bu durum grid'in iki eksenli yapısıyla tarihe karıştı.

Zingat'ta ilan detay sayfasında breadcrumb'ın yeri sorun olmuştu. Mobilde resmin altında olan breadcrumb desktopta tüm içerik ve sağ kolonun üzerinde konumlandırılmak istenmişti. Tek eksenli bir düşünce ile bu işi halletmek çok zor bir iş olduğu için biz içeriği iki kere sayfaya ekleyip mobilde birini desktop'ta diğerini göstererek geçmiştik. Şimdi iki eksenli bir grid ile bu işi nasıl yaparım diye düşününce nispeten basit ve tek içerik ile bu durumu çözebiliyoruz. 

<iframe height="406" style="width: 100%;" scrolling="no" title="LYpexOm" src="https://codepen.io/fatihhayri/embed/LYpexOm?height=406&theme-id=13521&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Nasıl? İyi değil mi?

## Tekrar eden alanlarda medya sorgusu olmadan uyumlu hale getirmek

Bir diğer konu, tekrar eden alanlar için kullandığımız repeat işlevi ve bu işlevin dinamik olarak uyumlu alanlar oluşturması. Bu süper bir olay. Tekrarlanan alanlarda uyumluluk konusunda bir kod yazmamıza gerek yok. 

[repeat() işlevi, auto-fill ve auto-fit değerleri](https://fatihhayrioglu.com/repeat-islevi-auto-fill-ve-auto-fit-degerleri/ "repeat() işlevi, auto-fill ve auto-fit değerleri") yazımızdaki örnek

<iframe  height="300"  style="width: 100%;"  scrolling="no"  title="CSS grid repeat, auto-fill ve auto-fit"  src="https://codepen.io/fatihhayri/embed/vYEYgBj?height=300&theme-id=13521&default-tab=html,result"  frameborder="no"  allowtransparency="true"  allowfullscreen="true">

</iframe>

  

![auto-fill auto-fit karşılaştırma](https://fatihhayrioglu.com/images/repeat-auto-fill-auto-fit.gif)
Ayrıca Juan Martín García'nın [Trello-Style Card Layout](https://codepen.io/imjuangarcia/pen/MLyQPO "Trello-Style Card Layout") örneği de incelmeye değer.

Uyumlu web sayfaları oluştururken bize zaman kaybettiren konulardan bir tanesi çok fazla medya sorgusuyla kodumuzun okuma ve yönetiminin zorlaşmasıydı. Grid bu konuda işimizi kolaylaştırıyor.

## Grid isimlendirmeyle anlamlı alanlar

Grid kodlarken alanları temelde iki şekilde kodluyoruz. Birinci grid çizgi numaraları, ikincisi grid alanlarını isimleriyle. `grid-template-areas` tanımı ile isimlendirilen bu alanların nasıl yerleşeceğini görmüştük. Bu flex'teki order'ın çok ötesinde bir kullanım. Çok büyük kolaylık.

[Sayfa planlama sihirbazı grid-template-areas](https://fatihhayrioglu.com/sayfa-planlama-sihirbazi-grid-template-areas/ "Sayfa planlama sihirbazı grid-template-areas") yazımızdaki örnekte görüldüğü gibi isimlerle sayfa planı yapabiliyoruz.

<iframe  height="364"  style="width: 100%;"  scrolling="no"  title="grid-template-areas - 1"  src="//codepen.io/fatihhayri/embed/gyzypB/?height=364&theme-id=13521&default-tab=css,result"  frameborder="no"  allowtransparency="true"  allowfullscreen="true">

</iframe>

> codepen örneklerinde masaüstü görünümünü görmek için zoom değerini 0.25x seçiniz.

## fr birimiyle esnek alanlar oluşturmak

CSS Grid ile gelen ve sadece grid tanımlarında kullanılan `fr` birimi bize esnek alanlarımızı oluşturmamızda yardım eder. Yüzde değerleri gibi bulunduğu kapsayıcıya göre değişkenlik gösteren fr tanımlı elemanlar. Bize yüzde değerlerinden daha avantajlı imkanlar sağlar.

[fr birimi](https://fatihhayrioglu.com/fr-birimi/ "fr birimi") yazımıza ve örneklerine bakmanızı tavsiye ederiz.

Başta belirttiğim gibi tüm sayfa planlarını karşılıyor demek çok iddialı bir laf olur ama karşılacağımız sayfa planlarının çoğuna çözüm üreten bir yapısı var grid'in.

Kalın sağlıcakla.

## Kaynaklar

 - https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
 - [https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df](https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df)
 - https://www.creativebloq.com/how-to/create-a-responsive-layout-with-css-grid
 - https://thoughtbot.com/blog/concise-media-queries-with-css-grid
 - [https://medium.freecodecamp.org/how-to-make-your-html-responsive-by-adding-a-single-line-of-css-2a62de81e431](https://medium.freecodecamp.org/how-to-make-your-html-responsive-by-adding-a-single-line-of-css-2a62de81e431)
 - https://gedd.ski/post/grid-for-responsive-layout/(https://gedd.ski/post/grid-for-responsive-layout/)
