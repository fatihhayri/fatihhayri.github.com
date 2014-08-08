---
layout: post
title: İçiçe Float Elementlerinin Kullanımı
Date: 2006-12-05 13:56
Category: CSS, Web Standartları, XHTML
tags: CSS, float, menü, planlama, Web Standartları, XHTML
---

İçiçe float elementlerinin kullanımı basit bir kodlama ile bize çok
güzel imkanlar sağlar. Bir genel float elementinin sağ üstüne bir float
element yerleştirelim. Bu kodlama genelde menü ve resim ekleme gibi
durumlar için kullanılır.

	:::css
	#icerikAlani {
	    margin: 10px;
	    border: 1px solid gray;
	}
	#icerikAlani #menu {
	    float: right;
	    width: 150px;
	    border-left: 1px solid gray;
	    border-bottom: 1px solid gray;
	    margin-left: 5px;
	}

İçerik alanına(#icerikAlani) margin ve kenarlık tanımlası yaptık. Daha
sonra menu alanını(#menu) içerik alanının sağ üst kısmına yerleştirmek
için **float:right**, genişliğini belirlemek için **width:150px**, sol
ve alt kenarlıklarını belirlemek için **border-left ve
border-bottom**(sağ ve üst ksımlarda zaten olduğu için buralara kenarlık
ataması yapmadık) ve içerik metini ile arasında boşluk bırakmak için
**margin-left** atamlarını yapıyoruz.

	:::html
	<div id="icerikAlani">
	    <div id="menu">
	    <ul>
	        <li><a href="anasayfa.html">Ana Sayfa </a></li>
	        <li><a href="haberler.html">Haberler</a></li>
	        <li><a href="iletisim.html">İletişim</a></li>
	    </ul>
	    </div>
	    <h1>Lorem Ipsum Dolar </h1>
	    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  . . .
	</div>


Örnek sayfayı görmek için [tıklayınız.][]

Not: Örnek kodlar ie5.0, ff2.0 ve opera9.0 da test edilmiştir.

  [tıklayınız.]: /dokumanlar/icice_float_kutular_ornek.html
