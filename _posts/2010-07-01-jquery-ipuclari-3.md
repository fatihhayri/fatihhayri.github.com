---
layout: post
title: jQuery ipuçları - 3
Date: 2010-07-01 00:10
Category: Javascript, jquery
tags: [ipuçları, jquery, live(), resize, select, size()]
---

[Jquery ipuçları - 1][]
[Jquery ipuçları - 2][]

jQuery ipuçlarını yayınlamaya devam ediyorum.

## 1- Dinamik oluşturulan elementlere live() ile olay atama

Sayfaya dinamik olarak eklenen içeriklerde veya ajax ile doldurduğumuz
içeriklerdeki elemanlara bir olay atadığımızda(click, mouseover vd.)
çalışmayacaktır. jQuery geliştiricileri bunun için live() fonksiyonunu
geliştirmiş.

{% highlight javascript %}
 $('a.acilSusam').live('mouseover',function() {
	// yapilacak islemler
});
{% endhighlight %}

## 2 - Tarayıcı Penceresinin Boyutlarını Değişmesini Yakalamak

Belki ara sıra lazım olacak bir kod ama bazen gerekiyor işte. Pencere
boyutu her değiştiğine bazı işlemleri yapmak sistemimizi yorabilir diye
setTimeout yardımı ile belli aralıklarla bunu yaptırıyoruz.

{% highlight javascript %}
function pencereBoyutuDegisti() {
	alert("Değişti");
};

var resizeTimer = null;
$(window).bind('resize', function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(pencereBoyutuDegisti, 100);
});
{% endhighlight %}

## 3 - Element miktarını bulmak

Bir dokümanda seçilen elemandan kaç adet olduğu bulmak için;

{% highlight javascript %}
$('element').size();
{% endhighlight %}

## 4 - Bir elemanın index değerini bulmak

index değerini bulmanın farklı bir yolu

{% highlight javascript %}
("ul > li").click(function () {
	var index = $(this).prevAll().length;
});
{% endhighlight %}

## 5- Bir elemanın görünür olup olmadığını yakalamak

{% highlight javascript %}
if($(".eleman").is(":visible")) {
    alert('Burda');
}
{% endhighlight %}

## 6- Kaç tane alt elemanı(çocuk elemanı) var

{% highlight html %}
<div id="foo">
<div id="bar"></div>
<div id="baz">
<div id="biz">
</div>
<span><span>
</div>

//kac tane alt elemanı oldugunu bulmak icin
$("#foo > div").length
{% endhighlight %}


## 7- jQuery Kopya Kağıdı(Cheat Sheet)

jQuery'nini bir çok özelliği var ve bunları aklımızda tutma imkanımız
yok. Bir kopya kağıdı işimize yaraya bilir.

-http://www.futurecolors.ru/jquery/-

Burada son sürümün kopya kağıdı mevcut. Bende css3 özelliklerini
kullanarak biraz renklendirdim. [Benim renklendirdiğim][](CSS3 içerir,
herisi göremez)

## 8 - Select Elemanı ipuçları

{% highlight javascript %}
// secili olan ögenin metnini almak
$("#myselect option:selected").text();

// secili olan ögenin degerini almak icin
$("#myselect option:selected").val();

// secili ogenin index degeri
$("#myselect option").index($("#myselect option:selected"));

// indeksi 2 olan ögeyi seçili hale getirmek
$("#myselect option:eq(2)").attr("selected", "selected");
{% endhighlight %}


## Kaynaklar

-   http://blog.kenmoredesign.com/2009/02/02/useful-jquery-snippets
-   [http://tympanus.net/codrops/2010/01/07/some-useful-javascript-jquery-snippets-part-2/][]
-   [http://www.catswhocode.com/blog/10-jquery-snippets-for-efficient-developers][]
-   [http://tympanus.net/codrops/2010/01/08/some-useful-javascript-jquery-snippets-part-3/][]
-   [http://www.opensourcehunter.com/2010/02/27/26-cool-and-usefull-jquery-tips-tricks-solutions/][]

  [Jquery ipuçları - 1]: http://www.fatihhayrioglu.com/jquery-ipuclari/
  [Jquery ipuçları - 2]: http://www.fatihhayrioglu.com/jquery-ipuclari-2/
  [Benim renklendirdiğim]: /dokumanlar/jQuery14.htm
  [http://tympanus.net/codrops/2010/01/07/some-useful-javascript-jquery-snippets-part-2/]: http://tympanus.net/codrops/2010/01/07/some-useful-javascript-jquery-snippets-part-2/
  [http://www.catswhocode.com/blog/10-jquery-snippets-for-efficient-developers]: http://www.catswhocode.com/blog/10-jquery-snippets-for-efficient-developers
  [http://tympanus.net/codrops/2010/01/08/some-useful-javascript-jquery-snippets-part-3/]: http://tympanus.net/codrops/2010/01/08/some-useful-javascript-jquery-snippets-part-3/
  [http://www.opensourcehunter.com/2010/02/27/26-cool-and-usefull-jquery-tips-tricks-solutions/]: http://www.opensourcehunter.com/2010/02/27/26-cool-and-usefull-jquery-tips-tricks-solutions/
