---
layout: post
title: browserlist ve Autoprefixer'ı güncel tutmak
description: Desteklediğimiz tarayıcılar listesini güncel tutmak. Autoprefixer, babel, browserlist
lang: tr_TR
Date: 2018-07-05 14:06
categories: [CSS]
tags: [autoprefixer, browserlist, babel]
image:
  feature: browserlist-4.png
---

Geçenlerde bir makaleye denk geldim. [https://jamie.build/last-2-versions](https://jamie.build/last-2-versions) sitenin ardalan rengi kadar dikkat çekici bir konuyu ele almıştı. Özetle şöyle: Autoprefixer ve Babel gibi araçlar tarayıcı listesi bilgisini [browserlist](https://github.com/jonrohan/browserl.ist) kütüphanesinden alıyorlar. Desteklenen tarayıcı listesine göre bir çıktı oluşturuyorlar. Autoprefixer mesela oluşan listeye göre prefix oluşturuyor. Eğer listeniz eski kalmış ise hala eski tarayıcılar için kod üretiyor olabilirisiniz. Bu da kod boyunuzun artmasına neden olabilir. Babel kullanıyorsanız sonuçları daha kötü olabilr. 

Bizim projede biz Autoprefixer kullanıyoruz. Bizdeki tarayıcı listesi şöyle kalmış:

```javascript
...
"config": {
    "autoprefixerBrowsers": ["Android >= 5", "Chrome >= 43", "Firefox >= 44", "iOS >= 8.4"]
}
```
	
![browserlist](/images/browserlist-1.png)

Sadece tarayıcı listesinin olduğu eski ve eksik bir liste. Bu kullanımın şöyle bir dezajavantajı var; hızlı otomatik güncellenen tarayıcılar nedeniyle listeniz eski kalıyor. Ayrıca sizin sitenize gelen tarayıcı listesine yeni giren tarayıcıları kodun dışında tutmuş oluyorsunuz.

Daha aktif bir liste için tarayıcıların güncel son 2 sürümünü dikkate alacak şekilde kodu değiştirelim.

```javascript
...
"config": {
    "autoprefixerBrowsers": ["last 2 versions"]
}
```

	
![browserlist son 2 sürüm](/images/browserlist-2.png)

Bu kullanımda da sizin projenizin kapsamında olmayan tarayıcılar listenize girebilir.

 - Firefox for Android
 - QQ Browser1.2
 - Android Browser67
 - Android Browser4.4.3-4.4.4
 - Baidu Browser7.12
 - Blackberry Browser10
 - Blackberry Browser7
 - IE Mobile11
 - IE Mobile10
 - Opera Miniall
 - Opera Mobile46
 - Opera Mobile12.1

Bu listeyi daha dinamik ve kendi projemize uygun hale getirmek için aşağıdaki yöntemi kullanmalıyız.

```javascript
...
"config": {
    "autoprefixerBrowsers": [">0.50%"]
}
```

![browserlist yüzdeli](/images/browserlist-3.png)

Kullanım yüzdesi %0.5'in üstünde olan tarayıcı listesini kullan demek. Yüzde değerini projemize göre arttırıp azaltabiliriz. Buradaki sorunlardan birisi de bu tarayıcı kullanım oranı dünya geneli için olan kullanım oranıdır. Biz kendi projemizdeki kullanım oranına göre bu listeyi şekillendirmeliyiz. 

Yukarıdaki kodu yazınca bizim proje kapsamında olamayan aşağıdaki tarayıcılarda listeye girdi.

 - Android Browser4.4
 - Opera Miniall
 - IE11
 - Opera52
 - Safari11.1

[Browserlist kütüphanesi dokümanından](https://github.com/browserslist/browserslist#full-list) yardım alarak istemidiğimiz tarayıcıları bu listenin dışına atabiliriz. Ben koda etki eden iki tarayıcıyı listeden çıkarıp listemi son haline getiriyorum.

```javascript
...
"config": {
    "autoprefixerBrowsers": [">0.50%", "not android 4.4", "not ie 11"]
}
```

![browserlist yüzdeli ve kullanılmayan tarayıcı çıkar](/images/browserlist-4.png)

Bu tarayıcı listesinin autoprefixer'a girince nasıl bir çıktı üreteceğini [https://autoprefixer.github.io/](https://autoprefixer.github.io/) sitesinden test edebiliriz. Autoprefixer için güzel bir test aracı.

![autoprefixer test sitesi](/images/autoprefixer-test.png)

Tarayıcılar arayüz geliştirme ekiplerinin önemli bir parçası. Tarayıcılar konusundaki her gelişmeyi iyi takip etmeli ve projelerimizi bu gelişmelere göre güncel tutmalıyız.

Sağlıcakla kalın.

## Kaynaklar

 - [https://jamie.build/last-2-versions](https://jamie.build/last-2-versions)
 - [https://css-tricks.com/browserlist-good-idea/](https://css-tricks.com/browserlist-good-idea/)
 - [https://autoprefixer.github.io/](https://css-tricks.com/browserlist-good-idea/)
 - [https://github.com/browserslist/browserslist](https://github.com/browserslist/browserslist)