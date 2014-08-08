---
layout: post
title: CSS İpuçları - 9
Date: 2006-08-05 14:22
Category: CSS
tags: CSS, XHTML, yorum
---

Kodlarınıza yorum satırı ekleyerek daha anlaşılır ve erişilebilir kılın.
CSS ile Tablosuz web sayfası tasarımında sayfa bölümleri div ile ayrılır
ve bir çok yerde div elementi kullanılır. Divleri açtıktan sonra araya
onlarca satır yazı, farklı farklı kodlar girmiş olabilir. Böyle bir
durumda div etiketlerinin nerede kapatıldığını kestiremeyebilirsiniz. Bu
sorundan kurtulmak için genel kullandığınız div'leri açıp kapatırken
yorum satırı ekleyin:

	:::html
	<!-- baş kısım baslangıcı -->
	<div id="basKisim">
	.....
	</div>
	<!-- baş kısım sonu --> <!-- içerik başlangıcı -->
	<div id="IcerikKismi">
	......
	</div>
	<!-- içerik sonu --> <!-- alt kısım başlangıcı -->
	<div id="AltKisim">
	.....
	</div>
	<!-- alt kısım sonu -->

Yukarıdaki yöntem küçük çaplı
sitelerde lazım olmaya bilir ancak büyük içerikli sitelerde çok büyük
faydaları vardır.

