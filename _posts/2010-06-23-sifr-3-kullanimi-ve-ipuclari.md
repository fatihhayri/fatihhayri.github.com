---
layout: post
title: sIFR 3 Kullanımı ve İpuçları
Date: 2010-06-23 22:23
Category: CSS, XHTML
tags: ipuçları, metin yerine resim koyma, sFIR
---

![][100]

Bu makaleyi çok önce yazmayı planlıyordum, ancak üzerinden
zaman geçmesine rağmen hala sIFR kullanılan bir yöntem olduğu için
yinede yazıyı yazmaya karar verdim. Her nekadar font-face kull anımı
bize bu tip alternatiflerden alıkoymak için çıktı ise de [daha öncede bahsettiğimiz gibi][] tasarımdaki anti-aliasing özelliğini sağlayamıyor
maalesef. Bundan dolayı hala eski yönte mleri kullanmaya devam
etmekteyiz.

Aslında ben sIFR kullanımını daha önce anlattım.  [Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)][] yazısının içinde
sIFR kullanımını anlattım. Burada sIFR'ın yeni sürümünü ve ipuçlarını
yazacağım. 

sIFR3'ün son sürümünü [http://dev.novemberborn.net/sifr3/nightlies/][]
adresinden en üstteki bağlantıdan son sürümü indirebilirsiniz.

[Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)][]
yazısında genel olarak sIFR'ın nasıl ekleneceği konusunda bilgi verdik.
Bu nedenle işin bu kısmını geçip sIFR3 ile yeni ne geldi onu
göstereceğiz ve artı ipuçları vereceğiz.

**sFIR 2 ile sIFR 3 eklenen dosya farkları**

İlk olarak sIRF 2'den farklı olarak sIFR 3 eklene dosyalar farklıdır ve
özellik tanımları için ek olarak **sifr-config.js** dosyası ile daha bir
düzen getirilmiştir.

sIFR için sayfamıza eklememiz gereken dosyalar.

-   style/sIFR-print.css
-   style/sIFR-screen.css
-   js/sifr-config.js
-   js/sifr.js
-   swf/*humanist*.swf (Sizin oluşturduğunuz swf dosya ismi)

**sifr-debug.js** dosyasını sadece deneme yaparken kolay hata yakalamak
için kullanmamız içindir, yayına atarken bu dosyayı eklemeye gerek yok.

sIFR örneklerimizi kendi bilgisayarımızda çalıştırmaya çalıştığımızda
görünmeyecektir, sadece web sunucusu kurulu makinelerde çalışacaktır. Bu
daha önceden meydana gelen bazı sorunları gidermek için eklenmiş bir
özelliktir.

	:::html
	<link rel="stylesheet" href="style/sIFR-screen.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="style/sIFR-print.css" type="text/css" media="print" />
	<script type="text/javascript" src="js/sifr.js"></script>
	<script type="text/javascript" src="js/sifr-config.js"></script>

Yukarıdaki bir ekleme ile sIFR harici dosyalarını sayfamıza eklemeliyiz.

Bu dosyaları yerlerine koyup sayfamıza kodu ekledikten sonra yapacağımız
ilk şey **sifr-config.js** dosyasını açıp swf dosyamızın yerini doğru
bir şekilde eklemek olmalıdır.

	:::javascript
	var yazi_tipi = {
	     src: '/dosya_yolu/yazi_tipi.swf'
	};
	sIFR.activate(yazi_tipi);
	sIFR.replace(yazi_tipi, {
	       selector: 'h2'
	});

Şeklinde örnek aldığımız kodlardan **yazi_tipi** adı geçen yerlere
kendi dosya ismimizi yazmalıyız.

**sIFR metnine Stil Vermek**

sIFR ile eklediğimiz metinlere css kodları ile özellik tanımı
yapabiliriz. Alışık olduğumuz CSS özellik tanımlarını kullanma olanağı
vererek bize çok büyük avantaj sağlıyor.

	:::javascript
	sIFR.replace(yazi_tipi, {
	      selector: 'h2',
	      css: [
	      '.sIFR-root { font-size:36px; font-weight:bold; color:#ff0000; letter-spacing: -1.5}'
	      ]
	});

Örnek olması için yukarıda kodları yazdım, ancak bu kısma istediğimiz
kodları ekleyebiliriz. letter-spacing tanımı ile harfler arası mesafeyi
ayarlayabiliriz. Değeri verirken birimini yazmıyoruz. Benzer şekilde bir
çok özellik ekleyebiliriz.

**Satır yüksekliğini ayarlamak**

	:::javascript
	sIFR.replace(yazi_tipi, {
	      selector: 'h2',
	      css: [
	      '.sIFR-root { font-size:36px; font-weight:bold; leading: 1; letter-spacing: -1.5}'
	      ]
	});

**leading: 1** tanımı satır yüksekliğini(line-height tanımı yerine
kullanılır) ayarlamak için kullanılır. Değer verilirken birim
kullanılmaz. Eksi değer alabilir.

**sIFR metinlerine bağlantı eklemek ve stil tanımlarını yapmak**

sIFR uygulana metinlere bağlantı(<a>) ekleyebiliriz, bağlantı
eklediğimizde bunun için birde stil tanımı yapmalıyız.

HTML kodu

	:::html
	<h2>
		<a href="#">Başlık</a>
	</h2>


sifr-config.js dosyasında

	:::javascript
	sIFR.replace(yazi_tipi, {
	  selector: 'h2'
	  ,css: [
	    '.sIFR-root { text-align: center; font-weight: bold; }'
	    ,'a { text-decoration: none; }'
	    ,'a:link { color: #000000; }'
	    ,'a:hover { color: #CCCCCC; }'
	  ]
	});

Yukarıdaki tanımlama ile eklediğimiz bağlantının farklı durumları içinde
tanım yapabiliyoruz. 

Benzer şekilde sIFR uyguladığımız eleman içindeki elemanlarada stil
ekleyebiliriz. Örneğin

	:::javascript
	sIFR.replace(yazi_tipi, {
	       selector: 'h2',
	       css: [
	       '.sIFR-root { font-size:24px; font-weight:normal; color:#9f0000; }',
	       'em { font-style:italic; }',
	       'strong { font-weight:bold; color:#333333; }'
	       ]
	});

Böylece sIFR içindeki her elemana farklı renk tanımı yapabiliriz.

**Saydam(transparent) Özelliği Vermek**

sIFR ile eklediğimiz metnin altında kalan alanlar nedeni ile bazen
saydam olarak eklemek isteriz.  Yapmamız gereken çok basittir. Bir satır
kod ile ardalanı saydam yapabiliriz.

	:::javascript
	sIFR.replace(yazi_tipi, {
	      selector: 'h2',
	      css: [
	      '.sIFR-root { font-size:36px; font-weight:bold; color:#ff0000; }'
	      ],
	wmode: 'transparent'
	});

**wmode: 'transparent'**eklemesi işimizi görecektir.

**Dinamik Oluşturulan İçerikteki Metinlere sFIR Uygulamak**

Örneğin sekmeli bir içeriğin içindeki başlıklara sIFR uyguladığımızda
sFIR sayfa yüklendiğinde uygulandığından diğer sekmelerdeki metinlere
uygulanmayacaktır. Diğer sekmelerdeki metinlerede uygulamak için her
sekme için uygulanan sFIR fonksiyonu çağırmalıyız.

	:::javascript
	$(tabs).click(function () {
	    // her sekme icin uygulana tanimlar
	    //diger eylemler

	    // uygulana sFIR fonksiyonunun tetikliyoruz.
	    sIFR.replace(baslik, {
	        selector: 'h1'
	        ,wmode: 'transparent'
	        ,css: [
	          '.sIFR-root { margin:0; color: #009200; font-size:20px;}'
	        ]
	    });

	});

## Sonuç

Birçok projemde kullandım sFIR metodunu. Gördüklerim buraya
yazmayaçalıştım. Eğer sizinde eklemek istediğiniz ipuçları varsa yorum
kısmınaeklerseniz güzel bir dokümantasyon oluşturmuş oluruz.

## Kaynaklar

-   [http://v4.designintellection.com/this-is-how-you-get-sifr-to-work/][]
-   [http://net.tutsplus.com/tutorials/javascript-ajax/how-to-implement-sifr3-into-your-website/][]

  [100]: /images/sifr1.gif "sifr"
  [daha öncede bahsettiğimiz gibi]: http://www.fatihhayrioglu.com/webde-yazi-tipi-sorunlari-ve-google-font-api/
    "daha öncede bahsettiğimiz gibi"
  [Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)]: http://www.fatihhayrioglu.com/metin-yerine-resimflash-ekleme-teknikleri-image-replacement/
    "Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)"
  [http://dev.novemberborn.net/sifr3/nightlies/]: http://dev.novemberborn.net/sifr3/nightlies/
    "http://dev.novemberborn.net/sifr3/nightlies/"
  [http://v4.designintellection.com/this-is-how-you-get-sifr-to-work/]: http://v4.designintellection.com/this-is-how-you-get-sifr-to-work/
    "http://v4.designintellection.com/this-is-how-you-get-sifr-to-work/"
  [http://net.tutsplus.com/tutorials/javascript-ajax/how-to-implement-sifr3-into-your-website/]: http://net.tutsplus.com/tutorials/javascript-ajax/how-to-implement-sifr3-into-your-website/
    "http://net.tutsplus.com/tutorials/javascript-ajax/how-to-implement-sifr3-into-your-website/"
