---
layout: post
title: CSS3 calc() değeri
Date: 2011-09-09 14:59
Category: CSS
tags: [-moz-calc(), calc(), css3, hesaplama fonksiyonu]
---

Firefox’un CSS3 içine eklediği bir değer olarak eklendi. İnternet
Explorer 9 desteği ile genelleşen bir değer oldu. Çok kullanışlı bir
değer olacağı şimdiden belli olan bu özelliği webkit ve opera’nında
desteklemesini bekliyoruz.

CSS değerleri listesine yeni ve fonsiyornel bir ekleme olacaktır
**calc()**. Hesap Makinesi(Calculator) kelimesinden türetilen bu değer
sayesinde css özelliklerine atanan değerlerde hesaplama yapabileme
imkanı sağlayacaktır.

Toplama(+), çıkarma(-), çarpma(*), bölme(/) ve modül(mod) kullanma
imkanı sağlıyor.

Daha önce yaşadığımız bir çok sorunun üstesinden bu değer sayesinde
geleceğiz.

Genelde esnek yapılı alanlar ve sayfa düzeni oluştururken göreceli değer
ve sabit margin, padding ve border tanımları ile sorun yaşarız.

{% highlight css %}
#sagKolon{
  width:calc(300px - 1em);
  width:-moz-calc(300px - 1em);
  float:left;
  background-color:#CC9933;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/VaBqn/3/embedded/css,result,html"></iframe>

Firefox önek(**-moz-**) ile bu değeri desteklerken İnternet Explorer
standartlardaki şekli destekler.

Örneğinde görüldüğü gibi **calc()** bu tip sorunlarımızın ilacı
olacaktır.

Birden fazla işlem içinde kullanıma izin vardır.

{% highlight css %}
div {
    width: calc(100% - 20px + 2px*2);
}
{% endhighlight %}

İşlem sırası matematik ve javascriptten bildiğimiz gibi çarpma, bölme,
mod, toplama , çıkarma sıralaması ile olur.

{% highlight css %}
p {
    margin: calc(1rem - 2px) calc(1rem - 1px)
}
{% endhighlight %}

şeklinde margin üst/alt ve sağ/sol tanımları yapılabilir.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**19+**|**9+**|**4.0+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**4.4+**|**6.1+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Kaynaklar

-   [http://webdesignernotebook.com/css/the-wonderful-calc-function/][]
-   [http://hacks.mozilla.org/2010/06/css3-calc/][]
-   [http://msdn.microsoft.com/en-us/library/ms537660(v=vs.85).aspx][] (ie9 destekliyor)
-   [https://developer.mozilla.org/en/CSS/-moz-calc][]
-   [http://caniuse.com/calc][] (destek listesi)
-   [http://mynthon.net/howto/-/webdev/css3-testsuite-calc-property-for-calculating-size.txt][] (örnek)
-   bloqk.com/makale/css_calc_kullanimi.html
-   [http://www.thecssninja.com/demo/css_calc/][] (örnek)
-   [http://www.sitepoint.com/css3-calc-function][]

  [http://webdesignernotebook.com/css/the-wonderful-calc-function/]: http://webdesignernotebook.com/css/the-wonderful-calc-function/
  [http://hacks.mozilla.org/2010/06/css3-calc/]: http://hacks.mozilla.org/2010/06/css3-calc/
  [http://msdn.microsoft.com/en-us/library/ms537660(v=vs.85).aspx]: http://msdn.microsoft.com/en-us/library/ms537660(v=vs.85).aspx
  [https://developer.mozilla.org/en/CSS/-moz-calc]: https://developer.mozilla.org/en/CSS/-moz-calc
  [http://caniuse.com/calc]: http://caniuse.com/calc
  [http://mynthon.net/howto/-/webdev/css3-testsuite-calc-property-for-calculating-size.txt]: http://mynthon.net/howto/-/webdev/css3-testsuite-calc-property-for-calculating-size.txt
  [http://www.thecssninja.com/demo/css_calc/]: http://www.thecssninja.com/demo/css_calc/
  [http://www.sitepoint.com/css3-calc-function]: http://www.sitepoint.com/css3-calc-function

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png