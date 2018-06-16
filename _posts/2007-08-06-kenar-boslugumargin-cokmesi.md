---
layout: post
title: Kenar Boşluğu(Margin) Çökmesi
Date: 2007-08-06 09:13
Category: CSS, XHTML
tags: [CSS, kenar-dış-boşluğu, Margin, margin-çökmesi, marj, XHTML]
---

Daha önceki makalelerimde devamlı margin kelimesini kullandım ancak bu
makaleyi yazarken karşıma **margin**(marj) yerine Türkçe **kenar
boşluğunu** kullanabileceğimi gördüm. Bu makalede ve sonraki
makalelerimde bu şekilde kullanacağım. Makalelerimi yazarken devamlı
Türkçe kelimeler kullanmayı tercih ediyorum, ancak bazı kelimelerin
karşılılarını bulmakta zorlanıyorum. Neyse asıl konuya geçelim.

Kenar boşluğu çökmesi nedir? Kenar boşluğu nasıl meydana gelir ve nasıl
çözülür? Bu makalede bu sorulara cevap bulacağız.

Kenar boşluğu çökmesini [W3C][] **bitişik kenar boşluğu** olarak
tanımlar. İki veya daha fazla kutunun(sonraki bir nesne veya kutu
olabilir)arasındaki boşluğun tek kenar boşluğu şeklinde görünmesidir.

Bu sorun aslında bir hata olarak kabul edilmemelidir Belkide CSS ile
sayfa kodlarken karşılaştığımız ve farklı yöntemlerle çözdüğümüz bu
soruna burada açıklık getirmeye çalışacağım.

Sorun tam olarak; iki veya daha fazla kutu arasında dikey kenar
boşluğu(margin) değeri ataması yaptığımızda dikey kenar boşluklarının
biri etki etmez biz sadece bir kenar boşluğunu görürüz. Buna **kenar
boşluğu çökmesi** denir. Bu kenar boşluğu değerlerinden küçük olan
çöker, büyük olanın değeri görünür. Kenar boşluğu çökmesi bir kaç farklı
durumda meydana gelir. Bunları sırası ile inceleyelim.

## 1- İki Blok-level Element Arasında Meydana Gelen Çökme

Kenar boşluğu uygulanmış iki blok-level elementin dikey kenar boşluğunda
bir çökme meydana gelir. Bir örnek yapalım.

Html kodu:

{% highlight html %}
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<p>
<p>Morbi eros lacus, volutpat at, interdum nec, dignissim at, turpis.</p>
{% endhighlight %}

CSS kodu:

{% highlight css %}
p {
	margin:10px 0;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

Bu kodu uyguladığımızda normalde aşağıdaki Resim-1'deki gibi bir görüntü
elde etmemiz gerekirken, kodu çalıştırdığımızda Resim-2'deki görüntüyü
alırız.

![Resim - 1][]

Resim -1 Olması gereken kenar boşluğu          

![Resim - 2][]

Resim - 2 Görünen kenar boşluğu görünümü         

**Çözüm:** Çözüm için bir kaç yöntem var ben burada bir tanesi örnek
olarak vereceğim, ayrıca makalenin sonundaki çözümlerde göz atmanızda
yarar var.

{% highlight css %}
p {
	margin:10px 0;
	float:left;
	clear:both;
	width:100%
}
{% endhighlight %}

Bu kodlar sonrasında resim-1 deki görüntüyü alırız.

## 2- Kenar Boşluğu Uyulanmış İç içe Bulunan Elementler Arasında Meydana Gelen Çökme

Bir elemente ve içindeki elemente kenar boşluğu atadığımızda içte kalan
elementin kenar boşlukları kaybolacaktır. Bir uygulama yapalım:

{% highlight css %}
* {
	margin:0;
	padding:0;
}

div#kapsul{
	margin:10px;
	background-color:#0066CC;
}

p{
	margin:10px;
	background-color:#0CF;
}
{% endhighlight %}

Html kodu yazalım:

{% highlight html %}
<div id="kapsul"> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> </div>
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

Örnekte gördüğümüz gibi paragrafın kenar boşluk değerleri
görünmemektedir. Sadece dıştaki kapsul nesnesinin üst ve alt kenar
boşlukları etki etmektedir.

![Olması gerek kenar boşluğu görünüm][]

Resim -1 Görünen kenar boşluğu        

![][100]

Resim - 2 Olması gereken kenar boşluğu

**Çözüm:** Bu tip kenar boşluğu çökmelerinde 1px'lik bir padding
eklersek ve paragrafın kenar boşluk değerini de 1px azaltırsak sorun
çözülür. Kodu aşağıdaki gibi değiştirirsek sorunumuz hallolacaktır.

{% highlight css %}
* {
	margin:0;
	padding:0;
}

div#kapsul {
	margin:10px;
	padding:1px;
	background-color:#0066CC;
}

p {
	margin:9px;
	background-color:#0CF;
}
{% endhighlight %}

## 3- Sadece İçteki Elemente Kenar Boşluğu Uyulanmış İç içe Bulunan Elementler Arasında Meydana Gelen Çökme

Diğer bir kenar boşluğu çökmesi görülen durumda yukarıdaki gibi içiçe
durumda olan nesnelerden içteki paragrafta bir kenar boşluğu ataması
varken(margin:10px) dıştaki **kapsul** nesnesinin kenar boşluğu
değerinin sıfır olması durumunda meydana gelir. İçteki elementin dikey
kenar boşlukları çökecektir.

{% highlight css %}
* {
	margin:0;
	padding:0;
}

div#kapsul{
	margin:0;
	background-color:#0066CC;
}

p{
	margin:10px;
	background-color:#0CF;
}
{% endhighlight %}

Html kodu yazarsak:

{% highlight html %}
<div id="kapsul"> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> </div>
{% endhighlight %}

![][2]

Resim -1 Görünen kenar boşluğu        

![][3]

Resim - 2 Olması gereken kenar boşluğu     

Örneği görmek için [tıklayınız.][4]

**Çözüm:** Bu durumda padding veya kenarlık(border) ataması yaparsak
sorunumuz çözülecektir.

## Sonuç ve Çözüm Önerileri

Yukarıda bazı çözüm önerileri sundak, ayrıca kenar boşluğu çökmesi
hakkındaki aşağıdaki bilgilerde bize çözüm konusunda yardımcı olacaktır.

-   Normal akışa sahip dokümanlardaki blok-level bir kutuda dikey kenar
    boşluğu çökmesi olur.
-   **Float** uygulanmış nesnelerde çökme olmaz.
-   Konumlandırma atamaları(**position:absolute** ve
    **postion:relative**) yapılmış nesnelerde çökme olmaz.
-   **overflow** uygulanmış nesnelerde ve alt elementlerinde çökme
    olmaz.
-   **inline-block** elementlerde çökme olmaz.
-   **html** ve **body** elementlerine uygulanan kenar boşluğunda çökme
    olmaz.

## Kaynaklar

-   [http://www.w3.org/TR/CSS21/box.html#collapsing-margins][W3C]
-   [http://www.andybudd.com/archives/2003/11/no_margin_for_error/][]
-   [http://www.search-this.com/2007/05/07/wheres-my-margin-gone-or-why-111/][]
-   [http://www.ryznardesign.com/web_coding/tests/2004/preventing_margin_collapse.html][]
-   [http://maxdesign.com.au/presentation/workshop/slide46.htm][]
-   [http://reference.sitepoint.com/css/collapsingmargins][]
-   [http://www.seifi.org/css/understanding-taming-collapsing-margins-in-css.html][]


  [W3C]: http://www.w3.org/TR/CSS21/box.html#collapsing-margins
  [tıklayınız.]: /dokumanlar/margin_cokmesi_01.html
    "Kenar boşluğu çökmesi"
  [Resim - 1]: /images/margin_cokmesi2.gif
  [Resim - 2]: /images/margin_cokmesi1.gif
  [1]: /dokumanlar/margin_cokmesi_02.html
  [Olması gerek kenar boşluğu görünüm]: /images/margin_cokmesi21.gif
  [100]: /images/margin_cokmesi22.gif
  [2]: /images/margin_cokmesi31.gif
  [3]: /images/margin_cokmesi32.gif
  [4]: /dokumanlar/margin_cokmesi_03.html
  [http://www.andybudd.com/archives/2003/11/no_margin_for_error/]: http://www.andybudd.com/archives/2003/11/no_margin_for_error/
  [http://www.search-this.com/2007/05/07/wheres-my-margin-gone-or-why-111/]: http://www.search-this.com/2007/05/07/wheres-my-margin-gone-or-why-111/
  [http://www.ryznardesign.com/web_coding/tests/2004/preventing_margin_collapse.html]: http://www.ryznardesign.com/web_coding/tests/2004/preventing_margin_collapse.html
  [http://maxdesign.com.au/presentation/workshop/slide46.htm]: http://maxdesign.com.au/presentation/workshop/slide46.htm
  [http://reference.sitepoint.com/css/collapsingmargins]: http://reference.sitepoint.com/css/collapsingmargins
  [http://www.seifi.org/css/understanding-taming-collapsing-margins-in-css.html]: http://www.seifi.org/css/understanding-taming-collapsing-margins-in-css.html
