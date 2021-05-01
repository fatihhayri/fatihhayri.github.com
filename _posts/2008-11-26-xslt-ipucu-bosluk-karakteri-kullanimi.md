---
layout: post
title: xslt ipucu&#58; boşluk karakteri kullanımı
Date: 2008-11-26 17:56
categories: [Haberler]
tags: [boşluk, karakter, xml, xslt]
---

XSLT'de   gibi boşluk karakteri verdiğimizde hata veriyor. Bunun bir
çözümü olmalı diye bir çok kere aradım buldum, sonra yine lazım oldu
yine aradım buldum ve en iyisi buraya yazmak diye düşündüm.

```xslt
<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>
```

## Kaynak:

[http://stackoverflow.com/questions/31870/using-a-html-entity-in-xslt-eg-nbsp](http://stackoverflow.com/questions/31870/using-a-html-entity-in-xslt-eg-nbsp)
