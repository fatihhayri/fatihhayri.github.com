---
layout: post
title: CSS İpucu 29 CSS ile Önden Resim Yükleme Teknikleri
Slug: css-ile-onden-resim-yukleme-teknikleri
Date: 2011-01-06 23:31
Category: CSS
tags: [background, önden resim yüklemek, preloading]
---

:hover display:none ile gizlenmiş öğelere atanmış ardaalan resimlerini
tarayıcı yüklemiyor. Bu durum :hover haline geldiğimizde resim
yüklenmeye başlar ve görüntü sonra gelir ve kötü bir görüntü oluşturur.
Bu sorunu çözmek için css sprite tekniğini kullanırız. Benzer bir sorun
ajax ile çalışan bir yapıda sayfa ilk yüklendiğinde yüklenmemiş
alanlarda tanımlı ardalan resimleri içinde geçerlidir. Bu durumda ise
resimleri ön yükleme yapmak önemlidir.

Daha önceki makalemizde bir iki yöntem anlatmıştık.
[http://fatihhayrioglu.com/onden-resimleripreloading-images-yukleme-yontemleri/][]

Şimdi daha basit bir yöntemi daha bilgi dağarcığımıza ekleyelim.

Ajax ile sonradan yüklenen elemanlarımızın ardalanına atadığımız
resimleri önceden yüklemek için mevcut ardalan atanmamış bir elemana bu
ardalan resmini tanımlarız ve konumunuda sayfa dışına vererek(-9999px)
görünmez yaparız. Böylelikle resim yüklenmiş olur ve sonradan yüklenen
alanlar açıldığında görüntü problemi yaşamamış oluruz.

{% highlight html %}
<div class="resimYukle"></div>
{% endhighlight %}

CSS kodumuzda

{% highlight css %}
.resimYukle{
	background:url(/images/bg.gif) -9999px -9999px no-repeat
}
{% endhighlight %}

Bu durum için fazladan bir div açıp onun ardalanına bu resmi
atayabiliridk ama eğer sayfa içinde ardalan tanımı olmayan bir eleman
varsa bunu tanımlayarak fazladan bir divden kurtulmuş oluruz. Bir not bu
kodu css kodumuzun sonuna eklememiz daha mantıklıdır.

{% highlight css %}
.baskaBirEleman{
	background:url(/images/bg.gif) -9999px -9999px no-repeat
}
{% endhighlight %}

Benzer bir kodu :after seçicisi ve content özelliği ile de yapabiliriz.

{% highlight css %}
body:after {
	content: url(img01.png) url(img02.png) url(img03.png) url(img04.png) url(img05.png)
}
{% endhighlight %}

Bu kodu ie7 ve ie6 desteklemiyor maalesef.

Ayrıca CSS3 ile bir elemana birden fazla background tanımıda
yapabiliyoruz bu özellik yardımı ile de yapabiliriz. Tabi tüm
tarayıcılar desteklemediği için beklemek gerekiyor.

## Kaynaklar

-   [http://css-tricks.com/snippets/css/css-only-image-preloading/][]
-   [http://www.velvetblues.com/web-development-blog/the-css-approach-preload-images-without-javascript/][]
-   [http://snipplr.com/view/2122/css-image-preloader/][]
-   [http://www.thecssninja.com/css/even-better-image-preloading-with-css2][]
-   [http://www.maratz.com/blog/archives/2005/06/22/preload-hover-images-in-css/][]

  [http://fatihhayrioglu.com/onden-resimleripreloading-images-yukleme-yontemleri/]: http://fatihhayrioglu.com/onden-resimleripreloading-images-yukleme-yontemleri/
  [http://css-tricks.com/snippets/css/css-only-image-preloading/]: http://css-tricks.com/snippets/css/css-only-image-preloading/
  [http://www.velvetblues.com/web-development-blog/the-css-approach-preload-images-without-javascript/]: http://www.velvetblues.com/web-development-blog/the-css-approach-preload-images-without-javascript/
  [http://snipplr.com/view/2122/css-image-preloader/]: http://snipplr.com/view/2122/css-image-preloader/
  [http://www.thecssninja.com/css/even-better-image-preloading-with-css2]: http://www.thecssninja.com/css/even-better-image-preloading-with-css2
  [http://www.maratz.com/blog/archives/2005/06/22/preload-hover-images-in-css/]: http://www.maratz.com/blog/archives/2005/06/22/preload-hover-images-in-css/
