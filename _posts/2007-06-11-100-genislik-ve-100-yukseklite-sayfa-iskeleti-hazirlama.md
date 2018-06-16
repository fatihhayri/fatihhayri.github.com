---
layout: post
title: 100% Genişlik ve 100% Yükseklite Sayfa İskeleti Hazırlama
Date: 2007-06-11 20:44
Category: CSS, XHTML
tags: [CSS, XHTML]
---

Gelişen teknolojiyle birlikte ekran boyutları artıyor ve sayfalar daha
fazla yer kaplaması için artık tasarımlarda eskiye nazaran daha geniş
ekran genişlikleri kullanılıyor. Eskiden sayfalarımızı 800x600 genişlik
için 760 piksel genişliğinde tasarlardık. Son zamanlarda 1024x768 (960
px)göre tasarımlar yapılmaktadır. Web tarayıcılarının tüm alanını
kullanmak için elastik sayfalar kodlanıyor artık. Bana da genişliği %100
ve yüksekliği %100 lazım oldu. Aradım bulamadım bulduklarımın
birleştirip böyle bir sayfa elde ettim. Belki sizede lazım olur diye
buraya yazayım dedim.

**Not**
Aslında yüksekliğin %100 olması alt alanın web tarayıcısının alt kısmına
yapıştırılması ile elde ediyoruz.

## İki Kolonlu Yapı

![İki Kolon][]

İlk olarak başlığı, iki kolonlu içeriği(solda menü, sağda
içerik) ve alt kısmı olan bir sayfa iskeleti oluşturalım. Burada sol
menü alanının genişliğini sabit tutup sağdaki içerik alanının
genişliğini esnek yapacağız. Xhtml kodu:

{% highlight html %}
<div class="kapsul">
	<div id="ustAlan"> üst alan
	</div>
	<div id="solAlan">Menü</div>
	<div id="icerikAlani">
	Lorem ipsum dolor sit amet, ..., tempor at, sem.
	<p>Sed adipiscing, ... in ligula. </p>
	</div>
	<div class="tampon"></div>
</div>
<div id="altAlan">
	<p>Alt Kısım</p>
</div>
{% endhighlight %}

CSS Kodu;

{% highlight css %}
* {
margin: 0;
}
html, body {
    height: 100%;
    font-size:62.5%;
    font-family:Arial, Helvetica, sans-serif;
}
body{
	background:#F78200 url(../images/genel_zr.gif) top left repeat-y;
}
/* usalan tanimlari */
#ustAlan {
height: 6.4em;
background-color:#CCCCCC;
}
/* icerik alani */
.kapsul {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -4em; /* altAlan yukseklik degeri ile ayn olmali */
}
#solAlan
{
    float: left;
    clear:both;
    width: 15em;
    height: 15em;
    margin-bottom: 1em;
}
#icerikAlani
{
    margin: 0 0 1em 16em;
    font:1em Arial, Helvetica, sans-serif;
}
#altAlan, .tampon {
	height: 4em; /* .tampon ile altAlan yuksekligi ayni olmali */
}
#altAlan{
    text-align:center;
    color:#036;
    background-color:#cfc;
}
{% endhighlight %}

<iframe height='473' scrolling='no' src='//codepen.io/fatihhayri/embed/LNLPwj/?height=473&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

Burada değinmemiz gereken önemli alanları belirtelim. **.kapsul**
alanındaki tanımlarda 100% yüksekliği yakalamak için yükseklik değerine
birden fazla tanımlama yapılmıştır. Buradaki amaç Firefox ve IE için
aynı sonucu elde etmektir. Kapsul'ün Alt margin değeri **#altAlan**
değerinin eksi değeri olarak atayarak kapsul alanının **altAlan**
üzerine kaymasını engelliyoruz.

İçerik Alanı(**#icerikAlani**) genişliğinin esnek olması için bir
genişlik tanımı yapmıyoruz ve soldaki alanın sınırlarına girmemek için
margin değerini **#solAlan** içeriği kadar + **1em** boşluk veriyoruz.

Alt alanın web tarayıcısının küçültülmesi durumunda veya düşük ekran
çözünürlüklerinde içerik alanı üzerine çıkmaması için araya
**#altAlan** yüksekliği kadar **.tampon** bir katman koyuyoruz. Burada
anlamlı(semantik) kod yazma kuralının dışına çıkıyoruz ama bu kadar
kusur kadı kızında da olur.:D

## Üç Kolonlu Yapı

![Üç kolon][]

Şimdide 3 kolonlu olanını yapalım. İki kolonlu ile üç
kolonlu arasında pek bir fark yoktur aslında. Sadece **.icerikAlani**
tanımında bir iki değişiklik ve sağ alan eklemesi yapılmıştır. Ayrıca
kapsul içine bir sağa dayalı bir zemin resmi daha koyarak sağ kolonun
zemini yeşil yapılmıştır. Yapılan değişiklikler **kalın** olarak
işaretlenmiştir.

HTML kodu:

{% highlight html %}
<div class="kapsul">
	<div id="ustAlan"> üst alan</div>
	<div id="solAlan">Menü</div>
	<div id="sagAlan">
		<p>Sağ Alan </p>
	</div>
	<div id="icerikAlani">
	Lorem ipsum dolor sit amet, ... sem.
	<p>Sed adipiscing, ... ligula. </p>
	</div>
	<div class="tampon"></div>
</div>
<div id="altAlan">
	<p>Alt Kısım</p>
</div>
{% endhighlight %}

CSS Kodu

{% highlight html %}
* {
	margin: 0;
}
html, body {
    height: 100%;
    font-size:62.5%;
    font-family:Arial, Helvetica, sans-serif;
}
body{
	background:#F78200 url(../images/genel_zr.gif) top left repeat-y;
}
/* usalan tanimlari */
#ustAlan {
    height: 6.4em;
    background-color:#CCCCCC;
}
/* icerik alani */
.kapsul {
    background:url(../images/sag_zr.gif) right top repeat-y;
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -4em; /* altAlan yukseklik degeri ile ayn olmali */
}
#solAlan{
    float: left;
    clear:both;
    width: 15em;
    height: 15em;
    margin-bottom: 1em;
}
#icerikAlani
{
    margin: 0 16em 1em 16em;
    font:Arial, Helvetica, sans-serif;
}
#altAlan, .tampon {
	height: 4em; /* .tampon ile altAlan yuksekligi ayni olmali */
}
#altAlan{
    text-align:center;
    color:#036;
    background-color:#cfc;
}
/* 3 kolon lu yapi */
#sagAlan
{
    float: right;
    width: 15em;
}
{% endhighlight %}

<iframe height='444' scrolling='no' src='//codepen.io/fatihhayri/embed/rewNBL/?height=444&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Kodlar IE6, IE7 ve FF da denenmiştir.

## Kaynak:

-   [http://www.maxdesign.com.au/presentation/liquid/example02.htm][]
-   http://ryanfait.com/sticky-footer

  [İki Kolon]: /images/iki_kolon_yuzde.gif
  [Üç kolon]: /images/uc_kolon_yuzde.gif
  [http://www.maxdesign.com.au/presentation/liquid/example02.htm]: http://www.maxdesign.com.au/presentation/liquid/example02.htm
