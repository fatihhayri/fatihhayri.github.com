---
layout: post
title:  IE 8 için CSS Düzeltmesi(Hack)
Date: 2009-06-08 10:58
Category: CSS, XHTML
tags: [css-düzelmesi, ie8, ie8-fix, internet explorer, İnternet Tarayıcısı]
---

![ie8][]İnternet Explorer 8 çıktı ve hızla yayılıyor. Sitemi ziyaret
edenlerin %5'i İnternet Explorer 8 kullanıcısı imiş. Bir makalede
görmüştüm. İnternet Explorer 8'in hızlı yayılması ile alakalı.

Burada ie8'de css düzeltmesi yapmamız gerektiğinde nasıl bir yol
izleyeceğimiz konusunda bir ipucu vereceğim.

{% highlight css %}
.uyari {
    color /***/: red9
}
{% endhighlight %}


Bir çok yerde bu kodun tek başına ie8 için yeterli olduğu yazıyor. Ama
ben test ettiğimde ie7'de bu kodu görüyor. Bunun için


{% highlight css %}
.uyari{color:blue} /* tum taricilar */
.uyari { color /*\**/: red\9 } /* ie8 ve ie 7 */
*+html .uyari{color:blue} /* ie 7 */
{% endhighlight %}

Şeklinde bir çözüm işimize yaracaktır.

Örneği görmek için [tıklayınız.][]

Ayrıca şartlı yorumlar yardımı ile de yapabiliriz.

{% highlight html %}
<!–[if gte IE 8]>
    <style type="text/css">
    .uyari {
        color: red;
    }
    </style>
<![endif]–>
{% endhighlight %}


Ayrıca daha önce bahsettiğimiz ie7 gibi yorumlama kodu var.

{% highlight html %}
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
{% endhighlight %}

Testlerimi [ietester][] ile yaptım.

-   [http://paulirish.com/2009/browser-specific-css-hacks/][]
-   [http://acidmartin.wordpress.com/2009/06/04/css-hack-for-internet-explorer-8/][]
-   [http://snipplr.com/view/15167/ie8-csshacks/][]
-   [http://www.evotech.net/blog/2009/03/ie8-css-support/][]
-   [http://fatihhayrioglu.com/internet-explorer-8i-7-gibi-yorumla-kodu/][]

  [ie8]: /images/ie8.jpg
  [tıklayınız.]: /dokumanlar/ie8_css_duzeltmesi.html
  [ietester]: http://www.my-debugbar.com/wiki/IETester/HomePage
    "ietester"
  [http://paulirish.com/2009/browser-specific-css-hacks/]: http://paulirish.com/2009/browser-specific-css-hacks/
    "http://paulirish.com/2009/browser-specific-css-hacks/"
  [http://acidmartin.wordpress.com/2009/06/04/css-hack-for-internet-explorer-8/]: http://acidmartin.wordpress.com/2009/06/04/css-hack-for-internet-explorer-8/
    "http://acidmartin.wordpress.com/2009/06/04/css-hack-for-internet-explorer-8/"
  [http://snipplr.com/view/15167/ie8-csshacks/]: http://snipplr.com/view/15167/ie8-csshacks/
    "http://snipplr.com/view/15167/ie8-csshacks/"
  [http://www.evotech.net/blog/2009/03/ie8-css-support/]: http://www.evotech.net/blog/2009/03/ie8-css-support/
    "http://www.evotech.net/blog/2009/03/ie8-css-support/"
  [http://fatihhayrioglu.com/internet-explorer-8i-7-gibi-yorumla-kodu/]: http://fatihhayrioglu.com/internet-explorer-8i-7-gibi-yorumla-kodu/
    "http://fatihhayrioglu.com/internet-explorer-8i-7-gibi-yorumla-kodu/"
