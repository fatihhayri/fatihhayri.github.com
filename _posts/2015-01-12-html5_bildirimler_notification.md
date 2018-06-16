---
layout: post
title: HTML5 Bildirimler(Notification)
Date: 2015-01-12 11:05
Category: html
tags: [html5 bildirimler]
---

HTML5 API'leri, mobil uygulamalarda olup web sayfalarında kullanamadığımız özellikleri API olarak ekleyerek eksikleri gideriyor. Bunlardan bir tanesi de Web Notification API. Mobil uygulamlarda kullanıcıya anlık bildirimler göndermek için kullanılan bilgileri bu API sayesinde web sayfalarımızdan da yapabiliyoruz. 

HTML5 ve CSS3 özellikleri hala geliştirilmekte olduğu için zamanla değişim gösterebiliyor. Bu özellikte ilk çıktıktan sonra güncellendi ve 19 Nisan 2014'de onaylanarak kararlı hale geldi.

Kullanıcıyı bilgilendirmek için çok güzel bir yöntem.

Bu işi nasıl yaptığımıza bakalım.

## Tarayıcı desteği kontrolü

İlk olarak kullanıcının tarayıcısı bu özelliği desteliyormu kontrolünü yapalım.

{% highlight javascript %}
// İlk kontrol tarayıcının bu özelliği destekleyip desteklemediğini sorgulamak
if (!("Notification" in window)) {
  alert("Bu tarayıcı web bilgilendirme özelliğini desteklemiyor.");
}
{% endhighlight %}

Burada uyarı vermek yerine desteklemeyenler için çözüm üreten sistemler entegre edilebilir. [https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#notification-api](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#notification-api)

## Kullanıcıdan izin alma kısmı

HTML5'in yeni API'lerinde bir özelliği kullanıcıya sorupta kullanma pratiği yaygınlaşıyor. HTML5 Bildirimlerinde de aynı durum söz konusu. Kullanıcıya bildirim almak istermisin diye soralım.

{% highlight javascript %}
// Daha önce kullanıcı izin verdi ise
else if (Notification.permission === "granted") {
    // Bilgilendirme popup'ını çıkaralım.
    var notification = new Notification("Merhaba dünya!");
}
{% endhighlight %}

Eğer onay yoksa tekrar onay isteme ve bildirim oluşturma kısmı

{% highlight javascript %}
// Eğer onay yoksa
else if (Notification.permission !== 'denied') {
// Kullanıcıdan onay ise
Notification.requestPermission(function (permission) {
  // Kullanıcı onaylamadı ise tekrar soralım
  if (permission === "granted") {
    // onaylarsa bilgilendirme popup'ı aç
    var notification = new Notification("Merhaba dünya!");
  }
});
}
{% endhighlight %}

Kod kısmı bu kadar basit. Daha detaylı bildirimlerde oluşturabiliyoruz.

<iframe height='350' scrolling='no' src='//codepen.io/fatihhayri/embed/EaZxzw/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

Başlık, içerik, ikon, etiketleme, metin başlangıç yönü ve dil seçeneklerini tanımlayabiliyoruz.

![HTML5 bilgilendirme][html5_bilgilendirme]

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**22**|**-**|**22**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**-**|**-**|**-**|
{: .tarayici-uyumi}


Mobil tarafında sadece Firefox(onunda desteği az) destekliyor. Diğer mobil tarayıcılar da desteklerse süper olacaktır.

## Kaynaklar

 -  [http://www.html5rocks.com/en/tutorials/notifications/quick/](http://www.html5rocks.com/en/tutorials/notifications/quick/)
 - [https://developer.mozilla.org/en-US/docs/Web/API/notification](https://developer.mozilla.org/en-US/docs/Web/API/notification)
 - [http://www.sitepoint.com/introduction-web-notifications-api/](http://www.sitepoint.com/introduction-web-notifications-api/)
 - [http://caniuse.com/#feat=notifications](http://caniuse.com/#feat=notifications)
 - [http://www.w3.org/TR/notifications/](http://www.w3.org/TR/notifications/)
 - [https://notifications.spec.whatwg.org/](https://notifications.spec.whatwg.org/)
 - [https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
 - [http://blog.teamtreehouse.com/adding-desktop-notifications-to-your-web-applications](http://blog.teamtreehouse.com/adding-desktop-notifications-to-your-web-applications)
 - [http://blog.brunoscopelliti.com/start-using-web-notification](http://blog.brunoscopelliti.com/start-using-web-notification)

[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
[html5_bilgilendirme]: /images/html5_bilgilendirme1.jpg