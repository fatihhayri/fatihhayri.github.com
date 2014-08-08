---
layout: post
title: CSS Kutu Modeli - Margin Özellikleri
Slug: kutu-modeli-margin-ozellikleri
Date: 2006-08-03 23:38
Category: CSS
tags: bottom, CSS, left, Margin, margin-right, margin-top
---

Margin özelliği elementin etrafındaki boşluk olarak tanımlanır.
Negatifdeğer alabilir. Tek tek özellikler(margin-top,margin-left vd.)
atanabildiğigibi tek bir özellikle(margin) de tanımlama yapılabilir.
Margin özelliklerinianlamak için lütfen [Box modellerine][] bir göz
atın.

![Kutu Modeli][]

-   margin-top
-   margin-right
-   margin-bottom
-   margin-left
-   margin

## margin-top

**Yapısı :** margin-top: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | auto\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**margin-top** özelliği elementin üst kenar boşluğunu bellibir değer
kadar veya yüzde olarak belirler.Negatif değer alabilir.

	:::css
	body {
		margin-top: 0
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

## margin-right

**Yapısı :** margin-right: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | auto\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**margin-right** özelliği elementin sağ kenar boşluğunu bellibir değer
kadar veya yüzde olarak belirler.Negatif değer alabilir.

	:::css
	p.diger {
		margin-right: 50%
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

## margin-bottom

**Yapısı :** margin-bottom: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | auto\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**margin-bottom** özelliği elementin alt kenar boşluğunu bellibir değer
kadar veya yüzde olarak belirler.Negatif değer alabilir.

	:::css
	p {
		margin-bottom: 10px
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

## margin-left

**Yapısı :** margin-left: <deger\>\\
**Aldığı Değerler :** [<uzunluk değeri >][] | [<yüzde>][<uzunluk değeri >] | auto\\
**Başlnagıç değeri:** 0\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**margin-left** özelliği elementin sol kenar boşluğunu bellibir değer
kadar veya yüzde olarak belirler.Negatif değer alabilir.

	:::css
	p {
		margin-left: 10px
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

## margin

**Yapısı :** margin: <deger\>\\
**Aldığı Değerler :** [[<percentage>][] | [<length>][<percentage>] |auto]{1,4}\\
**Başlnagıç değeri:** Tanımsız\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**margin** özelliği yukardaki özelliklerin tek bir özellikle uygulanması
içinkullanılır.

	:::css
	h1 {
		margin: 0.25in;
		background-color: silver;
	}

	h1 {
		margin: 10px 20px 15px 5px;
	}

yukarıda **h1** için margin değerleri sıralaması şöyledir:

**margin: üst sağ alt sol(saat yönünde)**

ikili ve üçlü kullanımda mevcuttur

	:::css
	h1 {
		margin: 0.25em 0 0.5em;
	} /* esittir '0.25em 0 0.5em 0' */

	h2 {
		margin: 0.15em 0.2em;
	} /* esittir '0.15em 0.2em 0.15em 0.2em' */

	p {
		margin: 0.5em 10px;
	} /* esittir '0.5em 10px 0.5em 10px' */

	p.close {
		margin: 0.1em;
	} /* esittir '0.1em 0.1em 0.1em 0.1em' */

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

  [Box modellerine]: http://www.fatihhayrioglu.com/?p=13
  [Kutu Modeli]: /images/basit_boxmodel.gif
  [<uzunluk değeri >]: http://www.fatihhayrioglu.com/?p=95
  [<percentage>]: #
