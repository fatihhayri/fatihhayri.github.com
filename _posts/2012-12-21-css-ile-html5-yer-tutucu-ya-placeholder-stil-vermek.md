---
layout: post
title: CSS ile HTML5 Yer Tutucu’ya(placeholder) Stil Vermek
Slug: css-ile-html5-yer-tutucu-ya-placeholder-stil-vermek
Date: 2012-12-21 11:37
Category: CSS, HTML5
tags: [css, placeholder, yer-tutucu]
---

HTML5 ile birlikte gelen form elemanlarına yer tutucu(placeholder) ekleme özelliğine CSS3 ile stil verebiliyoruz.

![Firefox Placeholder](/images/firefox_placeholder.gif)

Yer Tutucu(Placeholder); Formların input veya textarea alanlarında tanımlayıcı bilgileri gösterdiğimiz yapılardır.  Firefox’da sağ üstte arama motoru alanında hangi arama motorunda arama yaptığımızda bilgi veren bir yazı bir yer tutucudur. Kullanıcı bu alana odaklandığında veya bir şeyler yazdığında bu yazı kaybolur ve kullanıcının yazdığı metin görünür.

Yer tutucular ilk başta kullanıcının odaklanması ile kaybolurken, Chrome’un öncülüğünde kullanıcı bir şeyler yazdıktan sonra kaybolmaktadır.

Yer tutucunun en büyük sorunu İnternet Explorer 10’da desteklenmesi. ie 8-9 desteklemiyor.

Daha önce ve şimdilerde desteklemeyen tarayıcılar için bu işlemi javascript ile yaparken HTML5 ile birlikte artık placeholder HTML5 özelliği ile direk HTML ile kullanabiliyoruz.

{% highlight html %}
<input type="text" name="arama" placeholder="Arama Metnini Giriniz" />
{% endhighlight %}

Kodu ile bu yapıyı uygulayabiliyoruz. Yer tutucuların stillerine müdahale edebiliyoruz.

{% highlight css %}
::-webkit-input-placeholder {}
:-moz-placeholder {}
:-ms-input-placeholder {}
{% endhighlight %}

Burada dikkat etmemiz gereken kısım -webkit tanımının başında iki adet iki nokta üst üste olması.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/iJGwq?type=css&amp;height=250" id="cp_embed_hgplm"></iframe>

Yer tutucu stiline tanımlana bilen özellikler ve tarayıcıların desteğini gösteren aşağıdaki tablo önemli

![Placeholder CSS Özelliği Destekleme Tablosu](/images/placeholder_tablosu.gif)

kaynak:[http://blog.ajcw.com/](http://blog.ajcw.com/)

## Kaynaklar

- [http://blog.ajcw.com/2011/02/styling-the-html5-placeholder/](http://blog.ajcw.com/2011/02/styling-the-html5-placeholder/)
- [http://stackoverflow.com/questions/2610497/change-an-inputs-html5-placeholder-color-with-css](http://stackoverflow.com/questions/2610497/change-an-inputs-html5-placeholder-color-with-css)
- [http://www.yunusbassahan.com/blog/html5/html5-placeholder-ozelligi.html](http://www.yunusbassahan.com/blog/html5/html5-placeholder-ozelligi.html)
