---
layout: post
title: CSS3 box-shadow örnekleri
Date: 2012-04-21 15:51
Category: CSS
tags: box-shadow, örnekler, snippets, tek köşeye gölge
---

CSS3 özellikleri hayatımıza girmeye başladı. Artık projelerimizde CSS3
renk geçişini, metin gölgelendirme(text-shadow), kutu
gölgelendirme(box-shadow) kullanabiliyoruz. Kullandıkça görüyoruz ki
yeni özellikler güzel ancak eklemek için biraz daha fazla kod yazmak
gerekiyor ve bazı durumları oluşturmak için bazı araçlar gerekiyor.
Örneğin CSS Gradient Generator vs. gibi

Benzer bir durum kutu gölgelerinde(box-shadow) karşılaştım. Bazı kutu
gölgeleme işlerini bir köşeye kaydetmeye başladım çünkü kodu o kadarda
akılda kalıcı değil.

Sonra bunu yazı haline getirmek istediğimde gördüm ki zaten birçok kişi
bu konuda yazı yazmış. Bende bunları toparlayıp bir yazı çıkarayım
dedim. Bu yazıyı bir yere kaydedin lazım olacak muhakkak. Aslında bu
örnekler yakında editörler tarafından sunulacaktır diye düşünüyorum.

[kutulara gölge verme][] yazımızı okursanız kutu gölgeleri hakkında
bilgi sahibi olabilirsiniz. Kutuları 4 köşe olduğunu düşünürsek.

## 4 Köşeye gölge vermek

Normal box-shadow değerleri dikey ve yatayda değerler verilince hep
açılı gölgeler veriyor. Biz tüm kutunun etrafına gölge vermek için; blur
değeri ve spread  değerini kullanıyoruz.

	:::css
	 div {
		-webkit-box-shadow: 0 0 6px 4px black;
		-moz-box-shadow: 0 0 6px 4px black;
		box-shadow: 0 0 6px 4px black;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/7wyeD/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

blur değeri spread  değerinden büyük ise farklı,

	:::css
	 div {
		-webkit-box-shadow: 0 0 4px 6px black;
		-moz-box-shadow: 0 0 4px 6px black;
		box-shadow: 0 0 4px 6px black;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/NKXZG/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

blur değeri spread  değerinden küçük ise farklı bir gölge efekti görüyoruz.

## Çoklu Kenar Çizgisi Oluşturmak

[Önceki makalede][] bahsettiğimiz gibi, çoklu kenar çizgileri oluşturmak
için; spread  değeri yardımı ile yapılan bu etki için diğer değerler
sıfırlanmalıdır.

	:::css
	 div {
		border: 3px solid orange;
		-webkit-box-shadow: 0 0 0 3px black, 0 0 0 6px red;
		-moz-box-shadow: 0 0 0 3px black, 0 0 0 6px red;
		box-shadow: 0 0 0 3px black, 0 0 0 6px red;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/RPqUC/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Tek Köşeye Gölge Vermek

Kutuların sadece x veya y köşelerinden göstermek için box-shadow
tanımının sınırlarınız zorlamamız gerekiyor. Bu iş için bir kaç yöntem
mevcut, ben burada hepsini paylaşıyoruz avantaj ve dezavantajlarını
görerek karar vermek size kalmış.

**1. Yöntem** bir köşeye gölge verirken aynı zamanda diğer köşelere
kenar çizgisi atayarak.

	:::css
	div {
		-webkit-box-shadow: 1px 0 2px black;
		-moz-box-shadow: 1px 0 2px black;
		box-shadow: 1px 0 2px black;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/3f7SU/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**2. Yöntem** Diğer köşelere herhangi bir kenar çizgisi veya gölge
atamadan sadece bir köşeye gölge tanımlamak;

	:::css
	 div {
		width:250px;
		height:250px;
		background: white;
		-webkit-box-shadow: 0 0 0 4px white, 0 6px 4px black;
		-moz-box-shadow: 0 0 0 4px white, 0 6px 4px black;
		box-shadow: 0 0 0 4px white, 0 6px 4px black;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/juVMm/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Mantık olarak iki gölge tanımı yapıyoruz, birincisi spread ile kutu
ardalan rengi ile aynı renkte 4px bir alan oluşturuyoruz, ikinci gölge
tanımı ile de bu tanımladığımız boş alanın dışına çıkacak köşeye daha
fazla değer verip dışarı çıkmasını sağlıyoruz.

**3. Yöntem** Bu örnekte kenar çizgisi oluşturulan yeni kutunun biraz
içinde kalır.

	:::css
	 div {
		width:250px;
		height:250px;
		background: white;
		-webkit-box-shadow: 0 0 0 4px white, 0 6px 4px black;
		-moz-box-shadow: 0 0 0 4px white, 0 6px 4px black;
		box-shadow: 0 0 0 4px white, 0 6px 4px black;
		border:1px solid #f00;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/5pVbj/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Eğer kenar çizgisi kullanılacaksa;

	:::css
	 div {
		width:250px;
		height:250px;
		background: white;
		-webkit-box-shadow: 0 8px 6px -6px black;
		-moz-box-shadow: 0 8px 6px -6px black;
		box-shadow: 0 8px 6px -6px black;
		border:1px solid #f00;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/5pVbj/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Blur değeri kadar eksi spread değeri atayarak bu çözüm oluşturulmuştur.

**4. Yöntem** :before seçicisi yardımı ile absolute tanımlı gölge
eklenir.

	:::css
	 div {
		width:250px;
		height:250px;
		position: relative;
		padding: 0 7px 0 0;
		overflow: hidden;
	}

	div:before {
		position: absolute;
		content: ' ';
		top: 0px;
		right: 7px;
		bottom: 0;
		left: 0;
		background-color: transparent;
		box-shadow: 0 0 5px black;
		border: 1px solid red;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/x9Pbr/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Çıkmasını istediğimiz kenara padding tanımı yapılır, :before seçicisi
ile o köşeye ait kenar değeri padding ile aynı tanımlanır. :before
seçicisine box-shadow tanımı yapılır yapılan padding tanımından fazla
değer içermelidir.

## 3 Köşeye Gölge Tanımlama

Yukarıdaki 4.yönteme benzer bir kullanım ile yapılır.

	:::css
	 div {
		width:250px;
		height:250px;
		position: relative;
		padding: 7px 0 7px 7px;
		overflow: hidden;
	}

	div:before {
		position: absolute;
		content: ' ';
		top: 7px;
		right: 7px;
		bottom: -7px;
		left: 7px;
		background-color: transparent;
		box-shadow: 0 0 5px black;
		border: 1px solid red;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/j9bAp/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Yukarıdaki yöntemin tersi yapılır ve kaldırılacak köşeye eksi değer
atanır.

## Sonuç

CSS3 bizi resim yönetme araçlarına bağlı olmaktan olduğunca kurtarmaya
çalışıyor. Box-shadow bu kurtarma yöntemlerinin en güzellerinden birisi.
Ben yukarıda genelde iş yaparken lazım olan örnekleri sergiledim.
Kaynaklardaki linklerde box-shadow özelliği ile yapılmış çok farklı
gölge uygulamaları mevcut, bu uygulamaları incelemekte yarar var.
Tasarımları HTML’e çevirirken bu örneklerin aklımızın bir yanında
durmasında fayda var. Tasarımda gördüğümüz birçok gölge uygulamasını
box-shadow ile halledebiliyoruz. Birçoğunu diyorum, ama hepsi
diyemiyorum, çünkü tasarımcıların sınırları belli olmadığı için hepsi
demek zor.

box-sahdow müşteriyi patronu ikna edebildiğimiz yerlerde
uygulayabildiğimiz özellikler, ama gerçekten arayüz geliştiriciye büyük
kolaylıklar sağlıyor.

## Kaynaklar

-   [http://theburningmonk.com/2010/12/having-fun-with-css3-box-shadow-property/][] (box-shadow özelliği)
-   [http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/][]
-   [http://matthamm.com/box-shadow-curl.html][] (kelebek köşe örneği)
-   [http://www.webdesignshock.com/css3-box-shadow/][]
-   [http://www.red-team-design.com/how-to-create-slick-effects-with-css3-box-shadow][]
-   [http://www.viget.com/inspire/39-ridiculous-things-to-do-with-css3-box-shadows/][]
-   [http://erenemre.com/556][]
-   [http://blog.syndicate-fx.com/code-snippets/css3-boxshadow-effects/][]
-   [http://www.ballyhooblog.com/realistic-css3-box-shadows/][]
-   [http://www.sitepoint.com/pure-css3-paper-curl/][]
-   [http://www.css3.info/preview/box-shadow/][]
-   [http://www.wewillbeok.com/likeacastshadow/][] (farklı bir örnek)
-   [http://toolboxdigital.com/2011/03/css3-3d-gradient-box/][]
-   [http://daneden.me/2011/11/a-non-scientific-box-shadow-experiment/][]
-   [http://www.paulund.co.uk/creating-different-css3-box-shadows-effects][]
-   [http://blog.w3conversions.com/2011/09/css3-spread-value-and-box-shadow-on-one-side-only/][] (makaleye örnek)
-   [http://starikovs.com/2011/11/09/css3-one-side-shadow/][]
-   [http://nicolasgallagher.com/css-drop-shadows-without-images/demo/][] Örnekler Sayfası
-   [http://translate.google.com/translate?hl=en&sl=auto&tl=en&u=http%3A%2F%2Fwww.alsacreations.com%2Ftuto%2Flire%2F1338-css3-box-shadow-ombre.html][] (box-shadow güzel)
-   [http://www.creativejuiz.fr/blog/tutoriels/ombre-avancees-avec-css3-et-box-shadow][] (güzel incele)


  [kutulara gölge verme]: http://www.fatihhayrioglu.com/kutulara-golge-vermek-box-shadow/
  [Önceki makalede]: http://www.fatihhayrioglu.com/coklu-kenar-cizgisiborder-kullanimi/
  [http://theburningmonk.com/2010/12/having-fun-with-css3-box-shadow-property/]: http://theburningmonk.com/2010/12/having-fun-with-css3-box-shadow-property/
  [http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/]: http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/
  [http://matthamm.com/box-shadow-curl.html]: http://matthamm.com/box-shadow-curl.html
  [http://www.webdesignshock.com/css3-box-shadow/]: http://www.webdesignshock.com/css3-box-shadow/
  [http://www.red-team-design.com/how-to-create-slick-effects-with-css3-box-shadow]: http://www.red-team-design.com/how-to-create-slick-effects-with-css3-box-shadow
  [http://www.viget.com/inspire/39-ridiculous-things-to-do-with-css3-box-shadows/]: http://www.viget.com/inspire/39-ridiculous-things-to-do-with-css3-box-shadows/
  [http://erenemre.com/556]: http://erenemre.com/556
  [http://blog.syndicate-fx.com/code-snippets/css3-boxshadow-effects/]: http://blog.syndicate-fx.com/code-snippets/css3-boxshadow-effects/
  [http://www.ballyhooblog.com/realistic-css3-box-shadows/]: http://www.ballyhooblog.com/realistic-css3-box-shadows/
  [http://www.sitepoint.com/pure-css3-paper-curl/]: http://www.sitepoint.com/pure-css3-paper-curl/
  [http://www.css3.info/preview/box-shadow/]: http://www.css3.info/preview/box-shadow/
  [http://www.wewillbeok.com/likeacastshadow/]: http://www.wewillbeok.com/likeacastshadow/
  [http://toolboxdigital.com/2011/03/css3-3d-gradient-box/]: http://toolboxdigital.com/2011/03/css3-3d-gradient-box/
  [http://daneden.me/2011/11/a-non-scientific-box-shadow-experiment/]: http://daneden.me/2011/11/a-non-scientific-box-shadow-experiment/
  [http://www.paulund.co.uk/creating-different-css3-box-shadows-effects]: http://www.paulund.co.uk/creating-different-css3-box-shadows-effects
  [http://blog.w3conversions.com/2011/09/css3-spread-value-and-box-shadow-on-one-side-only/]: http://blog.w3conversions.com/2011/09/css3-spread-value-and-box-shadow-on-one-side-only/
  [http://starikovs.com/2011/11/09/css3-one-side-shadow/]: http://starikovs.com/2011/11/09/css3-one-side-shadow/
  [http://nicolasgallagher.com/css-drop-shadows-without-images/demo/]: http://nicolasgallagher.com/css-drop-shadows-without-images/demo/
  [http://translate.google.com/translate?hl=en&sl=auto&tl=en&u=http%3A%2F%2Fwww.alsacreations.com%2Ftuto%2Flire%2F1338-css3-box-shadow-ombre.html]: http://translate.google.com/translate?hl=en&sl=auto&tl=en&u=http%3A%2F%2Fwww.alsacreations.com%2Ftuto%2Flire%2F1338-css3-box-shadow-ombre.html
  [http://www.creativejuiz.fr/blog/tutoriels/ombre-avancees-avec-css3-et-box-shadow]: http://www.creativejuiz.fr/blog/tutoriels/ombre-avancees-avec-css3-et-box-shadow
