---
layout: post
title: Google Reader&#039;a arama özelliği eklemek
Date: 2007-08-16 14:52
Category: Haberler, Javascript
tags: [arama, google reader, Greasmonkey, Haberler, Javascript]
---

[RSS][] okumak için Google Reader'ı kullanıyorum. Program kurmadan RSS
okumak bana daha mantıklı geliyor, ayrıca her istediğim yerden
erişebilmekde güzel. Ancak şöyle bir sorun varki okuduğunuz bir yazıyı
daha sonra aramak istediğinizde buna Google Reader cevap veremiyor,
çünkü böyle bir özelliği yok. Google bunu niye düşünmemiş anlamıyorum.
Neyse çözümü var. Çözüm Firefox kullananlar için. Yapmamız gereken
istediğimiz sayfada istediğimiz javascript kodu işletmemize yarayan
"greasemonkey" kullanmak. Sırası ile

1.  Greasmonkey kurmak greasemonkey.mozdev.org/
2.  Firefox'umuzu kapatıp açmak
3.  http://userscripts.org/scripts/show/7062 adresinde sağ üst
    taraftaki "install this script" tıklayıp indirmek
4.  Google Reader sayfamızı ziyaret etmek.

Bu kadar basit. Bunları yaptığımızda aşağıdaki gibi bir görüntü elde
ediyoruz.

![Google Reader Arama Ekleme][]

Sırası ile arama alanı, **go** butonu, aramanın neye göre
yapılacağı(yeniler, eskiler ve otomatik), aranacak maksimum yazı sayısı,
önbellek zaman aşım süresi bölümleri bulunmaktadır.


  [RSS]: http://tr.wikipedia.org/wiki/RSS
  [Google Reader Arama Ekleme]: /images/googlereader_arama.gif
