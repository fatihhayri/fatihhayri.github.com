---
layout: post
title: CSS Kodlama Teknikleri ve CSS Kodlarını Azaltma Yöntemleri
Slug: css-kodlarini-temizlemeazaltma
Date: 2006-08-26 00:00
categories: [CSS]
tags: [CSS, kalıtsallık, kısaltmalar, kod-azaltma, torun-seçicisi]
---

Yaptığımız siteleri kodlarken en az kodla ve en düzenli kodlamayı nasıl
yaparızı araştırmalıyız. Bu konu çok önemli bir konudur burada bunun
yöntemlerini anlatmaya çalışacağız. (X)HTML ve CSS kod azaltma bizlere
bir çok avantaj sağlar. Az kodun anlamı hzılı erişimdir. Ayrıca az kod
sitemizin bulundurulduğu sunuculara az yük ve az bantgenişliği kullanımı
demektir. Bu bizleri ve sistem yöneticilerini sevindiren bir haberdir.
Bu makale aynı zamanda CSS kodlama tekniklerini öğretecektir.

## 1- Torun Seçicileri kullanmak

CSS kodlamada bize çok büyük yardımı olan Torun Seçicileri bir örnek
vererek göstereceğiz. Bir web sayfasını bir bölümünü kodlmaka için iki
yöntem göstereceğiz. Torun Seçicilerin kodlamadaki önemini daha iyi
kavrayacağız.

Genelde siteler üst kısım, sol kısım, içerik kısmı, sağ kısım ve alt
kısım gibi belli genel parçalara ayrılır. Bu örneğimizde "solkolon" adı
verilen bir katmanımızın(<div\>) kodlamasını göreceğiz. Tüm sol bölümü
içine alan bir kapsayıcı katmanımız ve içerik bölümü mevcuttur. İlk
yöntemimiz bir çok sitede de kullanılan her elemente bir sınıf atması
yaparak kodlama yöntemidir.

### a - Sınıf Kullanımı

```html
<div id="solkolon">
	<h3 class="solkolonbaslik">Site Hakkında </h3>
	<p>Site hakkındaki yazılar </p>
	<h3 class="solkolonbaslik">Öneriiler</h3>
	<ul class="solkolonlink">
		<li class="link"><a href="arkadaslar.html">Arkadaşlar</a></li>
		<li class="link"><a href="siteler.html">Siteler</a></li>
	</ul>
</div>
```

Yukarıdaki kodlama bir çok web sitesinde kullanıla gelmiş bir yöntemdir.
CSS'in gücünü ilk olarak keşfeden kodlamacılar her elemente bir sınıf
tanımlaması yaparak kullanmayı tercih ede geldiler.

Yukarıdaki kodlamada iki **h3** elementine
`.solkolonbaslik` sınıfını tanımladık.
Bu sınıfa verilen özellikler sadece bu iki **h3** elementine
uygulanacaktır. Aynı işlem **ul** ve **li** elementleri içinde
geçerlidir.

Başlıklara serif fontu, turuncu rengi ve kenarlık ekleyelim ve
listelerimizinde yanındaki işaretleri kaldıralım:

```css
.solkolonbaslik {
	font-family: Georgia, serif;
	color: #c63;
	border-bottom: 1px solid #ccc;
}

.solkolonlink {
	list-style-type: none;
}

.link {
	font-weight: bold;
}
```

Tanımladığımız özellikleri elementlere atadık, buradaki elementlerin
kendine has tanımları vardır. Aynı yöntemi kullanrak tüm sayfamızı
kodlayabilriz.

Yazdığmız kod sorunsuz çalışıyor. Ancak bu kullanımda her element için
bir sınıf tanımlaması gerekecektir. Bu belli bir zamandan sonra çok
kullanışsız ve zor bir yöntem halini alacaktır. şžimdi ikinci yönteme
göz atalım.

### b- Doğal Seçiciler

```html
<div id="solkolon">
	<h3>Site Hakkında </h3>
	<p>Bu site benim hakkımdadır.</p>
	<h3>Fotoğraflarım</h3>
	<ul>
	<li><a href="eskifoto.html">Eski</a></li>
	<li><a href="yenifoto.html">Yeni</a></li>
	</ul>
</div>
```


Görüldüğü gibi tüm sınıf atamaları kaldırılmıştır. Peki tüm sınıfları
kaldırdıysak elementlere nasıl atama yapacağız? Elemetnleri tanımlarken
\#solkolon tanımımız içine giriyoruz. Her elemente stil atamak için
solkolon id'li elementini referans alıyoruz. Örneğin solkolon içindeki
h3 elementinlerine (#solkolon h3) şeklinde özel tanımlamalar
yapabiliyoruz. Bu yöntem ile kullandığımız kod sayısı azalacak ve
kodlarımız daha anlaşılır hala gelecektir. Bu yöntem ile bir çok
elemente sınıf tanımı yapmaktan kurtulacağız.

Bu yöntemi sadece bir bölüme uyguladık(solkolon kısmına), ancak bu işi
tüm sayfa ve site bazlı da yapabilriz. Örneğin icerikAlani, altKisim
bölümlerine de uygulayabiliriz. Bu uygulama bize her bölümde farklı
atamalar yapmamıza izin verir. Mesela **#icerikAlani** kısmında ki
**h3** elementini kırmızı **#altKisim** bölümündeki h3 elementini mor
yapabiliriz. Ayrıca tüm bölümlerdeki **h3**'lerede genel bir tanımlamada
yapabilriiz.

```css
h3 {
	font-family: Georgia, serif; /* tüm h3 ler için atama*/
}

#icerikAlani h3 {
	color: red;
}

#menuAlani h3 {
	color: orange;
}
```

Genel h3 elemetine serif font ailesi tanımlanmı, icerik alanındaki
**h3** kırmızı, menu alanındaki **h3** kavuniçi olacaktır. Böylelikle
bir çok kod ve sınıf tanımından kurutulmuş olduk.

Bu kodlama metodu sadece kod azaltmaya değil ayrıca kodlarımızı daha
okunaklı ve organize kullanmamızı sağlamaktadır. CSS tabanlı hazırlanmış
büyük çaplı sitelerde bu metod bize çok büyük kazanımlar sağlayacaktır.

Fazladan sınıf kullanmak yerine Torun Seçicileri kullanarak kod azaltma
yöntemi bize çok büyük avantajlar sağlayacaktır.

Örneğin SolKisim'daki linklerin rengini kırmızı yapmakl istesek.

```html
<div id="solkolon">
	<h3>Site Hakkında </h3>
	<p>Bu site benim hakkımdadır.</p>
	<h3>Fotoğraflarım</h3>
	<ul>
		<li><a href="eskifoto.html" class="kirmizilink" >Eski</a></li>
		<li><a href="yenifoto.html" class="kirmizilink" >Yeni</a></li>
	</ul>
</div>
```


ve bu sınıf için css tanımı yapacak olursak.

```css
a:link.kirmizilink {
	color: red;
}
```

Bu kodumuz sorunsuz çalışacaktır. Ancak bu kodlama metodunda ileriye
dönük bir sorunuzmu olacaktır. Bu linklerin rengini değiştirip siyah
yapmak istedik. Rengi kolayca siyaha çevirebiliriz ancak verdiğimiz isim
ile içerik çakışacaktır. Siyah renge kirmizi isim!

Bunun yerine doğal seçicileri kullanrak bu işlemi yapsa idik durum
farklı olacaktır.

```css
#SolKisim li a:link {
	color: red;
}
```

Bu tanımla bizim işimizi görecektir. Ayrıca bir değişiklik olduğunda
sadece tanımı değiştirmemiz bize yetecektir. Bu metod bize kolay, temiz
ve kullanışlı bir kodlama olanağı sağlamkatadır. Bunu uygulamarımızda
kullandıkça daha iyi kavrayacağız.

## 2- Gereksiz <div\> Kullanımından vazgeçilmesi

Sayfa kodlarken içeriklerimizi düzenlemek için bir çok <div> elementi
kullanırız.

```html
<div id="menu">
	<ul>
	<li><a href="foto.html">Fotoğraflar</a></li>
	<li><a href="ders.html">Dersler</a></li>
<li><a href="bize_ulasin.html">Bize Ulaşın </a></li>
	</ul>
</div>
```

Yukarıdaki kodlmada da görüldüğü gibi bir liste ve bunu çevreleyen bir
menu id'si verilmiş bir katman kullandık. Bu kullanımı tüm sitemizde
kullandığımız düşünürsek bir çok kavrayıcı fazla katmanımız olacaktır.
Eğer bu kod daki gibi katman bir blok level bir elementi kapsıyorsa
katman kullanımına gerek yoktur. Bu katmanı kaldıra biliriz.

```html
<ul id="menu">
	<li><a href="foto.html">Fotoğraflar</a></li>
	<li><a href="ders.html">Dersler</a></li>
	<li><a href="bize_ulasin.html">Bize Ulaşın </a></li>
</ul>
```


Yukardaki gibi bir kodlama ile kavrayıcı katman kullanımı ile aynı
işlemleri yapabiliriz buradaki **ul** elementi bir blok-level elementi
olduğu için kavrayıcı katmana uyguladığımız bir çok özelliği(padding,
margin, vd.) bu elemente de uygulayabilriz. Bu sayede bir çok kavrayıcı
katmandan kurtuluruz.

Burada şuna dikkat edilmelidir ki eğer bu kavrayıcı katman yerine
kullanılan elementin içinde başka bir element yok ise bu yöntem
uygulanır. İçinde <p\>, <blockquote\> veya <form\> gibi elementler
varsa bunları tanımlama yaptığımız kavrayıcı **ul** dışına çıkarmalıyız.

## 3- CSS'in kalıtsallık özelliğinden yararlanmak

CSS elementleri kalıtsal olan ve kalıtsal olmayan elementler diye
ayırır. Biz kalıtsal elemnleri kullanarak bir çok fazla koddan
kurtulabiliriz.

```css
p { font-family:Verdana, Arial, sans-serif }
td { font-family:Verdana, Arial, sans-serif }
li { font-family:Verdana, Arial, sans-serif }
dt { font-family:Verdana, Arial, sans-serif }
dd { font-family:Verdana, Arial, sans-serif }
```

Yukarıdaki şekilde bir çok element içinde font tanımı yapmak yerine
**body** elementi içinde bir tek font tanımı ile bu kargaşaya son
verebilriz. Bu site standartlarına uymayı kolaylaştıracak ve düzenleme
kolaylığını sağlayacaktır.

```css
body { font-family:Verdana, Arial, sans-serif }
```

## 4- Uygun Benzer Stilleri Gruplamak

Bir çok özelliği aynı olan stil tanımlarında farklılıklar ayrılarak aynı
bölümler gruplanarak kod azaltılabilir.

```css
h1 { font-size:120%; margin-bottom:0; font-family:Verdana,sans-serif }
h2 { font-size:110%; margin-bottom:0; font-family:Verdana,sans-serif }
h3 { font-size:100%; margin-bottom:0; font-family:Verdana,sans-serif }
h4 { font-size:100%; margin-bottom:0; font-family:Verdana,sans-serif }
```

Bu kullanım yerine

```css
h1,h2,h3,h4 { margin-bottom:0; font-family:Verdana,sans-serif }
h1 { font-size:120% }
h2 { font-size:110% }
h3,h4 { font-size:100% }
```

## 5- CSS Kısaltmalarını kullanmak

CSS bazı elementlerin tanımlasını yaparken kısaltmaları kullanmamıza
izin verir, yani aynı etkiyi daha az kodla yapmamıza olanak sağlar.
Ayrıntı için [CSS'de Kısaltmalar kısmına bir göz atın.][]

## 6- CSS kodunu katagorilere ayırmak

[CSS'i Web Sayfalarına Eklemek][] makalesinin 4. kısmında da
bahsettiğimiz gibi, içeriği büyük olan sitelerde css kodunun parçalara
ayrılması ve kullanılan sayfa CSS'inde hangi parçalar gerekli ise
onların import edilmesi önerilir. Bu sayade kodun bir kısmında
yaptığımız değişiklik için tüm css kodu incelenip değiştirilmesi
gerekmez ve kod yönetimi kolaylaşır.

  [CSS'de Kısaltmalar kısmına bir göz atın.]: http://fatihhayrioglu.com/?p=6
  [CSS'i Web Sayfalarına Eklemek]: http://fatihhayrioglu.com/?p=91
