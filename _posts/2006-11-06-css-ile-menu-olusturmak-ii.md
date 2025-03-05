---
layout: post
title: CSS ile Menü Yapmak II - Yatay Menüler
Slug: css-ile-menu-olusturmak-ii
Date: 2006-11-06 11:47
Category: CSS, Web Standartları, XHTML
tags: [CSS, link, menü, örnek, Web Standartları, XHTML, yatay-menüler]
---

## Yatay Menüler

[Bir önceki makalede][] dikey menüye bir örnek yapmıştık. şimdi de yatay
menülere bir örnek vereceğiz. Önceki makalede bahsettiğimiz gibi yatay
ve dikey menüler belli bir yere kadar kodlaması aynıdır. Biz aynı olan
kısmı geçip sonrasına devam ediyoruz.

Kaldığımız yerden devam edersek. Linkleri yatay olarak dizmek için
**display:inline** özelliğini kullanıyoruz:

{% highlight css %}
ul.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul.menu li {
	display: inline;
}
{% endhighlight %}

![][100]

Linklerin altındaki çizgileri kaldırıyoruz:

{% highlight css %}
ul.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul.menu li {
	display: inline;
}

ul.menu li a {
	text-decoration: none;
}
{% endhighlight %}

![][1]

Linkler arasına biraz boşluk veriyoruz:

{% highlight css %}
ul.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul.menu li {
	display: inline;
}

ul.menu li a {
    text-decoration: none;
    padding: .2em 1em;
}
{% endhighlight %}

![][2]

Menüyü biraz renklendiriyoruz:

{% highlight css %}
ul.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul.menu li {
	display: inline;
}

ul.menu li a {
  text-decoration: none;
  padding: .2em 1em;
  color: #1B1B1B;
  background-color: #E2E2E2;
}
{% endhighlight %}

![][3]

Son olarakta rollover efekti vermek için **a:hover** özelliğine renk
atıyoruz:

{% highlight css %}
ul.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
ul.menu li {
	display: inline;
}
ul.menu li a {
    text-decoration: none;
    padding: .2em 1em;
    color: #1B1B1B;
    background-color: #E2E2E2;
}
ul.menu li a:hover
{
background-color: #999;
}
{% endhighlight %}

Sonuç işte:

<iframe height="300" style="width: 100%;" scrolling="no" title="menü örneği" src="https://codepen.io/fatihhayri/embed/KwKmNpm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/KwKmNpm">
  menü örneği</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Biz burada temel menü örnekleri verdik. Mesele işin yapılışını öğrenmek.
Daha ayrıntılı ve güzel örnekler internette bir çok yerde mevcut. Gerek
aşağıda verdiğimiz Kaynaklar kısmında ve gerekse İnternette aratarak bir
çok menüye ulaşabilrisiniz.

## Kaynaklar

-   http://css.maxdesign.com.au/
-   [http://www.cssplay.co.uk/menus/index.html][]
-   [http://www.alvit.de/handbook/#navmenus][]
-   [http://exploding-boy.com/images/EBmenus/menus.html][]

  [Bir önceki makalede]: http://fatihhayrioglu.com/?p=209
  [100]: /images/menu_resim1.gif
  [1]: /images/menu_resim2.gif
  [2]: /images/menu_resim3.gif
  [3]: /images/menu_resim4.gif
  [http://www.cssplay.co.uk/menus/index.html]: http://www.cssplay.co.uk/menus/index.html
  [http://www.alvit.de/handbook/#navmenus]: http://www.alvit.de/handbook/#navmenus
  [http://exploding-boy.com/images/EBmenus/menus.html]: http://exploding-boy.com/images/EBmenus/menus.html
