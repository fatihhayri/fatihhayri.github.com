---
layout: post
title: font-face yardımı ile ikon eklemek - Yeni TL sembolü eklemek
Date: 2012-03-08 10:48
Category: CSS
tags: [font-face, İkon, Türk Lirası, yeni tl sembolü]
---

İkonlar web aleminde kendi iyi bir yer bulmuş öğelerdir. Şimdiye kadar
ikonları html sayfalarına resimler ile ekledik. İlk başta tek tek
eklerken daha sonra css sprite metodu ile tek resim dosyası içine tüm
ikonları ekleyip background-position yardımı ile kullandık. Bu
yöntemlerin kendice avantajları olduğu kadar resim işleme ve düzenleme
işlemleri bakımından her zaman bir sıkıntısı mevcut.

CSS3 ile birlikte gelen font-face özelliği yardımı ile istediğimiz yazı
tiplerini kullanıcının bilgisayarına yükleyebiliyoruz artık. Yazı
tipleri yazı karakterleri içerdiği gibi ikonlarıda içerebildiğini
biliyoruz. dingbat yazı tipleri, sıklıkla kullandığımız bilinen
fontların aksine harflerden ziyade simgelerden oluşan fontlara
denilmektedir. Bunun en bilinen örneği ücretsiz Wingdings yazı tipidir.
Benzer şekilde ikonlarımızı bir yazı tipi dosyası haline getirip
sitelerimizde kullanabilme imkanımız var. Tabi birçok ücretsiz şekilli
yazı tipi bulabiliriz internetten.

Burada sizlere bu yöntemi anlatmayı planlıyorum. Artılarından ve
eksilerinide bahsedip son kararı sizin vermenizi isteyeceğim.

[font-face kullanımını][] anlattığım makalemi okuyarak yazıları sitelere
nasıl gömdüğümüzü öğrenebilirsiniz.

{% highlight css %}
@font-face {
	font-family:'Graublau Web';
	src:local('Graublau Web Regular'), local('Graublau Web'), url(GraublauWeb.woff) format(woff), url(GraublauWeb.svg#GraublauWeb) format(svg), url(GraublauWeb.otf) format(opentype);
	font-weight:400;
	font-style:normal;
}

p {
	font-family:"Graublau Web", serif;
}
{% endhighlight %}

şeklinde genel kullanımı göstermiştik. Benzer bir şekilde bir şekilli
yazı tipi ekleyip ikon ekleyebiliriz.

[http://webloti.org/20-modern-fontface-icon-seti/][] ve benzeri sitelerden ücretsiz web ikonlarını alalım.

![][100]

{% highlight css %}
 @font-face{
	font-family: 'ModernPictogramsNormal';
	font-style: normal;
	font-weight: normal;
	src: url('modernpics-webfont.eot');
	src: url('modernpics-webfont.eot?#iefix') format('embedded-opentype'),
url('modernpics-webfont.woff') format('woff'),
url('modernpics-webfont.ttf') format('truetype'),
url('modernpics-webfont.svg#ModernPictogramsNormal') format('svg');
}
{% endhighlight %}

kodu ile yazı tipini sayfamızda çağırmış olduk. Menü elemanlarının her
biri için seçtiğimiz ikonları atamak için ilgili elemanın
öncesine(:before) yazı tipinde ilgili ikonu ifade eden harfi ekliyoruz.

{% highlight css %}
li#alisveris a:before{
	color: #f00;
	content: "i";
	font: 24px "ModernPictogramsNormal";
	padding-right: 5px;
}
{% endhighlight %}

Alışveriş için seçtiğimiz sepet ikonun “i” harfi ile ifade edildiği için “i” harfini ekledik. Kodu biraz daha düzenli yazarsak.

![][1]

Örnek: [/dokumanlar/fontface_ikon.html][]

Örnekte gördüğümüz gibi bir çok yerde ikonlarımızı CSS yardımı ile
ekleyip boyutunu, rengini kolayca değiştirebiliriz.

Bir başka örnek:
[/dokumanlar/fontface/fontface_ikon_buton.html][]

![][2]

Bu kullanımın avantajları ve dezavantajları var.

## Avantajları

-   Vektörel çizimler olduğu için boyutu değiştirme esnekliği sağlıyor.
-   Renk değiştirme imkanı
-   Bir satır CSS kodu ile değiştirme imkanı.
-   Farklı tarayıcılar için uygun
-   Birçok resim yerine tek yazı tipi ekleyerek performans kazandırıyor.
-   HTTP istek sayısını azaltarak performansı arttırıyor.

## Dezavantajları

-   png ve svg gibi ikonları revize etmek kolay değil
-   Bir veya daha fazla ikon için tüm yazı tiplerini eklemek performans
    açısından mantıklı değil. Yüksek yazı tipi dosya boyutları.
-   Çok renk seçimine olanak sağlamaması.

## Yeni Türk Lirası ikonunu eklemek

Benzer bir şekilde yeni yayınlanan Türk Lirasınıda font-face yardımı ile
ekleyebiliriz. TC Merkez bankasının yayınladığı yazı tipi olan
AbakuTLSymSansRegular siteye ekleyerek kolay bir şekilde yeni Türk
Lirası sembolünü web sitelerimize ekleyebiliriz.

Yazı tipinde sadece tl sembolünü kullanacağımız için diğer karakterleri
silip sadece ikonu bırakarak yazı tipi dosya boyutunu küçültebiliriz.

[/dokumanlar/fontface/abakutlsymsans.zip][]

Bağlantısından küçük dosyayı indirebilirsiniz.

{% highlight css %}
@font-face{
	font-family: 'AbakuTLSymSansRegular';
	font-style: normal;
	font-weight: normal;
	src: url('abakutlsymsans.eot');
	src: url('abakutlsymsans.eot?#iefix')
format('embedded-opentype'), url('abakutlsymsans.woff') format('woff'),
url('abakutlsymsans.ttf') format('truetype'),
url('abakutlsymsans.svg#AbakuTLSymSansRegular') format('svg');
}
{% endhighlight %}

![][3]

Şeklinde sayfaya ekledik. Sembol olunca rakamların başına konuyor. araya
biraz da mesafe koyalım.(padding-right:5px bunun için)

{% highlight css %}
p:before{
	content: "t";
	font-family: "AbakuTLSymSansRegular", serif;
	font-size: 24px;
	padding-right: 5px;
}
{% endhighlight %}

ile sayfamıza ekledik.

Örnek: [/dokumanlar/fontface/tl_deneme.html][]

## Kaynaklar

-   [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-ever-thought-about-using-font-face-for-icons/][]
-   [http://ikwebdesigner.com/special-characters/#howto][]
-   [http://www.sitepoint.com/webfont-icons/][]
-   [http://zocial.smcllns.com/sample.html][]
-   http://speckyboy.com/2012/02/13/20-fontface-icon-sets
-   [http://icons.marekventur.de/][]
-   http://somerandomdude.com/2010/05/04/font-embedding-icons
-   [http://24ways.org/2011/displaying-icons-with-fonts-and-data-attributes][]
-   [http://codevisually.com/heydings-icons-a-free-fontface-icon-set/][]
-   [http://webloti.org/20-modern-fontface-icon-seti/][]
-   [http://webdesignerwall.com/demo/css-social-buttons/][]
-   http://www.webresourcesdepot.com/free-icon-fonts-pictograms-for-todays-web-designer/

  [font-face kullanımını]: http://fatihhayrioglu.com/font-face-kullanimi/
  [http://webloti.org/20-modern-fontface-icon-seti/]: http://webloti.org/20-modern-fontface-icon-seti/
  [100]: https://lh5.googleusercontent.com/79Rggs4m_IPXO4v7JCZQt1fSFLljkf9RuTtZDSPzqeg4D3pjzrKFmyboc6ZmVwnSUw7yDZUvklmSSCqFSo8YL3qslteMuQ8r4I-SxhoO6pJVZ1EhZog
  [1]: /images/Screen-shot-2012-03-08-at-10.44.09-AM.png
  [/dokumanlar/fontface_ikon.html]: /dokumanlar/fontface_ikon.html
  [/dokumanlar/fontface/fontface_ikon_buton.html]: /dokumanlar/fontface/fontface_ikon_buton.html
  [2]: /images/Screen-shot-2012-03-08-at-10.45.36-AM.png
  [/dokumanlar/fontface/abakutlsymsans.zip]: /dokumanlar/fontface/abakutlsymsans.zip
  [3]: /images/Screen-shot-2012-03-08-at-10.47.01-AM.png
  [/dokumanlar/fontface/tl_deneme.html]: /dokumanlar/fontface/tl_deneme.html
  [http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-ever-thought-about-using-font-face-for-icons/]: http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-ever-thought-about-using-font-face-for-icons/
  [http://ikwebdesigner.com/special-characters/#howto]: http://ikwebdesigner.com/special-characters/#howto
  [http://www.sitepoint.com/webfont-icons/]: http://www.sitepoint.com/webfont-icons/
  [http://zocial.smcllns.com/sample.html]: http://zocial.smcllns.com/sample.html
  [http://icons.marekventur.de/]: http://icons.marekventur.de/
  [http://24ways.org/2011/displaying-icons-with-fonts-and-data-attributes]: http://24ways.org/2011/displaying-icons-with-fonts-and-data-attributes
  [http://codevisually.com/heydings-icons-a-free-fontface-icon-set/]: http://codevisually.com/heydings-icons-a-free-fontface-icon-set/
  [http://webdesignerwall.com/demo/css-social-buttons/]: http://webdesignerwall.com/demo/css-social-buttons/