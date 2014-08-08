---
layout: post
title: CSS3 RGBA Renk Tanımı
Date: 2010-09-22 22:55
Category: CSS, Web Standartları
tags: alfa kanalı, css3, renk tanımı, renk-birimleri, rgba, saydamlık
---

CSS ile renk değeri ataması yapılırken çeşitli yöntemler kullanıyoruz.
Daha önce [CSS Birimleri][]  makalemizde anlatmıştık. İki tip renk
tanımı var. Renk isimleri ile tanımlama(İngilizce renk isimleri)

	:::css
	background-color:red

tanımı kırmızı renkli bir ardalan elde etmemizi sağlar

RGB(Red-Green-Blue) yani Kırmızı-Yeşil-Mavi renklerin baz alındığı renk
standardı. Açıkçası ben projelerimde her zaman rgb standardını
kullanmaktayım.

	:::css
	background-color:#ff0000

Tanımı kırmızı renkte ardalanlar elde etmemizi sağlar. Bu tanımı birde
kısaltması mevcuttur. Eğer bir birine benzer 2’li elemanlardan oluşan
bir renk tanımı varsa yukarıdaki gibi benzer değerleri bir kere
yazarakta aynı sonucu elde edebiliriz.

	:::css
	background-color:#f00

Yukarıdaki tanımda bize kırmızı rengi verecektir.

Buraya kadar mevcut durumu özetlemeye çalıştım. Şimdi ise CSS3 ile gelen
renk tanımı yeniliğine göz atalım. RGBA ve HSLA tanımları yukarıdaki
renk tanımlarına ek olarak gelmiştir. Benzer kullanıma sahip olduğu için
ben sadece RGBA tanımı hakkında bilgi vereceğim sizlere, HSLA tanımıda
standart olarak farklı ama işlevsel olarak RGBA ile etkiyi vereceği için
RGBA tanımı anlatmak ile yetineceğim.

Renk değerlerini genelde web sitelerini kodlarken resim işleme
araçları(örn. Adobe Phoshop, Adobe Fireworks) aracılığı ile alırız. Bu
araçlar bize renk paleti olarak RGB, HSL değerlerini verir.

![][100]

CSS3 ile birlikte RGBA renk tanımıda eklenmiştir. Buradaki A harfi
Alfa’ya karşılık gelen bir karşılıktır. Alfa değeri renk tanımımıza
saydamlık etkisi katmaktadır. 0.0 ile 1 arasında değer alır. 0 değeri
etkisiz kılarken 1 değeri de katı bir renk ortaya çıkaracaktır. Ara
değerler bize saydamlık etkisi tanımlamamızı sağlayacaktır.

## RGBA Tanımı

Normalde css ile renk tanımı yaparken

	:::css
	 background-color:#1259C7

tanımı kullanıyorum. Benzer şekilde

	:::css
	background-color:rgb(18,89,199)

Tanımıda bize aynı sonucu verir. RGBA ile dördüncü değer olarak alfa
saydamlık derecesini ekleriz.

	:::css
	background-color:rgba(18,89,199,0.4)

Şeklinde bir tanım yapıyoruz. 0.4 değeri bize % 40’lık bir saydamlık
sağlayacaktır.

Durumu daha iyi anlamak için bir örnek yapalım

	:::css
	p.renk1{ background-color:rgba(18,89,199,0.2); width:70px; height:70px}
	p.renk2{ background-color:rgba(18,89,199,0.4); width:70px; height:70px}
	p.renk3{ background-color:rgba(18,89,199,0.6); width:70px; height:70px}
	p.renk4{ background-color:rgba(18,89,199,0.8); width:70px; height:70px}
	p.renk5{ background-color:rgba(18,89,199,1); width:70px; height:70px}


HTML kodu

	:::html
	<p class="renk1"></p>
    <p class="renk2"></p>
    <p class="renk3"></p>
    <p class="renk4"></p>
    <p class="renk5"></p>

Örneği görmek için [tıklayınız.][]

![][1]

RGBA ve opacity arasındaki fark; opacity tanımı yapılan bir eleman ve
tüm alt elemanlarına saydamlık uygulanırken, rgba ile tanımlanan
ardalanlarda sadece uygulanan elemanın ardalanı saydam olur içindeki
elemanlar saydam olmaz. Önceden bu gibi durumlarda 1x1 px değerinde
saydam bir png hazırlayıp ardalan resmi olarak tanımlardık.

Farklı kullanım alanları ve birçok avantajı vardır bizim için bu
tanımın. Örneği Facebook lightbox’ı olarak nitelendirilen bir görüntüyü
elde etmek çok basit bir hal alıyor bu özelliği kullanarak.

	:::css
	...
    border:10px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    ...

Örneği görmek için [tıklayınız.][2]

![][3]

CSS3 bize birçok avantaj sağlamaktadır. Bir nevi bize resim düzenleme
araçlarındaki esnekliği sağlamaktadır.

Örneğin [text-shadow][] özelliğindeki renk tanımında rgba kullanılırsa
çok güzel görüntüler elde ederiz. Örnek için
[http://nicewebtype.com/notes/2009/07/12/rgba-text-shadow-in-safari-firefox/][]
sitesini ziyaret ediniz.

Benzer bir şekilde [box-shadow][] özelliğindeki renk tanımında rgba
kullanılarak daha gerçekçi gölgeler elde ederiz.

Bu özelliğinde tek sorunu diğer CSS3 özelliklerindeki sorunumuz olan
İnternet Explorer desteğinin olmaması sorunu var. Henüz betası çıkmış
olan ie9 hariç hiç bir İnternet Explorer sürümü bu özelliği
desteklememektedir, ne yazıkki ie8 dahil hiç bir ie sürümü bu özelliği
desteklemiyor.

**Tarayıcı Uyumu:**
Internet Explorer desteklemiyor (İE9 destekliyor)
Firefox 3+
Safari 3+
Opera 10+
W3C’s CSS Level 3+
CSS Profile 3.0
{: .tarayiciuyum}

## İnternet Explorer için Çözüm Önerileri

Çözüm için CSS-Tricks’te bir çözüm önerisi var

	:::css
	p.renk1{
      background: rgb(200, 54, 54); /* desteklemeyenler icin */
      background: rgba(200, 54, 54, 0.5);
    }


Bu çözüm önerisinde desteklemeyen tarayıcılarda katı renk hali
görüntülenirken destekleyen tarayıcılar için saydam hali
görüntülenecektir.

Diğer bir yöntem;

	:::html
	<!--[if IE]>
      	<style type="text/css">
    	.color-block {
    		background:transparent;
    		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000050,endColorstr=#99000050);
    		zoom: 1;
    	}
    	</style>
    <![endif]-->

Şeklinde sadece ie için üretilen bir kod ile çözüm sağlanır destekleyen
tarayıcılar için standart kod kullanılır.

## Kaynaklar

-   [http://24ways.org/2009/working-with-rgba-colour][]
-   [http://www.w3.org/TR/css3-color/#rgba-color][]
-   [http://css-tricks.com/rgba-browser-support/][]
-   [http://www.gograybox.com/blog/qt-css3-rgba/][]
-   [http://forabeautifulweb.com/blog/about/is_css3_rgba_ready_to_rock][]
-   [http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/][]
-   [http://www.css3.info/introduction-opacity-rgba/][]
-   [http://dorward.me.uk/www/css/alpha-colour/][]
-   [http://www.robertnyman.com/css3/rgba/rgba.html][]
-   [http://nicewebtype.com/notes/2009/07/12/rgba-text-shadow-in-safari-firefox/][]

  [CSS Birimleri]: http://www.fatihhayrioglu.com/css-birimleri/
  [100]: /images/renk_paleti-300x197.jpg
  [tıklayınız.]: /dokumanlar/rgba_renk_tanimi.html
  [1]: https://lh6.googleusercontent.com/d9gcgCNkBoIwGgX75ZjloztSepGOGXHSAwmeaDTOlQqYRn4rTS50kS59JKxAC6qmSgfxdSTLeWyJzABoNAaIAj_bwoDTFOf3wULF3Xq6_7zNKyY5Xg
  [2]: /dokumanlar/rgba_renk_tanimi2.html
  [3]: https://lh5.googleusercontent.com/mtFDIUdPs-VFwWWJ5jBYK3uD3je_AZcnVQ404x_QX1d1tatFUtivIO3zKLeTHCuHKOwOakSk0vLBGAyXjN270P9NH3HLkpfj5Goy5kZT7TUivjQzKA
  [text-shadow]: http://www.fatihhayrioglu.com/css-ile-metinlere-golge-vermek/
  [http://nicewebtype.com/notes/2009/07/12/rgba-text-shadow-in-safari-firefox/]: http://nicewebtype.com/notes/2009/07/12/rgba-text-shadow-in-safari-firefox/
  [box-shadow]: http://www.fatihhayrioglu.com/kutulara-golge-vermek-box-shadow/
  [http://24ways.org/2009/working-with-rgba-colour]: http://24ways.org/2009/working-with-rgba-colour
  [http://www.w3.org/TR/css3-color/#rgba-color]: http://www.w3.org/TR/css3-color/#rgba-color
  [http://css-tricks.com/rgba-browser-support/]: http://css-tricks.com/rgba-browser-support/
  [http://www.gograybox.com/blog/qt-css3-rgba/]: http://www.gograybox.com/blog/qt-css3-rgba/
  [http://forabeautifulweb.com/blog/about/is_css3_rgba_ready_to_rock]: http://forabeautifulweb.com/blog/about/is_css3_rgba_ready_to_rock
  [http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/]: http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/
  [http://www.css3.info/introduction-opacity-rgba/]: http://www.css3.info/introduction-opacity-rgba/
  [http://dorward.me.uk/www/css/alpha-colour/]: http://dorward.me.uk/www/css/alpha-colour/
  [http://www.robertnyman.com/css3/rgba/rgba.html]: http://www.robertnyman.com/css3/rgba/rgba.html
