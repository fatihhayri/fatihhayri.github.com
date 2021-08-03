---
layout: post
title: '!important Tanımı'
Date: 2010-10-14 22:41
Category: CSS, XHTML
tags: [Etkinlik, firebug, Firefox, important]
---

[Friendfeed’de bir serzenişim üzerine Fatih Turan’ın bir cevabı][]
hafızamdaki !important bilgilerimin yeterli olmadığını gösterdi bana ve
bu konuda biraz araştırma yapma gereği duydum ve burada bu araştırma
sonuçlarını paylaşmak istedim.

!important’ı anlamak için CSS’de etkinliğine bir göz atmalıyız. Daha
önce yazdığım bir konu bu [CSS’de Tanımlamalar ve Etkinlikleri(Specificity)][] ayrıntılarını bu yazıdan okuyabilirsiniz.
CSS’de etkinlik tanımını tekrar hatırlatalım; CSS’de etkinliğin anlamı
stil çatışması(aynı elemente birden fazla tanım yapıldığında) olduğunda
kullanılan hangi kodun web tarayıcıları tarafından yorumlanacağını
belirlemektir. Her css tanımını bir sayısal değeri vardı ve benzer
tanımların yapıldığı bir elemanda bu sayısal değeri büyük olan tanımı
elemana etki edecektir.

Peki, biz sayısal değeri küçük olan tanımın etkin olmasını istersek ne
yapabiliriz? Bu sorunun cevabı ve bu ihtiyacı karşılayan tanım
!important tanımıdır. Bir örnekle durumu gösterelim

{% highlight html %}
<ul class="menu">
    <li>Menü 1</li>
    <li>Menü 2</li>
    <li>Menü 3
        <ul>
          <li class="deneme">Alt Menü</li>
        </ul>
    </li>
    <li>Menü 4</li>
</ul>
{% endhighlight %}

CSS kodumuzda aşağıdaki gibi olsun

{% highlight css %}
ul.menu li{
	background-color:#3CF;
}

li.deneme{
	background-color:#f00;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

Kodumuza göre tüm li background rengi **#3CF**olsun ama .deneme sınıfı
tanımladığımız li'nin ki kırmızı olsun diyoruz, ancak sonuç istediğimiz
gibi olmuyor.

![][100]

Firfox'un eklentisi Firebug'u durumu bize açıkça gösteriyor. Üzeri
çizilen tanım altta kalırken üstteki tanım elemana uygulanmaktadır.

![][1]

**Seçici adına üst eleman adlarını ekleyerek etkinliği arttırma**

Burada bizim kendi istediğimiz sonucun oluşması için bir iki yöntem
bulunmaktadır. Bir tanesi istediğimiz atamanın üste çıkması için seçici
değerini arttırmak, yani örnek kodumuzda bu li.deneme yerine ul
li.deneme şeklinde yaparak seçici etkinliğini arttırarak yapmaktır.

{% highlight css %}
ul.menu li.deneme{
	background-color:#F00;
}
{% endhighlight %}


Örneği görmek için [tıklayınız.][2]

Bu kod bizi çözüme ulaştıracaktır, ancak bazen bu çözüm çok can sıkıcı
haller alabiliyor. Büyük projelerde çok sık rastladığımız bir sorun.

**important! tanımı ile etkiliği arttırma**

Diğer bir çözüm ise etkin olmasını istediğimiz tanımın sonuna kardeşim
bu önemli bunu etkin yap demek, yani sonuna !important eklemek ile
olur.

{% highlight css %}
li.deneme{
   background-color:#f00 !important;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][3]

![][4]

## İE6 için important ile hack yapmak

Şimdi gel gelelim important tanımının ie6 ile olan problemine ve benim
yanlış anlamama.

Eğer yukarıdaki gibi bir tanımlama var ise yani tek bir özellik ve bu
özelliğe atanmış important tanımı var ise ie6 sorun çıkarmıyor. İşte
benim yeni öğrendiğim bilgi bu.

Peki, sorun nasıl çıkıyor derseniz. İE6 eğer bir normal tanım var ise ve
birde important tanımı bulunuyorsa, aynı özellik iki kere tanımlandı ise
bu importantlı tanımı ie6 uygulamıyor. Bunu ie6 hack için
kullanılabilir. Bunu ie6 hack için kullanılabilir. Zamanında bir yazıda
yazmıştım bu konuda
[http://fatihhayrioglu.com/css-de-kodumuzu-ieden-gizleme/][] Aslında
burada ie6’nın bir sorununu avantaja çevirmiş oluyoruz.

## Satıriçi kodları Ezmek için important kullanımı

Bazı durumlarda htmle müdahele imakanımızın olmadığı durumlarda veya
acil bir düzeltme gerektiğin genelde lazım oluyor important tanımı. Eğer
html içinden bir tanım yapıldı ise css ile yaptığımız hiç bir tanım
satıriçi kodu ezemiyecektir. Tek çare important tanımıdır.

{% highlight html %}
<ul style="background-color:#3CF">
	<li class="deneme">Deneme</li>
<ul>
{% endhighlight %}

Tanımı olsun biz bu elemanı background rengini değiştirmek istersek
sadece important ile değiştirebiliriz.

{% highlight css %}
li.deneme{
   background-color:#f00 !important;
}
{% endhighlight %}

Tanımı li elemanının background rengini kırmızı yapacaktır.

Son bir ipucu olarak şu cümleyi söyleyelim. CSS kısaltmalarına yapılan
important tanımı kısaltması yapılan özelliklere tek tek yapılmış
gibidir.

## Sonuç

important tanımı çok tercih edilen bir özellik değildir, nadiren de olsa
lazım olur. Bazen çok can kurtarır. Çok fazla yerde kullanmak kodunuzu
okunaksız hale getirebilir, buna dikkat etmek gerekir.

[Fatih Turan][]’a teşekkürler bilgilendirme için.

## Kaynaklar

-   http://bytesizecss.com/blog/post/ie6-and-the-important-rule
-   [http://www.impressivewebs.com/everything-you-need-to-know-about-the-important-css-declaration/][]
-   [http://www.electrictoolbox.com/using-important-css/][]
-   [http://www.webcredible.co.uk/user-friendly-resources/web-dev/css-important.shtml][]
-   [http://www.yellowjug.com/web-design/the-importance-of-important-in-css/][]
-   friendfeed.com/arayuz-gelistiriciler/


  [CSS’de Tanımlamalar ve Etkinlikleri(Specificity)]: http://fatihhayrioglu.com/cssde-tanimlamalar-ve-etkinliklerispecificity/
  [tıklayınız.]: /dokumanlar/important_kullanimi.html
  [100]: https://lh3.googleusercontent.com/Dnco6jKWpezF_20xMVvlddnRWHtrZp8qUbfziW1cBRUBlGc8ep3trPV1SgOgPyU7mS4ltgeqmdotsuVLbtwBwvLyhAPmKGfpLYvM_qeSH2JNSCFgEA
  [1]: /images/important_firebug.gif
  [2]: /dokumanlar/important_kullanimi2.html
  [3]: /dokumanlar/important_kullanimi3.html
  [4]: https://lh4.googleusercontent.com/k4feQBZhKIgAEdx-nVS7HLKHhYCjBboutU5CxKoI_sxdt53CUgH98KJB0fXzcpVbDbrEq3-y9Bi8Mxbo_nkBEPFhfhY-fxVKdVS13qJnykWupm4qOg
  [http://fatihhayrioglu.com/css-de-kodumuzu-ieden-gizleme/]: http://fatihhayrioglu.com/css-de-kodumuzu-ieden-gizleme/
  [Fatih Turan]: http://fatihturan.com/
  [http://www.impressivewebs.com/everything-you-need-to-know-about-the-important-css-declaration/]: http://www.impressivewebs.com/everything-you-need-to-know-about-the-important-css-declaration/
  [http://www.electrictoolbox.com/using-important-css/]: http://www.electrictoolbox.com/using-important-css/
  [http://www.webcredible.co.uk/user-friendly-resources/web-dev/css-important.shtml]: http://www.webcredible.co.uk/user-friendly-resources/web-dev/css-important.shtml
  [http://www.yellowjug.com/web-design/the-importance-of-important-in-css/]: http://www.yellowjug.com/web-design/the-importance-of-important-in-css/
