---
layout: post
title: Stylus ile Dinamik CSS Yazmak
Date: 2013-10-01 14:09
Category: CSS
tags: [dinamk-css, css, stylus, degişken, css-fonksiyonu]
---

![enter image description here][1]

CSS ile kod yazarken büyük projelerde ne kadar dikkatli olsak da sonunda normal olarak binlerce satırlık kodlar çıkabiliyor. Düzenli olmamız ve Firebug yardımı olsa da bu kodlar içinde dolaşmak ve yönetmek bazı sorunlar neden oluyor. Dinamik CSS burada devreye giriyor.

Dinamik CSS yazımında; değişken tanımı, css fonksiyonları, fazla kod işaretçilerinden kurtarma kalıtsallık ve 4 işlem gibi özellikleri ile bizlere yardımcı oluyor. Kısacası CSS’e dinamik bir yazım olanağı kazandırıyor.

## Başlangıç

Başlama bakımından less sadece bir js dosyası ile başlayabildiğimiz için daha mantıklı less tak-çalıştır mantığı ile çalışırken sass ve stylus için biraz ortam hazırlamak gerekiyor.

Tabi bu ortam hazırlama işini bir sefer yapıyoruz. Bir kere kurup sonra devamlı çalışıyoruz. Ayrıca hemen çalıştır less'in performans sıkıntıları sorun oluyor.

Ben burada stylus’u sizlere anlatmaya çalışacağım. Birinin diğerine göre çok büyük avantajları olmadığı için sizde bu 3 ön-derleyiciden birini seçebilirsiniz. [SASS için bu makaleyi](/sass) okuyabilirsiniz. Ayrıca google araması sonucu başka Türkçe makalelere erişebiliyoruz.

Benim stylus'u seçmemdeki etkenlerden bazıları sahibinden.com'daki bazı etkenlerdi. Siz seçim yaparken kendi etkenlerinizi göz önünde bulundurarak bir seçim yapın derim.

## Stylus'u Kurmak

Farklı işletim sistemlerinde stylus'u kurmak çok basit bir işlem.

### Ubuntu

    $ sudo add-apt-repository ppa:chris-lea/node.js
    $ sudo apt-get update
    $ sudo apt-get install nodejs
    $ sudo npm install -g stylus

### MacOS

    $ brew install node
    $ curl https://npmjs.org/install.sh | sh
    $ npm install -g stylus

### Window

Bu adresten [nodejs][4]'i indirip kurun.

![enter image description here][5]

Sonra komut satırına

{% highlight bash %}
npm install stylus -g
{% endhighlight %}

yazıp stylus'u kurun. npm nodejs'in paket yükleme aracı.

![nodejs kurulumu](/images/stylus_kurmak.PNG)

Kurulum işi bitti.

## Stylus'u kullanmak

Şimdi sıra stylus yazmaya geldi. Bir dosya açıp stylus yazmaya başladık ve dosyamızı kaydettik.

{% highlight css %}
.deneme
    margin 0 auto
    width 150px
{% endhighlight %}

Örneğin anasayfa.styl peki sayfamızda bunu nasıl göreceğiz.

{% highlight bash %}
$ stylus -c site/styl/anasayfa.css
{% endhighlight %}

Komutunu çalıştırdığımızda anasayfa.css dosyası oluşturulacaktır. Dosya içeriği

{% highlight css %}
.deneme{
    margin:0 auto;
    width:150px
}
{% endhighlight %}

Her defasında kodu çevirme kodunu yazmak yerine izleme(watch -w) komutu ile yaptığımız değişikliğin anında .css oluşturmasını sağlayabiliyoruz.

{% highlight bash %}
$ stylus -w site/styl/anasayfa.css
{% endhighlight %}

Çıkan dosyaların aynı klasörde olması karmaşaya neden olabilir. Çıktı dosyalarını farklı klasöre koyabiliyoruz.

{% highlight bash %}
$ stylus -w site/styl/ -o site/css/
{% endhighlight %}

Dinamik CSS yazılan bu sistemlerde sıkıntılardan bir tanesi yazdığınız kodu sayfaya .css olarak ekldiğiniz için kaynak koddaki .styl satırını Firebug vb. araçlarda göremiyoruz. Stylus'un bu durumu çözmek için iki çözümü var. İlki satır numaralarını göster(line -l) komutu

{% highlight bash %}
$ stylus -w -l site/styl/ -o site/css/
{% endhighlight %}

Yukarıdaki şekilde bir tanım sonucunda her tanımın üzerine styl dosyasındaki satırı yazılır.

Ayrıca FireBug'ın bir yan eklentisi olan FireStylus eklentisi var. Ancak ben çalıştıramadım. :(

## Stylus Kalsör ve Dosya Yapısı

Stylus ile kod yazarken klasör ve dosyaların yerini baştan ayarlamak sonda sorun yaşamamak adına önemli

{% highlight bash %}
./index.html
    |-- styl
        |-- index.styl
        |-- reset.styl
        |-- buttons.styl
        |-- global.styl
    |-- css
        |-- index.css
        |-- reset.css
        |-- buttons.css
        |-- global.css
{% endhighlight %}

index.styl diye dosya oluşuturup diğer .styl dosyalarını bu dosya içinden çağırarak değişken ve css fonksiyonlarına her dosyadan erişme imkanı sağlamalıyız. index.styl dosyası

{% highlight css %}
// Core variables and mixins
@import variables
@import mixins

// CSS Reset
@import reset

// global
@import global
@import layout

// Components: Buttons & Alerts
@import buttons
@import icons
{% endhighlight %}

Şeklinde bir yapı kurmak mantıklı.

### Daha az kod yazmak, Esneklik

Stylus ile daha az kod yazıyoruz, ancak daha az kod yazarken kod içinde kaybolmuyoruz bu önemli.

Sass ve Less bu konuda normal css işaretlerini kullanırken stylus bu konuda bayağı bir esneklik sağlıyor. Sass’ında Stylus benzeri kullanım opsiyonu olduğunu duydum.

{% highlight css %}
body
    padding 10px 5px
{% endhighlight %}

Yukarıdaki koda ilk baktığımızda CSS ile olan farklarını hemen dikkat çekiyor. Aslında kırpılmış CSS kodu gibi. Süslü parantezler yok({}), seçici ile değer arasındaki iki nokta üst üste(:) ve sondaki noktalı virgül(;) yok.

Yorumlama sonucu css;

{% highlight css %}
body{
    padding:10px 5px;
}
{% endhighlight %}

### İç İçe Seçiciler (Nesting)

Etkinlik için ard arda uzun seçiciler yazmak yerine iç içe tanımlar ile bu daha kolay sağlanır. Bu bize temiz bir Kalıtsallık sağlar ve kısa kodlar ile işimizi halletmemize yardım eder.

{% highlight css %}
ul
        li
                float left
                a
                    color red
{% endhighlight %}

Sonuç CSS;

{% highlight css %}
ul li{
    float:left;
}

ul li a{
        color:red;
}
{% endhighlight %}

CSS yazımını kolaylaştırıyor. Ancak dikkat etmek gerekiyor çok içiçe kullanımda üretilen CSS seçici yığınına dönebilir.

### Değişkenler(Variable)

Değişkenler bir kere tanımlanan bir değeri bir çok defa kullanmamızı sağlayan yapılardır. Bir yerde değiştirdiğimizde tüm projede değiştirmenize olanak sağlar.

{% highlight css %}
yazi-tipi-boyutu = 14px

body
    font yazi-tipi-boyutu Arial, sans-serif
{% endhighlight %}

Sonuç CSS;

{% highlight css %}
body{
    font:14px Arial, sans-serif;
}
{% endhighlight %}

Değişken kullanımı css prececor ile yapılan güzel bir özellik ki CSS4 ile birlikte normal css’e de gelecek.

Stylus'ta ayrıca koşullu değişken tanımı da vardır.

{% highlight css %}
position()
    position: arguments
    z-index: 1 unless @z-index

#logo
    z-index: 20
    position: absolute

#logo2
    position: absolute
{% endhighlight %}

Tanımı ile z-index tanımı olmayanlara 1 otomatik olarak tanımlanır.

### Yorum satırı

Stylus’da yorumlar javascript kullanımı gibi

{% highlight css %}
// ie7 fix et
body
    margin 0 // ie7 fix

/*
* Çoklu satırlı yorum
*/
{% endhighlight %}


### Kalıtsallık

Bir özelliğin veya benzer bir sınıfın diğer bir özelliğe kalıtsal olarak geçmesini sağlar.

{% highlight css %}
form
    input[type=text]
        padding: 5px
        border: 1px solid #eee
        color: #ddd
textarea
    @extends form input[type=text]
    padding: 10px
{% endhighlight %}

@extends ile hiyerarşik kalıtsallık alınabiliyor. Bu özellik şu an sadece stylus'ta var.

Sonuç CSS

{% highlight css %}
form input[type=text],
form textarea {
    padding: 5px;
    border: 1px solid #eee;
    color: #ddd;
}
textarea {
    padding: 10px;
}
{% endhighlight %}

### CSS Foksiyonları(mixing)

Css fonksiyonları bir sınıfa tanımlanmış tüm özellikleri başka bir yerde kullanmanıza yarar. Değişkenlere benzer fakat tüm sınıfı içerir. Ayrıca fonksiyon gibi parametre de alabilir.

Stylus’un az kod yazma prensibi bu tip karmaşık yapılarda diğer seçenekler göre ön plana çımasını sağlıyor.

{% highlight css %}
border-radius(n)
    -webkit-border-radius n
    -moz-border-radius n
    -ms-border-radius n
    -o-border-radius n
    border-radius n
#btn
    border-radius(3px) /* veya border-radius 3px */
    background #e9573f
{% endhighlight %}

n parametrik olarak değiştirme imkanı veriyor bize.

Sonuç CSS

{% highlight css %}
#btn {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    background: #e9573f;
}
{% endhighlight %}

Bu şekilde CSS3'ün önek(prefix) sorununa çözüm bulmuşta oluyoruz. NIB'i incelemekte yarar var.

### 4 İşlem

CSS içinde dört işlem işlerini yapabiliyoruz.

{% highlight css %}
leftSpace = 10

a.link
    margin: (24px/2)
    left: 5 * leftSpace
    padding: 4px - 2
{% endhighlight %}

Sonuçta css aşağıdaki gibi olacakttır;

{% highlight css %}
a.link {
    margin:12px;
    left:50;
    padding:2px
}
{% endhighlight %}

### CSS'e Dönmek

Bazı durumlarda stylus ile işin içinden çıkamadığımız haller oluyor. Bu gibi durumlarda çözüm bulamazsak normal CSS kodu yazabiliyoruz. Bu kod blokları yorumlanmadan kalıyor.

{% highlight css %}
@css {
    body {
        font: 14px;
    }
}
{% endhighlight %}

Sonuç CSS;

{% highlight css %}
body {
    font: 14px;
}
{% endhighlight %}

Ben bu durumu svg kullanımda yaşadım. Ara sıra işe yarıyor.

### Editör Özellikleri

Stylus yazmak için ben normaldede kullandığım Sublime Text 22yi editör olarak kullanıyorum. Sizlere de öneririm.

- Sublime Text'in pkaet kontrolü açıp(MacOs'da Command+Shift+p , Linux/Windows'da Control+Shift+p)
- "Package Control: Install Package" seçin (bir kaç saniye bekletebilir)
- "Stylus" seçiniz.

Paket kontrolü otomatik olarak son sürüm renklendirme ve otomatik tamamlama seçenklerini indirecektir.

Kaynak; [https://github.com/billymoon/Stylus/](https://github.com/billymoon/Stylus/)

**Girintileri görmek**

Girintilerin yoğun olarak kullanıldığı Stylus'ta girintileri görmek önem kazanıyor. Sublime Text'te girintileri göstermek için

{% highlight bash %}
preferences->settings-default 'ta "draw_white_space":"all"
{% endhighlight %}

yaparak gösterebiliyoruz.

![Sublime Text2 girintileri görmek](/images/girintileri_gormek.png)

### CSS'leri Stylus'a Çevirmek

Daha önce yazdığımız CSS kodlarını stylus'a çevirmek istiyorsanız. Bunu komut satırı ile yapabiliyoruz. Büyük (-C) işareti yardımı ile bunu yapıyoruz.

{% highlight bash %}
$ stylus -C dosya_adi.css cikan_dosya.styl
{% endhighlight %}

ve css dosyamız stylus'a çevrildi. Bu çevirme işi beni çok tatmin etmedi.

[http://css2stylus.com/][6] çevrimi içi araç stylus dan daha iyi çeviriyor.

## Hataları Ayıklama

Diğer rakiplerine göre hata bulma ve düzenlemek stylus ile daha kolay.

![enter image description here][7]

## Sorunlar

Stylus ile çalışmaya başladıktan sonra yaşadığım bazı sorunlar var. Bazılarını çözememe karşın bazıları ile hala sorunluyuz.

 - sublime text 2 stylus otomatik tamamlamayı çalıştıramadım
 - Firestylus çalıştıramadım, veya
   **stylus -l <dosya_adi> şeklinde css içine basıyor.**
 - Girintileme nedeni ile çıktı olan css de seçici zinciri uzuyor
 - özellik seçicileri kullanımında sıkıntı var
   **Çözüldü**
 - otomatik kısaltma bazı sorunlara neden oluyor. örn #ffffff

## Sonuç

Stylus ile kod yazmaya başladığımda ilk başlarda biraz acemilik yaşadım ama hemen alıştım ve sonra geri dönmek sorun oldu. İnsan kolaya çok çabuk alışıyor.

Stylus'a geçtikten sonra dinamik sprite işine göz atmayı düşünüyorum.

Zamanla editörlerin ve tarayıcıların bu konuda ilerleme katederek daha hal alacağını

Kullandıkça stylus ile alakalı paylaşım devam edecektir.

Kalın sağlıcakla.

## Kaynaklar

- [[http://learnboost.github.io/stylus/docs/selectors.html](http://learnboost.github.io/stylus/docs/selectors.html)
- [http://www.viget.com/inspire/some-lesser-known-features-of-less/](http://www.viget.com/inspire/some-lesser-known-features-of-less/)
- [http://coding.smashingmagazine.com/2011/09/09/an-introduction-to-less-and-comparison-to-sass/](http://coding.smashingmagazine.com/2011/09/09/an-introduction-to-less-and-comparison-to-sass/)
- [http://www.sitepoint.com/a-comprehensive-introduction-to-less/](http://www.sitepoint.com/a-comprehensive-introduction-to-less/)
- [http://www.vanseodesign.com/css/css-preprocessors/](http://www.vanseodesign.com/css/css-preprocessors/) (****)
- [http://www.hongkiat.com/blog/less-tips-tools/](http://www.hongkiat.com/blog/less-tips-tools/)
- [http://designshack.net/articles/css/sass-vs-stylus-who-wins-the-minimal-syntax-battle/](http://designshack.net/articles/css/sass-vs-stylus-who-wins-the-minimal-syntax-battle/) (sass ve stylus karşılaştırması)
- [http://net.tutsplus.com/tutorials/html-css-techniques/sass-vs-less-vs-stylus-a-preprocessor-shootout/](http://net.tutsplus.com/tutorials/html-css-techniques/sass-vs-less-vs-stylus-a-preprocessor-shootout/) (sass, less ve stylus karşılaştırması)
- learnboost.github.com/stylus/
- [http://css-tricks.com/poll-results-popularity-of-css-preprocessors/](http://css-tricks.com/poll-results-popularity-of-css-preprocessors/) anket
- [http://thechangelog.com/stylus-expressive-robust-feature-rich-css-language/](http://thechangelog.com/stylus-expressive-robust-feature-rich-css-language/) (stylus)
- [http://www.sitepoint.com/a-comprehensive-introduction-to-less/](http://www.sitepoint.com/a-comprehensive-introduction-to-less/) (less e başlamak)
- [http://www.sitepoint.com/a-comprehensive-introduction-to-less-mixins/](http://www.sitepoint.com/a-comprehensive-introduction-to-less-mixins/) (lesss mixins)
- [http://verekia.com/less-css/dont-read-less-css-tutorial-highly-addictive](http://verekia.com/less-css/dont-read-less-css-tutorial-highly-addictive) (less)
- [http://www.wellfireinteractive.com/blog/introduction-to-stylus/](http://www.wellfireinteractive.com/blog/introduction-to-stylus/) (stylus)
- nylira.com/stylus-the-revolutionary-successor-to-css/
- robdodson.me/blog/2012/12/28/debug-less-with-chrome-developer-tools
- [https://npmjs.org/~tjholowaychuk](https://npmjs.org/~tjholowaychuk) (stylus geliştiricilerinden)
- [https://npmjs.org/~kizu](https://npmjs.org/~kizu) (stylus geliştiricilerinden) ie için çözüm önerisi
- [https://github.com/shomeya/bootstrap-stylus/blob/v1.4.0-stylus/lib/mixins.styl](https://github.com/shomeya/bootstrap-stylus/blob/v1.4.0-stylus/lib/mixins.styl) (stylus örnekleri)
- [http://daker.me/2013/07/why-stylus-fit-better-my-needs.html](http://daker.me/2013/07/why-stylus-fit-better-my-needs.html)
- [https://github.com/andris9/stylus-sprite](https://github.com/andris9/stylus-sprite)

  [1]: /images/stylus_logo.png
  [4]: http://nodejs.org/
  [5]: /images/nodejs_kurmak.png
  [6]: http://css2stylus.com/
  [7]: /images/stylus_hata.jpg
