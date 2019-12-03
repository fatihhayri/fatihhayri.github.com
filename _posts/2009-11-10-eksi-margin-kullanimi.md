---
layout: post
title: Eksi Margin Kullanımı
Date: 2009-11-10 00:37
Category: CSS, XHTML
tags: [eksi-margin, Elastik Web Sayfaları, float, Margin, Sabit-Konumlandırma]
---

Margin özelliği eksi değer alabilir. Eksi değerler bize tasarımsal
olarak farklı uygulamalar geliştirmemize yardımcı olur. Tabi bir çok
özellikte olduğu gibi burada da farklı tarayıcılarda bazı sorunlarla
karşılacağız.

Eksi margin'li değerler bize görsel olarak avantaj sağlar, kodlamamıza
yardımcı olur örneğin esnek yapılı sayfaları düzenlememizde ve bir
elemanın çizgileri dışına taşırma işlemlerinde.

Eksi margin kullanımı bir hile değildir, CSS'in desteklediği normal bir
değerdir.

Eksi margin bir çok yerde kullanıyoruz. Ancak biraz bilinçsiz
kullanıyoruz. Ben burada çizgileri belirleyip ona göre hareket etmeyi
düşündüm ve bu yazı ortaya çıktı. Eksi marginleri yakından tanıyalım.

Eksi Margin'i iki yerde uygularız.

-   Sabit konumlandırılmış elemanlarda
-   Float uygulanmış elemanlarda



## 1- Sabit Elemanlar ve Eksi Margin

**1.1. Ard Arda Statik Elemanlar**

Herhangi bir konumlandırma ataması yapılmayan tüm elemanlar sabit
konumlandırılmıştır.

{% highlight css %}
#kutu1 {
    width: 200px;
    height: 100px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9
}

#kutu2 {
    width: 200px;
    height: 100px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf
}
{% endhighlight %}

HTML;

{% highlight html %}
<div id="kutu1"></div>
<div id="kutu2"></div>
{% endhighlight %}

Örnke kodu görmek için [tıklayınız.][]

![sabit_konumlu_kutu][]

Normal akış içindeki iki kutu bir birini takip eder. Biz burada birinci
kutuya eksi margin atarsak örneğin alttan -20px gibi.

Alttaki kutuyu kendi üzerine doğru 20px çekecektir.

{% highlight css %}
#kutu1 {
    width: 200px;
    height: 100px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
    margin-bottom:-20px
}

#kutu2 {
    width: 200px;
    height: 100px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf
}
{% endhighlight %}

Örnke kodu görmek için [tıklayınız.][1]

![sabit_konumlu_kutu2][]

Eğer ikinci kutuya yukarıdan eksi margin verirsek

{% highlight css %}
#kutu1 {
    width: 200px;
    height: 100px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
}

#kutu2 {
    width: 200px;
    height: 100px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
    margin-top:-20px
}
{% endhighlight %}

Örnke kodu görmek için [tıklayınız.][2]

![sabit_konumlu_kutu2][]

Aynı görüntüyü alırız. Burada bu örneği vermemin amacı, eksi değer üst
ve soldan verilirse eleman kendini yukarı veya sola çekecektir. Ancak
elemana sağ ve alt eksi değeri verildiğinde kendi yerinden oynamazken
ilişkili elemanı kendine doğru çekecektir. Yani üst/sol eksi değerlerde
kendi hareket ederken, alt/sağ eksi değerlerde diğer elemanları kendine
çekiyor.

**1.2. Başlıklar ve içerikler Arasındaki mesafeyi Ayarlamak İçin Eksi
Margin kullanmak**

Başka bir örnek yapalım. Genelde sitelerin içeriklerini girerken başlık
ve içerik şeklinde gireriz. Başlıklar için h1, h2, h3, h4, h5, h6
kullanırız. Bu bize arama motorları içinde avantaj sağlar. 

Normal bir içerik ve başlık kullanımına örnek verelim.

{% highlight html %}
<p>Integer sagittis ... elementum. </p>
<h1>Donec id ultricies mi.</h1>
<p>Lorem ipsum ... eros.</p>
{% endhighlight %}

Görünüm aşağıdaki gibi olacaktır

![negatifmargin_baslik][]

Genel kullanımda başlık ile içerik arasındaki boşluk, başlık ile üst
elemanlarda ile olandan daha azdır. Biz bunu sağlamak için h1'e
margin-bottom:0 değeri versek de yeterli gelmez. Paragrafın(p) üst
margin değeri aradaki mesafeyi açık gösterecektir. Bu durumu engellemek
için başlıktan sonra gelen paragraflara bir sınıf atayıp bu
paragrafların margin-top değerini düşürmeliyiz veya sıfırlamalıyız.

Bir başka çözüm yolu ise ki bu daha kolaydır ve genelde tercih edilir.
Başlık etiketinin alt margin değerine eksi değer vererek paragraf
yaklaştırılır. 

{% highlight css %}
h1{
	margin-bottom:-20px
}
{% endhighlight %}

![negatifmargin_baslik2][]

**1.3. Statik elemanlarda bir başka durumda kutuların iç içe olma
durumunda vardır.**

{% highlight css %}
#kutu1 {
    width:200px;
    height: 130px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
}
#kutu2 {
    height: 100px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
    margin:10px -20px
}
{% endhighlight %}

HTML;

{% highlight html %}
<div id="kutu1">
	<div id="kutu2"></div>
</div>
{% endhighlight %}

İçteki kutuya sağdan ve soldan eksi değerler verdiğimizde dış kutunu
genişliğini otomatik olarak alan içerideki kutu sağ ve soldan verilen
eksi kenar dışı boşluk değerleri kadar dışa taşacaktır.

Örnke kodu görmek için [tıklayınız.][3]

![sabit_konumlu_kutu3][]

Ancak burada farklı tarayıcılarda farklı sorunlarımız ortaya çıkacaktır.
ie6 da her iki yana taşan kısımlar gözükmezken, ie7'de sadece sağ kısım
görünmemektedir.

![sabit_konumlu_kutu3_ie7][]

ie7'de yukarıdaki gibi görünüyor.

![sabit_konumlu_kutu3_ie6][]

ie6'da ise yukarıdaki gibi görünmektedir.

Bu durumu düzeltmek için düzeltme kodu yazmalıyız. ie7 için min-height:0
tanımı yeterlidir.

{% highlight css %}
#kutu1 {
    width:200px;
    height: 130px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
}
#kutu2 {
    height: 100px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
    margin:10px -20px;
    min-height:0
}
{% endhighlight %}

ie6 için ise daha farklı bir kod yazmalıyız.

{% highlight css %}
#kutu1 {
    width:200px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
}
#kutu2 {
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
    margin:10px -20px;
}
* html #kutu2{
    position:relative;
    height:1px
}
{% endhighlight %}

Örnke kodu görmek için [tıklayınız.][4]

Bu kodlama sayesinde tüm tarayıcılarda aynı sonucu elde ederiz. Bu
örnekten şu sonucuda çıkarabiliriz; genişliği verilmeyen elemanlarda
eksi margin eleman genişliğini arttırır, bir bakıma padding görevi
görür.

## 2- Eksi Margin ve Float

Float uygulanmış iki elemanı düşünelim.

{% highlight css %}
#kutu1 {
    float:left;
    width: 200px;
    height: 100px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
}
#kutu2 {
    float:left;
    width: 200px;
    height: 80px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf
}
{% endhighlight %}

{% highlight html %}
<div id="kutu1">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies mi.
</div>
<div id="kutu2">
	Etiam vel arcu nisl. Sed pharetra gravida diam sed mattis.
</div>
{% endhighlight %}

Birinci kutuya sağ eksi margin verdiğimizde

{% highlight css %}
#kutu1 {
    float:left;
    width: 200px;
    height: 100px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
    margin-right:-50px
}
#kutu2 {
    float:left;
    width: 200px;
    height: 80px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf
}
{% endhighlight %}

Örnke kodu görmek için [tıklayınız.][5]

![float_eksimargin][]

Birinci kutu ikinci kutuyu kendine doğru çekecektir. Birinci kutu
genişliği ve konumunda herhangi bir değişiklik olmayacaktır.

Farklı durumlarda farklı sonuçlar çıkacaktır. Örneğin,

Birinci float:left ikinci kutu float:right değeri verdiğimizde iki kutu
arasında herhangi bir eksi değer etki etmiyor.
Her ikisine float:right tanımladığımızda ise, soldan eksi margin değeri
yukarıdaki etkiyi yapıyor.

Peki bu bilgi bizim ne işimize yaracak derseniz.
http://www.alistapart.com/articles/negativemargins/ örnekteki gibi esnek
yapılı bir sayfa planında sabit yapılı bir sağ veya sol alanlar
oluşturmak istediğimizde yarar.

Örneğin %100 genişlikteki bir içerik alanımızı sağ yanına 200px lik bir
sağ kolon eklemek istersek, yukarıdaki kodu devam ettirmemiz yeterli
olacaktır.

{% highlight css %}
#kutu1 {
    float:left;
    width: 100%;
    height: 100px;
    background-color:#e5ecf9;
    margin-right:-200px
}
#kutu2 {
    float:left;
    width: 200px;
    height: 80px;
    background-color:#ffb4bf
}
{% endhighlight %}

{% highlight html %}
<div id="kutu1">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies mi.</p>
</div>
<div id="kutu2">
	<p>Etiam vel arcu nisl. Sed pharetra gravida diam sed mattis.</p>
</div>
{% endhighlight %}

![float_eksimargin_esnek][]

%100 içeriği sağ kolonun altında kalıyor. Bunu engellemek için
içeriğindeki paragrafa sağ margin değeri atamalıyız.

{% highlight css %}
#kutu1 p{
	margin-right:220px
}
{% endhighlight %}

Normalde 200px yeterli olacaktı ancak içerik ile sağ kolon arasına 20px
lik bir mesafe koyarak birbirine yapışmasınıda engellemiş olduk.

![float_eksimargin_esnek2][]

Sağ ve sol kolon diye bir ayrım yapmak içinde soldaki kolonun ardalan
rengini kaldırıp içindeki paragrafa vererek bu sorunu çözebiliriz.

{% highlight css %}
#kutu1 {
    float:left;
    width: 100%;
    margin-right:-200px
}
#kutu1 p{
    margin:0 220px 0 0;
    height: 100px;
    background-color:#e5ecf9;
}
#kutu2 {
    float:left;
    width: 200px;
    height: 80px;
    background-color:#ffb4bf
}
{% endhighlight %}

Örnke kodu görmek için [tıklayınız.][6]

![float_eksimargin_esnek3][]

**Float uygulanmış iç içe elemanlara eksi margin uygulamak**

Yukarıda yan yana elemanlardaki durumu gösterdik peki iç içe elemanlarda
eksi margin kullanımda nasıl sonuçlar çıkacaktır.

{% highlight css %}
#kutu1 {
    float:left;
    width: 200px;
    height: 100px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
}
#kutu2 {
    float:right;
    width: 50px;
    height: 80px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
}
{% endhighlight %}

{% highlight html %}
<div id="kutu1">
  <div id="kutu2">Donec id ultricies mi.</div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 </div>
{% endhighlight %}

Örnke kodu görmek için [tıklayınız.][7]

![float_eksimargin_icice][]

Birinci kutu içerisinde sağa hizalanmış ikinci kutuyu sağa doğru birinci
kutu dışarısına çıkararak bir çok uygulamada işimizie yaracaktır.

{% highlight css %}
#kutu1 {
    float:left;
    width: 200px;
    height: 100px;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
}
#kutu2 {
    float:right;
    width: 80px;
    height: 80px;
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
    margin:10px -50px 0 0
}
* html #kutu2{
    position:relative;
}
{% endhighlight %}

Örnek kodu görmek için [tıklayınız.][8]

![float_eksimargin_icice2][]

Bir başka uygulama şeklide

Bir içerik ve başlığı normal şekilde normal akış içerisinde iken

{% highlight css %}
#kutu1 {
    float:left;
    border: 2px solid #659ad8;
    background-color:#e5ecf9;
    padding:0 20px
}
#kutu1 h2{
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
}
{% endhighlight %}

{% highlight html %}
<div id="kutu1">
    <h2>Donec id ultricies mi.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor vehicula nisl, et tincidunt sapien venenatis quis. .. felis.</p>
</div>
{% endhighlight %}

Örnek kodu görmek için [tıklayınız.][9]

![float_eksimargin_icice3][]

Ancak buradaki başlığı kutu dışına alarak farklı bir görünüm elde
edebiliriz.

{% highlight css %}
#kutu1 h2{
    border: 2px solid #cd8a93;
    background-color:#ffb4bf;
    margin-top:-20px
}
{% endhighlight %}

Örnek kodu görmek için [tıklayınız.][10]

![float_eksimargin_icice4][]

ve tabi ie 6 için

{% highlight css %}
* html #kutu1 h2{
	position:relative;
	height:1px
}
{% endhighlight %}

**Eksi Margin Uygulamaları**

-   [Konumlandırma(positioning) kullanılan elementlerin negatif margin     ile ortalanması][]
-   [CSS ile gölge vermek][]

## Sonuç

Sonuç olarak eksi margin bir çok uygulamamızda kullanacağımız bir
özellik. Genelde farklılıkları ile ön plana çıkan bir özelliktir. Ben
burada eksi margin'i tanıttım ve genel bilinen uygulamalarını yaptım ve
bir kaçına link verdim. Buradaki bilgiler ışığında daha bir çok
uygulamamızda eksi margin'i kullanmaya devam edeceğiz.

## Kaynaklar

-   [http://www.smashingmagazine.com/2009/07/27/the-definitive-guide-to-using-negative-margins/][]
-   [http://www.brunildo.org/test/NegMOutH.html][]
-   [http://csscreator.com/node/1703][] (ie sorun düzeltme)
-   http://www.communitymx.com/abstract.cfm?cid=B0029
-   [http://www.alistapart.com/articles/negativemargins/][] (Uygulama)
-   [http://www.search-this.com/2007/08/01/the-positive-side-of-negative-margins/][]
    (ayrıntılı bilgi)
-   [http://www.bennadel.com/blog/1174-Negative-CSS-Margins-Are-Not-Cool.htm][]
    (karşı çıkış)
-   http://haslayout.net/css/negmargin
-   [http://csscreator.com/node/28664][] (küçük bilgi)
-   [http://www.simplebits.com/notebook/2005/05/23/negative.html][]
    (negatif margin kullanılcak bir örnek)
-   [http://www.severnsolutions.co.uk/twblog/archive/2004/07/01/cssnegativemarginsalgebra][]
    (negatif margin ile sayfa yapısı oluşturma)
-   http://haslayout.net/css/Negative-Margin-Bug (negatif margin
    sorunları)

  [tıklayınız.]: /dokumanlar/sabit_konumlu.html
  [sabit_konumlu_kutu]: /images/sabit_konumlu_kutu.gif
    "sabit_konumlu_kutu"
  [1]: /dokumanlar/sabit_konumlu_2.html
  [sabit_konumlu_kutu2]: /images/sabit_konumlu_kutu2.gif
    "sabit_konumlu_kutu2"
  [2]: /dokumanlar/sabit_konumlu_3.html
  [negatifmargin_baslik]: /images/negatifmargin_baslik.gif
    "negatifmargin_baslik"
  [negatifmargin_baslik2]: /images/negatifmargin_baslik2.gif
    "negatifmargin_baslik2"
  [3]: /dokumanlar/sabit_konumlu_4.html
  [sabit_konumlu_kutu3]: /images/sabit_konumlu_kutu31.gif
    "sabit_konumlu_kutu3"
  [sabit_konumlu_kutu3_ie7]: /images/sabit_konumlu_kutu3_ie7.gif
    "sabit_konumlu_kutu3_ie7"
  [sabit_konumlu_kutu3_ie6]: /images/sabit_konumlu_kutu3_ie6.gif
    "sabit_konumlu_kutu3_ie6"
  [4]: /dokumanlar/sabit_konumlu_4_ie6.html
  [5]: /dokumanlar/eksi_deger_float.html
  [float_eksimargin]: /images/float_eksimargin.gif
    "float_eksimargin"
  [float_eksimargin_esnek]: /images/float_eksimargin_esnek.gif
    "float_eksimargin_esnek"
  [float_eksimargin_esnek2]: /images/float_eksimargin_esnek2.gif
    "float_eksimargin_esnek2"
  [6]: /dokumanlar/eksi_deger_float_elastik.html
  [float_eksimargin_esnek3]: /images/float_eksimargin_esnek3.gif
    "float_eksimargin_esnek3"
  [7]: /dokumanlar/eksi_deger_icice_float.html
  [float_eksimargin_icice]: /images/float_eksimargin_icice.gif
    "float_eksimargin_icice"
  [8]: /dokumanlar/eksi_deger_icice_float2.html
  [float_eksimargin_icice2]: /images/float_eksimargin_icice2.gif
    "float_eksimargin_icice2"
  [9]: /dokumanlar/eksi_deger_icice_float3.html
  [float_eksimargin_icice3]: /images/float_eksimargin_icice3.gif
    "float_eksimargin_icice3"
  [10]: /dokumanlar/eksi_deger_icice_float4.html
  [float_eksimargin_icice4]: /images/float_eksimargin_icice4.gif
    "float_eksimargin_icice4"
  [Konumlandırma(positioning) kullanılan elementlerin negatif margin ile   ortalanması]: http://fatihhayrioglu.com/css-ile-sayfalarimizi-ve-elementlerimizi-ortalamak/
  [CSS ile gölge vermek]: http://fatihhayrioglu.com/css-ile-golge-vermek/
  [http://www.smashingmagazine.com/2009/07/27/the-definitive-guide-to-using-negative-margins/]: http://www.smashingmagazine.com/2009/07/27/the-definitive-guide-to-using-negative-margins/
  [http://www.brunildo.org/test/NegMOutH.html]: http://www.brunildo.org/test/NegMOutH.html
  [http://csscreator.com/node/1703]: http://csscreator.com/node/1703
  [http://www.alistapart.com/articles/negativemargins/]: http://www.alistapart.com/articles/negativemargins/
  [http://www.search-this.com/2007/08/01/the-positive-side-of-negative-margins/]: http://www.search-this.com/2007/08/01/the-positive-side-of-negative-margins/
  [http://www.bennadel.com/blog/1174-Negative-CSS-Margins-Are-Not-Cool.htm]: http://www.bennadel.com/blog/1174-Negative-CSS-Margins-Are-Not-Cool.htm
  [http://csscreator.com/node/28664]: http://csscreator.com/node/28664
  [http://www.simplebits.com/notebook/2005/05/23/negative.html]: http://www.simplebits.com/notebook/2005/05/23/negative.html
  [http://www.severnsolutions.co.uk/twblog/archive/2004/07/01/cssnegativemarginsalgebra]: http://www.severnsolutions.co.uk/twblog/archive/2004/07/01/cssnegativemarginsalgebra
