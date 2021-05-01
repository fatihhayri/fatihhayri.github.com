---
layout: post
title: Google Chrome DevTools İpuçları
Date: 2018-03-06 11:20
categories: [Web Araçları]
tags: [google, devtools, ipuçları]
image:
  feature: dev-tools-js-pretifier.gif
---

Çalışma hayatım editör (Sublime Text), Terminal (iTerm) ve Chrome / DevTools arasında geçiyor. Bu bileşenlerden biri olan Chrome / DevTools hakkında birkaç ipucu paylaşmak için bu makaleyi yazdım.

## 1. Chrome DevTools'u açmanın kısayolu

Firebug kullanırken genelde sağ tıklayıp denetle (inspect) tıklayarak açtığım paneli o kadar yoğun kullanıyorum ki kısayolunu öğrenmem gerekti. Çok kullandığımız şeylerin kısayolunu öğrenmek her zaman iyidir. 

**Command+Option+i (Mac)** 

**F12 veya Control+Shift+i (Windows/Linux)**

## 2. Koyu (Dark) tema kullanımı

Editörde kod yazarken genelde koyu zeminli temaları tercih ediyorum. Aynı şeyi Chrome DevTools'ta da yapabilmek çok güzel.

DevTools'u açın **Settings > General** seçin gelen listeden Dark'ı seçmeniz yeterli.

![dev-tools-koyu-tema](/images/dev-tools-koyu-tema.gif)

Sonuç aşağıdaki gibi görüncektir.

![dev tools koyu tema görünümü](/images/dev-tools-koyu-tema-gorunum.gif)

## 3. DevTools yazı boyutunu arttırmak

Yaş ilerledikçe yazı tipi boyutu değeri yetmiyor. Editördeki yazı boyutunu da 18px kullanıyorum. DevTools'ta yazı boyutunu arttırmak çok kolay olmadı. Çünkü bunun için tanımlanan kısayola Türkçe klavye seçeneğinde ulaşamadım. 

Çözümü işletim sisteminin klavye seçeneğini İngilizce olarak seçip sonra **Command+Shift++ (Mac) Control+Shift++ (Win)** kısayoluyla dev tools yazı boyunu arttırarak buldum, ayrıca yazı boyunu azaltmak için  **Command+- (Mac) Control+- (Win)** kısayolu kullanılabilir. Değerleri başlangıç değerini döndürmek için **Command+0 (Mac) Control+0 (Win)**

Not: Tekrar Türkçe klavye seçeneğine dönmeyi unutmayın :)

## 4. Çift ekran kullanımında DevTools

Web sitelerini geliştirirken yoğun bir şekilde DevTools kullanıyorum. Çift ekran imkanı olanların Chrome'u bir ekranda DevTools'u ikinci ekran kullanmaları büyük avantaj sağlayacaktır.

![dev tools ayrı ekran kullanımı](/images/dev-tools-ayri-ekran.gif)

## 5. DevTools Doc side kısayolu

Genelde masamda çalışırken çift ekranla çalıştığım için DevTools ayrı pencerede kullanıyorum. Toplantıya girerken veya birisiyle çalışırken ekranımı taşıyamadığım için sadece dizüstü bilgisayarımda çalışıyorum. Bu geçişlerde DevTools'u kullanım şekillerimde değişiyor. Bu değişimi sağlamak için kullandığım kısayol

**Cmd+Shift+D (Mac)** 

**Ctrl+Shift+D (Windows)**

## 6. Renk paleti

Firefox'ta iken bunun için bir eklenti kullanıyordum.

Herhangi bir renk tanımının sol yanındaki renk kutusuna tıklayıp renk paletini açabiliyoruz. Açılan renk paletini sadece DevTools içerisinde değil normal tarayıcı üzerindeki bir rengi seçmek için de kullanabiliyoruz.

![dev tools renk paleti kullanımı](/images/cev-tools-renk-paleti.gif)

## 7. CSS ve JS yakışıklı göstermek

CSS ve JS dosyalarımızı daha ufak boyutlu olsun diye küçültüyoruz. Canlıda bu dosyaları incelerken dosyalar okunamayacak kadar kötü duruyor. Bu dosyaları daha okunaklı görmek için çok kullandığım bir özellik.

ilk ekran 

![dev tools minfied](/images/dev-tools-js-min.gif)

Sağ alttaki butona basarak daha düzgün bir görünüme kavuşturabiliriz. Bundan sonra denetlemek istediğimiz satıra **breakpoint** ekleyebiliriz. 

![dev tools prettier](/images/dev-tools-js-pretifier.gif)

## 8. Yenile butonuna ek özellikler

Yenile butonu dev tools açıkken daha fazla seçenek sunuyor. DevTools açıkken yenile butonu üzerindeyken sağ tıklayınca aşağıdaki gibi iki yeni özellik daha geliyor.

![dev tools yenile butonu](/images/dev-tools-yenile-ek-ozellik.gif)

## 9. Network sekmesi içeriğini filtrelemek

Network sekmesinde akan listeden istediğimiz sonuca erişmek bazen sıkıntılı olur. Filtreleme özelliklerini kullanarak istediğimize kolayca erişebiliriz.

![dev tools network filtreleme](/images/dev-tools-network-filtreleme.gif)

Örneğin tüm jpeg dosyaları görmek için

```bash
-.jpg -.jpeg
```
	
Belirli adresten gelen istekleri hariç tutmak için

```bash
-domain:fatihhayrioglu.com
```
	
İsteklerdeki HTTP GET ve POST isteklerini hariç tutmak için

```bash
-method:GET -method:POST
```
	
vb işlemler için filtreleme seçenekleri kullanılabilir.

## 10. Hızlı erişim menüsü

Sublime Text'ten alışık olduğumuz komut menüsü DevTools'a geldi. Kısayolu bile aynı :)  Cmd+Shift+P  (Mac) Ctrl+Shift+P (Windows)

![dev tools komut paleti](/images/dev-tools-komut-paleti.gif)

Bu menüden 60 adet komut verebiliyoruz. 

 - Koyu temaya geçiş yapabiliyoruz
 - Devtools penceresinin yerini değiştirebiliyoruz (Dock to bottom)
 - İnternet bağlantınızı kesebilirsiniz (Network: Go offline)

## 11. Tüm projede ara

DevTools içinde bir çok arama alanı var, ancak girdiğimiz sitenin tamamında aramak için ayrı bir sekme var. Bu sekmeye erişmek için DevTools sağ üst menüsünden (üç nokta üst üste) **More tools > Search** erişebileceğimiz gibi. **Cmd+Option+F (Mac) Ctrl+Shift+F (Windows/Linux)** kısayolundan erişebiliyoruz. Ayrıca Hızlı erişim menüsünden 'Show Search' aramasıyla da erişebiliyoruz.

![devtools- arama](/images/devtools-arama.gif)

## 12. Log'ların silinmesi engellemek

Konsol Sekmesi'nde günlüğü koru (Preserve Log) seçeneğini işaretleyerek, DevTools Konsolunu her sayfa yüklendiğinde log'ların silinmesini engelleyerek tüm logları görmemize olanak sağlar. Bu, sayfanın indirilmesinden hemen önce ortaya çıkan hataları araştırmak istediğimiz durumlar için süper bir özelliktir.

Eskiden açık bir şekilde seçimi yapabiliyorduk, yeni gelen sürümlerde bu seçenek sağdaki ayarlar (çark işareti) ikonuna tıklayınca geliyor.

![devtools preserve log](/images/devtools-preserve-log.gif)

Sağlıcakla kalın.