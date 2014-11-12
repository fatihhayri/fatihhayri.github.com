---
layout: post
title: CSS Yorumlarında Türkçe Karakter Kullandığımızda İE6&#039;da Sorun Çıkarıyor
Date: 2009-11-12 23:00
Category: CSS
tags: ie6, sorun, Türkçe-karakter, yorum-satırı
---

Bu durumla bir kaç defa karşılaştım ve sonuncusunda [FirendFeed][]'de
yazdım, hatta benden önce [Burak Dönertaş][]'da yazmış konuyu. Konuyu
biraz daha ayrıntısı ile burada paylaşmak istedim.

Sorunu başlıkta açıklayıcı bir şekilde anlattım sanırım. Biraz daha
açarsam; css kodlarımızı yazarken çeşitli notlar alırız, örneğin sayfa
yapısını oluşturan alanların isimleri(ustAlan), farklı tarayıcılar için
yaptığımız düzeltmeler için tuttuğumuz notlar(kapsayamamaSorunu) vb.

CSS yorum satırları **/* yorum */** işaretleri içinde yazıyoruz ve
tarayıcılar bunları görmezden geliyor.

İnternet Explorer 6 eğer dosyanız UTF-8 ile kaydedilmemiş ise sorun
çıkarıyor. Burada dosyayı utf-8 ve utf-8 BOM'suz kaydetmek arasında bir
fark olmadı. Örnek dosyamı utf-8 ve utf-8 BOM'suz kaydettiğimde bu sorun
düzeldi. Utf-8 ile kaydedince Türkçe karakterler bozuldu ancak tekrar
yazıp kaydedince bir sorun olmadı.

{% highlight html %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style type="text/css">
@import url("stil.css");
</style>
</head>
<body>
<p class="deneme1 deneme2">Fatih Hayrioğlu burada yorum yazmış sanane ie6, sen niye sorun yapıyorsun ki bu olayı.</p>
</body>
</html>
{% endhighlight %}

Bir paragraf yazı yazdık. Daha sonra

{% highlight css %}
.deneme1{
	font:12px Arial, Helvetica, sans-serif
}
/*Türkçe katakter içermeyecek miş*/
.deneme2{
	color:#f00
}
{% endhighlight %}

Css dosyasının içine yukarıdaki kodları yazdım. CSS dosyasını eğer ANSI
formatında kayıtlı ise ie6 css kodlarımı görmüyor.

![ansi_ff][]

Firefox ve diğer tarayıcılar ansi olmuş utf-8 olmuş fark etmiyor. Ama

![ansi_ie6][]

İE6'da ise yukarıdaki gibi Türkçe karakter içeren yorum sonrasındaki
sınıfı görmüyor. Daha sonra css dosyasını utf-8 olarak kaydedince sorun
ortadan kalktı.

![utf8_ie6][]

Eğer html ve css aynı karakter kodunda ise sorun olmuyor mesela ikiside
iso-8859-9 ise sorun olmuyor. Ama ne zaman html utf-8 css iso-8859-9
olursa sorun oluyor.

Not: Karakter kodu değişiklikleri için NotePad++ kullandım.

  [FirendFeed]: http://ff.im/af0XB
  [Burak Dönertaş]: http://ff.im/86KsI
  [ansi_ff]: /images/ansi_ff.gif
  [ansi_ie6]: /images/ansi_ie6.gif
  [utf8_ie6]: /images/utf8_ie6.gif
