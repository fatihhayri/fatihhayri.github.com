---
layout: post
title: CSS ile Kutu modeli, sorunları ve çözümleri
Slug: kutu-modeli-sorunlari-ve-cozumleri
Date: 2006-04-26 00:37
Category: CSS, Web Standartları, XHTML
tags: Border, Box-Model, CSS, düzeltme, fix, kenar-çizgisi, kenar-dış-boşluğu, kenar-iç-boşluğu, Kutu-Modeli, Margin, Padding, Web Standartları, XHTML
---

CSS'e geçişte en çok düşündüren konu niye CSS geçelim ve CSS'in
avantajları nelerdir? CSS'in avantajı bize web sayfasındaki elemanlara
daha fazla müdahele etme imkanı vermesidir. Burada bunun en güzel
örneklerinden birini göreceğiz. CSS tüm HTML elementlerini bir
dikdörtgen kutu içine konmuş varsayarak ona göre pozisyonları ve
boyutlarını konrol eder. Bu elementler her zaman bir padding, margin,
border ve içerik alanını içerir. Aşağıdaki şekle bir bakınız:

![][100]

Margin'ler her zaman transparandır. Border'lar üç şekilde( solid, dashed
ve dotted) olabilir. Background sadece border içerisine uygulanabilir,
yani padding ve içerik alanı kısmını içerir.

![][1]

Bir elementin toplam genişliği; sol+sağ marginleri, sol+sağ
padding'leri, sol+sağ border'ları ve elementin içeriğini kapsar.
Margin'ler, padding'ler ve border'lar opsiyonel elementlerdir fakat
başlangıçta bunların değerleri '0' olarak belirlenmiştir. Yükseklik
içinde durum aynıdır. üst-alt margin değerleri, üst-alt padding
değerleri, üst-alt border değerleri ve içerik alanı yükseliği toplamı
yükseklik değerini oluşturur. Box
modeli iki elementi bulunur. Blok-level elementler ve inline-level
elementler. **Blok-level elementler :** Blok-level elementin görünüş
formatı bir kutu gibidir. Blok-level elementler inline elementleri ve
diğer blok-level elementleri içerebilir. Tipik özellikleri yeni bir
satır başlangıcı yapmalarıdır. Örnek: h6, p, li vd. **Inline-level
Elementler :** Inline elementler bir içerik gibi görünür, diğer bir
inline elelementi veye bir metni içere bilir. Genelde yeni satır veya
boşluk oluşturmazlar. Örnek: a, strong, span vd. Tüm kutu modelleri
aşağıdaki bölümleri içerir: **İçerik Alanı:** Elementin asıl içeriğini
oluşturan kısmıdır. Metin ve nesneler içerir. **Padding :** Elementin
kenarındaki dolgu alanıdır. **Border :** Elementin kenarlıklarıdır.
**Margin:** Elementin kenar boşluklarıdır.

## Box Model Sorunu ve Çözümü

W3C'ye göre genişlik(ve yükseklik) değeri içerik alanı değeridir.
padding ve border değerleri buna ek olarak toplam kutu genişliğine
eklenir. Eğer toplam kutu değeri eklenecekse içerik alanı ve etrafındaki
padding ve border değerleri toplamıdır. Buraya kadar çok güzel ancak tüm
web tarayıcıları bu durumu aynı şekilde yorumlamaz. IE'un IE6/strict'den
önceki versiyonları yukarıda anlattığımız standart yorumun dışına çıkar,
genişlik veya yükseklik değeri tüm kutu model element değerini ifade
eder. Yani tüm padding ve border değerlerini içerir kalan kısmıda içerik
alanı değeri olarak belirlenir.

	:::css
	#icerik{
		width:200px;
		padding:10px;
		border:5px solid #000;
	}

Standart web tarayıcıları bu durumu şöyle yorumlayacaklardır. 200px +
10px sol kenar iç boşluğu + 5px sol kenar çizgisi + 10px sağ kenar iç
boşluğu + 5px sağ kenar çizgisi = 230px toplam genişlik kutu elemetinin
genişliği 230px olacaktır. Ancak IE'un IE6/strict'den önceki
versiyonlar için kutu elementinin genişlik değeri 200px'dir.
Margin(Kenar dış boşluğu) değeri width değerini direk etkilemese de
dolaylı olarak etkiler. Kutular arasındaki genişliği hesaplarken margin
değerlerinide dikkate almalıyız. CSS ile sayfa yapıların oluştururken
kenar dış boğluklarını(margin) da dikkate elmalıyız. Bu sorunun çözümü
için üretilmiş bir çok yöntem vardır. Ancak bence en sağlamı
[tantek][]'in ürettiği koddur ve burada bundan bahsedeceğim.

	:::css
	#icerik{
		width:230px;
		padding:10px;
		border:5px solid #000; /* Bundan sonraki kısmı ie5win sakla */
		voice-family: ""}"";
		voice-family:inherit;
		width:200px;
	}

Burdaki ilk genişilk değeri(2. satırdaki) IE'un IE6/strict'den önceki
versiyonların yorumlayacağı genişlik değeri, ikinci genişlik değeri(7.
satırdaki) ise standart yorumu destekleyen web tarayıcılarının
kullanacağı değerdir. Bu kodlamada son olarak Opera 5 için bir kod
ekleyeceğiz.

	:::css
	#icerik{
		width:230px;
		padding:10px;
		border:5px solid #000; /* Bundan sonraki kısmı ie5win sakla */
		voice-family: ""}"";
		voice-family:inherit;
		width:200px;
	}
	html>body #icerik {
		width:200px;
	}

Not: Aynı şeyler yükseklik(height) içinde geçerlidir.

## Kaynaklar

-   [http://tantek.com/CSS/Examples/boxmodelhack.html][]
-   [http://css-discuss.incutio.com/?page=BoxModelHack][]
-   [http://www.createwebmagic.com/css101/lesson2/?inc=part3][]
-   [CSS Hacks and Filters : Making Cascading Stylesheets Work][]

  [100]: /images/basit_boxmodel.gif
  [1]: /images/box_model.gif
  [tantek]: http://www.tantek.com/CSS/Examples/boxmodelhack.html
  [http://tantek.com/CSS/Examples/boxmodelhack.html]: http://tantek.com/CSS/Examples/boxmodelhack.html
  [http://css-discuss.incutio.com/?page=BoxModelHack]: http://css-discuss.incutio.com/?page=BoxModelHack
  [http://www.createwebmagic.com/css101/lesson2/?inc=part3]: http://www.createwebmagic.com/css101/lesson2/?inc=part3
  [CSS Hacks and Filters : Making Cascading Stylesheets Work]: http://www.amazon.com/gp/product/0764579851/ref=sr_11_1/103-3062475-1085468?%5Fencoding=UTF8
