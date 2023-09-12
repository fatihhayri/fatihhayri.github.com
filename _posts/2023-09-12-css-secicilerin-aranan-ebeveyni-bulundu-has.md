---
layout: post
title: CSS seçicilerin aranan ebeveyni bulundu :has()
description: CSS seçicilerin aranan ebeveyni bulundu :has() parent seçicisi
lang: tr_TR
Date: 2023-09-12 13:30
Category: CSS
tags: [ebeveyn-seçicisi, parent]
image:
  feature: ebeveyne-kavusma.webp
---

CSS'de en çok ihtiyaç duyduğumuz özelliklerden birisiydi ebeveyn (parent) seçicisi. Bir ögenin içindeki elemana olup bitene göre CSS tanımı yapma isteği uzun süredir beklenen bir özellikti. [Daha önceleri şöyle bir savunma vardı](https://snook.ca/archives/html_and_css/css-parent-selectors): Tarayıcılar CSS'i yorumlarken dokümanı aşağı yönlü yorumluyor, bundan ötürü bir elemanın yukarı yönlü elemanını seçmesi için tüm ebeveynlere erişmesi gibi durumlar söz konusudur ve bu performans açısından sıkıntılara neden olur. Tabi tarayıcılar son yıllarda ciddi gelişim gösterdi ve bu kabulleri de aşacak çözümleri sunmaya başladılar. 

Ebeveyn seçicisi aslında çoğu zaman ihtiyacımız olan bir seçici olmasa da lazım olduğunda 'ah be olsaydı ne güzel olurdu' diye içimizden geçirdiğimiz bir seçici. 

## Nasıl kullanılır?

`:has()` ebeveyn seçicisi nasıl kullanılır? Örnekle anlaşılması daha kolay olacak.

```html
// cocuklu aile
<div class="aile">
	<div>
		<div class="cocuk"></div>
	</div>
</div>

// cocuksuz aile
<div class="aile"></div>
```

Yukarıdaki kodda çocuklu ailelere özel kampanya yapmak istersek :)

```css
.aile:has(.cocuk) {
	animation: partiZamani 21s linear;
}
```

Yukarıdaki kodda hedef `.aile` elemanı koşul ise `.cocuk`var mı? yok mu? Koşulun gerçekleştiği durumda tanım uygulanacak.

### Tablo örneği 

`:has()` seçicisini duyalı çok oluyor ancak uygulama imkanı yakın zamanda oldu. Aşağıdaki örnekte gördüğünüze benzer bir tablo ihtiyacımız oldu. Burada javascript ile seçim yapıldığında o tablo satırına bir css sınıfı tanımlayarak olabilirdi. Tabi bir işi CSS ile yapmak daha kolay ve mantıklı. 

<iframe height="300" style="width: 100%;" scrolling="no" title="tablo focus-within" src="https://codepen.io/fatihhayri/embed/XWoKXgv?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/XWoKXgv">
  tablo focus-within</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Kodun can alıcı noktası 

```css
tbody tr:has(input:checked) td {
  background: #636363;
  color: #fff;
}
```

Burada input işaretlenmiş tablo satırına tanım yaparak ihtiyacımızı karşıladık.

### `<figure>`  örneği

`:has()` seçicisini anlatırken verilen en popüler örnek: Bir `<figure>` elemanımızın olduğunu düşünelim. Bu elemanın bazen sadece resim içerirken bazen resim ve `<figcaption>` içeren çeşitlerinin olduğu durumlar var. Biz `<figcaption>` olduğu durumlar için. stil tanımlaması yapmak istesek.

<iframe height="300" style="width: 100%;" scrolling="no" title=":has parent selector figure" src="https://codepen.io/fatihhayri/embed/rNoLOJK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/rNoLOJK">
  :has parent selector figure</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
figure:has(figcaption) {
  background: white;
  padding: 10px;
}
```

Kodu ile `<figcaption>` içeriği olan `<figure>`  elemanına beyaz ardalan ve padding veriyoruz.

### Form doğrulama örneği

Bir diğer popüler örnekte form doğrulam için `:has()` seçicisinden yararlanma örnekleri. Form elemanlarının doğrulaması için CSS sözde sınıflarını `:invalid`  ve `:valid` kullanıyoruz ancak bu seçicileri kullanarak üstündeki ve öncesindeki elemanlara erişemediğimiz için sorun yaşıyorduk. :has seçicisi burada yardımımıza koştu.

Burada daha önce [:focus-within tanımı](https://fatihhayrioglu.com/focus-within-tanimi/ ":focus-within tanımı") yazısındaki formu alalım ve buraya e-posta alanı ekleyelim. E-posta kontrolü sonucu hatalı ise farklı bg ve etiketin başına x işareti koyalım.

<iframe height="300" style="width: 100%;" scrolling="no" title="login focus-within" src="https://codepen.io/fatihhayri/embed/RwERMVX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/RwERMVX">
  login focus-within</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Burada dikkat etmemiz gereken kısım kodun sonu

```css
label:has(+ input:invalid)::before {
  content: '✖ ';
  color: #ff0024;
}
```

Hatalı input öncesinde gelen`label` elemanına hata durumunda x işareti ekliyoruz. 

> Not: Ebeveyn seçicisi sadece üst elemana değil daha önce erişemediğimiz aynı seviye önceki kardeş seçiciye de erişme imkanı sağlıyor. 

Bir diğer kod

```css
form:has(input:invalid)::after {
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px #ff0024, inset -20px 0 80px #ff8f00, inset 20px 0 300px #ff0058, inset -20px 0 300px #ffc200, 0 0 50px #fff, -10px 0 80px #ff004a, 10px 0 80px #ff5b00;
}
```

Hatalı input'un ebeveyni olan form elemanının ardalanına kırmızı tonlu bir ardalan tanımlıyoruz. 

### Izgara (grid) örneği

Grid özelliği tanımlanan bir elemanın birincil derecedeki tüm elemanları grid ögesi olur. Grid ögelerinin davranış ve durumuna göre kapsayıcı gride tanım yapmak `:has()` seçicisi çıkana kadar CSS ile yapmak imkansızdı. 

`:nth-child` ve `:nth-last-child` sözde sınıfları yardımıyla ve de  `:has()` seçicisinin gücüyle bir grid içeriğinde 2 adet eleman varsa ona göre kod, 3 tane eleman varsa ona göre kod yazabiliyoruz artık.

```css
.grid:has(:nth-child(2):last-child) {
  grid-template-columns: 1fr 1fr;
}
```

İçinde iki adet öge bulunan bir kapsayıcı gridi yukarıdaki şekilde yakalayıp iki kolonlu bir yapı kurabiliriz. Aynı şekilde

```css
.grid:has(:nth-child(3):last-child) {
  grid-template-columns: 1fr 1fr 1fr;
}
```
İçinde üç adet öge bulunan kapsayıcı elemana tanım yapabiliriz. 

Dört ve fazlası için de

```css
.grid:has(:nth-child(n+4)) {
  grid-template-columns: repeat(4, 1fr);
}
```

<iframe height="584.28125" style="width: 100%;" scrolling="no" title="grid :has()" src="https://codepen.io/fatihhayri/embed/yLGJjrW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/yLGJjrW">
  grid :has()</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Gerçekten hayat kurtaracak özellik.

Örnekleri çoğaltmak gayet mümkün. Kaynakların altında farklı tip örnekleri paylaşıyorum. Bu örneklere bakarak ufkumuz açılıyor. 

## Sonuç

Tarayıcı desteği konusunda Firefox hariç tüm tarayıcıların desteği var. Firefox'un çalışmaları var ama henüz tam destek gelmedi. Bu sene sonuna kadar gelmesini bekliyorum.

CSS'in son senelerdeki gelişmelerini heyecanla takip ediyorum. Bayram çocuğu gibi mutlu hissettiriyor. :)

Kalın sağlıcakla.

## Kaynaklar

- https://davidwalsh.name/css-has
- [https://webkit.org/blog/13096/css-has-pseudo-class/](https://webkit.org/blog/13096/css-has-pseudo-class/)
- [https://ishadeed.com/article/css-has-parent-selector/](https://ishadeed.com/article/css-has-parent-selector/)
- [https://developer.chrome.com/blog/has-m105/](https://developer.chrome.com/blog/has-m105/)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/:has](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [https://blog.logrocket.com/advanced-guide-css-has-selector/](https://blog.logrocket.com/advanced-guide-css-has-selector/)
- https://css-tricks.com/the-css-has-selector/
- [https://matthiasott.com/notes/css-has-a-parent-selector-now](https://matthiasott.com/notes/css-has-a-parent-selector-now)
- [https://www.smashingmagazine.com/2023/01/level-up-css-skills-has-selector/](https://www.smashingmagazine.com/2023/01/level-up-css-skills-has-selector/)
- [https://snook.ca/archives/html_and_css/css-parent-selectors](https://snook.ca/archives/html_and_css/css-parent-selectors)
- [https://www.smashingmagazine.com/2021/06/has-native-css-parent-selector/#css-has-pseudo-class-specification](https://www.smashingmagazine.com/2021/06/has-native-css-parent-selector/#css-has-pseudo-class-specification)
- [https://css-irl.info/has-has-landed-in-safari/](https://css-irl.info/has-has-landed-in-safari/)
- [https://caniuse.com/css-has](https://caniuse.com/css-has)
- [https://twitter.com/byungwoo_bw/status/1502117144498413571](https://twitter.com/byungwoo_bw/status/1502117144498413571) (Chrome 102'de geliyormuş.)
- [https://css-irl.info/animated-grid-tracks-with-has/](https://css-irl.info/animated-grid-tracks-with-has/)
- [https://twitter.com/Una/status/1510357767453818881](https://twitter.com/Una/status/1510357767453818881)
- [https://twitter.com/argyleink/status/1504809847593836566](https://twitter.com/argyleink/status/1504809847593836566)
- [https://twitter.com/fatihhayri/status/1502300839339253763](https://twitter.com/fatihhayri/status/1502300839339253763)
- Resim kaynağı [https://adoption.org/](https://adoption.org/)

## Örnekler

- [https://codepen.io/jh3y/pen/GRwwWoV](https://codepen.io/jh3y/pen/GRwwWoV) - MacOS alt menü örneği
- [https://codepen.io/5t3ph/pen/dyjXgaG?editors=1100](https://codepen.io/5t3ph/pen/dyjXgaG?editors=1100) MacOS alt menü örneği
- [https://codepen.io/Sicontis/pen/mdjOXaJ](https://codepen.io/Sicontis/pen/mdjOXaJ) Filtre / Sekme yapısı
- [https://codepen.io/cyan-lin/pen/BaVBydw](https://codepen.io/cyan-lin/pen/BaVBydw) Karanlık / Aydınlık mod uygulaması
- [https://codepen.io/bramus/pen/ZEXJmBx](https://codepen.io/bramus/pen/ZEXJmBx) Eposta doğrulama örneği
- [https://twitter.com/bramus/status/1486642728263987204](https://twitter.com/bramus/status/1486642728263987204) (Örnek)
