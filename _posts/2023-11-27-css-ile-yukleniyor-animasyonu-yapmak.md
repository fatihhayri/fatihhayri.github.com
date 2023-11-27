---
layout: post
title: CSS ile yükleniyor animasyonu yapmak
description: CSS ile yükleniyor animasyonu yapmak
lang: tr_TR
Date: 2023-11-27 10:00
Category: CSS
tags: [loading, yükleniyor, animasyon]
image:
  feature: loading-tr.png
---

CSS ile yapılabileceklerimiz her geçen gün artarken burada sizlere bazılarını sıralamak isterim. Bu yazımdan sizlere CSS ile yapılabilecek yükleniyor animasyonlarını anlatmaya çalışacağım. Burada anlattıklarım "devede kulak" bir çok sitede daha fazlasını bulabilirsiniz. [codepen'de bir loading araması](https://codepen.io/search/pens?q=Loading) ile birçok örneğe erişebilirsiniz. Ayrıca hazır css kodları sunan sitelerden de yararlanabiliriz.  

 - [https://css-loaders.com/](https://css-loaders.com/)
 - [https://loading.io/css/](https://loading.io/css/)
 - [https://cssloaders.github.io/](https://cssloaders.github.io/)
 - [https://freefrontend.com/css-spinners/](https://freefrontend.com/css-spinners/)

Bunlar benim konuyu araştırırken bulduklarım. Burada anlatmamın sebebi; tasarım olarak gelen yükleniyor animasyonları buradaki örneklerden farklı olabilir biz temel kodları anlarsak birçoğunu CSS kullanarak yapabiliriz. 

Peki hazır resim dosyaları veya SVG ile de  biz bunları yapabiliriz niye CSS ile yapıyoruz?

CSS ile yapmanın bize esneklik ve kolay değiştirebilme imkanı sağlar. Ben olabildiğince CSS ile çözme taraftarıyım. 

## Dairesel yükleniyor örneği

<iframe height="250" style="width: 100%;" scrolling="no" title="CSS Spinner " src="https://codepen.io/fatihhayri/embed/bGzvWKG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/bGzvWKG">
  CSS Spinner </a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Burada içi boş bir kutuyu `border-radius` ile yuvarlayıp kenarlarını saydam verip bir kenarını beyaz yaparak bir şekil elde ederiz. Bunu basit bir animasyonla `transform: rotate(360deg)` döndürdüğümüzde işlem tamamdır.  

## Bar yükleniyor örneği

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Spinner " src="https://codepen.io/fatihhayri/embed/ZEwxKjL?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/ZEwxKjL">
  CSS Spinner </a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Bu tip birden fazla eleman(3 adet bar) çözümlerin için HTML olarak eklemekte bir çözüm. ancak buradaki örnekte `background` özelliği üç eleman eklenmiş ve bu elemanların boyutlarıyla oynanarak animasyon elde edilmiştir.

## Nokta yükleniyor örneği

<iframe height="180" style="width: 100%;" scrolling="no" title="CSS Bar" src="https://codepen.io/fatihhayri/embed/dyamZvL?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/dyamZvL">
  CSS Bar</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Bu örnekte biraz `background`'a atanan `radial-gradient` ve `clip-path` yardımıyla şekil oluşturulmuş. Animasyonu da `clip-path: inset(0 -34% 0 0)` değiri değiştirilerek oluşturulmuştur.

## İlerleme çubuğu örneği

<iframe height="180" style="width: 100%;" scrolling="no" title="CSS Bar" src="https://codepen.io/fatihhayri/embed/KKJoyNm?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/KKJoyNm">
  CSS Bar</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yine bir background ile oluşturulmuş bir ardalan ve iki adet mor renkli çubuk ile şekil oluşturulmuş. Animasyon oluşturulan bu iki elmanın konumu değiştirilerek `background-position: 250% 0,-150% 0` yapılmış.

## progress elementi ile 

<iframe height="180" style="width: 100%;" scrolling="no" title="CSS Bar" src="https://codepen.io/fatihhayri/embed/ZEwxKNy?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/ZEwxKNy">
  CSS Bar</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki örneklerde HTML olarak hep `<div class="yukleniyor"></div>` diye bir elemanı kullanılarak üretildi. Burada ise `<progress />` elemanı kullanılarak oluşturuldu.  Çok stiline dokunmamıza izin vermiyor standartlar. Sadece `accent-color` tanımıyla sağa sola hareket eden kısmın rengini değiştirebiliyoruz. Bu elemanını CSS ile erişimine olanak sağlansa hem mantıksal bir öge olmuş olur hem de işler daha kolay olur. Belki ilerde geliştirirler.

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/single-element-loaders-the-spinner/](https://css-tricks.com/single-element-loaders-the-spinner/)
 - [https://clba.nl/experiments/css-spinner/](https://clba.nl/experiments/css-spinner/)
 - [https://kilianvalkhof.com/2010/css-html/css3-loading-spinners-without-images/](https://kilianvalkhof.com/2010/css-html/css3-loading-spinners-without-images/)
 - [https://dev.to/dcodeyt/how-to-create-a-css-only-loading-spinner-5fh5](https://dev.to/dcodeyt/how-to-create-a-css-only-loading-spinner-5fh5)
 - [https://www.freecodecamp.org/news/how-to-create-a-css-only-loader/](https://www.freecodecamp.org/news/how-to-create-a-css-only-loader/)
 - [https://medium.com/nerd-for-tech/beautiful-spinner-in-css-bce7a348f50f](https://medium.com/nerd-for-tech/beautiful-spinner-in-css-bce7a348f50f)
 - [https://codepen.io/sdelaney/pen/wWdxPe](https://codepen.io/sdelaney/pen/wWdxPe)
 - [https://codepen.io/WebsiteMentor/pen/bGjNOVY](https://codepen.io/WebsiteMentor/pen/bGjNOVY)
 - [https://codepen.io/benjamin-pike/pen/poaQpRQ](https://codepen.io/benjamin-pike/pen/poaQpRQ) SVG destekli
 - [https://codepen.io/avabarok/pen/BaYPJaG](https://codepen.io/avabarok/pen/BaYPJaG)
 - [https://codepen.io/wheatup/pen/qBRXzGZ](https://codepen.io/wheatup/pen/qBRXzGZ) Yenilikçi
 - [https://codepen.io/TKS31/pen/bGVaavW](https://codepen.io/TKS31/pen/bGVaavW)
 - [https://codepen.io/DannyJoris/pen/mzPREe](https://codepen.io/DannyJoris/pen/mzPREe)
 - [https://codepen.io/SugarLife/pen/xzwayr](https://codepen.io/SugarLife/pen/xzwayr)
 - https://web.dev/articles/building/a-loading-bar-component?hl=en
