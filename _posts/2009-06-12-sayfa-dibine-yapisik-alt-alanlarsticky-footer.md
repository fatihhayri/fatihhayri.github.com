---
layout: post
title: Sayfa Dibine Yapışık Alt Alanlar(Sticky Footer)
Date: 2009-06-12 13:58
Category: CSS, Web Standartları, XHTML
tags: alta-yapışık-alanlar, CSS, kapsayamama-sorunu, sticky-footer
---

![yapisik_altalan][]

Bir çok sitede karşılaştığımız sayfanın dibine
yapışık alt kısımları bu makalede anlatmaya çalışacağım. Bunu hiç
javascript kullanmadan sadece css yardımı ile yapacağız.

Site içeriğinin az olduğu durumlarda sayfanın alt kısımları normal akış
içerisinde ise yukarı doğru kayacaktır ve hoş olmayan görüntülere neden
olacaktır. Bu gibi durumları engellemek için sayfamızın alt kısımlarını
sayfa dibine yapıştırmalıyız, böylece sayfa içeriğinin az olması ve çok
olması durumunda  alt kısmın yerini aynı olacaktır.

Bu işi yapmak için bir kaç türlü yöntem geliştirilmiştir, mantık olarak
aynı olan bu yöntemlerde farklı tarayıcılardaki sorunlara çözüm bulmak
için farklılıklar içerir. Ben bunlarda bazıları çeşitli projelerimde
uyguladım, ancak makaleyi yazarken en iyisi hangisi ise onu yazmaya
karar verdim. [cssstickyfooter.com][]'um anlattığı yöntem benim gördüğüm
en iyi yöntem.

Kodumuzu yazmaya başlarsak.

XHTML kodu:

{% highlight html %}
<div id="kapsul">
    <div id="ustAlan">
        <h1>Lorem ipsum dolor sit amet</h1>
    </div>
    <div id="icerikAlani">
        <div id="icerik">
        </div>

        <div id="icerikSagAlani">
        </div>
    </div>
</div>
<div id="altAlan">
</div>
{% endhighlight %}

XHTML kodunda dikkate değer olan kısım içerik alanı ve alt alanı iki
farklı bölüm olarak kodlamamız. **altAlan** ve diğer alanları kapsayan
bir kapsayıcı katmandan(**#kapsul**) oluşuyor kodumuz. Bizim yaptığımız
örnekte üst alanı ve iki kolonlu içerik kısmını kapsayıcı katman içine
alıyoruz.

CSS Kodu

{% highlight css %}
html, body, #kapsul {height: 100%;}
body > #kapsul {height: auto; min-height: 100%;}
#icerik {padding-bottom: 133px;} /* altAlan yukseligi ile ayni olmali */
#altAlan {
    position: relative;
    margin-top: -133px; /* altAlan yuksekliginin eksi degeri */
    height: 133px;
    clear:both;
}
{% endhighlight %}

Buradaki 133px tanımına dikkat etmemiz gerekiyor. 133px altAlan
yüksekliğidir ve 3 yerde birden aynı değeri kullandığımıza dikkat
edeniz.

Kodu incelersek birinci ve ikinci satırda yüksekliklerin tüm alanı
kapsaması için farklı tarayıcılar için %100 tanımını yapıyoruz.

​3. satırda alta yapışık alan kadar padding değeri vererek içerik
kısmının alt kısmın altında kalmasını engelliyoruz.

4-8 satır arasında alt alan tanımlarımızı yapıyoruz. Göreceli
konumlandırdığımız alanı içerik alanında padding-bottom değeri ile
açtığımız boşluğa yerleştirmek için negatif üst kenar boşluğu değeri
veriyoruz.

Bu yöntemde float uygulanmış içerik kısmında tam alanı kapsayamama
sorunu ile karşılaşıyoruz. Float uygulanmış alanların kapsayamama sorunu
çözmek için
[http://www.fatihhayrioglu.com/float-uygulanmis-elementleri-tam-kapsayamama-sorunu/][]
makalemiz anlattığımız yöntemi kullanıyoruz.

{% highlight css %}
.kapsayamamaSorunu:after {content: "."; display: block; height: 0; clear: both; visibility: hidden;}
.kapsayamamaSorunu {display: inline-block;}
/*IE-mac de bu bolumu sakla \ */
* html .kapsayamamaSorunu {height: 1%;}
.kapsayamamaSorunu {display: block;}
/* IE-mac bu bolumu saklam artik */
{% endhighlight %}

Bu sınıfı tanımlıyoruz ve içeriği kapsayan(#icerikAlani) katmana
atıyoruz.

{% highlight html %}
<div id="kapsul">
    <div id="ustAlan" class="kapsayamamaSorunu">
        <h1>Lorem ipsum dolor sit amet</h1>
    </div>
    <div id="icerikAlani" class="kapsayamamaSorunu">
        <div id="icerik">
        </div>

        <div id="icerikSagAlani">
        </div>
    </div>
</div>
<div id="altAlan">
</div>
{% endhighlight %}

Bu yöntemin ryanfait.com'un yöntemine göre en büyük avantajı bence
ryanfait.com'un yöntemindeki anlamsız tampon katmanı gibi bir fazla
kodlamadan kaçınış oluyoruz.

Örneği görüntülemek için [tıklayınız.][]

## Sorunlar ve Çözümleri

- Benim kullandığım projede body ve üstAlan'daki margin-top değeri sorun
çıkardı. Bunun yerine padding kullanarak sorunu çözdüm. Üst kısım
body'deki margin-top ve margin-bottom tanımları sorun çıkarıyor, bunun
yerine padding kullanın.

- Ayrıca yazı tipi boyutunu büyük kullanmak isteyen kullanıcılarda sorun
çıkabileceği söyleniyor. Eğer yazı tipi boyutunu piksel(px) vb. kesin
değerler ile belirlerseniz bu tip sorunları engelleyebilirsiniz.

- Son olarakta asp.net ile oluşturulan sayfalarda <form\> elemanı ile
kapsanan sayfanızda sorun çıkabilir. Bunu engellemek için kodunuzu

CSS kodu;

{% highlight css %}
html, body, form, #kapsul {
    height: 100%;
}
{% endhighlight %}


şeklinde değiştirmelisiniz. [][]

## Kaynaklar

-   [http://www.cssstickyfooter.com/][]
-   [http://www.lwis.net/journal/2008/02/08/pure-css-sticky-footer/][]
-   [http://ryanfait.com/resources/footer-stick-to-bottom-of-page/][]
-   http://cokbasit.blogspot.com/2009/01/yapkan-taban-sticky-footer.html
-   [http://css-tricks.com/sticky-footer/][]
-   [http://www.waycoolwebdesign.com/Blog/2008/11/15/CSS-Sticky-Footer][]
-   [http://stever.ca/web-design/css-sticky-footer/][]
-   [http://brassblogs.com/blog/sticky-footer][]
-   [http://www.davidjrush.com/blog/2009/01/css-sticky-footer/][]

  [yapisik_altalan]: /images/yapisik_altalan.gif
  [cssstickyfooter.com]: http://www.cssstickyfooter.com
  [http://www.fatihhayrioglu.com/float-uygulanmis-elementleri-tam-kapsayamama-sorunu/]: http://www.fatihhayrioglu.com/float-uygulanmis-elementleri-tam-kapsayamama-sorunu/
  [tıklayınız.]: /dokumanlar/sayfa_dibine_yapisik.html
  [100]: http://www.cssstickyfooter.com/using-sticky-footer-code.html
  [http://www.cssstickyfooter.com/]: http://www.cssstickyfooter.com/
  [http://www.lwis.net/journal/2008/02/08/pure-css-sticky-footer/]: http://www.lwis.net/journal/2008/02/08/pure-css-sticky-footer/
  [http://ryanfait.com/resources/footer-stick-to-bottom-of-page/]: http://ryanfait.com/resources/footer-stick-to-bottom-of-page/
  [http://css-tricks.com/sticky-footer/]: http://css-tricks.com/sticky-footer/
  [http://www.waycoolwebdesign.com/Blog/2008/11/15/CSS-Sticky-Footer]: http://www.waycoolwebdesign.com/Blog/2008/11/15/CSS-Sticky-Footer
  [http://stever.ca/web-design/css-sticky-footer/]: http://stever.ca/web-design/css-sticky-footer/
  [http://brassblogs.com/blog/sticky-footer]: http://brassblogs.com/blog/sticky-footer
  [http://www.davidjrush.com/blog/2009/01/css-sticky-footer/]: http://www.davidjrush.com/blog/2009/01/css-sticky-footer/
