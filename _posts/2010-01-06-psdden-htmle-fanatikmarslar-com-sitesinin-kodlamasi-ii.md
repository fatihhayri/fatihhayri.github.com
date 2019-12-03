---
layout: post
title: PSD&#039;den HTML&#039;e – fanatikmarslar.com Sitesinin Kodlaması II
Slug: psdden-htmle-fanatikmarslar-com-sitesinin-kodlamasi-ii
Date: 2010-01-06 01:09
Category: CSS, Web Standartları, XHTML
tags: [adım adım kodlama, CSS, css-kodlama-düzeni, CSS-Layout, farklı tarayıcılara göre kod yazmak, ie6, kapsayamama-sorunu, Kutu-Modeli, psdtohtml, site-kodlama]
---

## Ana Sayfa Kodlaması

Bir önceki makalemde sizlere kodlamaya başlamadan önceki süreci
anlattım. Şimdi sizlerle sitenin Ana Sayfasını nasıl kodladığımı
anlatmaya çalışacağım. Bu makaleye yazacağımı düşünerek kodlama yaparken
notlar tutmuştum, bu makale biraz da o notların derlemiş hali şeklinde
olacaktır.

-   [I -Kodlama Öncesi Hazırlıklar][]
-   II – Ana Sayfa Kodlaması (bu sayfa)
-   III – Alt Sayfaların Kodlaması (yayına hazırlanıyor...)

![][100]



İlk olarak site ardalan resmini jpeg olarak kaydediyorum. jpeg seçmemin
nedeni Adobe Phoshop'da "Save for Web.." ile kaydederken en küçük boyut
ve en iyi görüntüyü vermesidir. Resimleri kaydederken eğer az renk varsa
gif, çok fazla renk varsa jpeg kaydediyorum, son zamanlarda png'yi
deniyorum ara sıra. Ardalan resmi biraz farklı bir yapıya sahip
tekrarlayan kısmı biraz geniş olduğu için geniş kesmek durumunda kaldık.
Ardalan resmini body'ye atıyorum.

![][1]

Sayfa ve site sabit bir genişlikte ve ortalı olduğu için ana bir
kapsül(**anaKapsul**) için alıyorum. katmanı kapattığım yere bir not
düşüyorum ki nerede bittiğini bilelim.

{% highlight html %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>FanatikMarşlar.Com</title>
<style type="text/css">
<!--
@import url("style/fanatikmarslar.css");
-->
</style>
</head>

<body>
    <div id="anaKapsul">

    </div><!--[if !IE]>anaKapsul sonu<![endif]-->
</body>
</html>
{% endhighlight %}

İE6 ile bazı sorunları yaşamamak için yorum satırlarını biraz daha
farklı kodluyorum. Detay için [IE6'un Tekrarlayan Karakter Sorunu][]
makalemi okumanızı tavsiye ediyorum. Zamanla alışkanlık haline gelen bu
yorum kodunu Adobe Dreamweaver'da **Snippets**'e ekledim böylelikle daha
kolay oluyor eklemesi.

Şimdi sayfayı ortalamak için css kodumuzu yazalım. Açalım
fanatikmarslar.css dosyasını ve yazmaya başlayalım.

{% highlight css %}
/************************************************** genel tanimlar */
body
{
	background: url(../images/ardalan.jpg) 0 0 repeat;
}
#anaKapsul
{
	background: #fff url(../images/ust_ard.gif) 0 0 no-repeat;
	margin: 20px auto;
	width: 990px;
}
{% endhighlight %}

Ayrıca sayfa kenarları oval bunları ardalan resmi olarak anaKapsul
ardalan resmi olarak tanımlayabiliriz.

![][2]

## Üst Alanın Kodlaması

Eskizdeki gibi sayfayı belli bölümlere ayırarak kodluyorum. **ustAlan**
tanımlamasını yaparken kendi genel standart isimlendirme sistemimi
kullanıyorum. İsimlendirme yapılırken ilk harf küçük sonraki baş harfler
ayrımı kolaylaştırmak için büyük ve bitişik yazılır. İsimlendirme ve kod
yazma düzeni hakkında daha ayrıntılı bilgi için [CSS kod Yazma Düzeni][]
makalemi okuyunuz.

**Logo ve Banner alanı**

Logo ve yanındaki banner alanını kodlamaya başlarken bu iki alanı bir
satır gibi düşünerek bir katman içine alıyorum. Bu katmana
**logoBannerAlani** adını veriyorum. Her satırı böyle kapsayıcı bir
katman içine almak bize bir çok yönü ile kolaylık sağlayacaktır. Logoyu
sola yaslıyoruz ve üstten 14px yukarı çekiyoruz(logoyu yukarı çekerken
eksi margin de kullanabiliriz ancak ie6 sorun yaşamayalım diye position
ve top özellikleri yardımı ile yukarı çektik). Banner'ı logonun yanına
koymak için float:left ve genişlik tanımı yapıyoruz ve logo ile
arasındaki mesafeyi ve yukarıda mesafeyi ayarlamak için kenar dış
boşluğu mesafelerini(margin) tanımlıyoruz.

HTML kodu

{% highlight html %}
<div id="logoBannerAlani" class="kapsayamamaSorunu">
    <div id="logo"><img src="images/logo.gif" width="226" height="126" alt="Fanatikmarslar.com" /></div>
    <div id="ustBanneralani"><img src="images/ust_banner.gif" width="728" height="90" /></div>
</div>
{% endhighlight %}

CSS Kodu

{% highlight css %}
#logoBannerAlani{
	margin-bottom: 10px;
}

#logo{
	float: left;
	left: 6px;
	position: relative;
	top: -14px;
	width: 226px;
}

#ustBanneralani{
	float: left;
	margin: 14px 0 0 16px;
	width: 728px;
}
{% endhighlight %}

**Menü ve Arama Alanı**

Menü ve arama bölümünü kodlarken menü alanının genişleyebileceğini
düşünerek. Arama alanına float:right tanımı menü alanına **float:left**
tanımı yapıyoruz. Arama alanı genişliğini tanımlarken menü alanı
genişliği değişebileceği için genişlik tanımlamıyoruz. Menü alanını
listeler(ul) ile kodluyoruz(ul) liste elemanlarını yan yana dizmek için
ul li ye **float:left**tanımı yapıyoruz. "Sesi Kapat" flash olacağı için
bu bölümün yazı tipi özelliklerini tanımlamadan geçiyoruz, diğer
linklerin tanımlarını yapıyoruz. Arama kısmında dışa arama alanı ardalan
resmini atıyoruz. input alanı ve button alanı ekliyoruz. Niye **button**
kullanıyoruz **input type="submit"** kullanmıyoruz derseniz.
type="submit" elemanına direk erişemediğimizden. input ve button
elemanlarımıza float:left ve genişlik tanımı yaparak yan yana koyuyoruz
ve yine yorum kodlarımızı ekliyoruz.

{% highlight html %}
<div id="menuAramaAlani" class="kapsayamamaSorunu">
    <div id="aramaAlani">
        <input type="text" id="ara" name="ara" value="Arama" onfocus="if(this.value=='Arama'){this.value=''};" onblur="if(this.value==''){this.value='Arama'};" />
        <button></button>
    </div>
    <ul id="ustMenu">
        <li>Sesi Kapat</li>
        <li><a href="">Giriş Yap</a></li>
        <li><a href="">Sen de Katıl!</a></li>
        <li><a href="">Fanatik Marşlar Nedir?</a></li>
    </ul>
</div><!--[if !IE]>menuAramaAlani<![endif]-->
{% endhighlight %}

**Büyük Resim**

Büyük resmin olduğu kısmı ve bu resmin üzerindeki "Tezahürat Gönder"
butonunu kodlarken; Büyük resmi bir katman oluşturup bunun ardalanına
koyup tezahürat gönder düğmesini de alt ve sağdan 21px mesafede koymak
için büyük resmi ardalanına atadığımız katmana position:relative
tanımlıyoruz ve düğmeye position:absolute, bottom:0 ve right:21px tanımı
yapıyoruz. ie6'da alttan 1px kadar fazlalık vardı bu durumda ie6 özel
kodu ile aştım. ie6 için bottom:-1px; tanımı yaptım. Tarayıcılar için
özel kodlar hakkında detaylı bilgi için [tıklayınız][]

{% highlight html %}
<div id="buyukResim">
	<a href=""><img src="images/tezahurat_gonder_but.jpg" width="181" height="45" alt="Tezahürat Gönder" /></a>
</div>
{% endhighlight %}

**Önemli Sözler**

Önemli sözler kısmı beni biraz düşündürdü. Kodlarken bu alanı normal
akış dışına çıkarmalıydım. Bunun için **position:relative** tanımı ve
genişlik ve yükseklik tanımı yaptım. Ana kapsayıcı katmanın dışına
çıkarmak içinde eksi left ve margin-right değeri verdim ve oldu.

{% highlight html %}
<div id="manset">
	<p>"Real Madrid'den korkmuyoruz"<strong>Didier Deschamps</strong></p>
</div>
{% endhighlight %}

## İçerik Alanının kodlaması

![][3]

Ana Sayfa içerik alanını üç kolona ayırıyoruz. Sol, orta ve sağ kolon.

**Sol İçerik Alanının Kodlanması**

Sol kolona genişlik ve float tanımı yaparak yerleştiriyoruz.

Başlıklara h1 ile tanımlıyoruz ve özelliklerini veriyoruz.

Html kodu;

{% highlight html %}
<div id="solIcerikAlani">
    <h1>Tezahürat Ligleri</h1>
    .....
</div>
{% endhighlight %}

CSS kodu;

{% highlight css %}
#solIcerikAlani{
	float: left;
	margin-right: 20px;
	width: 200px;
}
#solIcerikAlani h1{
	margin-left: 10px;
}
{% endhighlight %}

**Lig Menüsü**

Lig menüsünü her zamanki ardalan kaydırmaca yöntemi ile kodluyoruz. ul
listleri ve her liste elemanına ilgili id isimlerini veriyoruz. Daha
sonra bu adlandırdığımız öğelere backgroud-position ile ilgili
resimlerini atıyoruz. Metodun genel mantığı tek bir resim üretip öğelere
farklı background-postion değeri ile kendi background'unu vermek. Metot
ve uygulama hakkında detaylı bilgi almak için [basit menü yapımı][]
makalemi okuyunuz.

HTML Kodu

{% highlight html %}
<ul id="ligMenu">
    <li id="superLig"><a href="">Turkcell Super Lig</a></li>
    <li id="birinciLig"><a href="">Bank Asya 1. Lig</a></li>
    <li id="digerLigler"><a href="">Diğer Ligler</a></li>
    <li id="dunyadanTezahuratlar"><a href="">Dünyadan Tezahüratlar</a></li>
</ul>
{% endhighlight %}

CSS Kodu

{% highlight css %}
ul#ligMenu{
	margin-bottom: 10px;
}
ul#ligMenu li{
	background: url(../images/lig_menu.gif) 0 0 no-repeat;
}
ul#ligMenu li a{
	display: block;
	height: 45px;
	margin-bottom: 1px;
	text-indent: -9999px;
	width: 200px;
}
ul#ligMenu li#superLig{
	background-position: 0 0;
}
ul#ligMenu li#birinciLig{
	background-position: 0 -46px;
}
ul#ligMenu li#digerLigler{
	background-position: 0 -92px;
}
ul#ligMenu li#dunyadanTezahuratlar{
	background-position: 0 -138px;
}
{% endhighlight %}

**Zirvedeki Taraftarlar**

Zirvedeki taraftarlar kısmını tablo ile kodlayacağız.

CSS ile kodlama yaparken bazılarının yanlış anladığı bir nokta vardır.
Katmanlarla kodlama yaparken hiç tablo kullanmamalıyız yanılgısına düşer
bazı arkadaşlar. Aslında durum böyle değildir. Anlamalı kodlama
açısındanda sakıncalı olan bu anlayış yanlıştır. HTML sayfalarımızı
oluştururken her elemanın ilgili etiketleri ile kodlamalıyız. Bu
anlaşılabilirlik ve anlamlı kod yazma açısından önemlidir ve karmaşayı
engeller. HTML sayfalarını oluşturmak için çeşitli yöntemler vardır bizi
sonucu götüren ancak biz en uygun olan yolu bulmalıyız ve kodlamayız.
Peki en uygun yöntem hangisidir buna nasıl karar vereceğiz noktasında
kalırsak. Her zaman standartlar ve anlamlı kodlama yolunu seçmeliyiz.

Tabloyu kodlarken sayı kolonu için bir sınıf tanımlayıp özelliklerini
atarız ve kolonu seçip bu sınıfı tüm hücrelere tanımlarız. Bu tüm hücre
seçip sınıf atma işini dw ile kolayca yapabiliriz. Ayrıca tablo geneline
yazı tipi ve renk tanımı yaparak genel tablo özelliklerimizi atadıktan
sonra isim kısmı ve puan kısmını büyük yapmak için bu kısımları normal
içerikten ayırmamız gerekir. Ben bunun için bu alanları strong etiketi
içine aldım. Böylece direk html elemanına etki edebilecek ve istediğim
değerleri atayabilecektim.

**Not:** Kodlarımı yazarken hep mümükün oldukça html elemanlarını(p,
strong, em, span, ul, li) kullanmaktan yanayım. Çünkü html elemanlarını
tarayıcılar daha hızlı yorumlayacaktır, ayrıca yalın html kodumuzda daha
düzenli duracaktır.

Logoları bir resim olarak hazırlayıp css sprite(ardalan kaydırma)
yöntemi ile bu logoları kodladık.

{% highlight html %}
<tr class="farkliSatir">
    <td width="16%" align="center" valign="middle" class="taraftarSayi">1</td>
    <td width="18%" align="center" valign="middle"><div class="logoTrabzon">Trabzon</div></td>
    <td width="51%" valign="middle"><a href=""><strong>Fatih</strong> Trabzon</a></td>
    <td width="15%" align="center" valign="middle"><strong>28</strong></td>
</tr>
{% endhighlight %}

Tablonun tek satırını incelersek kod yapısını anlayacağız. tr'deki
**farkliSatir** sınıfı bir satırın açık bir satırın daha kapalı bir renk
tanımı yapmak içindir. İlk hücremiz 1'den 10'a kadar sayılar olacağı
kolon bu sayıların her biri aynı özellikleri taşıdığı için bu kolondaki
hücrelere **taraftarSayi**sınıfını tanımladım ve özellikleri bu sınıfa
atadım.

Site genelinde kullanılacak logoları düşününce bunları bir resim dosyası
olarak hazırlayayım ve ardalan kaydırma metodu ile çağırayım diye
düşündüm. CSS Sprite adı verilen bu tekniği bir çok yerde kullanıyoruz
artık. Metodun çıkış amacı bir çok resmi ayrı ayrı sayfada çağırınca her
istek bir zaman aşımına neden oluyor, resmi teke indirdiğimizde tek
resim ve tek istek olduğu için bu zaman aşımından kurtulmuş oluyoruz.

![][4]

{% highlight css %}
 table#taraftarZirveTablo td div{
	background: url(../images/takim_logolari.gif) 0 0 no-repeat;
	display: block;
	height: 32px;
	text-indent: -9999px;
	width: 32px;
}
....
....
 div#icerikAlani div.logoTrabzon{
	background-position: right -105px;
}
div#icerikAlani div.logoGalatasaray{
	background-position: right -69px;
}
div#icerikAlani div.logoFenerbahce{
	background-position: right 2px;
}
div#icerikAlani div.logoGaziantep{
	background-position: right -574px;
}
{% endhighlight %}

Logoları daha optimum kodlamak için iki farklı tanım ile aynı kodun
tekrarını önledik. **table#taraftarZirveTablo td div** tanımında genel
özellikleri tanımladık, daha sonra her takım logosu için sadece
**background-position** tanımı yaptık, böylece her takım için birbirini
tekrarlayan kodları tek elde topladık ve kodumuz daha az oldu.

Sol kolonda son olarak "Takımını Destekle!" ve "Takip Et!" kısımlarını
kodladık. Ben sitede toplu olarak iki adet resim toplama(css sprite)
tekniği uyguladım. Birincisi yukarıda anlattığım logolar için diğeri ise
sitedeki sprite tekniğine uyacak diğer resimler için.

![][5]

yukarıdaki resim site genelinde uyguladığım sprite tekniği sonucu ortaya
çıkmıştır. CSS Sprite tekniği hakkında genel bir makale ayrıca
yazacağım, ama burada da yeri geldikçe metot hakkında bilgi vereceğim.
"Takımını Destekle!" ve "Takip Et!" kısımları başlıkları ve resimleri
olan kısımlar, bunların sabit genişlik ve yüksekliği olduğu için CSS
Sprite'a en uygun alanlar oldular. Genişleyebilir alanlarda sprite
tekniğini kullanırken daha dikkatli olmalıyız.

HTML kodu

{% highlight html %}
 <h1>Takımını Destekle!</h1>
<a id="tezahuratgonderBanner" href="">Sende tezahürat gönder takımını Tezahürat Ligi'nde Şampiyon yap!</a>
<h1>Takip Et!</h1>
<a id="twitterTakip" href="">Fanatik Marşları Twitter'da takip edin</a>
{% endhighlight %}

CSS kodu;

{% highlight css %}
a#tezahuratgonderBanner{
	background: url(../images/genel_resim.gif) 0 -88px no-repeat;
	display: block;
	height: 88px;
	margin: 0 0 10px 10px;
	text-indent: -9999px;
	width: 188px;
}
{% endhighlight %}

Böylece sol kolon kodlamasını bitirdik.

## Orta İçerik Alanının Kodlanması

Orta içerik alanının genişlik ve float tanımı yapıyoruz.

{% highlight css %}
#ortaIcerikAlani{
	float: left;
	margin-right: 20px;
	width: 440px;
}
{% endhighlight %}

Sonra üstteki resmi ekliyoruz.

{% highlight html %}
<img src="images/orta_resim.jpg" width="440" height="250" alt="Fanatikler" />
{% endhighlight %}

Sonra Lig Tablosunu kodlamaya başlıyoruz.

**Lig Tablosu**

Lig Tablosu içeriğini bir tablo yapacağız. Üst ve alttaki oval kenarları
ayrı bir katmana koyup, ardalan resmi olarak kodlayacağız. Peki resim
değilde niye ardalan resmi olarak koyduk. Ardalan resimlerini tek bir
resim şeklinde hazırlayıp kodlarken iki ayrı resim gibi
kullanabiliyoruz. Ancak resim olarak hazırlasa idik, iki ayrı resim
hazırlamak ve eklemek durumunda olacaktık, buda daha fazla http isteği
demek oluyor.

{% highlight css %}
div#ligTabloUstu{
	display:block;
	text-indent:-9999px;
	width:440px;
	height:5px;
	background:url(../images/puan_tablosu.gif) 0 0 no-repeat}
	....
}

div#ligTablosuAlti{
	display:block;
	text-indent:-9999px;
	width:440px;
	height:5px;
	background:url(../images/puan_tablosu.gif) 0 bottom no-repeat
}
{% endhighlight %}

Tabloyuda bir katman içini alıp kenar boşluğunu katmandan vereceğiz. Bu
kenar boşluklarını tablo içindende verebilirdik, ancak tablomuz işlevi
dışında kullanmış olurduk, tablo sadece lig tablosu amacı ile kullanmak
daha anlamlı.

{% highlight css %}
div#ligTabloKapsul{
	width:440px;
	padding:0 5px;
	background-color:#f3f3f3;
	voice-family: ""}"";
	voice-family:inherit;
	width:430px;
}

html>body div#div#ligTabloKapsul{
	width:430px;
}
{% endhighlight %}

Yukarıdaki kodlamada fazladan kodlar dikkatinizi çekmiştir. Kutu modeli
sorunu olarak Türkçeleştirdiğimiz "box model hack" yöntemidir bu. Bir
elemana hem genişlik hemde yatay ve dikey padding veya kenar çizgisi
atadığımızda(her ikisini atadığımız durumlarda da) ie6 ve diğer
tarayıcılar arasındaki yorumlama sorununu gidermek için kullandığımız
bir yöntemdir. Ayrıntılı bilgi almak için
[http://fatihhayrioglu.com/kutu-modeli-sorunlari-ve-cozumleri/][]
inceleyin.

Tablomuz standart bir tablo en sağdaki kolonumuz sayıları içeren farklı
renk ve boyutta rakamlar içeriyor. Birde her satırın altında gri bir
kenar çizgimiz(border) var.

En sağ kolon için bir sınıf tanımı yapıp kolon boyunca bunu uyguluyoruz.

{% highlight css %}
table#ligTablosu td.sayi{
	font:bold 18px Arial, Helvetica, sans-serif;
	color:#acd1e1
}
{% endhighlight %}

Her satırın altındaki kenar çizgisini atamak için ilk olarak (tr)
elemanına tanımladım ancak burada ie6 ile sorun yaşadım. Çözüm için
[tıklayınız][6]. Bu detay sayfasındaki makaleyi burada yaşadığım
sorundan sonra yazdım. Genelde makalelerim sorun-çözüm makaleleri böyle
çıkıyor. Bir sorun ile bir kaç defa karşılaştıktan sonra çözüm ve
önerilerini siteye yazıyorum. Hem aklımda kalmış oluyor hemde bir daha
karşılaştığımda çözümü nerede bulacağımı biliyorum. Tabi birde
insanlarla paylaşıp aynı sorunu yaşayan insanlara yardımcı olmak gibi
güzel bir yanıda var.

{% highlight css %}
table#ligTablosu{
	border-collapse: collapse;
}

table#ligTablosu td{
	border-bottom: 1px solid #d5d5d5;
	color: #828282;
	font: 14px Arial, Helvetica, sans-serif;
	padding: 1px 2px;
}
{% endhighlight %}

En son satırda kenar çizgisi olmayacağı için son satıra bir sınıf atayıp
kenar çizgisini kaldırdım.

{% highlight css %}
table#ligTablosu tr.enAlt td{
	border:0
}
{% endhighlight %}

Ayrıca tablo baş kısmı için içerikten farklı tanımları yaptım (table th)

{% highlight css %}
table#ligTablosu th{
	font:bold 14px Arial, Helvetica, sans-serif;
	color:#000;
	padding:5px 2px
}
{% endhighlight %}

**Takım Adı ve Armaları**

Bu tablodaki takım adı ve logoları için sol kolonda yaptığımıza benzer
kodları kullanıyoruz. Bunu yukarıda sol kolona ait toplu kodlarda
görebilirsiniz. Aynı tanımlar olduğu için sadece virgül ie yanına
seçiciyi ekledik.

{% highlight css %}
div#icerikAlani div.logoWerderBremen, a.WerderBremen{
	background-position:right -1440px
}
{% endhighlight %}

görüldüğü gibi **div#icerikAlani div.logoWerderBremen** kısmı ile
**a.WerderBremen** kısmına aynı tanımlar yapıldığı için virgül ile
ayrılmıştır. Böylece daha kısa kod ve daha optimize kodlar elde
edilmiştir.

Sol kolonda kullanmadığımız ama burada lazım olan aşağıdaki kodlarıda
ekledik.

{% highlight css %}
a.takimLogo{ display:block;
background:url(../images/takim_logolari.gif) right 0 no-repeat;
padding:8px 30px 8px 0; color:#0c2b90; text-decoration:underline}
a.takimLogo:hover{text-decoration:none;}
{% endhighlight %}

## Sağ İçerik Alanının Kodlanması

İçerik alanı 3 kolonlu yapının sonuncu kolonuna (sagIcerikAlani) ismini
verdik ve diğer kolonları yanında durması için genişlik tanımı ve
float:left tanımı yaptık.

{% highlight css %}
#sagIcerikAlani{
	float: left;
	width: 300px;
}
{% endhighlight %}

İlk olarak banner alanını hazırlıyoruz. Normalde ben buraya resmi direk
koyabilirdim, ancak banner flash ise ve buraya javascript ile
eklenecekse bir id'ye ihtiyaç duyulabilir diye, bir katman içine
alıyorum resmi.

{% highlight html %}
<div id="sagBannerAlani"><img src="images/band_website_banner.jpg" width="300" height="250" alt="Web" /></div>
{% endhighlight %}

Not: Bir HTMLci, daha cancanlı isimlendirme ile Arayüz Kod geliştiricisi
sadece kod yazmak ile kalmaz aynı zamanda yazdığın kodun nereye
gideceği, neler içere bileceğinide düşünerek kodunu yazmalıdır. Bir
bakıma bir programcı gibi düşünerek kodunu daha esnek yazmalıdır.

**Kategoriler Kısmı**

Kategoriler kısmını blok şeklide kodlayacağım. Her kategoriye bir satır
olacak şekilde kodlamak için burada "ul li" listelerini kullandım.

{% highlight html %}
<ul id="lKategoriiler">
    <li id="kMarslar"><a href=""><strong>Marşlar</strong>All the legendary football terrace anthems are here. </a></li>
    <li id="kEglenceliTezahuratlar"><a href=""><strong>Eğlenceli Tezahüratlar</strong>All the legendary football terrace anthems are here. </a></li>
    <li id="kSohretlerGecidi"><a href=""><strong>Şöhretler Geçidi</strong>All the legendary football terrace anthems are here. </a></li>
    <li id="k18"><a href=""><strong>+18</strong>All the legendary football terrace anthems are here. </a></li>
    <li id="kNostaljikTezahuratlar"><a href=""><strong>Nostaljik Tezahüratlar</strong>All the legendary football terrace anthems are here. </a></li>
</ul>
{% endhighlight %}

Her öğenin farklı ikonu olduğu için her liste öğesine bir id vereceğiz
ve buna göre atamalarımızı yapacağız. Listede bir başlık ve içerik alanı
var bu ayrımı sağlamak için başlık kısmını strong etiketi içine
alıyoruz.

{% highlight css %}
#sagIcerikAlani ul#lKategoriiler{
	float: left;
	font-family: Arial, Helvetica, sans-serif;
	margin-bottom: 10px;
	width: 300px;
}
ul#lKategoriiler li a{
	background: #eeeeee url(../images/notalar.gif) 0 0 no-repeat;
	color: #000;
	display: block;
	font-size: 12px;
	margin-bottom: 2px;
	padding: 10px 5px 10px 40px;
}
ul#lKategoriiler li a:hover{
	background: #dbdbdb url(../images/notalar.gif) 0 0 no-repeat;
}
ul#lKategoriiler li#kMarslar a{
	background-position: 0 -2px;
}
ul#lKategoriiler li#kEglenceliTezahuratlar a{
	background-position: 0 -72px;
}
ul#lKategoriiler li#kSohretlerGecidi a{
	background-position: 0 -141px;
}
ul#lKategoriiler li#k18 a{
	background-position: 0 -215px;
}
ul#lKategoriiler li#kNostaljikTezahuratlar a{
	background-position: 0 -289px;
}
ul#lKategoriiler li a strong{
	color: #0c2b90;
	display: block;
	font: bold 14px Arial, Helvetica, sans-serif;
}
{% endhighlight %}

**Videolar**

Video kısmında resmi sola yazıları ve oylama kısmını sağa koyuyoruz.
Burada oylama alanını css ile kodlarken yine ardalan kaydırma yöntemini
kullanıyoruz.

Oylama html kodu

{% highlight html %}
<ul class='oylama'>
    <li class='mevcutOy' style="width:60px">3/5 Yıldız</li>
    <li><a href='#' title='1 puan' class='birYildiz'>1</a></li>
    <li><a href='#' title='2 puan' class='ikiYildiz'>2</a></li>
    <li><a href='#' title='3 puan' class='ucYildiz'>3</a></li>
    <li><a href='#' title='4 puan' class='dortYildiz'>4</a></li>
    <li><a href='#' title='5puan' class='besYildiz'>5</a></li>
</ul>
{% endhighlight %}

5 adet yıldızımız var birde mevcut durumu gösteren bir li öğemiz. Burada
da ardalan kaydırma metodu kullanarak oylama kısmı kodlanmıştır.

{% highlight css %}
ul.oylama{
	background: url(../images/yildiz.gif) top left repeat-x;
	height: 17px;
	list-style: none;
	margin: 0 3px 3px 3px;
	padding: 0px;
	position: relative;
	width: 85px;
}
ul.oylama li{
	float: left;
	margin: 0px;
	padding: 0px;
}
ul.oylama li a{
	background-image: none;
	display: block;
	height: 17px;
	position: absolute;
	text-decoration: none;
	text-indent: -9999px;
	width: 17px;
	z-index: 20;
}
ul.oylama li a:hover{
	background: url(../images/yildiz.gif) left bottom;
	left: 0px;
	z-index: 1;
}
ul.oylama li.mevcutOy{
	background: url(../images/yildiz.gif) left bottom;
	display: block;
	height: 17px;
	position: absolute;
	text-indent: -9999px;
	z-index: 1;
}
ul.oylama a.birYildiz{
	left: 0px;
}
ul.oylama a.birYildiz:hover{
	width: 17px;
}
ul.oylama a.ikiYildiz{
	left: 17px;
}
ul.oylama a.ikiYildiz:hover{
	width: 34px;
}
ul.oylama a.ucYildiz{
	left: 34px;
}
ul.oylama a.ucYildiz:hover{
	width: 51px;
}
ul.oylama a.dortYildiz{
	left: 51px;
}
ul.oylama a.dortYildiz:hover{
	width: 68px;
}
ul.oylama a.besYildiz{
	left: 68px;
}
ul.oylama a.besYildiz:hover{
	width: 85px;
}
{% endhighlight %}

## Sosyal Alanın ve Alt Alanın Kodlanması

![][7]

Burada üstteki beyaz oval alanı için fazladan bir katman açıp ona
atamaktan ise zaten ekleyeceğiz sosyalAlan'a üstteki kapsayıcı katmanın
alt ovalliğini ekleyerek daha az kodlama bu işi çözmüş olduk.

**Sosyal Alanın Kodlanması**

Sabit genişliği ve yüksekliği olan bir alan ve yan yana dizilmiş
öğelerimiz var. Yukarıda bir çok defa uyguladığımız listeler ve ardalan
kaydırma metodunu burada da uyguluyoruz.

{% highlight html %}
<div id="sosyalAlan" class="kapsayamamaSorunu">
    <ul>
        <li id="sBaslik">Sosyal Medya</li>
        <li id="sRSS"><a href="">RSS</a></li>
        <li id="sFacebook"><a href="">facebook</a></li>
        <li id="sFriendfeed"><a href="">friendfeed</a></li>
        <li id="sTwitter"><a href="">twitter</a></li>
        <li id="sYoutube"><a href="">youtube</a></li>
    </ul>
</div>
{% endhighlight %}

CSS Kodu

{% highlight css %}
 /* sosyalAlan */
#sosyalAlan{
	background: url(../images/yatay_ayrac.gif) 0 0 no-repeat;
	height: 71px;
	margin: 0 auto;
	width: 990px;
}
#sosyalAlan ul{
	float: right;
	margin: 30px 10px 0 0;
	width: 310px;
}
#sosyalAlan ul li{
	background: url(../images/sosyal_medya.gif) 0 0 no-repeat;
	float: left;
	margin-right: 12px;
	text-indent: -9999px;
}
#sosyalAlan ul li#sBaslik{
	background-position: 0 0;
	height: 23px;
	width: 114px;
}
#sosyalAlan ul li#sRSS{
	background-position: -125px 0;
	width: 23px;
}
#sosyalAlan ul li#sFacebook{
	background-position: -158px 0;
	width: 23px;
}
#sosyalAlan ul li#sFriendfeed{
	background-position: -192px 0;
	width: 23px;
}
#sosyalAlan ul li#sTwitter{
	background-position: -226px 0;
	width: 23px;
}
#sosyalAlan ul li#sYoutube{
	background-position: -260px 0;
	width: 23px;
}
#sosyalAlan ul li a{
	display: block;
	height: 23px;
}
{% endhighlight %}

**Alt Alanın Kodlanması**

altAlan kısmına baktığımızda 3 kolonlu bir yapıya sahip olduğunu
görürüz. Sabit bir genişliği ve yüksekliği var. Tüm alt kısmı kapsayan
bir background resmi var. Bu değerlendirmeleri yaptıktan sonra kodumuzu
yazarsak.

{% highlight css %}
#altAlan{
	background:url(../images/alt.png) 0 0 no-repeat;
	width:990px;
	height:122px;
	margin:0 auto;
	padding-top:10px;
	voice-family: ""}"";
	voice-family:inherit;
	height:112px;
}

html>body #altAlan{
	height:112px;
}
{% endhighlight %}

Yukarıda bahsettiğimiz gibi bir elemana genişlik veya yükseklik tanımı
yaptıktan sonra padding ve/veya border tanımı yaptığımızda kutu modeli
sorunu ile karşılaşmamak için farklı bir kod yazıyoruz. Ayrıca ardalan
resmindeki geçiş nedeni ile saydam png koymalıyız. Saydam pngler
ie6'daki sorununu çözmek için kodumuz

{% highlight css %}
#altAlan{
	background:url(../images/alt.png) 0 0 no-repeat;
	width:990px;
	height:122px;
	margin:0 auto;
	padding-top:10px;
	voice-family: ""}"";
	voice-family:inherit;
	height:112px;
}

html>body #altAlan{
	height:112px;
}

* html #altAlan{
	background:transparent;
	filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/alt.png', sizingMethod='crop');
}

* html #altAlan a, * html #altAlan input, * html #altAlan button{
	position:relative;
	z-index:1
}
{% endhighlight %}

şeklinde olmalıdır. Ayrıntılı bilgi için Internet Explorer 6 için saydam
PNG desteği adlı makalemi okuyunuz.

Alttaki logoyu yerleştirmek için genişlik ve **float** tanımı yapıyoruz.
Bu resmide CSS Sprite ile genel resimden çekiyoruz.

{% highlight css %}
#logoAltta{
	background: url(../images/genel_resim.gif) 0 -236px no-repeat;
	float: left;
	height: 69px;
	margin: 0 20px 0 10px;
	text-indent: -9999px;
	width: 123px;
}
{% endhighlight %}

Ortadaki linkler ve copyright kısmını liste ve paragraflı bir yapı ile
kodluyoruz.

{% highlight html %}
<div id="altLinkler">
<ul><li><a href="" title="Telif Hakları">Telif Hakları</a></li><li><a href="" title="İletişim" class="sonAltLink">İletişim</a></li></ul>
<p>© 2009 Fanatik Marşlar. Her hakkı saklıdır. Kaynak gösterilmeden kullanılamaz.</p>
<ul><li><a href="" title="Marşlar">Marşlar</a></li><li><a href="" title="Eğlenceli Tezahüratlar">Eğlenceli Tezahüratlar</a></li><li><a href="" title="Şöhretler Geçidi">Şöhretler Geçidi</a></li><li><a href="" title="Klasikler">Klasikler</a></li><li><a href="" title="+18">+18</a></li><li><a href="" class="sonAltLink" title="Nostaljik Tezahüratlar">Nostaljik Tezahüratlar</a></li></ul>
</div>
{% endhighlight %}

Listeleri yan yana dizmek için li'ye display:inline tanımı yapıyoruz.

{% highlight css %}
#altLinkler{
	float: left;
	font: 12px Arial, Helvetica, sans-serif;
	padding-top: 10px;
	width: 635px;
}
#altLinkler p{
	margin: 3px 0;
}
#altLinkler ul li{
	display: inline;
}
#altLinkler ul li a{
	background: url(../images/genel_resim.gif) right -312px no-repeat;
	color: #0c2b90;
	margin-right: 5px;
	padding-right: 8px;
}
#altLinkler ul li a.sonAltLink{
	background: none;
}
#altLinkler ul li a:hover{
	text-decoration: underline;
}
{% endhighlight %}

Son olarakta RSS ve e-posta üyeliği kısmını kodluyoruz.

{% highlight html %}
<div id="rssEpostaUye">
    <a href="" id="altRSSLink">RSS</a>
    <p>E-posta Üyeliği</p>
    <input type="text" /> <button>Gönder</button>
</div>
{% endhighlight %}

Bu gibi durumlarda şöyle bir seçim yapıyorum. Kapsayıcı bir katman
içinde tek kullanımlık html elemanları koyarak css kodlamayı daha kolay
hale getiriyorum. Burada mesela tek a, tek p, tek input ve tek button
kullanmamın nedeni bu.

## Sonuç

Bu makaleye kodlama yazarken tuttuğum notlardan yararlanarak hazırladım.
Bazı bölümleri hızlı geçmiş, ayrıntısına inmemiş olabilirim, kafanıza
takılan veya ayrıntısını öğrenmek istediğiniz kısımları yorumlar
kısmında yazarsanız yardımcı olmaya çalışırım. Bir kusurumuz eksiğimiz
oldu ise affola.

Örnek kodları görmek için [tıklayınız.][]

Tüm kodları indirmek için [tıklayınız.][8](rar dosyası index.html,
images, style ve scripts klasörünü içerir) 388 Kb

Hazırladığımız bu dosyayı ilk makalemizdeki 30 - Musteriye kalsörü içine
atıyoruz ve sıkıştırıp gönderiyoruz.

Not: Burada anlattığım kodlar ile yayındaki site arasında ufak tefek
farklılıklar olabilir. Ben burada başta benim kodladığım sitenin kodları
ve anlatımını yapıyorum.

Bir sonraki makalem **Alt Sayfaların Kodlaması** ile ilgili olacaktır.
görüşmek dileğiyle hoşçakalın.

  [I -Kodlama Öncesi Hazırlıklar]: http://fatihhayrioglu.com/fanatikmarslar-com-sitesinin-kodlamasi/
  [100]: /images/anasayfa_kuc.jpg
    "anasayfa_kuc"
  [1]: /images/ardalan-266x300.jpg
    "ardalan"
  [IE6'un Tekrarlayan Karakter Sorunu]: http://fatihhayrioglu.com/ie6un-tekrarlayan-karakter-sorunu/
  [2]: /images/ders_03-300x113.jpg
    "ders_03"
  [CSS kod Yazma Düzeni]: http://fatihhayrioglu.com/css-kod-yazma-duzeni/
  [tıklayınız]: http://fatihhayrioglu.com/tum-tarayicilar-icin-css-duzeltmelerihack/
  [3]: /images/icerik_alani.jpg
    "icerik_alani"
  [basit menü yapımı]: http://fatihhayrioglu.com/basit-resimli-menu-yapmak/
  [4]: /images/takim_logolari.gif
    "takim_logolari"
  [5]: /images/genel_resim.gif
    "genel_resim"
  [http://fatihhayrioglu.com/kutu-modeli-sorunlari-ve-cozumleri/]: http://fatihhayrioglu.com/kutu-modeli-sorunlari-ve-cozumleri/
  [6]: http://fatihhayrioglu.com/internet-explorer-6-ve-7-icin-tablo-tr-elementine-kenar-cizgisi-atamak/
  [7]: /images/sosyal_altalan.jpg
    "sosyal_altalan"
  [tıklayınız.]: /dokumanlar/fm/index.html
  [8]: /dokumanlar/fm_anasayfa_html.rar
