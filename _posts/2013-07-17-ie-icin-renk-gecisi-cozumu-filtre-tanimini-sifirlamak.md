---
layout: post
title: İE için renk geçişi çözümü filtre tanımını sıfırlamak
Date: 2013-07-17 12:05
Category: CSS
tags: css, css3, renk-geçişi, filtre, hata-ayıklama, sıfırlama
---

CSS3 ile gelen güzel özelliklerden birisi [renk geçişleri](https://fatihhayrioglu.com/css-renk-gecisleri-gradients/). Bu güzel özelliği kullanmamızdaki en büyük engel İE’nin bu özelliği İE 10 sürümünde destekliyor olması. Ancak farklı bir yöntem ile bu desteği İE’nin tüm sürümlerine kazandırabiliyoruz. **filtre tanımı**. filtre tanımı yardımı ile İE için çözüm oluşturabiliyoruz. Tam karşılamasa da desteği sağlaması büyük ölçüde işimizi görüyor.

Uygulamada filtre bazı sorunlar neden oluyor. Bunlardan birisi renk geçişi kullanılan bir tanımın ezilmesi veya sıfırlanması sırasında normal renk geçişini

{% highlight css %}
.deneme{
    background: none
    // veya
    background: #f00;
}
{% endhighlight %}

tanımı sıfırlıyor veya ezebiliyor iken filter’ı sıfırlamak için farklı bir yol izlememiz gerekiyor.

{% highlight css %}
filter: -;
{% endhighlight %}

veya

{% highlight css %}
filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
{% endhighlight %}

İkincisi daha anlaşılır geldi bana.

Genelde bu bazı sorunlara neden oluyor. Renk geçişi tanımlanmış bir öğenin seçili veya :hover gibi farklı durumlarında tek renk tanımı veya transparan ardalan tanımı yapılırken genelde filtre tanımı unutuluyor ve buda İE’de soruna neden oluyor. Aman dikkat.

Sağlıcakla Kalın.

## Kaynaklar

* [https://fatihhayrioglu.com/css-renk-gecisleri-gradients/](https://fatihhayrioglu.com/css-renk-gecisleri-gradients/)
* [http://caniuse.com/#search=gradient](http://caniuse.com/#search=gradient)
* [http://msdn.microsoft.com/en-us/library/ms532997(v=vs.85).aspx](http://msdn.microsoft.com/en-us/library/ms532997(v=vs.85).aspx)
* [http://stackoverflow.com/a/3749340/296373](http://stackoverflow.com/a/3749340/296373)
