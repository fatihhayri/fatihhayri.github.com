---
layout: post
title: Çok kolonlu yapılar ve çok kolonlu menüler
Date: 2010-03-17 00:04
Category: CSS, Javascript, jquery, Web Standartları, XHTML
tags: css3, çok kolonlu, çok kolonlu menüler, Javascript, jquery
---

![](/images/rei.jpg)

Son zamanlarda bir çok yerde gözüme çarpan bir menü tipi var; iki
kolonlu, üç kolonlu vb. menü tipleri. CSS ile en optimum şekilde bu
menüyü nasıl yapabilirim diye araştırdım ve sizlerle paylaşmaya karar
verdim. Konuyu inceledikçe çok kolonlu yapıların sadece menülerde değil
site içeriklerinde de kullanabileceğimizi gördüm. İlk olarak yapının
nasıl olduğunu göstereceğim, sonrada menüde nasıl kullanıldığını.

Web mecrası geliştikçe ihtiyaçlarımızda gelişiyor ve ihtiyaçlarımızı
karşılayacak metotlar arıyoruz. Çok kolonlu yapılarda böyle bir metot
aslında. Sitemizi kullanan insanlar genelde menü vb. erişim ve gezinti
araçlarını kullanarak sitemizi dolaşırlar. Menü gibi gezinti araçları
site yapısı düşünüldüğünde sayfamızın en önemli alanlarıdır. Bu alanları
en iyi şekilde tasarlanması ve düşünülmesi sitemizi daha kullanışlı ve
etkin hale getirecektir. 

Bu düşünceler ile bir çok web site geliştiricisi çeşitli yöntemler
denedi ve denemeye devam ediyor. Kullanılabilirliği en üst düzeye
çıkarmak için çeşitli metotlar üretilmektedir. Bence bunlardan en
güzellerinden biridir çok kolonlu menüler.

Yatay ve dikey örneklerimiz olmasına karşın genelde yatay ve üst
menüdeki örnekler daha kullanışlıdır. Kullanıcıya uzun menü alanlarına
erişebilmek için kaydırma çubuğunu kullanırlar buda bizim için bir
dezavantajdır. Çok kolonlu menüler bu gibi durumlardan bizi kurtarır.
Sitemizi daha derli toplu gösterir.

Çok kolonlu menü örneklerini incelediğimizde belli başlı 2-3 yöntem ile
oluşturulduğunu görürüz. Bunları aşağıda inceleyeceğiz. Projelerimizde
çoklu menü kullanmaya karar verdiğimizde hangisi projemize uygun ise onu
kullanacağız. 

Ayrıca javascript yardımı ile ve css3 yardımı ile de çoklu menü
oluşturabiliriz bunlarıda göreceğiz.

Burada anlatacağımız metotlar sadece menülerde kullanılmaz, site
içeriğindeki benzer yapılar içinde aynı metotlar kullanılabilir. 

## 1. Yol: float uygulanmış liste ögeleri

Bu yöntemde **ul** elemanına sabit bir genişlik verip, her bir **li**
elemanına **float** ve sabit genişlik tanımı yaparak yan yana dizeriz.
Çok kolonlu yapılarını oluşturmak için en basit metottur. 

Dezavantajı listelemek istediğimiz ögeleri yan yana dizer. Normalde
istenen birinci kolonu bitirdikten sonra ikinci kolona geçmesidir.

{% highlight html %}
<ul>
    <li>Birinci Oge</li>
    <li>İkinci Oge</li>
    <li>Üçüncü Öge</li>
    <li>Dördüncü Öge</li>
    <li>Beşinci Öge</li>
    <li>Altıncı Öge</li>
    <li>Yedinci Öge</li>
    <li>Sekizinci Öge</li>
    <li>Dokuzuncu Öge</li>
    <li>Onuncu Öge</li>
</ul>
{% endhighlight %}

CSS kodumuz

{% highlight css %}
ul {
    width: 700px;
    list-style-type:none;
}
li {
    width:180px;
    margin:15px 0 0 0;
    padding:0 10px 0 0;
    line-height:15px;
    float:left;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

700px tüm genişlik içindir her ögenin genişliğini 180px verip bide
sağdan 10px padding değeri ile yan yana dizeriz. 

Örneği biraz daha geliştirip açılır menü haline getirelim. 

HTML Kodu;

{% highlight html %}
<ul id="menu">
    <li><a href="">Tencere</a>
        <ul class="kapsul">
        <li><a href="">Birinci Oge</a></li>
        <li><a href="">İkinci Oge</a></li>
        ....
        <li><a href="">Onuncu Öge</a></li>
        </ul>
    </li>
    <li><a href="">Tava</a></li>
    <li><a href="">Çaydanlık</a></li>
    <li><a href="">Leğen</a>
        <ul class="kapsulSolda">
        <li><a href="">Birinci Oge</a></li>
        <li><a href="">İkinci Oge</a></li>
        .....
        <li><a href="">Onuncu Öge</a></li>
        </ul>
    </li>
</ul>
{% endhighlight %}

CSS kodu;(kodun uzun olduğuna bakmayın çoğu kod menü elemanlarını daha
güzel görünmesini sağlamak için eklenmiştir.) Bunu menüye uygulayalım

{% highlight css %}
ul{
	margin:0;
	padding:0;
	list-style:none
}

ul li{
	float:left;
	width:180px;
	border-top:3px solid #fff;
	position:relative
}

ul li:hover,
ul li.over{
	border-top:3px solid #C30;
	background-color:#eee;
	width:180px;
}

ul li a{
	font:12px "Trebuchet MS", Arial, Helvetica, sans-serif;
	text-decoration:none;
	display:block;
	padding:5px 5px 5px 10px;
	color:#0657ad;
	font-weight:bold
}
{% endhighlight %}

İlk menü öğelerini oluşturduk.

{% highlight css %}
ul li:hover ul,
ul li.over ul{
	display:block;
}
{% endhighlight %}

Burada virgülün ilk kısmı ie6 hariç olan kısmı için ie6 için ise
aşağıdaki javascript kodunu yazacağız.

Tabi başımızın belası ie6 için menüyü açmak için javascript yardımı
almamız gerekiyor. Çünkü ie6 linklerin haricinde :hover işleyişini
uygulamıyor

{% highlight javascript %}
startList = function() {
	if (document.all&&document.getElementById) {
		navRoot = document.getElementById("menu");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}
window.onload=startList;
{% endhighlight %}

Açılan menü kısmının tam kapsanması için kapsayamama kodu ekleyeceğiz.

{% highlight css %}
ul li ul:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}

ul li ul {
	display: inline-block;
}
/*IE-mac de bu bolumu sakla \ */
* html ul li ul {height: 1%;}
ul li ul {display: block;}
/* IE-mac bu bolumu saklam artik */
{% endhighlight %}

Açılacak menü ul sinin tanımlarını yapıyoruz.

{% highlight css %}
ul li ul {
	width: 580px;
	list-style-type:none;
	display:none;
	border-bottom:3px solid #C30;
	background-color:#eee;
	padding:5px 0 10px 10px;
	position:absolute;
}

ul li li {
	width:180px;
	margin:5px 0 0 0;
	padding:0 10px 0 0;
	line-height:15px;
	float:left;
	border:0;
}

ul li li:hover{
	border:0
}

ul li li a{
	color:#0657ad;
	text-decoration:underline;
	padding:0;
	font-weight:normal
}

ul li li a:hover{
	color:#C30;
	text-decoration:none
}

ul li ul.kapsulSolda{
	right:0
}
{% endhighlight %}

Kolonlama için yukarıdaki yöntemi uyguluyoruz.

Örneği görmek için [tıklayınız.][1]

## 2. metot: Margin yönlendirmeleri ile

Çok kolonlu yapıları oluşturmak için diğer bir yöntemde ikinci ve üçüncü
kolonlara sağdan ve üstten margin değerleri vererek yapmaktır. Bu
metodun avantajı kolon dizilişinin istediğimiz gibi olmasıdır. Bu
metotta çoğaltacağımız kolonlara ek sınıflar eklemeliyiz. 

{% highlight html %}
<ul>
    <li class="kolon1"><a href="#">Öğe 1</a></li>
    <li class="kolon1"><a href="#">Öğe 2</a></li>
    <li class="kolon1"><a href="#">Öğe 3</a></li>
    <li class="kolon1"><a href="#">Öğe 4</a></li>
    <li class="kolon1"><a href="#">Öğe 5</a></li>
    <li class="kolon2 sifirla"><a href="#">Öğe 6</a></li>
    <li class="kolon2"><a href="#">Öğe 7</a></li>
    <li class="kolon2"><a href="#">Öğe 8</a></li>
    <li class="kolon2"><a href="#">Öğe 9</a></li>
    <li class="kolon2"><a href="#">Öğe 10</a></li>
    <li class="kolon3 sifirla"><a href="#">Öğe 11</a></li>
    <li class="kolon3"><a href="#">Öğe 12</a></li>
    <li class="kolon3"><a href="#">Öğe 13</a></li>
    <li class="kolon3"><a href="#">Öğe 14</a></li>
    <li class="kolon3"><a href="#">Öğe 15</a></li>
    <li class="kolon3"><a href="#">Öğe 16</a></li>
</ul>
{% endhighlight %}

CSS kodumuzu yazalım

{% highlight css %}
ul{
	margin: 0 0 1em 2em;
	padding: 0;
}

ul li{
	line-height: 1.2em;
	margin: 0;
	padding: 0;
}

* html ul li{
	position: relative;
}

ul li.kolon1{
	margin-left: 0em;
}

ul li.kolon2{
	margin-left: 10em;
}

ul li.kolon3{
	margin-left: 20em;
}

li.sifirla{
	margin-top: -6em;
}

ul li a{
	display: block;
	text-decoration: none;
	width: 7em;
}

ul li a:hover{
	text-decoration: underline;
}
{% endhighlight %}

Örnek kodu görmek için [tıklayınız.][2]

Yukarıdaki kodda ilk **li** tanımımız bir önceki metot ile neredeyse
aynıdır. Tek farklı olan kısım **position:relative**tanımıdır, bu tanım
ie'deki sorunları gidermek için eklenmiştir. Her kolonun soldan mesafesi
**margin-left** değerleri tanımlanarak sağlanmıştır. İkinci ve üçüncü
kolonları yukarı çekmek içinde menü yüksekliği kadar eksi margin değeri
verilerek yukarı çekilmiştir.

Margin yönlendirmeleri ile menü oluşturmak pek mantıklı değildir. Esnek
olmayan bu yöntem menü ekleme ve çıkarmalarında osurn çıkarır.

## 3. Metot: Kapsayıcı katman ile bölmek

Bu metotta çoklu kolonlara ayrılacak listeler kapsayıcı katmanlar ile
ayrılarak her bir kolon oluşturulur. Bu metotta yükseklik ile ilgi bir
şey yapmaya gerek yoktur ve esnek bir yapıya sahiptir. 

{% highlight html %}
<div class="licol">
    <ol>
        <li>Let me not to the marriage of true minds</li>
        <li>Admit impediments; love is not love</li>
        <li>Which alters when it alteration finds</li>
        <li>Or bends with the remover to remove</li>
    </ol>
</div>
<div class="licol">
    <ol start="5">
        <li>Oh, no, it is an ever fixed mark</li>
        <li>That looks on tempests and is never shaken;</li>
        <li>It is the star to every wand'ring bark</li>
        <li>Whose worth's unknown, although his height be taken</li>
    </ol>
</div>
<div class="licol">
    <ol start="9">
        <li>Love's not Time's fool, though rosy lips and cheeks</li>
        <li>Within his bending sickle's compass come;</li>
        <li>Love alters not with his brief hours and weeks</li>
        <li>But bears it out even to the edge of Doom</li>
    </ol>
</div>
{% endhighlight %}

CSS kodumuzda kısadır.

{% highlight css %}
li {
    margin:15px 0 0 0;
    padding:0 10px 0 0;
    line-height:15px;
}

.licol {
    float: left;
    width: 200px;
}
{% endhighlight %}

Örnek kodu görmek için [tıklayınız.][3]

Diğer metotlara göre avantajlı görünen bu metodun da kendince sorunları
vardır. Menü yaparken kapsayıcı bir katman(div) atayıp bu katman içinde
ul'leri float ve genişlik vererek yan yana koyarız.

{% highlight html %}
<ul id="menu">
    <li>
        <a href="">Tencere</a>
            <div class="ucluKolon">
              <ul>
                <li><a href="">Let me not to the marriage of true minds</a></li>
                ...
              </ul>
              <ul>
                <li><a href="">Oh, no, it is an ever fixed mark</a></li>
                ...
              </ul>
              <ul>
                <li><a href="">Love's not Time's fool, though rosy lips and cheeks</a></li>
                ...
              </ul>
            </div>
    </li>
....
</ul>
{% endhighlight %}

İlk menü kısmını ilk yaptığımız ile aynı kodlara sahip olacaktır.

{% highlight css %}
ul{
	list-style: none;
	margin: 0;
	padding: 0;
}

ul li{
	border-top: 3px solid #fff;
	float: left;
	position: relative;
	width: 180px;
}

ul li:hover, ul li.over{
	background-color: #eee;
	border-top: 3px solid #C30;
	width: 180px;
}

ul li a{
	color: #0657ad;
	display: block;
	font: 12px "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-weight: bold;
	padding: 5px 5px 5px 10px;
	text-decoration: none;
}
{% endhighlight %}

Daha sonra kapsayıcı katman tanımlarını yapıyoruz. Tabi öncesine
kapsayamama sorunu kodunu ekleyerek. Kapsayamama sorunu kodlarını başa
ekliyoruz çünkü bu kısmı sayfa normal gösteriminde gizlememiz gerekiyor.

{% highlight css %}
div.ucluKolon:after{
	clear: both;
	content: ".";
	display: block;
	height: 0;
	visibility: hidden;
}

div.ucluKolon{
	display: inline-block;
}

* html div.ucluKolon{
	height: 1%;
}

div.ucluKolon{
	display: block;
}

div.ucluKolon{
	background-color: #eee;
	border-bottom: 3px solid #C30;
	display: none;
	padding: 5px 0 10px 10px;
	position: absolute;
	width: 600px;
}
{% endhighlight %}

Üst menüde en sağdaki menü elemanının altında açılan menü sağ doğru
değilde sola doğru açılacak, bunun için

{% highlight css %}
.sagda{
	right:0
}
{% endhighlight %}

Üç kolonlu yapıyı oluşturmak için katman içindeki ul'lere genişlik ve
float tanımı yapıyoruz.

{% highlight css %}
div.ucluKolon ul{
	float:left;
	width:200px
}
{% endhighlight %}

üst menülerin üzerine gelince açılması için

{% highlight css %}
ul li:hover div.ucluKolon, ul li.over div.ucluKolon{
	display:block
}
{% endhighlight %}

ie6 için javascript kodumuzu yazıyoruz. Yukarıdaki kodun aynısı.

Örnek kodu görmek için [tıklayınız.][4]

## 4. CSS 3 column-count özelliği ile

CSS3 ile birlikte gelen yeni bir özellik sayesinde işler çok
kolaylaştırıyor. 

{% highlight html %}
<ul id="menu">
    <li>Birinci Oge</li>
    <li>İkinci Oge</li>
    <li>Üçüncü Öge</li>
    <li>Dördüncü Öge</li>
    <li>Beşinci Öge</li>
    <li>Altıncı Öge</li>
    <li>Yedinci Öge</li>
    <li>Sekizinci Öge</li>
    <li>Dokuzuncu Öge</li>
    <li>Onuncu Öge</li>
</ul>
{% endhighlight %}

CSS kodumuz ise iki satır

{% highlight css %}
ul#menu{
    width:700px;
    column-count: 3;
    -moz-column-count: 3;
    -webkit-column-count: 3;
}
{% endhighlight %}

Örnek kodu görmek için [tıklayınız.][5]

Farklı tarayıcılar için yazılan bu kod maalesef ie ve opera'nın desteği
olmadığı için uygulaması şimdilik yok.

## 5. Metot: Javascript yardımı ile

Aslında bu yöntem bir önceki metodun tamamlayıcı bir metodudur.

Bu metotta css3 column-count özelliği ile yine css ile kodu yazacağız,
javascript ile de desteklemeyen tarayıcılara uyumlu hale getireceğiz.

Bu javascript kodunu [csscripting.com][] sitende yayınlanmış, ancak bu
site yayında değil [cvwdesign.com][] sitesinde kodu buldum. Açıkça
söylemek gerekirse bunun dışında çalışan javascript kodu bulamadım. 

Bu kodu kullanırken css kodunuzu harici kullanmalıyız aksi halde kod
çalışmıyor. 

{% highlight html %}
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Çoklu kolon</title>
<link href="kolon.css" rel="stylesheet" />
<!--[if IE]><script type="text/javascript" src="css3-multi-column.js"></script><![endif]-->
</head>
<body>
    <ul class="column">
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
    </ul>
</body>
</html>
{% endhighlight %}

Bu javascript dosyasını ekleyince css3 aşağıdaki özelliklere karşılık
gelen özellikleri

-   column-count 
-   column-width 
-   column-gap
-   column-rule

destekliyor. Mevcut açık kodun boyutu fazla gelince [çevrimiçi yui kompresor][] ile javascript dosyasını sıkıştırdım. Gayet güzel bir oran
ile dosya boyutunu 37 kb'dan 19 kb'a kadar düşürdüm.

Örnek kodu görmek için [tıklayınız.][6]

jQuery yardımı ile çeşitli çözümler mevcuttur. kaynaklar bölümünde
yazdım linklerini.

## Kaynaklar

-   [http://www.useit.com/alertbox/mega-dropdown-menus.html][] (genel bilgi)
-   [http://articles.techrepublic.com.com/5100-10878_11-5810687.html][] 
-   [http://www.communitymx.com/content/article.cfm?page=1&cid=27F87][]
-   [http://www.alistapart.com/articles/multicolumnlists/][]
-   [http://archivist.incutio.com/viewlist/css-discuss/88422][]
-   [http://www.cssplay.co.uk/menus/drop_lists.html][] (örnek)
-   [http://www.cssplay.co.uk/menu/column.html][] (farklı bir bakış)
-   [http://blog.pengoworks.com/index.cfm/2008/4/3/Preview-jQuery-Multicolumn-Dropdown-Plugin][]
-   [http://green-beast.com/experiments/css_double_lists.php][]
-   [http://css-discuss.incutio.com/?page=MultipleColumnLists][]
-   [http://welcome.hp.com/country/tr/tr/welcome.html][]
-   [http://www.smashingmagazine.com/2009/03/24/designing-drop-down-menus-examples-and-best-practices/][]
-   [http://www.cvwdesign.com/txp/article/360/multi-column-layout-with-css3-and-some-javascript][]
-   [http://codeasily.com/jquery/multi-column-list-with-jquery][] (jquery multi kolon eklentisi)
-   [http://welcome.totheinter.net/columnizer-jquery-plugin/][] (jquery multi kolon eklentisi)
-   [http://www.americanstandard-us.com/][] (örnek)
-   [http://www.gatesfoundation.org/Pages/home.aspx][] (örnek)
-   [http://www.cssplay.co.uk/menus/multi-column.html][] (örnek)
-   [http://www.whitehouse.gov/][] (Örnek)
-   [http://www.wittysparks.com/2009/09/21/build-multi-level-multi-column-multi-menus-with-pure-css/][]
-   [http://www.smileycat.com/design_elements/mega_dropdown_menus/#001915][]

  [100]: /images/rei.jpg "rei"
  [tıklayınız.]: /dokumanlar/cok_kolonlu/metot1.html
  [1]: /dokumanlar/cok_kolonlu/metot1_.html
  [2]: /dokumanlar/cok_kolonlu/metot2.html
  [3]: /dokumanlar/cok_kolonlu/metot3.html
  [4]: /dokumanlar/cok_kolonlu/metot3_.html
  [5]: /dokumanlar/cok_kolonlu/metot4.html
  [csscripting.com]: http://www.csscripting.com/ "csscripting.com"
  [cvwdesign.com]: http://www.cvwdesign.com "cvwdesign.com"
  [çevrimiçi yui kompresor]: http://refresh-sf.com/yui/
  [6]: /dokumanlar/cok_kolonlu/metot5.html
  [http://www.useit.com/alertbox/mega-dropdown-menus.html]: http://www.useit.com/alertbox/mega-dropdown-menus.html
  [http://articles.techrepublic.com.com/5100-10878_11-5810687.html]: http://articles.techrepublic.com.com/5100-10878_11-5810687.html
  [http://www.communitymx.com/content/article.cfm?page=1&cid=27F87]: http://www.communitymx.com/content/article.cfm?page=1&cid=27F87
  [http://www.alistapart.com/articles/multicolumnlists/]: http://www.alistapart.com/articles/multicolumnlists/
  [http://archivist.incutio.com/viewlist/css-discuss/88422]: http://archivist.incutio.com/viewlist/css-discuss/88422
  [http://www.cssplay.co.uk/menus/drop_lists.html]: http://www.cssplay.co.uk/menus/drop_lists.html
  [http://www.cssplay.co.uk/menu/column.html]: http://www.cssplay.co.uk/menu/column.html
  [http://blog.pengoworks.com/index.cfm/2008/4/3/Preview-jQuery-Multicolumn-Dropdown-Plugin]: http://blog.pengoworks.com/index.cfm/2008/4/3/Preview-jQuery-Multicolumn-Dropdown-Plugin
  [http://green-beast.com/experiments/css_double_lists.php]: http://green-beast.com/experiments/css_double_lists.php
  [http://css-discuss.incutio.com/?page=MultipleColumnLists]: http://css-discuss.incutio.com/?page=MultipleColumnLists
  [http://welcome.hp.com/country/tr/tr/welcome.html]: http://welcome.hp.com/country/tr/tr/welcome.html
  [http://www.smashingmagazine.com/2009/03/24/designing-drop-down-menus-examples-and-best-practices/]: http://www.smashingmagazine.com/2009/03/24/designing-drop-down-menus-examples-and-best-practices/
  [http://www.cvwdesign.com/txp/article/360/multi-column-layout-with-css3-and-some-javascript]: http://www.cvwdesign.com/txp/article/360/multi-column-layout-with-css3-and-some-javascript
  [http://codeasily.com/jquery/multi-column-list-with-jquery]: http://codeasily.com/jquery/multi-column-list-with-jquery
  [http://welcome.totheinter.net/columnizer-jquery-plugin/]: http://welcome.totheinter.net/columnizer-jquery-plugin/
  [http://www.americanstandard-us.com/]: http://www.americanstandard-us.com/
  [http://www.gatesfoundation.org/Pages/home.aspx]: http://www.gatesfoundation.org/Pages/home.aspx
  [http://www.cssplay.co.uk/menus/multi-column.html]: http://www.cssplay.co.uk/menus/multi-column.html
  [http://www.whitehouse.gov/]: http://www.whitehouse.gov/
  [http://www.wittysparks.com/2009/09/21/build-multi-level-multi-column-multi-menus-with-pure-css/]: http://www.wittysparks.com/2009/09/21/build-multi-level-multi-column-multi-menus-with-pure-css/
  [http://www.smileycat.com/design_elements/mega_dropdown_menus/#001915]: http://www.smileycat.com/design_elements/mega_dropdown_menus/#001915
