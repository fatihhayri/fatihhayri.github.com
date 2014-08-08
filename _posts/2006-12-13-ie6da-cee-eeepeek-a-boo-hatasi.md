---
layout: post
title: IE6&#039;da CEE-EEE(peek-a-boo) Hatası
Date: 2006-12-13 14:56
Category: CSS, Web Standartları, XHTML
tags: cee-eee, CSS, hata, ie6, peek-a-boo, Web Standartları, XHTML
---

Bir diğer garip ve bizi sinirden çatlatan IE sorunu benim CEE-EEE(web de
ise **peek-a-boo** namıyla gezinen; bu ismin verilmesinin nedeni
içeriğin bir orataya çıkıp bir kaybolmasıdır, hani bizim bebekleri
eğlendirmek için yüzmüzü ellerimizle kapatıp cee-eee diye birden açarak
bebeleri eğlendirdiğimiz oyun varya işte o oyundan geliyor bu isim.) adı
ile tanımladığım hatadır. Hata uzun içeriği olan ve float
elementi içeren likit kutularda meydana gelir. Sadece IE6 versiyonunda
karşılaşılır. Kaydırma çubuğu ile aşağı yukarı gidince veya programlar
arasında geçiş yapınca (alt+tab kısayolu ile mesela)düzelir. Ama bu
düzelme geçicidir sayfa ilk yüklendiğinde veya yenileme yapıldığında
hata yine çıkar.

Örnek sayfayı görüntülemek için [tıklayınız.][](Hatayı görebilmek için
IE6 versiyonun ile açın)

![][100]

Sorunlu Ekran Görüntüsü

![][1]

Sorunsuz Ekran Görüntüsü

Bu hata float elementini takip eden float uygulanmamış elementler ve
devamında clear uyugulanmamış elementler olduğu durumlarda tüm
kapsayıcının içindeki zemin-resmi ve zemin-rengi uygulanmış alt
elementlerde meydan gelir. Eğer clear uygulanmış element float
uygulanmış elemente temas ediyorsa float uygulanmamış elemetlerin
arasındaki zemin resim ve zemin rengi uygulanan alt elemetnleri
gizlenecektir, yanlız sayfa yenilendiğinde yeniden ortaya çıkabilir.

Bu hatanın giderilmesi için bir çok yöntem mevcuttur. En kısa yol zemin
resmi veya zemin rengini kaldırarak çözmektir. Diğer bir yöntem de float
uygulana elemente temasdan önce clear uygulanan elementi kapatmaktır.
Elementlere herhangi bir boyut tanımlandığında bu hata çözülecektir.
Ayrıca bu hata içerik alanına yükseklik tanımlaması yağıldığında da
görülmeyecektir. Son yöntem float uygulanan elementin ve içerik alanının
konumunu göreceli olarak belirlediğimizde de bu sorun görülmeyecektir.

## Kaynak

-   [http://www.positioniseverything.net/explorer/peekaboo.html][]

  [tıklayınız.]: /dokumanlar/ie_peekaboo_hatasi_ornek.html
  [100]: /dokumanlar/ceee_sorunlu.gif
  [1]: /dokumanlar/ceee_sorunsuz.gif
  [http://www.positioniseverything.net/explorer/peekaboo.html]: http://www.positioniseverything.net/explorer/peekaboo.html
