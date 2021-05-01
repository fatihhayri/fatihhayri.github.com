---
layout: post
title: Firefox 3.6 çıktı
Slug: firefox-3-6-cikti
Date: 2010-01-22 00:11
categories: [Haberler]
tags: [çoklu background, Firefox, Firefox3.6, font-face, gradyen, İnternet Tarayıcısı, woff]
---

Firefox 3.5 çıkalı daha 6 ay oldu, bazıları şunu diyebilir bu kadar kısa
aralıklarla niye yeni sürüm çıkarıyorsunuz kardeşim. Bu tamamen İnternet
tarayıcıları ile olan ilişkimize bağlı bir şey. Artık İnternetsiz
bilgisayar çok yavan duruyor. Yani her şeyimiz İnternet. Bu durumu
düşününce ve İnternete erişimimizi sağlayan araçlarında İnternet
tarayıcıları olduğunu düşünürsek 6 ay normal bir süre bence. Elimizi
güçlendiriyor bu güncellemeler.

Mozilla'nın en güzel yanlarında biriside bence bu. Belli aralıklarla
çıkan sürümlerde bir çok sorunlar gideriliyor ve yeni özellikler
ekleniyor. Bu İnternet kullanıcısına ve özellikle web sayfası
geliştiricilerine çok büyük avantajlar sağlıyor. Eğer aynı yöntemi
Microsoft'da uygulasa idi biz ie6 gibi bir garabet ile uğraşmıyor
olacaktık. Belki bu kadar rekabet olmayacaktı ama bizde yenilikleri daha
hızlı uygulayacaktık. Neyse yine ie6 ile uğraşmayalım.

Firefox 3.6 çıktı. Buradan indirebilirsiniz.

Gelelim yeniliklere;

-   **Dil Desteği:** Bir çok dilde aynı anda çıktı, aralarında Türkçe'de var
-   **Personas:** Daha önce kullandığımız [Personas][](yani tarayıcı
    çerçevesini tasarlama aracı) daha kolay kullanıma sunulmuş. Tek tık
    ile tarayıcı çerçevesini değiştirebiliyoruz. Ben bu konuda
    Mozilla'nın daha cüretkar davranarak css kodu ile tarayıcı
    çerçevesini değiştirme yönünde bir çalışması olduğunu okumuştum, ama
    hala geliştirme aşamasında galiba. Ne güzel olurdu tüm tarayıcı
    görünümünü değiştirmek. Tasarımcılara biraz daha iş çıkardı.
-   **Plugin Güncelleme:** Daha etkin bir plugin güncelleme sistemi.
    Eski pluginlerin bir çok dezavantajını gören Firefox bu konuda daha
    güzel bir çözüm bulmuş ama ne kadar kullanılır bilemem.
-   **Gelişmiş Video Desteği:**Videolara tam ekran desteği ve HTML5 ile
    gelen poster frames desteği gelmiş. Şimdilik genel projelerimiz
    için pek bir şey ifade etmiyor.
-   **Javascript Performansı:** Javascript performansında hızlandırmaya
    gidilmiş. Ayrıntılı bilgi için [tıklayınız.][]
-   **Form Tamamlama:**Formlardaki bezer alanlar için Firefox
    geçmişindekiler ile eşleşiyor ise otomatik tamamlıyor.
-   **3. Parti Yazılım Desteği:** Yeni sürüm ile birlikte 3. parti
    yazılımcıların Firefox entegrasyonu daha kolay olacağı söyleniyor.
-   **WOFF Desteği:** Daha önce [font-face][] özelliğini anlatırken
    belirttiğim gibi WOFF font desteği geldi. Bu tip yazı tipi dosyları
    diğerlerinin yarısı kadar boyutları olduğunu belirterek bu kısmı
    kapatayım.
-   **CSS:**Yeni CSS özellik desteği gelmiş.
    -   [Gradyen][] özelliği ilk olarak webkit geliştiricilerinin
        geliştirdiği bir özellikti, Firefox'da bu kervana katıldı, ama
        biz uygulayamıyacağız, çünkü ie desteklemiyor. İE'ye de
        javascript ile bir çözüm bularak kullanabiliriz. Doğrusal ve
        radyal granyen desteği geldi Firefox 3.6 ile. CSS web
        sitelerinin görselliğini tek başına ele alacak gibi.
    -   Çoklu background desteği geldi. CSS3 ile gelen bu özellik
        bence Firefox için gecikmiş bir destek ile geldi. Gerçi ie
        desteklemediği için şimdilik duracağız. Bu özelliği kullanımı
        ile neler yapabileceğimizi düşünmek bile yeter. Ah ulan
        Microsoft.
    -   Farklı medya tiplerinin desteği geldi.
    -   Background genişletme özelliği geldi, CSS3 ile birlikte
        gelen bu özellik, Firefox3.6 ile destekleniyor. Flash ile
        yapılan %100 genişlik ve yükseklikteki sitelerde ardalana
        konulan sayfa backgroundunu artık css ile yapabileceğiz, ama
        şimdi değil. Ah ulan Microsoft
    -   pointer-events özelliği desteği gelmiş. Bu özelliği bende ilk
        defa görüyorum desem yalan olmaz.
        aydınlatıcı.
    -   ve bunun haricinde irili ufaklı özellikler gelmiş ve sorunlar
        giderilmiş.

-   **HTML5 ve DOM Desteği:** Yeni DOM ve HTML5 destekleri gelmiş.
    Drag&Drop API ve [File API][]. Örnekleri görmek için [videoyu     izleyin][].
-   **Hız:**İlk kurulumdan sonra daha hızlı olduğunu söyleyebilirim,
    ancak bunu kullandıkça göreceğiz. FireBug1.5 ve Firefox3.6
    performansının daha iyi olduğunu kesin. Mozilla'nın iddiasına göre
    %20'lik bir hızlanma varmış.
-   **Ortama Adapte Olmak:** Yeni device API'si desteği ile artık
    desteği olan makinelerde Firefox duruma göre vazife çıkaracak ve
    görünümünü ayarlayacak. Nasıl olduğunu görmek için [videoyu     izleyin][2]. Çoğunlukla Mac kullanıcılarının kullanacağı bir özellik
    gibi.

Birde yapımcılarından Mike Beltzner'dan dinleyelim

<object width="480" height="295"><param name="movie" value="http://www.youtube.com/v/04Q9tuSaCYA&amp;hl=en_GB&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/04Q9tuSaCYA&amp;hl=en_GB&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="295"></embed></object>

## Kaynaklar

-   [http://www.mozilla.org/firefox/][]
-   [http://blog.mozilla.com/blog/2010/01/21/firefox-3-6-release/][]
-   [http://hacks.mozilla.org/2010/01/firefox-3-6-is-here/][]
-   [http://lifehacker.com/5453782/firefox-36-officially-available-brings-speed-increases-one+click-themes-and-more][]
-   download.cnet.com/8301-2007_4-10438907-12.html
-   [http://hacks.mozilla.org/2010/01/javascript-speedups-in-firefox-3-6/][]

  [Personas]: http://www.getpersonas.com/ "Personas"
  [tıklayınız.]: http://hacks.mozilla.org/2010/01/javascript-speedups-in-firefox-3-6/ "tıklayınız."
  [font-face]: http://fatihhayrioglu.com/font-face-kullanimi/ "font-face"
  [Gradyen]: https://developer.mozilla.org/en-us/docs/Web/CSS/CSS_Images/Using_CSS_gradients "Gradyen"
  [File API]: http://hacks.mozilla.org/2009/12/w3c-fileapi-in-firefox-3-6/ "File API"
  [videoyu izleyin]: http://hacks.mozilla.org/2009/12/file-drag-and-drop-in-firefox-3-6/ "videoyu izleyin"
  [2]: http://hacks.mozilla.org/2009/10/orientation-for-firefox/ "videoyu izleyin"
  [http://www.mozilla.org/firefox/]: http://www.mozilla.org/firefox/
  [http://blog.mozilla.com/blog/2010/01/21/firefox-3-6-release/]: http://blog.mozilla.com/blog/2010/01/21/firefox-3-6-release/
  [http://hacks.mozilla.org/2010/01/firefox-3-6-is-here/]: http://hacks.mozilla.org/2010/01/firefox-3-6-is-here/
  [http://lifehacker.com/5453782/firefox-36-officially-available-brings-speed-increases-one+click-themes-and-more]: http://lifehacker.com/5453782/firefox-36-officially-available-brings-speed-increases-one+click-themes-and-more
  [http://hacks.mozilla.org/2010/01/javascript-speedups-in-firefox-3-6/]: http://hacks.mozilla.org/2010/01/javascript-speedups-in-firefox-3-6/