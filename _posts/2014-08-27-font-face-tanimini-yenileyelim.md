---
layout: post
title: font-face tanımını yenileyelim
Date: 2014-08-27 14:55
Category: css
tags: css font-face woff ttf
---

Sitemizde özel yazı tiplerini kullanmak için kullandığımız @font-face bize çok güzel imkanlar sağladığı kesin. Bir sorunu var bu özelliğin kod bloku çok uzun ve karışık. Daha önce yazdığım [font-face kullanımı](/font-face-kullanimi/) yazısının üzerinden çok zaman geçti. Bir çok tarayıcı bu listeden düştü. En son ie8 düştü.

{% highlight css %}
@font-face {
    font-family: 'BenimYaziTipim';
    src: url('GraublauWeb.eot'); /*ie 6-8 */
    src: local('Graublau Web Regular'), local('Graublau Web'),
    url('GraublauWeb.woff') format('woff'),
    url('GraublauWeb.svg#GraublauWeb') format('svg'),
    url('GraublauWeb.otf') format('opentype');
}
{% endhighlight %}

Kodu yerine **eot**, **otf** ve **svg** kodlarına gerek kalmadı. Kodumuz daha basit bir hal aldı. 

{% highlight css %}
@font-face {
  font-family: 'BenimYaziTipim';
  src: url('font.woff') format('woff'), 
       url('font.ttf') format('truetype');      
}
{% endhighlight %}

**ttf**'in tutunmasının nedeni Mobildeki Android tarayıcısı. Zamanla ttf'inde bitip tek başına **woff** kullanımına ulaşacağız inşallah.

## Kaynak

 - [http://css-tricks.com/snippets/css/using-font-face/](http://css-tricks.com/snippets/css/using-font-face/)