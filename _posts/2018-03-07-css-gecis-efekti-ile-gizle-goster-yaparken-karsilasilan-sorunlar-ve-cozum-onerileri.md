---
layout: post
title: CSS geçiş efekti ile gizle/göster yaparken karşılaşılan sorunlar ve çözüm önerileri
Date: 2018-03-06 11:20
Category: CSS
tags: [css, geçiş-efektleri, transitions, max-height, scaleY]
image:
  feature: show-hide-css-transitions.gif
---

CSS [geçiş efekti](https://fatihhayrioglu.com/css3-gecis-efektleri-transitions/) özelliği güzel bir özellik. Bir çok basit animasyon işinde kullanılan geçiş efekti özelliğinin bir elemanı gizle/göster (toggle) ettirmek istediğimizde bazı sorunları var. Çözüm aradığımda bir kaç yöntem karşıma çıktı. Bu sorun ile ilk karşılaştığımda sahibinden.com'da bana özel sol menüsü yapıyorduk, çözümü bulunca ben bunun bir makalesini yazmalıyım demiştim ancak nasip değilmiş olmadı. Kısmet şimdiye imiş.

Elemanı gizle/göster yapmak için ilk düşündüğümüz geçiş efekti yükseklik değerini başlangıçta sıfır verelim tıklanınca veya üzerine gelince **auto**'ya çevirelim. Sorun burada başlıyor CSS **height** değerini sıfırdan auto'ya çekemiyor. 

> MDN bu konuda ki açıklaması bu işin zor bir iş olduğu yönünde. Tarayıcılarda sıkıntıya girmektense desteklemeyelim sonucuna varmışlar :)

Bu sorunu çözmek için iki yöntem var. 

## max-height çözümü

Çözüm için **height** yerine **max-height** kullanmak.

<iframe height='300' scrolling='no' title='VQVVad' src='//codepen.io/fatihhayri/embed/VQVVad/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/VQVVad/'>VQVVad</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

 - **max-height** değerini iyi tanımlamak gerekiyor. Verilen değer Açılış/kapanış animasyonunu etkiliyor. Yüksek değerler animasyonun hızlı olmasını veya anlaşılmamasına neden oluyor. Küçük değerlerde içeriğin aktif olarak geldiği yerlerde içeriğin bazı kısımlarının görünmemesine neden olabilir.
 - **max-height** değeri tanımlanan elemana **padding**, **margin** değeri tanımlamayın animasyonda zıplamalara neden oluyor.
 - Gizle/göster yaptığımız elemana **padding** ve **margin** tanımlamak yerine içine bir tane daha eleman atayıp **padding** ve **margin** değerlerini bu yeni eleman tanımlayarak çözebiliriz.
 

## scaleY ile çözmek

**transform: scaleY** yardımıylada bir çzöm mümkün. Başlangıçta değer sıfır (0) iken seçili durumda veya üzerine geldiğimizde değeri bir (1) yaparakta bir çözüm oluşturabiliriz.

<iframe height='300' scrolling='no' title='qxeJYx' src='//codepen.io/fatihhayri/embed/qxeJYx/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/qxeJYx/'>qxeJYx</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Gayet kolay bir çözüm. Animasyonun açılış şekli bazı durumlarda istenmeye bilir. Tercih sizin.

Kalın sağlıcakla.

## Kaynaklar

 - [http://n12v.com/css-transition-to-from-auto/](http://n12v.com/css-transition-to-from-auto/)
 - [https://coderwall.com/p/tfwjtw/css-transition-with-auto-width-or-height](https://coderwall.com/p/tfwjtw/css-transition-with-auto-width-or-height)
 - [https://twitter.com/LeaVerou/status/69776299685715970](https://twitter.com/LeaVerou/status/69776299685715970)
 - [https://jdsteinbach.com/css/snippet-animate-display-transform/](https://jdsteinbach.com/css/snippet-animate-display-transform/)
 - [https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css](https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css)
 - [http://css3.bradshawenterprises.com/animating_height/](http://css3.bradshawenterprises.com/animating_height/)