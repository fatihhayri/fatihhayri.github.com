---
layout: post
title: CSS 3 medya sorguları
Date: 2011-09-02 14:07
Category: CSS
tags: css3, genişlik, ipad, iPhone, medya sorguları, mobil araçlar
---

Mobil sektörün hızla ilerlemesi ve akıllı araçlar pazarının büyümesi ile
insanlar mobil araçlar için ayrı web siteleri yapmaya başladı ve bu
şekilde devam ediyor. Web sitesi olan bir şirketin mobil için ayrı bir
site yapması gerek iş ve gerekse düzenleme açısından sorunları olan bir
sistem.  Medya sorguları bu anlamda bir ihtiyaç için ortaya çıkmış bir
özelliktir.

Herkesin istediği bir özellik olarak her çözünürlükte ve araçta uygun
web siteleri üretmektir. Bunun için medya sorguları bize yardım sağlar.

Daha önce medya sorgularını [yazıcıdan çıktı alırken][] web
sitelerimizin çıktı almaya müsait hale getirmek için kullanmıştık. CSS3
ile birlikte medya sorgularında kullanabileceğimiz medya özellikleri
eklendi.

Yeni nesil medya sorgularını Firefox, Webkit, Opera ve İnternet
Explorer9’dan itibaren desteklemektedir. İnternet Explorer’un eski
sürümler için javascript ile çözüm üretilir.

[Daha önceki makalemde][] bahsettiğim gibi medya sorgularının en basit
hali

{% highlight css %}
<link rel="stylesheet" media="screen" href="ornek.css">
{% endhighlight %}

veya

{% highlight css %}
@media ornek.css screen;
{% endhighlight %}

şeklindedir.

Medya sorguları bir veya daha fazla tipe göre sorgulama yapar ve
sorgunun doğruluğuna göre o css dosyasını uygular.

![][100]

## Medya Tipleri

<table>
<colgroup> <col width="132"> <col width="492"> </colgroup>
<tbody>
<tr>
<td>screen </td>
<td>Bilgisayarda görüntüleme </td>
</tr>
<tr>
<td>tty </td>
<td>Bilgisayar terminalleri ve eski taşınabilir araçlar ile görüntüleme </td>
</tr>
<tr>
<td>tv </td>
<td>Televizyonda görüntüleme</td>
</tr>
<tr>
<td>projection </td>
<td>Projeksiyonda görüntüleme </td>
</tr>
<tr>
<td>handheld </td>
<td>Taşınabilir telefonlar ve PDA’ler </td>
</tr>
<tr>
<td>print </td>
<td>Yazıcı çıktılarında görüntüleme </td>
</tr>
<tr>
<td>braille</td>
<td>Braille dokunsal okuyucularda</td>
</tr>
<tr>
<td>all</td>
<td>Tüm araçlarda görüntüleme</td>
</tr>
<tr>
<td>embossed</td>
<td>Braille yazıcı çıktıları için</td>
</tr>
<tr>
	<td>aural</td>
	<td>Ses sentez birimlerinde kullanılır</td>
</tr>
</tbody>
</table>

## Mantıksal Operatörler

Medya sorgularımızda not, and ve only mantıksal operatörlerini
kullanabiliriz.

**and**
İki veya daha fazla medya özelliğini birbirine bağlar. Sorgudaki tüm
medya özelliklerinin doğru olması durumunda css dokümanın uygulanmasını
sağlar. Örneğin (color) and (orientation: landscape) and
(min-device-width: 800px) tanımı; Görüntüleyen aracın renkli, yatayda ve
en az 800px genişliğinde ise css dokümanı uygulanır.

{% highlight css %}
@media (min-width:450px) and (max-width:950px)
{% endhighlight %}

Bu durumda ise; genişliği en az 450px ve en fazla 950px olan araçlarda
uygulanır.

**not**
Sorguya negatif ifade katar. Sonuç eğer doğru ise css dosyası
uygulanmaz.

{% highlight css %}
@media not screen and (color)
{% endhighlight %}

Bilgisayar ve renkli ekran olmayan durumlarda uygulanır.

**only**
Sadece bu şartlar geçerli olduğunda uygula anlamınadır.

{% highlight css %}
@media only screen and  (color) {
	body {
		background:blue
	}
}
{% endhighlight %}


Sadece bilgisayar ve renkli ekranlar olduğunda css dokümanı uygulanır.

Yukarıdaki operatörlerde dikkat etti iseniz şöyle bir kural var. İlk
parametre medya tipini gösteriyor sonra operatör ve ikinci parametre
medya özelliği tanımlanıyor. Medya özellikleri parantez içinde
tanımlanıyor.

{% highlight css %}
@media screen and (ozellik:deger) {

}
{% endhighlight %}

**Birden fazla sorgu**

Birden fazla medya tipi için virgül ile birden fazla sorgu
yapabiliyoruz.

{% highlight css %}
@import url(print-color.css) print and (color),
projection and (color);
{% endhighlight %}

Sorgulardan biri geçerli ise print-color.css dokümanı uygulanır. Renkli
yazıcı veya renkli projektörden birisi ile açılırsa print-color.css
uygulanır.

## Medya Özellikleri

Medya özellikleri web sitesini gösteren aracın bilgileri ile sorgu
yapmamızı sağlayan özelliklerdir; boyutları, araç boyutları, çözünürlüğü
ve daha fazlası. Bu özellikler sorgu ifadesi olarak kullanılır, eğer bu
sorgu doğru ise, yani araç bu özelliğe sahip ise css dosyası gösterilir,
değilse gösterilmez. Örneğin 480px genişlikteki ekranlar için bir tanım
yapmış olalım, sonuçta 480px genişliğe sahip araçlarda
görüntülenecektir.

Yukarıdaki örneklerde görüldüğü gibi medya sorgularında medya
özellikleri parantez için tanımlanmaktadır. Genel kullanım;

{% highlight css %}
@media media and (ozellik:deger) {

}
{% endhighlight %}

Genelde kullanılan medya özelliklerini inceleyelim.

**width, height, max-width, min-width, max-height ve min-height**

Genişlik(width) değeri web sitesinin görüntüleyen aracın genişliğine
göre tanım yapmamızı sağlar. Buradaki genişlik tarayıcının(kaydırma
çubukları dahil) genişliğine eşittir.

{% highlight css %}
@media screen and (width:480px) {

}
{% endhighlight %}

Yukarıdaki tanım 480px genişlikte görüntülemede uygulanacaktır.

Genişlik tanımının ayrıca iki adet önekli kullanımlarıda mevcuttur. max-
ve min- ön ekleri ile sabit bir değeri değilde belli bir değer aralığını
kontrol edebilme imkanına sahibiz.

{% highlight css %}
@media screen and (max-width:480px) {

}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/77SMV/embedded/css,result"></iframe>

ve

{% highlight css %}
@media screen and (min-width:680px) {

}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/bhLFF/embedded/css,result"></iframe>

İlk örnekte genişliği en fazla 480px olana kadar uygulanır, ikinci
örnekte ise genişliği en az 680px olan tarayıcı genişliklerinde
uygulanır. Bilgisayarımızda tarayıcı genişliği ile oynayarak bu
örnekleri test edebiliriz.

Yükseklik değerleride(max-height ve min-height) benzer şekilde çalışır.

**device-width, max-device-width, min-device-width, device-height,
max-device-height ve min-device-height**

Aygıt genişliği yukarıdaki genişlik gibi çalışır, ancak farklı olarak bu
genişlik aygıtın genişliğini tanımlar. Genişlik değerinde olduğu gibi
aygıt genişliği tanımlarındada max- ve min- ön ekleri vardır. Kullanımı
benzerdir

{% highlight css %}
@media media and (device-width:1024px) {

}

@media media and (max-device-width:320px) {

}

@media media and (min-device-width:800px) {

}
{% endhighlight %}

Mobil araçlar için web sitesi geliştirirken bize çok yardımı dokunur bu
özelliğin mesela iPhone için web sitemizi uyarlamak istediğimizde
işimize yarar.

{% highlight css %}
/* iphone */
@media screen and (max-device-width: 480px) {
	body{
		background: #f00;
	}
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/Z8BnJ/embedded/css,result"></iframe>

şeklinde iphone kullanıcılarını yakalayabiliriz. Bilgisayarımızda
tarayıcı genişliği ile bu sonuca erişemeyiz. Örneği görmek için iphone
simülatör veya gerçek iphone’da bu örneği test etmelisiniz.

Benzer şekilde device-height, max-device-height ve min-device-height
özellikleride kullanılabilir.

**orientation**

Uyarlayacağımız aracın yatay veya dikey olması durumuna göre davranış
sergileme imkanı veren medya özelliğidir.

Tablet bilgisayarlar için genelde tercih edilir. iPad için site
geliştirirken dikkate almalıyız.

{% highlight css %}
@media screen and (orientation: portrait) {

}
{% endhighlight %}

İki değer almaktadır; landscape veya portrait. landscape değeri
tarayıcınızın genişliği yüksekliğinden büyük ise uygulanır, portrait
değeride tam tersi durumlarda.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/QEwTP/embedded/css,result"></iframe>

Tarayıcınızın genişliği ile oynayarak sonucu görebilirsiniz. iPad’de
daha çok yatay kullanımda daha geniş yer varken site tam gösterilirken
dikey kullanımda gizlenmesi gibi durumlarda kullanılabilir. Hatta menü
yatayda açık dikeyde bir butona tıklayınca açılır şekilde kodlanabilir.

**aspect-ratio, min-aspect-ratio, max-aspect-ratio, device-aspect-ratio,
min-device-aspect-ratio ve max-device-aspect-ratio**

Belirli bir genişlik yükseklik oranı ile sorgu oluşturmamızı sağlar.
Boyut tanımlarında olduğu gibi tarayıcı oranı ve araç oranı diye farklı
kullanımları vardır. Benzer şekilde max- ve min- önekleri ile
kullanımıda mevcuttur.

16:9 sinematik ekran oranı için bir sorgu oluşturulabilir. Üreticileri
ürettiği farklı oranlar(16:10, 15:10 vb.) için sorgular oluşturulup bu
araçlar için web sitesi yapmak daha kolay hale getirilebilir.

{% highlight css %}
@media tv and (aspect-ratio:16/9) {

}

@media tv and (device-aspect-ratio:16/9) {

}
{% endhighlight %}

**pixel-ratio**

Piksel oranı üzerinden sorgular üretmemizi sağlayan medya özelliğidir.
Masaüstü tarayıcılarda pek kullanılmasa da mobil araçlarda sıkça
kullanılan büyütme işleminde resimlerde sorunlara neden olmaktadır. Bu
sorunu çözmek için resimlerimizin iki farklı halini oluşturup
yakınlaştırma yapıldığında daha yüksek piksel oranlarına sahip araçlarda
daha büyüğünü göstererek resmin bozulma sorununu ortadan kaldırabiliriz.

Farklı tarayıcılarda farklı önek ile uygulanmaktadır. webkit için
-webkit-device-pixel, max-webkit-device-pixel, min-webkit-device-pixel

Firefox için -moz-device-pixel-ratio, min--moz-device-pixel-ratio,
max--moz-device-pixel-ratio şeklinde uygulanır.

{% highlight css %}
div {
	background-image: url('image-dusuk.png');
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
	background-image: url('image-yuksek.png');
	background-size: 100% 100%;
}
{% endhighlight %}

Şeklinde uygulanır. iPhone4 ile ön plana çıkan bu özellik yardımı ile
iPhone4 ayrımıda yapılabilir.

{% highlight css %}
/* iphone 4 */
@media only screen and (-webkit-min-device-pixel-ratio: 2) {
	background-image:url(yuksek_cozunurluklu_resim.png);
}
{% endhighlight %}

Bu medya özelliklerinin dışında color, min-color, max-color,
color-index, min-color-index, max-color-index, monochrome,
min-monochrome, max-monochrome, resolution, min-resolution,
max-resolution, scan, grid medya özellikleride vardır. Ayrıca Firefox
mobile için tanımladığı kendine ait medya özellikleride bulunmaktadır.
Bu medya özellikleri hakkındaki detaylı bilgiye
[https://developer.mozilla.org/en/CSS/media_queries][] sitesinden
erişebilirsiniz.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**5.0+**|**9.0+**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

Bu tabloya bakarak ie’nin önceki sürümleri için çözüm üretmeliyiz.
Javascript yardımı ile yapılmış çeşitli yöntemler mevcut, ben jquery ile
yapılan yöntemi çalıştırabildim açıkçası.

[http://protofunc.com/scripts/jquery/mediaqueries/][]

Bu sitedeki scripti sitenize eklediğinizde ie’nin eski sürümleri ile
olan sorununuz çözlüyor.

{% highlight css %}
	<link rel="stylesheet" type="text/css" href="ana.css" media="only screen and (max-width: 480px)" />
	<!--[if lt IE 9]> <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
	<script src="jquery.mediaqueries.js" type="text/javascript"></script> <![endif]-->
{% endhighlight %}

IE9 öncesi tarayıcılar için böyle bir ekleme yaparak sorunu çözebiliriz.

Ayrıca sadece javascript ile ie’nin eski sürümleri için üretilen
Javascript çözümlerini uyguladığımda çalışmadı bilemiyorum sorun bende
mi ama olmadı.

## Kaynaklar

-   [http://www.w3.org/TR/css3-mediaqueries/][]
-   [http://www.css3.info/modules/compatibility-table-media-queries/][]
-   [http://webdesignerwall.com/general/the-wall-is-redesigned][] (örnek uygulama)
-   [http://www.broken-links.com/2011/02/21/using-media-queries-in-the-real-world/][] (ie için çözüm önerili)
-   [http://mediaqueri.es/][] (örnekler içeriyor)
-   [http://www.catswhocode.com/blog/create-an-adaptable-website-layout-with-css3-media-queries][]
-   [http://webdesignerwall.com/tutorials/adaptive-mobile-design-with-css3-media-queries][]
-   [http://webdesignerwall.com/tutorials/css3-media-queries][]
-   [https://developer.mozilla.org/en/CSS/media_queries][]
-   [http://coding.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/][]
-   [http://ie.microsoft.com/testdrive/HTML5/CSS3MediaQueries/Default.html][]
-   [http://www.catswhocode.com/blog/create-an-adaptable-website-layout-with-css3-media-queries][]
-   [http://www.alistapart.com/articles/responsive-web-design/][]
-   [http://reference.sitepoint.com/css/mediaqueries][]
-   [http://www.webdesignlondon-tristar.co.uk/website-design-london/css3-media-queries-responsive-web-design][]
-   [http://www.maxdesign.com.au/articles/css3-media-queries/][] (slayt gösterisi)
-   [http://msdn.microsoft.com/en-us/scriptjunkie/gg619395.aspx][]
-   [http://coding.smashingmagazine.com/2011/08/10/techniques-for-gracefully-degrading-media-queries/][]
-   [http://code.google.com/p/css3-mediaqueries-js/][] (ie eski sürümleri için js kodu)
-   [http://blog.iwalt.com/2010/06/targeting-the-iphone-4-retina-display-with-css3-media-queries.html][] (iphone 4 için )
-   [http://aralbalkan.com/3331][] (iphone 4 için)
-   [http://css-tricks.com/6731-css-media-queries/][]
-   [http://colly.com/][] (örnek site)
-   [http://www.opera.com/docs/specs/presto27/css/mediaqueries/][] (Opera desteği)
-   [http://www.cloudfour.com/ipad-css/][]
-   [http://www.webkit.org/blog/55/high-dpi-web-sites/][]
-   [No Starch The Book of CSS3][]
-   [http://richardshepherd.com/css-media-queries-jquery/][]
-   [http://css.dzone.com/news/bulletproof-css3-media-queries][]
-   [http://tests.zerointerface.nl/css3-mediaqueries/][] (test sitesi)
-   [http://coding.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/][]
-   [http://www.quirksmode.org/blog/archives/2010/08/combining_media.html][]
-   [http://blogs.msdn.com/b/ie/archive/2011/01/12/the-css-corner-css3-media-queries.aspx][]

  [yazıcıdan çıktı alırken]: http://www.fatihhayrioglu.com/cssde-cikti-alma-print/
  [Daha önceki makalemde]: http://www.fatihhayrioglu.com/cssi-web-sayfalarina-eklemek/
  [100]: https://lh5.googleusercontent.com/9yAALxAE9OnXDazyBZKrx8y8o4r5okr3Qw8TJ6av63m5eB_I6Ap-nCYuglYAcrwBuqpgrCx5vaBTcMLjBiPZM-KdAohf98yMjgErENZ_3A75y8x8
  [https://developer.mozilla.org/en/CSS/media_queries]: https://developer.mozilla.org/en/CSS/media_queries
  [http://protofunc.com/scripts/jquery/mediaqueries/]: http://protofunc.com/scripts/jquery/mediaqueries/
  [http://www.w3.org/TR/css3-mediaqueries/]: http://www.w3.org/TR/css3-mediaqueries/
  [http://www.css3.info/modules/compatibility-table-media-queries/]: http://www.css3.info/modules/compatibility-table-media-queries/
  [http://webdesignerwall.com/general/the-wall-is-redesigned]: http://webdesignerwall.com/general/the-wall-is-redesigned
  [http://www.broken-links.com/2011/02/21/using-media-queries-in-the-real-world/]: http://www.broken-links.com/2011/02/21/using-media-queries-in-the-real-world/
  [http://mediaqueri.es/]: http://mediaqueri.es/
  [http://www.catswhocode.com/blog/create-an-adaptable-website-layout-with-css3-media-queries]: http://www.catswhocode.com/blog/create-an-adaptable-website-layout-with-css3-media-queries
  [http://webdesignerwall.com/tutorials/adaptive-mobile-design-with-css3-media-queries]: http://webdesignerwall.com/tutorials/adaptive-mobile-design-with-css3-media-queries
  [http://webdesignerwall.com/tutorials/css3-media-queries]: http://webdesignerwall.com/tutorials/css3-media-queries
  [http://coding.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/]: http://coding.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/
  [http://ie.microsoft.com/testdrive/HTML5/CSS3MediaQueries/Default.html]: http://ie.microsoft.com/testdrive/HTML5/CSS3MediaQueries/Default.html
  [http://www.alistapart.com/articles/responsive-web-design/]: http://www.alistapart.com/articles/responsive-web-design/
  [http://reference.sitepoint.com/css/mediaqueries]: http://reference.sitepoint.com/css/mediaqueries
  [http://www.webdesignlondon-tristar.co.uk/website-design-london/css3-media-queries-responsive-web-design]: http://www.webdesignlondon-tristar.co.uk/website-design-london/css3-media-queries-responsive-web-design
  [http://www.maxdesign.com.au/articles/css3-media-queries/]: http://www.maxdesign.com.au/articles/css3-media-queries/
  [http://msdn.microsoft.com/en-us/scriptjunkie/gg619395.aspx]: http://msdn.microsoft.com/en-us/scriptjunkie/gg619395.aspx
  [http://coding.smashingmagazine.com/2011/08/10/techniques-for-gracefully-degrading-media-queries/]: http://coding.smashingmagazine.com/2011/08/10/techniques-for-gracefully-degrading-media-queries/
  [http://code.google.com/p/css3-mediaqueries-js/]: http://code.google.com/p/css3-mediaqueries-js/
  [http://blog.iwalt.com/2010/06/targeting-the-iphone-4-retina-display-with-css3-media-queries.html]: http://blog.iwalt.com/2010/06/targeting-the-iphone-4-retina-display-with-css3-media-queries.html
  [http://aralbalkan.com/3331]: http://aralbalkan.com/3331
  [http://css-tricks.com/6731-css-media-queries/]: http://css-tricks.com/6731-css-media-queries/
  [http://colly.com/]: http://colly.com/
  [http://www.opera.com/docs/specs/presto27/css/mediaqueries/]: http://www.opera.com/docs/specs/presto27/css/mediaqueries/
  [http://www.cloudfour.com/ipad-css/]: http://www.cloudfour.com/ipad-css/
  [http://www.webkit.org/blog/55/high-dpi-web-sites/]: http://www.webkit.org/blog/55/high-dpi-web-sites/
  [No Starch The Book of CSS3]: http://nostarch.com/css3.htm
  [http://richardshepherd.com/css-media-queries-jquery/]: http://richardshepherd.com/css-media-queries-jquery/
  [http://css.dzone.com/news/bulletproof-css3-media-queries]: http://css.dzone.com/news/bulletproof-css3-media-queries
  [http://tests.zerointerface.nl/css3-mediaqueries/]: http://tests.zerointerface.nl/css3-mediaqueries/
  [http://www.quirksmode.org/blog/archives/2010/08/combining_media.html]: http://www.quirksmode.org/blog/archives/2010/08/combining_media.html
  [http://blogs.msdn.com/b/ie/archive/2011/01/12/the-css-corner-css3-media-queries.aspx]: http://blogs.msdn.com/b/ie/archive/2011/01/12/the-css-corner-css3-media-queries.aspx

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png