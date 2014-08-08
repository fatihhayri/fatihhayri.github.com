---
layout: post
title: CSS ile sayfalarımızı ve elementlerimizi ortalamak
Date: 2006-09-12 22:55
Category: CSS
tags: Blok-level, CSS, Konumlandırma, ortalamak
---

CSS'de kullandığımız içerik alanlarını (blok-level ve inline-level)
elementleri nasıl oratalayacağımızı göreceğiz. Inline-level elementleri
**text-align:center** özelliğini kullanarak ortalayabiliriz. Blok-level
elementleri ortalamak için ise bir iki metod vardır. Sırası ile
inceleyelim.

## 1- Genişleyebilir blok-level elementleri ortalamak

	:::css
	.ortala {
		margin-left: 10%;
		margin-right:10%;
	}

HTML kodu;

	:::html
	<p class="ortala">Lorem Ipsum is simply dummy text of the printing and typesettingindustry. </p>

Genişliği sabit olmayan, genişleyebilir blok-level elementlerin
ortalanması için bu metod kullanılır. Tüm web tarayıcılı bu metodu
destekler.

## 2- Sabit genişlik atanan blok-level elementlerini ortalamak

**2.a. margin auto ile genişliği belirlenmiş elementleri ortalamak**

Mantık olarak, içerik blokunun sağ ve sol margin değerlerine auto
ataması yapıyoruz.

W3C'de bu konu hakkında şu ifade mevcuttur: **"Eğer margin-left ve
margin-right değerleri auto verilirse bu blokun ortalanması anlamına
gelir."**

	:::css
	.ortala2 {
		margin-left: auto;
		margin-right: auto;
		width: 50em;
	}

NN4 (Mac and Win), Win/IE4, Win/IE5, Win/IE5.5, Win/IE6 (Garip mod :
quirks-mode) web tarayıcılıar bu kodu desteklememektedir.

Bu sorunu aşabilemke için iki satır kod yazmamız yeterli olacaktır.(NN4
hariç)

Bu metodu desteklemeyen web tarayıcıları için body etiketine
**text-align:center** ataması yaptığımızda sorun çözülmüş demektir.

	:::css
	body {
		text-align: center;
	}

	.ortala2 {
		margin-left: auto;
		margin-right: auto;
		width: 50em;
	}

Yanlız bir sorunumuz daha var. **text-align:center** ataması body
içindeki tüm elementlerin ortalanmasına neden olacaktır. Bunu engellemek
için bir katman oluşturup bu katman da hizalama değerini başlangıç
değerine(yani sola yaslamalıyız) çevirmeliyiz.

	:::css
	body {
		text-align: center;
	}

	.ortala2 {
		margin-left: auto;
		margin-right: auto;
		width: 50em;
		text-align: left;
	}


Bu kodlama tüm web tarayıcılarında çalışacaktır.(NN4 hariç)

**2.b. Konumlandırma(positioning) kullanılan elementlerin negatif margin
ile ortalanması**

Göreceli konumlandırılmış elementleri ortalamak için bu metod
kullanılabilir. Bu metod da bir önceki gibi fazladan bir katman
kullanmaya gerek yoktur. Genişlik tanımı yapılan göreceli
konumlandırılmış elementin **margin-left** değeri element genişliğinin
yarısı(1/2) kadar verilerek sağlanır.

	:::css
	.ortala3 {
		width: 720px;
		position: relative;
		left: 50%;
		margin-left: -360px;
	}

Burada sizlere bir iki metodla element ortalamayı gösterdik. Siz
kullandığınız yer ve ihtiyaçlarınıza göre bunlardan birini
kullanabilirsiniz.