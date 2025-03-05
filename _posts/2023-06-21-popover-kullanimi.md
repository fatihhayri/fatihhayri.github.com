---
layout: post
title: Popover API
description: Popover API kullanımı ve detayları
lang: tr_TR
Date: 2023-06-21 14:30
Category: HTML
tags: [dialog, popover, html, api]
---

[Trendyol'da Baklava design sistemi](https://github.com/Trendyol/baklava) geliştiriyoruz ve kullanıyoruz. Geçenlerde bir diyalog açıkken bir toast mesajı geldiğinde diyalog elementinin dışında kalan alanların üzerini kapattığımız elemanın (backdrop) altında kalıyor. Burada şöyle bir sorun var biz modal bileşeni için HTML `<dialog>`elementini kullanıyoruz. Bu elementin backdrop özelliği dokümanın z-index yapısından etkilenmemek için üst katman (aşağıda daha fazla detay var) adı verilen HTML dokümanı ile aynı seviyede bir yere konumlanıyor. Böyle olunca doküman içindeki herhangi bir elemanınızın üste çıkma ihtimali kalmıyor. Peki bu sorunu aşmak için ne yapabiliriz? Biraz araştırınca Popover API ile karşılaştık. Popover API `<dialog>` elementi ile aynı seviyede olduğu için z-index sorununu çözüyor. Tabi buradaki sorun henüz tarayıcıların bu özelliği yeni yeni desteklemeye başlıyor olması. Bir ihtimal olarak [polyfill](https://github.com/oddbird/popover-polyfill) ile çözüm oluşturulabilir.

**Popover** elemanı web sayfalarında genel olarak kullanılan yapılardır. Sayfa içeriğinin üzerinde kullanıcının dikkatini çeken bir alan oluşturup, kullanıcıyı bilgilendirmek veya aksiyon almak için oluşturulan yapılar olarak tanımlayabiliriz. Datepicker, tooltip, selectmenu, toast mesajları, form alanlarında kullanılan otomatik doldurma alanları ve öğretici yapılar popover için örnek kullanım alanları olarak gösterilebilir.

## Üst katman  (top layer)

Gerek dialog ve gerekse popover tanımları ile tanımlanan bu elemanlar en üst seviye z-index'e sahip oluyor ve `<html>` elemanına kardeş seviyede konumlanıyor. Doküman içindeki z-index değerleri ile bu elemanın üzerine çıkamıyoruz. Bir nevi kendine has bir alan oluşturmuş oluyoruz. Üst katman içindeki elemanlar ise aralarındaki sıralamaya göre görünürler.

![google chrome top layer görünümü](https://fatihhayrioglu.com/images/ust-katman.png)

Üst katmanlar tarayıcı kontrolünde olduğu için geliştiriciler olarak bizim bir elemanı oraya taşıma veya çıkarma imkanımız yok.(Umarım ilerde bu yönde bir değişiklik olur.) Bir elemanı üst katmana koymak için `<dialog>`, `popover` veya Fullscrean özelliğinden biri olarak tanımlamak gerekiyor.

## dialog & popover farkları

Daha önce bahsettiğim `<dialog>` elementi ile popover'un ne farkı var diye bir soru geliyor ilk başta. 

`<dialog>`elementi sayfadaki diğer içerik ile bağın koparıldığı ve backdrop ile belki de diğer içeriğin üzerinin kapatıldığı yapılar için kullanılır. Kullanıcının tüm odağı açılan diyalog içeriğine yönlendirilir ve sayfadaki diğer ögelerin kullanılmasına izin verilmez. Örneğin Son kararınız gibi onay isteyen yapılar, Doldurulmadan geçilmesi istenmeyen form alanları gibi.

`<dialog popover>`ise açılan alanın önceliği olsa da kullanıcının diğer içeriklerden uzak kalması ve kopması istenmeyen durumlarda kullanılır.

## Popover API kullanımı

Popover API'ın kullanımı çok basittir.

```html
<button
	popovertarget="fazla-bilgi"
	popovertargetaction="toggle">
		Bilgi ver
</button>

<div id="fazla-bilgi" popover>
	<p>Daha fazla bilgi verilir.<p>
</div>
```
popover olacak elemana bir id (**my-popover**) verilir ve `popover` özniteliği eklenir. Açacak olan butona hedef olarak bu id verilir. `popovertarget="my-popover"`

 - **popover**:  özniteliği tanımlandığı elemanı bir popover elemanı haline getirir.
	 - **auto**: (başlangıç değeri) popover elemanı dışına tıklandığında veya esc tuşuna basıldığında kapanır.
	 - **manuel:** Bu tanım yapıldığında dışa tıklandığında ve esc'e basıldığında yapılacak kapama işlemlerini javascript ile bizim yapmamız gerekir.
 - **popovertarget** tanımlandığı`<button>` veya `<input>` elemanlarını popover kontrol elemanı haline dönüştürür.  Kontrol edilecek popover'un id'sini değer olarak alır.
 - **popovertargetaction** `<button>` veya `<input>` gibi kontrol elemanlarının popover üzerindeki aksiyonlarının nasıl olacağını belirler. 
	 - **toggle:** (başlangıç değeri) Popover'ın açıksa kapatmak, kapalı ise açmaya yarayan aksiyondur.
	 - **show:** Popover elemanını açar
	 - **hide:** Popover elemanını kapatır

Bunların dışında popover elemanını stillendirmek için bir adet sözde sınıf bir adet sözde element vardır. 

 - **::backdrop** - `<dialog>`elementinde bildiğimiz bir sözde element. Popover'ın arakasında tam ekran açılan bir elemandır. Bu tanım bize animasyon ve stillendirme yapma imkanı sağlıyor.
 - **:popover-open** sözde sınıfı popover elementinin görünür olduğu durumu yakalamak için kullanılır. Bu tanım ile popover elemanının açık olduğundaki stillendirmeyi yaparız.

Bunların dışında popover elemanını javascript kontrol ve metodları da vardır.

 - **PopoverElement.hidePopover()** - Popover elemanını gizler. Aslında bu bir `display:none` tanımlamak gibidir.
-   **PopoverElement.showPopover()** - Popover elemanını görünür hale getirir.
-   **PopoverElement.togglePopover()** - Popover elemanını görünür ise gizler gizli ise görünür hale getirir.

Bunların dışında 2 adet de event vardır.

-   **beforetoggle** - Popover elemanının gizle/göster değişiminden önceki tetiklenen event'tır.
-   **toggle** - Popover elemanının gizle/göster değişiminden sonra tetiklenen event'tır.

## Erişebilirlik

Bu tip API bileşenlerinin en güzel yanı bir çok projede unutulan erişilebilirlik durumları bu bileşenlerle birlikte hazır gelmesidir. Yaptığımız bir çok projede erişebilirlik süreçleri genelde olmaz veya yönetilmez.

Sayfadaki diğer ögelerin önemi gözetilmeksizin popover açılan alanların odakları her daim ilk sıradadır. Kullanıcı odakları bu alana çekilir. 

Açılan alanlar herhangibir javascript gereksinimi olmadan ESC tuşuna basınca kapanır. 

## Tarayıcı desteği

Daha yeni yeni desteği geliyor. Şu an Chrome'da (114) aktif Safari 17 ile birlikte desteği geliyor. Firefox ise henüz flag ile destekliyor.

## Sonuç

Bu tip API elementlerinin gelmesi güzel oluyor. Tabi hala tarayıcı desteği eksik ve gelişmesi gereken yönleri var. Örneği açarken ve kapatırken animasyon tanımları yapamıyoruz. Chrome ekibi bu yönde çalışmaları (`@starting-style`) var.

Ayrıca Murat Çorlu'nun verdiği bilgilere göre popover elemanlarının görünür alanda kalmasını sağlayacak `@position-fallback` diye bir özelliğinde geleceğinden bahsetti. Umarım bir an önce gelir ve desteği artar. Bu konu aslında **[Anchor positioning](https://developer.chrome.com/blog/whats-new-css-ui-2023/?utm_source=CSS-Weekly&utm_campaign=Issue-550&utm_medium=web#anchor-positioning)** konusunun bir parçası. Umarım en kısı sürede tarayıcı desteği artar ve kullanmaya başlarız.

Kalın sağlıcakla.

## Kaynaklar

 - [https://ryantrimble.com/blog/the-popover-api-is-exciting-sort-of/](https://ryantrimble.com/blog/the-popover-api-is-exciting-sort-of/)
 - [https://developer.chrome.com/blog/introducing-popover-api/](https://developer.chrome.com/blog/introducing-popover-api/)
 - [https://developer.mozilla.org/en-US/docs/Web/API/Popover_API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
 - [https://dev.to/link2twenty/future-of-css-popover-api-3ba0](https://dev.to/link2twenty/future-of-css-popover-api-3ba0)
 - [https://hidde.blog/dialog-modal-popover-differences/](https://hidde.blog/dialog-modal-popover-differences/) dialog popover farkı
 - [https://hidde.blog/positioning-anchored-popovers/](https://hidde.blog/positioning-anchored-popovers/)
 - [https://youtu.be/XaO2mZnIOzs](https://youtu.be/XaO2mZnIOzs) Dialog dilemmas and modal mischief: a deep dive into popovers - Hidde de Vries - CSS Day 2023
