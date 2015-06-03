---
layout: post
title: CSS3 Renk Geçişinin &lt;body&gt; elemanına uygulamasındaki sorun ve çözümü
Date: 2012-06-25 13:24
Category: CSS, XHTML
tags: css3, gradient, problem, renk geçişi
---

CSS3 yeniliklerinde yaralanıyoruz, tabi bazı sorunlar ortaya çıkıyor.
Hatasız kod olmayacağı için, hata olur ama bir çözümüde vardır elbet
diye düşünmemiz lazım.

Sorun tam olarak bir sayfanın ardalanının tamamına renk geçişi uygulamak
istediğimizde belli bir yere kadar uygulayıp kalan kısmını tekrar
ettirerek istemediğimiz bir durum oluşmasına neden oluyor.

Sorunun çözümünü aradığımda ilk sonuç [http://stackoverflow.com/][]
sitesinde buldum biraz daha araştırınca benzer cevaplar gördüm ve
sizlerle paylaşmak istedim.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/VUcqt/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

**background-image** özelliğine eklenen renk geçişi kodu tekrar
edecektir, biz bu tekrarı istemediğimiz için.

{% highlight css %}
background-repeat: no-repeat;
{% endhighlight %}

ekledik. Ayrıca uygulana renk geçişinin sayfa zemininde sabitlenmesi
için

{% highlight css %}
background-attachment: fixed;
{% endhighlight %}

kodunu ekledik.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/KAg2U/2/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Diğer kod eklemeleri farklı tarayıcılar içindir.

## Kaynaklar

-   [http://stackoverflow.com/questions/2869212/css3-gradient-background-set-on-body-doesnt-stretch-but-instead-repeats][]
-   [http://atomicrobotdesign.com/blog/htmlcss/use-css3-gradients-to-replace-your-sites-background/][]
-   [http://www.naprej.com/css3_body_background_gradient][]

  [http://stackoverflow.com/]: http://stackoverflow.com/
  [http://stackoverflow.com/questions/2869212/css3-gradient-background-set-on-body-doesnt-stretch-but-instead-repeats]: http://stackoverflow.com/questions/2869212/css3-gradient-background-set-on-body-doesnt-stretch-but-instead-repeats
  [http://atomicrobotdesign.com/blog/htmlcss/use-css3-gradients-to-replace-your-sites-background/]: http://atomicrobotdesign.com/blog/htmlcss/use-css3-gradients-to-replace-your-sites-background/
  [http://www.naprej.com/css3_body_background_gradient]: http://www.naprej.com/css3_body_background_gradient
