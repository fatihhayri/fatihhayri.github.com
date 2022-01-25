---
layout: post
title: focus-visible
description: focus-visible tanımı ve detayı
lang: tr_TR
Date: 2022-01-25 14:44
Category: CSS
tags: [CSS, focus-visible]
---

Bu tanımın ortaya çıkışının sebebi: Geliştiriciler tarayıcıların otomatik tanımladığı focus tanımlarının yapılan tasarıma uymadığı veya tam olarak ne amaçla kullanıldığını bilmediği için silmesi ve bunun sonucu olarak erişilebilirlik sorunlarının çıkması.

```css
.link:focus {
	outline: none;
}
```

Kodunu yazarak tanımlı olan odaklanma halindeki outline çizgisini kaldırıyorduk. Tabi bu  erişilebilirlik için ciddi sorunlar oluşturuyor. Birçok site erişilebilirliği önemsemediği için yukarıdaki gibi kodlar yazarak işine devam ediyor. 

Standart geliştiriciler bu durumları engellemek için yeni bir tanım geliştirdiler. `focus-visible` özelliği. **`focus-visible` özelliğinin `focus`'tan farkı kullanıcının kullandığı araca göre etki ediyor olması.** Kullanıcı mouse ile geldi ise farklı klavyeden geldi ise farklı stil tanımlamamıza olanak sağlıyor.

Aşağıdaki login formu konuyu daha iyi anlamamıza yardımcı olacaktır.

<iframe height="400" style="width: 100%;" scrolling="no" title="focus-visible - 1" src="https://codepen.io/fatihhayri/embed/ZEXdMQz?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

İlk örnekte form içindeki tüm elemanlara `focus` tanımladık. Klavye ile de mouse ile de geldiğimizde aynı etkiyi yapıp outline çizgisini gösterdi.

<iframe height="400" style="width: 100%;" scrolling="no" title="focus-visible - 2" src="https://codepen.io/fatihhayri/embed/mdBZGML?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

İkinci örnekte ise `focus` ve `focus-visible` ayrı ayrı tanımladık. İlk örnekte tüm elemanlar her türlü outline gösterirken, ikinci örnekte sadece klavye ile odaklandığımızda outline gösterilmektedir.

```css
.login-form :focus:not(:focus-visible) {
  outline: none;
}

.login-form :focus-visible {
  outline: 3px solid orange;
}
```

**Burada şöyle bir kural var:**  Bir HTML elemanı klavye ile giriş alanı ise `focus-visible` tanımı olsa dahi outline çizgileri gösterilmeye devam ediyor. İkinci örnekte ki `input[type="text"]` elemanı bundan dolayı mouse ile de outline çizgisi göstermektedir.

En son Safari desteğinin de gelmesiyle tarayıcı desteği konusunda sorunu kalmadı.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 - [https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo)
 - [https://css-tricks.com/the-focus-visible-trick/](https://css-tricks.com/the-focus-visible-trick/)
 - [https://webdesign.tutsplus.com/tutorials/css-pseudo-class-focus-visible--cms-37211](https://webdesign.tutsplus.com/tutorials/css-pseudo-class-focus-visible--cms-37211)
 - [https://matthiasott.com/notes/focus-visible-is-here](https://matthiasott.com/notes/focus-visible-is-here)
 - [https://bharathvaj.me/blog/focus-vs-within-vs-visible](https://bharathvaj.me/blog/focus-vs-within-vs-visible)
 - [https://caniuse.com/css-focus-visible](https://caniuse.com/css-focus-visible)
