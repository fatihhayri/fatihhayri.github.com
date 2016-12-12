---
layout: post
title: meta viewport etiketi
Date: 2016-12-12 15:27
Category: css
tags: viewport, meta, uyumlu-web
---

Görünür alanı (viewport) kullanıcının kullandığı tarayıcının görünür alanı olarak tanımlayabiliriz. Bir web sayfasını görüntülemek için kullanılabilir alan olara düşünebiliriz. 

Görüş alanı ekran boyutuyla(screen size) aynı değildir. Bir cihazın görünür alanı değişebilir ancak ekran boyutu sabittir. 

Görünür alan masaüstünde büyük, tablette orta ve mobilde küçüktür. Bununla birikte masaüstünde kullanıcı tarayıcı boyutunu daralttığında masaüstünde de küçük kalır. Anlatmak istediğimiz görüş alanı ekran genişliğinden bağımsız tarayıcının görünür alanını ifade eder. Eğer duyarlı web siteleri kodlayacaksanız sizin için ekran boyutu değil tarayıcının görünür alanı önemlidir. 

Son zamanlara kadar tasarımlar masaüstüne göre tasarlanırdı, yani görünür alanı büyük olan yerde. Görünür alan kabulü genelde 980px idi. Mobil cihazlar popülerleştikçe daha küçük ekranlar dikkate alınmaya başlandı. Bazı mobil ekranların 320px kadar küçük ekran boyutları vardır. 

Daha küçük ekranların öne çıkması ile tarayıcılar iki eylemde bulundu:

 - Tarayıcılar web sitlerini ekran sığacak şekilde daralttılar.
 - Okunurluğu arttırmak için yazı boyutunu değiştirdiler.

Tabi bu durumda büyük ekran için tasarlanmış ve kodlanmış web sitesi küçük ekrana sığdırılmaya çalışılınca metinler görünmeyecek kadar küçüldü. Kullanıcı görmek için yakınlaştırmak zorunda kaldı. Tabi bu durum çok kullanıcı dostu olmayan web sitleri ortaya çıkardı.

## Viewport meta etiketi

Uyumlu web siteleri kodlayanlar farklı görünür alanlar için site kodladığı için tarayıcıların sığdırma işlevine gerek duymamaktadır. İşte uyumlu olarak kodlanmış web sitelerinde sığdırma özelliğini devre dışı bırakmak için viewport meta etiketi kullanılır.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1">
{% endhighlight %}

Bu kodu <head> içine koymamız yeterli. Bu kod kullanıcının cihazında görünür alanı sabitleyecektir.

|![meta'sız](/images/viewport-yok.png) |![meta'lı](/images/viewport-var.png)  |
|mea'sız|meta'lı|

Ayrıca **minimum-scale**, **maximum-scale** ve **user-scalable** parametreleri de var. **minimum-scale**, **maximum-scale** parametreleri kullanıcını yakınlaştırma ve uzaklaştırma değerine belirlemek için kullanılır. **user-scalable** parametresi kullanıcının yakınlaştırma ve uzaklaştırma yapıp yapmayacağı belirler. İki değer alır yes ve no.

Erişebilirlik açısından **minimum-scale**, **maximum-scale** ve **user-scalable** kullanımı pek önerilmemektedir. Kullanıcı bazı durumlarda sitenin bazı alanlarını(örneğin resimleri) yakınlaştırmak istediğinde bunu engellediğimiz için bu imkandan mahrum kalacaktır. 

Birçok sitede örnek olarak verilen 

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
{% endhighlight %}

kod satırı kopyala-yapıştır ile kullanılmaktadır. Ancak erişebilirlik açısından çok önerilmemektedir.

## CSS @viewport kuralı

viewport etiketi yerine CSS ile @viewport kuralı ile de bu işi yapabiliyoruz. 

{% highlight css %}
@viewport {
  /* kurallar buraya yazılır */
}
{% endhighlight %}

Bu kullanım tarayıcı desteğinin düşük olması nedeni ile önerilmemektedir. 

## Sonuç

Bir çok kod yazarı bu etiketi kopyala-yapıştır ile kullanmaktadır. Bu kod ile tüm sıkıntılarının biteceğini düşünmek mantıksız. Bu kod bazı sitelerde kullanıcı deneyimini daha da kötü hale getirebilir. Site yeteneklerini bilip  ona göre eklemekte yarar var. 

Sitemiz uyumlu bir şekilde kodlandı ise kodumuz aşağıdaki gibi olmalıdır.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1">
{% endhighlight %}

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/snippets/html/responsive-meta-tag/](https://css-tricks.com/snippets/html/responsive-meta-tag/) 
 - [http://www.quirksmode.org/mobile/metaviewport/](http://www.quirksmode.org/mobile/metaviewport/)
 - [https://developers.google.com/speed/docs/insights/ConfigureViewport?hl=tr](https://developers.google.com/speed/docs/insights/ConfigureViewport?hl=tr)
 - [http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho](http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho)
 - [https://developer.mozilla.org/tr/docs/Web/CSS/@viewport](https://developer.mozilla.org/tr/docs/Web/CSS/@viewport)