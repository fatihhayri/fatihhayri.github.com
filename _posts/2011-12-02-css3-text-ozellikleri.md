---
layout: post
title: CSS3 Metin Özellikleri
Slug: css3-text-ozellikleri
Date: 2011-12-02 01:11
Category: CSS
tags: [hanging-punctuation, text-align-last, text-overflow, text-rendering, text-stroke, text-wrap, word-wrap]
---

- word-wrap özelliği
- text-wrap
- text-stroke
- text-align (yeni değerler)
- text-align-last
- text-overflow
- text-rendering
- hanging-punctuation

## word-wrap özelliği

CSS3 **word-wrap** özelliği diğer CSS3 özelliklerinden farklı olarak tüm
tarayıcılar(IE dahil) tarafından desteklenmektedir.

**Yapısı :**word-wrap: (değer)
**Aldığı Değerler:** normal | break-word\\
**Başlangıç değeri:** normal\\
**Uygulanabilen elementler:** Tüm Elemanlara\\
**Kalıtsallık:**Var
{: .cssozelliktanimi}

**word-wrap** özelliği belirtilen alandaki metnin kapsayıcı eleman
sınırlarını zorlayan uzunlukta arada boşluk olmadan uzadığında kelimeyi
satır başına atmak için kullanılır.

Bir örnek verecek olursak 150px genişliğindeki bir alan içinde bir
metnimiz olsun.

{% highlight html %}
<div id="link">
	Loremipsumdolorsitametconsecteturadipiscingelit.
	Nam semper venenatis lobortis.
	Donec odio nisl, vehicula vitae molestie ac,
	euismod ac nibh.
</div>
{% endhighlight %}

CSS kodu

{% highlight css %}
#link{
	width:150px;
	border:1px solid #999;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/AdWMx/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**word-wrap** ile bu uzun kelimeyi aşağı atarak sayfadaki patlaklığı düzeltebiliriz.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/vZFZb/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Önceki yazımda bu işi white-space ile halletmiştim, ama mantıklı olan
**word-wrap** ile çözmek.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+ (-webkit)**|**5.5+**|**3.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## text-wrap

**text-wrap** özelliği **word-wrap**’e benzer bir özelliktir.
**word-wrap**’in kelimeye yaptığı etkiyi **text-wrap** metinlere yapar.

**Yapısı :** text-wrap: (değer)
**Aldığı Değerler:** normal | none | unrestricted | suppress\\
**Başlangıç değeri:** normal\\
**Uygulanabilen elementler:**Tüm Elemanlara\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

text-wrap 4 adet değer alır.

-   **normal:** Satır sadece belirlenen yerlerden sonra satır başı
    yapar.
-   **none:** Satır herhangi bir yerden satırbaşı yapmaz. Metin
    kapsayıcı üzerinden aşar.
-   **unrestricted:** Satır herhangi iki karakter arasından satırbaşı
    yapılabilir.
-   **suppress:** Satır içinde eğer satırbaşı yapacak bir nokta yoksa
    elemanı satırbaşı yaptırır

Bu özelliği henüz hiç bir tarayıcı desteklemiyor.

## text-stroke

CSS3 ile birlikte text-outline olarak standartlara giren bu özellik daha
sonra standartlardan çıkarıldı, ancak webkit tabanlı tarayıcıların
**-webkit-text-stroke** olarak desteklemektedir.

CSS3 ile birlikte metinlerin etrafına dış çizgisi çizmemize olanak
sağlıyor. Şu an sadece webkit tabanlı tarayıcıların(Safari, Chrome)
desteği mevcut.

**Yapısı :**text-stroke: (değer)
**Aldığı Değerler :** thickness | blur | color\\
**Başlangıç değeri:** none\\
**Kalıtsallık:**Var
{: .cssozelliktanimi}

Tanım yaparken ilk olarak yazı tipinin rengini yaparız, sonrada dış hat
çizgisini tanımlarız.

{% highlight css %}
font:bold 24px Arial, Helvetica, sans-serif;
color: #c00;
-webkit-text-stroke: 1px #000;
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/3dsPG/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**text-stroke** tanımının ilk değeri dış çizgisinin kalınlığını ikinci
tanım rengini belirler.

Dış Çizgili ve Saydam zeminli Yazı Tipleri Oluşturmak

Saydam zeminli yazı tipleri tanımlamak için **text-fill-color** özelliği kullanılır.

{% highlight css %}
font:bold 24px Arial, Helvetica, sans-serif;
color: #c00;
-webkit-text-stroke: 1px #000;
-webkit-text-fill-color: transparent;
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/yWWbb/embedded/css,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+ (-webkit)**|*desteklemiyor*|*desteklemiyor*|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**4.1+ (-webkit)**|**36+**|
{: .tarayici-uyumi}


## text-align (yeni değerler)

**text-align** özelliği CSS3’den öncede vardı ancak CSS3 ile bu özelliğe
iki tane daha yeni değer atandı. Burada bunları inceleyeceğiz. **start**
ve **end** değerleri. Türkçe ve İngilizce metinler solda-sağa doğru
akar., ancak bazı dillerde akış sağdan-sola doğrudur, örneğin Arapça.
Böyle sağdan-sola doğru akan dillerde için bu iki değer işe yarıyor.

-   **start:** Eğer akış soldan sağa ise **left** etkisi yapacaktır.
    Akış sağdan-sola ise **right** etkisi yapacaktır.
-   **end:** Eğer akış soldan sağa ise **right** etkisi yapacaktır. Akış
    sağdan-sola ise **left** etkisi yapacaktır.

## text-align-last

CSS3 ile birlikte gelen bu özellik son satırın veya justify tanımlanmış
elemanların satırlarının hizalanmasını sağlar. Bu özellik **text-align**
ile aynı etkiyi yapar.

**Yapısı :**text-align-last: (değer)
**Aldığı Değerler :** center | end | justify | left | right | start\\
**Başlangıç değeri:** start\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

justify uygulanmış bir metnin son satırının sağa yaslı olmasını
istiyorsak

{% highlight css %}
p {
	text-align: justify;
	-ms-text-align-last: right;
}
{% endhighlight %}

![][100]

## text-overflow

Blok kapsayıcı elemanı içindeki satır içi elemanın içeriğini
**overflow** uygulamak için kullanılır. Blok kapsayıcı elemana
**overflow:visible** tanımı yapılmamış olmalıdır.

**Yapısı :** text-overflow: &lt;değer&gt;\\
**Aldığı Değerler :** clip | ellipsis\\
**Başlangıç değeri:**clip\\
**Uygulanabilen elementler:** Blok-level Elemanlara\\
**Kalıtsallık:** yok
{: .cssozelliktanimi}

![][1]
resim kaynağı: [https://developer.mozilla.org/en/CSS/text-overflow][]

Başlangış değeri **clip**’dir. **clip** değeri alan satır içi eleman
kapsayıcı eleman sınırlarından kırpılacaktır. Diğer aldığı değer
ellipsis’dir. **ellipsis** değeri alan eleman **clip** gibi
davranacaktır ancak farklı olarak sonuna üç nokta(...) koyacaktır.

CSS3 ile birlikte üç nokta yerine kendi istediğimiz özel karkateri cümle
satır sonuna ekleyebiliyoruz.

{% highlight css %}
p {
	text-overflow: 'herhangibirsey';
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+ (-webkit)**|**6.0+**|**7.0+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

## text-rendering

**text-rendering** özelliği okunabilirliği ayarlamamızı sağlana bir
özelliktir. Bu özellik sayesinden tarayıcının metinlerimizi nasıl
tarayacağını belirleyebiliyoruz. Tarayıcılar metinleri hız,
okunabilirlik ve geometrik hassasiyet bakımından farklı şekilde
yorumlarlar; text-rendering özelliği bu farklılıkları bizim kontrolümüze
sunana bir özelliktir.

**Yapısı :**text-rendering: (değer)
**Aldığı Değerler :** auto | optimizeSpeed | optimizeLegibility | geometricPrecision | inherit\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** Tüm Elemanlara\\
**Kalıtsallık:**Var
{: .cssozelliktanimi}

-   **auto** değeri metin tarama işini tarayıcıya bıraktığımız anlamına
    geliyor.
-   **optimizeSpeed**  değeri hızlı yüklemeyi okunabilirlik ve geometrik
    hassasiyetin önünde tutar. Karkater aralığı ve bitişik farf
    özelliklerinin pasifize eder.
-   **optimizeLegibility**  değeri okunabilirliği hız ve geometrik
    hassasiyetin önünde tutar. Karakter aralığı ve bitişik harf
    özelliklerinin aktiftir.
-   **geometricPrecision** değeri geometrik hassasiyeti hız ve
    okunabilirliğin önünde tutar. Geometrik hassasiyet ile yazı tipi
    oranlı olarak yorumlanmasını sağlar ve buda yazı tiplerinin daha
    güzel görünmesini sağlar.


![][2]
resim kaynağı: [https://developer.mozilla.org/en/CSS/text-rendering][]

Tanımlarda dikkatimiz çeken karakter aralığı olarak Y ve o arasındaki
mesafe ve ffl görünümündeki farklar kendini gösteriyor.


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|*desteklemiyor*|**3.0+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**4.0+**|**4.3+**|**36+**|
{: .tarayici-uyumi}

Chrome auto değerini optimizeSpeed olarak yorumluyor, geometricPrecision
 değerini tam olarak 13. sürümden itibaren yorumluyor.

Firefox auto değerini yazı boyutu 20px ve üzerinde optimizeLegibility
gibi, diğerlerini ise optimizeSpeed gibi yorumluyor. geometricPrecision
 ise optimizeLegibility gibi yorumluyor.

Safari auto değerini optimizeSpeed gibi yorumluyor.

## hanging-punctuation

CSS3 metinleri yönetmek açısından bizim elimizi kuvvetlendirdiği kesin.
**hanging-punctuation** özelliği bize ayrıntı bir özellik kazandırıyor.
**hanging-punctuation** özelliği metin bloğunun dışına çıkarmamızı
sağlıyor. Liste ikonları ve çift tırnakları metin bloğu dışına çıkararak
daha güzel sonuçlar almamızı sağlıyor.


**Yapısı :** hanging-punctuation: &lt;değer&gt;\\
**Aldığı Değerler :** none | start | end | end-edge\\
**Başlangıç değeri:**none\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

![][3]

Yukarıdaki resimde görüldüğü gibi ilk resimde **hanging-punctuation**
uygulanmamış halini görürken ikinci resimde uygulanmış halini görüyoruz.
Çift tırnak ve keme işaretleri metin bloğu dışına çıkarak daha blok bir
metini ortaya koyuyor.

Bu özelliği henüz herhangi bir tarayıcı desteklememektedir.

## Sonuç

CSS3 birçok yönden elimiz güçlendirmektedir. CSS3 metinler üzerinde
düzenleme yapmamıza olanak sağlıyor. Henüz tam olarak tamamlanmaya
birçok yönü var CSS3 metin özellikleri zamanla daha iyi oturacaktır.

Önceden tarayıcılar ve işletim sistemlerinin inisiyatifinde olan
özellikleri CSS3 ile birlikte kod yazarlarının eline vermeye çalışıyor.

Kalın sağlıcakla.

## Kaynaklar

-   [http://www.w3.org/TR/css3-text/][]
-   [http://www.impressivewebs.com/word-wrap-css3/][]
-   [http://www.opera.com/docs/specs/presto27/css/text/][]
-   [http://caniuse.com/wordwrap][] (wordp-wrap destek listesi)
-   https://developer.mozilla.org/En/CSS/Word-wrap
-   [http://www.w3.org/TR/css3-text/][]
-   http://www.cardeo.ca/2010/adding-an-outline-to-your-text-using-the-css3-text-stroke-property
-   http://css-tricks.com/7405-adding-stroke-to-web-text
-   [http://www.webkit.org/blog/85/introducing-text-stroke/][]
-   [http://code.stephenmorley.org/html-and-css/white-space-handling/][]
-   [http://www.impressivewebs.com/css-white-space/][]
-   [http://www.quirksmode.org/css/stroke.html][]
-   [http://www.impressivewebs.com/word-wrap-css3/][]
-   [http://fatihhayrioglu.com/satir-donusuword-wrap-firefox-sorunu-nasil-cozulur/#idc-cover][]
-   [http://webdesignerwall.com/tutorials/word-wrap-force-text-to-wrap][]
-   [https://developer.mozilla.org/en/CSS/text-align][]
-   [https://developer.mozilla.org/en/CSS/text-overflow][]
-   [http://www.456bereastreet.com/archive/201105/clipping_text_with_css3_text-overflow/][]
-   [http://www.cssplay.co.uk/menu/text-overflow.html][] (örnek)
-   [http://www.css3.info/preview/text-overflow/][]
-   [http://deepubalan.com/blog/2010/11/27/text-overflow-css3-property-explained-pure-css-solution-to-get-ellipsis/][]
-   [http://caniuse.com/text-overflow][] (destek listesi)
-   [https://developer.mozilla.org/en/CSS/text-rendering][]
-   [http://trentwalton.com/2010/06/29/css-text-rendering/][]
-   [http://htmlcss.wikia.com/wiki/Text-rendering][]
-   [http://coding.smashingmagazine.com/2010/03/01/css-and-the-future-of-text/][]
-   http://www.markboulton.co.uk/journal/comments/five-simple-steps-to-better-typography-part-2
-   http://www.webreference.com/programming/corecss/2/4.html

  [100]: https://lh6.googleusercontent.com/3FsatoE0FmU_5BhUEy_zEiJ1IOKvCEw08hEBmUC65r2zb0sqP9w__9fwRPhdr8_avR3u4Bu0jDa2WAWnnaINNAY_tRNPtlLOO8RkvDlPQuB8Xm87Buc
  [1]: https://lh3.googleusercontent.com/miG_QKLBFvURtfSYFo3_P8q2QBZPWOGG2s-zMI7n7U97JH9TkMWd-tt3NnhL1nzD_DyQcqV1gmoqaK5FvhnR-XYI4AnQHl4H4A7h5TL884lG0H2OtmI
  [https://developer.mozilla.org/en/CSS/text-overflow]: https://developer.mozilla.org/en/CSS/text-overflow
  [2]: https://lh4.googleusercontent.com/td53uElshl_ptgpbjTHJZU2pksA06sFUxjd4JppDf3kzsI-Y0OTJ5ZMLtjw1yJM55RQfGycC6h1VHBxEqBvWfcN2gHOs_Bbem8WsR9S2MjCsDPjc65g
  [https://developer.mozilla.org/en/CSS/text-rendering]: https://developer.mozilla.org/en/CSS/text-rendering
  [3]: https://lh6.googleusercontent.com/RhIpgQ78or_m1wq9pK8wteUekGqrJlMiBGY-dEhvCGKFVlvLCGn7r_righ66slH2qGRDlcXt5TM-CZ8yFQTflFch3NnQ1nlOpZuaWQSlZblow8OvDAM
  [http://www.w3.org/TR/css3-text/]: http://www.w3.org/TR/css3-text/
  [http://www.impressivewebs.com/word-wrap-css3/]: http://www.impressivewebs.com/word-wrap-css3/
  [http://www.opera.com/docs/specs/presto27/css/text/]: http://www.opera.com/docs/specs/presto27/css/text/
  [http://caniuse.com/wordwrap]: http://caniuse.com/wordwrap
  [http://www.webkit.org/blog/85/introducing-text-stroke/]: http://www.webkit.org/blog/85/introducing-text-stroke/
  [http://code.stephenmorley.org/html-and-css/white-space-handling/]: http://code.stephenmorley.org/html-and-css/white-space-handling/
  [http://www.impressivewebs.com/css-white-space/]: http://www.impressivewebs.com/css-white-space/
  [http://www.quirksmode.org/css/stroke.html]: http://www.quirksmode.org/css/stroke.html
  [http://fatihhayrioglu.com/satir-donusuword-wrap-firefox-sorunu-nasil-cozulur/#idc-cover]: http://fatihhayrioglu.com/satir-donusuword-wrap-firefox-sorunu-nasil-cozulur/#idc-cover
  [http://webdesignerwall.com/tutorials/word-wrap-force-text-to-wrap]: http://webdesignerwall.com/tutorials/word-wrap-force-text-to-wrap
  [https://developer.mozilla.org/en/CSS/text-align]: https://developer.mozilla.org/en/CSS/text-align
  [http://www.456bereastreet.com/archive/201105/clipping_text_with_css3_text-overflow/]: http://www.456bereastreet.com/archive/201105/clipping_text_with_css3_text-overflow/
  [http://www.cssplay.co.uk/menu/text-overflow.html]: http://www.cssplay.co.uk/menu/text-overflow.html
  [http://www.css3.info/preview/text-overflow/]: http://www.css3.info/preview/text-overflow/
  [http://deepubalan.com/blog/2010/11/27/text-overflow-css3-property-explained-pure-css-solution-to-get-ellipsis/]: http://deepubalan.com/blog/2010/11/27/text-overflow-css3-property-explained-pure-css-solution-to-get-ellipsis/
  [http://caniuse.com/text-overflow]: http://caniuse.com/text-overflow
  [http://trentwalton.com/2010/06/29/css-text-rendering/]: http://trentwalton.com/2010/06/29/css-text-rendering/
  [http://htmlcss.wikia.com/wiki/Text-rendering]: http://htmlcss.wikia.com/wiki/Text-rendering
  [http://coding.smashingmagazine.com/2010/03/01/css-and-the-future-of-text/]: http://coding.smashingmagazine.com/2010/03/01/css-and-the-future-of-text/

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png