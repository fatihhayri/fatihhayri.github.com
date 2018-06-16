---
layout: post
title: CSS&#039;de Kalıtsallık(Inheritance)
Date: 2007-01-14 15:43
Category: CSS, Web Standartları, XHTML
tags: [CSS, inheritance, kalıtsallık, Web Standartları, XHTML]
---

HTML dokümanlarının yapısından ve CSS ile olan ilişkisinden [(X)HTML Sayfa Yapısı ve CSS Kullanımı][] makalesinde bahsetmiştik, bu makaleden
önce bir göz atmanızı tavsiye ederiz. HTML öğeleri bir biri ile bir
ailenin birbiri ile olan bağı gibi bağlıdır. Hatırlıyorsanız bir soy
ağacı benzetmesi yapmıştık. İşte bu soy ağacının öğeleri arasında bir
kalıtsallık söz konusudur. Ebeveynden çocuğuna geçen özellikler gibi
HTML öğeleri arasında CSS özellikleride kalıtsal olarak alt
elementleri (çocuk element) etkiler. Kalıtsallık; CSS ile web
sayfası kodlarken tüm elementlere tek tek atama yapabildiğimiz gibi
birde bir elemente atama yaparız ve bu özellik tüm alt([çocuk elementleri][(X)HTML Sayfa Yapısı ve CSS Kullanımı]) elementlerine de
uygulanır buna kalıtsallık denir. CSS'in bir çok özelliğinin kalıtsallık
özelliği vardır. [Hızlı CSS Referansı][] bölümü ve alt bölümlerinde her
özelliğin kalıtsallık durumunu belirtmiştik.

Bazı CSS özelliklerinde kalıtsallık yoktur. Örneğin margin, padding ve
border özellikleri gibi tüm liste aşağıda

CSS1'de kalıtsallığı olmayan özelliklerin listesi:

   -   background-color
   -   background-image
   -   background-repeat
   -   background-attachment
   -   background-position
   -   background
   -   text-decoration
   -   vertical-align
   -   margin-top
   -   margin-right
   -   margin-bottom
   -   margin-left
   -   margin
   -   padding-top
   -   padding-right
   -   padding-bottom
   -   padding-left
   -   padding
   -   border-top-width
   -   border-right-width
   -   border-bottom-width
   -   border-left-width
   -   border-width
   -   border-color
   -   border-style
   -   border-top
   -   border-right
   -   border-bottom
   -   border-left
   -   border
   -   width
   -   height
   -   float
   -   clear
   -   display

Örnek bir kodlama yaparsak:

{% highlight css %}
.icerik {
  text-align: center;
}
{% endhighlight %}

{% highlight html %}
<div class="icerik">
  Buradaki içerik ortalanacaktır 
  <p> text-align özelliğinin kalıtsallığı olduğu için buradaki içeirkte ortalanacaktır </p>
</div>
{% endhighlight %}

<iframe height='300' scrolling='no' title='zRWqJV' src='//codepen.io/fatihhayri/embed/zRWqJV/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/zRWqJV/'>zRWqJV</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Kalıtsallık kodlama yaparken bazen bize yararlı olur, bazende
sayfalarımızda sorun çıkmasına neden olur. Bundan dolayı elementlerin
kaltsallığı olup olmadığını bilmeliyiz. Yoksa gerçekten zor durumlarda
kalabilirsiniz, tecrübeyle sabit :)

**Direk atamalar kalıtsallığı yok eder.**Örneğin yukarıda örnekte

{% highlight css %}
p{ 
  text-align: left;
}
{% endhighlight %}

tanımlaması ile üst element olan **#icerik**'den kalıtsal olarak gelen
**text-align: center;** tanımlamasını etkisiz kılar.

## inherit değeri

CSS2 ile birlikte CSS özelliklerine *inherit* değeri atamamıza olanak
sağlamaktadır. Tüm elementlere (kalıtsallık özelliği olmayanlar dahil)
*inherit* değeri atayabiliriz. *inherit* değeri atadığımız element üst
elementinin değerlerini alacaktır. Bir örnek yapacak olursak:

{% highlight css %}
.icerik {
  border: 1px solid #000;
}
.bilgi {
  border: inherit;
}
{% endhighlight %}

{% highlight html %}
<div class="icerik">
  Bu içeriği kenarlığı olacaktır
  <div class="bilgi"> 
    Bu bilgi de kenarlık bilgisini üstten elementten 
    alarak kenarlığı olacaktır. 
  </div>
</div>
{% endhighlight %}

<iframe height='300' scrolling='no' title='inheritance' src='//codepen.io/fatihhayri/embed/EQEKdq/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/EQEKdq/'>inheritance</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Kalıtsallığı kullanarak kodlarımızı azaltabiliriz. Ancak kalıtsallık
nedeni ile de bir çok sorunla karşılaştığımızıda unutmayalım.

## Kaynaklar

-   http://www.simplebits.com
-   [http://www.devarticles.com][]
-   [http://www.w3.org/TR/REC-CSS1#inheritance][]
-   [http://www.adobe.com/][]
-   [http://www.creativepro.com/][]
-   [http://meyerweb.com/][]


  [(X)HTML Sayfa Yapısı ve CSS Kullanımı]: http://www.fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/
  [Hızlı CSS Referansı]: http://www.fatihhayrioglu.com/hizli-css-referansi/
  [http://www.devarticles.com]: http://www.devarticles.com/c/a/Web-Style-Sheets/Learn-CSS-Introduction-to-Inheritance-Specificity-and-Cascade/3/
  [http://www.w3.org/TR/REC-CSS1#inheritance]: http://www.w3.org/TR/REC-CSS1#inheritance
  [http://www.adobe.com/]: http://www.adobe.com/devnet/dreamweaver/articles/css_inheritance.html
  [http://www.creativepro.com/]: http://www.creativepro.com/story/feature/14776.html
  [http://meyerweb.com/]: http://meyerweb.com/eric/articles/webrev/199903.html
