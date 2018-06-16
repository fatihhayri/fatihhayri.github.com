---
layout: post
title: Nodejs ve npm
Date: 2015-07-01 13:18
Category: nodejs
tags: [nodejs npm package.json]
---

![enter image description here](https://fatihhayrioglu.com/images/nodejs-npm.png)
{: .resimler-sagda}

Arayüz geliştiricileri olarak yoğun bir şekilde javascript kullanıyoruz. Birçok javascript kütüphanesini kullanıyoruz, peki sunucu taraflı kodlama da javascript kullanılsa nasıl olur? Bu soruya cevap zaten "nodejs var" diyenlere aferin :D Peki ama "Nodejs sunucu taraflı javascript biz arayüz geliştiriyoruz ne işimiz olur?" demeyelim, okumaya devam.

Sonuçta kullandığımız bir dilin farklı bir yanı nodejs, farklı kabiliyetleri var. Tabi size derinlemesine öğrenin demiyeceğim tabiki daha önce bahsettiğim gibi her arayüz geliştiricisi etkileşimde olduğu bölümlerin kabiliyetlerini bilmeli, bu yapılan işin kalitesi ve hızı için önemlidir. Zaman bulursanız derinlemesine de öğrenmekte fayda var.

## Yükleme

İlk olarak bilgisayarımıza nodejs'i yükleyerek başlayalım. Windows ve Mac kullanıcıları için [nodejs.org](http://nodejs.org) sitesinde kurulum dosyası mevcut, linux kullanıcılar ise alışık oldukları yol ile komut satırından  **sudo apt-get update** ve sonra **sudo apt-get install node** kod ile bu işi halledebilirler.

"Nodejs; Google'ın geliştirdiği ve Chrome'da javascript derlemekte kullandığı C/C++ ile geliştirilmiş V8 motoru üzerinde çalışmaktadır. Nodejs,  olay tabanlı olarak sunucu üzerinde javascript çalıştırmayı sağlayan bir yapıdır.  I/O ve ağ işlemlerini bloklamadan(asenkron) olarak yaptığı için kaynak yönetimi gibi konularda diğer yazılım dillerine ve platformlarına göre daha farklı bir konumdadır ve bu özellik NodeJS'in temelini oluşturan bir yapıdır. Bu da NodeJS'in performans odaklı olmasını sağlar." - [nodejstr.com](http://nodejstr.com)

Nodejs'in yüklendiğini kontrol etmek için genelde sürüm kontrolü kodu kullanılır.

{% highlight bash %}
node -v
{% endhighlight %}

komutu ile nodejs'in yüklenip yüklenmediğini ve aynı zamanda sürümünü kontrol edebiliriz.

{% highlight bash %}
v0.12.0
{% endhighlight %}

Sonucu bize nodejs'in kurulduğunu ve kurulan sürümün 0.12.0 olduğunu gösterir.

## Paket Yönetimi (NPM)

Paket yönetimi açık kaynak kullanıcılarının yabancı olmadığı bir konu. Paket Yöneticisi; Bağımlılıkları takip ederek paket inşa etme, kurma, kaldırma, yükseltme vd. işlevleri yerine getirir. Nodejs'in paket yöneticisi NPM'dir. NPM üçüncü parti modülleri yüklemek için birebirdir. 

Paket sözcüğü biraz sunucu taraflı bir tanım gibi geliyor bana. Arayüz geliştiricileri için genelde npm eklenti yönetimi için kullanılıyor. grunt ve eklentilerinin eklenmesi, güncellenmesi ve silinmesi işlemlerini yoğun olarak npm ile yaparız.

Nodejs'in paket yönetimi dosyası proje içindeki **package.json** yapılandırma dosyası ile sağlar. Bu dosyayı kendimiz oluşturabildiğimiz gibi;

{% highlight bash %}
npm init
{% endhighlight %}

Komutu yardımıyla sorulan soralara cevap vererek de oluşturabiliriz. 

![enter image description here](https://fatihhayrioglu.com/images/npm_init.gif)

Sırası ile bize; 

 - Projenin adı -name- (yeni-proje):
 - Projenin sürümü - version - (1.0.0):
 - Projenin Tanımı - description - :
 - Başlama dosyası - entry point - (index.js):
 - Test Komutu - test command - :
 - Git deposu - git repository - :
 - Anahta kelimeler - keywords : 
 - Yazar - author - : 
 - Lisansı - license (ISC) - :

sorularını soruyor. Kendi cevaplarımızı yazarak package.json dosyamızı oluştururuz. Bu yöntemi izlemek zorunda değiliz kendimizde bu dosyayı oluşturabiliriz. Standart bir json dosyası.

![enter image description here](https://fatihhayrioglu.com/images/npm_init_sonuc.gif)

>  İzin sorunları yaşadığınız durumlarda kodlarınızın başına **sudo** komutunu eklemeyi unutmayın. (Mac ve Linux kullanıcıları için)

### Modül yüklemek

Npm ile paket yüklemek basit bir işlemdir. 

{% highlight bash %}
npm install -g grunt-cli
{% endhighlight %}

Şeklinde grunt'ı projemize ekleyebiliriz. Burada şöyle bir ayrıntı var, eğer yüklenen modülleri aynı zamanda package.json'a da eklemek istiyorsak;

{% highlight bash %}
npm install -g grunt --save-dev
{% endhighlight %}

Bu komutu yazdıktan sonra node'da kayıtlı grunt paketini sunucudan indirecektir. Proje dosyalarının olduğu klasöre **node_modules** klasörünün eklendiğini göreceksiniz. package.json dosyasını açtığımızda 

{% highlight bash %}
"devDependencies": {
  "grunt": "^0.4.5"
}
{% endhighlight %}

Satırının eklendiğini göreceksiniz. 

### Yüklü Modül Listesi

Projede yüklü modüllerin listesi almak için

{% highlight bash %}
npm list
{% endhighlight %}

Komutu yeterlidir. 

{% highlight bash %}
yeni-proje@1.0.0 /Users/fatih/Documents/yeni-proje
└─┬ grunt@0.4.5
  ├── async@0.1.22
  ├── coffee-script@1.3.3
  .....
{% endhighlight %}

Şeklinde kurulu olan modülü ve o modülün gereksinimleri alt kırılım şeklinde listelenir. Alt kırılımların listelenmesini istemezsek;

{% highlight bash %}
npm list --depth=0
{% endhighlight %}

Kodunu yazmalıyız.

### Yüklü Modülü Kaldırmak

Bir modülü kaldırmak için 

{% highlight bash %}
npm uninstall grunt --save-dev
{% endhighlight %}

Komutunu yazmalıyız. Sondaki --save-dev parametresi yine package.json'ın otomatik güncellenmesi içinidir. Bu komut sonrasında package.json'dan grunt satırı silinecektir.

### Modülü Güncellemek

Projemizde ekli olan modüllerin durumlarını öğrenmek için;

{% highlight bash %}
npm outdated
{% endhighlight %}

Komutu ile güncellemesi gelen modüllerin adı, mevcut sürümü, istenen sürümü, son sürümü ve yer bilgilerini verir.

![enter image description here](https://fatihhayrioglu.com/images/npm_outdated.gif)

Güncellemek istediğimiz modülü

{% highlight bash %}
npm update grunt-contrib-cssmin --save-dev
{% endhighlight %}

Kodu ile modülü güncelleyebiliriz.

Daha önce oluşturulmuş projelerde **package.json** dosyası görürseniz, yapacağınız ilk iş 

{% highlight bash %}
npm install
{% endhighlight %}

yapmak olmalı. Böylece projedeki gereksinimleri tek satır kod ile yüklemiş oluruz.

Kalın sağlıcakla.

## Kaynaklar

 - [http://www.jskoleji.com/2013/09/nodejs-ilk-uygulamamizi-yaziyoruz.html](http://www.jskoleji.com/2013/09/nodejs-ilk-uygulamamizi-yaziyoruz.html)
 - [http://speckyboy.com/2013/11/13/node-js-for-front-end-developers/](http://speckyboy.com/2013/11/13/node-js-for-front-end-developers/)
 - [http://kod5.org/node-js-npm-kavramlari-uzerine/](http://kod5.org/node-js-npm-kavramlari-uzerine/)
 - http://www.nodejstr.com/search/label/node%20js%20nedir
 - [http://www.sitepoint.com/beginners-guide-node-package-manager/](http://www.sitepoint.com/beginners-guide-node-package-manager/)
 - [http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo)