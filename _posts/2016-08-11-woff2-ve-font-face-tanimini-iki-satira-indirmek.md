---
layout: post
title: Woff2 ve font-face tanımını iki satıra indirmek
Date: 2016-08-11 17:50
categories: [CSS]
tags: [font-face woff2 safari ios]
---

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">There&#39;ll be woff2 support in Safari 10.<a href="https://t.co/CYy2Y4uIBY">https://t.co/CYy2Y4uIBY</a><a href="https://twitter.com/hashtag/webfonts?src=hash">#webfonts</a> Good news!<br><br>Also Font Loading! ❤️<br>IndexedDB!<br>ShadowDOM!</p>&mdash; Marco Hengstenberg (@nice2meatu) <a href="https://twitter.com/nice2meatu/status/763697596275843072">August 11, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Twiiter'da bu gönderiyi görünce [font-face tanımını yenileyelim](https://fatihhayrioglu.com/font-face-tanimini-yenileyelim/) yazısında yenilediğim font-face tanımını acaba iki satıra indirebilirmiyim dedim içimden.  

Woff formatı özel yazı tiplerinin kullanımının yayılması için güzel bir adımdı. 2. sürümü daha küçük yazı tipi dosyaları sağlayarak bunu bir adım daha ileri attı.

![enter image description here](https://fatihhayrioglu.com/images/yazi-tipi-boyutlari.png)

 Woff2 formatı bir önceki sürümüne nazaran %50'ye varan kazanım sağladı. Diğer yazı tiplerinden kat ve kat kazanımı olduğu resimde görünüyor.

Özel yazı tipi için mevcutta kullandığım kod;

```css
@font-face {
font-family: 'Open Sans';
src: local('Open Sans'), local('OpenSans'),
     url('open-sans.woff2') format('woff2'),
     url('open-sans.woff') format('woff'),
     url('open-sans.ttf') format('truetype'); /* Safari, Android, iOS */
}
```

Safari'nin yakın zamanda woff2 desteğini sunmasıyla birlikte tek sıkıntı Internet Explorer Edge 14'ün öncesi  ve Android Browser desteğinin küçülmesini beklemek olacak. Büyük sorun ie değil Android Browser.

Nihai kod aşağıdaki gib olacak inşallah;

```css
@font-face {
font-family: 'Open Sans';
src: local('Open Sans'), local('OpenSans'),
     url('open-sans.woff2') format('woff2');
}
```
Temiz.

## Kaynaklar

 - [https://www.w3.org/TR/WOFF2/](https://www.w3.org/TR/WOFF2/)
 - [http://caniuse.com/#search=woff2](http://caniuse.com/#search=woff2)
 - [http://thenewcode.com/976/Serving-Up-WOFF2-Fonts-For-Faster-Pages](http://thenewcode.com/976/Serving-Up-WOFF2-Fonts-For-Faster-Pages)
 - [https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html](https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html)