---
layout: post
title: Genişliği Belli Olmayan Blok-level Elemanları Yatayda Ortalamak
Date: 2011-06-10 21:04
Category: CSS, XHTML
tags: [Blok-level, CSS, display, table, genişliği belli olmayan, ortalama]
---

![][100]

CSS ile yatayda ortalamak deyince aklımıza hep genişliği sabit olan alanlar geliyor. Ancak genişliği sabit olmayan elemanları ortalamak biraz daha farklı oluyor.

Genişliği sabit olan blok-level elemanları ortalamak için birçok kaynak var iken genişliği belli olmayan blok-level elemanları ortalamak için çok fazla kaynak bulamıyoruz. Google’da yaptığım aramalarda rastladığım makalelerde 2 yöntem ile karşılaştım. Bu iki metodu sizlerle paylaşacağım, siz kendinize uygun olan metodu uygulayabilirsiniz.

## Metot 1 - Yüzde Yöntemi ile Ortalama

Genelde bu yöntemi anlatırken menü örnekleri üzerinden anlatılmış bende geleneği bozmayayım.

{% highlight html %}
<div class="menuKapsulu">
  <ul>
     <li>Elma</li>
     <li>Armut</li>
     <li>Malta Eriği</li>
  </ul>
</div>
{% endhighlight %}

Alışkın olduğumuz bir menü kodu. CSS kodumuzu ekleyelim. İlk olarak kapsayıcı eleman tanımlarını yazalım.

{% highlight css %}
.menuKapsulu{
  float:left;
  width:100%;
  background:#369;
  overflow:hidden;
  position:relative;
}
{% endhighlight %}

Menü kapsayıcısının sayfayı tam kaplaması için %100 değeri ve **float:left** değeri atandı.

{% highlight css %}
.menuKapsulu ul{
  clear:left;
  float:left;
  list-style:none;
  margin:0;
  padding:0;
  position:relative;
  left:50%;
  text-align:center;
  background-color:#990000
}
{% endhighlight %}

float:left değeri ile içeriği çepeçevre kapsaması sağlanıyor. left:50% değeri ile menu ortalanıyor. Ancak bu ortalama içeriğin genişliğiniiçermez.

{% highlight css %}
.menuKapsulu ul li{
  display:block;
  float:left;
  list-style:none;
  margin:0 10px 0 0;
  padding:10px 0;
  position:relative;
  right:50%;
}
{% endhighlight %}


Buradaki püf noktası; right:50% değeri ile menü genişliğinden dolayı sağa doğru kayan içeriği tam olarak ortalı hale getiriyoruz.

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/GGSHL/embedded/result,html,css"></iframe>

İnternet Explorer 6+, Firefox2+, Safari, Chrome ve Opera destekliyor.

**Avantajları**

 - Tüm tarayıcılar destekliyor.
 - Sadece CSS ile çözüm ürettiği için ve javascripte gerek bırakmaması
 - Kolay kullanımı
 - Farklı tarayıcılar için farklı kod yazımı gerektirmemesi

**Dezavantajları**

 - Kapsayıcı elemana atana overflow:hidden nedeni ile yaşanabilecek olumsuzluklar. Mesela açılır menülerde sorun olur.
 - Ortalanacak eleman kapsayıcısı, yani burada ul ortalı olmadığı için background, border ve kendini gösterecek diğer tanımların yapılmaması gerekir. Buda bir dezavantajdır.

## Metot 2: display:table Metodu

Genişliği belli olan elemanları ortalarken kullandığımız margin:0 auto tanımını bu sefer genişliği belli olmayan alanlar içinde kullanıyoruz.

HTML kodumuz aynı;

{% highlight html %}
<div class="menuKapsulu">
  <ul>
    <li>Elma</li>
    <li>Armut</li>
    <li>Malta Eriği</li>
  </ul>
</div>
{% endhighlight %}

Ortalanacak alana margin:0 auto ve display:table tanımlarını yapıyoruz.

{% highlight css %}
.menuKapsulu ul{ 
  list-style:none; 
  margin-left: auto;
  margin-right: auto; 
  display: table; 
} 

.menuKapsulu ul li{ 
  float:left;
  margin:0 10px 0 0; 
  padding:10px 0; 
}
{% endhighlight %}

Sonuç istediğimiz gibi, <s>ancak bir sorunumuz varki oda display:table özelliğini İnternet Explorer 6 ve 7. sürümleri desteklemiyor. Peki, ne olacak derseniz bu bir hasLayout sorunu ve çözüm için zoom:1 tanımı kullanmamız gerekiyor.</s>

{% highlight css %}
#menuKapsulu ul{
 list-style:none;
 margin-left: auto;
 margin-right: auto;
 display: table;
}

#menuKapsulu ul li{
 float:left;
 margin:0 10px 0 0;
 padding:10px 0;
}
{% endhighlight %}

Kapsayıcı kapsüle text-align:center tanımı yapıyoruz sonra listemize display:inline yapıyoruz. text-align:center inline elemanları ortalıyor bildiğiniz gibi. Burada yaptığmızda bu

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/xNtcS/6/embedded/result,html,css"></iframe>

**Avantajları**

 - Tüm tarayıcılar destekliyor.
 - Sadece CSS ile çözüm ürettiği için ve javascripte gerek bırakmaması
 - Birinci mettodaki overflow:hidden dan kaynaklana sorun burada yoktur.
 - Birinci metotdaki ul ye görsel özellik tanımlayamama sorunu bu metotda yok.

**Dezavantajları**

 - Farklı tarayıcılar için farklı kod yazımı gerektirmesi

Kullandıkça avantaj ve dezavantajlarını daha iyi göreceğiz.

Kalın sağlıcakla.

## Kaynaklar

-   [http://css-discuss.incutio.com/wiki/Centering_Block_Element][]
-   http://www.solstice.co.il/blog/2008-02-26/horizontally-centering-content-dynamic-width-css
-   [http://matthewjamestaylor.com/blog/beautiful-css-centered-menus-no-hacks-full-cross-browser-support][]
-   http://haslayout.net/css-tuts/Horizontal-Centering
-   [http://www.katcode.com/css-horizontally-centering-div-of-unknown-width/][]
-   http://www.tightcss.com/centering/center_variable_width.htm

  [100]: /images/gb_ortalama1.gif
  [http://css-discuss.incutio.com/wiki/Centering_Block_Element]: http://css-discuss.incutio.com/wiki/Centering_Block_Element
  [http://matthewjamestaylor.com/blog/beautiful-css-centered-menus-no-hacks-full-cross-browser-support]: http://matthewjamestaylor.com/blog/beautiful-css-centered-menus-no-hacks-full-cross-browser-support
  [http://www.katcode.com/css-horizontally-centering-div-of-unknown-width/]: http://www.katcode.com/css-horizontally-centering-div-of-unknown-width/