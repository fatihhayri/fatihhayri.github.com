---
layout: post
title: Bootstrap Izgara (Grid) Sistemi - 2
Date: 2016-05-20 18:48
Category: css
tags: bootstrap ızgara-sistemi sayfa-planı
---

[İlk makalede](/bootstrap-izgara-Grid-sistemi-1/) genel ızgara yapısı ve bootstrap ızgara yapısının ana elemanlarından bahsettim. Bu makalede bootstrap ızgara yapısının detaylarına değineceğim.


## Farklı yükseklikte kutular için satır yapısını koruma

Kutular `float:left` ile yan yana dizildiğinde kutulardan birinin yüksekliği fazla ise satır yapısı bozulur. Aşağıdaki örneği büyük pencere açınız.

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/KzaXNw/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

Görüldüğü gibi yüksekliği fazla olan 2. kutu satır dizilimini bozuyor. Bootstrap'in bunun için çözümü çok kolay.

{% highlight html %}
<div class="clearfix visible-md-block"></div>
{% endhighlight %}

Yukarıdaki kod bloğunu kodumuza eklediğimizde satır yapımız korunacaktır. `visible-md-block` kısmı hangi ekran boyutunda bu satırın işlevsel hale geleceğini gösterir. 

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/ONxrZL/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

## İç içe kolon kullanımı

Bootstrap ızgara yapısı iç içe kolon kullanımını destekler. Genelde sitelerimiz tek kolonlu yapılarından oluşmaz. İç içe kolonların olduğu daha karışık planlardan oluşur. Bu durumda nasıl bir yol izlemeliyiz?

<iframe height='226' scrolling='no' src='//codepen.io/fatihhayri/embed/MyrdZO/?height=226&theme-id=13521&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Yukarıdaki örnekte görüldüğü gibi iç içe kullanımda aynı ızgara elemanları kullanılıyor. Sadece daha önce `container` tanımı yapıldığı için tekrar yapılmıyor. İçerideki kolon tanımına başlarken direk `row` tanımı ile başlıyoruz.

## Kolonları denkleştirme (Offsetting)

Bootstrap'in `.col-md-offset-*` sınıflarını kullanarak kolonları sağa doğru atabiliriz. Izgara yapısından kolonları soldan hizalamak veya denkleştirmek için margin kullanmak yerine  `.col-md-offset-*` sınıfını kullanırız. 

<iframe height='130' scrolling='no' src='//codepen.io/fatihhayri/embed/GZybKo/?height=130&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Yukarıdaki örnekte görüldüğü gibi ikinci satırdaki kolon soldan 4 kolonluk sağa doğru atıldı. Bunun için `col-sm-offset-4` kullandık. 

## Kolon sıralama

Uyumlu web uygulamalarında can sıkan durumlardan bir tanesi büyük ekranlarda sağda olan bir kutu küçük ekranlarda sola yaslanması durumudur. Tabi bu tip anaçatıların avantajı tüm bu sorunlara bir çözüm oluşturmalarıdır. 

Çözüm yine bir sınıf tanımlamak kadar kolay. Boostrap class yapılarından bildiğimiz `.col-xs-#`, `.col-sm-#`, `.col-md-#`, and `.col-lg-#` kullanımlarının sonuna soldan sağa ötelemek için push, sağdan sola çekmek için pull eklemelerini kullanıyoruz. Örneğin cep telefonlarında bir yer değiştirme yapacaksak `.col-xs-push-#` or `.col-xs-pull-#` diyelerine yerine ise kaç kolon öteleneceğini yazmamız yeterli. 

Bir örnek ile konuyu pekiştirelim. Örneğin cep telefonu ekranında üstte iki kutu altında bir kutu şeklinde olan bir sayfa yapımız olsun. Geniş ekranlara bu üç kutuyu yan yana koyalım ve alttaki 3. kutuyu iki kutu arasına koyalım. 

<iframe height='266' scrolling='no' src='//codepen.io/fatihhayri/embed/jqXxqR/?height=266&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Örneği geniş ekran ve küçük ekranlarda deneyelim. Süper.  Mobile öncelik vermeyi unutmayalım. 

## Kullanışlı sınıf tanımları

Boostrap uyumlu web için bazı hazır CSS sınıfları bize sunar. Bazı durumlarda bazı elemanları göstermek veya gizlemek isteriz. Bun işi yapmak için boostrap yine bize kullanışlı sınıflar sağlar.

Sadece bir ekran boyutunda göstermek için `.visible-xs-#`, `.visible-sm-#`, `.visible-md-#` ve `.visible-lg-#` sınıflarını bize sunar. Buradaki diyez (#) yerine göstereceğimiz elemanın display özelliğine göre `inline`, `block` ve `inline-block` değerine göre değişir. Örnek olarak farklı kutu yükseklikleri bölümünde ki kullanımı gösterebiliriz.

`<div class="clearfix visible-md-block visible-lg-block"></div>`

Aynı şekilde gizlemek için de sınıflar mevcuttur. `.hidden-xs`, `.hidden-sm`, `.hidden-md` ve `.hidden-lg` Farklılık dikkatinizi çekmiştir. Göstermenin aksine gizlemede elemanın `blok` veya `inline-blok` olmasının bir önemi olmadığı için bu kısım kaldırılmıştır. 

Son olarak yazıcı görünümünde gizleme ve gösterme içinde sınıflar vardır. `.visible-print-block`, `.visible-print-inline`, `.visible-print-inline-block` ve `.hidden-print` sınıflarıda kullanışlı sınıflardır.

## Anlamlı kodlama

Buraya kadar boostrap'in genel kullanımını gösterdik. Okunabilir kodlama için anlamlı sınıflar tanımlamak bize avantajlar sağlar. Örneğin Bir sayfayı kodlarken "Neden Zingat Enerji" bölümüm var. Boostrap genel kullanımı ile burayı kodlamak istesem kodlarım aşağıdaki gibi olacaktı.

{% highlight html %}
<div class="container">
<div class="row">
  <h3>NEDEN ZİNGAT ÜST SIRA ENERJİSİ?</h3>
  <div class="col-md-4">
    <h4>ÜSTE ÇIKSIN</h4>
    <p>İlanınız diğer ilanların üstünde...</p>
  </div>
  <div class="col-md-4">
    <h4>DİKKAT ÇEKSİN</h4>
    <p>İlanınız daha fazla ziyaretçinin...</p
  </div>
  <div class="col-md-4">
    <h4>KOLAY ULAŞILSIN</h4>
    <p>Gayrimenkul arayanlar hem...</p>
  </div>
</div>
</div>
{% endhighlight %}

Bunun yerine 

{% highlight html %}
<div class="container">
<div class="neden-zingat-enerji">
  <h3>NEDEN ZİNGAT ÜST SIRA ENERJİSİ?</h3>
  <div class="ustte-ciksin">
    <h4>ÜSTE ÇIKSIN</h4>
    <p>İlanınız diğer ilanların üstünde...</p>
  </div>
  <div class="dikkat-ceksin">
    <h4>DİKKAT ÇEKSİN</h4>
    <p>İlanınız daha fazla ziyaretçinin...</p
  </div>
  <div class="kolay-ulasilsin">
    <h4>KOLAY ULAŞILSIN</h4>
    <p>Gayrimenkul arayanlar hem...</p>
  </div>
</div>
</div>
{% endhighlight %}

Şeklinde sınıfları anlaşılır yaptığımda kodu okurken daha hızlı anlıyorum. Less dosyasında kodlama yaparken anlamlı sınıf isimleri kod hızımı arttırıyor. Tabi tercih meselesi. Ama çok fazla kod yığınının olduğu yerlerde kodlama yaparken anlamlı kodlama yapmak şart. 

## Bootstrap 4 ızgara sistemi

Şimdiye kadar anlattığım Bootstrap 3.x kullanımıydı. Bootstrap geliştiricileri 4. alfa sürümünü çıkardılar. Genel itibari ile bütün kısımlar oturmuş gibi. Beta ve yayın sürüçlerinde değişiklikler olsa da genel olarak bu yapı korunur. 

Bootstrap 4 birçok yenilik barındırıyor. En çarpıcı yeniliklerden birisi de ızgara yapısını artık sadece **float** ile değil de **flexbox** üzerinden yapmayada imkan sağlıyor olmaları. CSS3 ile gelen bu güzel özelliğin seçilmesi doğru karar. 

Flexbox kullanmak için `_variables.scss` dosyasında;

{% highlight sass %}
$enable-flex: true !default;
{% endhighlight %}

yapmak yeterli.

Ayrıca CSS önderleyici olarak artık LESS değil SASS kullanma kararı almışlar. 

Bootstrap 4 ızgara yapısı hakkında daha fazla deneyimim oldukça bu konuda da yazı yazarım.

Kalın sağlıcakla. 

## Kaynaklar

 - [http://getbootstrap.com/css/#grid](http://getbootstrap.com/css/#grid)
 - [http://www.adobewordpress.com/ders-2-bootstrap-grid-izgara-yapisi](http://www.adobewordpress.com/ders-2-bootstrap-grid-izgara-yapisi)
 - [https://www.youtube.com/watch?v=yhpE4U3acqI](https://www.youtube.com/watch?v=yhpE4U3acqI)
 - [http://usablica.github.io/front-end-frameworks/compare.html](http://usablica.github.io/front-end-frameworks/compare.html)
 - [http://www.sitepoint.com/understanding-bootstrap-grid-system/](http://www.sitepoint.com/understanding-bootstrap-grid-system/)
 - [http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php](http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php)
 - [http://shoelace.io/](http://shoelace.io/)
 - [http://blog.jetstrap.com/2013/08/bootstrap-3-grids-explained/](http://blog.jetstrap.com/2013/08/bootstrap-3-grids-explained/)

 - [https://scotch.io/tutorials/reorder-css-columns-using-bootstrap](https://scotch.io/tutorials/reorder-css-columns-using-bootstrap)
 - [http://stackoverflow.com/a/18070242/296373](http://stackoverflow.com/a/18070242/296373)
 - [https://getbootstrap.com/docs/4.0/utilities/flex/](https://getbootstrap.com/docs/4.0/utilities/flex/)
 - [http://designmodo.com/bootstrap-4-flexbox/](http://designmodo.com/bootstrap-4-flexbox/)
 - [https://scotch.io/bar-talk/whats-new-in-bootstrap-4](https://scotch.io/bar-talk/whats-new-in-bootstrap-4)