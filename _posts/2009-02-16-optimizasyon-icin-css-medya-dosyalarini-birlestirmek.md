---
layout: post
title: CSS İpucu 18&#58; Optimizasyon İçin CSS Medya Dosyalarını Birleştirmek
Slug: optimizasyon-icin-css-medya-dosyalarini-birlestirmek
Date: 2009-02-16 15:36
Category: CSS, XHTML
tags: [birleştirme, CSS, firebug, Firefox, optimize, yazıcı, YSlow]
---

Bir çok web kod yazarı için sayfaların yavaş açılması büyük bir
sorundur. Bu sorunun çözümü için çeşitli metotlar uygulanır. Farklı
araçlar ile testler yapılır çözümler üretilmeye çalışılır. Sonuçta en
kararlı hale ulaşılmaya çalışılır. Bende bir test aracı ile(Firefox -
FireBug - YSlow) test ediyorum. Test ettiğim siteler HTTP isteklerinin
çokluğundan dolayı düşük puan alıyor. Fazla sayıda css ve javascript
dosyasının eklenmesi bu soruna neden oluyor. Bunun için en kolay ve
basit yöntem css ve js dosyalarını birleştirmekten geçiyor.

![optimizedenonce][]

Genelde projelermizde css dosyalarımızı genel stil için ve yazıcı için
olmak üzere ikiye ayırıyoruz.

{% highlight html %}
<link rel="stylesheet" href="/style/iskelet.css" type="text/css" media="screen"></link>
<link rel="stylesheet" href="/style/yazici.css" type="text/css" media="print"></link>
{% endhighlight %}

Normal ve çıktı almak için bunları bir css dosyasında birleştirerek HTTP istek sayısını azaltabiliriz.

{% highlight html %}
<link rel="stylesheet" href="/style/iskelet.css" type="text/css"></link>
{% endhighlight %}

gibi iskelet.css içeriğinin yapısı ise aşağıdaki gibi olacaktır.

{% highlight css %}
/* all media */
@media all {
    body {
        color:#666;
        font:13px arial, helvetica, sans-serif;
        padding:20px 0 30px 0;
        }
}

@media print {
    body {
        color:#000;
        font:12px arial, helvetica, sans-serif;
        padding:0;
        }
}
{% endhighlight %}

şeklinde yaparak css dosyalarımızı tek dosya içerisinde toplayabiliriz. Daha fazla sayıda css
dosyası kullanmamız durumunda ise sunucu veya istemci taraflı kod
yardımı ile css veya js dosyalarımızı tek bir dosya gibi gösterebiliriz.
Bu konuya burada girmeyeceğim. Konu ile alakalı çalışmaların linklerini
aşağıda veriyorum.

## Kaynak

-   [http://davidwalsh.name/combine-css-media-styles-file][]
-   [http://developer.yahoo.com/performance/rules.html#num_http][]
-   http://www.vulgarisoip.com/2007/06/21/minify-your-external-javascript-and-css-with-php
-   [http://www.websiteoptimization.com/speed/tweak/http/][]
-   [http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml][]
-   yuiblog.com/blog/2006/11/28/performance-research-part-1/
-   [http://www.sitepoint.com/blogs/2007/04/10/faster-page-loads-bundle-your-css-and-javascript/][]
-   http://www.jaisenmathai.com/blog/2008/02/27/speed-up-apache-how-i-went-from-f-to-a-in-yslow/
-   http://www.cloudfour.com/77/easy-steps-to-speedup-your-wordpress-blog/


  [optimizedenonce]: /images/optimizedenonce-300x108.gif "optimizedenonce"
  [http://davidwalsh.name/combine-css-media-styles-file]: http://davidwalsh.name/combine-css-media-styles-file "http://davidwalsh.name/combine-css-media-styles-file"
  [http://developer.yahoo.com/performance/rules.html#num_http]: http://developer.yahoo.com/performance/rules.html#num_http "http://developer.yahoo.com/performance/rules.html#num_http"
  [http://www.websiteoptimization.com/speed/tweak/http/]: http://www.websiteoptimization.com/speed/tweak/http/
    "http://www.websiteoptimization.com/speed/tweak/http/"
  [http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml]: http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
    "http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml"
  [http://www.sitepoint.com/blogs/2007/04/10/faster-page-loads-bundle-your-css-and-javascript/]: http://www.sitepoint.com/blogs/2007/04/10/faster-page-loads-bundle-your-css-and-javascript/
    "http://www.sitepoint.com/blogs/2007/04/10/faster-page-loads-bundle-your-css-and-javascript/"