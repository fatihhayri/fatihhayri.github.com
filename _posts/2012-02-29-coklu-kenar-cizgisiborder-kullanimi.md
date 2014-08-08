---
layout: post
title: Çoklu Kenar Çizgisi(Border) Kullanımı
Date: 2012-02-29 16:11
Category: CSS
tags: :after, :before, box-shadow, çoklu kenar çizgisi, ie7olum, outline
---

CSS kenar çizgileri kullanımı bir çoğumuz için çok basit bir iştir.
Ancak yanına bir çizgi daha konduğu zaman kara kara düşünürüz ne
yapalımda bu işin altında kalkalım diye. Resim kullanırız genelde sorunu
halletmek için.

Burada basit bir yol ile bu işi nasıl yapacağımızı anlatacağım.

Çoklu kenar çizgisi uygulanacak eleman relative konumlandırılmalı ve
padding değeri uygulanacak ikinci kenar çizgisi dikkate alınarak
atanmalıdır.

	:::css
	#cokluKenarCizgisi{
		border: 5px solid #FF0000;
		padding: 20px;
		position: relative;
		z-index: 10;
	}

Sözde elemanlar ile ikinci kenar çizgisini ekleyelim. z-index eksi değer
vererek içeriğin arkasına atarız.

	:::css
	 #cokluKenarCizgisi:before{
		border: 5px solid #06F;
		bottom: 0;
		content: "";
		display: block;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		z-index: -1;
	}

<iframe style="width: 100%; height: 230px" src="http://jsfiddle.net/fatihhayri/L8ZHT/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Bu örnekte sadece iki kenar çizgisi için kod verildi, ancak yine sadece
:before ve background-color ile üç kenar çizgisi ve hatta :before,
background-color ve :after ile 4 ve daha fazla kenar çizgisi
ekleyebiliyoruz.

Tek kenara çoklu çizgi genelde lazım olan bir kod olduğu için burada
onuda paylaşıyorum.

	:::css
	#cokluKenarCizgisi{
		background: #F0F0F0;
		border-bottom: 2px solid #f00;
		color: #000000;
		padding: 10px 10px 11px;
		position: relative;
	}

	#cokluKenarCizgisi:before{
		background: #0FF;
		bottom: 0;
		content: "";
		display: block;
		height: 1px;
		left: 0;
		position: absolute;
		width: 100%;
	}

<iframe style="width: 100%; height: 200px" src="http://jsfiddle.net/fatihhayri/c6e9s/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Daha falza örnek için
[http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/demo/borders.html][]
sayfasına bakınız.

**Tarayıcı Uyumu:**
Internet Explorer 7.0: desteklemiyor, 8+ destekliyor
Firefox 3.5+
Chrome 4+
Opera 10+
Safari 4+
{: .tarayiciuyum}

Burada önemli nokta ie7’nin :before ve :after desteğinin olmaması.
Kullanım yüzdesi %6,46 olduğu göz önüne alınırsa göz ardı edilebilir.
border-radius uygulanmış elemanlara bu metot kullanılabilir.

## outline ile iki kenar çizgisi oluşturmak

İki kenar çizgisi oluşturmak için outline kullanılabilir.

	:::css
	#cokluKenarCizgisi{
		border: 5px solid #FF0000;
		outline: 5px solid blue;
		padding: 20px;
	}

<iframe style="width: 100%; height: 280px" src="http://jsfiddle.net/fatihhayri/Aprbj/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

İkiden fazla kenar çigisi kullanamasakta iyi bir alternatif olarak
kullanılabilir.

**Tarayıcı Uyumu:**
Internet Explorer 7.0: desteklemiyor, 8+ destekliyor
Firefox 3.5+
Chrome 4+
Opera 10+
Safari 4+
{: .tarayiciuyum}

ie7 yine sorun

## box-shadow ile çoklu kenar çizgisi oluşturmak

	:::css
	#cokluKenarCizgisi{
		border: 5px solid #FF0000;
		padding: 10px;
		moz-box-shadow: 0 0 0 5px #06F;
		webkit-box-shadow: 0 0 0 5px #06F;
		box-shadow: 0 0 0 5px #06F;
	}

Çoklu gölge kullanımı ile birdne fazla kenar çizgiside ekleyebiliriz.

	:::css
	#cokluKenarCizgisi{
		border: 5px solid #FF0000;
		padding: 10px;
		moz-box-shadow: 0 0 0 5px #06F, 0 0 0 10px #FF0;
		webkit-box-shadow: 0 0 0 5px #06F, 0 0 0 10px #FF0;
		box-shadow: 0 0 0 5px #06F, 0 0 0 10px #FF0;
	}

<iframe style="width: 100%; height: 250px" src="http://jsfiddle.net/fatihhayri/bPmQG/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**Tarayıcı Uyumu:**
Internet Explorer 7.0, 8.0: desteklemiyor, 9+ destekliyor
Firefox 3.5+
Chrome 4+
Opera 10+
Safari 4+
{: .tarayiciuyum}

Burada destek konusundn daha büyük bir sorunumuz var ie7’in yanında
box-shadow özelliğini ie8’de desteklemiyor.

## Sonuç

Çoklu kenar çizgisi uygulamada yukarıda anlattığımız yöntemler çözüm
olarak eterli bence. ancak ie6 ve ie7 desteği için ne yapacağız diye
düşünüyorsanız eski fazladan katman ekleme ile veya resim kullanrak
çözme yoluna gidilebilir. Benim düşünceme göre ie7 gözden çıkarılabilir
ve :before veya outline yöntemi kullanılabilir.

Kalın sağlıcakla

## Kaynaklar

-   [http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/][]
-   [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-multiple-borders-with-simple-css/][]
-   [http://css-tricks.com/snippets/css/multiple-borders/][]
-   [http://www.impressivewebs.com/multiple-borders-css/][]
-   [http://www.sitepoint.com/css3-multiple-borders/][]

  [http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/demo/borders.html]: http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/demo/borders.html
  [http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/]: http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/
  [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-multiple-borders-with-simple-css/]: http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-multiple-borders-with-simple-css/
  [http://css-tricks.com/snippets/css/multiple-borders/]: http://css-tricks.com/snippets/css/multiple-borders/
  [http://www.impressivewebs.com/multiple-borders-css/]: http://www.impressivewebs.com/multiple-borders-css/
  [http://www.sitepoint.com/css3-multiple-borders/]: http://www.sitepoint.com/css3-multiple-borders/
