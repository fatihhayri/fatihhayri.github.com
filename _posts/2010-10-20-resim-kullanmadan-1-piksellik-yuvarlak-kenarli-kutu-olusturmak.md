---
layout: post
title: Resim Kullanmadan 1 piksellik Yuvarlak Kenarlı Kutu Oluşturmak
Date: 2010-10-20 21:46
Category: CSS, Web Standartları, XHTML
tags: 1px, Border, eksi-margin, Margin, yuvarlak kenar, yuvarlak kenarlı kutular
---

![][100]

Birçok yuvarlak kenarlı kutu oluşturma tekniği mevcut. Daha
önce yuvarlak kenarlı kutuların nasıl yapıldığını anlattım “[Yuvarlak Kenarlı Kutular][]”, ayrıca CSS3 ile gelen border-radius özelliğinden
bahsettiğimiz “[Yuvarlak kenarlı kutular(border-radius) oluşturmak][]”
makalemizde bahsettik. Şimdide daha farklı belki çok fazla kullanılmayan
bir yuvarlak kenar çeşidini nasıl yapacağımızı anlatacağım. Aslında bu
birazda göz yanılmasından yararlanarak oluşturulmuş bir yuvarlak
kenardır, aslında sağdaki resimde gösterildiği gibi köşe yuvarlak
değildir, ancak göze yuvarlakmış hissi vermektedir.

Bu işi aslında resim ile de yapabiliriz, belki daha kolayımıza bile
gelir, ancak uygulamadan birçok yerde ve farklı renklerde 1 piksellik
yuvarlak kenara ihtiyaç duyunca bu yöntemi tercih ettim.

Yöntemi şöyle anlatabilirim;  bu çözümü üretmek için iki adet içiçe
blok-level elemente ihtiyacımız var, dıştaki elemanı üstten ve alttan
bir piksel fazlalık eklerken, içteki elemanı sağ ve soldan eksi margin
değeri vererek sağ ve solda taşırarak 1 piksellik bir yuvarlak kenar
elde ederiz. Bu işlemi iki şekilde yapabiliriz.

## Padding ve margin yardımı ile oluşturmak

HTML kodu

	:::html
	 <div class="kutu1">
		<p>{ CSS, XHTML veJavascript }</p>
	</div>

CSS kodu

	:::css
	.kutu1{
		background:#3274D0;
		margin:0 1px;
		padding:1px 0;
	}

	.kutu1 p{
		background:#3274D0;
		margin:0 -1px;
		padding:2px;
	}

![][1]

Örneği görmek için [tıklayınız.][]

## Margin ve border yardımı ile oluşturmak

HTML Kodumuz yine aynı

	:::html
	<div class="kutu1">
		<p>{ CSS, XHTML ve Javascript }</p>
	</div>

CSS kodumuz

	:::css
	.kutu1{
		background:#848484;
		border:1px solid #848484;
		border-left-width:0;
		border-right-width:0;
		margin:0 1px;
	}

	.kutu1 p{
		background:#d3d3d3;
		border:1px solid #848484;
		border-top-width:0;
		border-bottom-width:0;
		margin:0 -1px;
		padding:2px;
	}


![][2]

Örneği görmek için [tıklayınız.][3]

## Butonlarda kullanımı

Bu yöntemleri butonlarımızda da kullanabiliriz.

HTML Kodumuz

	:::html
	<ul>
		<li><a href=""><span>Bursaspor</span></a></li>
	    <li><a href=""><span>Trabzonspor</span></a></li>
	    <li><a href=""><span>Kayserispor</span></a></li>
	</ul>

CSS kodumuz

	:::css
	ul{
		margin:0;
		padding:0;
		width:250px
	}

	ul li{
		list-style: none;
		margin-bottom:5px
	}

	ul li a{
		display:block;
		background:#3274D0;
		margin:0 1px;
		padding:1px 0;
		position: relative;
		text-decoration:none;
	}

	ul li a span{
		background:#3274D0;
		margin:0 -1px;
		padding:2px;
		display: block;
		color:#fff
	}

	ul li a:hover{
		background:#fff;
	}

	ul li a:hover span{
		background:#fff;
		color:#3274D0
	}

![][4]

Örneği görmek için [tıklayınız.][5]

Sonuç olarak yukarıda görüldüğü gibi kolay bir kodlama ile 1 piksellik
bir yuvarlak kenar elde ettik. Çok fazla çeşitte 1 piksellik yuvarlak
kenara ihtiyaç duyduğunuzda imdadınıza yetişir. Bu kodun güzelliği
internet explorer sürümlerinde(6,7,8,9) herhangi bir ek koda gereksinim
duymadan çalışmasıdır. Bu yöntem aklınızın bir köşesinde kalsın
bakarsınız bir gün lazım olur.

Hadi kalın sağlıcakla.

## Kaynaklar

-   [http://dmitry-baranovskiy.tumblr.com/post/34061791/one-pixel-rounded-corners][]
-   [http://www.askthecssguy.com/2008/03/one_pixel_notched_corners_as_u.html][]
-   [http://www.onderhond.com/blog/work/1px-rounded-corners][]
-   [http://www.alistapart.com/articles/mountaintop/][]

  [100]: /images/1px_yuvarlak_kutu_yak-300x125.gif
  [Yuvarlak Kenarlı Kutular]: http://www.fatihhayrioglu.com/yuvarlak-kenarli-kutular/
  [Yuvarlak kenarlı kutular(border-radius) oluşturmak]: http://www.fatihhayrioglu.com/yuvarlak-kenarli-kutularborder-radius-olusturmak/
  [1]: https://lh4.googleusercontent.com/23SRG-1WKRPSijX0GVloqxvgBzLJFRxuUbVjkU36hzGacLp5Y5zz6AxULdUJdl3zrKnFODcY7O4NNURxY7BGChNRa52LUeYt1Kj9l7AYsBDvejEKcQ
  [tıklayınız.]: /dokumanlar/1px_yuvarlak_kenar_1.html
  [2]: https://lh3.googleusercontent.com/UotpXlc2Cn_hp0o3sQ1EuTg865C-y_R6UpG-vCanTBXjp2pi9cFzaSqTmHyc5sJVVHRooMlaINOMQXkGzA_maIjzAKAVllPjkrcD2o5m6tz3sYAJZQ
  [3]: /dokumanlar/1px_yuvarlak_kenar_2.html
  [4]: https://lh4.googleusercontent.com/6mgdtcyUg4pDLZGE4dbY1tvQQYUzQz3mhfMaqMmkWS9Zd6y5GZqEWBMeP7vdDxEKZel5JGrfTIGjuPH5c-M6UY4SxaHF7l58yYJhuFtr_vxfQlnuRQ
  [5]: /dokumanlar/1px_yuvarlak_kenar_1_hover.html
  [http://dmitry-baranovskiy.tumblr.com/post/34061791/one-pixel-rounded-corners]: http://dmitry-baranovskiy.tumblr.com/post/34061791/one-pixel-rounded-corners
  [http://www.askthecssguy.com/2008/03/one_pixel_notched_corners_as_u.html]: http://www.askthecssguy.com/2008/03/one_pixel_notched_corners_as_u.html
  [http://www.onderhond.com/blog/work/1px-rounded-corners]: http://www.onderhond.com/blog/work/1px-rounded-corners
  [http://www.alistapart.com/articles/mountaintop/]: http://www.alistapart.com/articles/mountaintop/
