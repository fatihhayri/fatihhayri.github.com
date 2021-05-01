---
layout: post
title: Google Chrome Developer Tools ile kullanılmayan CSS kodlarını bulmak
Date: 2018-02-19 16:43
categories: [Web Araçları]
tags: [web developer, kod-kullanım-oranı, coverage, chrome, developer-tools]
image:
  feature: kod-kullanim-orani-sonuc.gif
---

Performans hiç olmadığı kadar önemli bir hale geldi. Google'un arama sonuç sıralamasındaki en büyük etkenlerden birinin site hızı olduğunu açıkladıktan sonra performan işleri daha çok ön plana çıktı. Performansı arttırmanın farklı yolları var. Bu makalede bunlardan bir tanesi kullanılmayan CSS ve JS'leri bulup sayfadan yada siteden çıkarmayı göreceğiz.

![Developer Tools Coverage Açma](/images/kod-kullanim-orani-ac.gif)

Google Chrome Developer Tool'da sağdaki menüden More Tools - Coverage ile pencereyi açabilirsiniz. Daha kısa olarak Developer Tools'u açtıktan sonra ⌘+⌥+I (Mac) veya Control+Shift+I (Windows, Linux) basıp açılan menüde **Show Coverage** yazın ve enter'a basın.

Gelen ekrandan kayıt butonuna tıklayarak hesaplamayı başlatabilirsiniz. Burada dinamik olarak eklenen alanları açarak bu hesaplamanın daha iyi sonuçlar vermesini sağlayabilirsiniz. Gizle göster ile açılan alanlar vs. Kayıt butonuna tekrar basarak hesaplamayı bitirin. Sonuç listesi aşağıdaki gibi görünecektir.

![Developer Tools Coverage](/images/kod-kullanim-orani-baslangic.gif)

Listede sayfadaki kaynaklar ve bunların kullanım oranlarını var. Her bir linkin üzerine tıklayarak detayını Source (Kaynak) sekmesinde görebilrisiniz.

Detay sayfasını incelediğimizde kod satırlarının solundaki kırmızı çizgi kullanılmayan yerleri yeşil çizgiler ise kullanılan alanları göstermektedir.

![Developer Tools Coverage](/images/kod-kullanim-orani-detay.gif)

Örneği yaptığım fatihhayrioglu.com'da fontawesome'ın 7-8 yerde kullanıldığını gördüm. Bunların yerine satıriçi SVG ikon kullanıp fontawesome'ı kaldırdım. Başlangıçta %75 kullanılmayan kod varken fontawesome'ı çıkarınca %57.5'e düştü. Şimdilik bu kadar. 

![Developer Tools Coverage](/images/kod-kullanim-orani-sonuc.gif)

Aynı şekilde Javascript kaynakları içinde sonuçlar var. Herbirini inceleyip kullanılmayan veya az kullanılan kaynakları sayfadan çıkararak sayfalarımızı hızlandırabiliriz.

Kalın sağlıcakla.


## Kaynaklar

 - [https://developers.google.com/web/updates/2017/04/devtools-release-notes](https://developers.google.com/web/updates/2017/04/devtools-release-notes)
 - [http://vojtechruzicka.com/measuring-javascript-and-css-coverage-with-google-chrome-developer-tools/](http://vojtechruzicka.com/measuring-javascript-and-css-coverage-with-google-chrome-developer-tools/)
 - [http://blog.cowchimp.com/monitoring-unused-css-by-unleashing-the-devtools-protocol/](http://blog.cowchimp.com/monitoring-unused-css-by-unleashing-the-devtools-protocol/)
 - [https://blog.logrocket.com/using-the-chrome-devtools-new-code-coverage-feature-ca96c3dddcaf](https://blog.logrocket.com/using-the-chrome-devtools-new-code-coverage-feature-ca96c3dddcaf)