---
layout: post
title: CSS&#039;e başlamak
Date: 2006-05-19 16:11
categories: [CSS]
tags: [CSS, css-avantajları]
---

Cascading Style Sheets (CSS) HTML dokümanlarına stil eklemesi (örn: yazı tipi, boşluklar, renkler vd.) yapan basit bir mekanizmadır. CSS 1996'da
[W3C][] tarafından duyurulmuştur.

CSS kullanımının birçok bakımdan
avantajları bulunmaktadır. Belli başlı avantajlarını sıralarsak:

## Görünüm Avantajları

CSS HTML'e göre birçok stil özelliğine sahiptir. CSS'in sayfa içeriği
öğelerinin sayfa görünümü öğelerinden ayrılması için geliştirildiğini
düşünürsek avantajı baştan anlaşılmış olur.

## Kullanım Kolaylığı

HTML'de her elmente artı özellikler eklemek için başka bir element ve
özellik eklmemiz gerekiyor ve bu işlemi geniş çaplı bir sitede yaptığımızı
düşünürseniz çok büyük zaman kaybı ve uğraş gerektiğini göreceksiniz. CSS ile bir kere eklenen bir sınıf sınırsız yerde kullanılabilir.

```html
<h1>
  <font color="blue">Başlık</font>
</h1>
```

Bunun gibi onlarca veya yüzlerce başlığınız olduğunu düşünün, gerçekten çok zor. CSS'de aynı işlem için

```css
h1 {
  color: blue;
}
```

hatta daha sonra bu elementin özelliklerinde değişiklik yapmamızda kolay olacaktır. Hatta bu
işlemi sadece bu etiket için değil diğer etiketlerede uygulayabiliriz.

```css
h1, h2 {
  color: blue;
}
```

Ayrıca tek bir CSS dosyası ile sitenin tamamının yönetmekte önyüz kodlayıcıları
için çok büyük kolaylıktır. Sadece bir dosya da değişlik yaparak tüm
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

## Gelecek Vadediyor

HTML ile farklı platformlara(pda,cep telefonu vs.) uyum sayesinde bilgi dolaşımı
kolaylaşacak, sayfalarımız arama motorları programları tarafından daha
anlaşılır olacaktır. CSS, HTML teknolojisi ile tümleşik olarak
çalışarak bizlere gelecek vadediyor.


  [W3C]: http://www.w3.org/
  [http://www.w3c.org/Style/CSS/current-work]: http://www.w3c.org/Style/CSS/current-work
