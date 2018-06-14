---
layout: post
title: 'CSS İpucu 19 - Tüm Tarayıcılar İçin CSS İle Saydamlık'
Date: 2009-02-21 16:47
Category: CSS, Web Standartları, XHTML
tags: css doğrulama, donuklaştırma, İnternet Tarayıcısı, opacity, saydamlık
---

Daha önce birçok kez bu konuda bana e-posta geldi. Buraya yazmanın
mantıklı olacağını düşündüm.

{% highlight css %}
secici {
    opacity: .75; /* Standard: FF gt 1.5, Opera, Safari */
    filter: alpha(opacity=75); /* IE lt 8 */
    -ms-filter: "alpha(opacity=75)"; /* IE 8 */
    -khtml-opacity: .75; /* Safari 1.x */
    -moz-opacity: .75; /* FF lt 1.5, Netscape */
}
{% endhighlight %}

Günümüzdeki(27 Nisan 2012) durumu düşünürsek kodu aşağıdaki gibi
kısaltabiliriz.

{% highlight css %}
secici {
    opacity: .75; /* Standard: FF gt 1.5, Opera, Safari */
    filter: alpha(opacity=75); /* IE lt 8 */
    -ms-filter: "alpha(opacity=75)"; /* IE 8 */
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][] Kod aslında tek satır olması gerekir ki CSS
3 ile birlikte bu tek satır olacaktır. opacity: değer; tanımı ile
halledeceğiz. Ama şu an yürürlükte olan tarayıcılar için yukarıdaki 5
satır kodu yazmalıyız. Bu kodu yazmak o kadar da sorun değil, ama eğer
bu kodu yazdığınız sayfanızı [W3C doğrulamasından][] geçirirseniz
aşağıdaki gibi bir hata alacaksınız. ![donuklasma_val2][] Bence W3C
doğrulması çok önemli olmasada bazen şartlar doğrulama
gerektirdiğinde(mesela müşteri istediğinde) bu sorunu çözmek için bir
kaç yöntem var. Bu yöntemlerden biri javascript fonksiyonu hazırlayıp bu
fonksiyon yardımı ile elemanlarımızı saydamlaştırma;

{% highlight javascript %}
function donuklastirma(element, donukDeger){
    var oe = document.getElementById(element);
    // donuklastirma degeri
    oe.setAttribute("style", "opacity:"+ donukDeger +";")
    if (oe.style.setAttribute) // IE icin
    oe.style.setAttribute("filter", "alpha(opacity="+ donukDeger*100 +");")
}
{% endhighlight %}


Örneği görmek
için [tıklayınız.][1] Diğer bir yöntemde ise ayrı bir css kodu yazıp bu
kodu javascript ile ekleyebiliriz

{% highlight javascript %}
<script type="text/javascript"> document.write('<link rel="stylesheet" type="text/css" media="screen" href="style/donuklastirma.css" />');</script>
{% endhighlight %}

Sorun: opacity tanımı kapsadığı elemanın içeriğini de etkiler bunu
engellemek için Robert Nyman'ın bir çözümü var.
[http://robertnyman.com/2010/01/11/css-background-transparency-without-affecting-child-elements-through-rgba-and-filters/][]
denemedim bir bakın isterseniz.

## Kaynaklar

-   http://blog.evaria.com/2007/validate-css-style-opacity/
-   [http://snipplr.com/view/10094/crossbrowser-opacity/][]
-   [http://perishablepress.com/press/2009/01/27/cross-browser-transparency-via-css/][]
-   [http://www.codeguru.com/forum/showthread.php?threadid=458411][]
-   [http://snipplr.com/view/707/setopacity/][]
-   http://www.ertugrulhaskan.com/blog/?p=548
-   http://www.aybim.com.tr/progs/acsstxt17.html
-   [http://www.mehmetduran.com/detay.aspx?detay=19][]
-   [http://www.kodaman.org/yazi/sizi-css3-ile-tanistiracak-5][]
-   [http://www.ahmetcelik.org/?p=220][]
-   [http://mfyz.com/?/dokuman/82/css-ve-transparanlik/][]
-   http://scriptiz.org/?p=1067

  [tıklayınız.]: /dokumanlar/donukluk.html
  [W3C doğrulamasından]: http://jigsaw.w3.org/css-validator/
  [donuklasma_val2]: /images/donuklasma_val2.gif
  [1]: /dokumanlar/donukluk_dog.html
  [http://robertnyman.com/2010/01/11/css-background-transparency-without-affecting-child-elements-through-rgba-and-filters/]: http://robertnyman.com/2010/01/11/css-background-transparency-without-affecting-child-elements-through-rgba-and-filters/
  [http://snipplr.com/view/10094/crossbrowser-opacity/]: http://snipplr.com/view/10094/crossbrowser-opacity/
  [http://perishablepress.com/press/2009/01/27/cross-browser-transparency-via-css/]: http://perishablepress.com/press/2009/01/27/cross-browser-transparency-via-css/
  [http://www.codeguru.com/forum/showthread.php?threadid=458411]: http://www.codeguru.com/forum/showthread.php?threadid=458411
  [http://snipplr.com/view/707/setopacity/]: http://snipplr.com/view/707/setopacity/
  [http://www.mehmetduran.com/detay.aspx?detay=19]: http://www.mehmetduran.com/detay.aspx?detay=19
  [http://www.kodaman.org/yazi/sizi-css3-ile-tanistiracak-5]: http://www.kodaman.org/yazi/sizi-css3-ile-tanistiracak-5
  [http://www.ahmetcelik.org/?p=220]: http://www.ahmetcelik.org/?p=220
  [http://mfyz.com/?/dokuman/82/css-ve-transparanlik/]: http://mfyz.com/?/dokuman/82/css-ve-transparanlik/
