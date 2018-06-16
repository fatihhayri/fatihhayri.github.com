---
layout: post
title: Genelde Karşılaşılan Javascript Hataları
Date: 2008-06-20 10:25
Category: Javascript
tags: hata, Javascript, javascript hataları
---

Genelde javascript yazımına ara verdiğimde veya program yazıp sonra
javascript yazmaya başladığımda bazı sorunlarla karşılaşıyorum. Geriye
baktığımda ise bu hataların %80-90'ının aynı hatalar olduğunu gördüm,
bunları siteye yazmayı düşündüm ve biraz araştırınca aynı dertten
muzdarip olan bir çok insan olduğunu gördüm. Genelde hatayı bulup
düzelttiğimizde bunu nasıl görememişim değimiz(yuh artık buda olamaz!)
hatalardır bunlar.

Kendi sorunlarım ve araştırıp bulduğu genel sorunlar:

## = ve == operatörleri

= tanımlama operatörü, == iki değeri eşitlemek için kullanılır. Genelde
bir karışık oluyor

	:::javascript
	 var nDeger = deneme.gif ;
 == örnek verecek olursak; [sourcecode language="javascript"] if(nDeger == fatih.gif){ alert("Fatih geldi"); }


genelde karşılaştığım hata

	:::javascript
	 if(MyVar = "xyz")

## Tırnak İşaretleri

Dizgiler(string) tırnak işareti içinde olmalıdır. Tek tırnak veya çift
tırnak. Genelde çift tırnak ile başlayan tek tırnak ile kapattığımızda
veya tek tırnak ile başlayanı çift tırnak ile kapattığımızda sorun
yaşıyoruz. Yada dizgileri tırnak içine almayı unutuyoruz.

## Parantezler

Parantezlerde de açılan parantezi kapanmamasından kaynaklana sorunlarda
en çok karşılaştığımız sorunlardan biridir. if, for ve do while gibi
işlemler için kullandığımız parantezleri kapatmadığımızda hata
yaşıyoruz. Kod yazım formatımızı düzenli yaparsak bu sorunu çözebiliriz.

## Hiyerarşi sorunları

Çoğu zaman karşılaştığımız sorunlardan bir taneside doküman
hiyerarşisine göre daha oluşturulmamış bir nesneye erişmek istediğimizde
"abs has no properties" gibi bir hata ile karşılaşırız. Genelde
javascript dosyalarını <head> etiketi içinde tanımlarız ve sayfa
yüklenirken bir işlev yapılmasını istediğimizde böyle bir hata alırız.
Eğer sayfa ilk yüklendiğinde bir şey yapmak istiyorsak bu kodu sayfa
sonuna koymalıyız, yada yapmak istediğimiz işi sayfadaki bir nesne ile
tetikleyerekte bu sorunu çözebiliriz.

## Programın kullandığı Değişkenleri Kullanmak

Çok azda olsa böyle bir sorunla karşılaşabiliriz. Javascript programının
kendi değişkenlerini biz kullanmaya çalıştığımızda hata verir. Tam
listesini [rezerver edilmiş kelimeler][] linkinden bulabilirsiniz.

## Küçük büyük karakter karışımı

Javascript ile kod yazarken küçük büyük harflere dikkat etmeliyiz. Küçük
büyük harf bir çok hataya neden olur.

	:::javascript
	 var adSoyad = "Fatih Hayrioğlu"; If
(adSoyad == "fatih hayrioğlu")

Yukarıdaki kodda iki adet hata var. İlk hata If kullanımı. Javascript
bize If konusunda sorun olduğunu söylemez, ama IE "Object expected"
hatası verir, Firefox ise "If is not defined." hatasını verir. İkinci
hata ise ilk tanımda "Fatih Hayrioğlu" tanımına karşın sorguda "fatih
hayrioğlu" eşleşmesi bize false değeri gönderecektir.

Ayrıca belirtmek istediğim bir yer daha var. OnMouseOver ile onMouseOver
aynı şey değildir.

## '+' Kullanımını

Javascript'te +(artı) işareti hem sayısal toplama hemde string
birleştirmek için kullanılır. Karıştırmamak lazım.

	:::javascript
	 1 + 1 = 2

ve

	:::javascript
	 '1' + '1' = '11'

Ayrıca string birleştirirken tırnak işareti ile kullanılmalıdır.

	:::javascript
	 myString = myName + " ekle " +
myString ;

## Javascript: sözde protokolünün kullanımı

Javascript: sözde protokolü onClick gibi olay tetikleyicileri ile
kullanılmaz. Bu kullanım URL'lerde olur Örneğin <a> etiketin href
özelliğinde ve <form> etiketinin action özelliğinde

	:::html
	 <a href="javascript:pencereAc();">Pencere
Ac</a>

## document.write

document.write sayfa tamamen yüklendikten sonra işler ve içeriğin
üzerine yazar.

## Sonuç

Gerek javascript yazarken gerekse diğer programları yazarken bir çok
hata ile karşılaşıyoruz. Hataları en aza indirmek ve çözmek için bir çok
yöntem var. İlk olarak yaptığımız hataları tanırsak ona göre tedbir
alırız. Firefox'un FireBug aracı bence hata ayıklamak için bir numaralı
araç.

## Kaynaklar

-   <span>JavaScript: The Good Parts Ek b ***** </span>
-   [http://www.dynamicsitesolutions.com/javascript/mistakes/][] (kısa
    kısa) ***
-   [http://www.netmechanic.com/news/vol4/javascript_no23.htm][]
    (ayrıntılı) ****
-   [http://weblogs.asp.net/bleroy/archive/2005/02/15/Three-common-mistakes-in-JavaScript-_2F00_-EcmaScript.aspx][]
    ***
-   [http://javascript.about.com/od/reference/a/error.htm][] (ayrıntılı)
    ***
-   [http://www.c-point.com/javascript_tutorial/common_mistakes.htm][]
    **
-   [http://javascript.internet.com/debug-guide.html][] (ayrıntılı)
    ****
-   http://swik.net/JavaScript/Common+JavaScript+Development+Mistakes
-   [http://www.javascriptlint.com/][] *
-   [http://www.ddj.com/184412486][] **
-   [http://www.sitepoint.com/blogs/2004/08/18/five-common-mistakes-in-influencing-others/][]
    **
-   [http://www.javascriptsearch.com/guides/Beginner/articles/070625Mistakes.html][]
    (kısa kısa) **
-   [Beginning JavaScript][]


  [rezerver edilmiş kelimeler]: http://javascript.about.com/library/blreserved.htm
    "rezerver edilmiş kelimeler"
  [http://www.dynamicsitesolutions.com/javascript/mistakes/]: http://www.dynamicsitesolutions.com/javascript/mistakes/
  [http://www.netmechanic.com/news/vol4/javascript_no23.htm]: http://www.netmechanic.com/news/vol4/javascript_no23.htm
  [http://weblogs.asp.net/bleroy/archive/2005/02/15/Three-common-mistakes-in-JavaScript-_2F00_-EcmaScript.aspx]: http://weblogs.asp.net/bleroy/archive/2005/02/15/Three-common-mistakes-in-JavaScript-_2F00_-EcmaScript.aspx
  [http://javascript.about.com/od/reference/a/error.htm]: http://javascript.about.com/od/reference/a/error.htm
  [http://www.c-point.com/javascript_tutorial/common_mistakes.htm]: http://www.c-point.com/javascript_tutorial/common_mistakes.htm
  [http://javascript.internet.com/debug-guide.html]: http://javascript.internet.com/debug-guide.html
  [http://www.javascriptlint.com/]: http://www.javascriptlint.com/
  [http://www.ddj.com/184412486]: http://www.ddj.com/184412486
  [http://www.sitepoint.com/blogs/2004/08/18/five-common-mistakes-in-influencing-others/]: http://www.sitepoint.com/blogs/2004/08/18/five-common-mistakes-in-influencing-others/
  [http://www.javascriptsearch.com/guides/Beginner/articles/070625Mistakes.html]: http://www.javascriptsearch.com/guides/Beginner/articles/070625Mistakes.html
  [Beginning JavaScript]: http://www.wrox.com/WileyCDA/WroxTitle/productCd-0764555871.html
    "Beginning JavaScript"
