---
layout: post
title: CSS Kutu Modeli - Padding Özellikleri
Date: 2006-08-04 23:29
Category: CSS
tags: CSS, Padding, padding-bottom, padding-left, padding-right, padding-top
---

Padding içerik alanı ile kenarlık arasındaki alandır.

![Kutu Modeli][]

## padding-top

**Yapısı :** padding-top: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | inherit\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**padding-top** özelliği içerik alanı ile üst kenarlık
arasındakimesafeyi belirler.

	:::css
	h2 {
		padding-left: 0.25in;
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

## padding-right

**Yapısı :** padding-right: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | inherit\\
**Başlangıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**padding-right** özelliği içerik alanı ile sağ kenarlık arasındakimesafeyi belirler.

	:::css
	h2 {
		padding-right: 0.25in;
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


## padding-bottom

**Yapısı :** padding-bottom: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | inherit\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**padding-bottom** özelliği içerik alanı ile alt kenarlık
arasındakimesafeyi belirler.

	:::css
	h2 {
		padding-bottom: 0.25in;
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

## padding-left

**Yapısı :** padding-left: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | inherit\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**padding-left** özelliği içerik alanı ile sol kenarlık
arasındakimesafeyi belirler.

	:::css
	h2 {
		padding-left: 0.25in;
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

## padding

**Yapısı :** padding: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >]{1,4} | inherit\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** Block-level ve replaced elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**padding**özelliği padding-top, padding-right, padding-bottomve
padding-left değerlerini kısayoldan atamak için kullanılır.

	:::css
	h1 {
		padding: 10px;
		background-color: silver;
	}

[margin][]'deki gibi farklı kullanım şekilleri mevcuttur.

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
  [<uzunluk değeri >]: http://www.fatihhayrioglu.com/?p=95
  [margin]: http://www.fatihhayrioglu.com/?p=113
