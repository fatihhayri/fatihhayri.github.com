---
layout: post
title: CSS İpuçları  4 &#58; CSS ile birlikte yürürlükten kalkan HTML özellikleri
Slug: yururlukten-kalkan-html-ozellikleri
Date: 2006-07-19 00:35
Category: CSS, XHTML
tags: [align, bgcolor, CSS, name, text, XHTML]
---

CSS kullanımı ile tedavülden kalkan veya kullanımı azalan özellikleri
sıralayalım:

-   **name** form elemanlarında kullanılan name yerine artık **id**
-   body içinde kullanılan **text** ve **bgcolor** yerine CSS'de
    **color** ve **background-color**
-   body içinde kullanılan **background** yerine **background-images**
-   body içinde kullanılan **link**, **alink**, **vlink** yerine CSS
    tabanlı **:link**, **:visited** ve **:active**
-   **align**özelliği yerine (örn:<div align="center"\>...</div\>)
    **text-align**kullanılmaktadır
-   Bunların haricinde resimleri(**img**) için kullanılan **width** ve
    **height** değerleri ile tablolar için kullanılan **cellspacing** ve
    **cellpadding** özellikleride CSS ile yeri doldurulabilecek
    özelliklerdir, ancak eğer sayfa ve site de çok fazla tablo ve resim
    varsa bu kullanım pek mantıklı değildir. Aynı şeklide **textarea**
    için **rows** ve **cols** özellikleri içinde geçerlidir.

