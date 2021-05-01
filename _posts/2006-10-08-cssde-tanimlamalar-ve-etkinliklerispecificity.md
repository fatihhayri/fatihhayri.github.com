---
layout: post
title: CSS&#039;de Tanımlamalar ve Etkinlikleri(Specificity)
Date: 2006-10-08 12:22
categories: [CSS]
tags: [class, CSS, css2, CSS2.1, id, important, öncelik, özellik, seçici, Specificity, HTML]
---

CSS'de etkinliğin anlamı stil çatışması(aynı elemente birden fazla tanım
yapıldığında) olduğunda kullanılan hangi kodun web tarayıcıları
tarafından yorumlanacağını belirlemektir.

Bir XHTML sayfamıza iki adet stil dosyası eklediğimizi düşünelim. Fakat
bu stil dosyalarımızdan birinde **h1** elementine bold özelliği
atanmışken diğer stil dosyamızda italiktik özelliği atanmış. Bu durumda
web tarayıcıları hangisini uygulayacaktır. Hangisinin etkin olduğunu
bulup ona göre sayfayı yorumlayacaktır.

Burada iki tanımlamanın yakınlık dereceleri aynı. O zaman hangisi
uygulanacak. Böyle durumlarda web tarayıcıları kendilerine has garip bir
hesaplama sistemi kullanırlar. Kuralları aşağıdaki gibidir.

-   Kod içinde tanımlama yapılmışsa (inline-kod)
-   Stil dosyasındaki tanımlı ID'lerin sayısına
-   Sınıf tanımlalarının sayısına
-   Seçicilerin sayısına bakar


Kod içinde tanımlama yapılmışsa (inline-kod) kısmı CSS2.1 ile gelen yeni
bir özelliktir ve etkinlik değerini 4 basamağa çıkarmıştır. CSS2 ve
öncesinde üç basamaklı hesaplama yapılmakta idi, kod içindeki
tanımlamalar üç başamağa göre 1,0,0 olarak belirlenirdi.


Web tarayıcısı bu sayıları toplamaz. Yalnızca rakamları yanyana sıralar.
Bu web tarayıcılarına özel bir aritmetik işlemdir. Bir örnek verecek
olursak id değeri 2, sınıf değeri 3 ve seçici değeri 0 olan bir
tanımlamada

```
0 (kod içinde değil), 2 (id), 3 (class), 0(seçici) = 0230
```

Değerini elde ederiz. Burada id değeri 100'ler basamağına sınıf değeri
10'lar basamağına yazılarak hesaplama yapılır ve ikiyüz otuz değeri elde
edilir.

```css
 ul h1 li.secili {
 	color: yellow;
 }
 ```

Yukarıdaki tanımlama da 0013 değerini elde ederiz.

```
0 (kod içinde değil), 0 (id), 1 (secili sınıfı), 3 (ul h1 li seçicileri)
= 0013
```

```css
h1 {
	color: blue;
}
```

Bu tanımlamanın değeri 0001 dir. CSS belirlemeye göre yüksek değer
alanın özelliği uygulanır. Her ikisinde de h1'e bir tanımlama
yapılmıştır. Ancak tanımlama sistemleri farklıdır. XHTML kodumuzdaki
**h1** elementimizi mavi değil **sarı**(yellow) olarak gösterecektir.

Bide öncelik için **!important** tanımlaması vardır. Eğer yukarıdaki koda
**!important** eklersek

```css
h1 {
	color: blue !important;
}
```

Tanımlama yukarıdaki gibi değiştirildiğinde h1 elementimiz mavi renkde
görünecektir.

Eğer değer aynı olursa(mesela 0013 e 0013) ne olur, bu durumda son
yapılan tanımlamanın özellikleri uygulanır.


