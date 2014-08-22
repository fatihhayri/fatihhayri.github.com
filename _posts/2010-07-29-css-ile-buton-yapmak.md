---
layout: post
title: CSS ile buton yapmak
Date: 2010-07-29 21:53
Category: CSS, XHTML
tags: border-radius, box-shadow, buton, css3, oval-buton, renk geçişi, sprite, text-shadow
---

Butonlar web sitelerinin oluşturan önemli öğelerden biridir. Butonlar;
formlardaki eylemin son noktasıdır veya bir eylemi çağırmak için
kullanılan bir öğedir. Butonlar bir bağlantı çeşidi gibi düşünülsede
aslında bağlantılardan farklı yapılardır. Bağlantılar site içinde
dolaşmayı sağlayan yapılardır(örneğin menü gibi), butonlar ise bir
eylemi gerçekleştirmek için kullanılan bir öğedir.(örnek: formun gönder
butonu)

Butonların önemine binaen her yönü ile düşünülüp karar verilmesi gereken
öğelerdir. Boyutu, konumu, halleri, görünüm gibi bir çok faktör
düşünülerek tasarlanır ve uygulamaya geçirilir. Ben burada tasarımsal
kısmına değinmeden kodlama kısmını ilgilendiren bölümlerine değinmeye
çalışacağım.

## Basit Butonlar

<button\> ve <input type="button" /\> html elemanları w3c tarafından
standartlaştırılmış buton elemanlarıdır, bu elemanlar butonların ne
kadar önemli öğeler olduğunun göstergesidir. 

Her ne kadar bu etiketler ile standartlaştırılsa da biz bu etiketlere
bağlı kalmak zorunda değiliz. Genelde butonlar <a href=""\>Gönder</a\>
şeklinde kullanırız.

<button\> ve <input type="button" /\> kullanımlarında html bizim için
bir buton görünüm oluşturur, ancak burada şöyle bir sorun varki farklı
tarayıcı ve işletim sistemlerinde farklı farklı göründüğü için css ile
ortak bir kod yazmak genelde tercih edilir. 

![][100]

**Butonların Halleri**

Butonların kullanıcı hareketine göre çeşitli halleri vardır. Aktif
buton, fare üzerine geldiğindeki hali(:hover), odaklanma durumundaki
hali(:focus) olmak üzere 3 hali vardır. İyi bir tasarım için butonların
tüm hallerini kullanıcıya hissettirecek ufak farklılıklar tasarımsal
olarak hazırlamalıdır.

**:active** Butonun aktif hali
**:hover** Butonun fare üzerine geldiğindeki hali
**:focus** Buton üzerine odaklanmış hali

Basit butona bir örnek yapalım;

[CSS ile Erişilebilir Formlar Yapmak – I][] kullandığım butonu örnek
olarak alabiliriz basit butonlara

HTML kodu

{% highlight html %}
<input type="submit" class="gonder" value="Gönder" />
{% endhighlight %}

CSS kodu

{% highlight css %}
input.gonder{
    color: #224059;
    background-color: #b5c9e2;
    border-top: 2px #cce3ff solid;
    border-left: 2px #cce3ff solid;
    border-bottom: 2px #31557f solid;
    border-right: 2px #31557f solid;
    font:bold 12px Arial, Helvetica, sans-serif;
}
{% endhighlight %}

![][1]

<input type="submit" /\> yerine genelde <button\> elemanını tercih ediyorum. Yukarıdaki örnekte olduğu gibi <input type="submit" /\> kullanımıda doğrudur, ancak form elemanlarında bir çok <input\> olduğu
zaman butona erişmek zor oluyor ek olarak bir sınıf tanımlamak gerekiyor, <button\> tanımına ise daha kolay erişebiliyoruz. 

**3 boyutlu buton oluşturmak**

Bir iki ufak nüansla butonlarımıza 3 boyutlu bir görünüm
kazandırabiliriz. Buradaki örneğimizde biz bunu bir bağlantı(<a\>) ve
içine <span\> elemanı ekleyerek sağlayacağız. Üst ve sol kenar
çizgileri açık renkli alt ve sağ kenar çizgileri daha kapalı renkli
atamalar yaparız. Ayrıca bağlantı içindeki <span\> etiketinin alt ve
sağ kenar çizgilerinede daha kapalı renkli bir atama yaparak 3 boyutlu
bir buton elde ederiz. Fare üzerinde geldiğinde kenar çizgilerine
atadığımız renk değerlerini karşılıklı olarak değiştirerek daha bir
efektli görünüm elde ederiz.

HTML Kodu

{% highlight html %}
 <a class="buton" href="#">
	<span>3 boyutlu buton</span>
</a>
{% endhighlight %}

CSS kodumuzu yukarıdaki belirttiğimiz gib yazalım

{% highlight css %}
a.buton{
    float:left;
    font-size:14px;
    font-weight:bold;
    border-top:1px solid #999;
    border-left:1px solid #999;
    border-right:1px solid #333;
    border-bottom:1px solid #333;
    color:#333;
    width:auto;
    text-decoration:none
}

a.buton:hover{
    border-top:1px solid #333;
    border-left:1px solid #333;
    border-right:1px solid #999;
    border-bottom:1px solid #999;
    color:#333;
}

a.buton span{
    background:#d4d0c8 url(buton_ard.gif) repeat-x;
    float:left;
    line-height:24px;
    height:24px;
    padding:0 10px;
    border-right:1px solid #777;
    border-bottom:1px solid #777;
}

a.buton:hover span{
    border:none;
    border-top:1px solid #777;
    border-left:1px solid #777;
    background:#d4d0c8 url(buton_fare_ard.gif) repeat-x;
    cursor:pointer;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][2]

## Görselliği Arttırılmış Esnek Yapılı Butonlar

Butonların önemine yukarıda değindik, bu öneminden dolayı bir çok
tasarımcı ve arayüz geliştirici butonları nasıl daha hoş ve çekici
yapacağı konusunda çalışmış ve güzel örnekler çıkarmışlardır. 

![][3]

Yukarıdaki görünen butonun kodunu yazalım. Butonu kodlarken dikkat
edeceğimiz bir kaç husus var;

-   Buton farklı alanlarda kullanılabileceği için genişleyebilir
    olmalıdır
-   Kullanışlı olması için az kodlama ile sonuca gidilmelidir
-   Hızlı yorumlandırılmalıdır. Bunun için tek resimden oluşturacağız
    örneğimizi
-   Belli başlı tarayıcılarda çalışmalıdır. (ff, chrome, safari, opera,
    ie6, ie7, ie8)
-   Javascript gerektirmemelidir

![][4]

Yukarıda görüldüğü gibi resmimizi iki kısma böleceğiz. Sol kısmını bir
elemana(muhtemlen <a\>), sağ kısmını başka bir elemana(fazladan bir
elman olarak <span\>) ekleyeceğiz. Bir elemana birden fazla background
resmi atayamadığımız için bu yöntemi uyguluyoruz.

Resmin sol kısmını butonun muhtemelen yüksek genişliğini düşünerek
uzatmalıyız. Böylece buton metin genişledikçe backgorund resmi
uzayacaktır ve görünüm bozulmadan standart buton görünümü sağlanmış
olacaktır.

![][5]

Yukarıdaki resimde bölümleri göstermek için rakamlar gösterilmiştir.
Normalde resmimiz aşağıdaki gibi olacaktır.

![][6]

Yukarıdaki resmi eskiden iki farklı resim olarak hazırlar ve ilgili
elemanların background resmi olarak eklerdik, ancak sprite tekniği ile
bu resmi tek bir resim olarak kaydediyoruz ve background-position
özelliği yardımı ile ilgili elemanın background'unda ilgili background
resmini gösteriyoruz. Kodu yazarsak daha iyi anlayacaksınız.

HTML kodu;

{% highlight html %}
<a href="#"><span>Örnek Buton Metni</span></a>
{% endhighlight %}

CSS Kodu

{% highlight css %}
a{
	display:block; 
	float:left; 
	width:auto; 
	background:url(cancanli_butonlar_normal.gif) 0 0 no-repeat; 
	text-decoration:none; 
	font-size:14px; 
	font-weight:bold
}

a span{
	display:block; 
	float:left; 
	cursor:pointer; 
	background:url(cancanli_butonlar_normal.gif) right -36px no-repeat; 
	height:28px; 
	padding:0 20px; 
	line-height:28px; 
	color:#363636
}
{% endhighlight %}


a span için eklenen

{% highlight css %}
float:left; 
cursor:pointer;
{% endhighlight %}

özellikleri ie6'daki genişlik sorununu gidermek için eklenmiştir.

Bu örneğe fare üzerine geldiğindeki halinide ekleyelim

{% highlight css %}
/* fare geldi kac */
a:hover{
	background:url(cancanli_butonlar_ard.gif) 0 -68px no-repeat;
}

a:hover span{
	background:url(cancanli_butonlar_ard.gif) right -100px no-repeat; 
	color:#706e6e
}
{% endhighlight %}

Son olarakta odaklanma halini ekleyerek bu örneği bitirelim.

{% highlight css %}
/* buraya odaklan odaklan */
a:focus{
	background:url(cancanli_butonlar_ard.gif) 0 -134px no-repeat;
}

a:focus span{
	background:url(cancanli_butonlar_ard.gif) right -164px no-repeat; 
	color:#363636
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][7]

![][8]

## CSS3 ile Buton Yapmak

CSS3'ün gelişmiş özellikleri sayesinde resimlere ihtiyaç duymadan
janjanlı güzel butonlar geliştirebiliyoruz. Ayrıca bu işi çok kolay bir
şekilde bir iki satır kod ile yapabilme imkanı sağlıyor CSS3 bize. 

HTML kodu

{% highlight html %}
<a href="#" class="buton">CSS3 Buton</a>
{% endhighlight %}

Evet html kodummuz bu kadar.

CSS Kodlarını yazalım

{% highlight css %}
a.buton{
    background:#2981E4;
    padding:5px 10px;
    text-decoration:none;
    color:#fff;
    font:bold 14px Arial, Helvetica, sans-serif;
}
{% endhighlight %}

Şimdide CSS3 özellikleri ile bu örneğimizi geliştirelim.

İlk olarak köşeleri yuvarlatıyoruz.

{% highlight css %}
a.buton{
    background:#2981E4;
    padding:5px 10px;
    text-decoration:none;
    color:#fff;
    font:bold 14px Arial, Helvetica, sans-serif;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    border-radius: 7px;
}
{% endhighlight %}

Gölge verelim

{% highlight css %}
a.buton{
    background:#2981E4;
    padding:5px 10px;
    text-decoration:none;
    color:#fff;
    font:bold 20px Arial, Helvetica, sans-serif;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    border-radius: 7px;
    box-shadow: 3px 3px 4px #000;
    -moz-box-shadow: 0 1px 2px #000;
    -webkit-box-shadow: 3px 3px 4px #000;
}
{% endhighlight %}

Metine gölge verelim

{% highlight css %}
a.buton{
    background:#2981E4;
    padding:5px 10px;
    text-decoration:none;
    color:#fff;
    font:bold 20px Arial, Helvetica, sans-serif;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    border-radius: 7px;
    box-shadow: 0 1px 2px #000;
    -moz-box-shadow: 0 1px 2px #000;
    -webkit-box-shadow: 0 1px 2px #000;
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
}
{% endhighlight %}

![][9]

Şimdide fare üzerine geldiğindeki halinide ekleyelim.

{% highlight css %}
a.buton:hover{
    background-color:#006699;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][10]

**İkinci bir örnek yapalım.**

Bu sefer CSS3'ün renk geçişi(gradients) özelliğindende yararlanalım.

{% highlight css %}
a.buton{
    background:#d21b00;
    background: -moz-linear-gradient(top, #d21b00, #8e0700);
    background: -webkit-gradient(linear, left top, left bottom, from(#d21b00), to(#8e0700));
    padding:20px 25px;
    text-decoration:none;
    color:#fff;
    font:bold 36px Arial, Helvetica, sans-serif;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    border-radius: 7px;
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.75);
    border:5px solid #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
}

a.buton:hover{
    background: -moz-linear-gradient(top, #8e0700, #d21b00);
    background: -webkit-gradient(linear, left top, left bottom, from(#8e0700), to(#d21b00));
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.75);
}
{% endhighlight %}


Örneği görmek için [tıklayınız.][11]

![][12]

CSS3 özellikleri yardımı ile resim kullanmadan bir çok örnek
yapabiliriz. 
[http://speckyboy.com/2010/02/15/20-css3-tutorials-and-techiques-for-creating-buttons/][]
sitesindeki örneklere bir göz atın.

Ayrıca CSS3 ile çevrimiçi buton geliştirme araçları var incelemeye değer
siteler.

## Sonuç

Baştada bahsettiğimiz gibi butonlar web sitelerinin önemli parçalarından
biridir. Yerinde ve güzel kullanılmaları halinde web sitelerine farklı
bir görsellik ve işlevsellik katacaklardır. Bir çok sitede bir çok buton
tasarımları bulunmaktadır, bu butonları gördükçe ne kadar çeşitli
butonlar olabileceğini görüyoruz.
[http://www.smileycat.com/design_elements/buttons/#002024][]
sitesindeki örnekler dikkat çekici.

CSS3'ün yaygınlaşması butonları daha esnek hale getirecektir. Daha kolay
düzenlenebilir ve esnek bir yapı kazandıracaktır. CSS3 özellikleri yavaş
yavaş web programcıların hayatına girmektedir. Ümit ediyoruz ki yakın
bir zamanda bu uygulamaları tüm tarayıcılar destekler ve bizlerde
projelerimizde rahatça kullanabiliriz.

Son olarak buton dünyası çok büyük ben burada sizlere kıyısından
köşesinden bahsetmeye çalıştı isemde çok az bir kısmını anlatabildim,
kaynaklar kısmındaki linklerin her birinde değerli çalışmalar
bulunmaktadır aşağıdaki bağlantıları incelemenizi önemle rica ediyorum.

## Kaynaklar

-   [http://www.smashingmagazine.com/2009/11/18/designing-css-buttons-techniques-and-resources/][]
-   [http://www.monc.se/kitchen/59/scalable-css-buttons-using-png-and-background-colors][](iyi)
-   [http://www.smashingmagazine.com/2009/06/03/9-crucial-ui-features-of-social-media-and-networking-sites/][] (genel anlamı)
-   [http://www.oscaralexander.com/tutorials/how-to-make-sexy-buttons-with-css.html][]
-   [http://www.dynamicdrive.com/style/csslibrary/item/bold_css_buttons/][]
-   [http://particletree.com/features/rediscovering-the-button-element/][] (button elemanı hakkında)
-   [http://www.456bereastreet.com/archive/200705/creating_bulletproof_graphic_link_buttons_with_css/][] (güzel)
-   [http://www.filamentgroup.com/lab/styling_the_button_element_with_sliding_doors/][]
-   [http://blog.anomalyinnovations.com/2010/03/creating-a-realistic-looking-button-with-css3/][]
-   [http://net.tutsplus.com/tutorials/html-css-techniques/build-kick-ass-practical-css3-buttons/][]
-   [http://www.smashingmagazine.com/2006/11/03/design-patterns-download-buttons/][]
-   [http://codecanyon.net/item/fancy-2-line-css-buttons/109049][]
-   [http://codecanyon.net/item/css3-buttons/109193][]
-   [http://vandelaydesign.com/blog/galleries/button-design-showcase/][]
-   [http://www.leemunroe.com/call-to-action-buttons/][]
-   [http://www.uxbooth.com/blog/good-call-to-action-buttons/][] (tasarımda dahil)
-   [http://www.smashingmagazine.com/2009/10/13/call-to-action-buttons-examples-and-best-practices/][]
-   [http://www.smileycat.com/design_elements/buttons/#002024][]
-   [http://www.tripwiremagazine.com/design/css-techniques/24-essential-submit-button-enhancements.html][]
-   [http://www.vanseodesign.com/css/css-navigation-buttons/][]
-   [http://articles.techrepublic.com.com/5100-10878_11-5323375.html][]
-   [http://www.thesitewizard.com/css/3d-buttons.shtml][]
-   [http://www.builderau.com.au/program/css/soa/Designing-3D-buttons-with-pure-CSS/0,339028392,339131100,00.htm][]
-   [http://cssglobe.com/post/1614/4-uber-cool-css-techniques-for-links][]
-   [http://speckyboy.com/2009/05/27/22-css-button-styling-tutorials-and-techniques/][]
-   [http://www.dynamicdrive.com/style/csslibrary/item/vista_aero_buttons_menu/][]
-   [http://www.cdsnettr.com/post/2008/09/Top-10-CSS-Button-Tutorial.aspx][]
-   [http://www.fatihhayrioglu.com/css-ile-erisilebilir-formlar-yapmak-ii/][]
-   [http://www.fatihhayrioglu.com/css-ile-sekmelitab-menu-yapimi/][]
-   [http://monc.se/kitchen/59/scalable-css-buttons-using-png-and-background-colors][]
-   [http://blog.typekit.com/2011/02/10/type-study-an-all-css-button/][]

  [100]: /images/csss_buton_01.gif
  [CSS ile Erişilebilir Formlar Yapmak – I]: http://www.fatihhayrioglu.com/css-ile-erisilebilir-formlar-yapmak-i/
  [1]: /images/csss_buton_02.gif
  [tıklayınız.]: /dokumanlar/buton_olusturmak/3b_buton.html
  [2]: /images/csss_buton_03.gif
  [3]: /images/csss_buton_04.gif
  [4]: /images/csss_buton_05.gif
  [5]: /images/csss_buton_06.gif
  [6]: /images/csss_buton_07.gif
  [7]: /dokumanlar/buton_olusturmak/cancali_buton_hover_focus.html
  [8]: /images/csss_buton_08.gif
  [9]: /images/csss_buton_09.gif
  [10]: /dokumanlar/buton_olusturmak/css3_butonlar1.html
  [11]: /dokumanlar/buton_olusturmak/css3_butonlar2.html
  [12]: /images/csss_buton_10.gif
  [http://speckyboy.com/2010/02/15/20-css3-tutorials-and-techiques-for-creating-buttons/]: http://speckyboy.com/2010/02/15/20-css3-tutorials-and-techiques-for-creating-buttons/
  [http://www.smileycat.com/design_elements/buttons/#002024]: http://www.smileycat.com/design_elements/buttons/#002024
  [http://www.smashingmagazine.com/2009/11/18/designing-css-buttons-techniques-and-resources/]: http://www.smashingmagazine.com/2009/11/18/designing-css-buttons-techniques-and-resources/
  [http://www.monc.se/kitchen/59/scalable-css-buttons-using-png-and-background-colors]: http://www.monc.se/kitchen/59/scalable-css-buttons-using-png-and-background-colors
  [http://www.smashingmagazine.com/2009/06/03/9-crucial-ui-features-of-social-media-and-networking-sites/]: http://www.smashingmagazine.com/2009/06/03/9-crucial-ui-features-of-social-media-and-networking-sites/
  [http://www.oscaralexander.com/tutorials/how-to-make-sexy-buttons-with-css.html]: http://www.oscaralexander.com/tutorials/how-to-make-sexy-buttons-with-css.html
  [http://www.dynamicdrive.com/style/csslibrary/item/bold_css_buttons/]: http://www.dynamicdrive.com/style/csslibrary/item/bold_css_buttons/
  [http://particletree.com/features/rediscovering-the-button-element/]: http://particletree.com/features/rediscovering-the-button-element/
  [http://www.456bereastreet.com/archive/200705/creating_bulletproof_graphic_link_buttons_with_css/]: http://www.456bereastreet.com/archive/200705/creating_bulletproof_graphic_link_buttons_with_css/
  [http://www.filamentgroup.com/lab/styling_the_button_element_with_sliding_doors/]: http://www.filamentgroup.com/lab/styling_the_button_element_with_sliding_doors/
  [http://blog.anomalyinnovations.com/2010/03/creating-a-realistic-looking-button-with-css3/]: http://blog.anomalyinnovations.com/2010/03/creating-a-realistic-looking-button-with-css3/
  [http://net.tutsplus.com/tutorials/html-css-techniques/build-kick-ass-practical-css3-buttons/]: http://net.tutsplus.com/tutorials/html-css-techniques/build-kick-ass-practical-css3-buttons/
  [http://www.smashingmagazine.com/2006/11/03/design-patterns-download-buttons/]: http://www.smashingmagazine.com/2006/11/03/design-patterns-download-buttons/
  [http://codecanyon.net/item/fancy-2-line-css-buttons/109049]: http://codecanyon.net/item/fancy-2-line-css-buttons/109049
  [http://codecanyon.net/item/css3-buttons/109193]: http://codecanyon.net/item/css3-buttons/109193
  [http://vandelaydesign.com/blog/galleries/button-design-showcase/]: http://vandelaydesign.com/blog/galleries/button-design-showcase/
  [http://www.leemunroe.com/call-to-action-buttons/]: http://www.leemunroe.com/call-to-action-buttons/
  [http://www.uxbooth.com/blog/good-call-to-action-buttons/]: http://www.uxbooth.com/blog/good-call-to-action-buttons/
  [http://www.smashingmagazine.com/2009/10/13/call-to-action-buttons-examples-and-best-practices/]: http://www.smashingmagazine.com/2009/10/13/call-to-action-buttons-examples-and-best-practices/
  [http://www.tripwiremagazine.com/design/css-techniques/24-essential-submit-button-enhancements.html]: http://www.tripwiremagazine.com/design/css-techniques/24-essential-submit-button-enhancements.html
  [http://www.vanseodesign.com/css/css-navigation-buttons/]: http://www.vanseodesign.com/css/css-navigation-buttons/
  [http://articles.techrepublic.com.com/5100-10878_11-5323375.html]: http://articles.techrepublic.com.com/5100-10878_11-5323375.html
  [http://www.thesitewizard.com/css/3d-buttons.shtml]: http://www.thesitewizard.com/css/3d-buttons.shtml
  [http://www.builderau.com.au/program/css/soa/Designing-3D-buttons-with-pure-CSS/0,339028392,339131100,00.htm]: http://www.builderau.com.au/program/css/soa/Designing-3D-buttons-with-pure-CSS/0,339028392,339131100,00.htm
  [http://cssglobe.com/post/1614/4-uber-cool-css-techniques-for-links]: http://cssglobe.com/post/1614/4-uber-cool-css-techniques-for-links
  [http://speckyboy.com/2009/05/27/22-css-button-styling-tutorials-and-techniques/]: http://speckyboy.com/2009/05/27/22-css-button-styling-tutorials-and-techniques/
  [http://www.dynamicdrive.com/style/csslibrary/item/vista_aero_buttons_menu/]: http://www.dynamicdrive.com/style/csslibrary/item/vista_aero_buttons_menu/
  [http://www.cdsnettr.com/post/2008/09/Top-10-CSS-Button-Tutorial.aspx]: http://www.cdsnettr.com/post/2008/09/Top-10-CSS-Button-Tutorial.aspx
  [http://www.fatihhayrioglu.com/css-ile-erisilebilir-formlar-yapmak-ii/]: http://www.fatihhayrioglu.com/css-ile-erisilebilir-formlar-yapmak-ii/
  [http://www.fatihhayrioglu.com/css-ile-sekmelitab-menu-yapimi/]: http://www.fatihhayrioglu.com/css-ile-sekmelitab-menu-yapimi/
  [http://monc.se/kitchen/59/scalable-css-buttons-using-png-and-background-colors]: http://monc.se/kitchen/59/scalable-css-buttons-using-png-and-background-colors
  [http://blog.typekit.com/2011/02/10/type-study-an-all-css-button/]: http://blog.typekit.com/2011/02/10/type-study-an-all-css-button/
