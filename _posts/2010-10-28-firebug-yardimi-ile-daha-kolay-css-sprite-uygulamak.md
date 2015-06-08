---
layout: post
title: CSS İpucu 28&#58; FireBug yardımı ile daha kolay CSS Sprite Uygulamak
Slug: firebug-yardimi-ile-daha-kolay-css-sprite-uygulamak
Date: 2010-10-28 22:39
Category: CSS, XHTML
tags: background-kaydırma, background-position, css-sprite, fanatikmarslar.com, trabzonspor
---

CSS Sprite yöntemini birçok yerde uyguladım, CSS Sprite tekniği ile
ilgili uzunca bir makalede yazmayı düşünüyorum, ama öncesinde küçük bir
ipucu yazayım istedim.

CSS Sprite tekniğini kısa açıklarsam sunucu tarafında çok fazla resim
isteğini azaltmak için kullanılan sitelerimize hız kazandıran bir yöntem
diyebiliriz. Uygulamada kullandığımız resimleri tek bir resim altında
toplayıp ilgili alanlara background-position özelliğinden yararlanarak
ilgili resimleri atama işidir. Bir background kaydırma yöntemidir işin
aslı.

Birçok yerde kullandım bu yöntemi sizlerede anlattım çeşitli
makalelerimde, bunlardan bir tanesi [PSD’den HTML’e – fanatikmarslar.com Sitesinin Kodlaması II][] adlı makale.

CSS Sprite tekniğinde sorunlardan bir tanesi hazırladığımız toplu resim
üzerinde ilgili elemana atanacak background-position değerlerini
bulmaktır.

![][100]

Yukarıdaki şekilde resmi birleştirdik, bu resimdeki ilgili bölümleri
ilgili elemanlara atamak için tek tek background-position değerlerini
girmeliyiz. Bunu her eleman için tek tek yapmalıyız. Bu işlem çok can
sıkıcı haller alabiliyor bazen, ama burada yardımımıza sağ olsun
Firefox’un eklentisi FireBug yetişiyor.

FireBug’ın anında müdahale etme yeteneği sayesinde bizler css sprite
resimlerindeki background-position değerlerini çok kolay bir şekilde
bulabiliyoruz.

Örneği takım logoları için bir css sprite resmi hazırladık. Bu resimdeki
her takım için konum bulmak çok zor olur.

İlk olarak tekrarı engellemek için genel bağlantıya tanımımızı yapalım

{% highlight css %}
a.takimLogo{ 
    display:block; 
    background:url(../images/takim_logolari.gif) right 0 no-repeat; 
    padding:8px 30px 8px 0; 
    color:#0c2b90; 
    text-decoration:underline
}
{% endhighlight %}

![][1]

Daha sonra her takımın logosunun yerini Firebug yardımı ile bulup
atayalım. Trabzonspor’un ki ile başlayalım. Resim hareketli gif olduğu
için biraz geç yüklenebilir, ama açıklayıcı olması için hareketli gif'i
tercih ettim.

![][2]

{% highlight css %}
div#icerikAlani table td div.logoTrabzon{
	background-position:-3px -107px
}
{% endhighlight %}

Yukarı aşağı tuşları yardımı ile bulduğumuz değeri(-107px)
background-position değeri olarak tanımlıyoruz.

Buradaki örnek daha kolay isede daha zor sprite uygulama durumlarında
konum belirlemek daha çetrefilli olabilir, bu ve benzeri durumlar için
Firebug'ın çok büyük yardımı dokunuyor. Bunuda bir ipucu olarak sizlerle
paylaşmak istedim.

  [PSD’den HTML’e – fanatikmarslar.com Sitesinin Kodlaması II]: http://fatihhayrioglu.com/psdden-htmle-fanatikmarslar-com-sitesinin-kodlamasi-ii/
  [100]: https://lh5.googleusercontent.com/slGZJ_Am1RIyR5yrzIM2dkZM22WIfcwo5GS-L8hzjRol25LcAvOIjSbLCmaEp__Yqq7HwALtVfoAXTn_U-sg6ZUpi7_chR-a-LlzEaMHQMX3euaWdw
  [1]: https://lh6.googleusercontent.com/FMA2GgldFdFzVg8UQuW5RJ7x03gVBTrdx-hJjCb0T4Zc0VWQ65DK0VthZIIe8hnIuWj1Ki-TzFXBMkbDXwms9GXV2X5-wE3yNdVZbZnCgNtQmAT5CQ
  [2]: /images/css_sprite_firebug_2.gif
