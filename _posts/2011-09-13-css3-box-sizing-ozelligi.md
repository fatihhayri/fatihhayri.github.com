---
layout: post
title: CSS3 box-sizing Özelliği
Date: 2011-09-13 19:25
Category: CSS
tags: [-moz-box-sizing, -webkit-box-sizing, box-border, box-sizing, css3]
---

Daha önce [CSS ile Kutu modeli, sorunları ve çözümleri][] adlı makalede
de yazdığımız gibi yeni nesil tarayıcılar ve ie’nin garip(quirk)
modundaki kabul farklı idi. Bu genelde hep ie’nin bir sorunu olarak
görülse de aslında bir kabul idi ve genelden ayrıldığı için ie’nin bir
sorunu olarak tanımlanıyordu. İşin aslında her iki kabulde kendince
mantıklı idi.

![][100]

*“W3C’ye göre genişlik(ve yükseklik) değeri içerik alanı değeridir.
padding ve border değerleri buna ek olarak toplam kutu genişliğine
eklenir. Eğer toplam kutu değeri eklenecekse içerik alanı ve etrafındaki
padding ve border değerleri toplamıdır.*

*Buraya kadar çok güzel ancak tüm web tarayıcıları bu durumu aynı
şekilde yorumlamaz. IE’un IE6/strict’den önceki versiyonları yukarıda
anlattığımız standart yorumun dışına çıkar, genişlik veya yükseklik
değeri tüm kutu model element değerini ifade eder. Yani tüm padding ve
border değerlerini içerir kalan kısmıda içerik alanı değeri olarak
belirlenir.”*

W3C bu durum için bu kabulü bir özelliğe atadı ve bize seçme imkanı
tanıdı. Artık biz kutu modelinin nasıl davranacağını seçebileceğiz.


**Yapısı :** box-sizing: (değer)
**Aldığı Değerler :** content-box | border-box\\
**Başlangıç değeri:** content-box\\
**Uygulanabilen elementler:** Tüm Elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

box-sizing özelliği bize kutunun genişliğinin border ve padding
değerlerinin içerip içermemesi gerektiğini tanımlama imkanı sağlıyor.
İki adet değeri var

-   content-box: Normal kabul halidir. Genişlik veya yükseklik değeri
    içerik alanını içerir; border ve padding değerlerini içermez.
-   border-box: IE kutu kabulü diyede adlandırabileceğimiz değer.
    Genişlik veya yükseklik değeri padding ve border değerlerinide
    içerir.

CSS kodu;

{% highlight css %}
#kutu{
	display:block;
	border:10px solid #069;
	padding:20px;
	width:200px;
	height:200px;
	background:#CCC;
}
{% endhighlight %}


<iframe style="width: 100%; height: 400px" src="https://jsfiddle.net/fatihhayri/ZeMYW/1/embedded/result,css,html"></iframe>

Başlangıç değeri content-box’dır. Kutu genişliği 10px + 20px + 200 + 20
+ 10px = 260px olacaktır.

Farklı tarayıcılar önek ile destek sağlamaktadır. Firefox(-moz-),
Chrome(-webkit-) ve Safari (-webkit-) Yukarıdaki koda box-border tanımı
yapıldığında

{% highlight css %}
#kutu{
  display:block;
  border:10px solid #069;
  padding:20px; width:200px;
  height:200px;
  background:#CCC;
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
}
{% endhighlight %}

<iframe style="width: 100%; height: 400px" src="https://jsfiddle.net/fatihhayri/y6uyv/embedded/result,css,html"></iframe>

Kutunun genişlik değeri 200px olacaktır. İçerik alanı genişlik değeri
ise 140px olacaktır.

Her iki değerin kullanılabileceği yerler vardır. border-box tanımının
esnek yapılı alanlarda bize avantaj sağlayacağı kesindir.

{% highlight css %}
.kutuSol{
	float: left;
	width: 30%;
	background-color: pink;
	border:3px red dotted;
	height: 150px;
}

.kutuSag{
	float: left;
	background-color: lightgreen;
	width: 70%;
	border: 3px green dotted;
	height: 150px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 400px" src="https://jsfiddle.net/fatihhayri/jP3Dv/1/embedded/result,css,html"></iframe>

Esnek yapılı bir içerikte genişlik tanımlarımızı yüzde olarak
verdiğimizde ve de padding ve border tanımı yaptığımızda kutularımızın
genişliği toplamı %100 olmasına rağmen padding ve border değerleri
nedeni ile kapsayıcı eleman içine sığmayacaktır. Burada genişlik
değerini padding ve border değerlerini çıkarıp hesaplama imkanımızda
yoktur. En azından [calc()][] özelliği tam desteklenene kadar yoktur.

Çözüm olarak box-border tanımı ile sorunumuza çözüm üretebiliriz.

{% highlight css %}
.kutuSol{
 float: left;
 width: 30%;
 background-color: pink;
 border: 3px red dotted;
 height: 150px;
}

.kutuSag{
 float: left;
 background-color: lightgreen;
 width: 70%;
 border: 3px green dotted;
 height: 150px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 400px" src="https://jsfiddle.net/fatihhayri/z2bQA/1/embedded/result,css,html"></iframe>

Farklı araçlar ile web sayfaları gezilmeye başlayalı beri esnek yapılı
sayfalar revaçtadır. Websitelerimizi artık daha esnek planlamak zorunda
kalacağız. Bu durumda bu özellik bize çok büyük yararlar sağlayacaktır.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+**|**8.0+**|**1.0+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

Trayaıcı destek listesinde görüldüğü gibi sorun sadece ie7 sürümü ve
aşağısında yaşanmaktadır.

ie7 için [http://webfx.eae.net/dhtml/boxsizing/implementation.html][]
sitesindeki script ile çözüm üretilebilir.

Daha basit bir çözüm olarak ie7 için padding değerleri % cinsinden
verilebilir. Ayrıca html doküman garip modda kullanılır. Graip mod
çözümü pek mantıklı değilsede bazı durumlarda başvurulabilir.

Kalın sağlıcakla

## Kaynaklar

-   [http://www.456bereastreet.com/archive/201104/controlling_width_with_css3_box-sizing/][] (güzel)
-   [http://caniuse.com/css3-boxsizing][] (tarayıcı destek listesi)
-   [http://helephant.com/2008/10/20/css3-box-sizing-attribute/][]
-   [http://aninnovativeweb.tumblr.com/post/770432002/understanding-css3-box-sizing][]
-   [http://www.w3.org/TR/css3-ui/#box-sizing][]
-   [http://www.goldentwine.com/blog/css3-user-interface-box-sizing][]
-   [http://csshead.com/controlling-width-with-css3-box-sizing/][]
-   http://css-tricks.com/7323-box-sizing
-   [https://www.youtube.com/watch?v=rNqqfMJnpKY&feature=related][] (video)
-   [http://maymay.net/blog/2004/10/28/observations-on-the-css3-box-sizing-property-and-how-designers-use-style-sheets/][]
-   [http://www.w3cplus.com/content/css3-box-sizing][] (çince)

  [CSS ile Kutu modeli, sorunları ve çözümleri]: http://fatihhayrioglu.com/kutu-modeli-sorunlari-ve-cozumleri/
  [100]: https://lh5.googleusercontent.com/EkvNMZKnUkXNpL5ps_x6sCNwyAOY6KQ3TS3YsJ9_Ypbui2rEdirr1BijorcNsFE-9a9eIcUerazNoQLsvh7U8J9sGm3h3cV-DFRXqCuLae8e4ruLWfQ
  [calc()]: http://fatihhayrioglu.com/css3-calc-degeri/
  [http://webfx.eae.net/dhtml/boxsizing/implementation.html]: http://webfx.eae.net/dhtml/boxsizing/implementation.html
  [http://www.456bereastreet.com/archive/201104/controlling_width_with_css3_box-sizing/]: http://www.456bereastreet.com/archive/201104/controlling_width_with_css3_box-sizing/
  [http://caniuse.com/css3-boxsizing]: http://caniuse.com/css3-boxsizing
  [http://helephant.com/2008/10/20/css3-box-sizing-attribute/]: http://helephant.com/2008/10/20/css3-box-sizing-attribute/
  [http://aninnovativeweb.tumblr.com/post/770432002/understanding-css3-box-sizing]: http://aninnovativeweb.tumblr.com/post/770432002/understanding-css3-box-sizing
  [http://www.w3.org/TR/css3-ui/#box-sizing]: http://www.w3.org/TR/css3-ui/#box-sizing
  [http://www.goldentwine.com/blog/css3-user-interface-box-sizing]: http://www.goldentwine.com/blog/css3-user-interface-box-sizing
  [http://csshead.com/controlling-width-with-css3-box-sizing/]: http://csshead.com/controlling-width-with-css3-box-sizing/
  [https://www.youtube.com/watch?v=rNqqfMJnpKY&feature=related]: https://www.youtube.com/watch?v=rNqqfMJnpKY&feature=related
  [http://maymay.net/blog/2004/10/28/observations-on-the-css3-box-sizing-property-and-how-designers-use-style-sheets/]: http://maymay.net/blog/2004/10/28/observations-on-the-css3-box-sizing-property-and-how-designers-use-style-sheets/
  [http://www.w3cplus.com/content/css3-box-sizing]: http://www.w3cplus.com/content/css3-box-sizing
