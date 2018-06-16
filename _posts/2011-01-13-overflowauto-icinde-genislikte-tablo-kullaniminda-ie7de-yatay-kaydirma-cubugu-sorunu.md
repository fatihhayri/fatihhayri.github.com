---
layout: post
title: overflow:auto içinde %100 genişlikte tablo kullanımında ie7’de yatay kaydırma çubuğu sorunu
Slug: overflowauto-icinde-genislikte-tablo-kullaniminda-ie7de-yatay-kaydirma-cubugu-sorunu
Date: 2011-01-13 23:47
Category: CSS, XHTML
tags: [ie6, ie7, kaydırma çubuğu sorunu, overflow, auto]
---

Başlığı açıklayıcı yazayım diye uzattım, yinede tam açıklamıyor sorunu.
Tam metin şöyle olmalı “overflow:auto atanan eleman içinde %100
genişlikli tablo kullanımı ve bu tablonun ie7’de meydana getirdiği
fazladan yatay kaydırma çubuğu sorunu ” Bu tanımı daha iyi yaparım
deyipte başlık öneren varsa başlığı değiştirebilirim.

Hayatımız İnternet Explorer ile uğraşmak ile geçiyor. Allah bizi gerçek
hayatımızda para sıkıntısı ile, aile sorunları vb.sorunlar ile sınarken;
sanal alemde de İnternet Explorer ile sınıyor galiba:D Ne yapalım başa
gelen çekilir diyeceğiz ve çözüm arayıp düzeltmeye çalışacağız.

Bir örnek yapalım.

HTML Kodu(Tabloya verilen border ve bordercolor tanımları örneğe
görsellik kazandırmak için eklenmiştir, sorun ile alakalı kodlar
değildir.)

{% highlight html %}
<div id="kapsul">
  <table width="100%" cellspacing="0" cellpadding="0" border="1" bordercolor="#0000FF">
  <tr>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </td>
    <td>Mauris facilisis elementum ipsum nec semper. </td>
    <td>Vestibulum nec turpis at lectus pulvinar consequat nec in lectus. </td>
  </tr>
  <tr>
    <td>Aliquam sit amet est ac est eleifend. </td>
    <td>Vivamus imperdiet.</td>
    <td>Pellentesque sagittis ultrices laoreet.</td>
  </tr>
  <tr>
    <td>In hac habitasse platea dictumst.</td>
    <td>Sed sed leo elit, eu ultricies metus.  </td>
    <td>Aenean massa nulla.</td>
  </tr>
  <tr>
    <td>In hac habitasse platea dictumst.</td>
    <td>Sed sed leo elit, eu ultricies metus.  </td>
    <td>Aenean massa nulla.</td>
  </tr>
  </table>
</div>
{% endhighlight %}

CSS Kodu

{% highlight css %}
#kapsul{
	width:40%;
	height:150px;
	overflow:auto
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][100]

Üstte ie7 altta Firefox görüntüsünü görüyoruz.

Bu sorun ile belli bir yükseklikteki içeriği overflow:auto ile otomatik
kaydırma çubuğu çıkarmak için oluşturduğumuz bir alan içinde eğer yüzde
yüz genişlikte bir tablo var ise karşılaşıyoruz. Kaydırma çubuğu yok
iken sorun yok, ancak içerik uzayınca normalde sadece dikeyde çıkması
gereken kaydırma çubuğu yatayda da çıkıyor.

## Çözüm;

Çözüm için kapsayıcı katman içine bir katman daha açıyoruz ve hem dışta
overflow:auto verdiğimiz katmana, hemde yeni oluşturduğumuz katmana
zoom:1 özelliği atıyoruz.

{% highlight html %}
<div id="kapsul">
  <div id="kapsulIci">
    <table width="100%" cellspacing="0" cellpadding="0" border="1" bordercolor="#0000FF">
    <tr>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </td>
    <td>Mauris facilisis elementum ipsum nec semper. </td>
    <td>Vestibulum nec turpis at lectus pulvinar consequat nec in lectus. </td>
    </tr>
    <tr>
    <td>Aliquam sit amet est ac est eleifend. </td>
    <td>Vivamus imperdiet.</td>
    <td>Pellentesque sagittis ultrices laoreet.</td>
    </tr>
    <tr>
    <td>In hac habitasse platea dictumst.</td>
    <td>Sed sed leo elit, eu ultricies metus.  </td>
    <td>Aenean massa nulla.</td>
    </tr>
    <tr>
    <td>In hac habitasse platea dictumst.</td>
    <td>Sed sed leo elit, eu ultricies metus.  </td>
    <td>Aenean massa nulla.</td>
    </tr>
    </table>
  </div>
</div>
{% endhighlight %}

CSS kodu

{% highlight css %}
#kapsul{
	width:40%;
	height:150px;
	zoom:1;
	overflow:auto;
}

#kapsulIci{
	zoom:1;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

Ayrıca yukarıdaki çözüm ie6 bazen sorun çıkarıyor, bu gibi durumlarda

{% highlight html %}
<!--[if lt IE 7]><style> #kapsulIci { overflow: auto; }</style><![endif]-->
{% endhighlight %}

Eklememiz gerekiyor.

Hayatımızda(gerek gerçek, gerek sanal) sorunlar olacaktır. Sorunlardan
kaçmamalıyız, üzerine gidip çözüm aramalıyız. Bir arayüz geliştiricinin
kemale ermesi(Senior Front-End Developer) için sorunları ile baş etmesi
şart. Çok mu hayat dersi verdim. Başınızı ağrıttı isem af ola.

Kalın sağlıcakla.

## Kaynaklar

-   [http://stackoverflow.com/questions/139000/div-with-overflowauto-and-a-100-wide-table-problem][]
-   [http://bytes.com/topic/html-css/answers/100751-overflow-auto-problem-ie][]
-   [http://www.sitepoint.com/forums/showthread.php?t=661150][]
-   [http://forums.mozillazine.org/viewtopic.php?t=538190][]

  [tıklayınız.]: /dokumanlar/ie7_yatay_scroll_sorunu_.html
  [100]: https://lh6.googleusercontent.com/-GwzjXCJuKx4ySpkBUYTvTUxa8Z1OeTBgQTM7louaZaXwMc24ETkXTy-ULml0IK3Ed1m050j2ahhFpJKPc70akaQaei1mVvNPW61ji4vywk5HI395Q
  [1]: /dokumanlar/ie7_yatay_scroll_sorunu_cozum.html
  [http://stackoverflow.com/questions/139000/div-with-overflowauto-and-a-100-wide-table-problem]: http://stackoverflow.com/questions/139000/div-with-overflowauto-and-a-100-wide-table-problem
  [http://bytes.com/topic/html-css/answers/100751-overflow-auto-problem-ie]: http://bytes.com/topic/html-css/answers/100751-overflow-auto-problem-ie
  [http://www.sitepoint.com/forums/showthread.php?t=661150]: http://www.sitepoint.com/forums/showthread.php?t=661150
  [http://forums.mozillazine.org/viewtopic.php?t=538190]: http://forums.mozillazine.org/viewtopic.php?t=538190
