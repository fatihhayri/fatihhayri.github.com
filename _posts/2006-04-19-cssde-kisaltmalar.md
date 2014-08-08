---
layout: post
title: CSS&#039;de Kısaltmalar
Date: 2006-04-19 12:09
Category: CSS
tags: background, Border, CSS, font, kenar-boşluğu, kısaltmalar, liste, Margin, Padding, renk
---

CSS; kodlama yaparken bizim bazı kısaltmaları kullanmamıza izin verir.
Böylece hem fazla kod yığınından kurtulmuş oluruz, hemde sayfa
boyutlarını en aza indirmiş oluruz.

## 1. Font

Normalde bir font tanımlarken 4 adet CSS kodu kullanılır:

	:::css
	font-weight: bold;
    font-family: verdana, sans-serif;
    font-size: 11px;
    line-height: 15px;

Kısaltma olarak kullanlan kod ise tek satır:

	:::css
	font: bold 11px/15px verdana, sans-serif;

## 2. Background

Background tanımlarken 5 adet atama yapmamız gerekirken kısaltma
kullanarak tek tanıma indirebilriz.

	:::css
	background-color: #000;
	background-image: url(ard.jpg);
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: 50px 50px;

Kısaltırsak:

	:::css
	background: {
		#000 url(ard.jpg) no-repeat fixed 50px 50px;
	}

## 3. Renkler(Hex-decimal)

CSS stillerinde renkler genelde hex-decimal renk kodu ile tanımlanır
örneğin **color: #ff0000;** kırmızı. Renkler 6 karakterle
gösterilsede bir çok renk(web tabanlı) 3 karakterin tekrarlanması ile
oluşturulur. Örneğin, kırmızı'nın hex-decimal kodunun kısaltırsak
**color: #f00;**. Buradaki her karakter hex-decimal koddaki iki
karaktere karşılık gelmektedir. Mesela, beyaz renk kullanacağınızda,
**color: white;** veya **color: #ffffff;** kulanımı önermeyiz.
Kısaltılmış olanı **color: #fff;** kullanmanız daha avantajlıdır.

## 4. Border

Kenarklık tanımlamalarında her özellik için bir tanımlama yapılır. örnek
olarak bir elementin üst kenarına atama yapmak için:

	:::css
	border-top-width: 2px;
	border-top-style: dashed;
	border-top-color: #f00;

Kısaltırsak:

	:::css
	border-top: 2px dashed #f00;

Bu özellikleri tüm kenarlara uygulmak için:

	:::css
	border: 2px dashed #f00;

## 5. Margin ve Padding'ler

Margin ve paddingler de normal tanımlama şöyledir:

	:::css
	margin-top: 10px;
	margin-right: 5px;
	margin-bottom: 20px;
	margin-left: 15px;

kıslatılmış hali:

	:::css
	margin: 10px 5px 20px 15px;

Burada öznitelikler sağdan başlayarak saat yönünde devam eder. Aşağıda çeşitli
kısaltma yöntemleri birlikte verilmiştir:

**4 Değer:** (*margin: 20px 15px 10px 5px;*) birinci - üst, ikinci -
sağ, üçüncü - alt, dördüncü - sol.

**3 Değer:** (*margin: 20px 15px 10px;*) birinci - üst, ikinci - sol ve
sağ, üçüncü - alt. **2 Değer:**(*margin: 20px 15px;*) birinci - üst ve
alt, ikinci - sol ve sağ. **1 Değer:** (*margin: 10px;*) birinci - üst,
sağ, alt ve sol

## 6. Listeler

Liste tanılmalrında da kısaltmalar mümkündür

	:::css
	ul {
		list-style-type:square;
		list-style-position:inside;
		list-style-image:url(image.png);
	}

Kısaltırsak;

	:::css
	ul li {
		list-style:square inside url(image.png);
	} /* burda özel bir durum vardır eğer resim yoksa yedek olarak square özelliği gösterilecektir. */

## 7. Sıfır '0' ın Kısaltma olarak kullanılması

Kısaltmalarda son olarak '0' ın kullanımına değineceğiz. Normalde bir
elemente değer ataması yapılırken değerin yanına birimi de yazılır(örn:
3px, 0.2em vd.), Ancak sıfır '0' için bu zorunlu değilidir.

	:::css
	padding:0;

Bu durumun bir istisnası mevcuttur oda yüzde değerlerinde atama yapılırken **0%**olarak atama
yapılmalıdır.

## Kaynaklar

-   [http://www.w3schools.com/css/default.asp][]
-   [http://www.eyeofdesign.com][]
-   [http://www.spoono.com][]
-   [http://www.dustindiaz.com/css-shorthand/][]


  [http://www.w3schools.com/css/default.asp]: http://www.w3schools.com/css/default.asp
  [http://www.eyeofdesign.com]: http://www.eyeofdesign.com/css/background.php
  [http://www.spoono.com]: http://www.spoono.com/csst/tutorials/tutorial.php?id=5
  [http://www.dustindiaz.com/css-shorthand/]: http://www.dustindiaz.com/css-shorthand/
