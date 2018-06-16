---
layout: post
title: Alıntı&#58; blockquote ve q etiketleri
Date: 2007-11-12 11:52
Category: CSS, Web Standartları, XHTML
tags: Alıntı, blockquote, CSS, quotes, Web Standartları, XHTML
---

W3C bir çok durum için çeşitli etiketler üretmiştir ve bu etiketlerin
kullanılmasını önerir. Alıntıda böyle bir etikete
sahiptir(<blockquote\> ve <q\>). Ancak kod yazarlarını bu etiketleri
kullanmaktan alı koyan bu etiketlerin başlangıçtaki görünümünün çok
güzel olmamasıdır, tabi farklı etiketlerle uğraşmak istemeyenlerde
vardır. İşte bizde burada hem w3c'nin dediğini yapıp hemde güzel
görünümlü ve kullanışlı alıntılar yapacağımızı anlatacağız.

Alıntı etiketlerini(<blockquote\> ve <q\>) diğer sitelerden,
yazarlardan ve yayınlardan alıntı yapmak için kullanırız.

W3C <blockquote\> elementini kullanımını önermektedir. Bu kodlama
bizlere ayrıcalık tanıyacaktır ve tekil bir etiketin kullanım
avantajlarını bize sunacaktır.

Herhangi bir stil tanımlaması yapmasak bile <blockquote\> normal
içeriğe göre daha içerden başlayacaktır. Bu küçük bir ayrıntıdır, ancak
içerikten ayırmak için yeterlidir.

Sizler burada alıntıların kullanımı göstermeden önce <cite\>
etiketinden bahsedeceğiz.

Bu zamanı geçmiş bir etiket değildir. Bu kod alıntıları aldığımız
siteleri belirtmek için kullanacağımız bir özelliktir. Bu kodu
eklediğinizde birçok tarayıcı bunun farkına varmayacaktır bile. Ancak
gerek CSS ve gerekse betikler ile bu kodu kullanabiliriz mesela
indeksleme yaparken kullanabilriz. Bu bilgi bize alıntı hakkında ileride
bilgi vermek için kullanılabilir.

## Kodlama içinde Alıntı kullanmak

Sizlere kısaca kod içerisinde alıntı kullanımını anlatacağız. Eğer cümle
için bir alıntı yaptı iseniz, **<q\>** etiketini kullanabilirsiniz.

	:::html
	<p>Bunu Mevlana'nın bir sözü ile destekleyelim <q>Nice insanlar gördüm, üzerinde elbisesi yok. Nice elbiseler gördüm, içinde insan yok.</q> ve <q>Ehil olmayanlara sabretmek ehil olanları parlatır.</q> sözleri bize yol gösterir.</p>

Yeni nesil tarayıcılar bu kodu aşağıdaki gibi gösterecektir.

![Örnek 2][]

Bu kodu IE normal içerik gibi yorumlayacaktır. IE için farklı stil
tanımı yapmamız gerekiyor.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Alıntı Örneği</title>
	<style>
	/* IE icin */
	q {
	font-style:italic;
	}
	/* Safari ve Firefox icin */
	html:not([dummy]) q {
	font-style:normal;
	}
	</style>
	</head>
	<body>
	<p>Bunu Mevlana'nın bir sözü ile destekleyelim <q>Nice insanlar gördüm, üzerinde elbisesi yok. Nice elbiseler gördüm, içinde insan yok.</q> ve
	<q>Ehil olmayanlara sabretmek ehil olanları parlatır.</q> sözleri bize yol gösterir. </p>
	</body>
	</html>

![Örnek IE][]

Böylelikle Internet Explorer da kodumuz farklı görünecektir.

Bu etiketin birde dil özelliği vardır.

	:::html
	<p>I said, <q lang="en-us">Herman, do you like bubblegum? </q> And he said, <q lang="en-us">Yes, the kind that comes with a comic.</q></p>

Tüm dil kodlarını öğrenmek için [www.w3.org/TR/html4/struct/dirlang.html#langcodes][] adresini ziyaret ediniz.

## Alıntı ve **<blockquote\>** etiketi

Örnek bir kod yazalım:

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Alıntı Örneği</title>
	</head>
	<body>
	<blockquote>Sevgide güneş gibi ol, dostluk ve kardeşlikte akarsu gibi ol, hataları örtmede gece gibi ol, tevazuda toprak gibi ol, öfkede ölü gibi
	ol, her ne olursan ol, ya olduğun gibi görün, ya göründüğün gibi ol.</blockquote>
	<cite>Mevla'na Celaleddin-i Rumi</cite>
	</body>
	</html>

![Alıntı Örnek 1][]

Görüntü istediğimiz gibi olmaya bilir. Biraz görüntüyü düzeltelim.
Burada üç adet zemin resim ile görüntüyü düzeltebiliriz.

![Alıntı Üst Zemin Resmi][]

Alıntı Üst Zemin Resmi

![Alıntı Orta Zemin Resmi][]

Alıntı Orta Zemin Resmi

![Alıntı Alt Zemin Resmi][]

Alıntı Alt Zemin Resmi

Şimdi CSS kodumuzu yazalım

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Alıntı Örneği</title>
	<style>
	blockquote {
	width: 240px;
	margin:0;
	padding:29px 0 0 0;
	background:url(images/alinti_ust.gif) no-repeat left top;
	}
	blockquote p {
	margin:0;
	padding:10px;
	color: #fff;
	text-align:center;
	font:bold 14px/1.7em Georgia, "Times New Roman", Times, serif;
	background: url(images/alinti_orta.gif) left bottom repeat-y;
	}
	cite
	{
	font-size: 1.2em;
	padding-bottom:29px;
	display:block;
	text-align:center;
	color:#C6D9F1;
	text-decoration:underline;
	width:240px;
	background: url(images/alinti_alt.gif) no-repeat left bottom;
	}
	</style>
	</head>
	<body>
	<blockquote><p>Sevgide güneş gibi ol, dostluk ve kardeşlikte akarsu gibi ol, hataları örtmede gece gibi ol, tevazuda toprak gibi ol, öfkede ölü gibi ol, her ne olursan ol, ya olduğun gibi görün, ya göründüğün gibi ol.</p></blockquote>
	<cite>Mevla'na Celaleddin-i Rumi</cite>
	</body>
	</html>

![Alıntı Örnek Sonuç][]

Yukarıda verdiğimiz zemin resimlerini yerleştirdik ve fon ve renk
değerleri verdik.

Örnek sayfasına [göz at.][]

Sonuçta hem güzel bir görüntü elde ettik hemde css desteklemeyen
tarayıcı ve araçlarda da farklı bir görünüm sağlamış olduk.

## Kaynaklar

-   [http://www.cameraontheroad.com/?p=154 iyi örnek][]
-   [Dan Cederholm - Web Standards Solutions The Markup and Style     Handbook][]
-   [http://24ways.org/2005/swooshy-curly-quotes-without-images][]
-   http://monc.se/kitchen/129/rendering-quotes-with-css
-   [http://www.shapeshed.com/journal/quotations_in_css/][]
-   [http://diveintomark.org/archives/2002/05/04/the_q_tag][]
-   [http://simonwillison.net/2003/May/21/stylingBlockquotes/][]
-   [http://www.456bereastreet.com/archive/200411/quotations_and_citations_quoting_text/][]
-   [http://juicystudio.com/article/fixing-ie-quotes.php][]
-   http://historytalk.typepad.com/basic/2006/06/scholarship_xht.html


  [Örnek 2]: /images/alinti_ornek2_1.gif
  [Örnek IE]: /images/alinti_ornek2_ie.gif
  [www.w3.org/TR/html4/struct/dirlang.html#langcodes]: http://www.w3.org/TR/html4/struct/dirlang.html#langcodes
  [Alıntı Örnek 1]: /images/alinti_ornek1.gif
  [Alıntı Üst Zemin Resmi]: /images/alinti_ust.gif
  [Alıntı Orta Zemin Resmi]: /images/alinti_orta.gif
  [Alıntı Alt Zemin Resmi]: /images/alinti_alt.gif
  [Alıntı Örnek Sonuç]: /images/alinti_ornek2.gif
  [göz at.]: /dokumanlar/alinti_ornek_sonuc.html
  [http://www.cameraontheroad.com/?p=154 iyi örnek]: http://www.cameraontheroad.com/?p=154%20iyi%20örnek
  [http://24ways.org/2005/swooshy-curly-quotes-without-images]: http://24ways.org/2005/swooshy-curly-quotes-without-images
  [http://www.shapeshed.com/journal/quotations_in_css/]: http://www.shapeshed.com/journal/quotations_in_css/
  [http://diveintomark.org/archives/2002/05/04/the_q_tag]: http://diveintomark.org/archives/2002/05/04/the_q_tag
  [http://simonwillison.net/2003/May/21/stylingBlockquotes/]: http://simonwillison.net/2003/May/21/stylingBlockquotes/
  [http://www.456bereastreet.com/archive/200411/quotations_and_citations_quoting_text/]: http://www.456bereastreet.com/archive/200411/quotations_and_citations_quoting_text/
  [http://juicystudio.com/article/fixing-ie-quotes.php]: http://juicystudio.com/article/fixing-ie-quotes.php