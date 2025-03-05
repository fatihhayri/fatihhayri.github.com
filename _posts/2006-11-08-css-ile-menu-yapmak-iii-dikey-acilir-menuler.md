---
layout: post
title: CSS ile Menü Yapmak III - Dikey Açılır Menüler
Date: 2006-11-08 07:04
Category: CSS, Web Standartları, XHTML
tags: [açılır-menü, CSS, dikey açılır menü, drop-down-menu, liste, menü, pop-out-menu, Web Standartları, XHTML]
---

Bu tip menüleri javascript ile yapabiliriz. HTML ve CSS ile de daha
esnek, kolay düzenlenebilir ve bir çok web tarayıcısı tarafında
desteklenen(IE6 ve öncesi dahil) açılır menü yapılabilir. Aslında
javascript'e ihtiyaç olmamasına karşın IE7'den önceki sürümler için
javascript kodu gerekmektedir.

Açılır menü yapmak için daha önceki menü örneklerinde olduğu gibi
sıralanmamış listeleri(<ul\>) kullanacağız. Buradaki fark alt
kategorilerin yani üzerine gelince açılacak menünün bir alt sırlanmış
liste olarak eklenmesidir.

```html
<ul id="menu" >
	<li><a href="#">Anasayfa</a></li>
	<li><a href="#">Haberler</a>
	<ul>
		<li><a href="#">şirket Haberleri </a></li>
		<li><a href="#">Yurt içi Haberleri </a></li>
		<li><a href="#">Yurt dışı Haberleri</a></li>
	</ul>
	</li>
	<li><a href="#">Ürünler</a>
	<ul>
		<li><a href="#">Tencere</a></li>
		<li><a href="#">Tava</a></li>
		<li><a href="#">Ütü</a></li>
		<li><a href="#">Tost Makinesi </a></li>
		<li><a href="#">El Süpürgesi </a></li>
	</ul>
	</li>
</ul>
```

![][100]

İlk olarak satır başı boşluklarını ve imgeleri kaldıralım.

```css
ul {
	margin: 0;
	padding: 0;
	list-style: none;
	width: 150px;
}
```

![][1]

Sonra ilk linkleri göreceli olarak konumlandırmalıyız. Bu konumlandırma
aslında ikinci kademe açılacak menüye mutlak konumlandırma yapılması
için kullanılır.

```css
ul li {
	position: relative;
}
```

Bir sonraki adımda da ikincil açılan menüleri konumlandırmak olacaktır.
Her birinci linke karşılık gelen ikincil açılır menüler ilkinin sağına
konumlandırılmalıdır. Bunun için soldan 149px değeri verilir. 1 piksel
sola kaydırılır ki fare ilk linki üzerinde ikinci linkin üzerine
glemeden kaybolmasın. Ayrıca ikincil linklerin ilk sayfa açıldığında
görünmemesi için display:none özelliği atanır.

```css
li ul {
	position: absolute;
	left: 149px;
	top: 0;
	display: none;
}
```

![][2]

Açılır menü yapısını oluşturmuş olduk şimdi linkleri güzelleştirip menü
haline getirmek için önceki menüleri yaparken uyguladığımız [kodları uygulayalım.][] Linklerin kendine has alanlarını tanımlamak için
**display:block** özeliğini kullanalım. Linklerin altındaki çizgiyi
kaldırmak için **text-decoration:none** özelliğini kullanalım. Linkler
arasına mesafe vermek için **padding** verelim. Birde bir zemin rengi
tanımı ver kenarlık tanımı yapalım. Üstteki linkin alt kenarlığı ile
alttaki linkin üst kenarlığı üst üste bineceğinde alt kenarlık değerini
sıfırlayalım.

```css
ul li a {
	display: block;
	text-decoration: none;
	background-color: #E2E2E2;
	padding: 5px;
	border:1px solid #000;
	border-bottom:0;
}
```

Bu kodu yazdığımızda IE linkler arasına boşluk koyacaktır(IE7 de hala bu
sorun devam ediyor) bu durumu düzeltmek için:

```css
/* IE. gizle \*/
* html ul li { float: left; height: 1%; }
* html ul li a { height: 1%; }
/* IE den gizleme sonu */
```

![][3]

En alttaki çizgimiz eksik kalmaması için ilk link ul'sinin alt kenarlık
tanım yaparız.

```css
ul {
	margin: 0;
	padding: 0;
	list-style: none;
	width: 150px;
	border-bottom: 1px solid #00;
}
```

![][4]

Birincil menü görünümü tamamlandı ancak ikincil menüler görünmüyor.
İkincil menüleri göstermek için:

```css
li:hover ul {
	display: block;
}
```


Bu kadar basit bir kod menümüzü tamamlar. Ancak bir sorun var ki o da
IE7'den öncesi bu kodu desteklemez.

Internet Explorer 7. versiyonuna kadar :hover pseudo sınıfını sadece
linklerde (<a\>) uygulanmasını destekler diğer elementlerde bu
özelliğin kullanımını desteklemez.

Peki menümüz böyle mi kalacak hayır. IE6 ve altı için bir javascript
kodu yazacağız.

```javascript
startList = function() {
	if (document.all&&document.getElementById) {
		navRoot = document.getElementById("menu");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
			node.onmouseover=function() {
			this.className+=" over";
			}
				node.onmouseout=function() {
				this.className=this.className.replace(" over", "");
			}
			}
		}
	}
}
window.onload=startList;
```

Bu çözümü bize kazandıran arkadaşlara teşekkürü bir borç biliriz ve
[linkini][] de yazarız.

Ayrıca aşağıdaki kodu da eklemeliyiz.

```css
li:hover ul, li.over ul{ display: block; }
```

Ayrıca kod daki<ul id="**menu**" \> ve javascriptteki navRoot = document.getElementById("**menu**"); aynı olmasına dikkat edelim.

<iframe height="300" style="width: 100%;" scrolling="no" title="menü örneği - 2" src="https://codepen.io/fatihhayri/embed/zxYwoZJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/zxYwoZJ">
  menü örneği - 2</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Bazı arkadaşlardan bu menünün sağda olması halin nasıl yaparız diye bir
istek geldi bende bunun için bir kod eklemek istiyorum.
Bu ekleme 28 Mayıs 2009 da yapılmıştır.

Soldaki örneğe göre iki değişikliğimiz oldu. Birincisi menüyü sağa almak
için ul ye float:right ataması yaptık. İkincisi, ikinici açılan menüyü
soldan 149 px yerine eksi 149px ile sola almak oldu

<iframe height="300" style="width: 100%;" scrolling="no" title="menü örneği - 3" src="https://codepen.io/fatihhayri/embed/wBvdodo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/wBvdodo">
  menü örneği - 3</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Kaynaklar

-   [http://www.alistapart.com/articles/horizdropdowns][]
-   http://www.tanfa.co.uk/css/examples/menu/tutorial-h.asp
-   http://www.seoconsultants.com/css/menus/tutorial
-   [http://www.cssplay.co.uk/menus/flyout2.html][]

  [100]: /images/menu3_resim1.gif
  [1]: /images/menu3_resim2.gif
  [2]: /images/menu3_resim3.gif
  [kodları uygulayalım.]: http://fatihhayrioglu.com/?p=209
  [3]: /images/menu3_resim4.gif
  [4]: /images/menu3_resim5.gif
  [linkini]: http://www.alistapart.com:80/articles/dropdowns/
  [http://www.alistapart.com/articles/horizdropdowns]: http://www.alistapart.com/articles/horizdropdowns
  [http://www.cssplay.co.uk/menus/flyout2.html]: http://www.cssplay.co.uk/menus/flyout2.html
