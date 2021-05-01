---
layout: post
title: CSS ile Resim Haritaları(imagemap) yapmak
Date: 2008-11-17 11:14
categories: [Haberler]
tags: [flickr, fotoğraf, imagemap, resim-haritaları]
---

Ben ilk defa Flickr'da(bir örnek verelim. Dexter HTML kesiyormuş. :)
gördüğüm bu metodu çok ilginç bulmuştum. Gerçekten kullanıcıya yardımcı
olan bir uygulama, görünümü hoş ve işlevsel. İlk gördüğümde bu işin
javascript yardımı ile yapıldığını düşünmüştüm ki araştırdığım da gördüm
ki javascript yardımı ile yapanlar var, ama sadece css ile bu işi
yapanlarda var. Bu konuyu araştırıp bir yazı yazmayı konuyu CSS Mastery
kitabında okuduğumda karar vermiştim, ancak olmadı nasip şimdiye imiş.

![Dexter - HTML][]

Resim haritalama işi aslında bizim HTML'den aşina olduğumuz bir konu.
Eskiden çok kullanırdık şimdilerde html e-postalarda(mailing) daha
ziyade kullanılıyor. Resmin belli noktalarına link verebilmek çok güzel
bir işti. Ben daha bu işlere ilk başladığımdaki o zamanlar FrontPage ile
yapmaya çalışıyordum bu işleri. Resim haritalarını çözmek 1 haftamı
almıştı. Gülermisin ağlarmısın :D

Biz burada flickr'dakine benzer bir uygulamayı beraber yapacağız.
Aslında burada kullanacağımız teknik bildiğimiz göreceli eleman içindeki
mutlak elemanın konumlandırması tekniğidir. Resmimizi içeren göreceli
konumlandırılmış bir elaman koyup resim üzerinde belirteceğimiz
noktalarıda mutlak konumlandıracağız ve bu noktaları farenin üzerine
geldiğinde belirtip ilgili açıklamayı göstereceğiz. Flickr'dakine benzer
bir görüntü olması için iki fazladan <span\> ekleyeceğiz, bunları
kaldırada biliriz.

HTML kodumuzu yazalım

```html
<ul id="foto">
<li class="dexter"><a href="http://www.sho.com/site/dexter/"><span class="dis"><span class="ic"><span class="bilgi">Dexter</span></span></span></a></li>
<li class="html"><a href="http://www.w3.org/TR/REC-html40/"><span class="dis"><span class="ic"><span class="bilgi">HTML 4</span></span></span></a></li>
</ul>
```

CSS kodunu kademe kademe açıklayarak yazarsak;

Burada resmimizi ul elemanı ardalan resmi olarak atadık. Bu teknikde
önemli olan dıştaki kapsayıcı elemanı(ul#foto) göreceli konumlandırıp,
fare üzerine geldiğinde resmin etrafını çizip bilgisini göstermek. Bu
resimde üzerini çizdiğimiz ve bilgisini gösterdiğimiz elemanlarada(<li
class="dexter"\> ve <li class="html"\>) mutlak konumlandırma ile
tanımlayıp resmin üzerinde istediğimiz konuma yerleştiriyoruz.

```css
ul#foto{
	width: 500px;
	height: 331px;
	position: relative;
	background: url(images/dexter.jpg) no-repeat;
	margin: 0;
	padding: 0;
	list-style: none;
}
```

Aşağıdaki kodda her bir haritalanacak nesne bir link olduğu için her
birine tek tek atamaktansa genel bir tanım ile tüm linkleri mutlak
konumlandırıyoruz ve kenar çizgisini tanımlıyoruz.

```css
ul#foto a {
	position: absolute;
	color: #000;
	text-decoration: none;
	border: 1px solid transparent;
}
```

Her bir haritalanacak eleman için genişlik yüksek tanımını yapıyor ve
kapsayıcı elemana göre konumunu belirliyoruz. Ayrıca haritalanan
elemanların açıklamaları için konumu tanımı ve görünüm tanımlarını
yapıyoruz.

Son iki satır kodlar normal css standart kodlamasının dışında,
Flickr'daki gibi bilgi kutusunun köşelerini yuvarlamak için tanımlar
yaptık. Firefox için -moz-border-radius: 3px; Safari ve Google Chrome
için  -webkit-border-radius: 3px; tanımlarını yaptık. Internet Explorer
kullanıcıları için şimdilik bir çözüm yok.

```css
ul#foto .dexter a {
	width: 110px;
	height: 175px;
	top: 25px;
	left: 60px;
}
ul#foto .html a {
	width: 50px;
	height: 80px;
	top: 195px;
	left: 408px;
}
ul#foto a .bilgi {
	position: absolute;
	bottom: -25px;
	width: 100%;
	padding: 2px;
	background-color:#ffc;
	text-align: center;
	left: -30000px;
	font:11px Arial, Helvetica, sans-serif;
	margin-left: -60px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}
```

Amacımız Flickr tipi bir resim haritası oluşturmak olduğu için, iki
kenar çizgisi tanımı yapmak için iki adet <span\> etiketi yazdık ve
bunlara dış(.dis) ve iç(.ic) sınıfları tanımladık. Tanımladığımız her
bir dis ve ic nesnesine haritaladığımız nesnelerin genişlik ve
yükseklerinin 2px daha düşük değerlerini vererek üst üste binmelerini
önledik ve görünümünü düzenlemiş olduk. Eğer istersek bu <span\>
etiketlerini kaldırabiliriz, daha sade bir görünüm olur.

```css
ul#foto a .dis, ul#foto a .ic {
display: block;
}
ul#foto .dexter a .dis {
width: 108px;
height: 173px;
}
ul#foto .html a .dis {
width: 48px;
height: 78px;
}
ul#foto .dexter a .ic {
width: 106px;
height: 171px;
}
ul#foto .html a .ic {
width: 46px;
height: 76px;
}
```

Fare haritalanan alanların üzerine gelince çıkacak bilgilendirme
alanının yerini belirliyoruz. - 3000px ile görüntüden çıkardığımız bilgi
alanını görünür yapıp istediğimiz yere yerleştirdik.

```css
ul#foto a:hover .bilgi { left: 60px; }
```


Tüm resmin üzerine gelindiğinde ve haritalanan alanların üzerine
gelindiğinde kenar çizgi renklerini değiştirerek farklı bir görünüm
kazandırıyoruz.

```css
ul#foto a:hover {
	border-color: #d4d82d;
}
ul#foto:hover a .dis, ul#foto a:hover .dis {
	border: 1px solid #000;
}
ul#foto:hover a .ic, ul#foto a:hover .ic {
	border: 1px solid #fff;
}
```

Sonuçta görsel ve işlevsel olarak çok güzel bir uygulama elde ettik.
Uygulanabileceği yerler kısıtlıda olsa, uygulandığın da güzel bir
görünüm ve işlevsel bir sonuç elde edeceğimiz bu uygulama bizi birçok
avantaj sağlar.

Örnek uygulamayı görmek için [tıklayınız][]

## Kaynaklar

-   CSS Mastery: Advanced Web Standards Solutions - Andy Budd
-   [http://www.frankmanno.com/ideas/css-imagemap/][]
-   [http://www.frankmanno.com/ideas/css-imagemap-redux/][]
-   [http://www.cssplay.co.uk/menu/imap.html][]
-   http://maxxu.casacolor.ro/css-exp/css-image-maps.html
-   marketingtechblog.com/2007/10/02/css-image-map/
-   http://www.frederikvig.com/temp.html
-   [http://www.cssplay.co.uk/menu/old_master.html][]

  [Dexter - HTML]: /images/flickr_dexter.jpg
  [<span class="dis"><span class="ic"><span class="bilgi">Dexter</span></span></span>]: http://www.sho.com/site/dexter/
  [<span class="dis"><span class="ic"><span class="bilgi">HTML   4</span></span></span>]: http://www.w3.org/TR/REC-html40/
  [tıklayınız]: /dokumanlar/flickr-rollovers.htm
  CSS Mastery: Advanced Web Standards Solutions - Andy Budd
  [http://www.frankmanno.com/ideas/css-imagemap/]: http://www.frankmanno.com/ideas/css-imagemap/
  [http://www.frankmanno.com/ideas/css-imagemap-redux/]: http://www.frankmanno.com/ideas/css-imagemap-redux/
  [http://www.cssplay.co.uk/menu/imap.html]: http://www.cssplay.co.uk/menu/imap.html
  [http://www.cssplay.co.uk/menu/old_master.html]: http://www.cssplay.co.uk/menu/old_master.html