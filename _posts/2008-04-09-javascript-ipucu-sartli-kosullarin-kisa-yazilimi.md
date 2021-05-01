---
layout: post
title: Javascript ipucu&#58; Şartlı ifadelerin(if..else) kısa yazılımı
Date: 2008-04-09 00:02
categories: [Javascript]
tags: [if else, ipucu, Javascript, şarlı-ifadeler]
---

Bir çok kere lazım oldu ve aramak zorunda kaldım ve her aramam da 10-15
dakika kaybettim. En sonun da buraya yazmaya karar verdim. Malum kendi
sitemde aramak daha kolay ve hatırda kalıcı oluyor. Birde sizlere de
yardımı dokunur bir ihtimal diye yazıyorum.

Javascript'te if..else şartlı ifadesini herkes biliyor.

```javascript
if(kosul) { 
  //kosulun gerçekleşmesi halinde olacak olay 
} 
else { 
  //kosulun gerçekleşmemesi halinde olacak olay 
}
```

Bu kodu bir kere yazmak sorun değil ama bir çok programcı bilir ki bu
bir kodlama da sadece bir kere yazılmaz ve çok fazla yazıncada bıkkınlık
verir. Bizi düşünene javascript geliştiricileri bunu da düşünerek bize
kısa bir yazım şekli sunmuşlar.

1.  koşul <span style="color:#FF00FF; font-weight:bold">?</span> koşulun
    gerçekleşme durumu
    <span style="color:#FF00FF; font-weight:bold">:</span> koşulun
    gerçekleşmeme
    durumu<span style="color:#FF00FF; font-weight:bold">;</span>

Bir örnek yapalım.

```javascript
durum = (yas >= 18) ? "yetişkin" : "küçük";
```

**yas** değeri 18'den büyük ve eşit olması durumunda **durum**
değişikeninin değeri "yetişkin" değilse "küçük" olacaktır.

## Kaynaklar

-   javascriptant.com/articles/28/the-conditional-operator-ternary-operactor
-   developer.mozilla.org/en/docs/Core_JavaScript_1.5_Guide:Operators:Special_Operators