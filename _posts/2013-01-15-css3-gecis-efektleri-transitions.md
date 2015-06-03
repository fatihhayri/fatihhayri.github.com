---
layout: post
title: CSS3 Geçiş Efektleri(Transitions)
Slug: css3-gecis-efektleri-transitions
Date: 2013-01-15 11:37
Category: CSS, HTML5
tags: css3, geçiş-efektleri, transitions, animasyon
---

## Genel Tanım

CSS anlık geçişleri bünyesinde barındırıyordu. Birçok uygulamamızda bir
bağlantının üzerine geldiğinde bağlantının rengi değiştiriyor,
düğmemizin ardalan rengini değiştiriyorduk.

CSS3 ile birlikte ani geçişlere artı olarak yeni merhale merhale
geçişler eklenmiştir. Geçişler yavaş yavaş olduğu gibi uzun uzadıya
geçişlerde mevcuttur. Durumu daha iyi anlayabilmek için yukarıda
bahsettiğimiz gibi bir fare imlecinin bağlantı üzerine geldiğinde renk
değişmesini anlık değil merhale merhale değiştirelim.


<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/IpEnx?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Renk geçişi belli bir zaman aralığına yayılacaktır ve iki renk
arasındaki geçişte ara renkler görünecektir. Bu geçişe bazı efektlerde
ekleyebiliyoruz. Geçişin merhale merhale olması göze daha hoş
gelecektir.

Bu işleri daha önce flash veya javascript yapıyorken artık CSS3 yardımı
ile yapabilecek olmamız çok güzel bir gelişme. Basit tek satır
kod(farklı tarayıcılar için yazılan önekler zamanla teke inecektir.) ile
bu işi yapmak ayrı bir kolaylık tabi.

{% highlight css %}
transition: property duration timing-function delay;
{% endhighlight %}

## Transtion Özellikleri

Geçiş efektlerini uygulamak için aşağıdaki özelliklerden yararlanacağız.

-   transition-property
-   transition-duration
-   transition-delay
-   transition-timing-function
-   transition

Şimdi bu özellikleri tek tek inceleyelim.

### Geçiş Efekti Hangi Özellik İle Yapılacağını Belirleme(transition-property)

Uygulanan geçiş efektinin elemanın hangi özelliği üzerinden yapılacağını
belirlemek için transition-property özelliğini kullanırız.

**Yapısı:** transition-property: none | all | [ \<IDENT\> ] [ ',’ \<IDENT\>]\*\\
**Aldığı Değerler:** none | all | [ \<IDENT\> ] [ ',’ \<IDENT\> ]\*\\
**Başlangıç değeri:** all\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Örneğin color değeri geçiş uygulanacak elemanın başlangıç ve son rengi
arasında bir geçiş olacağını gösterir.

all değeri tüm tanımlarda geçiş yapılacağı anlamındadır.

{% highlight css %}
a{
   color:red;
   transition-property: color;
}

a:hover {
   color:blue;
}
{% endhighlight %}

### Geçiş Efekti Uzunluğunu Belirleme (transition-duration)

Geçiş efektlerini uygularken verdiğimiz efektin ne kadar süre ile devam
edeceğini ayarlayabiliyoruz. Bu ayarlamayı transition-duration özelliği
yapıyoruz.

**Yapısı :** transition-duration: \<zaman\> [, \<zaman\>]\*\\
**Aldığı Değerler :** \<zaman\> [, \<zaman\>]\*\\
**Başlangıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

0 değeri geçişin hemen olacağı anlamına gelir. Eksi değerler 0 olarak
yorumlanır.

{% highlight css %}
a{
   color:red;
   transition-property: color;
   transition-duration:0.5s;
}
a:hover {
   color:blue;
}
{% endhighlight %}

### transition-delay

Uygulanan geçiş efektinin ne kadar zaman sonra başlayacağını belirler.
Belirlenen zamana kadar animasyonu durdurur ve sonra animasyon başlar.

{% highlight css %}
a {
   color:red;
   transition-property: color;
   transition-duration:0.5s;
   transition-delay: 0.5s;
}
a:hover {
   color:blue;
}
{% endhighlight %}

Animasyonumuz 0.5 saniye sonra başlayacaktır.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/bkFsm?type=css&amp;height=250" id="cp_embed_hgplm"></iframe>

### transition-timing-function

Oluşturacağımız geçişlere daha estetik geçişler sağlamak için kullanılan
fonksiyonlardır. CSS3 ile birlikte gelen transition efekti başlangıç
tanımı doğrusal bir geçiştir. Biz bu özelliğe ease, ease-in, ease-out,
ease-in-out ve cubic-bezier değerlerini tanımlayabiliyoruz. cubic-bezier
tanımı ise geçişleri kendimize göre tanımlama imkanı veriyor. Kendi
zaman çizgimizi hazırlamak(cubic-bezier) biraz zor olsa da internet
üzerindeki bazı araçlar yardımı ile bu işte kolaylaştırılmıştır.

Daha önce sizlerle paylaştığım bu araçlar

-   [http://matthewlein.com/ceaser/](http://matthewlein.com/ceaser/)
-   [http://easings.net/](http://easings.net/)
-   [http://jeremyckahn.github.com/stylie/](http://jeremyckahn.github.com/stylie/)

ile transition-timing-function özelliğini kullanmak bir zevk haline
geliyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/Alapk?type=css&amp;height=250" id="cp_embed_hgplm"></iframe>

### transition kısayolu

Yukarıda tek tek ayrı ayrı her özelliği tanımlayabildiğimiz gibi teek
bir tannımlama ile bunları kısa bir şekilde tanımlamak da mümkün.

{% highlight css %}
transition-property: width;
transition-duration:0.5s;
transition-delay: 0.5s;
transition-timing-function:ease-in-out;
{% endhighlight %}

Yukarıdaki son örnekte geçiş tanımlarımız 4 adet idi. Biz burada bunları
tek bir tanımda toplayalım.

{% highlight css %}
transition: width 0.5s ease-in-out 0.5s;
{% endhighlight %}

Görüldüğü gibi kodumuz daha kısa bir hal aldı. bundan sonra bu şekilde
kullanmayı tercih edeceğim.

### Çoklu Geçiş Kullanımı

Yukarıda yaptığımız gibi tek bir özellik üzerinden geçiş efekti
uygulayabildiğimiz gibi virgül ile ayırmak kaydı ile birden fazla geçiş
efekti de uygulayabiliriz.

{% highlight css %}
input{
   display:block;
   background-color:#788182;
   border:0;
   border-radius:5px;
   width:100px;
   padding:5px 10px;
   color:#fff;
   transition: width .5s ease-in-out, background .3s ease;
}

input:focus {
   width:250px;
   background-color:#50ebd6
}
{% endhighlight %}

Son örneğimizde arama alanına odaklandığımızda genişliğini ve ardalan
rengini geçiş efekti ile değiştirdi.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/iorBc?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

## Geçiş Efektini Tetiklemek

Geçiş efektlerini tetiklemek için genelde :hover sözde sınıfı kullanılsa
da :active, :target, :focus gibi sözde sınıfları da kullanılabilir.

Ayrıca javascript ile DOM’a yapılan müdahaleler de buna eklenebilir.

{% highlight css %}
a{
 display:block;
 background-color:#c4342f;
 padding:5px 10px;
 width:100px;
 color:#fff;
 transition: background-color 2s ease-in-out 1s;
}
a.tetikle {
 background-color:blue;
}
{% endhighlight %}

Javascript ilede bu bağlantıya tetikle diye bir sınıf tanımlayalım.

{% highlight javascript %}
document.querySelector('a').className = 'tetikle';
{% endhighlight %}

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/DGvlB?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

## Javascript ile Geçişin Bittiğinin Kontrolü

Javascript ile geçiş efektinin bittiğini kontrol etmek çok basit.

{% highlight javascript %}
myElement.addEventListener("transitionend", function() {
// geçiş efekti bttikten sonra bunu yap
}, true);
{% endhighlight %}

Geçiş efekti tamamlandığında transitionend foksiyonunu tetkilyecektir.

## Tarayıcı Uyumu

CSS3 ile gelen bir çok özellik gibi geçiş efekti özelliklerinin de önek
ve internet explorer sorunları mevcuttur.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+ (-webkit)**|**10+**|**4.0+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

İnternet Explorer 10 ile gelen geçiş efekti desteğini öneksiz
eklemiştir. Şu an aktif olarak kullanılan ie8 ve ie9 sürümlerinde bu
özelliğin olmaması mevcut sitelerimizde bu özellikleri kullanmamız
önündeki en büyük engeldir.

## Kaynaklar

-   [http://www.w3.org/TR/css3-transitions/](http://www.w3.org/TR/css3-transitions/)
-   [http://www.alistapart.com/articles/understanding-css3-transitions/](http://www.alistapart.com/articles/understanding-css3-transitions/)
-   [https://developer.mozilla.org/en/CSS/CSS\_transitions](https://developer.mozilla.org/en/CSS/CSS_transitions)
-   [http://24ways.org/2009/going-nuts-with-css-transitions](http://24ways.org/2009/going-nuts-with-css-transitions)
-   [http://www.impressivewebs.com/css3-transitions-without-hover/](http://www.impressivewebs.com/css3-transitions-without-hover/)
-   [http://www.css3.info/preview/css3-transitions/](http://www.css3.info/preview/css3-transitions/)
-   [http://samuli.hakoniemi.net/css3-transitions-are-we-there-yet/](http://samuli.hakoniemi.net/css3-transitions-are-we-there-yet/)
-   [http://css3.bradshawenterprises.com/transitions/](http://css3.bradshawenterprises.com/transitions/)
-   [http://www.joelambert.co.uk/morf/](http://www.joelambert.co.uk/morf/) (araç)
-   [http://cubic-bezier.com/](http://cubic-bezier.com/#.17,.67,.83,.67) (araç)
-   [http://www.roblaplaca.com/examples/bezierBuilder/](http://www.roblaplaca.com/examples/bezierBuilder/) (araç)
-   [http://www.netzgesta.de/dev/cubic-bezier-timing-function.html](http://www.netzgesta.de/dev/cubic-bezier-timing-function.html) (araç)
-   [http://www.kirupa.com/html5/looking\_at\_css3\_transitions.htm](http://www.kirupa.com/html5/looking_at_css3_transitions.htm)
-   [http://bavotasan.com/2011/a-simple-fade-with-css3/](http://bavotasan.com/2011/a-simple-fade-with-css3/)
-   [http://tympanus.net/codrops/2011/10/19/blur-menu-with-css3-transitions/](http://tympanus.net/codrops/2011/10/19/blur-menu-with-css3-transitions/) (örnek)
-   [http://caniuse.com/css-transitions](http://caniuse.com/css-transitions) (tarayıcı desteği)
-   [http://www.opera.com/docs/specs/presto23/css/transitions/](http://www.opera.com/docs/specs/presto23/css/transitions/)
-   [http://www.adobe.com/devnet/html5/articles/using-css3-transitions-a-comprehensive-guide.html](http://www.adobe.com/devnet/html5/articles/using-css3-transitions-a-comprehensive-guide.html)
-   [http://smashinghub.com/css3-transitions-and-animations.htm](http://smashinghub.com/css3-transitions-and-animations.htm) (örnekler)
-   [http://msdn.microsoft.com/en-us/library/ie/hh673535(v=vs.85).aspx](http://msdn.microsoft.com/en-us/library/ie/hh673535(v=vs.85).aspx)
-   [http://tv.adobe.com/watch/learn-dreamweaver-cs6/using-the-css-transitions-panel/?go=13279](http://tv.adobe.com/watch/learn-dreamweaver-cs6/using-the-css-transitions-panel/?go=13279)
-   [http://www.phpkodlari.com/css-dersleri/css3-transitions-ozelligi/](http://www.phpkodlari.com/css-dersleri/css3-transitions-ozelligi/)
-   [http://blogs.msdn.com/b/ie/archive/2011/11/21/adding-personality-with-css3-transitions-and-animations.aspx](http://blogs.msdn.com/b/ie/archive/2011/11/21/adding-personality-with-css3-transitions-and-animations.aspx)
-   [http://www.inserthtml.com/2012/01/definitive-guide-css-animations-transitions/\#transitions](http://www.inserthtml.com/2012/01/definitive-guide-css-animations-transitions/#transitions)
-   [http://vimeo.com/49879139](http://vimeo.com/49879139) (video)
-   [http://ricostacruz.com/jquery.transit/](http://ricostacruz.com/jquery.transit/) (jquery ile tüm tarayıcılar için)
-   [http://www.netmagazine.com/tutorials/more-efficient-css3-transitions](http://www.netmagazine.com/tutorials/more-efficient-css3-transitions)
-   [http://proto.io/freebies/onoff/](http://proto.io/freebies/onoff/) (örnek)
-   [http://geebart.com/blog/easy-css3-transitions-tutorial](http://geebart.com/blog/easy-css3-transitions-tutorial)
-   [http://webdesigncrowd.com/animated-navigation-css3-transitions-transforms/](http://webdesigncrowd.com/animated-navigation-css3-transitions-transforms/)
-   [http://davidwalsh.name/css-transitions](http://davidwalsh.name/css-transitions)
-   [http://css3.bradshawenterprises.com/transitions/](http://css3.bradshawenterprises.com/transitions/)
-   [http://www.webdesignerdepot.com/2012/12/how-to-use-the-css3-transition-property/](http://www.webdesignerdepot.com/2012/12/how-to-use-the-css3-transition-property/)
-   [http://www.problogdesign.com/coding/get-started-with-css3-transitions-today](http://www.problogdesign.com/coding/get-started-with-css3-transitions-today)
-   [http://code.tutsplus.com/tutorials/css-fundamentals-css3-transitions--pre-10922](http://code.tutsplus.com/tutorials/css-fundamentals-css3-transitions--pre-10922)

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png