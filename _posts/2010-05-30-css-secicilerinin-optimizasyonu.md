---
layout: post
title: CSS Seçicilerinin Optimizasyonu
Date: 2010-05-30 16:26
Category: CSS
tags: [Evrensel-Seçiciler, Id-Seçicisi, optimize, performans, seçici optimizasyonu, Torun-Seçicisi]
---

Bu konuyu hiç yazmayı düşünmüyordum, [Writing Efficient CSS for use in the Mozilla UI][] makalesini okuyan kadar. Bu makaleyi okuduğumda bir
şeyleri yanlış bildiğimi gördüm ve düzeltmek için bu konu hakkında biraz
araştırma yapmam gerektiğini düşündüm ve bu makale çıktı. Bende yeni çok
şeyler öğrendim. Aslında makalede 10 senelik bir makale, 10 sene sonra
tekrar ısıtılıp yayına konmuş.

Web sitelerini kodlarken ve kodlama sonrasında en çok önem verilen
alanlardan biridir optimizasyon. Web sitelerinin optimizasyonunda çok
fazla ince eleyip sık dokuyoruz. 1 Kbyte'ın bile hesabını yapar olduk.
İnternete bağlanma hızları ne kadar artsa da internete bağlanan insan
sayısı daha hızlı arttığı için her zaman daha optimize web siteleri önem
kazanacaktır. Biz bununla alakalı olarak burada CSS Seçicilerinin
optimum kullanılmasını irdeleyeceğiz. 

CSS seçici tipleri ve kullanımı hakkında [(X)HTML Sayfa Yapısı ve CSS Kullanımı][], [Özellik Seçicileri(Attribute Selectors)][] ve
[Sözde-sınıflar(Pseudo-class) ve Sözde-elementler(Pseudo-elements)][]
makalelerini bir göz atın.

## Performanslı CSS Seçicileri Seçiminde Anahtar Seçicinin Önemi

CSS Seçicilerinin performans kazandırma çalışmalarına başlamadan önce
ilk bilmemiz gereken tarayıcıların CSS seçicilerini nasıl yorumladığını
bilmekten geçiyor. Ben daha önceleri ki bu makaleyi yazmadan önce
diyebilirim buna, css kodu yazarken seçicilerin soldan sağa doğru
okunduğunu düşünerek kodumu yazardım ama gerçek böyle değilmiş.
**Tarayıcılar CSS seçicilerini sağdan solda doğru okurlar.** Tabi bu
bilgiden sonra yazdığımız kodları buna göre düşünerek yazmalıyız.

{% highlight css %}
ul li a#smUrunler{
	color:#000;
	background:url(../images/menu.png) 0 0 no-repeat;
}
{% endhighlight %}

Yukarıdaki tanımlamada ilk olarak tarayıcı doküman içinde geçen
a#smUrunler seçicisini bulacaktır, bu seçiciye anahtar seçici deniyor.
Bir bakıma elemanı yakalamak için anahtar oluyor tarayıcıya.

Bu bize gösteriyorki css kodlarımızı yazarken buna dikkat etmemiz ve
buna göre kod yazmamız gerekiyor.

{% highlight css %}
ul#solMenu li a{
	color:#000;
	background:url(../images/menu.png) 0 0 no-repeat;
}
{% endhighlight %}

şeklindeki bir tanım önerilmiyor. Bu tanımda sağdan sola doğru
yorumlandığını düşünürsek dokümandaki tüm bağlantıları(<a\>)
arayacaktır tarayıcı. Bunun yerine

{% highlight css %}
ul li a#smUrunler{
	color:#000;
	background:url(../images/menu.png) 0 0 no-repeat;
}
{% endhighlight %}

Tanılaması daha efektif bir sonuç verecektir. Tarayıcı direk olarak
a#smUrunler seçicisi ile elemanı bulacaktır.

[stevesouders.com'un test sayfasını][] incelersek sonucu daha iyi
anlayacağız.

Aynı öneriyi bize Google'un Page Speed eklentisi test sonucuda
verecektir. Google'un hıza önem verdiğini biliyoruz bu konuda [google'un önerileride][] Mozilla'dan farklı değil.

## Mozilla makalesindeki önerileri sıralarsak

**Evrensel kuralları önleyiniz**
CSS seçicilerini yazarken son tanımda evrensel bir seçici kullanmayın.

**Tekil Seçicileri(id) etiketlerle nitelemeyin**
Tekil seçiciler zaten en hızlı erişilen seçicilerdir. Bunları tekrar
etiket ile nitelemeye gerek yoktur.

{% highlight css %}
a#slUrunler{...}
{% endhighlight %}

yerine

{% highlight css %}
#smUrunler{...}
{% endhighlight %}

şeklinde kullanın.

Etiketler ile nitelemenin o seçiciyi kod okunurken daha anlamlı hale
getirdiğini düşünüyorum. ancak Firebug ile kod takibi yaptığımız bu
günlerde artık buda kabul gören bir tanım değildir. Ben kod yazarken son
zamanlarda çok kullanıyordum bu tanımlamayı, artık veda edeceğiz.

**Sınıf Seçicileri etiketlerle nitelemeyin**
Yukarıda anlattığımız gibi burası içinde geçerlidir.

{% highlight css %}
td.taraftarSayi{}
{% endhighlight %}

yerine

{% highlight css %}
.taraftarSayi{}
{% endhighlight %}

şeklinde kullanın.

**Torun Seçiciler veya çocuk Seçicler Yerine Özel sınıflar Atayın**
Uzun seçici listesi kullanmak yerine daha özel bir sınıf tanımı yapın.

{% highlight css %}
ul li a{...}
{% endhighlight %}

yerine a'ya smUrunler sınıfını atayıp

{% highlight css %}
.smUrunler{...}
{% endhighlight %}

şeklinde kullanın.

**Torun Seçicileri yerine Çocuk Seçicileri Kullanın**
Seçici tiplerinden torun seçicileri en yavaş yöntemlerden biridir.
Çocuk seçicileri nispeten daha avantajlıdır. Daha iyisi için bir sonraki
öneriye bakın.

**Etiket Kategorilerinde Çocuk Seçicileri Kullanmayın**
Etiket tabanlı çocuk seçicileriniz yerine özel seçici kullanınız.

{% highlight css %}
treehead > treerow > treecell {...}
{% endhighlight %}

yerine

{% highlight css %}
.treecell-header {...}
{% endhighlight %}

kullanın.

## CSS 3 ile gelen avantajlar

CSS seçicilerine CSS3 ile birlikte daha özel seçiciler geliyor. Bu
seçiciler sayesinde daha optimize kodlar elde edeceğiz. Şimdilik
İnternet Explorer'un mevcut sürümleri bu kullanıma izin vermese de
gelecekte işimiz daha kolay olacak.

## Sonuç

Yukarıdaki önerileri dikkate alarak kodlarımızı yazmalıyız. Ancak bunlar
kesin kurallar değildir ve uygulamada bazen bu kurallar uymakta
zorlanabiliriz. Benim önerim bu kuralları dikkate alarak yazmaya
çalışalım, olmadı isede kendimizi paralamayalım.

CSS seçicilerinin etkin kullanılması küçük çaplı projelerde çok büyük
etkisi olmasa da büyük projelerde performans açısından çok önemli
olduğunu düşünüyorum. Tabi şöyle bir durumda var css kod yazma
alışkanlığı kazanan bir arayüz geliştirici için bu küçük buna böyle
yazayım bu büyük buna böyle yazayım diye bir ayrım yapmasıda pek
mantıklı ve mümkün değildir. Bu nedenle kendi standardımızı en iyiye
göre yapalım proje küçük olmuş, büyük olmuş bizi ilgilendirmesin.

-   [https://developer.mozilla.org/en-US/docs/CSS/Writing_Efficient_CSS?redirect=no][]
-   [http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/][]
-   O'Reilly - Even Faster Websites.pdf 14. konu
-   [http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/][]
-   [http://ajaxian.com/archives/css-child-selector-performance][]
-   http://jackslocum.com/blog/2007/07/10/css-selectors-speed-myths
-   [http://hacks.mozilla.org/2009/06/dom-selectors-api/][]
-   [http://www.shauninman.com/archive/2008/05/05/css_qualified_selectors][]
-   http://blog.archive.jpsykes.com/153/more-css-performance-testing-pt-3
-   [http://www.infoq.com/news/2009/01/jquery-1.3][]
-   [http://code.google.com/speed/page-speed/docs/rendering.html][] (google'dan notlar)
-   [http://fatagnus.com/guidelines-for-writing-efficient-css-selectors/][]
-   [http://www.shauninman.com/archive/2008/05/05/css_qualified_selectors][]
-   [http://css-tricks.com/efficiently-rendering-css/][]
-   http://www.nuvographics.com/articles/efficientcss
-   [http://www.css-101.org/descendant-selector/go_fetch_yourself.php][] (yeni)

  [Writing Efficient CSS for use in the Mozilla UI]: https://developer.mozilla.org/en-US/docs/CSS/Writing_Efficient_CSS?redirect=no
    "Writing Efficient CSS for use in the Mozilla UI"
  [(X)HTML Sayfa Yapısı ve CSS Kullanımı]: http://www.fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/
    "(X)HTML Sayfa Yapısı ve CSS Kullanımı"
  [Özellik Seçicileri(Attribute Selectors)]: http://www.fatihhayrioglu.com/ozellik-secicileriattribute-selectors/
    "Özellik Seçicileri(Attribute Selectors)"
  [Sözde-sınıflar(Pseudo-class) ve Sözde-elementler(Pseudo-elements)]: http://www.fatihhayrioglu.com/pseudo-siniflari-ve-pseudo-elementleri/
    "Sözde-sınıflar(Pseudo-class) ve Sözde-elementler(Pseudo-elements)"
  [stevesouders.com'un test sayfasını]: http://stevesouders.com/efws/css-selectors/baseline.php
    "stevesouders.com'un test sayfasını"
  [google'un önerileride]: http://code.google.com/speed/page-speed/docs/rendering.html
    "google'un önerileride"
  [https://developer.mozilla.org/en-US/docs/CSS/Writing_Efficient_CSS?redirect=no]: https://developer.mozilla.org/en-US/docs/CSS/Writing_Efficient_CSS?redirect=no
    "https://developer.mozilla.org/en-US/docs/CSS/Writing_Efficient_CSS?redirect=no"
  [http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/]: http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/
    "http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/"
  [http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/]: http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/
    "http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/"
  [http://ajaxian.com/archives/css-child-selector-performance]: http://ajaxian.com/archives/css-child-selector-performance
    "http://ajaxian.com/archives/css-child-selector-performance"
  [http://hacks.mozilla.org/2009/06/dom-selectors-api/]: http://hacks.mozilla.org/2009/06/dom-selectors-api/
    "http://hacks.mozilla.org/2009/06/dom-selectors-api/"
  [http://www.shauninman.com/archive/2008/05/05/css_qualified_selectors]: http://www.shauninman.com/archive/2008/05/05/css_qualified_selectors
    "http://www.shauninman.com/archive/2008/05/05/css_qualified_selectors"
  [http://www.infoq.com/news/2009/01/jquery-1.3]: http://www.infoq.com/news/2009/01/jquery-1.3
    "http://www.infoq.com/news/2009/01/jquery-1.3"
  [http://code.google.com/speed/page-speed/docs/rendering.html]: http://code.google.com/speed/page-speed/docs/rendering.html
    "http://code.google.com/speed/page-speed/docs/rendering.html"
  [http://fatagnus.com/guidelines-for-writing-efficient-css-selectors/]: http://fatagnus.com/guidelines-for-writing-efficient-css-selectors/
    "http://fatagnus.com/guidelines-for-writing-efficient-css-selectors/"
  [http://css-tricks.com/efficiently-rendering-css/]: http://css-tricks.com/efficiently-rendering-css/
    "http://css-tricks.com/efficiently-rendering-css/"
  [http://www.css-101.org/descendant-selector/go_fetch_yourself.php]: http://www.css-101.org/descendant-selector/go_fetch_yourself.php
