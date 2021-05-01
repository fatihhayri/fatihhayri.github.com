---
layout: post
title: WordPress İlgili Linkler Eklentisi(Related Posts Link)
Date: 2006-10-31 12:15
categories: [WordPress]
tags: [ilgili-linkler, related-articles, terong, WordPress]
---

**WP: İlgili Linkler Eklentisi**

Bu eklentiyi kurmak çok kolay. http://erwin.terong.com/2005/09/24/wp-plugin-related-posts-link
buradan aldığınız sayfayı wp-content/plugins klasörüne altına atın, daha
sonra Admin ekranından bu eklentiyi aktifleştirin.

Mevcut yazılarınızda veya ilk yazı yazarken "Kaydet ve Düzenle"
düğmesine bastıktan sonra gelen ekranda sağ üstte "Merhaba..." yazan
bölümün altında **Related Links** linki çıkıyor. Buraya tıklayınca
yazdığınız tüm yazıların popupta listesi geliyor ordan seçip Updates
düğmesine bastığınızda seçilen linkler yazdığınız yazının en altında
sıralanıyor.

Not: Eklenen Linklerin başlığı "Related Articles:" şeklinde çıkıyor. Bu
kısmı Yönetim ekranında "Eklenti Yöneticisi" kısmından "Terong Related
Links" seçip değiştirmelisiniz.

```php
$text .= "<p style="margin-top:
10px;"><strong>Related Articles:</strong></p>";
```


​241. satırdaki yukarudaki kodu aşağıdaki gibi değiştirin(Tabi burada
yazan "İlgili Linkler:" benim seçimim sizde sayfada görüntülenmesini
istediğiniz başlığı buraya yaza bilirsiniz) ve Güncelle düğmesine
tıklayın. İşlem Tamam

```php
[sourcecode language="php"]$text .= "<p style="margin-top:
10px;"><strong>İlgili Linkler:</strong></p>";
```

