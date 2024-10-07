---
layout: post
title: Tarayıcı geliştirici araçlarında yakınlaştırma ve uzaklaştırma yapmak
description: Tarayıcı geliştirici araçlarında yakınlaştırma ve uzaklaştırma yapmak
lang: tr_TR
Date: 2024-06-10 9:30
Category: Genel
tags: [tarayıcı, dev-tools, zoom]
image:
  feature: dev-tools-zoom.png
---

Yaşlandıkça böyle ihtiyaçlar doğuyor galiba. Belki ihtiyacı olan olur diye buraya not edeyim. Chrome Dev Tools gibi araçlarda başlangıçtaki görünüm küçük kalabiliyor. Benim için küçük mesela :) 

Yazı boyutlarını büyütmek için `Cmd + +`  and  `Cmd + -` (Windows'ta Cmd yerine Ctrl kullanın). Ancak bu kısayol İngilizce klavye için Türkçe klavyelerde bunu yapmak için 

**Büyütmek için:**  `cmd + .` veya  `cmd + shift + p` ile açılan menüye `zoom in`yazarakta oluyor.
**Küçültmek için:** `cmd + -`
**Başlangıç değerine dönmek için:** `cmd + 0`

## Safari

**Büyütmek için:**  Kısayol bulamadım ancak Geliştirme aracının sağ üst köşesindeki ayarlar ikonuna tıklayıp gelen General sekmesinde en altta zoom seviyesini belirleyebiliyoruz.
**Küçültmek için:** `cmd + -`
**Başlangıç değerine dönmek için:** `cmd + 0`

## Firefox

**Büyütmek için:**  Adres barına `about:config` yazıp, arada gelen riskleri kabul ediyorum evet deyip sonra  gelen arama kısmında `devtools.toolbox.zoomValue` yazıp gelen değeri 1.5 (kendi tercihinize göre değiştirin) yaparak hallettim. 
**Küçültmek için:** `cmd + -`
**Başlangıç değerine dönmek için:** `cmd + 0`

Bir diğer seçenekte İngilizce klavyeye geçip standart kısayolları da kullanabilirsiniz. 

## Kaynaklar  

 - [https://stackoverflow.com/a/61046452](https://stackoverflow.com/a/61046452)
 - [https://devtoolstips.org/tips/en/zoom-devtools-content/](https://devtoolstips.org/tips/en/zoom-devtools-content/)
 - [https://developer.chrome.com/docs/devtools/shortcuts](https://developer.chrome.com/docs/devtools/shortcuts)
