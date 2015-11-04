---
layout: post
title: CSS İpucu 21&#58; CSS ile Seçilen Metinlerin Rengini Değiştirmek
Slug: css-ile-secilen-metinlerin-rengini-degistirmek
Date: 2009-06-01 16:33
Category: CSS, XHTML
tags: css3, Firefox, Google-Checkout, internet explorer, Opera, safari, seçili-metin, WebKit
---

![metin_secme_rengi][]

[css-tricks.com][] sitesine her girdiğimde metinleri seçince çok hoş bir görüntü ile karşılaşıyorum. Bence çok
güzel. Belkide standart renklerden bıktığım için farklı renkler bana hoş
geliyor. Metinleri seçince ardalan rengini ve metin rengini
değiştirebilmek çok güzel bence. Özelliğin tek kötü yanı Internet
Explorer'un(8. sürüm dahil) desteğinin söz konusu olmaması.

Kodlama çok basit

{% highlight css %}
::-moz-selection {
    background:#c00;
    color:#fff;
}
::selection {
    background:#c00;
    color:#fff;
}
{% endhighlight %}


Kodlamanın birinci kısmı(**::-moz-selection**) mozilla tabanlı yani
Firefox için ikinci kısmı ise normal CSS 3 ile birlikte gelen koddur.
Webkit tabanlı tarayıcılar ve Opera 9.5 bu kodu destekliyor.

Ayrıca diğer seçicilerede bunu uygulayabiliyoruz. Bağlantılar için
farklı bir renk tanımlayalım mesela

{% highlight css %}
a::-moz-selection {
    background:#1259C7;
    color:#fff;
}

a::selection {
    background:#1259C7;
    color:#fff;
}
{% endhighlight %}

Örnek olarak bu sitede herhangi bir metni seçince göreceksiniz.

Internet Explore desteklemiyor. Bunun haricinde Firefox 2, Safari, Opera
9.5 ve Google Chrome destekliyor.

## Kaynaklar

-   [http://www.quirksmode.org/css/selection.html][]
-   [http://css-tricks.com/overriding-the-default-text-selection-color-with-css/][]
-   [http://www.w3.org/TR/css3-selectors/][]

  [metin_secme_rengi]: /images/metin_secme_rengi-300x110.gif
  [css-tricks.com]: http://css-tricks.com "css-tricks.com"
  [http://www.quirksmode.org/css/selection.html]: http://www.quirksmode.org/css/selection.html
  [http://css-tricks.com/overriding-the-default-text-selection-color-with-css/]: http://css-tricks.com/overriding-the-default-text-selection-color-with-css/
  [http://www.w3.org/TR/css3-selectors/]: http://www.w3.org/TR/css3-selectors/
