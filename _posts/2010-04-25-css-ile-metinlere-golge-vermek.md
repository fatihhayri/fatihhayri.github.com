---
layout: post
title: CSS ile metinlere gölge vermek
Date: 2010-04-25 15:30
Category: CSS, Web Standartları, XHTML
tags: dropshadow, glow, gölge, ie desteklemiyor, metin, text-shadow
---

Metinlere gölge vermek, site görselliği açısından her zaman
tasarımcıların tercih ettiği yöntemlerden birisidir. Bir çok sitede bu
durum ile karşılaşırız. Normalde bu gibi durumlarda gölge verilen
alanlar resim olarak kesilip siteye eklenir. Bu durum anlamlı kodlama ve
arama motorları için pek mantıklı değildir, ayrıca resim dosyaları metne
göre daha fazla boyuta sahip olması nedeni ile de dezavantajlıdır.

Bunun için text-shadow özelliği standartlara eklendi. CSS 2 ile birlikte
gelen text-shadow özelliği daha sonra CSS 2.1'da kaldırıldı. Daha sonra
CSS 3 ile birlikte tekrar geldi. Safari bu özelliği ilk sürümünden
itibaren desteklerken aynı şeyi diğer tarayıcılar için söylemek zor.
text-shadow özelliği ile görsel düzenleme programlarında(photoshop,
fireworks) kullanılan gölgeye yakın sonuçlar elde edebiliriz.

Bu makalede sizlere web sitemizde metinlere gölge vermek için hangi
yöntemleri kullanabileceğimizi anlatmaya çalışacağım.

## text-shadow

Bu özellik bir element içindeki metne bir veya daha fazla gölge vermek
için kullanılır. Aldığı değerler belli sıralaması vardır.

**Yapısı :** text-shadow: <deger\>\\
**Aldığı Değerler :** shadow,… | none | inherit\\
**Başlangıç değeri:** tanımlama yok\\
**Uygulanabilen elementler:**tüm elementler\\
Kalıtsallık: Yok
{: .cssozelliktanimi}

text-shadow değeri 4 kısımdan oluşur. Bir örnek ile açıklayalım.

{% highlight css %}
.title {
	text-shadow: 3px 2px 1px #000;
}
{% endhighlight %}

3px; İlk değer yataydaki mesafe içindir Artı değerler metnin sağından
itibaren uzaklık değeridir, negatif değerler metnin soluna doğru
mesafeyi gösterir.

2px; İkinci değer dikeydeki mesafe içindir. Artı değerler metnin altına
doğru mesafeyi gösterir, eksi değerler ise metnin üstüne doğru
mesafesini gösterir.

1px; Bulanıklık(blur) değeridir. Gölgelerin gerçeğe yaklaşması için
kullanılır. Bulanık yatay ve dikey için verilen değerler göre şekil
alır.

#000; renk değeri. Gölgenin renk değerini gösterir.

**Birden fazla gölge kullanımı**

Birden fazla gölge tanımı yapabiliyoruz. Aralarında virgül kullanarak
birden fazla virgül kullanabiliyoruz. CSS2'de birden fazla gölge
kullanımında üst üste binmesi durumunda normal sıralamada başta olan
üstte sonradan tanımlananlar altta kalırken CSS3 ile birlikte bu durum
değişti. CSS3'de tam tersi bir durum söz konusu.

{% highlight css %}
color: #000;
background: #000;
text-shadow: 0 0 4px #ccc, 0 -5px 4px #ff3, 2px -10px 6px #fd3, -2px -15px 11px #f80, 2px -18px 18px #f20;
{% endhighlight %}

Virgül ile ayrılarak birden fazla gölge kullanılabilir.

**Tarayıcı Uyumu:**
Internet Explorer desteklemiyor
Firefox 3.5+
Chrome 2+
Safari 1.3+
Opera 9.5+
W3C’s CSS Level 2+
CSS Profile 2.0 ve 3.0
{: .tarayiciuyum}

Çoklu gölge kullanımını Safari ve Google Chrome daha sonra
desteklemiştir. Safari 4 ve Google Chrome 2'den sonra tam destek
gelmiştir.

## Örnek Çalışmalar

Konuyu daha iyi anlamak ve sonuçlarını görmek için bir kaç örnek
yapalım.

{% highlight css %}
p{
    font:14px Arial, Helvetica, sans-serif;
    color: #000;
    background: #fff;
    text-shadow: 2px 2px 3px #000;
}
{% endhighlight %}

![][100]

Örneği görmek için [tıklayınız.][]

İkinci örneğimizide gölge açısını değiştirmek için eksi değer veririz.

{% highlight css %}
p{
    font:16px Arial, Helvetica, sans-serif;
    color: #000;
    background: #fff;
    text-shadow: 2px -2px 3px #000;
}
{% endhighlight %}

![][1]

Örneği görmek için [tıklayınız.][2]

Bir çok değişik denemeler ile farklı görünümler elde edebiliriz.

{% highlight css %}
p{
    font:16px Arial, Helvetica, sans-serif;
    color: #343434;
    background: #b6d53c;
    text-shadow: 1px 1px #fff;
    padding:10px
}
{% endhighlight %}

![][3]

Örneği görmek için [tıklayınız.][4]

Gölge yardımı ile ışıltı efekti vermek.

{% highlight css %}
p{
    font:bold 16px Arial, Helvetica, sans-serif;
    color: #fff;
    background: #000;
    text-shadow: 1px 1px 6px #fff;
    padding:10px
}
{% endhighlight %}

![][5]

Örneği görmek için [tıklayınız.][6]

Çoklu gölge yardımı ile ateş efekti verelim

{% highlight css %}
font:bold 16px Arial, Helvetica, sans-serif;
color: #fff;
background: #000;
text-shadow: 0 0 4px white, 0 -5px 4px #FFFF33, 2px -10px 6px #FFDD33, -2px -15px 11px #FF8800, 2px -25px 18px #FF2200;
padding:30px 20px
{% endhighlight %}

![][7]

Örneği görmek için [tıklayınız.][8]

Görüldüğü gibi resim düzenleme araçları ile elde edebileceğimiz bir çok
gölge efektini text-shadow ile elde edebiliriz. Farklı değerler yardımı
ile bir çok gölge çeşidini elde edebiliriz.

## İnternet Explorer için Gölge Sorunu Çözümü

Yukarıdaki kodlarımızı İnternet Explorer yorumlamayacaktır. Buna tüm
sürümleri(6,7,8) dahil. Yeni çıkacak 9. sürümde de bu konuda bir
ilerleme olduğuna dair bir bilgi yok.

İnternet explorer için bu durumu "filter" yardımı ile çözebiliyoruz.
text-shadow özelliği kadar iyi sonuçlar vermese de bazı durumlar için
bize çözüm sunuyor.

Tüm ie filtrelerini görmek için [tıklayınız.][9]

Bu filtrelerden bir kaçını gölge vermek için kullanabiliriz. İnternet
explorer filtrelerini uyguladığımız elemana eğer genişlik, yükseklik
veya postion:absolute tanımı yapıldı ise sorun çıkarır. Bu nedenle gölge
uygulanacak metini <span\> etiketi içine alıp span etiketine ie gölge
özellikleri tanımlanır.

**Shadow filtresi**

{% highlight css %}
filter: Shadow(color='#0000ff', Direction=135, Strength=4);
{% endhighlight %}

Bu uygulama sonucunda aşağıdaki görüntüyü elde ederiz.

![][10]

Örneği görmek için [tıklayınız.][11]

Bu özelliği kullanarak sınırlı çerçevede gölge oluşturabiliriz.
Kullanacağımız yere göre bu yöntemde tercih edilebilir. Daha keskin ve
belli açılarda kullanılabilir.

**Glow Filtresi**

Glow filtresi metin etrafında çevreleyen bir katman oluşturur ve görüntü
olarak gölge etkisi verir.

{% highlight css %}
<!--[if IE]><style type="text/css">
p.shadowed span {
  display: block;
  width: 100%;
  filter: glow(color=#0000ff,strength=2);
}
</style><![endif]-->
{% endhighlight %}

Örneği görmek için [tıklayınız.][12]

Ayrıca glow ve blur filtrelerini beraber kullanarak bir çözüm
üretilebilir. kilianvalkhof.com sitesinde bahsedilen bu yöntem ile
gerçeğe daha yakın sonuçlar elde edilebilir.

Örneği görmek için [tıklayınız.][13]
(http://kilianvalkhof.com/uploads/ieshadow.html)

Ayrıca aynı sitede bu yöntemi kullanan bir jquery eklentisi
geliştirilmiştir. Kodlamayı kolaylaştıran bu yöntemde denenebilir.
Ayrıntılı bilgi için tıklayınız.

## Tekrarlayan Metin Kopyası ile Gölge Oluşturma

Aynı metni iki kere veya daha fazla kopyalayıp position ve konumlandırma
değerleri ile gölge etkisi verilen bir yöntemdir. Farklı tarayıcılarda
aynı etkiyi verir. Sorun oluşturan tek yanı ise içerikte yazının birden
fazla geçmesi ve fazladan etiket eklemesidir.

Kodlaması çok basittir.

{% highlight html %}
<div class="baslik">
    <h1>Lorem ipsum dolor sit amet consectetuer</h1>
    <h6>Lorem ipsum dolor sit amet consectetuer</h6>
</div>
{% endhighlight %}

CSS kodu

{% highlight css %}
.baslik {
	position:relative;
	font-family:arial;
}

.baslik h1 {
	position:absolute;
	top:2px;
	left:2px;
	font-size:30px;
	color:#C9D8E9;
	padding:0;
	margin:0;
}

.baslik h6 {
	position:absolute;
	top:0;
	left:0;
	font-size:30px;
	color:#4471A2;
	padding:0;
	margin:0;
}
{% endhighlight %}

Sonuç aşağıda göründüğü gibi olur.

![][14]

Örneği görmek için [tıklayınız.][15]

## Sonuç

Yukarıda metinlere gölge vermek ile alakalı bir kaç yöntemden bahsettim.
İlk yöntemimiz standartlarda olan text-shadow yöntemi idi, diğer
yöntemler ise standartları desteklemeyen tarayıcılar için üretilen çözüm
önerileridir.

Ben bir kaç projemde bu yöntemleri kullandım, sonuç olarak şunu
diyebilirim ki projelerimde standart yöntemi kullandım, desteklemeyenler
için ayrıca kod yazma gereği duymadım. Bu tercih sonucu bir çok
kullanıcı(hala bir numaralı tarayıcı olan İnternet Explorer
kullanıcıları) bu etkiyi görmeyecektir, ancak ie için oluşturulan hiç
bir yöntem bize gerçek görsel etkiyi vermediğide kesindir.

Tercihimizi yaparken ya bu metinleri resim olarak ekleyeceğiz yada
standardı uygulayacağız ve destekleyenler gösterecek, desteklemeyenler
görmeyecek seçeneklerinden birini seçmek zorunda kalıyoruz. Bende
standardı uyguladım ve ie kullanıcılarını maalesef dışarıda bıraktım
projelerimde. Diyeceksiniz ki peki diğer yöntemleri niye anlattınız.
Tercih konusundan benim kadar esnek kalamayan web geliştiricileri için
bir çözüm olduğunu göstermek için.

Sağlıcakla kalın.

## Kaynaklar

-   [http://www.kremalicious.com/2008/04/make-cool-and-clever-text-effects-with-css-text-shadow/][]
-   [http://tutorials.assistprogramming.com/text-shadow-using-css.html][]
-   [http://www.workingwith.me.uk/articles/css/cross-browser-drop-shadows][]
-   [http://westciv.com/tools/shadows/][]
-   [http://www.quirksmode.org/css/textshadow.html][]
-   [http://www.css3.info/preview/text-shadow/][]
-   [http://fredericiana.com/2009/06/10/stylish-text-with-the-css-text-shadow-property/][]
-   [http://maettig.com/code/css/text-shadow.html][] Örnek
-   [http://www.howtocreate.co.uk/textshadow.html][]
-   [https://dev.opera.com/articles/css-text-shadows-and-background-sizing/][]
-   [http://hacks.mozilla.org/2009/06/text-shadow/][]
-   [http://kilianvalkhof.com/2008/javascript/text-shadow-in-ie-with-jquery/][]
-   [http://line25.com/tutorials/create-a-letterpress-effect-with-css-text-shadow][]
-   [http://owltastic.com/2009/12/shadows-and-css3/][]
-   [http://reference.sitepoint.com/css/text-shadow][]
-   [http://cordobo.com/1119-provide-visual-feedback-css/][]
-   [http://www.catswhocode.com/blog/10-resources-to-get-the-most-out-of-the-css-text-shadow-property][]
-   [http://line25.com/articles/using-css-text-shadow-to-create-cool-text-effects][]
-   [http://designshack.co.uk/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/][]

  [tıklayınız.]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_1.html
  [100]: /images/metinlere_golge_1.gif
  [1]: /images/metinlere_golge_2.gif
  [2]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_2.html
  [3]: /images/metinlere_golge_3.gif
  [4]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_3.html
  [5]: /images/metinlere_golge_4.gif
  [6]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_4.html
  [7]: /images/metinlere_golge_5.jpg
  [8]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_5.html
  [9]: http://msdn.microsoft.com/en-us/library/ms673539%28VS.85%29.aspx
  [10]: /images/metinlere_golge_1_ie.gif
  [11]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_1_ie.html
  [12]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_2_ie.html
  [13]: http://kilianvalkhof.com/uploads/ieshadow.html
  [14]: /images/metinlere_golge_1_fr.gif
  [15]: /dokumanlar/metinlere_golge_vermek/metinlere_golge_1_fr.html
  [http://www.kremalicious.com/2008/04/make-cool-and-clever-text-effects-with-css-text-shadow/]: http://www.kremalicious.com/2008/04/make-cool-and-clever-text-effects-with-css-text-shadow/
  [http://tutorials.assistprogramming.com/text-shadow-using-css.html]: http://tutorials.assistprogramming.com/text-shadow-using-css.html
  [http://www.workingwith.me.uk/articles/css/cross-browser-drop-shadows]: http://www.workingwith.me.uk/articles/css/cross-browser-drop-shadows
  [http://westciv.com/tools/shadows/]: http://westciv.com/tools/shadows/
  [http://www.quirksmode.org/css/textshadow.html]: http://www.quirksmode.org/css/textshadow.html
  [http://www.css3.info/preview/text-shadow/]: http://www.css3.info/preview/text-shadow/
  [http://fredericiana.com/2009/06/10/stylish-text-with-the-css-text-shadow-property/]: http://fredericiana.com/2009/06/10/stylish-text-with-the-css-text-shadow-property/
  [http://maettig.com/code/css/text-shadow.html]: http://maettig.com/code/css/text-shadow.html
  [http://www.howtocreate.co.uk/textshadow.html]: http://www.howtocreate.co.uk/textshadow.html
  [http://dev.opera.com/articles/view/css-text-shadows-and-background-sizing/]: http://dev.opera.com/articles/view/css-text-shadows-and-background-sizing/
  [http://hacks.mozilla.org/2009/06/text-shadow/]: http://hacks.mozilla.org/2009/06/text-shadow/
  [http://kilianvalkhof.com/2008/javascript/text-shadow-in-ie-with-jquery/]: http://kilianvalkhof.com/2008/javascript/text-shadow-in-ie-with-jquery/
  [http://line25.com/tutorials/create-a-letterpress-effect-with-css-text-shadow]: http://line25.com/tutorials/create-a-letterpress-effect-with-css-text-shadow
  [http://owltastic.com/2009/12/shadows-and-css3/]: http://owltastic.com/2009/12/shadows-and-css3/
  [http://reference.sitepoint.com/css/text-shadow]: http://reference.sitepoint.com/css/text-shadow
  [http://cordobo.com/1119-provide-visual-feedback-css/]: http://cordobo.com/1119-provide-visual-feedback-css/
  [http://www.catswhocode.com/blog/10-resources-to-get-the-most-out-of-the-css-text-shadow-property]: http://www.catswhocode.com/blog/10-resources-to-get-the-most-out-of-the-css-text-shadow-property
  [http://line25.com/articles/using-css-text-shadow-to-create-cool-text-effects]: http://line25.com/articles/using-css-text-shadow-to-create-cool-text-effects
  [http://designshack.co.uk/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/]: http://designshack.co.uk/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/
  [100]: http://webexpedition18.com/articles/css3-text-shadow-property/
