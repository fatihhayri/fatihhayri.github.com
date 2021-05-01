---
layout: post
title: Arapça Site Kodlamak ve direction:rtl özelliği
Date: 2011-01-19 15:47
categories: [CSS]
tags: [arapça site, direction, rtl, farsça, ibranice, livego.com, unicode-bidi]
---

[LiveGO][]'ya zaman zaman dil desteği ekliyoruz. Son olarak Almanca ve
Arapça dil desteğini ekledik. Almanca ve diğer latin alfabesi ile
yazılan dillerde bazı ufak tefek sığmama sorunları dışında bir sorun
yaşamadık, ancak Arapça dil desteğini vermeye karar verdiğimiz ve
uygulamaya geçtiğimizde bazı sorunlarla karşılaştık. Bu sorunlar dilin
latin alfabesi olmaması ve soldan sağa değil sağdan sola doğru
akmasından kaynaklanıyor. Benzer yapıdaki diğer dillerde de aynı
sorunlar yaşanabilir.

![][100]

## direction özelliği

Bu özellik uygulana eleman içindeki akışın yönünü belirler.

Yapısı : direction: (değer)
Aldığı Değerler : ltr | rtl | inherit\\
Başlangıç değeri: ltr\\
Kalıtsallık: Var
{: .cssozelliktanimi}

Aldığı değerler

-   ltr : Soldan sağa (left to right)
-   rtl: Sağdan sola(right to left)

Yazı akışının soldan sağa doğru değilde sağdan sola doğru olmasını
css'in bu özelliği ile sağlayabiliyoruz.

```css
body{
	direction:rtl
}
```

body elemanına vererek tüm siteyi sağdan sola doğru akmasını
sağlayabildiğimiz gibi, sadece bir eleman ve içeriğinide sağdan sola
doğru akmasını sağlayabiliyoruz.

```css
div#deneme{
	direction:rtl
}
```

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**5.5+**|**1.0+**|
{: .tarayici-uyumi}

Biz LiveGOfda tüm html'in sağdan sola akmasını sağlayacak şekilde
kodlamadık. Belli alanlarda sağdan sola akmasını sağladık geri kalan
yerler, normaldeki gibi soldan sağa oldu.

Ben bizim siteyi kodlarken bazı makaleler okudum ve uygulamada bazı
sorunlar yaşadım ve çözümlerini buldum. Bulduğum kadarı ile buraya
tecrübelerimi aktarmak istedim.

Ayrıca yine bu konu ile ilgili unicode-bidi özelliğide mevcut ancak
kafanızı karıştırmamak için bu özelliğe fazla değinmeyeceğim.

## İpuçları

-   Karakter seti olarak utf-8 seçmeliyiz.
-   Metinleri değiştirirken resimlerdeki yazıları değiştirmeyi
    unutmamalıyız.
-   Akışı sağdan sola olarak değiştirdiğimizde float:left ve float:right
    kabullerimiz tam tersi oluyor. float:left'leri float:right;
    float:right'larıda float:left olarak değiştirmeliyiz.
-   Tüm dokümanın sağdan sola olması için body elementine direction:rtl
    değerini tanımlamamız yeterli.
-   Metinlerin hizalaması için kullandığınız değerleri tam tersi olarak
    değiştirmeliyiz. text-align:left ve text-align:right değerlerini tam
    tersi olarak değiştirmeliyiz.
-   Mesafe değerlerinide tersine çevirmeliyiz. padding, margin değerleri
    mesela
-   Yazı tipi boyutlarını arapça sitede biraz daha büyük seçmemiz daha
    iyi olacaktır.
-   Bir metni Phoshop'a taşıdığımızda ters çeviriyor ve bozuyor, bu
    durumu düzeltmek için
    [http://www.adobe.com/support/downloads/thankyou.jsp?ftpID=4107&fileID=3813][]
    adresindeki şablondan yardım almamız gerekiyor. [Faik][]'e
    teşekkürler bu link için

Farklı diller için site yapmaktan çok farklı farklı Arapça, Farsça,
İbranice gibi akışı sağdan sola olan ve latin alfabesi dışındaki diller
için site yapmak çok farklı. Kafanızdaki kabulleri tersine çeviren bu
durum sizi biraz zorlasada farklı bir yapı ile uğraşmak zevkli oluyor.

Ben yukarıda karşılaştığım sorunları ve bulabildiğim cevapları
sıralamaya çalıştım, umarım sizede lazım olduğunda işinize yarar.

## Kaynaklar

-   [http://wwwhelp.wordpress.com/2009/06/02/css-programming-for-right-to-left-languages/][]
-   [http://www.viget.com/blog/designing-for-rtl-languages-the-basics/][]
-   [http://stackoverflow.com/questions/2546022/css-direction-rtl-element-order-problem][]
-   [http://rtl-this.com/tutorial/rtling-hello-world-webpage][]
-   [http://stackoverflow.com/questions/2560966/text-right-to-left-css][]
-   [http://www.adobe.com/support/downloads/thankyou.jsp?ftpID=4107&fileID=3813][]
-   [http://reference.sitepoint.com/css/direction][]

  [100]: /images/livego_arapca.jpg
  [http://www.adobe.com/support/downloads/thankyou.jsp?ftpID=4107&fileID=3813]: http://www.adobe.com/support/downloads/thankyou.jsp?ftpID=4107&fileID=3813
  [Faik]: http://twitter.com/faik
  [http://wwwhelp.wordpress.com/2009/06/02/css-programming-for-right-to-left-languages/]: http://wwwhelp.wordpress.com/2009/06/02/css-programming-for-right-to-left-languages/
  [http://www.viget.com/blog/designing-for-rtl-languages-the-basics/]: http://www.viget.com/blog/designing-for-rtl-languages-the-basics/
  [http://stackoverflow.com/questions/2546022/css-direction-rtl-element-order-problem]: http://stackoverflow.com/questions/2546022/css-direction-rtl-element-order-problem
  [http://rtl-this.com/tutorial/rtling-hello-world-webpage]: http://rtl-this.com/tutorial/rtling-hello-world-webpage
  [http://stackoverflow.com/questions/2560966/text-right-to-left-css]: http://stackoverflow.com/questions/2560966/text-right-to-left-css
  [http://reference.sitepoint.com/css/direction]: http://reference.sitepoint.com/css/direction


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png