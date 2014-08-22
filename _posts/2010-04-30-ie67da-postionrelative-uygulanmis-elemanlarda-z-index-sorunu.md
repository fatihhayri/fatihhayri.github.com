---
layout: post
title: ie6/7&#039;da postion:relative Uygulanmış Elemanlarda z-index Sorunu
Date: 2010-04-30 23:46
Category: CSS, Web Standartları, XHTML
tags: ie6, ie7, liste, postion:relative, z-index
---

Bu sorunla neredeyse 4-5 kere karşılaşmışımdır. En son yaptığım projede
karşılaşınca yazmaya karar verdim. Sorunu açıklamaya çalışayım;
postion:relative uyguladığımız elemanların(li) içinde postion:absolute
kullanarak eklediğimiz elemanlar sıralı elemanlarının altında kalıyor.
Genelde bu durumla liste(li) elemanı içinde üzerine gelince açılan bir
alan(menü) açtırmak istediğimizde karşılaşıyoruz. Basit bir
örnek ile durumu gösterelim.

{% highlight css %}
.anaKatman {
    position: relative;
    width: 300px;
    border: 1px solid black;
}

.acilanBolum {
    position:absolute;
    left:0;
    width: 150px;
    border: 1px solid red;
    background: gray;
    z-index: 1000;
}
{% endhighlight %}

HTML kısmı

{% highlight html %}
<div class="anaKatman">
    <div class="acilanBolum">
        Curabitur dapibus lacus elit. Maecenas nec ligula ipsum. Vivamus accumsan sollicitudin augue, vel sollicitudin mi varius sed. Proin in erat sit amet dolor tincidunt scelerisque eget nec felis. Curabitur dapibus lacus elit. Maecenas nec ligula ipsum.
    </div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam sit amet erat facilisis ultrices id vel turpis. Etiam pulvinar arcu ac felis pretium mollis. Etiam augue orci, iaculis non mollis et, venenatis vel ipsum.
</div>

<div class="anaKatman">
	Pellentesque sodales vehicula dictum. Nulla facilisi. Integer eget lectus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer imperdiet dictum interdum.
</div>
<div class="anaKatman">
	Pellentesque sodales vehicula dictum. Nulla facilisi. Integer eget lectus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer imperdiet dictum interdum.
</div>
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][100]

Firefox'da yukarıdaki gibi sorunsuz görünüyor.

![][1]

Üstte kalmasını istediğimiz katmana(acilanBolum) **z-index:1000** değeri
vermemize rağmen alttaki katmanın altında kalmaktadır İnternet explorer
6 ve 7 sürümlerinde. 

Çözüm için aşağıdan yukarı doğru artan z-index değerleri yazılmalıdır.
Ben ardışık z-index değerleri atayarak yapıyorum bunu. Sırası ile
z-index:1, z-index:2 ve z-index:3 değerlerini atıyorum aşağıdan yukarı
doğru. Eğer araya bir eleman girme ihtimali varsa aralıklı verin
değerleri 10, 20, 30 gibi.

HTMl kodunu aşağıdaki gibi değiştirince sorun çözüldü.

{% highlight html %}
<div class="anaKatman" style="z-index:3">
<div class="acilanBolum">
	Curabitur dapibus lacus elit. Maecenas nec ligula ipsum. Vivamus accumsan sollicitudin augue, vel sollicitudin mi varius sed. Proin in erat sit amet dolor tincidunt scelerisque eget nec felis. Curabitur dapibus lacus elit. Maecenas nec ligula ipsum.
</div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam sit amet erat facilisis ultrices id vel turpis. Etiam pulvinar arcu ac felis pretium mollis. Etiam augue orci, iaculis non mollis et, venenatis vel ipsum.
</div>

<div class="anaKatman" style="z-index:2">
Pellentesque sodales vehicula dictum. Nulla facilisi. Integer eget lectus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer imperdiet dictum interdum.
</div>
<div class="anaKatman" style="z-index:1">
Pellentesque sodales vehicula dictum. Nulla facilisi. Integer eget lectus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer imperdiet dictum interdum.
</div>
{% endhighlight %}

Örneği görmek için [tıklayınız.][2]

![][3]

## Kaynaklar

-   [Beginning CSS: Cascading Style Sheets for Web Design][]
-   [http://benhollis.net/experiments/ie7_tests/zindex.html][]

  [tıklayınız.]: /dokumanlar/ie67_z_index_sorunu/ie67_zindex_sorunu.htm
  [100]: /images/z_index_sorunu_01.gif
  [1]: /images/z_index_sorunu_02.gif
  [2]: /dokumanlar/ie67_z_index_sorunu/ie67_zindex_sorunu_cozumu.htm
  [3]: /images/z_index_sorunu_03.gif
  [Beginning CSS: Cascading Style Sheets for Web Design]: http://www.wrox.com/WileyCDA/WroxTitle/productCd-0764576429.html
  [http://benhollis.net/experiments/ie7_tests/zindex.html]: http://benhollis.net/experiments/ie7_tests/zindex.html
