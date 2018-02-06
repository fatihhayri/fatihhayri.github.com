---
layout: post
title: Flex'ın gizli kalmış güzel bir özelliği
Date: 2018-02-05 16:43
Category: CSS
tags: [flex, css3]
---

Yaklaşık bir hafta önce flex hakkında Bursa'da Girişimci Engelliler Derneği'nin davetlisi olarak bir seminere gittim. Seminer çok güzel geçti. Seminer için [Bülent Sakarya](https://twitter.com/bulentsakarya) ve Samet Şahin'e teşekkürler. Seminere katılan arkadaşlara bir şeyler anlatmak için hazırlanırken ben bir şeyler öğrendim. Bu makalede bunları sizlerle paylaşacağım.

<blockquote class="twitter-tweet" data-lang="tr"><p lang="tr" dir="ltr"><a href="https://t.co/pxYirymXug">https://t.co/pxYirymXug</a>&#39;dan Fatih Hayrioğlu CSS Flex anlatıyor. <a href="https://t.co/u8DyNAe3jg">pic.twitter.com/u8DyNAe3jg</a></p>&mdash; Bülent Sakarya (@bulentsakarya) <a href="https://twitter.com/bulentsakarya/status/957234288390561792?ref_src=twsrc%5Etfw">27 Ocak 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Flex'in bize kazandırdığı en güzel özelliklerden birisi de hizalama özellikleri. Burada anlatacağım konu `flex` ile `margin` tanımının `auto` değerinin birlikte kullanımı ile ortaya çıkan süper bir özellik.

![flex ve margin auto](http://fatihhayrioglu.com/images/yatay-flex-auto-ornegi.png)

[zingat.com](https://zingat.com)'dan bir örnek ile bu konuyu anlatmaya başlıyayım. Yukarıda gördüğünüz sonucu normal float ile oluşturmak için bazı değişiklikler yapmak gerekiyor. Örneğin ikonları sahte elemanlarda kullanmak zorunda olmamız gibi. Flexi le bunu yapmanın kolay bir yolu var.

<iframe height='300' scrolling='no' title='Flex ve margin auto' src='//codepen.io/fatihhayri/embed/OQNYyZ/?height=300&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/OQNYyZ/'>Flex ve margin auto</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Kapsayıcı elemana flex tanımı yaptığımızda ögelerin her birini yan yana dizildi. Bizim istediğimiz ise harita (map) ikonu ve kilometre bilgisini sağa tarafa hizalaması. Burada ortaya `margin-left: auto;` ile ikon ve yazıyı sağ tarafa hizalıyoruz. Daha doğru bir tanım ile harita ikonunun sol yanını autoya çekiyoruz.

<iframe height='300' scrolling='no' title='Flex ve margin auto' src='//codepen.io/fatihhayri/embed/GQZaWx/?height=300&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/GQZaWx/'>Flex ve margin auto</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Sonuç istediğimiz gibi. Bunu tek satır css kodu ile yaptık. 

Aynı mantıkla başka bir örnek yapalım. Örneğimizde bir menü yaptığımızı düşünelim. Seminerde twitter menüsünü örnek vermiştim. Örneği burada da paylaşayım.

<iframe height='296' scrolling='no' title='Flex margin auto twitter menü' src='//codepen.io/fatihhayri/embed/qxNdON/?height=296&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/qxNdON/'>Flex margin auto twitter menü</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Kodun can alıcı kısmı

{% highlight css %}
.twitter {
  margin-left: auto;
  margin-right: auto;
}
{% endhighlight %}

kısmıdır. Flex ile sıraladığımız menü elemanlarından twitter sınıfı tanımlı olanı ortada kalan boşlukta ortalamak için sadece iki satır kod yazdık. :)

## Dikey örnekler

Dikeyde benzer örnekler yapabiliriz. Zamanında uğraştığım için iyi biliyorum. livego'da çalışırken sol menü yapımında bu tip bir kod çok ihtiyaç duymuştum. Çok ciddi zamanımı almıştı sol ve sağ kolonlar.

![livego flex ve margin auto](http://fatihhayrioglu.com/images/livegohome.jpg)

Şimdi aynı sonucu elde etmek sadece iki satır kod.

<iframe height='300' scrolling='no' title='YeWXve' src='//codepen.io/fatihhayri/embed/YeWXve/?height=300&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/YeWXve/'>YeWXve</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Menü yüksekliğini ekran yüksekliğine eşitlemek için `height: 100vh` verdik. Yatayda kullandığımız gibi ilgili ögenin (.add-account) margin değerini auto yaptık. Bu sefer alta hizalamak için `margin-top: auto` tanımladık.

Bu yöntemi birçok yerde kullanabiliriz. Süper bir kazanım.

Kalın sağlıcakla.

## Kaynaklar

 - [https://www.sitepoint.com/quick-tip-how-z-index-and-auto-margins-work-in-flexbox/](https://www.sitepoint.com/quick-tip-how-z-index-and-auto-margins-work-in-flexbox/)
 - [https://hackernoon.com/flexbox-s-best-kept-secret-bd3d892826b6](https://hackernoon.com/flexbox-s-best-kept-secret-bd3d892826b6)
 - [https://codepen.io/samserif/pen/KdrQaB?editors=1100](https://codepen.io/samserif/pen/KdrQaB?editors=1100)
 - [https://codepen.io/goerk/pen/uFkny](https://codepen.io/goerk/pen/uFkny)
 - [https://codepen.io/samserif/pen/KdrQaB?editors=1100](https://codepen.io/samserif/pen/KdrQaB?editors=1100)