---
layout: post
title: initial, inherit, unset ve revert değerleri
description: Tüm özellliklere atanan 4 değer initial, inherit, unset ve revert değerleri
lang: tr_TR
Date: 2019-11-18 10:10
Category: CSS
tags: [all, unset, reset, sıfırlama, initial, inherit, revert]
image:
  feature: css-dersleri.png
---

CSS'te tüm özelliklere atanan 4 değer vardır. `initial`, `inherit`, `unset` ve `revert`. Burada bu değerlere değineceğiz. `unset `'ten [bir önceki yazımda](https://fatihhayrioglu.com/css-ipucu-34-all-unset-ile-tek-satirda-sifirlama-yapmak/) bahsettik. Yaptıkları iş aynı olsa da uygulandıklarında farklı davranış sergilerler. Yaptıkları iş atamaları geri almak. Amiyane tabirle geri vites.

Bu makaledeki değerleri anlamak için CSS'te değerlerin nasıl uygulandığını hatırlamak gerekiyor. Burada genel anlamıyla bir değerin nasıl uygulandığını anlatalım. 

> Bu konuyu [1. kitabımdaki](https://fatihhayrioglu.com/kitap/) 4.bölümünde bahsetmiştim. Belki ileride başka bir yazıda daha detaylı bir makale yazabiliriz bu konuda.

## Basamaklı (cascade) yapı

CSS değerleri atandığında eğer bu tanım ve değer tek ise direk uygulanır ancak CSS tanımlarının çakışması durumunda çözümü sağlayan Basamaklı yapıdır (Cascade). 

Örneğin `font-size` tanımı birden fazla css dosyasında veya bir dosya içinde birden fazla tanımlanmış olabilir.

CSS'e bu tanımlar 3 ana kaynaktan gelir.

 1. Geliştiricinin eklediği değerler. Kodu yazan
    geliştirici.
    
 2. Kullanıcının tarayıcı ayarlarında tanımladığı değerler. Tarayıcıyı kullanan son kullanıcı.
    
 3. Tarayıcının kabul ettiği bağlangıç değeri. Tarayıcı kabulleri

Basamaklı yapı bu üç kaynağı birleştirir. Aynı tanımların atandığı durumlar için önem, [etkinlik](https://fatihhayrioglu.com/cssde-tanimlamalar-ve-etkinliklerispecificity/) ve sıralama ölçüsünü dikkate alarak sonuç değerini bulur ve uygular.

Son kullanıcının tarayıcı ayarlar kısmından yaptığı atamalar (2. nolu seçenek) genelde göz ardı edilir.

Aşağıda tanımlayacağımız değerler bu 2 kaynaktan gelen atamaları geri alamaya yöneliktir.

## initial (başlangıç) değeri

`initial` değeri tarayıcıların atadığı başlangıç değerini ifade eder. Atandığı elemanın özelliğinin değerini tarayıcının belirlediği değere döndürür.

Tarayıcılar HTML elemanlarını yorumlarken belirli başlangıç değerleri kabul ederek yorumlarlar. User Agent Stilleri olarak adlandırılan bu özelliklere sonradan tanımlanan CSS özellikleri ezer. Her tarayıcının kendine özel UA Stillleri vardır. CSS3 ile gelen `initial` değeri ile başlangıç değerine döndürme imkanımız oluyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%;overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/wAJel?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Örnekte görüldüğü gibi kapsayıcı **div** elemanına atanan kırmızı rengi ilk paragraf için `initial` değeri ile tarayıcının ilk kabul değerine(siyah) döndürülmüştür.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}


## inherit (kalıtsal) değeri

`inherit` değeri ebveyn elemanların alttaki elemanlara aktardığı değeri gösterir. Ebeveyn elemanda bir tanım yoksa `revert` gibi davranır. Atandığı elemanın özelliğinin değerini varsa ebeveyninde bulunan değere döndürür.

<iframe height='300' scrolling='no' title='inheritance' src='//codepen.io/fatihhayri/embed/EQEKdq/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/EQEKdq/'>inheritance</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Kalıtsallığı kullanarak kodlarımızı azaltabiliriz. Ancak kalıtsallık nedeni ile de birçok sorunla karşılaştığımızı da unutmayalım.

{% include browser-usage.html ch="+" ie="+" ff="+" mch="+" sa="+" si="+" %}

## unset (sıfırlama)

Bir önceki makalede yazdığımız gibi `unset` değeri atanan bir özellik eğer kalıtsal bir değer alıyorsa kalıtsal değerine döndürür, kalıtsal değeri yoksa başlangıç değerine döndüren bir kısayoldur.

<iframe height="300" style="width: 100%;" scrolling="no" title="all: unset test" src="https://codepen.io/fatihhayri/embed/oNNqMvX?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fatihhayri/pen/oNNqMvX'>all: unset test</a> by Fatih 
  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

## revert (geri alma)

Bir elemana `revert` değeri atandığında geliştiricinin atadığı değerleri geri alır.

`unset` ile `revert` değerlerinin farkı: `unset` hem browser'ın hem de geliştiricinin atadığı değeri sıfırlarken, `revert` ise sadece geliştiricinin atamalarını sıfırlar.

**not** `revert` ve `unset` önceki atamaları siler ancak kalıtsallık aktiftir.  Kalıtsallığı da etkisiz hale getirmek istiyorsanız. Bir elemana geliştiricinin atama yapmadığından eminseniz, ebebeynine `initial` ataması yapıp, eleman da `revert` tanımıyla bunu sağlayabilirsiniz.

Tarayıcı desteği konusunda `initial`, `inherit` ve `unset` iyiyken `revert` blink grubunun desteği olmadığı için düşük kalmış. 

{% include browser-usage.html ch="-" ie="-" ff="+" mch="-" sa="+" si="-" %}

[Šime Vidas](https://twitter.com/simevidas)'ın yazısında ki çağrısını ben de burada tekrarlıyayım. Google bug sayfasındaki [yıldıza bir tıklama](https://bugs.chromium.org/p/chromium/issues/detail?id=579788) da siz ekleyin.

Kalın sağlıcakla.

## Kaynaklar

- [https://css-tricks.com/getting-acquainted-with-initial/](https://css-tricks.com/getting-acquainted-with-initial/)
- [https://tympanus.net/codrops/css_reference/unset/](https://tympanus.net/codrops/css_reference/unset/)
- [https://tympanus.net/codrops/css_reference/inherit/](https://tympanus.net/codrops/css_reference/inherit/)
- alligator.io/css/inherit-initial-unset/
- [https://medium.com/better-programming/css-explicit-defaulting-initial-inherit-unset-and-revert-9110647cdaa1](https://medium.com/better-programming/css-explicit-defaulting-initial-inherit-unset-and-revert-9110647cdaa1)
- [https://bitsofco.de/initial-inherit-unset-and-revert/](https://bitsofco.de/initial-inherit-unset-and-revert/)
- [https://medium.com/@paulryan17/understanding-the-css-values-inherit-initial-and-unset-c5d890743536](https://medium.com/@paulryan17/understanding-the-css-values-inherit-initial-and-unset-c5d890743536)
- https://tympanus.net/codrops/css_reference/revert/
- [https://developer.mozilla.org/en-US/docs/Web/CSS/revert](https://developer.mozilla.org/en-US/docs/Web/CSS/revert)
- [https://webplatform.news/issues/2019-09-06](https://webplatform.news/issues/2019-09-06)
- [How to REVERT CSS — get back to default browser style](https://www.youtube.com/watch?v=GAjoVRmipcU)
- https://twitter.com/simevidas/status/1132673880030683136?s=20
- [https://fatihhayrioglu.com/css3-yeni-degerleri/](https://fatihhayrioglu.com/css3-yeni-degerleri/)
- [https://fatihhayrioglu.com/cssde-kalitsallikinheritance/](https://fatihhayrioglu.com/cssde-kalitsallikinheritance/)
- [https://fatihhayrioglu.com/css-ipucu-34-all-unset-ile-tek-satirda-sifirlama-yapmak/](https://fatihhayrioglu.com/css-ipucu-34-all-unset-ile-tek-satirda-sifirlama-yapmak/)