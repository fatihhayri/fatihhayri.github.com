---
layout: post
title: CSS&#039;de Kısaltmalar
Date: 2006-04-19 12:09
Category: CSS
tags: [background, Border, CSS, font, kenar-boşluğu, kısaltmalar, liste, Margin, Padding, renk]
---

CSS; kodlama yaparken bizim bazı kısaltmaları kullanmamıza izin verir.
Böylece hem fazla kod yığınından kurtulmuş oluruz, hem de sayfa
boyutunu azaltmış oluruz.

## 1. Yazı tipi (Font)

Normalde bir font tanımlarken 4 adet CSS kodu kullanılır:

{% highlight css %}
font-weight: bold;
font-family: verdana, sans-serif;
font-size: 11px;
line-height: 15px;
{% endhighlight %}

Kısaltma olarak kullanılan kod ise tek satır:

{% highlight css %}
font: bold 11px/15px verdana, sans-serif;
{% endhighlight %}

## 2. Background

Background tanımlarken 5 adet atama yapmamız gerekirken kısaltmayla tek tanıma indirebiliriz.

{% highlight css %}
background-color: #000;
background-image: url(ard.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-position: 50px 50px;
{% endhighlight %}

Kısaltırsak:

{% highlight css %}
background: {
    #000 url(ard.jpg) no-repeat fixed 50px 50px;
}
{% endhighlight %}

## 3. Renkler(Hex-decimal)

CSS stillerinde renkler genelde hex-decimal renk kodu ile tanımlanır
örneğin `color: #ff0000;` kırmızı. Renkler 6 karakterle
gösterilse de bir çok renk(web tabanlı) 3 karakterin tekrarlanması ile
oluşturulur. Örneğin, kırmızı'nın hex-decimal kodunun kısaltırsak
**color: #f00;**. Buradaki her karakter hex-decimal koddaki iki
karaktere karşılık gelmektedir. Mesela, beyaz renk kullanacağınızda,
`color: white;` veya `color: #ffffff;` kullanımı önermeyiz.
Kısaltılmış olanı `color: #fff;` kullanmanız daha avantajlıdır.

## 4. Border

Kenarlık tanımlamalarında her özellik için bir tanımlama yapılır. örnek
olarak bir elementin üst kenarına atama yapmak için:

{% highlight css %}
border-top-width: 2px;
border-top-style: dashed;
border-top-color: #f00;
{% endhighlight %}

Kısaltırsak:

{% highlight css %}
border-top: 2px dashed #f00;
{% endhighlight %}

Bu özellikleri tüm kenarlara uygulamak için:

{% highlight css %}
border: 2px dashed #f00;
{% endhighlight %}

## 5. Margin ve Padding'ler

Margin ve padding'ler de normal tanımlama şöyledir:

{% highlight css %}
margin-top: 10px;
margin-right: 5px;
margin-bottom: 20px;
margin-left: 15px;
{% endhighlight %}

Kısaltılmış hali:

{% highlight css %}
margin: 10px 5px 20px 15px;
{% endhighlight %}

Burada öznitelikler sağdan başlayarak saat yönünde devam eder. Aşağıda çeşitli
kısaltma yöntemleri birlikte verilmiştir:

**4 Değer:** (*margin: 20px 15px 10px 5px;*) birinci - üst, ikinci -
sağ, üçüncü - alt, dördüncü - sol.

**3 Değer:** (*margin: 20px 15px 10px;*) birinci - üst, ikinci - sol ve
sağ, üçüncü - alt. **2 Değer:**(*margin: 20px 15px;*) birinci - üst ve
alt, ikinci - sol ve sağ. **1 Değer:** (*margin: 10px;*) birinci - üst,
sağ, alt ve sol

## 6. Listeler

Liste tanımlarında kısaltma kullanılır.

{% highlight css %}
ul {
    list-style-type:square;
    list-style-position:inside;
    list-style-image:url(image.png);
}
{% endhighlight %}

Kısaltırsak;

{% highlight css %}
ul li {
    list-style:square inside url(image.png);
} /* burda özel bir durum vardır eğer resim yoksa yedek olarak square özelliği gösterilecektir. */
{% endhighlight %}

## 7. Sıfır(0)'ın Kısaltma olarak kullanılması

Kısaltmalarda son olarak '0' ın kullanımına değineceğiz. Normalde bir
elemente değer ataması yapılırken değerin yanına birimi de yazılır(örn:
3px, 0.2em vd.), Ancak sıfır '0' için bu zorunlu değildir.

{% highlight css %}
padding:0;
{% endhighlight %}

Bu durumun bir istisnası mevcuttur oda yüzde değerlerinde atama yapılırken `0%` olarak atama
yapılmalıdır.

## Kaynaklar

-   [http://www.w3schools.com/css/default.asp][]
-   [http://www.eyeofdesign.com][]
-   [http://www.spoono.com][]
-   [http://www.dustindiaz.com/css-shorthand/][]


  [http://www.w3schools.com/css/default.asp]: http://www.w3schools.com/css/default.asp
  [http://www.eyeofdesign.com]: http://www.eyeofdesign.com/css/background.php
  [http://www.spoono.com]: http://www.spoono.com/csst/tutorials/tutorial.php?id=5
  [http://www.dustindiaz.com/css-shorthand/]: http://www.dustindiaz.com/css-shorthand/
