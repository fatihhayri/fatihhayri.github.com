---
layout: post
title: CSS iç içe (nesting) yazım
description: CSS iç içe (nesting) yazım kuralı ve SASS ile aynılıkları ve farklılıkları
lang: tr_TR
Date: 2023-08-14 09:30
Category: CSS
tags: [iç-içe-yazım, nesting]
---

CSS son yıllarda etkisini arttırarak büyüyor. Benzer gelişmeyi Javascript topluluğunda yaşamıştık. Bu kısmı biraz açarsam jQuery  gibi geliştiricilerin hayatını kolaylaştıran ve sorun çözen kütüphanelerin geliştirme hızına kattıkları değerleri Javascript bünyesine katan topluluk Javascript ekosisteminin büyümesini ve gelişmesini sağladı. Benzer bir durumu CSS'de görüyoruz. SASS, LESS gibi önişlemcilerin geliştiricilere sağladığı geliştirme hızını arttırıcı özellikleri tek tek CSS'in kendi özünde benimsemesi CSS'i büyütüyor. Bu sürecin son 2 senedir hızlanarak devam ettiğini görüyoruz.  Son olarak bu gelişmelere büyük bir katkı yapacak olan CSS iç içe yazım desteğinin gelmesini gösterebiliriz.

CSS yazarken çok fazla tekrara düştüğümüzü ve çözüm olarak farklı şeyler denediğimizi biliyoruz. Bu soruna net çözümü CSS önişlemcileri (preprecessor) getirdi. SASS, LESS, Stylus, PostCSS bu konuda hala bizlere iç içe yazım sayesinde avantaj sağlıyor. Bu kolaylık artık CSS ile yapabiliyoruz. Benim en çok beklediğim özellikti bu. Nihayet Safari, Chrome, Edge, Opera ve son olarak Firefox desteklerini açıkladılar.  Benim tahminim yaklaşık 6-8 ay sonunda bu özelliği kod düzenimiz içinde kullanabileceğimiz.

## İç içe yazımın avantajları

Twitter'da iç içe yazımla ilgili paylaşımların altında yorum olarak "Niye iç içe css yazalım? Ne avantajı var?" diye soranlar oldu. Biraz da bu sorulara cevap olarak avantajlarını yazalım.

 1. Daha modüler ve düzenlenebilir CSS kodu yazmamızı sağlar. Farklı yerlerde aynı seçiciye yapılan tanımların önüne geçip daha derli toplu ve daha az hataya neden olan kodlar üretmemizi sağlar.
 2. Tekrar tekrar aynı seçiçi isimleri yazmayı önler. Düzen ve performans kazandırır.
 3. Medya sorularında tekrarlar kodu okunmaz hale getiriyor. İç içe yazım bu karmaşayı giderip daha düzenli medya sorguları yazmamıza olanak sağlar.

## CSS iç içe yazım serüveni

Uzun zamandır bu konu gündem de olmasına rağmen tarayıcıların desteğinin daha yeni açıklanması işin kolay olmadığını gösteriyor.

Konunun devamını getirmeden hemen ilk yaptığım örneği paylaşayım sizlerle

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS nesting native" src="https://codepen.io/fatihhayri/embed/WNgZbEK?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/WNgZbEK">
  CSS nesting native</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki kodu görebilmeniz için tarayıcınızın bu özelliği desteklemesi gerekiyor.

CSS'e iç içe tanımı getirmek isteyen tarayıcılar bazı sorunlarla karşılaştılar. Nasıl bir iç içe kullanım olacağı konusunda kafası karışık olan tarayıcı geliştiricileri çareyi bu soruyu geliştiricilere sorarak çözme yoluna gittiler. Safari ve Chrome geliştiricileri iki farklı anket ile geliştiricilerden hangi seçeneğin tercih edileceğini sordular.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Help the <a href="https://twitter.com/csswg?ref_src=twsrc%5Etfw">@CSSWG</a> choose the syntax for CSS Nesting. This article will walk you through the three options currently under consideration. Read through them, and take a one question survey to weigh in.<a href="https://t.co/YUsltvPGQc">https://t.co/YUsltvPGQc</a></p>&mdash; WebKit (@webkit) <a href="https://twitter.com/webkit/status/1603510921447481364?ref_src=twsrc%5Etfw">December 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Tabi insanların büyük çoğunluğu SASS kullanımına yakın olan `seçenek 3`'ü %86 oy ile kazandırdı. Bundan sonra tarayıcı geliştiriciler hızlı bir şekilde entegre edip yakın zamanda duyurusunu yaptılar.

```css
ul {
	border: 1px solid red;
	li {
		border: 1px solid blue;
	}
}
```

Böyle değilde `&` işareti ile kullanım destekleniyor.

```css
ul {
	border: 1px solid red;
	& li {
		border: 1px solid blue;
	}
}
```

Burada tarayıcılar HTML elemanlar için bu tip bir kullanımın tarayıcıları üzmeyeceğine karar verip öyle standartlaştırdılar.

 > Önemli Not: **[LeaVerou](https://lea.verou.me/)** SASS'taki gibi kullanım için W3C'de [bir iş](https://github.com/w3c/csswg-drafts/issues/7961) açtı ve kabul gördü. Firefox bu standartla çıkacak. Yani HTML elemanlar için `&` kullanım zorunluluğu kalkacak.

Aşağıdaki diğer kullanımlar SASS'da kullandığımız gibi.

Sözde element ve sınıfların kullanımı da benzer

```css
a {
	&:hover {
		background-color: lightgreeen;
	}

	&:focus {
		background-color: lightgreeen;
	}
}
```

CSS önişlemciler gibi parent seçici kullanımı da mevcut

```css
h2 {
  .ebeveyn & {
    background-color: lightgreen;
  }
}
```

Bu kod şöyle bir etkisi olacaktır. 

```css
.ebeveyn h2 {
	background-color: lightgreen;	
}
```

En çok ihtiyaç duyduğumuz alanlardan birisi de medya sorguları ile kullanımı.

```css
body {
    background-color: gray;

    @media (min-width: 600px) {
        background-color: purple;
    }
}
```

## SASS ile aradaki farklar

SASS ile alıştığımız kullanımdan farklılıklar. Burada yeni bir gelişme ilk ve önemli bir sorunu yakın zamanda çözdü W3C. 

#### 1. HTML elementleri `&` ile kullanmak

 Yukarıda bahsettiğim gibi Firefox hariç diğer tarayıcıların da bu yeni standardı seçmeleri sonrası düzelecek bir sorun.

#### 2. BEM gibi yapılarda kullanmaya alışık olduğumuz `&__` gibi yapıları birleştirme desteği yok.

```sass
.block {
  &__element {
    // .block__element { ... }
  }
}
```
Yukarıdaki gibi bir birleştirmeyi SASS'daki gibi yapmıyor. 

#### 3. Etkinlik (Specifity) sorunu

CSS iç içe yazımının SASS'a göre bir başka farkı, iç içe kullanılan seçiçileri :is() ile sarması. Sass ise bu seçicileri kopyalayıp yapıştırıp ayrı ayrı yazılmış gibi kullanır. Örneğin

```scss
.foo, #bar {
  .baz { /* ... */ }
}
```

Bu kodu SASS ile derlediğimizde 

```css
.foo .baz, #bar .baz {
	/* ... */
}
```

kodunu css iç içe yazımında tarayıcılar derlediğinde şöyle yorumlar

```css
is(.foo, #bar) .baz {
	/* ... */
}
``` 
Tabi bu iki derleme farkı farklı etkinlik sonucuna neden olur. :is() her zaman en etkin değeri aldığı için

```html
<div class=foo>
  <p class=baz>
</div>
```

Bu kodu CSS ile yazdığınızda etkinliği `1 0 0` iken Sass ile kodladığınızda `0 0 2` değerini çıkacaktır. Bu gibi durumlara dikkat etmek gerekiyor.

## Tarayıcıdaki görünüm

CSS'in SASS'a göre avantajlarında birisi CSS ile yazdığımız kodun tarayıcının geliştirici araçlarında gösteriliyor olması.

![chrome nesting](https://fatihhayrioglu.com/images/chrome-nest-1.png)
Chrome iç içe gösterimi

![chrome nesting](https://fatihhayrioglu.com/images/chrome-nest-2.png)
Chrome iç içe yazım etkinlik gösteri

![Safari css nesting](https://fatihhayrioglu.com/images/safari-nest.png)
Safari iç içe gösterimi

![Firefox nesting](https://fatihhayrioglu.com/images/firefox-nesting.png)
Firefox iç içe gösterimi (yeni haliyle :)

Safari ve Firefox'un gösterimi daha güzel. Chrome'da yakında benzer bir gösterime geçer. Hem kodu hemde etkinlik değerini görebilmekte ayrı güzel. 

## Tarayıcı desteği

Yazıyı yazdığımda Türkiye'de %80 desteğe ulaşmış olması mükemmel bir gelişme. Firefox'un geriden gelse dahi desteği sağlaması güzel.

{% include browser-usage.html ch="+" ie="+" ff="117+" mch="+" sa="+" si="-" %}

Kalın sağlıcakla.

## Kaynaklar

 - [https://webkit.org/blog/13607/help-choose-from-options-for-css-nesting-syntax/](https://webkit.org/blog/13607/help-choose-from-options-for-css-nesting-syntax/)
 - [https://developer.chrome.com/blog/help-css-nesting/](https://developer.chrome.com/blog/help-css-nesting/)
 - [https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/](https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/)
 - [https://www.bram.us/2022/12/16/help-choose-the-syntax-for-css-nesting/](https://www.bram.us/2022/12/16/help-choose-the-syntax-for-css-nesting/)
 - [https://www.matuzo.at/blog/2023/100daysof-day99/](https://www.matuzo.at/blog/2023/100daysof-day99/)
 - [https://alvaromontoro.com/blog/68023/css-nesting-is-coming](https://alvaromontoro.com/blog/68023/css-nesting-is-coming)
 - [https://kilianvalkhof.com/2023/css-html/the-gotchas-of-css-nesting](https://kilianvalkhof.com/2023/css-html/the-gotchas-of-css-nesting)
 - [https://developer.chrome.com/articles/css-nesting/](https://developer.chrome.com/articles/css-nesting/)
 - [https://www.youtube.com/watch?v=YnWPeA6l5UE](https://www.youtube.com/watch?v=YnWPeA6l5UE) (Getting started with CSS nesting)
 - [https://www.sitepoint.com/an-introduction-to-native-css-nesting/](https://www.sitepoint.com/an-introduction-to-native-css-nesting/)
 - [https://sass-lang.com/blog/sass-and-native-nesting/](https://sass-lang.com/blog/sass-and-native-nesting/)
 - [https://dbushell.com/2023/05/15/css-upgrades-spring-2023-edition/](https://dbushell.com/2023/05/15/css-upgrades-spring-2023-edition/)
 - [https://blog.logrocket.com/native-css-nesting/](https://blog.logrocket.com/native-css-nesting/)
 - [https://webinista.com/updates/native-css-nesting/](https://webinista.com/updates/native-css-nesting/)
