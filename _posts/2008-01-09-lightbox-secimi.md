---
layout: post
title: Lightbox seçimi
Date: 2008-01-09 23:36
Category: CSS, Javascript
tags: [CSS, Javascript, jquery, lightbox, Lightwindow, mootools, Slimbox]
---

Lightbox; popup veya mesaj kutusu benzeri, sayfa içinde açılan kutulara
denir. Bu kutular sayfadaki diğer öğelerin üzerine kapsayacak şekilde
tüm sayfayı belli oranda saydamlık verilerek kaplayan kutulardır.
Lightbox sayfalarımıza estetik görsellik kazandırır.



![Lightbox örneği][]

Bir çok lightbox uygulaması mevcuttur. Ben bu lightbox uygulamalarından
bazılarını denedim ve çeşitli sitelerde kullandım ve sonuçta birinde
karar kıldım. Sırası ile denediğim genel lightbox kodları:

-   prototype ve scriptaculous tabanlı en meşhur Lokesh Dhakar'ın
    yaptığı
-   Lightbox2.0'ın prototype.lite ve moo.fx. kullanılarak revize edilmiş
    daha küçük hali olan 
-   Lightwindow, prototype alt yapısını kullanıyor, bir çok yerde
    kullanılması güzel(flash, iframe, komutla), boyutu yüksek olması dez
    avantajı, ayrıca değiştirmeye pek eleverişli değil.
-   Son olarak benim karar kıldığım mootools javascript kütüphanesi
    kullanılarak hazırlanan [Slimbox][]

Diğer lightbox seçenekleri bana daha hantal ve üzerinden daha az oynama
imkânı sağladığı için tercih etmedim. Slimbox'ın avantajları :

-   Küçük boyutlu mootools javascript kütüphanesini kullanması.
-   %100 doğrulanmış CSS kodu diğer lightboxlarda bu yok.
-   Javascript kodu yerine CSS kodu ile değiştirebilme imkânı
-   Diğer lightbox uygulamalarının aksine saydam png kullanmaması
-   Kolay değiştirilebilir olması

Benim gibi site kodlayan arkadaşların bu tip hazır javascript
kodlarından beklentisi uygulamayı kendi sitemize adapte ederken bize
sağladığı kolaylıktır. Slimbox bu hususta diğerlerine göre daha
avantajlı ve kullanışlı.

slimbox.js scripti bize kolay değiştirme imkanı sağlar 11. ve 17
satırdaki kodlar

-   **resizeDuration:** Değişen genişlik ve yükseklik animasyonunun
    süresi, milisaniye cinsiden.
-   **resizeTransition:** Geçiş efektinin aktif olup olamayacağı
-   **initialWidth:** Kutunun başlangıçtaki genişlik değeri, piksel
    cinsiden.
-   **initialHeight:**Kutunun başlangıçtaki yükseklik değeri, piksel
    cinsiden.
-   **animateCaption:** Animasyon başlığı olsun mu olmasın mı?
-   **displayCounter:** Resim galerisindeki sıralamayı göstersin mi
    göstermesin mi?

Bunun haricinde eğer javascript konusunda mürekkep yalamışsanız bir çok
değişikliği yapabilirsiniz slimbox.js içerisinde.

Sonuç olarak başta dediğim gibi şimdiye kadar uyguladıklarımdan en çok
beğendiğin Slimbox olduğu için bunu sizlere öneriyorum nacak zaman ne
gösterir onu bilemem. Ayrıca sizinde uygulayıp memnun kaldığınız
lightbox uygulamaları varsa onlarıda yazmanızı bekliyorum. Tabi
avantajları ile birlikte yazarsanız memnun olurum.

Not: Bir uyarı eğer sayfa içinde z-index değeri içeren bir nesneniz
varsa ve slimbox bu nesnenin altında kalıyorsa. slimebox.css da
#lbCenter z-index değeri olarak 9999 verin

#### Kaynaklar

-   [http://particletree.com/features/lightbox-gone-wild/][]
-   [http://www.digitalia.be/software/slimbox][Slimbox]
-   http://www.artviper.net/test/ajaxslide/index.html
-   [http://clientside.cnet.com/cnet.gf/docs/files/common/3rdParty/Slimbox/slimbox-js.html][]
    (kaynak)
-   http://scripts.ajaxflakes.com/category/lightbox/
-   http://www.ajaxrain.com/tag.php?tag=popup&page=1
-   jadedpixel.stikipad.com/design/show/A+Better+Lightbox
-   [http://homepage.mac.com/yukikun/software/slimbox_ex/][]
    (geliştirilmiş sildebox)
-   http://www.chazzuka.com/blog/index.php?p=21
-   phatfusion.net/lightbox/index.htm


  [Lightbox örneği]: /images/lightbox.gif
  [Slimbox]: http://www.digitalia.be/software/slimbox
  [http://particletree.com/features/lightbox-gone-wild/]: http://particletree.com/features/lightbox-gone-wild/
  [http://clientside.cnet.com/cnet.gf/docs/files/common/3rdParty/Slimbox/slimbox-js.html]: http://clientside.cnet.com/cnet.gf/docs/files/common/3rdParty/Slimbox/slimbox-js.html
  [http://homepage.mac.com/yukikun/software/slimbox_ex/]: http://homepage.mac.com/yukikun/software/slimbox_ex/
