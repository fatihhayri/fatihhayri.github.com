---
layout: post
title: Tablo Satırına Verilen Ardalan Resminin Tekrarlama Sorunu
Date: 2009-04-13 13:29
categories: [CSS]
tags: [hata, internet explorer, sorun, tablo, tablo-satırı, tr, WebKit]
---

Tablo satırına ardalan resmi tanımladığımızda Firefox ve Opera'da sorun
yok iken Internet Explorer ve Webkit tabanlı tarayıcılarda(Safari ve
Google Chrome) sorun çıkarıyor. Biz burada Internet Explorer için nasıl
bir çözüm üretebiliriz onu göstereceğiz. Webkit tabanlı tarayıcılar için
çözüm bulamadım üzgünüm.

```css
table tr{
    background:url(images/southpark.gif) 0 0 no-repeat;
    height:130px;
}
```

![İE de hatalı resmi][]

Örneği görmek için [tıklayınız.][] tanımlaması Firefox ve Opera da
sorunsuz çalışırken IE ve Webkit tabanlı tarayıcılarda sorun
çıkaracaktır. Çözüm için

```css
table tr{
    background:url(images/southpark.gif) 0 0 no-repeat;
    height:130px;
    position:relative;
}

table tr td{
    color:#fff;
    font:12px Arial, Helvetica, sans-serif;
    background:none;
}
```

![İE düzeltişmiş görüntüsü][]

tanımlamaları yeterlidir. Örneği görmek için [tıklayınız.][1]

## Kaynak

test.pixelbebop.com/test33/

  [İE de hatalı resmi]: /images/tr_hatali_ie.gif
  [tıklayınız.]: /dokumanlar/tablo_satiri.html
  [İE düzeltişmiş görüntüsü]: /images/tr_duzeltilmis_ie.gif
  [1]: /dokumanlar/tablo_satiri2.html
