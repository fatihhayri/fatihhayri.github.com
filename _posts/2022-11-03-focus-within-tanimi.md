---
layout: post
title: :focus-within tanımı
description: :focus-within sözde sınıfı
lang: tr_TR
Date: 2022-11-03 11:00
Category: CSS
tags: [focus-within, focus]
image:
  feature: focus-within.png
---

Erişilebilirlik önemli bir konu her ne kadar bizim memlekette önemsenmese (ben de dahil) de. Erişilebilir web siteleri hazırlarken genelde `:focus` sözde sınıfı tanımlarından yararlanıyoruz. Tabi zamanla bu tanımın yetersiz kaldığını gören W3C CSS ekibi bu tanımı destekleyecek ve özelliklerini paylaşacak diğer tanımlar çıkardılar. Daha önce  [focus-visible](https://fatihhayrioglu.com/focus-visible/ "focus-visible") tanımından bahsetmiştim. Bu makalede de bir diğer odaklanma tanımı olan `:focus-within` tanımından bahsedeceğim.

`:focus-within`  tanımı odaklanılmış çocuk(child) ögeye sahip olan ebeveyne (parent) tanımlama yapmamızı sağlayan bir  ebeveyn(parent) seçicidir.

Her ne kadar ebeveyn seçici olarak `:has` tanımı akıllara geliyorsa da `:focus-within`de bir ebeveyn seçicidir.

Konuya dair örnekler hep aynı ancak anlaşılması bakımından bilgilendirici bir örnek olduğu için ben de aynı örneği vereceğim. Forum alanı içindeki `<input>`'lara odaklanıldığında tüm form alanını gazinoya (Er gazinosu) çeviren bir kod yazalım. :)

<iframe height="300" style="width: 100%;" scrolling="no" title="login focus-within" src="https://codepen.io/fatihhayri/embed/PoevPXE?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/PoevPXE">
  login focus-within</a> by Fatih  (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Kodda görüldüğü gibi input alanına odaklandığımızda input'un ebeveyni olan form alanının ardalan rengini değiştirdik. 

```css
form:focus-within {
  background-color: var(--focus-bg-color);
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
}
```

[David Walsh](https://davidwalsh.name/css-focus-within) bu özelliği anlatırken `:hover` sözde sınıfı klavye ve ekran okuyucularda çalışmıyor onlar için `:hover`yerine üretilmiş bir sözde sınıf demiş. Aşağıdaki tablo örneği bu benzetmeyi doğruluyor. `:hover`ın tüm kullanıldığı yerleri kapsar mı bilemedim.

2007'de yazdığım makaledeki tabloya `:focus-within` ekledim[CSS ile Tabloları şekillendirmek](https://fatihhayrioglu.com/css-ile-tablolari-sekillendirmek/ "CSS ile Tabloları şekillendirmek") 

<iframe height="300" style="width: 100%;" scrolling="no" title="tablo focus-within" src="https://codepen.io/fatihhayri/embed/RwJaWRR?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/RwJaWRR">
  tablo focus-within</a> by Fatih  (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
tbody tr:hover td,
tbody tr:focus-within td {
  background: #333;
  color: #fff;
}
```

Şu eklemede görüldüğü gibi `:hover` ile satır renklendirme görünümünü `:focus-within` ile tabla gezerken de sağlamış olduk.

Bir başka örnek; hamburger menü örneği. Daha önceden bu işi `:checked` sözde sınıfı yardımı ile yapıyorduk. `:focus-within` sözde sınıfı daha az eleman ile yapmakta güzel.

<iframe height="300" style="width: 100%;" scrolling="no" title="hamburger menu - 2" src="https://codepen.io/fatihhayri/embed/XWYXVmd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/XWYXVmd">
  hamburger menu - 2</a> by Fatih  (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki örnekte işin pük noktası

```css
nav:focus-within .dl-menu {
  transform: none;
}
```
Bu kısımda `nav` içindeki bir elemana odaklanıldığında yine `nav` içinde bulunan menüyü aç diyoruz. Aynı şekilde menü arkasındaki `bg` içinde benzer bir gizle göster kodu yazıyoruz.

Aslında bu tip işler için tasarlanmayan `:focus-within` sözde sınıfını bu ihtiyaçlarımız için de kullanabilecek olmamız güzel.

Tarayıcı desteği %98.5 seviyesinde.

Kalın sağlıcakla.


## Kaynaklar

 - [https://drafts.csswg.org/selectors-4/#the-focus-within-pseudo](https://drafts.csswg.org/selectors-4/#the-focus-within-pseudo)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
 - [https://www.giftegwuenu.com/applying-css-focus-within/](https://www.giftegwuenu.com/applying-css-focus-within/)
 - [https://davidwalsh.name/css-focus-within](https://davidwalsh.name/css-focus-within)
 - [https://www.youtube.com/watch?v=qBkj3pPMKSA](https://www.youtube.com/watch?v=qBkj3pPMKSA)
 - [https://daily-dev-tips.com/posts/why-css-focus-within-is-amazing/](https://daily-dev-tips.com/posts/why-css-focus-within-is-amazing/)
 - [https://css-tricks.com/solved-with-css-dropdown-menus/](https://css-tricks.com/solved-with-css-dropdown-menus/)
 - [https://codepen.io/dannievinther/pen/NvZjvz?editors=1100](https://codepen.io/dannievinther/pen/NvZjvz?editors=1100) (Güzel bir hamburger menu örneği)
 - [https://codepen.io/catalinred/pen/kvaKbn](https://css-tricks.com/solved-with-css-dropdown-menus/) (açılır menü örneği)
 - [https://twitter.com/JoshWComeau/status/1430903835841556492?s=20&t=hNq5qxUZfsQw5F1DYcLE4g](https://twitter.com/JoshWComeau/status/1430903835841556492?s=20&t=hNq5qxUZfsQw5F1DYcLE4g) 
 - [https://twitter.com/sulco/status/1290256765758713856?s=20&t=hNq5qxUZfsQw5F1DYcLE4g](https://twitter.com/sulco/status/1290256765758713856?s=20&t=hNq5qxUZfsQw5F1DYcLE4g)
