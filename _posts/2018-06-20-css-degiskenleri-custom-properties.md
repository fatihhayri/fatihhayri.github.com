---
layout: post
title: CSS Değişkenleri (Custom Properties)
description: CSS Değişkenleri (Custom properties - Custom Variables) hakkında bilmeniz gerekenler. 
lang: tr_TR
Date: 2018-06-20 14:06
Category: CSS
tags: [custom-properties, variables, değişken]
image:
  feature: css-degiskenleri.png
---

CSS daha çok statik yetenekleri olan dinamik yetenekleri olmayan bir standarttır. Son zamanlarda bu statikliğinden sıyrılıp dinamik yetenekler kazanmaya başladı. CSS artık daha dinamik bir standart.

Değişkenler yazılım dillerinden alışık olduğumuz öğelerdir. CSS Önişlemcileriyle (pre-processor) uzun zamandır değişkenleri kullanabilmekteyiz. Ancak bunların normal CSS değişkenlerine göre yetenekleri kısıtlı. Standart koyucular yani W3C CSS Variables değil de CSS Custom Properties demesinin sebepleri var. Aşağıda açıklayacağım özelliklerden dolayı bu özellik sadece bir değişken değil farklı yetenekleri olan özel bir CSS özelliğidir. Bizim alışkanlıklarımızdan dolayı CSS değişkenleri diyeceğim.


CSS değişkenlerinin avantajlarını ikiye ayırmak lazım. Genel değişken avantajları ve Önişlemcilerinin değişkenlerine göre avantajları.

**Genel değişken avantajları**

 - Kolay okunabilir kodlar üretmemizi sağlarlar. Örneğin `#FF0000` renk tanımı ilk görünümde bir şey ifade etmez ama `ana-renk` tanımı daha anlamlıdır.
 - Geliştirme ve yeniden yapılandırmayı basitleştirir. Örneğin tek bir değişiklik ile sitedeki tüm renkleri değiştirme imkanımız olur.

**Önişlemci değişkenlerine göre avantajları**

 - Derlenmeye gerek yoktur.
 - **Dinamik olarak değiştirebiliriz. Örn: Medya sorgularına göre farklı değerler tanımlanabilir.**
 - **DOM ve CSSOM yeteneklerinden yararlanma imkanı.**
 - **Kalıtsal olarak aktarılma imkanı.**
 - Javascript ile erişebilme ve değiştirme imkanı.

Kalın olarak belirttiklerim hakkında aşağıda daha detaylı bilgi vereceğim. Bu güzel özelliği öğrenmeye başlayalım. 

Örnek

{% highlight css %}
a {
    color: #FF0000;
}

p {
    color: #FF0000;
}

div > span {
    color: #FF0000;
}
{% endhighlight %}


Kodumuzun farklı yerlerinde bulunan renk tanımlarımız olsun. Bu tanımları tek bir değişkene atayıp kullandığımız bu yerlerde değişkeni kullanabiliriz.

## CSS değişken sözdizimi

Tanımlarken çift tire `--` ile başlayan bir tanım yapılır. Değişkeni kullanırken `var()` şeklinde kullanılır. 

{% highlight css %}
:root {
    --anaRenk: #FF0000;
}

a {
    color: var(--anaRenk);
}

p {
    color: var(--anaRenk);
}

div > span {
    color: var(--anaRenk);
}  
{% endhighlight %} 
    
Tüm örnekler renk üzerinden veriliyor. Düzenli tasarlanmış sitelerde yazı tipleri, yazı boyutları ve mesafe (margin, padding) değerleri değişkenlere atanabilir. Bu sayede yönetimi ve yeniden yapılandırması daha kolay bir kod yapısı elde ederiz. 

CSS Önişlemcilerinin (pre-processor) değişken tanımları daha basit bence.

## Değişken kapsamı

Javascript'ten alışık olduğumuz değişkenlerin etkin olduğu alanlar vardır. Tüm kodu etkileyen **Genel değişkenler** ve sadece belirli kod blokunu etkileyen **yerel değişkenler**.

{% highlight css %}
:root {
    --ana-renk: #FF0000;
}

a {
    color: var(--ana-renk);
}

p {
    --ana-renk: #000000;
    color: var(--ana-renk);
}

div > span {
    color: var(--ana-renk);
}  
{% endhighlight %} 

`:root` içinde tanımlanan değişkenler genel değişkenlerdir. `p` elementi içinde tanımlanan `--ana-renk` tanımı yerel bir tanımdır ve sadece bu paragrafı etkiler.

Bir not olarak `:root` aslında `html` elementine karşılık geliyor.

## Kurtarma değerleri

CSS değişkenleri yeni standartlaşıyor. Bir çok tarayıcı şimdiden destekliyor. Peki desteklemeyenler için bir çözüm var mı? Evet.

{% highlight css %}
a {
    color: var(--ana-renk, red);
}
{% endhighlight %}


Değişken tanımı içinde virgül ile ayrılan alanın sonrasındaki tanımlar CSS değişkenlerini desteklemeyen tarayıcılar içindir. Desteklemeyen tarayıcılar virgülden sonrasını yorumlayacaktır. 

## Dört işlem (+,-,x,/)

CSS Önişlemcilerinin yeteneklerinden birisi de dört işlemi değişkenler ile  birlikte kullanabilme imkanıdır. CSS değişkenleriyle dört işlemi yapmak için calc() değerini kullanırız. 

{% highlight css %}
:root{
  --indent-size: 10px;

  --indent-xl: calc(2*var(--indent-size));
  --indent-l: calc(var(--indent-size) + 2px);
  --indent-s: calc(var(--indent-size) - 2px);
  --indent-xs: calc(var(--indent-size)/2);
}
{% endhighlight %}


Değer tanımı olmayan değişkenlerin dört işlemi çalışmıyor.

{% highlight css %}
:root{
  --bosluk: 10;
}

.box{
  padding: var(--bosluk)px 0; /* çalışmaz */
  padding: calc(var(--bosluk)*1px) 0; /* çalışır */
}
{% endhighlight %}


Değerli vermek daha mantıklı.

## DOM Yapısını kullanmak

CSS değişkenlerinin en güzel avantajlarından birisi DOM ve CSSOM yapısından yararlanıyor olmasıdır. 

Bir kutumuz olsun ve bu kutudan türettiğimiz farklı çeşitleri olsun.

{% highlight html %}
<div class="kutu">
  Standart kutu
</div>

<div class="kutu kirilmaz-esya-kutusu">
  Kırılmaz eşya kutusu
</div>
{% endhighlight %}


CSS değişkenleriyle şöyle bir şey yapabiliyoruz.

{% highlight css %}
.kutu {
  --kutu-boyutu: 18px;
  font-size: var(--kutu-boyutu);
}

.kirilmaz-esya-kutusu {
  --kutu-boyutu: 34px;
}
{% endhighlight %}


`.kutu` DOM ilişkilerinden yararlanarak font-size tanımını `.kirilmaz-esya-kutusu` sınıfına taşıyor. `.kirilmaz-esya-kutusu` sınıfı da `--kutu-boyutu` değişkeni değerini değiştirerek uyguluyor. Gereksiz tekrarlardan kurtuluyoruz.

<iframe height='300' scrolling='no' title='CSS değişkenleri DOM avantajı' src='//codepen.io/fatihhayri/embed/preview/YvpOLK/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/YvpOLK/'>CSS değişkenleri DOM avantajı</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Süper değil mi? CSS Önişlemcileri DOM oluşmadan derlendiği için bu gibi avantajlardan yararlanamıyor. 

## Dinamik olarak değiştirme

CSS değişkenleri CSS Önişlemcilerinde farklı olarak statik değil dinamiklerdir. Örneğin Medya sorguları ve :hover durumunda değişebilirler. 

Bir örnek ile nasıl olduğunu görelim. SASS ile bir örnek yapalım

<iframe height='300' scrolling='no' title='CSS değişkenleri dinamik' src='//codepen.io/fatihhayri/embed/preview/ERQOYy/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/ERQOYy/'>CSS değişkenleri dinamik</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

CSS değişkenleri ile 

<iframe height='300' scrolling='no' title='CSS değişkenleri dinamik' src='//codepen.io/fatihhayri/embed/preview/jKZQNo/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/jKZQNo/'>CSS değişkenleri dinamik</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Dinamik değişen değişkenler kod boyutumuzu azaltacaktır.

## Kalıtsallık

CSS değişkenleri kalıtsaldır. Bir elemana atanmış CSS değişkeni olmayabilir ancak üst elemanına tanımlanan CSS değişkeni o elemanın etkiler. Örnek:

{% highlight html %}
<div class="kap">
  <div class="eleman">
    <div class="bir"></div>
    <div class="iki"></div>
  </div>
</div>
{% endhighlight %}


CSS kodu:

{% highlight css %}
.eleman {
  --yazi-boyutu: 24px;
  font-size: var(--yazi-boyutu);
}

.iki {
  --yazi-boyutu: 44px;
  font-size: var(--yazi-boyutu);
}
{% endhighlight %}

 - `.eleman` öğesinin `24px` yazı boyutu olacak. (24px)
 - `.iki` öğesinin `44px` yazı boyutu olacak. (44px)
 - `.bir` öğesine atanmış bir CSS değişkeni olmamasına karşın üst elemanı olan `.eleman`  öğesine tanımlanmış CSS değişkeni kalıtsallık yoluyla `.bir` öğesi de aynı değeri taşıyacaktır. (24px)

 <iframe height='300' scrolling='no' title='CSS değişkenlerin kalıtsallığı' src='//codepen.io/fatihhayri/embed/bKLMQR/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/bKLMQR/'>CSS değişkenlerin kalıtsallığı</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Javascript ile CSS değişkenlerine erişim

CSS Önişlemcileriyle (pre-processor) CSS değişkenleri arasındaki en büyük fark CSS Değişkenlerine Javascript ile erişip değiştirme imkanımız vardır. 

    // satıriçi tanımları almak için
    element.style.getPropertyValue("--my-var");
    
    // herhangi bir elemana veya genel tanımlı değişken değerini almak için
    getComputedStyle(element).getPropertyValue("--my-var");
    
    // istediğimiz elemana atanmış değişkenin değerini değiştirmek için
    element.style.setProperty("--my-var", jsVar + 4);

<iframe height='300' scrolling='no' title='CSS değişkenlerin kalıtsallığı' src='//codepen.io/fatihhayri/embed/preview/bKLMQR/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/bKLMQR/'>CSS değişkenlerin kalıtsallığı</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Performans etkisi

CSS değişkenlerinin performans olarak nasıl bir etkisinin olacağına bakıldığında önemli iki nokta var. İlki CSS kalıtsallık özelliğinin değişken tanımlanmış eleman için ve alt elemanları içinde geçerli olduğundan dolayı. Dinamik olarak değiştirilen değişken değeri tarayıcıda performans etkisine neden olacaktır.

İkinci sorun calc() içinde kullanılan değişken değerleri birimsiz olarak hesaplanması soruna neden olur. Bunun yerine ilk başta calc() ile değeri hesaplayıp değişken tanımının sonra yapılmasıdır.

## Tarayıcı desteği

Tarayıcı desteği konusunda gayet güzel bir seviyede. IE11 ve Android browser'u saf dışı edenler için %100'lük bir desteği var.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

## Sonuç

CSS değişkenleri hakkında okuduğum yazılardan bir derleme yaptım. Bundan sonra CSS değişkenlerini aktif olarak kullanmak istiyorum. Kullandıkça daha güzel özellikleri ortaya çıkacaktır. Çıkan her güzelliği sizlerle paylaşacağım. 

CSS Önişlemcilerini severek kullanıyoruz. Büyük boyutlu dosyalarda derlenme uzun zaman beklemelere neden  oluyor. CSS Önişlemcilerinin en çok hangi özelliklerini kullanıyorum diye sorguladığımda 

 - Değişkenler
 - Fonksiyonlar (mixin)
 - İç içe kullanım (nested)

İlk üç sırayı alıyor. Değişken normal CSS'e geldi. İç içe kullanım da gelse fonksiyon kullanımı çok aramam hemen normal CSS'e geçerim. JsTurk slack kanalında bu konuyu konuşurken [Armağan Amcalar](https://arm.ag/)'ın savunduğu noktaya geliyoruz yavaş yavaş:)

CSS geliştirici grubu çok yavaş. Çok

Kalın sağlıcakla.

## Örnekler

 - [https://codepen.io/jakob-e/pen/ggGGRB](https://codepen.io/jakob-e/pen/ggGGRB) (SVG ve değişkenler)
 - [https://codepen.io/tobiasdev/pen/bgPNpQ](https://codepen.io/tobiasdev/pen/bgPNpQ) (template ve değişken)
 - [https://codepen.io/ohansemmanuel/pen/PQYzvv](https://codepen.io/ohansemmanuel/pen/PQYzvv) (komponentlr ve değişken)
 - [https://codepen.io/jakob-e/pen/GMGBdN](https://codepen.io/jakob-e/pen/GMGBdN) (akordiyon ve değişken)
 - [https://codepen.io/rauldronca/pen/VQJRga](https://codepen.io/rauldronca/pen/VQJRga) (yazı tipi boyutu ve değişkenler)
 - [https://codepen.io/oliviale/pen/jwepmL](https://codepen.io/oliviale/pen/jwepmL) (template ve değişken)
 - [https://codepen.io/dudleystorey/pen/jZGWjJ?editors=1100](https://codepen.io/dudleystorey/pen/jZGWjJ?editors=1100) (uyumlu web ve değişkenler)


## Kaynaklar

 - [https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)
 - [https://scrimba.com/g/gcssvariables](https://scrimba.com/g/gcssvariables)
 - [https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855](https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855)
 - [https://css-tricks.com/difference-between-types-of-css-variables/](https://css-tricks.com/difference-between-types-of-css-variables/)
 - [https://css-tricks.com/issue-preprocessing-css-custom-properties/](https://css-tricks.com/issue-preprocessing-css-custom-properties/)
 - [https://lisilinhart.info/posts/css-variables-performance/](https://lisilinhart.info/posts/css-variables-performance/)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
 - [https://www.sitepoint.com/practical-guide-css-variables-custom-properties/](https://www.sitepoint.com/practical-guide-css-variables-custom-properties/)
 - [https://zellwk.com/blog/responsive-vertical-rhythm/](https://zellwk.com/blog/responsive-vertical-rhythm/)
 - [https://youtu.be/2an6-WVPuJU](https://youtu.be/2an6-WVPuJU)
 - [https://medium.com/@mrpeker/5-dakikada-css-de%C4%9Fi%C5%9Fkenleri-%C3%B6%C4%9Fren-75e13fb5c8c5](https://medium.com/@mrpeker/5-dakikada-css-de%C4%9Fi%C5%9Fkenleri-%C3%B6%C4%9Fren-75e13fb5c8c5)
 - [https://webdesign.tutsplus.com/tutorials/how-to-use-css-variables-for-animation--cms-28868](https://webdesign.tutsplus.com/tutorials/how-to-use-css-variables-for-animation--cms-28868)
 - [https://vanseodesign.com/css/custom-properties/](https://vanseodesign.com/css/custom-properties/)
 - [https://www.slideshare.net/GiacomoZinetti/css-from-the-future?qid=17b6565d-b8ba-4896-9d0b-2d00d211cb88&v=&b=&from_search=6](https://www.slideshare.net/GiacomoZinetti/css-from-the-future?qid=17b6565d-b8ba-4896-9d0b-2d00d211cb88&v=&b=&from_search=6)
 - [https://youtu.be/19e7_3UmQrI](https://youtu.be/19e7_3UmQrI)
 - [https://uxdesign.cc/custom-colour-themes-for-your-product-6456df984167](https://uxdesign.cc/custom-colour-themes-for-your-product-6456df984167)
 - [https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables](https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables)
 - [https://www.youtube.com/watch?v=U9UU_fgpmO8](https://www.youtube.com/watch?v=U9UU_fgpmO8)