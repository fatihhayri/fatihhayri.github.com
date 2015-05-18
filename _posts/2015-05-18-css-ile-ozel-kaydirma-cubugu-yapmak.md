---
layout: post
title: CSS İle Özel Kaydırma Çubuğu Yapmak
Date: 2015-05-18 16:00
Category: css
tags: css kaydırma-çubuğu -webkit
---

Daha önce yazacaktım ama desteği çok düşüktü. Webkit'in %82(mobil + web) desteğinden sonra uygulanabilirliği arttı. Ben Firefox'dan destek bekledim ama ondan ses çıkmadı. 

Tasarımcıların form elemanlarını tasarlama sevdası hiç bitmedi, bitmeyecekte :D Tüm ihtiyaçları CSS ile halledebilsek sorun yokta işin içine javascript girince durum değişiyor. Çünkü CSS işin işlevsel kısmını yine doğal haline bırakıp görselliğine yönelirken; javascript ile yapılan çözümler işin işlevselliğine de müdahale ediyor. İşin doğallığı bozuluncada tonla sorun çıkıyor.

Neyse biz gelelim kendimize özel kaydırma çubuğu(scroll) yapmaya;

<iframe height='325' scrolling='no' src='//codepen.io/fatihhayri/embed/JdYOMJ/?height=325&theme-id=13521' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Bu kadar basit bir kod ile özel kaydırma çubuğu elde ettik. Biz yukarıda 3 adet sahte(pseudo) kaydırma çubuğu elementi kullandık. Ancak toplamda yedi tane element vardır.

## Özel Scroll Sahte(Pseudo) Elemanları

![enter image description here](http://fatihhayrioglu.com/images/scrollbar_map_webkit.gif)

 1. **::-webkit-scrollbar** kaydırma çubuğu alanını tanımlar. Genelde diğer elemanları kapsar 
 2. **::-webkit-scrollbar-button** Yön tuşlarını seçmeye yarar.
 3. **::-webkit-scrollbar-track** kaydırma çubuğunun altta kalan boş kısmını seçmeye yarar.
 4. **::-webkit-scrollbar-track-piece** kaydırma çubuğunun tutamacı dışında kalan boşluğu seçmemize yarar.
 5. **::-webkit-scrollbar-thumb** kaydırma çubuğunun tutamacını seçmemize yarar.
 6. **::-webkit-scrollbar-corner** Yatay ve dikey kaydırma çubuğunun köşesini seçmemizi sağlar.
 7. **::-webkit-resizer** Yatay ve dikey kaydırma çubuğunun köşesinde boyutlandırma çıkması durmunu seçmemizi sağlar. 
 
## Öze Kaydırma Çubuğu Sahte(Pseudo) Sınıfları

Farklı durumları yakalayabilmemiz için kaydırma çubuğunun sahte(pseudo) sınıfları vardır. Bu sınıflar kaydırma çubuğu elementinin parçalarına özel seçimin yapmamızı sağlar.

**:horizontal**, **:vertical**, **:decrement**, **:increment**, **:start**, **:end**, **:double-button**, **:single-button**, **:no-button**, **:corner-present**, **:window-inactive**

Bu sözde sınıfları tanımlamak yerine örnekleri incleyerek daha iyi anlayacağımızı düşünüyorum. 

 - [http://codepen.io/fatihhayri/pen/aOZLgX?editors=110](http://codepen.io/fatihhayri/pen/aOZLgX?editors=110)
 - [http://codepen.io/anon/pen/EaxBWP?editors=110](http://codepen.io/anon/pen/EaxBWP?editors=110)
 - [http://codepen.io/shimizurei/pen/vgHbF?editors=110](http://codepen.io/shimizurei/pen/vgHbF?editors=110)
 - [http://codepen.io/WinterJoey/pen/Hacjz?editors=110](http://codepen.io/WinterJoey/pen/Hacjz?editors=110)
 - [http://codepen.io/daffysam22/pen/yyWOWq](http://codepen.io/daffysam22/pen/yyWOWq)


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+(-webkit)**|**-**|**-**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+ (-webkit)**|**+(-webkit)**|**+(-webkit)**|
{: .tarayici-uyumi}

## Kaynaklar

 - [https://www.webkit.org/blog/363/styling-scrollbars/](https://www.webkit.org/blog/363/styling-scrollbars/)
 - [https://css-tricks.com/almanac/properties/s/scrollbar/](https://css-tricks.com/almanac/properties/s/scrollbar/)
 - [http://cssdeck.com/labs/css3-webkit-vertical-scrollbars/](http://cssdeck.com/labs/css3-webkit-vertical-scrollbars/)
 - [http://codemug.com/html/custom-scrollbars-using-css/](http://codemug.com/html/custom-scrollbars-using-css/)
 - [http://stackoverflow.com/a/14150577/296373](http://stackoverflow.com/a/14150577/296373)
 - [http://www.hongkiat.com/blog/css-scroll-bar/](http://www.hongkiat.com/blog/css-scroll-bar/)
 - [http://webdesign.tutsplus.com/articles/quick-tip-styling-scrollbars-to-match-your-ui-design--webdesign-9430](http://webdesign.tutsplus.com/articles/quick-tip-styling-scrollbars-to-match-your-ui-design--webdesign-9430)
 - [http://mikethedj4.github.io/Webkit-Scrollbar-Generator/](http://mikethedj4.github.io/Webkit-Scrollbar-Generator/)
 - [http://beautifulpixels.com/goodies/create-custom-webkit-scrollbar/](http://beautifulpixels.com/goodies/create-custom-webkit-scrollbar/)
 - [http://almaer.com/blog/creating-custom-scrollbars-with-css-how-css-isnt-great-for-every-task](http://almaer.com/blog/creating-custom-scrollbars-with-css-how-css-isnt-great-for-every-task)
 - [http://gs.statcounter.com/#all-browser_version_partially_combined-TR-monthly-201502-201504-bar](http://gs.statcounter.com/#all-browser_version_partially_combined-TR-monthly-201502-201504-bar)
 - [http://codepen.io/shimizurei/pen/vgHbF?editors=110](http://codepen.io/shimizurei/pen/vgHbF?editors=110)


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png