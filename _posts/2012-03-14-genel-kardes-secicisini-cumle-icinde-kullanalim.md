---
layout: post
title: ~  &quot;Genel Kardeş Seçicisini&quot;  Cümle İçinde Kullanalım
Date: 2012-03-14 14:55
Category: CSS
tags: [ardışık elemanlar, Genel Kardeş Seçiciler, General Sibling Selector, ie6yaolum]
---

Okul yıllarına döndüm bir an. Türkçe derslerinde bir atasözü veya deyim
verip bunu cümle içerisinde kullanın diye sorular çıkardı. Normalde
kullanmadığımız veya az kullandığımız atasözü veya deyimleri biz genç
dimağlara öğretmek adına sorulurdu bu sorular.

CSS’de de benzer şekilde nadiren kullandığımız özellikler var. İşin
özüne gelelim. Ben şimdiye kadar hiç kullanmadığım Genel Kardeş
Seçicilerini kullanma imkanı buldum. Kullandığım yerde bana çok büyük
kolaylık sağladığı için sizlerle paylaşmak istedim.

Genel Kardeş Seçicileri; aynı seviyedeki elemanları yakalamak için
CSS2.1’in bize sunduğu güzel özelliklerde güzel bir özellik. ie6’nın
desteklememesi en büyük sorun idi. [İnternet Explorer 6 sürümü desteğini kaldırdıktan][] sonra bu seçiciyi rahat rahat kullanabiliyoruz artık.

Karşıma çıkan iş ve Genel Kardeş Seçicisinin bana sağladığı kolaylık.

Şeklinde bir liste veya menümüz var. Burada her üç öğenin olduğu
durumlarda var, sadece bir tanenin olduğu durumlarda. Tek bir eleman
olduğunda aradaki çizgi yok. İki veya daha fazla eleman olduğunda iki
eleman arasında bir çizgi konuyor.

**![][100]**

Tam bu noktada Genel Kardeş Seçicileri devreye giriyor.

{% highlight css %}
li ~ li {
	border-top:1px solid red;
	padding-top:5px;
	margin-top:5px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 200px" src="https://jsfiddle.net/fatihhayri/CZxWW/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Tanımı tüm dertlerimize son veriyor. Eğer tek eleman varsa bu seçici es
geçiliyor. Ama iki veya daha fazla eleman var ise bu seçici devreye
giri""yor ve ilk eleman hariç tüm elemanların üstünü çiziyor ve
mesafeleri ayarlıyor.

Daha önceleri javascript veya dinamik bir dil ile çözüm ürettiğimiz bu
durum için CSS ile çözüm bulmak süper bir duygu.

Aynı sorunu first-child ile çözebileceğim aklıma geldi akşam bir an.
Tabi iki satır kod bloğu oluyor. Minimum kod ile çözmek istersek Genel
Kardeş Seçicilerini tercih edeceğiz.  :D

<iframe style="width: 100%; height: 200px" src="https://jsfiddle.net/fatihhayri/EUm8J/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Kalın sağlıcakla.

  [İnternet Explorer 6 sürümü desteğini kaldırdıktan]: http://fatihhayrioglu.com/ie6-sonrasi-kod-yazma-aliskanliklarimizi-guncellemek/
  [100]: https://lh3.googleusercontent.com/iwqzp6tzoCPEOEadycd9Sfi5kZOPYqGhmNHUGkqZuH3Gic9JtK8wSlqtXyXZSyWW1c4MmoF12aID4C4WJEMbsWAbUjBU8VOEJ9pzX54JLqUzkAeJdIo
