---
layout: post
title: Tüm tarayıcılar için CSS Düzeltmeleri(Hack)
Slug: tum-tarayicilar-icin-css-duzeltmelerihack
Date: 2008-12-03 00:25
Category: CSS, XHTML
tags: [CSS, css düzeltmeleri, düzeltme, hack, ipucu, kod-gizlemek]
---

<div style="border:1px solid #f00; font-weight:bold; padding:20px; background-color:#ffd2d3 ">
Bu konu devamlı güncelleniyor. Ben sn yenilikleri
[http://paulirish.com/2009/browser-specific-css-hacks/][] sitesinden
takip ediyorum. Sizede öneriyorum

</div>
CSS ile web sayfası kodlarken bizi en çok zorlayan konulardan biri daha
önceki yazılarımda bahsettiğim gibi farklı tarayıcı sürümlerine göre kod
yazmaktır. CSS ile kod yazarken bazı durumlarda kodumuz bir tarayıcı
grubunda düzgün görünürken başka bir tarayıcı grubunda farklı
görüntülenir, tabi biz yaptığımız sitelerin kullanıcılar tarafından
tarayıcısı ne olursa olsun aynı görünmesini isteriz. Bu gibi durumlarda
kullandığımız yöntem aslında çok basit bir tekniktir. Hangi tarayıcıda
farklı görünüyorsa onun için farklı kod yazarız ve bunu diğer
tarayıcıların görmeyeceği kod bloğu içinde yazarız.

[CSS Derslerindeki][] CSS Sorunları ve Çözüm Önerileri kısmındaki birçok
yöntemin ana mantığıda budur.

Farklı tarayıcılar için düzenleme(hack) yazarken genel anlamda iki
farklı yöntem kullanırız. Farklı css dosyaları hazırlayıp bunları
eklerken şartlı yorumlar yardımı ile farklı tarayıcılar için farklı css
kodlarını gösteririz, ikinci yöntem ise kod içerisinde o tarayıcının
gördüğü kod bloğu içinde ona göre kod yazarız. Burada birinci
yöntemi([IE'de Hata Ayıklamak için şartlı Yorumlar Kullanmak][]) daha
önce anlatmıştık. Bu yazımızda kod içindeki css düzeltmelerinden
bahsedeceğiz.

CSS kodu içinde farklı tarayıcılar için farklı kod yazmanın en kolay
yolu, tarayıcılara özel seçiciler içine kod yazmaktır.



**Tarayıcılara Özel Seçiciler**

IE 6 ve altı

	:::css
	* html {}

IE 7 ve altı

	:::css
	*:first-child+html {} * html{}

sadece IE 7 için

	:::css
	*:first-child+html {}

IE 7 ve yeni nesil tarayıcılar için

	:::css
	html>body {}

Yalnız yeni nesil tarayıcılar için (IE 7 dışında)

	:::css
	html>/**/body {}

sadece IE 8 için

	:::css
	.test {
		property:value;
		property: value9;
		*property: value;
	}

Opera 9 ve altı sürümler için

	:::css
	html:first-child {}

Safari

	:::css
	html[xmlns*=""] body:last-child{}

Google Chrome and Safari 3.1

	:::css
	body:nth-of-type(1){}

Firefox 2

	:::css
	.foo, x:-moz-any-link { }

FireFox 3

	:::css
	.foo, x:-moz-any-link, x:default {}

Firefox 2 ve 3 için yazdığımız kodu ie 7 de yorumluyor bunu engellemek
için (Sonradan eklenmiştir.)

	:::css
	.foo, x:-moz-any-link { }
	.foo, x:-moz-any-link, x:default { }
	*:first-child+html .foo{}/*ie7 icin normali yazin*/

Sadece Firefox 3

	:::css
	html>;/**/body .foo, x:-moz-any-link, x:default { }

Burada önemli olan her tarayıcı farklı görünümünde bu metoda başvurmamak
gerekir, çözümü olmayan sorunlarla karşılaştığımızda bu kodları
kullanmalıyız.

Bu kodları kullanma gereksinim genelde Internet Explorer 6 ve 7 için
oluyor. Ama nadirende olsa diğer tarayıcıların düzeltmeleride lazım
oluyor. Bir örnek yapalım

	:::css
	/* Firefox 1 */
	.ozelSecici, x:-moz-any-link {
	    background-color:#ffd560;
	}
	/* Firefox 2 */
	.ozelSecici, x:-moz-any-link {
	    background-color:#ab1b0b;
	}
	/* Firefox 3 */
	.ozelSecici, x:-moz-any-link, x:default {
	    background-color:#e6831f;
	}
	/* Google Chrome and Safari 3.1 */
	body:nth-of-type(1) .ozelSecici{
	   background-color:#e6f0fa;
	}
	/* Opera 9 ve altı */
	html:first-child .ozelSecici{
	    background-color:#a91614;
	}
	/* ie7 icin */
	*:first-child+html .ozelSecici{
	    background-color:#0098de;
	}
	/* ie 7 ve alt sürümler icin */
	*:first-child+html .ozelSecici{
	    background-color:#d4d0c8;
	}
	* html .ozelSecici{
	    background-color:#d4d0c8;
	}
	/* ie6 ve alti */
	* html .ozelSecici{
	    background-color:#996666;
	}

HTML kodu

	:::html
	<p class="ozelSecici">Tarayıcı</p>

Örneği görmek için [tıklayınız.][]

Aynı XHTML kodu için aşağıdaki gibi farklı tarayıcılarda farklı
sonuçları alırız.

![][100]

Sayfa Google Chrome 0.3.154.9, Safari 3.1.2, Firefox 3.0.4/2.0.0.14,
Internet Explorer 7/6/5.5, Opera 9.6 ile test edilmiştir.

-   [http://www.webdevout.net/css-hacks][] (*****)
-   [http://www.javascriptkit.com/dhtmltutors/csshacks2.shtml][]
-   [http://vikaskhera.wordpress.com/2008/08/02/css-hacks-browser-specific-selectors/][]
    (****)
-   http://centricle.com/ref/css/filters
-   [http://www.siberkultur.com/?q=css-hackleri][] (***)
-   [http://www.sitepoint.com/article/browser-specific-css-hacks/][]
    (***) sürümler eski
-   [http://www.artypapers.com/csshelppile/category.php?2][]
-   [http://rafael.adm.br/css_browser_selector/][]
-   [http://css-discuss.incutio.com/?page=CssHack][]
-   [http://snipplr.com/view/7043/firefox-3-css-hack/][]
-   [http://pornel.net/firefoxhack][]
-   [http://www.nealgrosskopf.com/tech/thread.asp?pid=20][]
-   [http://snipplr.com/search.php?q=CSS+hack&btnsearch=go][]
-   [http://fu2k.org/alex/css/hacks/fuzzyspecificity][]
-   [http://dimox.net/personal-css-hacks-for-ie6-ie7-ie8/][] (ie6, ie7,
    ie8 ve ie9)

  [http://paulirish.com/2009/browser-specific-css-hacks/]: http://paulirish.com/2009/browser-specific-css-hacks/
  [CSS Derslerindeki]: http://www.fatihhayrioglu.com/css-dersleri/
    "CSS Derslerindeki"
  [IE'de Hata Ayıklamak için şartlı Yorumlar Kullanmak]: http://www.fatihhayrioglu.com/iede-hata-ayiklamak-icin-sartli-yorumlar-kullanmak/
    "IE’de Hata Ayıklamak için şartlı Yorumlar Kullanmak"
  [tıklayınız.]: /dokumanlar/css_duzeltme.html
    "tıklayınız."
  [100]: /images/tarayici_tes.jpg
  [http://www.webdevout.net/css-hacks]: http://www.webdevout.net/css-hacks
    "http://www.webdevout.net/css-hacks"
  [http://www.javascriptkit.com/dhtmltutors/csshacks2.shtml]: http://www.javascriptkit.com/dhtmltutors/csshacks2.shtml
    "http://www.javascriptkit.com/dhtmltutors/csshacks2.shtml"
  [http://vikaskhera.wordpress.com/2008/08/02/css-hacks-browser-specific-selectors/]: http://vikaskhera.wordpress.com/2008/08/02/css-hacks-browser-specific-selectors/
    "http://vikaskhera.wordpress.com/2008/08/02/css-hacks-browser-specific-selectors/"
  [http://www.siberkultur.com/?q=css-hackleri]: http://www.siberkultur.com/?q=css-hackleri
    "http://www.siberkultur.com/?q=css-hackleri"
  [http://www.sitepoint.com/article/browser-specific-css-hacks/]: http://www.sitepoint.com/article/browser-specific-css-hacks/
    "http://www.sitepoint.com/article/browser-specific-css-hacks/"
  [http://www.artypapers.com/csshelppile/category.php?2]: http://www.artypapers.com/csshelppile/category.php?2
    "http://www.artypapers.com/csshelppile/category.php?2"
  [http://rafael.adm.br/css_browser_selector/]: http://rafael.adm.br/css_browser_selector/
    "http://rafael.adm.br/css_browser_selector/"
  [http://css-discuss.incutio.com/?page=CssHack]: http://css-discuss.incutio.com/?page=CssHack
    "http://css-discuss.incutio.com/?page=CssHack"
  [http://snipplr.com/view/7043/firefox-3-css-hack/]: http://snipplr.com/view/7043/firefox-3-css-hack/
    "http://snipplr.com/view/7043/firefox-3-css-hack/"
  [http://pornel.net/firefoxhack]: http://pornel.net/firefoxhack
    "http://pornel.net/firefoxhack"
  [http://www.nealgrosskopf.com/tech/thread.asp?pid=20]: http://www.nealgrosskopf.com/tech/thread.asp?pid=20
    "http://www.nealgrosskopf.com/tech/thread.asp?pid=20"
  [http://snipplr.com/search.php?q=CSS+hack&btnsearch=go]: http://snipplr.com/search.php?q=CSS+hack&btnsearch=go
    "http://snipplr.com/search.php?q=CSS+hack&btnsearch=go"
  [http://fu2k.org/alex/css/hacks/fuzzyspecificity]: http://fu2k.org/alex/css/hacks/fuzzyspecificity
    "http://fu2k.org/alex/css/hacks/fuzzyspecificity"
  [http://dimox.net/personal-css-hacks-for-ie6-ie7-ie8/]: http://dimox.net/personal-css-hacks-for-ie6-ie7-ie8/
