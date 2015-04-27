---
layout: post
title: CSS ile konumlandırma(positioning)
Date: 2006-09-01 22:43
Category: CSS
tags: Blok-level, bottom, CSS, Göreceli-Konumlandırma, Inline-level, left, Mutlak-Konumlandırma, position, right, Sabit-Konumlandırma, top, z-index
---

CSS konseptinin üç önemli konusu [kutu modelleme][],
**konumlandırma(positioning)** ve floating konularıdır.

Burada CSS ile konumlandırma hakkında bilgi vermeye çalışacağız.

Konumlandırma ile alakalı olduğu için blok-level ve inline-level
elementlerin tanımını tekrarlayacağız.

**Blok-level elementler :** Blok-level elementingörünüş formatı bir kutu
gibidir. Blok-level elementler inlineelementleri ve diğer blok-level
elementleri içerebilir. Tipiközellikleri yeni bir satır başlangıcı
yapmalarıdır. Örnek: h6, p, li

**Inline-level Elementler :** Inline-level elementler biriçerik gibi
görünür, diğer bir inline elelementiiçerebilir. Yeni satır veya boşluk
oluşturmazlar. Örnek: a, strong,span

Ancak bizbu elementlerin başlangıç değerlerini **display** özelliği ile
değiştirebilriz. Yani biz bir inline-level element olan bir
linki(<a\>....</a\>) blok-level bir elemente dönüştürebiliriz. Aynı
şekilde bilr blok-level elementi inline elemente dönüştürebilriz.

CSS'deüç temel konumlandırma şekli vardır: **normal
akış**(position:static ve position:relative), **float** ve **mutlak
konumlar**(position:absolute). Tüm elementler başlangıçta **normal
akış** şeklindekonumlandırılmıştır.

## Normal Akış

Eğer sayfalardaki elementlere herhangi bir konumlandırma yapılmamış ise
veya float değeri verilmemiş ise sayfaya normal akış konumlandırması
uygulanır. Sayfailk element en üstte son elementte en sonda olacak
şekilde sıra ile aşağı doğru sıralanacaktır.

Inlene kutular yatay olarak tasarlanır. Yatay boşluk margin, padding ve
kenarlıkla hesaplanır. Bu nedenle dikey margin, padding ve kenarlık
değerleri etkisizdir.

![Normal Akış şeması][]

## position

**Yapısı :** position: <deger\>\\
**Aldığı Değerler :**static | relative | absolute | fixed | inherit\\
**Başlangıç değeri:** static\\
**Uygulanabilen elementler:** tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
{: .tarayiciuyum}

## top, right, bottom, left

**Yapısı :** top, right, bottom, left : <deger\>\\
**Aldığı Değerler :**<[uzunluk][]\> | <[yüzde][uzunluk]\> | auto | inherit\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** postion uygulanan elementlere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## Göreceli Konumlandırma(position:relative)

Göreceli konumlandırma anlaşılması kolay bir konsepttir. Bir elemente
göreceli bir değer verdiğiniz de o bulunduğu yeri dikkate alarak verilen
değerleri uygulayacaktır. Bir elementin(göreceli) başlangıç noktasını
dikey ve yatay olarak değiştirebilriz. Eğer biz elementin üst(top)
değerine 20px tanımlarsak element bulunduğu yerden 20px aşağıya
kayacaktır, eğer elementin sol(left) değerini 20px olarak tanımlarsak
elementimiz soldan 20px sağa doğru kayacaktır.

{% highlight css %}
p#FarkliParagraf{
	position: relative;
	left: 20px;
	top: 20px;
}
{% endhighlight %}

![CSS Nisbi konumlandırma][]

Görecelikonumlandırma kullanılarak yeri belirlenen bir elementin
başlangıçtaki konumundaki boşluğu ve diğer elementlerle arasındaki
mesafeyi koruyacaktır.

## Mutlak(Absolute) Konumlandırma

Görecelikonumlandırma Normal Akış'ın bir parçasıdır. Aksine Mutlak
Konumlandırmada uygulanan elementbulunduğu yere boşluk bırakmayacaktır.
Diğer elementler normal akıştakiyerlerini bu elementi yoksayarak devam
edeceklerdir. Aşağıdaki şekilde görüldüğü gibi

![][100]

Mutlak konumlandırılmışelementin konumu en yakındaki üst elementin
konuma bağlıdır. Eğer birata elementin konumu belirlenmemişse
elementimiz ana bloka göre konumalanacaktır. Mutlak konumlandırma
HTMLelementi ve sayfa çözünürlüğünü ile ilişkilidir.

Göreceliolarak konumlandırılmış bir elementin içindeki Mutlak
Konumlandırılmış birelement içerik blokunun üst,sağ,sol ve alttından
hizalandıralabilir.Bu kullanım bize bir çok uygulmada yardımcı olacaktır
ve bu kullanım ile çok güzel snuçlar elde edeceğiz.

İnsanların konumladırma ile iligi genel problemeleri hangikonumlandırma
seçeneğinin ne işe yaradığını unutmalarıdır. Göreceli
Konumlandırmasayfadaki elementin başlangıç durumuna göre göreceli bir
durumda olduğunu,oysa Mutlak Konumlandırmanın en yakın ata elemente veya
içerik blokunagöre göreceli değer içerdiğidir.

Mutlak Konumlandırma ile yerleştirilmiş element sayfada elementi normal
akışın dışına çıkarır. Bu element diğer elementlerinüzerine binecektir.
Bu üstte kalma altta kalma işinide **z-index** özelliğiile hallede
bilriz. **z-index** değeri büyük olan element üstte küçük olan element
ise altta kalacaktır.

## z-index

**Yapısı :** z-index: <deger\>\\
**Aldığı Değerler :**<[sayısal değer][uzunluk] \> | auto | inherit\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** postion uygulanan elementlere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

Örneğin geniş bir blok içindeki bir parafratakiyazıların sağ ve altta
olmasını istiyorsak. Dıştaki içerik kutusunugöreceli konumlandırıp
içindeki paragrafı mutlak konumlandırarak bu işhalledebilriz.

{% highlight css %}
#adresler {
	width: 700px;
	height: 100px;
	position: relative;
}

#adresler .tel {
	position: absolute;
	right: 10px;
	bottom: 10px;
	text-align: right;
}
{% endhighlight %}

{% highlight html %}
<div id="adresler">Tel: 0845 838 6163</div>
{% endhighlight %}

Not:Bu kullanım gelişmiş tarayıcılar için geçerlidir. IE 5.5 veIE
6(Windows)'da bu sorun çıkarır. Sorunu engellemek için yükseklik ve
genişliktanımı yapılmalıdır.

Mutlak konumlandırma sayfa planlamasınınyaparken çok kullanılır.
Özellikle göreceli konumlandırılmışbirata element varsa. Tüm siteyi
sadece Mutlak Konumlandırma ile planlayabilmemiz mümkündür. Bunun için
tüm elementlerin belirli boyutlandırmaişlemleri yapılması şarttır tabi
bu elementlerin üst üste binmesiniengellemek için. Çünkü Mutlak
Konumlandırılmış bir element doküman akışı dışına çakacaktır ve normal
akıştaki element kutularına etkietmeyecektir. Eğer siz Mutlak
Konumlandırdığınız elementi genişletmekisterseniz örneğin font boyutunu
arttırdığınızda elementi kapasayan kutu normale göre genişlese de
etrafındaki elemtlerinakışıdaki yeri değişmeyecektir.

## Sabit(Fixed) Konumlandırma

Sabitkonumlandırma Mutlak Konumlandırmanın bir alt katagorisidir.
Sabitkonumlandırılmış elementin sayfadaki görünümü çok farklıdır. Bunu
özellikle websayfasında bir elementin konumu sabitlemek için
kullanabiliriz. Sabit konumladırılma ile yerleştirilmiş element
belirtilen yerde asılı kalacaktır. Web tarayıcısının kaydırma çubuğu
aşağı yukarı kaydırılması ile Sabit Konumlandırma ile yerleştirilmiş
elementin yeri değişmeyecektir ve sabit kalacaktır. Ne yazıkki IE 6 bu
özelliği desteklemiyor.IE 7 strick yorumlayıcısı kullanılıyorsa
destekliyor diğer hallerde desteklemiyor. Ama bu problemi javascript ile
çözümü vardır. Bir [link][]

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
