---
layout: post
title: CSS3 Çoklu Ardalan(Multiple Background)
Date: 2011-02-08 23:03
Category: CSS
tags: Alıntı, css3, çoklu ardalan, multiple background, paralaks
---

CSS3 standart geliştiricileri önceki sürümlerde eksik olan birçok sorunu
gidermektir. Daha önce birçok uygulamamızda yaşadığımız sorunlardan
biriside bir elemana birden fazla ardalan resmi(background-image)
tanımlayamıyoruz. Bu sorun nedeni ile birden fazla ardalan resmi
tanımlamak istediğimiz durumlarda fazla eleman ekleyerek çözüm
üretiyorduk.

[Yuvarlak kenarlı kutular][],  [CSS ile sekmeli tab menu yapımı][], [CSS ile gölge vermek][], [CSS ile buton yapmak][] vb. yazılarımızda bu
durumu görebiliriz.

CSS3 geliştiricileri bu sorunu gördü ve çözüm üretildi. CSS3 background
tanımında birden fazla resim tanımlamamıza izin veriyor. Birden fazla
tanımı yapmak için aralarına virgül koyuyoruz.

{% highlight css %}
background: url(image_1.jpg) top right no-repeat,
url(image_2.gif) bottom right no-repeat,
url(image_2.png) bottom right no-repeat;
{% endhighlight %}


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+**|**9+**|**3.6+**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+**|**3.2+**|**36+**|
{: .tarayici-uyumi}

Yeni nesil tarayıcıların bir çoğu bu özelliği desteklerken ie8 ve altı
sürümler bu özelliği desteklemiyor ve bu web mecrasında bizi bu özelliği
kullanmamızı engelleyecek. Desteklemeyen tarayıcılar için eski yöntemi,
destekleyen tarayıcılar için ise yeni yöntemi kullanarak aşmaya çalışan
çözümler var ancak bu yöntemler koordinasyon sorununa neden olacaktır.
Ama bu yöntemi uzun süre kullanmayacağız anlamına gelmesin mobil mecrada
bu metodu kullanabiliriz.

## Örnek 1:

Bu yöntemi kullanarak daha önce yaptığımız [css ile buton yapmak][CSS ile buton yapmak] konumuzda anlattığımız Görselliği Arttırılmış Esnek
Yapılı Butonlar yöntemi birde yeni bu tanım ile yapalım.

{% highlight html %}
<a href="">Örnek Buton Metni</a>
{% endhighlight %}

CSS kodumuz

{% highlight css %}
body {
    background-color:#363636
}
a {
    display:block;
    font:bold 14px Arial, Helvetica, sans-serif;
    color:#363636;
    float:left;
    padding:5px 14px 0 14px;
    height:23px;
    text-decoration:none;
    background:url(cancanli_butonlar_ard_.gif) left top no-repeat, url(cancanli_butonlar_ard_.gif) right -58px no-repeat, url(cancanli_butonlar_ard_.gif) center -29px repeat-x
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

Burada şuna dikkat ediyoruz, background tanımı yapılırken sıralama
önemli. Sıralama şöyle oluyor background: sol, sağ ve orta şeklinde
sıralama yapmalıyız.

Başka bir örnek ile özelliğin kullanılabileceği yerleri düşünelim. CSS3
ve özellikleri daha yeni yeni kafamızda ve uygulamalarımızda yerini
almakta, bundan dolayıdır ki yapacağımız uygulamalar basit olabilir ama
özelliği öğrenme açısından önemlidir.

Çoklu ardalan kullanımı birçok siteyi kodlarken ihtiyaç duyduğum bir
özellikti. Her defasında hayıflanıyordum, keşke şöyle bir özellik olsada
kullansak diye, gerçi hala kullanamıyoruz. Mobil araçlar için kod
yazarken kullanabilmemiz çok güzel.

## Örnek 2:

[Alıntı: blockquote ve q etiketleri][] makalemize tekrar bakalım ve bu
örneği çoklu ardalan ile ne kadar kolaylaştırdığımızı görelim.

![][100]

Makaleye tekrar baktığımızda bu tip bir alıntı görselliğini kazanmak
için üç adet ardalan resmi kullanıyoruz. İçeriğine göre yazının
uzamasını istediğimiz için 3 adet resim kullanıyoruz. Tabi bu 3 resmi
tanımlamak için 3 adette elemana ihtiyacımız oluyor. Bunlar eski örnekte
blockquote, p ve cite elemanları. Biz burada çoklu ardalan kullanarak
tek bir eleman ile bu işi yapabiliriz. Tabi burada cite etiketinin
anlamından dolayı bırakacağız ama yine o olmadanda bu işi
yapabileceğimizi bilelim.

CSS Sprite resmimiz aşağıdaki gibi tek resim olacaktır.

![][1]

HTML kodu

{% highlight html %}
<blockquote>Sevgide güneş gibi ol, dostluk ve kardeşlikte akarsu gibi ol, hataları örtmede gece gibi ol, tevazuda toprak gibi ol, öfkede ölü gibi
ol, her ne olursan ol, ya olduğun gibi görün, ya göründüğün gibi ol.</blockquote>
<cite>Mevla'na Celaleddin-i Rumi</cite>
{% endhighlight %}

CSS kodu

{% highlight css %}
blockquote {
    width: 224px;
    margin:0;
    padding:30px 12px 0 12px;
    color: #fff;
    text-align:center;
    font:bold 14px/1.7em Georgia, "Times New Roman", Times, serif;
    background: url(images/alinti_ard.gif) -490px 0 no-repeat, url(images/alinti_ard.gif) -242px bottom repeat-y;
}
cite{
    font-size: 1.2em;
    padding-bottom:29px;
    display:block;
    text-align:center;
    color:#C6D9F1;
    text-decoration:underline;
    width:240px;
    background: url(images/alinti_ard.gif) no-repeat 1px bottom, url(images/alinti_ard.gif) -242px bottom repeat-y;
}
{% endhighlight %}

Aslında css kodumuz önceki koddan pek farkı yok. Farklı olan iki kısım
var. background tanımları.

![][2]

Örneği görmek için [tıklayınız.][3]

## Örnek 3:

​3. bir örneğide paralaks bir zemin için yapalım.
[www.storiesinflight.com][] buradaki örneği yapalım.

Her biri ayrı ayrı olan resimler(çimen, ağaç, bulut ve gökyüzü) üst üste
koyarak bir resmi elde edeceğiz. Örneği aldığımız sitede bu resme
hareketde kazandırılmıştır, ancak bizim konumuz olmadığı için işin bu
kısmına girmeyeceğiz.

HTML kodu

{% highlight html %}
<div id="paralaks">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam lacus, consequat eget sodales non, ultrices vitae arcu. Vivamus quis felis sit amet mi malesuada gravida vitae rhoncus diam.
</div>
{% endhighlight %}

CSS kodu

{% highlight css %}
#paralaks{
	width:400px;
	height:180px;
	padding:5px;
	background-image: url(images/cimen.png), url(images/agac.png), url(images/bulut.png), url(images/gokyuzu.png);
	background-repeat: repeat-x, no-repeat, repeat-x, repeat-x;
	background-position:0 0, 120px 0, 0 0, 0 0;
}
{% endhighlight %}

Örneği görmek için [tıklayınız.][4]

![][5]

Örnekte görüldüğü gibi bir elemana 4 adet resim tanımladık. background
tanımlarını ayrı ayrı yapabildiğimiz gibi bir önceki örnekte olduğu gibi
kısaltmada uygulayabiliriz.

![][6]

Yukarıdaki resimde de görüldüğü gibi ilk tanımlamamız en önde daha
sonradaki resimlerde  sıralamaya göre arkaya doğru sıralanmaktadır.

## Sonuç

Yukarıda örnek olarak verdiğimiz sayfalarda görüldüğü gibi birçok yerde
kullanılabilecek bir özelliktir çoklu ardalan özelliği. Daha yeni bir
özellik olması açısından zamanla zihnimizde daha gelişmiş örnekler yer
alacaktır ve ileride daha güzel sonuçları bu özellik sayesinde
sayfalarımıza uygulayacağız. Ben CSS3 hakkındaki ilk çalışmalar
başladığında ilk olarak bu özellik dikkatimi çekmiş ancak daha sonra
border-image özelliğini gördükten sonra çoklu ardalan özelliği ile
yapabileceğim birçok uygulamayı border-image özelliği ile daha kolay
yapabileceğimiz gördüm. İleride zamanı gelince onuda anlatacağız, ama bu
özelikte bizi heyecenlandırıyor açıkçası.

Kalın sağlıcakla.

## Kaynaklar

-   [http://helephant.com/2009/11/css3-multiple-background-images/][]
-   [http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/][]
-   [http://www.smashingmagazine.com/2010/04/28/css3-solutions-for-internet-explorer/][]
-   [http://www.w3.org/TR/css3-background/#the-background-image][]
-   [http://event-horizon.twiddles.com/sites/experimental/css3-bg/][]
-   [http://css-tricks.com/css3-multiple-backgrounds-obsoletes-sliding-doors/][]
-   [http://www.storiesinflight.com/html5/backgrounds.html][] (paralaks)
-   http://www.lifeathighroad.com/css3-lessons/css3-lessons-multiple-background-images
-   [http://www.paulrhayes.com/experiments/parallax/#experiment][]

  [Yuvarlak kenarlı kutular]: http://www.fatihhayrioglu.com/yuvarlak-kenarli-kutular/
  [CSS ile sekmeli tab menu yapımı]: http://www.fatihhayrioglu.com/css-ile-sekmelitab-menu-yapimi/
  [CSS ile gölge vermek]: http://www.fatihhayrioglu.com/css-ile-golge-vermek/
  [CSS ile buton yapmak]: http://www.fatihhayrioglu.com/css-ile-buton-yapmak/
  [tıklayınız.]: /dokumanlar/coklu_ardalan_tanimi/css_ile_buton.html
  [Alıntı: blockquote ve q etiketleri]: http://www.fatihhayrioglu.com/alinti-blockquote-ve-q-etiketleri/
  [100]: https://lh5.googleusercontent.com/SJPUNhGo1EIpgZCusQV8ahSeUnnYrIbtpMefhym0mfKhJhjgLsGQ9QB1mkm8-jwnpF9YNoPoS8feY1b5zu2dlGxADYrohj8UtXwqP7oNGK6MCYRyVIU
  [1]: /images/alinti_ard-300x12.gif
  [2]: /images/alinti_sema-300x45.gif
  [3]: /dokumanlar/coklu_ardalan_tanimi/alinti_coklu_ardalan.html
  [www.storiesinflight.com]: http://www.storiesinflight.com/
  [4]: /dokumanlar/coklu_ardalan_tanimi/coklu_ard_paralaks.html
  [5]: https://lh3.googleusercontent.com/GJZCOSKaonqtZWRowbC3piRUAtnokihjVZiJsrpoH0o57aizW_h-lUD9BVbVaxS1LfTy_epfpqAZ4QfVDAY7OxMblGYo2jAChutnXQcM8Mdvs7QJM34
  [6]: https://lh3.googleusercontent.com/oxpb3X9kHeRE5dTNBgxITu8aboSFcjEy794Lk6s_f2yZaGQ907oICh-OWvcfbaK5NK7aLjgSnXrv8v6EU8biB5g4kiahmYf1tTaOqBboxqapOSS2_YY
  [http://helephant.com/2009/11/css3-multiple-background-images/]: http://helephant.com/2009/11/css3-multiple-background-images/
  [http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/]: http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/
  [http://www.smashingmagazine.com/2010/04/28/css3-solutions-for-internet-explorer/]: http://www.smashingmagazine.com/2010/04/28/css3-solutions-for-internet-explorer/
  [http://www.w3.org/TR/css3-background/#the-background-image]: http://www.w3.org/TR/css3-background/#the-background-image
  [http://event-horizon.twiddles.com/sites/experimental/css3-bg/]: http://event-horizon.twiddles.com/sites/experimental/css3-bg/
  [http://css-tricks.com/css3-multiple-backgrounds-obsoletes-sliding-doors/]: http://css-tricks.com/css3-multiple-backgrounds-obsoletes-sliding-doors/
  [http://www.storiesinflight.com/html5/backgrounds.html]: http://www.storiesinflight.com/html5/backgrounds.html
  [http://www.paulrhayes.com/experiments/parallax/#experiment]: http://www.paulrhayes.com/experiments/parallax/#experiment


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png