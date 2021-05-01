---
layout: post
title: CSS'de Tekil(Id) Seçicileri Kullanmalı mıyız?
Date: 2014-08-25 14:17
categories: [CSS]
tags: [css tekil-seçici sınıf-seçicisi]
---

Tartışmayı [@muratcorlu][1] açtı. :D Daha doğrusu bir makale üzerinden bu konuyu tartışmaya başladık. Sonra twitter’da paylaştım konuyu, [@ademilter][2] konuyu tartışmak için bir platform açalım orada tartışalım önerisinde bulundu. 

Biraz düşündükten sonra [google dokümanların][3] bu konuda biçilmiş kaftan olduğunu düşündüm. Sonra konu atıl kaldı ta ki şimdiye kadar. Bu gün bu konuyu görünce bunu bir yazıya dökmeliyim dedim ve karşınızda yazı.

Aşağıda toparladığım kaynakların çoğu id’ye karşı ben Murat Çorlu ile tartışmaya başladığımda tekil seçicilere tamamen karşı değildim. Ancak Steve Souders’ın CSS Test sayfasındaki tekil seçicileri ile sınıf seçicileri arasındaki ufak farkı görünce fikrim değişti. Tabi bu testleri yeni nesil tarayıcılar yaptığımızda arada az fark görünürken ie8 gibi tarayıcılarda aradaki büyük fark ortaya çıkmasıda ayrı bir konu. 

Aşağıda ben burada tartışılan konuları başlıklar altında toplayıp özetini sizlere sunacağım. 

## Performans

Tekil(Id) seçicilerin en büyük avantajı tarayıcılarda daha hızlı tepki verdiği idi. Bu kabulü çürüten iki karşı açıklamayı görünce pek de avantajı kalmadığı anlaşılıyor.

İlki; tarayıcıların seçicileri sağdan sola doğru okuduğu ve bundan dolayı tek kullanımlarda avantajlı olduğu.

```css
#menu {
...
}
```

tanımı hızlı iken 

```css
#menu li {
....
}
```
    
Tanımını tarayıcılar sağdan sola doğru okuduğunda ilk **li** etiketini sonra **#menu** seçicisini okuyor. Bu durumda tekil seçicinin avantajı kalmıyor.

Ayrıca yeni nesil tarayıcılar bu konuda kendilerini geliştirdi. Artık **sınıf** ve **tekil** seçimleri konusunda birbirine yakın tepkiler veriyorlar. Steve Souders’ın testleri bu konuda bayağı açıklayıcı. 

## Kullanımı

Tekil seçiciler sayfada bir kereden fazla kullanılmıyor o elemana özel kalıyor. Bir eleman bir kere kullanılsa dahi sınıf seçicisi olarak tanımlamanın tekil olarak tanımlamadan farkı yok. Her nekadar başta tekil kullanma ihtiyacı olsa da sonradan başka bir eleman için kullanmak istediğimizde tekil seçici tanımı sorun çıkarırken sınıf tanımı bu bakımdan da bir avantaj sağlıyor. 

Bir çok projede karşılaştığımız bir sorun olarak proje başında tekil gibi görünene bir eleman sonradan çoklu kullanımı istenebiliyor. Sınıf kullanımı esnek bir kullanım olduğu için tekil seçicilere göre avantajlıdır. 

Bir projeyi kodlamaya başlamdan önce olabildiğince ortak sınıflarla kodlamaya çalışmak bize avantaj sağlar. 

[CSS'in Yapısı][6] yazısından en çok geri dönüş tekil ve sınıf seçicilerinin hangisinin kullanılması gerektiği konusunda olmuştu. İlk kodlamaya başlayanlar için karar vermek bazen sorun oluyor. Sadece sınıf seçicisinin kullanıldığı ortamda bu sorunda otomatik olarak ortadan kalkıyor.

## Etkinlik 

Tekil seçiciler CSS etkinliğini karıştıran bir özelliğe sahip. Etkinlik hesaplarını karıştırıyor. Tekil seçiciler ve sınıf seçicilerinin karışık olarak kullanıldığı seçici bloklarında etkinlik değerini hesaplamak ve yönetmek her projede benim için sıkıntı oluyordu. Sadece sınıf seçicilerinin kullanıldığı projelerde bu sorunu daha az yaşıyorum.

Aslında bu sorun ile hiç karşılaşmamak için projenin başında her şeyi planlamak gerekir. Ancak yukarıda da bahsettiğim gibi bizim projelerimiz başta farklı sonda farklı durumlar çıkardığı için bunu her zaman sağlamak mümkün olmuyor. 

## Sonuç

Sonuç olarak son 1-2 yıldır daha çok sınıf seçicilerini tercih ettiğim dünyada çokta tekil seçici ihtiyacı duymadım. Ayrıca yukarıda bahsettiğim sebeplerden dolayı bana sınıf seçicilerini kullanmak daha mantıklı geliyor.

Tabi isteyen tekil seçicileri kullanmaya devam eder, kimseye bu konuda zorlama yapmak mümükün değil. Sahibinden.com'da çalşıyorsanız zorlama var o başka :D

Buradaki amacım en iyi kod yazma düzenini bulmak. 

Bu konuyu ilk tartışmaya başladığımızda benim için kesin bir kabul(tekil seçiciler hızlıdır kabulü) iken bu gün geldiğim durumda tam tersi bir kullanımı savunuyorsam, kodlama yaparken her konu tartışmaya açık olmalı ve her zaman en iyiyi aramalıyız.

Kalın sağlıcakla.


## Kaynaklar

 - [http://csswizardry.com/2011/09/writing-efficient-css-selectors/][7]
 - [http://stackoverflow.com/questions/6376279/css-why-not-use-id-another-reason-than-tightly-coupled][9]
 - oli.jp/2011/ids/
 - [http://2002-2012.mattwilcox.net/archive/entry/id/1054/][11]
 - [http://twobanjos.com/blog/2011/06/why-well-stop-using-id-in-our-stylesheets/][12]
 - https://talentopoly.com/posts/1858-don_t_use_id_selectors_in_css
 - [http://screwlewse.com/2010/07/dont-use-id-selectors-in-css/][14]
 - [http://css-tricks.com/efficiently-rendering-css/][15] 
 - [http://www.vanseodesign.com/css/css-selector-performance/][16]
 - developer.mozilla.org/en-US/docs/CSS/Writing_Efficient_CSS?redirect=no
 - [https://developers.google.com/speed/docs/best-practices/rendering?hl=es-ES#UseEfficientCSSSelectors][18]
 - [http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html][19]
 - [http://screwlewse.com/2010/07/dont-use-id-selectors-in-css/][20]


  [1]: https://twitter.com/muratcorlu
  [2]: https://twitter.com/ademilter
  [3]: https://docs.google.com/document/d/1AsRKkOUiyyqG9CnXGyz7f9eQUMcAT3oh8ZeWtBZwQ_Y/edit?usp=sharing
  [5]: stevesouders.com/efws/css-selectors/csscreate
  [6]: https://fatihhayrioglu.com/cssin-yapisi/
  [7]: http://csswizardry.com/2011/09/writing-efficient-css-selectors/
  [8]: http://nimbleworks.co.uk/blog/css-id-selectors-never-say-never/
  [9]: http://stackoverflow.com/questions/6376279/css-why-not-use-id-another-reason-than-tightly-coupled
  [11]: http://2002-2012.mattwilcox.net/archive/entry/id/1054/
  [12]: http://twobanjos.com/blog/2011/06/why-well-stop-using-id-in-our-stylesheets/
  [14]: http://screwlewse.com/2010/07/dont-use-id-selectors-in-css/
  [15]: http://css-tricks.com/efficiently-rendering-css/
  [16]: http://www.vanseodesign.com/css/css-selector-performance/
  [18]: https://developers.google.com/speed/docs/best-practices/rendering?hl=es-ES#UseEfficientCSSSelectors
  [19]: http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html
  [20]: http://screwlewse.com/2010/07/dont-use-id-selectors-in-css/