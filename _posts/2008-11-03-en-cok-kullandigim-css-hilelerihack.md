---
layout: post
title: En çok kullandığım CSS Hileleri(Hack)
Date: 2008-11-03 16:34
Category: CSS, Web Standartları, XHTML
tags: clearfix, Dreamweaver, float, hileler, Kutu-Modeli, min-height, snippets
---

Yaklaşık 3-4 senedir css ile web sayfası kodluyorum. CSS ile web sayfası
kodlarken en çok sorun çıkaran konulardan biri farklı tarayıcılar için
kod yazmaktır. CSS hileleri ile geçiştirdiğimiz bu farklı tarayıcılara
göre kod yazma işi bize aslında CSS ile sayfa kodlama imkanı sunması
bakımından önemlidir. Eğer CSS hileleri olması idi biz farklı
tarayıcılar için değil belirli tarayıcılar için kod yazmış olacaktık ki
bu erişebilirlik açısından ve müşteri istekleri açısından sorun
oluşturan bir durumdur.

Başta dediğim gibi 3-4 senedir CSS ile sayfa kodluyorum ve en çok
kullandığım css hilelerini burada yazmamın uygun olacağını düşündüm.
Çünkü birçok bu işi yeni başlayan arkadaş için önemli bir bilgi
olacağını düşünüyorum. Lafı fazla uzatmadan listemiz açıklayalım.



## 1- Kutu Modeli ve CSS hillesi

[Kutu modeli sorunları ve çözüm önerilerinde][]n bahsettiğimiz makale ve
bu konunun önemi açısından bu css hilesini başa aldık. Gerçekten birçok
yerde karşılaştığımız bu sorun kullanılması en karmaşık gelen bir
sorundur. Genel mantık olarak ie'nin özellikle 6 ve garip mod daki diğer
tarayıcılarında farklı görünmesini engellemek için tantek çelik
tarafından oluşturulan bir hiledir.

Kutu genişliği tanımlanmışsa ve padding veya kenar çizgiside
tanımladığımızda uygulanan bu yöntem için yazdığımız kod aşağıdadır

	:::css
	#icerik{
	width:230px;
	padding:10px;
	margin:5px; /* Bundan sonraki kısmı ie5win sakla */
	voice-family: "\"}\"";
	voice-family:inherit;
	width:200px;
	}
	html>body #icerik {
	width:200px;
	}

Sorun olan kodumuza biz sadece

	:::css
		voice-family: "\"}\"";
		voice-family:inherit;
		width:200px;
	}
	html>body #icerik {
		width:200px;
	}


Bölümünü uygulamamız yeterlidir. Daha sonra eğer genişlik ise genişliği
yükseklik ise yüksekliği ayarlamamız gerekir. Daha sonra **html>body
#icerik** kısmından **#icerik** yerine kendi nesne adımızı yazmalıyız.

## 2- Float uygulanmış nesnelerin kapsayamama sorunu

Aslında clearfix olarakta adlandırılan bu sorun bir çok yerde başımıza
dert olur. Alıştıktan sonra hemen uygular ve geçeriz.

Sorunumuzun genel tanımı Float uygulanmış bir elementi içeren kapsayıcı
element içeriğine göre genişlememesidir.

![float sorunu][]

Kodumuz;

	:::css
	.kapsul:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
	}

	.kapsul {display: inline-block;}

	/* IE-mac de bu bolumu sakla \ */
	* html .kapsul {height: 1%;}

	.kapsul {display: block;}
	/* IE-mac bu bolumu saklam artik */


Bu kodda **.kapsul** yerine kendi nesne ismimizi yazmamız yeterlidir.

## 3. IE6'un Tekrarlayan Karakter Sorunu

Bu hata birden fazla float uygulanmış iç içe elementlerde meydana gelir.
Son float uygulanmış elementin son karakterleri tekrarlar. Soruna nedeni
html yorum satırlarıdır ve çözüm için

	:::html
	<!--[if !IE]>Yorumunu buraya yaz <![endif]-->


Kodunu yazarız. Ben burada yorum yazarken bu sorunla karşılaşabilirim
diye tüm yorumlarımı bu şekilde yazarak bu sorundan kaçınmaya
çalışıyorum.

## 4. IE6'nın min-height Sorunu

Son zamanlarda gelen işlerde çok rastlamam nedeni ile bu listeye son
anda ilave ettim. IE6'nın desteklemediği min-height özelliği için

	:::css
	min-height:500px;
	height:auto !important;
	height:500px;

yazmamız yeterli.

Bunun dışında [CSS Derslerindeki][] sayfasındaki CSS Problemleri ve
Çözüm Önerileri kısmında birçok problem görünse de yukarıda saydıklarım
problemlerle çok sık karşılaşıyorum. Bu sorunlarla karşılaştığımda her
defasında siteye girip bu kodları kopyalamak sorun oluyor, bu nedenle
Adobe Dreamweaver'ın Snippets Aracı ile bu sorunu giderdim.

Dreamweaver'da Snippets eklemek çok basit. İlk olarak eğer açık değilse
Snippets penceresini açmak için üst menüden **Window -> Sineppets**
veya **shift+F9** kısayolu ile açabiliriz. Açtıktan sonra farenin sağ
tuşuna basarak **New Sineppet** tıklayalım.

![Dreamweaver Sineppet Penceresi][]

Açılan pencerede **Name** kısmına ismini yazalım(Örne: kutu hilesi)
**Insert Code** kısmına da kodumuzu ekleyelim.

![Dreamweaver Sineppet Penceresi][1]

Evet kodumuzu eklemiş olduk. Bu şekilde devamlı kullandığımız kodları
Sineppets penceresine ekleyerek kolaylık sağlayabiliriz.

![Dreamweaver Sineppet Penceresi][2]

Daha sonra kod yazarken bu kodlara ihtiyaç duyduğumuzda

![Dreamweaver Sineppet Penceresi][3]

Hemen bu pencereden ilgili başlığa çift tıklayarak kodumuzun içine
ekleyebiliriz.

![Dreamweaver Sineppet Penceresi][4]

  [Kutu modeli sorunları ve çözüm önerilerinde]: http://www.fatihhayrioglu.com/kutu-modeli-sorunlari-ve-cozumleri
    "Kutu modeli sorunları ve çözüm önerilerinde"
  [float sorunu]: /images/clearfix_sorun.gif
  [CSS Derslerindeki]: http://www.fatihhayrioglu.com/css-dersleri
    "CSS Dersleri Sayfası"
  [Dreamweaver Sineppet Penceresi]: /images/snippets13.gif
  [1]: /images/snippets2.gif
  [2]: /images/snippets3.gif
  [3]: /images/koda_hile_ekle1.gif
  [4]: /images/koda_hile_ekle2.gif
