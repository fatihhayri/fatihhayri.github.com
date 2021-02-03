---
layout: post
title: Float Uygulanmış Elementleri Tam Kapsayamama Sorunu
Date: 2007-08-20 09:47
Category: CSS, Web Standartları, XHTML
tags: [after, clear, clearfix, CSS, float, kapsayamama-sorunu, Web Standartları, XHTML]
---

Float CSS ile web sayfası kodlamak için en çok kullandığımız özelliktir.
Beni bu makaleyi yazmaya iten en önemli etkende float'ın çok fazla
kullanılması ve bu sorunla birçok kez karşılaşmamdır.

Sorun; float uygulanmış bir elementi içeren kapsayıcı element içeriğine
göre genişlememesidir. Bu sorun zemin rengi/resmi uygulanmış veya
kenarlık atanmış kapsayıcılarda daha iyi görünür. Sorun şekil.1'de
gösterildiği şekilde kapsayıcı elementin float uygulanmış elementi
kapsamamasıdır.

Bu bir hata değildir. Ama sayfalarımızı kodlarken genelde bu durumun
meydana gelmesinden hoşlanmayız.

![float sorunu][]
**şekil.1** float sorun

Bir örnek yaparsak daha iyi anlayacağız.

CSS kodu:

{% highlight css %}
.kapsul {
	border: 1px solid #000;
	padding: 2px;
}

img {
	float: left;
}
{% endhighlight %}

Html kodu:

{% highlight html %}
<div class="kapsul">
	<img src="koy_01.jpg" alt="Bizim köy" weight="250" height="160" />
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
</div>
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

Floatuygulanan resim div(.kapsul) içindeki resme göre genişlemez. Duruma
tersten bakarsakbazen bu görünümü kullanabileceğimiz durumlarda
olabilir, yani bu durumu bazı durumlarda kullanabiliriz. Bu durum bir
hata değildir. CSS'in birhatası hiç değildir. Biz genelde float
uyguladığımız kutuların içeriklerine göre genişlemesini isteriz.

Float özelliğiNetscape1.1 ile gelen bir özelliktir.Eğer kutularımıza
kenarlık ataması yaparsak bu sorunu daha iyi görürüz.Biz kutunun içeriğe
göre uzamasını yani sonunun temizlenmesini isteriz. **.kapsul**
uygulanan div elementin tüm içeriği kapsaması için sonuna **clear**
özelliği atanmış bir nesne koymalıyız. Bu işlemi farklı yöntemlerle
yapabiliriz.

## Boş bir elemente clear atayarak çözmek

Geneldekutuların içeriğine göre uzamasını isteriz. Bu sorunu çözmek
küçük bir yapısalekleme yapmak yeterli olacaktır.

{% highlight html %}
<div class="kapsul">
	<img src="resim.png">
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
	<div style="clear:both;"></div>
</div>
{% endhighlight %}

Buşekilde sorunumuzu çözmüş oluruz ancak bu sorunla
karşılaştığımız heryerde bu eklemeyi yapmak zorun kalacağız ve sırf bu
düzeltme için boşbir div ekleyeceğiz. Buda mantıklı(semantik) kodlama
açısından uygun değildir. Pekibunu başka nasıl çözeriz.

## :after ile çözüm

CSS2ile birlikte gelen **:after** özelliğini kullanarak çözebiliriz.
Css(:after) kodu ile bir elementinsonuna bir içerik ekleyebiliyoruz ve
bu elemente css komutları atayabiliyoruz.Ayrıntılı bilgi için
[tıklayınız][].Bu özellikten yararlanarak kutunun sonuna bir nokta koyup
bu noktaya**clear**(clear:both) ataması yaparsak sorunumuz çözülmüş
olacaktır. Tabi birde bunoktayı görünmez yapmamız gerekiyor, Kutuların
sonunda nokta görünmesipek hoş olmaya bilir.

{% highlight css %}
.kapsul:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
{% endhighlight %}

Ayrıca**display:block** koyduk çünkü satır için(inline-level) elementler
clear özelliğiatamasını kabul etmiyor. Aslında **overflow** ile de bu
sorun halledilebilir ancakMozilla Firefox'un yeni sürümlerinde bu metot
sorun çıkarıyor.

{% highlight css %}
.kapsul:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
/*IE-mac den bu bolumu sakla */
* html .clearfix {height: 1%;}
/* IE-mac bu bolumu saklama artik */
{% endhighlight %}

Tabibu kod burada kalmıyor çünkü IE ile sorunları var. Normalde IE'nin
float uygulanmış elementin tamamı kapsamama sorunu diye bir problemi(bu
ilginç bir durumdur) yoktur, ancak float uygulanmış elemente genişlik ve
yükseklik tanımı yapılmadığında sorun ortaya çıkıyor. Bunu engellemek
için sadece IE/Win gördüğü kapsayıcı elementin yüksekliğine %1 ataması
yaparız. Ancak bu kısımı IE/Mac'lerden saklamamız gerek bunun için ters
bölme() işaretini kullanırız böylelikle IE/Mac sürümü komut satırının
devam ettiğini farz ederek bu satırı görmez.

Sıra geldi IE/Mac'de sorunu aşmaya, IE/Mac'deki sorunu aşmak için
**display: inline-block;** tanımlamasını yapıyoruz. Tabi diğer web
tarayıcılarının bundan etkilenmemesi için IE/Mac'den gizlediğimiz alana
**display: block;** atamasını eklemeliyiz.

{% highlight css %}
.kapsul:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}

.kapsul {
	display: inline-block;
}
/*IE-mac de bu bolumu sakla  */
* html .kapsul {height: 1%;}
.kapsul {display: block;}
/* IE-mac bu bolumu saklam artik */
{% endhighlight %}

Örneğin son halini görmek için [tıklayınız.][1]

![float çözümü][]

**şekil2** float sorununun çözülmüş hali

Bu metot bu sorunun çözümü için en ideal çözümdür. Bu sorunun çözümünde
birçok insanın emeği geçmiştir. [Doug][], [Mark Hadley][], Matt Keogh, Holly’n John] ve Tony Asslet'a bundan dolayı
şükranlarımızı sunarız. thank you guys :D Ayrıca bu konuda Türkçe bir
makale yazan [dahaiyi.net][]'e çok teşekkürler.

Bu yöntemi biraz daha kolaylaştıralım. Sonuçta macde ie kullanan
kalmadağına göre kodumuzu

{% highlight css %}
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}

* html .clearfix {
	zoom: 1;
}
/* IE6 */
*:first-child+html .clearfix { zoom: 1; }
/* IE7 */
{% endhighlight %}

## CSS3 ile sorunun çözümü

Bu sorunun farkında olan CSS standart geliştiriciler bu soruna kökten
çözüm getirmişler. [clear-after][] yeni özelliği sayesinde bu kodlardan
kurtulacağız tabi biraz zaman gerekecek bu özelliği kullanmak için.
Malum hala uygulamada değil CSS3.0

{% highlight html %}
.kapsul { clear-after: both; }
{% endhighlight %}

Yukarıdaki örnekteki gibi tek satırlık bir kod sorunumuzu çözecektir.

## Sonuç

Sonuç olarak şunu söyleyebiliriz ki bu sorunu çözmek için bir kaç çözüm
yolu mevcut olsada şu an için **:after ile çözüm** başlığı altındaki
kodu kullanmak bizim için uygundur. Ben web sitelerini kodlarken bu
sorunla çok karşılaştığım için bir yere not ettim(Macromedia Dreamweaver
- Snippets) ve lazım olduğu zaman hemen ekliyorum. Bu şekilde sorun
hızlı bir şekilde çözmek mümkün oluyor.

## Kaynaklar

 - positioniseverything.net/easyclearing.html
 - [http://www.complexspiral.com/publications/containing-floats/][]
 - http://www.dahaiyi.net/yazilar/temiz-bir-clearfix-metodu
 - [http://csscreator.com/?q=attributes/containedfloat.php][]
 - css-discuss.incutio.com/?page=ClearingSpace
 - [http://www.cs.hmc.edu/~mbrubeck/clear-after/][]
 - [http://www.w3.org/TR/2002/WD-css3-box-20021024/#the-clear-after][clear-after]

  [float sorunu]: /images/clearfix_sorun.gif
  [tıklayınız.]: /dokumanlar/float_sorunu.html
  [tıklayınız]: http://fatihhayrioglu.com/?p=86
  [1]: /dokumanlar/float_cozumu.html
  [float çözümü]: /images/clearfix_cozum.gif
  [Doug]: http://dougsdvds.info/ "Doug"
  [Mark Hadley]: http://www.nolocation.com/ "Mark Hadley"
  [clear-after]: http://www.w3.org/TR/2002/WD-css3-box-20021024/#the-clear-after
  [http://www.complexspiral.com/publications/containing-floats/]: http://www.complexspiral.com/publications/containing-floats/
  [http://csscreator.com/?q=attributes/containedfloat.php]: http://csscreator.com/?q=attributes/containedfloat.php
  [http://www.cs.hmc.edu/~mbrubeck/clear-after/]: http://www.cs.hmc.edu/~mbrubeck/clear-after/
