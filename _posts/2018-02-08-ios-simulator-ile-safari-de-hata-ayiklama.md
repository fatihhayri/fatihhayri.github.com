---
layout: post
title: iOS Simülatör ile Mobil Safari'de Hata Ayıklama
Date: 2018-02-05 16:43
categories: [Web Araçları]
tags: [web developer, safari, macos, simulator, xcode]
---

Baştan belirtmeliyim ki bu anlatacaklarım sadece MacOS kullancıları için geçerlidir. Maalesef Windows için böyle bir çözüm yok. En azından benim bildiğim yok. Bildiğiniz Windows çözümü varsa yazının altındaki yorum satırlarına yazarark hem bana hemde diğer okuyuclara yardım etmiş olursunuz.

Mobil dünyanın gelişmesi ile siteler için gelen hataların bir çoğu artık mobilden geliyor. Bunların arasında Safari üzerinden gelen hataların oranı ciddi derecede çok. Peki sitemizdeki hataları mobil şartlarda nasıl yakalarız ve düzeltiriz. Bunun iki yolu var. İlki bir iPhone telefon bulup bilgisayarınıza bağlayarak yapmak. İkinci yöntem Mac OS kullananlar için Xcode - Simulator yardımyla yapmak. Bu makale de size Simulator yardımı ile nasıl hata ayıklarız bundan bahsedeceğim. 4 adımda halledeceğiz bu işi.

## 1. Adım Xcode kurulumu

Mac Os kullanıyorsanız Xcode başta kurulu gelmiyor. İlk olarak Xcode kurmanız gerekiyor. Ücretsiz bir program olan Xcode'u ister App Store'dan isterseniz internetten kurabilirsiniz.

![xcode install](https://fatihhayrioglu.com/images/xcode-install.png)

Bende yüklü olduğu için buton metni **open** şeklinde ama siz ilk yüklüyorsanız **install** olması lazım.

[https://developer.apple.com/xcode/](https://developer.apple.com/xcode/)

## 2. Adım Safari Ayarları

Masaüstü Safari tarayıcısında geliştirici menüsü kapalı geliyor. Açmak için **Safari > Preferences** menüsüne tıklıyoruz. Gelen pencerede **Advanced** sekmesindeki **Show Develop menu in menu bar** işaret kutusunu işaretli hale getiriyoruz. 

![Safari Advanced](https://fatihhayrioglu.com/images/safari-dev-tools.gif)

Artık üst menüde **Develop** geldi. Masaüsütü testlerimizi yapmak içinde bu ayarı yapmak gerekiyor.

## 3. Adım Web Inspector açmak

İlk olarak Simulator uygulamasını açıyoruz.

Sonra simülatörde **Web Inspector** açmak için **Settings > Safari > Advanced** ve **Web Inspector** aktifleştiriyoruz.

![web inspector](https://fatihhayrioglu.com/images/iphone-web-inspector.gif)

## 4. Adım Hata ayıklamak

Ayarlar bittikten sonra iOS simülatöründe Safari adres çubuğuna inceleyeceğimiz adresi yazıyoruz. Ben **fatihhayrioglu.com** yazdım.

![Safari inpect](https://fatihhayrioglu.com/images/safari-inspect-1.png)

Sonra bilgisayarımızdaki Safari tarayıcısını açıp. Üst menüden **Develop > Simulator > fatihhayrioglu.com** şeklinde görünecektir. Tıklayarak geliştirici aracını açıyoruz.

![Safari inpect](https://fatihhayrioglu.com/images/safari-inspect-2.png)

Safari Developer Tool'u açılacaktır. Artık kodunuzu incelemeye başlayabilirsiniz. Tüm geliştirme araçları nimetlerinden yararlanabilirsiniz. Elemanları denetleyebilir, js ile kesme noktaları koyup javascript hatalarını ayıklayabilir, ağ sekmesinden site kaynaklarının yüklenme zamanları ve sırasını görebilirsiniz. Geliştirme araçlarındaki diğer işlerini de aynı şekilde yapabiliyoruz.

Xcode Simulator'ün üst menüsünden bir çok ayar yapabiliyoruz. Kullandığınız cihazı değiştirebilirsiniz, ana ekrana geçi yapabilirsiniz, yataya çevirebilirsiniz ve diğer işleri de ypabilirsiniz.

Her şey güzel ancak bazen Masaüstü Safari'de Simulator inceleme çıkmıyor. Geçenlerde twitter'da bahsetmiştim.

<blockquote class="twitter-tweet" data-lang="tr"><p lang="tr" dir="ltr">MacOs&#39;ta Xcode Simulator&#39;unu Safari&#39;den Debug edebiliyordum eskiden, şimdilerde bunu göstermiyor. Bu sorun ile karşılaşıp çözen var mı? <a href="https://twitter.com/hashtag/xcode?src=hash&amp;ref_src=twsrc%5Etfw">#xcode</a> <a href="https://twitter.com/hashtag/safari?src=hash&amp;ref_src=twsrc%5Etfw">#safari</a> <a href="https://t.co/XSRP6ZZQr7">pic.twitter.com/XSRP6ZZQr7</a></p>&mdash; Fatih Hayrioğlu (@fatihhayri) <a href="https://twitter.com/fatihhayri/status/953261635703013376?ref_src=twsrc%5Etfw">16 Ocak 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Bu twitimden sonra sağolasun [Cenk](https://twitter.com/cenkingunlugu), [Oğuzcan](https://twitter.com/ogzcn) ve [Tuna](https://twitter.com/sosyaltuna)'nın yardımlarıyla sorunu çözdük. Apple işletim sisteminiz güncel değilse bu tip sorunlar çıkarabiliyor. İşletim sistemimi güncelleyince çözüldü.

iPhone veya iPad cihazınızı bilgisayarınıza bağlayarakta benzer işleri yapabilirsiniz. Tek fark 1. adımı es geçmek yani Xcode - Simulator kurulumuna gerek yok. :)

Kalın sağlıcakla.

## Kaynaklar

 - [http://adaptivejs.mobify.com/v2.0/docs/debug-on-ios-devices-and-the-ios-simulator/](http://adaptivejs.mobify.com/v2.0/docs/debug-on-ios-devices-and-the-ios-simulator/)
 - [https://software.intel.com/en-us/xdk/docs/using-web-inspector-remote-to-debug-ios-cordova-apps](https://software.intel.com/en-us/xdk/docs/using-web-inspector-remote-to-debug-ios-cordova-apps)
 - [http://geeklearning.io/apache-cordova-and-remote-debugging-on-ios/](http://geeklearning.io/apache-cordova-and-remote-debugging-on-ios/)
 - [https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/](https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/)