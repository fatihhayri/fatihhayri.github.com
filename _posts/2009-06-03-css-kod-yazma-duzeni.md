---
layout: post
title: CSS Kod Yazma Düzeni
Date: 2009-06-03 16:08
Category: CSS
tags: CSS, CSS kodlarını optimize etmek, css-kodlama-düzeni, Dreamweaver, optimize, standart
---

CSS yazarken bazı kurallar koyarsak ve bu kurallara göre kodumuzu
yazarsak bir çok konuda yararını göreceğiz.

-   Daha hızlı kod yazma: Belli bir standardınız oluşturunca kod yazmak
    daha hızlı olacaktır.
-   Birden fazla kişinin çalıştığı durumlarda kolaylık sağlar: Aynı
    kodlama düzenine sahip olmak beraber çalışmayı kolaylaştırır.
    Koordinasyonu arttırır.
-   Daha okunabilir kodlar elde ederiz.
-   Daha performanslı sayfalar elde ederiz.
-   Daha sonra kodları güncellememiz gerektiğinde bize kolaylıklar
    sağlar. Mesela bir projeyi bitirdik 3-4 ay sonra değişiklik
    geldiğinde düzenimiz standart olduğu için düzeltmelerimizi daha
    kolay yaparız.

CSS kodu yazarken bazı standartlar oluşturmanın avantajlarından
bahsettik yukarıda. Peki bu standartlar nasıl olmalı neler yapmalıyız ki
optimum kod elde edelim.

![css_duzenleme2][]

## 1. CSS doküman indeksini oluşturun

CSS dokümanınız indeksini hazırlayınız. Büyük projelerde tercih edilecek
bir husus bence. Şimdiye kadar hiç uygulamadım ama büyük projelerde
uygulamanın yararlı olacağını düşündüğüm bir uygulama

{% highlight css %}
/*------------------------------------------------------------------
[CSS Kod indeksi]
1. Body
2. Üst Alan / #ustAlan
2.1. Menü / #menu
3. İçerik Alanı / #icerik
3.1. Sol Kolon / #solKolon
3.2. Sidebar / #yanKolon
3.2.1. RSS / #rss
3.2.2. Arama / #arama
3.2.3. Kutular / .kutu
4. Alt Alan / #altAlan
-------------------------------------------------------------------*/
{% endhighlight %}

## 2. CSS dokümanınıza imzanızı atın

Kod yazarının veya yazarlarının imzası ve genel bilgilerini yazarak
kodlarımızı başlamalıyız.(Bende bunu ara sıra unutuyorum. Ama unutmamak
gerekli)

{% highlight css %}
/********************************************
MYK Medya - http://myk-medya.com/ yahoyt.com
fatih hayrioglu
28 Mayis 2009
ie6, ff, opera. chrome, safari
************************************************/
{% endhighlight %}

## 3. Seçici isimlendirirken standart ve anlamlı isimler verin

Seçici isimleri ve genel isimlendirmede bir standardı oturtun.

Anlamlı isimler verin. Anlamlı isimler vermek kod yazarken ve daha
sonrası için çok büyük kolaylık sağlayacaktır. XHTML kodların nasıl bir
anlamı(body, p, form vd.) varsa, kendi oluşturduğumuz seçici isimlerinde
bir anlamı olması mantıklıdır.

**#maviKutu** yerine **#haberKutusu** veya **#haberAlani** tanımı
daha mantıklı ve anlamlı bir isimlendirmedir.

İsimlendirmede bir standardınız olsun. Benim standardım bu konuda ilk
harf küçük, sonraki kelimelerin baş harfi büyük ile başlar ve bitişik
yazılır.

{% highlight css %}
#icerikOzu{..} #solIcerikAlani{..}
{% endhighlight %}

Bu benim standardım. Başka türlü standartlarda vardır. Her kesin
kendince bir standardı olabilir. Mesela alt çizgiyle ayıranlar var.
(-)Tire ile ayıranlar var.

{% highlight css %}
#icerik_ozu{..} #sol-icerik-alani{..}
{% endhighlight %}

Bu standardı herkes kendince yapabilir. Benim önerim aynı projede
çalışan insanların aynı kodlama yöntemini kullanması, diğer türlü pek
hoş olmuyor. Göz aşina olmayınca bir eksik hissediyor insan kod
yazarken.

## 4. Kısaltma kullanın.

CSS tanımlarında kısaltmaları kullanın. CSS kısaltmaları hakkında daha
fazla bilgi için [http://www.fatihhayrioglu.com/cssde-kisaltmalar/][]
okumanızı tavsiye ederim.

{% highlight css %}
font-weight: bold;
font-family: verdana, sans-serif;
font-size: 11px;
line-height: 15px;
{% endhighlight %}

yerine

{% highlight css %}
font: bold 11px/15px verdana, sans-serif;
{% endhighlight %}

## 5. CSS dokümanlarınızı anlamlı bölümlere ayırın.

Büyük projelerde css dokümanlarını birden fazla bölümlere ayırarak daha
düzenli ve kolay kodlanabilir dokümanlar elde ederiz.

{% highlight css %}
@import url(/css/iskelet.css);
@import url(/css/fontlar.css);
@import url(/css/renkler.css);
@import url(/css/sifirlama.css);
{% endhighlight %}

Ben yukarıdaki yöntemi genelde çok büyük projelerde kullanmayı tercih
ediyorum. Normalde ve genellikle tek ve iki css dokümanı ile projeyi
bitiriyorum. Performans açısından bu daha iyi ayrıca.

Eğer CSS sıfırlama tekniklerinden birini kullanacaksam Bunu imzadan
sonraya yazmak. Yada site genel tanımlarını başa yazmak. [YUI CSS Reset][] ve [Eric Meyer][]'in ki var mesela.

{% highlight css %}
/************************
************************
MYK Medya - http://myk-medya.com/
fatih hayrioglu
28 Mayis 2009
ie6, ff, opera. chrome, safari
************************
************************/

body{margin:0; padding:0;}
ul{margin:0; padding:0; list-style:none;}

/*kapsayamam sorunu */
.kapsayamamaSorunu:after {content: "."; display: block; height: 0; clear: both; visibility: hidden;}
.kapsayamamaSorunu{display: inline-block;}
/* IE-mac de bu bolumu sakla \ */
* html .kapsayamamaSorunu{height: 1%;}
.kapsayamamaSorunu {display: block;}
/* IE-mac bu bolumu saklam artik */
/*kapsayamam sorunu */
{% endhighlight %}

## 6. Her satıra bir tanım yöntemini kullanın

CSS özelliği tanımlarken her satıra bir tanım yazarak daha uygun kod
elde edebiliriz.

Ben daha önce her satıra bir özellik tanımı yapıyordum.

{% highlight css %}
#aramaAlani{
    float:left;
    width:265px;
    background-color:#fff;
    border:3px solid #525252;
}
{% endhighlight %}

Bu yöntemde kod açık ve görüntü olarak daha kullanışlı görünse de, fazla
boşluklar sorun oluşturmaya başladı. CSS kodları çok uzayınca kaydırma
çubuğu ile çok aşağılara in yukarı çık zaman kaybına neden oluyordu.

**Her Satırda Bir Tanım Yapma Yöntemi**

Bende her satıra bir tanım yöntemini kullanmaya başladım. Aslında benim
bu yönteme ilk geçme nedenim olan optimizasyonda css kodlarımı optimize
ederken fazla boşluklardan kurtulmam gerektiğiydi. Daha sonra bu
yöntemin daha avantajlı olduğunu gördüm, ayrıca daha derli toplu kodlar
oluşturmama yaradı. Bundan sonra böyle kod yazamaya başladım.

{% highlight css %}
#anaKapsul{...}
#ustalan{...}
#icerikAlani{...}
#solIcerikAlani{...}
#sagIcerikAlani{...}
#altAlan{...}
{% endhighlight %}

Kodlarımızın daha okunabilir olması içinde girintili bir yapıyı tercih
etmeliyiz.

{% highlight css %}
#icerikAlani{
	clear: left;
	float: left;
	padding-top: 20px;
}
#solIcerikAlani{
	float: left;
	margin-right: 13px;
	width: 647px;
}
#icerikOzu{
	clear: left;
	float: left;
	margin-top: 20px;
}
#sagIcerikAlani{
	float: left;
	margin: 0;
	width: 300px;
}
{% endhighlight %}

## 7. Kodlarınızı yorum satırları ile açıklayıcı hale getirin.

Kodumuzun anlaşılabilir olması için yorum satırları eklemeliyiz.
Bölümleri ve özel alanları yorum kodu ile belirleyerek anlaşılabilirliği
arttırabiliriz. Böylelikle bölümler arasında daha kolay ayrım
yapabiliriz. Kod okunabilirliği daha fazla olacaktır.

{% highlight css %}
#anaKapsul{margin:0 auto; width:960px;}
/**************************************************** ustalan   */
#ustalan{padding-top:20px;}

/**************************************************** icerikAlani   */
#icerikAlani{float:left; clear:left; padding-top:20px;}

/*sol icerik alani */
	#solIcerikAlani{float:left; width:647px; margin-right:13px}
		#icerikOzu{float:left; clear:left; margin-top:20px}

/* sagIcerikAlani */

	#sagIcerikAlani{float:left; width:300px; margin:0;}       
{% endhighlight %}

## 8. CSS özellik tanımlarını sıralayın.

Özellik tanımlarında sıralama uygulayın. Özellik tanımlarında şablon
tanımlarını başta yazmak. CSS tabanlı kodlama yazarken site yapısını
oluşturan özellikler(float, width, height gibi özellikleri) ilk sırada
yazıp sonra diğer özellikleri yazmayı tercih ediniz.

{% highlight css %}
#solIcerikAlani{float:left; width:647px; margin-right:13px}
{% endhighlight %}

Burada bir diğer yöntemde özellikleri alfabetik sıraya göre yazmaktır.
Buradaki amaç bir standart oluşturup göz aşinalığı sağlamak ve
böylelikle daha hızlı kod yazmaktır.

Sıralayı şöyle yapmak mantıklı olacaktır.

-   Konumlandırma, boyutlar (width, height, position, float, clear)
-   Kenar için ve kenar dışı boşluklar ve kenar dışı çizgisi (margin,
    padding, border)
-   Metin tanımları (font, line-height, color)
-   Diğer özellikler

## 9. Çalışma gruplarınızda ortak standardınızı oluşturun.

Bir projede beraber çalıştığınız insanlarla aynı kodlama düzeninde
çalışması çok önemlidir. Projede çalışan kişilerin bir araya gelip ortak
bir düzen oluşturmaları ve projede bu düzen üzerine çalışmaları herkes
açısından büyük katkı sağlayacaktır. Ayrıca css düzeltmelerinde(hack) de
aynı şey söz konusu. Mümkünse aynı css düzeltmelerini kullanmanız ortak
çalışılan projelerde size kolaylık sağlayacaktır.

## 10. CSS Editör araçlarından yararlanın

Daha öncede [yazdığım][] gibi css editörü olarak Adobe Dreamweaver
kullanıyorum. Bunun bir kaç sebebi var. Eskiden beri kullana gelmenin
verdiği bir el alışkanlığı. CSS ve son sürümde de javascript editör
kısımların gayet güzel çalışması.

Gelelim CSS Editörlerinin bizim CSS düzenine katkılarına

**10.1** Otomatik tamamlama özelliği bize kod yazarken çok yardımcı
oluyor. Bu özellik kod yazma hızımızı arttırıyor ve yanlış yazımları
engelliyor.

![dw_duz_01][]

**10.2** Kodların renklendirilmesi de editörün güzel özelliklerinden
biridir. Seçici, özellik, tanım ve yorum satırı ayrımı bize göstererek
kod ayrımına yardımcı olur ve daha okunabilir kod görünümü sağlar.

![dw_duz_02][]

**10.3** Sık kullandığımız css düzeltmelerini(hack) snippets(dw
özelliği) alanına ekleyerek hız kazanabiliriz. Daha hızlı olmak için bu
tanımlara bir kısa yol bile atayabilirisiniz.

![dw_duz_03][]

**10.4** Dreamweaver'ın stil dosyalarını standarda oturmak çok kolay.

Edit -> Preferences.. tıklayınca gelen pencereden Code Format kısmını
seçince sağ tarafta CSS.. düğmesine tıklayınca CSS doküman formatını
ayarlama ekranından css düzenimizi ayarlayabiliyoruz.

![dw_stil_ayarlama][]

Notepad ++ daki hizalama çizgileride çok güzel dw olmaması çok üzücü.
DW'da hala tam olarak istedikleri karşılaya bilmiş değil, ama bildiğim
en iyi editör.

![hiza_cizgileri][]

## Sonuç

Burada ben kullandığım ve araştırma sonucu elde ettiğim css düzeninden
bahsettim. Bu stadartları kendinize göre değiştirebilir ve kendi
stadartlarınızı oluşturabilirsiniz, Amaç stadart ve düzenli bir css
kodlama düzenine erişmek. Son olarak örnek bir css dokümanı nasıl
olmalıya bir örnek yazarsak:

XHTML kodu:

{% highlight html %}
<div >

    <div >
    </div><!--[if !IE]>ustAlan sonu<![endif]-->

    <div >
        <div >
            <div ><img src="images/promo.jpg" width="647" height="264" alt="Promo" /></div>
            <div >
            </div><!--[if !IE]>icerikOzu sonu<![endif]-->
        </div><!--[if !IE]>solIcerikAlani sonu<![endif]-->
        <div >
        </div><!--[if !IE]>sagIcerikAlani sonu<![endif]-->
    </div><!--[if !IE]>icerikAlani sonu<![endif]-->

    <div  class="kapsayamamaSorunu">
    </div>

</div><!--[if !IE]>anaKapsul sonu<![endif]-->
{% endhighlight %}

CSS kodu

{% highlight css %}
/************************
************************
MYK Medya - http://myk-medya.com/
yahoyt.com
fatih hayrioglu
28 Mayis 2009
ie6, ff, opera. chrome, safari
************************
************************/

/************************************************** Genel Tanımlar   */

body{margin:0; padding:0;}
ul{margin:0; padding:0; list-style:none;}

/*kapsayamam sorunu */
    .kapsayamamaSorunu:after {content: "."; display: block; height: 0; clear: both; visibility: hidden;}
    .kapsayamamaSorunu{display: inline-block;}
    /* IE-mac de bu bolumu sakla \ */
    * html .kapsayamamaSorunu{height: 1%;}
    .kapsayamamaSorunu {display: block;}
    /* IE-mac bu bolumu saklam artik */
/*kapsayamam sorunu */


#anaKapsul{margin:0 auto; width:960px;}

/************************************************** ustalan   */
#ustalan{padding-top:20px;}

/************************************************** icerikAlani   */
#icerikAlani{float:left; clear:left; padding-top:20px;}

/*sol icerik alani */
    #solIcerikAlani{float:left; width:647px; margin-right:13px}
    #icerikOzu{float:left; clear:left; margin-top:20px}

/* sagIcerikAlani */

    #sagIcerikAlani{float:left; width:300px; margin:0;}

/************************************************** altAlan */

#altAlan{clear:left; background-color:#404040; padding:12px; margin-bottom:20px;}
{% endhighlight %}

## Kaynaklar

-   [http://www.webdesignerdepot.com/2009/05/10-best-css-practices-to-improve-your-code/][]
-   [https://developer.mozilla.org/en/Underscores_in_class_and_ID_Names][]
    (isimlendirme)
-   [http://davidwalsh.name/format-css-files][] (güzel örnek)
-   [http://help.adobe.com/en_US/Dreamweaver/10.0_Using/WS6A10E93F-6587-4e1b-956C-03CBD7F678BBa.html][]
    (dw ayarları)
-   [http://www.smashingmagazine.com/2008/05/02/improving-code-readability-with-css-styleguides/][]
    (süper)
-   [http://www.louddog.com/bloggity/2008/03/css-best-practices.php][]
-   [http://css-tricks.com/indent-css-changes-you-are-unsure-about/][]
-   [http://woork.blogspot.com/2008/03/write-well-structured-css-file-without.html][]
    (güzel)
-   [http://woork.blogspot.com/2008/01/optimize-your-css-files-to-improve-code.html][]
-   [http://www.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/][]
-   [http://css-tricks.com/video-screencasts/8-css-formatting/][]
    (video)
-   [http://www.graphicrating.com/2009/02/23/css-code-readability-tips/][]
-   [http://developer.yahoo.com/performance/rules.html#num_http][]

  [css_duzenleme2]: /images/css_duzenleme2.gif
    "css_duzenleme2"
  [http://www.fatihhayrioglu.com/cssde-kisaltmalar/]: http://www.fatihhayrioglu.com/cssde-kisaltmalar/
    "http://www.fatihhayrioglu.com/cssde-kisaltmalar/"
  [YUI CSS Reset]: http://developer.yahoo.com/yui/reset/ "YUI CSS REset"
  [Eric Meyer]: http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/
    "Eric Meyer"
  [yazdığım]: http://www.fatihhayrioglu.com/css-editorleri/ "yazdığım"
  [dw_duz_01]: /images/dw_duz_01.gif
    "dw_duz_01"
  [dw_duz_02]: /images/dw_duz_02.gif
    "dw_duz_02"
  [dw_duz_03]: /images/dw_duz_03.gif
    "dw_duz_03"
  [dw_stil_ayarlama]: /images/dw_stil_ayarlama.gif
    "dw_stil_ayarlama"
  [hiza_cizgileri]: /images/hiza_cizgileri.gif
    "hiza_cizgileri"
  [http://www.webdesignerdepot.com/2009/05/10-best-css-practices-to-improve-your-code/]: http://www.webdesignerdepot.com/2009/05/10-best-css-practices-to-improve-your-code/
    "http://www.webdesignerdepot.com/2009/05/10-best-css-practices-to-improve-your-code/"
  [https://developer.mozilla.org/en/Underscores_in_class_and_ID_Names]: https://developer.mozilla.org/en/Underscores_in_class_and_ID_Names
    "https://developer.mozilla.org/en/Underscores_in_class_and_ID_Names"
  [http://davidwalsh.name/format-css-files]: http://davidwalsh.name/format-css-files
    "http://davidwalsh.name/format-css-files"
  [http://help.adobe.com/en_US/Dreamweaver/10.0_Using/WS6A10E93F-6587-4e1b-956C-03CBD7F678BBa.html]: http://help.adobe.com/en_US/Dreamweaver/10.0_Using/WS6A10E93F-6587-4e1b-956C-03CBD7F678BBa.html
    "http://help.adobe.com/en_US/Dreamweaver/10.0_Using/WS6A10E93F-6587-4e1b-956C-03CBD7F678BBa.html"
  [http://www.smashingmagazine.com/2008/05/02/improving-code-readability-with-css-styleguides/]: http://www.smashingmagazine.com/2008/05/02/improving-code-readability-with-css-styleguides/
    "http://www.smashingmagazine.com/2008/05/02/improving-code-readability-with-css-styleguides/"
  [http://www.louddog.com/bloggity/2008/03/css-best-practices.php]: http://www.louddog.com/bloggity/2008/03/css-best-practices.php
    "http://www.louddog.com/bloggity/2008/03/css-best-practices.php"
  [http://css-tricks.com/indent-css-changes-you-are-unsure-about/]: http://css-tricks.com/indent-css-changes-you-are-unsure-about/
    "http://css-tricks.com/indent-css-changes-you-are-unsure-about/"
  [http://woork.blogspot.com/2008/03/write-well-structured-css-file-without.html]: http://woork.blogspot.com/2008/03/write-well-structured-css-file-without.html
    "http://woork.blogspot.com/2008/03/write-well-structured-css-file-without.html"
  [http://woork.blogspot.com/2008/01/optimize-your-css-files-to-improve-code.html]: http://woork.blogspot.com/2008/01/optimize-your-css-files-to-improve-code.html
    "http://woork.blogspot.com/2008/01/optimize-your-css-files-to-improve-code.html"
  [http://www.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/]: http://www.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/
    "http://www.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/"
  [http://css-tricks.com/video-screencasts/8-css-formatting/]: http://css-tricks.com/video-screencasts/8-css-formatting/
    "http://css-tricks.com/video-screencasts/8-css-formatting/"
  [http://www.graphicrating.com/2009/02/23/css-code-readability-tips/]: http://www.graphicrating.com/2009/02/23/css-code-readability-tips/
    "http://www.graphicrating.com/2009/02/23/css-code-readability-tips/"
  [http://developer.yahoo.com/performance/rules.html#num_http]: http://developer.yahoo.com/performance/rules.html#num_http
    "http://developer.yahoo.com/performance/rules.html#num_http"
