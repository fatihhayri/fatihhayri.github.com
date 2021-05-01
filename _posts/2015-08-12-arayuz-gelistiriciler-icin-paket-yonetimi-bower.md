---
layout: post
title: Arayüz Geliştiriciler İçin Paket Yönetimi - Bower
Date: 2015-08-12 13:18
categories: [Web Araçları]
tags: [bower paket-yönetimi twitter bower.json]
---

Nodejs ve npm'i anlattıktan sonra Bower'ı anlatmamak olmaz. Bower için npm'in arayüz geliştiriciler için olanı demek yanlış olmaz herhalde. Javascript'in sunucu tarafına geçmesi ile arayüz geliştiriciler daha çok otomatize olmaya başladı. 

Birçok projemizde javascript ve css kütüphaneleri ve eklentileri kullanıyoruz. Kullandığımız bu kütüphane ve eklentileri sitemize eklemek ve güncellemek bizim için yük olmaya başladı. Burada size bir anımı anlatayım. sahibinden.com'da çalışırken jquery sürümünü yükseltmek bir dert olmaya başlamıştı. Güncellemeyi kimse göze alamıyordu. Çünkü her güncellemede bazı sorunlar çıkıyordu. En son bir iş olarak açıldı ve [Sercan](http://sercaneraslan.com/) yaptı. Uzun ve dertli bir süreçti. Bu tip sorunlarla karşılaşmış bizim gibi arayüz geliştiriciler için **bower** velinimettir. 

Gelelim bower'ı kullanmaya. Çeşitli editörlerden de bu işi yapabiliyoruz ama ben burada komut satırından çalıştırmayı göstereceğim.

## Bower'ı yüklemek

Bower'ı yüklemek için npm'in bilgisayarınızda yüklü olması gerekmektedir. Eğer bilgisayarınızda npm yüklü değilse. Bilgi almak için [Nodejs ve npm](/nodejs-npm/) yazımızı okumanızı tavsiye ederim.

Sistemde npm yüklü ise komut satırına aşağıdaki kodu yazalım.

```bash
npm install -g bower
```

npm yazısından bildiğimiz gibi -g parametresi kurulacak kod blokunun genele kurulmasını sağlıyor. Kurduktan sonra bir sonraki adıma geçelim.

# Paket bulmak

Npm'den bildiğimiz gibi kütüphane ve eklentiler paket olarak adlandırılıyor. Eklemek istediğimiz paketleri aramanın iki yolu var. [Bower'ın arama](http://bower.io/search/) sayfasını kullanmak ya da komut satırından aşağıdaki kodu yazarak aramak.

```bash
bower search <sorgu>
```

Bir örnek yapalım. 

```bash
bower search bootstrap
```

Araması sonucundan bootstrap ile ilgili kütüphaneler listelenir. 

![enter image description here](https://fatihhayrioglu.com/images/bower-search.png)

Her bir satır bir paketi tanımlar. İlk mor renkli kısım ismi, ikinci beyaz kısımda paketin indireceği git adresini gösterir.

## Paket yüklemek

Projemize eklemek istediğimiz paketi yüklemek için komut satırına aşağıdaki kodu yazarız.

```bash
bower install <paket_adi>
```

**install** komutundan sonra **paket_adi** ile yüklenebildiği gibi, github kısayolu, Git enpoint ve bir url'den de yüklenebilmektedir. 

```bash
# kayıtlı paket adı
$ bower install jquery
# GitHub kısayolu
$ bower install desandro/masonry
# Git endpoint
$ bower install git://github.com/user/package.git
# Herhangi bir URL
$ bower install http://example.com/script.js
```

Normalde yüklemek istediğimiz paketi yazdığımızda paketin son sürümü yüklenir. Ayrıca istediğimiz sürümü indirmek için araya diyez işareti (#) koymamız yeterli.

```bash
bower install bootstrap#3.2.0
```

![enter image description here](https://fatihhayrioglu.com/images/bower-install.gif)

Paket yüklendiğinde proje klasöründe **bower_components** klasörü oluşturur ve içine dosyaları indirir. Bower bu klasörü otomatik olarak seçer ve adlandırır, ancak konfigürasyon (.bowerrc) dosyası yolu ile bize yolu ve ismini değiştirme imkanı verir.   

**bower_components** klasörünü incelediğimizde yüklediğimiz paket ve bağımlılıkları otomatik yüklendiğini görürüz.

![enter image description here](https://fatihhayrioglu.com/images/bower-comp.gif)

İlk yüklemeden sonra yüklediğiniz dosyayı html dokümanınıza eklemeniz gerekir. Bower paketleri genelde javascript dosyaları içerir, bazen css ve resim dosyası içerir.

```html
<script src="bower_components/jquery/jquery.min.js"></script>
```

## Paket kaldırmak

Yüklediğimiz bazı paketleri kaldırmak isteyebiliriz. Bunun için yazmamız gerke komut:

```bash
bower uninstall bootstrap
```

Birden fazla paketi kaldırmak için araya boşluk vererek isimlerini yazmamız yeterlidir.

```bash
bower uninstall jquery modernizr sass-bootstrap
```

## bower.json dosyası

Eğer birden fazla paket kullanacaksanız bir **bower.json** dosyası ile bu paketleri yönetmek daha mantıklıdır. Zaten tek kütüphane için bower kullanmakta çok mantıklı gelmiyor bana. bower.json dosyasını kendimiz elle oluşturabildiğimiz gibi 

```bash
bower init
```

komutunu yazıp, sorulan soralara cevap verip bir bower.json dosyası elde edebiliriz. 

Örnek bir bower.json dosyası

```bash
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
```

Yeni bir paket ekledeğimizde **bower.json** dosyasını güncellemek için **--save** parametresini eklememiz gerekir.

```bash
bower install jquery --save
```

Bu kullanımı alışkanlık haline getirmekte fayda var. Her paket indirdiğimizde bower-json dosyasını ayrıca açıp güncellemek çok mantıklı değil.

## Paketi güncellemek

Paketlerimizi güncellemek için aşağıdaki komutu yazmamız yeterlidir.

```bash
bower update
```

Tüm paketler güncellenebildiği gibi

```bash
bower update <paket_adi>
```

Komutu ile sadece belirli bir paket de güncellenebilir. 

## Yüklü paketleri listelemek

Mevcut paketleri ve güncelleme olup olmadığını görmek için

```bash
bower list
```

komutunu kullanırız. 

```bash
➜  yeni-proje  bower list
bower check-new     Checking for new versions of the project dependencies..
yeni-proje#0.0.1 /Users/fatih/yeni-proje
├─┬ bootstrap#3.2.0 (latest is 3.3.5)
│ └── jquery#2.1.4 (3.0.0-alpha1+compat available)
└─┬ jcarousellite#1.9.3
  └── jquery#2.1.4 (3.0.0-alpha1+compat available)
```

## Sonuç

Bu makalede twitter'ın geliştridiği bower paket yöneticisini tanıtmaya çalıştım. Bower'ın arama, yükleme, kaldırma, listeleme komutlarını anlatmaya çalıştım. Bunlar genel itibari ile yeterlidir bence. 

Sunucu taraflı kod yazarlarının alışık olduğu paket yönetim araçlarına biz arayüz geliştiricilerde böylelikle kavuşmuş oluyoruz. 

Kalın sağlıcakla.

## Kaynaklar

 - [http://bower.io/](http://bower.io/)
 - [https://github.com/bower/bower](https://github.com/bower/bower)
 - http://kodcu.com/2014/05/bower-nedir-nasil-kullanilir/
 - [http://code.tutsplus.com/tutorials/meet-bower-a-package-manager-for-the-web--net-27774](http://code.tutsplus.com/tutorials/meet-bower-a-package-manager-for-the-web--net-27774)
 - [http://blog.teamtreehouse.com/getting-started-bower](http://blog.teamtreehouse.com/getting-started-bower)
 - [https://css-tricks.com/whats-great-bower/](https://css-tricks.com/whats-great-bower/)
 - http://www.web-and-development.com/twitter-bower-browser-package-manager/
 - [https://blog.openshift.com/day-1-bower-manage-your-client-side-dependencies/](https://blog.openshift.com/day-1-bower-manage-your-client-side-dependencies/)
 - [http://www.boxuk.com/blog/unboxing-bower/](http://www.boxuk.com/blog/unboxing-bower/)
 - germanforblack.com/post/46734908388/i-built-a-plugin-for-sublime-text-that-integrates
 - [http://www.sitepoint.com/package-management-for-the-browser-with-bower/](http://www.sitepoint.com/package-management-for-the-browser-with-bower/)