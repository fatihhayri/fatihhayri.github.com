---
layout: post
title: Aksak Kolonlara linear-gradient İle Çözüm Bulmak
Date: 2015-04-28 16:41
Category: css
tags: [aksak kolon linear-gradient]
---


Daha önce kolon yüksekliklerini eşitlemek için [Aksak Kolonlar(Faux Column)](https://fatihhayrioglu.com/css-ile-web-sayfasi-olusturma-iii/) yazımda bir çözüm önerisi vardı. 

Bu çözümlere bir tane daha ekliyorum.

[CSS Renk Geçişleri (Gradients)](https://fatihhayrioglu.com/css-renk-gecisleri-gradients/) yazısında renk geçişlerinden bahsetmiştik. **Renk geçişlerini tanımlarken genelde yüzdesel tanımlasak ta aslında piksel'de kullanabiliyoruz.** Bu kullanım bize aksak kolonların çözümünü sağlıyor. Peki renk geçişi diyorsun ama bize tek renkli ardalan renkleri lazım diye sorarsanız. Renk geçişinde ilk rengin bitişi ile diğer renge geçişin olduğu yerleri aynı durma noktası yaparsak ardalan rengi tek renk olur. Örnekten daha iyi anlayacağız. 

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/ZGYqqY/?height=268&theme-id=13521' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Yukarıdaki örnekte görüldüğü gibi sol kolon kesik kalıyor. Bunu düzeltmek için.

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/mJyzzx/?height=268&theme-id=13521' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Dikkat edeceğimiz kod;

{% highlight css %}
background-image linear-gradient(left, #ccc 284px, #fff 284px, #fff 100%)
{% endhighlight %}

Yukarıdaki kodlamada olduğu gibi değeri piksel cinsinden verdiğimiz gibi yüzde cinsinden de verebiliriz.

Diğer yöntemden farkı resim kullanmadan bu işi yapıyor olmamız. Buda bize esneklik sağlıyor. Bu yöntemin tek eksiği belki ie9 ve öncesi için desteğinin olmaması. Eğer müşteri çok ısrar ederse ie8 ve ie9 için resimli diğer yöntemi kullanabiliriz. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://css-snippets.com/gradient-columns/](http://css-snippets.com/gradient-columns/)
 - [http://code.tutsplus.com/tutorials/quick-tip-mimic-equal-columns-with-css3-gradients--net-16310](http://code.tutsplus.com/tutorials/quick-tip-mimic-equal-columns-with-css3-gradients--net-16310)
 - [https://fatihhayrioglu.com/css-ile-web-sayfasi-olusturma-iii/](https://fatihhayrioglu.com/css-ile-web-sayfasi-olusturma-iii/)