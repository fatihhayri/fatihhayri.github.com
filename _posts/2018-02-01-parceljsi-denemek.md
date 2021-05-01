---
layout: post
title: Parceljs'i denemek
Date: 2018-02-01 14:43
categories: [Web Araçları]
tags: [webpack, paketleme, parcel, parceljs, browserify, rollupjs]
image:
  feature: parceljs.png
---

Arayüz geliştiricilerin dünyası [Nodejs](https://nodejs.org/) sonrasında olumlu olarak değişti. Değişmeye de devam ediyor. Hızlı gelişen bu dünyada en büyük sorunlardan bir tanesi çok fazla araç çıkıyor ve bu araçları öğrenmek zaman alıyor. 

Bu gelişmelerin başında Grunt, Gulp gibi işleri otomatize eden yapılar ve sonrasında paketleme araçları olarak geçen [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/) ve [Rollup](https://github.com/rollup/rollup) gibi yapılar. Bu araçlar çok güzel ve bizi bir çok dertten kurtarıyor. Ancak ilk pargrafta bahsettiğim gibi bazı geliştiriciler bu nasıl bir iş her hafta yeni bir şey çıkıyor takip edemiyoruz diye yakınıyor. 

Tam bunları söylerken size yeni bir geliştirme aracını tanıtmak istiyorum. Parceljs. Parcel bizlere yapılandırma dosyası olmadan paketleme yapma imkanı sağlayan bir araç. Webpack çok güzel ve kullanışlı ancak yapılandırma dosyasını oluşturmak çok zor. Ayrıca webpack'in öğrenme eğrisi yüksek. (Benim gördüğüm kadarıyla.)

Parcel tam bu noktada ortaya çıkıyor ve diyorki yapılandırma dosyası oluşturmadan da bu işleri yapabiliriz. Bu yaklaşım insanların hoşuna gitti, şu an github'da 18.300 yıldızı var. Kısa sürede bu kadar beğeni toplaması bu kolaylığından kaynaklanıyor. Webpack bu gelişmelere kayıtsız kalmadı ve Webpack 4.0 sürümünde yapılandırma yapmadan bir çözüm üreteceğini belirtti.

Parcel aynı zamanda diğerlerine göre daha hızlı bir araç olduğunu yayınladığı hız testleriyle idda etti. 

|    Paketleyici    |    Zaman   |
|---------------|-----------|
|browserify|22.98s|
|webpack|20.71s|
|parcel|9.98s|
|parcel - with cache|2.64s|

Parcel'in temel özellikleri

 - Hızlı bir derleme
 - Tüm paket ihtiyaçları için hızlı ve kolay çözüm
 - Otomatik dönüştürme. Babel, PostCSS ve PostHTML
 - Sıfır yapılandırma ile kod bloklarına ayırma imkanı
 - Modüle özel güncelleme (Hot module replacement)
 - Kolay hata ayıklama imkanı

Bu vaatlerin gerçekliğini uygulama yaptıkça göreceğiz. 

Bu makalede basit bir sitede parcel kullanımı göreceğiz. 

Hadi başlayalım.

## Kurulum

Parcel'i yarn ve npm ile kurmak için:

Yarn ile:

```bash
yarn global add parcel-bundler
```

Npm için:

```bash
npm install -g parcel-bundler
```
  
kurulum bititkten sonra yeni bir proje klasörü açalım.

```bash
mkdir parcel-ikinci-deneme
```
  
niye ikinci dediğimi aşağıda açıklayacağım.

```bash
cd parcel-ikinci-deneme
```
  
proje klasörüne girelim.

**package.json** dosyasını oluşturmak için:

yarn için

```bash
yarn init -y
```
  
npm için

```bash
npm init -y
```
  
çalıştıralım. Gerekli bilgileri verdikten sonra **package.json** dosyamız hazır olacaktır. Detaylı bilgiye [buradan](https://fatihhayrioglu.com/nodejs-npm/) ulaşabilirsiniz.

Sıra geldi basit bir site yapısı oluşturmaya. Basit olduğu için bir html ve bir js dosyası oluşturup başlayalım.

ister terminalden 

```bash
touch index.html && touch index.js
```
  
ile oluşturun isterseniz editörünüzden oluşturun. Dosyaları oluşturduktan sonra basit bir html içeriği oluşturup, dosyamıza js dosyasını eklyelim.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Parcel İkinci Deneme</title>
</head>
<body>
    <script src="./index.js"></script>
</body>
</html>
```

javascript dosyamıza da 

```javascript
console.log('Şampiyon Trabzonspor');
```
  
yazalım. Buraya kadar normal bir süreç idi. Sıra geldi Parcel'i çalıştırmaya. **package.json** dosyamıza parcel'i çalıştırmak için aşağıdaki kodu eklyelim.

```javascript
...
"scripts": {
    "start": "parcel index.html"
},
.....
```
    
sonra terminalden 

```bash
npm run start
```
  
deyince hata verdi :(
 
İlk denememde hata aldım biraz araştırdığımda cevabını da bulamadım. İlk denemem için fazla zamanım olmadığı için öylece bıraktım.
 
Sonra belirli bir süre sonra ikinci bir deneme yapayım dedim. Aynı yoları izledim. Yine aynı hatayı aldım biraz araştırınca hatanın Nodejs sürümünden kaynakladığını öğrendim. Hatayı şimdi net hatırlamıyorum ama şu idi sanki

```bash
Can't find variable: require
```

Ondan dolayı proje ismini **parcel-ikinci-deneme** yaptım. :)

Çözüm için nvm kurmam gerekti. Sonra nvm ile ilgili bir makale de yazdım. [NVM Nedir? Nasıl Kullanılır?](https://fatihhayrioglu.com/nvm-nedir-nasil-kullanilir/) İşin ilginç olan tarafı Parcel dokümantasyonlarında node sürümüyle ilgili bir bilgilendirmenin olmamasıydı. Ben node'un 8.9.3 sürümüne geçince hata düzeldi.

Sonra tekrar 

```bash
npm run start
```

deyince çalıştı ve aşağıdaki gibi bir görüntü verdi.

![parcel ilk çalışma](https://fatihhayrioglu.com/images/parcel-run.png)

Tarayıcıda **http://localhost:1234/** açınca tarayıcının konsolunda **'Şampiyon Trabzonspor'** yazısını gördüm. Sevindim :)

![parceljs ilk deneme chrome sonuç](https://fatihhayrioglu.com/images/parcel-browser.png)

Parcel bizim için bir yerel sunucu çalıştırdı. Ayrıca projede otomatik **dist** klasörü oluşturdu. İçinde iki adet dosya var.

![parcel dist](https://fatihhayrioglu.com/images/pacel-dist.png)

Evet parcel'i çalıştırdık ama çok da birşey yapmadık. Biraz iş ekleyelim.

## Projeye Sass ekleyelim

Pacel'i çalıştırmaya başladık. Şimdi ona bazı işler ekleyerek çalışmasını görelim. İlk olarak CSS önderleyicilerden biri olan Sass ekleyelim. 

Sass eklemek için önce projeye node-sass paketini eklemeliyiz. Daha önce genel olarak kurdu iseniz bu adımı geçebilirisiniz. Kurmayanlar için

```bash
npm install node-sass
```

veya yarn için

```bash
yarn add node-sass
```

paketi ekleyelim. Bir tane sass dosyası ekleyelim. **style.sass**

```sass
body
  margin: 0
  padding: 0

ul
  list-style: none
  display: flex

  li
    flex: 1 0 auto

    a
      text-decoration: none
```

Bu sass dosyasını **index.js**'e ekleyelim. Parcel'in dosyanızı derlemesi çin **index.js**'e eklemeniz gerektiğini unutmayın.

**index.js**

```javascript
import './assets/sass/style.sass';
```

Tekrar parcel'i çalıştıralım.

```bash
npm run start
```

Parcel kodumuzu derleyip aşağıdaki gib bir sonuç verecektir. Ayrıca **dist** kalsörüne de **pacell.css** dosyasını ekleyecektir.

![parceljs sass eklemek](https://fatihhayrioglu.com/images/parcel-sonuc1.gif)

## ES6 import kullanımı

Parcel ES6 **import** ve CommonJs **require** kullanımlarını destekliyor. Biz burada ES6 import kullanarak sayfamıza dışardan bir js dosyası ekleyelim.

**veri.js**

```javascript
export const detay = {
     adSoyad: "Fatih Hayrioğlu",
     sirket: "zingat.com",
     gorev: "Arayüz Geliştirici"
}
```

Bu dosyayı index.js içinde çekip html içine yazalım.

**index.js**

```javascript
import './assets/sass/style.sass';
import { detay } from './veri';

let bilgi = `Benim adım ${detay.adSoyad} ${detay.sirket} şirketinde ${detay.gorev} görevinde çalışıyorum.`;

document.getElementById('icerik').innerHTML = bilgi;
```

sonuç aşağıdaki gibi görünecektir.

![parceljs es6 import denemesi sonucu](https://fatihhayrioglu.com/images/parcel-sonuc-2.gif)

## Projeyi yayına alma

Projelerimiz yayına almak için **package.json** dosyasına bir satır daha eklemek gerekiyor.
```bash
"build": "parcel build index.js"
```

bu kodu çalıştırdığımızda parcel bize **dist** klasörü içinde yayına çıkacak bir dosyaları hazırlar. 

```bash
parcel build index.js -d yayin/ciktisi
```

kodu ile de **dist**'ten farklı bir klasöre de çıktı alabiliriz.

## Sonuç

Bu denemeden sonra şunu söyliyebilirim ki Parcel ufak ve orta çaplı projelerde çok güzel iş görür. Ancak büyük bir projede nasıl olur bilemedim. Benim tahminim büyük projeler için biraz erken. Parcel çok hızlı bir şekilde gelişiyor. Birkaç gün önce 1.5 sürümü çıktı. Yakın bir gelecekte tüm paketleme ihtiyaçlarımızı tek başına karşılayan bir çözüm olabilir. 

Hızlı gelişen araçların takibi zor. Ancak Parcel gibi yeni araçlar sayesinde zamanla bu işlerin basitleşeceğini düşünüyorum. 

Makalenin başında Parcel'in temel özelliklerini belirttikten sonra bunlar vaatler gerçekliğini uygulama yaptıkça göreceğiz demiştim. İlk uygulama sonunda vaatleri tek tek incelersek:

 - **Hızlı bir derleme** basit bir projede sonuçlar hızlı ama büyük projede test etmek gerek.
 - **Tüm paket ihtiyaçları için hızlı ve kolay çözüm** Bu proje için evet ama büyük projelerde durum ne olur bakacağız.
 - **Otomatik dönüştürme. Babel, PostCSS ve PostHTML** Bu projede kullanmadık. 
 - **Sıfır yapılandırma ile kod bloklarına ayırma imkanı** Bu özellik süper.
 - **Modüle özel güncelleme (Hot module replacement)** Güzel çalışıyor. Proje küçük olduğu için hızlı ancak proje büyüyünce ne olur bakmak lazım.
 - **Kolay hata ayıklama imkanı.** Webpack'e göre daha açıklayıcı hataları var.


Kaynak kodlarına [https://github.com/fatihhayri/parcel-ikinci-deneme](https://github.com/fatihhayri/parcel-ikinci-deneme) buradan erişebilirsiniz.

Kalın sağlıcakla.

## Kaynaklar

 - [https://parceljs.org/](https://parceljs.org/)
 - [https://scotch.io/tutorials/a-zero-configuration-module-bundler-meet-parcel?ref=daily](https://scotch.io/tutorials/a-zero-configuration-module-bundler-meet-parcel?ref=daily)
 - [https://github.com/parcel-bundler/parcel/issues/105](https://github.com/parcel-bundler/parcel/issues/105)
 - [https://github.com/parcel-bundler/website/pull/38](https://github.com/parcel-bundler/website/pull/38)
 - [https://hackernoon.com/code-splitting-with-parcel-web-app-bundler-fe06cc3a20da](https://hackernoon.com/code-splitting-with-parcel-web-app-bundler-fe06cc3a20da)
 - [https://medium.freecodecamp.org/all-you-need-to-know-about-parcel-dbe151b70082](https://medium.freecodecamp.org/all-you-need-to-know-about-parcel-dbe151b70082)
 - [https://github.com/parcel-bundler/parcel/issues/105](https://github.com/parcel-bundler/parcel/issues/105)