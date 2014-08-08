---
layout: post
title: CSS İpuçları 14 - IE div yüksekliği sorunu
Date: 2008-01-10 22:32
Category: CSS, XHTML
tags: CSS, div yüksekliği sorunu, ie, internet explorer, XHTML
---

	:::css
	our_style {
		height: 1px;
		width: 100px;
		background-color: black;
	}

HTML kodu;

	:::html
	<div class="test"></div>

Bu kod Firefox'da sorunsuz çalışmasına karşın IE'de yükseklik 10px
görünecektir. Bir bakıma IE boş içeriğin yüksekliğini 10px kabul ediyor,
ancak bu bizim işimizi bozuyor. Çözüm ise çok basit.

	:::css
	.test {
		font-size: 0;
		height: 1px;
		width:100px;
		background-color: black;
	}

Sadece font-size tanımını 0 atamamız yeterli.

Kaynak: [http://vaig.be/2007/04/07/div-styleheight-1px-bug-in-ie/][]

  [http://vaig.be/2007/04/07/div-styleheight-1px-bug-in-ie/]: http://vaig.be/2007/04/07/div-styleheight-1px-bug-in-ie/
