---
layout: post
title: Tarayıcı konsolunu renklendirelim
Date: 2015-11-04 17:03
Category: tarayıcı
tags: tarayıcı console.log renlendirme
---

Arayüz geliştiriciler neredeyse kod yazdığı editörleriyle geçirdiği zaman kadar veya daha fazla tarayıcı konsollarında zaman geçiriyor. Tabi bu gibi durumlarda konsolların yeteneklerini öğrenmek işimizi kolaylaştırıyor. Sizlere dün yaşadığın bir sorunu ve güzel bir çözümü anlatmaya çalışacağım.

Bir yerden sonra **console.log** ile konsola bastığım değerler arasından bazı değerleri ayırt etmek gerekiyor. Bunun için tarayıcıların CSS yardımı ile bir çözümü mevcut.

![console log](http://fatihhayrioglu.com/images/console-log-1.png)

{% highlight javascript %}
console.log('%c top ' + bottomScrolling, 'background:red; color: white; font-size: 14px');
{% endhighlight %}

**console.log** içindeki ilk virgüle kadar olan yer içeriği, virgülden sonraki kısımda konsolda görünecek alana atadığımız css kodlarını gösteriyor. CSS ile yapıyor olmak süper. Şimdi süper oldu.

![console log renkli](http://fatihhayrioglu.com/images/console-log-2.png)

## Kaynaklar

 - [http://stackoverflow.com/questions/7505623/colors-in-javascript-console/13017382#13017382](http://stackoverflow.com/questions/7505623/colors-in-javascript-console/13017382#13017382) 