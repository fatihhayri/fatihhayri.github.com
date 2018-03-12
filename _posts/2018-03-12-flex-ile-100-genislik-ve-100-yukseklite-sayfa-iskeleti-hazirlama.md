---
layout: post
title: Flex ile  100% Genişlik ve 100% Yükseklikte Sayfa İskeleti Hazırlama
Date: 2018-03-12 14:20
Category: CSS
tags: [css, flex, 3-kolonlu]
image:
  feature: yuzde-yuz-site.gif
---

Daha önce bu konuda bir makale yazmıştım. [100% Genişlik ve 100% Yükseklite Sayfa İskeleti Hazırlama](http://fatihhayrioglu.com/100-genislik-ve-100-yukseklite-sayfa-iskeleti-hazirlama/) bağlantısını tıklayarak makaleye erişebilirsiniz. Aynı yapıyı flex ile yapsam nasıl olur bir bakalım.

Bu yapının bize sağladıklarını listelersek.

 - Esnek iç alan ve sabit yan kolonlarımız var
 - Eşit kolon yüksekliğimiz var
 - Sticky footer özelliği var

Flex ile bu işi yapalım. 

HTML kodu;

{% highlight html %}
<header>Üst alan</header>
<div class="kapsayici">
  <main class="iceri-alani">There are many variations of passages of Lorem Ipsum available, but the majority...
  </main>
  <nav class="menu">Sol Menü</nav>
  <aside class="reklam">Sağ alan</aside>
</div>
<footer>Alt Alan</footer>
{% endhighlight %}

[Flex ile sayfa dibine yapışık alt alanlar (sticky footer) yapmak](http://fatihhayrioglu.com/flex-ile-sayfa-dibine-yapisik-alt-alanlar-sticky-footer-yapmak/) yazısında gördüğümüz gibi orta alanın tam sayfayı kaplaması ve alt alanın dibe yapışması için:

{% highlight css %}
body {
  display: flex;
  margin: 0;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
}

.icerik-alani-kapsayici {
  display: flex;
  flex: 1;
}
{% endhighlight %}

Tanımlarını yapıyoruz. 

Menü ve reklam alanlarını eşit kolonlu yapmak ve menü kısmını sol tarafa koymak için:

{% highlight css %}
.icerik-alani {
  flex: 1;
}

.menu, .reklam {
  flex: 0 0 12em;
}

.menu {
  order: -1;
}
{% endhighlight %}

Uyumlu web kısmını ve mobili önceliklendirdiğimiz de şöyle bir kod ortaya çıkıyor.

{% highlight css %}
.kapsayici {
		display: flex;
 	flex: 1 0 auto;
		flex-direction: column;
}

.menu {
 	order: -1;
 	background-color: #449fdc;
}

@media (min-width: 768px) {
  .kapsayici {
  	flex-direction: row;
  }
  .iceri-alani {
    flex: 1;
    padding: 20px;
    margin: 0;
  }
  .menu, .reklam {
    flex: 0 0 12em;
  }
}
{% endhighlight %}

<iframe height='365' scrolling='no' title='Esnek yapılı 3 kolonlu web sayfası' src='//codepen.io/fatihhayri/embed/qodLVJ/?height=365&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/qodLVJ/'>Esnek yapılı 3 kolonlu web sayfası</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Sonuç

Eski koda göre flex ile kodladığımız sayfanın eskiye göre çok fazla avantajı var.

 - Daha az kod
 - Daha sade kod
 - Uyumlu web desteği ve mobil önceliği
 - SEO açısından daha avantajlı kod

Kalın sağlıcakla.

## Kaynaklar

 - [https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
 - [https://codepen.io/takeradi/pen/MyYqKX](https://codepen.io/takeradi/pen/MyYqKX)
 - [http://w3bits.com/flexbox-holy-grail-layout/](http://w3bits.com/flexbox-holy-grail-layout/)