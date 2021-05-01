---
layout: post
title: Javascript Türkçe anlaşılır tarih kullanımı
description: Javascript Intl.RelativeTimeFormat Türkçe anlaşılır tarih hazır nesnesi
lang: tr_TR
Date: 2019-12-27 09:10
categories: [Javascript]
tags: [tarih, RelativeTimeFormat]
---

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="tr" dir="ltr">Javascript&#39;e çok güzel bir özelik gelmiş.<br><br> <a href="https://t.co/Oi1Xzd8BtC">https://t.co/Oi1Xzd8BtC</a><br><br>kaynak: <a href="https://t.co/FbrYkUl7N7">https://t.co/FbrYkUl7N7</a> <a href="https://t.co/umjhTCKh6J">pic.twitter.com/umjhTCKh6J</a></p>&mdash; Fatih Hayrioğlu (@fatihhayri) <a href="https://twitter.com/fatihhayri/status/1206433783089639424?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Twitter'da paylaştım ancak twitter'da yazılan zamanla kayboluyor, bundan dolayı buraya yazayım dedim. Herhangi bir kütüphane kullanmadan bu işi yapabiliyor olmak süper.

```js
const anlasilirSaat = new Intl.RelativeTimeFormat('tr', { numeric: 'auto' });

console.log(anlasilirSaat.format(-1, 'hour'));
//konsol çıktısı: "1 saat önce"
```