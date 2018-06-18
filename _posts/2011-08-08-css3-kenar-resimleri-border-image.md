---
layout: post
title: CSS3 Kenar  Resimleri (border-image)
Date: 2011-08-08 22:55
Category: CSS
tags: [border-image, css3, esnek butonlar, kenar resimleri]
---

CSS3 ile birlikte gelen yeni özellikleri araştırmaya devam ediyorum.
Bunlardan bir tanesi border-image özelliği. border-image, elamanın
kenarlarına resim eklemek için kullanabileceğimiz bir özelliktir. Küçük
resimlerle dekoratif kenar resimleri, oval şekilli kenarlar ve renk
geçişleri uygulayabiliriz. CSS3’ün birçok özelliğinde olduğu gibi
border-image özelliğide yeni nesil tarayıcılar tarafından
desteklenmektedir, ancak her tarayıcı önek ile desteklemektedir.(ie hiç
desteklemiyor)

CSS3 border-image özelliğinin en güzel taraflarından birisi resmi 9
parçaya bölüp istediğimiz gibi esnetmemize olanak sağlamasıdır. Bu
sayede küçük resimler ile istediğimiz görüntüleri elde ederiz.

![][100]

grafik [zurb.com][] sitesinden alınmıştır.

border-image kod yapısı

-   border-image: <resim_kaynagi\> <bolum {1,4}\> / <genislik {1,4}\> <dis_hat\> <tekrar{1,2}\>;

Firefox, Chrome, Safari ve Opera gibi yeni nesil tarayıcılar
destekliyor. Diğer özelliklerde olduğu gibi önek ile destekliyorlar.
İnternet Explorer 9 desteklemiyor, şu an geliştirme aşamasında olan 10
da destekleyeceğini düşünüyorum.

Yukarıda yazdığımız tanım bir kısaltmadır. Bu kısaltma

-   border-image-source:
-   border-image-slice:
-   border-image-width:
-   border-image-outset:
-   border-image-repeat;

Özelliklerini tek başına ifade eder. Ayrı yazılan bu özellikleri henüz
hiç bir tarayıcı ayrı ayrı desteklememektedir. border-image’i
destekleyen tüm tarayıcılar önek ile border-image kısaltmasını
desteklemektedir.

**border-image-source
**Resmin kaynağı belirtir. Url, renk geçişi veya data URI olabilir.
Background-image için tanımladığımız her değeri içerebilir.

**border-image-slice**
border-image-slice değeri 1’den 4’e kadar değer alabilir. Yukarıdaki
çizimde gösterdiğimiz gibi border-image resmi dokuz alandan oluşur. 4
köşe, 4 kenar ve 1 adet orta kısım. Köşeler sabit boyutunu korur. Diğer
bölümler ise sabit, genişleyebilir veya her ikisi tanımlarına göre
çeşitli durumlar alabilir.

{% highlight css %}
.test{
	border-image-slice: 5px 5px 5px 5px;
}
{% endhighlight %}

![][1]

Yukarıdaki örnekte görüldüğü gibi köşelerden belli bir mesafe
bırakılarak kalan kısımlar uzatılmıştır. Tanımlama diğer css
tanımlarında olduğu gibi saat yönünde üst-sağ-alt ve sol şeklindedir.
Yüzde değerleri tanımlanırken (%) işareti konulması zorunludur, ancak
piksel tanımlarında px koymak zorunlu değildir. Yukarıdaki tanım
aşağıdaki gibi de yapılabilir.

{% highlight css %}
.test{
	border-image-slice: 5 5 5 5;
}
{% endhighlight %}

Tüm değerler eşit ise tek tanım ile de ifade edilebilir.

{% highlight css %}
.test{
	border-image-slice: 5;
}
{% endhighlight %}

Başta belirttiğimiz gibi 9 bölüme ayrılan resmin kenarları ve orta
kısmına border-image ile işlev atayabiliyoruz. Orta kısım kenarların
içini kapsayan bölümdür. Eğer orta kısmı renk veya başka bir şey ile
doldurmayı düşünüyorsanız resim düzenleme aracınız ile resmin orta
kısmını saydam bırakarak istediğinizi yapabilirsiniz.

Standartlarda orta kısım tamamen doldurma seçeneği(fill) var ancak
doldurma diye bir seçenek(örn no-fill) yok. Umarız ileri bunuda
eklerler.

Bu kısmı daha iyi anlamak için çevrimiçi araçları biraz kurcalayın
derim. [http://border-image.com][] ve
[http://www.norabrowndesign.com/css-experiments/border-image-anim.html][]
sitelerini ziyaret ediniz.

**border-image-width
**border-image-width özelliği elemanın kenar genişliğini belirler.
border-image-width tanımlı ise CSS2’den aşina olduğumuz border-width
tanımını ezer.

{% highlight css %}
.test{
	border-image-width: 5px 5px 5px 5px
}
{% endhighlight %}

tüm değerler aynı ise tek tanım ile kısaltma yapılabilir

{% highlight css %}
.test{
	border-image-width: 5px;
}
{% endhighlight %}

Genel tanımda ise taksim ile ayrılarak belirtilir.

{% highlight css %}
.test{
	border-image: url(“images/test.gif”) 5 / 5px;
}
{% endhighlight %}

Bu kısaltmayı Opera henüz desteklememektedir. Bu nedenle bunun yerine
border-width değerini kullanabiliriz.

{% highlight css %}
.test{
	border-image: url(“images/test.gif”) 5 repeat;
}

.test{
	border-width:5px;
}
{% endhighlight %}

**border-image-outset**
border-image dış hat çizgisi kutunun dışına taşan kısmı belirtir. Şu an
için destekleyen tarayıcılar yoktur. Başlangıç değeri 0’dır.

**border-image-repeat**
border-image-repeat özelliği köşeler hariç diğer alanların(kenarlar ve
orta kısım) tekrarlanacağını ve/veya esnetileceğini belirler.  Bir veya
iki değer alır iki tanım yapıldı ise ilk değer üst-alt ikinci değer
sol-sağ içindir. Tek değer tüm alanlar içindir.

-   **stretch:**Resim belirlenen kenar alanını esneyerek doldurur.
-   **repeat:** Resim boyutunu koruyarak tekrarlı olarak karo şeklinde
    belirlenen kenar alanı doldurur.
-   **round :** repeat değerine benzer. Resimleri tekrar ettirir ve aynı
    zamanda genişlik veya yüksekliğine uydurmak içinde esnetir. (element
    buna uyum sağlamak için tekrar boyutlandırlır) Bir nevi hem repeat
    hemde strecth uygular.
-   **space:**border-image alanı doldurmak için tekrar eder, bu
    tekrarlar eşit aralıkta olur, sağlanan genişlik resmin boyutunu tam
    katı olmadığı durumlarda aradaki beyaz boşluğu gösterir.

Webkit tabanlı tarayıcılar **round**değerini desteklemiyor, onun yerine
**repeat**kullanmak daha mantıklı. **space**özelliğini şimdilik hiç bir
tarayıcı desteklemiyor.

Bu kısmı daha iyi anlamak için çevirimiçi araçları biraz kurcalayın
derim. [http://border-image.com][] ve
[http://www.norabrowndesign.com/css-experiments/border-image-anim.html][]
sitelerini ziyaret ediniz.

Bu özellikleri tek tek şu an hiç bir tarayıcı desteklememektedir, bundan
dolayı şimdilik kaydı ile **border-image** kısaltması kullanılmalıdır.
Yukarıda konu daha iyi anlaşılması için ayrı ayrı gösterilmiştir.

{% highlight css %}
.test{
    width:300px;
    height:300px;
    border-width: 33px;
    -moz-border-image: url(border_image_desen.png) 33 stretch;
    -webkit-border-image: url(border_image_desen.png) 33 stretch;
    -o-border-image: url(border_image_desen.png) 33 stretch;
    border-image: url(border_image_desen.png) 33 stretch;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/myzQX/35/embedded/result,css,html"></iframe>

**strech**

{% highlight css %}
.test{
    width:300px;
    height:300px;
    border-width: 33px;
    -moz-border-image: url(border_image_desen.png) 33 repeat;
    -webkit-border-image: url(border_image_desen.png) 33 repeat;
    -o-border-image: url(border_image_desen.png) 33 repeat;
    border-image: url(border_image_desen.png) 33 repeat;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/egcdh/11/embedded/result,css,html"></iframe>

**repeat**

{% highlight css %}
.test{
    width:300px;
    height:300px;
    border-width: 33px;
    -moz-border-image: url(border_image_desen.png) 33 round;
    -webkit-border-image: url(/border_image_desen.png) 33 round;
    -o-border-image: url(border_image_desen.png) 33 round;
    border-image: url(border_image_desen.png) 33 round;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/VnJnz/3/embedded/result,css,html"></iframe>

**round**

iPhone geri butonu standardını border-image ile çok kolay bir şekilde
yapabiliriz.

Kullandığımız buton

![][2]

Resim küçük ve biz köşelerini sabit bırakıp orta kısımları uzatalım.

![][3]

Esneme sadece üst ve alttan olduğu için sadece sağ ve sol değerlerini
tanımladık. Aynı şekilde genişlikleri(border-width) tanımladık. Ortaya
esnek bir buton çıktık.

{% highlight css %}
a.backButton{
	-webkit-border-image:url(backButton.png) 0 5 0 14 stretch;
	-moz-border-image:url(backButton.png) 0 5 0 14 stretch;
	-o-border-image:url(backButton.png) 0 5 0 14 stretch;
	border-image:url(backButton.png) 0 5 0 14 stretch;
	border-width:0 5px 0 14px;
}
{% endhighlight %}

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/3SHNk/16/embedded/result,css,html"></iframe>

Yukarıdaki örnekte görüldüğü gibi basit bir kod ile(siz bakmayın
öneklerin kalabalığına) ensek bir buton elde etmiş oluyoruz.
Kullandığımız resimde boyut olarak küçük.

**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**2.0+ (-webkit)**|**11+**|**3.5+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**3.2+ (-webkit)**|**36+**|
{: .tarayici-uyumi}


## Sonuç

border-image özelliği gayet kullanışlı bir özellik. Birçok konuda elimiz
rahatlatacak bir özellik. Uyguladıkça daha güzel örneklerin çıkacağına
inanıyorum. Standartlar tam oturmasa da zamanla daha iyi olacaktır. Bu
özellikte bazı şimdilik eksik kalan yerler olsa da mobil uygulamalarda
uygulanabilirliği var.

## Kaynaklar

-   [http://www.w3.org/TR/css3-background/#border-images][]
-   [http://www.css3.info/preview/border-image/][]
-   [http://www.sitepoint.com/css3-border-image/][] (güzel)
-   [http://css-tricks.com/understanding-border-image/][]
-   [http://www.useragentman.com/blog/2011/03/29/pixel-perfect-css3-border-image-in-depth/][]
-   [http://www.seyfullahkilic.com/web-tasariminizi-css3-ile-gelecege-tasiyin][]
-   [http://www.zurb.com/playground/awesome-overlays][] (grafik)
-   http://www.suburban-glory.com/blog?page=111
-   [http://ejohn.org/blog/border-image-in-firefox/][] (farklı örnekler)
-   [https://developer.mozilla.org/en/CSS/-moz-border-image][] (standartlar)
-   [http://www.dynamicdrive.com/style/csslibrary/item/image_frames_using_css3_border_image/][] (güzel örnekler)
-   [http://caniuse.com/border-image][] (destek listesi)
-   http://ensightful.com/walrus-ivory-tusk-with-animals
-   [http://border-image.com/][http://border-image.com] (çevrimiçi araç)
-   [http://www.norabrowndesign.com/css-experiments/border-image-anim.html][] (örnek)
-   [http://dev.opera.com/articles/view/css3-border-background-boxshadow/#border-image][]
-   http://people.opera.com/pepelsbey/experiments/bdi
-   [http://ejohn.org/blog/border-image-in-firefox/][]
-   http://michaelhan.net/wordsets/20
-   [http://www.impressivewebs.com/space-round-css3-background/][] (round ve space)

  [100]: https://lh6.googleusercontent.com/Gf9iv6Tv28So_gkr9zPUPwPa7TLnEwYv7SYRzuM_A42Y6DOrfD16-W_Lp7wH4Hd5TVpbVVsrrm_NuT5OzRsKFHnqD3P1m05LMXOVFVq2yGx01zO-e_A
  [zurb.com]: http://zurb.com/
  [1]: https://lh4.googleusercontent.com/8QsLUbb5ZJMp8ADjUHjhB2WkWRoJUbpS_XhpVEvVnGOZSDWhl-y7GoBUmSr-elGj7jXxS6wZvBkMRRtiwmzEHLacray1AC-0mhI8K_2FdTspbpDQxFs
  [http://border-image.com]: http://border-image.com/
  [http://www.norabrowndesign.com/css-experiments/border-image-anim.html]: http://www.norabrowndesign.com/css-experiments/border-image-anim.html
  [2]: https://lh6.googleusercontent.com/EGaD-qHZbUWYstl-bWzS4gXGZVIUOtjTzSC4Ts4RCV2Nlp5mwP5Frxw6E_T3Vnx368_00tmTvv0mQzolvTXvD8w4JZoMyna8Q2GfdP0xSCgyFg7zfNI
  [3]: https://lh6.googleusercontent.com/_f6rtZcfaMwrcVDUnEySHv5YRELXr-_IGpMxshGjOjbx2Uisj_kAPqenT7FpwiqPMQcRIM4-1Yua0CxixYh3JUPpe4xIZegphhG6X9skfbMF9JPsGU4
  [http://www.w3.org/TR/css3-background/#border-images]: http://www.w3.org/TR/css3-background/#border-images
  [http://www.css3.info/preview/border-image/]: http://www.css3.info/preview/border-image/
  [http://www.sitepoint.com/css3-border-image/]: http://www.sitepoint.com/css3-border-image/
  [http://css-tricks.com/understanding-border-image/]: http://css-tricks.com/understanding-border-image/
  [http://www.useragentman.com/blog/2011/03/29/pixel-perfect-css3-border-image-in-depth/]: http://www.useragentman.com/blog/2011/03/29/pixel-perfect-css3-border-image-in-depth/
  [http://www.seyfullahkilic.com/web-tasariminizi-css3-ile-gelecege-tasiyin]: http://www.seyfullahkilic.com/web-tasariminizi-css3-ile-gelecege-tasiyin
  [http://www.zurb.com/playground/awesome-overlays]: http://www.zurb.com/playground/awesome-overlays
  [http://ejohn.org/blog/border-image-in-firefox/]: http://ejohn.org/blog/border-image-in-firefox/
  [https://developer.mozilla.org/en/CSS/-moz-border-image]: https://developer.mozilla.org/en/CSS/-moz-border-image
  [http://www.dynamicdrive.com/style/csslibrary/item/image_frames_using_css3_border_image/]: http://www.dynamicdrive.com/style/csslibrary/item/image_frames_using_css3_border_image/
  [http://caniuse.com/border-image]: http://caniuse.com/border-image
  [http://dev.opera.com/articles/view/css3-border-background-boxshadow/#border-image]: http://dev.opera.com/articles/view/css3-border-background-boxshadow/#border-image
  [http://www.impressivewebs.com/space-round-css3-background/]: http://www.impressivewebs.com/space-round-css3-background/


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png
