---
layout: post
title: Internet Explorer 6 için saydam PNG desteği
Date: 2008-04-28 09:02
Category: Haberler, Web Standartları
tags: [AlphaImageLoader, ie6, internet explorer, saydam png, transparent png]
---

"PNG, "Taşınabilir Ağ Grafiği" anlamındaki (Portable Network Graphics)
'in kısaltmasıdır ve kayıpsız sıkıştırarak görüntü saklamak için
kullanılan bir saklama biçimidir. PNG biçiminde paletli ya da gerçek
renkte görüntüler seçimlik bir saydamlık kanalıyla saklanabilir."
şeklinde tanımlanmış vikipedi'da

PNG - GIF

-   PNG dosyaları GIF'e göre daha fazla sıkıştırılır, yani daha az yer
    kaplar
-   GIF 256 renk desteklerken PNG 48 bit trucolor destekler
-   GIF sadece binary saydamlığı desteklerken PNG alfa kanal desteğiyle
    sınırsız saydamlık sağlar.

PNG'nin GIF'e göre tek dezavantajı hareketli resimler desteklememesi idi
ki bunuda hallettiler. Firefox3 ile birlikte Hareketli PNG desteğinin
geleceğine dair haberler geliyor kulağımıza.

PNG kullanımın en büyük avantajı alfa kanılı desteği ile bizlere
kusursuz geçiş efekti olanağı sunmasıdır.

Web dünyasında PNG yayılmasını engelleyen en büyük sebep Internet
Explorer'ın PNG desteğini 7. sürümüne kadar desteklememesidir. Tabi web
kodlayıcıları Internet Explorer'ı beklemeden bazı düzeltme kodları
üretti. Internet Explorer'ın desteklediği **filter**'ın
**AlphaImageLoader** özelliği sayesinde saydam PNG desteği sağlanmıştır.

	:::css
	img {
		filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(...);
	}

Bu kod problemimizi çözdü, ancak tümünü değil.

## Saydam PNG düzeltmesi ile ilgili sorunlar

**W3C ve Diğer farklı tarayıcı desteğinin olmayışı.**

Bu kodu w3c ve diğer tarayıcılar desteklemediği için site
doğrulamalarında(validation) sorun yaşamaktadır.

**Artalan(background) olarak kullanımdaki sorunlar**

Artalan olarak kullanılan saydam PNG'lerde konumlandırma ve yenileme
özelliklerinin kullanılamaması sorunlarına neden oldu.

**Geç yükleneme ve fazla kaynak kullanımı**

AlphaImageLoader ile yüklenen resimler normal resme göre daha yavaş
yükleniyor ve daha fazla kaynak tüketiyor. Ancak bu durum sadece ie6
kullanıcıları için geçerlidir.

**Linklerde tıklama ve formlarda odaklanma sorunları**

Artalan resmi olarak saydam png uygulanan elemanların içinde link
bulunuyorsa bu linkler üzerine gidince tıklanamaz görünüyor ve form
elemanlarıda odaklanamaz oluyor. **İlk yüklemede gösterilmeyen png'lerde
ve Javascript ile oluştulmuş pnglerde sorun çıkarıyor**

Bir içerik sayfa yüklendiğinde görünmez ise ve linke tıklayınca
açılıyorsa png düzenlemesi işe yaramıyor.

Bir çok sorunları olmasına karşın tasarımcıların kod yazarlarını
zorlayan sayfa tasarımlarını saydam PNG desteği olmadan çözmemiz çok
zor. Bu nedenle sizlere saydam PNG kullanmanın yolları gösterecek bir
iki örnek yapacağım. Benim kullandığım yöntem çok iyidir süperdir sakın
başka yöntem kullanmayın demiyorum ben bu yöntemi kullanıyorum çünkü
karşılaştığım tüm sorunların üstesinden bu yöntem geldi. Siz kaynaklar
kısmındaki linkleri takip ederek farklı yöntemleri uygulayabilirisiniz.

İlk olarak bir saydam PNG resmini sitemize ekleyelim. Benim logomun bir
gif birde png halini hazırlayıp saydam PNG'nin gözle görülür faydasını
anlayalım.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Saydam PNG</title>
	<style>
	.kutu{
		background:url(images/ardalan.gif) top left no-repeat;
		height:80px;
		padding:10px
	}
	</style>
	</head>
	<body>
	    <div class="kutu"><img src="images/fatihhayri_logo.gif" alt="Logo" width="166" height="82" /></div>
	    <p>fatihhayri_logo.gif uygulaması</p>
	    <div class="kutu"><img src="images/fatihhayri_logo.png" alt="Logo" width="166" height="82" /></div>
	    <p>fatihhayri_logo.png uygulaması</p>
	</body>
	</html>

Örnek sayfayı görmek için [tıklayınız.][]

![Saydam PNG resim][]

Yukarıdaki örnek görüldüğü gibi logonun kenarlarındaki geçiş kısmında
gif ve png arasında bariz farklar var. Yukarıdaki görüntüyü yeni nesil
tarayıcılarda göreceğiz. Ama İnternet Explorer 6 ve önceki versiyonlarda
görüntü aşağıdaki gibi olacaktır.

![saydam png ie6][]

Kırmızı ile işaretlediğim ve resmi saran bir gri alan gibi saracaktır.
Bunun anlamı bu tarayıcının saydam PNG desteğinin olmadığıdır. Bu sorunu
gidermek için yukarıda bahsettiğimiz İnternet Explorer 6'nın
desteklediği **filter** tekniği uygulayacağız.


	:::javascript
	function fixpngs(){
	var l = document.getElementsByTagName('img');
		for(i=0;i<l.length;i++){
		p = 'images/0.gif';
		n = l[i].getAttribute('src');
		g = n.toLowerCase();
			if(g.substring(g.length-3)=="png"){
			l[i].setAttribute('src',p);
			l[i].style.cssText="filter: progid:DXImageTransform.Microsoft.AlphaImageLoader (src='"+n+"')";
			}
		}
	}
	window.onload = fixpngs;

Yukarıdaki js dosyasını incelersek. Sayfadaki tüm resimleri tarayıp png
uzantılı olanları bulup IE'nin göstereceği stil özelliklerini bu png'ye
atayacaktır. Birde burada bize saydam 1x1 saydam gif resmi gerekecektir.
Bu saydam gif resim alanını dolduracaktır. Bu saydam gifi koymazsak
resmin sol üstünde kırmızı x işareti çıkacaktır.

Yukarıdaki kodlamada kalın olarak belirttiğimiz yere siz kendi saydam
1x1 gif'inizin yerini yazacaksınız.

Benim bu yöntemi kullanmamın nedeni bir projede dinamik oluşturduğum
saydam PNG ve sayfa yüklendiğinde görünür olmaya(display:none) sonradan
görünen alanlardaki saydam PNG ile yaşadığım sorunları bu kodun
çözmesidir.

Yukarıdaki kodu sayfamıza sadece IE7 öncesi görecek şekilde eklersek

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Saydam PNG</title>
	<style>
	.kutu{
	background:url(images/ardalan.gif) top left no-repeat;
	height:80px;
	padding:10px
	}
	</style>
	<!--[if lt IE 7]>
	<script type="text/javascript" src="pngDuzenlemeKodu.js"></script>
	<![endif]-->
	</head>
	<body>
	    <div class="kutu"><img src="images/fatihhayri_logo.gif" alt="Logo" width="166" height="82" /></div>
	    <p>fatihhayri_logo.gif uygulaması</p>
	    <div class="kutu"><img src="images/fatihhayri_logo.png" alt="Logo" width="166" height="82" /></div>
	    <p>fatihhayri_logo.png uygulaması</p>
	</body>
	</html>

Örneği görmek için [tıklayınız.][1]

![saydam png ie6][2]

Yukarıdaki ekran görüntüsü Internet Explorer 6'da sayfamızın
görüntüsüdür.

## Ardalan resmi olarak saydam PNG kullanımı

Resimlerde kullanımının dışında ardalan(background) resmi olarakta
saydam PNG resimlerini kullanmamız gerekebilir. Benim en çok
karşılaştığım durumlar resimlerin üzerine dinamik içerikli gölgeli
kutular eklemk istediğimde ve renk geçişli ardalanların üzerine konan
dinamik içerikli kutular eklemek istediğimde saydam PNG kullanmam
gerekiyor. Tabi bir çok durumda gerekebilir, ben burada kafamızda bir
örnek oluşması için bu örnekleri verdim.

Bu duruma örnek bir tasarıma bakarsak.

![Örnek Tasarım][]

Yukarıdaki bir tasarımda. Ardalanında resim olan tasarım üzerindeki
gölgeli dinamik içerikli kutu bizi saydam PNG kullanmaya itiyor.
Ardalandaki resmin farklı sayfalarda değişeceğini düşünerek kodlayalım.

![Örnek Kesim][]

Bu bölüm farklı düşünülerek de kodlanabilir. Ben photoshop'da üç alanı
saydam png olarak kaydettim

![][100]

Saydam png kullanımının farklı yönlerini anlatmak için bu bölümü 3 kısma
ayırdık. Bu şekilde kodumuzu yazarsak:


	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Saydam PNG</title>
	<style>
	#resim{
	background:url(images/ardalan_resmi.jpg) top left no-repeat;
	width:400px;
	padding-top:15px;
	height:300px;
	}
	#icerik{
	width:207px;
	margin-left:15px;
	}
	#icerikUstu{
	background:url(images/icerik_ust.png) top left no-repeat;
	height:10px;
	}
	#metinAlani{
	background:url(images/icerik_orta.png) top left repeat-y;
	font:11px Arial, Helvetica, sans-serif;
	padding:0 10px
	}
	</style>
	</head>
	<body>
	<div id="resim">
	<div id="icerik">
	<div id="icerikUstu"><img src="images/0.gif" width="1" height="1" /></div>
	<div id="metinAlani"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent ultricies orci quis erat. Nulla vulputate sapien sit amet elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed nunc. In at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut augue. Phasellus scelerisque vehicula orci.</div>
	<div id="icerikAlt"><img src="images/icerik_alt.png" width="207" height="18" alt=" " /></div>
	</div>
	</div>
	</body>
	</html>

Örnek sayfayı görmek için [tıklayınız.][3]

![Saydam PNG ardalan olarak kullanımı][]

Burada beyaz gölgeli kutumuz dinamik olduğu için içeriğin artması ile
şekli bozulmayacaktır.

![Saydam PNG ardalan olarak kullanımı][4]

Buraya kadar her şey güzel görünsede Internet Explorer 6'da bu sayfaya
baktığımızda işin rengi değişecektir.

![Saydam PNG ardalan olarak kullanımı][5]

Yukarıdaki resimde görüldüğü gibi saydam png resimlerinin saydam olan
kısımları gri bir çerçeve ile kaplanmış gibi görünüyor. Yukarıdaki
kodumuz ekleyerek bu sorunu halledebiliriz.

	:::html
	<!--[if lt IE 7]>
		<script type="text/javascript" src="pngDuzenlemeKodu.js"></script>
	<![endif]-->

Ancak bu kod bize sadece alt kısma eklediğimiz resmi düzeltmeye
yaracaktır. Orta ve üst kısımların ardalanında kullandığımız saydam png
doyarının görünümü yine sorun görülecektir.

![Saydam PNG ardalan olarak kullanımı][6]

Peki bunun için bir çözüm yok mu? Elbette var. Yine filter özelliğin
kullanarak bu işe bir çözüm getireceğiz.

	:::html
	<!--[if lt IE 7]>
	<style>
	#icerikUstu{
	    background:transparent;
	    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/icerik_ust.png', sizingMethod='crop');
	}
	</style>
	<script type="text/javascript" src="pngDuzenlemeKodu.js"></script>
	<![endif]-->

Yukarıdaki kodu sayfamıza eklediğimizde IE6 içeriğin üst kısmına
uyguladığımız ardalan resmi düzgün görüntülenecektir. Bu koda dikkat
edersek. daha önce atadığımız ve yeni nesil tarayıcılarda görünen
background özelliği sıfırlanıyor(**background:none**) Daha sonra filter
özelliği uygulanıyor. Burada dikkat etmemiz gerek bir bölüm daha var
filter özelliğinin iki parametresi var

	:::css
	filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(parametre1, parametre2);

parametre1 resmin kaynağını göstermek için kullanılır. parametre2 ise
kullanılan ardalan resminin nasıl şekillendirileceğini gösterir. İki
değer alır, crop ve scale.

**crop:** Tek resim veya ardalan kullanacağımız yerlerde kullanılır.

**scale:** Bir resmi çekip uzatmaya yarayan bu özellik sayesinde
background-repeat:repeat-y özelliğine karşılık gelen bir özelliktir.
Bunun uygulamasını biraz sonra göreceğiz.

Gelelim metin girdiğimiz kısmın arkasına uyguladığımız ardalan resmini
uygulamaya, bunu için:


	:::html
	<!--[if lt IE 7]>
	<style>
	#icerikUstu{
	background:transparent;
	filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/icerik_ust.png', sizingMethod='crop');
	}
	#metinAlani{

	background:transparent;

	filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/icerik_orta.png', sizingMethod='scale');

	height:1%;

	}
	</style>
	<script type="text/javascript" src="pngDuzenlemeKodu.js"></script>
	<![endif]-->

Örnek sayfayı görmek için [tıklayınız.][7]

![Saydam PNG ardalan olarak kullanımı][8]

Bir önceki örneğe göre farkımız crop yerine scale uygulamak oldu. Burada
scale tam olarak bizim background-repeat'e karşılık gelmiyor tabi.
Sadece dikeyde bir tekrar için kullanıldığını unutmayalım. Ayrıca ben bu
makaleyi yazarken öğrendim. Eğer bir height değeri tanımlamazsak ie6 bu
düzeltmeye göstermiyor bunu için height:1%; değerini ekledim.

Bunun haricinde eğer saydam png uygulanmış metin alanımız için link var
ise buda bir sorun oluşturuyor.

![][9]

Yukarı gördüğünüz gibi link üzerine geldiğimizde link alanına erişemiyor
ve tıkladığımızda ilgili linke gidemiyoruz. Burada link alanı sanki
gizli bir alana altında kalıyor gibi. Bizde linkleri bu alanın üzerine
çıkarmalıyız

Bu durumu çözmek için:

	:::html
	<!--[if lt IE 7]>
	<style>
	#icerikUstu{
	    background:transparent;
	    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/icerik_ust.png', sizingMethod='crop');
	}
	#metinAlani{
	    background:transparent;
	    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/icerik_orta.png', sizingMethod='scale');
	    height:1%;
	}
	#metinAlani a{
	    position: relative;
	    z-index: 1;
	}
	</style>
	<script type="text/javascript" src="pngDuzenlemeKodu.js"></script>
	<![endif]-->

Örnek sayfayı görmek için [tıklayınız.][10]

## Sonuç

Sonuç olarak saydam PNG kullanmak çok güzel ama ie6 ile uğraşmak zor.
Tabi sorunun çözümüm olması bizleri sevindiriyor. Başta bu düzeltme
kodlarını yazmak zor olsada zamanla ve uyguladıkça alışıyoruz durum
kolaylaşıyor. Ayrıca Microsoft'un Internet explorer 6'dan sonra bu
hatasından geri dönmeside sevindirici ie7 ve yeni çıkacak ie8'de png
desteği var.

Yazının başında da belirttiğim gibi saydam png sorunu için üretilen bir
çok farklı yazım şekli var. Ancak ben karşılaştığım sorunlar ve çözümler
için kullandığım yöntemi sizlerle paylaştım. Muhakkak daha iyi yöntemler
çıkacaktır, bunlara açığım. Sizlerden öneriler bekliyorum.

## Kaynaklar

-   http://komodomedia.com/blog/index.php/2007/11/05/css-png-image-fix-for-ie
-   [http://24ways.org/2007/supersleight-transparent-png-in-ie6][]
-   [http://www.satzansatz.de/cssd/tmp/alphatransparency.html][]
-   http://homepage.ntlworld.com/bobosola/pnginfo.htm
-   [http://msdn2.microsoft.com/en-us/library/ms532969.aspx][]
-   [http://www.twinhelix.com/css/iepngfix/][]
-   [http://dean.edwards.name/ie7/][]
-   [http://www.sitepoint.com/blogs/2007/09/18/png8-the-clear-winner/][]
-   http://www.campbellsdigitalsoup.co.uk/2007/11/27/a-new-png-fix-with-jquerys-helping-hand
-   [http://bjorkoy.com/past/2007/4/8/the_easiest_way_to_png/][]
-   [http://blog.creonfx.com/internet-explorer/ie6-png-transparency-css-background-repeat-fix][]
-   [http://www.digital-web.com/articles/web_standards_creativity_png/][]
-   [http://www.alistapart.com/stories/pngopacity/][]
-   [http://www.tigir.com/alpha_png.htm][]
-   [http://stylizedweb.com/2007/12/30/png-transparency-issues/][]
-   [http://blogs.pathf.com/agileajax/2008/04/hacking-transpa.html][]
-   http://www.bluehostforum.com/archive/index.php/t-8396.html


  [tıklayınız.]: /dokumanlar/resim_ekle.html
  [Saydam PNG resim]: /images/saydampng_resim.gif
  [saydam png ie6]: /images/saydampng_resim_ie6.gif
  [1]: /dokumanlar/resim_ekle2.html
  [2]: /images/saydampng_resim2_ie6.gif
  [Örnek Tasarım]: /images/ornek_sayfa.jpg
  [Örnek Kesim]: /images/ornek_kesim.jpg
  [100]: /images/photoshop_png.gif
  [3]: /dokumanlar/ardalan_ekle.html
  [Saydam PNG ardalan olarak kullanımı]: /images/saydam_ardalan1.gif
  [4]: /images/saydam_ardalan2.gif
  [5]: /images/saydam_ardalan1_ie.gif
  [6]: /images/saydam_ardalan2_ie.gif
  [7]: /dokumanlar/ardalan_ekle3.html
  [8]: /images/saydam_ardalan3_ie.gif
  [9]: /images/saydam_ardalan4_ie.gif
  [10]: /dokumanlar/ardalan_ekle4.html
  [http://24ways.org/2007/supersleight-transparent-png-in-ie6]: http://24ways.org/2007/supersleight-transparent-png-in-ie6
  [http://www.satzansatz.de/cssd/tmp/alphatransparency.html]: http://www.satzansatz.de/cssd/tmp/alphatransparency.html
  [http://www.twinhelix.com/css/iepngfix/]: http://www.twinhelix.com/css/iepngfix/
  [http://dean.edwards.name/ie7/]: http://dean.edwards.name/ie7/
  [http://www.sitepoint.com/blogs/2007/09/18/png8-the-clear-winner/]: http://www.sitepoint.com/blogs/2007/09/18/png8-the-clear-winner/
  [http://blog.creonfx.com/internet-explorer/ie6-png-transparency-css-background-repeat-fix]: http://blog.creonfx.com/internet-explorer/ie6-png-transparency-css-background-repeat-fix
  [http://www.digital-web.com/articles/web_standards_creativity_png/]: http://www.digital-web.com/articles/web_standards_creativity_png/
  [http://www.alistapart.com/stories/pngopacity/]: http://www.alistapart.com/stories/pngopacity/
  [http://www.tigir.com/alpha_png.htm]: http://www.tigir.com/alpha_png.htm
  [http://stylizedweb.com/2007/12/30/png-transparency-issues/]: http://stylizedweb.com/2007/12/30/png-transparency-issues/
  [http://blogs.pathf.com/agileajax/2008/04/hacking-transpa.html]: http://blogs.pathf.com/agileajax/2008/04/hacking-transpa.html