---
layout: post
title: CSS ile gizle göster animasyonu
Date: 2016-08-15 14:50
Category: css
tags: transition, max-height
---

![ilk web sitesi](/images/first-web-page.jpg)

İlk kodlanan web sitelerinde içerik herhangi bir işlemden geçmeden direk kullanıcıya sunuluyordu. Düz metin ve resimlerin olduğu bir doküman gibi. Zamanla düz dokümanlardan farklı olarak web sayfaları (kullanıcının gördüğü alan değerli bir alan olduğu için) kullanıcıya bilgi verirken içeriği önceliklendirmeye başladık. Önemli içerikler sayfa ilk açıldığında yüklenirken önem sırasında arkada kalanlar. Sonrandan yüklendi veya kullanıcının istemesi halinde gösterildi. 

Öncelikler ve ikinci sıraya düşenler için farklı çözümler oluşturuldu. Ben burada size daha önce bu işlemler için javascript ile yaptığımız çözümleri CSS ile yapmayı göstereceğim.

CSS bize kullanıcı etkileşimini yakalamakta yardımcı oluyor. CSS3 öncesinde **:hover** ile kullanıcının faresinin imleci ile belirlediğimiz elemanın üzerine geldiğinde bir iş yapabiliyoruz. CSS3 sonrasında **:checked** veya **:target** ile kullanıcının tıklamlarında bir işlem yapabiliyoruz artık. [CSS3 Javascript’ten Rol (Ç)alıyor](http://fatihhayrioglu.com/css3-javascriptten-rol-caliyor/) yazımda bahsetmiştim. 

Normal mantık olarak CSS ile gizle-göster işini yapmak için ilk akla gelen `display` veya `visibility` özelliği yardımı ile bu işi yapmak. Ancak her iki özelliği de kullanamıyoruz. Çünkü CSS bu elemanlara erişemiyorum diyor. Bizde bu nedenle başka çözümlere yöneliyoruz. `opacity` özelliğini kullanabiliriz. Veyahut `height` değerini kullanabiliriz. `height` değerinin şöyle bir dezavantajı var bir elemana `height` atadığınızda o elemanın yüksekliği o değere sabitlenir. Halbuki biz değişik içerikteki alanları gizle-göster yapabiliriz. Bunun için yardımımıza `max-height` özelliği yetişiyor.

**max-height** özelliği içeriğimizin ne kadar olabileceği tahminine göre atarız. İçerik belirlediğimiz alanlar içinde dinamik olarak değişmesinden etkilenmez. Bir örnek yaparak durumu görelim.

HTML;

{% highlight html %}
<input type="checkbox" name="gizleGoster" id="gizleGoster" />
<label for="gizleGoster"></label>
<div class="icerik">
  <h2>M. Serdar Kuzuloğlu</h2>
  <p>Küfür etmeden yapabildiğimiz her eleştiri...</p>
</div>
{% endhighlight %}

HTML İki alandan oluşuyor. Tıklamayı yakalamak için **input** ve **label**, Gizle-göster yapacağımız içerik alanı.

CSS;

{% highlight scss %}
input[type="checkbox"] {
  display:none;
  
  &:checked ~ {
    .icerik {
      max-height: 500px;
    } 
  }
}
.....
.icerik {
  max-height: 0;
  transition: all 500ms ease;
  overflow: hidden;
}
{% endhighlight %}

CSS kodunun önemli alanlarını yukarıya yazdım. Tüm kodu görmek için codepen.io'daki kodu inceleyiniz. Önemli olan kısım ilk halinde **max-height: 0** ile gizleyip, göster dendiğinde **max-height: 500px**; tahmini yükseklik değerinin olduğu kısımdır. Eğer içerik daha fazla geliyorsa tahmini değer arttırılabilir.

Ayrıca gizle-göster yapılacak alana **padding, margin** ve **border** tanımlarsak animasyonda takılmalar olabiliyor. Bunun yerine bu kapsayıcının içindeki elemanlara bu değerleri vererek bu sorunu çözebiliyoruz.

<iframe height='349' scrolling='no' src='//codepen.io/fatihhayri/embed/LkqgPv/?height=349&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/fatihhayri/pen/LkqgPv/'>Gizle - göster transtion</a> by Fatih  (<a href='http://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## Kaynaklar

 - [http://www.thenerdary.net/post/20924702599/transitioning-max-height](http://www.thenerdary.net/post/20924702599/transitioning-max-height)
 - [http://stackoverflow.com/questions/3331353/transitions-on-the-display-property](http://stackoverflow.com/questions/3331353/transitions-on-the-display-property)
 - [http://css3.bradshawenterprises.com/animating_height/](http://css3.bradshawenterprises.com/animating_height/)
 - [https://davidwalsh.name/css-slide](https://davidwalsh.name/css-slide)