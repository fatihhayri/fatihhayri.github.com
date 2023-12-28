---
layout: post
title: CSS ile hareketli renk geçişli arka planı yapmak
description: CSS ile hareketli renk geçişli arka planı yapmak
lang: tr_TR
Date: 2023-12-28 11:00
Category: CSS
tags: [background, background-position, background-size]
image:
  feature: hareketli-arka-planlar.png
---

Web'de gördüğüm CSS ile yapılmış bazı uygulamarı burada paylaşmak istiyorum. Bunlardan birisi de renk geçişi ile yapılmış hareketli arka plan resimleri. Kodu çok basit ama etkisi çok iyi. Bundan 10 sene önce bu işi yapsak muhtemlen tarayıcılar çok zorlanacağı işleri artık CSS ile çok basit bir şekilde yapabilmek güzel. 

Konuyu daha da uzatmadan koda gelelim. [CSS ile renk geçişi](https://fatihhayrioglu.com/css-renk-gecisleri-gradients/) yapmak çok basit. En basit hali 

```css
linear-gradient(top,#fff,#f8b500);
```

İki renk arasında başlangıç noktasını verdiğimiz bir tanım. Kodu daha da geliştirip açılı ve çok renkli renk geçişleri de yapabiliyoruz. 

```css
linear-gradient(-45deg, oklab(0.3 -0.03 -0.04) 0%, oklab(0.54 -0.08 0) 13%, oklab(0.82 -0.13 0.08) 25%, oklab(0.11 -0.13 0) 38%, oklab(0.3 -0.03 -0.04) 50%, oklab(0.54 -0.08 0) 62%, oklab(0.82 -0.13 0.08) 75%, oklab(0.11 -0.13 0) 87%, oklab(0.3 -0.03 -0.04) 100%);
```

Güzel bir arkaplan geçişi elde ettik. Peki bunu nasıl hareketlendireceğiz?

4 renk seçtiğimiz için arka plan alanını genişletmemiz lazım. `background-size: 400% 400%;` ile genişlettik. Sıra geldi bu arka plana hareket kazandırmaya. Hareket kazandırmak içinde arka plan konumunu değiştirmemiz yeterli olacak.

```css
@keyframes arkaPlanaHareketKat{
  0%{
    background-position: 0 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
```
Sonuç aşağıdaki gibi olacaktır. 

<iframe height="350.08203125" style="width: 100%;" scrolling="no" title="Animated Background" src="https://codepen.io/fatihhayri/embed/NWJPpeK?default-tab=css%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

Farklı alanlarda bu tekniği uygulayabiliriz. Bu örnekte olduğu gibi sayfanın tümünün arka planında kullandığımız gibi bir butonun arka planında da kullanabiliriz. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://codepen.io/ahmedriad1/pen/BaamKgv](https://codepen.io/ahmedriad1/pen/BaamKgv)
  - [https://weekendprojects.dev/posts/creating-a-gradient-animation-with-css/](https://weekendprojects.dev/posts/creating-a-gradient-animation-with-css/)
  - [https://youtu.be/u2j9Ke6CCcg?si=6hGBjnTUU15rES35](https://youtu.be/u2j9Ke6CCcg?si=6hGBjnTUU15rES35)
  - [https://codepen.io/kentaro_au/pen/KKZxeVE?editors=1100](https://codepen.io/kentaro_au/pen/KKZxeVE?editors=1100)
  - [https://codepen.io/TWilson/pen/jOdWqbZ](https://codepen.io/TWilson/pen/jOdWqbZ)
  - [https://codepen.io/uixmat/pen/XWovXvg](https://codepen.io/uixmat/pen/XWovXvg) (güzel bg)
  - [https://codepen.io/chaseottofy/pen/BaGqJKK](https://codepen.io/chaseottofy/pen/BaGqJKK) (gradient üretme aracı)
  - [https://codepen.io/13twelve/pen/OJwgxOo?editors=1100](https://codepen.io/13twelve/pen/OJwgxOo?editors=1100)