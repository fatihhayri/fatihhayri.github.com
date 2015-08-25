---
layout: post
title: SASS ile Dinamik CSS Yazmak
Date: 2015-08-25 13:18
Category: css
tags: sass grunt stylus css-önişlemcileri
---

Üç adet popüler CSS önişlemcisi var. SASS, LESS ve Stylus. Dinamik CSS yazımı ile ilgili daha önce [Stylus](http://fatihhayrioglu.com/stylus-ile-dinamik-css-yazmak/) ile ilgili bir makale yazmıştım. Stylus yazımda da belirttiğim gibi bunlardan birini tercih etmek yeterli bence. Birbirlerine olan üstünlükleri çok ayırt edici değil. Sass'ın diğerlerine göre ilk olmak ve çok fazla dokümantasyonunun olması gibi avantajları var. Buna karşı bence Stylus'un yazımı daha kolay. Bir iki nokta üst üste -:- yazmadım diye hata almak hoşuma gitmiyor. 

[Sahibinden.com](http://sahibinden.com)'da Stylus ile kod yazarken [mobiwan](http://www.mobiwan.mobi/)'da tercihimiz genelde Sass oluyor. Bende hazır Sass kodluyoruz bir makale yazmanın sırası geldi diye düşünüp bu makaleyi yazmaya başladım. Bu yazım Sass'a giriş niteliğinde olacaktır. Daha sonra zamanım olursa devamı gelir inşallah.

"CSS ile kod yazarken büyük projelerde ne kadar dikkatli olsak da sonunda normal olarak binlerce satırlık kodlar çıkabiliyor. Düzenli olmamız ve Firebug yardımı olsa da bu kodlar içinde dolaşmak ve yönetmek bazı sorunlara neden oluyor. Dinamik CSS burada devreye giriyor.

Dinamik CSS yazımında; değişken tanımı, css fonksiyonları, fazla kod işaretçilerinden kurtarma kalıtsallık ve 4 işlem gibi özellikleri ile bizlere yardımcı oluyor. Kısacası CSS’e dinamik bir yazım olanağı kazandırıyor."

Stylus yazımdan yaptığım alıntı tüm CSS önişlemcileri için geçerlidir.

## Sass Kurulumu

SASS Ruby ile geliştirildiğinden kurulumu için bilgisayarınızda Ruby ve onun paket yöneticisi Gem'in bulunması lazımdır. Mac OS'ta Ruby ve Gem kurulu geliyor. Windows için  [Ruby Installer](http://rubyinstaller.org/) indirip kurmanız gerekir. Linux için [Rails Ready](https://github.com/joshfng/railsready) 'dan kurabilirsiniz. 

Sonrasında komut satırına:

{% highlight bash %}
gem install sass
{% endhighlight %}

Linux ve Mac Os'ta yetki sorunlarını aşmak için:

{% highlight bash %}
sudo gem install sass
{% endhighlight %}

yazmak yeterli, Sass'ı kurmuş olduk. Sass'ın yüklenip yüklenmediğini kontrol etmek için;

{% highlight bash %}
sass -v 
{% endhighlight %}

komutunu yazarız. Sonuçta Sass ve sürümünü yazan bir cevap gelirse Sass bilgisayarımıza yüklüdür.

## Sass'ın Derlenmesi

Sıra geldi Sass yazmaya küçük bir örnek yazalım ve deneme.sass olarak kaydedelim.

{% highlight sass %}
  .deneme
      margin: 0 auto
      width: 150px
{% endhighlight %}

Söz dizimine baktığımızda süslü parantez -{}-, noktalı virgül -;- kullanılmıyor. Kod blokları girintiler ile belirlenir. Şimdilik bu kadar ile yetinelim.  Şimdi bu kodu CSS'e çevirmemiz gerekiyor. Bunun için çeşitli yöntemler mevcut. 

### Komut satırından derlemek

CSS'e çevirmek için ilk yöntem komut satırından 

{% highlight bash %}
sass --watch deneme.sass:deneme.css
{% endhighlight %}

yazmak yeterli. Eğer birden fazla dosya var ise ve bir klasör içinde ise;

{% highlight bash %}
sass --watch app/sass:public/stylesheets
{% endhighlight %}

komutu ile tüm **app/sass** klasöründeki dosyaları CSS'e çevirebiliriz.

### Uygulamalar ile derlemek

Genel itibari ile bu programları sıralarsak

 - [Scout](http://mhs.github.io/scout-app/):  Ücretsiz, Windows/Mac
 - [CodeKit](http://incident57.com/codekit/index.html): 29$, Mac
 - [LiveReload](http://livereload.com/): 9,90$, Windows/Mac
 - [Compass.app](http://compass.kkbox.com/): 10$, Windows/Mac/Linux

### Sublime Text ile derlemek

Diğer editörlerinde benzer bir yetenekleri vardır muhtemelen. Ben Sublime Text kullanıyorum diye burada değinmek istedim. Sass kullanıyorsanız bir kaç Sublime Text eklentisi kurmanız gerekiyor. 

 - Sass dosyalarını renklendirmek için [Sass eklentisini](https://packagecontrol.io/packages/Sass) kurmalıyız.
 - Sass komutlarını otomatik tamamlama için [SASS Snippets](https://packagecontrol.io/packages/SASS%20Snippets) veya [Syntax Highlighting for Sass](https://packagecontrol.io/packages/Syntax%20Highlighting%20for%20Sass) kurmalıyız.
 - [Sass Build](https://github.com/jaumefontal/SASS-Build-SublimeText2) ile derleme işini Sublime ile yapabiliyoruz.
 - [SublimeOnSave](https://github.com/alexnj/SublimeOnSaveBuild) ile otomatik kaydetme özelliğini ekliyoruz.

### Grunt ve Gulp yardımı ile derlemek

Grunt ve Gulp, Sass derlemek için biçilmiş kaftandır. Yukarıdaki çözümler seçenek olması için anlatıldı. Asıl çözüm Grunt ve Gulp ile yapılandır.

Grunt ve Gulp'dan kısaca bahsedersek; tekrarlayan işlerimizi otomatize eden Nodejs üzerinde çalışan kod betikleridir. İleride zamanım oldukça daha detaylı bahsetmeye çalışacağım.

Burada grunt'tan bir örnek vereyim. Bir kaç tane grunt sass betiği var. [grunt-sass](https://github.com/sindresorhus/grunt-sass) bunlarda biri ve tercih edilebilir.  Grunt kurulu bir sistemde 

{% highlight bash %}
$ npm install --save-dev load-grunt-tasks
{% endhighlight %}

ve

{% highlight bash %}
$ npm install --save-dev grunt-sass
{% endhighlight %}

grunt-sass betiği yüklenir. Sonra **gruntfile.js**

{% highlight javascript %}
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-sass');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            compile: {
                files: {
                    'css/deneme.css': 'sass/deneme.sass'
                }
            },
            options: {
                sourceMap: true
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};
{% endhighlight %}

Daha sonra komut satırından 

{% highlight bash %}
grunt sass 
{% endhighlight %}

komutu ile sass dosyaları otomatik derlenecektir. Bu işi anlık değişimi yansıtacak bir kod ile daha kullanışlı hale getirebiliriz. 

{% highlight bash %}
$ sudo npm install grunt-contrib-watch --save-dev
{% endhighlight %}

ile izleme betiğini yükleyelim.

{% highlight javascript %}
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            sass: {
                files: ['sass/deneme.sass'],
                tasks: ['sass']
            }
        },
        sass: {
            compile: {
                files: {
                    'css/deneme.css': 'sass/deneme.sass'
                }
            },
            options: {
                sourceMap: true
            }
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);
};
{% endhighlight %}

sonrasında 

{% highlight bash %}
grunt
{% endhighlight %}

komutunu yazdıktan sonra **sass/deneme.sass** dosyasında değişiklik yaptımız anda otomatik derlenip **css/deneme.css** dosyası oluşturulacaktır.

{% highlight bash %}
➜  yeni-proje  grunt
Running "sass:compile" (sass) task

Running "watch" task
Waiting...
>> File "sass/deneme.sass" changed.
Running "sass:compile" (sass) task

Done, without errors.
Completed in 0.428s at Tue Aug 25 2015 12:29:03 GMT+0300 (EEST) - Waiting...
{% endhighlight %}

Şimdilik bu kadar zamanım oldukça daha fazla Sass ve Grunt makalesi yazmayı planlıyorum.

Kalın sağlıcakla.

## Kaynaklar

 - [http://sass-lang.com/](http://sass-lang.com/)
 - [http://thesassway.com/](http://thesassway.com/)
 - [http://www.sitepoint.com/html-css/css/sass-css/](http://www.sitepoint.com/html-css/css/sass-css/)
 - [http://leveluptuts.com/tutorials/sass-tutorials](http://leveluptuts.com/tutorials/sass-tutorials)
 - [http://sassbreak.com/](http://sassbreak.com/)
 - [http://www.sassnews.com/](http://www.sassnews.com/)
 - [http://code.tutsplus.com/categories/sass](http://code.tutsplus.com/categories/sass)
 - [http://sass-guidelin.es/](http://sass-guidelin.es/)
 - [http://www.gelistiricigunlugu.com/sass-nedir/](http://www.gelistiricigunlugu.com/sass-nedir/)
 - [http://webmagazin.co/sass-kullanalim-ve-kullandiralim/](http://webmagazin.co/sass-kullanalim-ve-kullandiralim/)
 - [http://www.erbilen.net/1200-sass-dersleri.html](http://www.erbilen.net/1200-sass-dersleri.html)
 - [http://www.yunusbassahan.com/blog/sass/sass-kurulumu-ve-program-tercihi.html](http://www.yunusbassahan.com/blog/sass/sass-kurulumu-ve-program-tercihi.html)
 - [http://sonsuzdongu.com/blog/sass-a-giris](http://sonsuzdongu.com/blog/sass-a-giris)
 - [http://blog.designedbysherpa.com/2015/03/css-preprocessorler-on-derleyiciler-ve-sass/](http://blog.designedbysherpa.com/2015/03/css-preprocessorler-on-derleyiciler-ve-sass/)
 - [http://sublimetexttips.com/how-to-add-sass-support-in-sublime-text/](http://sublimetexttips.com/how-to-add-sass-support-in-sublime-text/)