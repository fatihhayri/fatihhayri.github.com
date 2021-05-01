---
layout: post
title: Flex ile yatayda ve dikeyde ortalı alanlar oluşturmak
Date: 2016-08-29 14:50
categories: [CSS]
tags: [flexbox, ortalama]
---

Yaklaşık 6 sene önce bu başlığa yakın bir başlık ile bir makale yazmışım. [Yatay ve Dikeyde Ortalı Alanlar Oluşturmak](https://fatihhayrioglu.com/yatay-ve-dikeyde-ortali-alanlar-olusturmak/) yeni gelen özellikler ile bu kodu daha basit nasıl yapabilirim diye bakınırken [flexbox](https://fatihhayrioglu.com/yenilenmis-flex-modulu/) özelliği aklıma geldi. 

Peki flexbox ile bu işi nasıl yaparım.

HTML kodu aynı olsun;

```html
<div class="orta-alan">
  <p>Fatih Hayrioğlu'nun not defteri</p>
</div>
```

Bazı ufak değişiklikler var. Eskiden **id** ve **camelCase** iken şimdi **class** ve **kebap-case**'e geçtim.

CSS kodunun başında değişen bir şey yok.

```css
html, body {
  height: 100%;
}

body{
  margin:0;
  padding:0;
  background-color:#D2D2D2;
  font:24px "Trebuchet MS", Arial, Helvetica, sans-serif;
  color:#333333;
}
```

Değişen kısım.

```css
.orta-alan {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**align-items: center;** dikeyde ortalamak için, **justify-content: center;** yatayda ortalamak için yeterli. Tabi bu elemanın flex olduğunu göstermek için **display: flex;** tanımını başta yapmalıyız.

Genişlik ve yükseklik burada tam sayfa kullandığımız için 100% verildi. Tabi siz istediğiniz genişlik ve yükseklik tanımını yaparak çalışabilirsiniz. 

<iframe height='265' scrolling='no' src='//codepen.io/fatihhayri/embed/KrOJgO/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Kalın sağlıcakla.