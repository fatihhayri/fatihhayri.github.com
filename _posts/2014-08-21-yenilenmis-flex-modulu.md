---
layout: post
title: Yenilenmiş Flex(Esnek Kutu) Modülü
Date: 2014-08-21 15:17
Category: css
tags: [css flex esnek-kutu]
---

Bildiğiniz gibi CSS3 modülleri halen geliştirilmeye devam ediyor. Bu modüllerden değişikliğe uğrayanlar oluyor. Flex modülü değişikliğe uğrayan modüllerden birisi. Daha önce yazdığım [CSS3 Esnek Kutu Yerleşimi(Flexible Box Layout)][1] makalemde anlattığım esnek kutu özelliği bu özelliğin ilk standartlaşmış hali idi. Daha sonra iki kere daha değişti bu modül. 

 - **display:box** tanımı benim yazımda anlattığım  2009'da standartlaşmıştı ve şu an kullanılmıyor. Sadece mobildeki bazı tarayıcılar destekliyor.
 - **display:flexbox** tanımı 2011'de tanımlandı, hibrit bir çözüm. Şu an kullanılmıyor. Sadece İE 10 destekliyor.
 - **display:flex** tanımı son olarak 2014'ün mart'ında standartlaştı ve şu an kullanımda olan tanım. Yeni nesil tarayıcıların hepsi destekliyor.

Yenilenen Flexbox modülünün belirsiz ve/veya esnek boyutlarda bile sayfa planına daha verimli bir çözüm üretmek, hizalama ve kapsayıcı eleman içindeki öğeleri dağıtmayı hedeflemeketedir.

Flexbox modülünün ana fikrinin arkasında kullanılıbilir boş alana öğeleri en iyi şekilde pozisyonlamak olarak tanımlanabilir. 

Tabi CSS ile sayfa yerleşimi kodlamanın birçok avantajı var. Bunun yanında bazı karışık sayfa yerleşimlerinde ise bizi zorladığı bir gerçek. Özellikle esnek yapılı sayfa düzenleri ve dikey eksendeki yerleşimlerdeki sorunlarını gören W3C bize bu konuda yardımcı olacak yöntemleri üretmeye başladı. Bunlardan bir tanesi Esnek Kutu Yerleşimi Modülüdür(EKYM).

Esnek Kutu Yerleşimi Modülü kapsayıcı bir eleman içindeki alt elemanların esnek bir şekilde yerleşimini sağlamaktadır. Daha önce dikeyde yaşadığımız birçok sorunu(dikeyde ortalama ve aksak kolon sorunları gibi) gidermemizi ve uyumlu web sayfaları oluşturmamızı daha kolay hale getiriyor. 

Esnek Kutu Yerleşimi Modülünün son standartlaşmış sürümünü(2014 mart) bu makalemizde inceleyeceğiz.

**flex** özelliklerini iki ana başlıkta inceleyeceğiz. Esnek kapsayıcı eleman özellikleri ve kapsayıcı içindeki esnek kutu özellikleri

 - Esnek Kapsayıcı Özellikleri
     - display: flex ve inline-flex
     - flex-direction
     - flex-wrap
     - flex-flow
     - justify-content
     - align-items
     - align-content
 - Esnek Öğe Özellikleri
     - order
     - flex-grow
     - flex-shrink
     - flex-basis
     - flex
     - align-self

![flex](/images/flex.gif)
     
## Esnek Kapsayıcı Özellikleri

### display:flex ve display:inline-flex

**Yapısı:** display: (değer)
**Aldığı (Yeni) Değerler:** flex | inline-flex\\
**Başlangıç değeri:** flex\\
**Uygulanabilen Elementler:** Tüm elemanlara\\
**Kalıtsallık:** Var
{: .cssozelliktanimi}

İlk olarak kapsayıcı esnek kutuları çevreleyen eleman **display:flex** veya **display:inline-flex** tanımı yaparak başlıyoruz. Farklı tarayıcılar için farklı flex sürümleri yazılır.

{% highlight css %}
.esnekKutu{
   display: -webkit-box;   /* ESKİ: Android browser, eski IOS.  */
   display: -ms-flexbox;   /* ARA: IE 10 */
   display: flex;  /* YENİ, Chrome, Firefox, IE11, IOS7  */
}
{% endhighlight %}

**flex** tanımlanmış elemanın alt elemanları esnek yapıya kavuşacaktır. **inline-flex** tanımında kapsayıcı eleman inline özelliği gösterir.

Basit bir örnek yapalım.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/wGIaJ?type=result&amp;height=350" id="cp_embed_hgplm"></iframe>

Kapsayıcı elemana tanımlanan **display:flex** özelliği yardımı ile alt elemanlara tanımlanan **flex** özellikleri ile sayfa yerleşimimizi çok kolay şekilde yapmamıza olanak sağlamaktadır.

### flex-direction

**Yapısı:** flex-direction: (değer)
**Aldığı Değerler:** row | row-reverse | column | column-reverse\\
**Başlangıç değeri:** row\\
**Uygulanabilen Elementler:** Esnek kapsayıcı elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**flex-direction** özelliği kapsayıcı eleman içindeki esnek kutuların sıralama yönünü belirler. Dört değer alır; row, row-reverse, column, column-reverse. 

 - **row:** Esnek kutuları soldan sağa sıralar
 - **row-reverse:** Esnek kutuları sağdan sola sıralar
 - **column:** Esnek kutuları kolon olarak yukarıdan aşağı sıralar
 - **column-reverse:** Esnek kutuları row-reverse gibi ama alttan yukarı sıralar

Bir örnekle bu özelliği deneyelim.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/pCsjk?type=result&amp;height=350" id="cp_embed_hgplm"></iframe>

### flex-wrap

**Yapısı:** flex-wrap: (değer)
**Aldığı Değerler:** nowrap | wrap | wrap-reverse\\
**Başlangıç değeri:** row\\
**Uygulanabilen Elementler:** Esnek kapsayıcı elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**word-wrap** özelliğinden aşina olduğumuz bir kullanımı esnek kutulara uygulamak için kullanılır. İki ve daha fazla satırdan oluşan esnek kutuların nasıl bir davranış sergileyeceğini belirlemek için kullanılır. Üç değer alır nowrap, wrap, wrap-reverse. 

 - **nowrap:** Tek satırda esnek kutular soldan sağa sıralanır.
 - **wrap:** İki veya daha fazla satırda esnek kutular soldan sağa sıralanır.
 - **wrap-reverse:** iki veya daha fazla satırda esnek kutular sağdan sola sıralanır.

Örneğmize iki satır olacak şekilde bir iki kutu daha ekleyerek bu özelliğin kullanımını görelim.

<iframe scrolling="no" height="450" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="450" src="http://codepen.io/fatihhayri/embed/qkCjK?type=result&amp;height=450" id="cp_embed_hgplm"></iframe>

wrap-revers tanımı ile ikinci satırı üste eklemiş olduk.

### flex-flow

**Yapısı:** flex-flow: <flex-direction\> || <flex-wrap\>\\
**Aldığı Değerler:** row, row-reverse, column, column-reverse || nowrap, wrap, wrap-reverse\\
**Başlangıç Değeri:** row nowrap\\
**Uygulanabilen Elementler:** Esnek kapsayıcı elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Yukarıda bahsettiğimiz iki özelliğin(flex-direction ve flex-wrap) kısayoludur. İki özelliği tek bir tanım ile tanımlama imkanı verir.

### justify-content

**Yapısı:** justify-content: (değer)
**Aldığı Değerler:** flex-start | flex-end | center | space-between | space-around\\
**Başlangıç Değeri:** flex-start\\
**Uygulanabilen Elementler:** Esnek kapsayıcı elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Esnek kapsayıcı içindeki elemnaların x ekseninden nasıl hizalanacağını belirler. Beş değer alır. flex-start, flex-end, center, space-between, space-around.

![justify-content](/images/justify-content.gif)

 - **flex-start:** Esnek taşıyıcı içindeki kutular kapsayıcının başından başlayarak(flex-direction’da belirtildiği gibi) dizilirler. 
 - **flex-end:** Elemanlar sondan başlayarak dizilir.
 - **center:** Kutular kapsayıcının orta çizgisine göre hizalanarak dizilirler.
 - **space-between:** Kutular eşit olarak dizilir. İlk kutu orta çizginin başında, son kutu sonunda yer alır.
 - **space-around:** Kutular arası boşluk eşit olacak şekilde dizilir.

### align-items

**Yapısı:** align-items: (değer)
**Aldığı Değerler:** stretch | flex-start | flex-end | center | baseline\\
**Başlangıç Değeri:** stretch\\
**Uygulanabilen Elementler:** Esnek kapsayıcı elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Bu özellik kutuların y ekseninde nasıl hizalanacağını belirler. justify-content'in dikey şekli de diyebiliriz. Beş değer alır. flex-start, flex-end, center, baseline, stretch

![align-items](/images/align_items.gif)

 - **flex-start:** Kutular kapsayıcının üst çizgisineden başlayarak dizilir.
 - **flex-end:** Kutular kapsayıcının alt çizgisinden başlayarak dizilir.
 - **center:** Kutular kapsayıcının dikey olarak ortasında dizilir.
 - **baseline:** Her kutu içerisindeki ilk satırın yazı tipi dikkate alınarak dikeyde hizalanır.
 - **stretch:** Kutular kapsayıcı yüksekliğine eşitlenir. (min-width/max-width değerleri dikkate alınır)

### align-content

**Yapısı:** align-content: (değer)
**Aldığı Değerler:** stretch | flex-start | flex-end | center | space-between | space-around\\
**Başlangıç Değeri:** stretch\\
**Uygulanabilen Elementler:** Esnek kapsayıcı elemanlara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**justify-content**'in yatayada yaptığını dikeyde yapar. İki veya daha fazla satırdan oluşan esnek kutuların dikeyde hizalanması için kullanılır. Altı değer alır. flex-start, flex-end, center, space-between, space-around, stretch.

![align-content](/images/align_content.gif)

 - **flex-start:** Kutular kapsayıcının üst çizgisineden başlayarak dizilir.
 - **flex-end:** Kutular kapsayıcının alt çizgisinden başlayarak dizilir.
 - **center:** Kutular kapsayıcının dikey olarak ortasında dizilir.
 - **space-between:** İlk satır kapsayıcı üst çizgisine, son satır kapsayıcı alt çizgisine hizalanacak şekilde dizilir.
 - **space-around:** Satırlar arası eşit boşluk kalacak şekilde dizilir.
 - **stretch:** Satırlar boşluk kalmayacak şekilde dikeyde hizalanır.

## Esnek Öğe Özellikleri

### order

**Yapısı:** order: <sayı\>\\
**Aldığı Değerler:** sayı\\
**Başlangıç Değeri:** 0\\
**Uygulanabilen Elementler:** Esnek öğelere ve esnek kapsayıcı içindeki absolute tanımlı alt öğelere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Varsayılan olarak esnek kutular kodda yazılan sıra ile dizilir. **order** özelliği esnek kapsayıcı içindeki öğelerin kaçıncı sıralda görünmesi gerektiğini belirlememizi sağlar.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/wukiy?type=result&amp;height=350" id="cp_embed_hgplm"></iframe>

Yukarıdaki örnekte ikinci sıradaki eleman ordr tanımı ile üçüncü sıraya atılmıştır.

> **Not:** -1 değeri tanımlanan kutu ilk başa gelecektir. 

### flex-grow

**Yapısı:** flex-grow: <sayı\>\\
**Aldığı Değerler:** sayı\\
**Başlangıç Değeri:** 0\\
**Uygulanabilen Elementler:** Esnek öğelere ve esnek kapsayıcı içindeki absolute tanımlı alt öğelere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**flex-grow** tanımı yapılmış eleman diğer esnek kutulardan verilen dğer kadar daha büyük olacaktır. Bu özellik sayesinde kutular kendi aralarında belirlenen oranlarda esnek olarak genişleyip küçülecektir.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/bwAHn?type=result&amp;height=350" id="cp_embed_hgplm"></iframe>

Tüm elemanlara 1 değeri verilip bir esnek öğenin **flex-grow** değeri 2 tanımlanırsa, bu öğe diğer öğelere göre her zaman iki kat daha büyük görünecektir. Negatif değer almaz.

### flex-shrink

**Yapısı:** flex-shrink: <sayı\>\\
**Aldığı Değerler:** sayı\\
**Başlangıç Değeri:** 1\\
**Uygulanabilen Elementler:** Esnek öğelere ve esnek kapsayıcı içindeki absolute tanımlı alt öğelere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Esnek kutu için büzülme faktörünü belirler. 

**flex-shrink** tanımlanmış eleman, esnek kapsayıcı eleman içindeki diğer elemanlara göre göreceli olarak nasıl büzüleceğini belirler. 

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/unxaD?type=result&amp;height=350" id="cp_embed_hgplm"></iframe>

Yukarıdaki örnekte normal durumda eşit genişlikte görülmektedir. Ancak tarayıcı genişliği daraltılınca **flex-shrink** değeri **2** olarak belirlenen kutu daha fazla büzülecektir. Uyumlu web siteleri yaparken işe yarar bu özellik.

### flex-basis

**Yapısı:** flex-basis: <değer\>\\
**Aldığı Değerler:** <yüzde\> || <değer\> || initial || auto || main-size\\
**Başlangıç Değeri:** auto\\
**Uygulanabilen Elementler:** Esnek öğelere ve esnek kapsayıcı içindeki absolute tanımlı alt öğelere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Esnek kutunun optimum boyutunu belirlemek için kullanılır. Eğer boş alan müsait ise esnek kutu belirlenen değer kadar genişlikte olacaktır. 

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/DFnuy?type=result&amp;height=350" id="cp_embed_hgplm"></iframe>

Örnekte görüldüğü gibi boş alan var ise ilk eleman genişliği **300px**, ikinci eleman genişliği **30%**. Tarayıcı genişliği daraltılınca boş alan kalmayınca esnek kutu genişliği esenmeye başlıyor.

### flex

**Yapısı:** flex: <değer\>\\
**Aldığı Değerler:** none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\\
**Başlangıç Değeri:** 0 1 auto\\
**Uygulanabilen Elementler:** Esnek öğelere ve esnek kapsayıcı içindeki absolute tanımlı alt öğelere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Bu tanım **flex-grow**, **flex-shrink** ve **flex-basis** tanımlarının bir kısayoludur. 

### align-self

**Yapısı:** align-self: <değer\>\\
**Aldığı Değerler:** auto | flex-start | flex-end | center | baseline | stretch\\
**Başlangıç Değeri:** auto\\
**Uygulanabilen Elementler:** Esnek öğelere ve esnek kapsayıcı içindeki absolute tanımlı alt öğelere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Bu özellik bir esnek kutuya varsayılan veya tanımlanan hizalama tanımının dışına çıkma imkanı sağlar. Altı değer alır. auto, flex-start, flex-end, center, baseline, stretch.

Bu tanımlar **align-item** tanımları ile aynı işi görür.

> **Not:** Esnek öğeler float,clear ve vertical-align tanımlarından etkilenmez.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**29+**|**10 (orta), 11(yeni)**|**28+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1 (ilk), 4.4 (yeni)**|**7.1**|**35.0**|
{: .tarayici-uyumi}

## Sonuç

Esnek kutu modülü karmaşık sayfa planları oluşturmak, uyumlu web sayfaları kodlarken önemli avantajları olan bir özellik. İyice teorisini kavrayıp sonra bu özelliğin kullanacağı yerleri araştırmalıyız. Bu konunun birde nerelerde uygulanacağını gösteren bir makale daha yazmak lazım. Bu makale fazla uzunmasın diye buraya koymadım ama yakında o yazıyı da eklerim.

Bir konuyu iki kere yazmak da pek hoş olmuyor be W3C.

Kalın sağlıcakla
  
## Kaynaklar

- [http://www.w3.org/TR/css3-flexbox/][2]
- [http://css-tricks.com/snippets/css/a-guide-to-flexbox/][3]
- [https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes][4]
- [http://coding.smashingmagazine.com/2013/05/22/centering-elements-with-flexbox/][5] 
- [http://msdn.microsoft.com/en-us/library/ie/hh673531(v=vs.85).aspx][6]
- [https://fatihhayrioglu.com/css3-esnek-kutu-yerlesimiflexible-box-layout/][7]
- http://burakcan.me/css-flexbox-yapisina-goz-atalim/
- [http://blog.teamtreehouse.com/responsive-design-of-the-future-with-flexbox][9]


  [1]: https://fatihhayrioglu.com/css3-esnek-kutu-yerlesimiflexible-box-layout/
  [2]: http://www.w3.org/TR/css3-flexbox/
  [3]: http://css-tricks.com/snippets/css/a-guide-to-flexbox/
  [4]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes
  [5]: http://coding.smashingmagazine.com/2013/05/22/centering-elements-with-flexbox/
  [6]: http://msdn.microsoft.com/en-us/library/ie/hh673531%28v=vs.85%29.aspx
  [7]: https://fatihhayrioglu.com/css3-esnek-kutu-yerlesimiflexible-box-layout/
  [9]: http://blog.teamtreehouse.com/responsive-design-of-the-future-with-flexbox
  
  
[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png