---
layout: post
title: CSS&#039;de Kalıtsallık(Inheritance)
Date: 2007-01-14 15:43
Category: CSS, Web Standartları, XHTML
tags: CSS, inheritance, kalıtsallık, Web Standartları, XHTML
---

XHTML dokümanlarının yapısından ve CSS ile olan ilişkisinden [(X)HTML Sayfa Yapısı ve CSS Kullanımı][] makalesinde bahsetmiştik, bu makaleden
önce bir göz atmanızı tavsiye ederiz. XHTML öğeleri bir biri ile bir
ailenin birbiri ile olan bağı gibi bağlıdır. Hatırlıyorsanız bir soy
ağacı benzetmesi yapmıştık. İşte bu soy ağacının öğeleri arasında bir
kalıtsallık söz konusudur. Ebeveynden çocuğuna geçen özellikler gibi
XHTML öğeleri arasında CSS özellikleride kalıtsal olarak alt
elementleri(çocuk element) etkiler. Kalıtsallık; CSS ile web
sayfası kodlarken tüm elementlere tek tek atama yapabildiğimiz gibi
birde bir elemente atama yaparız ve bu özellik tüm alt([çocuk elementleri][(X)HTML Sayfa Yapısı ve CSS Kullanımı]) elementlerinede
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

    :::css
     div#icerik { text-align: center; }

    :::html
     <div id="icerik"> Buradaki içerik ortalanacaktır <p> text-align özelliğinin kalıtsallığı olduğu için buradaki içeirkte ortalanacaktır </p> </div>

![][100]

Kalıtsallık kodlama yaparken bazen bize yaralı olur, bazende
sayfalarımızda sorun çıkmasına neden olur. Bundan dolayı elementlerin
kaltsallığı olup olmadığını bilmeliyiz. Yoksa gerçekten zor durumlarda
kalabilirsiniz, tecrübeyle sabit :)

**Direk atamalar kalıtsallığı yok eder.**Örneğin yukarıda örnekte

    :::css
     p{ text-align: left; }

tanımlaması ile üst element olan **#icerik**'den kalıtsal olarak gelen
**text-align: center;** tanımlamasını etkisiz kılar.

NN4x ve IE5x ve alt versiyonlarında **body** içerisindeki **font**
tanımlamasının **table** elementine etki etmemesi gibi bir sorunumuz
vardır.

body {font-size: 0.8em;}

tanımlaması NN4x ve IE5x'de kodlama içindeki tabloları
etkilemeyecektir. Bunun için

body, td, th {font-size: 0.8em;}

gibi bir tanımlama daha uygun bir tanımlama şeklidir.


## inherit değeri

CSS2 ile birlikte CSS özelliklerine *inherit* değeri atamamıza olanak
sağlamaktadır. Tüm elementlere(kalıtsallık özelliği olmayanlar dahil)
*inherit* değeri atayabiliriz. *inherit* değeri atadığımız element üst
elementinin değerlerini alacaktır. Bir örnek yapacak olursak:

    :::css
    div#icerik {
        border: 1px solid #000;
    }
    div#bilgi {
        border: inherit;
    }

    :::html
    <div id="icerik"> Bu içeriği kenarlığı olacaktır <div id="bilgi"> Bu bilgi de kenarlık bilgisini üstten elementten alarak kenarlığı olacaktır. </div> </div>

![][1]

Kalıtsallığı kullanarak kodlarımızı azaltabiliriz. Ancak kalıtsallık
nedeni ile de bir çok sorunla karşılaştığımızıda unutmayalım.

## Kaynaklar

-   [http://www.simplebits.com/][]
-   [http://www.devarticles.com][]
-   [http://www.w3.org/TR/REC-CSS1#inheritance][]
-   [http://www.adobe.com/][]
-   [http://www.creativepro.com/][]
-   [http://meyerweb.com/][]


  [(X)HTML Sayfa Yapısı ve CSS Kullanımı]: http://www.fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/
  [Hızlı CSS Referansı]: http://www.fatihhayrioglu.com/hizli-css-referansi/
  [100]: /dokumanlar/kalitsallik_ornek1.gif
  [1]: /dokumanlar/kalitsallik_ornek2.gif
  [http://www.simplebits.com/]: http://www.simplebits.com/notebook/2003/04/15/css_inheritance.html
  [http://www.devarticles.com]: http://www.devarticles.com/c/a/Web-Style-Sheets/Learn-CSS-Introduction-to-Inheritance-Specificity-and-Cascade/3/
  [http://www.w3.org/TR/REC-CSS1#inheritance]: http://www.w3.org/TR/REC-CSS1#inheritance
  [http://www.adobe.com/]: http://www.adobe.com/devnet/dreamweaver/articles/css_inheritance.html
  [http://www.creativepro.com/]: http://www.creativepro.com/story/feature/14776.html
  [http://meyerweb.com/]: http://meyerweb.com/eric/articles/webrev/199903.html
