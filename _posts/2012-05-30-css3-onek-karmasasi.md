---
layout: post
title: CSS3 önek Karmaşası
Date: 2012-05-30 09:06
Category: CSS
tags: [-moz-, -ms-, -o-, css3, less, önek, sass, WebKit]
---

CSS3’ün güzel özelliklerini yavaş yavaş kullanmaya başladık. CSS3’ün
yeniliklerinin yanında önek karmaşası gibi sorunlarımızda var. CSS3’de
kodlarımı yazarken farklı tarayıcılar için önek ile kullanmak
durumundayız.

Farklı Tarayıcı önekleri;

-   Chrome ve Safari (-webkit-)
-   Firefox (-moz-)
-   Opera (-o-)
-   Internet Explorer (-ms-)

Bu sorunun nedeni CSS3 özelliklerinin hala geliştirilmekte olması ve
tarayıcıların geliştirme aşamasında bu özellikleri daha standartlaşmadan
kullanmaya ve kullanıcılara kullandırtmaya başlamasından
kaynaklanmaktadır. Bu durumu başlangıçta(belki hala) sorun olarak
tanımlamasak da çok yoğun kullanımında bir sorun olarak karşımıza
çıktığı kesin.

[Firefox][] ve [İnternet Explorer9][] bu konuda tam onaylanmış
özellikler için öneklerden vazgeçip standart kullanımı geçiş yaparak bir
nebze olsun sorunu gideriyorlar.

Bir örnek vererek işin ne kadar kötü göründüğüne bakabiliriz. CSS renk
geçişi özelliğini tanımlamak için bir kod yazmamız gerektiğinde
aşağıdaki gibi bir kod bloğunu eklememiz gerekiyor.

{% highlight css %}
background: #1e5799; /* Old browsers */
background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(50%,#2989d8), color-stop(51%,#207cca), color-stop(100%,#7db9e8)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* IE10+ */
background: linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
{% endhighlight %}

Şeklinde bir renk geçişi tanımı göz korkutuyor. Bu kod aslında tek satır

{% highlight css %}
background: linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
{% endhighlight %}

Ancak farklı tarayıcılar için kod yazınca yukarıdaki hali alıyor.

Burada gördüğümüz ve genelde önek sorunları;

-   Çok fazla kod mevcut kodumuzun yığın halini almasına neden oluyor,
-   Düzenlemesi zorlaşıyor,
-   Farklı tarayıcılar için üretilen önekler nedeni ile kod çoğalıyor ve
    performansı düşürüyor.

gibi sorunlara neden oluyor.

## Önek Sıralaması

Burada yazılan öneklerde sıralamanın önemi vardır. Standart dışı önekler
önce yazılır, standart önek sona yazılır. Bunun tersi durumlarda bazen
sorun yaşayabilirsiniz. Standardın sona yazılmasındaki mantık; farklı
tarayıcılar için yazılan önek sonradan kaldırılabilir ve kaldırıldığında
sonradan gelen standart tanım daha baskın olması istenir.  

Standart dışı öneklerde ilk -webkit önekinin yazılmasının kesin olamasa
da bir avantajı olabilir.

-   -webkit-
-   -moz-
-   -o-
-   -ms-
-   standart

şeklinde bir sıralamayı uygulayabiliriz.

Önek karmaşasını çözmek için bir iki yöntem var. Bunları burada basitçe
inceleyeceğiz.

## Çevrimiçi Araçlar İle Kod Üretmek

Çözüm önerilerinden birisi kodlamamızı standart tanımlar ile yapıp en
son kodu çevrimiçi araçlar yardımı ile

-   http://cssprefixer.appspot.com/
-   http://prefixmycss.com/
-   [http://prefixr.com/][]

tüm tarayıcılar için üretmek olabilir.

[prefixr.com][]’in farklı editörler için api çözümü de var
[http://www.prefixr.com/api/usage/][prefixr.com]  sitesinden kendi
editörünüze uygun apiyi yükleyerek direk editörünüzde(kısayol tuşları
yardımı ile) bu işi yapabiliyorsunuz.

## Dinamik Olarak(SASS ve LESS) Önek Sorununa Çözüm Üretmek

Öneklere SASS ve LESS ile çözümler üretebiliriz. Bu gibi dinamik yapılır
CSS üreten yapılarda başlangıçta bir tanım yapılıp daha sonraki
tanımlarımızı bu tanım üzerinden yaparak önek sorununu halledebiliriz.

**SASS**

{% highlight css %}
@mixin border-radius($values) {
    -webkit-border-radius: $values;
    -moz-border-radius: $values;
    border-radius: $values;
}

div {
	@include border-radius(10px);
}
{% endhighlight %}

ve

{% highlight css %}
.border-radius(@values) {
	-webkit-border-radius: @values;
	-moz-border-radius: @values;
	border-radius: @values;
}

div {
	.border-radius(10px);
}
{% endhighlight %}

sonuç olarak üretilen CSS

{% highlight css %}
div {
 	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	border-radius: 10px;
}
{% endhighlight %}

LESS ve SASS gibi yapıları sitenizde kullanıyorsanız sorunun çözümü için
güzel bir seçenek bunlar.

**-prefix-free**

Ayrıca yine dinamik yapı içine koyabileceğimiz free-prefix yöntemide
mevcut. Javascript yardımı ile çözüm üretilen bu yöntemde incelemeye
değer. Ben bunun için js eklemeyi pek mantıklı bulmasam da, yerine
kullanılabilir diye düşünüyorum.

## Sonuç

Sonuç olarak belli bir süre bizim için sıkıntı oluşturabilecek bir sorun
olarak görünüyor. LESS ve SASS ile olan çözümler mantıklı geliyor bana.
Tabi hepsinin standardı desteklemesi güzel olur :D

Yakın zamanda tarayıcı temsilcileri bu konu hakkında bir toplantı
düzenleyerek bir çözüm yolu bulmaya çalışmışlar. 7 çeşit çözüm önerisi
sunulan toplantıdan şimdilik bir çözüm çıkmamış gibi görünmüyor. En
azından böyle bir sorunu kabul edip çözüm üretmek için toplanılması da
bir ilerlemedir.

Toplantıdan çıkan en ciddi çözüm önerisi -webkit- önekinin tüm
tarayıcılar tarafından test öneki olarak kabul görmesi isteği. Opera bu
konuda bir adım dahi atmış diyorlar. -webkit- in mobil araçlardaki
yaygınlığı ve CSS3 özelliklerinin birçoğunu çıkardıklarını düşünürsek
mantıklı gibi.

Zamanla göreceği bakalım neler olacak.

## Kaynaklar

-   [http://www.css3.info/why-and-when-browsers-prefix-css3-features/][]
-   http://www.webresourcesdepot.com/instantly-prefix-css3-code-prefixmycss/
-   [http://reference.sitepoint.com/css/vendorspecific][]
-   [http://www.quirksmode.org/blog/archives/2010/03/css_vendor_pref.html][]
-   [http://www.alistapart.com/articles/prefix-or-posthack/][]
-   [http://snook.ca/archives/html_and_css/not-supported][]
-   http://css-tricks.com/7361-ordering-css3-properties
-   [http://coding.smashingmagazine.com/2011/10/12/prefixfree-break-free-from-css-prefix-hell/][] (çözüm)
-   [http://www.sitepoint.com/w3c-css-webkit-prefix-crisis][]
-   [http://lea.verou.me/2011/11/vendor-prefixes-have-failed-whats-next/][]
-   http://prefixmycss.com/
-   [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-never-type-a-vendor-prefix-again/][] (less ile çözüm)
-   [http://www.alistapart.com/articles/the-vendor-prefix-predicament-alas-eric-meyer-interviews-tantek-celik/][]
-   [http://www.sitepoint.com/css3-vendor-prefix-crisis-solutions/][]
-   [http://annevankesteren.nl/2012/04/prefixes][] (opera webkit öneklerini kabul edecek)
-   [http://peter.sh/experiments/vendor-prefixed-css-property-overview/][] (tüm önek listesi)
-   [http://leaverou.github.com/prefixfree/][]
-   [http://kilianvalkhof.com/2010/css-xhtml/css-vendor-prefixes-considered-important/][]
-   [http://hsivonen.iki.fi/vendor-prefixes/][]
-   [http://net.tutsplus.com/articles/editorials/do-you-exclusively-use-webkit-prefixes/][]
-   [http://www.glazman.org/weblog/dotclear/index.php?post/2011/11/16/CSS-vendor-prefixes-an-answer-to-Henri-Sivonen][]
-   [http://christianheilmann.com/2012/02/09/now-vendor-prefixes-have-become-a-problem-want-to-help-fix-it/][]
-   [http://net.tutsplus.com/tutorials/html-css-techniques/sass-vs-less-vs-stylus-a-preprocessor-shootout/][]
-   [http://www.sitepoint.com/12-css3-vendor-prefix-crisis-myths/](http://www.sitepoint.com/12-css3-vendor-prefix-crisis-myths/)


  [Firefox]: http://hacks.mozilla.org/2010/09/firefox-4-recent-changes-in-firefox/
  [İnternet Explorer9]: http://msdn.microsoft.com/en-us/ie/ff468705.aspx
  [http://prefixr.com/]: http://prefixr.com/
  [prefixr.com]: http://www.prefixr.com/api/usage/
  [http://www.css3.info/why-and-when-browsers-prefix-css3-features/]: http://www.css3.info/why-and-when-browsers-prefix-css3-features/
  [http://reference.sitepoint.com/css/vendorspecific]: http://reference.sitepoint.com/css/vendorspecific
  [http://www.quirksmode.org/blog/archives/2010/03/css_vendor_pref.html]: http://www.quirksmode.org/blog/archives/2010/03/css_vendor_pref.html
  [http://www.alistapart.com/articles/prefix-or-posthack/]: http://www.alistapart.com/articles/prefix-or-posthack/
  [http://snook.ca/archives/html_and_css/not-supported]: http://snook.ca/archives/html_and_css/not-supported
  [http://coding.smashingmagazine.com/2011/10/12/prefixfree-break-free-from-css-prefix-hell/]: http://coding.smashingmagazine.com/2011/10/12/prefixfree-break-free-from-css-prefix-hell/
  [http://www.sitepoint.com/w3c-css-webkit-prefix-crisis]: http://www.sitepoint.com/w3c-css-webkit-prefix-crisis
  [http://lea.verou.me/2011/11/vendor-prefixes-have-failed-whats-next/]: http://lea.verou.me/2011/11/vendor-prefixes-have-failed-whats-next/
  [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-never-type-a-vendor-prefix-again/]: http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-never-type-a-vendor-prefix-again/
  [http://www.alistapart.com/articles/the-vendor-prefix-predicament-alas-eric-meyer-interviews-tantek-celik/]: http://www.alistapart.com/articles/the-vendor-prefix-predicament-alas-eric-meyer-interviews-tantek-celik/
  [http://www.sitepoint.com/css3-vendor-prefix-crisis-solutions/]: http://www.sitepoint.com/css3-vendor-prefix-crisis-solutions/#fbid=qIRziNGN-f6
  [http://annevankesteren.nl/2012/04/prefixes]: http://annevankesteren.nl/2012/04/prefixes
  [http://peter.sh/experiments/vendor-prefixed-css-property-overview/]: http://peter.sh/experiments/vendor-prefixed-css-property-overview/
  [http://leaverou.github.com/prefixfree/]: http://leaverou.github.com/prefixfree/
  [http://kilianvalkhof.com/2010/css-xhtml/css-vendor-prefixes-considered-important/]: http://kilianvalkhof.com/2010/css-xhtml/css-vendor-prefixes-considered-important/
  [http://hsivonen.iki.fi/vendor-prefixes/]: http://hsivonen.iki.fi/vendor-prefixes/
  [http://net.tutsplus.com/articles/editorials/do-you-exclusively-use-webkit-prefixes/]: http://net.tutsplus.com/articles/editorials/do-you-exclusively-use-webkit-prefixes/
  [http://www.glazman.org/weblog/dotclear/index.php?post/2011/11/16/CSS-vendor-prefixes-an-answer-to-Henri-Sivonen]: http://www.glazman.org/weblog/dotclear/index.php?post/2011/11/16/CSS-vendor-prefixes-an-answer-to-Henri-Sivonen
  [http://christianheilmann.com/2012/02/09/now-vendor-prefixes-have-become-a-problem-want-to-help-fix-it/]: http://christianheilmann.com/2012/02/09/now-vendor-prefixes-have-become-a-problem-want-to-help-fix-it/
  [http://net.tutsplus.com/tutorials/html-css-techniques/sass-vs-less-vs-stylus-a-preprocessor-shootout/]: http://net.tutsplus.com/tutorials/html-css-techniques/sass-vs-less-vs-stylus-a-preprocessor-shootout/
