---
layout: post
title: CSS4 sistem fontu (system-ui) değeri
Date: 2018-04-03 10:20
Category: CSS
tags: [css4, yazı-tipi, system-ui]
image:
  feature: system-ui-degeri.gif
---

Site hızının gittikçe önemini arttırmasıyla birlikte web sitesi geliştiricileri sitelerinin kullandığı her kaynağı iki kere sorgulamaya başladı. Tüketilen her kaynak üzerinde kar/zarar hesabı yapılarak artık web sitelerine ekleniyor. Bu kaynaklardan bir tanesi olan yazı tipi hakkında olacak bu makale.

Yazı tipi seçimi ilk başlarda çok zor bir tercih değildi. 

![Dreamweaver yazı tipi ekleme](https://fatihhayrioglu.com/images/dw_format_text-min.jpg)

Yukarıdaki ekran eskilerden DW'da yazı tipi seçim ekranı. Tanım şu şekildeydi.

{% highlight css %}
font-family: Arial, Helvetica, sans-serif;
{% endhighlight %}

> Burada birincil fontumuz Arial’dir alternatifi Helvatica ve yazı tipi ailesi sans-serif olduğunu belirtiyoruz. Normalde sadece Arial yazmamız da yeterlidir, ancak kullanıcının bilgisayarında bu yazı tipinin olmaması durumu düşünülerek alternatif yazı tipi ve yazı tipi ailesi yazılmıştır. [https://fatihhayrioglu.com/css-ve-tipografi/](https://fatihhayrioglu.com/css-ve-tipografi/)

Aynı yazıda farklı yazı tiplerini kullanmak için Adobe Flash yardımıyla sFIR yöntemini kullanabilirsiniz diye bir paragrafta var. Evet o zamanlar farklı yazı tipini kullanmak için genelde resim, sFIR veya cufon gibi dolambaçlı yollar kullanırdık.

Sonra [font-face](https://fatihhayrioglu.com/woff2-ve-font-face-tanimini-iki-satira-indirmek/) tanımı çıktı ve artık kullanıcının bilgisayarına istediğimiz yazı tipini ekleyebiliyoruz. Sonrasında kullanılan yazı tipi çeşitleri artmaya başladı ve web için yazı tipi çeşidi olan woff yazı tipi ve sonrasında ikinci sürümü olan woff2 çıktı. woff2 ile birlikte özel yazı tipleri daha optimize. Ama bu bile yetmeyebiliyor.

Makalenin başında da yazdığım gibi her kaynak kullanılırken iki kere düşünülüyor diye. İşte bir çok popüler site GitHub, Wordpress, Bootstrap, Medium, Ghost gibi siteler özel yazı tipi kullanımını sorguladı ve sistem yazı tipi dediğimiz kullanıcının **aracında** kullandığı yazı tiplerine yöneldi. Dikkat ediyorsanız bilgisayarındaki demedim, çünkü zaman değişti ve bir çok araçtan internete erişim var artık. Yazımın başında verdiğim 

{% highlight css %}
font-family: Arial, Helvetica, sans-serif;
{% endhighlight %}

Kodu artık aşağıdaki hali aldı.

{% highlight css %}
font-family: -apple-system,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
Oxygen-Sans,
Ubuntu,
Cantarell,
"Helvetica Neue",
sans-serif;
{% endhighlight %}

Evet liste bayağı uzadı. Artık sadece bilgisayar değil farklı araçlardan internete erişebiliyoruz. Sonuç olarak her araç için bir sistem yazı tipi var ve onu ekleyince de yukarıdaki kod ortaya çıkıyor.

Sonra standart geliştiriciler bu işe bir çözüm bulalım dedi ve genel bir tanım yazsak ve her araç bu tanıma göre kendi sisteminde olan yazı tipini gösterse diye bir çözüm atıldı ortaya ve CSS4 ile birlikte standartlaştırılmaya başlandı. Son olarak karar verilen standart;

{% highlight css %}
font-family: system-ui;
{% endhighlight %}

Kısa ve net. Süper

Tarayıcı desteği konusunda gayet güzel yerde Türkiye'de %88 civarında. Windows üzerinden Edge ve Firefox'a (sorunları var) da tam desteği gelince kullanılabilir.

<p class="ciu_embed" data-feature="font-family-system-ui" data-periods="future_1,current,past_1,past_2">  <a href="http://caniuse.com/#feat=font-family-system-ui">Can I Use font-family-system-ui?</a> Data on support for the font-family-system-ui feature across the major browsers from caniuse.com. </p>

## Sonuç 

system-ui hakkında [bir](https://infinnie.github.io/blog/2017/systemui.html) [iki](https://github.com/twbs/bootstrap/pull/22377) tane sorun olduğu konusunda yazı okudum. Çoklu dil desteği olan sitelerde sıkıntılar çıktığından bahsediyor. Güzel bir özellik umarım yakın zamanda desteği genişlerde kullanırız.

Yazı tipi ile alakalı güzel özellikler çıkıyor. **font-display**, **değişken fontlar** gibi güzel gelişmeler var. Umarım tüm yazı tipi ihtiyaçlarımızı  başka birşeye ihtiyaç kalmadan css ile çözüm sağlarız.

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/snippets/css/system-font-stack/](https://css-tricks.com/snippets/css/system-font-stack/)
 - [https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/)
 - [https://booking.design/implementing-system-fonts-on-booking-com-a-lesson-learned-bdc984df627f](https://booking.design/implementing-system-fonts-on-booking-com-a-lesson-learned-bdc984df627f)
 - [https://github.com/postcss/autoprefixer/issues/762](https://github.com/postcss/autoprefixer/issues/762)
 - [https://bitsofco.de/the-new-system-font-stack/](https://bitsofco.de/the-new-system-font-stack/)
 - [https://www.j-david.net/2017/01/the-system-ui-font.html](https://www.j-david.net/2017/01/the-system-ui-font.html)
 - [https://drafts.csswg.org/css-fonts-4/#system-ui-def](https://drafts.csswg.org/css-fonts-4/#system-ui-def)
 - [https://flaviocopes.com/css-system-fonts/](https://flaviocopes.com/css-system-fonts/)
 - [https://furbo.org/2018/03/28/system-fonts-in-css/](https://furbo.org/2018/03/28/system-fonts-in-css/)
