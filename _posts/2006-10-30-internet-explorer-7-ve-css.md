---
layout: post
title: Internet Explorer 7 ve CSS
Date: 2006-10-30 19:50
Category: CSS, Web Standartları
tags: [CSS, Internet-explorer7, ie7, microsoft, Web Standartları]
---

Internet Explorer 7 tam sürümü yayınlandı, peki bu yeni sürüm
bizlere(web kodlayıcılarına) ne kazandırıyor. Güvenlik açısından
yenilikler içeren IE7 eski versiyonlardaki CSS sorunlarının bir çoğunuda
çözmüş görünüyor. Bu bizim gibi kodlayıcılar için çok güzel bir gelişme,
IE gibi web tarayıcı pazarında %75'ni(değişik oranlar mevcut ben de
ortalamayı aldım) elinde bulunduran bir web tarayıcısının standartlara
daha uyumlu olması bizi sevindiriyor.

Bu makale IE7 ile çözülen CSS hatalarına bir göz atacağız.

Artık IE için ayrıca CSS kodlarımızı düzenlemeyeceğiz(Bir süre daha
kodlayacağız tabi IE 7 yaygınlaşana kadar). Buna sevinmeliyiz. IE7 ile
birlikte 200'e yakın CSS sorununu düzeltildiğini söylüyor Microsoft. Tüm
bu düzeltmelerin [<!DOCTYPE> switch][]'da çalıştığını [Garip Mod][<!DOCTYPE> switch]'da ise IE6 gibi yorumlayacağını söylüyor ona
göre.

## IE7 ile Düzelen Genel Sorunlar

-   **Peekaboo Sorunu** - İçinde uzunca bir metin, resim, link vb.
    içerik olan bir katmanımız olsun ve bu katmanın altında bir
    **clear:both** uygulanan bir bir katmanımız olsun. Firefox, Safari
    veya diğer yeni nesil tarayıcılarda bu kod sorunsuz çalışacaktır.
    Ancak Internet Explorer 6'da içerik bölümü görünmeyecektir.
    Ayrıntılı bilgi için [tıklayınız][].

-   **Giyotin Hatası** ' Float uygulanmış bir elementteki linklerin
    üzerine geldiğinizde kapsayıcı elementin altı kısmı kayboması
    sorunu. Ayrıntılı bilgi için [tıklayınız.][]

-   **Tekrarlayan Karakter Sorunu**-Bu hata birden fazla float
    uygulanmış içiçe elementlerde meydana gelir. Son float uygulanmış
    elementin son karakterleri alt tarafta tekrarlanır. Bu hatayı
    ayıklamak için ne yapabiliriz, ayrıntıları görmek için
    [tıklayınız.][1] (12/12/2006'da güncellendi)

-   **Kenarlık Kargaşası** ' Bu hata iki içiçe geçmiş blok-level
    elementlerde; negatif üst margin kulanıldığında ; son olarakta
    ikinci kutu veya üst element de kenarlık içermesi durumlarında
    meydana gelir. Ayrıntılı bilgi için [tıklayınız][2].

-   **Kaydrıma Çubuğu Çıkmama Sorunu** 'Kapsayıcı kutunun uzun içeriği
    olmasına karşın kaydırma çubuğunun çıkmaması ve alt kısımdaki
    içeriğin görünmemesi sorunudur. Ayrıntılı bilgi için
    [tıklayınız][3].

-   **3 Piksel Metin Öteleme Sorunu** ' Float uygulanmış elementlerdeki
    metine 3 piksel boşluk uygular ve element normal yerinden aşağı
    kayar. Bu hatayı ayıklamak için ne yapabiliriz, ayrıntıları görmek
    için [tıklayınız.][4] (10/12/2006'da güncellendi)

-   **Sihirli Gizli Metin Sorunu** 'Bu hataIE/5.5/6/Win meydana gelir.
    Bir biri içine geçmiş elementlerde ve aşağıdaki kodu içeren
    dışarıdaki elementlerde meydan gelir: Ayrıntılı bilgi için
    [tıklayınız][5].



```css
div {
  border-left: 1px solid red;
  padding-bottom: 1px;
}
```

-   **Line-height/Replaced Element Sorunu:** Eğer line-height uygulanmış
    bir satırda replaced element varsa line-height değeri sorunlu
    yorumlanacaktır. Ayrıntılı bilgi için [tıklayınız][6].

-   **Tekrarlanan Satır Başı Boşluğu Sorunu**
    Bu hata float uygulanmış katmanın yanındaki
    inline-elementlerde(metin ve resim) meydana gelir.
    Ayrıntılı bilgi için [tıklayınız][7].

-   **IE/Win'de Gözden Kaybolan List-background Sorunu**
    Bu hata Göreceli Konumlandırmalı floating uygulanmış bir liste
    elementine background uygulandığında meydana gelir. Ayrıntılı bilgi
    için [tıklayınız][8].

-   **Internet Explorer ve Genişleyen Kutu Problemi**
    Ayrıntılı bilgi için [tıklayınız][9].

-   **IE6'nınGarip Yüzde Sorunu**
    Ayrıntılı bilgi için [tıklayınız][10].

-   **IE ve İtalik Yazı Sorunu**
    Ayrıntılı bilgi için [tıklayınız][8].

-   **Kayıp İlk Harf Hatası**
    Ayrıntılı bilgi için [tıklayınız][11].

-   **Yanıltıcı Kutu Sorunu**
    Ayrıntılı bilgi için [tıklayınız][12].

## Diğer Düzeltilen Hatalar

-   **:hover** sadece linklere(a) değil tüm elementlere uygulanabiliyor
    (Bu sayede menu oluştururken IE için script yazmayacağız, tabi bunu
    için erken daha)
-   **Background-attachment: fixed** tüm elementlerde çalışıyor
-   **<\?xml\>** ön tanımlamasını **[Garip Mod][<!DOCTYPE> switch]**
    olarak algılamıyor artık
-   **Overflow** şimdi çalışıyor(Bunun anlamı kutular artık otomatik
    büyümeyecek.)
-   Derleyici Hataları : * html, _property and /**/ yorum hataları
    düzeltilmiş
-   Mutlak Konumlandırılmış elelmnetlerde genişlik auto
    left ve right değerlerindeki sorunlar giderilmiş
-   Belirli Göreceli Konumlandırma sorunları giderilmiş
-   Belirli Mutlak Konumlandırma sorunları giderilmiş
-   1 px noktalı(dotted) kenarlıklar atık çizgili(dashed) gibi
    yorumlanmayacak
-   birkaç negatif margin uygulamalrındaki sorunlar giderilmiş
-   Pseudo-sınıfları ve Pseudo-elementleri destekliyor (:first-letter,
    :first-line vd.)
-   **!important** sorunları giderilmiş
-   **List-item** boşluk sorunu giderilmiş
-   ve bir çok sorun giderilmiş.

Tüm liste için [tıklayınız][13].

## CSS2.1'deki yeni özellikleri destekliyor

-   Min/max width/height destekliyor
-   Transparent kenarlıkları destekliyor
-   Fixed konumlandırmayı destekliyor
-   PNG destekliyor
-   [Çocuk Seçiciler][] ve [Bitişik Kardeş Seçicileri][Çocuk Seçiciler]
    destekliyor.

## Kaynaklar

-   [http://blogs.msdn.com][13]
-   [http://www.devarticles.com][]
-   [http://www.webcredible.co.uk][]
-   [http://www.mezzoblue.com][]

  [<!DOCTYPE> switch]: https://fatihhayrioglu.com/dogru-doctype-kullanimi/
  [tıklayınız]: http://www.positioniseverything.net/explorer/peekaboo.html
  [tıklayınız.]: http://www.positioniseverything.net/explorer/guillotine.html
  [1]: http://fatihhayrioglu.com/?p=232
  [2]: http://www.positioniseverything.net/explorer/border-chaos.html
  [3]: http://www.positioniseverything.net/explorer/unscrollable.html
  [4]: http://fatihhayrioglu.com/?p=231
  [5]: http://www.positioniseverything.net/explorer/creep.html
  [6]: http://www.positioniseverything.net/explorer/lineheightbug.html
  [7]: http://www.positioniseverything.net/explorer/floatIndent.html
  [8]: http://www.positioniseverything.net/explorer/ie-listbug.html
  [9]: http://www.positioniseverything.net/explorer/expandingboxbug.html
  [10]: http://www.positioniseverything.net/explorer/percentages.html
  [11]: http://www.positioniseverything.net/explorer/firstletter.html
  [12]: http://www.positioniseverything.net/explorer/inlinelist.html
  [13]: http://blogs.msdn.com/ie/archive/2006/08/22/712830.aspx
  [Çocuk Seçiciler]: http://fatihhayrioglu.com/?p=62
  [http://www.devarticles.com]: http://www.devarticles.com/c/a/Web-Style-Sheets/CSS-Standards-Compliance-in-Internet-Explorer-7/
  [http://www.webcredible.co.uk]: http://www.webcredible.co.uk/user-friendly-resources/css/internet-explorer-7.shtml
  [http://www.mezzoblue.com]: http://www.mezzoblue.com/archives/2005/07/28/ie7_css_upda/
