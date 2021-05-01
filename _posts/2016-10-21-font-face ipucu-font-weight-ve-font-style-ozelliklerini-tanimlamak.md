---
layout: post
title: font-face ipucu, font-weight ve font-style özelliklerini tanımlamak
Date: 2016-10-21 14:10
categories: [CSS]
tags: [font-face, font-family, font-style, font-weight]
---

Artık her projemizde @font-face kullanıyoruz. Kullanırken bazı sorunlar yaşıyoruz ve bu sorunlara çözümler üretiyoruz. Bu makalenin konusu da bu sorunlardan birini çözüyor. 

Hemen meseleye girelim. Bir @font-face tanımı yapalım. Ben burada daha kısa olsun diye woff2 yapıyorum ama siz [Woff2 ve font-face tanımını iki satıra indirmek](https://fatihhayrioglu.com/woff2-ve-font-face-tanimini-iki-satira-indirmek/) yazımdaki ilk kodu kullanın.

```css
@font-face {
  font-family: 'Lato';
  src: url('lato.woff2') format('woff2');
}
```

Sonra bunu kullanalım. 

```css
body {
  font-family: Lato;
}
```

HTML kodu 

```html
<ul>
  <li><strong>İnebahtı Deniz Savaşı ve Donanmamızın Yakılması</strong> (<em>1571</em>)</li>
  <li>Rusya'da Komünist İhtilali (<em>1917</em>)</li>
  <li>Amerikan ve İngiliz Kuvvetlerinin Afganistan'a Girmesi (2001)</li>
</ul>
```

Metin ve stil olarak koda bakarsak, normal metin, kalın hali ve eğik hali kullanılmış. Fakat bir sorun var. Yazı tipinin kalın ve eğik halleri pek bizim istediğimiz gibi değil. Çünkü biz yazı tipinin normal halini yükledik, kalın ve eğik kullanımı tarayıcı uydurmaya çalıştı. Tarayıcının yapacağıda bu kadar. 

Bu sorunu görünce ilk olarak aklımıza "her bir yazı tipi hali için bir font-face tanımı yapalım ve onları tanımlayalım" düşüncesi gelir. 

```css
@font-face {
  font-family: 'Lato';
  src: url('lato.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoBold';
  src: url('lato-bold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoItalic';
  src: url('lato-italic.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
```

Sonra bu yazı tiplerini kullanırken, CSS'de

```css
body { 
  font-family: Lato, Georgia, serif; 
}

h1 {
  font-family: LatoBold, Georgia, serif;
  font-weight:normal;
}
em {
  font-family: LatoItalic, Georgia, serif;
  font-weight:normal;
  font-style:normal;
}
```

Her bir tanım için **font-family** tanımı yapıyoruz.  Peki bunun daha kolay çözümü var mı?

**Çözüm**: Çözüm için **@font-face** tanımındaki **font-weight** ve **font-style** özelliklerinden yaralanarak tek yazı tipine bu farklı stilleri bağlayabiliriz.

```css
@font-face {
  font-family: 'Lato';
  src: url('lato.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('lato-bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('lato-italic.woff2') format('woff2');
  font-weight: normal;
  font-style: italic;
}
```

yukarıdaki koda dikkat edersek, **font-family** tanımları aynı, **font-weight** ve **font-style** alanları farklıdır. CSS'de kullanırken;

```css
body { 
  font-family: Lato, Georgia, serif; 
}

h1 {
  font-weight: bold;
}
em {
  font-style: italic;
}
```

Sonuç olarak güzel bir çözüm ve daha basit bir yazım sağlıyor bize. 

Ben bu makaleyi yaklaşık 2 sene önce yazacaktım, ancak [Himmet Samet Çaktı](https://twitter.com/himmetsamet) abi ben blog açacam bunu ben yazayım dedi. Bizde gençtir gönlü kırılmasın diye tamam dedik. 2 sene geçti, Samet hala blog açacak :)

Kalın sağlıcakla.


## Kaynaklar

 - http://www.metaltoad.com/blog/how-use-font-face-avoid-faux-italic-and-bold-browser-styles
 - http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/
 - https://www.smashingmagazine.com/2013/02/setting-weights-and-styles-at-font-face-declaration/