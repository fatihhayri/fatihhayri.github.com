---
layout: post
title: (X)Html - CSS &#58; Başlıklar
Slug: basliklar
Date: 2007-07-30 13:14
categories: [CSS]
tags: [ardalan-kaydırmaca, başlıklar, CSS, css-sprite-tekniği, metin, metin yerine resim koymak, HTML]
---

Başlıklar bir siteye girdiğimizde dikkatimiziçeken ilk unsurlardandır.

Başlıkları sadece bir konunun başlığı olarak göremeyiz, onlar aynı
zamandaerişebilirlilik ve tasarım açısından da önemlidir.

Başlıklar normal metine göre daha büyük font değerlerinde ve farklı
renklerletanımlanır genelde. W3C başlıkları bir konunun kısa açıklaması
olarak algılarve ona göre davranır.

Bu önemle bahsedilen başlıkları nasıl kodlamalıyım? Web kodlamanın
önemli parçalarından biri olan başlıkların tanımlanması bu makalede
göreceğiz.

Başlık tanımlamanın bir çok yolu vardır. Biz web standartları ve iyi
kodlamaaçısından konuyu irdeleyeceğiz.

```html
<h1>CSS Dersleri</h1>
```

W3C başlıklarda kullanmamız için<h1\>,<h2\>,<h3\>,<h4\>,<h5\> ve
<h6\> olmaküzere 6 adet başlık çeşidini bizim kullanımımıza sunmuş.
Önem sırasına göresıralanmıştır, en önemlisi <h1\>'dir.

W3C'nin başlık etiketlerinin kullanımının bize sağladığı avantajları
sırası ile inceleyelim:

## Hiyerarşi

Başlıklar doküman hiyerarşisini sağlamamıza yardımcı olur. Bir çok
websitesinde başlıklar belli bir hiyerarşiye göre sıralanır ve bu
hiyerarşi metninanlaşılabilirliğini arttır ve sayfaları bir düzene
sokar. <h1\> ve<h6\> sıralaması hiyerarşi için biçilmiş kaftandır.
Örnek için [tıklayınız.][]

## Arama Motoruna Uygunluk

Arama motorları için <hx\>'ler çokkullanışlıdır. <hx\> kullanımında
arama motorlarıküçük çaba ile sayfadaki başlıkları öğrenebilmektedirler.

Arama motorları <title\> içindeki ve<meta\> etiketi içindeki
kelimeleri sayfa içinde ararlar bulamadıklarındao sayfayı sıralamadan
düşürürler. Ancak başlıkla ilgi üzerine çekilmişkelimeler arama
motorları için bir velinimettir. Tabi arama motorlarının bizimsitemizi
indekslemeside bizim için bir velinimettir.

## Kolay Şekillendirme

Kolay şekillendirilir. Çünkü <h1\> etiketi<b\> ve <p\> gibi CSS de
tekil olarak atama yapılan bir etikettir. Bunedenle CSS tanımlaması
kolay olacaktır.

<h1\> vd. başlıklar CSS tanımlaması olmasa dabaşlıklarınızı kalın ve
büyük font değerlerinde gösterecektir. Tüm araçlarda ve eskisürüm
tarayıcılarda başlıklar ayırt edilecektir.

Sayfalarımızda <h1\> kullanarak kolaylıksağlarız. Çünkü <h1\> tekil
etiketlerdendir. Eğer bir atama yaptıktansonra buna bir ekleme yapmak
istersek CSS ile bunu çok kolay yaparız Örneğin

```html
<h1>CSS Dersleri </h1>
```

Bu başlığın boyutunu, rengini ve font-şeklinideğiştirebiliriz CSS ile

```css
h1 {
	font-family: Arial, sans-serif;
	font-size: 24px;
	color: #369;
}
```

Biz burada çok basit bir şekilde tüm başlıklarıarial font, 24 piksel
boyut ve mavi renk ataması yaptık.

Daha sonra bu başlığın altına 1 piksel boyutundabir gri alt çizgi çizmek
istedik.

```css
h1 {
	font-family: Arial, sans-serif;
	font-size: 24px;
	color: #369;
	padding-bottom: 4px;
	border-bottom: 1px solid #999;
}
```

**padding-bottom** ile çizgi ile başlıkarasındaki boşluğu ayarladık ve
**border-bottom** değeri ile debaşlık altına çizgiyi çizdik.

## Değişebilir İkonlar

CSS'i kullanarak başlıklarımızın soluna zemin resmi olarak bir ikon
koyabiliriz. Bu metot ile başlıklardaki bir değişiklikile tüm sitedeki
başlıklar değişecektir. Ayrıca tüm başlıklar için kullanılacak ikonları
bir resim halinde hazırlanıp kullanım kolaylığı sağlanabilir. Bir örnek
yaparsak

![Başlıklar][]

Tüm başlıkların ikonları tek bir
resim olarak hazılranmış hali

Resim hazırlanırken ikon aralarındaki farkı orantılı ayarlar isek
kodlama yaparken bize kolaylık sağlayacaktır. Aşağıda bunu daha iyi
göreceğiz.

Html kodları:

<iframe height='368' scrolling='no' src='//codepen.io/fatihhayri/embed/myYpgg/?height=368&theme-id=13521' data-default-tab='result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

Sol tarafa ikon konduğu için yazı ile ikon arasındaki mesafeyi ayarlamak
için padding-left değeri40 piksel atanmıştır ve zemin resmi olarakta bir
resim tekrarsız olarak konmuş ve font değeri 34px ve satır yüksekliği
35px tanımlanarak ikon yazı oranı sağlanmıştır.

Dikkat ederseniz genelde her başlık için değişen sadece renk ve zemin
resmi konumudur. Aslında bu başlıklar için genel bir sınıflandırma yapıp
farklı özellikleri için her birine özel tanımlarda yapabilirdik.
Yukarıda yazdığımız kod daha genel bir kod yazımı için uygundur.

Örneği görmek için [tıklayınız.][1]

## MetinYerine Resim koyma Metodu ile Başlık Oluşturmak

Bazen başlıkları resim yapmamız gerektiğidurumlar olabilir bunun için
Metin Yerine Resim Koyma Metotlarından biriniuygulayabiliriz. Ayrıntılı
bilgi için "[Metin Yerine Resim/FlashEkleme Teknikleri (Image Replacement)][]" makalemize göz atın.

-   http://www.communitymx.com/content/article.cfm?cid=A1A37
-   http://www.paulmichaelsmith.com/blog/examples/headingicons/sample.php
-   eu.wiley.com/WileyCDA/WileyTitle/productCd-047009754X.html
-   [http://www.sitepoint.com/books/cssdesign1/][]
-   http://www.friendsofed.com/book.html?isbn=1590593812

  [tıklayınız.]: /dokumanlar/baslik_deneme1.html
  [Başlıklar]: /images/basliklar.gif
  [1]: /dokumanlar/baslik_deneme2.html
  [Metin Yerine Resim/FlashEkleme Teknikleri (Image Replacement)]: http://fatihhayrioglu.com/metin-yerine-resimflash-ekleme-teknikleri-image-replacement/
  [http://www.sitepoint.com/books/cssdesign1/]: http://www.sitepoint.com/books/cssdesign1/
