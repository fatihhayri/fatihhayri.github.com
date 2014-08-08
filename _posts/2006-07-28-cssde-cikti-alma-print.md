---
layout: post
title: CSS&#039;de Çıktı alma (Print)
Date: 2006-07-28 00:38
Category: CSS
tags: CSS, çıktı-alma, import, print, yazıcı
---

Web sayfalarının çıktılarını almak her zaman sorunludur. Web sayfaları
web tarayıcılarında güzel görünürler ancak çıktı almak için uygun
değildirler. Web sayfalarında yazıların daha okunaklı olması için
sans-serif font ailesi kullanılır ancak çıktı için uygun olan font tipi
serif font ailesidir. Ayrıca bir çok site de çıktıda görünmememsi
gereken sol menü, banner ve alt kısım gibi alanlar vardır.

Bazı siteler ki, çoğunlukla önemli bazı haber siteleri her sayfanın bir
de çıktıya uygun hallerini de hazırlarlar. Ancak bu çok uğraş gerektiren
bir durumdur ve de zaman alacak bir iştir. Kullanışlı değildir.

CSS bu duruma el atarak basit bir çözüm getirmiştir. Çıktıya
uygun css kodu oluşturup bunu sayfamıza ekleyerek bu sorunları
halledebiliriz. Web tarayıcıları normal css kodunu yorumlarken yazıcıdan
çıktı almak istediğimiz de ise sizin hazırladığınız özel çıktı versiyonu
kullanılacaktır.

## Çıktı Almak için CSS Oluşturmak

Çıktı almak için oluşturduğumuz özel css'i sayfamıza eklemek çok kolay
bildiğimiz link ekleme koduna fazladan sadece **media** kısmı eklenerek
değeri **print** atanır.

	:::html
	<link rel="stylesheet" type="text/css" href="ciktistil.css" media="print">

Diğer bir yöntemde import kullanımıdır.

	:::css
	<style type="text/css">
    	@import url("webicin.css") screen;
    	@import url("ciktial.css") print;
	</style>

## Çıktıya Uygun CSS Hazırlarken Dikkat Edilecek Hususlar

**Fontları Değiştirmek**

İlk yapılacak şey fontları değiştirmektir. Yukarıda da belirttiğimiz
gibi web sitelerinde kolay okunurluluğu nedeni ile san-serif fontları
kullanılır( Verdana veya Arial gibi) çıktı almak içinse serif fontları
kullanılmalıdır(Times New Roman veya Garamond gibi) Örneğin sayfa
içindeki h1 veya p için yapılan sans-serfi fontları serif fontlarla
değiştirelim.

	:::css
	h1, p {
		font-family: Garamond, "Times New Roman", Times, serif;
	}

Web için verilen değerler **px** veya **em** yerine **pt** değeri
kullanılmalıdır. Çıktı alırken daha iyi sonuçlar verir.

	:::css
	h1 {
		font: 24pt Garamond, "Times New Roman", Times, serif;
	}

	p {
		font: 12pt Garamond, "Times New Roman", Times, serif;
	}

Ayrıca **line-height** değeri, **font-weight** değeri, **word-spacing**
ve **text-align** değerlerini de çıktı ama durumu için düzenlemeliyiz.
Bunu için we tarayıcılarının çıktı ön izleme özelliğinden
yararlanabilriz. Firefox web tarayıcısının bu ve diğer web düzenlemeleri
için güzel bir eklentisini de kullana bilrisiniz. Buradan
indirebilirsiniz. [http://chrispederick.com/work/webdeveloper/][]

**Bazı Elementleri Kaldırmak**

Sitemizdeki bazı elementler çıktı almamızda bize lazım olmayacaktır
örneğin sol menü, bannerlar vb. Bu elementleri elemeliyiz bunun en kolay
yöntemide **display:none**'dır.

Bir elementin **display** özelliğini "**none**" yaparak çıktı alırken
görütülenmesini engelleriz. Örneğin solmenu için #SolMenu tanımlması
yapmış isek

	:::css
	#SolMenu{
		display:none
	}

kodu ile bu bölümü çıktı alırken görüntü dışında bırakacağız. Bu yöntemi
formlar, menüler, bannerlar, ana resimler hariç diğer resimler vb.
gereksiz bölümleri bu şekilde çıkarmalıyız.

**Margin'ler, Renkler ve Diğerleri**

Çıktı alırken yazıların tabloları ve diğer elementlerin daha açık ve net
görünmesi için aralarına belirli mesafeler vermeliyiz.

	:::css
	table {
		margin-top:10px;
	}

	div {
		margin:10px
	}

Çıktı alacağımız sayfalarda **px** vd. birimler yerine **inç** birimini
kullanmak daha iyi sonuçlar verir.

	:::css
	table{
		margin:sin
	}

	div{
		margin:1in
	}


Renklerle ilgili olarakta şunu söyleyebilriz ki, web sitelerinde bir çok
renk kullanılır ancak bu renklerin çıktı alırken görünümü web
tarayıcılrdaki görünümüne benzemez, bu nednele fontları siyah veya
grinin toplarında yapmalıyız. Arkaplanı da beyaz yapmalıyız.

Bunu dışında diğer elementlerin çıktı alırken görünüşleri çıktı ön
izleme ekranından bakılarak çıktıya en uygun duruma getirilebilir.

Sonuçta yapılacakları kısa özetlersek:

-   Renklerin siyah-beyaz yapılması
-   Font ailelerinin serif yapılması
-   font-size değerlerinin ayarlanması
-   Tüm linklerin altının çizilmesi
-   Çıkarılması gereken bölümler için site yapısı katmanlardan
    oluşturlması
-   Ana resimler hariç diğerlerinin çıkarılması
-   Menülerin çıkarılması
-   Banner ve tanıtım yazılarının çıkarılması
-   Sağ, Sol ve alt bölümlerin çıkarılması
-   Tüm javascript, flash, form ve hareketli gif'lerin çıkarıtlması
    gereklidir.

  [http://chrispederick.com/work/webdeveloper/]: http://chrispederick.com/work/webdeveloper/
