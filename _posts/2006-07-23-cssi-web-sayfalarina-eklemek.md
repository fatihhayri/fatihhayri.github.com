---
layout: post
title: CSS&#039;i Web Sayfalarına Eklemek
Date: 2006-07-23 21:47
Category: CSS, Web Standartları, XHTML
tags: [CSS, css eklemek, import, link, style, Web Standartları, XHTML]
---

## 1- Kod içinde (In-line)

Direk olarak HTML elementin içine **style** özelliği kullanılarak uygulamak.

{% highlight html %}
<div style="color:red">Deneme yazımız</div>
{% endhighlight %}

Tüm CSS komutlarını kodların içine direk uygulamak önerilen bir kodlama şekli değildir. Ancak özel durumlarda kullanılabilir.

## 2- style Elementi kullanılarak

<head\> kısmında <style\> elementi içinde CSS kodumuzu yazarak uygulamak.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS'i Uygulamak </title>
  <style type="text/css">
    div{
      color:red;
    }
  </style>
</head>
{% endhighlight %}

Birinci yönteme göre avantajı HTML kod ile CSS bir birinden ayrıştırılmış olmasıdır.

## 3- Harici Stil şablonu Kullanımı

Bu metod da CSS kodlarımzı **.css** uzantılı bir dosyaya kaydederiz. **ornek.css**

{% highlight css %}
p {
  color: red;
}

a {
  color: blue;
}
{% endhighlight %}


Daha sonra bu kodu gereken sayfalarımıza uygularız.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS'i Uygulamak</title>
  <link rel="stylesheet" type="text/css" href="ornek.css" />
</head>
{% endhighlight %}

Bu yöntemin diğerlerine göre en büyük avantajı bir kere yazılan kod
lazım olan tüm sayfalara eklenebilmesidir. Bu sayede harici eklenen css
kodu bir kere yüklendikten sonra diğer kullandığımız sayfalarda tekrar
yüklenmeyerek bize hız kazandıracaktır.

## 4- @import ile eklemek

Üçüncü yöntem ile kullanımı benzerdir.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS'i Uygulamak</title>
  <style type="text/css">
    @import "ornek.css";
  </style>
</head>
{% endhighlight %}

<s>Bu yöntemle eklenen harici css dosyası eski web tarayıcıları tarafından görüntülenmeyecektir.(Örn: NN4)</s>

<s>@import ile eklenen kod link ile eklenen kodlamadan önce yorumlanır web tarayıcıları tarafından. Ayrıca css dosyalarımızda @import özelliğini kullanarak devamlı kullandığmız kodları css dosyamıza harici olarak ekleyebilriz böylelikle tekrarlardan kurtulmuş oluruz. **(11.10.2006 güncellendi )**</s>

@import yöntemi performans sorunları ile tercih edilmemektedir. **19.01.2016 güncellendi**

Sonuç olarak burada dört adet CSS uygulama metodu gördük ancak bu metodlardan dördüncüsü avantajları bakımından önerilen bir yöntemdir.

Ayrıca içeriği büyük olan sitelerde css kodunun parçalara ayrılması ve kullanılan sayfa CSS'inde hangi parçalar gerekli ise onların import edilmesi önerilir. Bu sayfade kodun bir kısmında yaptığımız değişiklik için tüm css kodu incelenip değiştirlmesi gerekmez ve kod yönetimi kolaylaşır.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS'i Uygulamak</title>
  <style type="text/css">
    @import "ornek.css";
  </style>
</head>
{% endhighlight %}

Ürünler bölümü için bir css dosyası ekleyelim sonra parçalara ayırdığımız css kodlarının ürünlere lazım olanlarını **urunler.css** içine ekleyelim.

**urunler.css**

{% highlight css %}
@import url(/css/iskelet.css);
@import url(/css/fontlar.css);
@import url(/css/renkler.css);
@import url(/css/urunlereozel.css);
{% endhighlight %}

**Not:** Normal css'de import tercih edilmezken, Sass, Less ve Stylus gibi dinamik CSS yapılarında tercih edilir. Örnek bir kullanım için [tıklayınız.](/sass-klasor-yapisi/)

