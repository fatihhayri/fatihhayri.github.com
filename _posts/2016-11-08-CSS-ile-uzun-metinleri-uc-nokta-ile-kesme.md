---
layout: post
title: CSS ile uzun metinleri üç nokta ile kesme
Date: 2016-11-08 12:13
Category: css
tags: [uzun-metin, üç-nok, kısaltma]
---

> Temmuze 2019'da güncellendi.

[zingat.com](https://www.zingat.com)'un satılık ve kiralık arama sonuç sayfalarını kodlarken her bir kutunun belirli yüksekliği olduğu için gelen başlığın harita açıldığında altında kalan metinlerin üzerine binmesi sorununu haletmek için [Murat](http://twitter.com/muratcorlu)'la bu metni 2 satır ile sınırlandırmalıyız dedik. En güzel çözüm CSS ile webkit-line-clamp yardımı ile bunu yapmaktı. Acaba bu özelliğin desteği ne kadar diye biraz bakınca %92'ye(şu an %98 Temmuz 2019) yakın destek bizi bu kodu kullanmaya itti.

Daha önce uzun metinleri tek satırda sabitlemek için aşağıdaki yöntemi kullanıyordum.

<iframe height='300' scrolling='no' title='KNpXOV' src='//codepen.io/fatihhayri/embed/KNpXOV/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Bu iş için bir mixin yazmak güzel oluyor.

{% highlight css %}
.ucnokta {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
{% endhighlight %}

yazıp, sonra kullanmak istediğimiz yere 

{% highlight scss %}
.baslik {
  .ucnokta;
}
{% endhighlight %}

yazarak işi basitleştirmiş oluyoruz. 

Peki bu işi iki veya daha fazla satır için yapan bir CSS kodu yok mu? Var aşağıda :)

Kod çok basit.

<iframe height='300' scrolling='no' title='MbwOYb' src='//codepen.io/fatihhayri/embed/MbwOYb/?height=300&theme-id=13521&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

`-webkit-line-clamp: 3` tanımı ile kaç satırın görünmesi bu satır ile tanımlıyoruz. Yukarıdaki gibi bu tanımı bir mixin yapıp istediğimiz yerde kullanabiliriz.

Mobilde ve dar alanlarda güzel iş görüyor. 

{% highlight scss %}
// Clamps a block of text to a certain number of lines,
// followed by an ellipsis in Webkit and Blink based browsers
// Reference: http://dropshado.ws/post/1015351370/webkit-line-clamp
@mixin text-clamp($lines: 2, $line-height: false) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $lines;

    // Fallback for non-Webkit browsers
    // (won't show `…` at the end of the block)
    @if $line-height {
        max-height: $line-height * $lines * 1px;
    }
}
{% endhighlight %}


<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/css-line-clamp-1741161855762.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/css-line-clamp-1741161855762.png">
<img src="https://caniuse.bitsofco.de/static/v1/css-line-clamp-1741161855762.jpg" alt="Data on support for the css-line-clamp feature across the major browsers from caniuse.com">
</picture>

## Kaynaklar

 - [http://caniuse.com/#feat=css-line-clamp](http://caniuse.com/#feat=css-line-clamp)
 - [https://css-tricks.com/line-clampin/](https://css-tricks.com/line-clampin/)
 - [http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/](http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/)
 - [http://cssmojo.com/line-clamp_for_non_webkit-based_browsers/](http://cssmojo.com/line-clamp_for_non_webkit-based_browsers/)
 - dropshado.ws/post/1015351370/webkit-line-clamp - dropshado.ws/post/1015351370/webkit-line-clamp