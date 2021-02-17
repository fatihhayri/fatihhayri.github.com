---
layout: post
title: İnternet Explorer 8 Olmasa Neler Olurdu
Date: 2013-09-17 15:00
Category: CSS
tags: [ie8, son, tarayıcı]
---

Sırayla İnternet Explorer sürümlerini bitirme yazıları yazmak sevindirici. İE8 şu anda %10 civarında ve düşmeye devam ediyor. Hala çok yoğun olarak kullanılan Windows XP’de İnternet Explorer 8 üstü tarayıcı kurulamıyor olması İE8’in güncellenmemesine neden oluyor. İE 8 yeni standartlar konusunda kısır bir tarayıcı HTML5 ve CSS3 özelliklerinin çoğunu desteklemiyor. Yeni stadart test iiçin yapılan ACID3 testi bunun en yii göstergesi; 100 üzerinden 23 alarak sınıfta kalıyor.

![acid3 test](/images/ie8_acid3_test.png)

Tarayıcı desteği konusunda hala bir çözüm bulunamamış olması bir sorun. Aslında otomatik güncelleme yapan tarayıcılar için artık tarayıcı desteği sorun olmaktan çıktı. Maalesef bu konuda Microsoft her zaman ki gibi teknolojinin gerisinde kalıyor. Artık bunu bilerek yaptığına kanaat getirdim.

jQuery yeni sürümü 2.0 ie birlikte İE8 ve alt sürümlerin değini kaldırdı. İE( ve altı sürümlerin javascript performansının kötü olması bu kararda önemli.

## CSS3 desteği (%15 den %54 çıkıyor.)

 - [CSS3 Seçici Desteği](https://fatihhayrioglu.com/css3-secicileri/)
    - :target seçicisi
    - :disabled
    - :enabled
    - :checked
    - :nth-child() sözde sınıfı
    - :nth-last-child() sözde sınıfı
    - :nth-of-type() sözde sınıfı
    - :nth-last-of-type() sözde sınıfı
    - :last-child sözde sınıfı
    - :first-of-type sözde sınıfı
    - :last-of-type sözde sınıfı
    - :only-child sözde sınıfı(Tek çocuk)
    - :only-of-type sözde sınıfı
    - :root Sözde Sınıfı
    - :empty sözde sınıfı
    - Olumsuz(:not) Sözde Sınıfı
    - ::selection Sözde Elementi
 - [CSS3 Değerleri](https://fatihhayrioglu.com/css3-yeni-degerleri/)
    - ch değeri
    - Bakış Alanı Değerleri (View Port)
    - Renk değerleri (rgba, hsl, hsla)
    - turn değeri
    - calc() değeri
 - [CSS 3 medya sorguları / tepkisel tasarım(responsive)](http://fatihhayrioglu.com/css-3-medya-sorgulari/)
 - [box-shadow desteği](http://fatihhayrioglu.com/kutulara-golge-vermek-box-shadow/)
 - [border-radius desteği][1]
 - [Çoklu Ardalan(background-image)][2]
 - [background-size desteği][3]
 - [background-origin ve background-clip desteği][4]
 - [CSS3 Dönüştürme Özellikleri(Transforms) ve 2B Dönüştürme][5]
 - [@font-face Woff desteği][6]
Farklı yazı tiplerini oluşturmaya gerke kalmadan woff ile tüm tayıcı desteği sağlanmış olacak.
 - [opacity standart desteği (filtresız)][7]
 - [Renk geçişi (svg li çözüm)][8]

## HTML5 Desteği
 - [Canvas][9]
 - [SVG desteği][10]
 - [Yeni Elementler header, footer, aside, section, article vs.][11]
 - [Video elementi][12]
 - [Auido elementi][13]

## Javascript
 - [ECMAScript 5][14]
 - [document.getElementsByClassName][15]
 - [window.getComputedStyle][16]
 - [Geolocation API][17]
 - [Navigation Timing API][18]

Ayrıca [64 adet sorundan][19] daha kurtulmuş olacağız.

## Sonuç

Yeni standartlar açısından bir çok kazanımımız olacağı kesin ama hala İE sürümleri ile uğraşmaya devam edeceğiz. İE9’un hızlı düşüşü(%5) bizi ümitlendiriyor, muhtemelen yüzdesi daha hızlı düşecek. Microsoft’un İE10’a güncelleme zorunluluğu İE9 oranlarını düşürdü. Umarım en yakın zamanda İE biter.

## Kaynaklar

 - blog.fili.nl/benefits-of-dropping-ie8-support
 - computerworld.com/s/article/9231316/Google_to_drop_support_for_IE8_on_Nov._15
 - [http://net.tutsplus.com/articles/editorials/jquery-in-2013-or-how-to-properly-drop-ie/](http://net.tutsplus.com/articles/editorials/jquery-in-2013-or-how-to-properly-drop-ie/)
 - [http://www.sitepoint.com/browser-trends-july-2013/](http://www.sitepoint.com/browser-trends-july-2013/)
 - [https://fatihhayrioglu.com/internet-explorer-9/](https://fatihhayrioglu.com/internet-explorer-9/)
 - [http://robinwinslow.co.uk/2013/02/28/time-to-say-goodbye-to-ie8/](http://robinwinslow.co.uk/2013/02/28/time-to-say-goodbye-to-ie8/)
 - [http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx](http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx)
 - [http://theie8countdown.com/](http://theie8countdown.com/)
 - [http://www.gtalbot.org/BrowserBugsSection/MSIE8Bugs/](http://www.gtalbot.org/BrowserBugsSection/MSIE8Bugs/)


  [1]: http://fatihhayrioglu.com/yuvarlak-kenarli-kutularborder-radius-olusturmak/
  [2]: http://fatihhayrioglu.com/css3-coklu-ardalanmultiple-background/
  [3]: http://fatihhayrioglu.com/css3-background-size-ozelligi/
  [4]: http://fatihhayrioglu.com/css3-background-origin-ve-background-clip-ozellikleri/
  [5]: http://fatihhayrioglu.com/css3-donusturme-ozellikleritransforms-ve-2b-donusturme/
  [6]: http://fatihhayrioglu.com/font-face-kullanimi/
  [7]: http://fatihhayrioglu.com//css-ipucu-19-tum-tarayicilar-icin-css-ile-saydamlik/
  [8]: http://fatihhayrioglu.com/css-renk-gecisleri-gradients/
  [9]: https://developer.mozilla.org/en-US/docs/HTML/Canvas
  [10]: https://developer.mozilla.org/en-US/docs/SVG
  [11]: https://developer.mozilla.org/en-US/docs/HTML/HTML5/HTML5_element_list
  [12]: https://developer.mozilla.org/en-US/docs/HTML/Using_HTML5_audio_and_video
  [13]: https://developer.mozilla.org/en-US/docs/HTML/Using_HTML5_audio_and_video
  [14]: http://kangax.github.io/es5-compat-table/
  [15]: https://developer.mozilla.org/en-US/docs/DOM/document.getElementsByClassName
  [16]: https://developer.mozilla.org/en-US/docs/DOM/window.getComputedStyle
  [17]: https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation
  [18]: https://developer.mozilla.org/en-US/docs/Navigation_timing
  [19]: http://www.gtalbot.org/BrowserBugsSection/MSIE8Bugs/
