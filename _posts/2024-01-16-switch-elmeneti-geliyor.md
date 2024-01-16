---
layout: post
title: Swicth elementi geliyor
description: Swicth elementi geliyor
lang: tr_TR
Date: 2024-01-16 10:30
Category: HTML
tags: [swicth]
image:
  feature: swicth.png
---

Safari yeni sürümlerinde switch elementini destekleyeceğini açıklayınca nasıl birşey diye bakayım dedim. Son zamanlarda UI elementlerinin HTML'e kazandırılması kervanına Webkit'in de  katılması açısında önemli bir durum. 

İlk denemem 

```html
<input type="checkbox" switch>
```

Sonuç mükemmel. Bu gelişmeleri görünce "Senelerdir niye uğraştırdınız be insafsızlar diye" içimden geçirmiyor değilim :)

Şimdilik sadece `accent-color` ile aktif durumun arka plan rengini değiştirebiliyoruz.

```css
input {
  accent-color: var(--primary-color);
}
```

![Switch](https://fatihhayrioglu.com/images/swicth-1.webp)

Şu an Safari'nin gelecek sürümlerinde desteklenecek bu özelliği umarım yakında diğer tarayıcılarda destekler.

Safari henüz `::track` ve `::thumb` sözde elementlerinin desteği henüz yok açmak için Develop > Feature Flags - **`::thumb`  and  `::track`  pseudo-elements** açmak gerekiyor. Muhtemelen daha sonraki sürümlerde gelecektir.

```css
input::thumb {
    background-color: var(--primary-color);
    width: 36px;
    height: 36px;
    margin: 4px 8px;
    transition: all 0.3s;
    border-radius: 50%;
}

input:checked::thumb {
  translate: 40px 0;
  background-color: white;  
}
```

![Swicth](https://fatihhayrioglu.com/images/swicth-2.gif)

Geçenlerde `accent-color`örneğinde kullandığım gece/gündüz swicth'ini biraz daha değiştirip `:before` ve `:after` olmadan çözümü:

```css
input:checked::track {
  background-color: #000839;
  border-radius: 20px;
}

input:checked::thumb {
  translate: 40px 0;
  background-color: #000839;
  transform: rotate(110deg);
  box-shadow: inset 0px 8px white;
}
```

![Swicth](https://fatihhayrioglu.com/images/swicth-3.gif)

Farklı örnek çalışmaları incelemek için [buradaki](https://nt1m.github.io/html-switch-demos/)  örneklere bakmanızı öneririm. (not: Tarayıcının zoom değerini arttırınca örneklerin görünümü daha hoş oluyor)

Biliyorum daha çok erken ama araştırmışken paylaşmak istedim. :)

Kalın sağlıcakla.

## Kaynaklar

 - [https://x.com/stefanjudis/status/1746236013607833657?s=20](https://x.com/stefanjudis/status/1746236013607833657?s=20)
 - [https://github.com/whatwg/html/issues/4180](https://github.com/whatwg/html/issues/4180)
 - [https://x.com/yisibl/status/1737739579418141116?s=20](https://x.com/yisibl/status/1737739579418141116?s=20)
 - [https://x.com/wesbos/status/1737916464571560445?s=20](https://x.com/wesbos/status/1737916464571560445?s=20)
 - [https://codepen.io/fatihhayri/pen/BabpzWr](https://codepen.io/fatihhayri/pen/BabpzWr)
 - [https://codepen.io/fatihhayri/pen/KKEagvV](https://codepen.io/fatihhayri/pen/KKEagvV)
 - [https://codepen.io/fatihhayri/pen/gOEgwzJ](https://codepen.io/fatihhayri/pen/gOEgwzJ)