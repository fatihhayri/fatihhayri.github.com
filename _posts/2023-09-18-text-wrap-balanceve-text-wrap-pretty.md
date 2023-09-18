---
layout: post
title: Yeni text-wrap değerleri balance ve pretty
description: Yeni text-wrap değerleri balance ve pretty
lang: tr_TR
Date: 2023-09-18 10:30
Category: CSS
tags: [balance, pretty]
image:
  feature: text-wrap-banner.png
---

Tipografi çok önemli ve eski bir alan web'in bu konudaki gelişmeleri mevcut yazılı mecraya göre geride kalıyor. Tabi tarayıcı geliştiricileri olabildiğince bu alanın ihtiyaçlarını görmek için çabalıyor. Metinlerdeki dul (widow) ve yetim (orphan) sorunları tipografinin sorunları ve bunlara çeşitli çözümler üretiliyor. Web'de bu konuya el atma gerekiği hissederek bizlere yeni özellikler kazandırıyor.

 > Paragraf diziliminde yapılan yanlışlardan biri de dul (widow) ve yetim (orphan) sözcüklerdir. Paragraf veya kolon sonlarındaki oldukça kısa sözcüklere ya da hecelere dul sözcükler, paragraf veya kolonların başlangıç satırında görülen kısa sözcüklere ya da hecelere yetim sözcükler denilmektedir. Bu iki sorun da yarattıkları fazla boşluk nedeniyle okuyucunun gözünü rahatsız edip okumanın akışını bozmaktadır.  - KİTAP ve e-KİTAP TASARIMININ TARİHSEL GELİŞİMİ ve GRAFİK TASARIM İLKELERİ ÜZERİNDEN İNCELENMESİ

![text orpham & widow](https://fatihhayrioglu.com/images/dul-yetim.png)

Genelde bu sorunla tasarımcıların gönderdiği tasarımların güzel ancak kodladıktan sonra o kadar da güzel görünmeyen başlıklarında karşılaşıyorduk.

Tasarımcı sadece statik bir başlık ile tasarımı hazırladığı için orada sorun oluşmazken kod yazıp içerik dinamik hale gelince beklenenden farklı bir durumla karşılaşırız. Tabi gelen "acaba ne yapabiliriz?" sorusuna genelde yapacak bir şey yok CSS ve tarayıcıların bu konuda yetenekleri sınırlı deyip geçiyorduk. 

Yazı alanlarının önemli olduğu projelerde ise eğer içerik statik ise `<br>` ile çözüm oluştururken dinamik çözümler için Javascript'i tercih ediyorduk. 

 > Konuyu araştırırken React için [React Wrap Balancer](https://react-wrap-balancer.vercel.app/) çözümü olduğunu gördüm. Mevcut durumda tarayıcı desteği gelene kadar kullanılabilir.

İşin geçmişi uzun hikaye okumak isteyen için kaynaklardaki [https://www.ctrl.blog/entry/text-wrap-balance.html](https://www.ctrl.blog/entry/text-wrap-balance.html) makalesine göz atabilirsiniz.  Özetlersem;  Adobe bir algoritma geliştiriyor, sonra New York Times'ın daha basit bir algoritma üretiyor.  En son gördüğüm kadar [Knuth-Plass](https://github.com/bramstein/typeset/)'ın algoritmasının daha iyi olduğu yazılıyor.

Tarayıcılar başta bu hesabın maliyetinden kaçınıyor ve kapsayıcı genişliğine kadar sığan kelimeleri sıralayıp sığmadığı yerden itibaren aşağı atıyor. (Bu şu anda `text-wrap: auto` davranışı) Tarayıcılar bu konuya eğiliyor ve `text-wrap: balance;` tanımı ortaya çıkıyor.

<iframe height="600" style="width: 100%;" scrolling="no" title="text-wrap: balance" src="https://codepen.io/fatihhayri/embed/qBLjbwK?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/qBLjbwK">
  text-wrap: balance</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki örnekte görüldüğü gibi eğer tarayıcınız destekliyorsa fark açık. Uygulamalarda ortalı başlıklarda güzel sonuçlar veriyor. Sola yaslı başlıklarda sağ taraf çok boş kalıyor bence çok hoş durmuyor.

 > 6 satırlık bir kısıtlama var. En fazla 6 satıra kadar olan metinlerde çalışıyor. Bu sınırdan dolayı sadece başlıklarda kullanmak öneriliyor.

Başlıklar için ideal bir çözüm. Peki normal metinlerde nasıl bir çözüm olacak? Burada Chrome ekibinden bir çözüm önerisi olarak yeni bir tanım geldi.

## text-wrap: pretty

Chrome ekibi `text-wrap: pretty` tanımını çıkardı. Çıkardı diyorum çünkü fırından yeni çıktı. Yazıyı yazdığımda Chrome 117 ile birlikte çıkan özellikler arasında. Bu özellikte aşağı kayan **bir kelime** sorunlarını çözüyor. Aşağıda bir kelime kaldığı durumlarda iki veya daha fazla kelime kalmasını sağlıyor. 

![text-wrap balance pretty](https://fatihhayrioglu.com/images/text-wrap.png)
Yukarıdaki örnekte normalde "çözüm" kelimesi aşağıda kalırken `pretty` tanımınlandığında "pratik çözüm" alt satıra atılarak bir denge sağlanmış.

Bu öğrendiklerimizden sonra aşağıdaki gibi kod önerisi mantıklı görünüyor.

```css
* {
	text-wrap: pretty 
}

h1, h2, h3 {
	text-wrap: balance; 
}
```
Kaynak: [https://x.com/belldotbz/status/1671545872838979586?s=20](https://x.com/belldotbz/status/1671545872838979586?s=20)

Bu tanımların bize kazandırdıklarını sıralarsak;

 - Daha okunabilir başlıklar ve metinler oluşturmamızı sağlıyor.
 - Esnek yapılarda(responsive) metinlerimiz daha uyumlu davranmasını sağlıyor.
 - Bunu sadece bir satır CSS kodu ile yapma kolaylığını bize sunuyor

Bu konu için her ne kadar çözümler çıksa da tam net çözüm için biraz daha geliştirme gerekiyor. Tarayıcıların geliştirmelerini bekleyip göreceğiz.

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.chrome.com/blog/css-text-wrap-balance/](https://developer.chrome.com/blog/css-text-wrap-balance/)
 - [https://ishadeed.com/article/css-text-wrap-balance/](https://ishadeed.com/article/css-text-wrap-balance/)
 - [https://www.ctrl.blog/entry/text-wrap-balance.html](https://www.ctrl.blog/entry/text-wrap-balance.html)
 - [https://x.com/belldotbz/status/1671545872838979586?s=20](https://x.com/belldotbz/status/1671545872838979586?s=20)
 - [https://nerdy.dev/css-text-wrap-balance](https://nerdy.dev/css-text-wrap-balance) Arap alfabesi ve Çin alfabesindeki örnekler güzel
 - [https://clagnut.com/blog/2424/](https://clagnut.com/blog/2424/) Derin mevzular
 - [https://www.js-craft.io/blog/text-wrap-balance-in-css/](https://www.js-craft.io/blog/text-wrap-balance-in-css/)
 - [https://x.com/chriscoyier/status/1681407724993798144?s=20](https://x.com/chriscoyier/status/1681407724993798144?s=20) Chris Coyier'den güzel bir tweet akışı
 - [https://www.amitmerchant.com/text-wrap-pretty-in-css/](https://www.amitmerchant.com/text-wrap-pretty-in-css/)
 - [https://www.youtube.com/watch?v=snKm-VzJCOo](https://www.youtube.com/watch?v=snKm-VzJCOo)
 - [https://levelup.gitconnected.com/text-wrap-balance-a-revolutionary-new-css-feature-balances-text-2b2782257726](https://levelup.gitconnected.com/text-wrap-balance-a-revolutionary-new-css-feature-balances-text-2b2782257726)
 - [KİTAP ve e-KİTAP TASARIMININ TARİHSEL GELİŞİMİ ve GRAFİK TASARIM İLKELERİ ÜZERİNDEN İNCELENMESİ](https://earsiv.anadolu.edu.tr/xmlui/bitstream/handle/11421/6611/96403.pdf) - PDF
