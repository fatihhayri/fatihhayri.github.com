---
layout: post
title: CSS3 pointer-events özelliği
Date: 2011-12-08 00:01
Category: Haberler
tags: css3, pointer-events, svg
---

CSS3 ile gelen yeni özellikleri tararken ilginç ve güzel bir özellik ile
karşılaştım. pointer-events özelliği. SVG ile birlikte uzun süredir
kullanılan bu özellik CSS3 ile birlikte HTML elemanlarında uygulanıyor.

Farenin işlevini yerine getirip getirmeyeceğini belirlemek için
kullanılır. Örneğin bir menüde mevcut sayfayı gösteren menü elemanının
tıklanma olayını kaldırabiliriz.

pointer-event özelliği belirlenen elemanın farenin işlevine vereceği
tepkiyi belirler. Bu tepki aşağıdaki çerçevededir.

-   Kullanıcı arayüzü olayları (örneğin fare tıklaması)
-   Dinamik Sahte Sınıflar (örneğin :hover, :focus)
-   Hiperlinkler

pointer event özelliği aslında SVG içerikleri için uygulanan bir
özelliktir.

**Yapısı :**pointer-events: <deger\>\\
**Aldığı Değerler:** auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** Tüm Elemanlara\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

Aldığı değerler bakalım;

auto: pointer-events özelliğine herhangi bir tanım yapılmadı ise fare
tıklamasına müdahale etmez. SVG içeriklerde, bu değer visiblePainted ile
aynı etkiyi yapar.

none: Element fare olaylarını uygulamayacaktır.

visiblePainted, visibleFill, visibleStroke, visible, painted, fill,
stroke ve all: Sadece SVG içindir.

Bir örnek ile durumu daha iyi görelim.

	:::html
	<ul class="menu">
		<li><a href="index.html">Ana Sayfa</a></li>
		<li><a href="hakkimizda.html" class=”on”>Hakkımızda</a></li>
		<li><a href="urunler.html">Ürünler</a></li>
	</ul>

Hakkımızda sayfasında olduğumuzda kullanıcının hakkımızda linkine
tıklaması mantıklı değildir, hakkımızda bağlantısının fare tıklama
olayını kaldırmak için

	:::css
	.menu a.on {
		pointer-events: none;
		cursor: default;
	}

Tanımı istediğimiz sonucu verecektir.

CSS3 ile dinamik bileşenlerin CSS ile halledilmesi işine alıştık. Bu tip
CSS ile halledebilmemiz güzel.

**Tarayıcı Destekleme Listesi**
Firefox 3.6+
Chrome 2+
Safari 4+
Opera -
İnternet Explorer -
{: .tarayiciuyum}

## Kaynaklar

-   [https://developer.mozilla.org/en/CSS/pointer-events][]
-   [http://robertnyman.com/2010/03/22/css-pointer-events-to-allow-clicks-on-underlying-elements/][]
-   [http://robertnyman.com/css3/pointer-events/pointer-events.html][]
-   [http://css-tricks.com/6379-pointer-events-current-nav/][]
-   [http://hacks.mozilla.org/2009/12/pointer-events-for-html-in-firefox-3-6/][]
-   [http://www.webkit.org/specs/PointerEventsProperty.html][]

  [https://developer.mozilla.org/en/CSS/pointer-events]: https://developer.mozilla.org/en/CSS/pointer-events
  [http://robertnyman.com/2010/03/22/css-pointer-events-to-allow-clicks-on-underlying-elements/]: http://robertnyman.com/2010/03/22/css-pointer-events-to-allow-clicks-on-underlying-elements/
  [http://robertnyman.com/css3/pointer-events/pointer-events.html]: http://robertnyman.com/css3/pointer-events/pointer-events.html
  [http://css-tricks.com/6379-pointer-events-current-nav/]: http://css-tricks.com/6379-pointer-events-current-nav/
  [http://hacks.mozilla.org/2009/12/pointer-events-for-html-in-firefox-3-6/]: http://hacks.mozilla.org/2009/12/pointer-events-for-html-in-firefox-3-6/
  [http://www.webkit.org/specs/PointerEventsProperty.html]: http://www.webkit.org/specs/PointerEventsProperty.html
