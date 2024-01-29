---
layout: post
title: Kapsayıcı sorguları (container query)
description: Kapsayıcı sorguları (container query)
lang: tr_TR
Date: 2024-01-29 10:00
Category: CSS
tags: [container query, ]
image:
  feature: kapsayici-sorgulari.png
---

CSS'e gelen yeni özelliklerden birini daha inceleyip sizelere yazmanın sevinci içerisindeyim.  Dilimize kapsayıcı sorguları olarak çevirmeye çalışacağım. 

Bu özelliği duyunca daha önce [zingat'ta](https://www.zingat.com/) Murat Çorlu ile harita sayfasını kodlarken sağda harita solda haritadaki ilanların listelendiği ilan kartlarının olduğu bir yapıdaki tasarımı HTML'e dökmeye çalıştığımız zaman aklıma geldi. (Yazının ana resmindekine benzer bir sayfa yapısı)  Biz burada sağdaki harita ve yanındaki alanları dinamik olarak değiştirmek istedik. Yeterli alan varsa solda listelenen alanda 3 kolonlu bir yapı, daha az yer olduğunda 2 kolonlu yapı, daha da az yer olduğunda tek kolonlu bir yapı olsun ve en sonunda sadece haritanın kalacağı bir yapı düşündük. 

Bunu medya sorguları ile çözmek mümkün olmadı. Daha sonra bunu yapmak için bir JavaScript çözümü bulsak ta en son sabit bir genişlik ve 2 kolonlu kalsın deyip bırakmıştık. Kapsayıcı sorguların (container queries) çıkacağını ilk duyduğumda bu proje ve orada medya sorgularıyla uğraştığımız zaman aklıma geldi. Bu kadar girizgahtan sonra kapsayıcı sorgularının nasıl çalıştığına değinelim.

## Kapsayıcı sorguları nasıl kullanılır?

Kapsayıcı sorgularının genel teorisine ait tanımlara göz atalım.

### container-type

En yakın ebeveynine `container-type`  tanım yaparak başlıyoruz.  Bu tanım ile bu eleman bir kapsayıcı eleman olduğu belirtiliyor. Başlangıç değeri `normal`'dir.  Aslında tüm elemanlar birer stil kapsayıcısı (Bir yazıda da bu konuya gireriz) olduğu için `normal` değeri alır. `container-type`  tanımı iki adet daha değer alır.

 - `inline-size`: Metin akış ekseni olarakta tanımlayacağımız satıriçi(inline) eksen tanımıdır. **Genelde bu değer kullanılıyor.** 
 - `size`: Her iki eksende de kapsayıcının sorgulanabileceğini gösterir. Hem satıriçi hem de blok ekseninde sorgulama yapılmasını sağlar. 

```css
main {
	container-type: inline-size;
}
```

Bu tanımı yaptıktan sonra bu kapsayıcı içindeki elemanlara artık belli genişliğe göre sorgulayıp ona göre kod yazabiliyoruz. Örneğin `main` içindeki `.card-container` elemanına `1200px` genişliğe göre tanım yapalım:

```css
@container (min-width: 1200px) {
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
}
```

### container-name

Sayfa içinde birden fazla kapsayıcı tanımı yapıldığında karışmaması için isimlendirme seçeneği de var. İsimlendirme işini `container-name` tanımı ile yapıyoruz.  Bu tanım tarayıcıların işini kolaylaştırmak için tanımlanmıştır.  Tarayıcı hangi elemana kapsayıcı sorgusu uygulanacağını bilirse işi daha kolay oluyor. Yukarıdaki kodu buna göre güncellersek:

```css
main {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 1200px) {
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
}
```

### container kısayolu

Bu iki tanımı birleştiren bir kısayol da vardır. `container` tanımı bu iki tanımı birleştiren bir kısayoldur.

```css
main {
  container: card / inline-size;
}
```

**Sıralama önemli önce isim sonra tip.**

### Kapsayıcı Sorgu birimleri

Kapsayıcı sorguların terorisine ait son bilgi de kapsayıcı sorgu birimleri

Kapsayıcı sogrularını kendine ait birimleri vardır. Bu birimler görüş alanı birimlerine viewport (`vw`, `vh`, `vmin`, vd.) benzerdir. Tabi burada bakış alanına değil de kapsayıcıya göre işlem yapılır.  

-   `1cqw`  -  Sorgusu yapılan kapsayıcı genişliğinin `1%` 'ine karşılık gelir.
-   `1cqh`  -  Sorgusu yapılan kapsayıcı yüksekliğinin `1%` 'ine karşılık gelir.
-   `1cqi`  -  Sorgusu yapılan kapsayıcı satıriçi ekseninin `1%` 'ine karşılık gelir.
-   `1cqb`  -  Sorgusu yapılan kapsayıcı blok ekseninin `1%` 'ine karşılık gelir.
-   `1cqmin`  - `cqi`  ve  `cqb`'nin en düşük değeri
-   `1cqmax`  - `cqi`  ve  `cqb`'nin en büyük değeri

## Kapsayıcı sorgu örnekleri

Peki zingat'taki ihtiyacımızı bu öğrendiklerimize göre yapmaya çalışalım.

<iframe height="500" width="100%" style="width: 100%;" scrolling="no" title="container query" src="https://codepen.io/fatihhayri/embed/eYXWrEY?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/eYXWrEY">
  container query</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki codepen örneğinde zoom seviyesi ile oynayarak ta etkiyi görebiliriz.

Mobile öncelik verdiğimiz için diğer şartlar için kod yazdık.

```css
.card-container {
  grid-template-columns: 1fr;
}

@container card (min-width: 1200px) {
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
}

@container card (min-width: 1700px) {
  .card-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

Mükemmel. Mükemmel. Mükemmel.

## Bileşen yapısına geçiş 

Kapsayıcı sorguları genelde yukarıdaki yapıda kullanmak için düşünülüyor ancak youtube'da [Maarten Van Hoof](https://www.youtube.com/watch?v=A2dMca3WrJE) yaklaşımını görene kadar. 

Web dünyasında son zamanların popüler kullanımı olan bileşen yapılarını birçoğumuz kullanıyoruz. Kapsayıcı sorgularıyla bu konunun ne alakası var derseniz. Farklı ekipler için geliştirdiğimiz bir bileşeni düşünelim. Örneklere kart yapısından başladığımız için yine bir kart bileşeni kodluyoruz. Bu bileşeni sayfa içinde, sağ kolonda ve detay durumlarının olduğunu düşünelim. Büyük projelerde bu tip işler büyük sorun oluyor. Kapsayıcı sorguları bu sorunu da çözüyor.

Max Böck'ün codepen.io örneği bu konuyu ve tanımları anlamak için mükemmel bence. 3 kolonlu bir yapı var. Solda öne çıkan kitap, ortada en çok satan kitaplar listesi ve sağda da alışveriş sepeti var. Bu ögeleri tutup taşıyabiliyoruz. 

<iframe height="610" width="100%" style="width: 100%;" scrolling="no" title="Container Query Bookstore" src="https://codepen.io/mxbck/embed/XWMrMOp?default-tab=result&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mxbck/pen/XWMrMOp">
  Container Query Bookstore</a> by Max Böck (<a href="https://codepen.io/mxbck">@mxbck</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Yukarıdaki kart bileşeni 3 yerde kullanılıyor. Herbiri için ayrı ayrı tanım yapıp kodlamak yerine kapsayıcı sorguları ile çözebilmek bileşen yapılı sistemlerde mükemmel bir şey.

## Geliştirici araçlarındaki görünüm

Chrome ve Firefox'da aşağıdaki gibi bir etiketleme var. Safari'de göremedim.

![dev tools container query](https://fatihhayrioglu.com/images/container-query-devtools.png)

## Tarayıcı desteği

Popüler ve çok kullanılan tarayıcıların desteği var.  Bu yazıyı yazdığımda Türkiye'deki destek oranı %94.7 olarak görünüyordu. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://ishadeed.com/article/container-queries-are-finally-here/](https://ishadeed.com/article/container-queries-are-finally-here/)
 - [https://www.youtube.com/watch?v=gCNMyYr7F6w](https://www.youtube.com/watch?v=gCNMyYr7F6w)
 - [https://webkit.org/blog/12824/news-from-wwdc-webkit-features-in-safari-16-beta/](https://webkit.org/blog/12824/news-from-wwdc-webkit-features-in-safari-16-beta/)
 - [https://developer.apple.com/videos/play/wwdc2022/10048/](https://developer.apple.com/videos/play/wwdc2022/10048/)
 - [https://www.oddbird.net/2021/04/05/containerqueries/](https://www.oddbird.net/2021/04/05/containerqueries/)
 - [https://www.youtube.com/watch?v=zVR1WBGWVT8](https://www.youtube.com/watch?v=zVR1WBGWVT8)
 - [https://www.sarasoueidan.com/blog/component-level-art-direction-with-container-queries-and-picture/](https://www.sarasoueidan.com/blog/component-level-art-direction-with-container-queries-and-picture/)
 - [https://mxb.dev/blog/container-queries-web-components/](https://mxb.dev/blog/container-queries-web-components/)
 - [https://piccalil.li/blog/container-queries-are-actually-coming/](https://piccalil.li/blog/container-queries-are-actually-coming/)
 - [https://www.youtube.com/watch?v=A2dMca3WrJE](https://www.youtube.com/watch?v=A2dMca3WrJE) 
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)
 - [https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/](https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/)
 - [https://blog.logrocket.com/css-container-queries-guide/](https://blog.logrocket.com/css-container-queries-guide/)
 - [https://caniuse.com/css-container-queries](https://caniuse.com/css-container-queries)
 - [https://web.dev/blog/cq-stable?hl=en](https://web.dev/blog/cq-stable?hl=en)
 - [https://medium.com/kodcular/css-container-sorgular%C4%B1-50f1163fb23d](https://medium.com/kodcular/css-container-sorgular%C4%B1-50f1163fb23d)
 - [https://developer.chrome.com/docs/devtools/css/container-queries?hl=en](https://developer.chrome.com/docs/devtools/css/container-queries?hl=en)
 - [https://www.learnwithjason.dev/demystifying-css-container-queries/](https://www.learnwithjason.dev/demystifying-css-container-queries/)
 - [https://x.com/jh3yy/status/1734300848547627030?s=20](https://x.com/jh3yy/status/1734300848547627030?s=20)
 - [https://x.com/chriscoyier/status/1650636630401662980?s=20](https://x.com/chriscoyier/status/1650636630401662980?s=20) Takvim örneği
 - [https://moderncss.dev/container-query-units-and-fluid-typography/](https://moderncss.dev/container-query-units-and-fluid-typography/?utm_source=pocket_reader)
 - [https://x.com/Robby_WebDesign/status/1622339281598676993?s=20](https://x.com/Robby_WebDesign/status/1622339281598676993?s=20) pagination örneği
 - [https://codepen.io/kevinpowell/pen/RwvWoLg](https://codepen.io/kevinpowell/pen/RwvWoLg)
 - [https://x.com/ChromiumDev/status/1742727550579691789?s=20](https://x.com/ChromiumDev/status/1742727550579691789?s=20)
 - [https://codepen.io/collection/XQrgJo?cursor=eyJwYWdlIjozfQ==](https://codepen.io/collection/XQrgJo?cursor=eyJwYWdlIjozfQ==) Miriam’s CodePen collection
 - [https://x.com/FrontendHorse/status/1412060617398177794?s=20](https://x.com/FrontendHorse/status/1412060617398177794?s=20)