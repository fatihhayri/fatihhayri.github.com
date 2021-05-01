---
layout: post
title: Resim Kullanmadan Altı Çizgili Başlıklar Oluşturmak
Date: 2011-02-14 23:35
categories: [CSS]
tags: [altı çizili başlıklar, clearfix, html]
---

![][100]

Resimde görüldüğü gibi başlık yapmak için bir bg resmi hazırlayıp
başlığın altına tanımlıyordum. Sonra acaba ben bunu resim kullanmadan
yapabilirmiyim diye düşündüm. [Float uygulanmış elemanların kapsayamama sorunu][] diye ismini uzattığım clearfix sorunu aklıma geldi, aslında bu
bir sorun değil kabul idi. Tarayıcılar olayı böyle kabul ettiği için
içinde float uygulanmış bir eleman olan kapsayıcı eleman içeriğine göre
yükseklik almıyor ve sorun oluşturuyor.

Peki, burası ile ne alakası var diyorsanız. Gelelim bura ile olan
alakasına; şöyle bir şey geldi aklıma eğer bu başlık elemanına alt
çizgisi eklersem ve  içine bir eleman koyup float uygularsam başlık
eleman içindeki kapsayamayacak ve istediğim çözüme kavuşacağım. Sadede
gelelim ve hemen bir örnek yapalım.

HTML kodu;

```html
 <h1>
	<span>Ged tortor odio</span>
</h1>
```

CSS kodu;

```css
h1{
	border-bottom:3px solid #9faf41;
}

h1 span{
	float:left;
	padding:0 10px;
	background-color:#111;
	margin-left:10px;
	margin-top:-15px;
	display:block;
	font-size:24px
}
```

Örneği görmek için [tıklayınız.][]

Örnekte dikkat edeceğimiz bir iki husus var. h1 içie koyduğumuz span’ın
ardalan rengini zemin ile aynı yaparak yazının altındaki çizgileri yok
ediyoruz, ayrıca bu span’a sağdan ve solda padding vererek yazıya tam
yapışmasını engelliyoruz.

Metot sadece bir başlığın olduğu ve tek bir stilin olduğu durumlardan
daha çok, site içinde birden fazla alt çizgi rengi ve şekli olan
sitelerde daha kullanışlı olacağı düşüncesindeyim. Tabi karar size
kalmış.

Metodu IE6+, Firefox, Chrome, Opera ve Safari destekliyor. Burada tek
dezavantaj ise fazladan span kullanımıdır.

Kalın sağlıcakla

  [100]: https://lh5.googleusercontent.com/aR4P1P7q5fw7wUkyO7Q-4a4nmxCgWM3X8BzEEVm1c5JeR_oSjCjJJR19dEnrr6pGE7aDQkbzTsuuRqawtN7GjnifQzvoYnBEunQLUdRcSrfND7DZzgM
  [Float uygulanmış elemanların kapsayamama sorunu]: http://fatihhayrioglu.com/float-uygulanmis-elementleri-tam-kapsayamama-sorunu/
  [tıklayınız.]: /dokumanlar/cizgili_baslik.html
