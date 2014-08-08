---
layout: post
title: CSS&#039;i Web Sayfalarına Eklemek
Date: 2006-07-23 21:47
Category: CSS, Web Standartları, XHTML
tags: CSS, css eklemek, import, link, style, Web Standartları, XHTML
---

## 1- Kod içinde (In-line)

Direk olarak (X)HTML elementin içine **style** özelliği kullanılarak
uygulamak.

	:::html
	<div style="color:red">Deneme yazımız</div>

Tüm CSS komutlarını kodların içine direk uygulamak önerilen bir kodlama
şekli değildir. Ancak özel durumlarda kullanılabilir.

## 2- style Elementi kullanılarak

<head\> kısmında <style\> elementi içinde CSS kodumuzu yazarak
uygulamak.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-9" />
	<title>CSS'i Uygulamak </title>
	<style type="text/css">
	div{
		color:red;
	}
	</style>
	</head>

Birinci yönteme göre avantajı (X)HTML kod ile CSS bir birinden
ayrıştırılmış olmasıdır.

## 3- Harici Stil şablonu Kullanımı

Bu metod da CSS kodlarımzı **.css** uzantılı bir dosyaya kaydederiz.
**ornek.css**

	:::css
	p {
		color: red;
	}

	a {
		color: blue;
	}


Daha sonra bu kodu gereken sayfalarımıza uygularız.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-9" />
	<title>CSS'i Uygulamak</title>
	<link rel="stylesheet" type="text/css" href="ornek.css" />
	</head>

Bu yöntemin diğerlerine göre en büyük avantajı bir kere yazılan kod
lazım olan tüm sayfalara eklenebilmesidir. Bu sayede harici eklenen css
kodu bir kere yüklendikten sonra diğer kullandığımız sayfalarda tekrar
yüklenemeyerek bize hız kazandıracaktır.

## 4- @import ile eklemek

üncü yöntem ile kullanımı benzerdir.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-9" />
	<title>CSS'i Uygulamak</title>
	<style type="text/css">
	@import "ornek.css";
	</style>
	</head>

Bu yöntemle eklenen harici css dosyası eski web tarayıcıları tarafından
görüntülenemeyecektir.(Örn: NN4)

@import ile eklenen kod link ile eklenen kodlamadan önce yorumlanır web
tarayıcıları tarafından. Ayrıca css dosyalarımızda @import özelliğini
kullanarak devamlı kullandığmız kodları css dosyamıza harici olarak
ekleyebilriz böylelikle tekrarlardan kurtulmuş oluruz. **(11.10.2006
güncellendi )**

Sonuç olarak burada dört adet CSS uygulama metodu gördük ancak bu
metodlardan dördüncüsü avantajları bakımından önerilen bir yöntemdir.

Ayrıca içeriği büyük olan sitelerde css kodunun parçalara ayrılması ve
kullanılan sayfa CSS'inde hangi parçalar gerekli ise onların import
edilmesi önerilir. Bu sayfade kodun bir kısmında yaptığımız değişiklik
için tüm css kodu incelenip değiştirlmesi gerekmez ve kod yönetimi
kolaylaşır.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-9" />
	<title>CSS'i Uygulamak</title>
	<style type="text/css">
	@import "ornek.css";
	</style>
	</head>

Ürünler bölümü için bir css dosyası ekleyelim sonra parçalara
ayırdığımız css kodlarının ürünlere lazım olanlarını **urunler.css**
içine ekleyelim.

**urunler.css**

	:::css
	 @import url(/css/iskelet.css);
	@import url(/css/fontlar.css);
	@import url(/css/renkler.css);
	@import url(/css/urunlereozel.css);

