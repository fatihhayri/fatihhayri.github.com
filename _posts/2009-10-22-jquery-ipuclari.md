---
layout: post
title: Jquery ipuçları
Date: 2009-10-22 23:33
Category: Javascript
tags: [ipuçları, jquery, kolaylık]
---

jQuery'i artık neredeyse her projemde kullanıyorum. Aklıma gelen ve not
aldığım ipuçlarını burada yazdım. Sizinde aklınıza gelen olursa yorum
kısmında katkıda bulunabilirsiniz. Ayrıca kaynaklar kısmındaki linklerde
de daha fazlası var

## 1- jQuery kütüphanemizi Google'da host etmek:** google bize jQuery
kütüphanesini kendi hostu üzerinden yüklememizi sağlıyor. Bu bize ön
belleğe alınana dosyanın daha hızlı yüklenmesini sağlar.

{% highlight javascript %}
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript">
 $(document).ready(function() {
    //isler burada
 });
</script>
{% endhighlight %}

Bu sayede jquery kütüphanesini her projeye eklerken kopyala yapıştır ile
de uğraşmak zorunda kalmıyoruz. İstediğimiz her yerde jQuery kullanma
imkanıda veriyor bize bu kod.

## 2- jquery kısaltması:** jquery kodlarımzı yazarken bazen 

{% highlight javascript %}
$(document).ready(function (){});
{% endhighlight %}

aklımıza gelmeye bilir

{% highlight javascript %}
$(function (){});
{% endhighlight %}

bu daha kolay ve akılda kalıcı bence

## 3- fare üzerinde iken ve üzerinden gittiğinde**

{% highlight javascript %}
$("li").hover( function () {
    // fare üzerinde iken bunu yap
}, function () {
    // fare kaçınca bunu yap
});
{% endhighlight %}

## 4- not seçicisi:** Bir seri elemana yaptırdığımız bir işi aradan bir
tane elemanın yapmasını istiyorsak bu seçiciyi uygulayabiliriz.

{% highlight javascript %}
$('ul#sekme li a').not("ul li#diger a").click(function(){
    // yapılacak işler
});
{% endhighlight %}

Yukarıdaki kodlamada biz sekmelere bir tanım yapıyoruz ama en son
sekmeye tıklayınca bu işlemin yapılmasını istemiyoruz. Bu iş için
biçilmiş kaftan :not seçicisi

## 5- siblings seçicisi** liste ve benzeri aynı seviyedeki elemanlar
üzerinde etkileşimli erişim sağlayan güzel bir seçici. Daha önce
http://fatihhayrioglu.com/jquery-ile-basit-sekme-yapimi/ anlatırken
kullanmıştım.

{% highlight javascript %}
$(this).parent('li').addClass('sekmeSecili').siblings().removeClass('sekmeSecili');
{% endhighlight %}

Bu kodda da görüldüğü gibi tıklanan sekmeye sekmeSecili sınıfı atıyoruz
diğer sekmelerde aynı sınıf varsa onları kaldırıyoruz.

## 6- HTML içine jQuery den eleman eklemek:**

{% highlight javascript %}
var ekleBunu = $('<div></div>');
ekleBunu.attr("id","yeniKatman").appendTo("body");
{% endhighlight %}

## 7- Bir elemanın varlığını kontrol etmek**

{% highlight javascript %}
if ($("#someDiv").length) {
    // eğer varsa bunu yap
}
{% endhighlight %}

## 8- Kolay kullanılan tarayıcıyı yakalama**

{% highlight javascript %}
$.browser.safari
$.browser.msie
$.browser.mozilla
{% endhighlight %}

tarayıcı sürümünü yakalamak için

{% highlight javascript %}
if ($.browser.msie && $.browser.version <= 7 ) 
{% endhighlight %}

## Kaynaklar

-   [http://stackoverflow.com/questions/182630/jquery-tips-and-tricks][]
-   [http://docs.jquery.com/Events/hover][]
-   [http://docs.jquery.com/Selectors/not][]
-   http://jquery-tr.blogspot.com/search/label/tips

  [http://stackoverflow.com/questions/182630/jquery-tips-and-tricks]: http://stackoverflow.com/questions/182630/jquery-tips-and-tricks
  [http://docs.jquery.com/Events/hover]: http://docs.jquery.com/Events/hover
  [http://docs.jquery.com/Selectors/not]: http://docs.jquery.com/Selectors/not