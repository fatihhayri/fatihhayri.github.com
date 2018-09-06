---
layout: post
title: :before ve :after Sözde Sınıflarının Kullanım Alanları
Date: 2015-04-07 14:41
Category: css
tags: [before after ikon gölge]
---

:before ve :after sözde sınıfları tanımlandığı elemanla ilişkili ve alt eleman olarak eklenir, isimlerinden de anlaşılacağı gibi içeriğin başına ve sonuna eklenirler. Kullanım alanlarını gördükçe ne kadar faydalı seçiciler olduğunu daha iyi anlayacağız. 

Bu makalede özellikle kullanım alanlarına değineceğim.  Daha önce bir çok sayfada kullandığım ve sitemde örneklerini verdiğim bu seçicileri önemine binaen daha detaylı anlatacağım.  [pseudo sınıfları ve pseudo elementleri](https://fatihhayrioglu.com/pseudo-siniflari-ve-pseudo-elementleri/) yazımda anlatmıştım. Basit bir kullanımı var. 

{% highlight css %}
p.not:before { 
    content: "Not." 
}
{% endhighlight %}

Gelelim kullanım yerlerine, tek tek kullanım yerlerini inceleyelim.

## İkon eklemek

:before yöntemi ikonların kullanımı için bence birebir çözüm oluşturuyor. Boostrap'in ikonları için kullandığı `<i>` veya `<span>` etiketi bana çok mantıklı gelmiyor. Zamanında **:before** ve **:after** desteği olmadığında `<i>` kullanmak mantıklı idi ama şimdi çok mantıklı bir kullanım değil bence. 

Hazırladığımız ikon sprite resminden ilgili ikonu **:before** ile ekleyebiliriz. Sprite resimlerinde boşluk ayarlamak gibi işlerle uğraşmaya da gerek kalmaz. 

{% highlight css %}
a:before {
    content: '';
    width: 20px;
    height: 20px;
    background:url(images/sprite) 0 0 no-repeat;
}
{% endhighlight %}

<iframe height='368' scrolling='no' src='//codepen.io/fatihhayri/embed/NPVyWx/?height=368&theme-id=13521' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

Tanımlanan ikonları konumlandırmak bu yöntem ile çok kolay oluyor.  

Aynı yöntemle yazı tipi ikolnarıda eklenebilir. Yazı tipi ikonları kullanırken content kısmına ilgili karakter konulur. [https://fatihhayrioglu.com/font-face-yardimi-ile-ikon-eklemek-yeni-tl-sembolu-eklemek/](https://fatihhayrioglu.com/font-face-yardimi-ile-ikon-eklemek-yeni-tl-sembolu-eklemek/)

## clearfix

Float uygulanmış elementleri tam kapsayamama sorunu halletmek içinde :before ve :after yardımı gerekir.

{% highlight css %}
/* For modern browsers */
.clearfix:before,
.clearfix:after {
    content:"";
    display:table;
}
 
.clearfix:after {
    clear:both;
}
{% endhighlight %}

Bİr çok arayüz geliştiricinin hazır kod kütüphanesinde vardır bu kod. Şimdilerde CSS önişlemcilerinde mixin listesinin başında yer alır bu kod. 

## Çoklu kenar kullanımı

Daha önceki [çoklu kenar oluşturmak](https://fatihhayrioglu.com/coklu-kenar-cizgisiborder-kullanimi/) yazımdaki örnekte görebileceğimiz gibi.

{% highlight css %}
#cokluKenarCizgisi:before{
    border: 5px solid #06F;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
}
{% endhighlight %}

Kapsayıcı elemanın genişlik ve yüksekliğini alması için **position:absolute** tanımlanıp; **left, right, top** ve **bottom** değerleri sıfırlanmıştır. 

<iframe style="width: 100%; height: 230px" src="https://jsfiddle.net/fatihhayri/L8ZHT/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## CSS ile şekil eklemek 

[CSS ile üçgen yapmak](https://fatihhayrioglu.com/css-ile-ucgen-ok-yapmak/) yazımızdaki örneği inceleyelim.

{% highlight css %}
.konusma-balonu:after{
  content: '';
  position:absolute;
  left: 30px;
  top:-15px;
  border-style: solid;
  border-width: 0 15px 15px 15px;;
  border-color: transparent transparent #40DBE5 transparent;  
}

.konusma-balonu:before{
  content: '';
  position:absolute;
  left: 29px;
  top:-16px;
  border-style: solid;
  border-width: 0 16px 16px 16px;;
  border-color: transparent transparent #6b5fb3 transparent;  
}
{% endhighlight %}

CSS ile oluşturulan ok :before ile, okun kenarçizgisi ise :after ile ekleniyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/JhrdC?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

CSS ile şekil üretirken altıgen yapmak içinde :after yardımı ile çözümler mevcut. [http://www.cssportal.com/css3-shapes/](http://www.cssportal.com/css3-shapes/)

## Gölge çeşitleri eklemek

CSS3 box-shadow örnekleri yazısında ve diğer estetik gölge örneklerinde **:before** ve **:after** yardımı gerekmektedir. [http://www.creativejuiz.fr/blog/tutoriels/ombre-avancees-avec-css3-et-box-shadow](http://www.creativejuiz.fr/blog/tutoriels/ombre-avancees-avec-css3-et-box-shadow) bu sitedeki örnekler çok süper.

## Sonuç
Yukarıda listelediğim ve listelemeyi unuttuğum(kaynaklarda var) işleri **:before** ve **:after** ile yapabiliriz. İşin mantığını anlatmak için yukarıdaki listeyi yazdım. Genel olarak mantığı kavradıktan sonra web sayfalarımızda gerektikçe bu sözde sınıfları kullanmak bizim elimizi güçlendirir. 

Bazı durumlarda keşke bir kaç tane daha olsa kullansak dediğim oluyor :D

Bu yazıyı özellikle [Murat Çorlu](http://muratcorlu.com/)'ya ithaf ediyorum. 3 sene önce **:before** ve **:after** yazısı yazacaktı. Artık yazar bu göndermeden sonra :D

Kalın sağlıcakla.

## Kaynaklar

 - [http://designshack.net/articles/css/the-lowdown-on-before-and-after-in-css/](http://designshack.net/articles/css/the-lowdown-on-before-and-after-in-css/)
 - [http://www.quirksmode.org/css/beforeafter_content.html](http://www.quirksmode.org/css/beforeafter_content.html)
 - [https://css-tricks.com/pseudo-element-roundup/](https://css-tricks.com/pseudo-element-roundup/)
 - [http://coding.smashingmagazine.com/2011/07/13/learning-to-use-the-before-and-after-pseudo-elements-in-css/](http://coding.smashingmagazine.com/2011/07/13/learning-to-use-the-before-and-after-pseudo-elements-in-css/)
 - [https://developer.mozilla.org/en/CSS/%3A%3Abefore](https://developer.mozilla.org/en/CSS/::before)
 - [http://stackoverflow.com/questions/4181884/after-and-before-css-pseudo-elements-hack-for-ie-7](http://stackoverflow.com/questions/4181884/after-and-before-css-pseudo-elements-hack-for-ie-7)
 - [http://reference.sitepoint.com/css/pseudoelement-before](http://reference.sitepoint.com/css/pseudoelement-before)
 - [http://reference.sitepoint.com/css/pseudoelement-after](http://reference.sitepoint.com/css/pseudoelement-after)
 - http://calebogden.com/css-before-and-after/
 - [http://www.hongkiat.com/blog/pseudo-element-before-after/](http://www.hongkiat.com/blog/pseudo-element-before-after/)
 - [http://red-team-design.com/css3-breadcrumbs/](http://red-team-design.com/css3-breadcrumbs/)

