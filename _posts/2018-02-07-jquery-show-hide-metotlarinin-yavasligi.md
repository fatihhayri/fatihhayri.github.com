---
layout: post
title: jQuery show(), hide() metotlarının yavaşlığı
Date: 2018-02-05 16:43
Category: Javascript
tags: [javascript, show, hide, hidden]
---

hide() metodunun yavaşlığı ile ilgili daha önce gördüğü test'te 25 kat daha yavaş diye bir ibare geçiyordu. O testin adresini bulamadım ama benzer testler var bu konuda [bu testte](https://jsperf.com/vanilla-js-v-jquery-hide/3) %98 daha yavaş diyor.

Şimdi bir konuda arama yaparken [Paul Irish'in yazdığı yoruma](https://github.com/jquery/jquery.com/issues/88#issuecomment-72400007) denk geldim.

Böyle küçük bir kod da bile bu kadar ciddi bir performans sorunu yaratıyorsa jQuery kullanıp kullanmayacağımızı cidden düşünülmeliyiz. 

hide() metodunun yavaşlığı konusuna bakarken [Can Duruk'un Quaro](https://www.quora.com/What-are-the-speed-differences-between-jQuery-hide-show-and-addClass-removeClass)'da yazdığı yazıdan anlaşılıyor ki tanımlanan elemanın önceki durumunu data özniteliğinde tuttuğu için sorun oluyor. Seçici eğer çok fazla elemanı etkliyorsa ciddi performans sorununa neden oluyor.

jQuery 3. sürümünde bu durumu çözmüş. Bizim gibi eski sürüm kullanan ve güncelleme maliyeti yüzünden sürümü güncellemeyenler için normal javascript çözüm oluşturmak mantıklı geldi bana.

Basit bir eleman gizle göster işini jQuery ile aşağıdaki gib yapıyoruz.

{% highlight javascript %}
// elemanı gizle
$element.hide();

// elemanı göster
$element.show();
{% endhighlight %}

Basit kullanımı hoş, ama performans kısmı yukarıdaki sebeplerden sıkıntılı.

Peki biz bu işi nasıl yaparız. Bu işi yapmanın birçok yolu var. İster bir CSS sınıfı tanımlayıp, sınıfı kaldırıp ekleyerek yapabilirsiniz. İsterseniz elemanın `style.display` özelliğini tanımlayıp yapabilirsiniz.


İsterseniz HTML5 `hidden` özniteliğini ekleyip çıkararak yapabilirisiniz.

HTML5 `hidden` özniteliği desteği %96 olarak görünüyor. 

{% highlight javascript %}
element.setAttribute('hidden', '');
{% endhighlight %}

> Javascript ile bir elemanın başlangıç değerini atamak için boş bir string'e eşitlemek gerekiyor.

Göstermek içinde `hidden` özniteliğini kaldırmak yeterli oluyor.

{% highlight javascript %}
element.removeAttribute('hidden');
{% endhighlight %}

Tabi bir elemanda bu özniteliğin olup olmadığını bilmemiz gerekiyor ki ona göre kaldıralım. Oda basit;

{% highlight javascript %}
element.hasAttribute('hidden');
{% endhighlight %}

Bu kadar basit.

Kalın sağlıcakla.

## Kaynaklar

 - [https://caniuse.com/#feat=hidden](https://caniuse.com/#feat=hidden)
 - [https://www.quora.com/What-are-the-speed-differences-between-jQuery-hide-show-and-addClass-removeClass](https://www.quora.com/What-are-the-speed-differences-between-jQuery-hide-show-and-addClass-removeClass)
 - [https://www.learningjquery.com/2010/05/now-you-see-me-showhide-performance](https://www.learningjquery.com/2010/05/now-you-see-me-showhide-performance)
 - http://www.davetech.com/blog/high-performance-jquery
 - [https://github.com/jquery/jquery/issues/2057](https://github.com/jquery/jquery/issues/2057)
 - [https://github.com/jquery/jquery.com/issues/88#issuecomment-72400007](https://github.com/jquery/jquery.com/issues/88#issuecomment-72400007)
 - [https://github.com/easydigitaldownloads/easy-digital-downloads/issues/3065](https://github.com/easydigitaldownloads/easy-digital-downloads/issues/3065)
 - [https://jsperf.com/vanilla-js-v-jquery-hide/3](https://jsperf.com/vanilla-js-v-jquery-hide/3)