---
layout: post
title: CSS3 Javascript&#8217;ten Rol (Ç)alıyor
Date: 2012-07-31 15:39
Category: CSS
tags: :checked, :target, bitişik kardeş seçiciler, css3, Etkinlik, Genel Kardeş Seçiciler, Javascript, kardeş seçiciler
---

Geçen haftasonu c.tesi günü(28 Temmuz 2012) [jstanbul etkinliğinde][]
sunduğum “CSS3 Javascript’ten Rol Çalıyor” makalesidir. Etkinlikte
internet erişimim olmadığı için örnekleri gösterememiştim, burada
bağlantıları da paylaşıyorum umarım yararlı olur.

Sunuma erişmek isteyenlere [sunumun linki.][]

Bu başlık şöyle çıktı; Hasan Yalçın’ın “[Modern Web Tasarımı][]” kitabı
için HTML5 ve CSS3 yeniliklerini bir cümle ile anlatmak istersen ne
dersin demesi ile başladı. “Geliştirilen kodlama teknolojilerinde, css3
tasarımcıdan, html5 programcıdan rol çalıyor!” diye bir cümle kurmuştum.
Bu cümlenin CSS3 kısmı eksik kaldığını zamanla gördüm. CSS3 sadece
tasarımcıdan değil Javascript’ten de rol çalışıyor bunu gördüm.

**Katman Mimarisi ve Js'in Yeri**

-   İçerik Katmanı (HTML)
-   Gösterim Katmanı (CSS)
-   Davranış Katmanı (Javascript)

CSS3 ve HTML5’den önce bir kitapta şöyle bir şema görmüştüm.

Content katmanı Web sayfamızın içeriğini belirler. Web sayfamızda
kullandığımız tüm yazılar, resimler, linkler, formlar vs. content
kapsamında ele alınır. Content’i belirlemek için HTML kullanılır. Yani
Web sayfamızdaki içeriği HTML ile belirtiyoruz. Bu içeriği kullanıcıya
sunmak için presentation katmanı kullanılır. Bu katman ile Web
sayfasında bulunan içeriği görsel olarak şekillendirip kullanıcıya
sunarız. Bu sunumu gerçekleştirmek için CSS kullanılır ve son olarak
behavior katmanı ise Web sayfamızın davranışını belirler. Sayfamızda
bulunan olaylar, tetiklemeler, işlemler vs. davranış kapsamında ele
alınır ve sayfanın davranışını belirlemek için JavaScript kullanılır.

![küme][50]

**Küme Mimarisi**

Genel anlamı ile yukarıdaki mantık doğru olsa da aslında hepsi bir
birine bağımlı teknolojiler bunlar ve birbirinden rol çalabiliyorlar.

CSS3 ile birlikte değil aslında CSS2 versiyonunda da bir hareketlilik
vardı. :hover Her ne kadar Murat Çorlu :hover’ın bir dinamizm
getirdiğini kabul etmese de bence CSS’in sayfa düzeni işine girişmeden
önceki en büyük dikkat çekiciliği linklerin :hover etkisine ulaşıp
değiştirme imkanıdır.

![][1]

Javascript’ten Rol Çalan Özellikler
-----------------------------------

-   :checked Sözde Sınıfı
-   :target Sözde Sınıfı
-   Kardeş Seçiciler (Bitişik ve Genel)
-   CSS3 Animasyon
-   CSS3 Transition
-   :hover Sözde Sınıfı
-   medya sorguları (media query)
-   calc() değeri

**İkinci Liste**

-   Seçiciler (first-child, last-child, nth-child)
-   CSS3 Transform
-   CSS3 Esnek Kutu Yerleşimi
-   ::selection seçicisi
-   pointer-events

Biz burada tıklama olanağı kazandıran :checked Sözde Sınıfı, :target
Sözde Sınıfını ve Kardeş(Siblings) Seçicileri irdeleyeceğiz.

:checked Sözde Sınıfı
---------------------

CSS ile bize tıklama yakalamayı sağlayan diğer bir özellik :checked
sözde sınıfıdır. Normalde checkbox ve radio butonların işaretli olup
olmaması durumu için çıkan bu özellik, tıklama yakalama özelliği yardımı
ile bir çok uygulama yapımı için kullanılıyor.

radyo butonlar ve işaret kutuları label ile kullanılmaktadır.

{% highlight html %}
<input id="rad1" type="radio" name="rad">
<label for="rad1">Radio 1</label>
{% endhighlight %}

for tanımı yardımı ile label ile radyo buton veya işaret kutusuna erişim
sağlanır. for ile radyo buton ve işaret kutusu id’si aynı olmalıdır.

{% highlight css %}
input[type="radio"]:checked+label{
	font-weight: bold;
}
{% endhighlight %}

Tanımı ile tıklama yakalama işini yapabiliyoruz.

Hemen bunu basit bir gizle göster işini nasıl yaparız onu gösterelim.

{% highlight html %}
<input id="che1" type="checkbox" name="che">
<label for="che1">Radio 1</label>
<div class="icerikAlani">Gizli İçerik</div>
{% endhighlight %}

Yukarıdaki koda birde div ekledik. Amacımız bir tıkla bu divi göstermek,
eğer açıksa bir tıkla gizlemek.

{% highlight css %}]
input[type="checkbox"],
.icerikAlani{
	display:none;
}

label{
	color:blue;
	cursor:pointer;
}

input[type="checkbox"]:checked ~ .icerikAlani{
	display:block;
}​
{% endhighlight %}

<iframe style="width: 100%; height: 200px" src="http://jsfiddle.net/fatihhayri/ZSudF/embedded/css,result,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Sadece bu kod yardımı ile gizle göster işini yapabiliyoruz. tilda(~)
işareti Genel Kardeş Seçicisi yardımı ile aynı seviyede olan
“icerikAlani” sınıfını buluyor ve gösteriyoruz.

target seçicisi
---------------

target seçicisi ve CSS’in tıklamaları yakalayabilme yeteneği kazanması.
CSS ile tanım yapmak için seçicileri kullanıyoruz. Aslında benzer
mantığı jquery ile javascript mecrasına da taşımış durumda. CSS3
öncesinde biz elemanların tıklanmasını CSS ile yakalayamıyorduk. ta ki
:target seçicisi gelen kadar. :taget seçicisi bize elemanlara
tıklandığını yakalama imkanı sağladı ve artık js ile tıklama yakalamayı
beklememize gerek kalmadı.

![][2]

{% highlight html %}
<dl>
	<dt id="dn1">
		<a href="#dn1">Deneme Başlık</a>
	</dt>
	<dd>Deneme 1 İçerik</dd>
	<dt id="dn2">
		<a href="#dn2">Deneme Başlık 2</a>
	</dt>
	<dd>Deneme 2 İçerik</dd>
</dl>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
{% endhighlight %}

CSS kodu;

{% highlight css %}
dt{
	font-weight:bold;
}

dt:target + dd{
	display:block;
}

dd{
	display:none;
}​
{% endhighlight %}

<iframe style="width: 100%; height: 200px" src="http://jsfiddle.net/fatihhayri/3TwVF/embedded/css,result,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

:target sözde sınıfının dezavantajı sayfa imlecini ilgili içeriğe
kaydırması ve adres barda #tanim ile geçiş sağlanmasıdır. Geri tuşları
biraz devre dışı kalıyor.

Kardeş(Siblings) Seçiciler
--------------------------

CSS'in bir diğer sorunu sadece kapsayıcı eleman içindeki elemanlara
erişebilmesi.

{% highlight html %}
<p>Deneme metni <span>bir</span></p>
<div class="icerik">Burada içerik olsun</div>
{% endhighlight %}

CSS ile sadece bir kapsayıcı eleman içine müdahale edebilirken

{% highlight css %}
p span{
	/* tanımlar */
}
{% endhighlight %}

Kardeş seçiciler yardımı ile artık kapsayıcı içinde olmayan elemanlara
da erişebiliyoruz.

{% highlight css %}
p + div.icerik{
	display:block;
}
{% endhighlight %}

veya

{% highlight css %}
p ~ div.icerik{
	display:block;
}
{% endhighlight %}

gibi tanımlar ile DOM’deki aynı seviyedeki elemana erişim
sağlayabiliyoruz.

-   Bitişik Kardeş Seçicileri (Bir ufak kardeş)
-   Genel Kardeş Seçicisi

**Bitişik Kardeş Seçicileri**

Bitişik Kardeş Seçicileri biribiri ardına gelen aynı seviyedeki
elementlerden sonra gelenine stil tanımlamak için kullanılır. Tam olarak
“Bir Ufak Kardeş Seçicisi” olmalıdır.

Bir örnek verelim bir başlığımız var ve sonrasında ard arda paragraflar
geliyor. Biz başlık ile hemen ardından gelen paragrafın arasına mesafe
koymak için bu seçiciyi kullanabiliriz.

{% highlight html %}
<body>
	<h2>Başlık 2</h2>
	<p>Buraya <em>önemli</em> ve <strong>iyi</strong>kod gir</p>
	<p>Buraya <em>önemli</em> ve <strong>iyi</strong>kod gir</p>
</body>
{% endhighlight %}

Dökümanın yapısı:

![][3]

Biz burada h2 ve h3 arasında boşluk vermek için aşağıdaki kodu
kullanırız:

{% highlight css %}
h2 + p {
	margin-top: 10px;
}
{% endhighlight %}

Bu seçiciyi ie7’nin seçicisini destekliyor.

Sonuç olarak konunun başında söylediğimiz gibi CSS, (X)HTML
elementlerinin kendi aralarındaki ilişkileri kullanarak bize bir çok
avantaj sağlar. Bu sayede bir çok kod yığınından kurtulmuş oluruz ve
kodlarımız bir düzene girer. Bu kuralları uyguladıkça önemini daha iyi
anlayacağız.

Çocuk Seçicileri ve Bitişik Kardeş Seçicileri‘ni Internet Explorer 7
versiyonundan itibaren desteklemeye başlamıştır. Bu nedenle kullanımı
konusunda dikkat etmeliyiz.

## Genel Kardeş Seçicisi

CSS2.1 ile birlikte gelen bitiş kardeş seçicilerine benzer bir
seçicidir. Bitişik kardeş seçicisine göre daha seçici ve kullanışlı bir
seçicidir. Aynı kapsayıcıya sahip elemanların belirtilen elemandan
sonraki aynı seviyedeki elemanların tümünü yakalamak için kullanılır.
Burada dikkat edilmesi gereken konu belirtilen elemandan sonraki aynı
seviyedeki elemanları seçiyor olması. Tanımlama yaparken araya işaret
olarak tilde(~) koyuyoru

![][4]

Bir örnek yapacak olursak bir resmimiz var bunu sola hizalayacağız ve
sağdanda metinler akacak. Bu resim ve paragraflar arasına padding
tanımlamak için genel kardeş seçicisi birebirdir.

{% highlight css %}
img{
	float:left;
}

img ~ p{
	padding-left:110px;
}
{% endhighlight %}

html kodu

{% highlight html %}
<img src="kedi.jpg" width="96" height="96" alt="kedi" />
<p>Kedi (Felis catus),...</p>
<p>2,5 ile 12 kilo ...</p>
<p>Kediler hoş görünüşlü, ..</p>
{% endhighlight %}

Bu seçiciyi ie7’nin seçicisini destekliyor.

CSS3 Yarıdımı İle Js’den Çalınan Roller
---------------------------------------

-   Akordiyon Uygulaması
-   Sekme Uygulaması
-   Slider Uygulamaları
-   Lightbox, modal Uygulamaları
-   Animasyon ve efektler
-   Tooltip
-   Menü Uygulamaları
-   Özel Form Elemanları
-   Diğer Uygulamalar

Akordiyon Uygulaması
--------------------

Akordiyon uygulamaları web sayfalarında biraz yerden kazanmak birazda
görsellik kazandırmak için tercih edilen yapılardır. Mevcutta ve daha
önceleri javascript daha doğrusu jquery ile yapılan bu uygulamaları
artık CSS yardımı ile yapabiliyoruz.

CSS ile yapılan akordiyon menülerde kardeş seçicileri ve :checked Sözde
sınıfı/:target Sözde Seçicisi yardımı ile oluşturuluyor. Gizlenmiş input
alanına tıklandığında kardeş seçicisi le ile ulaşılan içerik
göster-gizle yapılıyor. Araya animasyon koyarak daha görsel sonuçlar
elde edilebiliyor.

Bu işi benzer bir mantık ile :target seçicisi yardımı ile yapabiliyoruz.

-   [http://tympanus.net/codrops/2012/02/21/accordion-with-css3/][]
-   [http://www.red-team-design.com/css3-accordion][]
-   [http://www.hongkiat.com/blog/css-content-accordion/][]
-   [http://css.dzone.com/articles/pure-css3-accordion][]
-   [http://tympanus.net/codrops/2011/10/12/flexible-slide-to-top-accordion/][]
-   [http://tympanus.net/codrops/2012/06/06/image-accordion-with-css3/][]

Sekme Uygulaması
----------------

Yine yer sıkıntısı nedeni ile oluşturulmuş çözümlerden birisi de sekmeli
yapılardır.

CSS ile oluşturulurken yine kardeş seçicileri ve :checked Sözde
sınıfı/:target Sözde Seçicisi yardımı ile oluşturuluyor.

CSS3 sekmeli yapıları gizli radyo butonuun :checked Sözde sınıfı yardımı
ile tıklama özelliği kazandırılmış alana tıklayınca belirli alanların
gözterilmesi mantığı ile yapılmaktadır.

-   [http://css-tricks.com/css3-tabs/][]
-   [http://www.sitepoint.com/css3-tabs-using-target-selector][]
-   [http://tympanus.net/Tutorials/CSS3ContentTabs/][]
-   [http://www.webstuffshare.com/2010/01/updated-pure-css-tab-menu/][]

Slider
------

Şu aralar çok fazla tercih edilen slider uygulamalarını sadece CSS ile
yapabilmek çok süper.

Çalışma mantığı, javascript ile yaptığımız mantık ile aynıdır. float ile
yan yana sıralanmış içerik
overflow:hidden ile sadece seçilen resmi gösteriyoruz. Her tıklamada
margin-left değeri içerik kadar sola doğru çekecek bir değer verilerek
yapılır.

Bir çok şekilde uygulaması olan silder'ın farklı çeşitlerini görmek için
codrops sitesine uğramanızı öneriyorum. Makalede linkleri mevcut.

-   [http://coding.smashingmagazine.com/2012/04/25/pure-css3-cycling-slideshow/][]
-   [http://tympanus.net/codrops/2012/04/30/fluid-css3-slideshow-with-parallax-effect/][]
-   [http://tympanus.net/Tutorials/CSS3SlidingImagePanels/][]
-   [http://tympanus.net/codrops/2012/06/12/css-only-responsive-layout-with-smooth-transitions/][]
-   [http://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/][]
-   [http://tympanus.net/codrops/2011/12/21/slopy-elements-with-css3/][]
-   [http://tympanus.net/codrops/2011/11/21/elastic-image-slideshow-with-thumbnail-preview/][]
-   [http://tympanus.net/Tutorials/CircleNavigationEffect/][]
-   [http://tympanus.net/codrops/2012/03/23/responsive-content-navigator-with-css3/][]
-   [http://www.c5theme.com/addons/responsive-slider/][]
-   [http://csscience.com/responsiveslidercss3/][]

Lightbox, modal
---------------

Site içinde kullanılan resimlerin daha büyüğünü görmek için kullanılan
yapılardır. Sadece resimler değil içerik içinde geçerli. Bir nevi
popup'ın yerini aldı lightbox.

Mantık olarak küçük bir resme tıklayınca büyük resmi göstereceğiz.
:target sözde sınıfı yardımı ile ilgili büyük resmi yakalayıp göstererek
yapılıyor.

Ayrıca animasyon ve transition yardımı ile görsel olarak güzel geçişler
yapabiliyoruz.

-   [http://tympanus.net/codrops/2011/12/26/css3-lightbox/][]
-   [http://www.nealgrosskopf.com/tech/thread.php?pid=75][]
-   [http://alexindigo.github.com/lightbox/#gallery][]
-   [http://www.emanueleferonato.com/2007/08/22/create-a-lightbox-effect-only-with-css-no-javascript-needed/][]
-   [http://www.paulrhayes.com/2011-03/css-modal/][]
-   [http://www.webstuffshare.com/2012/04/create-elegant-modal-window-using-css-scale-transform/][]
-   [http://playground.deaxon.com/css/lightbox/#home][]

Animasyon, Efektler vd.
-----------------------

Daha çok flash ile yapılan animasyon ve efektler, aynı zamanda
javascript ile de bir çok animasyon ve efekt yapabiliyoruz.

CSS3 yardımı ile artık CSS ile de yapabiliyoruz.

Bu konuda CSS3 Animasyon ve CSS3 Transition özellikleri
kullanılmaktadır.

Şu an için flashdaki efekt ve animasyonların hepsi yapılamasa da güzel
bir çok örnek yapılabilmekte.

Animasyona alışık olmayan CSS kod yazarlarını zorlayacak uygulamalar.
Ancak uğraşması zevkli.

-   [http://tympanus.net/codrops/2011/12/07/splash-and-coming-soon-page-effects-with-css3/][]
-   [http://tympanus.net/codrops/2011/10/19/blur-menu-with-css3-transitions/][]
-   [http://tympanus.net/codrops/2012/05/22/creating-an-animated-3d-bouncing-ball-with-css3/][]
-   [http://tympanus.net/codrops/2012/05/14/annotation-overlay-effect-with-css3/][]
-   [http://tympanus.net/codrops/2012/05/21/animated-3d-bar-chart-with-css3/][]
-   [http://tympanus.net/codrops/2012/04/17/rotating-words-with-css-animations/][]
-   [http://tympanus.net/codrops/2012/01/10/animated-web-banners-with-css3/][]
-   [http://tympanus.net/codrops/2012/01/09/filter-functionality-with-css3/][]
-   [http://tympanus.net/codrops/2011/12/12/experiments-with-background-clip-text/][]
-   [http://tympanus.net/codrops/2011/11/09/interactive-html5-typography/][]
-   [http://tympanus.net/codrops/2011/11/07/animated-buttons-with-css3/][]
-   [http://tympanus.net/codrops/2011/11/02/original-hover-effects-with-css3/][]
-   [http://monkeyandcrow.com/blog/css3_splitview/][] (spliteview)

Tooltip
-------

CSS2 ile de yapabildiğimiz tooltip uygulamaları CSS3 ile daha görsel ve
efektli görünüm kazandırabiliyoruz.

:before ve :after Sözde elementleri ve CSS3 Animasyon/ CSS3 Transition
yardımı ile bir çok güzel tooltip yapabiliyoruz.

-   [http://www.red-team-design.com/css3-tooltips][]
-   [http://tympanus.net/codrops/2012/02/01/how-to-create-animated-tooltips-with-css3/][]
-   [http://sixrevisions.com/css/css-only-tooltips/][]

Menü
----

Bir çok menü uygulaması uzun süredir javascript'ten bağımsız olarak
sadece CSS ile yapılmakta.

CSS3'ün yeni özellikleri görsellik ve efektli ve resimsiz çözümler
üretmemizi sağlıyor.

@font-face özelliği ve CSS3 renk geçişi yardımı ile resimsiz güzel
menüler elde edebiliyoruz.

-   [http://tympanus.net/codrops/2011/10/24/creative-css3-animation-menus/][]
-   [http://webdesignerwall.com/tutorials/css3-dropdown-menu][]
-   [http://www.cssplay.co.uk/menus/cssplay-radial.html][]
-   [http://thecodeplayer.com/walkthrough/make-a-stopwatch-using-css3-without-images-or-javascript][]
-   [http://acidmartin.wordpress.com/2011/09/26/css3-treevew-no-javascript/][]
-   [http://www.htmldrive.net/items/show/437/CSS3-only-horizontal-drop-line-tab-menu][]
-   [http://cssdeck.com/item/511/soothing-css3-dropdown-animation][]
-   [http://tutorialzine.com/2010/06/css3-minimalistic-navigation-menu/][]
-   [http://www.webstuffshare.com/2010/04/nice-menu-css-animation-jquery-animate/][]



Özel Form Elemanları
--------------------

İşletim sisteminin standart form elemanlarından sıkılmış bir çok
kullanıcı gibi tasarımcılarda
özel form elemanları tasarlamaktadır. Arayüz geliştiricileri zorlayan
bu konuda yardımımıza javascript yetişiyordu.

Artık CSS3 :checked Sözde sınıfı yardımı ile güzel radyo butonları ve
işaret kutuları oluşturabiliyoruz.

-   [http://www.thecssninja.com/css/custom-inputs-using-css][]
-   [http://www.wufoo.com/2011/06/13/custom-radio-buttons-and-checkboxes/][]
-   [http://proto.io/freebies/onoff/][]

Diğer Uygulamalar
-----------------

Bunun dışında yine kardeş seçicileri, :checked, :target sözde seçileri,
CSS3 Animasyon, CS3 Transtion özelliklerini kullanarak bir çok farklı
uygulama yapılmaktadır. Benim gördüğüm

-   [http://cssdeck.com/item/269/css-news-ticker][] - haber barı
-   [http://cssdeck.com/item/513/colourful-css-loader][] - loading
-   [http://www.hongkiat.com/blog/css3-animation-advanced-marquee/][]
    (marquee)
-   [http://www.webstuffshare.com/2012/04/how-to-create-animated-list-view-using-css3-only/][]
    (liste görünümü)
-   [http://thecodeplayer.com/walkthrough/make-a-stopwatch-using-css3-without-images-or-javascript][]
    (kronometre)
-   [http://www.ryancollins.me/?p=1041][] (gizle -göster)

Kaynaklar
---------

-   [http://speckyboy.com/2010/04/26/30-pure-css-alternatives-to-javascript/][]
-   [http://css-tricks.com/the-checkbox-hack/][]
-   [http://www.inserthtml.com/2012/04/css-click-states/][]
-   [http://designshack.net/articles/css/using-checkboxes-to-toggle-css-and-create-click-events/][]
-   [http://calebogden.com/css-target/][]
-   [http://www.bilisimdergi.com/3-Katman-Mimarisi-ve-JavaScript-14-5.html][]
-   [http://cscie12.dce.harvard.edu/lecture_notes/2010/20100324/handout.html][]


  [jstanbul etkinliğinde]: http://jstanbul.org/2012/
  [sunumun linki.]: https://docs.google.com/presentation/d/13cNTBiY4ewyRpCwmKD_CyKgMs3z4md27YH-ZcVtubcA/edit
  [Modern Web Tasarımı]: http://www.hasanyalcin.com/e-kitap-modern-web-tasarimi/
  [50]: /images/3katman.gif
  [1]: /images/3kume.gif
  [2]: /images/target_secisi.gif
  [3]: /images/hiyerarsi03.gif
  [4]: /images/genel_kardes_secisi.gif
  [http://tympanus.net/codrops/2012/02/21/accordion-with-css3/]: http://tympanus.net/codrops/2012/02/21/accordion-with-css3/
  [http://www.red-team-design.com/css3-accordion]: http://www.red-team-design.com/css3-accordion
  [http://www.hongkiat.com/blog/css-content-accordion/]: http://www.hongkiat.com/blog/css-content-accordion/
  [http://css.dzone.com/articles/pure-css3-accordion]: http://css.dzone.com/articles/pure-css3-accordion
  [http://tympanus.net/codrops/2011/10/12/flexible-slide-to-top-accordion/]: http://tympanus.net/codrops/2011/10/12/flexible-slide-to-top-accordion/
  [http://tympanus.net/codrops/2012/06/06/image-accordion-with-css3/]: http://tympanus.net/codrops/2012/06/06/image-accordion-with-css3/
  [http://css-tricks.com/css3-tabs/]: http://css-tricks.com/css3-tabs/
  [http://www.sitepoint.com/css3-tabs-using-target-selector]: http://www.sitepoint.com/css3-tabs-using-target-selector
  [http://tympanus.net/Tutorials/CSS3ContentTabs/]: http://tympanus.net/Tutorials/CSS3ContentTabs/
  [http://www.webstuffshare.com/2010/01/updated-pure-css-tab-menu/]: http://www.webstuffshare.com/2010/01/updated-pure-css-tab-menu/
  [http://coding.smashingmagazine.com/2012/04/25/pure-css3-cycling-slideshow/]: http://coding.smashingmagazine.com/2012/04/25/pure-css3-cycling-slideshow/
  [http://tympanus.net/codrops/2012/04/30/fluid-css3-slideshow-with-parallax-effect/]:http://tympanus.net/codrops/2012/04/30/fluid-css3-slideshow-with-parallax-effect/
  [http://tympanus.net/Tutorials/CSS3SlidingImagePanels/]: http://tympanus.net/Tutorials/CSS3SlidingImagePanels/
  [http://tympanus.net/codrops/2012/06/12/css-only-responsive-layout-with-smooth-transitions/]: http://tympanus.net/codrops/2012/06/12/css-only-responsive-layout-with-smooth-transitions/
  [http://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/]: http://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/
  [http://tympanus.net/codrops/2011/12/21/slopy-elements-with-css3/]: http://tympanus.net/codrops/2011/12/21/slopy-elements-with-css3/
  [http://tympanus.net/codrops/2011/11/21/elastic-image-slideshow-with-thumbnail-preview/]: http://tympanus.net/codrops/2011/11/21/elastic-image-slideshow-with-thumbnail-preview/
  [http://tympanus.net/Tutorials/CircleNavigationEffect/]: http://tympanus.net/Tutorials/CircleNavigationEffect/
  [http://tympanus.net/codrops/2012/03/23/responsive-content-navigator-with-css3/]: http://tympanus.net/codrops/2012/03/23/responsive-content-navigator-with-css3/
  [http://www.c5theme.com/addons/responsive-slider/]: http://www.c5theme.com/addons/responsive-slider/
  [http://csscience.com/responsiveslidercss3/]: http://csscience.com/responsiveslidercss3/
  [http://tympanus.net/codrops/2011/12/26/css3-lightbox/]: http://tympanus.net/codrops/2011/12/26/css3-lightbox/
  [http://www.nealgrosskopf.com/tech/thread.php?pid=75]: http://www.nealgrosskopf.com/tech/thread.php?pid=75
  [http://alexindigo.github.com/lightbox/#gallery]: http://alexindigo.github.com/lightbox/#gallery
  [http://www.emanueleferonato.com/2007/08/22/create-a-lightbox-effect-only-with-css-no-javascript-needed/]: http://www.emanueleferonato.com/2007/08/22/create-a-lightbox-effect-only-with-css-no-javascript-needed/
  [http://www.paulrhayes.com/2011-03/css-modal/]: http://www.paulrhayes.com/2011-03/css-modal/
  [http://www.webstuffshare.com/2012/04/create-elegant-modal-window-using-css-scale-transform/]: http://www.webstuffshare.com/2012/04/create-elegant-modal-window-using-css-scale-transform/
  [http://playground.deaxon.com/css/lightbox/#home]: http://playground.deaxon.com/css/lightbox/#home
  [http://tympanus.net/codrops/2011/12/07/splash-and-coming-soon-page-effects-with-css3/]: http://tympanus.net/codrops/2011/12/07/splash-and-coming-soon-page-effects-with-css3/
  [http://tympanus.net/codrops/2011/10/19/blur-menu-with-css3-transitions/]: http://tympanus.net/codrops/2011/10/19/blur-menu-with-css3-transitions/
  [http://tympanus.net/codrops/2012/05/22/creating-an-animated-3d-bouncing-ball-with-css3/]: http://tympanus.net/codrops/2012/05/22/creating-an-animated-3d-bouncing-ball-with-css3/
  [http://tympanus.net/codrops/2012/05/14/annotation-overlay-effect-with-css3/]: http://tympanus.net/codrops/2012/05/14/annotation-overlay-effect-with-css3/
  [http://tympanus.net/codrops/2012/05/21/animated-3d-bar-chart-with-css3/]: http://tympanus.net/codrops/2012/05/21/animated-3d-bar-chart-with-css3/
  [http://tympanus.net/codrops/2012/04/17/rotating-words-with-css-animations/]: http://tympanus.net/codrops/2012/04/17/rotating-words-with-css-animations/
  [http://tympanus.net/codrops/2012/01/10/animated-web-banners-with-css3/]: http://tympanus.net/codrops/2012/01/10/animated-web-banners-with-css3/
  [http://tympanus.net/codrops/2012/01/09/filter-functionality-with-css3/]: http://tympanus.net/codrops/2012/01/09/filter-functionality-with-css3/
  [http://tympanus.net/codrops/2011/12/12/experiments-with-background-clip-text/]: http://tympanus.net/codrops/2011/12/12/experiments-with-background-clip-text/
  [http://tympanus.net/codrops/2011/11/09/interactive-html5-typography/]: http://tympanus.net/codrops/2011/11/09/interactive-html5-typography/
  [http://tympanus.net/codrops/2011/11/07/animated-buttons-with-css3/]: http://tympanus.net/codrops/2011/11/07/animated-buttons-with-css3/
  [http://tympanus.net/codrops/2011/11/02/original-hover-effects-with-css3/]: http://tympanus.net/codrops/2011/11/02/original-hover-effects-with-css3/
  [http://monkeyandcrow.com/blog/css3_splitview/]: http://monkeyandcrow.com/blog/css3_splitview/
  [http://www.red-team-design.com/css3-tooltips]: http://www.red-team-design.com/css3-tooltips
  [http://tympanus.net/codrops/2012/02/01/how-to-create-animated-tooltips-with-css3/]: http://tympanus.net/codrops/2012/02/01/how-to-create-animated-tooltips-with-css3/
  [http://sixrevisions.com/css/css-only-tooltips/]: http://sixrevisions.com/css/css-only-tooltips/
  [http://tympanus.net/codrops/2011/10/24/creative-css3-animation-menus/]: http://tympanus.net/codrops/2011/10/24/creative-css3-animation-menus/
  [http://webdesignerwall.com/tutorials/css3-dropdown-menu]: http://webdesignerwall.com/tutorials/css3-dropdown-menu
  [http://www.cssplay.co.uk/menus/cssplay-radial.html]: http://www.cssplay.co.uk/menus/cssplay-radial.html
  [http://thecodeplayer.com/walkthrough/make-a-stopwatch-using-css3-without-images-or-javascript]: http://thecodeplayer.com/walkthrough/make-a-stopwatch-using-css3-without-images-or-javascript
  [http://acidmartin.wordpress.com/2011/09/26/css3-treevew-no-javascript/]: http://acidmartin.wordpress.com/2011/09/26/css3-treevew-no-javascript/
  [http://www.htmldrive.net/items/show/437/CSS3-only-horizontal-drop-line-tab-menu]: http://www.htmldrive.net/items/show/437/CSS3-only-horizontal-drop-line-tab-menu
  [http://cssdeck.com/item/511/soothing-css3-dropdown-animation]: http://cssdeck.com/item/511/soothing-css3-dropdown-animation
  [http://tutorialzine.com/2010/06/css3-minimalistic-navigation-menu/]: http://tutorialzine.com/2010/06/css3-minimalistic-navigation-menu/
  [http://www.webstuffshare.com/2010/04/nice-menu-css-animation-jquery-animate/]: http://www.webstuffshare.com/2010/04/nice-menu-css-animation-jquery-animate/
  [http://www.thecssninja.com/css/custom-inputs-using-css]: http://www.thecssninja.com/css/custom-inputs-using-css
  [http://www.wufoo.com/2011/06/13/custom-radio-buttons-and-checkboxes/]: http://www.wufoo.com/2011/06/13/custom-radio-buttons-and-checkboxes/
  [http://proto.io/freebies/onoff/]: http://proto.io/freebies/onoff/
  [http://cssdeck.com/item/269/css-news-ticker]: http://cssdeck.com/item/269/css-news-ticker
  [http://cssdeck.com/item/513/colourful-css-loader]: http://cssdeck.com/item/513/colourful-css-loader
  [http://www.hongkiat.com/blog/css3-animation-advanced-marquee/]: http://www.hongkiat.com/blog/css3-animation-advanced-marquee/
  [http://www.webstuffshare.com/2012/04/how-to-create-animated-list-view-using-css3-only/]: http://www.webstuffshare.com/2012/04/how-to-create-animated-list-view-using-css3-only/
  [http://www.ryancollins.me/?p=1041]: http://www.ryancollins.me/?p=1041
  [http://speckyboy.com/2010/04/26/30-pure-css-alternatives-to-javascript/]: http://speckyboy.com/2010/04/26/30-pure-css-alternatives-to-javascript/
  [http://css-tricks.com/the-checkbox-hack/]: http://css-tricks.com/the-checkbox-hack/
  [http://www.inserthtml.com/2012/04/css-click-states/]: http://www.inserthtml.com/2012/04/css-click-states/
  [http://designshack.net/articles/css/using-checkboxes-to-toggle-css-and-create-click-events/]: http://designshack.net/articles/css/using-checkboxes-to-toggle-css-and-create-click-events/
  [http://calebogden.com/css-target/]: http://calebogden.com/css-target/
  [http://www.bilisimdergi.com/3-Katman-Mimarisi-ve-JavaScript-14-5.html]: http://www.bilisimdergi.com/3-Katman-Mimarisi-ve-JavaScript-14-5.html
  [http://cscie12.dce.harvard.edu/lecture_notes/2010/20100324/handout.html]: http://cscie12.dce.harvard.edu/lecture_notes/2010/20100324/handout.html
