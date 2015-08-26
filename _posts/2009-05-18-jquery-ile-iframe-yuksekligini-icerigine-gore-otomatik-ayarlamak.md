---
layout: post
title: Jquery İle IFrame Yüksekliğini İçeriğine Göre Otomatik Ayarlamak
Date: 2009-05-18 10:31
Category: Haberler
tags: iframe, Javascript, jquery, jQuery plugin
---

Ben bu işe başladığımdan beri çerçeve(frame) kullanmak hoşa gitmemiştir.
Allah'tan ilk çıktığındaki popülaritesini kaybettide rahatladım. Ancak
yine bazı yerlerde tek çare olarak framset'i olmasada iframe'i kullanmak
zorunda kalıyoruz.

Iframe kullanımında en çok yaşanan sorunlardan biridir içeriğin
yüksekliğine göre iframe yüksekliğinin artması veya azalması. Daha önce
ben bunu javascript ile yapmıştım. Ancak farklı tarayıcılarda bazı
sorunlar yaşamıştım. Şimdide javascript ile bunu halledebiliriz. Ancak
son zamanlarda(o kadar da yeni sayılmaz :D) popüler olan javascript
kütüphaneleri(benim için bunun adı jQuery) ile bu daha basit.

Burada ufak bir ipucu var. Ben bir çok projelerimde jquery kütüphanesini
kullandığım için [jQuery autoHeight eklentisini][] kullandım. Eğer
projemde jQuery kütüphanesi yüklü değilse javascript ile yapmak daha
mantıklı. Javascript ile yapacaklar için bir [link][] jQuery ile
yapmanın bir kaç avantajıdaha var tabii

Ben burada jQuery autoHeight eklentisinin nasıl kullanılacağını
anlatacağım.

Sayfamıza ilk olarak jQuery kütüphanesini eklemeliyiz. Bu script
dosyasının ilk sırada olması önemli jQuery için.

{% highlight html %}
<script type="text/javascript" src="script/jquery.js"></script>
{% endhighlight %}

Iframe otomatik yükseklik vermek için kullandığımız eklenti kodu.

{% highlight html %}
<script type="text/javascript" src="script/jquery.autoheight.js"></script>
{% endhighlight %}

Sayfaya eklediğimiz iframe kodunda yapmamız gereken sadece
class="autoHeight" eklemek.

{% highlight html %}
<iframe id="listeCercevesi" name="listeCercevesi" class="autoHeight" scrolling="auto" frameborder="0" src="/liste.aspx"></iframe>
{% endhighlight %}

Örnek sayfayı görmek için [tıklayın.][] (sonspring.com alınmıştır)

## Uyarılar:

-   İlk uyarımız bu metot aynı alan adı üzerindeki sayfa eklemelerinde
    çalışıyor. İçreriğini farklı siteden aldığımız iframe'ler güvenlik
    nedeniyle çalışmayacaktır.
-   İkinci uyarım ise içeriği yüklü olan iframe sayfalarında yükleme
    zaman aldığı için ve scriptimiz sayfa yüklendikten sonra çalıştığı
    için sayfa yüksekliği ilk açılıştı küçük geliyor ve sonradan gerçek
    boyutuna geliyor. Ben bunu engellemek için iframe'e ortalama bir
    yükseklik değeri girdim. Script yüklendiğinde zaten beni girdiğim
    değeri değiştiriyor.
-   Üçüncü olarak bu yöntem javascript yönteminden daha kullanışlı yapan
    özelliklerden biri de kullanımının kolay olması ve her iframe e id
    vermek zorun olmuyor olmamız.

## Kaynaklar

-   [http://www.lost-in-code.com/programming/jquery-auto-iframe-height/][]
-   [http://jbscdev.blogspot.com/2007/08/automatic-iframe-height-sizing-using.html][]
-   [http://sonspring.com/journal/jquery-iframe-sizing][]

  [jQuery autoHeight eklentisini]: https://github.com/house9/jquery-iframe-auto-height
    "jQuery autoHeight eklentisini"
  [link]: http://www.dynamicdrive.com/dynamicindex17/iframessi2.htm
    "link"
  [tıklayın.]: /dokumanlar/iframe_code/index.html
  [http://www.lost-in-code.com/programming/jquery-auto-iframe-height/]: http://www.lost-in-code.com/programming/jquery-auto-iframe-height/
    "http://www.lost-in-code.com/programming/jquery-auto-iframe-height/"
  [http://lib.mobius.tw/jquery/myplugin/iframe_autoHeight/api.htm]: http://lib.mobius.tw/jquery/myplugin/iframe_autoHeight/api.htm
  [http://jbscdev.blogspot.com/2007/08/automatic-iframe-height-sizing-using.html]: http://jbscdev.blogspot.com/2007/08/automatic-iframe-height-sizing-using.html
    "http://jbscdev.blogspot.com/2007/08/automatic-iframe-height-sizing-using.html"
  [http://sonspring.com/journal/jquery-iframe-sizing]: http://sonspring.com/journal/jquery-iframe-sizing
    "http://sonspring.com/journal/jquery-iframe-sizing"
