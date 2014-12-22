---
layout: post
title: CSS için Başlangıç Stilleri
Date: 2007-05-23 14:41
Category: CSS, XHTML
tags: CSS, XHTML
---

## Kodunuza Yorum Yapın

Farklı web tarayıcılarının kodları farklı şekilde yorumlamalarından
dolayı hızlı CSS kodlamak zorlaşıyor. Tasarımlar her web tarayıcısında
aynı şekilde görünmez fakat kodlamaya başlarken başlangıç stil dosyası
kullanarak -hızlı CSS yazma konusunda- kendine yardım edebilirsin.


CSS dökümanınıza yorum ekleyerek başlamak önemlidir. Ben Andy Budd’un
CSS kodlarını yazmadan önce; versiyon numarası, e-posta ve website
adresi bilgilerini eklemesini seviyorum. CSS dokümanında yapılan
değişikliklerin not edilmesi veya notların nerede olduğunun yazılması
bize dokümanı tekrar incelerken ve değişiklik yaparken yardımcı olur.

{% highlight css %}
/*-------------------------------------------------------------------------
[client] Screen Stil Dosyası
version : 1.0
tarih : 01/03/07
yazar : [adınız]
eposta : [siz at domain dot com]
website : [website adresiniz]
version geçmişi : [dosyanın bulunduğu yer]
-------------------------------------------------------------------------*/
{% endhighlight %}

## Stil Dosyanızı Nasıl Bölümleyeceğinize Karar Verin

Çoğu zaman bir tek stil dosyasıyla paçayı kurtarabileceğimi keşfettim.
Hatta bazen birden fazla stil dosyası gerektirecek kadar büyük sitelerde
bile. Gerçekten bazı CSS yazarları stil dosyasını bölmeyi tercih
ederler. Bu bir kişisel seçim meselesidir. Bundan sonra başlangıç stil
dosyamın içinde, başka bir stil dosyasını çekebileceğim bir bölümüm var.

{% highlight css %}
/* Diğer Stil Dosyalarını Dahil Etmek -Import-
-------------------------------------------------------------------------*/
@import url("typography.css");
{% endhighlight %}

#### **Başlangıç Stillerini Sıfırlamak -Silmek-**

[Tantek Celik][] (Türkçe örnek dosya için [tıklayınız.][]) elementlerden
başlangıç stillerini silmek için bir stil dosyası yazdı. Buna bir
gözatmak ihtiyacınızı karşılayabilir. Şahsen ben bu stil dosyasını
elementlerin yeniden yapılandırılması için kullanılan evrensel bir kural
olarak yeterli buluyorum. Bu dosyanın birçok projede kullanımında
herhangi bir performans sorunu yaşamadım.

{% highlight css %}
/* Padding ve Margin’lerin Silinmesi -Sıfırlanması- */
* {
  margin: 0;
  padding: 0;
  border: 0;
}
{% endhighlight %}

Niçin bunu yapıyoruz.? Browserlar değişik elementlere değişik stiller
uyguluyorlar. Nerden başladığımı bilmek bence mantıklı geliyor. Bu basit
kural bütün elementlerin başlangıçta margin, padding ve border’larının
olmadığını bilmemi sağlıyor.

#### **Floating ve Clearing için Sınıflar Yapmak**

Sonra clearing için bir sınıfım ve bundan başka [Andy Budd][] ve onun
[mükemmel kitabından][] öğrendiğim bazı şeyler var. Floatlan’mış
elementlerin clear’lenmesi genel bir iştir. Bir de herhalde elementleri
sağa veya sola float’lamak isteyeceksin bunları yapmak benim de hoşuma
gider. Bunları resimler için oldukça fazla kullanırım.

{% highlight css %}
.clear {
  clear:both;
}
.right {
  float: right;
}
.left {
  float: left;
}
{% endhighlight %}

#### **Dökümanı Ayarlamak -Kurmak-**

Font büyüklüğünün ve renginin body etiketinde atanmasının, bir dökümanın
başlangıç ayarı için iyi bir yapı olduğunu düşündüm. Burada bir arkaplan
resmini duvar kağıdı olarak kullanırım. Tipografi üzerinde maksimum
kontrol sağlayan [Richard Rutter’un yaklaşımını][] gerçekten tavsiye
ederim. Ben bunu em’leri kullanarak yazı boyutunu ayarlamak için
kullanırım.

Ondan sonra içeriği tutmak ve sayfanın genişliğini ayarlamak için bir
kapsayıcı katman -wrapper div- kullanırım. Bu, bir de içeriği ortalar ve
beyaz bir arka plan uygular.

{% highlight css %}
body {
  font: 62.5%/1.5 "Lucida Grande", "Lucida Sans", Tahoma, Verdana,
  sans-serif;
  background: url(/images/wallpaper.png) repeat;
  color: #000000;
  text-align:center;
}
#wrapper {
  width:980px;
  text-align:left;
  margin-left:auto;
  margin-right:auto;
  background-color: #FFFFFF;
}
{% endhighlight %}

#### **Tipografinin Düzenlenmesi**

Sonra öntanımlı font büyüklüklüklerini ayarlamak isterim. Richard
Rutter'in methodunu kullanarak öntanımlı büyüklüğün 10 pt olduğunu
biliyoruz. Böylece kesin doğru boyutlandırma yapabiliriz.

{% highlight css %}
h1 {
  font-size: 2.2em;
}
h2 {
  font-size: 2.0em;
}
h3 {
  font-size: 1.8em;
}
h4 {
  font-size: 1.6em;
}
h5 {
  font-size: 1.4em;
}
p {
  font-size: 1.2em;
}
{% endhighlight %}

#### **Bölümlerin Oluşturulması**

Büyük CSS dökümanlarını yönetmek zordur. Ben stil dosyalarımı,
sayfaların veya şablonların bölümlerini kullanarak ayırırım. Her proje
değişik olacaktır. Fakat ben bazı bölümleri başlangıçta yerleştiririm ve
sonra eğer önemliyse değiştiririm.

{% highlight css %}
/* Header
-------------------------------------------------------------------------*/
/* Navigation
-------------------------------------------------------------------------*/
/* Footer
-------------------------------------------------------------------------*/
/* Homepage
-------------------------------------------------------------------------*/
/* Your template
-------------------------------------------------------------------------*/
{% endhighlight %}

#### **Formlar**

Formlarda başlangıç olarak, yazıyı kutunun kenarından öteye taşımak için
text giriş kutularına birazcık padding veririm ve kutuya gri border
rengi veririm.

{% highlight css %}
/* Formlar
-------------------------------------------------------------------------*/
input.text {
  padding: 3px;
  border: 1px solid #999999;
}
{% endhighlight %}

#### **Tablolar**

Son olarak tablolar için yine [Andy Budd'un][] başlangıcını kullanırım.
Böylece tablo içinde nerde olduğumu biliyorum. Bunun çok işe yaradığını
düşünüyorum.

{% highlight css %}
/* Tablolar
-------------------------------------------------------------------------*/
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td {
  text-align: left;
  font-weight: normal;
}
{% endhighlight %}

#### **Başlangıç XHTML**

Başlangıç XHTML kodum aşağıdaki gibidir. Normalde print stil dosyama
ikonları ve RSS beslemelerini proje progresses -?- olarak eklerim.

{% highlight css %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
<title>Sayfa Başlığı Buraya</title>
<style type="text/css" media="screen">@import
"/css/screen.css";</style>
<meta name="DC.title" content="Başlık buraya" />
<meta name="DC.subject" content="Anahtar kelimeler buraya" />
<meta name="DC.description" content="Tanım buraya" />
<meta name="DC.format" content="text/html" />
<meta name="DC.publisher" content="Yayımcı buraya" />
<meta name="DC.language" content="en" />
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"
/>
</head>
<body>
<div id="wrapper">
</div>
</body>
</html>
{% endhighlight %}

#### **Kişisel Seçim Meselesi**

Tabii ki kodlamaya başlarken başlangıç şablonu kullanmak için
anlattıklarımın en iyi yol olduğunu söylemiyorum. Fakat bence işe
yarıyor.

Eğer başlangıç dosyalarımın bir kopyasını isterseniz [buradan alabilirsiniz.][]

> Bu makale
> [http://www.shapeshed.com/journal/default_styles_for_css/][]
> adresinden Türkçe'ye **eDe** tarafından çevirilmiştir. eDe'ye
> teşekkürler.


  [Tantek Celik]: http://tantek.com/log/2004/undohtml.css
  [tıklayınız.]: /dokumanlar/duzenlenen%20tantek.css
  [Andy Budd]: http://www.shapeshed.com/journal/default_styles_for_css/www.andybudd.com/
  [mükemmel kitabından]: http://www.cssmastery.com/
  [Richard Rutter’un yaklaşımını]: http://clagnut.com/blog/348/
  [Andy Budd'un]: http://www.andybudd.com/
  [buradan alabilirsiniz.]: http://www.shapeshed.com/downloads/default_css.zip
  [http://www.shapeshed.com/journal/default_styles_for_css/]: http://www.shapeshed.com/journal/default_styles_for_css/
