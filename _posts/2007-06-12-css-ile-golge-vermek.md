---
layout: post
title: CSS ile gölge vermek
Date: 2007-06-12 23:09
categories: [CSS]
tags: [CSS, gölge, resimlere_gölge, HTML]
---

Bu makalede geçen yöntemlere artık gerek kalmamıştır. CSS3 ile gelen [box-shadow](/kutulara-golge-vermek-box-shadow/) özelliği bu işi kökünden hallediyor. **(19.01.2016 güncellendi)**

Resimlere gölge vermek bir çok tasarımcının kullandığı derinlik hissi
veren güzel bir efekttir. Bir çok insan bu efekti vermek için resim
düzenleme programlarını kullanmaktadır. Resimlere CSS ile de gölge
verebiliriz. Bu makalede CSS ile nesnelere(resim ve kutulara) gölge
verme yöntemlerini göreceğiz.

CSS ile gölge vermenin avantajı; resimlerimize herhangi bir ekstra
program kullanmadan gölge verebilmemizdir. Böylece sayfamıza her
eklediğimiz resim için resim düzenleme programını açıp gölge eklemek
zorunda kalmayacağız.

## CSS ile Basit Şekilde Gölge Vermek

En basit css ile gölge verme yöntemi *Dunstan Orchard*'in yaptığı
yöntemdir. Bu yöntemde; resmi kapsayan katmana geniş gölge resmi; zemin
resmi olarak tanımlanarak uygulanır. Eksi margin değeri ile gölge resmi
ortaya çıkarılır.

Bu yöntemi uygulamak için ilk olarak 800x800 piksel genişliğinde bir
gölge resmi oluşturmalıyız. Bu resmi zemin resmi olarak kapsayıcı
katmana atayalım. Sonra resmi yukarı ve sola doğru 5 piksel mesafe
verelim.

![][100]

Xhtml kodu:

```html
<div class="resimKutusu">
	<img src="resim.jpg" width="300" height="300" alt="Vizara Köyü – Sürmene " />
</div>
```

Yukarıdaki kodda görüldüğü gibi bir resim ve onu kapsayan bir katmanımız
var. Kapsayıcı katmana(.resimKutu) gölge zemin resmini atayacağız.
Burada şöyle bir sorunumuz olacaktır ki katman bir [blok-level][] bir
element olduğu için gölge zemin resmi tüm blok boyunca uygulanacaktır.
Bu durumu engellemek için sabit bir genişlik tanımlamamız gerekir, ancak
bu yöntemin kullanılabilirliğini azaltacaktır. Daha kullanılabilir
kodlama için float ataması yapacağız bu Mac IE 5x versiyonlarda sorun
çıkarır bunu engellemek için bu kodu Mac IE5x den gizleyeceğiz. CSS
kodu:

```css
.resimKutusu {
	background: url(images/golge.gif) no-repeat bottom right;
	clear: right;
	float: left;
}
```

Gölge zemin resmini ortaya çıkarmak için margin tanımlarını yapmalıyız.

```css
.resimKutusu img {
	margin: -5px 5px 5px -5px;
}
```

Efekti daha belirgin ve güzel hale getirmek için padding ve kenarlık
ataması yaparsak.

```css
.resimKutusu img {
	background-color: #fff;
	border: 1px solid #a9a9a9;
	padding: 4px;
	margin: -5px 5px 5px -5px;
}
```

Yukarıdaki kodun IE6 da çalışması için bir iki ekleme yapmalıyız.

```css
.resimKutusu {
	background: url(images/shadow.gif) no-repeat bottom right;
	clear: right;
	float: left;
	position: relative;
}
.resimKutusu img {
	background-color: #fff;
	border: 1px solid #a9a9a9;
	padding: 4px;
	display: block;
	margin: -5px 5px 5px -5px;
	position: relative;
}
```

Kodlama IE5x versiyonlarda biraz sorunlu görünse de genelde
uygulanabilir bir metottur. Bu metot uygulanabilirliğinin kolay olması
sebebiyle tercih edilebilir.

Örnek çalışmayı görmek için [tıklayınız.][]

## Clagnut metodu ile gölge vermek

[www.clagnut.com][]'da yayınlandığı için bu isim verilmiştir. Bu metot
bir önceki ile benzerlik taşır. Bu metottaki fark negatif margin vermek
yerine göreceli(realtive) konumlandırma kullanmaktır.

```css
.resimKapsulu {
	background: url(images/golge.gif) no-repeat bottom right;
	float:left;
	line-height:0;
}
.resimKapsulu img {
	background:#fff;
	padding:4px;
	border:1px solid #a9a9a9;
	position:relative;
	left:-5px;
	top:-5px;
}
```

IE5x de padding sorunu olsa da tüm web tarayıcılarında gayet güzel
sonuçlar verir.

Örnek çalışmayı görmek için [tıklayınız.](https://fatihhayrioglu.com/dokumanlar/clagnut_golge.html)

## Fuzzy metodu ile gölge vermek

![Fuzzy][]

Bundan önceki gölgeleme metotları basit metotlardı. Şimdi anlatacağımız
metot ise gerçeğe daha yakın gölge elde etmek için kullanılır.

Bu metod PNG ile oluşturulan saydam kenarlı bir gölge resmi ile
yapılmaktadır. Ancak kodlamada şöyle bir sorun varki IE7'den önce saydam
PNG'leri yorumlamıyor. Bunun içinde bu yöntemde IE'nin PNG desteklemeyen
versiyonları için saydam gif resmi oluşturulacaktır.(Ayrıca png fix
koduda uygulanacaktır)

Aşağıdaki gibi bir maske PNG dosyası oluşturalım. IE'nin eski
versiyonları için .gif oluşturalım.

![Maske PNG örneği][]

```html
<div class="resimKapsulu">
	<div>
		<img src="images/koy_01.jpg" width="250" height="165" alt="Vizara Köyü – Sürmene" />
	</div>
</div>
```

Bu metodu uygulamak için
`resimKapsulu` katmanına alt sağa
dayalı bir gölge zemin resmi ekleyelim.

```css
.resimKapsulu {
	background: url(images/golge2.gif) no-repeat right bottom;
	float: left;
}
```

Bu kapsayıcı katmanın içindeki katmanın üst sağına üstte oluşturduğumuz
maske resmini ekleyelim. Bu resim gölge resminin üzerine binecektir ve
ortaya çok güzel bir gölge efekti çıkacaktır. İçteki katmana gölgenin
ortaya çıkması için padding uygulayalım. Ayrıca gerçek gölge efektini
yakalamak için png zemin resmini ekleyelim.

```css
.resimKapsulu div {
	background: url(images/mask.png) no-repeat left top !important;
	background: url(images/mask.gif) no-repeat left top;
	padding: 0 5px 5px 0;
}
```

Bu kodu eski versiyon IE versiyonlarına uygun kod yazarsak:

```css
.resimKapsulu div {
	background: url(images/mask.png) no-repeat left top !important;
	background: url(images/mask.gif) no-repeat left top;
	padding: 0 5px 5px 0;
	float: left; /* IE5.2/Mac duzeltmek icin yazildi */
}
```

son olarakta efekti vurgulamak için kenarlık tanımı yapalım.

```css
.resimKapsulu img {
	background-color: #fff;
	border: 1px solid #a9a9a9;
	padding: 4px;
}
```

gif ve png ikileminden hoşlanmayanlar için bir yöntem daha var. IE5.5
den sonraki versiyonların desteklediği

```css
filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/mask.png',sizingMethod='crop');
```

Bu kodu ie versiyonları için eklemeliyiz, diğer web tarayıcılarında
gizlemeliyiz.

```css
.resimKapsulu div {
	filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='img/shadow2.png',sizingMethod='crop');
	background: none;
}
```

diğer web tarayıcılarında gizlemek için

```html
<!–[if gte ie 5.5000]>
	<link rel="stylesheet" type="text/css" href="ie55.css"/>
<![endif]–>
```

Böylece tüm yeni nesil web tarayıcılarında bu metodu sağlıklı bir
şekilde kullanmış olduk.

Bu metodu tüm png zemin resmi uygularınızda uygulayabilirsiniz.

Örnek çalışmayı görmek için [tıklayınız.](https://fatihhayrioglu.com/dokumanlar/fuzzy_golge.html)

## Onion Skin metodu ile Gölge eklemek

Son gölge verme metodu yuvarlak kenarlı kutuları oluşturduğumuz metoda
benzer bir metottur. Bu metotta içiçe girmiş üç katman kullanırız soğan
gibi ondan zaten(onion skin) diyorlar. En alttaki katmana gölge zemin
resmi, bir üstteki katmanın sol alt kısmına gölge kenarı, en üstteki
katmanın sağ üst kısmına gölge kenarı vererek yapılır.

![Onion Skinned][]

Temel html kodu:

```html
<div class="nesneKapsayici1">
	<div class="nesneKapsayici2">
		<div class="nesneKapsayici3">
		<img src="images/dunya.jpg" width="300" height="300" alt="Dünya" />
		</div>
	</div>
</div>
```

İlk önce en dıştaki katmana gölge zemin resmini atayalım:

```css
.nesneKapsayici1 {
	background:url(images/golge.gif) no-repeat right bottom;
	float: left;
}
```

Sonra oluşturduğumuz iki adet gölge resminin bir tanesini üst sağ
tarafa, diğerini alt sol tarafa zemin resmi olarak veriyoruz. Ayrıca tam
resme göre gölge vermek için aşağıdaki gibi kodlama yapmalıyız:

```css
.nesneKapsayici2 {
	background:url(images/altsol.gif) no-repeat left bottom;
	float: left; /* IE5.2/Mac duzeltmek icin yazildi */
}
.nesneKapsayici3 {
	background:url(images/ustsag.gif) no-repeat top right;
	padding: 0 5px 5px 0;
	float: left; /* IE5.2/Mac duzeltmek icin yazildi */
}
```

ve son olarak ta güzel bir efekt olması için kenarlık ve padding
tanımlarını yapıyoruz:

```css
.nesneKapsayici1 img {
	background-color: #fff;
	border: 1px solid #a9a9a9;
	padding: 4px;
	display: block;
}
```

Örnek çalışmayı görmek için [tıklayınız.](https://fatihhayrioglu.com/dokumanlar/onion_golge.html)

Bu metot kolay uygulanabilirlik bakımından avantajlıdır. Ancak fazladan
iki adet katman kullanılması bakımından pek anlamlı kod
yazımına(semantik) uygun değildir. Ama bir çok web tarayıcısında
sorunsuz çalışması bir artısıdır. Bu metot CSS3 ile birlikte daha basit
hala gelecektir. Çünkü CSS3 bize bir nesneye birden fazla zemin resmi
tanımlamamıza olanak sağlıyor. Ama bunu için beklemek zorundayız.

-   [http://alistapart.com/articles/onionskin/][]
-   [http://alistapart.com/articles/cssdrop2/][]
-   [http://www.clagnut.com][www.clagnut.com]
-   1976design.com/blog/archive/2003/11/14/shadows/
-   http://www.friendsofed.com/book.html?isbn=1590596145


  [100]: /dokumanlar/images/golge01.jpg
  [blok-level]: http://fatihhayrioglu.com/?p=151
  [tıklayınız.]: /dokumanlar/basit_golge.html
  [www.clagnut.com]: http://www.clagnut.com
  [Fuzzy]: /dokumanlar/images/fuzzy.gif
  [Maske PNG örneği]: /dokumanlar/images/maske_png.gif
  [Onion Skinned]: /dokumanlar/images/onion_skin.gif
  [http://alistapart.com/articles/onionskin/]: http://alistapart.com/articles/onionskin/
  [http://alistapart.com/articles/cssdrop2/]: http://alistapart.com/articles/cssdrop2/
