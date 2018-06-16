---
layout: post
title: Sass Klasör yapısı
Date: 2015-09-02 12:18
Category: css
tags: [sass css-önişlemcileri klasör-yapısı]
---

[Bir önceki yazımda](https://fatihhayrioglu.com/sass-ile-dinamik-css-yazmak/) Sass'a giriş yapmıştık. Bu makale de klasör yapımızın Sass sonrası nasıl olması gerektiğini gösterelim. 

Klasör yapısını baştan ayarlamak her zaman iyidir. Her ne kadar ben burada bir yapı sunsam da klasör yapısı geliştiricinin kendi çalışma şartlarına göre esnetip yenilemesi gerekir.

CSS ile kod yazarken dosyaların çok fazla sayıda olması hızı azaltacağı için (HTTP isteklerinin çoğalmasından dolayı) tercih edilmezdi. Ancak Sass ve bezer sistemler derlenip tek CSS çıktısı verdiği için her mantıksal bölüm için bir dosya oluşturmak gerekir. Ayrıca bu dosyaları belirlenen klasörlere taşımak büyük projeler için düzen sağlar.

Kalsör yapısına geçmeden önce CSS'den de bildiğimiz **import** kuralına değinelim.

## Sass'da @import kullanımı

CSS'de de diğer css [dosyalarını içeri aktarmak için kullandığımız](https://fatihhayrioglu.com/cssi-web-sayfalarina-eklemek/) bu yöntem benzer amaçla ve bazı artı eklemelerle Sass'da da var. CSS'de @import yavaşlığa neden olduğundan dolayı pek tercih edilmezdi. Ancak bu sorunlar Sass'ta olmadığı için burada kullanmakta bir mahsur yok.

Sass import'ta dosya isminin tamamını yazmaya gerek yoktur. Örneğin **main.sass** dosyasını import ederken 

{% highlight sass %}
@import "main";
{% endhighlight %}

yazmak yeterlidir. .sass / .scss uzantısını yazmaya gerek yok. 

### Kısmi (partial) Sass dosyaları

Ben Türkçeye kısmi olarak çevirdiğim partial Sass dosyalarını şöyle açıklayabiliriz; Bazı Sass dosyalarının CSS'e çevrilmesine gerek yoktur, diğer Sass dosylarına hizmet eder. Örneğin değişkenler, mixinler vs. Bu dosyalar kısmen derlenir. Diğer Sass dosyaları bu dosyalardaki bilgileri kullanır, ama bu dosyalardaki Sass kodu CSS'e çevrilmez. Kısmı Sass dosyaları alt çizgili ( _ ) ile başlamalıdır. Örnek _variables.sass

{% highlight sass %}
$base-font-family: Gibson, Arial, sans-serif;
$base-font-size:   14px;

$spacing-unit:      30px;
$text-color:        #111111;
...
{% endhighlight %}

Şeklindeki değişken tanımladığımız Sass dosyasını CSS'e çevirmemiz pek anlam ifade etmez. Ancak bu değişkenleri diğer Sass dosyaları kullanır. 

Kısmi Sass dosyalarının import edilirken alt çizginin yazılmasına gerek yoktur.

{% highlight sass %}
@import "variables";
{% endhighlight %}

Bu ekleme sonucunda Sass derlemesi ile derlediğimizde variables.css dosyası çıkarmaz. Ama biz **home.sass** dosyamızda $text-color değişkenini kullanabiliriz.

## Klasör yapısı

Yaptığım uygulamalardan ve kaynaklar kısmındaki yazıları inceledikten sonra proje boyutlarına göre klasör yapısını oluşturmanın faydalı olacağını düşündüm. Küçük projede klasör yapısı oldukça basit tutulabilecekken, orta halli ve büyük projelerde daha kapsamlı bir klasör yapısının tercih edilmesi önemlidir.

### Küçük projeler

{% highlight bash %}
_base.sass 
_layout.sass    
home.sass
about-club.sass
join-us.sass
{% endhighlight %}

Küçük projelerde klasörlere gerek yok bence. Ortak dosyalar kısmi Sass olarak adlandırılırken (_base ve _layout) her sayfanın farklı Sass dosyaları olabilir.

**base.sass**: Bu dosya değişkenleri, mixinleri, sıfırlama kodlarını, sprite ve tipografik tanımları içerir. Dosya içinde yorum satırı ile bu bölümler ayrılabilir. 

**layout.sass**: Bu dosya sayfa yapısını oluşturan ana yapıların ve alt yapıların kodlarını içerir. Üst alan (header), alt alan (footer), sol ve/veya sağ alan (side) ve içerik kapsayıcısını içerir. Ayrıca bu alanlar içinde kullanılan küçük yapısal alanlarıda içerir. Menüler, açılır kutular (modal, lightbox), hiyerarşik yerimi (breadcrumb), sayfalama butonları vs.

**Sayfalar**: Anasayfa ve alt sayfa için ayrı sass dosyaları. Çıktıları ayrı ayrı her sayfaya eklemek mantıklı.

### Orta ve büyük çaplı projeler

Genelde projeler bu kategoriye giriyor. Küçük diye başlayan bir çok proje zamanla orta veya büyük ölçekli bir projeye dönüşebiliyor. Kod düzenini sağlamak için her mantıksal alan ayrı bir Sass dosyası olarak kullanmakta yarar var. Benim eriştiğim son yapı aşağıdaki gibidir.

{% highlight bash %}
./base
|-- _fonts.sass
|-- _mixins.sass
|-- _reset.sass
|-- _sprites.sass
|-- _variables.sass

./components
|-- _modal.sass
|-- _navigation.sass

./layout
|-- _footer.sass
|-- _header.sass
|-- _layout.sass

./pages
|-- _home.sass
|-- _about.sass
|-- _join-us.sass
|-- _offers.sass

./vendors
|-- _colorpicker.sass
|-- _jquery.ui.core.sass
|-- _swiper.sass

main.sass
{% endhighlight %}

Küçük projelerde dosyalar içinde birleştirdiğimiz birimleri tek tek ayrı sass dosyası olarak oluştururuz. Ayrıca bunların dışında bir iki klasörde daha eklememiz gerekti.

**base klasörü**: Değişken, mixin, renk ve yazı tipi gibi genel tanımların ve sıfırlama dosyasını içeren klasördür.

**layout klasörü** : Ana yapıyı oluşturuan dosyaları içerir. Örneğin header, footer, sidebar vs.

**components klasörü** : Ana yapı dışında kalan küçük yapıları içeren klasördür. Kullanıcı arayüzü (UI) öğelerini içeren sass dosyaları vardır. Örneğin, modal, lightbox, breadcrumb vs.

**pages:** Sayfaların her biri için oluşturulan sayfaya özel kodların bulunduğu sass dosyaları içerir. Örneğin anasayfa (home.sass), hakkımızda, iletişim vs.

**vendors**: Kullandığımız eklentilerin sass dosyalarını koyduğumuz klasör. Burada şöyle bir durum var. Eğer eklentileri [bower](https://fatihhayrioglu.com/arayuz-gelistiriciler-icin-paket-yonetimi-bower/) ile ekliyorsak eklentileri **_bower_components** içindeki CSS dosyasını değiştirmeden kendi projemizde eklentinin CSS'lerini ezdiğimiz dosyayı barandırmak mantıklı olacaktır.

**main.sass**: Yukarıdaki tüm dosyaları içeren ana dosyadır. Bu dosya derlenerek tek bir css dosyasını oluşturur.

Projeye göre bu klasör sayısı değişebilir. İlgili projedeki durumlara göre klasör açılabilir ve silinebilir. Zamanla en iyi klasör yapınızı bulacağınız düşünüyorum.

**main.sass** dosyamız aşağıdaki gibi olacaktır.

{% highlight sass %}
@import "base/variables";
@import "base/mixins";
@import "base/reset";
@import "base/sprites";
@import "base/fonts";

@import "layout/layout";
@import "layout/header";
@import "layout/footer";

@import "components/modal";
@import "components/navigation";
@import "components/top_navigation";

@import "vendors/colorpicker";
@import "vendors/jquery.ui.core";
@import "vendors/swiper";
    
@import "pages/home";
@import "pages/offers-detail";
@import "pages/about";
@import "pages/join-us";
@import "pages/notifications";
{% endhighlight %}

Dikkat ettiyseniz .sass uzantılarını ve alt çizgileri (_) yazmadık. Sizde yorum kısmında kendi klasör yapınızı paylaşırsanız bir birimizden alabilecğeimiz yapıları kopyalayarak daha iyiye ulaşabiliriz.

Kalın sağlıcakla.

## Kaynaklar

 - [https://www.designernews.co/stories/32730-ask-dn-how-do-you-structure-your-sass-files-in-a-large-project](https://www.designernews.co/stories/32730-ask-dn-how-do-you-structure-your-sass-files-in-a-large-project)
 - [http://hugogiraudel.com/2013/02/11/sass-structure/](http://hugogiraudel.com/2013/02/11/sass-structure/)
 - [http://www.sitepoint.com/architecture-sass-project/](http://www.sitepoint.com/architecture-sass-project/)
 - [https://subvisual.co/blog/posts/32-our-css-sass-project-architecture-and-styleguide](https://subvisual.co/blog/posts/32-our-css-sass-project-architecture-and-styleguide)
 - [http://wiseheartdesign.com/articles/2010/01/22/structuring-a-sass-project/](http://wiseheartdesign.com/articles/2010/01/22/structuring-a-sass-project/)
 - [https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)
 - [http://docssa.info/#fileStructure](http://docssa.info/#fileStructure)
 - [http://www.infobahndesign.com/how-i-structure-my-sass-projects/](http://www.infobahndesign.com/how-i-structure-my-sass-projects/)
 - [https://medium.com/@wanderingmatt/a-little-structure-for-your-large-sass-project-7fe19ab647fa](https://medium.com/@wanderingmatt/a-little-structure-for-your-large-sass-project-7fe19ab647fa)
 - [http://www.adelineyaw.com/tag/file-structure-2/](http://www.adelineyaw.com/tag/file-structure-2/)
 - [http://thinkxl.github.io/2015/06/16/how-i-organize-my-sass-projects/](http://thinkxl.github.io/2015/06/16/how-i-organize-my-sass-projects/)
 - [http://sass-guidelin.es/#the-7-1-pattern](http://sass-guidelin.es/#the-7-1-pattern)
 - [http://www.ismailhakkieren.com/sass-dosya-yapisi/](http://www.ismailhakkieren.com/sass-dosya-yapisi/)
 - [https://github.com/bcinarli/scalable-frontend-architecture/tree/master/styles-sass](https://github.com/bcinarli/scalable-frontend-architecture/tree/master/styles-sass)
 - [http://isdeneyimlerim.com/sass-ve-dosya-organizasyonu/](http://isdeneyimlerim.com/sass-ve-dosya-organizasyonu/)
 - [https://zurb.com/university/lessons/wrangling-sass-import-files](https://zurb.com/university/lessons/wrangling-sass-import-files)
 - [http://sass-lang.com/documentation/file.SASS_REFERENCE.html](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
 - [https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)