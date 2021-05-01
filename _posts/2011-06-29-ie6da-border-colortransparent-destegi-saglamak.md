---
layout: post
title: ie6&#039;da border-color:transparent desteği sağlamak
Date: 2011-06-29 23:22
categories: [CSS]
tags: [Border, kenar-çizgisi, saydam border, transparent]
---

Geçen araştırırken gördüm. border-color:transparent özelliğini İnternet
Explorer 7. sürümünden sonra desteklemeye başlamış, yani ie6’da
desteklemiyor. Internet Explorer 6’nın son günlerini yaşadığımız bu
günlerde küçük bir bilgilendirme olarak geçeceğim bu sorunun çözümünü.

```css
ul li a{
	border-right:1px solid #f00
}

ul li a:hover{
	border-right:1px solid transparent;
}
```

Ardalanında renk geçişi olan bir menüde menü elemanları arasında kenar
çizgisi olduğunu farz edelim. Menünün seçili veya üzerine geldiğinde ise
bu kenar çizgini kaldıralım. Kenar çizgisini sıfırlamak kaymaya neden
olur. Saydam kenar çizgisi vermek kolay ve güzel çözümlerden biridir.
Peki ie6 için ne yapacağız.

```css
*html ul li a:hover{
    border-color: pink;
    filter: chroma(color=pink);
}
```

*** html** sadece ie6’nın göreceği bir seçici, ilk olarka bir kenar
çizgisi tanımlıyoruz(pink - pembe) sonrada **chroma** filtresi ile pembe
alanları saydam yapıyoruz. Ufak bir düzenleme ile işimizi hallediyoruz.

Ufak bir bilgi ama bir kenarda yazılı olmasında yara var.

Kalın sağlıcakla

## Kaynaklar

-   acidmartin.wordpress.com/2008/08/24/emulating-border-color-transparent-in-internet-explorer-6/
-   http://snippets.dzone.com/posts/show/6089
-   [http://www.cssplay.co.uk/boxes/transparent_borders.html][]
-   [http://www.researchkitchen.de/blog/archives/css-bordercolor-transparent.php][]
-   [http://www.cssplay.co.uk/menu/fivestar][]

  [http://www.cssplay.co.uk/boxes/transparent_borders.html]: http://www.cssplay.co.uk/boxes/transparent_borders.html
  [http://www.researchkitchen.de/blog/archives/css-bordercolor-transparent.php]: http://www.researchkitchen.de/blog/archives/css-bordercolor-transparent.php
  [http://www.cssplay.co.uk/menu/fivestar]: http://www.cssplay.co.uk/menu/fivestar
