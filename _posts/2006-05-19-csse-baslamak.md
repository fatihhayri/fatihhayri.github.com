---
layout: post
title: CSS&#039;e başlamak
Date: 2006-05-19 16:11
Category: CSS, Web Standartları
tags: başlamak, CSS, css avantajları, esnek yapı, ilk-adım, Web Standartları
---

Cascading Style Sheets (CSS) HTML 'deki bazı problemleri halletmek için
ama asıl neden olarak da; web sayfası içeriği ve web sayfası görünümünü
birbirinden ayırmak için oluşturulan bir standarttır. CSS 1996'da
[W3C][] tarafından duyuruldu. Son olarak CSS2.1 versiyonu işler
durumdadır. CSS3.0'da çalışmaları devam etmektedir. CSS3.0 için
ayrıntılı bilgiye [http://www.w3c.org/Style/CSS/current-work][]
adresinden ulaşabilirsiniz. CSS kullanımının bir çok bakından
avantajları bulunmaktadır. Belli başlı avantajlarını sıralarsak:

## Görünüm Avantajları

CSS HTML'e göre bir çok stil özelliğine sahiptir. CSS'in sayfa içeriği
öğelerinin sayfa görünümü öğelerinden ayrılması için geliştirildiğini
düşünürsek avantajı baştan anlaşılmış olur.


## CSS'e Giriş

HTML'de bu elementi(h1) kalın,altı çizili, ardalanı
kırmızı olarak atama gibi çeşitli stiller verbiliriz ancak bunlar içinde
ayrı HTML elementleri kullanmak zorundayız (örn:strong, gibi), ancak CSS
de bunu tek bir elementle yapabiliriz ve ayrıca daha fazla stil
özellikleride atayabiliriz.(örn: kenarlık, rollover vs stillerini
ekleyebiliriz.)

{% highlight css %}
h1 {
  color: white;
  font:italic 11px Arial, serif;
  text-decoration: underline;
  background: yellow url(titlebg.gif) repeat-x;
  border: 1px solid red;
  margin-bottom: 0;
  padding: 5px;
}
{% endhighlight %}

## Kullanım Kolaylığı

HTML'de her elmente artı özellikler eklemek için başka bir element ve
özellik eklmemiz gerekiyor ve bu işlemi geniş çaplı bir sitede yaptığımızı
düşünürseniz çok büyük zaman kaybı ve uğraş gerektiğini göreceksiniz.

{% highlight html %}
<h1>
  <font color="blue">Başlık</font>
</h1>
{% endhighlight %}

Bunun gibi onlarca veya yüzlerce başlığınız olduğunu düşünün, gerçekten çok zor. CSS'de aynı işlem için

{% highlight css %}
h1 {
  color: blue;
}
{% endhighlight %}

hatta daha sonra bu elementin özelliklerinde değişiklik yapmamızda kolay olacaktır. Hatta bu
işlemi sadece bu etiket için değil diğer etiketlerede uygulayabiliriz.

{% highlight css %}
h1, h2 {
  color: blue;
}
{% endhighlight %}

Ayrıcatek bir CSS dosyası ile sitenin tamamının yönetmekte web kodlamacıları
için çok büyük kolaylıktır. Sadece bir dosyada değişlik yaparak tüm
sitemizi yönetebiliriz isterse yüzlerce sayfa olsun.

## Tasarım Tutarlılığı

Tek CSS dosyası ile tüm sitenizi yönetebilirsiniz bu ayrıca sitenize
tutarlılık kazandıracaktır. Tüm sayfalarınıza aynı stil elementlerini ve
özelliklerini atayarak sayfa tutarlılığını sağlayabilirsiniz. Web
sayfanızdaki ilk sayfadan son sayfaya kadar tutarlılığınızı koruyarak
ziyaretçinize düzenli bir içerik sunmuş olacak ve sitenizin kendine has
özelliklerini ziyaretçiye benimsetmiş olacaksınız. Sayfalar hızlı
yüklenecek ve doğru olarak yüklenecektir, çünkü aynı elementleri diğer
sayfalarda tekrar yüklemeyecek ve bu ziyaretçiye zaman kazandıracaktır.
CSS+XHTML ile HTML göre %50'ye varan performans ve hız artışları
olacaktır.

## Gelecek Vaadediyor

HTML giderek işlevselliğini kaybedeceği ve XML ve dolayısı ile XHTML'in
işlevselliğini artıracağı düşünülürse, CSS gibi tümleşik bir stadardın
önemi daha çok anlaşılıyor. XHTML ile daha temiz kodlar üretilecek,
farklı platformlara(pda,cep telefonu vs.) uyum sayesinde bilgi dolaşımı
kolaylaşacak, sayfalarımız arama motorları programları tarafından daha
anlaşılır olacaktır. CSS, XHTML teknolojisi ile tümleşik olarak
çalışarak bizlere gelecek vaadediyor.


  [W3C]: http://www.w3.org/
  [http://www.w3c.org/Style/CSS/current-work]: http://www.w3c.org/Style/CSS/current-work
