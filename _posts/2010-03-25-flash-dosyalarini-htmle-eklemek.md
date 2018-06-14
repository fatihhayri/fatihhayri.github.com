---
layout: post
title: Flash dosyalarını(swf) HTML&#039;e eklemek
Date: 2010-03-25 00:46
Category: Javascript, XHTML
tags: flash-eklemek, swf-dosyası, swfobject, wmode
---

Flash dosyalarını html sayfalarımıza eklemek baştan beri tam oturmamış
bir konudur. Farklı tarayıcılar için farklı kod blokları yazılması,
flash olmaması durumu için hazırlanan resimler veya yazılar vs. Ancak bu
sorunlar yetmiyormuş gibi birde [İnternet Explorer'ın ActiveX güncellemesi sonrası][] yeni sorunlar çıktı.

O zamanı(Mart-Nisan 2006) hatırlıyorum Turkline'da çalışıyordum ve
[Microsoft'un Eolas ile lisans sorunları][] nedeni ile bir gün için tüm
flash içeren siteleri kontrol etmemiz gerekmişti. Çözümünü bulup tüm
dosyaları değiştirmemiz gerekmişti. Hey gidi günler.

Bu sorundan önce genelde Dreamweaver ki o zamanlar Macromedia
Dreamweaver idi, Dreamweaver ile açıp swf ekle diyorduk ve o kendi
kodunu ekliyordu.

Tabi internet explorer sorunu sonrası bu işi javascript ile yapmaya
başladık. Bir çok yöntem çıktı bu işi javascript ile yapan.

Eskileri bırakıp şimdiki zamana gelelim. Ben html sayfalarına flash(swf)
dosyaları eklemek için SwfObject kullanıyorum. Bir çok alternatifine
göre avantajlı.

Avantajlarını sıralarsak;

-   Diğer flash kodlarına göre daha optimize ve esnek
-   Herkes için tek çözüm sunuyor. HTML, javascript ve flashçılar için
-   Web standartlarına uygun kod üretiyor ve sorun çıktığında alternatif
    çözüm sunuyor.
-   Çok basit bir javascript kodu var
-   Kullanımı kolay
-   Boyutu 10kb'dan daha az.(Gzip hali 3.9kb)

SwfObject'in 2.2 sürümü çıktı son olarak. İşi iyice standart haline
getirmişler ve scriptsiz çalışan bir metot daha eklemişler. Statik ve
Dinamik kod diye iki kısma ayırmışlar kodu.

Kaynak kodları [Google Code][]'dan indireceğiz. İndirdiğimiz dosyada
**expressInstall.swf**, **swfobject.js**, **index.html**,
**index_dynamic.html**, **test.swf** dosyaları yer alır. Ayrııca src
klasörüde yer alır.

## Statik Kod ile Flash Dosyalarını Eklemek

SWFObject'in önceki sürümlerinde olmayan bu metot yeni sürüm ile
birlikte gelmiştir. Bu kod eski(ie eolas lisans sorunu öncesi) statik
metoda benzer bir yapıya sahiptir. Bu kod sayesinde javascript desteği
olmaya durumlar için kod üretmiş oluyoruz.

Bu metodun avantajı object ile eklenen kodların daha performanslı sonuç
verecektir. Dezavantajı ise eski tarayıcısı olan kullanıcıların gri
kenarlık sorunu ve tıklama sorunu yaşamalarıdır. Microsoft daha sonra bu
hatayı düzeltti ise de hala bu güncellemeyi yapmayan kullanıcılar
vardır.

Indirdigimiz dosya içerisinden çikan index.html sayfasi statik bir flash
eklemeye örnektir. Kodlarini incelersek

{% highlight html %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<title>SWFObject 2 static publishing example page</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<script type="text/javascript" src="swfobject.js"></script>
	<script type="text/javascript"> swfobject.registerObject("myId", "9.0.0", "expressInstall.swf"); </script>
</head>
<body>
<div>
	<object id="myId" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="300" height="120">
	<param name="movie" value="test.swf" />
	<!--[if !IE]>-->
	<object type="application/x-shockwave-flash" data="test.swf" width="300" height="120">
	<!--<![endif]-->
<div>
<h1>Alternatif içerik</h1>
<p>Kullanıcının bilgisayarında flash yüklü değilse burayı gösterecek
<a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a>
</p>
</div>
<!--[if !IE]>-->
</object>
<!--<![endif]-->
</object>
</div>
</body>
</html>
{% endhighlight %}

Kodu iki kısıma ayıralım. İlk head içerisindeki javascript kısmı ve body
içerisindeki html kısmı

**head içerisindeki javascript kısmı**

{% highlight html %}
<script type="text/javascript" src="swfobject.js"></script>
<script type="text/javascript">
	swfobject.registerObject("myId", "9.0.0", "expressInstall.swf");
</script>
{% endhighlight %}

registerObject fonksiyonuna html içindeki elemanın id'sini(myId), flash
sürümünü ve flash olmayanlar için yüklemeye yönlendiren dosyanın
adı(expressInstall.swf)

**Kodun ikinci kismina gelirsek body içerisine yazılan html kodumuz
var**

Bu kodumuz iç içe object elemanlarından oluşur. Ayrıca ie sürümlerinin
yorumlanması için ie yorum kodları yer alır.

-   id(id="myId") swfobject ile yakalamamız için gereklidir.
-   width - swf dosyasının genişlik değeri
-   height - swf dosyasının yükseklik değeri

Diğer atamalar sabittir. Ayrıca ek özellikler eklemek istediğimizde(örn:
flashvars, transparent vd.) <param> etiketi ile bunları eklemeliyiz.
Ayrıntılı bilgi için [tıklayınız][]

## Dinamik Kod ile Flash Dosyaları Eklemek

Dinamik yöntem ile kod ekleme yöntemi swfobject'in eski sürümleri ile
aynıdır. Bu yöntem daha basit uygulanabilirliği vardır. Ayrica dinamik
olarak eklendiği için javacscript ve ajax ile müdahale imkanı daha
kolaydır.

Bu yöntem kullanıldığında internet explorer'daki tıklama ve gri kenar
sorunu olmayacaktır.

İndirdiğimiz dosya içerisindeki **index_dynamic.html** bu kodlama
örneğini içerir.

Bu kodumuzda head içindeki ve body içindeki kısımları ile ikiye ayrılır.

**body içerisindeki kısmı**

{% highlight html %}
<div id="myContent">
	<h1>Alternatif içerik</h1>
	<p>Kullanıcının bilgisayarında flash yüklü değilse burayı gösterecek <a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a>
	</p>
</div>
{% endhighlight %}

Dinamik kodlama ile flash(swf) dosyalarının eklenme mantığı şöyledir;
bir eleman oluşturulur ve bu elemana dinamik olarak özellikleri atanır
ve sayfa içerisindeki id tanımlı alan ile bu içerik yer değiştirilir. Bu
şöyle bir avantaj sağlıyor bize eğer flash yok ise bu eleman içerisine
yazdığımız içeriği kullanıcı görüyor, flash var ise de flash görünüyor.

**head içindeki kısımları**

{% highlight html %}
<script type="text/javascript" src="swfobject.js"></script>
<script type="text/javascript">
	swfobject.embedSWF("test.swf", "myContent", "300", "120", "9.0.0", "expressInstall.swf");
</script>
{% endhighlight %}

swfobject.js dosyasını ekliyoruz. Sonrada html içerisine ekleyeceğimiz
swf dosyasının bilgilerini giriyoruz. Sırası ile incelersek

-   test.swf - Eklenecek swf dosyasının yolu ve adı, burada aynı
    klasörde olduğu için sadece adı yazılmıştır.
-   "myContent" - body içerisindeki içine eklenecek elemanın id'si
-   "300" - swf dosyasının genişliği
-   "120" - swf dosyasının yüksekliği
-   "9.0.0"- flash sürümü
-   expressInstall.swf- flash olmayanlar için yüklemeye yönlendiren
    dosyanın adı

Dinamik yöntemin avantajlarını sayarken kolay kullanımı olduğunu
söylemiştik. Mesela yeni parametre eklerken kodumuzu söyle değiştirmemiz
yeterli olacaktır

{% highlight javascript %}
var flashvars = {};
flashvars.xmlPath = "xml/data.xml";
var params = {};
params.menu = "false";
params.wmode = "opaque";
var attributes = {};
attributes.id = "myDynamicContent";
attributes.name = "myDynamicContent";
swfobject.embedSWF("test.swf", "myAlternativeContent", "300", "120", "9.0.0", false, flashvars, params, attributes);
{% endhighlight %}

İlk başta değişkenleri tanımlayıp sonra embed kodu içine ekliyoruz. Bir
başka şekli ile

{% highlight javascript %}
<script type="text/javascript">
	swfobject.embedSWF("test.swf", "myContent", "300", "120", "9.0.0","expressInstall.swf", {xmlPath:"xml/data.xml"}, {menu:"false", wmode:"opaque"}, {id:"myDynamicContent",name:"myDynamicContent"});
</script>
{% endhighlight %}

şeklinde de yazabiliyoruz. Parametre olarak ben genelde ya flashvars ile
xml yolunu yazıyorum, yada wmode özelliğini yazıyorum. Diğerlerini pek
kullanmıyorum. Bana eski sürümdeki parametre ekleme şekli daha kolay
geliyordu açıkçası.

## wmode özelliği

Yeri gelmişken wmode özelliğinede değinelim. window , opaque ve
transparent özelliklerini alıyor. Ben genelde bu özelliği diğer
elemanlar flash altında kalınca kullanıyorum. window hiç kullanmadım,
eskiden transparent kullanıyordum ancak transparent kullanınca flash çok
yavaşlatıyor sayfayı bu nedenle opaque kullanıyorum. Tabi eğer flash
zemini saydam olmayacak ise ki genelde olmuyor.

## Sonuç

SwfObject 2.2'in yanında google code içerisinde "SWFObject 2 HTML and
JavaScript generator v1.2" yukarıdaki kodu üretmek için bir sayfa
hazırlanmış işi daha kolay hale getiren bir araç.

Genel hatları ile bir web sayfasına swf dosyasını bu yöntem ile
ekleyebiliriz. Bunun dışında da javascript ile yapılmış bir çok yöntem
var, jquery eklentisi var. Ancak ben swfobject'i kullanıyorum. Sizlerede
kullanmanızı öneriyorum. Kendinize iyi bakın. Görüşmek dileğiyle.
Hoşçakalın.

## Kaynaklar

-   [http://code.google.com/p/swfobject/wiki/documentation][tıklayınız]
-   [http://www.adobe.com/devnet/flashplayer/articles/swfobject.html][]
-   [http://blog.deconcept.com/swfobject/][] (swfobject ayrintili)
-   [http://www.tizag.com/flashTutorial/flashhtmlcode.php][]
-   [http://www.ispringsolutions.com/articles/how_to_insert_flash_into_html.html][]
-   [http://groups.google.com/group/swfobject/browse_thread/thread/eeb1c721a0c10a90?pli=1][]
-   [http://www.alistapart.com/articles/flashembedcagematch/][]
-   [http://www.reelseo.com/swfobject-video-seo/][]
-   http://www.gotoandlearn.com/play?id=77


  [İnternet Explorer'ın ActiveX güncellemesi sonrası]: http://www.fatihhayrioglu.com/internet-explorer-activex-guncelmesi-ve-sonrasinda-flashswf-kullanilan-sayfalardaki-sorunlar/
  [Microsoft'un Eolas ile lisans sorunları]: http://www.baekdal.com/articles/technology/microsoft-ie-activex-update/
  [Google Code]: http://code.google.com/p/swfobject/
  [tıklayınız]: http://code.google.com/p/swfobject/wiki/documentation
  [http://www.adobe.com/devnet/flashplayer/articles/swfobject.html]: http://www.adobe.com/devnet/flashplayer/articles/swfobject.html
  [http://blog.deconcept.com/swfobject/]: http://blog.deconcept.com/swfobject/
  [http://www.tizag.com/flashTutorial/flashhtmlcode.php]: http://www.tizag.com/flashTutorial/flashhtmlcode.php
  [http://www.ispringsolutions.com/articles/how_to_insert_flash_into_html.html]: http://www.ispringsolutions.com/articles/how_to_insert_flash_into_html.html
  [http://groups.google.com/group/swfobject/browse_thread/thread/eeb1c721a0c10a90?pli=1]: http://groups.google.com/group/swfobject/browse_thread/thread/eeb1c721a0c10a90?pli=1
  [http://www.alistapart.com/articles/flashembedcagematch/]: http://www.alistapart.com/articles/flashembedcagematch/
  [http://www.reelseo.com/swfobject-video-seo/]: http://www.reelseo.com/swfobject-video-seo
