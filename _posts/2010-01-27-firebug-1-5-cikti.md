---
layout: post
title: FireBug 1.5 Çıktı
Slug: firebug-1-5-cikti
Date: 2010-01-27 00:11
Category: Haberler
tags: [css düzeltmeleri, firebug, Firefox, Firefox Eklentileri]
---

FireBug 1.5 sürümü çıktı. Çıkalı biraz zamanda oldu ama ben anca
yazabildim. Yenilikleri burada sizlere anlatacağım. Bir önceki sürümde
yenilikler vardı ama bununla birlikte bazı sorunlarda yaşadık. Yeni
sürümde bir çok sorunun giderildiği söyleniyor. Kullandığım kadarı ile
iyi, yalnız sorunsuz değil. Yeni sürüm aynı zamanda Firefox'un yeni
sürümüne yakın çıktığı için her ikisinide destekliyor. Hem Firefox 3.5
hemde 3.6'yı destekliyor.

**Teftiş Et(Inpect Element)** Teftiş Et kısmı geliştirilmiş. Artık daha
sorunsuz çalışıyor. **Quick Info** bölümü ile seçilen elemanın bilgileri
anında görülebiliyor. Ayrıca **Image Map** yakalama kısmı eklenmiş.

![][100]

**HTML Paneli:** HTML düzenleme kısmı geliştirilmiş. Bir nesneye
uygulanan tüm stil atamaları ve etkin stil atamaları artık iki ayrı
sekme(Style ve Computed) halinde verilmiş. Sağdaki Layout kısmına
position ve z-index değerlerinide gösteriyor artık. MathML ve SVG
namespace desteği gelmiş.

![][1]

**CSS Paneli:** Css panelde aktif elemanın  sözde-sınıflarının(pseudo)
hepsi görünüyor ve bunları değiştirebiliyoruz. Bu özellik iyi olmuş,
burada sorun yaşıyorduk açıkçası. 

Sistemden gelen özellikleri artık görebiliyoruz. Sadece okunabilir.

CSS kısayollarını göster ve gizle yapabiliyoruz.

![][2]

**Javascript Paneli:** Gelişmiş inceleme-noktaları oluşturabilme
özelliği eklenmiş. Bir çok panel artık inceleme-noktası
oluşturabiliyoruz. Dondur işaretinin olduğu kısımlarda buraya kadar
incele imkanı veriyor.

**Net Paneli: Net** panelindeki zamanlama hataları giderilmiş ve
geliştirilmiş. Net panelin çalışma mantığı değiştirilmiş ve tam
sonuçların alınması sağlanmış. Ayrıntılı bilgi için [tıklayınız][]. 

Console ve Net panele **Persist** özelliği eklenmiş. Eski ile yeniyi
karşılaştırma imkanı sağlıyor bu buton bize. Firefox önbelliğini
pasifleştirme butonu eklenmiş. 

XHR inceleme noktası oluşturabiliyoruz.

Kolonları çıkarabiliyor ve ekleyebiliyoruz.

Gelen ve giden veriler araç ipuçu içinde gösteriliyor.

![][3]

**Araç Çubuğu ve Menüler:**Arama kısmını geliştirilmiş. Küçük büyük
harfe duyarlı arama yapabiliyoruz ve ileri doğru ve geriye doğru arama
yapabiliyoruz. Kapama düğmesindeki "Off" yazısı kaldırılmış.

## Sonuç

Sonuç olarak şunu söyleyebilirim; daha önceki sürümlerde yenilikler ile
birlikte bazı sorunlarda beraberinde geliyordu bu sefer daha bir oturmuş
gibi bu araç. Daha yapısal değişiklikler ve çözümler üretilmiş. Web
geliştiricileri için olmazsa olmaz olan FireBug sorunları olsada bir
numaralı yerini kimseye kaptırmıyor.

## Kaynaklar

-   [http://getfirebug.com/wiki/index.php/Firebug_Release_Notes][]
-   [http://www.softwareishard.com/blog/][]
-   [http://lifehacker.com/5453025/firebug-15-updates-with-new-features-still-a-web-developers-dream][]
-   [http://hacks.mozilla.org/2010/01/firebug-1-5-a-closer-look/][]
-   [http://hacks.mozilla.org/2010/01/firebug-1-5-released/][]
-   [http://www.markwarner2008.com/firebug-1-5-updates-with-new-features-still-a-web-developers-dream-downloads/][]

  [100]: /images/teftis_et.gif "teftis_et"

  [1]: /images/computed.gif "computed"

  [2]: /images/css_paneli.gif
    "css_paneli"

  [tıklayınız]: http://www.softwareishard.com/blog/firebug/firebug-http-time-monitor/
    "tıklayınız"
  [3]: /images/net_panel.gif
    "net_panel"

  [http://getfirebug.com/wiki/index.php/Firebug_Release_Notes]: http://getfirebug.com/wiki/index.php/Firebug_Release_Notes
    "http://getfirebug.com/wiki/index.php/Firebug_Release_Notes"
  [http://www.softwareishard.com/blog/]: http://www.softwareishard.com/blog/
    "http://www.softwareishard.com/blog/"
  [http://lifehacker.com/5453025/firebug-15-updates-with-new-features-still-a-web-developers-dream]: http://lifehacker.com/5453025/firebug-15-updates-with-new-features-still-a-web-developers-dream
    "http://lifehacker.com/5453025/firebug-15-updates-with-new-features-still-a-web-developers-dream"
  [http://hacks.mozilla.org/2010/01/firebug-1-5-a-closer-look/]: http://hacks.mozilla.org/2010/01/firebug-1-5-a-closer-look/
    "http://hacks.mozilla.org/2010/01/firebug-1-5-a-closer-look/"
  [http://hacks.mozilla.org/2010/01/firebug-1-5-released/]: http://hacks.mozilla.org/2010/01/firebug-1-5-released/
    "http://hacks.mozilla.org/2010/01/firebug-1-5-released/"
  [http://www.markwarner2008.com/firebug-1-5-updates-with-new-features-still-a-web-developers-dream-downloads/]: http://www.markwarner2008.com/firebug-1-5-updates-with-new-features-still-a-web-developers-dream-downloads/
    "http://www.markwarner2008.com/firebug-1-5-updates-with-new-features-still-a-web-developers-dream-downloads/"
