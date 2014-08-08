---
layout: post
title: İnternet Explorer hasLayout Kabulü ve Sorunları
Date: 2012-05-15 17:44
Category: CSS, XHTML
tags: hasLayout, ie7, ie8, microsoft, zoom:1
---

**Makaleye başlamadan önce Internet Explorer 8 standart modda hasLayout
kabulünün kaldırıldığını söyleyelim. IE7 uyumluluk modunda hala
mevcut.**

hasLayout özelliği hakkında bir şeyler bilmememiz normal çünkü biz daha
çok sorun kısmını görüyoruz. Aslında bazı kaynaklarda “Boyutlandırma
Hatası” olarak da geçiyor bu sorunlar. hasLayout Internet Explorer’un
yorumlayıcı motorunun bir kabulü olarak tanımlanabilir. Internet
Explorer Eski bir yorumlayıcıyı([Mosaic][]) kullanıyordu. Bu yorumlayıcı
her bir elemanı(satıriçi elemanlar dahil) bir kutu olarak kabul eder ve
kutunu dışına çıkışa izin vermez. Bir hücrenin tablonun dışına çıkmasına
izin vermediği gibi. Bildiğimiz tablolu kodlama mantığı yani.

Yıllar sonra Microsft CSS için [Trident][] motorunu adapte etmeye
başladı. Ancak CSS ile birlikte her şeyin dikdörtgen bir yapı içinde
olduğu kabulü eskimeye başlar. CSS elemanın dışına taşmayı destekliyor.
float uygulanmış elemanlar veya içeriği kapsayıcısından uzun olan
elemanlarda türetilmeye başlandı.

Micrsoft bu sorunu düzeltmek için bir yama yapmayı planladı. Sonuç
olarak hasLayout özelliğini türettiler. Her element için hasLayout
değeri true veya false olarak ayarlanır. Eğer true olarak tanımlandı ise
kutu kendini kapsar. Yani içinde float uygulanmış bir eleman veya dışarı
taşan bir eleman varsa bunların hepsini kapsar. Eğer hasLayout değeri
false ise, eleman kendini kapsamaz ve kapsama işini üst elementin
yapmasını bekler. İşte sorunda tam burada başlar.

hasLayout özelliği bir CSS özelliği değildir, yani biz hasLayout:true
diye bir tanım yaparak bu sorunları halledemiyoruz.

-   <html\>,<body\>
-   <table\>,<tr\>,<th\>,<td\>
-   <iframe\>,<embed\> (non-standard element), <object\>, <applet\>
-   <img\>
-   <hr\>
-   <input\>, <button\>, <select\>, <textarea\>, <fieldset\>, <legend\>
-   <marquee\> (don't ever use this one, non-standard and annoying)

Etiketlerinin başlangıç hasLayout değeri true olarak geliyor.

Ayrıca bazı özellikler tanımlandığında hasLayout true olur;

-   position: absolute
-   float: left veya right
-   display: inline-block
-   width: herhangi bir değer veya auto
-   height: herhangi bir değer veya auto
-   zoom: herhangi bir değer
-   writing-mode: tb-rl

ie7 ile gelen yeni özellikler;

-   overflow: hidden veya scroll veya auto
-   overflow-x: hidden veya scroll veya auto
-   overflow-y: hidden veya scroll veya auto
-   min-width: herhangi bir değer veya auto
-   max-width: herhangi bir değer veya auto
-   min-height: herhangi bir değer veya auto
-   max-height: herhangi bir değer veya auto

Microsoft IE 8 standart modda bu sorunu çözdü.

Yukarıdaki özellikleri  atamak her zaman mümkün olmuyor ama sadece
Internet Explorer’a özel olan zoom ve writing-mode özellikleri
kullanılabilir. Tabi bu özelliklerin standartlar dahilinde değildir.

zoom özelliği sayfanın yakınlaştırmak için kullanılır. 2 değeri sayfayı
iki kat büyüterek gösterecektir. 1 değer ise sayfanın normal boyutlarda
görünmesini sağlayacaktır. zoom: 1 değeri hasLayout değerini true
yaparak bize çözüm sağlayacaktır.

Bu özellik sadece Internet Explorer için geçerlidir.

## Sonuç

Bu yazıyı yazmamdaki ana nedenlerden birisi İnternet Explorer 7’nin
yorumlayıcı motorunun ne kadar eski bir teknoloji kullandığını
göstermek. Yakın zamanda [ie6’yı öldürdük][]. Gerçi hala ie6 için kod
yazan arkadaşlar var galiba bu yönde mesajlar geliyor bana, onlar için
yapacak pek bir şeyim yok(Allah kurtarsın!). Benim sorunum ie7’nın o
kadarda masum olmadığını göstermek. ie7’nin kullanım yüzdesi
[%7(makaleyi yazdığımda idi şimdi %4,5 kadar düştü)][] civarında ve
hızla düşüyor. Normalde %5’in altına inen tarayıcıların desteğini
kaldırmakta sorun yok, tabi büyük çaplı sitelerde bu oran biraz daha
düşüyor. İnternet Explorer’ın tüm sürümleri sorunlu evet biliyorum.
İnternet Explorer desteğini tümden kaldırsak en iyisi ama bunun imkanı
yok maalesef.

Bu sene ortası veya sonuna doğru ie7 desteğini kaldıracağız inşallah.
Ancak her şey bitmiyor. CSS3’ün birçok özelliği kodlama hayatımıza
girmiş durumda ve İnternet Explorer’un mevcut sürümlerinden ie8 ve
ie9’un CSS3 desteği yok denecek kadar az. Farklı tarayıcılar için kod
yazma serüvenimiz devam edecek yani.

Bir sonraki yazım İnternet Exlorer 7’nin kaybettirdikleri olacak.

Kalın sağlıcakla

## Kaynaklar

-   [http://haslayout.net/haslayout][] (site)
-   [http://www.satzansatz.de/cssd/onhavinglayout.html][] (detaylı)
-   [http://reference.sitepoint.com/css/haslayout][]
-   [http://msdn.microsoft.com/en-us/library/bb250481(v=vs.85).aspx][]
    (detaylı, kaynağından)
-   [http://css-class.com/articles/explorer/guillotine/][] (hasLayout
    hatası)
-   [http://www.alsacreations.com/article/lire/76-haslayout-internet-explorer.html][]
    (farklı dil)
-   [http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout][]
    (hasLayour ve sorun)
-   [http://onwebdev.blogspot.com/2011/02/css-internet-explorer-bugs-and.html][]
    (hasLayout ve sorun)
-   [http://stackoverflow.com/questions/1794350/what-is-haslayout][]
-   [http://stackoverflow.com/search?q=hasLayout][]
-   [http://www.webmasterworld.com/forum83/6999.htm][]
-   [http://msdn.microsoft.com/en-us/library/ms533776.aspx][]


  [Mosaic]: http://en.wikipedia.org/wiki/Mosaic_web_browser
  [Trident]: http://en.wikipedia.org/wiki/Trident_(layout_engine)
  [ie6’yı öldürdük]: http://www.fatihhayrioglu.com/ie6-sonrasi-kod-yazma-aliskanliklarimizi-guncellemek/
  [%7(makaleyi yazdığımda idi şimdi %4,5 kadar düştü)]: http://labs.sahibinden.com/yazi/sahibinden-com-ziyaretcileri-2011-yili-teknoloji-analizi/
  [http://haslayout.net/haslayout]: http://haslayout.net/haslayout
  [http://www.satzansatz.de/cssd/onhavinglayout.html]: http://www.satzansatz.de/cssd/onhavinglayout.html
  [http://reference.sitepoint.com/css/haslayout]: http://reference.sitepoint.com/css/haslayout
  [http://msdn.microsoft.com/en-us/library/bb250481(v=vs.85).aspx]: http://msdn.microsoft.com/en-us/library/bb250481(v=vs.85).aspx
  [http://css-class.com/articles/explorer/guillotine/]: http://css-class.com/articles/explorer/guillotine/
  [http://www.alsacreations.com/article/lire/76-haslayout-internet-explorer.html]: http://www.alsacreations.com/article/lire/76-haslayout-internet-explorer.html
  [http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout]: http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
  [http://onwebdev.blogspot.com/2011/02/css-internet-explorer-bugs-and.html]: http://onwebdev.blogspot.com/2011/02/css-internet-explorer-bugs-and.html
  [http://stackoverflow.com/questions/1794350/what-is-haslayout]: http://stackoverflow.com/questions/1794350/what-is-haslayout
  [http://stackoverflow.com/search?q=hasLayout]: http://stackoverflow.com/search?q=hasLayout
  [http://www.webmasterworld.com/forum83/6999.htm]: http://www.webmasterworld.com/forum83/6999.htm
  [http://msdn.microsoft.com/en-us/library/ms533776.aspx]: http://msdn.microsoft.com/en-us/library/ms533776.aspx
