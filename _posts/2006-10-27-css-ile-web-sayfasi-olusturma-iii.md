---
layout: post
title: CSS ile Web Sayfası Oluşturma III
Date: 2006-10-27 11:31
Category: CSS, Web Standartları, XHTML
tags: [Aksak Kolonlar, CSS, CSS-Layout, CSS-P, Faux Column, Web Standartları, XHTML]
---

## Aksak Kolonlar(Faux Column)

CSS ile sayfa kodlaması yaparken karşımıza çıkan sorunlardan biridir
Aksak Kolonlar(faux column). Genelde isimlendirme olarak **Faux Kolon**
diye geçsede ben burada **Aksak kolon** olarak kullanacağım.
Basit bir örnek verecek olursak; içerik ve sağ kolon diye iki kolondan
oluşan bir yapımız olsun. Bu kolonların zemin renklerinin farklı
olduğunu düşünelim. Aşağıdaki şekildeki gibi

![][100]

İçerik ile sağ kolonun farklı yükseklite olması bir sorundur ve sorunu
çözmek için bir kaç yöntem mevcuttur. Biz burada en kolayı ve en
kullanışlı olanı anlatmaya çalışacağız.

Bu metodda yapılan iki kolon bir kapsayıcı katman içine alınarak iki
kolonun zemin resmi bu kapsayıcı katmana tanımlanmaktır.

{% highlight css %}
#kapsayiciKolon{
	background: #fff url(zemin_ard.gif) repeat-y left top;
}
{% endhighlight %}

Aynı şekilde üç kolonlu yapılar içinde çözüm üretilebilir. Sabit
genişlikte sayfalarda Aksak Kolonları düzeltmek bu kadar kolaydır. Esnek
yapılı sayfalarda Aksak Kolonları düzeltmek biraz daha zordur. Web
tarayıcısının boyutları değiştiğinde kolon şekli ve kolon boyutu
değişecektir. **Likit tasarıma sahip bir sayfada Aksak Kolon sorunun
çözümü zemin resmi konumlandırma değerlerini yüzde olarak vermektir.**

Eğer zemin pozisyonunu belirlemek için piksel değeri kullanıyorsanız,
elementin sol üst köşesine göre zemin resminizi piksel değeri vererek
konumlandırırsınız. Yüzdesel konumlandırma ile zemin resmi
konulandırıldığında, atanan değerler hem üst elemente göre, hem de
elementin kendine göre konumunu belirler. Örneğin:

{% highlight css %}
background: #fff url(resim.gif) no-repeat 25% 10%;
{% endhighlight %}

Yukarıdaki tanımlama sonucunda zemin resmi hem üst elementin %10 üst ve
%25 solundan mesafe alacaktır, hemde kendi içinde %10 üst ve %25 soldan
mesafe alacaktır. Aşağıdaki şekilde gösterilmiştir:

![][1]

Likit içerikli üç kolonlu sayfalarda Aksak kolon sorununun çözümüne
bakalım.

Bir örnek yapacak olursak;

![][2]

Daha önce likit bir sayfanın nasıl yapılacağını bahsetmiştik. İsterseniz
yine de bir [göz atın][] Yukarıdaki ekranda da görüldüğü gibi orta
kısıma birden fazla zemin rengi uygulamamız gerekiyor. Bunun için likit
sayfa oluştururken yaptığımız Kapsayıcı katmana bir zemin resmi sağ
taraftaki iki kolonumuzu kapsayana ikinci katmana da ikinci zemin
resmimizi tanımlayarak güzel bir sayfa oluşturacağız.

2000 piksel genişliğinde ve 10 piksel yüksekliğinde bir zemin resmi
hazırlayalım(Sol Alan Zemin resmi). Sonra 1.Aksak Kolonumuzu
oluşturalım(#SolKolon) . Menü alanı bu kapsayıcı elementin 23%
genişliğine sahip olacaktır. Ayrıca yine 23% genişliğe sahip bir alan
daha oluşturmalıyız(Sağ İçerik Alanı). 2000px genişliğindeki zemin
resmini kapsayan alandan Aksak Kolona atanan zemin renginin genişlik
değeri 460 piksel olacaktır. Aksak alanın zemin renginin dışındaki
alalanları(1540px) transparan yapmak için zemin resmimizi .gif
formatında yapmalıyız.

{% highlight css %}
#KapsayiciAlan {
    width: 85%;
    margin: 0 auto;
    text-align: left;
    background: #fff url(images/sol_zemin_resmi.gif) repeat-y 23% 0;
}
{% endhighlight %}

Benzer şekilde ikinci bir içerik oluşturarak sağda kalan iki kolona aynı
metod uygulanabilir. Yine 2000 piksel genişliğinde 10 piksel
yüksekliğinde bir zemin resmi hazırlayıp bu sefer resmin sağ tarafına
sağ kolon zemin rengi doldurulur ve kalan bölge transparan olacak
şekilde kaydedilir. ikinciAlan'ın KapsayiciAlan'a göre konumu
karşılatırmak için Bu Aksak kolonun soldan mesafesi resmin soldan
mesafesi %77(100-23)'den başlamalıdır. Çünkü KapsayiciAlan'ın zemin
resmi zaten uygulanmıştır bu nedenle biz ilk Kapsayici alan içine bir
tane daha **ikinciKapsayiciAlan** eklemeliyiz. Bu yeni
**ikinciKapsayiciAlan**'nınada zemin resmi atamalıyız.

{% highlight css %}
#ikinciKapsayiciAlan{
	background: url(images/sag_zemin_resmi.gif) repeat-y 77% 0;
}
{% endhighlight %}

Bu şekilde çok güzel bir 3 kolonlu likit bir sayfa elde ederiz.

Örnek çalışma için [tıklayınız.][]

  [100]: /images/sorunlu_kolonlar.gif
  [1]: /images/likit_sorunlu_kolonlar.gif
  [2]: /images/likit_sorunlu_kolonlar2.gif
  [göz atın]: http://www.fatihhayrioglu.com/?p=179
  [tıklayınız.]: /dokumanlar/aksak-3-kol-likid.htm
