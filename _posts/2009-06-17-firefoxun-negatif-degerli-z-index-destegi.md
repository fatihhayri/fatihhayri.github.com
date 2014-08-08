---
layout: post
title: Firefox&#039;un Negatif Değerli z-index Desteği
Date: 2009-06-17 21:09
Category: CSS
tags: Firefox, Firefox 2, ie6, ie7, negatif-değer, z-index
---

Geçen bir projede z-index ile ilgili bir tanım yaptım. Üçlü bir tanımdı
sırası ile elemanlara z-index:100, z-index:50 ve z-index:0 değerleri
atadım. Aslında 1, 2, 3 diyede tanımlama yapabilirdim, ama araya başka
bir eleman girerse diye böyle aralıklı değerler verdim.

Firefox, IE 8, Opera ve Google Chrome'da sorunsuz çalışan kod, IE 6 ve
7'de  çalışmadı. Bende daha önce böyle bir sorun ile karşılaşmıştım.
Çözüm için z-index:-1 tanımı yapıp çözmeye çalışmıştım, ama bu seferde
Firefox 2'da çalışmamıştı o zaman. Firefox 2'de negatif değleri
desteklemediğini öğrenmiştim o zaman. Bende bunu için bir düzeltme
yazmıştım zamanında. Ama Firefox 3 ile birlikte z-index negatif değer
desteği geldiği için şimdi bu sorunu çözülmüş oldu. Bir bilgi olarak
bunu bilmek gerek diye düşündüm.

Sonra acaba Firefox 2 için bir düzeltme yazmaya gerek var mı diye
düşündüm. Ancak Firefox çok hızlı güncellenen bir tarayıcı ve şu an
Firefox 2 kullanımı %5'lerin altına düşmüş durumda bir düzeltme yazmaya
gerek yok diye düşünüyorum. 

Sonuç olarak şunu söyleyebiliriz ki, gönül rahatlığı ile negatif z-index
tanımı kullanabiliriz.

## Kaynaklar

-   [http://buynowshop.com/2009/05/css-tip-firefox-z-index-value/][]
-   [http://www.codingforums.com/archive/index.php/t-112997.html][]
-   [http://74.125.77.132/search?q=cache:RJsWV8wD1lwJ:www.experts-exchange.com/Web_Development/Web_Languages-Standards/CSS/Q_21249004.html+firefox+z-index+support+negative+value&cd=6&hl=en&ct=clnk&client=firefox-a][]
-   [http://forums.mozillazine.org/viewtopic.php?f=9&t=20413&start=0&st=0&sk=t&sd=a][]
-   [http://css.dzone.com/news/css-support-firefox-3-and-oper][]
-   [http://archivist.incutio.com/viewlist/css-discuss/5061][]
-   [http://reference.sitepoint.com/css/z-index][]

  [http://buynowshop.com/2009/05/css-tip-firefox-z-index-value/]: http://buynowshop.com/2009/05/css-tip-firefox-z-index-value/
    "http://buynowshop.com/2009/05/css-tip-firefox-z-index-value/"
  [http://www.codingforums.com/archive/index.php/t-112997.html]: http://www.codingforums.com/archive/index.php/t-112997.html
    "http://www.codingforums.com/archive/index.php/t-112997.html"
  [http://74.125.77.132/search?q=cache:RJsWV8wD1lwJ:www.experts-exchange.com/Web_Development/Web_Languages-Standards/CSS/Q_21249004.html+firefox+z-index+support+negative+value&cd=6&hl=en&ct=clnk&client=firefox-a]: http://74.125.77.132/search?q=cache:RJsWV8wD1lwJ:www.experts-exchange.com/Web_Development/Web_Languages-Standards/CSS/Q_21249004.html+firefox+z-index+support+negative+value&cd=6&hl=en&ct=clnk&client=firefox-a
    "http://74.125.77.132/search?q=cache:RJsWV8wD1lwJ:www.experts-exchange.com/Web_Development/Web_Languages-Standards/CSS/Q_21249004.html+firefox+z-index+support+negative+value&cd=6&hl=en&ct=clnk&client=firefox-a"
  [http://forums.mozillazine.org/viewtopic.php?f=9&t=20413&start=0&st=0&sk=t&sd=a]: http://forums.mozillazine.org/viewtopic.php?f=9&t=20413&start=0&st=0&sk=t&sd=a
    "http://forums.mozillazine.org/viewtopic.php?f=9&t=20413&start=0&st=0&sk=t&sd=a"
  [http://css.dzone.com/news/css-support-firefox-3-and-oper]: http://css.dzone.com/news/css-support-firefox-3-and-oper
    "http://css.dzone.com/news/css-support-firefox-3-and-oper"
  [http://archivist.incutio.com/viewlist/css-discuss/5061]: http://archivist.incutio.com/viewlist/css-discuss/5061
    "http://archivist.incutio.com/viewlist/css-discuss/5061"
  [http://reference.sitepoint.com/css/z-index]: http://reference.sitepoint.com/css/z-index
    "http://reference.sitepoint.com/css/z-index"
