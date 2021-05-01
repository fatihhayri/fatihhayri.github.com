---
layout: post
title: Kaynak kod haritaları (Source Map) + Chrome Devtools ile Sass kodlarına hakim olmak
Date: 2015-09-15 12:03
categories: [CSS, SASS]
tags: [sass css-önişlemcileri kaynak-kod-haritaları chrome devtools]
---

Sass'ın ve diğer CSS önişlemcilerinin başlangıçtaki sorunlarından biri de Chrome Developer Tools ve Firebug gibi araçlar ile öğeyi incele dediğimizde kaynak dosyadaki yerini değilde üretilen .css dosyasındaki yerini göstermesidir. Buda bizim için büyük bir sorun.

Hayatımıza ilk giren Firebug'ın en büyük getirisiydi tarayıcı üzerinden düzenleme ve hata ayıklama yapabilmek. Şimdi Sass kullanacağız diye bundan vaz mı geçeceğiz? Tabiki hayır. Çözüm için ilk başta css içinde kullanılan tanımın hangi sass dosyasında ve satırında geçtiğini gösteren yorum satırları çözümü sunuldu.

```bash
sass --line-numbers deneme.sass:deneme.css
```

**--line-numbers** parametresi yardımı ile 

```css
/* line 1, ../sass/deneme.sass */
.deneme {
```

şeklinde ilgili sass dosyasını ve ilgili satırı gösteren yorum satırıyla çözüm üretebiliyoruz.

Yukarıdaki çözüm her ne kadar sorunumuzu azaltsa da tam bir çözüm oluşturmuyordu. Asıl çözümü Kaynak kod haritaları(Source Map) sağladı.

Kaynak kod haritaları (Source Map) Sass dosyasının derlenmesi ile oluşan CSS dosyası arasındaki haritalama işini gören **.map** uzantılı json dosyasıdır. Kaynak kod haritası içeriğinde, Sass kaynağının her satırına karşılık gelen CSS satırı bilgisi yer alır.

```json
{
  "version": 3,
  "mappings": ";AAAA,OAAO;EACH,MAAM,...",
  "sources": ["../sass/deneme.sass","../sass/deneme_2.sass","../sass/deneme_3.sass"],
  "names": [],
  "file": "deneme.css"
}
```

şeklinde bir içeriği vardır. Asıl işi gören **mappings** kısmıdır. [Base64 VLQs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-base64vlq) ile kodlanmış bilgi içerir. Detayı bizim için önemli değil. Bizim için önemli olan işlevi.

> **Not:** Sass 3.3+ itibaren **--sourcemap** parametresini kullanmadan source map dosyasını üretiyor.

## Kaynak kod haritalarını nasıl kullanacağız?

İşin bu kısmından itibaren tarayıcı potaya giriyor. Bildiğim kadarı ile Chrome, Firefox, Safari ve Internet Explorer 11'in desteği var. 

Ben ilk baştan beri kaynak kod haritası desteğini sunan Chrome ile nasıl kullanacağımız göstereceğim.

**1 - Chrome DevTools ayarları**
Chrome DevTools'da Settings - General sekmesinde  “**Enable CSS source maps**” zaten seçili ( eskiden seçili gelmiyordu.) geliyor. “**Auto-reload generated CSS**” işretlememiz yeterli. Aşağıdaki hareketli gif'teki gibi.

![enter image description here](https://fatihhayrioglu.com/images/devtools-source-map.gif)

**2 - Sass'ı --watch ile çalıştırma**
[İlk yazdığım Sass yazısında](https://fatihhayrioglu.com/sass-ile-dinamik-css-yazmak/) bahsettiğim komut satırından Sass'ı çalıştırma kısmındaki gibi.

```bash
sass --watch sass/deneme.sass:css/deneme.css
```

çalıştıralım.

> Genelde projelerimizde grunt / gulp gibi araçları kullanıyoruz. Bu araçlarda genelde kullanılan sass eklentilerinin **sourcemap** parametreleri bulunuyor. Bu parametreyi aktifleştirince bize **sourcemap** üretiyor.        

**3 - Chrome DevTools  çalışma alanı (workspace) oluşturalım**
Chrome'un güzel özelliklerinden birisi çalışma alanı oluşturmak. Yakında editörlerin yerini alırsa şaşırmayalım. :)

DevTools'da Settings - Workspace sekmesinden **Folders** kısmından **Add folder...** tıklayarak proje dosyalarını seçelim. Chrome bizden ilgili klasör için yetki isteyecektir, izin verelim. 

![enter image description here](https://fatihhayrioglu.com/images/devtools-calisma-alani.gif)

**4 - Son adım**
Son adım olarak haritalanacak kaynak kod dosyasını seçmemiz gerekiyor. Çalışma alanımızdan **deneme.sass** dosyasına sağ tıklayıp çıkan menüden “**Map to network resource.**” seçeriz. Açılan menüden kendi dosyamızı seçeriz. Bundan sonra bir popup çıkıp yenileme istediğini bize bildirir. Evet deyip işi bitirelim.

![enter image description here](https://fatihhayrioglu.com/images/devtools-map.gif)

## Şimdi hareket zamanı

Tüm bu işleri yaptıktan sonra herhangi bir tanımı tıklayarak kaynak koduna gidip değişiklik yapınca anında sayfamızı yansır. Daha da güzeli yaptığımız değişiklik lokaldeki dosyamızda da aynı aynı anda değişecektir. 

Mükemmel bir şey. 

![enter image description here](https://fatihhayrioglu.com/images/devtools-map-end.gif)

## Sonuç 

Her çıkan yenilik bizim daha hızlı olmamızı sağlıyor. Çalışma ortamımızı ne kadar geliştirirsek o kadar daha hızlı ve iyi işler çıkarırız. Devamlı çalışma ortamamızı yenilemekte fayda var.

Bu arada kaynak kod haritalaması sadece Sass için değil tüm ara derleyici gerektiren yapılar (CoffeeScript, TypeScript, Less, Stylus) için geçerlidir.

Kalın sağlıcakla.

## Kaynaklar

 - [http://www.sitepoint.com/using-source-maps-debug-sass-chrome/](http://www.sitepoint.com/using-source-maps-debug-sass-chrome/)
 - [https://robots.thoughtbot.com/sass-source-maps-chrome-magic](https://robots.thoughtbot.com/sass-source-maps-chrome-magic)
 - [https://developer.chrome.com/devtools/docs/css-preprocessors](https://developer.chrome.com/devtools/docs/css-preprocessors)
 - [https://www.youtube.com/watch?v=L6wAn2mhZGA](https://www.youtube.com/watch?v=L6wAn2mhZGA)
 - [https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0](https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0)
 - http://oguzhan.in/sass-source-maps-chrome/
 - [http://code.tutsplus.com/tutorials/developing-with-sass-and-chrome-devtools--net-32805](http://code.tutsplus.com/tutorials/developing-with-sass-and-chrome-devtools--net-32805)
 - [https://www.youtube.com/watch?v=tQdbJHtu6kU](https://www.youtube.com/watch?v=tQdbJHtu6kU)