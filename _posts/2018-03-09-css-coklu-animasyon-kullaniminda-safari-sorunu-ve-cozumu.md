---
layout: post
title: CSS Çoklu Animasyon Kullanımında Safari Sorunu ve Çözümü
Date: 2018-03-09 16:20
Category: CSS
tags: [css, animation, safari, sorun]
image:
  feature: chrome-devtools-animation.gif
---

[zingat.com](http://zingat.com) listeleme sayfalarının mobil görünümünde kullandığımız **Filtrele** butonunun daha fazla dikkat çekmesi için bir animasyon uygulayalım diye karar verdik.

Animasyon olarak kalp atışı (pulse) şeklinde bir animasyona seçtik. Animasyon 3 kere tekrarlayacak ve bitecekti. İstek güzel hoş örnekleri de var. Yapalım dedik ve yaptık. Animasyon mantığı şöyle; Butona bir **box-shadow** tanımlayalım ve bu **box-shadow**'u yayılan bir dalga gibi büyütelim.

<iframe height='367' scrolling='no' title='YeJeKQ' src='//codepen.io/fatihhayri/embed/YeJeKQ/?height=367&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/YeJeKQ/'>YeJeKQ</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Sonra bu animasyon 3 kere tekrar etsin dursun 5sn sonra tekrar 3 kere tekrar etsin isteği geldi. Aklıma çoklu animasyon desteği geldi. Aynı animasyonu çoklu olarak tanımlarsam olur dedim. 

![chrome devtools amination](/images/chrome-devtools-animation.gif)

İkinci animasyon tanımında ilk animasyon süresi ve 5sn ekleyip tanımlarsam gayet güzel ve temiz bir çözüm olur dedim. Bu arada Chrome DevTools'un Animation sekmesi bu konuda çok yardımcı oldu.

<iframe height='366' scrolling='no' title='Kalp atışı animasyonu' src='//codepen.io/fatihhayri/embed/KoKeoj/?height=366&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/KoKeoj/'>Kalp atışı animasyonu</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Yaptım oldu herşey ta ki Safari'de örneğe bakana kadar. Safari'de aynı isimde iki animasyonu ard arda çalıştırmıyor. Bunun için aynı animasyonu farklı isimle tekrar oluşturdum. Çok çakma bir çözüm ama benim işime yaradı. 

<iframe height='374' scrolling='no' title='Kalp atışı animasyonu' src='//codepen.io/fatihhayri/embed/bvGXrW/?height=374&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/bvGXrW/'>Kalp atışı animasyonu</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Not: Ben başka bir sorun daha yaşadım ama tekrarlayamadığım için ve sadece zingat.com'da olduğu için buraya yazmadım. Animasyon normalde çalışmadı, javascript ile sayfa yüklendiğinde ilgili elemana bir sınıf tanımladım ve CSS'te bu sınıf varsa animasyonu uygula dedim.

Safari can sıkıyor.

Kalın sağlıcakla.

# Kaynak
 - [http://fatihhayrioglu.com/css3-animasyonanimation/](http://fatihhayrioglu.com/css3-animasyonanimation/)