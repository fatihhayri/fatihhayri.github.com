---
layout: post
title: CSS Grid Özellikleri
description: CSS Grid özelliklerini öğrenmeye başlıyoruz. grid-template-columns, grid-template-rows, grid-column-gap, grid-row-gap ve grid-gap
lang: tr_TR
Date: 2019-03-04 08:47
Category: CSS
tags: [css, grid, ızgara, grid-template-columns, grid-template-rows, grid-column-gap, grid-row-gap ve grid-gap]
image:
  feature: grid-ozellikleri-resmi.png
---

[Bir önceki yazıda CSS Grid](https://fatihhayrioglu.com/css-grid-giris/)'e giriş yaptık ve grid ile gelen yeni terimleri öğrendik. İşin teorisini öğrenmeye devam edelim. 

CSS Grid ile birlikte 17 adet özellik öğreneceğiz. Bunların bazıları daha önce bildiğimiz özellikler (grid hizalama özellikleri), bazılarıysa tamamen yeni özellikler. Bu özelliklerin yanı sıra yeni tanımlar, değerler ve birimler de öğreneceğiz.

Kapsayıcı grid ve grid ögesi özellikleri diye iki ana gruba ayıracağız özellikleri. Flex'e benzer bir yapı. Tümünü bir anda sunmak yerine bölüm bölüm tanıtmak daha iyi olur diye düşünüyorum. 

Bu yazı içinde birçok yeni kavramla karşılaşacağız, bu kavramlara kısaca değinip sonraki yazılarda daha detaylı bahsedeceğim.

---

| **Grid container (kapsayıcı) Özellikleri** | &nbsp; &nbsp; | **Grid ögesi özellikleri** |
|---	                                     |---            |---	                      |
| **grid-template-columns**                  |            | grid-column-start          |
| **grid-template-rows**                  	 |            | grid-column-end          |
| grid-template-areas                  		 |            | grid-row-start          |
| grid-template                  			 |            | grid-row-end          |
| **grid-column-gap**                  		 |            | grid-column          |
| **grid-row-gap**                  		 |            | grid-row          |
| **grid-gap**                  			 |            | grid-area          |
| justify-items                  			 |            | justify-self          |
| place-items                  				 |            | align-self          |
| justify-content                  			 |            | place-self          |
| align-content                  			 |            |           |
| place-content                  			 |            |           |
| grid-auto-columns                  		 |            |           |
| grid-auto-rows                  			 |            |           |
| grid-auto-flow                  			 |            |           |
| grid                  					 |            |           |

---

Yukarıdaki listeden kalın olarak işaretlediklerimi bu makalede inceleyeceğiz.

Kapsayıcı (container) bir grid oluşturduktan sonra sayfa planını oluşturmak için satır ve kolonları oluşturmanın bir kaç yöntemi var. Bu yöntemleri sırasıyla göreceğiz.

İlk olarak **grid-template-columns**  ve **grid-template-rows** özelliklerini öğrenelim.

## grid-template-columns özelliği

**grid-template-columns** CSS özelliği, oluşturduğumuz grid'in ızgara çizgi isimlerini (line name) ve ızgara kolonlarının iz boyutlandırma işlevini (track size) tanımlar. Atanan değerler **ızgara iz listesi** olarak adlandırılan boşluklarla ayrılmış değerleri ifade eder. Çizgi isimleri isteğe bağlıdır.


![grid-template-columns](https://fatihhayrioglu.com/images/grid-template-columns.jpg)


**Yapısı :** grid-template-columns: none | İz-listesi | Otomatik-iz-listesi\\
**Aldığı Değerler :**  none | İz-listesi | Otomatik-iz-listesi\\
**Başlangıç değeri:** none\\
**Uygulanabilen elementler:** Kapsayıcı ızgaralara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi} 

### Aldığı değerler

 - **none değeri**: Başlangıç değeridir. Bu değer atanan kapsayıcı grid **Explicit (Belirlenmiş) Grid** kapsamının dışına çıkar. (grid-template-area özelliği ile Belirli Grid özellikleri kapsamına sokulmuş olabilir.)  **Explicit (Belirlenmiş) ve Implicit (Belirsiz) Izgaralar** kavramlarını daha sonra daha detaylı anlatacağız.

 - **İz listesi değer kümesi(track-list) / Otomatik iz listesi değer kümesi(auto-track-list)**
Değerler listesi her bir grid izinin boyutunu ve grid çizgisi ismini belirler. 

    [ Grid çizgisi isimi ? [ İz boyutu | İz tekrar işlevi ] ]+ Grid çizgisi isimi ?

 
	 - **grid iz boyut değerleri (track-size):**
		 - **ölçü değerleri** CSS uzunluk (px, em, vm vh, ...) değerleri ve yüzde değerler. Tanımlanan değer kolon genişliğini belirler ve eksi değer alamaz. Örneğin 25%, 250px, 100vw gibi.
		 
	 	 - **esnek değer:** fr(ing. fraction) birimi "kesir" anlamına gelir. px veya % gibi bir uzunluk değil, bunun yerine "esnek" bir birim olarak kabul edilir. CSS grid ile birlikte gelen bir değerdir. Kullanılabilir alanı tanımlamamızı sağlayan esnek bir birimdir.  İleride bu değere daha detaylı değineceğiz. [fr birimi](/fr-birimi)
	 &nbsp;&nbsp;&nbsp;

	 	 ![enter image description here](https://fatihhayrioglu.com/images/min-content-max-content.jpg)
		
	&nbsp;&nbsp;&nbsp;
	 	 - **max-content:** Izgara izi içindeki en geniş içerikli ögesinin değeridir. Metin bir alt satıra kaydırılmadan ölçülür.
	 	 - **min-content:** Izgara izi içindeki ızgara ögesinin en az daraldığı durumdaki değeridir. Metin taşmadan daralabileceği en son noktadaki değerdir.
	 	 -  **auto:** En fazla `max-content` değeri kadar, en az `min-content` değeri kadar değer alır.
	 - **minmax(min, max):** min değerine eşit veya daha büyük ve max değerden küçük veya ona eşit bir boyut aralığı tanımlar. Eğer max değeri min değerinden küçükse max değeri yok sayılır ve fonksiyon min değeri olarak kabul edilir. 
	 - **fit-content( ölçü değeri | yüzde değeri )** Belirlenen değer `max-content`değerinden büyükse `max-content`değerini alır, grid ögesi en az `auto` değeri kadar olur. `minmax(auto, max-content)` şeklinde formulize edilmiş.
	 - **inherit:** Kalıtsal olarak aldığı değere döner. ebeveyninden aldığı değere döndürür.
	 
	 - **initial:** Başlangıç değerine döndürür.
	 
	 - **unset:** Bu değer kısmen `inherit` kısmen `initial` değeri gibi davranır. Kalıtsal olarak ebeveyninden gelen değerleri alırken kalıtsal olarak gelmeyen değerlerde `initial` gibi davranıp başlangıç değerini alır.

 - **repeat() işlevsel değeri**
 Tekrarlanan içerikli sayfa yapısından kolonları daha basit ve anlaşılır kılan bir değer yapısıdır. Bu işlevselliği bize `repeat()` fonksiyonunu sağlar. 
    
    {% highlight css %}
    grid-template-columns: 30px 100px 30px 100px 30px 100px 30px 100px;
    
    /* yukaridaki kodu repeat fonksiyonu ile yazalim * /
    
    grid-template-columns: repeat(4, 30px 100px);
    {% endhighlight %}
    
 - **Grid çizgisi ismi**: Projeler büyüdükçe tanımlanan değerler anlamsız olmaya başlayıp kod okunurluğu düşer. Bu durumun önüne geçmek için grid çizgilerini adlandırıp tanımlarımızın içinde kullanırız. Verdiğimiz bu isimlere grid çizgi ismi denir.  
 
{% highlight css %}
grid-template-columns: [menu-start] 150px [menu-end icerik-start] 1fr [icerik-end banner-start] 1fr [banner-end];
{% endhighlight %}

daha anlaşılır bir yapı. Bu isimleri daha sonra kodumuz içinde kullanabilmemiz de ayrı bir güzellik.

Aldığı değerleri burada bitirdik.

Aldığı değerlerin yetenekleri için MDN'nin örneklediği listeye göz atalım.

{% highlight css %}
/* Başlangıç değeri */
grid-template-columns: none;

/* <track-list> Grid iz değer kümesi */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);

/* <auto-track-list> Otomatik grid iz değer kümesi */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-columns: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-columns: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];

/* Genel değerler */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: unset;
{% endhighlight %}

Basit bir örnekle özelliği anlayalım.

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template-columns" src="//codepen.io/fatihhayri/embed/rRezXq/?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

Kodu incelediğimizde `.kapsayici` seçicisine tanımlanan `display: grid;` ve  `grid-template-columns: 25% 25% 25% 25%;` tanımları bize 4 kolonlu ve her kolon genişliği 25% olan bir sayfa planı oluşturdu.

CSS grid'in en büyük özelliği iki eksenli sayfa planı olduğu için tam olarak giriş yapmak için birde satır eklemeyi öğrenmemiz gerekiyor. 

## grid-template-rows özelliği

**grid-template-rows** CSS özelliği, oluşturduğumuz grid'in ızgara çizgi isimlerini (line name) ve ızgara satırlarının iz boyutlandırma işlevini (track size) tanımlar. Atanan değerler **ızgara iz listesi** olarak adlandırılan boşluklarla ayrılmış değerleri ifade eder. Çizgi isimleri isteğe bağlıdır.

![grid-template-rows](https://fatihhayrioglu.com/images/grid-template-rows.jpg)

&nbsp;&nbsp;&nbsp;

**Yapısı :** **grid-template-rows**: none | İz-listesi | Otomatik-iz-listesi\\
**Aldığı Değerler :**  none | İz-listesi | Otomatik-iz-listesi\\
**Başlangıç değeri:** none\\
**Uygulanabilen elementler:** Kapsayıcı ızgaralara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi} 

&nbsp;&nbsp;&nbsp;

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template-rows" src="//codepen.io/fatihhayri/embed/PLNJwW/?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

Alın size çubuklu forma :) `grid-template-s: 100vh;` tanımı bize bir satır olacağını ve bu satır yüksekliğinin de ekran yüksekliği ile eşit olacağını gösterir. Genişlik ve yükseklik olarak esnek bir sayfa planımız oldu. Hemde 3 satır kod ile. 

`grid-template-rows` özelliğini anlamak için örneğe ufak ek daha yapalım. 

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template-rows - responsive" src="//codepen.io/fatihhayri/embed/XGdeJo/?height=300&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

Büyük ekranlarda 4 kolon tek satır olan ekran küçük ekranlarda 2 satır 2 kolon olacak şekilde kod yazdık.

CSS Grid’in kazanımların biri de uyumlu web için yazdığımız kod sayısını azaltmasıdır. Bu sayede grid sistemleri için bootstrap, foundation, 960grid gibi yapılara gerek kalmıyor. Çünkü grid alanlarınızı kendiniz sistematik olarak kodlayabiliyorsunuz.

##  grid-gap, grid-column-gap ve grid-row-gap

grid-gap, grid-column-gap ve grid-row-gap tanımları ızgara çizgisinin kalınlığını belirler. İkisini ayrı ayrı tanımlaya bildiğimiz gibi grid-gap kısayoluyla iki değeri tek özellikle de tanımlaya biliriz.

CSS Çoklu kolon özelliğinden bildiğimiz `column-gap` özelliğine benzer bir yapıdadır. Çoklu kolonlarda sadece kolon düşünüldüğü için özellik `column-gap` olarak tanımlanmış, ancak grid iki eksenli olduğu için  `grid-column-gap` ve `grid-row-gap` olarak tanımlanmıştır. Çok kullanışlı bir özellik. Flex'e de geleceği konuşuluyor. 


**Yapısı :** grid-gap: <‘grid-row-gap’> <‘grid-column-gap’>? \\
**Aldığı Değerler :**  değer | yüzde değer \\
**Başlangıç değeri:** 0\\
**Uygulanabilen elementler:** Kapsayıcı ızgaralara\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

&nbsp;&nbsp;&nbsp;

<iframe height="452" style="width: 100%;" scrolling="no" title="CSS grid ilk örnek - köy fotoğrafları" src="//codepen.io/fatihhayri/embed/JzKOOE/?height=452&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fatihhayri/pen/JzKOOE/'>CSS grid ilk örnek - köy fotoğrafları</a> by Fatih 
  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


Grid özelliklerini, değerlerini, birimlerini ve tanımlarını öğrenmeye devam edeceğiz. Şimdiye kadar öğrendiklerimizle birşeyler deneyerek CSS grid özelliklerini pekiştirmekte fayda var.

## Kaynaklar

 - [https://cssreference.io/property/grid-template-columns/](https://cssreference.io/property/grid-template-columns/)
 - [https://cssreference.io/property/grid-template-rows/](https://cssreference.io/property/grid-template-rows/)
 - [https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows)
 - [https://tympanus.net/codrops/css_reference/grid/#section_grid-container-properties](https://tympanus.net/codrops/css_reference/grid/#section_grid-container-properties)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
 - [https://alligator.io/css/grid-gap/](https://alligator.io/css/grid-gap/)
 - [https://www.quackit.com/css/css3/properties/css_grid-row-gap.cfm](https://www.quackit.com/css/css3/properties/css_grid-row-gap.cfm)
 - [https://www.quackit.com/css/css3/properties/css_grid-template-columns.cfm](https://www.quackit.com/css/css3/properties/css_grid-template-columns.cfm)
 - [https://www.zcfy.cc/original/learn-css-grid-a-guide-to-learning-css-grid-jonathan-suh](https://www.zcfy.cc/original/learn-css-grid-a-guide-to-learning-css-grid-jonathan-suh)
 - https://www.youtube.com/watch?v=lZ2JX_6SGNI (Min & Max Content Sizing in CSS Grid)