---
layout: post
title: Özellik Seçicileri(Attribute Selectors)
Date: 2007-01-06 15:42
Category: CSS, Web Standartları, XHTML
tags: [Attribute Selectors, CSS, özellik, Özellik-seçicileri, Web Standartları, XHTML]
---

Bu konuya biraz geç değindik biliyorum. Ancak bu konuyu [(X)HTML Sayfa Yapısı ve CSS Kullanımı][] makalesi içinde yazmayı düşündüğümde IE bu
özelliği desteklemiyordu(şimdi IE7 bu özelliği desteklemektedir.) bu
nedenle yazımını ertelemiştim, sonrada unuttum gitti açıkçası neyse
sonunda yazıyorum işte:)

CSS ile tanımlama yaparken Xhtml nesnelerine erişmede bazen sıkıntı
çekeriz. Ne yapsak da bu elemente atama yapsak diye bu genelde programcı
- Arayüz Kod Yazarı ayrımının olduğu projelerde çok başımıza gelir. Bu
sorunu kökünden çözen bir yöntemdir **Özellik Seçicileri**.

**Not**
Javascript gibi id'si olan her elemente(hata daha fazlası da var) css
özelliği atanması bize bir çok bakımdan avantaj sağlar.


Özellik Seçicileri HTML, XHTML veya XML dokümanlarındaki seçilen
etiketin özelliklerine veya özellik değerlerine göre tanımlama yapmamızı
sağlar. Bir örnek verecek olursak sayfamızdaki bir resme(örn:
grafik.gif) kenarlık ataması yapmak istersek:

	:::css
	img[src="grafik.gif"]{
		border: 1px solid #000;
	}

Dört çeşit Özellik Seçicisi vardır.

## 1- Basit Özellik Seçicisi

Belirli bir etiketin(örn:img) özelligine(örn:alt) göre tanımlama
yapmamızı sağlar.

![Basit özellik seçicisi][]

Bir örnek yapalım

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>CSS'in yapısı</title>
	<style type="text/css">
	img[alt] {
		border: 5px solid lime
	}
	</style>
	</head>
	<body>
		<img src="logo.gif" alt="Logo" width="32" height="41" />
	</body>
	</html>


Örneği görmek için [tıklayınız.][]

Yukarıdaki kodlamada birden fazla <img\> tanımı vardır. Ama biz sadece
alt tanımı yaptıklarımıza belli özellikler atamak istiyoruz. Bunun için
Basit Özellik Seçicisini kullanabiliriz.

**Tarayıcı Uyumu**
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## 2- Özellik Değeri Seçicisi

Bir etiketin özellik değerine göre tanımlama yapmamızı sağlar.

![Özellik Değeri Seçicisi][]

Bir örnek yapalım

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"
	/>
	<title>CSS'in yapısı</title>
	<style type="text/css">
	input[type="text"] {
	border: 1px solid #000;
	width: 150px;
	}
	</style>
	</head>
	<body>
	<p>Adınız : <input type="text" name="ad" /></p>
	<p>Cinsiyetiniz: <input type="radio" name="cinsiyet" id="erkek" />
	Erkek <input type="radio" name="cinsiyet" id="kadin" /> Kadın
	</p>
	</body>
	</html>

Örneği görmek için [tıklayınız.][1]

Genelde formlarda tanımlama yaparken sadece metin girisi yaptıgımız
alanlara atama yapmakta zorlanırız. Bunun sebebi <input\> etiketini
sadece metin girisi için kullanılmamasıdır, radyo buton ve isaretleme
kutuları içinde bu etiketin kullanılmasıdır. Özellik Degeri Seçicisi bu
sorunu kökten çözer. Yukarıdaki örnekte görüldügü gibi

**Tarayıcı Uyumu**
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## 3- Kısmi Özellik Değeri Seçicisi

Bir etiketin özellik değerindeki boşluklarla ayrılmış kısımlarına göre
tanımlama yapmamızı sağlar.

![Kısmi Özellik Değeri Seçicisi][]

Bir örnek yapalım

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"
	/>
	<title>CSS'in yapısı</title>
	<style type="text/css">
	a[title~="Google"] {
	text-decoration:overline;
	}
	</style>
	</head>
	<body>
	<p><a href="http://www.google.com" title="Google seç">gooogle
	</a> </p>
	<p><a href="http://www.yahoo.com" title="Yahoo seç">yahoo </a>
	</p>
	<p><a href="http://www.fatihhayrioglu.com" title="Fatih">fatih </a>
	</p>
	</body>
	</html>

Örneği görmek için [tıklayınız.][2]

Türkçe karakterde sorunsuz çalısıyor. Siz kullanabilecegimiz yerleri
hesap edin artık.

**Tarayıcı Uyumu**
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## 4- Dikkate Değer Özellik Seçicisi

Bir etiketin özellik değerindeki kesik çizgi(-) ile ayrılmış kısımlarına
göre tanımlama yapmamızı sağlar.

![Dikkate Değer Özellik Seçicisi][]

Bir örnek yapalım

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"
	/>
	<title>CSS'in yapısı</title>
	<style type="text/css">
	*[lang|="en"] {
	color: red;
	}
	</style>
	</head>
	<body>
	<h1 lang="en">Hello!</h1>
	<p lang="en-us">Greetings!</p>
	<div lang="en-au">G’day!</div>
	<p lang="fr">Bonjour!</p>
	<h4 lang="cy-en">Jrooana!</h4>
	</body>
	</html>

Örneği görmek için [tıklayınız.][3]

**Tarayıcı Uyumu**
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}


Bunların dısında CSS3 ile birlikte gelen dört tane daha yeni Özellik
Seçicisi vardır. "Belirlenen Sözdizimi ile Baslayan Özellik Deger
Seçicisi", "Belirlenen Sözdizimi ile Biten Özellik Deger Seçicisi",
"İçinde Belirlenen Sözdizimi Geçen Özellik Deger Seçicisi" ve Aduzayı
Özellik Deger Seçicisi diye 4 adet yeni Özellik Seçicisi daha vardır.
Amaç CSS ve XHTML arasındaki iletisimi en üst seviyeye çıkararak kolay
ve etkilesimli kod yazmamızı saglamak.

## Kaynaklar

-   [http://www.blooberry.com/][]
-   [http://www.456bereastreet.com/][]
-   [http://css.maxdesign.com.au/][]
-   [http://westciv.com/][]

  [(X)HTML Sayfa Yapısı ve CSS Kullanımı]: http://www.fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/
  [Basit özellik seçicisi]: /images/basit_ozel_secici.gif
  [tıklayınız.]: /dokumanlar/basit_ozellik_secici.html
  [Özellik Değeri Seçicisi]: /images/ozellik_degeri_secicisi.gif
  [1]: /dokumanlar/ozellik_degeri_secicisi.html
  [Kısmi Özellik Değeri Seçicisi]: /images/kismi_secici.gif
  [2]: /dokumanlar/kismi_secici.html
  [Dikkate Değer Özellik Seçicisi]: /images/dikkate_deger_secici.gif
  [3]: /dokumanlar/dikkate_deger_secici.html
  [http://www.blooberry.com/]: http://www.blooberry.com/indexdot/css/syntax/selectors/attribute.htm
  [http://www.456bereastreet.com/]: http://www.456bereastreet.com/archive/200510/css_21_selectors_part_2/
  [http://css.maxdesign.com.au/]: http://css.maxdesign.com.au/selectutorial/selectors_attribute.htm
  [http://westciv.com/]: http://westciv.com/style_master/academy/browser_support/selectors.html
