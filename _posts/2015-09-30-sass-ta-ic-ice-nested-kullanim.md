---
layout: post
title: Sass'ta iç içe(nested) kullanımı
Date: 2015-09-30 10:03
categories: [CSS, SASS]
tags: [sass css-önişlemcileri iç-içe]
---

Sass'ın temel yazım kurallarından biriside iç içe (nested) kullanımdır. CSS ile kod yazarken girintiler çok önemli değildir. Biz daha iyi bir düzen için girintileme yapıyorduk ama bu girintiler CSS için bir şey ifade etmiyordu. Sass'ta ise girintilerin bir anlamı ve işlevi var.

CSS ile kod yazarken ebeveyn ve çocuk seçicileri ilişkilerini ve seçici önem sırasını düzenlemek için kodlarımızda aşağıdaki gibi bir düzen kuruyorduk. 

Genel bir menü kodu:

```css
ul {
    listy-style: none;
    margin: 0;
    padding: 0;
}

ul li {
    margin-left: 10px;
}

ul li a {
    color: blue;
    text-decoration: none;
}

ul li a:hover {
    color: red;
}

ul li a:before {
    content: '';
    display:block;
}
```

yukarıda basit bir menü kodunu nasıl yazdığımızı gösterdik. Kodu incelediğimizde her satır ebeveyn ve çocuk seçicileri iletişimini belirtmek durmundayız. Sass burada çok güzel bir hareket yapıyor ve bu tekrardan bizi kurtarıyor. Yukarıdaki kodu Sass ile yazalım.

```sass
//renkleri buraya yazalım
$blue: blue
$red: red

ul
  listy-style: none
  margin: 0
  padding: 0
  
  li
    margin-left: 10px
    
    a
      color: $blue
      text-decoration: none
      
      &:hover
        color: $red
        
      &:before
        content: ''
        display: block
```

daha kolay yazım, temiz görünüm ve anlaşılır kod. İlk seçici solda dururken çocuk seçicileri bir sekme (tab) içerden başlayacak şekilde kodluyoruz.

Sözde sınıf ve elementleri ise ve imi (&) ile bitişik yazıyoruz. **&:hover, &:before, &:first-child vd.**

> Ben bir sekmeyi 4 boşluk olacak şekilde kullanıyorum. 2 olarak kullanan da var. İki olarak kullananların kodu bana çok karışık geliyor.

Çok fazla iç içe seçici kullanımı kod okunurluğunu azaltıyor. Çözüm olarak bence bir prensip kararı alıp dört iç içe sekmede kendimizi sınırlamalıyız.

```sass
.birinci-seviye
    .ikinci-seviye
        .ucuncu-seviye
            .dorduncu-seviye
```

Böyle bir karar alıp uygulamak projelerinizde sizi rahatlatacaktır.

### Ve imi (&) ile ebeveyn seçicisi

Sass ve imi (&) ile ebeveyn seçicisini referans alan bir yapıyı destekler. CSS'te bir çok defa aradığımız bir özellik olan ebeveyn seçme işi Sass sayesinde erişme imkanımız var.

```sass
ul
    margin: 0

    .ie8-fix &
        margin: -2px
```

CSS kodu;

```css
ul {
  margin: 0;
}
.ie8-fix ul {
  margin: -2px;
}
```

İnternet Explorer 8 sürümünde margin sorunumuz olduğunu düşünün. CSS ile bu sorunu aşmak için altında veya ayrı bir dosyaya yazıyoruz. Bu kontrolü zorlaştırıyordu. Sass'daki kullanım ile daha derli toplu çözüm oluşturmuş oluruz. Bir çok kullanım yerinin olduğu ebeveyn seçicisi süper bir artı özellik.

### Kardeş seçicisi

Genel kardeş ve bitişik kardeş seçicisi için 

```sass
h1, 
h2, 
h3
  margin: 0

h1
  & + h2
    margin-top: 1em
```

gibi yazıldığı gibi. 

```sass
h1, 
h2, 
h3
  margin: 0

h1
    + h2
        margin-top: 1em
```

şeklindeki yazımı da Sass destekler. Benzer şekilde ~, > kullanılabilir.

### BEM kullanımı

BEM benzeri seçici kullanımını Sass 3.3'den sonra desteklemektedir. 

> BEM, CSS seçicilerini isimlendirme ve sınıflandırma için kullanılan çok daha kesin, şeffaf ve bilgilendirici bir yöntemdir.

```css
.person--woman {
  display: block;
}
.person__hand {
  display: block;
}
.person__hand--left {
  display: inline;
}
.person__hand--right {
  display: inline;
}
```

Şeklinde bir örnek daha açıklayıcı olur. Burada Sass'ın avantajı 

```sass
.person

  &--woman
    display:block
  
  &__hand
    display:block
    
    &--left
      display:inline
    
    &--right
      display:inline
```

Tekrarlardan kurtulmuş oluyoruz. Ben bu kullanımda şöyle bir sorun yaşadım: Seçicileri bulmak sıkıntı oluyor. Aramak zorlaşıyor.

## İç içe özellik kullanımı

Yukarıdaki gibi iç içe seçici kullanımı benzeri iç içe özellik kullanımında da vardır. 

```css
h1 {
  text-align: "left";
  text-transformation: "capatalize";
  text-indent: 20px;
}
```

Sass ile yazarken

```sass
h1
  text:
    align: 'left'
    transformation: 'capatalize'
    indent: 20px
```

Seçicilerde olduğu gibi tekrarlardan kurtulmuş oluruz. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://sass-lang.com/guide](http://sass-lang.com/guide)
 - [http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html)
 - thesassway.com/beginner/the-inception-rule
 - [http://leveluptuts.com/tutorials/sass-tutorials/3-nesting-your-sass](http://leveluptuts.com/tutorials/sass-tutorials/3-nesting-your-sass)
 - [http://wibblystuff.blogspot.com.tr/2014/12/a-better-approach-to-nesting-in-sass.html](http://wibblystuff.blogspot.com.tr/2014/12/a-better-approach-to-nesting-in-sass.html)
 - [https://viget.com/extend/organizing-nested-selectors-in-sass](https://viget.com/extend/organizing-nested-selectors-in-sass)
 - [http://blog.teamtreehouse.com/sass-tip-double-ampersand-selector](http://blog.teamtreehouse.com/sass-tip-double-ampersand-selector)
 - [http://markdotto.com/2015/07/20/css-nesting/](http://markdotto.com/2015/07/20/css-nesting/)
 - [http://www.sitepoint.com/sass-basics-nesting/](http://www.sitepoint.com/sass-basics-nesting/)
 - [http://www.sitepoint.com/beware-selector-nesting-sass/](http://www.sitepoint.com/beware-selector-nesting-sass/)
 - [http://www.yunusbassahan.com/blog/sass/ic-ice-secici-kullanimi-nesting.html](http://www.yunusbassahan.com/blog/sass/ic-ice-secici-kullanimi-nesting.html)
 - [http://sonsuzdongu.com/blog/sass-a-giris](http://sonsuzdongu.com/blog/sass-a-giris)
 - github.com/rssems/CSS-Rehberi
 - [http://mrhaki.blogspot.com.tr/2013/02/sass-snippets-compact-syntax-for-nested.html](http://mrhaki.blogspot.com.tr/2013/02/sass-snippets-compact-syntax-for-nested.html)