---
layout: post
title: HTML Dokümanında Javascript Dosyalarını Nereye Koymalıyız?
Date: 2011-03-24 00:09
Category: Javascript, XHTML
tags: [defer, hız, javascript dosylarının yeri, paralel yükleme, performans]
---

## Javascript’i web sitelerine eklemek

Javascript dosyaları bir web sitesine iki şekilde eklenir. Birincisi
satıriçi(inline), ikincisi ayrı bir javascript dosyası hazırlayıp harici
olarak eklemek.

İlk javascript’i Hakkı Öcal’ın javascript kitapçığından öğrenmeye
başlamıştım.

İlk örnek şöyle idi;

{% highlight html %}
<html>
<head>
<title>Merhaba Dünya!</title>
	<script>
		function merhaba() //merhaba isimli fonksiyonu deklare ediyoruz
		{ //bu, fonksiyonun başlama işareti
			alert ("Merhaba Dünya!") //fonksiyonun komutu ve komutun gerektirdiği metin
		} //bu fonksiyonun bitme işareti
	</script>
</head>
<body>
	<b>Merhaba Dünya</b><br>
	<form>
		<button onclick=merhaba()>TIKLAYINI!</button>
	</form>
</body>
<html>
{% endhighlight %}

Bu satıriçi kodlamaya örnek olarak verilebilir.

Aynı kodu ayrı bir javascript dosyası olarak hazırlayıp .js uzantısı ile
kaydedersek ve bunu html dokümana eklersek buda harici bir javascript
dosyası ekleme kısmına girer.

{% highlight javascript %}
function merhaba() {
	alert ("Merhaba Dünya! Sene 2011")
}
{% endhighlight %}


Bu dosyayı merhaba.js olarak kaydedip, sonra

{% highlight html %}
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1254">
<title>Merhaba Dünya!</title>
<script src="merhaba.js">
</script>
</head>
<bodyY>
	<b>Merhaba Dünya</b><br>
	<form>
		<input type="submit" name="button1" value="TIKLAYIN!" onclick="merhaba()">
	</form>
</body>
</html>
{% endhighlight %}

Şeklinde HTML dokümanına ekleriz.

Yukarıda kullandığımız her iki yöntem ile de aynı sonucu alırız. Harici
javascript dosyası ile eklemenin avantajları vardır;

-   Bir dosya ile tüm sitedeki javascript dosyalarını idare ederiz ve
    güncellemeleri tek dosya ile daha kolay yaparız.
-   Sayfa daha hızlı yüklenir, tek dosya ön belleğe alınınca diğer
    sayfalarda tekrar tekrar yüklenmediği için sayfalar daha hızlı
    açılır.

Javascript o günden bu yana daha fazla önem kazandı ve artık javascript
kodumuzu en iyi hale getirmek için daha çok zaman harcıyoruz ve bize
zaman kazandıracak her durumu inceleyip uyguluyoruz.

## HTML dokümanında javascript dosyasını nereye eklemeliyiz?

Web sitelerinin en iyi hale getirmek için çeşitli araçlar ile sitemizi
test ederiz. Bunlardan biri Firefox’ın YSlow eklentisidir. YSlow
eklentisi ile web sitemizi test ettiğimizde javascript dosyalarımızı
html dokümanının sonuna eklememizi öneren bir başlık ile karşılaşırız,
burada bu başlığı biraz inceleyeceğiz.

CSS dosyalarının <head\> içine konmasının öneren YSlow Javascript
dosyalarının HTML dokümanının sonuna(</body\>’nin hemen öncesine)
konmasını öneriyor. Burada bir çelişki var gibi görünüyor. Buradaki
mantık şudur; javascript blokları <head\> içine konduğu zaman sayfa ilk
açıldığında bu javascript blokları yüklenir ve işlenir. Javascript
dosyası yüklenip, işlendikten sonra diğer sayfa üyeleri yüklenir.
Javascript dosyası yüklenip işlenmesi bitene kadar sayfa boş bir sayfa
olarak görünür, tabi buda istenen bir durum değildir.

{% highlight html %}
<html>
<head>
<title>Javascript yükleme yeri</title>
<script type="text/javascript" src="script1.js"></script>
<script type="text/javascript" src="script2.js"></script>
<link rel="stylesheet" type="text/css" href="stil.css">
</head>
<body>
	<p>İçerik Burada</p>
</body>
</html>
{% endhighlight %}

Sayfa başına konan javascript dosyalarının yüklenme zamanı aşağıdaki
grafikte görüldüğü gibidir

![][100]

Javascript dosyalarını html dokümanın sonuna koyunca sayfa öğeleri
tamamen yüklenecek ve sonra javascript dosyaları yüklenecek ve
işlenecektir. Böylece ziyaretçi sayfayı açtığı anda görsel öğeler
yüklenecek ve ziyaretçi sayfa içeriğini görecektir ve sonra javascript
yüklenecek ve işlenecektir.

**Paralel Yükleme**

Bir diğer problem ise javascript dosyaları paralel yüklemeyi bloklar.
Paralel yükelemeyi şöyle açıklayabiliriz; web sitemiz yüklenirken her
öğe tek tek yüklemek yerine iki ve daha fazla yükleme, yani paralel
olarak yükleme yapabiliyoruz. [HTTP/1.1 şartnamesinde][] her barındırma
servisinden(hositng) iki paralel yüklemeye izin verir, buradan şunuda
anlayabiliriz ki farklı barındırma servislerinden ikiden fazla yükleme
yapabiliriz. Ancak script dosyaları yüklenirken pararlel yüklemeye izin
vermez. Bu durumu göz önünde bulundurarak script dosyalarımızı dokümanın
sonuna koyarak sayfamızın daha hızlı yüklenmesini sağlayabiliriz.

**Uygulanamayan Durumlar**

Bazı durumlarda script dosyasını dokümanın altına koymamız mümkün olmaz.
Örneğin script içinde **documen.write** ile doküman içine bir şey
eklememiz gerektiğinde. Ancak bu durumlar içinde bazı çözümlerin olduğu
aklımızın bir köşesinde kalsın.

**defer Özelliği**

HTML4 ile birlikte <script\> etiketi içine defer özelliği eklenmiştir.
**defer** özelliği tanımlanmış script dosyaları hemen uygulanmayıp tüm
sayfa yüklendikten sonra yüklenir ve çalıştırılır. Bu özelliği İnternet
Explorer 4+ ve Firefox3.5+ desteklemektedir.

{% highlight html %}
<script type="text/javascript" src="script1.js" defer></script>
{% endhighlight %}

şeklinde kullanılır. Bu dosyayı html dokümanının istediğimiz yerine
koyabiliriz. Tüm tarayıcıların desteklmemesi kullanımı konusunda bizi
biraz düşündürüyor.

## Sonuç

Sonuç olarak javascript dosyalarımızı html dokümanımız sonuna koymak web
sitelerimizin daha hızlı açılmasını sağlayacak bir yöntemdir.

## Kaynak

-   http://developer.yahoo.com/blogs/ydn/posts/2007/07/high_performanc_5/
-   [http://stackoverflow.com/questions/143486/unobtrusive-javascript-script-at-the-top-or-the-bottom-of-the-html-code][]
-   [http://robertnyman.com/2008/04/23/where-to-include-javascript-files-in-a-document/][]
-   [http://blog.asp-software.org/advanced-website-optimization-making-your-site-faster/][]
-   [http://www.quirksmode.org/js/placejs.html][]
-   [http://www.stevesouders.com/blog/2008/12/27/coupling-async-scripts/][]
-   yuiblog.com/blog/2007/04/11/performance-research-part-4/

  [100]: https://lh3.googleusercontent.com/gSZsDGo9nsWt4gD1hgKwiJo2FITV5oh_x706nZ2wKUapQWLl70O6P7NofpZvXVOTxIJKOW2GiPabJKNZVbHCIgcp3CAA9eE7kpdGnNKP0sYqp6EcmNc
  [HTTP/1.1 şartnamesinde]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4
  [http://stackoverflow.com/questions/143486/unobtrusive-javascript-script-at-the-top-or-the-bottom-of-the-html-code]: http://stackoverflow.com/questions/143486/unobtrusive-javascript-script-at-the-top-or-the-bottom-of-the-html-code
  [http://robertnyman.com/2008/04/23/where-to-include-javascript-files-in-a-document/]: http://robertnyman.com/2008/04/23/where-to-include-javascript-files-in-a-document/
  [http://blog.asp-software.org/advanced-website-optimization-making-your-site-faster/]: http://blog.asp-software.org/advanced-website-optimization-making-your-site-faster/
  [http://www.quirksmode.org/js/placejs.html]: http://www.quirksmode.org/js/placejs.html
  [http://www.stevesouders.com/blog/2008/12/27/coupling-async-scripts/]: http://www.stevesouders.com/blog/2008/12/27/coupling-async-scripts/
