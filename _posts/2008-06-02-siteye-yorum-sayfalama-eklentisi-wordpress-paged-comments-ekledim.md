---
layout: post
title: Siteye Yorum Sayfalama Eklentisi (WordPress Paged Comments) Ekledim
Date: 2008-06-02 15:13
Category: Haberler
tags: Paged Comments, sitemi düzenliyorum, yorum
---

Daha önce bir kaç kere aklıma geldi ama yapamadığım bir işti. En son bir
iki istek gelince bu yönde kurmaya karaverdim. Aslında ben buraya
eklentinin nasıl ekleneceğini yazmayacağım. Bir kaç ipucu ekledim onları
yazacağım. [Sırrı Özden][]'in Türkçeye çevirdiği eklentiyi ben [orjinal sitesinden][] yükledim. Görünümü değiştirmek için stil dosyama bir satır
css kodu ekledim.

1.  p.comment-page-numbers a{
2.  color:#333;
3.  }

Tek sorunum sıralamada her sayfayı 1,2,3...10 diye sıralaması idi. Benim
eski kodumda bir "i" değerini arttırarak bu değeri verdiği için

1.  <?php echo $i; ?>

şeklinde yorum sayısını yazdırıyordum. Burada yorum sayısını düzgün
sayması için yukarıdaki kodu

1.  <?php echo $comment_number; $comment_number +=
    $comment_delta;?>

bu kod ile değiştirdim düzeldi.


  [Sırrı Özden]: http://www.srro.net/paged-comments-yorum-sayfalama-eklentisi-turkce/
  [orjinal sitesinden]: http://www.keyvan.net/code/paged-comments/
