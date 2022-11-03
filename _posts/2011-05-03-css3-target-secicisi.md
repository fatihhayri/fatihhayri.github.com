---
layout: post
title: CSS3 :target seçicisi
Date: 2011-05-03 20:34
Category: CSS
tags: [target seçicisi, css3, hedef seçme]
---

:target seçicisi CSS3 ile birlikte gelen yeni seçilerden biri. :target
seçicisi doküman içi linklere odaklanmamızı sağlıyor. Daha önce bu işi
yapmak için javascript ile yapıyorduk. CSS3’ün bizlere kazandırdığı
birçok yenilikte olduğu gibi bu özellikte basit bir şekilde
sayfalarımıza güzel etkiler kazandırır. :target sözde sınıfı :hover
seçicisi gibi dinamik bir seçicidir.

{% highlight css %}
h3:target {
	background-color: #ff0
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**9+**|**1.0+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}


Sayfa içi bağlantıları nasıl yaptığımı hatırlayalım.

<iframe scrolling="no" height="350" frameborder="0" style="width: 100%;border: none; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/Fmvnz?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

![][100]

Benzer yapının yatay kaydırma çubuğu ile olanını yapabiliriz

![][1]

<iframe scrolling="no" height="350" frameborder="0" style="width: 100%;border: none; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/JuKqF?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Sayfa içi linklerden farklı olarak **name** ile değil **id** ile
tanımlanan alanları hedef seçiyoruz. Buda bizi fazla kod yazmaktan
kurtarıyor.

Aşağıda bu özellik kullanılarak yapılmış bir iki güzel örneğe link
verdim.

## Örnek1: Dipnot

Bu özellik wikipedia tarafında dipnoların takibi için çok güzel bir
şekilde
kullanılmaktadır.[http://tr.wikipedia.org/wiki/Trabzon_%28il%29][]
mesela Trabzon ili hakkında bilgiyi okurken herhangi bir dipnot linkine
tıkladığımızda ilgili dipnot ardalan rengi değiştirilerek
belirginleştirilmiştir.

![][3]

{% highlight css %}
ol.references > li:target {
	background-color:#def;
}
{% endhighlight %}

Bunun dışında eğlenceli örnekler geliştirilmiştir.

## Örnek 2: Basit Akordiyon

http://kaioa.com/b/0903/target_faq_demo.html

![][4]

{% highlight css %}
#faq > li:target > div{
	display:block;
}
{% endhighlight %}

örnekte gizle-göster ile basit bir akordeon içerik yapısı
oluşturulabilir.

## Örnek3: Galeri

http://kaioa.com/b/0903/target_gallery_demo.html#i1

![][5]

{% highlight css %}
dt:target+dd{
    display:block;
}
    dt:target img{
    cursor:default;
    border-bottom:5px solid #000;
    border-top:5px solid #000;
    margin-top:401px;
}
{% endhighlight %}

Örneğinde ise basit bir galeri yapısı kurulabilir.

Zamanla çok daha güzel örneklerin çıkacağını düşünüyorum.

## Kaynaklar

-   [http://dev.opera.com/articles/view/css3-target-based-interfaces/][]
-   thinkvitamin.com/design/stay-on-target/
-   [http://www.smashingmagazine.com/2011/03/30/how-to-use-css3-pseudo-classes/][]
-   [http://www.red-team-design.com/get-to-know-your-css3-target-pseudo-class][]
-   [http://www.css3.info/making-an-image-gallery-with-target/][]
-   virtuelvis.com/gallery/css3/target/interface.html#recycle
-   [http://webdesignernotebook.com/css/the-css3-target-pseudo-class-and-css-animations/][]
-   http://kaioa.com/node/93
-   [http://reference.sitepoint.com/css/pseudoclass-target][]

  [tıklayınız.]: /dokumanlar/target_sozde_sinifi/target_sozde_sinif.html
  [100]: https://lh6.googleusercontent.com/_cLb1J3SgGfIwlvlO8Dl0X-p4BJVhIEGpvnTDdfhcwVqz1kOSXWgvYq2qZkKg_5nD2gLoutyeF2qeg8xyhmIRuQK0mophK76F3yxAcSrXTY4kL8IEw
  [1]: https://lh4.googleusercontent.com/rREDSpEu15zUN-f6f1Wd8ua6LgWmX9YatGoULf1kmIJQ9LapqA-HWwnvyLESxxzICXQ3Y-HMm5TwL2kAce28fa1_pnOU--hFX8Ay4VFSET_NePdfJQ
  [2]: /dokumanlar/target_sozde_sinifi/target_sozde_sinif_yatay.html
  [http://tr.wikipedia.org/wiki/Trabzon_%28il%29]: http://tr.wikipedia.org/wiki/Trabzon_%28il%29
  [3]: https://lh6.googleusercontent.com/0G2gsPGXTQ2SDAqEYXAMsVPpCRvSyTzkoR_Ubb-P2eq3zdhBo4ARPTD06UnDknSB3U2XEPJ443-fcloiH22zHNodmCLgBui2jGpJQZDJiw95lZWlpQ
  [4]: https://lh6.googleusercontent.com/WxInkt_K1Za-AOK1mwFR6QdopkG_Jclf-0V7rM3rcGQI6BHXmerN7GNbKQOMN8UudczO0029sdlSjgc7UYXBpgye2ISmIWMgx9z5ERDMEp9mbMYIxw
  [5]: https://lh5.googleusercontent.com/JIw7mpQZ1vZlRkcjZijKVbCoe5SqXeq4TGx0pNrW0qSVOhmS3u-7xQacBlvxzWBf55OWlzYxf2B7k0u89CHVa2fFdlTL4F410blisNOAz9eF2LjNlw
  
  [http://dev.opera.com/articles/view/css3-target-based-interfaces/]: http://dev.opera.com/articles/view/css3-target-based-interfaces/
  [http://www.smashingmagazine.com/2011/03/30/how-to-use-css3-pseudo-classes/]: http://www.smashingmagazine.com/2011/03/30/how-to-use-css3-pseudo-classes/
  [http://www.red-team-design.com/get-to-know-your-css3-target-pseudo-class]: http://www.red-team-design.com/get-to-know-your-css3-target-pseudo-class
  [http://www.css3.info/making-an-image-gallery-with-target/]: http://www.css3.info/making-an-image-gallery-with-target/
  [http://webdesignernotebook.com/css/the-css3-target-pseudo-class-and-css-animations/]: http://webdesignernotebook.com/css/the-css3-target-pseudo-class-and-css-animations/
  http://kaioa.com/node/93
  [http://reference.sitepoint.com/css/pseudoclass-target]: http://reference.sitepoint.com/css/pseudoclass-target


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png