---
layout: post
title: CSS Kutu Modeli - Kenarlık(border) Özellikleri
Slug: kenarlikborder-ozellikleri
Date: 2006-07-31 22:56
categories: [CSS]
tags: [Border, border-bottom, border-left, border-right, border-top, CSS, kenarlık]
---

Kenarlık(border), içerik alanı ve padding etrafındaki bir veya daha
fazla çizgiye denir.

![Kutu Modeli][]

-   boder-style
-   border-top-style, border-right-style, border-bottom-style,
    border-left-style
-   border-width
-   border-top-width, border-right-width, border-bottom-width,
    border-left-width
-   border-color
-   border-top-color, border-right-color, border-bottom-color,
    border-left-color
-   border

Sırasıyla incelersek:

## border-style

**Yapısı :** border-style: &lt;değer&gt;\\
**Aldığı Değerler :** [ none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset ]{1,4} | inherit\\
**Başlnagıç değeri:**tanımlama yok\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**border-style** özelliği kenarlık stilini belirlememizi sağlar.(Örn:
dotted(noktalı), double(çift) vd.) 10 farklı değeri CSS
desteklemektedir. Bu özellik kenarlığın görünmesi için tanımlanması
gereklidir. Bir veya dört değer alabilir eğer dört değer alırsa
sırasıyla üst, sağ, alt ve sol kenarlık stilini belirler. Eğer tek
değeri varsa tüm kenarlık değeri ataması yapılmış demektir. Eğer iki
veya üç değer ataması yapılmış ise [margin][]'de gördüğümüz sıralama söz
konusudur.

```css
p.yeni {
  border-style: solid;
}
```

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## border-top-style, border-right-style, border-bottom-style, border-left-style

**Yapısı :** border-[top,left,right,bottom]-style: &lt;değer&gt;\\
**Aldığı Değerler :** none | hidden | dotted | dashed | solid | double
| groove | ridge | inset | outset | inherit\\
**Başlangıç değeri:** tanımlama yok\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**border-top-style, border-right-style, border-bottom-style,
border-left-style** border-style özelliğinin her kenara ayrı ayrı
atamasını yapabilmek için kullanılır.

```css
h1{
  border-style: solid;
  border-left-style: none;
}
```

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## border-width

**Yapısı :** border-width: (değer)
**Aldığı Değerler :** [ thin | medium | thick | <[uzunluk değeri][]> ]{1,4} | inherit\\
**Başlnagıç değeri:** tanımlama yok\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

İlk olarak stili belirledikten sonra kenarlık kalınlığını belirlemek
için **border-width** değeri kullanılır.

**border-width** yüzde değeri alamaz.

```css
p {
  margin: 5px;
  background-color: silver;
  border-style: solid;
  border-width: 1px;
}
```

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## border-top-width, border-right-width, border-bottom-width, border-left-width

**Yapısı :** border-[top,left,right,bottom]-width: (değer)
**Aldığı Değerler :** thin | medium | thick | <[uzunluk değeri][] > |
inherit\\
**Başlnagıç değeri:** tanımlama yok\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**border-top-width, border-right-width, border-bottom-width,
border-left-width** border-width özelliğinin her kenara ayrı ayrı
atamasını yapabilmek için kullanılır.

```css
h2 {
  border-left-width: medium;
  border-style: solid;
}
```

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## border-color

**Yapısı :** border-color: (değer)
**Aldığı Değerler :** [ <[renk][uzunluk değeri]> | transparent ]{1,4}
| inherit\\
**Başlnagıç değeri:** tanımlama yok\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**border-color** özelliği kenarlık rengini belirler. (X)html'deki
**bordercolor** ile benzerdir.

```css
p {
  border-style: solid;
  border-color: gray;
}
```

Tek değer tüm kenarlık renklerini belirler, her kenar için ayrı renk
tanımlamasıda yapılabilir.

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## border-top-color, border-right-color, border-bottom-color, border-left-color

**Yapısı :** border-[top,left,right,bottom]-color: (değer)
**Aldığı Değerler :** [ <[renk][uzunluk değeri]> | transparent ]{1,4}
| inherit\\
**Başlnagıç değeri:** tanımlama yok\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**border-color**özelliğinin her kenara ayrı ayrı atamasını yapabilmek
için kullanılır.

**Not:** Bir kenarlığı yok etmek için kalınlık değeri veririz. Birde
CSS2 ile birlikte gelen transparent özelliği vardır ki bu kenarlığı yok
etmez sadece görünmez yapar.

```css
p {
  border-style: solid;
  border-color: gray;
}
```

Tek değer tüm kenarlık renklerini belirler, her kenar için ayrı renk
tanımlamasıda yapılabilir.

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## border

**Yapısı :** border: <[deger][uzunluk değeri]>\\
**Aldığı Değerler :** <border-width\> | <border-style\> | <[renk][uzunluk değeri]>\\
**Başlnagıç değeri:** tanımlama yok\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**border**yukarıda sıraladığımız özellikleri tek sefer de tanımlamak
için kullanılır. Bir [kısaltmadır][].

```css
h1 {
  border: thick silver solid;
}
```

Bu özellikleri tek tek atamak isteseydik şöyle bir kod yazmamız
gerekecekti.

```css
h1 {
  border-top: thick silver solid;
  border-bottom: thick silver solid;
  border-right: thick silver solid;
  border-left: thick silver solid;
}
```

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

  [Kutu Modeli]: /images/basit_boxmodel.gif
  [margin]: http://fatihhayrioglu.com/?p=6#more-6
  [uzunluk değeri]: http://fatihhayrioglu.com/?p=95
  [kısaltmadır]: http://fatihhayrioglu.com/?p=6
