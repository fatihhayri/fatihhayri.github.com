---
layout: post
title: CSS Renk Geçişleri (Gradients)
Date: 2011-07-16 21:28
Category: CSS
tags: [doğrusal renk geçişi, gradient, radyal renk geçişi, renk geçişi]
---

CSS ile renk geçişi CSS3 ile birlikte gelen güzel bir özelliktir. Resim
kullanmadan bir renkten diğerine geçiş yapmayı sağlayan css3 gradients
özelliği bize tasarımsal anlamda çok büyük avantaj sağlar. Ayrıca resim
kullanmadığımız için HTTP isteği yapmamış oluruz ve böylelikle hız
kazanmış oluruz. Renk geçişi resimleri genelde jpeg olarak kaydedilir,
resimde fazla renk olduğu için, bazen bu renk geçişi resimleri yüksek
boyutlara erişebiliyor. CSS3’ün bu özelliği ile resim yerini kod
blokları alır ve buda bize hız kazandırır.

Esneklik açısından da avantajlıdır. Renk geçişi resimleri esnek
değildir, ancak CSS3 renk geçişi özelliği bize istediğimiz esnekliği
sağlar. Böylece revizelerdeki birçok iş yükünden kurtarır.
Genişleyebilir alanlarda renk geçişi kullanmamızı sağlar.

CSS renk geçişi özelliği resim tanımlanan her özelliğe atanabilir;
background-image, list-style-image, border-image vd. Teoride böyle
olmasına karşı pratikte şu an tarayıcılar sadece background-image yani
background özelliğine eklemeyi desteklemektedir.

Tüm tarayıcılar için üretilen çözüm için 8 satırlık bir kod yazmamız
gerekiyor. CSS3 renk geçişi özelliğini ilk webkit çıkardı, daha sonra
Firefox desteklemeye başladı, ancak kodun karışıklığını Firefox azalttı.
Webkit kodu daha karışık ve detaylı iken Firefox kodu daha sadeleştirdi
ve w3c sonrasında diğer yeni nesil tarayıcılar aynı yolu izledi.

CSS3 renk geçişi özelliğini Firefox 3.6+, Safari4+, Chrome2+, Opera
11.10(sadece doğrusal renk geçişini) ve son olarakta İnternet Explorer
10 desteklemektedir. Her tarayıcı kendi öneki ile bu özelliği destekler.
Chrome ve Safari -webkit- ön eki ile, Firefox -moz- ön eki ile, Opera
-o- ön eki ile, İnternet Explorer ise -ms- ön eki ile destekler.
İnternet Explorer 6-9 sürümleri arası için filter:
progid:DXImageTransform.Microsoft.gradient özelliğini kullanarak çözüm
üretebiliyoruz. Makale boyunca w3c kodu şablonu gösterilecek, hemen
peşinden jsfiddle'deki örneklerde ise tüm tarayıcıların kodları
verilecektir.

IE 6-9 arası için üretilen çözüm CSS3 ile gelen renk geçişinin
yeniliklerini kapsamasa da işimizi görecek kadar bir sonuç vermektedir.

Farklı tarayıcıları için kod yazma sorununu CSS renk geçişi çevrim için
araçları yardımı ile çözüyoruz. Ümit ediyorum ki editörlere benzer
araçlar eklenirse bu iş sorun olmaktan çıkacak, tabi isteğimiz en kısa
zamanda  w3c standartlarına tüm tarayıcıların geçmesi.

CSS3 renk geçişi iki çeşittir. Doğrusal(Linear) ve Radyal(Radial) Şimdi
bu çeşitleri inceleyelim.

## Doğrusal Renk Geçişleri

![][100]

Doğrusal renk geçişleri soldan sağa, yukarıdan aşağı veya istediğimiz
doğrusal yönler arası geçiş yapmamızı sağlar. Phoshop ve Fireworks gibi
editörleri kullananların alışık olduğu bir kullanımı vardır.

CSS3 renk geçişinin dezavantajlarından birisi farklı tarayıcılar için
farklı kod yazma gereksinimidir.

{% highlight css %}
background-image: linear-gradient(<point> || <angle>,]? <stop>, <stop> [, <stop>]* )</stop></stop></stop></angle></point>
{% endhighlight %}

Kod yukarıdaki gibi standartlaşsa da farklı tarayıcılar için farklı kod
yazmamız gerekir. Doğrusal renk geçişi kodunun en basit hali.

{% highlight css %}
background: linear-gradient(#fff,#f8b500);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/txQsL/embedded/result,css,html"></iframe>

Renk geçişi en basit hali ile iki renk arasındaki geçiştir. Yukarıdaki
kod ile en basit renk geçişi sağlanmış olur.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Renk Geçişine Yön Verelim

Yukarıdaki basit kodlamada renkleri yazdık ama açısını, yönünü
belirlemedik. Yukarıdan aşağı, sağdan sola vd. gibi yönleri açı ile
belirleyebiliriz. Yukarıdaki örnek için kodumuz şu şekilde değişecek

{% highlight css %}
background-image: linear-gradient(top,#fff,#f8b500);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/d5Feg/embedded/result,css,html"></iframe>

İlk rengin nereden başlayacağını belirledik ve virgül ile diğer
tanımlardan ayırdık. Bu tanım ile yukarıdan beyaz renk(#fff) ile
başlayacağız ve en altta turuncu(#f8b500) ile bitiriyoruz. Benzer
şekilde yönlerin İngilizce karşılıkları ile diğer yönleri
tanımlayabiliriz. Diğer tanımlar top, bottom, left, right. Benzer
tanımları açı ile de yapabiliriz. 0deg(sol); 90deg(alt); 180deg(sağ);
270deg(üst) ve 360deg(sol) iki sol değeri var.

![][1]

Yukarıdaki tanımı birde dereceli yapalım.

{% highlight css %}
background-image: linear-gradient(270deg,#fff,#f8b500);
{% endhighlight %}

Tabi açı olarak istediğimiz değeri vererek farklı renk geçişlerini de
elde edebiliriz.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Renk Durma Noktaları Oluşturmak

Her ne kadar basit bir tanım ile iki renk arasında geçiş olarak
tanımlasakta, aslında renk geçişi kullanımında daha farklı yöntemlerde
vardır. Araya özel bir renk atamak için kullanırız bu yöntemi ve çok
güzel renk geçişleri oluşturmamıza yardımcı olur.

Durma noktalarınıda eklersek yukarıdaki kodumuz aşağıdaki gibi
olacaktır.

{% highlight css %}
background-image: linear-gradient(top,#fff 0%,#f8b500 100%);
{% endhighlight %}


Renk sıfır noktasından(0%) başlıyor ve son noktada(100%) geçiş bitiyor.

Benzer şekilde araya renk ekleyebilir ve orta noktalardan başlayıp
bitirebiliriz.

{% highlight css %}
background: linear-gradient(top, #ffb76b 0%,#ffa73d 50%,#ff7c00 51%,#ff7f04 100%);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/jXLF6/embedded/result,css,html"></iframe>

Görüldüğü gibi uygulanan renk geçişine ortada başka renkler eklenerek
farklı bir ardalana rengi elde edilmiştir. Yüzde değer kullanmak zorunda
değiliz, piksel ve css’in diğer değerlerinide kullanılabiliriz.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Renk Geçişinde Saydamlık Kullanımı

CSS3 ile birlikte renk tanımlarına alfa kanallarıda eklenmiştir bu
sayede renk tanımladığımız her yerde saydamlık özelliğinide
kullanabilmemize olanak sağlıyor. Tabi bizde burada renkler ile
çalıştığımız için alfa kanalı yardımı ile renk geçişlerinde saydamlıktan
da yararlanabiliriz.

[Daha önce anlattığımız][] gibi rgba tanımlarında alfa kanalı 0 ile 1
arasında değer alır, 0 etkisiz kılarken 1 değeri bize katı bir renk
verir.

{% highlight css %}
background: linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/3mdBt/2/embedded/result,css,html"></iframe>

## Renk Geçişi Tekrarı

Tanımladığımız renk geçişinin belli aralıklarla tekrarını sağlar. Bunun
için ayrı bir kod yazarız, ancak mantık doğrusal renk geçişi ile
aynıdır.

{% highlight css %}
background-image: repeating-linear-gradient(0deg,#f8b500,#FEF4B6 20px, #f8b500 40px);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/X8mK7/2/embedded/result,css,html"></iframe>

repeating-linear-gradient özelliği linear-gradient ile benzer kullanıma
sahiptir. Başta 0deg ile renk geçişinin yönünü belirliyoruz, sonra
tekrar edecek renkleri virgül ile ayırarak yazıyoruz, burada piksel
değeri verildiği gibi css’in diğer değer seçenekleride
kullanılabileceğini unutmayalım.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Çoklu Doğrusal Renk Geçişi Kullanımı

Renk geçişi background-images özelliğine atanıyor, background-images
özelliği CSS3 ile birlikte çoklu kullanıma izin vermektedir. Aynı
şekilde bir elamana birden fazla renk geçişi eklememizede izin veriyor.

{% highlight css %}
background-image: linear-gradient(left top, #FF9900, #FF0000, transparent),
-moz-linear-gradient(right top, #FF9900, #FF0000, transparent);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/Fr4tq/2/embedded/result,css,html"></iframe>

Yapmamız gerek sadece iki tanım arasını virgül ile ayırmak. Üst üste
binmelerde saydam özelliğini kullanarak farklı resimler elde edilebilir.

Tüm bu özellikleri birleştirerek çok güzel ardalanlar elde edebiliriz.

[http://leaverou.me/demos/css3-patterns.html][] ve
[http://leaverou.me/css3patterns/][] sitesindeki örnekler bu özelliğin
gelecek açısından ne kadar ümitli olacağımızı gösteriyor. Bu sitede artı
olarak background-size özelliği kullanılmıştır. [http://leaverou.me][]
sitesi css renk geçişi konusunda geniş bilgi ve örneğe sahip incelemekte
yarar var. Komşu kızının sitesini takibe almakta yarar var.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

Radyal Renk Geçişleri
=====================

![][2]

Diğer bir renk geçiş türüde radyal renk geçişleridir. Radyal renk
geçişi, merkezi bir noktadan tüm yönlere renk geçişi olarak
tanımlanabilir. Yukarıdaki kullanıma yakın bir kullanımı vardır. Radyal
renk geçişi bize özel şekil(daire ve elips) oluşturma imkanı verir.
İnternet Explorer 10’nuncu sürümü hariç desteklemediği için
uygulanabilirliği azalıyor. Uygulamak için beklememiz gerekiyor

{% highlight css %}
radial-gradient( [<position> || <angle>,]? [<shape> || <size>,]? <stop>, <stop>[, <stop>]* )
{% endhighlight %}

**position(konum):**background-position ile aynı şekilde yorumlanır.
Başlangıç değeri center dir.

**angel(açı):** Başlangıç noktası ile renk geçişi hattının açısını
gösterir. Başlangıç değeri 0deg dir

**shape(şekil):**İki değer alır. circle ve ellipse. circle(dair)
yarıçapı belli olan bir daire şeklinde renk geçişi uygulanır.
ellipse(elips) bir elips şeklinde renk geçişi uygulanır. Başlangıç
değeri ellipse’dir.

**size(boyut):**Renk geçişinin boyutunu belirler. Belli değerler alır.
Aşağıda açıklanacaktır.

**stop(durak):**Renk geçişlerinde araya farklı renk atamak için belli
durak noktaları oluşturmak için kullanılır. 0% ile 100% arasındaki
değerleri alabilir.  

Radyal renk geçişinin doğrusal renk geçişinden farklı olarak size(boyut)
tanımları vardır. Boyut değerlerini tek tek inceleyelim.

## Boyut Değerleri

closest-side: Dairelerde, merkezden kutunun kenarına kadar anlamındadır.
Elipslerde ise merkezden yatay ve dikey kenarlarının yakınına kadar
anlamındadır.

closest-corner: Renk geçişi yapılan elemanın merkezinden tam köşelere
kadar uygulanmasıdır.

farthest-side: closest-side ile benzer anlamdadır, yakın kenara değil
uzak kenara kadar uygulanır. Elips şekillerde dikey ve yatay uzak
kenarlara kadar uygulanır.

farthest-corner: Renk geçişi yapılan elemanın merkezinden uzak köşeye
kadar uygulanır.

contain: closest-side ile eş anlamlı.

cover: farthest-corner ile eş anlamlı

Bu terimleri uygulayarak daha iyi öğreneceğimizi düşünüyorum.

En basit radyal renk geçişi

{% highlight css %}
radial-gradient(circle farthest-side, #ff9900, #ff0000)
{% endhighlight %}

![][3]

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/LWXfa/embedded/result,css,html"></iframe>

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Radyal Renk Geçişlerinde Durma Noktaları Oluşturmak

Doğrusal renk geçişinde olduğu gibi radyal renk geçişinde de birden
fazla renk eklemek için durma noktaları oluşturabiliyoruz.

{% highlight css %}
radial-gradient(circle farthest-side, #FF9900, #FF0000, #FF9900);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/cfWpd/1/embedded/result,css,html"></iframe>

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Radyal Renk Geçişi Tekrarı

Doğrusal renk geçişinde olduğu gibi tanımladığımız renk geçişlerini ufak
bir özellik ismi değişimi ile tekrarını sağlayabiliyoruz.

{% highlight css %}
repeating-radial-gradient(#FF9900, #FF9900 5px, #FF0000 5px, #FF0000 10px);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/HgBCv/embedded/result,css,html"></iframe>

Firefox3.6 ile birlikte gelen bu özelliği webkit desteklemeye başladı
Chrome 10’dan itibaren destekliyor, Safari’nin bir sonraki sürümünde
muhtemelen gelecektir.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Çoklu Radyal Renk Geçişi Kullanımı

Doğrusal renk geçişinde olduğu gibi kullanımı vardır. İki tanım arasına
virgül konularak uygulanır.

{% highlight css %}
background-image: radial-gradient(20% 50%, circle contain, #FF0000, #FF9900 95%, transparent), radial-gradient(50% 50%, circle contain, #FF0000, #FF9900 95%, transparent), radial-gradient(80%
50%,circle contain, #FF0000, #FF9900 95%,transparent);
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/HU7ym/embedded/result,css,html"></iframe>

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**4.0+**|**10+ (-ms)**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Sonuç

Webkit ilk olarak bulduğu renk geçişi özelliğinde Firefox’un daha basite
indirgediği kod w3c tarafından da kabul gördü ve webkit’de yeni nesil
kodlarını Firefox’un tanımlarına göre yapıyor. Fazla kod kalabalığı
gözümüzü korksa da ileride ortak bir standart bulunacağı görülüyor.

Kod kalabalığını çevrimiçi araçlar yardımı ile aşabiliyoruz.

-   [http://www.colorzilla.com/gradient-editor/][]
    Doğrusal renk geçişleri için bir numaralı araç. Örnekler bize hız
    kazandırmak için çok güzel. Tek eksiği radyal renk geçişi desteğinin
    olmaması
-   [http://gradients.glrzad.com/][]
    Renk geçişi parametrelerini daha kolay değiştirebilmemiz güzel.
    Radyal renk geçişi desteği yok
-   [http://www.westciv.com/tools/gradients/][]
    Diğerlerine göre bazı eksikleri olsada radyal renk geçişi desteği
    diğerlerine göre avantajlı
-   [http://www.css3maker.com/css-gradient.html][]
    webkit için doğrusal ve radyal renk geçişi desteği var

Bu araçları kullanarak renk geçişlerimizi kolayca oluşturabiliyoruz.
Umarım ileride bu ve daha iyi araçlar editörlere gelir.

Hala gelişimini tamamlamış olan renk geçişi özelliği ileride bize daha
avantajlı yenilikler sunabilir. Konik Renk Geçişi özelliği
eklenebileceği konusunda yazılar var.

Uzun bir yazı oldu ama konuyu bölmek istemedim. Eksik ve aksaklıklarım
oldu ise af ola.

Kalın sağlıcakla

## Kaynaklar

-   [http://www.w3.org/TR/css3-images/#gradients][]
-   [https://developer.mozilla.org/en/Using_gradients][] (güzel)
-   [http://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Gradients/Gradients.html][]
-   [http://dev.opera.com/articles/view/css3-linear-gradients/][]
-   [http://www.red-team-design.com/css-gradients-quick-tutorial][]
-   [http://www.webdesignerwall.com/tutorials/cross-browser-css-gradient/][]
-   [http://gradients.glrzad.com/][] (Çevrimiçi araç)
-   [http://robertnyman.com/2010/02/15/css-gradients-for-all-web-browsers-without-using-images/][]
-   [http://www.colorzilla.com/gradient-editor/][] (Çevrimiçi araç)
-   [http://webkit.org/blog/175/introducing-css-gradients/][]
-   [http://www.westciv.com/tools/gradients/][] (Çevirimiçi araç)
-   [http://css-tricks.com/css3-gradients/][] (Ayrıntılı)
-   http://www.puremango.co.uk/2010/04/css-gradient-background
-   [http://hacks.mozilla.org/2009/11/css-gradients-firefox-36/][]
-   [http://ajaxian.com/archives/css-gradients-in-action][]
-   [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-understanding-css3-gradients/][]
-   [http://www.dynamicdrive.com/style/csslibrary/item/css3_linear_gradients/][]
-   [http://www.the-art-of-web.com/css/radial-gradients/][]
-   [http://www.webdesignerdepot.com/2010/11/adding-transparencies-and-gradients-with-css/][]
-   [http://www.display-inline.fr/projects/css-gradient/][]
-   [http://davidwalsh.name/css-gradients][]
-   [http://www.slideshare.net/LeaVerou/mastering-css3-gradients][]
-   [http://css-class.com/test/css/3/gradients/repeating-linear-gradients-stops.htm][]
-   [https://developer.mozilla.org/en/CSS/repeating-linear-gradient][]
-   [http://24ways.org/2010/everything-you-wanted-to-know-about-gradients][]
-   [http://leaverou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/][]
-   [http://msdn.microsoft.com/en-us/ie/hh272902#_CSSGradients][]
-   [http://developer.practicalecommerce.com/articles/2395-CSS3-Gradients-Revisited][]
-   [http://www.webdirections.org/blog/css3-radial-gradients/][]
-   [http://designfestival.com/a-farewell-to-css3-gradients/][]

> * webkit için iki farklı tanım vardır eski tanımda iki tür için tek
> özellik adı var iken yeni nesil tanımlarda w3c ile aynı tanııma
> geçilmiştir.

  [100]: https://lh6.googleusercontent.com/qdn73-Cr_BtDXHybNUYrBRPDgdpSY35sBoIxaSTEaRqZrdDr7YgO7QAkwOJb6AJDNEZIzQh58zcwM3WZJGZAAl_VIiOKp1nxZAonW1_EscSfTVJV8j4
  [1]: /images/dogrusal_renk_gecisi.gif
  [Daha önce anlattığımız]: http://fatihhayrioglu.com/css3-rgba-renk-tanimi/
  [http://leaverou.me/demos/css3-patterns.html]: http://leaverou.me/demos/css3-patterns.html
  [http://leaverou.me/css3patterns/]: http://leaverou.me/css3patterns/
  [http://leaverou.me]: http://leaverou.me
  [2]: https://lh4.googleusercontent.com/zTNQg2bWiAo4RRgxE2D5sF6W13C3sjBjayS4NBVEiO3bGZzfE8ns63R4qWeub4XHUEfBLW3fD8Ue62Zmfebm2IKQU4NSNvViku8B6WIAIC7-W4LDwA
  [3]: /images/radyal_renk_gecisi.gif
  [http://www.colorzilla.com/gradient-editor/]: http://www.colorzilla.com/gradient-editor/
  [http://gradients.glrzad.com/]: http://gradients.glrzad.com/
  [http://www.westciv.com/tools/gradients/]: http://www.westciv.com/tools/gradients/
  [http://www.css3maker.com/css-gradient.html]: http://www.css3maker.com/css-gradient.html
  [http://www.w3.org/TR/css3-images/#gradients]: http://www.w3.org/TR/css3-images/#gradients
  [https://developer.mozilla.org/en/Using_gradients]: https://developer.mozilla.org/en/Using_gradients
  [http://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Gradients/Gradients.html]: http://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Gradients/Gradients.html
  [http://www.red-team-design.com/css-gradients-quick-tutorial]: http://www.red-team-design.com/css-gradients-quick-tutorial
  [http://www.webdesignerwall.com/tutorials/cross-browser-css-gradient/]: http://www.webdesignerwall.com/tutorials/cross-browser-css-gradient/
  [http://robertnyman.com/2010/02/15/css-gradients-for-all-web-browsers-without-using-images/]: http://robertnyman.com/2010/02/15/css-gradients-for-all-web-browsers-without-using-images/
  [http://webkit.org/blog/175/introducing-css-gradients/]: http://webkit.org/blog/175/introducing-css-gradients/
  [http://css-tricks.com/css3-gradients/]: http://css-tricks.com/css3-gradients/
  [http://hacks.mozilla.org/2009/11/css-gradients-firefox-36/]: http://hacks.mozilla.org/2009/11/css-gradients-firefox-36/
  [http://ajaxian.com/archives/css-gradients-in-action]: http://ajaxian.com/archives/css-gradients-in-action
  [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-understanding-css3-gradients/]: http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-understanding-css3-gradients/
  [http://www.dynamicdrive.com/style/csslibrary/item/css3_linear_gradients/]: http://www.dynamicdrive.com/style/csslibrary/item/css3_linear_gradients/
  [http://www.the-art-of-web.com/css/radial-gradients/]: http://www.the-art-of-web.com/css/radial-gradients/
  [http://www.webdesignerdepot.com/2010/11/adding-transparencies-and-gradients-with-css/]: http://www.webdesignerdepot.com/2010/11/adding-transparencies-and-gradients-with-css/
  [http://www.display-inline.fr/projects/css-gradient/]: http://www.display-inline.fr/projects/css-gradient/
  [http://davidwalsh.name/css-gradients]: http://davidwalsh.name/css-gradients
  [http://www.slideshare.net/LeaVerou/mastering-css3-gradients]: http://www.slideshare.net/LeaVerou/mastering-css3-gradients
  [http://css-class.com/test/css/3/gradients/repeating-linear-gradients-stops.htm]: http://css-class.com/test/css/3/gradients/repeating-linear-gradients-stops.htm
  [https://developer.mozilla.org/en/CSS/repeating-linear-gradient]: https://developer.mozilla.org/en/CSS/repeating-linear-gradient
  [http://24ways.org/2010/everything-you-wanted-to-know-about-gradients]: http://24ways.org/2010/everything-you-wanted-to-know-about-gradients
  [http://leaverou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/]: http://leaverou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/
  [http://msdn.microsoft.com/en-us/ie/hh272902#_CSSGradients]: http://msdn.microsoft.com/en-us/ie/hh272902#_CSSGradients
  [http://www.webdirections.org/blog/css3-radial-gradients/]: http://www.webdirections.org/blog/css3-radial-gradients/
  [http://designfestival.com/a-farewell-to-css3-gradients/]: http://designfestival.com/a-farewell-to-css3-gradients/


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png