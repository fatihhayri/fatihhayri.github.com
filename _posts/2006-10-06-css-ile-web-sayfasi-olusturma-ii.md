---
layout: post
title: CSS İLE WEB SAYFASI OLUŞTURMA II
Date: 2006-10-06 10:38
categories: [CSS]
tags: [clear, CSS, Elastik Web Sayfaları, em, float, Javascript, HTML]
---

## Elastik Web Sayfaları Oluşturma

Likid Sayfalar yüksek çözünürlüğe sahip geniş ekranlarda satır
yüksekliklerinden dolayı pek hoş görünmeyebilir. Bunun aksine,
daraltılmış pencerelerde çok kısa ve parçalanmış görüneceklerdir ve
metin boyutu arttırıldığında üst üste binmiş satırlarda görüneceklerdir.
Bununla ilgili olarak elastik sayfa oluşturma metodu bize yardım
edecektir.

Elastik Sayfalar web tarayıcılarına göre font boyutunun ve elementlerin
genişliğinin göreceli olarak ayarlandığı sayfalardır. Genişlikleri
**em**, yüzde(%) ve ex gibi göreceli birimler kullanarak
tanımladığımızda font boyutu sayfa genişliğine göre değişecektir. Aynı
şekilde satır yüksekliği(line-height) değerinde de göreceli birimler
kullanarak daha okunaklı sayfalar elde edebilriz.

Elastik sayfa planlama metodununda bazı problemleri vardır, örneğin
sabit genişlikteki sayflardaki gibi elastik metodda da boş alanlar
yeterince kullanılamaz. Çünkü font boyutu arttırılırsa sayfa genişliği
tarayıcının genişliğini geçecektir ve yatay kaydırma çubuğu çıkacaktır.
Bu durumdan kurtulmak için body elementine max-width 100% ataması
yapabilriz. Ancak bu özelliği IE6 desteklememektedir.

Elastik web sayfası tasarlamak çok kolaydır. Sabit Genişlikte sayfa
tasarımı yapılan bir sayfanın birimleri **piksel**yerine **em** olarak
değiştirilirse sayfa elastik yapıya kavuşacaktır. 1em yaklaşık olarak
10piksele denk gelir.

em'in asıl tanımı küçük "**m**" harfi genişliğidir. Normalde **em** font
boyutu birimi olarak kullanılır ancak CSS'de width,line-height vd.
özelliklerin birimi olarak da kullanılabilir. Em üst elemente veya diğer
elementleri baz alarak göreceli bir değer alır. Bu özellik bize elastik
web sayfası hazırlama imkanı verir.

Çoğu web tarayıcısınnda normal font boyutu 16px'dir. 10 pikselin
yüzdesel değeri yaklaşık olarak 62.5% civarındadır. Bu belirtilen
değerlere göre kodumuzu yazarsak:

```css
body{
  text-align:center;
  font-size:62.5%;
  font-family:Arial, Helvetica, sans-serif;
}

#sayfa{
  width:72em;
  margin:0 auto;
  text-align:left;
}

#ustAlan {
  width:72em;
}

#anaMenu {
  float: left;
  width: 18em;
}

#KapsayiciAlan {
  float: right;
  width: 52em;
}

#icerik {
  float: left;
  width: 32em;
}

#BannerAlani {
  float: right;
  width: 20em;
}

#altAlan {
  width:72em;
  clear: both;
}
```

Burada **body** elementi font boyutunu **1em** eşit olan **font-size:62.5%;**
atamasını yaptık. Daha sonra sayfadaki birimleri bu değeri baz alarak
hesapladık ve em birimi vererek sayfamızı elastik bir hala getirdik.

Sayfamızın Sabit Genişlikteki sayfalardan farkını anlamak için web
tarayıcısının font boyutu değerlerini veya yakınlaştırma(zoom) aracını
(Opera, FF-eklentisi var ve IE 7 de var)kullanarak görebilriz. IE ve FF
için Görünüm(View) - Metin Boyutu(Text Size) Opera için View - Zoom
seçeneklerini kullanarak farkı görebilriz.