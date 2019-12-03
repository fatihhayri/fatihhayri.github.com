---
layout: post
title: İnternet Explorer 8&#039;in CSS Desteği
Date: 2010-03-31 22:50
Category: CSS, Haberler
tags: [active, after, before, content, Data URI, display, inline-block, focus, hasLayout, ie8, outline]
---

Biraz geç kalmış bir yazı olacak, ancak İnternet Explorer 8 çıktığından
beri ilk defa birinciliği Firefox'dan aldı. Bende bu makaleyi yazmaya
gerek duydum. Açıkçası İnternet Explorer 8'e ilgisiz kaldık. İnternet
Explorer 6 ile o kadar uğraştık ki serinin 8. sürümü biraz atıl kaldı.

İnternet Explorer 8 yayıldıkça sorunları ortay çıkmaya başladı, yani
test potamıza girmeye başladı. [Her ne kadar uyumluluk kodu ile İnternet Explorer][] 7 gibi yorumlamasını sağlayıp test tarayıcı sayısını bire
düşürme imkanımız olsada yeniliklerinden yararlanmak için bu kodu
kullanmamak gerekebilir. Ayrıca makaleyi geç yazmamızın bir avantajı
oldu o da ie8 sorunlarınıda görmeye başladık. 

İnternet Explorer 8 ile birlikte CSS2.1 standartlarını tam
desteklediğini açıkladı.

İnternet Explorer 8 ile gelen CSS özellikleri listesi;

## Float

Float uygulamalarındaki [hasLayout][]'dan kaynaklanan bir çok sorunun
giderildiği söyleniyor. İşin aslı hasLayout işleyişi tamamen kaldırılmış
ie8'de. Bu sürümdeki en büyük gelişme budur.

## Margin Çökme Sorunu

[Margin çökme][] sorunu giderilmiş.

## :focus Sözde Sınıfı

Klavyeden elementlere odaklanmamızı sağlayan ve erişebilirlik için
önemli olan bu özellik İnternet Exploerer 8 ile geldi

{% highlight css %}
a:focus {
	border: solid 1px red;
}
{% endhighlight %}

## :before and :after Sözde Elementleri

Bir elemanın öncesine ve sonrasına **content** özelliği ile birlikte
içerik eklememizi sağlayan bu özellik ie8 ile birlikte geldi.

{% highlight css %}
#box:before {
	content: "Not:";
}

#box:after {
	content: "son";
}
{% endhighlight %}

## :lang() Sözde sınıfı

Sayfa içeriğinde farklı dilde kullanılan içeriği yakalamak için
kullanılan bir seçicidir.

{% highlight css %}
:lang(fr) {
	tanimlar
}
{% endhighlight %}

## :active Sözde sınıfı işlevselliği arttı

Eskiden sadece a bağlantıya verilen özellikleri tanımlayan ie8 şimdi tüm
HTML elementlerini kapsıyor artık.

## list-style-type Özelliğine ek değerler eklenmiş

list-style-type özelliğinin bir çok değeri var. İnternet Explorer 8
öncesi bunların yarısını destekliyordu 8 ile birlikte hepsini
destekliyor.

## content özellikleri destekliyor

-   [content][]
-   [counter-increment][]
-   [counter-reset][]
-   [quotes][]

:after, :before sözde seçicileri ile birlikte content özelliklerini
destekliyor artık ie8

## Tablo Özelliklerinin tamamını destekliyor artık

-   [caption-side][] 
-   [border-spacing][]

özelliklerini destekliyor. Ayrıca

-   [border-collapse][]
-   [border-style][]
-   [empty-cells][]

özelliklerinide tam destekliyor, yani bu özelliklerin tüm değerlerini
destekliyor. Eskiden kısmen desteklediği bu özellikleri şimdi tammen
destekliyor.

## Yazı ve Metin Özellikleri

-   [font-weight][]
-   [white-space][] (pre-wrap ve pre-line değerleri destekleniyor)
-   [word-spacing][]

Ayrıca **text-decoration** özelliğinin **overline** değeride
destekleniyor.

## Yazdırma Özellikleri

[@page][] özellikleri tam olarak destekleniyor.

-   [page-break-inside][]
-   [widows][]
-   [orphans][]

## Dış Hat çizgisi(Outline) Özellikleri

[Dış hat çizgisi özellikleri][] desteği geldi.

-   [outline][]
-   [outline-color][]
-   [outline-style][]
-   [outline-width][]

## Data URI Desteği

Internet Explorer 8 ile birlikte DATA URI desteği geliyor. DATA URI
kısaca html dosyasından ayrı yapıların yani resimlerin html içine gömme
imkanı verir bize. internet Explorer 8 sadece css dosyalarına
eklenmesine izin veriyor ayrıca bir kısıtlama var ie8 en fazla 32kb
boyutuna kadar destekliyor.

## Özel uzantılar ile yeni özellik desteği

Firefox, webkit ve Opera'dan sonra Microsoft'da özel uzantılar ile yeni
özellik desteğini getirdi. Aşağıda özellikler listelendi;

-   [-ms-accelerator][]
-   [-ms-background-position-x][]
-   [-ms-background-position-y][]
-   [-ms-behavior][]
-   [-ms-filter][]
-   [-ms-ime-mode][]
-   [-ms-layout-flow][]
-   [-ms-layout-grid][]
-   [-ms-layout-grid-char][]
-   [-ms-layout-grid-line][]
-   [-ms-layout-grid-mode][]
-   [-ms-layout-grid-type][]
-   [-ms-overflow-x][]
-   [-ms-overflow-y][]
-   [-ms-scrollbar-3dlight-color][]
-   [-ms-scrollbar-arrow-color][]
-   [-ms-scrollbar-base-color][]
-   [-ms-scrollbar-darkshadow-color][]
-   [-ms-scrollbar-face-color][]
-   [-ms-scrollbar-highlight-color][]
-   [-ms-scrollbar-shadow-color][]
-   [-ms-scrollbar-track-color][]
-   [-ms-text-align-last][]
-   [-ms-text-autospace][]
-   [-ms-text-justify][]
-   [-ms-text-kashida-space][]
-   [-ms-text-overflow][]
-   [-ms-text-underline-position][]
-   [-ms-word-break][]
-   [-ms-word-wrap][]
-   [-ms-writing-mode][]
-   [-ms-zoom][]

## Sonuç

Tüm bu özellikleri sıraladıktan sonra beni sevindiren üç özellik var.
Birincisi hasLayout'un kaldırılması, ikincisi DATA URI desteğinin
gelmesi ve display:inline-block özelliğinin tam desteğidir.

Ayrıca ie8 sorunları hakkında bilgi edinmek isteyenler kaynaklar
kısmında hata linklerinden gerekli bilgiyi alabilirler. Ben sorunlarla
karşılaştıkça sitemde yayınlayacağım hataları.

Hoşçakalın.

## Kaynaklar

-   http://msdn.microsoft.com/en-us/library/cc304082%28VS.85%29.aspx
-   [http://www.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/][]
-   [http://www.howtocreate.co.uk/ie8.html][]
-   [http://reference.sitepoint.com/css][]
-   [http://www.evotech.net/blog/2009/03/ie8-css-support/][]
-   [http://css-discuss.incutio.com/wiki/IE8#CSS3_selectors][] (ie8 sorunları)
-   http://jhop.me/ie8-bugs (ie8 hataları)
-   [http://www.gtalbot.org/BrowserBugsSection/][]
-   [http://techblog.procurios.nl/k/news/view/33224/14863/Testing-Internet-Explorer-8-CSS3-for-Web-Design.html][] (CSS3 desteği)

  [Her ne kadar uyumluluk kodu ile İnternet Explorer]: http://fatihhayrioglu.com/internet-explorer-8i-7-gibi-yorumla-kodu/
    "Her ne kadar uyumluluk kodu ile İnternet Explorer"
  [hasLayout]: http://haslayout.net/ "hasLayout"
  [Margin çökme]: http://fatihhayrioglu.com/kenar-boslugumargin-cokmesi/
    "Margin çökme"
  [content]: http://reference.sitepoint.com/css/content "content"
  [counter-increment]: http://reference.sitepoint.com/css/counter-increment
    "counter-increment"
  [counter-reset]: http://reference.sitepoint.com/css/counter-reset
    "counter-reset"
  [quotes]: http://reference.sitepoint.com/css/quotes "quotes"
  [caption-side]: http://fatihhayrioglu.com/tablo-ozellikleri/
    "caption-side"
  [border-spacing]: http://fatihhayrioglu.com/tablo-ozellikleri/
    "border-spacing"
  [border-collapse]: http://fatihhayrioglu.com/tablo-ozellikleri/
    "border-collapse"
  [border-style]: http://fatihhayrioglu.com/tablo-ozellikleri/
    "border-style"
  [empty-cells]: http://fatihhayrioglu.com/tablo-ozellikleri/
    "empty-cells"
  [font-weight]: http://fatihhayrioglu.com/font-ozellikleri/
    "font-weight"
  [white-space]: http://fatihhayrioglu.com/css-siniflandirma-liste-ozellikleri/
    "white-space"
  [word-spacing]: http://fatihhayrioglu.com/cssde-metintext-ozellikleri/
    "word-spacing"
  [@page]: http://reference.sitepoint.com/css/pagedmedia "@page"
  [page-break-inside]: http://reference.sitepoint.com/css/page-break-inside
    "page-break-inside"
  [widows]: http://reference.sitepoint.com/css/widows "widows"
  [orphans]: http://reference.sitepoint.com/css/orphans "orphans"
  [Dış hat çizgisi özellikleri]: http://fatihhayrioglu.com/dis-hat-cizgisioutline-ozellikleri/
    "Dış hat çizgisi özellikleri"
  [outline]: http://fatihhayrioglu.com/dis-hat-cizgisioutline-ozellikleri/
    "outline"
  [outline-color]: http://fatihhayrioglu.com/dis-hat-cizgisioutline-ozellikleri/
    "outline-color"
  [outline-style]: http://fatihhayrioglu.com/dis-hat-cizgisioutline-ozellikleri/
    "outline-style"
  [outline-width]: http://fatihhayrioglu.com/dis-hat-cizgisioutline-ozellikleri/
    "outline-width"
  [-ms-accelerator]: http://msdn.microsoft.com/en-us/library/ms530713%28v=VS.85%29.aspx
  [-ms-background-position-x]: http://msdn.microsoft.com/en-us/library/ms530719%28v=VS.85%29.aspx
  [-ms-background-position-y]: http://msdn.microsoft.com/en-us/library/ms530720%28v=VS.85%29.aspx
  [-ms-behavior]: http://msdn.microsoft.com/en-us/library/ms530723%28v=VS.85%29.aspx
  [-ms-filter]: http://msdn.microsoft.com/en-us/library/ms530752%28v=VS.85%29.aspx
  [-ms-ime-mode]: http://msdn.microsoft.com/en-us/library/ms530767%28v=VS.85%29.aspx
  [-ms-layout-flow]: http://msdn.microsoft.com/en-us/library/ms530770%28v=VS.85%29.aspx
  [-ms-layout-grid]: http://msdn.microsoft.com/en-us/library/ms530771%28v=VS.85%29.aspx
  [-ms-layout-grid-char]: http://msdn.microsoft.com/en-us/library/ms530772%28v=VS.85%29.aspx
  [-ms-layout-grid-line]: http://msdn.microsoft.com/en-us/library/ms530773%28v=VS.85%29.aspx
  [-ms-layout-grid-mode]: http://msdn.microsoft.com/en-us/library/ms530774%28v=VS.85%29.aspx
  [-ms-layout-grid-type]: http://msdn.microsoft.com/en-us/library/ms530775%28v=VS.85%29.aspx
  [-ms-overflow-x]: http://msdn.microsoft.com/en-us/library/ms530826%28v=VS.85%29.aspx
  [-ms-overflow-y]: http://msdn.microsoft.com/en-us/library/ms530829%28v=VS.85%29.aspx
  [-ms-scrollbar-3dlight-color]: http://msdn.microsoft.com/en-us/library/ms531153%28v=VS.85%29.aspx
  [-ms-scrollbar-arrow-color]: http://msdn.microsoft.com/en-us/library/ms531154%28v=VS.85%29.aspx
  [-ms-scrollbar-base-color]: http://msdn.microsoft.com/en-us/library/ms531155%28v=VS.85%29.aspx
  [-ms-scrollbar-darkshadow-color]: http://msdn.microsoft.com/en-us/library/ms531156%28v=VS.85%29.aspx
  [-ms-scrollbar-face-color]: http://msdn.microsoft.com/en-us/library/ms531157%28v=VS.85%29.aspx
  [-ms-scrollbar-highlight-color]: http://msdn.microsoft.com/en-us/library/ms531158%28v=VS.85%29.aspx
  [-ms-scrollbar-shadow-color]: http://msdn.microsoft.com/en-us/library/ms531159%28v=VS.85%29.aspx
  [-ms-scrollbar-track-color]: http://msdn.microsoft.com/en-us/library/ms531160%28v=VS.85%29.aspx
  [-ms-text-align-last]: http://msdn.microsoft.com/en-us/library/ms531163%28v=VS.85%29.aspx
  [-ms-text-autospace]: http://msdn.microsoft.com/en-us/library/ms531164%28v=VS.85%29.aspx
  [-ms-text-justify]: http://msdn.microsoft.com/en-us/library/ms531172%28v=VS.85%29.aspx
  [-ms-text-kashida-space]: http://msdn.microsoft.com/en-us/library/ms531173%28v=VS.85%29.aspx
  [-ms-text-overflow]: http://msdn.microsoft.com/en-us/library/ms531174%28v=VS.85%29.aspx
  [-ms-text-underline-position]: http://msdn.microsoft.com/en-us/library/ms531176%28v=VS.85%29.aspx
  [-ms-word-break]: http://msdn.microsoft.com/en-us/library/ms531184%28v=VS.85%29.aspx
  [-ms-word-wrap]: http://msdn.microsoft.com/en-us/library/ms531186%28v=VS.85%29.aspx
  [-ms-writing-mode]: http://msdn.microsoft.com/en-us/library/ms531187%28v=VS.85%29.aspx
  [-ms-zoom]: http://msdn.microsoft.com/en-us/library/ms531189%28v=VS.85%29.aspx
  [http://www.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/]: http://www.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/
    "http://www.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/"
  [http://www.howtocreate.co.uk/ie8.html]: http://www.howtocreate.co.uk/ie8.html
    "http://www.howtocreate.co.uk/ie8.html"
  [http://reference.sitepoint.com/css]: http://reference.sitepoint.com/css
    "http://reference.sitepoint.com/css"
  [http://www.evotech.net/blog/2009/03/ie8-css-support/]: http://www.evotech.net/blog/2009/03/ie8-css-support/
    "http://www.evotech.net/blog/2009/03/ie8-css-support/"
  [http://css-discuss.incutio.com/wiki/IE8#CSS3_selectors]: http://css-discuss.incutio.com/wiki/IE8#CSS3_selectors
    "http://css-discuss.incutio.com/wiki/IE8#CSS3_selectors"
  [http://www.gtalbot.org/BrowserBugsSection/]: http://www.gtalbot.org/BrowserBugsSection/
    "http://www.gtalbot.org/BrowserBugsSection/"
  [http://techblog.procurios.nl/k/news/view/33224/14863/Testing-Internet-Explorer-8-CSS3-for-Web-Design.html]: http://techblog.procurios.nl/k/news/view/33224/14863/Testing-Internet-Explorer-8-CSS3-for-Web-Design.html
    "http://techblog.procurios.nl/k/news/view/33224/14863/Testing-Internet-Explorer-8-CSS3-for-Web-Design.html"
