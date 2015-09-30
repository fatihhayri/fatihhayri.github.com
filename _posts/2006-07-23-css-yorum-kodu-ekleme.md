---
layout: post
title: CSS İpuçları 7 &#58; CSS yorum kodu ekleme
Slug: css-yorum-kodu-ekleme
Date: 2006-07-23 23:20
Category: CSS, Web Standartları
tags: CSS, iki-satır-yorumlar, uzun-yorumlar, Web Standartları, yorum
---

CSS kodlarımızı yazdığımızda kod yapımız, kullandığımız teknikleri ve
diğer özel uygulamalarımız için yorum satırları eklemeliyiz. Çünkü daha
sonra kodumuzu incelerken bu yorumlar bize yardımcı olacaktır. Ayrıca
bir proje üzerinde birden fazla kişi çalışıyorsa diğer çalışanlar için
bu kodlar önemli bilgiler içerecektir.

CSS'de yorum eklemek çok kolaydır.

{% highlight css %}
/* Genel Stiller */
    body {
        font-size: 67.5%;
        /* genel font tanımı */
    }
/* Birden fazla satır içeren kodları bu şekilde kullanabilriz. */
{% endhighlight %}

