---
layout: post
title: CSS Kutu Modeli Özellikleri -4
Date: 2006-08-05 13:17
Category: CSS
tags: clear, CSS, float, height, width
---

Kutu modeli özelliklerine devam ediyoruz. Sırasıyla aşağıdaki
özellikleri inceleyeceğiz:

-   Width
-   Height
-   Float
-   Clear

![Kutu Modeli][]

## width

**Yapısı :** width: (değer)
**Aldığı Değerler :** uzunluk değeri | yüzde, uzunluk değeri | auto | inherit \\ 
**Başlnagıç değeri:** auto \\ 
**Uygulanabilen elementler:** Block-level ve replaced elementler \\ 
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

[Blok-level ve replaced elementlerin][Block-level ve replaced elementler](örn: img, input, textarea vd.) tümü bir genişlik(width)
değeri alır. Elementlerin başlangıçtaki genişlik değeri **auto** yani
kendi asıl genişliğidir. (Örneğin bir resmin genişliği gibi) Yüzde
değeri [ebveyn elementi][] kıstas alarak uygulanır. Negatif değeri
almaz.

{% highlight css %}
p {
 width: 200px;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## height

**Yapısı :** height: (değer)
**Aldığı Değerler :** &lt;uzunluk değeri&gt; | auto | inherit \\  
**Başlangıç değeri:** auto \\  
**Uygulanabilen elementler:** &lt;Block-level ve replaced elementler&gt; \\  
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

[Blok-level ve replaced elementlerin][Block-level ve replaced elementler](örn: img, input, textarea vd.) tümü bir yükseklik(height)
değeri alır. Elementlerin başlangıçtaki yükseklik değeri **auto** yani
kendi asıl yüksekliğidir. (Örneğin bir resmin yüksekliği gibi) Negatif
değeri almaz.

{% highlight css %}
h2 {
 height: 0.25in;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## float

**Yapısı :** float: (değer)
**Aldığı Değerler :** left | right | none |inherit \\   
**Başlnagıç değeri:** none \\  
**Uygulanabilen elementler:** tüm elementler \\  
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**float** **özelliği** bir elementi(img, table, div vd.) konumuNu
belirlemek(sağa veya sola ) için kullanılır. Siz bir elemente
**flaot=left** değeri verirseniz diğer elementler o elementin sağından
akar. Bu HTML3,2 deki resime(**img**) uygulanan **align="left"** ve
**align="right"** ile özdeş bir özelliktir. Ancak CSS 1 tüm elementlere
**float** özelliği vermemizi sağlıyor. HTML 3,2 sadece **img** ve
**table** için bu özelliği kullanmamıza izin veriyordu. **float**
özelliği sonraki derslerde daha ayrıntılı gösterilecektir. **float**
özelliği CSS ile tablosuz web sitesi oluşturma metodunun en önemli
öğelerinden biridir.

{% highlight css %}
p img {
 float: left;
 margin: 25px;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

## clear

**Yapısı :** clear: (değer)
**Aldığı Değerler :** none | left | right | both \\  
**Başlnagıç değeri:** tanımsız \\  
**Uygulanabilen elementler:** tüm elementler \\  
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Resim ve metin elementleri diğer elementlere göre floting element olarak
tanımlanır. **clear** özelliği **floating** uygulanmayan elemente köşe
tanımı yapar. **left** değeri uygulandığı elementi floating elementin
bir alt soluna atar, **right** özelliği benzer şekilde sağa atar,
**none** özelliği elementin başlangıç değerini geri döndürür ve **both**
değeride iki floating elementin aşağısına atar. **clear** özelliği
sonraki derslerde daha ayrıntılı gösterilecektir. **clear** özelliği CSS
ile tablosuz web sitesi oluşturma metodunun en önemli öğelerinden
biridir.

{% highlight css %}
h3 {
 clear: left;
}
{% endhighlight %}

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**+**|**+**|**+**|
{: .tarayici-uyumi}

  [Kutu Modeli]: /images/basit_boxmodel.gif
  [firefox]: https://fatihhayrioglu.com//images/ff.png
  [chrome]: https://fatihhayrioglu.com//images/ch.png
  [explorer]: https://fatihhayrioglu.com//images/ie.png
  [msafari]:https://fatihhayrioglu.com//images/sm.png
  [android]:https://fatihhayrioglu.com//images/an.png