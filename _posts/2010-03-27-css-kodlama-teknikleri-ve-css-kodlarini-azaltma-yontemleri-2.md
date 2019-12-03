---
layout: post
title: CSS Kodlama Teknikleri ve CSS Kodlarını Azaltma Yöntemleri - 2
Date: 2010-03-27 19:07
Category: CSS, Web Standartları, XHTML
tags: [bildirim alanları, css-menü, Kod Azaltma, Torun-Seçicisi]
---

Her projeye başladığımızda belli bir bilgi birikimi ile başlarız. Ancak
her seferinde yazdığımız kodun en iyi ve optimum kod olduğunu
sorgulamamız gerekiyor(çok acil olmadığı sürece). Acaba bu işi daha az
kodla ve daha esnek nasıl yaparım düşüncesi ile davranmalıyız. Bu belki
kodlama zamanımızı uzatır ama sonuçta içimize sinen bir iş yapmış
oluyoruz ve daha sonraki projelerimizde bu bilgi bize tecrübe ve hız
kazandıracaktır. Her zaman en iyiyi aramak iyidir.

Daha önce [CSS Kodlama Teknikleri ve CSS Kodlarını Azaltma Yöntemleri][]
bahsetmiştim genel olarak buna bir ek daha yapacağım. Aslında o
makaledeki 1. maddeyi biraz daha genişleteceğim. Mesela bir eleman
altındaki tüm elemanlara uygulanan bir özellik tek tek uygulanacağına
genel uygulanır alttaki elemanlara ise kendine has özellikler
tanımlanarak daha optimum kodlar elde edilir. Yer kazanılır,
tekrarlardan kurtulmuş oluruz ve daha kolay müdahale imkanımız
olur.

Genelde bu tip ortak kullanım ile menülerde karşılaşıyorum. Resimli
menülerde

{% highlight html %}
<ul id="menu">
    <li id="menu1"><a href="">menü 1</a></li>
    <li id="menu2"><a href="">menü 2</a></li>
    <li id="menu3"><a href="">menü 3</a></li>
    <li id="menu4"><a href="">menü 4</a<</li>
    <li id="menu5"><a href="">menü 5</a></li>
    <li id="menu6"><a href="">menü 6</a></li>
</ul>
{% endhighlight %}

Bu tip bir menümüz olsun ve menünün her elemanı için farklı tanımlarımız
olsun.

{% highlight css %}
li#menu1 a{display:block; width:50px; height:24px; background:(images/menu.png) 0 0 no-repeat; text-indent:-9999px; }
li#menu2 a{display:block; width:50px; height:24px; background:(images/menu.png) 0 -25px no-repeat; text-indent:-9999px; }
li#menu3 a{display:block; width:50px; height:24px; background:(images/menu.png) 0 -50px no-repeat; text-indent:-9999px; }
li#menu4 a{display:block; width:50px; height:24px; background:(images/menu.png) 0 -75px no-repeat; text-indent:-9999px; }
li#menu5 a{display:block; width:50px; height:24px; background:(images/menu.png) 0 -100px no-repeat; text-indent:-9999px; }
li#menu6 a{display:block; width:50px; height:24px; background:(images/menu.png) 0 -125px no-repeat; text-indent:-9999px; }
{% endhighlight %}

Görüldüğü gibi bir resimli menü oluşturduk. Kod sorunsuz çalışır, ancak
bu kodu daha kısa yazabiliriz. Birbirini aynı tanımları genel bir
elemana atayıp, geriye sade o elemana ait özelliği bırakırsak kodumuz
daha az olacaktır. yukarıdaki örnekte bunu yapalım

{% highlight css %}
ul#menu li a{
	display:block;
	width:50px;
	height:24px;
	background:(images/menu.png) 0 0 no-repeat;
	text-indent:-9999px;
}
{% endhighlight %}

Bu tanım ile tüm a elemanlarını etkileyecek bir kod yazdık. Daha sonrada
her elemana özel kodlarını tek tek tanımlayalım.

{% highlight css %}
li#menu1 a{ background-postion:0 0;}
li#menu2 a{background-postion:0 -25px; }
li#menu3 a{background-postion:0 -50px;}
li#menu4 a{background-postion:0 -75px;}
li#menu5 a{background-postion:0 -100px;}
li#menu6 a{background-postion:0 -125px;}
{% endhighlight %}

Görüldüğü gibi kodumuz daha az oldu. Böylece kodu düzenlemek de
kolaylaştı. Yukarıdaki örnekte sadece background-position değerleri
değişti. Başka bir örnekte genişlik değeride değişebilir bu durumda da
her tanımda genişlik tanımı ekleyerek kodumuzu yazabiliriz. Benzer bir
yapıyı [Basit Resimli Menü Yapmak][] adlı makalemde anlatmıştım.
Örnekleri oradan inceleyebilirsiniz.

## Bilgilendirme Kutuları

Aynı mantığı site kodlarken farklı alanlarda da kullanabiliriz. Örneğin
sitemizde bilgi kutuları hazırladığımızı düşünelim.

Kullanıcıyı bilgilendirme amaçlı alanlarımız için "Bilgilendirme
Kutuları - #bilgilendirme", Hata durumunda kullanıcıyı bilgilendirmek
için "Hata Kutuları - #hata", Kullanıcıyı uyarmak içinde "Uyarı
Kutuları - #uyari" kutuları hazırlayalım.

{% highlight html %}
<div class="bilgilendirme">Bilgilendirme metni</div>
<div class="onay">Onay metni</div>
<div class="hata">Hata mesajı</div>
<div class="uyari">Uyarı mesajı</div>
{% endhighlight %}

Bu kutuların css kodlarını yazalım.

{% highlight css %}
div.bilgilendirme{display:block; padding:15px 10px 15px 50px; background:#BDE5F8 url(images/bilgilendirme.png) 8px 8px no-repeat; color:#00529B; border:1px solid #00529B; font:12px Arial, Tahoma, sans-serif; margin:10px 0}
div.onay{display:block; padding:15px 10px 15px 50px; background:#DFF2BF url(images/bilgilendirme.png) 8px -92px no-repeat; color:#4F8A10; border:1px solid #4F8A10; font:12px Arial, Tahoma, sans-serif; margin:10px 0}
div.hata{display:block; padding:15px 10px 15px 50px; background:#FFBABA url(images/bilgilendirme.png) 8px -292px no-repeat; color:#D8000C; border:1px solid #D8000C; font:12px Arial, Tahoma, sans-serif; margin:10px 0}
div.uyari{display:block; padding:15px 10px 15px 50px; background:#FEEFB3 url(images/bilgilendirme.png) 8px -195px no-repeat; color:#9F6000; border:1px solid #9F6000; font:12px Arial, Tahoma, sans-serif; margin:10px 0}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

sonuç olarak her şey tamam, ancak kodumuzu daha da azaltabilirmiyiz?
Evet.

Bunun için her kutuya genel bir sınıf tanımlamamız gerekecek. Bu
bildirim kutularını içerik alanımız içinde olduğunu düşünerek

{% highlight css %}
#icerikAlani div
{% endhighlight %}

şeklindeki bir tanım bizim işimize yaramaz. Daha özel bir tanımlama
yapmamız için her bildirim kutusuna bir adet sınıf daha eklememiz
gerekecek.

{% highlight html %}
<div class="bildirim bilgilendirme">Bilgilendirme metni</div>
<div class="bildirim onay">Bilgilendirme metni</div>
<div class="bildirim hata">Hata mesajı</div>
<div class="bildirim uyari">Uyarı mesajı</div>
{% endhighlight %}


Evet böylece bildirim kutuları katmalarını(div) diğer katmanlardan
ayırmış olduk. Buna göre css kodumuzu azaltalım.

{% highlight css %}
#icerikAlani div.bildirim{
	background: #BDE5F8 url(images/bilgilendirme.png) 8px 8px no-repeat;
	border: 1px solid #00529B;
	color: #00529B;
	display: block;
	font: 12px Arial, Tahoma, sans-serif;
	margin: 10px 0;
	padding: 15px 10px 15px 50px;
}
{% endhighlight %}

Daha sonra her kutu için ayrı kendine özel kodlarını yazalım.

{% highlight css %}
 #icerikAlani div.bilgilendirme{
	background: #BDE5F8 url(images/bilgilendirme.png) 8px 8px no-repeat;
	border: 1px solid #00529B;
	color: #00529B;
}
#icerikAlani div.onay{
	background: #DFF2BF url(images/bilgilendirme.png) 8px -92px no-repeat;
	border: 1px solid #4F8A10;
	color: #4F8A10;
}
#icerikAlani div.hata{
	background: #FFBABA url(images/bilgilendirme.png) 8px -292px no-repeat;
	border: 1px solid #D8000C;
	color: #D8000C;
}
#icerikAlani div.uyari{
	background: #FEEFB3 url(images/bilgilendirme.png) 8px -195px no-repeat;
	border: 1px solid #9F6000;
	color: #9F6000;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][1]

Burada şöyle bir kullanım şeklinide tercih edebiliriz. Katman(div)
yerine <blockquote\> etiketini kullanarak daha uygun bir kodlama
yapabiliriz. Maksat en uygun kodu bulmak.

{% highlight html %}
<blockquote class="bilgilendirme">Bilgilendirme metni</blockquote>
<blockquote class="onay">Onay mesajı</blockquote>
<blockquote class="hata">Hata mesajı</blockquote>
<blockquote class="uyari">Uyarı mesajı</blockquote>
{% endhighlight %}

CSS kodumuzda

{% highlight css %}
#icerikAlani blockquote{
	background: lightblue (images/bilgilendirme.gif) 0 0 no-repeat;
	display: block;
	font: 12px Arial, Tahoma, sans-serif;
	margin: 10px 0;
	padding: 10px 10px 10px 25px;
}

blockquote.bilgilendirme{
	background-color: lightblue;
	background-postion: 0 0;
	border: 1px solid blue;
	color: blue;
}

blockquote.onay{
	background-color: lightblue;
	background-postion: 0 0;
	border: 1px solid blue;
	color: blue;
}

blockquote.hata{
	background-color: lightred;
	background-postion: 0 0;
	border: 1px solid red;
	color: red;
}

blockquote.uyari{
	background-color: lightyellow;
	background-postion: 0 0;
	border: 1px solid yellow;
	color: black;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][2]

Sonuç olarak en optimum kodu ettik.

Bu makaleyi yazmaktaki amacım bu ve benzeri yöntemleri projelerimizde en
uygun kodlama yöntemlerini uygulamamız gerektiğini göstermek içindir.
Yoksa yukarıdaki örnekleri bir çok makalemde anlatmıştım zaten.
Projemizin tüm bölümlerinde aynı mantıkla hareket etmemiz gerektiğini
düşünüyorum. Hoşçakalın.

## Kaynak

-   [http://www.jankoatwarpspeed.com/post/2008/05/22/CSS-Message-Boxes-for-different-message-types.aspx][]

  [CSS Kodlama Teknikleri ve CSS Kodlarını Azaltma Yöntemleri]: http://fatihhayrioglu.com/css-kodlarini-temizlemeazaltma/
    "CSS Kodlama Teknikleri ve CSS Kodlarını Azaltma   Yöntemleri"
  [Basit Resimli Menü Yapmak]: http://fatihhayrioglu.com/basit-resimli-menu-yapmak/
    "Basit Resimli Menü Yapmak"
  [tıklayınız.]: /dokumanlar/kodazaltma2/bilgilendirme_1.html
  [1]: /dokumanlar/kodazaltma2/bilgilendirme_2.html
  [2]: /dokumanlar/kodazaltma2/bilgilendirme_3.html
  [http://www.jankoatwarpspeed.com/post/2008/05/22/CSS-Message-Boxes-for-different-message-types.aspx]: http://www.jankoatwarpspeed.com/post/2008/05/22/CSS-Message-Boxes-for-different-message-types.aspx
    "http://www.jankoatwarpspeed.com/post/2008/05/22/CSS-Message-Boxes-for-different-message-types.aspx"
