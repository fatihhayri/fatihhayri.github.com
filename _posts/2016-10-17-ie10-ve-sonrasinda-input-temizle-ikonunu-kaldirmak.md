---
layout: post
title: IE10 ve sonrasında input temizle ikonunu kaldırmak
Date: 2016-10-17 11:42
Category: css
tags: [ie, düzenleme]
---

Uzun süredir İnternet Explorer için düzeltme yazmamıştım. Ne güzel dünya. Gerçi bu bir düzeltme midir bilemedim.

Uzatmadan hemen sorunu ve çözümü yazayım.

**Sorun**: İnternet Explorer 10 ve üzeri sürümlerinde metin girdi alanlarında (input text) alanlarına kullanıcı bir şeyler yazınca otomatik olarak input'un sağında silmek için bir X butonu çıkarıyor. Tabi tasarımcı arkada bu alana bir ikon koyunca üst üste biniyor. 

![ie10 kapa](https://fatihhayrioglu.com/images/ie10-kapa-ikonu-sorunu.png)

**Çözüm**: Google'da bir arama yap ve stackoverflow'da gelen sonuç senin çözümündür :)


{% highlight css %}
input::-ms-clear {
  display: none;
}
{% endhighlight %}

Birde şifre girdi alanlarında (input - password) şifreyi göster ikonu çıkıyor onu engellemek içinde

{% highlight css %}
input::-ms-reveal {
  display: none;
}
{% endhighlight %}

kodu yeterliymiş.

Kalın sağlıcakla.

## Kaynak

 - [http://stackoverflow.com/questions/14007655/remove-ie10s-clear-field-x-button-on-certain-inputs](http://stackoverflow.com/questions/14007655/remove-ie10s-clear-field-x-button-on-certain-inputs)