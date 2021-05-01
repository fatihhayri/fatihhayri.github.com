---
layout: post
title: CSS ile Yüzde Çubuğu Hazırlama
Date: 2008-11-06 15:26
categories: [CSS]
tags: [anket, ardalan, CSS, teknik, yüzde-çubuğu]
---

Yüzde çubuğuna ben anket yaparken ihtiyaç duydum. CSS ile yüzde çubuğu
yapmak bize çok büyük kolaylık sağlıyor. Diğer yöntemlere göre daha
esnek ve kolay bir uygulamaya sahiptir CSS ile yüzde çubuğu hazırlamak.

CSS ile yüzde çubuğu yapmanın bir kaç yöntemi var, ben kendimce en uygun
gördüğümü anlatacağım.

Bu yöntemin uygulaması gayet basittir. Diğer yöntemlerden avantajıda
fazladan kod kullanılmamasıdır, sadece iki resim ile işimizi
halledeceğiz. Anlamlı kodlama açısından avantajlıdır.

Sayfamıza saydam bir resim ekleriz ve ardalan konumunu kod içinde
belirleriz

```html
<img src="/images/yuzde_cubugu.png" alt="%45" class="yuzdeCubugu" style="background-position: -50px 0;" />
```

Sonrasında CSS kodumuzu yazarsak;

```css
img.yuzdeCubugu {
  background: url(/images/yuzdeCubugu_ard.gif) top left no-repeat;
  padding: 0;
  margin: 0;
}
```

Kod kısmı bu kadar. Evet bu kadar kod ile yüzde çubuğunu oluşturduk.
Kodun mantığını incelersek;

Fikir olarak güzel bir düşünceye sahip olan bu kod, saydam orta kısmı
olan bir resme(bu resim bir bakıma kenar çizgisi görevide görüyor)
yüzdeyi göstermek için bir ardalan(background) atayarak yüzde çubuğumuzu
oluşturuyoruz. Bu ardalanın konumunuda, yüzde değerini göstermek için
kullanıyoruz. Sunucu taraflı bir dil ile  veya Javascript ile bu yüzde
çubuğundaki değeri belirtmek için ardalan konumunu değiştiririz.
Ayrıntılı bilgi ve örnek uygulama için
[http://www.webappers.com/progressBar/][] tıklıynız.

Resmin alt özelliğinede yüzde değerini yazdırmak ekran okuyucular için
ve dolayısıyla erişebilirlik açısından önemli.

Beraber bir örnek yapalım. Mesela son günlerin en çok konuşulan Amerika
Seçim Sonuçları için bir sayfa hazırlayalım.

Resimlerimiz
![yüzde çubugu][]

![][100]

![][1]

HTML kodumuzu yazalım.

```html
<h1>Amerika Seçim Sonuçları</h1>
<p>Obama (%56)</p>
<img src="yuzde_cubugu.gif" width="104" height="14" alt="%56" class="yuzde1" style="background-position: -42px 0;" />
<p>McCain (%44)</p>
<img src="yuzde_cubugu.gif" width="104" height="14" alt="%44" class="yuzde2" style="background-position: -54px 0;" />
```

Yüzde çubuğunun genişliğini 100px yaptım ki, ayarlaması kolay olsun.
Resim genişliğinin 104px görünmesinin nedeni 2px sağdan ve 2px soldan
kenar çizgilerinin olması.

**Obama %56** yapmak için ardalan konumunu 100-56= 44 resmin solundaki
2px mesafeyide çıkarınca hesabımız tam olacaktır. Yani ardalan konumu
100 - 56 - 2 = -42px şeklinde hesaplanacak.

Aynı şekilde **McCain**'in yüzdesini de hesaplarsak. 100 - 44 - = -54px

CSS kodumuz;

```css
h1 {
  font:18px Arial, Helvetica, sans-serif;
  color:#666;
}

p {
  font:bold 12px Arial, Helvetica, sans-serif;
  margin-bottom:5px;
  color:#666;
}

img.yuzde1 {
  background:url(gosteri1.gif) 0 0 no-repeat;
  padding: 0;
  margin: 0;
}

img.yuzde2 {
  background:url(gosteri2.gif) 0 0 no-repeat;
  padding: 0;
  margin: 0;
}
```

![anket sonuç ekranı][]

Örnek kod FF3, IE6 - 7, Safari 3, Opera 9.6 ve Google Chrome 0.3Beta
test edilmiştir.

Örnek kodu görmek için [tıklayınız.][]

## Kaynaklar

-   http://cssglobe.com/post/1468/pure-css-animated-progress-bar
-   [http://pootato.org/tutorials/css/css-progress-bar/][]
-   http://www.barenakedapp.com/the-design/displaying-percentages
-   [http://www.webappers.com/2007/07/31/webappers-simple-ajax-progress-bar-with-css/][]
-   http://mattberseth.com/blog/2008/07/jqueryui_progressbar_widget.html
-   [http://www.dmry.net/css-ile-basit-bir-ilerleme-durum-cubugu-yapimi][]

  [%45]: /images/yuzde_cubugu.png
  [http://www.webappers.com/progressBar/]: http://www.webappers.com/progressBar/
    "yüzde çubuğu demo"
  [yüzde çubugu]: /images/yuzde_cubugu.gif
  [100]: /images/gosteri1.gif
  [1]: /images/gosteri2.gif
  [%56]: yuzde_cubugu.gif
  [anket sonuç ekranı]: /images/anket_sonuc_ekrani.gif
  [tıklayınız.]: /dokumanlar/yuzde_cubugu.html
  [http://pootato.org/tutorials/css/css-progress-bar/]: http://pootato.org/tutorials/css/css-progress-bar/
  [http://www.webappers.com/2007/07/31/webappers-simple-ajax-progress-bar-with-css/]: http://www.webappers.com/2007/07/31/webappers-simple-ajax-progress-bar-with-css/
  [http://www.dmry.net/css-ile-basit-bir-ilerleme-durum-cubugu-yapimi]: http://www.dmry.net/css-ile-basit-bir-ilerleme-durum-cubugu-yapimi
