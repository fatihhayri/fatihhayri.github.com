---
layout: post
title: Arayüz Geliştiriciler İçin Paket Yönetimi: Bower
Date: 2015-08-12 13:18
Category: bower
tags: bower paket-yönetimi twitter bower.json
---

Nodejs ve npm'i anlattıktan sonra Bower'ı anlatmamak olmaz. Bower için npm'in arayüz geliştiriciler için olanı demek yanlış olmaz herhalde. Javascript'in sunucu tarafına geçmesi ile arayüz geliştiriciler daha çok otomatize olmaya başladı. 

Birçok projemizde javascript ve css kütüphaneleri ve eklentileri kullanıyoruz. Kullandığımız bu kütüphane ve eklentileri sitemize eklemek ve güncellemek bizim için yük olmaya başladı. Burada size bir anımı anlatayım. sahibinden.com'da çalışırken jquery sürümünü yükseltmek bir dert olmaya başlamıştı. Güncellemeyi kimse göze alamıyordu. Çünkü her güncellemede bazı sorunlar çıkıyordu. En son bir iş olarak açıldı ve [Sercan](http://sercaneraslan.com/) yaptı. Uzun ve dertli bir süreçti. Bu tip sorunlarla karşılaşmış bizim gibi arayüz geliştiriciler için **bower** velinimettir. 

Gelelim bower'ı kullanmaya. Çeşitli editörlerden de bu işi yapabiliyoruz ama ben burada komut satırından çalıştırmayı göstereceğim.

## Bower'ı yüklemek

Bower'ı yüklemek için npm'in bilgisayarınızda yüklü olması gerekmektedir. Eğer bilgisayarınızda npm yüklü değilse. Bilgi almak için [Nodejs ve npm](/nodejs-npm/) yazımızı okumanızı tavsiye ederim.

Sistemde npm yüklü ise komut satırına aşağıdaki kodu yazalım.

{% highlight bash %}
npm install -g bower
{% endhighlight %}

npm yazısından bildiğimiz gibi -g parametresi kurulacak kod blokunun gene
e kurulmasını sağlıyor. Kurduktan sonra bir sonraki adıma geçelim.

# Paket bulmak

Npm'den bildiğimiz gibi kütüphane ve eklentiler paket olarak adlandırılıyor. Eklemek istediğimiz paketleri aramanın iki yolu var. [Bower'ın arama](http://bower.io/search/) sayfasını kullanmak yada komut satırından aşağıdaki kodu yazarak aramak.

{% highlight bash %}
bower search <sorgu>
{% endhighlight %}

Bir örnek yapalım. 

{% highlight bash %}
bower search bootstrap
{% endhighlight %}

Araması sonucundan bootstrap ile ilgili kütüphaneler listelenir. 

![enter image description here](http://fatihhayrioglu.com/images/bower-search.png)

Her bir satır bir paketi tanımlar. İlk mor renkli kısım ismi, ikinci beyaz kısımda paketin indireceği git adresini gösterir.

## Paket yüklemek

Projemize eklemek istediğimiz paketi yüklemek için komut satırına aşağıdaki kodu yazarız.

{% highlight bash %}
bower install <paket_adi>
{% endhighlight %}

**install** komutundan sonra **paket_adi** ile yüklenebildiği gibi, github kısayolu, Git enpoint ve bir url'den de yüklenebilmektedir. 

{% highlight bash %}
# kayıtlı paket adı
$ bower install jquery
# GitHub kısayolu
$ bower install desandro/masonry
# Git endpoint
$ bower install git://github.com/user/package.git
# Herhangi bir URL
$ bower install http://example.com/script.js
{% endhighlight %}

Normalde yüklemek istediğimiz paketi yazdığımızda paketin son sürümü yüklenir. Ayrıca istediğimiz sürümü indirmek için araya diyez işareti (#) koymamız yeterli.

{% highlight bash %}
bower install bootstrap#3.2.0
{% endhighlight %}

![enter image description here](http://fatihhayrioglu.com/images/bower-install.gif)

Paket yüklendiğinde proje klasöründe **bower_components** klaösürü oluşturur ve içine dosyaları indirir. Bower bu klasörü otomatik olarak seçer ve adlandırır, ancak konfigürasyon (.bowerrc) dosyası yolu ile bize yolu ve ismini değiştirme imkanı verir.   

**bower_components** klasörünü incelediğimizde yüklediğimiz paket ve bağımlılıkları otomatik yüklendiğini görürüz.

![enter image description here](http://fatihhayrioglu.com/images/bower-comp.gif)

İlk yüklemeden sonra yüklediğiniz dosyayı html dokümanınıza eklemeniz gerekir. Bower paketleri genelde javascript dosyaları içerir, bazen css ve resim dosyası içerir.

{% highlight html %}
<script src="bower_components/jquery/jquery.min.js"></script>
{% endhighlight %}

## Paket kaldırmak

Yüklediğimiz bazı paketleri kaldırmak isteyebiliriz. Bunun için yazmamız gerke komut:

{% highlight bash %}
bower uninstall bootstrap
{% endhighlight %}

Birden fazla paketi kaldırmak için araya boşluk vererek isimlerini yazmamız yeterlidir.

{% highlight bash %}
bower uninstall jquery modernizr sass-bootstrap
{% endhighlight %}

## bower.json dosyası

Eğer birden fazla paket kullanacaksanız bir **bower.json** dosyası ile bu paketleri yönetmek daha mantıklıdır. Zaten tek ktüphane için bower kullanmakta çok mantıklı gelmiyor bana. bower.json dosyasını kendimiz elle oluşturabildiğimiz gibi. 

{% highlight bash %}
bower init
{% endhighlight %}

Komutunu yazıp, sorulan soralara cevap verip bir bower.json dosyası elde edebiliriz. 

Örnek bir bower.json dosyası

{% highlight bash %}
{
  "name": "yeni-proje",
  "private": true,
  "dependencies": {
    "jquery": "~2.1.1"
    "swiper": "~3.0.8",
    "waypoints": "~3.1.1",
    "jcarousellite": "~1.9.3",
    "jquery.countdown": "~2.0.5"
  }
}
{% endhighlight %}

## Paketi güncellemek

Paketlerimizi güncellemek için aşağıdaki komutu yazamamız yeterlidir.

{% highlight bash %}
bower update
{% endhighlight %}

Tüm paketler güncellenebildiği gibi

{% highlight bash %}
bower update <paket_adi>
{% endhighlight %}

Komutu ile sadece belirli bir paket de güncellenebilir. 

## Yüklü paketleri listelemek

Mevcut paketleri ve güncelleme olup olmadığını görmek için

{% highlight bash %}
bower list
{% endhighlight %}

komutunu kullanırız. 

{% highlight bash %}
➜  yeni-proje  bower list
bower check-new     Checking for new versions of the project dependencies..
yeni-proje#0.0.1 /Users/fatih/yeni-proje
├─┬ bootstrap#3.2.0 (latest is 3.3.5)
│ └── jquery#2.1.4 (3.0.0-alpha1+compat available)
└─┬ jcarousellite#1.9.3
  └── jquery#2.1.4 (3.0.0-alpha1+compat available)
{% endhighlight %}

## Sonuç

Bu makalede twitter'ın geliştridiği bower paket yöneticisini tanıtmaya çalıştım. Bower'ın arama, yükleme, kaldırma, listeleme komutlarını anlatmaya çalıştım. Bunlar genel itibari ile yeterlidir bence. 

Sunucu taraflı kod yazarlarının alışık olduğu paket yönetim araçlarına biz arayüz geliştiricilerde böylelikle kavuşmuş oluyoruz. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://bower.io/](http://bower.io/)
 - [https://github.com/bower/bower](https://github.com/bower/bower)
 - [http://kodcu.com/2014/05/bower-nedir-nasil-kullanilir/](http://kodcu.com/2014/05/bower-nedir-nasil-kullanilir/)
 - [http://code.tutsplus.com/tutorials/meet-bower-a-package-manager-for-the-web--net-27774](http://code.tutsplus.com/tutorials/meet-bower-a-package-manager-for-the-web--net-27774)
 - [http://blog.teamtreehouse.com/getting-started-bower](http://blog.teamtreehouse.com/getting-started-bower)
 - [https://css-tricks.com/whats-great-bower/](https://css-tricks.com/whats-great-bower/)
 - [http://www.web-and-development.com/twitter-bower-browser-package-manager/](http://www.web-and-development.com/twitter-bower-browser-package-manager/)
 - [https://blog.openshift.com/day-1-bower-manage-your-client-side-dependencies/](https://blog.openshift.com/day-1-bower-manage-your-client-side-dependencies/)
 - [http://www.boxuk.com/blog/unboxing-bower/](http://www.boxuk.com/blog/unboxing-bower/)
 - [http://germanforblack.com/post/46734908388/i-built-a-plugin-for-sublime-text-that-integrates](http://germanforblack.com/post/46734908388/i-built-a-plugin-for-sublime-text-that-integrates)
 - [http://www.sitepoint.com/package-management-for-the-browser-with-bower/](http://www.sitepoint.com/package-management-for-the-browser-with-bower/)