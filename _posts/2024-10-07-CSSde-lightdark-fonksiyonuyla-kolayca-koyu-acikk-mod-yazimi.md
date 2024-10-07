---
layout: post
title: CSS'de lightdark() fonksiyonuyla kolayca koyu / açık mod yazımı
description: CSS'de lightdark() fonksiyonuyla kolayca koyu / açık mod yazımı
lang: tr_TR
Date: 2024-10-07 12:30
Category: CSS
tags: [lightdark, light, dark]
image:
  feature: light-dark-func.png
---

CSS'in yeni özellikleri bazen çığır açan nitelikte (anchor positioning, :has() seçicisi, vb.) olurken bazen yazıma yardımcı kurallar (iç içe yazım, @property) oluyor bazen de genel kullanılan kullanıcı deneyimi arttırıcı özellikleri oluyor. `field-size` özelliği genel kullanıcı deneyimini arttırıcı bir özellik. `field-size` özelliği genelde javascript ile çözdüğümüz bir ihtiyacı karşılıyor. Artık CSS ile kolayca bu ihtiyacımızı giderebiliyoruz. Genelde `textarea` alanlarına yazılan uzun içerikler için kullanıcıya sunulan dar alanları büyütmek için kullandığımız kullanıcı metin girdikçe uzayan `textarea` alanları için tanımlanmış bir özellik. 

Bu durum masaüstünde daha az sinir bozucuyken mobilde daha sinir bozucu bir durum oluşturuyor. 

Javascript ile yazılmış bir sürü script örneği ve makalesi mevcut bu durumu çözen ancak bir satır CSS kodu ile çözmenin hazzını hiçbiri vermiyor. :)

Ben yukarıda `textarea` için dediysem de uygulamada `input`, `textarea` ve `select` elemanlarına uygulanabiliyor. Örnekler yardımıyla daha iyi anlaşılacak.

<iframe height="300" style="width: 100%;" scrolling="no" title=" field-sizing: content;" src="https://codepen.io/fatihhayri/embed/abgpvgy?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/abgpvgy">
   field-sizing: content;</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki örnekte normal durumda `textarea` içinde içerik girdikçe veya enter'a bastıkça sağda kaydırma çubuğu çıkarken `field-size` tanımı yapılan `textarea`'da içerik girdikçe veya enter'a basıldıkça `textarea` otomatik olarak artmaktadır. 

`input` içinde bir örnek yapalım.

<iframe height="300" style="width: 100%;" scrolling="no" title="input -  field-sizing: content;" src="https://codepen.io/fatihhayri/embed/qBzRXgQ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/qBzRXgQ">
  input -  field-sizing: content;</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki örnekte normal `input`'ta içeriği uzattığımızda içerik sağa doğru kayarken `field-sizing: content;` uygulanan örnekte içerik girildikçe input genişliyor.

Bir diğer uygulanan elemanda `<select>`

<iframe height="300" style="width: 100%;" scrolling="no" title="input -  field-sizing: content;" src="https://codepen.io/fatihhayri/embed/oNrZGEK?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/oNrZGEK">
  input -  field-sizing: content;</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

`<select>` farklılıkları normalde içeriğe göre genişlik sabit olurken `field-sizing: content;` tanımlı select'te içeriği uzun olanda genişlik uzuyor kısa olanda kısa kalıyor.

Blink (Chrome, Edge, Opera, Arc)  tabanlı tarayıcılarda bu özelliğin desteği var. Firefox desteğinin [yakında geleceği haberi](https://x.com/intenttoship/status/1799438829260099996) geldi. Safari ekibinin de geliştirme aşmasında olduğunu [biliyoruz.](https://webkit.org/css-status/#property-field-sizing)

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing)
 - [https://polypane.app/blog/field-sizing-just-works/](https://polypane.app/blog/field-sizing-just-works/)
 - [https://caniuse.com/mdn-css_properties_field-sizing](https://caniuse.com/mdn-css_properties_field-sizing)
 - [https://blog.stephaniestimac.com/posts/2024/01/css-field-sizing/](https://blog.stephaniestimac.com/posts/2024/01/css-field-sizing/)
 - [https://x.com/wesbos/status/1790072655913050579](https://x.com/wesbos/status/1790072655913050579)
 - [https://x.com/jh3yy/status/1799460095585308690](https://x.com/jh3yy/status/1799460095585308690)
 - [https://x.com/JohnPhamous/status/1800963715631808949](https://x.com/JohnPhamous/status/1800963715631808949)