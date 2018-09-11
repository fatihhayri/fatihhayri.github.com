---
layout: post
title: Çoklu kolon kullanımında Internet Explorer 11 sorunu ve çözümü
description: Çoklu kolon kullanımında Internet Explorer 11 sorunu ve çözümü yönetmi hakkında bir ipucu.
lang: tr_TR
Date: 2018-09-11 08:06
Category: CSS
tags: [ie11, column-count, overflow, stackoverflow]
image:
  feature: ie-no.jpg
---

Uzun süredir Internet Explorer(IE) sorunuyla alakalı yazı yazmıyordum. Çünkü bizim projede IE desteğini sonlandırdık. Bir yerde uygularken denk geldim iki kolonlu  menü kullanımı vardı. `column-count` özelliği yardımıyla kolayca yapayım dedim.

<iframe height='300' scrolling='no' title='zJRMZY' src='//codepen.io/fatihhayri/embed/zJRMZY/?height=300&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

İstekte bulunan arkadaş IE 11 desteğini de sağlayalım deyince IE 11'de test ettim bir de ne göreyim IE 11 iki kolona bölerken birinci kolondaki son öge içindeki içeriği yandaki kolono taşımış! 

codepen.io'nun ie desteği yokmuş :) [http://jsbin.com/yuridejofo/1/embed?html,css,output](http://jsbin.com/yuridejofo/1/embed?html,css,output) buradan bakabilirsiniz.

Çözümü basit `li` elemanına `overflow:hidden` tanımlamak yeterli oluyor.

{% highlight css %}
ul li {
    overflow: hidden;
}
{% endhighlight %}

Kalın sağlıcakla.

# Kaynak

  - [https://stackoverflow.com/a/22547137/296373](https://stackoverflow.com/a/22547137/296373)