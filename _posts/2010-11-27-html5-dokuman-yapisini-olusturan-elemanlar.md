---
layout: post
title: HTML5&#58; Doküman Yapısını Oluşturan Elemanlar
Date: 2010-11-27 18:28
Category: HTML5
tags: DOCTYPE, head, html5
---

HTML5 ve CSS3 hayatımıza girmeye başladı. Her ne kadar Microsoft nedeni
ile tam olarak kullanmasakta birçok makale ve örnek uygulamayı takip
ediyoruz. Hala geliştirilmekte olan özellikleri ile bu yeni
teknolojilerin hayatımıza girişi bize birçok güzellik kazandıracaktır.

Bir çok makale okuyorum ve uygulama görüyorum ama HTML5 ile bir şey
yapmak daha nasip olmadı bana. HTML5 hakkında okuduklarım ve
araştırdıklarım konulardan bir tanesi de konu başlığından
anlaşılabileceği gibi. HTML dokümanının yapısını oluşturan elemanlar
hakkında ufak bir yazı yamayı planladım. Aslında mevcut HTML’de farkını
yazacağım. Daha bir sadeleştirilmiş diyebiliriz.

## DOCTYPE

[Doğru DOCTYPE Kullanımı][] hakkında bir makalem vardır. Doctype,
dokümanın tipi gösteriyor yorumlayıcıya(tarayıcıya). Bu tanımlar çok
uzun metinler içeriyordu ancak HTML5 bu tanımı kısaltmış ve çok güzel
yapmış.

Şimdiye kadar ve hala kullanmakta olduğumuz bir doctype örneği,

{% highlight html %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
{% endhighlight %}

Yukarıdaki HTML etiketi bize bu html dokümanının xhtml 1.0 olduğunu ve
Transitional ise hem HTML hemde XHTML kurallarının bu dokümanda geçerli
olduğunu gösteriyor. Peki HTML5’de bu işi nasıl yapıyoruz.

{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}

Bu kadar, kısa ve hafıza da kalıcı. HTML kodlarını Not Defteri ile
 yazdığım dönemlerde çok çekerdim bu Doctype tanımlarında. Git bir
yerden örneğini al falan. Sonra Dreamweaver bunu otomatik ekliyordu da
yazmaktan kurtulmuştum. Açıkçası ben hiç bir zaman yukarıdaki HTML5
öncesi kodu aklıma yazamadım.

Doctype Etiketinin kapama etiketi ve işareti yoktur ve küçük büyük harf
duyarlılığı yoktur.

HTML5 öncesi sürümler SGML kökenli diller olduğu için DTD tanımlarına
gereksinim duyardı ancak HTML5 SGML kökenli olmadığı için buna gerek
duymaz.

{% highlight html %}
<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
...
</body>
</html>
{% endhighlight %}

Peki burada bir sürüm numarası yok nasıl sonraki sürümler ile bunu
ayıracağız?

Burada şöyle bir şey var HTML5 geliştirilirken eğer buraya bir sürüm
numarası verilse idi mevcut bütün web siteleri bu kapsam dışında
kalacaktı, ama bu şekilde bir tanım ile eski ve yeni tüm dokümanlar aynı
kefeye konmuş oldu. Geçmişide destekleyen bir yapıya kavuşturulmuş oldu.

Aslında yeni nesil tarayıcılar bir tanım yapılmasa daha standart modda
belgeyi tanımladığı için Doctype’ın pek bir geçerliliği kalmamış idi ama
yinede bir tanım yapmak iyidir. İE’nin ne yapacağı belli olmaz.

## <html\> Elemanı

Html dokümanlarını çevreleyen kapsayıcı bir elemandır <html> html5
öncesinde tanımımız

{% highlight html %}
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
{% endhighlight %}

Şeklinde idi. Buradaki xmlns değeri bu dokümanın anaçatısının
[http://www.w3.org/1999/xhtml][] kullandığını gösteriyor. HTML5
anaçatısı belli olduğu için tekrar tanımlamaya gerek duymuyor ve ayrıca
iki adet dil tanımınında gereksiz olduğunu kabul ediyor ve sonuçta
html5’teki tanımımız;

{% highlight html %}
<html lang="en"></html>
{% endhighlight %}

şeklinde oluyor.

## <head\> içi tanımlar

HTML5 sadece Doctype tanımını değil ayrıca <head> içinde kullandığımız
etiketleride ciddi manada basit hale getirmiştir.

Karakter kodu için kullandığımız

{% highlight html %}
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
{% endhighlight %}

Yerine HTML5 karışılığı

{% highlight html %}
<meta charset="UTF-8">
{% endhighlight %}

Gayet basit ve akılda kalıcı.

Gelelim script eklemek için kullandığımız koda;

{% highlight html %}
<script type="text/javascript" src="dosya_adi.js"></script>
{% endhighlight %}


HTML5'de ise;

{% highlight html %}
<script src="file.js"></script>
{% endhighlight %}

Benzer şekilde ilişkilendirilmiş dokümanlar için kullandığımız

{% highlight html %}
<link rel="stylesheet" href="style-original.css" type="text/css" />
{% endhighlight %}

yerine HTML5'de

{% highlight html %}
<link rel="stylesheet" href="style-original.css" />
{% endhighlight %}

İşin kısacası, tüm tanımları olabildiğince kısaltmışlar. Süperde
yapmışlar, şimdiye kadar bize çektirdikleri eziyet neydi kardeşim.

Sonuç olarak bir HTML5 basit yapısı

{% highlight html %}
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<title></title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta name="robots" content="" />
</head>
<body>
</body>
</html>
{% endhighlight %}


Şeklinde olacaktır.

## Kaynaklar

-   [http://www.w3schools.com/html5/tag_doctype.asp][]
-   [http://diveintohtml5.org/semantics.html][]
-   [http://www.smashingmagazine.com/2009/07/16/html5-and-the-future-of-the-web/][]
-   [http://boblet.tumblr.com/post/141239118/html5-structure4][]


  [Doğru DOCTYPE Kullanımı]: http://www.fatihhayrioglu.com/dogru-doctype-kullanimi/
  [http://www.w3.org/1999/xhtml]: http://www.w3.org/1999/xhtml
  [http://www.w3schools.com/html5/tag_doctype.asp]: http://www.w3schools.com/html5/tag_doctype.asp
  [http://diveintohtml5.org/semantics.html]: http://diveintohtml5.org/semantics.html
  [http://www.smashingmagazine.com/2009/07/16/html5-and-the-future-of-the-web/]: http://www.smashingmagazine.com/2009/07/16/html5-and-the-future-of-the-web/
  [http://boblet.tumblr.com/post/141239118/html5-structure4]: http://boblet.tumblr.com/post/141239118/html5-structure4
