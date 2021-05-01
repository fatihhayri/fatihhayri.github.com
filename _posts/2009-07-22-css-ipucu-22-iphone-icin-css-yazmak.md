---
layout: post
title: CSS İpucu 22&#58; iPhone için CSS Yazmak
Date: 2009-07-22 12:38
categories: [CSS]
tags: [CSS, iPhone]
---

![apple-iphone][]

Gelişen ve yaygınlaşan mobil cihazlar bizlere bir mecra
daha açacağa benziyor. Gelecekte etkisini daha çok hissettirecek cep
telefonu vb. ürünlerden internete girme isteği. Şimdilerde kendini
gösteriyor. Benim size burada bahsedeceğim ipucu küçük ama kullanışlı
bir ipucu olacaktır.

Bir kaç sitede gördükten sonra ve bende bir iphone projesine başlayacak
olmamdan dolayı buraya eklemeyi uygun gördüm. Daha önce [çıktı almak için(print)][] benzer bir yapıyı kullanmıştık.

Kodumuz çok basit

```html
<!--[if !IE]>–> <link media="only screen and (max-device-width: 480px)" href="iPhone.css" type="text/css" rel="stylesheet" /> <!–<![endif]–>
```

veyahut

```css
@media only screen and (max-device-width:480px) {   
	body {
		color:#000;
	}
}
```

şeklinde bir tanımlamada yapabiliyoruz. İlk koddaki ie şartlı koşulu
bazı eski ie sürümlerinde bu kodu algılama durumu içindir.

Yukarıdaki tanımlar sadece iPhone'da görünecektir. İşin püf noktasını
**max-device-width: 480px** kısmı oluşturuyor.

## **Kaynaklar**

-   [http://www.w3.org/TR/css3-mediaqueries/][]
-   [http://www.evotech.net/blog/2007/07/web-development-for-the-iphone/][]
-   [http://squaregirl.com/blog/2009/6/1/iphone-css.html][]

  [apple-iphone]: /images/apple-iphone.jpg
    "apple-iphone"
  [çıktı almak için(print)]: http://fatihhayrioglu.com/cssde-cikti-alma-print/
    "çıktı almak için(print)"
  [http://www.w3.org/TR/css3-mediaqueries/]: http://www.w3.org/TR/css3-mediaqueries/
    "http://www.w3.org/TR/css3-mediaqueries/"
  [http://www.evotech.net/blog/2007/07/web-development-for-the-iphone/]: http://www.evotech.net/blog/2007/07/web-development-for-the-iphone/
    "http://www.evotech.net/blog/2007/07/web-development-for-the-iphone/"
  [http://squaregirl.com/blog/2009/6/1/iphone-css.html]: http://squaregirl.com/blog/2009/6/1/iphone-css.html
    "http://squaregirl.com/blog/2009/6/1/iphone-css.html"
