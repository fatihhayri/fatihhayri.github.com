---
layout: post
title: ES6'de "use strict" Kullanımına son
Date: 2018-04-27 11:41
Category: Javascript
tags: [es6, use-strict]
image:
  feature: es6.jpeg
---

[zingat.com](https://zingat.com)'da kullanıcı oranı % 0.7 seviyelerine düşen Internet Explorer 11 desteğini yakın zamanda sonlandıracağız. Bunun biz kod yazarlarına bazı kazançları olacak. Bunların başında javascript ES6 standardına geçme imkanı sağlaması olacaktır. Bu geçişi [Babel](https://babeljs.io/) ile daha önce de yapabilirdik ancak nasip olmadı. Nasip IE'yi bitirme adımı sonrasınaymış. Bu geçiş sürecinde yaptığımız değişiklik ve yenilikleri buraya yazmayı düşündüm ve hayata geçiriyorum.

**İlk madde: Strict Mode**

ES5 ile seçmeli olarak gelen Strict Mode kullanımı ES6 ile birlikte başlangıçta geliyor. Javascript esnek bir betik dili olarak hayatına başladı. Sonra geliştikçe ve dil olmaya başladıkça diyelim kurallar gelişmeye ve insanları bu kurallara zorlamaya başladı. Şimdi bu kurallara uymak zorunlu demeye başlıyor.

> Javascript katı kuralları kullan (Strict Mode) hakkında daha detaylı bilgiye kaynaklar kısmında yer verdiğim Türkçe kaynaklardan ulaşabilirsiniz.

ES5 ile birilikte eğer projemizde bu kurallara uymalısınız demek için 

{% highlight javascript %}
'use strict';
{% endhighlight %}

kodunu kodumuzun veya kod blokumuzun içine yazmamız gerekiyordu. 

--ES6 sonrası bu satırı yazmaya gerek yok. :)--

[Doğan](https://twitter.com/dodothebird)'ın uyarıyla bir düzeltme yapacağım ES6 sadece module yapı kullanılan yerlerde 'use strict' kullanmay gerek duymuyor. Onun dışında aynen devam. [https://stackoverflow.com/questions/31685262/not-recommended-to-use-use-strict-in-es6/31685340#31685340](https://stackoverflow.com/questions/31685262/not-recommended-to-use-use-strict-in-es6/31685340#31685340)

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
 - [http://f.github.io/javascript-te-use-strict-kullanimi.html](http://f.github.io/javascript-te-use-strict-kullanimi.html)
 - [http://mahmutbayri.com/2013/javascript-strict-mode/](http://mahmutbayri.com/2013/javascript-strict-mode/)
 - [https://www.haydarcan.com/javascript-strict-mode-nedir/](https://www.haydarcan.com/javascript-strict-mode-nedir/)
 - [https://www.buraktokak.com/javascriptte-use-strict-ne-icin-kullanilir/](https://www.buraktokak.com/javascriptte-use-strict-ne-icin-kullanilir/)