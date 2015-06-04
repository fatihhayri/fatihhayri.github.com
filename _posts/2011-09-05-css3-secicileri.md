---
layout: post
title: CSS3 Seçicileri
Date: 2011-09-05 21:50
Category: CSS
tags: css3, css3 seçicileri, nth seçicileri, Özellik-seçicileri
---

CSS için seçiciler çok önemlidir. CSS3 ile birlikte gelen yeni seçiciler
kodlama yaparken elimizi güçlendirecek cinsten. Javascript ile
yaptığımız birçok işi css ile yapacağız bu sayede. CSS1de 5-6 seçici
varken, CSS2 ile birlikte bu sayı 12’ye çıktı. CSS3 ile birlikte ise bu
sayı 20’yi aştı. . İşte CSS3 ile gelen yeni seçiciler;

	- CSS3 Özellik Seçicileri
		-   Belirlenen Sözdizimi ile Başlayan Özellik Değer Seçicisi
		-   Belirlenen Sözdizimi ile Biten Özellik Değer Seçicisi
		-   İçinde Belirlenen Sözdizimi Geçen Özellik Değer Seçicisi
		-   Çoklu Özellik Seçicisi Kullanımı
	- Genel Kardeş Seçicisi
	- :target Sözde Seçisi
	- Form Elemanları Durumları Sözde Sınıfları
		-   :disabled
		-   :enabled
		-   :checked
	- CSS3 Sözde Seçicileri
	- Yapısal Sözde Seçiciler
		-   :root Sözde Sınıfı
		-   :nth-child() sözde sınıfı
		-   :nth-last-child() sözde sınıfı
		-   :nth-of-type() sözde sınıfı
		-   :nth-last-of-type() sözde sınıfı
		-   :last-child sözde sınıfı
		-   :first-of-type sözde sınıfı
		-   :last-of-type sözde sınıfı
		-   :only-child sözde sınıfı
		-   :only-of-type sözde sınıfı
		-   :empty sözde sınıfı
	- Olumsuz(:not) Sözde SınıfıSözde Sınıf
	- ::selection sözde sınıf

## Özellik Seçicileri

CSS3 ile birlikte 3 yeni özellik seçicisi gelmektedir.

CSS2 ile birlikte gelen özellik seçicileri daha genel seçicilerken CSS3
ile birlikte daha özel seçimler yapabilmemizi sağlayan özellik
seçicileri geldi.

**Belirlenen Sözdizimi ile Başlayan Özellik Değer Seçicisi**

Tüm sözdizimi yerine ...ile başlayan elemanı seçmek için kullanılır.
Belirtilen sözdizimi ile başlayan elemanlar seçilir. (^) şapka işareti
ile kullanılır.

![][100]

Bu tanımlama ile belirtilen sözdizimi ile başlayan özellik değerini
arıyor ve uyguluyor.

{% highlight html %}
This is a sample <a href="http://www.bloggermint.com">hyperlink</a>.
This is a sample <a href="mailto:bloggermint@gmail.com">bloggermint@gmail.com</a>.
This is a sample <a href="ftp://bloggermint.com">FTP Server</a>.
{% endhighlight %}

{% highlight css %}
a[href^='http'] {
    background: url(images/link.png) no-repeat left;
    padding-left:20px;
}

a[href^='mailto'] {
    background: url(images/email.png) no-repeat left;
    padding-left:20px;
}

a[href^='ftp'] {
    background: url(images/folder.png) no-repeat left;
    padding-left:20px;
}
{% endhighlight %}

Şeklinde link başlangıç değerine göre ikon atayabiliriz.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**7.0+**|**1.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**Belirlenen Sözdizimi ile Biten Özellik Değer Seçicisi**

Belirlenen sözdizimi ile biten elemanları seçmek için kullanılır.
Başlangıç sözdizimi ile seçme ile aynı şekilde çalışır. Seçici işareti
olarak $(dolar) işareti kullanılır.

![][1]

Bu seçiciyi kullanarak dokümanlara verilen linklerin başına kolayca ikon
ekleyebiliriz.

{% highlight css %}
a[href$='.pdf'] {
	background-image: url('pdf.png');
}

a[href$='.doc'] {
	background-image: url('word.png');
}

a[href$='.rss'] {
	background-image: url('feed.png');
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**7.0+**|**1.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**İçinde Belirlenen Sözdizimi Geçen Özellik Değer Seçicisi**

Belirlenen sözdizimi özellik değerinde geçen elemanları seçmek için
kullanılır. Seçici işareti olarak * (yıldız) işareti kullanılır.

![][2]

Birçok yerde kullanılabilecek geniş kapsamlı bir kullanımı olan bir
seçicidir.

{% highlight css %}
a[title*='im'] {

}
{% endhighlight %}

Sadece bir kısmı ile elemanı seçebilme imkanı sağlıyor. CSS2’dekinden
farklı olarak.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**7.0+**|**1.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**Çoklu Özellik Seçicisi Kullanımı**

Özellik seçicileri birlikte kullanma imkanımızda vardır. Birden fazla
seçici ile seçimi daraltabiliriz.

{% highlight css %}
p[class=highlight] a[title~=important] {
	background : #ffffcc;
}
{% endhighlight %}

Daha fazla özellik seçicisinide birleştirebiliriz.

{% highlight css %}
a[href^='http://'][href*='/folder2/'][href$='.pdf'] {
	background:url(pdf.gif) 0 0 no-repeat;
}
{% endhighlight %}

CSS3 ile gelen özellik seçicilerinin bir avantajıda ie7’ninde bu
seçicileri destekliyor olmasıdır.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**7.0+**|**1.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## Genel Kardeş Seçicisi

CSS2.1 ile birlikte gelen bitiş kardeş seçicilerine benzer bir
seçicidir. Bitişik şardeş seçicisine göre daha seçici ve kullanışlı bir
seçicidir. Aynı kapsayıcıya sahip elemanların belirtilen elemandan
sonraki aynı seviyedeki elemanların tümünü yakalamak için kullanılır.
Burada dikkat edilmesi gereken konu belirtilen elemandan sonraki aynı
seviyedeki elemanları seçiyor olması. Tanımlama yaparken araya işaret
olarak tilde(~) koyuyoruz.

![][3]

Bir örnek yapacak olursak bir resmimiz var bunu sola hizalayacağız ve
sağdanda metinler akacak. Bu resim ve paragraflar arasına padding
tanımlamak için genel kardeş seçicisi birebirdir.

{% highlight css %}
img{
	float:left;
}

img ~ p{
	padding-left:110px;
}
{% endhighlight %}

html kodu

{% highlight html %}
<img src="kedi.jpg" width="96" height="96" alt="kedi" />
<p>Kedi (Felis catus),...</p> <p>2,5 ile 12 kilo ...</p>
<p>Kediler hoş görünüşlü, ..</p>
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/KGkAK/16/embedded/result,css,html"></iframe>

Bu seçiciyi ie7’nin seçicisini destekliyor.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**7.0+**|**1.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## :target Sözde Sınıfı

“:target seçicisi CSS3 ile birlikte gelen yeni seçilerden biri. :target
seçicisi doküman içi linklere odaklanmamızı sağlıyor. Daha önce bu işi
yapmak için javascript ile yapıyorduk. CSS3’ün bizlere kazandırdığı
birçok yenilikte olduğu gibi bu özellikte basit bir şekilde
sayfalarımıza güzel etkiler kazandırır. :target sözde sınıfı :hover
seçicisi gibi dinamik bir seçicidir.”

Şeklinde tanımladık. Bu konu hakkında daha önce [bir makale yazmıştım][]
detayına oradan bakabilirsiniz.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**9.0+**|**1.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## Form Elemanları Durumları Sözde Sınıfları

Form elemanlarının çeşitli durumlarını seçebilmek için kullanılan sözde
sınıflardır. Kullanıcıların bu durumları ayırt etmeleri için sınıf
tanımlayıp ona göre css ile görselliğini değiştirerek kodlamamızı
yapıyorduk. CSS3 ile birlikte daha kolay bir seçim ve sonuç elde
edebiliriz. 3 adet durum söz konusu

-   :disabled
-   :enabled
-   :checked

Form elemanlarında bu durumlar HTML olarak

{% highlight html %}
<textarea disabled="disabled"></textarea>
<input checked="checked" type="checkbox">
{% endhighlight %}

şekilde tanımlanır. Form elemanlarının bu durumlarını kullanıcıya
yansıtmamız lazım. Bu sayede daha kullanıcı dostu formlar oluşturmuş
olacağız.

{% highlight css %}
:enabled {
	border: 2px solid #6374AB;
}

:disabled {
	border: 2px solid #00cc00;
}

:checked {
	display: inline-block;
	width: 4em;
}
{% endhighlight %}

HTML kodumuz

{% highlight html %}
<form id="testForm"> <input> <input type="checkbox">
<input type="radio" name="test"> <input type="radio" name="test">
<input type="submit"> </form>
{% endhighlight %}

<iframe style="width: 100%; height: 180px" src="http://jsfiddle.net/fatihhayri/KM9B4/embedded/result,css,html"></iframe>

Basit bir örnek vermiş olsak dahi bu seçiciler ile neler
yapabileceğimizi düşünmek bile sevindiriyor bizi.
[http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors-1/][]
örneğe bir göz gezdirmek iyi olur.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**1.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## Yapısal Sözde Sınıfları

“Sözde sınıf ve sözde elementleri CSS’i destekleyen web tarayıcıları
tarafından otomatik olarak tanınan özel sınıf ve elementlerdir. Bu sınıf
ve elementler (x)html hiyerarşisi ile erişemediğimiz element ve
sınıflara erişmemizi sağlar. Sözde sınıfı bir elementi farklı sınıflara
böler(örn: link elementini active, visited vd. sınıflarına böler) Sözde
elementi ise bir elementi alt kısımlara böler (örneğin bir paragrafın
ilk harfi, bir paragrafın ilk satırı gibi.)”

Şeklinde tanımladığımız sözde sınıf ve sözde elementlere CSS3 ile
birlikte çok etkili yeni seçiciler eklendi. Başta söylediğim gibi CSS
seçicileri CSS’in en önemli öğeleridir. CSS seçicileri ne kadar
gelişirse biz kod yazarken o kadar rahat ederiz.

![][4]

**:nth-child() sözde sınıfı**

:nth seçicileri belirlenen elemanın aynı seviyesindeki önemli sıradaki
elemanlarını seçmek için kullanılır. Sıralamayı belirleyen numaralar
parantez içinde tanımlanır; rakam, belirli kelimeler ve formül
tanımlanabilir.

Rakama bir örnek verecek olursak, 3. sıradaki elemanı yakalamak için

{% highlight css %}
p:nth-child(3) {
	color:#f00;
}
{% endhighlight %}

Belirli kelimelere bir örnek verecek olacaksak; odd(çift) ve even(tek)
kelimelerinin kullanımı ile seçme işlemini gösterebiliriz. Zebra
tablolardan hatırladığımız çift, tek satırlara tanımlama yapmak için
kullanılabilir.

{% highlight css %}
tr:nth-child(odd) {
	color:#f00;
}

tr:nth-child(even) {
	color:#ff0;
}
{% endhighlight %}

<iframe style="width: 100%; height: 400px" src="http://jsfiddle.net/fatihhayri/F6UnC/embedded/result,css,html"></iframe>

Formül için örnek verecek olursak; dinamik bir seçim oluşturmak için
gayet iyi sonuçlar verecek bir özelliktir. Matematik derslerindende
hatırladığımız (an + b) a ve b değişkenlerdir. Benzer formüller ile
eleman seçebilme imkanı veriyor.

{% highlight css %}
p:nth-child(3n+0) {
	background:#ff0000;
}
{% endhighlight %}

Bir tanım ile 3 katı olan elementleri yakalayabiliriz.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:nth-last-child() sözde sınıfı**

:nth sözde sınıfına benzer bir kullanımım vardır. :nth sözde sınıfından
farklı olarak sıralama olarak baştan değilde sondan başlayarak seçmemizi
sağlar.

{% highlight css %}
tbody tr:nth-last-child(2) {
	background:#ff0000;
}
{% endhighlight %}

Tanımı ile tbody içindeki sondan 2. sıradaki satırı yakalamamızı sağlar.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:nth-of-type() sözde sınıfı**

:nth-of-type() sözde seçicisi :nth-child() seçicisine benzer şekilde
çalışır, farklı olarak :nth-child() sözde seçicisi aynı seviyedeki tüm
elemanları seçerken, :nth-of-type() sözde seçicisi sadece aynı tip
elemanları seçer.

{% highlight css %}
p:nth-of-type(3) {
	background:#ff0;
}
{% endhighlight %}

Örneğinde mesela paragraf elemanı ile aynı seviyedeki tüm paragrafları
seçmemizi sağlar. Benzer şekilde :nth-child()  kullansa idik, aynı
seviyedeki farklı tip elemanlarıda yakalamış olacaktık.

:nth-of-type() sözde seçicisi bize çok iyi seçme imkanları
sağlayacaktır.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:nth-last-of-type() sözde sınıfı**

:nth-last-of-type() sözde seçicisi :nth-of-type() ile aynı yapıda işler
farklı olarak seçim sıralaması baştan sona doğru değilde sondan başa
doğru aynı seviyedeki ve aynı tipteki elemanları seçmek için yapılır.

:nth-last-child() ile benzer şekilde çalışır, seçicilerin sayısı fazlada
olsa aslında benzer özellikte çalışırlar, ancak bu ufak farklar bile
bize çok büyük avantajlar sağlayacaktır.

{% highlight css %}
p:nth-last-of-type(2) {
	background:#ff0;
}
{% endhighlight %}

Aynı seviyedeki paragrafların sondan ikincisini yakalar bu seçici


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:last-child sözde sınıfı**

:last-child sözde seçicisi aynı seviyedeki elemanların en sonuncusunu
seçmek için kullanılır. fisrt-child ilk elemanı seçmemizi sağlarken
:last-child son elemanı seçmemizi sağlar. Menü gibi yanyana dizdiğimiz
elemanların sonuncusunu bulmak bizim her zaman işimize yarayacaktır.
:nth-last-child(1) aynı işi görür.

{% highlight css %}
p:last-child {
	background:#ff0;
}
{% endhighlight %}

Tanımı belirlenen paragraf ile aynı seviyedeki elemanların en
sonuncusunu seçmemizi sağlar.

Mesela köşeleri oval bir menü yapımında çok işimize yarar bu seçici.
Normal bir yatay menü örneğini ele alalım. Yanyana dizelim ve araya
ayraç koyalım.

![][5]

Sondaki kenar çizgisi fazlalığı kaldırmak için

{% highlight css %}
ul li:last-child a{
	border-right:none;
}
{% endhighlight %}

kodu işimizi görecektir. Ayrıca ilk menü elemanı sol köşeleri ve son
menü elemanının sağ köşeleri ovalleştirmek için;

{% highlight css %}
ul li:last-child a{
	border-right:none;
	border-radius:0 15px 15px 0;
}

ul li:first-child a{
	border-radius:15px 0 0 15px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/GUKPu/embedded/result,css,html"></iframe>

Önceden bu işleri yapmak için javascript kullanmak zorunda idik. Şimdi
CSS3 ile hepsini halledebiliyoruz. Süper değil mi?


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:first-of-type sözde sınıfı**

:first-of-type sözde seçicisi aynı seviyedeki ilk aynı tipteki elemanı
seçmek için kullanılır. :nth-of-type(1) aynı işi görür.

{% highlight css %}
p:first-of-type {
	background:#ff0;
}
{% endhighlight %}

Aynı seviyedeki ilk paragrafı seçmek için kullanılır.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:last-of-type sözde sınıfı**

:last-of-type sözde seçicisi aynı seviyedeki en son aynı tipteki elemanı
seçmek için kullanılır.  :nth-last-of-type(1) ile aynı işi görür.

{% highlight css %}
p:last-of-type {
	background:#ff0;
}
{% endhighlight %}

Aynı seviyedeki paragrafların en sonuncusunu yakalar.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:only-child sözde sınıfı(Tek çocuk)**

:only-child sözde seçicisi; bir ebeveyni olan ve bu ebeveynin tek çocuğu
olan elemanları seçmek için kullanılır. Tek çocuk seçicisi diyebiliriz.
:first-child:last-child veya :nth-child(1):nth-last-child(1) seçicileri
ile aynı şeyi seçer.

<iframe style="width: 100%; height: 250px" src="http://jsfiddle.net/fatihhayri/FGUGH/embedded/html,css,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:only-of-type sözde sınıfı**

:only-of-type sözde seçicisi; bir ebeyni olan ve bu ebeveynin aynı
etiket adına sahip tek çocuğu olan elemanları seçmek için kullanılır.
Tam karşılığı olmasada :first-of-type:last-of-type veya
:nth-of-type(1):nth-last-of-type(1) aynı işi yapar.

{% highlight css %}
ul.deneme > li > a:only-of-type {
	background:#ff0;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/cEdgX/1/embedded/html,css,result"></iframe>

Aynı seviyedeki bağlantılara sarı ardalan rengi tanımlayacaktır. Listede
ikinci sıradaki ögede 2 adet link olduğu için seçmedi, 4. sıradaki ögede
iki adet çocuk seçici var ancak farklı tipte olduğu için seçimi yaptı.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:root Sözde Sınıfı**

:root sözde sınıfı dokümanın kökünü temsil eder. HTML elemanlarda htlm{}
ile aynı etkiyi yapar. buradaki asıl amaç xml ve diğer doküman tipleri
için köke inebilmektir.

{% highlight css %}
:root {
	background:#ff0;
}
{% endhighlight %}

HTML dokümanlarında ise html elemanını ezmek içinde kullanılabilir.

{% highlight css %}
html{
	background-color: #fff;
}

html:root {
	background-color:#000;
}
{% endhighlight %}


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

**:empty sözde sınıfı**

:empty sözde seçicisi alt elemanı(çocuk) olmayan elemanları yakalamak
için kullanılır. Metinlerde buna dahildir.

{% highlight html %}
<ul class="deneme">
	<li></li>
	<li><a href="">deneme</a></li>
	<li><strong></strong></li>
	<li><a href="">deneme</a>
		<ul>
			<li><a href="">deneme</a></li>
			<li><a href="">deneme</a></li>
		</ul>
	</li>
</ul>
{% endhighlight %}

CSS kodu

{% highlight css %}
ul.deneme > li:empty {
	background:#ff0;
}
{% endhighlight %}

Yukarıdaki örnekte sadece ilk liste elemanı seçilecektir.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## Olumsuz(:not) Sözde Sınıfı

Olumsuzluk belirtmek için kullanılan sözde sınıftır. :not(seçici)
şeklinde kullanılır. Jquery’den alışık olduğumuz bir seçicidir.

{% highlight html %}
<h1>Deneme</h1>
<h2>Alt Başlık</h2>
<p>İçerik...</p>
<p>İçerik...</p>
<p>İçerik...</p>
<blockquote>Dipnot</blockquote>
{% endhighlight %}

CSS kodu

{% highlight css %}
body :not(blockquote){
	border:1px solid #ccc;
}
{% endhighlight %}

kodu body içindeki tüm elemanlara kenar çizgisi ata, dipnot(blockquote)
hariç şeklinde uygulanacaktır.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/W6d4u/embedded/result,css,html"></iframe>

Çok kullanışlı bir seçicidir.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## ::selection Sözde Elementi

[Daha önce görselliği dikkatimi][] çeken bu özelliği şimdi seçici bazlı
bakacağız. Seçili alan seçicisi olarak tanımlayabileceğimiz bu özellik
seçilen alana css tanımları atamamızı sağlamaktadır.

{% highlight css %}
::-moz-selection {
	background:#c00;
	color:#fff;
}

::selection {
	background:#c00;
	color:#fff;
}
{% endhighlight %}

Ataması ile sitenin tümünde bir seçili alanları için bir tanımlama
yapabiliriz.

::selection sözde elementine; color, background, cursor ve outline
özellikleri tanımlanabiliyor.

Firefox için -moz ön eki kullanılması gerekiyor.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**9.0+**|**3.5+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## Kaynaklar

-   [http://www.w3.org/TR/css3-selectors/][]
-   [http://www.456bereastreet.com/archive/200601/css_3_selectors_explained/][]
-   [http://www.adobe.com/devnet/dreamweaver/articles/css-selectors-pt2.html][]
-   [http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/][]
-   [http://tools.css3.info/selectors-test/test.html][] (test aracı)
-   [http://24ways.org/2009/cleaner-code-with-css3-selectors][]
-   [http://ie.microsoft.com/testdrive/HTML5/CSS3Selectors/Default.html][]
-   [http://www.w3schools.com/cssref/css_selectors.asp][]
-   [http://www.quirksmode.org/blog/archives/2010/06/ies_big_leap_fo.html][]
-   [http://www.quirksmode.org/css/contents.html][]
-   [http://selectivizr.com/][] (ie için çözüm)
-   [http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/][]
-   [http://inspectelement.com/tutorials/a-look-at-some-of-the-new-selectors-introduced-in-css3/][]
-   [http://caniuse.com/css-sel3][] (tarayıcı destek listesi)
-   [http://www.yourinspirationweb.com/en/why-you-should-know-the-new-css3-selectors/][]
-   [http://kilianvalkhof.com/2008/css-xhtml/the-css3-not-selector/][]
-   [http://dtsn.co.uk/2009/12/15/css3-selectors-last-child/][]
-   [http://perishablepress.com/awesome-new-css3-selectors/][] (ilginç)
-   [https://developer.mozilla.org/en/firefox_3.5_for_developers][]
-   [https://developer.mozilla.org/en/CSS/%3Achecked][]
-   [https://developer.mozilla.org/en/CSS/:nth-child][]
-   [https://developer.mozilla.org/en/CSS/:empty][]
-   [https://developer.mozilla.org/en/CSS/%3Adisabled][]
-   [http://blogs.msdn.com/b/ie/archive/2010/05/13/the-css-corner-css3-selectors.aspx][]
-   [http://eriwen.com/css/css-indirect-adjacent-combinator/][]
-   [http://msdn.microsoft.com/en-us/library/aa358824%28v=vs.85%29.aspx][]
-   [http://www.quirksmode.org/css/enabled.html][]


  [100]: https://lh6.googleusercontent.com/w8JW05qWsN2l-joJkQZ8-0BtI_Ahasy75ToU1_vFtAgGGjsdfG19PLQlW0Cu2tdkVuoxlXOfIC19hCnvbYJnELaFnk6qyB2dC3YJEETpjs95439SJw4
  [1]: https://lh3.googleusercontent.com/0qkeYfNwhs3wyl1K7H3oTIMHVxq_fuqlEi_kXSrBD7sUHbIHFMVTjWQyzpDVGdXM581uNoPrcolpFoh8cH-lKA9AeWXveDA7lVoos3NODlE5rmiqVno
  [2]: https://lh4.googleusercontent.com/5e_41wg7MEzgTzwCyGBHWAnp7Js-HypUDJigkcO7WC632270MGhU0ubYO6058YFY0zY5aOptuOv7H3_gyJw2ZiHMYFHNCygPD-8PlKV6eRS4E1xtcuI
  [3]: https://lh3.googleusercontent.com/t8QIYGvMozXeDyAOos5pbfZSpJQKyyIzuGgfMHqEire4_Y06UOOUPv9GOJPpDnd_R5wn2vlvrLVbUwvj48puypNMqcJ3tUqo4sY5pLUp9KQiMMAJ66Q
  [bir makale yazmıştım]: http://www.fatihhayrioglu.com/css3-target-secicisi/
  [http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors-1/]: http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors-1/
  [4]: https://lh4.googleusercontent.com/lKodnf8SMrbnSV9jZd_EwcQZ1IF-JZy9GY9jv1olLpuOfebHtjsE0vbOyNA-_-EDzpoNCUBs_JVVgnk-_m7Jh0VQ6D7l9PhKXq2K7woke7tNGX36f5Q
  [5]: https://lh4.googleusercontent.com/xT4YjtxJM9wckC5nB68tYXZKVtNX2e72lsYCXcgivCGpxRCWZBKEzGIKQB4eb8S6isRl-3ZNo7_V1B__nrqbHMXASIwqQusVGqvAGcOuyfe3bstNIsY
  [Daha önce görselliği dikkatimi]: http://www.fatihhayrioglu.com/css-ile-secilen-metinlerin-rengini-degistirmek/
  [http://www.w3.org/TR/css3-selectors/]: http://www.w3.org/TR/css3-selectors/
  [http://www.456bereastreet.com/archive/200601/css_3_selectors_explained/]: http://www.456bereastreet.com/archive/200601/css_3_selectors_explained/
  [http://www.adobe.com/devnet/dreamweaver/articles/css-selectors-pt2.html]: http://www.adobe.com/devnet/dreamweaver/articles/css-selectors-pt2.html
  [http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/]: http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/
  [http://tools.css3.info/selectors-test/test.html]: http://tools.css3.info/selectors-test/test.html
  [http://24ways.org/2009/cleaner-code-with-css3-selectors]: http://24ways.org/2009/cleaner-code-with-css3-selectors
  [http://ie.microsoft.com/testdrive/HTML5/CSS3Selectors/Default.html]: http://ie.microsoft.com/testdrive/HTML5/CSS3Selectors/Default.html
  [http://www.w3schools.com/cssref/css_selectors.asp]: http://www.w3schools.com/cssref/css_selectors.asp
  [http://www.quirksmode.org/blog/archives/2010/06/ies_big_leap_fo.html]: http://www.quirksmode.org/blog/archives/2010/06/ies_big_leap_fo.html
  [http://www.quirksmode.org/css/contents.html]: http://www.quirksmode.org/css/contents.html
  [http://selectivizr.com/]: http://selectivizr.com/
  [http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/]: http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/
  [http://inspectelement.com/tutorials/a-look-at-some-of-the-new-selectors-introduced-in-css3/]: http://inspectelement.com/tutorials/a-look-at-some-of-the-new-selectors-introduced-in-css3/
  [http://caniuse.com/css-sel3]: http://caniuse.com/css-sel3
  [http://www.yourinspirationweb.com/en/why-you-should-know-the-new-css3-selectors/]: http://www.yourinspirationweb.com/en/why-you-should-know-the-new-css3-selectors/
  [http://kilianvalkhof.com/2008/css-xhtml/the-css3-not-selector/]: http://kilianvalkhof.com/2008/css-xhtml/the-css3-not-selector/
  [http://dtsn.co.uk/2009/12/15/css3-selectors-last-child/]: http://dtsn.co.uk/2009/12/15/css3-selectors-last-child/
  [http://perishablepress.com/awesome-new-css3-selectors/]: http://perishablepress.com/awesome-new-css3-selectors/
  [https://developer.mozilla.org/en/firefox_3.5_for_developers]: https://developer.mozilla.org/en/firefox_3.5_for_developers
  [https://developer.mozilla.org/en/CSS/%3Achecked]: https://developer.mozilla.org/en/CSS/%3Achecked
  [https://developer.mozilla.org/en/CSS/:nth-child]: https://developer.mozilla.org/en/CSS/:nth-child
  [https://developer.mozilla.org/en/CSS/:empty]: https://developer.mozilla.org/en/CSS/:empty
  [https://developer.mozilla.org/en/CSS/%3Adisabled]: https://developer.mozilla.org/en/CSS/%3Adisabled
  [http://blogs.msdn.com/b/ie/archive/2010/05/13/the-css-corner-css3-selectors.aspx]: http://blogs.msdn.com/b/ie/archive/2010/05/13/the-css-corner-css3-selectors.aspx
  [http://eriwen.com/css/css-indirect-adjacent-combinator/]: http://eriwen.com/css/css-indirect-adjacent-combinator/
  [http://msdn.microsoft.com/en-us/library/aa358824%28v=vs.85%29.aspx]: http://msdn.microsoft.com/en-us/library/aa358824%28v=vs.85%29.aspx
  [http://www.quirksmode.org/css/enabled.html]: http://www.quirksmode.org/css/enabled.html

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
