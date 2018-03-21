---
layout: post
title: Google Chrome Dev Tools ile Olayları (event) Yakalamak
Date: 2018-03-12 14:20
Category: CSS
tags: [google, devtools, ipuçu]
image:
  feature: devtools-olay-yaklama-giris.gif
---

Büyük çaplı projelerde bir elemana çok fazla olay tanımı yapılıyor. Sonra bir hata yakalamak için uğraşırken o elemana tanımlanmış olayları bulmak zaman alıyor bazen çile oluyor. Ben daha önce Firebug kullanırken bu iş için jQuery olaylarını yakayan bir eklenti kullanıyordum. Bazen iş görse de çok iyi çalışmıyordu. 

Chrome Dev Tools'da keşfettiğimden beri bu özelliği severek kullanıyorum. Aşağıdaki gibi bir eleman seçip **Event Listeners** sekmesini açınca (cmd+shift+p gelen panelde show Event Listeners) o elemana ve yukarıda doğru tüm elemanlara tanımlı olan olayları görüntüler. 

{% render_img /images/devtools-olay-yaklama-giris.gif "tüm olaylar" %}

Sadece seçtiğim eleman tanımlı olayları görmek istiyorum derseniz. **Ancestors** işaretini kaldırmanız yeterli.

{% render_img /images/devtools-olay-yaklama-jquery.gif "sadece seçili elemanın olayları" %}

Sadece elemana tanımlı olayı görüyoruz. Listelenen olayın solundaki oka basarak elemanı ve bu elemana tanımlı kodun hangi dosyada ve hangi satırda olduğunu görebiliriz.

{% render_img /images/devtools-olay-yaklama-jquery.gif "jquery sorunu" %}

jQuery kullanıyorsanız veya başka kütüphaneler içinde geçerli aynı durum size jQuery veya kullandığınız kütüphanenin olay tetikleyen kodunun yerini gösterir. Ancak bizim istediğimiz kendi kodumuzu bulmak. Bunun içinde **Framework listeners** işaret kutusunu işaretlememiz yeterlidir.

{% render_img /images/devtools-olay-yaklama-no-jquery.gif "son olay listesi" %}

Dosya ismi ve satır numarasını gösteren kısıma tıklayınca bizi aradığımız kod blokuna götürecektir.

{% render_img /images/devtools-olay-yaklama-son.gif "son kod" %}

Google Dev Tools ipuçları hakkında [Umar Hansa](https://twitter.com/umaar)'nın sitesi güzel bir kaynak takip etmenizi öneririm. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://developers.google.com/web/tools/chrome-devtools/console/events](https://developers.google.com/web/tools/chrome-devtools/console/events)
 - [https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners](https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners)
 - [https://umaar.com/dev-tips/158-framework-event-listeners/](https://umaar.com/dev-tips/158-framework-event-listeners/)
 - [https://umaar.com/dev-tips/71-jquery-event-listeners/](https://umaar.com/dev-tips/71-jquery-event-listeners/)

