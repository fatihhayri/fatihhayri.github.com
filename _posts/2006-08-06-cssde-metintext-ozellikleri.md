---
layout: post
title: CSS&#039;de Metin(Text) Özellikleri
Date: 2006-08-06 21:55
Category: CSS
tags: [CSS, letter-spacing, line-height, text-align, text-decoration, text-indent, text-shadow, text-transform, vertical-align, word-spacing]
---

Font ile Metin(Text) arasında ne fark var ikiside aynı diyorsanız
yanılıyorsunuz.

Font özellikleri metni oluşturan karakterlerini nasıl olacağını
belirlerken, Metin(Text) özellikleri sayfadaki metinlerin düzenini
kontrol eder. Metin özellikleri metin düzeni için çok avantajlı
özellikler getirmiştir.

## text-indent

Paragrafların ilk cümlelerin soldan içeriye kaydırılması için kullanılan
bir özelliktir.

**Yapısı :** text-indent: (deger)
**Aldığı Değerler :** (uzunluk değeri) | (yüzde)
**Başlnagıç değeri:** 0 
**Uygulanabilen elementler:** Blok-level elementler
**Kalıtsallık:** Var
{: .cssozelliktanimi}

{% highlight css %}
p {
  text-indent: 10px;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## text-align

Bir elemntin diğerlerine göre hizasını berlilemek için kullanılır.
Sadece metinler için kullanılmaz, diğer elementler içinde kullanılır.

**Yapısı :** text-align: (değer) 
**Aldığı Değerler :** [ start | end | left | center | right | justify | match-parent ] || (sözdizimi)
**Başlnagıç değeri:** 0 
**Uygulanabilen elementler:** tüm elementler 
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

{% highlight css %}
p {
  text-align: justify;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## vertical-align

Bir elementin içeriğinin dikey hizalaması için kullanılır.

-   baseline : Orta(metin içeriğine göre)
-   sub : Altsimge
-   super : Üstsimge
-   top : Yukarı(elemente göre)
-   text-top: Yukarı (Metin içeriğine göre)
-   middle : Orta (Elemente göre)
-   bottom : Alt (Elemente göre)
-   text-bottom : Alt(Metin içeriğine göre)

**Yapısı :** vertical-align: (değer)
**Aldığı Değerler :** baseline | sub | super | top | text-top | middle | bottom | text- bottom | (yüzde) | [uzunluk değeri]
**Başlnagıç değeri:** baseline 
**Uygulanabilen elementler:** inline elementler ve tablo hücreleri
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

{% highlight css %}
img {
  vertical-align: baseline;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## line-height

Satırlar arasındaki yüksekliği belirler. **normal**, **pixel** veya
**yüzde**değerlerin den birini alabilir.

**Yapısı :** line-height: (değer)
**Aldığı Değerler :** (uzunluk değeri) | (yüzde değeri) | (sayı değeri) | normal | none
**Başlnagıç değeri:** normal 
**Uygulanabilen elementler:** tüm elementler 
**Kalıtsallık:** Var
{: .cssozelliktanimi}

{% highlight css %}
div{
  line-height:30px
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## word-spacing

Kelimeler arasındaki boşluk değerini belirler. Eksi değer alabilir.

**Yapısı :** word-spacing: (değer)
**Aldığı Değerler :** [ normal | (uzunluk değeri) | (yüzde değeri) ]{1,3}
**Başlnagıç değeri:** normal 
**Uygulanabilen elementler:** tüm elementler 
**Kalıtsallık:** Var
{: .cssozelliktanimi}

{% highlight css %}
p {
  word-spacing: 10px;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## letter-spacing

Harfler arasındaki boşluk değerini belirler. Eksi değer alabilir.

**Yapısı :** letter-spacing: (değer)
**Aldığı Değerler :** [ normal | (uzunluk değeri) | (yüzde değeri) ]{1,3}
**Başlnagıç değeri:** normal 
**Uygulanabilen elementler:** tüm elementler 
**Kalıtsallık:** Var
{: .cssozelliktanimi}

{% highlight css %}
p {
  letter-spacing: 5px;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## text-transform

Metnin Büyük-Küçük harf çevirmek için kullanılır.

-   **uppercase**(hepsini büyük harf yap)
-   **lowercase**(hepsini küçük harf yap)
-   **capitalize**(sadece baş harfleri büyük yap)

**Yapısı :** text-transform: (değer) 
**Aldığı Değerler :** uppercase | lowercase | capitalize | none
**Başlnagıç değeri:** none 
**Uygulanabilen elementler:** tüm elementler 
**Kalıtsallık:** Var
{: .cssozelliktanimi}

{% highlight css %}
p {
  text-transform: capitalize;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## text-decoration

Bu özellik metinlerimize özel işaretler koymamızı sağlar. Örneğin
metinlerizinaltını çizmek gibi.

**Yapısı :** text-decoration: (değer)
**Aldığı Değerler :** none | [ underline || overline || line-through || blink ] 
**Başlnagıç değeri:** none 
**Uygulanabilen elementler:** tüm elementler 
**Kalıtsallık:** Yok
{: .cssozelliktanimi}


{% highlight css %}
a:link, a:visited, a:active {
  text-decoration: none
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## text-shadow

Bu özellik CSS2 ile birlikte geldi ancak internet tarayıcıları bu
özelliği desteklemeyince CSS2.1 kaldırıldı. CSS3 ile birlikte tekrar geldi.

[https://fatihhayrioglu.com/css-ile-metinlere-golge-vermek/](https://fatihhayrioglu.com/css-ile-metinlere-golge-vermek/)

  [<uzunluk değeri >]: http://www.fatihhayrioglu.com/?p=95


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png