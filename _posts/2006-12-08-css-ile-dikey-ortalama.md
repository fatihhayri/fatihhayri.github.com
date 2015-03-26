---
layout: post
title: CSS ile Dikey Ortalama
Date: 2006-12-08 22:24
Category: CSS, Web Standartları, XHTML
tags: CSS, dikey, dikey-ortalama, ortalamak, Web Standartları, XHTML
---

Benimde çok fazla sıkıntısını çektiğim elementlerin dikey de ortalama
işi için bir çok teori ve yöntem ileri sürülmektedir. Ben bunların en
makbul olanını bulup uygulamak istedim ve bu makalede bunu sizlerle
paylaşıyorum. Aslında bulunan çözümler beni tam olarak tatmin etmiyor
desem yeridir. Aşağıda anlatılacak yöntem istediğimiz sonucu elde etmek
için yeterli olacaktır.

CSS ile dikey oratalama ile ilgili farklı yöntemler vardır. Ayrıca bazı
şartlara göre de kodlama önerileri vardır, biz burada bunlara değinmeden
geçeceğiz. İlgilenenler makalenin sonunda verilen kaynaklar bölümündeki
linkleri takip edip ilgili yöntemlere erişebilirler.

CSS ile dikeyde ortalama yapmak için **vertical-align** özelliği var ise
de bu özellik HTML'deki tablo gibi çalışmaz. Yani istediğimiz sonuca
bizi ulaştırmaz.

CSS **vertical-align** özelliği belirsiz yükseklikte(içeriği
değişebilen) kutularda işe yaramaz.

IE için Keystone'un sunduğu çözüm; mutlak konumlandırma uygulanmış
kapsayıcı elemente yüksekliğinin yarısı kadar **top(veya margin-top)**
değeri uygulamaktır. Bu kapsayıcı elementin içindeki elementi dikeyde
ortalayacaktır.

Mozilla, Opera, Safari gibi standart web tarayıcıları için çözüm çok
farklıdır. Üstteki katmana **display:table** tanımı yapılır. İçteki
elementlere de **display:table-cell** özelliği uygulanır. Ayrıca dikeyde
ortalanmak istenen elemente **vertical-align** tanımı yaparak element
dikeyde ortalanır. (Bu özelliği IE kavrayamamaktadır. Kavramamakta da
ısrarlıdır. IE 7 display:table ve türevlerini desteklemiyor.)

İki çözüm vardır altçizgi(_) ve (#) ile yapılan bir çözüm vardır.
IE(IE7 hariç) (_) ile tanımlanan kodu görmediği için yorumlamayacaktır.
\# ile başlayan kodları tüm IE versiyonları(IE7 dahil) görmeyecektir. Bu
işaretlerin kullanım amacı tüm versiyonlarda aynı sonucu elde etmektir.

Aşağıdaki kod IE5+,FF, Opera 7, Konqueror 3.0.3 altında standart ve
[garip mod][] da çalışıyor.

{% highlight html %}
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
<title>CSS ile dikey ortalama</title>
<style>
#Kapsul{
	display: table;
	height: 400px;
	#position: relative;
	overflow: hidden;
	border: 1px solid green;
}
#IcerikAlani{
	#position: absolute;
	#top: 50%;
	display: table-cell;
	vertical-align: middle;
}
#alan{
	#position: relative;
	#top: -50%;
	border: 1px solid green;
}
</style>
</head>
<body>
  <div id="Kapsul">
    <div id="IcerikAlani">
    <div id="alan">Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a galley of type and  scrambled it to make a type specimen book. </div>
    </div>
  </div>
</body>
</html>
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

## Kaynaklar

-   [http://www.jakpsatweb.cz/][]
-   [http://wellstyled.com/][]
-   [http://www.hicksdesign.co.uk/][]
-   [http://www.student.oulu.fi/][]

  [garip mod]: http://www.fatihhayrioglu.com/dogru-doctype-kullanimi/
  [tıklayınız.]: /dokumanlar/dikey_ortalama_ornek1.html
  [http://www.jakpsatweb.cz/]: http://www.jakpsatweb.cz/css/css-vertical-center-solution.html
  [http://wellstyled.com/]: http://wellstyled.com/singlelang.php?lang=en&page=css-single-line-vertical-centering.html
  [http://www.hicksdesign.co.uk/]: http://www.hicksdesign.co.uk/journal/how-to-vertical-centering-with-css
  [http://www.student.oulu.fi/]: http://www.student.oulu.fi/~laurirai/www/css/middle/
