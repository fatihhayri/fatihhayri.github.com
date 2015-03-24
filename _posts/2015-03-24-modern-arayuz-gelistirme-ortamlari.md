---
layout: post
title: Modern Arayüz Geliştirme Ortamları
Date: 2015-03-18 10:41
Category: genel
tags: modern arayüz geliştime
---

Arayüz geliştiricilerinin hayatı hiç bir zaman durağan olmadı. Her zaman kendini güncellemek gerekiyor. 

Kendimden örnek vererek konuyu açıklamaya çalışayım. Bu işe ilk başladığımda(Liste2000 ve Turkline'ın ilk zamanları) tüm işleri biz yapardık. O zaman **web master** olarak çağırılırdık. Tasarım, arayüz geliştirme ve sunucu tarafı programlama kısımları. Hatta site içeriğini bile araştırıp eklediğim siteler oldu. Master olmak kolay değil tabi.

Sonra sonra tasarım işinin, görselliğin başka bir boyut olduğunu kısa sürede anladı herkes. Tasarımcılar ve programcılar olarak adlandırıldık. HTML, CSS, Javascript ve sunucu taraflı programlama(php, asp) işlerini yapmaya devam ettik. Ben asp ve sonrasında asp.net ile programlama yapmayı tercih ediyordum. Turkline ve PixelPlus'ın ilk zamanları.

Sonra arayüz geliştiriciliğin aslında tek başına bir sektör olduğu kanısına vardık. Arayüz Geliştiriciliği ile sunucu taraflı kodlamanın ayrı ayrı olması daha verimli sonuçlar vereceği konusunda kabullenmeler başladı ve **arayüz geliştiricileri**(Front-End) olduk. 

Tüm bu gelişmeler hep ihtiyaçların artması ve bu ihtiyaçları karşılamak için yapılan çalışmalar sonucunda doğdu. Ne kadar iyi sonuç almak istiyorsanız, bir konuda o kadar ihtisaşlaşmış insan gücüne ihtiyacınız var demektir. Bir insana bu ihtiyaçların hepsini yüklerseniz, o insan süperman değilse bu ihtiyaçları belli bir oranda karşılayacaktır. İstekler genelde üst düzeyde olduğu için herşeyi yapan insanların bu istekleri karşılama imkanı kısıtılı oluyor tabi.

Bazı yöneticiler çalışanların bu kadar bölümlere ayrılmasını yönetim ve götürülerini(maddi) düşünerek istemeyebilir. Hala tam yetkili programcıların(Full Stack developer) olacağını ve burada iyi işler çıkacağını düşünen ir kesim var.

Burada şu ayrımı iyi yapmak lazım. Her bölümde çalışan kişiler ilişkide olduğu birimlerin ne iş yaptığı ve kabiliyetlerinin ne olduğu hakkında bilgi sahibi olmalıdır. Bir arayüz geliştirici; hem tasarımcının kabiliyetlerini hemde sunucu taraflı programlama yapanların kabiliyetleri hakkında bilgi sahibi olmalıdır. Bu iletişim ve iş genelinde çözüm oluşturmak için önemli bir ayrıntıdır. Ancak bu hiç bir zaman bir arayüz geliştiricinin çok iyi derecede tasarım yapabilmesi veya sunucu taraflı kodlamayı yalayıp yutması anlamına gelmez. Tasarımcılardan örnek verecek olursak; bir tasarımcı arayüz geliştiricinin neler yapabildiğini, kabiliyetlerini bilmeli, ama gidip farklı tarayıcılar için kodlama yapmamalı. Ne demiş atalar "taş yerinde ağırdır".

Mobil dünyanın gelişmesi ve javascript'in artık bir sunucu taraflı dil olması ile birlikte web siteleri birer uygulamaya dönüşmeye başladı. Artık web uygulamaları yazmaya başladık.

Aşağıda son yıllarda arayüz geliştiricilerin dünyasını olumlu yönde etkileyen bir çok gelişme ve araçtan bahsedeceğim. Bu araçlar hakkında genel bilgi vereceğim. Bu bilgilendirme sonunda yukarıda yazdıklarımın aksini düşünenler tekrar bir düşünsün derim.

## Modern Arayüz Geliştiricileri Ne Yapar? 

Eski statik HTML, CSS ve Javascript yazma zamanı geride kaldı artık. Notepad ile htlm kodu yazdığımız, **style** klasöründe statik css dosyaları ile oluşturduğumuz web siteleri. Hayat şimdi daha hızlı işliyor. Eskiden projelerde hız, ekip çalışması ve optimizasyon düşünülmeden yazılır ve yayına çıkardı. Gerçi buna bazı sitelerde gerekte yoktu.

Bir siteyi kodlarken artık arayüz geliştiricileri aşağıdaki listedeki işlemleri yapmak durumunda;

 - Birden fazla kişi çalışıyorsa; bir sürüm kontrol sistemi ile kodlarını farklı sürümlerde saklamayı ihmal etmezler. (Git, SVN vd.)
 - Site dosya yapısını ilerideki genişlemleride dikkate alarak kurgularlar.
 - Sorunların çözümünü araştırmak için etkin olarak arama sistemlerini kullanırlar. (Google, StackOverflow, Kullanılan araçların dokümantasyonlarını)
 - Farklı tarayıcı ve platformlar için kod yazarlar. iPhone, Windows'da IE8, Android Table vs. (Simülatör ve Sanal Makineler)
 - Tasarımcı ile iletişimi sağlam tutup, UX konusunda fikir paylaşımında bulunurlar.
 - Sunucu taraflı kod yazarları ile iletişimini sağlam tutup, proje alt yapısını birlikte kurarlar. 
 - Dinamik sprite yöntemi ile birleştirmeliler.
 - Kod düzenin düzgün tutmak için çaba sarf ederler. Hatalı koldarı kontrol etmelidirler.
 - Kullanıdığı harici eklentileri, uygulama çatılarını güncel tutumakla yükümlüdürler.
 - Optimizasyon işlerini en baştan düşünerek kodlarını yazarlar
 - Erişilebilirlik kurallarını kontrol eder
 - Otomatik test senaryolarını yazar. (Karma / Jasmine)
 - Dokümantasyon hazırlamayı ihmal etmezler

Yukarıda saydığım ve saymayı unuttuğum görevler ile uğraşmak durmunda kalan arayüz geliştiricileri için işleri hızlandırma ihtiyacı doğdu. Bu ihtiyaçları karşılamak için farklı farklı çözümler çıktı. Aşağıda ben sizlere bu ihtiyaçları karşılamak için oluşturulan çözümleri listeleyeceğim ve kısaca bilgilendireceğim.

 - **Sürüm Kontrol Sistemleri**
     - [Git](http://git-scm.com/) - Git sayfama [göz atın](http://fatihhayrioglu.com/git/)
     - [SVN](http://subversion.apache.org/)
 - **İskelet Oluşturma** (Scaffolding)
 Genellikle es geçilen bu kısım aslında web site/uygulamasının en önemli yerlerinden biridir. Bizim için hazır iskelet yapısı oluşturmaya yarayan araçlar;
     - [Yeoman](http://yeoman.io/) 
     - [Loom](https://www.npmjs.com/package/loom)
     - [Codekit](http://incident57.com/codekit/)
 - **İhtiyaçların Yönetimi** (Dependency management)
Arayüz geliştiricileri uygulama çatıları, eklentiler ve uygulama geliştirme araçları kullanarak projelerini geliştirirler. Açık kaynak bu araçları kullanmak bizlere büyük hız ve avantaj sağlamaktadır. Ancak her güzelin bir kusuru olduğu gibi, bu kod yapılarınında güncel tutma ve verimli kullanma konusunda sıkıntıları vardır. İşte tam bu noktada aşağıdaki araçlar bizi bu dertten kurtarıyor.
     - [Bower](http://bower.io/)
     - [Npm](https://www.npmjs.com/)
     - [Bundler](http://bundler.io/)
 - **Javascript Uygulama Çatıları(Framework)**
 Javascript önem kazanması ile bir çok javascript uygulama çatıları çıktı. Javascript Uygulama Çatılarını; düzensiz ve belli bir mimariden uzak kod yazan bizleri bir düzene sokan ana çatılar olarak özetleyebilirim. Bu sayede anlaşılır, sürdürülebilir ve kolay yönetilebilir yapılar üretebiliyoruz. 
     - [AngularJs](https://angularjs.org/)  
     - [Backbone](http://backbonejs.org/)
     - [Emberjs](http://emberjs.com/)
     - [Knockoutjs](http://knockoutjs.com/)
     - [Meteor](https://www.meteor.com/)
     - [Mocha](http://mochajs.org/)
 - **Otomasyon**
 Genel olarak kod yazarları tembel adamlardır, bundan dolayı bir çok işini yazdıkları betiklerle otomotize ederler. Bu işi daha düzenli ve tertipli yapan araçlarda var tabi. Tekrar tekrar yapmamız gereken işleri(sprite oluşturmak, kodların havasını almak, kodları birleştirmek vs. vs.) bizim yerimize yapan araçlar;
     - [Grunt](http://gruntjs.com/) 
     - [Gulp](http://gulpjs.com/)
     - [Brunch](http://brunch.io/)
 - **HTML, CSS ve Javascript önişlemcileri**
 Statik dosyalara(HTML, CSS) dinamizim kazandıran ve işaretleme dillerini işaretlerden kurtaran araçlar olarak özetleyebiliriz bu araçları;
     - [Sass](http://sass-lang.com/) (CSS) 
     - [Less](http://lesscss.org/) (CSS) 
     - [Stylus](http://learnboost.github.io/stylus/) (CSS) Stylus hakkındaki [benim yazım](http://fatihhayrioglu.com/stylus-ile-dinamik-css-yazmak/)
     - [Haml](http://haml.info/tutorial.html) (HTML) 
     - [Jade](http://jade-lang.com/) (HTML)
     - [Slim](http://slim-lang.com/) (HTML)
     - [CoffeeScript](http://coffeescript.org/) (Javasript)
     - [LiveScript](http://livescript.net/) (Javasript)
     - [Traceur](https://github.com/google/traceur-compiler) (Javasript)
 - **Çok Kullanılan Kütüphaneler**
     - [Jquery](https://jquery.com/) Jquery hakkındaki [yazılarım](https://www.google.com.tr/search?q=site:fatihhayrioglu.com%20jquery&oq=site:fatihhayrioglu.com%20jquery&aqs=chrome..69i57j69i58.6699j0j1&sourceid=chrome&es_sm=91&ie=UTF-8)
     - [D3](http://d3js.org/)
     - [HTML5 Boilerplate](https://html5boilerplate.com/)
     - [Twitter Bootstrap](http://getbootstrap.com/)
     - [Foundation 4](http://foundation.zurb.com/)
 - **Tarayıcıların Geliştirici Araçları**
     - [Chrome Developer Tools](https://developer.chrome.com/devtools) 
     - [Firebug](http://getfirebug.com/) Firebug hakkındaki [yazılarım](https://www.google.com.tr/search?q=site:fatihhayrioglu.com%20jquery&oq=site:fatihhayrioglu.com%20jquery&aqs=chrome..69i57j69i58.6699j0j1&sourceid=chrome&es_sm=91&ie=UTF-8#q=site:fatihhayrioglu.com%20firebug)
 - **Simülatörler**
     - [X Code Simülator](https://developer.apple.com/xcode/downloads/)
     - [Chrome Developer Tools](https://developer.chrome.com/devtools) 

Yukarıda listelemeye çalıştığım bir çok konu hakkında bilgi sahibi olamız gerekiyor. Listelemeyi unuttuğum şeylerde vardır muhtemelen. Her projede hangi ihtiyaçların olduğunu çıkarmak ve hangi araçları kullanmak gerektiğine karar vermek gerekiyor. 

Ben konuların yanına benim yazdığım konuların linklerini koydum. Çok az şey yazdığımı fark ettim. Zamanımı iyi değerlendirebilirsem hepsi hakkında bir şeyler yazmak isterim. 

## Kaynaklar

 - [http://blog.salsitasoft.com/the-shifting-definition-of-front-end-developer/](http://blog.salsitasoft.com/the-shifting-definition-of-front-end-developer/)
 - [http://blog.chartbeat.com/2014/01/30/modern-front-end-workflow-start-finish/](http://blog.chartbeat.com/2014/01/30/modern-front-end-workflow-start-finish/)
 - [http://www.nczonline.net/blog/2013/10/07/node-js-and-the-new-web-front-end/](http://www.nczonline.net/blog/2013/10/07/node-js-and-the-new-web-front-end/)
 - [http://juristr.com/blog/2014/08/node-grunt-yeoman-bower/](http://juristr.com/blog/2014/08/node-grunt-yeoman-bower/)
 - [http://code.tutsplus.com/tutorials/essential-tools-for-a-modern-front-end-development-workflow--pre-66083](http://code.tutsplus.com/tutorials/essential-tools-for-a-modern-front-end-development-workflow--pre-66083)
 - [http://addyosmani.com/blog/199-slides-on-front-end-tooling-workflows/](http://addyosmani.com/blog/199-slides-on-front-end-tooling-workflows/)
 - [http://tooling.github.io/book-of-modern-frontend-tooling/index.html](http://tooling.github.io/book-of-modern-frontend-tooling/index.html)
 - [http://www.learnjade.com/](http://www.learnjade.com/)
 - [http://slim-lang.com/](http://slim-lang.com/)
 - [http://blog.kartaca.com/2013/09/angularjs-ve-backbonejs/](http://blog.kartaca.com/2013/09/angularjs-ve-backbonejs/)
 - [http://learn.shayhowe.com/advanced-html-css/](http://learn.shayhowe.com/advanced-html-css/)