---
layout: post
title: jQuery ile Basit Sekme Yapımı
Date: 2009-05-25 09:40
Category: Javascript
tags: Javascript, jquery, sekme
---

![sekme_ornek][]Web sitelerinden uzun içerikler her zaman kullanıcıyı
itmiştir. Bunun için çeşitli çözümler üretilmiştir ve üretilmeyede
çalışılıyor. Yeterli alanların olmadığı durumlarda veya uzun içerikleri
olan sayfalarda sekme kullanımı yardımımıza koşar. Birçok sitede bu ve
benzeri nedenlerde dolayı sekmeleri kullanır.

Artık neredeyse tüm projelerimde jQuery olmazsa olmaz oluyor. Bu nedenle
javascript ile değil jQuery ile kodluyorum bu tip alanları. Sekmeli
içerik yapımı jQuery ile çok basit. Bunu burada beraber göreceğiz.

XHTML kodumuz:

	:::html
	<div class="sekmeAlani">
	<!--[if !IE]>sekmeler<![endif]-->
	<ul class="sekmeler">
	<li class="s1"><a href="javascript:void(0);" class="s1">Sekme1</a></li>
	<li class="s2"><a href="javascript:void(0);" class="s2">Sekme2</a></li>
	<li class="s3"><a href="javascript:void(0);" class="s3">Sekme3</a></li>
	<li class="s4"><a href="javascript:void(0);" class="s4">Sekme4</a></li>
	</ul>

	<!--[if !IE]>sekme icerikleri<![endif]-->
	<div class="s1">...</div>
	<div class="s2">...</div>
	<div class="s3">...</div>
	<div class="s4">...</div>
	</div>


Burada aslında href="javascript:void(0);" özelliğini kullanmayabiliriz,
ancak ie6 ve 7 bu durumda link tanımlarında sorun çıkarıyor. HTML'de
dikkat edeceğimiz bir kaç yer var. Link sınıf tanımı(örn: class="s1") ve
sekme içeriği sınıfları birbiri ile aynı olmalıdır.

Hemen uygulamaya geçersek.

Kodumuza jQuery kütüphanesini ekleyelim. Firefox'un YSlow eklentisinin
belirttiği gibi javascript kodlarını sayfamızın altına koyalım.

	:::html
	<script type="text/javascript" src="jquery.js"></script>
  	</body>
  	</html>

jQuery kodumuzu yazmaya başlayalım. Mantık olarak sekmeli menüler olsun,
sekmeli içerikler olsun aynıdır. Sekmelere tıklayınca o sekmeye ait
içerikler görünecek, diğerleri görünmez olacaktır. bu mantığa göre
kodumuzu yazalım.

	:::javascript
	$(document).ready(function() {
	  $('div.sekmeAlani ul.sekmeler li a').click(function(){
	     $(this).parent('li').addClass('sekmeSecili').siblings().removeClass('sekmeSecili');
	     var mevcutSinif = this.className.slice(0,2);
	     $('div.sekmeAlani > div').hide().filter('div.'+mevcutSinif).show();
	   });
	  $('.sekmeAlani ul.sekmeler li a:first').click();
	});

Kodumuz sadece bu kadar.

**$(document).ready(function() { .. });** jQuery'nin stadart kodu.

​5. satırdaki kodda; sekme linklerine tıklanınca yapılacak işlemleri
tetikliyoruz.

​6. satırda tıklanan sekmeyi seçili hale getiriyoruz. Burada
kullandığımız yöntem jQuery'nin bize sunduğu güzelliklerden biridir. Hem
tıklanan sekmeyi seçili hale getiriyoruz hemde bu arada diğer
sekmeleri(**siblings()** fonksiyonu sayesinde) normal hale getiriyoruz.
Tek satır kod ile bunu bize sağlaması jQuerynin güzelliği

​7. satırda tıklanan linkin sekme içeriği ile ilişkisini sağlayan
sınıfını yakalıyoruz. Burada **slice(0,2)** ile sınıfın iki kelimesini
alıyoruz, birebir sınıf karşılaştırması yapamıyoruz çünkü bu linke başka
sınıflarda atanmış olabilir. Bu sınıf adı bize ilişkili sekme içeriğini
göstermek için yardımcı olacaktır.

​8. satırda içerikleri gizleme ve gösterme işini
çözüyoruz.**$('div.sekmeAlani > div')** kodu bize **sekmeAlani**'nının
birincil div'lerini yani sekme içeriğini kapsayan katmanları gizlememizi
sağlıyor. Böylelikle sekme içinde **div** kullansak bile bunlar görünmez
olmuyor bu bir çok sekme kodunda göz ardı edilen bir husustur. CSS'de de
olan çocuk seçiciler(**>**) jQueryde gönül rahatlığı ile
kullanabiliyoruz çünkü ie6 desteğini jQuery hallediyor. jQuery'nin bize
sunduğu avantajlardan biride **filter()** fonksiyonudur. Bu sayede biz
tüm sekme içeriğini kapsayan div'leri gizle ama bu tıkladığımzın(bu
tıkladığımızda yukarıdan aldığımız sınıf tanımlaması ile anlıyoruz, aynı
sınıf atamamızın sebebi de budur.) içeriği hariç diye biliyoruz. Bize bu
kadar kolaylık sağlayan jQuery bundan dolayı çok seviyorum, pardon
seviyoruz galiba.

​10. satır sekme linki tıklamasını bitirdikten sonra sayfa ilk
açıldığında ilk linkin tıklanması ve içeriğinin gösterilmesi için
kodumuzu yazıyoruz. Buradaki **a:first** yine CSS'den bildiğimiz ama ie6
nedeni ile kullanamadığımız bir özellik. **click()** fonksiyonuda sanki
biz tıklamışız işlevi görüyoruz.

Evet koda baktığımızda 5-6 satırlık bir jQuery kodu ile sekmeli bir yapı
oluşturduk. jQuery'yi bu yüzden çok güzel. Bende öğrenmeye devam
ediyorum. Öğrendikçe sizlerle paylaşacağım. bu konuda ve bir çok yerde
yardımlarından dolayı [Orhan Ekici][]'ye(şu an yapım aşamasında)
teşekkürlerimi sunmadan geçemeyeceğim. İnşallah yakında sitesini açarda
internet alemine güzel bilgiler sunar.

[jQuery UI][] içinde [sekme ekelentisi][] var onuda tercih
edebilirsiniz. jQuery tab eklentisi çok ayrıntılı ve bir çok özellikleri
var. Bu bir bakıma avantaj olsada bazen dezavantaja dönüşebiliyor. Ben
ufak bir sekmeli içerik yapmak için jQuery UI tab eklentisini kullanmayı
uygun görmüyorum açıkçası.

Sekmeli içerik ve sekmeli menülerde farklı şekillerde örnekler var. Stil
dosyasını değiştirerek bu örnek üzerinden istediğimiz birçok sekmeli
içerik üretebiliriz.

Örnek kodu görmek için [tıklayınız.][]

Örnek kodu IE (6-7-8), Firefox 3.0.10, Opera 9.6, Googel Chrome 1.0 ve
Safari 3.2.2 sürümlerinde test ettim.

## Kaynaklar

-   [http://jqueryfordesigners.com/jquery-tabs/][]
-   [http://broadcast.oreilly.com/2008/10/how-to-create-tabs-with-css-an.html][]
-   [http://justintadlock.com/archives/2007/11/07/how-to-create-tabs-using-jquery][]
-   [http://www.barelyfitz.com/projects/tabber/index.php][]
-   [http://www.thetruetribe.com/jquery/3-jquery-widgets/77-how-do-i-make-tabs-in-jquery-without-jq-tabs-plugin][]

  [sekme_ornek]: /images/sekme_ornek-150x90.gif
    "sekme_ornek"
  [Orhan Ekici]: http://orhanekici.info/ "Orhan Ekici"
  [jQuery UI]: http://jqueryui.com/ "jQuery UI"
  [sekme ekelentisi]: http://docs.jquery.com/UI/Tabs "sekme ekelentisi"
  [tıklayınız.]: /dokumanlar/sekme.html
  [http://jqueryfordesigners.com/jquery-tabs/]: http://jqueryfordesigners.com/jquery-tabs/
    "http://jqueryfordesigners.com/jquery-tabs/"
  [http://broadcast.oreilly.com/2008/10/how-to-create-tabs-with-css-an.html]: http://broadcast.oreilly.com/2008/10/how-to-create-tabs-with-css-an.html
    "http://broadcast.oreilly.com/2008/10/how-to-create-tabs-with-css-an.html"
  [http://justintadlock.com/archives/2007/11/07/how-to-create-tabs-using-jquery]: http://justintadlock.com/archives/2007/11/07/how-to-create-tabs-using-jquery
    "http://justintadlock.com/archives/2007/11/07/how-to-create-tabs-using-jquery"
  [http://www.barelyfitz.com/projects/tabber/index.php]: http://www.barelyfitz.com/projects/tabber/index.php
    "http://www.barelyfitz.com/projects/tabber/index.php"
  [http://www.thetruetribe.com/jquery/3-jquery-widgets/77-how-do-i-make-tabs-in-jquery-without-jq-tabs-plugin]: http://www.thetruetribe.com/jquery/3-jquery-widgets/77-how-do-i-make-tabs-in-jquery-without-jq-tabs-plugin
    "http://www.thetruetribe.com/jquery/3-jquery-widgets/77-how-do-i-make-tabs-in-jquery-without-jq-tabs-plugin"
