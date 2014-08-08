---
layout: post
title: CSS&#039;de Metin(Text) Özellikleri
Date: 2006-08-06 21:55
Category: CSS
tags: CSS, letter-spacing, line-height, text-align, text-decoration, text-indent, text-shadow, text-transform, vertical-align, word-spacing
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

**Yapısı :** text-indent: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >]\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** Blok-level elementler\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

	:::css
	p {
		text-indent: 10px;
	}

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

## text-align

Bir elemntin diğerlerine göre hizasını berlilemek için kullanılır.
Sadece metinler için kullanılmaz, diğer elementler içinde kullanılır.

**Yapısı :** text-align: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | inherit\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

	:::css
	p {
		text-align: justify;
	}

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

**Yapısı :** vertical-align: <deger\>\\
**Aldığı Değerler :**[<yüzde>][<uzunluk değeri >] | baseline | sub | super | top | text-top | middle | bottom | text-bottom\\
**Başlnagıç değeri:** baseline\\
**Uygulanabilen elementler:** inline elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

	:::css
	img {
		vertical-align: baseline;
	}

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

## line-height

Satırlar arasındaki yüksekliği belirler. **normal**, **pixel** veya
**yüzde**değerlerin den birini alabilir.

**Yapısı :** line-height: <deger\>\\
**Aldığı Değerler :** normal | [&lt;sayı&gt;][<uzunluk değeri >] | [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >]\\
**Başlnagıç değeri:** normal\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

	:::css
	div{
		line-height:30px
	}

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

## word-spacing

Kelimeler arasındaki boşluk değerini belirler. Eksi değer alabilir.

**Yapısı :** word-spacing: <deger\>\\
**Aldığı Değerler :** normal | [<uzunluk değeri >][]\\
**Başlnagıç değeri:** normal\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

	:::css
	p {
		word-spacing: 10px;
	}

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

## letter-spacing

Harfler arasındaki boşluk değerini belirler. Eksi değer alabilir.

**Yapısı :** letter-spacing: <deger\>\\
**Aldığı Değerler :** normal | [<uzunluk değeri >][]\\
**Başlnagıç değeri:** normal\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

	:::css
	p {
		letter-spacing: 5px;
	}

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

## text-transform

Metnin Büyük-Küçük harf çevirmek için kullanılır.

-   **uppercase**(hepsini büyük harf yap)
-   **lowercase**(hepsini küçük harf yap)
-   **capitalize**(sadece baş harfleri büyük yap)

**Yapısı :** text-transform: <deger\>\\
**Aldığı Değerler :** none | capitalize | uppercase | lowercase\\
**Başlnagıç değeri:** none\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

	:::css
	p {
		text-transform: capitalize;
	}

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

## text-decoration

Bu özellik metinlerimize özel işaretler koymamızı sağlar. Örneğin
metinlerizinaltını çizmek gibi.

**Yapısı :** text-decoration: <deger\>\\
**Aldığı Değerler :**none | [ underline || overline || line-through || blink ]\\
**Başlnagıç değeri:** none\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

	:::css
	a:link, a:visited, a:active {
		text-decoration: none
	}

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

## text-shadow

Bu özellik CSS2 ile birlikte geldi ancak internet tarayıcıları bu
özelliği desteklemeyince CSS2.1 kaldırıldı. CSS3 ile birlikte tekrar geldi.


  [<uzunluk değeri >]: http://www.fatihhayrioglu.com/?p=95
