---
layout: post
title: Doğru DOCTYPE Kullanımı
Date: 2006-09-15 23:59
Category: CSS, Web Standartları, XHTML
tags: [CSS, DOCTYPE, mod, Web Standartları, XHTML]
---

DOCTYPE, HTML veya (X)HTML dökümanımızın tipini göstermek için
kullandığımız bir koddur.

DOCTYPE bildirimi (X)HTML kodunun başına bir veya iki satır olarak
eklenir. Genel kullanımı:

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

Burada dökümanımızın XHTML 1.0 verisyonu dikkate alınarak yazıldığı ve
kullanılan bu kuralların linki verilmiştir. Linkin kullanılmadığı
şeklide vardır.

Bu tanımlamadan sonra web tarayıcıları bu kurallara göre sayfayı
yorumlayacak ve buna göre bir görünümü kullanıcıya sunacaktır. Web
tarayıcıları kullanılan Döküman tip tanımlamasına(DTD-document type
definition)göre sayfayı analiz eder.

## Web Sayfalarını Doğrulama "Onaylama"

Güzel bir kodlama, (X)HTML dökümanın onyalanmış halidir. Web
sayfalarımız doğrulamak için genelde [http://validator.w3.org/][] adresi
kullanılırız. Ancak bir çok web sayfası hazırlama editörü bu aracı
içinde barındırır.Web sayfalarımız doğrulattığımızda sonuç olarak bize
sayfamızda bir sorun varsa bunuve niçin olduğunubelirtir.

Doğrulam işlemi önemlidir çünkü bizim kodlarımızı doğru yazdığımızı
kontrol eder. Kodlarınızı belirli aralıklarla doğrulmayı unutmayın.
şžunu unutmayalım ki web sayfasını doğrulamamız bunu en mükemmel kod
olduğu anlamına gelmez. Ayrıntı için [tıklayınız][].

## Web tarayıcı mod'ları

Web tarayıcı üreticileri geriye dönük uyumluluğu sağlamak için
standarlara uygun tarayıcılar çıkardıklar. Bunu başardılar, bu işlem
için iki mod ürettirler: **standart mod**(standards mode) ve **garip
mod**(Quirks mode). Standart mod sayfa ayrıntılı olarak ve en iyi
şekilde yorumlayacaktır,Garip mod da ise eski moda tarayıcılardaki gibi
daha duyarsız davranacaklardır. Örneğin IE4 ve NN4 gibi.

Bu iki mod arasındaki farkı görebilemke için Windows üzerindeki IE'de
kutu modeline bakmalıyız. IE6 başlangıçta Standart Mod da [Kutu Modeli][] doğru görünürken Garip Mod da ise sorun çıkarır. IE5 ve
aşağısında bu sorun vardır, ayrıca Opera 7 ve üsrü Garip Mod da IE gibi
davranır. Bunun dışında ufak tefek sorunlar da vardır. Hekzedesimal renk
tanımında # kullanımına ihtiyaç duymama, CSS'de değer kullanılmadığında
birimi piksel olarak tanınması vb. sorunlar olarak sıralayabiliriz.

Mozilla ve Safaride bir üçüncü mod vardır, ancak Standart Mod'dan çok
önemli bir farkı yoktur.

## DOCTYPE Geçişleri

Web tarayıcıları DOCTYPE bildirimi ve kullanılan DTD'ye göre tarama
metodunu belirler. Bir dökümanda DOCTYPE tanımı yapılırsa bu sayfa
Standart Mod da, yapılmazsa Garip Mod da yorumlanacaktır bu
geçişe**DOCTYPE Geçişi**(DOCTYPE switching) adı verilir.

-   XHTML dökümanında tam bir DOCTYPE tanımı yapıldı ise web tarayıcısı
    taramayı Standart Mod da yapacaktır.
-   HTML 4.01 dökümanı için DOCTYPE ve strict DTD tanımı yapıldığında
    sayfa web tarayıcısı tarafından StandartMod da yorumlanacaktır.
-   DOCTYPE ve transtional DTD URI tanımlı halin de Standart Mod da
    yorumlanacaktır.
-   DOCTYPE ve transtional DTD URI'siz ise Garip Mod da yorumlanacaktır.
-   Kötü formatlanan veya DOCTYPE kullanımılmayan dökümanlar HTML ve
    XHTML tarafında Garip Mod da yorumlanacaklardır.

Web tarayıcılarının DOCTYPE tiplerine göre farklılıklarını görmek için
[http://www.ericmeyeroncss.com/bonus/render-mode.html][] bir göz atın.

Çok uğraşıp en iyi ve en doğruCSS kodunu yazdıktan sonra yanlış DOCTYPE
kullandığınızda sayfanız Garip Mod da yorumlanacaktır ve bu size bir çok
sorun oluşturacaktır. Sitenizde tam DOCTYPE bildirimive strict DTD
kullanmanız çok önelidir.

	:::html
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">


Bu kullanım sayfanın **HTML 4.01** kurallarının geçerli olduğu bir HTML
dosyası olduğunu gösterir.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


Bu kullanım sayfanın **hem HTML hemde XHTML** kurallarının geçerli
olduğunu bir XHTML dosyası olduğunu gösterir.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">


Bu kullanım sayfanın **sadece XHTML1.0**kurallarının geçerli olduğu bir
XHTML sayfası olduğunu gösterir. Bu kodlama yapıldığıında tüm XHTML
kurallarına harfiyen uyulmalıdır. Örneğin kodların hepsinin küçük harfle
yazılması gibi.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">


Bu kullanım sayfanın bir **XHTML çerçeve(frame)**sayfası olduğunu
gösterir. Kullanımı azaldı.

Biz burada sizlere DOCTYPE tanımlamanın nasıl olduğunu ve önemini
anlatmaya çalıştık. Bir çok HTML ediötürü DOCTYPE taınımını otomatik
ekleyecektir.

  [http://validator.w3.org/]: http://validator.w3.org/
  [tıklayınız]: http://www.fatihhayrioglu.com/?p=146
  [Kutu Modeli]: http://www.fatihhayrioglu.com/?p=13
  [http://www.ericmeyeroncss.com/bonus/render-mode.html]: http://www.ericmeyeroncss.com/bonus/render-mode.html
