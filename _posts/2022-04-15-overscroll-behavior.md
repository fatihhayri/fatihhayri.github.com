---
layout: post
title: CSS overscroll-behavior
description: CSS overscroll-behavior özelliğinin incelemesi
lang: tr_TR
Date: 2022-04-07 09:00
Category: CSS
tags: [CSS, overscroll-behavior]
image:
  feature: overscroll-behavior.png
---

Bu sene Safari'nin arayı kapatmak için yaptığı atılımı yazmakla geçecek herhalde. Daha önce diğer popüler tarayıcılarda var olan ancak Safari'nin geri kalması nedeniyle uygulamalarda tercih etmediğimiz özellikleri artık Safari'nin desteğiyle hayata geçirmeye başlayabiliriz.

Bu özelliklerden birisi `overscroll-behavior` özelliğidir. Artık Safari desteği geldiğine göre rahat rahat kullanabiliriz.

`overscroll-behavior` özelliği bir scroll alanının sınırına ulaştıktan sonra nasıl hareket etmesi gerektiğini belirlediğimiz CSS özelliğidir. Scroll bitti üst elemanın scrollundan devam et veya scroll bitti üst elemanın scrolluna dokunma.

Örneklerden anlamak daha kolay.

 <iframe height="300" style="width: 100%;" scrolling="no" title="overscroll-behavior" src="https://codepen.io/fatihhayri/embed/mdpzvmM?default-tab=css%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Soldaki örnek normal davranışı gösterir. Soldaki örneği scroll yapıp içeriğin sonuna geldikten sonra hala scroll yapmaya devam edersek üst eleman (body) scrollundan devam eder. Sağdaki örnekte ise, içeriğin sonuna geldiğimizde faremiz içeriğin üzerinde olduğu müddetçe üst elemanın scrolluna dokunmayacaktır.

Bu özelliği ilk duyduğumda çok sevinmiştim. Tam da ihtiyacım olan bir zamanda görmüştüm çünkü. Önceki şirketimde sayfanın sağ alt köşesinde bir sohbet alanı olacak ve kullanıclar buradan birbirleriyle mesajlaşacak diye bir işimiz vardı. Ancak şöyle bir sorunumuz oluşmuştu: Başlangıçta biz mesajlaşma alanının en altına atıyorduk ve kullanıcı scroll edince üst elemanın scroll ediyordu ve bu kullanıcının odağını bozuyordu. Bundan kurtulamak isterken bunu tek satır CSS ile yapabileceğimi öğrenmek beni sevindirecektik ki Safari desteğinin olmaması üzdü. Biz o zaman bu işi javascript ile halletmiştik.

<iframe height="400" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/fatihhayri/embed/rNpqReM?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Diğer bir yaşadığım sorunda açılan modal içindeki scroll bitince alttaki içeriğin scroll etmeye devam etmesi sorunuydu. Aradan çok zaman geçtiği için o zaman nasıl çözdüğümüzü hatırlayamadım ama Safari'ye çok kızdığımı hatırlıyorum.

Safari desteği sonrası tarayıcı destek oranı 95%'lere ulaşacaktır.

Kalın sağlıcakla.

## Kaynaklar

- [https://developer.chrome.com/blog/overscroll-behavior/](https://developer.chrome.com/blog/overscroll-behavior/)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
- [https://css-tricks.com/almanac/properties/o/overscroll-behavior/](https://css-tricks.com/almanac/properties/o/overscroll-behavior/)
- [https://caniuse.com/css-overscroll-behavior](https://caniuse.com/css-overscroll-behavior)
- [https://ishadeed.com/article/prevent-scroll-chaining-overscroll-behavior/](https://ishadeed.com/article/prevent-scroll-chaining-overscroll-behavior/)
