---
layout: post
title: Tarayıcı konsolunu renklendirelim
Date: 2015-11-04 17:03
Category: tarayıcı
tags: [tarayıcı console.log renlendirme]
---

Arayüz geliştiriciler neredeyse kod yazdığı editörleriyle geçirdiği zaman kadar veya daha fazla tarayıcı konsollarında zaman geçiriyor. Tabi bu gibi durumlarda konsolların yeteneklerini öğrenmek işimizi kolaylaştırıyor. Sizlere dün yaşadığın bir sorunu ve güzel bir çözümü anlatmaya çalışacağım.

Bir yerden sonra **console.log** ile konsola bastığım değerler arasından bazı değerleri ayırt etmek gerekiyor. Bunun için tarayıcıların CSS yardımı ile bir çözümü mevcut.

![console log](https://fatihhayrioglu.com/images/console-log-1.png){:height="316px" width="1056px"}

{% highlight javascript %}
console.log('%c Şampiyon Trabzonspor', 'background: #379DE8; color: #550329; font-size: 24px');
{% endhighlight %}

**console.log** içindeki ilk virgüle kadar olan yer içeriği, virgülden sonraki kısımda konsolda görünecek alana atadığımız css kodlarını gösteriyor. CSS ile yapıyor olmak süper. Şimdi süper oldu. Dikkat edilecek husus ilk bloka **%c** ile başlamalıyız.

![console log renkli](https://fatihhayrioglu.com/images/console-log-2.png){:height="308px" width="1248px"}

## Kaynaklar

 - [http://stackoverflow.com/questions/7505623/colors-in-javascript-console/13017382#13017382](http://stackoverflow.com/questions/7505623/colors-in-javascript-console/13017382#13017382) 