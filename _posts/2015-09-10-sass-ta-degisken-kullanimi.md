---
layout: post
title: Sass'ta değişken kullanımı
Date: 2015-09-10 16:03
Category: css
tags: [sass css-önişlemcileri değişkenler]
---


Sass ve CSS önişlemcilerin en önemli getirilerinden biri değişkenlerdir. CSS4 ile birlikte geliştirilmekte olan [değişken tanımı](http://www.w3.org/TR/2012/WD-css-variables-20120410/) var ancak biraz daha kullanışlı olsa iyi olurmuş. Tarayıcı desteğini beklemeliyiz kullanmak için.

Bir çok programlama dilinden de alışık olduğumuz değişkenleri Sass sayesinde CSS'te de kullanabiliyoruz. Değişkenler, kod içindeki tekrar tekrar yazdığımız şeyleri teke indirmemizi sağlar. Örneğin projemizde kullandığımız **van dyke kahverengisi**'ni (Bob Ross'un toprağı bol olsun) 5 yerde (proje büyükse bu sayı daha fazla olacaktır) kullandığımızı düşünün. 

{% highlight css %}
body {
    color: #4a4742;
}
...
p {
    color: #4a4742;
}

p a {
    color: #4a4742;
}
...
table td {
    color: #4a4742;
}
...
footer strong {
    color: #4a4742;
}
{% endhighlight %}

Şeklinde bir kodumuz olduğunu düşünün bu rengi değiştirmek istediğimizde ya tek tek değiştirmek gerekir yada bul-değiştir ile uğraşmak gerekir. Ancak bunun yerine değişken kullansaydık.

{% highlight sass %}
$bob-ross: #4a4742

body
    color: $bob-ross
...
p
    color: $bob-ross

p a
    color: $bob-ross
...
table td
    color: $bob-ross
...
footer strong
    color: $bob-ross
{% endhighlight %}

Böylece bir değişiklik yapmamız gerektiğinde tek bir yerden değiştirmemiz yeterli olacaktır. Yukarıdaki kodda gördüğümüz gibi değişken tanımı yaparken ve kullanırken dolar ($) işareti kullanıyoruz. 

Değişken kullanmanın diğer avantajı da anlamlı isimlendirme ile kodlarımızı daha anlamlı hale getirebiliyoruz.

{% highlight css %}
color: #4a4742;
{% endhighlight %}

tanımı bize bir şey ifade etmezken.

{% highlight sass %}
color: $bob-ross-color
{% endhighlight %}

tanımı bize anlamlı bir rengi çağrıştırır ve kodlama yaparken her seferinde bu renk ne idi diye araştırmayız.

## Değişken isimlendirme

Değişkenlere anlamlı isim vermek kod yazarlarının genelde zorlandığı konulardan biridir. Genel itibariyle isim verirken aşağıdaki kurallara dikkat etmek bize avantaj sağlayacaktır.

 - Değişken adı mümkün olduğunca açıklayıcı olmalıdır. Jenerik isimleri kullanmamalıyız. Okunabilir kodlar için anlamlı isim vermek önemlidir. Örn. **dropdown-bg, btn-danger-color** vb.
 - Değişken adı mümkün olduğunca kısa olmalıdır. İlk kuralıda dikkate alırsak kısa ve açıklayıcı değişken isimleri tanımlamalıyız sonucuna ulaşırız. 
 - Yorum satırı ile belirtmek kaydıyla kısaltma kullanılabilir. Bazen isim vermek çok zor hal alabilir. Biraz açıklayıcı olsun derken uzun değişken isimleri orataya çıkabilir. Bu gibi durumlarda kısaltma kullanılabilir.
 - Olumsuz eklerin kullanılması önerilmez. **aktif-alan** mantıklı iken **aktif-olmayan-alan** tanımı çok mantıklı bir kullanım değildir.
 - Tutarlı olun. Örneğin Projenizde bazı yerlerinde İngilizce bazı yerlerinde Türkçe değişken adı kullanmak çok tutarlı bir davranış değildir. Eğer İngilizceye karar verdiyseniz her yerde İngilizce kullanın.
 - Birden fazla şeyi ifade eden isimler yerine o kısmı tanımlayan isimler kullanmayı tercih edin. Örneğin bir sayfada birden fazla menü varsa bir tanesine **navigation** tanımlamak çok mantıklı değildir. Bunun yerine **main-navigation**, **sub-navigation**, **footer-navigation** diye adlandırmak daha mantıklı.
 - Değişken tanımları için mevcut düzenlerden birini kullanın. Tire -Hyphens- (dropdown-fallback-border), Alt çizgi -Underscores- (dropdown_fallback_border), veya camelCase  (dropdownFallbackBorder).  Çalışma arkadaşlarınızla bir araya gelip hangisini kullanacağınıza karar verin. Ben tireli kullanımı tercih ediyorum.
 - Değişken isimlendirmenin önemli bir iş olduğunun farkında olun. Hızlıca isim vermek sonradan başınızı ağırtır. Baştan iyi düşünüp isim vermek her zaman iyidir.

## Değişken kapsamı (scope)

Sass'ta değişkenler yerel değişkenler ve genel değişkenler olarak kullanılabilir.

{% highlight sass %}
// Genel değişken
$bob-ross: #4a4742

.join-us
    // yerel değişken - bob ross alizerin kırmızısı
    $bob-ross: #E32636

    color: $bob-ross

.about
    color: $bob-ross
{% endhighlight %}
        
yukarıdaki kodu derlediğimizde

{% highlight css %}
.join-us {
  color: #E32636;
}

.about {
  color: #4a4742;
}
{% endhighlight %}

sonucunu verecektir. **.join-us** içinde kullanılan değişken sadece kendi alanını etkilerken **.about** genel değişken değerini alacaktır.

## default parametresi

**default** parametresi (!default) bir değişkene başlangıç değeri atamak için kullanılır. Eğer başka bir tanım yapılırsa değişken o değeri alacaktır, ancak hiç bir değer tanımı yapılmamış ise **!default** parametresi tanımlanmış değeri alır.

Harici kütüphaneler ve anaçatılar için çok kullanışlı bir özellik. Bir eklenti alıp kullandığınızda orada tanımlı tüm değişkenleri almış olursunuz. Kullandığımız eklentinin sitede kullandığımız değişkenlerini tekrar tanımlayarak özelleştirebiliriz. 

Örneğin [bootstrap değişken tanımlarında](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss)

{% highlight scss %}
//** Background color for <body>.
$body-bg: #fff !default;
//** Global text color on <body>.
$text-color: $gray-dark !default;
{% endhighlight %}

şeklinde tanımlar bulunur. Biz kendi projemizde bootsrap'i kullanırken body bacground rengini değiştirmek istediğimizde 

{% highlight scss %}
$body-bg: #ccc;
{% endhighlight %}

tanımlarız. Artık body background bizim belirlediğimiz rengi alacaktır. Sitepoint sitepoint.com/sass-reference/variables'teki aşağıdaki örnek gayet açıklayıcı.

{% highlight sass %}
$variable: 0
$variable: 1 !default
// 0

$variable: 0 !default
$variable: 1
// 1

$variable: 0 !default
$variable: 1 !default
// 0
{% endhighlight %}

## global parametresi 

Global parametresi (!global) global değişkenleri lokalde değiştirmek için kullanılır.

{% highlight sass %}
$variable: 0

.foo
    $variable: 1
    content: $variable

.bar
    content: $variable
    $variable: 3 !global

.baz
    content: $variable
{% endhighlight %}

derleme sonucu

{% highlight css %}
.foo {
  content: 1;
}

.bar {
  content: 0;
}

.baz {
  content: 3;
}
{% endhighlight %}

## Değişken kontrolü

Sass'ta değişken kontrolü için **variable-exists, global-variable-exists** fonksiyonları var. 

Genelde aynı örnek veriliyor bu işi anlatmak için. Mesela google font'tan bir font çekiyorsunuz. 

{% highlight sass %}
$font-google-prim : 'http://fonts.googleapis.com/css?family=Lato:100,300,400';
{% endhighlight %}

bu fontu kullanmak istediğimiz yerde

{% highlight sass %}
@if variable-exists(font-google-prim)
  @import url($font-google-prim)
{% endhighlight %}

bu şekilde google'dan fonta erişildiğinde font kullanılmış olur.

## Sublime Text yardımı

Geçenlerde twitter'dan paylaştığım ipucunu da paylaşayım.

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="tr" dir="ltr">Sublime Text ile Sass kodlarken süper oluyor. Sizde deneyin iki kolon sağda değişkenler, solda kendi dosyanız.<a href="https://twitter.com/hashtag/sass?src=hash">#sass</a> <a href="http://t.co/EMY42kKy4W">pic.twitter.com/EMY42kKy4W</a></p>&mdash; Fatih Hayrioğlu (@fatihhayri) <a href="https://twitter.com/fatihhayri/status/638647716323721216">September 1, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Sonuç

Değişken kullanımı CSS önişlemcilerinin en önemli katkılarının başında geliyor. Alışınca CSS dönmesi gelmiyor insanın. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://sass-lang.com/guide](http://sass-lang.com/guide)
 - [https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss)
 - [http://webdesign.tutsplus.com/articles/understanding-variable-scope-in-sass--cms-23498](http://webdesign.tutsplus.com/articles/understanding-variable-scope-in-sass--cms-23498)
 - [https://robots.thoughtbot.com/sass-variables](https://robots.thoughtbot.com/sass-variables)
 - [http://bensmithett.com/stop-using-so-many-sass-variables/](http://bensmithett.com/stop-using-so-many-sass-variables/)
 - [https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss)
 - [http://www.alistapart.com/article/getting-started-with-sass#section4](http://www.alistapart.com/article/getting-started-with-sass#section4)
 - thesassway.com/beginner/variable-naming
 - [http://sassbreak.com/web-fonts-variable-exists/](http://sassbreak.com/web-fonts-variable-exists/)
 - [http://www.makinggoodsoftware.com/2009/05/04/71-tips-for-naming-variables/](http://www.makinggoodsoftware.com/2009/05/04/71-tips-for-naming-variables/)