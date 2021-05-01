---
layout: post
title: IE6&#039;un Tekrarlayan Karakter Sorunu
Date: 2006-12-12 15:50
categories: [CSS]
tags: [comment, CSS, fix, tekralayan-karakter, HTML, yorum]
---

Bu hata birden fazla float uygulanmış içiçe elementlerde meydana gelir.
Son float uygulanmış elementin son karakterleri tekrarlar.

```html
<div id="icerik">
	<!-- icerik alani-->
		<div id="anaIcerik"> .... </div>
	<!-- anaIcerik sonu -->
	<!-- sagkolon baslangici -->
	<div id="sagKolon"> ... </div>
</div>
```

Örnek sayfayı görmek için [tıklayınız.][] (hatayı görmek için IE6 ile
bakmalısınız.)

Float uygulanmış elementlerin ilki ve sonuncusu arasında bir çok yorum
kodu(<\!-- bunun gibi --\>) var ise bu hata meydana gelir. İlk iki
yorumun hiç bir etkisi yoktur, ama iki yorumdan sonraki her bir yorum
iki karakterin kopyalanmasına neden olur. yorum varsa iki karkater
tekrarlayacak, dört yorum olduğunda da dört karkater ve beş yorum olunca
da altı karakter tekrarlayacaktır.

![][100]

şžaşılacak bir durum ancak bu hatanın geçen makalede bahsettiğimiz [3 piksel metin öteleme hatası][] ile ilişkisi vardır. Bu hatayı düzeltmek
için sondaki float uygulanmış öğeye sağdan 3 piksel eksi değer
atamalıyız veya içerik alanını 3 piksel genişletmeliyiz. Ancak bu çözüm
metodlarının her ikisi de IE 7'de sorun çıkaracaktır. Bundan kurtulmak
için en kolay ve sağlıklı yol bu bu yorumları kullanmamaktır.

Ancak illa yorum kullanmalıyım derseniz onun içinde çözüm:

```html
<!--[if !IE]>Yorumunu buraya yaz<![endif]-->
```

şeklinde yorum satırlarınzı eklemelisiniz.

Örnek kodu görmek için [tıklayınız.][1]

Bu sorun [IE7][] versiyonunda giderilmiştir.

## Kaynaklar

-   positioniseverything.net/explorer/dup-characters.html
-   http://www.friendsofed.com


  [tıklayınız.]: /dokumanlar/ie_tekrarlayan_karakter_sorunu_ornek.html
  [100]: /dokumanlar/ie_tekrarlananlrak.gif
  [3 piksel metin öteleme hatası]: http://fatihhayrioglu.com/ieun-3-piksel-metin-oteleme-hatasi/
  [1]: /dokumanlar/ie_tekrarlayan_karakter_sorunu_ornek2.html
  [IE7]: http://fatihhayrioglu.com/internet-explorer-7-ve-css/
