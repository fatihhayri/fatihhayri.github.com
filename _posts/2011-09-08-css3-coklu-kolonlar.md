---
layout: post
title: CSS3 Çoklu Kolonlar
Date: 2011-09-08 20:50
Category: CSS
tags: column-break, column-count, column-fill, column-gap, column-rule, column-span, column-width, columns, css3, çoklu kolonlar
---

Çoklu kolonlar metinlerin normal akışı dışında kolonlara bölünmesini ve
gazete ve dergilerdeki çoklu kolonlu yapıya kavuşmasını sağlar.

Uzun ve geniş alanlardaki metinlerin okunmaları daha zordur.
[Tipografi][] açısından belirli genişlikteki alanların metinleri daha
okunaklı olduğu kabul edilir. Bu özellik bize daha okunaklı alanlar
oluşturmamızı sağlıyor.

Çoklu kolonlu yapılar çokta yeni bir özellik değildir. [A List Apart][]
sitesindeki ilgili yazı 2005 tarihinde yazıldığını düşünürsek yaklaşık 6
sene olmuş ve buda az zaman değil.

Çoklu kolonları düzenlemek için bir kaç özellik vardır. Kolon yapısını,
genişliğini ve ara alanlar oluşturmak için bu özellikleri kullanırız.

Çoklu kolon oluşturmak ve düzenlemek için 8 adet özellik vardır.

-   column-count
-   column-width
-   columns
-   column-gap
-   column-rule
-   column-break veya break-*
-   column-span
-   column-fill

Çoklu kolon özelliklerini iki kısma ayırabiliriz.

-   column-count
-   column-width
-   column-gap
-   column-rule

Yeni nesil tarayıcıların tümünün(ie hariç) desteklediği özellikler ve

-   columns
-   column-break veya break-*
-   column-span
-   column-fill

Sadece webkit tabanlı tarayıcıların desteklediği özellikler var. Biz
şimdi sıra ile tanıtalım.

Elemanları kolonlara bölmek için **column-count** ve **column-width**
özelliklerini kullanıyoruz.

## column-count

Elemanı ayıracağımız kolon sayısını belirlememizi sağlar. Başlangıç
değeri auto olarak tanımlıdır. Bu sayede sadece **column-width** tanımı
ile ile

{% highlight css %}
#cokluKolon{
  -moz-column-count:3;
  -webkit-column-count:3;
  column-count:3;
  width:968px;
  margin:0 auto;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/HZZ8t/1/embedded/css,result,html"></iframe>

Genişlik tanımı yapılmadan kolonlara bölme işlemi gerçekleşmiyor.
Tarayıcılara göre farklı öneklerle kullanmamız dışında tek satırsa
elemanları kolonlara bölmek bize çok büyük kolaylık sağlayacaktır.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|**1.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## column-width

Elemanları kolonlara bölmek için diğer bir yöntemde **column-width** ile
genişlik tanımı yapmaktır. Tarayıcılar belirlenen genişliğe göre
kapsayıcının genişliğine göre otomatik olarak kolonlara bölecektir.

{% highlight css %}
#cokluKolon{
    -moz-column-width:150px;
    -webkit-column-width:150px;
    column-width:150px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/SkXL4/1/embedded/css,result,html"></iframe>

Bir genişlik tanımı yapılırsa **column-width** değeri tanımlandığı kadar
kolona bölüyor.

{% highlight css %}
#cokluKolon{
    -moz-column-width:150px;
    -webkit-column-width:150px;
    column-width:150px;
    width:950px;
}
{% endhighlight %}

column-width ile **column-count** aynı anda kullanabiliriz.

{% highlight css %}
#cokluKolon{
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 150px;
    -moz-column-width: 150px;
    column-width: 150px;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|**1.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## columns

**column-count** ve **column-width** değerlerini tek seferde
kullanabileceğimiz bir kısayol tanımıdır.

{% highlight css %}
div {
	columns: 200px 5;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|*desteklemeiyor*|
{: .tarayici-uyumi}

Burada araya girip gördüğüm bir sorunu yazayım. **column-count** ve
**column-width** tanımları birlikte yapılınca veya columns tanımı
yapıldığında Firefox ve Google Chrome ile Opera farklı yorumluyor. Opera
yorumlarken her halükarda **column-width** değerini üstün kılarken,
Firefox ve Chrome **column-coun**t değerini üstün kılıyor.

{% highlight css %}
#cokluKolon{
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 150px;
    -moz-column-width: 150px;
    column-width: 150px;
}
{% endhighlight %}

Bu tanımda Firefox ve Chrome 2 kolonlu bir yapı gösteriyor ve genişlik
olarak 150px tanımını görmüyor. Opera ise **column-width** değerini
150px alıp kapsayıcının genişliği kadar kolona ayrırıyor.

## column-gap

Kolonlar arasına mesafe koymak için kullanılır. Bir bakıma padding veya
margin anlamında kullanılır.

Başlangıç değeri 1em olarak tanımlıdır.

{% highlight css %}
#cokluKolon{
    -webkit-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/vdnRk/1/embedded/css,result,html"></iframe>

**column-gap**’in güzelliği son kolona bu boşluğu uygulamıyor olması.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|**1.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## column-rule

**column-rule** ile kolonlar arasına çizgi atabiliyoruz. border tanımı
ile benzer bir yapısı var. **column-rule-size,
column-rule-style**ve**column-rule**-color gibi ayrı ayrı tanımlama
yapılabileceği gibi **column-rule** kısaltması ile tanım yapabiliyoruz.

{% highlight css %}
#cokluKolon{
    -webkit-column-rule: 3px solid #000;
    -moz-column-rule: 3px solid #000;
    column-rule: 3px solid #000;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/3SMhX/embedded/css,result,html"></iframe>

**column-gap** gibi sadece aradaki kolonlara uygulanan bir özellik bu
son kolona uygulanmıyor.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|**1.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## break-before, break-after ve break-inside

Eleman akışını kesmek gerektiğin kullanmak için **break-before,
break-after**ve**break-inside** kullanırız. Özelliğin üçe ayrılmasının
nedeni yerini belirlemektir

-   **break-before:** çoklu kolon uygulanmış bir elementin içindeki bir
    elemanın öncesinde kolon kesilip kesilmemesini ayarlamak için
    kullanılır. **auto | always | avoid | left | right | page | column |
    avoid-page | avoid-column** değerlerini alıyor.
-   **break-after:**çoklu kolon uygulanmış bir elementin içindeki bir
    elemanın sonrasında kolon kesilip kesilmemesini ayarlamak için
    kullanılır. **auto | always | avoid | left | right | page | column |
    avoid-page | avoid-column** değerlerini alıyor.
-   **break-inside:** çoklu kolon uygulanmış elementin içindeki elemanın
    bulunduğu kolondaki durumu ayarlamak için kullanılır. **auto | avoid
    | avoid-page | avoid-column** değerlerini alıyor.

Alınan değerleri tanımlayalım. Bu özelliği şu an sadece webkit tabanlı
tarayıcılar destekliyor. Operada desteklediğini söyese de ben örneklerde
buna dair bir görüntü elde edemedim. Burada sadece webkit’in
desteklediği değerleri tanımlayacağım.

-   **auto:** Oluşturulan kolonun öncesinde/sonrasında/içinde kesme veya
    kesmemeye karışma
-   **always:** Her zaman oluşturulan kolonun öncesini/sonrasını kes.
-   **avoid:** Oluşturulan kolonun öncesin/sonrasında/içinde kesme.
-   **inherit:** Üst elemana atanan değeri al.

Webkit bu özelliği önek ile **-webkit-column-break-before,
-webkit-column-break-after**ve**-webkit-column-break-inside** olarak
desteklemektedir.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/aPtVe/3/embedded/css,result,html"></iframe>

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|*desteklemiyor*|
{: .tarayici-uyumi}

## column-span

Eğer kolonlara ara başlıklar koymayı düşünüyorsak ve bu başlıkları tüm
kolonlar boyunca uzatmak istiyorsak **column-span** özelliğini
kullanıyoruz.

**column-span** iki değer alıyor **all, none** ve sayı değeri(kolon
sayısı 2,3,4 vs.) all değeri tüm kolonlar boyunca başlığın uzaması için
kullanılır. Sayı değerleri ise belirtilen sayıdaki kolonlarda uzamasını
için kullanılır.

{% highlight css %}
#cokluKolon h2{
  -webkit-column-span:all;
  -moz-column-span:all;
  column-span:all;
  background-color:#0CF;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/x6B67/embedded/css,result,html"></iframe>

Şu anda destekleyen tarayıcılar **all ve none** değerlerini destekliyor
sayısal değeri destekleyen tarayıcı henüz yok.(Eylül 2011)

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|*desteklemiyor*|
{: .tarayici-uyumi}

## column-fill

Çoklu kolon tanımlarını yaptığımızda tarayıcılar içeriğe göre kolonları
eşit yükseklikte ayarlar. Kolon yüksekliklerini ayarlamak için
**column-fill** özelliğini kullanabiliriz. İki değeri vardır **auto ve
balance.**

-   **balance:** her kolonu eşit yükselikte olacak şekilde ayarlar.
    Başlangıç değerdir.
-   **auto:** Sütunları sıralı olarak doldurur. Bu özellik yükseklik
    tanımı yapıldı ise geçerli olur. Belirlenen yükseklik değerine göre
    kolonları doldurur ve son kolona geri kalan içerik yerleştirilir,
    bazen kolonlar boşta kalabilir.

Her ne kadar yukarıdaki bir tanımlama yapılmış olsa da ben uygulamadan
iki değer arasında bir fark görmedim.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/WSWbt/embedded/css,result,html"></iframe>

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**10+**|*desteklemiyor*|
{: .tarayici-uyumi}

## İnternet Explorer İçin Çözüm

İnternet Explorer’un 10. sürümüne kadar desteklemediği bu özelliği
kullanma imkanımız azalıyor. Javascript ile üretilen çözümler mevcut

-   [Column Script from Michael van Ouwerkerk][]
-   [The Script from CSS Scripting][]
-   [Multi Column Layout Demonstration from CSS Scripting][]
-   [Multi-column layout with CSS3 (and some JavaScript)][]

## Sonuç

Çoklu kolon özelliklerinin ilk çıktığında ben daha çok saya planlama
özellikleri olarak düşünmüştüm, ancak özellikleri inceledikçe sayfa
planlama için değil daha çok elemanları belli genişlikte kolonlara
bölmek için kullanılabilecek bir özellik olduğunu gördüm. Benim
düşündüğüm şekli ise yine W3C’nin duyurduğu [Esnek Kutu Planlama Modülü][] karşılıyor. Çoklu Kolon javascript ile çözümde olsa henüz
uygulayabileceğimiz özellikler içermiyor bence, tabi zaman ne gösterir
bilemiyorum.

[Daha önce çok kolonlu menülerde][] bu konudan bahsetmiştim. Çok kolonlu
menüler bu özellik kullanılarak çok kolay bir şekilde oluşturulabilir.

Zamanla daha çok uygulama gördükçe daha iyi anlayabileceğimiz bir
özellik. Bunun yanında araştırırken bazı ufak tefek sorunları olan
özellikler bunlar şimdilik bahsetmedim sonra bilahare bahsederiz yeri
geldikçe.

Kalın sağlıcakla

## Kaynaklar

-   [http://www.w3.org/TR/css3-multicol/][]
-   [http://www.alistapart.com/articles/css3multicolumn][A List Apart]
-   [http://www.vanseodesign.com/css/multi-columns/][] (güzel)
-   [http://css-tricks.com/snippets/css/multiple-columns/][] (basit)
-   [http://www.css3.info/preview/multi-column-layout/][]
-   [http://www.quirksmode.org/css/multicolumn.html][]
-   [http://webdesignernotebook.com/css/remembering-the-css3-multi-column-layout-module/][]
-   [http://trentwalton.com/2010/07/19/css3-multi-column-layout-column-count/][]
-   [http://css-tricks.com/13372-seamless-responsive-photo-grid/][]
-   [http://designshack.co.uk/articles/introduction-to-css3-part-5-multiple-columns][]
-   [http://dev.opera.com/articles/view/css3-multi-column-layout/][]
-   [http://www.my-html-codes.com/css3-multiple-columns][] (orta)
-   [http://www.456bereastreet.com/archive/200509/css3_multicolumn_layout_considered_harmful/][]
-   [https://developer.mozilla.org/en/CSS3_Columns][] (basit)
-   [http://www.red-team-design.com/multi-column-text-using-css3][]
-   [http://www.stuffandnonsense.co.uk/archives/css3_multi-column_thriller.html][]
-   [http://www.superiorwebsys.com/blog/20/Creating_A_Multi-Column_Layout_Using_CSS3/][]
-   [http://caniuse.com/multicolumn][] (tarayıcı destek)
-   [http://people.opera.com/pepelsbey/experiments/multicol/][] (güzel örnek)
-   [http://www.juude.info/css-columns.php][] (güzel)
-   [http://zomigi.com/blog/deal-breaker-problems-with-css3-multi-columns/][] (sorunları)
-   [http://help.dottoro.com/lcxquvkf.php][]

  [Tipografi]: http://www.fatihhayrioglu.com/css-ve-tipografi/
  [A List Apart]: http://www.alistapart.com/articles/css3multicolumn
  [Column Script from Michael van Ouwerkerk]: http://13thparallel.com/archive/column-script/
  [Multi-column layout with CSS3 (and some JavaScript)]: http://www.cvwdesign.com/txp/article/360/multi-column-layout-with-css3-and-some-javascript
  [Esnek Kutu Planlama Modülü]: http://www.w3.org/TR/css3-flexbox/
  [Daha önce çok kolonlu menülerde]: http://www.fatihhayrioglu.com/cok-kolonlu-yapilar-ve-cok-kolonlu-menuler/
  [http://www.w3.org/TR/css3-multicol/]: http://www.w3.org/TR/css3-multicol/
  [http://www.vanseodesign.com/css/multi-columns/]: http://www.vanseodesign.com/css/multi-columns/
  [http://css-tricks.com/snippets/css/multiple-columns/]: http://css-tricks.com/snippets/css/multiple-columns/
  [http://www.css3.info/preview/multi-column-layout/]: http://www.css3.info/preview/multi-column-layout/
  [http://www.quirksmode.org/css/multicolumn.html]: http://www.quirksmode.org/css/multicolumn.html
  [http://webdesignernotebook.com/css/remembering-the-css3-multi-column-layout-module/]: http://webdesignernotebook.com/css/remembering-the-css3-multi-column-layout-module/
  [http://trentwalton.com/2010/07/19/css3-multi-column-layout-column-count/]: http://trentwalton.com/2010/07/19/css3-multi-column-layout-column-count/
  [http://css-tricks.com/13372-seamless-responsive-photo-grid/]: http://css-tricks.com/13372-seamless-responsive-photo-grid/
  [http://designshack.co.uk/articles/introduction-to-css3-part-5-multiple-columns]: http://designshack.co.uk/articles/introduction-to-css3-part-5-multiple-columns
  [http://dev.opera.com/articles/view/css3-multi-column-layout/]: http://dev.opera.com/articles/view/css3-multi-column-layout/
  [http://www.my-html-codes.com/css3-multiple-columns]: http://www.my-html-codes.com/css3-multiple-columns
  [http://www.456bereastreet.com/archive/200509/css3_multicolumn_layout_considered_harmful/]: http://www.456bereastreet.com/archive/200509/css3_multicolumn_layout_considered_harmful/
  [https://developer.mozilla.org/en/CSS3_Columns]: https://developer.mozilla.org/en/CSS3_Columns
  [http://www.red-team-design.com/multi-column-text-using-css3]: http://www.red-team-design.com/multi-column-text-using-css3
  [http://www.stuffandnonsense.co.uk/archives/css3_multi-column_thriller.html]: http://www.stuffandnonsense.co.uk/archives/css3_multi-column_thriller.html
  [http://www.superiorwebsys.com/blog/20/Creating_A_Multi-Column_Layout_Using_CSS3/]: http://www.superiorwebsys.com/blog/20/Creating_A_Multi-Column_Layout_Using_CSS3/
  [http://caniuse.com/multicolumn]: http://caniuse.com/multicolumn
  [http://people.opera.com/pepelsbey/experiments/multicol/]: http://people.opera.com/pepelsbey/experiments/multicol/
  [http://www.juude.info/css-columns.php]: http://www.juude.info/css-columns.php
  [http://zomigi.com/blog/deal-breaker-problems-with-css3-multi-columns/]: http://zomigi.com/blog/deal-breaker-problems-with-css3-multi-columns/
  [http://help.dottoro.com/lcxquvkf.php]: http://help.dottoro.com/lcxquvkf.php


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png