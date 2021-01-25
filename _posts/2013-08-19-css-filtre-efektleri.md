---
layout: post
title: CSS Filtre Efektleri
Date: 2013-08-19 14:00
Category: CSS
tags: [filtre webkit css3 efekt]
---

CSS filtreleri photoshop’a benzer filtreleri HTML elemanlarına uygulamamızı sağlıyor. Tek satır CSS kodu ile bu efektleri verebilmek çok hoş. CSS gittikçe web’in görselliğini tek başına karşılayacak bir yöne doğru gidiyor. Bu filtreler genelde resimler, ardalan resimleri ve kenar çizgilerine uygulanmaktadır.

**Not:** İnternet Explorer eski sürümleri standart olmayan filtre desteğini sunuyor.

**Yapısı:** filter: &lt;filter-function&gt; [&lt;filter-function&gt;]* | none\\
**Aldığı Değerler:** grayscale | blur | sepia | saturate | opacity | brightness | contrast | hue-rotate | invert\\
**Başlangıç Değeri:** none\\
**Uygulanabilen Elementler:** Grafikler ve kapsayıcı elementler\\
**Kalıtsallık:** yok
{: .cssozelliktanimi}

Sayfa yüklenmeden önce filtre elemana uygulanır ve sonra sayfaya yüklenir. Biz filtre eklediğimizde orjinal resme bu efekt sayfa taranmadan önce uygulanır.

![wall-e](https://lh3.googleusercontent.com/S6R3hlIIAUcaGWKadN2mp8myRdFDBFiS3TlLM4NMSSvzE49cMFin_ODX-W69biYjPrISBsvgtuhoYX-87AkXsEe1tgNc5hb2SH47aGM6EkWFyoy8xup8VDqv9g)

[Hasan Şama](https://twitter.com/hasansama)(@hasansama)’nın çektiği fotoğraf üzerinde efektleri deneyelim. - Resmin ana fikri kabuklar wall-e’nin etrafını sarmış. -

## Siyah-Beyaz (GRAYSCALE) Efekti

Tanımlana resmi siyah-beyaz hale getirir.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/zmDlv?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Tek satır kod ile bunu yapabilmek süper bir şey. 100% değer tam filtreleme yaparken 0% değeri ise filtre’sız halini veriyor.

## hue-rotate(Renk Tekeri)

Hue(renk) renk çemberinde 0 ile 360 arasındaki renklere karşılık gelir. 0 kırmızı, 120 yeşil ve 240 mavidir. [http://www.colorschemedesigner.com/](http://www.colorschemedesigner.com/) Sitesindeki tekerdeki her açı için farklı renkler mevcuttur. Verdiğimiz her değer renk tekerinde bir renge karşılık geliyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/hHCsj?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Örnekler tanımlardan daha açıklayıcı oluyor. 240 mavi tonlarını öne çıkarır.

## Kahverengi ağırlıklı Filtre (Sepia)

Sepia filtresi kahverengi tonları önce çıkaran antik görünümlü resimler oluşturmamızı sağlar.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/nHqAj?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

## Kontrast (Contrast)

Resmin kontrast değeri ile oynarız. 0% değeri resmi siyah yaparken 100% değer resmin orjinalini verir.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/meryf?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Televizyondaki kontrasta alışık olanların seveceği bir filtre.

## Bulanıklaştırmak(Blur)

Resmimize bulanıklaştırmak için kullanılabileceğimiz bir filtredir.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/CrgBA?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Uygulanan bulanıklaştırmanın yarıçap değeri olarak belirlenen değerdir. Yüksek değerlerler resmi daha bulanık yapacaktır.

## Ters Çevirmek (Invert)

Resmin görüntüsünün terse çevrilmesini sağlar. Verilen değer resmin ne kadar terse çevrileceğini belirler. 100% değeri resmi tamamen çevirir.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/LqFDy?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

100% değeri resmi fotoğraf negatifi görünümü kazandırıyor.

## Saydamlık (opacity)

Resimlerin saydamlığını ayarlamak için uygulanan filtredir.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/DpdcL?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

CSS’deki opacity ile çakışan bir özellik. Bunun daha hızlı çalıştığı yazıyor.

## Parlaklık (brightness)

Yine televizyondan alışık olduğumuz parlaklık filtresi.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/bxGDl?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

**Gölge(drop-shadow)**

box-shadow’a benzer parametreleri var.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/jxmsl?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

CSS’de zaten box-shadow vardı niye buna ihtiyaç var derseniz. Örnekteki saydam içeriği olan alanların gölgeyi etkilediğini dikkatinize sunarım.

## Çoklu Filtre Kullanımı

Aralarında boşluk bırakarak birden fazla filtre kullanabiliyoruz. İşte burada tasarımcılardan sağlam rol çalıyoruz. :D Artık bizimde resim işleme aracımız var.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/jHtuK?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Resmi siyah beyaz yapıp, ayrıca kontrastını düşürerek baskı görünümü verebiliyoruz. Tabi geniş kullanım olanakları olan bir alan gerisi sizin tasarım görüşünüze kalmış.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**18+ (-webkit)**|*desteklemiyor*|**35+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**4.4 (-webkit)**|**6.0 (-webkit)**|**35.0 (-webkit)**|
{: .tarayici-uyumi}

## Kaynaklar

* [http://www.html5rocks.com/en/tutorials/filters/understanding-css/](http://www.html5rocks.com/en/tutorials/filters/understanding-css/)
* html5-demos.appspot.com/static/css/filters/index.html
* [http://caniuse.com/#feat=css-filters](http://caniuse.com/#feat=css-filters)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
* [http://net.tutsplus.com/tutorials/html-css-techniques/say-hello-to-css3-filters/](http://net.tutsplus.com/tutorials/html-css-techniques/say-hello-to-css3-filters/)
* [http://www.hongkiat.com/blog/css-filter/](http://www.hongkiat.com/blog/css-filter/)
* [http://blog.teamtreehouse.com/css-filter-effects](http://blog.teamtreehouse.com/css-filter-effects)
* [http://davidwalsh.name/css-filters](http://davidwalsh.name/css-filters)

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
