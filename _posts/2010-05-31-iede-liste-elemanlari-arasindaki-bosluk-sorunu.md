---
layout: post
title: IE&#039;de Liste elemanları arasındaki boşluk sorunu
Date: 2010-05-31 22:11
Category: CSS
tags: hasLayout, ie, ie6, ie7, liste boşluk sorunu, sorun
---

Bu sorun ile çok karşılaştım. Bir çok insanda bu sorun nedeni ile bana
mesaj attı. Son mesajdan sonra konuyu yazmalıyım dedim.

Sorunumuzu tam olarak şöyle tanımlayabiliriz; Dikey olarak
listelediğimiz menülerde ie'de fazladan boşluk gözüküyor. Bu durum bazen
ie6'da bazense ie6 ve ie7'de oluyor.

Bir örnek verelim

	:::html
	<ul id="menu">
	  <li><a href="#">Menu Bir</a></li>
	  <li><a href="#">Menu İki</a></li>
	  <li><a href="#">Menu Üç</a></li>
	  <li><a href="#">Menu Dört</a> </li>
	</ul>

CSS kodumuzda da

	:::css
	ul#menu li a{
		display:block
	}

Örneği görmek için [tıklayınız.][]

kodumuz olsun. Diğer tarayıcılarda normal bir görünüt alırken ie6'da
liste öğeleri arasında fazladan boşluk görürüz.

![][100]

Sorun İnternet Explorer'un hasLayout sorunudur. Aşağıdaki tanımlardan
biri yapılması durumunda bu sorun düzelecektir.

**display:** inline-block
**height:** herhangi bir değeri
**float:** left veya right
***max-height:** herhangi bir değeri
***max-width:** herhangi bir değeri
***min-height:** herhangi bir değeri
***min-width:** herhangi bir değeri
***overflow:** not visible
**position:** absolute
**width:** herhangi bir değeri
**writing-mode:** tb-rl
**zoom:** herhangi bir değeri

* ie7 de geçerli.

Biz bir tanesini seçelim.

	:::html
	* html ul#menu li a {
		height: 1px;
	}


Örneği görmek için [tıklayınız.][1]

Bu kodu yazdıktan sonra sayfa aşağıdaki gibi görünecektir.

![][2]

## Kaynaklar

-   [http://www.brunildo.org/test/IEWlispace.php][]
-   [http://www.hicksdesign.co.uk/journal/ie-whitespace-bug][]
-   [http://www.cssnewbie.com/fixing-ie6-whitespace-bug/][]
-   [http://orlandodefrias.com/2008/11/23/ie-unordered-list-extra-space-bug/][]
-   [http://archivist.incutio.com/viewlist/css-discuss/34926][]
-   [http://gtwebdev.com/workshop/gaps/white-space-bug.php][]

  [tıklayınız.]: /dokumanlar/ie6_fazla_bosluk_sorunu/ie_listede_fazla_bosluk_sorunu.html
  [100]: /images/ie_liste_sorunu_01.gif
  [1]: /dokumanlar/ie6_fazla_bosluk_sorunu/ie_listede_fazla_bosluk_sorunu_cev.html
  [2]: /images/ie_liste_sorunu_02.gif
  [http://www.brunildo.org/test/IEWlispace.php]: http://www.brunildo.org/test/IEWlispace.php
  [http://www.hicksdesign.co.uk/journal/ie-whitespace-bug]: http://www.hicksdesign.co.uk/journal/ie-whitespace-bug
  [http://www.cssnewbie.com/fixing-ie6-whitespace-bug/]: http://www.cssnewbie.com/fixing-ie6-whitespace-bug/
  [http://orlandodefrias.com/2008/11/23/ie-unordered-list-extra-space-bug/]: http://orlandodefrias.com/2008/11/23/ie-unordered-list-extra-space-bug/
  [http://archivist.incutio.com/viewlist/css-discuss/34926]: http://archivist.incutio.com/viewlist/css-discuss/34926
  [http://gtwebdev.com/workshop/gaps/white-space-bug.php]: http://gtwebdev.com/workshop/gaps/white-space-bug.php
