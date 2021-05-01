---
layout: post
title: IE6 Sonrası Kod Yazma Alışkanlıklarımızı Güncellemek
Date: 2011-08-29 17:13
categories: [CSS]
---

Bir çok site İnternet Explorer6 desteği kaldırdı ve kaldırmak için son
kullanma tarihi belirledi. Bunda tabi İnternet Explorer6 kullanan
kullanıcı sayılarının yüzdesinin hızla düşmesi ve %2,5 seviyesine
düşmesinin etkisi büyük. 27 ağustos 2001 tarihinde yayın hayatına
başlayan ie6 tam 10 senedir web aleminin etkiliyor. %95’e varan oranlara
kadar yükseldiği zamanlarda oldu, ancak en çok 4-5 senedir standartların
gerisinde kalması nedeni ile eleştirilere hedef olması ile ün kazandı.
Son günlerini yaşayan ie6 artık birçok site tarafından dikkate
alınmıyor.

Peki ie6 hayatımızdan çıktı tamam kurtulduk demek ile hemen iş bitiyor
mu? Hayır maalesef biz arayüz geliştiricilerinin 10 senedir hayatına
dahil olan ie6 kodlama mantığımızın derinliklerine kadar işlemiş
durumda. Biz test etmesekte kod yazarken hala ie6’yı bilemedende olsa
düşünerek kod yazıyoruz. Bu makalemde neleri hala eskisi gibi
düşünüyoruz, ie6 bize neleri yaptırdı ve artık bunları yapmamamız
gerekiyoru yazmaya çalışacağım.

Benim kod yazarken dikkatimi çeken bir şey oldu. Biz bazı şeyleri
otomatik yapıyoruz, bilmeden alışkanlık olarak, bazı şeyleri ise
düşünüyoruz ve öyle uyguluyoruz. Bu kötü bir şey değil aksine güzel bir
şey, her gülün dikeni olmak zorunda işte beynimizde düşünmeden
yazdığımız bilinçaltı kodlama sayesinde biz daha hızlı kod yazıyoruz ve
daha hızlı sonuç elde ediyoruz. Ancak bu bilinçaltı kodlama bazen bize
dezavantajlarda sunuyor. Mesela 10 senedir uğraştığın ie6 gibi bir
tarayıcıyı öldürdüğün halde hala ona göre kod yazmaya devam ediyor olmak
gibi, hala ondan sonraki adımı bekletmek gibi.

Daha önce “[Internet Explorer 6 olmasa hayat daha kolay ve zevkli olurdu][]” diye bir makale yazmıştım, bundan 2 sene önce. Tabi oradaki
temenni bugün gerçeğe dönüştü. Artık tamamen yok sayabiliyoruz ie6’yı.
Şimdi oradaki ve diğer avantajları görerek kod yazma mantığımızı
güncellememiz gereken özellikleri sıralayacağım.

## Saydam PNG

İnternet Explorer 7. sürümünden itibaren saydam png desteği sunmaya
başladı. ie6 için ayrıca düzeltme kodu yazmak zorunda kalıyorduk.
“[Internet Explorer 6 için saydam PNG desteği][]” makalemde yazdığım
yöntem ile ie6 desteği sağlamış oluyorduk. Bu yöntem ile bir çözüm
üretiyorduk ama bu çözüm beraberinde bazı sorunlarıda getiriyordu.
Uygulanan alan içindeki bağlantılar ve form elemanlarında ile sıkıntılar
tam olarak çözülebilmiş değildi. Ayrıca ie6 için yazılan
AlphaImageLoader resmin geç yüklenmesine ve fazla kaynak tüketmesine
sebebiyet veriyordu. Sonradan sayfaya eklenen öğelerde sorunlar
çıkarıyordu.

![][100]

PNG formatı ie6’nın etkisi ile yeterince değer görmedi. Birçok yerde
ie6’yı düşünerek saydam gifler kullandık, buda sitemizin görüntüsünde
sevmediğimiz sonuçlara neden oldu. PNG bize hem gif hemde jpeg ve hemde
saydamlık özelliği kazandırmaktadır. Tek dezavantaj olarak görünen kısmı
saydam png boyutlarının eğer gerekli şartlar dikkate alınmazsa çok
büyümesidir.

Biz sprite resimlerimizi ie’yı düşünerek hep gif yaptık, ama artık png
yapabiliriz. Sprite resimlerimizde tam saydamlık bizim elimizi
güçlendirecektir.

ie’da saydam png kullanmamamız nedeni ile bazen iki adet resim
hazırlardık. Diğer tarayıcılar için saydam png, ie6 için yarı saydam
gif. Buda sitemizi barındırdığımız yerde bir ikilem oluşması, düzenleme
yaparken her iki dosyayıda düzenlemek zorunda kalmamızı neden oluyordu.
Artı iş gücü kaybına neden oldu.

Şimdi tüm sprite resimlerimizi saydam png yapalım demiyorum tabi duruma
göre kullanalım diyorum, ama artık elimizide korkak alıştırmayalım yani
kullanmamız gereken yerlerde çekinmeden kullanalım.

Saydam PNG kullanalım. Saydam PNG’yi daha çok dikkate alalım.

## Seçici Desteği

Benim en çok geride kaldığım konulardan bir tanesi bu kısımdır. Ben hala
bir çok seçiciyi kullanmıyorum, halbuki ie6’dan kurtulduk bunları
kullanabiliriz. Sizi bilmiyorum ama bu seçicileri unutmuş olmak beni çok
üzdü. CSS’de seçiciler bizim elimiz, kolumuz gibidir. Çok değerldir
yani. Ne kadar seçme imkanımız varsa o kadar güçlüyüz demektir. Şimdi
ie6’nın desteklemediği ama ie7’den itibaren desteklenen ve artık
rahatlıkla kullanabileceğimiz seçicileri tanıtayım.

**Özellik Seçicileri**

CSS2.1 ile gelen özellik seçicilerini ie7 desteklemektedir. Bu seçiciler
bize daha az kod ile daha fazla erişim sağlamaktadır. [Bu konuyu][]
yazarken bile ie7’nin çıkmasını beklemişim.

Basit Özellik Seçicisi

```css
 a [title] {
	color:#f00
}
```

Sadece title özelliği tanımlanmış bağlantı elementlerini yakalamamıza
sağlar.

**Özellik Değeri Seçicisi**

```css
input[type="text"] {
	border: 1px solid #177F75;
	font-family:Verdana, Arial, Helvetica, sans-serif;
}

input[type="submit"]{
	margin-left: 201px;
	background-color: #00CC00;
}
```

Özellik değeri seçicisi daha fazla esneklik sağlar. Yukarıda örnekte
görüldüğü gibi Form elemanlarını ayırmak zor oluyordu. Normal bir input
tanımı yapmak istediğimizde her özelliği için ayrı class yazmak zorunda
kalıyorduk. Özellik değeri seçicisi ile artık ayrımı yukarıdaki gibi
yapmak çok kolay.
http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors
yazısında bu özelliğin bize ne kadar avantaj sağladığını görüyoruz.

**Kısmi Özellik Değeri Seçicisi**

Bir etiketin özellik değerindeki boşluklarla ayrılmış kısımlarına göre
tanımlama yapmamızı sağlar.

```css
a[title~="Google"] {
	text-decoration:overline;
}
```

**Dikkate Değer Özellik Seçicisi**

Bir etiketin özellik değerindeki kesik çizgi(-) ile ayrılmış kısımlarına
göre tanımlama yapmamızı sağlar.

```css
*[lang|="en"] {
	color: red;
}
```

Bunların dışında CSS3 ile birlikte gelen Özellik seçicileride var. Daha
gelişmiş özellikler ile gelen CSS3’ni de desteklemektedir. Makaleye
bunları yazmamışım bile ie6 desteklemiyor diye.

**Belirlenen Sözdizimi ile Başlayan Özellik Değer Seçicisi**

Özellik içeriğinin başlangıç değerine göre ayırt etmemizi sağlar.

Mesela web siteleri ile e-posta ayrımını yapmak için mesela

```css
a[href^="http:"] {
	background:("baglanti.gif") 0 0 no-repeat;
	padding-left:15px;
}

a[href^="mailto:"] {
	background:("posta.gif") 0 0 no-repeat;
	padding-left:15px;
}
```


**Belirlenen Sözdizimi ile Biten Özellik Değer Seçicisi**

Özellik içeriğinin bitiş değerine göre ayırt etmemizi sağlar.

Mesela farklı dosya tiplerine verilen bağlantıları ayırt etmek için
bağlantıların başına ikon koymak istediğimizde

```css
a[href$='.pdf'] {
  display:inline-block;
  padding-left:20px;
  line-height:18px;
  background:transparent url(/Images/PDFIcon.gif) center left no-repeat;
}

a[href$='.doc'] {
  display:inline-block;
  padding-left:20px;
  line-height:18px;
  background:transparent url(/Images/WordDocIcon.gif) center left no-repeat;
}

a[href$='.zip'], a[href$='.gzip'], a[href$='.rar'] {
  display:inline-block;
  padding-left:20px;
  line-height:18px;
  background:transparent url(/Images/ZIPIcon.gif) center left no-repeat;
}
```

**İçinde Belirlenen Sözdizimi Geçen Özellik Değer Seçicisi**

Özellik içeriğinde belirlenen değerin geçip geçmemesine göre ayırt
etmemizi sağlar.

```css
a[href*="example.com"] {
	color:#ff0
}
```

Sadece özellik seçicileri değil ayrıca çocuk seçicileri, bitişik kardeş
seçicisi, :first-child

**Çocuk seçicileri**

Sadece bir alt elemanı, yani çocuğunu(torunlar dahil değil) seçmek
istediğimizde kullandığımız seçici. Bir menüde liste elemanlarına
tanımlama yaparken tüm alt elemanlara değilde sadece ilk menü liste
elemanlarına etki yapmasını istediğimizde çok işimize yarar mesela

```css
ul > li{
	list-style:none
}
```

Çocuk seçicisi bizi fazla kod yazmaktan korur. Mesela bir menü için
tanımlama yaptığımızda eğer menünün alt elemanlarına farklı stiller
ekleyeceksek alt elemanlar için üstteki her tanımı ezmemiz gerekiyor,
ancak çocuk seçicisi ile buna gerek kalmıyor.

**Bitişik Kardeş Seçicisi**

Bitişik Kardeş Seçicileri biribiri ardına gelen aynı seviyedeki
elementlerden sonra gelenine stil tanımlamak için kullanılır. Tam olarak
“Bir Ufak Kardeş Seçicisi” olmalıdır. Yeri gelince oldukça kullanışlı
bir özellik.

**Genel Kardeş Seçiciler**

CSS3 ile birlikte gelen genel kardeş seçicisi bitik kardeş seçicisinden
farklı olarak sadece bir sonraki değil aynı ana kapsayıcı içindeki
belirtilen elemandan sonraki aynı seviyedeki elemanları seçmek için
kullanılır. Seçici işareti olarak elemanlar arasına tilde(~) işareti
konulur.

```css
E ~ F {

}
```

Bitişik kardeş seçicisine göre daha avantajlı bir seçicidir. Burada
dikkat edilmesi gereken bir durum vardır oda genel kardeş seçicisi
belirtilen elemandan sonraki kardeşler için geçerlidir önceki kardeşleri
kapsamaz.

Bir örnek yapacak olursak bir resmimiz var bunu sola hizalayacağız ve
sağdanda metinler akacak. Bu resim ve paragraflar arasına padding
tanımlamak için genel kardeş seçicisi birebirdir.

```css
img{
  float:left;
	}

img ~ p{
	padding-left:110px;
}
```

```html
<img src="kedi.jpg" width="96" height="96" alt="kedi" />
<p>Kedi (Felis catus),...</p>
<p>2,5 ile 12 kilo ...</p>
<p>Kediler hoş görünüşlü, ..</p>
```

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/KGkAK/1/embedded/result,css,html"></iframe>

**:first-child sözde seçicisi**

Birçok yanyana dizilimde ilk ve son elemanı yakalama sorunlarımız olur.
Genelde bu sorunları çözmek için javascript yardımına gereksinim
duyarız. :fisrt-child ile ilk elemanı yakalayabiliyoruz, ama last-child
ile sonu yakalamak için biraz daha beklememiz gerekiyor. ie9’dan
itibaren destekliyor.

Mesela bir listemiz olsun yanyana sıraladığımız aralarında 10px’lik
mesafelerin olduğu biz eğer tanımı

```css
ul li{
	margin-right:10px
}
```

şeklinde yaparsak listenin son elemanı sonrasınada 10px atayacaktır ve
bu sorun olacaktır. Biz first-child seçicisini de düşünerek kodumuzu
şöyle değiştirelim.

```css
ul li{
	margin-left:10px
}

ul li:first-child{
	margin-left:0
}
```


Evet sağ margin yerine sol margin verdik ama first-child ile
istediğimizi elde ettik.

Bu seçicileri aklınızın bir kenarına not edin. Hatta bir yere not edip
çalışma alanınızda görebileceğiniz bir yere yapıştırın. Unutmayın

## Tüm elemanlarda :hover desteği

CSS’e ilk adım herkes linklerin farklı durumu için css ile tanımlama
yapmasına ve javascript gereksinimi olmadan açılır menü yapmasına
şaşırmıştır.

Genelde CSS ile menü yaparken ie6 için javascript ile çözüm ürettik.
Ancak artık js kullanmadan açılır menüler yapabileceğiz. Tabi sadece
menü değil tüm html elementlerinde :hover sahte sınıfını
kullanabileceğiz.

```css
ul li ul{
	display:none
}

ul li:hover ul{
	display:block
}
```

kodu kısaca bize menü oluşturma imkanı veriyor. liste öğesine bu şekilde
yapılan tanımlarda alt menüye geçildiğinde ve üzerinde iken üst menüde
seçili görünecektir ve buda kullanıcı dostu bir görünüm sağlayacaktır.

Ayrıca diğer alanlarda :hover kullanarak js olmadan gizle-göster yapma
imkanımız var artık.

```css
div > p{
	display:none
}

div:hover > p{
	display:block
}
```

:hover sahte seçicisinin nimetlerinden yaralanmayı unutmayın. Menülere
özgürlük. Gizel-Göster CSS

## min-height, min-width, max-height ve max-width desteği

Bence height değeri yerine her zaman min-height değerini kullanmakta
yarar var. height değeri bizi sınırlandırıyor ve birçok sorunlara neden
olabiliyorken min-height değeri ise sade belirtilen değerde içerik yok
ise yüksekliği o değere çeker fazla içerik geldiğinde ise kapsayıcıyı
uzatır.

ie6 için min-height basit bir css düzeltmesi olsada min-width,
max-height ve max-width için javascript ile çözüm üretmek zorunda
kalıyorduk. Buda tarayıcıyı ve siteyi zorluyordu.

min-height, min-width, max-height ve max-width ile sınırlarınızı daha
iyi kontrol edin.

## Farklı Genişlik ve Yükseklik Tanımlarına Son(box model hacking)

Kutu modeli çözümü(box model hacking) diyede bildiğimiz ie6’nın genişlik
ve yükseklik yorumlamada diğer tarayıcılardan farklı yorumlaması nedeni
ile css ile düzeltme yazmak zorunda kalıyorduk. [Box Model Sorunu ve Çözümü][] makalesinde yazdığım gibi ben uzun düzeltmeyi kullanıyordum
genelde ancak (_) ile daha kolay bir çözüm de vardı, ben w3c
doğrulamasından geçmediği için tercih etmiyordum bu yöntemi.

Sorunu tekrar hatırlarsak;

“W3C’ye göre genişlik(ve yükseklik) değeri içerik alanı değeridir.
padding ve border değerleri buna ek olarak toplam kutu genişliğine
eklenir. Eğer toplam kutu değeri eklenecekse içerik alanı ve etrafındaki
padding ve border değerleri toplamıdır.

Buraya kadar çok güzel ancak tüm web tarayıcıları bu durumu aynı şekilde
yorumlamaz. IE’un IE6/strict’den önceki sürümleri yukarıda anlattığımız
standart yorumun dışına çıkar, genişlik veya yükseklik değeri tüm kutu
model element değerini ifade eder. Yani tüm padding ve border
değerlerini içerir kalan kısmıda içerik alanı değeri olarak belirlenir.”

Bundan dolayı

```css
#icerik{
  width:230px;
  padding:10px;
  border:5px solid #000; /* Bundan sonraki kısmı ie5win sakla */
  voice-family: "\"}\"";
  voice-family:inherit;
  width:200px;
}

html>body #icerik {
	width:200px;
}
```


şeklinde bir css çözümü veya

```css
#icerik{
  width:200px;
  _width:230px;
  padding:10px;
  border:5px solid #000;
}
```

çözüm üretiyorduk. Yoksa sitemiz ie6’da yamuk görünüyordu. Bloklar aşağı
kaçıyor hiç istemidiğimiz görüntüler ortaya çıkıyordu. Ama artık çift
tanım ve css düzeltmeleri yok bitti.

Kutu modeli sorunu sonu

## position:fixed desteği

ie6 postion özelliğinin fixed değerini desteklemiyordu. Bizde çözüm için
“[Sabit Konumlandırma (Postion:fixed)][]” expression ile çözüm
üretiyorduk. Artık çözüm üretmeye gerek yok.

İstediğimiz alanı sabitleyebileceğiz artık.

## İki sınıf tanımlama

ie6 birden fazla sınıf içeren elemanlara bu iki sınıfı kullanarak
tanımlama yaptığımızda bunu görmüyordu.

```html
	<div class="liste onemli">...</div>
```

```css
div.liste.onemli {... }
```

Tanımı yaptığımızda ie6 burada .onemli için tanım yapmış gibi
davranıyordu. Artık daha kolay seçim yapabileceğiz. Ufak ama güzel bir
özellik.

## !important kullanımı

Tanımlarımızın etkinliğine arttırmak için !important son ekini
kullanıyoruz. Ancak ie6 bir özellik tanımlı ise ve tekrar ezmek için bir
daha !important’lu kullanılıyorsa bu tanımı görmüyor

Artık çekinmeden !important tanımını kullanabileceğiz.

## Diğer Hatalar

-   [IE’de Hata Ayıklamak için şartlı Yorumlar Kullanmak][]
-   [CSS Hata Ayıklama Yöntemleri][]
-   [Css de kodumuzu İE’den gizleme][]
-   [CSS ile Kutu modeli, sorunları ve çözümleri][]
-   [IE’da İkikat görülen Margin Problemi ve Çözümü][]
-   [IE’da min-width, min-height,max-width, max-height Kullanmak][]
-   [IE6′un Tekrarlayan Karakter Sorunu][]
-   [IE’un 3 piksel Metin Öteleme Hatası][]
-   [IE6′da CEE-EEE(peek-a-boo) Hatası][]
-   [Göreceli-Mutlak Konumlandırma Sorunu][]
-   [Kenar Boşluğu(Margin) Çökmesi][]
-   [İnternet Explorer 6 ve 7 için Tablo tr elementine kenar çizgisi atamak][]
-   [CSS Yorumlarında Türkçe Karakter Kullandığımızda İE6′da Sorun Çıkarıyor][]
-   [IE6′da Liste Ardalan Görmeme Sorunu][]
-   [ie6′da border-color:transparent desteği sağlamak][]

Tüm liste için blogs.msdn.com/b/ie/archive/2006/08/22/712830.aspx bakın.

ve CSS dersleri altındaki CSS Problemleri ve Çözüm Önerileri başlıklı
içeriğin bir çoğunu tek başına oluşturan ie6 sorunlarını düzeltmeyeceğiz
artık.

 - Artık sol ve sağ margin tanımları yaptık diye display:inline tanımı yapmak zorunda değiliz,
 - Artık tekrarlayan karakter sorunu nedeni ile HTML yorumlarımızı silmek veya değiştirmek zorunda değliz,
 - Artık 3px sorunu için takla atmak zorunda değiliz,
 - Artık cee-ee sorunu nedeni yüzünden background değerlerini silmek zorunda değiliz,
 - Artık relative içindeki absolute tanımlar için fazladan kod yazmak zorunda değiliz.,
 - Artık yorum satırlarında Türkçe karakter kullanabileceğiz,
 - Artık saydam kenar çizgileri kullanabileceğiz,
 - Artık line-height sorunuları nedeni ile fazladan kod yazmayacağız.,
 - Artık liste işaretleri sorunu ile uğraşmayacağız,
 - Artık overflow sorunu nedeni ile fazladan position:relative ve height:100% tanımı yapmayacağız.,
 - Artık ie6 için çözüm üretmek için *html, _ ile çözüm üretmeyeceğiz.,
 - Artık kenar çizgilerinden dotted  dashed gibi görünüyor diye dert etmeyeceğiz,
 - Artık ie6 yok.

Kodlarımızı bu gerçeklere göre tekrar gözden geçirelim.

## Sonuç

İe6’dan kurtulmak bizim için bir bayramdır. İki bayramı birden yaşayacak
olmanın sevinci içindeyiz. Bu yazıdaki amacım kod yazarken otomatiğe
bağladığımız sistemi biraz irdeleyerek güncellemek. Belki siz benim
kadar bu sorunu yaşamıyor olabilirsiniz, ancak benim gibi böyle bir
sorun yaşayanlar için yazdım bu yazıyı. Burada sadece css sorunları
hakkında yazı yazdı isemde javascript yönündende çok sorunlu bir
tarayıcı idi ie6, çok büyük performans sorunları ve güvenlik sorunları
mevcut idi.

Altta kaldım diye üzülme, üste çıktım diye sevinme

Tamam sevinelim ama çokda sevinmeyelim. Çünkü hala sorunlu ie sürümleri
var ve hala ie pazarda lider. ie7’nin hatta 8’in javascript
yorumlamadaki yavaşlığı. 7,8,9’un css3 ve html5 eksikleri ie7’nin
hasLayout sorunları hala bizimle. Muhtemelen ie7’nin sonunada
yaklaşmaktayız. 1-2 seneye belki daha evvel kurtulma ihtimalimiz var.

Ama bugün arayüz geliştiricileri için bayram.

ie6 öldü.

## Kaynaklar

-   bradt.ca/archives/preventing-ie6-bugs/
-   [http://www.sitepoint.com/10-fixes-for-ie6-problems/][]
-   [http://softwareas.com/ten-reasons-why-ie6-development-is-significantly-better-in-2010-than-2001-but-still-painful][]
-   [http://bip.softwarejewel.com/technology/10-reasons-why-ie6-needs-to-be-killed-2253/][]
-   [http://www.carronmedia.com/why-ie6-will-probably-out-live-ie7/][]
-   [http://www.w3counter.com/trends][]
-   [http://www.dedoimedo.com/computers/internet-explorer-6-retire.html][]
-   [http://garmahis.com/tools/ie6-update-warning/][]
-   http://css-tricks.com/482-ie-css-bugs-thatll-get-you-every-time
-   [http://technologytales.com/2007/06/22/ie6-and-javascript-performance/][](js)
-   http://blog.zimbra.com/blog/archives/2006/10/ie-7-vs-ie-6.html
-   [http://ajaxian.com/archives/ie7-twice-as-performant-as-ie6-but-half-as-slow-as-ff-15][]
-   [http://fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/][]

  [Internet Explorer 6 olmasa hayat daha kolay ve zevkli olurdu]: http://fatihhayrioglu.com/internet-explorer-6-olmasa-hayat-daha-kolay-ve-zevkli-olurdu/
  [Internet Explorer 6 için saydam PNG desteği]: http://fatihhayrioglu.com/internet-explorer-6-icin-saydam-png-destegi/
  [100]: /images/saydampng_resim.gif
  [Bu konuyu]: http://fatihhayrioglu.com/ozellik-secicileriattribute-selectors/
  [Box Model Sorunu ve Çözümü]: http://fatihhayrioglu.com/kutu-modeli-sorunlari-ve-cozumleri/
  [Sabit Konumlandırma (Postion:fixed)]: http://fatihhayrioglu.com/sabit-konumlandirma-postionfixed/
  [IE’de Hata Ayıklamak için şartlı Yorumlar Kullanmak]: http://fatihhayrioglu.com/?p=236
  [CSS Hata Ayıklama Yöntemleri]: http://fatihhayrioglu.com/?p=242
  [Css de kodumuzu İE’den gizleme]: http://fatihhayrioglu.com/?p=31
  [CSS ile Kutu modeli, sorunları ve çözümleri]: http://fatihhayrioglu.com/?p=13
  [IE’da İkikat görülen Margin Problemi ve Çözümü]: http://fatihhayrioglu.com/?p=131
  [IE’da min-width, min-height,max-width, max-height Kullanmak]: http://fatihhayrioglu.com/?p=182
  [IE6′un Tekrarlayan Karakter Sorunu]: http://fatihhayrioglu.com/?p=232
  [IE’un 3 piksel Metin Öteleme Hatası]: http://fatihhayrioglu.com/?p=231
  [IE6′da CEE-EEE(peek-a-boo) Hatası]: http://fatihhayrioglu.com/?p=235
  [Göreceli-Mutlak Konumlandırma Sorunu]: http://fatihhayrioglu.com/?p=240
  [Kenar Boşluğu(Margin) Çökmesi]: http://fatihhayrioglu.com/?p=362
  [İnternet Explorer 6 ve 7 için Tablo tr elementine kenar çizgisi atamak]: http://fatihhayrioglu.com/internet-explorer-6-ve-7-icin-tablo-tr-elementine-kenar-cizgisi-atamak/
  [CSS Yorumlarında Türkçe Karakter Kullandığımızda İE6′da Sorun Çıkarıyor]: http://fatihhayrioglu.com/css-yorumlarinda-turkce-karakter-kullandigimizda-ie6da-sorun-cikariyor/
  [IE6′da Liste Ardalan Görmeme Sorunu]: http://fatihhayrioglu.com/ie6da-liste-ardalan-gormeme-sorunu/
  [ie6′da border-color:transparent desteği sağlamak]: http://fatihhayrioglu.com/ie6da-border-colortransparent-destegi-saglamak/
  [http://blogs.msdn.com/b/ie/archive/2006/08/22/712830.aspx]: http://blogs.msdn.com/b/ie/archive/2006/08/22/712830.aspx
  [http://www.sitepoint.com/10-fixes-for-ie6-problems/]: http://www.sitepoint.com/10-fixes-for-ie6-problems/
  [http://softwareas.com/ten-reasons-why-ie6-development-is-significantly-better-in-2010-than-2001-but-still-painful]: http://softwareas.com/ten-reasons-why-ie6-development-is-significantly-better-in-2010-than-2001-but-still-painful
  [http://bip.softwarejewel.com/technology/10-reasons-why-ie6-needs-to-be-killed-2253/]: http://bip.softwarejewel.com/technology/10-reasons-why-ie6-needs-to-be-killed-2253/
  [http://www.carronmedia.com/why-ie6-will-probably-out-live-ie7/]: http://www.carronmedia.com/why-ie6-will-probably-out-live-ie7/
  [http://www.w3counter.com/trends]: http://www.w3counter.com/trends
  [http://www.dedoimedo.com/computers/internet-explorer-6-retire.html]: http://www.dedoimedo.com/computers/internet-explorer-6-retire.html
  [http://garmahis.com/tools/ie6-update-warning/]: http://garmahis.com/tools/ie6-update-warning/
  [http://css-tricks.com/482-ie-css-bugs-thatll-get-you-every-time/]: http://css-tricks.com/482-ie-css-bugs-thatll-get-you-every-time/
  [http://technologytales.com/2007/06/22/ie6-and-javascript-performance/]: http://technologytales.com/2007/06/22/ie6-and-javascript-performance/
  http://blog.zimbra.com/blog/archives/2006/10/ie-7-vs-ie-6.html
  [http://ajaxian.com/archives/ie7-twice-as-performant-as-ie6-but-half-as-slow-as-ff-15]: http://ajaxian.com/archives/ie7-twice-as-performant-as-ie6-but-half-as-slow-as-ff-15
  [http://fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/]: http://fatihhayrioglu.com/xhtml-sayfa-yapisi-ve-css-kullanimi/
