---
layout: post
title: font-display özelliği
Date: 2018-04-24 10:20
Category: CSS
tags: [css4, font-display]
image:
  feature: tarayici-sayfa-taramasi.gif
---

Tipografinin web sitelerinde önemli bir yeri var. Yazı tipi tasarım ve okunabilirlik açısından bakıldığında gerekli bir öğedir. 

Yazı tiplerini sistemde yüklü yazı tipleri ve özel yazı tipleri diye ikiye ayırabiliriz. Bu makalede özel yazı tipleri üzerine duracağız. 

Geçmişten beri özel yazı tiplerini sayfalarımıza eklemenin farklı yöntemlerini denedik. (Örn: sFIR, cufon, resim vb. ) Günümüzde artık bu daha kolay. [@font-face](http://fatihhayrioglu.com/woff2-ve-font-face-tanimini-iki-satira-indirmek/) ile özel yazı tiplerini sayfalarımıza kolayca ekleyebiliyoruz. 

Özel yazı tipleri hakkında daha fazla bilgiye sahip olmalıyız. Nasıl yüklenir? Yükleme sırası nasıldır? Bu yazıda bu konulara biraz değineceğiz.

## Özel yazı tipi tarayıcılar tarafından nasıl yüklenir ve yorumlanır? 

Tarayıcıların bir html dokümanı nasıl yorumladığını aşağıdaki diyagram göstermektedir. 

![tarayıcı html nasıl tarar](/images/tarayici-sayfa-tarama.gif)

Yukarıdaki grafikte görüldüğü gibi tarayıcılar özel yazı tiplerinin yüklenmesi için önce DOM ve CSSOM'un oluşmasını bekler. Sonra özel yazı tipini yükler ve duruma göre içeriği işler. Özel yazı tiplerinin yüklenmesine kadar geçen sürede içeriğin nasıl görüneceği konusunda tarayıcıların farklı davranışları vardır. Bu farklılıkları inceleyelim.

## Özel yazı tipi yükleme farklılıkları

Yazı tiplerinin yüklenmesinde iki farklı yöntem var. Tarayıcıların tercih ettiği iki yöntemi kısaca açıklayalım. 

 - "flash of invisible text" (**FOIT**): Özel yazı tipi yüklenene kadar yazıları göstermeyen yöntem "flash of invisible text" (FOIT) baş harflerinden oluşan bir kısaltma ile anılır. Yazı tipini gösterme, yüklenince bir seferde uygula mantığı.
 
 - "flash of unstyled text" (**FOUT**): Özel yazı tipi yüklenene kadar sistemde yüklü olan yazı tipini gösterip özel yazı tipi yüklenince özel yazı tipine geçen metot. Standart yazı tipi ile göster, özel yazı tipi yüklenince tekrar tara ve göster mantığı.

İlk yöntemi uygulayan tarayıcılar kullanıcıyı özel yazı tipi yüklenene kadar metni göstermemenin kullanıcı deneyimi açısından kötü bir davranış olduğuna karar verdi. Bu durumu çözmek için kullanıcıyı bekletme süresine limit getirdiler. Bekleme süresi olarak 3 saniye belirlediler. Kullanıcı 3sn içinde özel yazı tipini yüklediyse yazıları tarayıp gösteriyor, 3sn içinde hala yüklenmediyse standart yazı tipi ile gösterip yüklendikten sonra tekrar tarayıp gösteriyor. Aslında bu ara bir çözüm 3 saniyeye kadar FOIT, 3 saniyeden sonra FOUT gibi davranıyor. 

Tarayıcıların bu konudaki tavırlarını gösteren liste aşağıdaki gibidir.

|Tarayıcı|Zaman aşım süresi|Standart|
|--------|-----------------|--------|
| Chrome | 3sn | FOIT |
| Opera | 3sn | FOIT |
| Firefox | 3sn | FOIT |
| Safari | 3sn | FOIT |
| IE/EDGE | 0sn | FOUT |

## Özel yazı tipi yükeleme peryotları

Yukarıdaki grafikte sıra özel yazı tipine gelmesi ve içerğin işlenmesi arasındaki zaman üçe bölünür. 

 - **Bloklama peryodu**: İlk periyod bloklama peryodudur. Eğer özel yazı tipi yüklenmemişse özel yazı tipini kullanacak eleman gizlenir. Eğer özel yazı tipi bu süre zarfında yüklenirse hemen uygulanır.
 
 - **Geçiş peryodu:** Bloklama peryodundan hemen sonra gelir. Özel yazı tipi bu peryodda da yüklenmemişse özel yazı tipini kullananan yerler standart yazı tipi ile işlenir. Eğer bu süre zarfında özel yazı tipi yüklenirse özel yazı tipi uygulanır.
 
 - **Başarısızlık peryodu:** Geçiş peryodundan sonraki peryoddur. Bu peryod başladığında hala özel yazı tipi yüklenmediyse özel yazı tipinin bulunamadığı anlamına gelir ve tarayıcı standart yazı tipi ile içeriği işler.


## font-display özelliği

font-display özelliği özel yazı tipi dosyalarının nasıl yükleneceği ve görüntüleneceğini belirler. @font-face tanımı içinde kullanılır. Özel yazı tipi peryotlarını yönetmemize olanak sağlar.

**Yapısı :** font-display: [ deger ]\\
**Aldığı Değerler :** auto | block | swap | fallback | optional\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** Belirtilen elemana\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi} 

 - **auto:** Özel yazı tipi yükleme stratejisine tarayıcı karar versin demektir. Çoğu zaman **block** değeri ile aynı davranır.

 - **block:** Özel yazı tipi yüklenene kadar metni gizler. Daha doğru bir anlatım ile tarayıcı metinleri görünmez bir yertutucu ile çizer ve yazı tipi yüklenince yazı tipinin belirlediği şekliyle tekrar çizer. FOIT davranışı sergiler.

 - **swap:** Blok peryodun olmadığı geçiş peryodunun süresiz olduğuğu tanım. Özel yazı tipi yüklenene kadar sisteminin standart yazı tipi ile göstermesini sağlar. FOUT davranışı.

 - **fallback:** `auto` ve `swap` arası bir davranıştır. Tarayıcı 100ms kadar metni gizle eğer yüklenmediyse standart yazı tipi ile gösterir. Yüklendikten sonrada özel yazı tipine geç.

 - **optional:** Tarayıcı 100ms kadar kısa bir süre özel yazı tipinin yüklenmesi bekler ve yüklenmediyse sistemde yüklü yazı tipi ile içeriği gösterir. **fallback** ile benzerdir. fallback'den farklı olarak geçiş süresi olmayan bir seçenektir.

`font-display` özelliği bize **FOUT** ve **FOIT** davranışlarını seçme ve harmanlama imkanı sağlıyor.

<iframe height='460' scrolling='no' title='font-display örnekleri' src='//codepen.io/fatihhayri/embed/GdJEqK/?height=460&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/GdJEqK/'>font-display örnekleri</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Test için yukarıdaki sayfayı ayrı bir pencerede açıp Chrome Dev Tools'dan bağlantı hızınızı **Slow 3G** yapıp sonrada **Empty Cache and Hard Reload** ile sayfayı yüklerseniz **font-display** özelliği değerleri arasındaki farkı görebilirsiniz.

Ayrıca [https://font-display.glitch.me/](https://font-display.glitch.me/) sitesindeki örnek ve Umar Hansa'nın [https://www.youtube.com/watch?v=yRrrL0Mg1pM&t=518s](https://www.youtube.com/watch?v=yRrrL0Mg1pM&t=518s) anlatımı uygulamada nasıl göründüğünü görmek için güzel kaynaklar.

<p class="ciu_embed" data-feature="css-font-rendering-controls" data-periods="future_1,current,past_1,past_2">  <a href="http://caniuse.com/#feat=css-font-rendering-controls">Can I Use css-font-rendering-controls?</a> Data on support for the css-font-rendering-controls feature across the major browsers from caniuse.com. </p>

## Sonuç

Tarayıcı desteği kousunda sorunlu. iOS'un 11.3 ile birlikte bu özelliği desteklemesi büyük avantaj. Samsung Internet desteği de gelirse süper olur. iOS 11.3'ün yaygınlaşmasından sonra da kullanılabilir. iOS sürümlerinin yayılması 3 ay aldığı düşünülürse 3 ay sonra(Temmuz 2018) kullanabiliriz.

Sağlıcakla kalın.

## Kaynaklar

 - [https://github.com/zachleat/web-font-loading-recipes](https://github.com/zachleat/web-font-loading-recipes)
 - [https://font-display.glitch.me/](https://font-display.glitch.me/)
 - [https://css-tricks.com/almanac/properties/f/font-display/](https://css-tricks.com/almanac/properties/f/font-display/)
 - [https://css-tricks.com/font-display-masses/](https://css-tricks.com/font-display-masses/)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)
 - [https://developers.google.com/web/updates/2016/02/font-display](https://developers.google.com/web/updates/2016/02/font-display)
 - [https://www.sitepoint.com/css-font-display-future-font-rendering-web/](https://www.sitepoint.com/css-font-display-future-font-rendering-web/)
 - [https://caniuse.com/#feat=css-font-rendering-controls](https://caniuse.com/#feat=css-font-rendering-controls)
 - [https://alligator.io/css/font-face/](https://alligator.io/css/font-face/)
 - [https://www.zachleat.com/web/comprehensive-webfonts/](https://www.zachleat.com/web/comprehensive-webfonts/)
 - [https://webkit.org/blog/6643/improved-font-loading/](https://webkit.org/blog/6643/improved-font-loading/)
 - [https://www.youtube.com/watch?v=yRrrL0Mg1pM&t=518s](https://www.youtube.com/watch?v=yRrrL0Mg1pM&t=518s)