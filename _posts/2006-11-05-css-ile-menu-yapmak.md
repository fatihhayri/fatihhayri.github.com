---
layout: post
title: CSS ile Menü Yapmak
Date: 2006-11-05 20:50
categories: [CSS]
tags: [CSS, liste, menü, ul, HTML]
---

Web sitelerinin vazgeçilmez öğelerinde biridir menüler. Menüler
kullanıcının oluşturduğumuz sayfalara hızlı erişimini sağlar. Bir çok
site de Ürünler, İletişim, Hakkımızda vb. bölümlerini menü öğesi olarak
görürüz. Bu makalede sırasız listeler(<ul\>)ve CSS yardımı ile menü
yapımını anlatacağız. CSS ile yapılan menüler esnek, kolay
düzenlenebilir, güzel görünen ve rollover efekti uygulana bilen
menülerdir.

Sırasız listeler(<ul\>) ilk olarak listeleme işlemleri için kullanılsa
da CSS'in yükselişi ile birlikte menü oluşturmak için kullanılmaya
başlandı. Aslında menülerde bir bakıma link listeleri olduğu düşünülürse
işlevinin dışında kullanılmadığı da doğru bir tespittir. Kodumuzu
yazmaya başlayalım:

```html
<ul class="menu">
	<li><a href="index.html">Ana Sayfa </a></li>
	<li><a href="hakkimizda.html">Hakkımızda</a></li>
	<li><a href="urunler.html">Ürünler</a></li>
</ul>
```

Kodlama sonucu görüntü aşağıdaki gibi olacaktır.

![][100]

Her linkin başındaki imgeleri kaldırmak için:

```css
ul.menu {
	list-style-type: none;
}
```

![][1]

Bir çok web tarayıcısı sırasız listeleri(<ul\>) yorumlarken yukarıda
görüldüğü gibi otomatik olarak soldan bir padding/margin(bazı
tarayıcılarda padding uygularken bazılarında margin uygular) mesafesi
uygular bu mesafeyi sıfırlamak için:

```css
ul.menu {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
```

![][2]

Bu bölüme kadar yazılan kodlamalar hem dikey menüler hem de yatay
menüler içinde aynıdır. Ancak bundan sonra dikey menü ve yatay menü için
kodlar değişecektir.

## Dikey Menüler

Dikey menülerde linkler yukarıdan aşağı doğru sıralanmıştır. Link
elementi(a) inline-elementtir, her linke rollover özelliği kazandırmak
için:

```css
ul.menu a {
	display: block;
}
```

Biraz görselliği arttırırsak:

```css
ul.menu a {
	display: block;
	color: #1B1B1B;
	background-color: #E2E2E2;
}
```

![][3]

Linkler web tarayıcısının genişliği kadar uzayacaktır, kendi istediğimiz
genişliğe sahip olmak için:

```css
ul.menu a {
	display: block;
	color: #1B1B1B;
	background-color: #E2E2E2;
	width:8em;
}
```

![][4]

Linkler arasına biraz boşluk verelim:

```css
ul.menu a {
	display: block;
	color: #1B1B1B;
	background-color: #E2E2E2;
	width:8em;
	padding: .2em .8em;
}
```


![][5]

Linklerin altındaki çizgileri kaldıralım:

```css
ul.menu a {
	display: block;
	color: #1B1B1B;
	background-color: #E2E2E2;
	width:8em;
	padding: .2em .8em;
	text-decoration: none;
}
```

![][6]

şimdi linklerimize rollover efekti vermek için a:hover kullanacağız:

```css
ul.menu a:hover
{
	background-color: #999;
}
```

![][7]

son olarak linklerin arasını ayıralım:

```css
ul.menu li {
	margin: 0 0 .2em 0;
}
```

İşte menümüzün son hali

<iframe src="/dokumanlar/menu.htm" width="250" height="200" frameborder="0" scroll="auto"></iframe>

  [100]: /dokumanlar/menu1.gif
  [1]: /dokumanlar/menu2.gif
  [2]: /dokumanlar/menu3.gif
  [3]: /dokumanlar/menu4.gif
  [4]: /dokumanlar/menu5.gif
  [5]: /dokumanlar/menu6.gif
  [6]: /dokumanlar/menu7.gif
  [7]: /dokumanlar/menu8.gif
