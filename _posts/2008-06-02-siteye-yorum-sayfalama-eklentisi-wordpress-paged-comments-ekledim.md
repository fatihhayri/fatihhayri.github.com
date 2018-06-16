---
layout: post
title: Siteye Yorum Sayfalama Eklentisi (WordPress Paged Comments) Ekledim
Date: 2008-06-02 15:13
Category: Haberler
tags: [Paged Comments, sitemi düzenliyorum, yorum]
---

Daha önce bir kaç kere aklıma geldi ama yapamadığım bir işti. En son bir
iki istek gelince bu yönde kurmaya karaverdim. Aslında ben buraya
eklentinin nasıl ekleneceğini yazmayacağım. Bir kaç ipucu ekledim onları
yazacağım. Sırrı Özden'in Türkçeye çevirdiği eklentiyi ben [orjinal sitesinden][] yükledim. Görünümü değiştirmek için stil dosyama bir satır
css kodu ekledim.

{% highlight css %}
p.comment-page-numbers a{
  color:#333;
}
{% endhighlight %}

Tek sorunum sıralamada her sayfayı 1,2,3...10 diye sıralaması idi. Benim
eski kodumda bir "i" değerini arttırarak bu değeri verdiği için

{% highlight php %}
<?php echo $i; ?>
{% endhighlight %}

şeklinde yorum sayısını yazdırıyordum. Burada yorum sayısını düzgün
sayması için yukarıdaki kodu

{% highlight php %}
<?php echo $comment_number; $comment_number +=
    $comment_delta;?>
{% endhighlight %}

bu kod ile değiştirdim düzeldi.

  [orjinal sitesinden]: http://www.keyvan.net/code/paged-comments/
