---
layout: post
title: Tablo Özellikleri
Date: 2007-09-10 22:00
Category: CSS, Web Standartları, XHTML
tags: [boder-spacing, border-collapse, caption-side, CSS, empty-cells, table, table-layout, tablo, Web Standartları, XHTML]
---

Daha önce "[CSS ile Tabloları şekillendirmek][]" adlı makalemizde tablo
yapılarını gördük ve görünümünü daha güzel nasıl yaparız onun üzerinde
durmuştuk. W3C bu durumu göz önünde bulundurarak tablo ve tablo
elementlerinin görünümünü düzenlemek için tablo özellikleri ekledi.
Tablolar diğer HTML elementlerinden daha farklı kendine has
elementlerdir ve farklı özellikleri vardır. Burada CSS2 ile birlikte
gelen yeni özellikleri inceleyeceğiz.

CSS2 ile birlikte gelen bu özelliklerden birçoğumuzun haberi
olmayabilir. Ancak bizlere yardımcı olacak bu özelliklere göz atmak
güzel. Bu özellikleri uygulamamızda en önemli etken tabiki IE'nin bu
özelliklerin bir kısmını desteklememesidir. Bu tabiki IE'ye puan
kaybettiriyor ve Microsoft'da bunun farkına geçte olsa vardığı
söyleniyor ve IE8 ile birlikte tam CSS desteğini bizlere sunacakmış,
tabi o zamana kadar Firefox IE'yi silip süpürmezse :D

-   [table-layout][]
-   [caption-side][]
-   [border-collapse][]
-   [border-spacing][]
-   [empty-cells][]

## table-layout

**Yapısı :** table-layout: (değer)
**Aldığı Değerler :** auto | fixed | kalıtsallık\\
**Başlnagıç değeri:** auto\\
**Uygulanabilen elementler:** display: table ve display:inline-table olarak belirlenen elementlere\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
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

Normalde tablolar içeriğindeki bilgiye göre genişliğini arttırır. Bu
bize bir esnek kazandırır ancak bazen tablo genişliğimizin sabit
kalmasını isteriz. table-layout:fixed değeri tablo genişliğimizi
sabitlememizi sağlar. table-layout:auto ise tablo genişliğini içeriğe
göre arttırır.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>table-layout örneği</title>
	<style>
	table.otomatik {table-layout: auto; width: 350px; border-collapse: collapse;}
	table.sabit {table-layout: fixed; width: 350px; border-collapse: collapse;}
	td, th {border: 1px solid;}
	</style>
	</head>
	<body>
	<table cellpadding="0" cellspacing="0" class="otomatik">
	  <caption>
	  Limitli ADSL Fiyatları
	  </caption>
	  <tr>
	    <th>Hızı*(Kbps) </th>
	    <th>Kota(GB) </th>
	    <th>Bağlantı Ücreti** </th>
	    <th>Aylık Ücret </th>
	    <th>Limitin Üzerindeki Her MB için Ücret*** </th>
	  </tr>
	  <tr>
	    <td>1024/256'e kadar</td>
	    <td>4</td>
	    <td rowspan="3">29 YTL</td>
	    <td>29 YTL</td>
	    <td>0,010 YTL</td>
	  </tr>
	  <tr>
	    <td>1024/256'e kadar</td>
	    <td>6</td>
	    <td>39 YTL</td>
	    <td>0,009 YTL</td>
	  </tr>
	  <tr>
	    <td>2048/512'e kadar</td>
	    <td>6</td>
	    <td>49YTL</td>
	    <td>0,009 YTL</td>
	  </tr>
	</table>
	&nbsp;
	<table cellpadding="0" cellspacing="0" class="sabit">
	  <caption>
	  Limitli ADSL Fiyatları
	  </caption>
	  <tr>
	    <th>Hızı*(Kbps) </th>
	    <th>Kota(GB) </th>
	    <th>Bağlantı Ücreti** </th>
	    <th>Aylık Ücret </th>
	    <th>Limitin Üzerindeki Her MB için Ücret*** </th>
	  </tr>
	  <tr>
	    <td>1024/256'e kadar</td>
	    <td>4</td>
	    <td rowspan="3">29 YTL</td>
	    <td>29 YTL</td>
	    <td>0,010 YTL</td>
	  </tr>
	  <tr>
	    <td>1024/256'e kadar</td>
	    <td>6</td>
	    <td>39 YTL</td>
	    <td>0,009 YTL</td>
	  </tr>
	  <tr>
	    <td>2048/512'e kadar</td>
	    <td>6</td>
	    <td>49YTL</td>
	    <td>0,009 YTL</td>
	  </tr>
	</table>
	</body>
	</html>

![caption-side örneği][]

Örneği görmek için[tıklayınız.][]

## caption-side

**Yapısı :**caption-side: &lt;değer&gt;\\
**Aldığı Değerler :**top | bottom | inherit\\
**Başlnagıç değeri:**top\\
**Uygulanabilen elementler:**display: table-caption olarak belirlenen
elementlere\\
**Kalıtsallık:**Yok
{: .cssozelliktanimi}

Not: CSS2 ile birlikte left ve right değerleride vardı ancak
kullanışsızlığı nedeni ile CSS2.1'de kaldırıldı.

**caption-side:**Tablonun başlığının(<caption>) nerede(altta mı üstte
mi) olacağını belirler.

![caption-side örneği][1]

Örneği görmek için[tıklayınız.][2]

Bu özelliği IE(ie5+/mac destekliyor) desteklemiyor. Tüm tarayıcıların
desteklediği şekilde kod yazmak için <caption>
etiketinin**align**özelliği kullanılmalıdır. Örnek:

	:::html
	<caption align="bottom">
	<caption align="top">

**Tarayıcı Uyumu **
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

## border-collapse

**Yapısı :**border-collapse: &lt;değer&gt;\\
**Aldığı Değerler :**collapse | separate | kalıtsallık\\
**Başlangıç değeri:**separate\\
**Uygulanabilen elementler:**display:table ve display:table-caption
olarak belirlenen elementlere\\
**Kalıtsallık:**Var
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
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

border-collapse, tablo hücrelerinin etrafındaki kenarlık ile olan
mesafeyi azaltmamızı veya açmamızı sağlar.**separate**ataması yapılmış
ise hücreler arasına bir kaç piksellik mesafe konur, HTML içinden bu
boşlukları <table\> etiketinin cellspacing özelliği ile kaldırmak
istesek bile tarayıcılar bu seferde iki kenarlığı bir bir üstü
gösterecektir. Eğer**collapse**değeri verilirse iki hücre arasındaki
mesafe kalkacaktır ve tek kenarlık görünecektir.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>border-collapse örneği</title>
	<style>
	table.ayri { border-collapse: separate; }
	table.birlesik { border-collapse: collapse; }
	td { border: 1px solid black; padding: 3px; }
	</style>
	</head>
	<body>
	<table cellspacing="0" class="ayri">
	  <tr>
	    <td>hücre1</td>
	    <td>hücre2</td>
	  </tr>
	  <tr>
	    <td>hücre3</td>
	    <td>hücre4</td>
	  </tr>
	</table>
	&nbsp;
	<table border="0" cellspacing="0" class="birlesik">
	  <tr>
	    <td>hücre1</td>
	    <td>hücre2</td>
	  </tr>
	  <tr>
	    <td>hücre3</td>
	    <td>hücre4</td>
	  </tr>
	</table>
	</body>
	</html>

Örneği görmek için[tıklayınız.][3]

![border-collapse örneği][]

## border-spacing

**Yapısı :**border-spacing: &lt;değer&gt;\\
**Aldığı Değerler :**<uzunluk> <uzunluk>? | inherit\\
**Başlangıç değeri:**0\\
**Uygulanabilen elementler:**display:table ve display:table-caption
olarak belirlenen elementlere\\
**Kalıtsallık:**Var
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
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

border-spacing, normal uzunluk değerleri alır
ve**border-collapse:separate**ile birlikte kullanılır. Eğer tek değer
verilirse bu tüm kenarlar için geçerlidir, iki değer atanırsa ilki
yatayda boşluk için ikincisi dikey de boşluk vermek için tanımlanmıştır.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>border-spacing örneği</title>
	<style>
	table.ayri { border-collapse: separate; border-spacing: 3px 5px; }
	table.birlesik { border-collapse: separate; }
	td { border: 1px solid black; padding: 3px; }
	</style>
	</head>
	<body>
	<table cellspacing="0" class="ayri">
	  <tr>
	    <td>hücre1</td>
	    <td>hücre2</td>
	  </tr>
	  <tr>
	    <td>hücre3</td>
	    <td>hücre4</td>
	  </tr>
	</table>
	&nbsp;
	<table border="0" cellspacing="0" class="birlesik">
	  <tr>
	    <td>hücre1</td>
	    <td>hücre2</td>
	  </tr>
	  <tr>
	    <td>hücre3</td>
	    <td>hücre4</td>
	  </tr>
	</table>
	</body>
	</html>

Örneği görmek için[tıklayınız.][4]

![border-spacing örneği][]

## empty-cells

**Yapısı :**empty-cells: &lt;değer&gt;\\
**Aldığı Değerler :**show | hide | kalıtsallık\\
**Başlangıç değeri:**show\\
**Uygulanabilen elementler:**display:table-cellolarak belirlenen
elementlere\\
**Kalıtsallık:**Var
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
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

Bir tabloya bazı değerler atadığımızda(örneğin kenarlık değeri) boş olan
hücreler bu değeri görmez, bu durumu düzeltmek için boş olan hücreler
için boş karakter( ) koyarız genel.**empty-cells**özelliği ile boş kalan
hücrelere nasıl davranması gerektiğini bildirebiliriz. göster(**show**)
değeri ile hücrenin içeriği olan hücreler ile aynı özellikleri almasını
sağlayabiliriz. gizle(**hide**) değeri ile de hücrenin yokmuş gibi
davranmasını sağlarız.

Bu özellik Internet Explorer tarafından desteklenmemektedir.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>empty-cells örneği</title>
	<style>
	table.goster { empty-cells:show }
	table.gizle { empty-cells:hide }
	td { border: 1px solid black; padding: 3px; }
	</style>
	</head>
	<body>
	<table cellspacing="0" class="goster">
	  <tr>
	    <td></td>
	    <td>hücre2</td>
	  </tr>
	  <tr>
	    <td>hücre3</td>
	    <td>hücre4</td>
	  </tr>
	</table>
	&nbsp;
	<table border="0" cellspacing="0" class="gizle">
	  <tr>
	    <td></td>
	    <td>hücre2</td>
	  </tr>
	  <tr>
	    <td>hücre3</td>
	    <td>hücre4</td>
	  </tr>
	</table>
	</body>
	</html>


Örneği görmek için[tıklayınız.][5]

![empty-cells örneği][]

## Kaynaklar

-   [http://www.w3.org/TR/REC-CSS2/tables.html][]
-   [http://www.w3schools.com/css/css_table.asp][]
-   [http://www.blooberry.com/indexdot/css/propindex/table.htm][]

[CSS ile Tabloları şekillendirmek]: http://www.fatihhayrioglu.com/css-ile-tablolari-sekillendirmek/
[table-layout]: #table-layout
[caption-side]: #caption-side
[border-collapse]: #border-collapse
[border-spacing]: #boder-spacing
[empty-cells]: #empty-cells
[caption-side örneği]: /images/table_layout.gif
[tıklayınız.]: /dokumanlar/table-layout.html
[1]: /images/caption_side.gif
[2]: /dokumanlar/caption_side.html
[3]: /dokumanlar/border-collapse.html
[border-collapse örneği]: /images/border-collapse.gif
[4]: /dokumanlar/border-spacing.html
[border-spacing örneği]: /images/border_spacing.gif
[5]: /dokumanlar/empty_cells.html
[empty-cells örneği]: /images/empty_cells.gif
[http://www.w3.org/TR/REC-CSS2/tables.html]: http://www.w3.org/TR/REC-CSS2/tables.html
[http://www.w3schools.com/css/css_table.asp]: http://www.w3schools.com/css/css_table.asp
[http://www.blooberry.com/indexdot/css/propindex/table.htm]: http://www.blooberry.com/indexdot/css/propindex/table.htm
