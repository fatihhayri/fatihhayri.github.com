---
layout: post
title: CSS için Başlangıç Stilleri
Date: 2007-05-23 14:41
Category: CSS, XHTML
tags: CSS, XHTML
---

#### **Kodunuza Yorum Yapın**

Farklı web tarayıcılarının kodları farklı şekilde yorumlamalarından
dolayı hızlı CSS kodlamak zorlaşıyor. Tasarımlar her web tarayıcısında
aynı şekilde görünmez fakat kodlamaya başlarken başlangıç stil dosyası
kullanarak -hızlı CSS yazma konusunda- kendine yardım edebilirsin.


CSS dökümanınıza yorum ekleyerek başlamak önemlidir. Ben Andy Budd’un
CSS kodlarını yazmadan önce; versiyon numarası, e-posta ve website
adresi bilgilerini eklemesini seviyorum. CSS dokümanında yapılan
değişikliklerin not edilmesi veya notların nerede olduğunun yazılması
bize dokümanı tekrar incelerken ve değişiklik yaparken yardımcı olur.

1.  /*-------------------------------------------------------------------------
2.  [client] Screen Stil Dosyası
3.  version : 1.0
4.  tarih : 01/03/07
5.  yazar : [adınız]
6.  eposta : [siz at domain dot com]
7.  website : [website adresiniz]
8.  version geçmişi : [dosyanın bulunduğu yer]
9.  -------------------------------------------------------------------------*/

#### **Stil Dosyanızı Nasıl Bölümleyeceğinize Karar Verin**

Çoğu zaman bir tek stil dosyasıyla paçayı kurtarabileceğimi keşfettim.
Hatta bazen birden fazla stil dosyası gerektirecek kadar büyük sitelerde
bile. Gerçekten bazı CSS yazarları stil dosyasını bölmeyi tercih
ederler. Bu bir kişisel seçim meselesidir. Bundan sonra başlangıç stil
dosyamın içinde, başka bir stil dosyasını çekebileceğim bir bölümüm var.

1.  /* Diğer Stil Dosyalarını Dahil Etmek -Import-
2.  -------------------------------------------------------------------------*/
3.  @import url("typography.css");

#### **Başlangıç Stillerini Sıfırlamak -Silmek-**

[Tantek Celik][] (Türkçe örnek dosya için [tıklayınız.][]) elementlerden
başlangıç stillerini silmek için bir stil dosyası yazdı. Buna bir
gözatmak ihtiyacınızı karşılayabilir. Şahsen ben bu stil dosyasını
elementlerin yeniden yapılandırılması için kullanılan evrensel bir kural
olarak yeterli buluyorum. Bu dosyanın birçok projede kullanımında
herhangi bir performans sorunu yaşamadım.

1.  /* Padding ve Margin’lerin Silinmesi -Sıfırlanması- */
2.  *
3.  {
4.  margin: 0;
5.  padding: 0;
6.  border: 0;
7.  }

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

1.  .clear
2.  {
3.  clear:both;
4.  }
5.  .right
6.  {
7.  float: right;
8.  }
9.  .left
10. {
11. float: left;
12. }

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

1.  body
2.  {
3.  font: 62.5%/1.5 "Lucida Grande", "Lucida Sans", Tahoma, Verdana,
    sans-serif;
4.  background: url(/images/wallpaper.png) repeat;
5.  color: #000000;
6.  text-align:center;
7.  }
8.  #wrapper
9.  {
10. width:980px;
11. text-align:left;
12. margin-left:auto;
13. margin-right:auto;
14. background-color: #FFFFFF;
15. }

#### **Tipografinin Düzenlenmesi**

Sonra öntanımlı font büyüklüklüklerini ayarlamak isterim. Richard
Rutter'in methodunu kullanarak öntanımlı büyüklüğün 10 pt olduğunu
biliyoruz. Böylece kesin doğru boyutlandırma yapabiliriz.

1.  h1
2.  {
3.  font-size: 2.2em;
4.  }
5.  h2
6.  {
7.  font-size: 2.0em;
8.  }
9.  h3
10. {
11. font-size: 1.8em;
12. }
13. h4
14. {
15. font-size: 1.6em;
16. }
17. h5
18. {
19. font-size: 1.4em;
20. }
21. p
22. {
23. font-size: 1.2em;
24. }

#### **Bölümlerin Oluşturulması**

Büyük CSS dökümanlarını yönetmek zordur. Ben stil dosyalarımı,
sayfaların veya şablonların bölümlerini kullanarak ayırırım. Her proje
değişik olacaktır. Fakat ben bazı bölümleri başlangıçta yerleştiririm ve
sonra eğer önemliyse değiştiririm.

1.  /* Header
2.  -------------------------------------------------------------------------*/
3.  /* Navigation
4.  -------------------------------------------------------------------------*/
5.  /* Footer
6.  -------------------------------------------------------------------------*/
7.  /* Homepage
8.  -------------------------------------------------------------------------*/
9.  /* Your template
10. -------------------------------------------------------------------------*/

#### **Formlar**

Formlarda başlangıç olarak, yazıyı kutunun kenarından öteye taşımak için
text giriş kutularına birazcık padding veririm ve kutuya gri border
rengi veririm.

1.  /* Formlar
2.  -------------------------------------------------------------------------*/
3.  input.text
4.  {
5.  padding: 3px;
6.  border: 1px solid #999999;
7.  }

#### **Tablolar**

Son olarak tablolar için yine [Andy Budd'un][] başlangıcını kullanırım.
Böylece tablo içinde nerde olduğumu biliyorum. Bunun çok işe yaradığını
düşünüyorum.

1.  /* Tablolar
2.  -------------------------------------------------------------------------*/
3.  table
4.  {
5.  border-spacing: 0;
6.  border-collapse: collapse;
7.  }
8.  td
9.  {
10. text-align: left;
11. font-weight: normal;
12. }

#### **Başlangıç XHTML**

Başlangıç XHTML kodum aşağıdaki gibidir. Normalde print stil dosyama
ikonları ve RSS beslemelerini proje progresses -?- olarak eklerim.

1.  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
2.  <html xmlns="http://www.w3.org/1999/xhtml" >
3.  <head>
4.  <title>Sayfa Başlığı Buraya</title>
5.  <style type="text/css" media="screen">@import
    "/css/screen.css";</style>
6.  <meta name="DC.title" content="Başlık buraya" />
7.  <meta name="DC.subject" content="Anahtar kelimeler buraya" />
8.  <meta name="DC.description" content="Tanım buraya" />
9.  <meta name="DC.format" content="text/html" />
10. <meta name="DC.publisher" content="Yayımcı buraya" />
11. <meta name="DC.language" content="en" />
12. <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"
    />
13. </head>
14. <body>
15. <div id="wrapper">
16. </div>
17. </body>
18. </html>

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
