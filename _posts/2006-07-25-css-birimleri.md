---
layout: post
title: CSS Birimleri
Date: 2006-07-25 00:25
Category: CSS
tags: [CSS, renk-birimleri, url-birimleri, uzunlu-birimleri, yüzde-birimleri]
---

Bu makalede CSS'de kullanılan tüm birimleri göreceğiz. Birimler genelde
mesafe ve renkleri tanımlamak için kullanılır.

Birimleri dört gruba ayıra biliriz. **uzunluk** birimleri, **yüzde**
birimleri, **renk** birimleri ve **URL** birimleri

## Uzunluk Birimleri

CSS'de tanımlanan 8 uzunluk birimi vardır. Bunların üç tanesi
göreceli(relative) uzunluklar ve kalan beş tanesi
kesin(absolute)uzunluklardır.

### Göreceli Uzunluklar

Bu birimler diğer uzunluk birimlerine göre görecelidir. Sayfalarımızın
ölçeğinin değiştiği ve çıktısının alındığı durumlarda bu uzunluk
birimlerini kullanmamız bize avantaj sağlayacaktır.

**em:** Ana elementin font boyunun (font-size) değerine göre
hesaplanarak bulunur. Yani body elemanında varsayılan yazı tipi
büyüklüğünüze (font-size) bağlı büyüme-küçülme gösteren ölçülerdir. em
varsayılan font büyüklüğünde ve font ailesinde (font-family) yer alan
"M" harfinin genişliğini baz almasıdır.

**ex:** Elementin "x" harfinin yüksekliğidir. Atanmış olan fontun küçük
"x" değeri yüksekliğidir.

**px:** piksel değeri. Eğer monitörünüze yeterince yakından bakarsanız,
çok küçük kutulardan oluşmuş bir ızgaraya benzer. Burdaki her kutu bir
pikseldir. Bu da her monitöre göre farklı değer demektir.

### Kesin Uzunluklar

Bu uzunluklar gerçek hayatta kullanılan birimlerdir.

**in:** inç. 1 inch=2,54 cm'dir. Örn: line-height:0.5in

**cm:** Santimetre. Bizim gerçek hayatta kullandığımız santimetere
değeridir. Örnek: margin:2cm

**mm:** Milimetre. Bizim gerçek hayatta kullandığımız milimetere
değeridir. Örnek: letter-spacing:1mm

**pt:** Point. Standart baskı birimidir. (1pt = 1/72in) Örn:
font-size:14pt

**pc:** Pika. Bir inçin altıda birine eşit olan bir baskı ölçü birimi.
Bir pika 12 noktaya bölünür. Örnek: font-size:2pc

## Yüzde Birimleri

Yüzde değerleri her zaman diğer elementlere göre göreceli değerlerdir.

{% highlight css %}
/* elementin font-size değerinin %150 si dir */
h4 {
    line-height: 150%
}
/* satır genişliğinin 10% nu */
p {
    text-indent: 10%
}
{% endhighlight %}

## Renk Birimleri

CSS'de renk değerleri isim olarak ve RGB değeri olarak tanımlanabilir.
RGB tanımlamasıda dört çeşittir.

### Renk İsimleri

Renklerin ingilizce isimleri kullanılarak tanımlama yapılabilir.

{% highlight css %}
p {
  color:black;
} /* renk tanımı siyah olarak yapılıyor*/

h1{
  background-color: red;
} /* h1 başlığının ardalanı kırmızı tanımlanıyor */
{% endhighlight %}

### RGB Renk Değerleri

CSS'de renk tanımlamak için kullanılan asıl yöntem budur. RGB
tanımlamanında dört çeşidi vardır.

**#RRGGBB :** Burada, **RR**, **GG**, ve **BB,**sırasıylakırmızı (red),
yeşil (green) ve mavi (blue) renklerin toplam renk içindeki yoğunluğunu
gösteren hekzadesimal sayılardır. Örnek: color:#ff0000; (kırmızı)

**#RGB:** Yukardaki yöntemin kısaltmasıdır. Aynı değerleri taşıyan grup
değerleri birleştirilir. Örnek: color:f00; (kırmızı)

**rgb(R,G,B):**Bu RGB renklerinin ondalık sayma düzeninde 0 ile 255
arasında bir tanımı vardır. Buna göre tanımlama yapılabilir. Örnek h1
{color: rgb(191,127,127);}

**rgb(R%,G%,B%):**Bu RGB renklerinin yüzdesel olarak %0 ile %100
arasında bir tanımı vardır. Buna göre tanımlama yapılır. Örnek: h1
{color: rgb(75%,0%,0%);}

## URL Değerleri

URL tanımlaması için aşağıdaki gib bir tanımlama yapılır.

{% highlight css %}
url(/images/kucuk.gif)
{% endhighlight %}

Burada tırnaksız ve tek tırnaklı kullanımları da standarda uygundur.

**Not :** Birde bunların dışında CSS2.0 ile birlikte gelen ekstra
birimlerde mevcuttur. Ancak bunlar kullanımda değildir.

### Açı Değerleri :

**deg**(derece), **grad**(gradyen) ve **rad**(radyan) Örnek: -90deg, 100grad ve 1.57rad

### Zaman Değerleri:

milisaniye (**ms**) ve saniye (**s**) Örnek : 100ms ve 0.1s

### Frekans Değerleri:

Herz(**Hz**) ve MegaHerz(**mHz**) Örnek: 10mHz