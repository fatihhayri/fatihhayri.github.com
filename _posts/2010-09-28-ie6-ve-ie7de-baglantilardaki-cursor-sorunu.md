---
layout: post
title: IE6 ve IE7&#039;de bağlantılardaki cursor sorunu
Date: 2010-09-28 22:24
categories: [CSS]
tags: [cursor sorunu, esnek yapılı butonlar, ie6, ie7, sliding door, sorun]
---

Aslında başlığı nasıl atacağımı şaşırdığım için kısa bir başlık attım.

## Sorun

Sorunumuz tam olarak anlamak için daha önce anlattığım [CSS ile buton yapmak][] adlı makaledeki görselliği arttırılmış esnek butonu örneğini
incelememiz yeterli.

Genelde esnek yapılı bu tip resimli menüler veya butonları oluştururken
bir elemana iki background-image atayamadığımız için iç içe iki eleman
koyarız. (Sliding Door) esnek yapılar olarak adlandırılan yöntem
kullandığımızda başımıza geliyor.

```css
a {
    display:block;
    float:left;
    width:auto; background:url(cancanli_butonlar_ard.gif) 0 0 no-repeat;
    text-decoration:none;
    font-size:14px;
    font-weight:bold
}

a span {
    display:block;
    float:left; background:url(cancanli_butonlar_ard.gif) right -36px no-repeat;
    height:28px;
    width:150px;
    padding:0 20px;
    line-height:28px;
    color:#363636
}
```

HTML kodu

```html
<a href="#">
	<span>Örnek Buton Metni</span>
</a>
```

Örneği görmek için [tıklayınız.][]

Diğer tarayıcılarda sorun olmazken ie6 ve ie7’de el işareti yerine
normal fare imleci görünüyor.

Aşağıda ie7 ve Firefox görüntüleri yanyana görünmektedir.

![][100]

IE7 de buton üzerinde normal imleç görünürken Firefox ve diğer
tarayıcılarda normal olarak el işareti görüntülenecektir.

## Çözüm

Çözümü çok basit tabi

```css
a span {
    display:block;
    float:left; background:url(cancanli_butonlar_ard.gif) right -36px no-repeat;
    height:28px;
    width:150px;
    padding:0 20px;
    line-height:28px;
    color:#363636;
    cursor:pointer
}
```

cursor:pointer özelliğini eklemek yeterli oluyor.

Bu sorunu niye yazdım? Benim gibi kod yazarken unutuyorsanız
hatırlayalım diye. İşin ilginç yanı internette ufak bir araştırma yaptım
ama hiç bu sorun ile karşılaşanı görmedim, belki ben tam anahtar
kelimeleri bulamadım

  [CSS ile buton yapmak]: http://fatihhayrioglu.com/css-ile-buton-yapmak/
  [tıklayınız.]: /dokumanlar/cursor_sorunu.html
  [100]: https://lh4.googleusercontent.com/fZqsPR_QQBH2juKgQhlheWgW3gH-8SJ2ER8u3j24jSyHU2r18ruXvOLQvIhq2qCqrgldgvbGjltA30kVNxOc4H3OKOQZ5yM0MuHTGK-vSPBExD6ZSQ
