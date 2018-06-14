---
layout: post
title: Bootstrap Izgara (Grid) Sistemi - 1
Date: 2016-02-08 16:00
Category: css
tags: bootstrap ızgara-sistemi sayfa-planı
---


## Sayfa Planını Izgara Sistemi ile Oluşturmak

Izgara ( Grid ) sistemleri sitemizin belli standarda uygun ve hızlı bir şekilde sayfa planını oluşturmamıza yarayan sistemlerdir. Bu sistemlerin uygulaması tasarımdan başlar. Tasarımcı bu sisteme uygun bir site çıkarır. Kod yazarken bizde bu yapıyı uygularız. Bu durum maalesef tasarımcı, arayüz geliştirici arasındaki koordinasyon eksikliğinden çok fazla projede uygulanamamasına neden oluyor. Daha sistemli ve standart çalışmak için güzel yapılar. 

![enter image description here](https://fatihhayrioglu.com/images/izgara-sistemi.png){:height="299px" width="524px"}

Biz arayüz geliştiriciler için bulunmaz bir nimet olan ızgara yapıları sayesinde, kodlama sürelerimiz ciddi ölçüde azalır. Genişlikler, ara boşluklar belli olduğu için sayfa planını oluşturmak çok basit bir hal alır. Daha önce ben 
[PSD'den HTML'e - fanatikmarslar.com Sitesinin Kodlaması](https://fatihhayrioglu.com/fanatikmarslar-com-sitesinin-kodlamasi/) makalesinde anlattığım gibi tüm bu değerleri tek tek ölçüp tanımlamam gerekiyordu. Ancak ızgara sistemi ile oluşturulan sitelerde bu değerler belli ve atanmış olduğu için bu kısmı hızlıca geçeriz.

Burada tasarımcı ve arayüz geliştiricileri açısından şöyle bir avantajı var. Tasarımcılar yaptıkları tasarımın bire bir arayüze uyarlanmasını ister, tabi uygularken bazı sorunlar çıkar ve piksel hesabına dönen tartışmalar çıkar. Izgara sistemine uyan tasarımcı ve arayüz geliştirici arasında böyle sorunlar olmaz, çünkü değerler baştan bellidir.

Bu konuda geliştirilmiş bir çok anaçatı ( framework ) var. 

 - 960 Grid System
 - Skeleton
 - Blueprint
 - Less Framework
 - vb. 

Yukarıda listelenen ve daha fazlasını internette görebileceğimiz ızgara sistemleri mevcut. Bu hazır yapıların amacı bu işi daha kolay hale getirmek. 

Daha önce yukarıdaki ızgara sitemlerinden birini kullanmış olanlar için konunun devamını anlamak daha basit olacaktır. 

## Bootstrap Izgara Sistemi

Bootstrap twitter geliştiricilerinin çıkardığı hızlı bir şekilde web sitesi geliştirmemizi sağlayan HTML, CSS ve Javascript anaçatısıdır. Bir çok modülü bulunan bu yapının biz sadece ızgara sisteminden bahsedeceğiz.

Normal ızgara sistemlerine benzer bir yapıya sahip bootstrap ızgara sistemi, şu sıralar kullanılan en yaygın ızgara sistemidir. 

Bootstrap 2'ye göre bootstrap 3 daha fazla kesme noktasına (breakpoint) sahip. Bootstrap 2'de mobil ve masaüstü noktaları varken, bootstrap 3 mobil, tablet, masaüstü ve daha büyük ekranlar olmak üzere dört durma noktası mevcuttur. Ayrıca Öncelik Mobilde (Mobile First) akımı etkisine giren 3. sürüm bunun etkilerini grid sistemde göstermiştir. 

![enter image description here](https://fatihhayrioglu.com/images/izgara-uyumlu-web.png){:height="289px" width="473px"}

Uyumlu web sitesi kodlarken bir ızgara sistemi kullanmak neredeyse zorunlu hale geliyor. Normal zamanlarda kullanmıyorsak bile uyumlu web siteleri yaparken olmazsa olmazımız oluyor.

Bootstrap ızgara sistemi 3 ana yapıdan oluşur. 

 - Kapsayıcı (.container)
 - Satırlar (.row)
 - Kolonlar (col-*)

      <div class="container">
        <div class="row">
        <div class="col-md-8">.col-md-8</div>
        <div class="col-md-4">.col-md-4</div>
      </div>
    </div>

Basit bir kod örneği yukarıdaki gibi oluyor.

### Kapsayıcı (.container)

Bootstrap ızgara sisteminde satırların tam yerleşmesi için bir kapsayıcı elemana ihtiyacı vardır. Kapsayıcı eleman siteye yapısına göre iki farklı sınıf alır.

 - **.container** : sabit genişlikteki sitelerde
 - **.container-fluid** : esnek yapılı sitelerde

Uyumlu web için değişen genişlikler de kapsayıcı genişliğide değişir. Satırlar ve kolonlar yüzde değerli olduğu için değişen genişliklerde değerleri değişmez.

 - 1200px veya daha büyük ekran çözünürlüğünde: **1170px** 
 - 992px - 1199px arasında: **970px** 
 - 768px - 991px arasında:  **750px**
 - 768px' den daha düşük ekran çözünürlüğünde:  **auto**

### Satırlar (.row)

Her 12'li kolonu kapsayan bir kapsayıcıdır. Sağdan soldan eksi 15px ile ana kapsayıcının bıraktığı boşluğu doldurur, böylelikle kolonları aralarına konulan boşlukların sondaki kutuyu aşağı atması engellenmiş olur. kolonlar float:left ile yan yana dizildiği için satır aynı zamanda taşan kolonları satır başı yaptırmaya yarar. 

Satırları ana kapsayıcısı (.container) dışında kullanmayın çalışmıyor. Bazen gözden kaçıyor, sorun oluyor :)

### Kolonlar (.col-*)

Her kolon 15px'lik sağ ve sol paddingleri vardır. Bu paddingler satır ile olan mesafeleri ayırmak için eklenmiştir. Bu her kolon için aynı etkiyi yapacaktır ve yan yana kullanılan kolonlar arasındaki mesafe 30px olacaktır. 

Farklı ekran çözünürlükleri için farklı kolon sınıfları tanımlanır.

 - **.col-xs-** 768px'den küçükse
 - **.col-sm-** 768px ile 991px arasında
 - **.col-md-** 992px ile 1199px arasında
 - **.col-lg-** 1200px eşit ve büyükse

<iframe height='268' scrolling='no' src='//codepen.io/fatihhayri/embed/obeMzv/?height=268&theme-id=13521&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

Yukarıdaki örnekte iki tanım yapılmıştır. Bootstrap 3 ile birlikte mobil önceliği geldiğinden eğer küçük boyutlu ekran için bir tanım yapıldı ise ve başka tanım yoksa bu tanım yukarı doğru tüm ekran boyutlarını etkiler. Yukarıdaki örnekte mesela **.col-xs** tanımı hem mobili (768'den küçük) hemde tableti (768px - 991px) etkileyecektir. **.col-md** tanımı hem masa üstünü hemde daha büyük ekranları etkiyecektir. 

Bu yazıyı burada bitirip bir sonraki yazıda bootstrap ızgara sistemini anlatmaya devam edeceğim. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://www.adobewordpress.com/ders-2-bootstrap-grid-izgara-yapisi](http://www.adobewordpress.com/ders-2-bootstrap-grid-izgara-yapisi)
 - [https://www.youtube.com/watch?v=yhpE4U3acqI](https://www.youtube.com/watch?v=yhpE4U3acqI)
 - [http://usablica.github.io/front-end-frameworks/compare.html](http://usablica.github.io/front-end-frameworks/compare.html)
 - [http://www.sitepoint.com/understanding-bootstrap-grid-system/](http://www.sitepoint.com/understanding-bootstrap-grid-system/)
 - [http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php](http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php)
 - [http://shoelace.io/](http://shoelace.io/)
 - [http://blog.jetstrap.com/2013/08/bootstrap-3-grids-explained/](http://blog.jetstrap.com/2013/08/bootstrap-3-grids-explained/)