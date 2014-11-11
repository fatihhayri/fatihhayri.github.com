---
layout: post
title: HTML Sayfalarına %100 genişlikte ve %100 yükseklikte flash dosyaları eklemek
Slug: html-sayfalarina-tam-genislikte-ve-tam-yukseklikte-swf-eklemek
Date: 2010-03-29 21:46
Category: CSS, XHTML
tags: 0, flash, html, swf, swfobject, tam ekran
---

Site üzerinden gelen bazı sorular belli aralıklarla farklı kişilerden
gelince bu konuda bir yazı yazma ihtiyacı duyuyorum. Bu konuda olduğu
gibi. Daha öncede benzer sorular ile karşılaştım. Bende bir kaç projemde
bu konuyu göz atmıştım.

İki yöntem var aslında bunun için.

## Birinci Yöntem

{% highlight css %}
body {
    height: 100%;
    width: 100%;
    margin: 0;
}
{% endhighlight %}

şeklinde bir kod. Ancak bu kod ne yazık ki Firefox ve Opera'da
çalışmıyor. Yada çalışması için html sayfamızdan DOCTYPE'ı silmemiz
gerekiyor. Bence bu pek mantıklı bir kullanım değil, o nedenle ben
ikinci yöntemi öneriyorum.

## İkinci Yöntem

{% highlight javascript %}
swfobject.embedSWF("test.swf", "myContent", "100%", "100%", "9.0.0",
"expressInstall.swf");
{% endhighlight %}

Genişlik ve yüksekliğini 100% veriyoruz ve css kodumuzu yazıyoruz.

{% highlight css %}
/* hide from ie on mac \*/
html {
    height: 100%;
    overflow: hidden;
}

#myContent {
    height: 100%;
}
/* end hide */

body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #090;
}
{% endhighlight %}

Örneği görmek için [tıklayınız][]

CSS kodumuz biraz daha fazla olan bu yöntem DOCTYPE kullanımı durumunda
da çalıştığı için bence en kullanışlı yöntem. Geçen hafta anlattığım
flashobject ile kodumuzu sayfaya ekledik.

CSS kodu biraz incelersek;

Kodun ilk iki tanımını ie5 Mac kullanıcılarından gizlemek için.

Htlm'e yüzde yüz yükseklik tanımı yapıyoruz ve flash dosyamız sayfanın
tamamını kaplayacağı için sayfa kenarındaki kaydırma çubuğuna gerek
kalmayacaktır, ie de kaydırma çubuğunu kaldırmak için overflow:hidden
kodunu yazıyoruz.

Daha sonrada flash'ı eklediğimiz katman yüksekliğinide yüzde yüz yaparak
elemanın tam sayfayı kaplamasını sağlıyoruz.

Son olarakta body elementinin yüksekliğini yüzde yüz yapıp margin ve
padding değerlerini sıfırlıyoruz ve görünmese de işi garantiye almak
için bir backgroun-color tanımı yapıyoruz. Bu kadar.

## Kaynaklar

-   [http://blog.deconcept.com/2005/01/02/100-height-and-100-width-xhtml-flash-embed/][]
-   [http://www.kirupa.com/developer/mx2004/fullscreen.htm][]

  [tıklayınız]: /dokumanlar/tamekran_flash/tamekran.html
  [http://blog.deconcept.com/2005/01/02/100-height-and-100-width-xhtml-flash-embed/]: http://blog.deconcept.com/2005/01/02/100-height-and-100-width-xhtml-flash-embed/
  [http://www.kirupa.com/developer/mx2004/fullscreen.htm]: http://www.kirupa.com/developer/mx2004/fullscreen.htm
