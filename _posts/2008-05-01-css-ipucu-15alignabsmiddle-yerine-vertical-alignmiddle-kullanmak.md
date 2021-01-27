---
layout: post
title: CSS İpucu 15:align=&quot;absmiddle&quot; yerine vertical-align:middle kullanmak
Date: 2008-05-01 21:06
Category: Haberler
tags: [align, absmiddle, Çözüm, sorun, vertical-align, Xhtml doğrulama]
---

Web sitemiz doğrularken(validation) aşağıdaki hatayı aldım.

*Line 56, Column 151*: value of attribute "align" cannot be
"absmiddle"; must be one of "top", "middle", "bottom", "left",
"right"

    …:middle" alt="Tarih" align="absmiddle" /> Saat <em>09:13</em> | Katagori: <em

The value of the attribute is defined to be one of a list of possible
values but in the document it contained something that is not allowed
for that type of attribute. For instance, the “selected” attribute must
be either minimized as “selected” or spelled out in full as
“selected="selected"”; a value like “selected="true"” is not allowed.

![CSS İpucu 15:align=][]

Kullandığım align="absmiddle" kodunu standart dışı bir tanım olduğunu
söylüyor. Bu sorunla daha öncede karşılaştım, bir yer yazmadığım için
tekrar arayıp bulmam gerekti. Bu nedenle bir daha aramamak için buraya
yazıyorum.

vertical-align:middle; CSS kodu bu kodun yerini alıyor ve doğrulamadan
geçiyor. Bunun için bir CSS sınıfı oluşturup gerekli yerlerde bu sınıfı
eklersek sorunumuz çözülüyor.

	:::css
	.absmiddle {
		vertical-align:middle;
	}

Küçük bir ipucu olarak akılda kalmasında yarar var.

-   [http://www.webmasterworld.com/forum21/4250.htm][]
-   battleangel.org/2004/03/05/absmiddle-replacement/
-   [http://www.sitepoint.com/forums/showthread.php?t=140609][]

  [CSS İpucu 15:align=]: /images/validation_absmiddle.gif
  [http://www.webmasterworld.com/forum21/4250.htm]: http://www.webmasterworld.com/forum21/4250.htm
  [http://www.sitepoint.com/forums/showthread.php?t=140609]: http://www.sitepoint.com/forums/showthread.php?t=140609
