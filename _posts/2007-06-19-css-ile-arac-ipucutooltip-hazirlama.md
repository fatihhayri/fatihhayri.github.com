---
layout: post
title: CSS ile Araç İpucu(Tooltip) Hazırlama
Date: 2007-06-19 08:54
Category: CSS, Web Standartları, XHTML
tags: açıklama-balonu, araç-ipucu, CSS, Haberler, tooltip, Web Standartları, XHTML
---

Bazı web tarayıcıları title tanımlı nesnelerin üzerine gelince
tanımlanan bilgileri gösterirler. Bir çok tasarımcı javascript ve css
yardımıyla Araç İpucu geliştirerek farklı tipte ve çeşitte araç ipucu
oluşturmaktadır ve oluşturmaya devam etmektedir. Biz burada sadece CSS
ile Araç İpucu oluşturmayı göreceğiz. Bu metot yeni nesil tarayıcılarda
sorunsuz çalışmaktadır.

XHTML kodu :

{% highlight html %}
<p>
    <a href="http://www.fatihhayrioglu.com/" class="aracIpucu">Fatih Hayrioğlu<span> (Fatih Hayrioğlu’nun Not Defteri) </span></a> web sitesine bir göz atın.
</p>
{% endhighlight %}

Araç İpucu eklenecek linke aracIpucu sınıfı atanmış ve Araç İpucu içinde
görünecek açıklama <span\> etiketleri arasına alınmıştır.

{% highlight css %}
a.aracIpucu{
    position: relative;
}
a.aracIpucu span {
    display: none;
}
{% endhighlight %}

Buradaki espri konumlandırma(realtive->absolute) esprisidir. Araç İpucu
eklenecek linke position: relative; ataması yapıp, içindeki span
elementinide mutlak konumlandırma atayarak işi halledeceğiz. Ama sayfa
ilk yüklendiğinde span içindeki bilgi görünmemesi için başlangıç
durumunda span etiketini görünmez yapıyoruz(display:none;).

{% highlight css %}
a.aracIpucu:hover span {
    display: block;
    position: absolute;
    top: 18px;
    left: 20px;
    width:200px;
}
{% endhighlight %}

Fare imleci link üzerine geldiğinde(:hover) span içeriğini göstermek
için display:block ataması yapıyoruz. Ayrıca araç ipucunun yerini
belirliyoruz. Araç İpucuna görsellik kazandırmak isteyenler için
aşağıdaki kodları ekleyebiliriz.

{% highlight css %}
a.aracIpucu:hover span {
    display:block;
    position:absolute;
    top:18px;
    left:20px;
    width:200px;
    padding:2px 6px;
    border:1px solid #963;
    background-color:#FF6;
    color:#000;
}
{% endhighlight %}

Maalesef bu kod IE5x versiyonlarda tam anlamıyla çalışmayacaktır. Bu
durumu düzeltmek için

{% highlight css %}
a.aracIpucu:hover {
    font-size: 100%; /* IE5.x/Win duzeltmek icin */
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][] Veyahut resimli bir tanıtım için
başka bir örnek yaparsak [tıklayınız.][1]

Ayrıca Safari kullanıcıları için üzgünüz. Safari bu kodlara olumlu yanıt
vermiyor.

Görselliği daha hoş olan araç ipuçlarıda yapabiliriz. Bunun için Xhtml
kodumuzu aşağıdaki **em** eklemesini yapıyoruz. Amacımız bu elemente
ikon resmini eklemek.

{% highlight html %}
<p>
<a href="http://www.fatihhayrioglu.com/" class="aracIpucu">
Fatih Hayrioğlu<span><em></em> (Fatih Hayrioğlu'nun Not Defteri) </span></a>
web sitesine bir göz atın.
</p>
{% endhighlight %}

CSS koduna gelince:

{% highlight css %}
a.aracIpucu:hover span {
    display:block;
    position:absolute;
    top:25px;
    left:-5px;
    width:200px;
    padding:2px 6px;
    border:1px solid #963;
    background-color:#FF6;
    color:#000;
}
{% endhighlight %}

düzeltmesini yapıyoruz. Ayrıca ikon için aşağıdaki eklemeyi yapıyoruz.

{% highlight css %}
a.aracIpucu:hover span em {
    position:absolute;
    left:20px;
    top:-6px;
    width:11px;
    height:6px;
    background:#fff url(yukariok.gif) 0 0;
    display:block;
    font-size:1px;
}
{% endhighlight %}


Örneği görmek için [tıklayınız.][2]

-   [http://www.smashingmagazine.com/2007/06/12/tooltips-scripts-ajax-javascript-css-dhtml/][]
-   [http://www.cssplay.co.uk/menu/tooltips.html][]
-   [http://www.communitymx.com/content/article.cfm?page=1&cid=4E2C0][]
-   [http://psacake.com/web/jl.asp][]
-   [http://www.cssplay.co.uk/menu/tooltips.html][]
-   [http://www.peutetreunereponse.net/article-6614978.html][]


  [tıklayınız.]: /dokumanlar/arac_ipucu_1.html
  [1]: /dokumanlar/arac_ipucu_3.html
  [2]: /dokumanlar/arac_ipucu_2.html
  [http://www.smashingmagazine.com/2007/06/12/tooltips-scripts-ajax-javascript-css-dhtml/]: http://www.smashingmagazine.com/2007/06/12/tooltips-scripts-ajax-javascript-css-dhtml/
  [http://www.cssplay.co.uk/menu/tooltips.html]: http://www.cssplay.co.uk/menu/tooltips.html
  [http://www.communitymx.com/content/article.cfm?page=1&cid=4E2C0]: http://www.communitymx.com/content/article.cfm?page=1&cid=4E2C0
  [http://psacake.com/web/jl.asp]: http://psacake.com/web/jl.asp
  [http://www.peutetreunereponse.net/article-6614978.html]: http://www.peutetreunereponse.net/article-6614978.html
