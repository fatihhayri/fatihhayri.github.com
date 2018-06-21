---
layout: post
title: CSS ile konumlandırma(positioning)
description: CSS konumlandırma nedir? position özelliği ve değerleri hakkında tüm bilgiler içeren bir yazı. relative, static, absolute, fixed
lang: tr_TR
Date: 2006-09-01 22:43
Category: CSS
tags: [Blok-level, bottom, CSS, Göreceli-Konumlandırma, Inline-level, left, Mutlak-Konumlandırma, position, right, Sabit-Konumlandırma, top, z-index]
---

CSS konseptinin üç önemli konusu [kutu modelleme][], **konumlandırma ( positioning )** ve floating konularıdır.

Burada CSS ile konumlandırma hakkında bilgi vermeye çalışacağız.

Konumlandırma ile alakalı olduğu için blok-level ve inline-level elementlerin tanımını tekrarlayacağız.

**Blok-level elementler :** Blok-level elementin görünüş formatı bir kutu gibidir. Blok-level elementler inline elementleri ve diğer blok-level elementleri içerebilir. Tipik özellikleri yeni bir satır başlangıcı yapmalarıdır. Örnek: h6, p, li

**Inline-level Elementler :** Inline-level elementler bir içerik gibi görünür, diğer bir inline elelementi içerebilir. Yeni satır veya boşluk oluşturmazlar. Örnek: a, strong,span

Ancak biz bu elementlerin başlangıç değerlerini **display** özelliği ile değiştirebiliriz. Yani biz bir inline-level element olan  span(<span\>....</span\>) blok-level bir elemente dönüştürebiliriz. Aynı şekilde bir blok-level elementi inline elemente dönüştürebiliriz.

CSS'de üç temel konumlandırma şekli vardır: **normal akış**(position:static ve position:relative), **float** ve **mutlak konumlar**(position:absolute). Tüm elementler başlangıçta **normal akış** şeklinde konumlandırılmıştır.

## Normal Akış

Eğer sayfalardaki elementlere herhangi bir konumlandırma yapılmamış ise veya float değeri verilmemiş ise sayfaya normal akış konumlandırması uygulanır. Sayfa ilk element en üstte son elementte en sonda olacak şekilde sıra ile aşağı doğru sıralanacaktır.

Inlene kutular yatay olarak tasarlanır. Yatay boşluk margin, padding ve kenarlıkla hesaplanır. Bu nedenle dikey margin, padding ve kenarlık değerleri etkisizdir.

![Normal Akış şeması][]

## position

**Yapısı :** position: (değer)<br/>
**Aldığı Değerler :**static | relative | absolute | fixed | inherit<br/>
**Başlangıç değeri:** static<br/>
**Uygulanabilen elementler:** tüm elementler<br/>
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

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

## top, right, bottom, left

**Yapısı :** top, right, bottom, left : (değer)<br/>
**Aldığı Değerler :** (uzunluk) | (yüzde) | auto | inherit<br/>
**Başlangıç değeri:** auto<br/>
**Uygulanabilen elementler:** position uygulanan elementlere<br/>
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

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

## Göreceli Konumlandırma(position:relative)

Göreceli konumlandırma anlaşılması kolay bir konsepttir. Bir elemente göreceli bir değer verdiğiniz de o bulunduğu yeri dikkate alarak verilen değerleri uygulayacaktır. Bir elementin(göreceli) başlangıç noktasını dikey ve yatay olarak değiştirebilriz. Eğer biz elementin üst(top) değerine 20px tanımlarsak element bulunduğu yerden 20px aşağıya kayacaktır, eğer elementin sol(left) değerini 20px olarak tanımlarsak elementimiz soldan 20px sağa doğru kayacaktır.

{% highlight css %}
.farkli-paragraf{
  position: relative;
  left: 20px;
  top: 20px;
}
{% endhighlight %}

![CSS Nisbi konumlandırma][]

Göreceli konumlandırma kullanılarak yeri belirlenen bir elementin başlangıçtaki konumundaki boşluğu ve diğer elementlerle arasındaki mesafeyi koruyacaktır.

## Mutlak(Absolute) Konumlandırma

Göreceli konumlandırma Normal Akış'ın bir parçasıdır. Aksine Mutlak Konumlandırmada uygulanan elementin bulunduğu yere boşluk bırakmayacaktır. Diğer elementler normal akıştaki yerlerini bu elementi yoksayarak devam edeceklerdir. Aşağıdaki şekilde görüldüğü gibi

![][100]

Mutlak konumlandırılmış elementin konumu en yakındaki üst elementin konuma bağlıdır. Eğer bir ata elementin konumu belirlenmemişse elementimiz ana bloka göre konumalanacaktır. Mutlak konumlandırma HTML elementi ve sayfa çözünürlüğünü ile ilişkilidir.

Göreceli olarak konumlandırılmış bir elementin içindeki Mutlak Konumlandırılmış bir element içerik blokunun üst,sağ,sol ve alttından hizalandıralabilir.Bu kullanım bize bir çok uygulmada yardımcı olacaktır ve bu kullanım ile çok güzel snuçlar elde edeceğiz.

İnsanların konumladırma ile ilgili genel problemeleri hangi konumlandırma seçeneğinin ne işe yaradığını unutmalarıdır. Göreceli Konumlandırma sayfadaki elementin başlangıç durumuna göre göreceli bir durumda olduğunu, oysa Mutlak Konumlandırmanın en yakın ata elemente veya içerik blokuna göre göreceli değer içerdiğidir.

Mutlak Konumlandırma ile yerleştirilmiş element sayfada elementi normal akışın dışına çıkarır. Bu element diğer elementlerin üzerine binecektir. Bu üstte kalma altta kalma işinide **z-index** özelliğiile halledebilriz. **z-index** değeri büyük olan element üstte küçük olan element ise altta kalacaktır.

## z-index

**Yapısı :** z-index: (değer)<br/>
**Aldığı Değerler :** (sayısal değer) | auto | inherit<br/>
**Başlangıç değeri:** auto<br/>
**Uygulanabilen elementler:** position uygulanan elementlere<br/>
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

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

Örneğin geniş bir blok içindeki bir parafrataki yazıların sağ ve altta olmasını istiyorsak. Dıştaki içerik kutusunu göreceli konumlandırıp içindeki paragrafı mutlak konumlandırarak bu işi halledebilriz.

{% highlight css %}
.adresler {
  width: 700px;
  height: 100px;
  position: relative;
}

.adresler .tel {
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align: right;
}
{% endhighlight %}

{% highlight html %}
<div class="adresler">Tel: 0845 838 6163</div>
{% endhighlight %}

<s>Not:Bu kullanım gelişmiş tarayıcılar için geçerlidir. IE 5.5 veIE 6(Windows)'da bu sorun çıkarır. Sorunu engellemek için yükseklik ve genişliktanımı yapılmalıdır.</s>

z-index hakkında daha detaylı bilgiye [burada ulaşabilirsiniz.](/z-index/)

Mutlak konumlandırma sayfa planlamasını yaparken çok kullanılır. Özellikle göreceli konumlandırılmış bir ata element varsa. Tüm siteyi sadece Mutlak Konumlandırma ile planlayabilmemiz mümkündür. Bunun için tüm elementlerin belirli boyutlandırma işlemleri yapılması şarttır tabi bu elementlerin üst üste binmesini engellemek için. Çünkü Mutlak Konumlandırılmış bir element doküman akışı dışına çakacaktır ve normal akıştaki element kutularına etki etmeyecektir. Eğer siz Mutlak Konumlandırdığınız elementi genişletmek isterseniz örneğin font boyutunu arttırdığınızda elementi kapasayan kutu normale göre genişlese de etrafındaki elemetlerin akışıdaki yeri değişmeyecektir.

## Sabit(Fixed) Konumlandırma

Sabitkonumlandırma Mutlak Konumlandırmanın bir alt katagorisidir. Sabit konumlandırılmış elementin sayfadaki görünümü çok farklıdır. Bunu özellikle websayfasında bir elementin konumu sabitlemek için kullanabiliriz. Sabit konumladırılma ile yerleştirilmiş element belirtilen yerde çakılı kalacaktır. Web tarayıcısının kaydırma çubuğu aşağı yukarı kaydırılması ile Sabit Konumlandırma ile yerleştirilmiş elementin yeri değişmeyecektir ve sabit kalacaktır. <s>Ne yazıkki IE 6 bu özelliği desteklemiyor. IE 7 strick yorumlayıcısı kullanılıyorsa destekliyor diğer hallerde desteklemiyor. Ama bu problemi javascript ile çözümü vardır.</s>

position:fixed hakkında detaylı bilgi için [tıklayınız.](/sabit-konumlandirma-postionfixed/)

## Kaynaklar

-   [CSS Mastery: Advanced Web Standards Solutions][]
-   [Muhammed Sevim][]
-   [Web Standards Solutions: The Markup and Style Handbook][]

  [kutu modelleme]: http://www.fatihhayrioglu.com/?p=13
  [Normal Akış şeması]: /images/normal_akis.gif
  [uzunluk]: http://www.fatihhayrioglu.com/?p=95
  [CSS Nisbi konumlandırma]: /images/position_relative.gif
  [100]: /images/position_absolute.gif
  [link]: http://www.howtocreate.co.uk/fixedPosition.html
  [CSS Mastery: Advanced Web Standards Solutions]: http://www.apress.com/9781590596142
  [Muhammed Sevim]: http://www.muhammetsevim.com/yazi/css-pozisyonlama-ve-z-index/
  [Web Standards Solutions: The Markup and Style Handbook]: http://www.amazon.com/gp/product/1590593812

[firefox]: https://fatihhayrioglu.com//images/ff.png
[chrome]: https://fatihhayrioglu.com//images/ch.png
[explorer]: https://fatihhayrioglu.com//images/ie.png
[msafari]:https://fatihhayrioglu.com//images/sm.png
[android]:https://fatihhayrioglu.com//images/an.png