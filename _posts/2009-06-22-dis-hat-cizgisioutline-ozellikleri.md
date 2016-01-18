---
layout: post
title: Dış hat çizgisi(outline) özellikleri
Date: 2009-06-22 22:55
Category: CSS
tags: bağlantılar, Border, dış-hat-çizgisi, Erişebilirlik, kenar-çizgisi, klavye-kullanmak, outline
---

![dış hat çizgisi][]

CSS2 ile birlikte gelen kutu dışı şekillendirme(outline) özellikleri kenar  çizgisine(border) benzer bir
özelliktir. Fakat kenar çizgisi özelliğinden iki önemli farkı vardır.
İlki outline özelliği kenar çizgisi gibi normal akışı etkilemez. Bir
elemana 10px outline değeri atandığında elemanın etrafındaki
elemanların  üzerine 10px kadar taşar, diğer elemanları ötelemez. İkinci
farklılık outline kenar çizgisi gibi dikdörtgen şeklinde değildir.  

Outline özelliği kullanıcının o an nereye odaklandığını belirlemek için
kullanılır. Tarayıcı arayüzünde kullanıcının nereye odaklandığını bilmek
bize birçok avantajlar sağlayacaktır. Erişebilirlik açısından önemli bir
özelliktir. 

Klavyeden web sitelerini gezen kullanıcılar için önemli bir özelliktir.
Bu durumu şöyle anlatırsak daha iyi anlaşılacaktır. Bir site düşünün
metin içeriğindeki bağlantıların rengi ve tipi metinler ile aynı
olduğunu bağlantıları metinden ayıran hiç bir belirtinin olmadığı
durumu, bu durum kullanıcıyı ne kadar zorlayacağını düşünün. Bu gibi
durumları engellemek için biz sayfa içindeki bağlantılara, düğmelere ve
gezinti elemanlarına normal içerikten ayrı stiller tanımlarız. Benzer
şeyleri sadece klavyeden interneti gezmeye çalışan insanlar içinde
outline tanımları sağlar.

Şu aklımıza gelebilir; kim sadece klavye kullanarak  internette gezer
ki. Ama erişebilirlik demek zaten bir sayfaya en fazla kişinin
erişmesini sağlamak değil mi?

Şimdi dış hat çizgileri(outline) özelliklerine bir göz atalım.

## Dış hat çizgisi biçemi (outline-style)

Dış hat çizgisinin biçemini belirlemek için kullanırız.

**Yapısı:** outline-style: (değer)
**Aldığı değerler:** none | dotted | dashed | solid | double | groove |
ridge | inset | outset | inherit\\
**Başlangıç değeri:** none\\
**Uygulanabilen elemanlar:** Tüm elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Dış hat biçemi none değeri haricindeki değerler için görüntülenir.

-   none: Dış hat görünmesin anlamındadır.
-   dotted: Dış hat belirli aralıklarla dizilmiş noktalardan oluşur.
-   dashed: Dış hat belirli aralıklarla dizilmiş çizgi
    parçalarından(tire) oluşur.
-   solid: Dış hat bir çizgi olarak görünür
-   double: iki çizgi seklinde görünür. İki çizginin kalınlıkları ile
    aralarındaki boşluğun genişliğinin toplamı outline-width değerine
    eşittir.
-   groove: Dış hat tuvale oyulmuş gibi görünür.
-   ridge: groove'un zıddı; Dış hat çizgisi kabartma gibi görünür.
-   inset: Dış hat çizgisinin kutunun tamamını tuvale gömülü gibi
    görünmesine sebep olur.
-   outset: inset'in zıddı; Dış hat çizgisi kutunun tamamının kabartma
    gibi görünmesine sebep olur.


**Tarayıcı Uyumu:**
Internet Explorer 6, 7(desteklemiyor) 8 (destekliyor)
Firefox 1.5+
Opera 9.2+
Safari 1.3+
CSS 2+
{: .tarayiciuyum}

## Dış hat çizgisi genişliği (outline-width)

Atandığı elemanın dışına çizilen hattın kalınlığını belirlemek için
kullanırız.

**Yapısı:** outline-width: (değer)
**Aldığı değerler:** thin | medium | thick | length | inherit\\
**Başlangıç değeri:** Medium\\
**Uygulanabilen elemanlar:** Tüm elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Dış hat çizgisi genişliği border-width gibi CSS uzunluk değerlerini (px,
pt, em) ve anahtar kelimeler(thin <= medium <= thick) alır, ancak
yüzde değer ve eksi değer almaz.


**Tarayıcı Uyumu:**
Internet Explorer 6, 7(desteklemiyor) 8 (destekliyor)
Firefox 1.5+
Opera 9.2+
Safari 1.3+
CSS 2+
{: .tarayiciuyum}

## Dış hat çizgisi rengi (outline-color)

Atandığı elemanın dışına çizilen hattın rengini belirlemek için
kullanırız.

**Yapısı:** outline-color: (değer)
**Aldığı Değerler:** color | invert | inherit\\
**Başlangıç değeri:** invert\\
**Uygulanabilen elemanlar:** tüm elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

CSS'in desteklediği renk değerlerini kullanabiliriz, hatta invert
değerinide kullanabiliriz. invert, rengi tersine çevirir.

**Tarayıcı Uyumu:**
Internet Explorer 6, 7(desteklemiyor) 8 (destekliyor)
Firefox 1.5+
Opera 9.2+
Safari 1.3+
CSS 2+
{: .tarayiciuyum}

## Dış hat çizgisi (outline)

Dış hat çizgisi(outline) özelliği yukarıda gördüğümüz özelliklerin tek
seferde kullanılmasını sağlayan bir kısa yoldur.

**Yapısı:** outline: (değer)
**Aldığı Değerler:** [ <outline-color\> || <outline-style\> || <outlinewidth\>] | inherit\\
**Başlangıç değeri:** Tanımlı değildir\\
**Uygulanabilen elemanlar:** Tüm elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Kenar çizgisi(border) özelliğine benzer bir yapısı vardır. Ancak
ayrıldıkları kısım kenar çizgisinde(border) her kenar için bir
atama(border-right, border-bottom, vd.) yapılmasına karşın dış hat
çizgisinde(outline) böyle bir özellik yoktur. Dış hat
çizgisinin(outline) tüm kenarları aynı özellikleri taşır.

Dış hat çizgileri(outline) normal akıştaki boşlukları tamamlamaz. (taşma
yapmaz.) diğer elemanların üzerini örter. Dış hat çizgisinin(outline)
önemli özelliklerinden biri etrafını çevreleyen elemanlar
üzerinde(üzerine örtmek dışında) bir etki yapmamasıdır, bu sayfa
planlamadaki problemlerimizi çözmemiz için önemlidir. Problem olan bir
elemana dış hat çizgisi(outline) ataması yaptığımızda tam olarak sorunun
ne olduğunu göreceğiz ve elamanın tam yerini öğreneceğiz. Bu kenar
çizgisi(border) uygulamaktan farklıdır, dış hat çizgisi(outline)
uygulandığında dokümandaki normal akış üzerine bir etki yapmayacaktır.

Dış hat çizgileri(outline) satıriçi elemanların etrafına yerleşir. İki
satıra kaymış satıriçi elemanlarda dış hat çizgisi dikdörtgen şeklinde
olmayacaktır. Bu da kenar çizgisi(border) ile arasındaki farklardan
biridir.

Dış hat çizgileri elemana odaklanıldığında görsel bir çıkıntı gibi
görünmesini sağlayabilir.

**Tarayıcı Uyumu:**
Internet Explorer 6, 7(desteklemiyor) 8 (destekliyor)
Firefox 1.5+
Opera 9.2+
Safari 1.3+
CSS 2+
{: .tarayiciuyum}

  [dış hat çizgisi]: /images/dis_hat_cizgidi.gif
    "dış hat çizgisi"
