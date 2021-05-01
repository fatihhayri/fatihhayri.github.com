---
layout: post
title: İnternet Explorer Eski Sürümlerinde HTML5 Desteği Sağlamak
Date: 2012-05-23 13:40
categories: [HTML]
tags: [html5shiv, ie6, ie7, ie8, problem]
---

HTML5 ve özellikleri hayatımız gireli bayağı bir zaman oluyor. Ancak
uygulamalara yansıması o kadarda çok değil. Bende bir kaç projede HTML5
uyguladım. HTML5 yenilikleri ve anlamlı etiketleri ile bizlere avantaj
sağlıyor.

Kodlamaya başlamadan hemen bir sorun ile karşılaşıyoruz.

**Sorun = Internet Explorer**

Eşitliği gerçeğe dönüşüyor. Internet Explorer 9’dan önceki sürümlerde
HTML5’in yeni etiketlerini ve özelliklerini desteklemiyor. ie6/ie7/ie8
gibi %28 kullanım oranı sahip tarayıcılar için bir çözüm
üretmeliyiz. Biraz araştırınca çeşitli çözüm önerileri ile
karşılaşıyoruz.

Javascript ile üretilen güzel bir çözüm mevcut. **html5shiv** olarak
adlandırılan bu teknik temel mantık olarak

```javascript
document.createElement("section");
```

ile HTML5 eleman desteği olmayan tarayıcılar için js yardımı ile eleman
oluşturarak çözüyor. Birde **<section>** ve diğer blok-level etiketler
için **display: block** eklemesini yapıyor.

Javascript’i pasif yapan kullanıcılar için bazı çekinceleri olan
insanlar olsa da, genel olarak gözardı edilebilecek oranda bir yüzde
olması nedeni ile HTML5shiv gayet mantıklı bir çözüm bence.

Kullanımı çok basit. Internet Explorer 9 öncesi için [şartlı yorumlar][]
ile kontrolü koyup diğer tarayıcılarda yüklenmesini engelleyerek daha
mantıklı bir işlem yapıyoruz.

```html
<!--[if lt IE 9]> <script src="dist/html5shiv.js"></script> <![endif]-->
```

Ayrıca google hostunda da barındırılıyor bu kod

```html
<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

Bu şekilde daha hızlı bir erişim sağlanmış olur. Tabi büyük projelerin
kendilerinde barındırmaları daha mantıklı.

HTML5shiv HTML5’in yeni etiketlerinin desteğini sağlıyor. Diğer api
desteği için [Modernizr][] incelemekte yarar var.

## Kaynaklar

-   [http://net.tutsplus.com/tutorials/html-css-techniques/how-to-make-all-browsers-render-html5-mark-up-correctly-even-ie6/][]
-   [http://code.google.com/p/html5shiv/][]
-   [http://ejohn.org/blog/html5-doctype/][]
-   [http://ejohn.org/blog/html5-shiv/][]
-   [http://www.pcpro.co.uk/blogs/2011/03/07/making-html5-work-in-old-versions-of-internet-explorer/][]
-   [http://drupal.org/project/remysharp_html5shim][]
-   http://debeterevormgever.nl/en/articles/html5-elements-ie-without-javascript
-   [http://paulirish.com/2011/the-history-of-the-html5-shiv/][] (html5 shiv in geçmişi)
-   [http://viget.com/inspire/html5-elements-irresponsible-choice-right-now][]

  [şartlı yorumlar]: http://fatihhayrioglu.com/iede-hata-ayiklamak-icin-sartli-yorumlar-kullanmak/
  [Modernizr]: http://modernizr.com/
  [http://net.tutsplus.com/tutorials/html-css-techniques/how-to-make-all-browsers-render-html5-mark-up-correctly-even-ie6/]: http://net.tutsplus.com/tutorials/html-css-techniques/how-to-make-all-browsers-render-html5-mark-up-correctly-even-ie6/
  [http://code.google.com/p/html5shiv/]: http://code.google.com/p/html5shiv/
  [http://ejohn.org/blog/html5-doctype/]: http://ejohn.org/blog/html5-doctype/
  [http://ejohn.org/blog/html5-shiv/]: http://ejohn.org/blog/html5-shiv/
  [http://www.pcpro.co.uk/blogs/2011/03/07/making-html5-work-in-old-versions-of-internet-explorer/]: http://www.pcpro.co.uk/blogs/2011/03/07/making-html5-work-in-old-versions-of-internet-explorer/
  [http://drupal.org/project/remysharp_html5shim]: http://drupal.org/project/remysharp_html5shim
  [http://paulirish.com/2011/the-history-of-the-html5-shiv/]: http://paulirish.com/2011/the-history-of-the-html5-shiv/
  [http://viget.com/inspire/html5-elements-irresponsible-choice-right-now]: http://viget.com/inspire/html5-elements-irresponsible-choice-right-now
