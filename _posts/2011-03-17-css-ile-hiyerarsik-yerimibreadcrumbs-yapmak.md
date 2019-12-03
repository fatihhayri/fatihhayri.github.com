---
layout: post
title: CSS ile Hiyerarşik Yerimi(Breadcrumbs) Yapmak
Date: 2011-03-17 18:21
Category: CSS, Web Standartları, XHTML
tags: [Breadcrumbs, hiyerarşik yerimi, menü, navigasyon]
---

Kodladığım bir çok sitede eğer site alt sayfalar ve onlarında alt
sayflarında oluşan karmaşık bir yapıya sahip ise genelde kullanıcıya
nerede olduğu göstermek için hiyerarşik linkler kullanırız. Bunu
hiyerarşik yerimi olarak isimlendirmek bana daha mantıklı geldi. Amaç
web sitemizin kullanılabilirliğini arttırmaktır.  Kullanıcıya bulunduğu
sayfa hiyerarşik yapısıda gösterilerek daha kullanışlı bir erişim ve
kullanım sağlanır. Ayrıca arama motorlarını taramaları içinde sitemize
artı değer katar. Kullanıcıya her seviyeye kolayca geçiş imkanı sağlar.

![][100]
En çok örnek verilen site:  [apple.com][]

![][1]
Basit yapılı bir yerimi: bonus.com.tr

![][2]
Basit yapılı bir örnek daha: http://turkcetwitter.livego.com/

![][3]
Farklı renkte bir uygulama: [http://www.ligonier.org/rym/][]

![][4]
Farklı Tasarımda bir uygulama: [http://www.ideo.com][]

Yukarıda bir kaç örneğini verdiğim görüntülerde görüldüğü gibi bir çok
şekilde uygulamaya geçirilebilir.

Sadede gelelim ve biz kendi hiyerarşik yerimimizi yapalım.

HTML kodu;

{% highlight html %}
<ul id="yerimi" class="kapsul">
    <li><a href="#">Ana Sayfa</a></li>
    <li><a href="#">Birinci alt Menü</a></li>
    <li><a href="#">İkinci alt Menü</a></li>
    <li><a href="#">Üçüncü alt menü</a></li>
    <li>Bulunduğumuz sayfa</li>
</ul>
{% endhighlight %}

Gelelim CSS kodumuza, liste başlangıç değerlerini sıfırlayalım.
Listelerin başındaki sabit yuvarlak ikonları kaldırıp, etrafındaki
boşlukları kaldıralım.

{% highlight css %}
ul#yerimi,
ul#yerimi li{
	list-style:none;
	margin:0;
	padding:0;
}
{% endhighlight %}


Listeyi yatay yapmak için float:left tanımı yapıyoruz. İnternet Explorer
6 için bağlantıya da float:left atamamız gerekecek.

{% highlight css %}
ul#yerimi li {
	float:left;
	font:12px Arial, Helvetica, sans-serif;
	line-height:30px;
	padding-left:15px;
	font-weight:bold
}
{% endhighlight %}


Bağlantılara şeklini verelim ve görselliğini düzenleyelim.

{% highlight css %}
ul#yerimi li a {
	display:block;
	float:left;
	color:#0086C0;
	text-decoration:none;
	height:30px;
	font-weight:normal
}

ul#yerimi li a:hover {
	text-decoration:underline
}
{% endhighlight %}

Her kademe arasına ayraç koyalım. Burada şöyle bir ipucu var ki, oda
bulunduğumuz sayfaya link koymuyoruz ve bu sayede araya koyacağımız
ayraçları sadece linklere vererek kolayca çözüm sağlıyoruz.

{% highlight css %}
ul#yerimi li a {
	display:block;
	float:left;
	color:#0086C0;
	text-decoration:none;
	background:url(bc_separator.png) top right no-repeat;
	height:30px;
	padding-right:15px;
	font-weight:normal
}
{% endhighlight %}

Son olarakta tüm alana bir ardalan resmi koyup birde kenar çizgisi
ekleyelim.

{% highlight css %}
ul#yerimi {
	border:1px solid #cacaca;
	background:url(bc_bg.png) 0 0 repeat-x
}
{% endhighlight %}

Bu eklemeyide yapınca [Float Uygulanmış Elementleri Tam Kapsayamama (clearfix) sorunu][] ile karşılaşırız. Çözüm linkteki gibidir. sonuç
olarak CSS kodumuz;

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
} /*IE-mac de bu bolumu sakla

*/ * html
.kapsul { height: 1%; }
.kapsul { display: block; } /* IE-mac bu bolumu saklam artik */

ul#yerimi {
	border:1px solid #cacaca;
	background:url(bc_bg.png) 0 0 repeat-x
}

ul#yerimi,
ul#yerimi li {
	list-style:none;
	margin:0;
	padding:0;
}

ul#yerimi li {
	float:left;
	font:12px Arial, Helvetica, sans-serif;
	line-height:30px;
	padding-left:15px;
	font-weight:bold
}

ul#yerimi li a{
	display:block;
	float:left;
	color:#0086C0;
	text-decoration:none;
	background:url(bc_separator.png) top right no-repeat;
	height:30px;
	padding-right:15px;
	font-weight:normal
}

ul#yerimi li a:hover {
	text-decoration:underline
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][5]

## Kaynaklar

-   [http://www.smashingmagazine.com/2009/03/17/breadcrumbs-in-web-design-examples-and-best-practices-2/][]
-   [http://quince.infragistics.com/Patterns/Breadcrumbs.aspx][]
-   http://www.patternry.com/p=breadcrumbs
-   [http://www.useit.com/alertbox/breadcrumbs.html][] (mantalite)
-   [http://veerle-v2.duoh.com/blog/comments/simple_scalable_css_based_breadcrumbs][]
-   [http://css-tricks.com/triangle-breadcrumbs/][]
-   [http://css-tricks.com/markup-for-breadcrumbs/][]
-   [http://www.jankoatwarpspeed.com/post/2008/08/14/Create-applecom-like-breadcrumb-using-simple-CSS.aspx][]
-   [http://patterntap.com/tap/collection/breadcrumbs][] (örnekler)

  [100]: https://lh5.googleusercontent.com/FDz5-mF3VgIWJI8MfO35IYd7x3yE6HxDsZLz2X_TpBBFW9xWDQLwej_QBHdt3jcgVXbbyOOJ5cA8WQtDwteT_mW0t9aG6iABRKG0RJW4hIF_tKaqmwE
  [apple.com]: http://apple.com/
  [1]: https://lh4.googleusercontent.com/no7XnBrOmyF66RtVSzdoxXAsrl6frfkf9rI4LWlhPPDkhHfTY1TCySUw6f_Dq8f3QetCwumi1a-GICmJBWvIEB5fnHlmn1e6MPibppSRuDHT5tRdKo0
  [2]: https://lh5.googleusercontent.com/IQt1148PPVIL-vSBZKHip_6cp2n37DrNCQFUA-7MDqSlZcz0tFbNMW2mFpWUtKPB7my3QgXWxiNS7WHV-4WS2XF_Hy2ClKOzQS-o8YqsdGp8aHRAFLQ
  [3]: https://lh5.googleusercontent.com/F_sdKWSr8txPpfc9z_nEoAKylGdLE0NvacGpz2ZSVwC4MIAvjBZTXqWhJcNDxH0XvMPbEg-oQyIjFjYff0rvmG2la7v04rNTKDgKi_4yyajGYivoSsM
  [http://www.ligonier.org/rym/]: http://www.ligonier.org/rym/
  [4]: https://lh4.googleusercontent.com/75rWf8zu_B2K74XYemzIurOBOa77xi2G_T_GURm84FGlxDl0ggS_n_YBhPy1G7lsByC_ukLT-w_B4EE3qRFYL1UupuMb9OHAA30dgiCV1A_1nTV-8es
  [http://www.ideo.com]: http://www.ideo.com/
  [Float Uygulanmış Elementleri Tam Kapsayamama (clearfix) sorunu]: http://fatihhayrioglu.com/float-uygulanmis-elementleri-tam-kapsayamama-sorunu/
  [tıklayınız.]: /dokumanlar/yerimi/yerimi.html
  [5]: https://lh3.googleusercontent.com/OjH1IANl7PK66MMTvt58TUuh-jpAteN0eNeRmErj7ndN5bceqRpoxyqz1gox1LsEFUkX3vw4Qh7hISY0C3yuCTJkY4nFIi8hVtPnj8Oqo-U2zeGyabs
  [http://www.smashingmagazine.com/2009/03/17/breadcrumbs-in-web-design-examples-and-best-practices-2/]: http://www.smashingmagazine.com/2009/03/17/breadcrumbs-in-web-design-examples-and-best-practices-2/
  [http://quince.infragistics.com/Patterns/Breadcrumbs.aspx]: http://quince.infragistics.com/Patterns/Breadcrumbs.aspx
  [http://www.useit.com/alertbox/breadcrumbs.html]: http://www.useit.com/alertbox/breadcrumbs.html
  [http://veerle-v2.duoh.com/blog/comments/simple_scalable_css_based_breadcrumbs]: http://veerle-v2.duoh.com/blog/comments/simple_scalable_css_based_breadcrumbs
  [http://css-tricks.com/triangle-breadcrumbs/]: http://css-tricks.com/triangle-breadcrumbs/
  [http://css-tricks.com/markup-for-breadcrumbs/]: http://css-tricks.com/markup-for-breadcrumbs/
  [http://www.jankoatwarpspeed.com/post/2008/08/14/Create-applecom-like-breadcrumb-using-simple-CSS.aspx]: http://www.jankoatwarpspeed.com/post/2008/08/14/Create-applecom-like-breadcrumb-using-simple-CSS.aspx
  [http://patterntap.com/tap/collection/breadcrumbs]: http://patterntap.com/tap/collection/breadcrumbs
