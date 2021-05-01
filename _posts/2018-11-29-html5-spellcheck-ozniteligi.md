---
layout: post
title: HTML5 Spellcheck özniteliği
description: HTML5 Spellcheck özniteliği ile tarayıcı dil hatalarını açıp kapaya biliyoruz
lang: tr_TR
Date: 2018-11-29 13:06
categories: [HTML]
tags: [spellcheck, tarayıcı]
---

Tarayıcıların bazı özellikleri bazı projelerimizde sorunlara neden olabiliyor. Bunlardan birisi de tarayıcıların dil hatalarını algılayıp sorunlu gördüklerinin altını çizmesi.

Bu özelliği kapatma kodunun olduğunu bilmiyordum. Dün araştırınca kapatmak için bir HTML özniteliği olduğunu öğrendim.

Bir örnek yapalım. İlgili paragrafa fare imleci ile tıkladığımızda ilk paragrafta hataları gösterirken ikinci pragrafta göstermiyor. 

<iframe height='300' scrolling='no' title='spellcheck özniteliği' src='//codepen.io/fatihhayri/embed/JeeKMR/?height=300&theme-id=13521&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/JeeKMR/'>spellcheck özniteliği</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Çok basit bir öznitelik eklemesi ile yapabiliyoruz bu işi `spellcheck="true"` kontrolü aktifleştiriyor. `spellcheck="flase" ` pasifleştiriyor. 

`ìnput` ve `textarea`gibi giriş yapılan alanlarda uygulandığı gibi. `contenteditable` özniteliği uygulanmış alanlarda da çalışıyor. 

Tarayıcı desteği de iyi. Tüm tarayıcılar destekliyor. Benim testlerimde Firefox tüm alanlarda `false` gibi davranıyor. 

## Kaynaklar

 - [https://blog.whatwg.org/the-road-to-html-5-spellchecking#detection](https://blog.whatwg.org/the-road-to-html-5-spellchecking#detection){:target='_blank'}
 - [https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck){:target='_blank'}
 - [https://caniuse.com/#feat=spellcheck-attribute](https://caniuse.com/#feat=spellcheck-attribute){:target='_blank'}
 - [https://davidwalsh.name/demo/spellcheck.php](https://davidwalsh.name/demo/spellcheck.php){:target='_blank'}
