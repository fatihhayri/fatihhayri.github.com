---
layout: post
title: jQuery DOM manipülasyonu metotlarında callback kullanmak
Date: 2017-01-12 09:48
categories: [Javascript]
tags: [jquery, callback, DOM]
---

Kod yazarken bazı alışkanlıklarımız oluyor. Kütüphanelerin ve standartların yeniliklerini takip etmeyince kullandığınız kodun daha basit ve sade olan yeniliklerinden haberimiz olmuyor. jQuery'nin yeniliklerini çok önemsemiyorum, ancak mevcut çalıştığım sitede ([zingat.com](https://www.zingat.com)) ve birçok projede jquery kullanmaya devam ediyoruz. Bu öğrendiğim özellik ile yeniliklerin takibinin önemini bir kez daha gördüm. 

Yapmak istediğim iş dinamik olarak değişen bir bağlantının sonuna bir parametre ekleme isteğim ile ortaya çıktı. Normalde kodumu aşağıdaki gibi yazarım.

```javascript
var _href = $("a.yasamskor-link").attr("href");
$("a.yasamskor-link").attr("href", _href + '&listType=table');
```

veya href değerleri farklı ise. 

```javascript
$("a.yasamskor-link").each(function() {
   var $this = $(this);       
   var _href = $this.attr("href"); 
   $this.attr("href", _href + '&listType=table');
});
```

gibi bir yol izliyordum. Sonra jQuery 1.4 (yuh be arkadaş 1.4) ile birlikte DOM manipülasyon metotlarında callback desteğinin geldiğini okuyunca.

```javascript
$("a.yasamskor-link").attr("href", function(i, href) {
  return href + '?listType=table';
});
```

şeklinde bir kullanımın daha basit ve anlaşılır olduğunu öğrendim. 

callback uygulanabilen metot listesi: after, before, append, prepend, addClass, toggleClass, removeClass, wrap, wrapAll, wrapInner, val, text, replaceWith, css, attr, html

Kalın sağlıcakla.

## Kaynaklar

 - [https://code.tutsplus.com/tutorials/jquery-14-released-the-15-new-features-you-must-know--net-8590](https://code.tutsplus.com/tutorials/jquery-14-released-the-15-new-features-you-must-know--net-8590) 12. sırada
 - [http://stackoverflow.com/a/2805905/296373](http://stackoverflow.com/a/2805905/296373)