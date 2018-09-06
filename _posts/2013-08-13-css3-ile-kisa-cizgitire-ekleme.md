---
layout: post
title: CSS3 ile Kısa Çizgi(tire) Ekleme
Date: 2013-08-13 15:00
Category: CSS
tags: [kısa-çizgi, tire, css3]
---

Kısa çizginin(-) tanımına internette baktığımızda kullanım alanlarının başında ilk sırada

> "Satır sonunda, yer kalmadığı için yarım kalan kelimelerin bölünmüş olduğunu, yani devamının altta olduğunu göstermek için satır sonunda kullanılır. Bu görevde kullanılınca birleştirme çizgisi denir."

Bilgisi yer alır. Bu işi web mecrasında yapmak için CSS3 ile gelen hyphens(kısa çizgi) özelliği kullanılır. Şimdi bu makalede bu özelliği inceleyeceğiz.

CSS kısa çizgi özelliği bir satıra sığmayan kelimenin nasıl bölüneceğini belirler. Bu bölme işini HTML’de tanımlana **lang** özniteliğinde belirtilen dile göre yapar.

**Yapısı:** hyphens: &lt;deger&gt;\\
**Aldığı Değerler:** none | manual | auto\\
**Başlangıç Değeri:** manual\\
**Uygulanabilen Elementler:** Tüm elementler\\
**Kalıtsallık:** var
{: .cssozelliktanimi}

Değerlerini inceleyelim.

* **none:** Satır sonuna sığmayan kelime tire ile ayrılmaz. Sadece boşluk olan bölümlerden satır başı yaptırılır.
* **manual:** Kelimeler satıra sığmadığında sadece kelime içinde tire geçiyorsa ise tireli olan kısımdan kesilir. `&shy;` karakterini tire konacak yere koymamız gerekiyor. Normalde gözükmüyor ama kelime kesildiğinde tire gözüküyor.
* **auto:** Kelimeler satıra sığmadığında tarayıcı tarafından otomatik olarak HTML’de belirtilen dile göre bölünür.

Bir örnek yapalım.

<iframe scrolling="no" height="150" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="150" src="//codepen.io/fatihhayri/embed/DEHAm?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

![kesik çizgi](/images/tire_isareti.png)

Firefox’da denedim çalışıyor. Gayetde güzel çalışıyor. Unutulmaması gereken şey dil tanımının yapılması. Chrome’da auto çalışmıyor.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**29+ (-webkit; auto hariç)**|**10+ (-ms)**|**6+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|*desteklemiyor*|**4.2 (-webkit)**|*desteklemiyor*|
{: .tarayici-uyumi}


## Kaynaklar

* [https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)
* [http://drublic.de/blog/css3-auto-hyphenation-for-text-elements/](http://drublic.de/blog/css3-auto-hyphenation-for-text-elements/)
* [http://www.hongkiat.com/blog/css3-hyphenation/](http://www.hongkiat.com/blog/css3-hyphenation/)
* http://www.turkceciler.com/kisa-cizgi.html
* [http://caniuse.com/#search=hyphens](http://caniuse.com/#search=hyphens)


[firefox]: https://lh3.googleusercontent.com/z2hCLpQ9nhUXc7naWZDYpot0rJaAkZj3qoKnV3W-BY2jGtMy4_BsXL_WYRBdSS7DnWCcVkgxesa9DnCvdF8g6a200I7p_NXt6u-fmQ3HunOdcNiu_iepANMZBQ
[chrome]: https://lh4.googleusercontent.com/BWcCGRszuDJZbALajK1Z6QiDQiy9DYC7Tv0G7Bg5ZjFCPUDFgNLDVYZSpWsrr25z5iS9iUccu95Arm9jXNF6YWku7_vzwhr_6INwoXPFm5AKxEfc_rqq17tWZA
[explorer]: https://lh4.googleusercontent.com/z5Yp2oDDerZexN94cWunHBgCT4xrtcJeJXLcjPrQNpptS5Jux2pH_XtEAWuxBVpz7ERzQn_Z4yCsMaDfSylks_DSRcStQknl9gyFAJU-k6jjDLdAeD6PAEmuLg
[msafari]:https://lh4.googleusercontent.com/PNuvHr4u6NreXPxckWQYYDhL2TFwGOhqWp1WcQ2uypioIU6ZRZ-CB_Fd0-PdBtMJYxmXHxjSFEI7MBXkzi6ncj8tR5hKJFuhzljuJALXuZ9vzxkogWnzog-h0g
[android]:https://lh3.googleusercontent.com/CEqC3eyXkYgtA_VYhDrSrAobyYPP5pYeN8WCU1_Wpx-JXlDLRe-pAgplRvCp_N0J7lF1fXjaJDtAiByP40Jbld78UxLIZ0N4tGqYNDjqU9E_EkVKTCzmEaXcgw
