---
layout: post
title:  jQuery'ye büyük darbe Javascript ve seçiciler
Date: 2017-08-21 10:37
Category: Javascript
tags: [normal js, querySelector, querySelectorAll, jquery]
---

jQuery'nin en büyük avantajlarından birisi seçici kullanımının basitiliğidir. CSS seçicilerini javascript'e kazandıran bu kullanım kolaylığı [sizzle](https://sizzlejs.com/) kütüphanesinden gelir. Javascript bu konuda daha sığ ve beceriksiz kaldı. Tabi sonra işler değişti ve artık aynı yeteneklere sahip.

Seçicilerdeki bu büyük atılımı sağlayan iki özellik var **querySelector** ve **querySelectorAll**.

**Element.querySelector()**

Belirtilen öğenin ilk alt elemanını döndürür.

{% highlight javascript %}
element = anaElement.querySelector(secici);
{% endhighlight %}

Buradaki **secici** kısmında aklınıza gelecek tüm CSS seçicileri konabiliyor. İşte süperlik buradan kaynaklanıyor. `a:before`, `p[title]`, `p > span`, `ul li ~ li`, vs.

Eğer element bulunamazsa `null` değeri döner.

**Element.querySelectorAll()**

Belirtilen öğe grubunun tüm alt elemanlarını döndürür. 

{% highlight javascript %}
elementList = baseElement.querySelectorAll(seciciler);
{% endhighlight %}

Buradaki **seciciler** kısmında aklınıza gelecek tüm CSS seçicileri konabiliyor.

Yukarıdaki özelliğin çoklusu. Bu seçici sonucunda bir dizi element döner. 

{% highlight javascript %}
var el = document.querySelector('#test'); 
var aktifElemanlar = el.querySelectorAll('div.aktif > p');
{% endhighlight %}

aktif eleman altındaki tüm paragrafları yakalamamızı sağlar.

Tarayıcı desteği konusunda da çok iyi bir durumdalar. IE8+ destekleri var.

Javascript seçicilerini iki gruba ayıracağız.

 - Ana eleman seçicileri
 - DOM ilişkilerine dayanan seçiciler

## Ana eleman seçicileri
 
CSS derslerinden alışık olduğumuz gibi seçiciler javascript dünyasında da önemli bir yere sahiptir. Kod yazarlarının en çok kullandığı araçlardan biridir seçiciler. Seçiciler ne kadar gelişmiş olursa, bizlere kod yazarken o kadar rahatlık sağlıyor.
 
### Tekil (ID) seçiciler
 
CSS'den alışık olduğumuz ID seçiciler sayfada bir tane bulunan bir elemanı yakalamak için kullanılır. En büyük avanatjı hızdır.

{% highlight html %}
<div id="trabzon"></div>
{% endhighlight %}

Sayfamızda tek bir trabzon id'li elemanı yakalamak için

**jQuery ile**

{% highlight javascript %}
var trabzon = $('#trabzon');
{% endhighlight %}

**Javascript ile**

{% highlight javascript %}
var trabzon = document.getELementById('trabzon');
{% endhighlight %}
	
Tarayıcı desteğinin IE5.5+ olması ne kadar eski olduğunu gösteriyor.

veya 

{% highlight javascript %}
var tarabzon = document.querySelector('#trabzon');
{% endhighlight %}

her ne kadar daha yavaş olasa da bir tercih olarak kenarda dursun.

### Sınıf (class) seçicileri

Sayfada birden fazla elemanı yakalamk için kullandığımız HTML özniteliğidir. 

jQuery ile

{% highlight javascript %}
var sehir = $('.sehir');
{% endhighlight %}
	
Javascript ile

{% highlight javascript %}
var sehir = document.getElementsByClassName('sehir');
{% endhighlight %}
	
Bu seçici tüm class="sehir" tanımlı elemanları bulur ve bize bir dizi olarak döner.

Tüm yeni nesil tarayıcılar ve IE8+ desteği vardır.

veya 

{% highlight javascript %}
var sehir = document.querySelectorAll('.sehir');
{% endhighlight %}

her ne kadar daha yavaş olasa da bu da bir tercih.

### Etiket (tag) seçicisi

HTML etiketlerini kullanarak seçim yapmamızı sağlar.

jQuery

{% highlight javascript %}
var katman = $('div');
{% endhighlight %}

Javascript ile

{% highlight javascript %}
var katman = document.getElementsByTagName('div');
{% endhighlight %}
	
Bu seçici tüm `<div>` etiketli elemanları bulur ve bize bir dizi olarak döner.

IE5.5+ desteği var.

veya 

{% highlight javascript %}
var katman = document.querySelectorAll('div');
{% endhighlight %}
	
her ne kadar daha yavaş olasa da bu da bir tercih.

### Öznitelik (attribute) seçicileri

Özellik Seçicileri HTML dokümanlarındaki seçilen etiketin özelliklerine veya özellik değerlerine göre seçim yapmamızı sağlar. 

{% highlight html %}
<img src="logo.gif" alt="Logo" width="32" height="41" />
{% endhighlight %}

jQuery ile

{% highlight javascript %}
$('[alt="logo"]');
{% endhighlight %}

Javascript ile 

{% highlight javascript %}
document.querySelectorAll('[alt="logo"]');
{% endhighlight %}

jQuery benzer bir kullanım var.

### Sözde sınıf (Pseudo-class) seçicileri

Aslında bir HTML sınıfı olmamasına rağmen sözde olarak oluşturulan sınıfları yakalamak için kullanılır. CSS'ten alışık olduğumuz bir seçici.

jQuery ile

{% highlight javascript %}
var metinAlani = $('input:focus');
{% endhighlight %}

Javascript ile

{% highlight javascript %}
var metinAlani = document.querySelectorAll('input:focus');
{% endhighlight %}

Süper değil mi?


## Sonuç

jQuery'nin elindeki en büyük kozlardan birisi olan kolay seçici kullanımını aynı kolaylık ile javascript ile yapabiliyor olmak sevindirici. 

Bir sonraki yazımda DOM ilişkilerine dayanan seçicilerden bahsedeceğim.

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
 - [https://blog.garstasio.com/you-dont-need-jquery/selectors/](https://blog.garstasio.com/you-dont-need-jquery/selectors/)
 - [https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
 - [https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)
 - [https://gomakethings.com/](https://gomakethings.com/)