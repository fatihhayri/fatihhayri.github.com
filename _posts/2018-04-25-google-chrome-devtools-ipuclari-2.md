---
layout: post
title: Google Chrome DevTools İpuçları 2
Date: 2018-04-24 10:20
Category: Web Araçları
tags: [google, devtools, ipuçları]
image:
  feature: lokal-screenshot.gif
---

[İlk yazıyı](http://fatihhayrioglu.com/google-chrome-devtools-ipuclari/) yazdıktan sonra hangi özellikleri kullandığıma daha çok dikkat etmeye başladım. Hemen başlayalım. Sırayla yazalım.

## 1. CSS değişikliklerini geri almak

![chrome styles](/images/chrome-styles.gif)

Styles sekmesinde yaptığımız değişiklikleri geri almak için alışık olduğumuz kısayolu kullanabiliyoruz.

 - Cmd + Z (Windows/Linux: Ctrl + Z)

## 2. Ekran görüntüsü almak

Daha önce bunun için eklenti kullanıyordum. DevTools bunu kendi yapıyor artık.

![chrome full screenshot](/images/full-screenshot.gif)

Komut menüsünü açıp Cmd+Shift+P (Mac) Ctrl+Shift+P (Windows, Linux) **screenshot** yazınca gelen seçeneklerden "Capture full size screenshot" tıklayınca bulunduğunuz sayfanın tam sayfa ekran görüntüsünü alabiliyoruz.

## 3. Sadece belli alanın ekran görüntüsünü almak

![chrome lokal screenshot](/images/lokal-screenshot.gif)

Sadece sayfanın belli bir yerinin ekran görüntüsünü almak için denetle(inspect) Command+Shift+C (Mac) veya Control+Shift+C (Windows, Linux) aktifleştirdikten sonra Command (Mac) veya Control (Windows, Linux) butonuna bastıktan sonra fare ile seçmek istediğimiz alanı bir kutu içine almamız yeterli.

## 4. Animasyon tiplerini değiştirmek

**animation-timing-function** ve **transition-timing-function** özellikleri değerlerini DevTools üzerinden değiştirip sonuçlarını görebiliyoruz. 

![chrome animasyon tipi degiştirmek](/images/animasyon-tipi.gif)

Solda üç adet seçim var ayrıca soldan sçeim yapınca altta sağ-sol ok çıkıyor buradan diğer değerlere geçiş yapıp sonuçlarını görebiliyoruz. Bildiğin IDE tool'u mübarek. 

## 5. CSS değerleri arttırmak/azaltmak

DevTools **Styles** panelinde değişiklik yaparken çok fazla kullandığım bir özellik. İnsan değerini olmayınca anlıyor. Safari Developer Tool'unda bulmayınca çok aradım :)

![devtools arttırma azaltma](/images/arttirma-azaltma.gif)

Birer birer, onar onar, yüzer yüzer ve ondalık sayılarda arttırma ve azaltma kısayolları

 - Yukarı/Aşağı (**Mac, Windows, Linux**) = +/-1
 - Alt + Yukarı/Aşağı (**Mac, Windows, Linux**) = +/-0.1
 - Shift + Yukarı/Aşağı (veya PgUp/PgDn) (**Mac, Windows, Linux**) = +/-10
 - Cmd + Yukarı/Aşağı (**Mac**) Shift + PgUp/PgDn (**Windows, Linux**) = +/-100
 

## 6. Bazı kütüphane scriptlerini hata ayıklama dışında tutmak

Javascript kodlarımızdaki hataları ayıklarken **DevTools** kullandığımız harici kütüphaneleri de hata ayıklama sürecine sokar, bu gibi durumlarda hata ayıklama süreçleri gereksiz fonksiyon ve kodlarda dolaşır. Bu gibi durumları engellemek için istemediğimiz script kodlarını hata ayıklama akışı dışına çıkarma imkanımız var. 

![hata ayıklama dışında tut](/images/jquery-disarda.gif)

Ben genelde jQuery kütüphanesini hata ayıklama dışında tutuyorum. 

## 7. Arama yaparken CSS selector kullanmak

**Elements** panelinden arama yaparken CSS seçicilerini kullanabiliyoruz.

![css seçicileri kullanma imkanı](/images/css-selector.gif)

İlk başta çok kullanmıyordum ama son zamanlarda çok işime yarıyor. 

## 8. HTML düzenlerken kapanış etiketini otomatik değiştirmek

Chrome DevTools'u editör gibi kullandığımız için bazı editör özelliklerini görmek sevindirici. Elements panelinden bir HTML etiketini seçip değiştirdiğimde kapatma etiketini kendi otomatik değiştirmesi çok süper.

![etiket kapma otomatik](/images/etiket-kapma-otomatik.gif)
 

## 9. Console panelde yakaladığım elmanı Elements panelinde yakalamak

Başlıkta yazmışım açıklamayı :)

![console panelde seçilen eleman](/images/console-element-gecis.gif)

Tıkladıktan sonra

![console dan element paneline](/images/console-element-gecis-2.gif)
 

## 10. Eleman CSS durumları

İlk başta yazmam gerek özelliklerden birisi. DevTools bir elemanın farklı CSS durumlarını yakalamamıza ve bu durumlara atanan özellikleri görmemiz, değiştirmemiz ve silmemize olanak sağlar.

![CSS durumları](/images/css-status.gif)

Yukarıda görüldüğü gibi Styles panelinde :hov bölümüne tıklayınca o elemana özel CSS durumları çıkıyor. Çıkan durumları işaretleyince altta ilgili elemanın o durmuna ait atanmış özellikler görülecektir.

## Kaynaklar


 - [https://www.credera.com/blog/type/article/five-things-you-didnt-know-google-chrome-could-do/](https://www.credera.com/blog/type/article/five-things-you-didnt-know-google-chrome-could-do/)
 - [http://devtoolstips.com/post/101751680221/blackbox-scripts-when-youre-stepping-through](http://devtoolstips.com/post/101751680221/blackbox-scripts-when-youre-stepping-through)
 - [https://umaar.com/dev-tips/7-dom-search-by-selector/](https://umaar.com/dev-tips/7-dom-search-by-selector/)
 - [https://umaar.com/dev-tips/17-quick-edit-element/](https://umaar.com/dev-tips/17-quick-edit-element/)
 - [https://umaar.com/dev-tips/20-reveal-in-elements/](https://umaar.com/dev-tips/20-reveal-in-elements/)