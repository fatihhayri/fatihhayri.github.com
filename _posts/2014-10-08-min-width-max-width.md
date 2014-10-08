---
layout: post
title: min-width, max-width
Date: 2014-10-08 14:55
Category: css
tags: min-width, max-width
---

Bu özellikler blok-level ve yerine konulabilir element(örneğin resim) içerik alanının asgari / azami genişliğini tanımlar. **max-width** margin, padding ve kenarlıkları içermez.

**width** değeri daha geniş olsa bile **max-width** değerini aşamaz. Bu ilginç bir kuraldır. Ancak **min-width** değeri eğer **max-width** değerinden büyükse bu değeri uygular, yani **min-width** değeri baskındır.

**min-width** ve **min-height** element genişliğinin belirli bir aralıkta olması için beraber kullanılır.

## max-width ve width ilişkisi

**max-width** ve **width** aynı elemente ayı değerlerde uygulanmamalıdır, birisi diğerine baskın olur. Örneğin **width** değeri **150px** ve **max-width** değeri **60px** olarak atanmışsa

{% highlight css %}
.alan{
    max-width: 60px;
    width:150px;
}
{% endhighlight %}

Tanımında **width** tanımı anlamsız kalır. Şöyle bir kullanım ise mantıklıdır.

{% highlight css %}
.alan{
    max-width: 120px;
    width:80%;
}
{% endhighlight %}

Genişliği en fazla **120px** olan bir elemanımız var. Elemanımızın genişliği kapsayıcı elemanın % 80’i kadardır.

## Uyumlu(Responsive) resim ve max-width

Esnek bir resim boyutu sağlamak için **max-width** değerini %100 ve **height:auto** tanımlamak gerekir. 

{% highlight css %}
img {
    max-width: 100%;
    height: auto;
}
{% endhighlight %}

kodu tüm uyumlu web kodlarında mevcuttur.

## min-width ipucu

Mesela bir site genişliğini yüzde olarak vermek istiyoruz ama belli genişlikten daha küçük olması durumunda içeriğin büzülmesini istemiyoruz.

{% highlight css %}
.ana-kapsayici {
    width:90%;
    min-width:600px;
}
{% endhighlight %}

tanımı bu işimizi görür. Zamanında bunun için javascript kodu yazardık. Hey gidi günler.

Uyumlu web kodlarken **max-width** özelliğinin çok kullanışlı tarafından yararlanıyoruz.

## Kaynaklar

 - [http://www.sitepoint.com/web-foundations/max-width-css-property/](http://www.sitepoint.com/web-foundations/max-width-css-property/)
 - [http://css-tricks.com/almanac/properties/m/max-width/](http://www.sitepoint.com/web-foundations/max-width-css-property/)
 - [http://www.impressivewebs.com/min-max-width-height-css/](http://www.impressivewebs.com/min-max-width-height-css/)
 - [http://iversendesign.com/min-max-width-css-properties/](http://www.impressivewebs.com/min-max-width-height-css/)
 - [http://practice.typekit.com/reference/the-magic-of-max-width/](http://practice.typekit.com/reference/the-magic-of-max-width/)
 - [http://learnlayout.com/max-width.html](http://learnlayout.com/max-width.html)
 - [http://friendlybit.com/css/min-width-for-ie-revisited/](http://friendlybit.com/css/min-width-for-ie-revisited/)
