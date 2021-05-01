---
layout: post
title: jQuery'nin sonu mu geldi?
Date: 2017-07-14 09:05
categories: [Javascript]
tags: [normal js, jquery]
---

Uzun seneler web siteleri kodlarken nimetlerinden yararlandığımız jQuery, mobilin yükselişi ile gündemin ana maddesi olan performans sonrası yerini sorgulatıyor. Acaba normal javascript ile ben jquery'nin yaptıklarını yapamaz mıyım. Aslında Javascript'in hızlı yenilenmesi ile birlikte bir çok özelliği, metodu, fonksiyonu normal javascript ile yapabiliyoruz.

Bu yazı dizisini de şu an üzerinde çalıştığım  [zingat.com](http://www.zingat.com)'da üzerine uzun süredir kafa yorduğumuz performans işlerinin bir sonucu olarak "acaba jQuery kaldırsak daha mı hızlanırız?" sorunundan sonra başladım. 

Jquery'nin sağladığı avantajları bilip bunlara karşı çözümler aramalıyız. 

 - Kolay yazım
 - Tarayıcı desteği
 - Geniş topluluk desteği
 - jQuery kütüphanelerinin yaygınlığı
 - Dokümantasyon ve makale bolluğu

## Kolay yazım

jQuery bir çok işimizi kolaylaştıran seçiciler, manipülasyon işleri ve kullanışlı metotlar sayesinde kod yazanlara kolaylıklar sağlar. 

Gelişen javascript sürümleri ile jQuery ile yaptığımız kolaylıkta bu işleri artık javascripte yapabiliyoruz.

## Tarayıcı desteği

Farklı tarayıcılar için çözüm oluşturmak için jQuery birebir.

Tarayıcıların otomatik güncellenmesi ile bu sorun büyük oranda azaldı.

## Geniş topluluk desteği, jQuery kütüphanelerinin yaygınlığı ve Dokümantasyon ve makale bolluğu

jQuery geliştiren ve çözüm üreten bir çok insan var.

Performans sorunları sonrası bu ibre normal javascript tarafına yöneliyor.

Şimdi jquery ile yaptığımız işleri native javascript ile nasıl yapacağımıza tek tek bakalım.

İlk konu basit olsun. Javascript DOM işleri ile uğraştığımız için javascript'in çalışması için genelde DOM'un yüklenmesini bekleriz. 

Meşhur jquery girişi:

	```javascript
	$(document).ready(function() { 
	  // DOM hazır
	});
	```

veya kısa şekli

	```javascript
	$(function() {
	  // DOM hazır
	});
	```

Peki bu kodu javascript ile nasıl yaparız. İki yöntem var tercih sizin.

**DOMContentLoaded**

	```javascript
	document.addEventListener('DOMContentLoaded', function() {
	  // DOM hazır
	});
	```

**onreadystatechange**

	```javascript
	document.onreadystatechange = function () {
	  if (document.readyState == "complete") {
	    // DOM hazır
	  }
	}
	```

Nasıl güzel değil mi?

Kalın sağlıcakla.

## Kaynaklar
 - [http://kangax.github.io/compat-table/es5/](http://kangax.github.io/compat-table/es5/)
 - [https://johnresig.com/blog/ecmascript-5-objects-and-properties/](https://johnresig.com/blog/ecmascript-5-objects-and-properties/)
 - [https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/](https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/)
 - [http://caniuse.com/#search=ECMAScript%205](http://caniuse.com/#search=ECMAScript%205)
 - [https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery](https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery)
 - [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
 - [https://plainjs.com/javascript/utilities/](https://plainjs.com/javascript/utilities/)
 - [https://blog.garstasio.com/you-dont-need-jquery/](https://blog.garstasio.com/you-dont-need-jquery/)