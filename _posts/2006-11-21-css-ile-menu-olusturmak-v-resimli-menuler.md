---
layout: post
title: CSS ile Menü Oluşturmak V - Resimli Menüler
Date: 2006-11-21 17:03
Category: CSS, Web Standartları, XHTML
tags: arkaplan-resmi, background, CSS, Image-Replacement, menü, resimli-menü, Web Standartları, XHTML, zemin-resmi
---

## "Arkaplan Resmi kaydırmaca" ile Resimli Menüler

Arkaplan Resmi kaydırmaca tanımlamasını [cemsid][]'den aldım. CSS ile
menü yapımı serimize devam ediyoruz. CSS ile yapılan bir çok menü örneği
mevcut biz burada bunları katagorize edip her bir katagoriye bir örnek
yaparak mantığını anlatmaya çalıyoruz, mantığını anladıktan sonra CSS
ile yapılan tüm menüleri yapabileceğimize inanıyorum.

CSS menülerinin vazgeçilmezi sırasız listeleri(<ul\>) kullanarak her
bir linkin iki resimi bulunan(bir normal hali, diğeri fare imlecinin
üzerine gelince görünecek resim) menü oluşturacağız.

Bu menü sayfa yüklenmeden yüklendiği için javascript ile yapılan
rollover menülerden avantajlıdır ve Internet Explorer'da Temporary
Internet Files > Settings > 'Every visit to page.' seçeneği seçili
olan kullanıcılar için biçilmiş kaftandır. Ayrıca CSS ile yapılan
menülerdeki avantajlara(kolay ekleme ve düzenleme, esnek yapı vb.)
sahiptir tabi ki.

Bu metod cemsid'inde açıkladığı gibi arkaplan resmi(background-image)
kaydırarak yapılıyor. Genelde bu tip menüler resim içeren veya
anti-aliased metinlerin kullanıldığı durumlarda kullanılır.

	:::html
	<ul id="menu" >
		<li id="elma"><a href="#" title="Elma">Elma</a></li>
		<li id="armut"><a href="#" title="Armut">Armut</a></li>
		<li id="muz"><a href="#" title="Muz">Muz</a></li>
		<li id="kivi"><a href="#" title="Kivi">Kivi</a></li>
	</ul>



Görüldüğü gibi diğer menü başlangıcından farkı olmayan-bir ek hariç- bir
kodlama. Hariç olan ek her menu elemanına bir **id** atamamız. Çünkü her
menü elemanı için bir resim tanımlaması yapacağız. Manav dükkanı
açıyoruz :)

şžimdi menümüzü oluşturan resimi hazırlamaya geldi sıra. Menü resmini
oluştururken bir normal halini ve hemen altına fare imleci üzerine
geldiğindeki halini koyup resmi kaydedeceğiz. Bu işlem için Photosohop,
Firefowrk, PaintShopPro vb. programlar kullanabilrisiniz.

![][100]

Menüdeki margin, padding ve imgeleri kaldıralım. Boyutlarını ve konumunu
tanımlayalım:

	:::cssul
	#menu{
		height: 54px;
		margin: 0;
		padding: 0;
		position: relative;
		width: 500px;
	}

![][1]

Menümüzü yatay olarak sıralamak için

	:::css
	ul#menu li{
		list-style: none;
		position: absolute;
	}

![][2]

Menü elemanlarının yükseklikleri sabit olduğu için hepsine ortak
tanımlama yapıyoruz, hepsini kendine has kapsama alanı olması için
blokladık(display:block) ve konumlandırdık(postion:relative).

	:::css
	ul#menu li a{
		display: block;
		height: 54px;
		position: relative;
	}

Her menü elemanı için kendi genişliği ve arkaplan resmindeki(menu.jpg)
yerini belirleyelim.

	:::css
	#elma a{
		background: url(images/menu.jpg) 0 0 no-repeat;
		width: 130px;
	}

	#armut a{
		background: url(images/menu.jpg) -130px 0 no-repeat;
		width: 142px;
	}

	#muz a{
		background: url(images/menu.jpg) -272px 0 no-repeat;
		width: 120px;
	}

	#kivi a{
		background: url(images/menu.jpg) -392px 0 no-repeat;
		width: 108px;
	}

ve tüm menü elementlerinin soldan konumu belirleyelim.

	:::css
	#elma{
	left: 0px;
	}

	#armut{
		left: 130px;
	}

	#muz{
		left: 272px;
	}

	#kivi{
		left: 392px;
	}

![][3]

Resimler üzerindeki metinleri kaldırmak için

	:::css
	ul#menu li a{
		text-decoration: none;
		text-indent: -9999px;
	}

![][4]

Menümüz tamam. şžimdi de rollover efekti vermek için **a:hover**
arkaplan resimlerinin konumunu belirleyelim. Konumunu yazarken sadece
yükseliği üstten konumu değiştirdiğimize dikkat edin.

	:::css
	#elma a:hover{
		background: url(images/menu.jpg) 0 -54px no-repeat;
		width: 130px;
	}

	#armut a:hover{
		background: url(images/menu.jpg) -130px -54px no-repeat;
		width: 142px;
	}

	#muz a:hover{
		background: url(images/menu.jpg) -272px -54px no-repeat;
		width: 120px;
	}

	#kivi a:hover{
		background: url(images/menu.jpg) -392px -54px no-repeat;
		width: 108px;
	}

![][5]

Son olarakta bir bölümde olduğunda o bölümün aktif görünmesini sağlamak
için, genel de bunu için a:hover durumu normal durum olarak tanımlanır.
Bizde öyle yapalım. Mesela **Muz** bölümünde olduğumuzu farz edelim.

	:::html
	<ul id="menu">
		<li id="elma"><a title="Elma" href="#">Elma</a></li>
		<li id="armut"><a title="Armut" href="#">Armut</a></li>
		<li id="muz"><a class="secili" title="Muz" href="#">Muz</a></li>
		<li id="kivi"><a title="Kivi" href="#">Kivi</a></li>
	</ul>

	:::css
	#elma a.secili{
		background: url(images/menu.jpg) 0 -54px no-repeat;
		width: 130px;
	}

	#armut a.secili{
		background: url(images/menu.jpg) -130px -54px no-repeat;
		width: 142px;
	}

	#muz a.secili{
		background: url(images/menu.jpg) -272px -54px no-repeat;
		width: 120px;
	}

	#kivi a.secili{
		background: url(images/menu.jpg) -392px -54px no-repeat;
		width: 108px;
	}

<iframe src="/dokumanlar/menu_5.html" width="500" height="110" frameborder="0" scrolling="no"></iframe>

Örnek kodları indirmek için [tıklayınız.][]


  [cemsid]: http://www.cemshid.com/makale/arkaplan_resmi_kaydirmaca.html
  [100]: /images/menu.jpg
  [1]: /images/resimlimenu_01.jpg
  [2]: /images/resimlimenu_02.gif
  [3]: /images/resimlimenu_03.jpg
  [4]: /images/resimlimenu_04.jpg
  [5]: /images/resimlimenu_06.jpg
  [tıklayınız.]: /dokumanlar/menu5.zip
