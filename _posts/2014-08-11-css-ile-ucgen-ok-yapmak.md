---
layout: post
title: CSS ile üçgen ok yapmak
Date: 2014-08-11 17:17
Category: css
tags: [css ok]
---

CSS'in web'in görselliğini tek başına karşılama hedefi ve bu yönde bize kazandırdığı yöntemler biz kod yazarlarının elini güçlendiriyor. CSS3 ile bunu daha çok hissetmeye başladık.

CSS 3'ün hayatımıza girmesi ile birlikte daha az resim işleme programı(Photoshop) kullanıyoruz. Bir çok görsel işlevi CSS özellikleri ile yapıyoruz artık. 

Üçgen okları CSS ile yaparak hız ve esneklik kazanıyoruz. Aslında bu özellik CSS3 ile gelmedi zaten CSS2.1 ile yaptığımız kenar çizgisi(border) tanımını kullanarak yapacağız. 

Tarayıcılar kenar çigizisi tanımlarını işlerken köşelerini belli bir açı ile kapatıyor. 

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/qCLuJ?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Yukarıdaki kodlama sonucunda görüldüğü gibi tarayıcılar kenar çizgisi tanımlarını eğer içerik boş ise üçgen bir ok gibi yorumluyor. Bu görselliği kullanarak istediğimiz üçgen oklarımızı elde edebiliriz.

Aşağıdaki gibi bir konuşma balonunu hiç resim kullanmadan sadece CSS kullanarak elde edebiliriz.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/hJBjA?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Yukarıdaki kodu incelersek; 

 1. **Boyut tanımı**: İlk olarak genişlik ve yükseklik tanımı yapıyoruz. Eğer eşit genişlik ve yükseklikte bir ok olacak ise; Seçilen yöne 0 değeri, seçilen yönün tersine okun yüksekliğini, diğer yönlerede ok genişliğinin yarısı değer veriyoruz. Örneğin aşağı ok yapacak ise **30px 15px 0 15px** tanımı yapılır.
 2. **Renk tanımı**: İstenilen tarafın ters yönüne belirlenen renk tanımı yapılır, diğer köşeler **transparent** tanımlanır. Örneğin **#40DBE5 transparent transparent transparent**
 3. **Konumu tanımı:** Oku yerleştirmek için genelde **:before** ve **:after** seçicileri kullanılır. Örnekte görüldüğü gibi **:after** seçicisi **absolute** konumlandırma ile sağ /alt köşeye konumlandırılmıştır. Öğenin altına konacak okun alttan değeri kendi yüksekliği kadar eski değeri tanımlanır.

Farklı boyutlarda oklar üretmek mümkün. Değerlerle biraz oynayarak istediğimiz görsellikte sonuçlar elde edebiliriz.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/DIbrn?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Ara yönlerde ok üretmek de mümkün. Aşağıda sağ üst köşeye tanımlanmış bir ok görülüyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/mrjsB?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

## Kenar çizgili(border) oklar üretmek

Web sitemizde bazen okları kenar çizgisi ile kullanmak isteyebiliriz. Sadece CSS ile bunu çözmek mümkün. Yukarıdaki örneklerden birisine kenar çizgisi ekleyerek bu durumu göstermeye çalışalım. Mantık aslında aynı, iki ok oluşturup kenar çizgisi olarak kullanacağımız oku kenar çigisi genişliği kadar büyük yapmaktan geçiyor yöntem. Konumlandırırken de bu durumu göz önüne almak gerekiyor.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/JhrdC?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Yukarıdaki örnekten farklı olarak **:before** ile kenar çizgisini ekledik. Normal okumuzun genişliği **15px** iken buna **1px**'lik kenar çizgisi eklemek için ikinci oluşturduğumuz okumuzu(kenar çigisi) **16px** üretiyoruz. Siz eğer farklı kenar çigisi boyutu kullanacak iseniz ona göre genişliği belirlemelisiniz. 

konmulandırma yaparkende **1px**'lik oynamalar yaparak sonuca ulaşıyoruz.

## CSS ile ok oluşturuken yararlı olacak bazı ipuçları

1 - Oluşturduğumzu okun tıklamasını engellemek için

{% highlight css %}
pointer-events: none;
{% endhighlight %}

eklemekte yarar var.

2 - Firefox yorumlamasında köşelerde grilikler oluşursa

{% highlight css %}
border-style: inset
{% endhighlight %}
    
eklemekte yarar var.

3 - webkit tabanlı tarayıcılarda daha yumuşak kenarlar için

{% highlight css %}
-webkit-transform:rotate(360deg)
{% endhighlight %}
    
eklenmesi öneriliyor.

## Çevrimiçi CSS ile ok yapma araçları 

Ben ok yaparken genelde [http://apps.eky.hk/css-triangle-generator/](http://apps.eky.hk/css-triangle-generator/) sitesini kullanıyorum. Ayrıca [http://cssarrowplease.com/](http://cssarrowplease.com/) sitesi de güzel. 

Kullanmanızı öneririm.

## Sonuç

CSS'in güçlenmesi ile görsel bir çok işimizi kod yazarak halledebilmek bizim için büyük nimet. Bu nimetlerden yararlanmakta fayda var. Bir elemente bu şartlarda iki ok(:before ve :after ile) ekleme imkanımız olduğu unutulmamalıdır.

Sadece üçgen ok değil farklı şekillerde elde etmek mümkün bu yöntem ile.

Kalın sağlıcakla.

## Kaynaklar

 - [http://jonrohan.me/guide/css/creating-triangles-in-css/](http://jonrohan.me/guide/css/creating-triangles-in-css/)
 - [http://css-tricks.com/snippets/css/css-triangle/](http://css-tricks.com/snippets/css/css-triangle/)
 - [http://stackoverflow.com/questions/18456331/how-can-i-create-an-arrow-using-only-css](http://stackoverflow.com/questions/18456331/how-can-i-create-an-arrow-using-only-css)
 - [http://codeitdown.com/css-triangles-responsive/](http://codeitdown.com/css-triangles-responsive/)
 - [http://css-tricks.com/adobe-like-arrow-headers/](http://css-tricks.com/adobe-like-arrow-headers/)
 - [//codepen.io/minimalmonkey/pen/KIaGD](//codepen.io/minimalmonkey/pen/KIaGD)