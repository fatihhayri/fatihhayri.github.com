---
layout: post
title: Sabit Konumlandırma (Postion:fixed)
Date: 2007-12-11 22:41
Category: CSS, Javascript, XHTML
tags: absolute, CSS, expression, fixed, Haberler, Javascript, postion, sabit, sayfa-dibine-yapışık, XHTML
---

Bu konuya bir çalışmam dolayısıyla **position:fixed** özelliğini
kullanma gereksinimi duyduğum için girdim, sonra araştırma sonuçları bir
makale konusu olabileceğini düşünerek bu makaleyi yazdım. Biraz
araştırınca birden fazla yöntem olduğunu gördüm. Bir ikisini uyguladım
ve sonuçta birinde karar kıldım. Sizlere bu süreci ve **postion:fixed**
hakkında genel bir bilgi sunacağım.

Bu konuya daha önce [CSS ile konumlandırma(positioning)][] kısmında
kısaca değinmiştik.

"Sabitkonumlandırma Mutlak Konumlandırmanın bir alt kategorisidir. Sabit
konumlandırılmış elementin sayfadaki görünümü çok farklıdır. Bunu
özellikle web sayfasında bir elementin konumunu sabitlemek için
kullanabiliriz. Sabit konumlandırma ile yerleştirilmiş element
belirtilen yerde asılı kalacaktır. Web tarayıcısının kaydırma çubuğu
aşağı yukarı kaydırılması ile Sabit Konumlandırma ile yerleştirilmiş
elementin yeri değişmeyecektir ve sabit kalacaktır. Ne yazık ki IE 6 bu
özelliği desteklemiyor. IE 7 strick yorumlayıcısı kullanılıyorsa
destekliyor diğer hallerde desteklemiyor. "

Şeklinde genel bir bilgi verip bırakmıştık. Şimdi biraz daha ayrıntısına
inelim.

Sabit konumlandırmayı sayfanın belli bir alanını sabitleyip diğer
alanları bu kısmın yanından, altından kaydırmak için kullanırız genelde.

Aslında bunun için CSS bize **position:fixed** kodunu sunmaktadır. Ancak
bu kodu IE6 ve önceki sürümlerde desteklememesi bize alternatif çözümler
aramaya sevk ediyor. Buda bize bir makale yazma gereksinimi doğuruyor.

İlk metodumuz normal konumlandırma özelliğinin fixed uygulanmış
şeklidir.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<style type="text/css">
	body {
		margin:0;
		padding:0;
	}
	div#ustKisim {
		position:fixed;
		background: gray;
		color: yellow;
		height:50px;
		width:100%;
		top:0;
		left:0;
	}
	div#icerik {
		margin:75px 0 0 0;
	}
	</style>
	</head>
	<body>
		<div id="ustKisim">Lorem ipsum dolor sit amet</div>
		<div id="icerik">
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam nec erat. Fusce magna massa, nonummy eget, aliquam tempus, imperdiet vel, odio. Sed mauris. Quisque sodales urna vitae lorem. Vestibulum aliquet, odio aliquam convallis lobortis, turpis metus semper ligula, ut vulputate sem justo eu quam. Sed feugiat, lectus sit amet porttitor auctor, nulla odio volutpat nisl, sit amet egestas augue diam at urna. Sed justo arcu, luctus eget, porta in, auctor sit amet, massa. Integer interdum. Nunc condimentum scelerisque enim. Pellentesque orci. Maecenas at neque. Sed non diam ac turpis pretium dictum. Phasellus ligula felis, aliquet nec, tristique non, posuere a, magna. Duis eu quam quis tortor vehicula sodales. Donec et mi eget augue bibendum interdum. Proin dapibus odio.</p>
	</body>
	</html>

Örneği görmek için [tıklayınız.][]

Baştada belirttiğimiz gibi buradaki en büyük sorunumuz IE6 ve daha eski
sürümlerde bu kodun çalışmamasıdır. Bundan sonraki metot buna çözüm
aramak içindir.

## IE6'da çalışan postion:fixed metodu

Bu metot IE'un css içinde **expression()** komutunu yardımı ile
javascript kodu işletmemize izin vermesi prensinden dayanır. Bizde bu
metodda bu komut yardımı ile **position:fixed** sorununu çözeceğiz.
**expression()** yardımı ile daha önce IE'nin [min-width ve min-height sorununu][] çözdüğümüzü hatırlayın.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Sabit Konumlandırma</title>
	<style>
	body {
		background: #ffc;
		font: 12px sans-serif;
		margin: 0;
		padding: 0;
	}
	div#ustAlan {
		width: 100%;
		height: 100px;
		background: pink;
		position: fixed;
		top: 0;
		left: 0;
		z-index:100;
	}
	#icerik{
		position:absolute;
		top:105px;
	}
	</style>
	<!–[if lt IE 7]>
	<style>
	body {
		background: #ffc url(’http://’) fixed;
	}
	div#ustAlan {
		position: absolute;
		top: expression(eval(documentElement.scrollTop));
	}
	</style>
	<![endif]–>
	</head>
	<body>
		<div id="ustAlan">Sabit Konumlandırma</div>
		<div id="icerik">
		<p>Lorem ipsum dolor sit amet ….</p>
		</div>
	</body>
	</html>

![Sabit Konumlandırma][]

Örnek sayfayı görmek için [tıklayınız.][1]

Yukarıdaki kodu iki kısımda inceleyebiliriz. Birinci kısım ilk örnekte
olduğu gibi **position:fixed** kullanılan IE7, FF, Opera ve Safari için
yazılan kısımdır. İkinci kısım IE7'den önceki sürümleri belirten şartlı
koşul içerisindeki kodlamadır. Bu sürümlerde **position:fixed**
desteklenmediği için **postion:absolute** değeri atanmış ve üst
değerimizi(top) javascript'in **documentElement.scrollTop** değeri
yardımı ile belirlenip sabitlenmiştir.

Ayrıca alt alanı sabitlemek için

	:::css
	bottom: auto; top: expression((documentElement.scrollTop + documentElement.clientHeight – this.clientHeight));

Kodlaması kullanılır. Örneği görmek için [tıklayınız.][2]

Sabitlemek istediğimiz nesneyi üstten 10piksel aşağıda sabitlemek için

	:::css
	top: expression(eval(documentElement.scrollTop) + 10);

şeklinde kodlarız. Bu kodlama tekniği kullanılarak birçok farklı şablon
elde edilebilir.

Bu yöntemin bazı sorunları vardır, bunlara değinmeden geçmeyelim.

-   Bu metot IE5'de ve IE7, IE6'da [garip modda][] çalışmaz.
-   Bu metot javascript'in hizmet dışı bırakıldığı tarayıcılarda
    çalışmaz.
-   **background: url('http://') fixed;** anlamsız kodu
    kullanılmaktadır. Bu kod kaydırma çubuğu hareket ettikçe sabitlenen
    nesnenin kıpranmaması içindir.

Bunun dışında bir çok alternatif yöntem vardır. Benim deneyip en son
kullanmaya karar verdiğim metot bu olduğu için sizlere bu kodu
gösterdim. Ancak diğer örnekleri görmeniz için alternatif çalışmaların
linklerini kaynaklar kısmında sizlere vereceğim.

## Kaynaklar

-   [http://home.tampabay.rr.com/bmerkey/examples/fake-position-fixed.html][]
-   [http://tagsoup.com/cookbook/css/fixed/][]
-   [http://annevankesteren.nl/test/examples/ie/position-fixed.html][]
-   [http://annevankesteren.nl/2005/01/position-fixed-in-ie][]
-   [http://annevankesteren.nl/2004/07/fixed-positioning][]
-   [http://www.howtocreate.co.uk/fixedPosition.html][]
-   [http://www.cssplay.co.uk/layouts/fixed.html][]
-   [http://www.cssplay.co.uk/layouts/body2.html][]
-   [http://www.cssplay.co.uk/layouts/fixit.html][]
-   [http://www.gunlaug.no/contents/wd_additions_15.html][]
-   [http://www.gunesintamicinde.com/ie-6-ve-position-fixed-problemi/][]

  [CSS ile konumlandırma(positioning)]: http://www.fatihhayrioglu.com/?p=151
    "konumlandırma makalesi"
  [tıklayınız.]: /dokumanlar/sabit_konum_ornek1.html
  [min-width ve min-height sorununu]: http://www.fatihhayrioglu.com/?p=182
  [Sabit Konumlandırma]: /images/sabit_konum_ust.gif
  [1]: /dokumanlar/sab_konum_ust.html
  [2]: /dokumanlar/sab_konum_alt.html
  [garip modda]: http://www.fatihhayrioglu.com/?p=164
  [http://home.tampabay.rr.com/bmerkey/examples/fake-position-fixed.html]: http://home.tampabay.rr.com/bmerkey/examples/fake-position-fixed.html
  [http://tagsoup.com/cookbook/css/fixed/]: http://tagsoup.com/cookbook/css/fixed/
  [http://annevankesteren.nl/test/examples/ie/position-fixed.html]: http://annevankesteren.nl/test/examples/ie/position-fixed.html
  [http://annevankesteren.nl/2005/01/position-fixed-in-ie]: http://annevankesteren.nl/2005/01/position-fixed-in-ie
  [http://annevankesteren.nl/2004/07/fixed-positioning]: http://annevankesteren.nl/2004/07/fixed-positioning
  [http://www.howtocreate.co.uk/fixedPosition.html]: http://www.howtocreate.co.uk/fixedPosition.html
  [http://www.cssplay.co.uk/layouts/fixed.html]: http://www.cssplay.co.uk/layouts/fixed.html
  [http://www.cssplay.co.uk/layouts/body2.html]: http://www.cssplay.co.uk/layouts/body2.html
  [http://www.cssplay.co.uk/layouts/fixit.html]: http://www.cssplay.co.uk/layouts/fixit.html
  [http://www.gunlaug.no/contents/wd_additions_15.html]: http://www.gunlaug.no/contents/wd_additions_15.html
  [http://www.gunesintamicinde.com/ie-6-ve-position-fixed-problemi/]: http://www.gunesintamicinde.com/ie-6-ve-position-fixed-problemi/
