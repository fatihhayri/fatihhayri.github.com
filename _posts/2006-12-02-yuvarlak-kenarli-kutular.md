---
layout: post
title: Yuvarlak Kenarlı Kutular
Date: 2006-12-02 16:41
Category: CSS, Web Standartları, XHTML
tags: [CSS, esnek, kutular, Web Standartları, XHTML, yuvarlak kenar]
---

CSS ile XHTML kodlaması yaparken daha çok köşeli kutular kullanılır.
Ancak CSS ile yuvarlak kenarlı kutularda yapabiliriz. CSS ile yuvarlak
kenarlı kutu yapmanın bir çok tekniği vardır. Her tekniğin yerine ve
durumuna göre avantajları olabilir. Biz burda en kolay ve en
kullanışlılarını öğrenmeye çalışacağız.

## Sabit Genişlikte Yuvarlak Kenarlı Kutu Oluşturmak

Sabit Genişlikte Yuvarlak Kenarlı Kutular en basit oluşturulabilen
kutulardır. İçeriğin uzaması veya kısalması durumunda genişlik sabit
kalır yükseklik değişkendir. İki adet resim kutuyu oluşturmamız için
yeterlidir. Birini üst kısma diğerini alt kısıma yerleştirerek yuvarlak
kutumuzu oluşturabiliriz.

200px genişliğinde bir yuvarlak kenarlı kutu olşuturmak için ilk önce
alta ve üste koyacağımız kutuları hazırlayalım.

![][100] ust_yuvarlak.gif

![][1] alt_yuvarlak.gif

XHTML kodumuzu yazarsak:

```html
<div class="yuvarlakKutu">
    <h2>Başlık</h2>
    <p>İçerik</p>
</div>
```

alt_yuvarlak.gif resmini **.yuvarlakKutu** kapsayıcı katmanının alt
kısımına dayalı olarak zemin resmi olarak atıyoruz. Ayrıca
**.yuvarlakKutu** zemin resminin bitiminden itibaren zemin dolgu
rengini(#84E0FF) atıyoruz.

```css
.yuvarlakKutu {
    width: 200px;
    background: #84E0FF url(images/alt_yuvarlak.gif) no-repeat left bottom;
}
.yuvarlakKutu h2 {
	background: url(images/ust_yuvarlak.gif) no-repeat left top;
}
```

Başlık ve içeriğinin kutunun kenarlarına yapışmaması için padding
değerlerini ayarlamalıyız:

```css
.yuvarlakKutu h2 {
	padding: 10px 20px 0 20px;
}

.yuvarlakKutu p {
	padding: 0 20px 10px 20px;
}
```

Örnek kodları indirmek için [tıklayınız.][]

Eğer başlıksız bir yapı istiyorsanız, **h2** kaldırıp **h2**'ye
atadığımız zemin resmini paragraf(**p**)'a atamamız yeterlidir.

Eğer zemin dolgu alanı düz renk değilde degrade renkler içeriyorsa, bu
iş için iki metod vardır birincisi yukarıdaki metod ile de yapabilrsiniz
ama kutu yüksekliği kabul edilebilir bir yükseklik ise. Yukarıdaki metod
ile bunu yapmak için bu kutunu maksimum 300px genişliğe çıkabileceğini
farz edelim. İki adet resim hazırlarız.

![][2] ust2_yuvarlak.gif

![][3] alt2_yuvarlak.gif

Diğer bir yöntem ise kutuyu üç kısıma bölerek yapmaktır ki bu daha esnek
bir yöntemdir.

```css
.yuvarlakKutu {
    width: 424px;
    background: url(images/orta_yuvarlak.gif) repeat-y;
}
.yuvarlakKutu h2 {
    background: url(images/ust3_yuvarlak.gif) no-repeat left top;
    padding-top: 20px;
}
.yuvarlakKutu .altYuvarlak {
    background: url(images/alt3_yuvarlak.gif) no-repeat left bottom;
    padding-bottom: 20px;
}
.yuvarlakKutu h2, .yuvarlakKutu p {
    padding-left: 20px;
    padding-right: 20px;
}
```

HTML kodu;

```html
<div class="yuvarlakKutu">
    <h2>Başlık</h2>
    <p class="altYuvarlak">İçerk</p>
</div>
```

Örnek kodları indirmek için [tıklayınız.][4]

## Esnek Boyutlu Yuvarlak Kenarlı Kutular

Yukarıdaki örnekde sadece dikeydeki genişlemelere olanak sağlıyor bazen
hem yatayda hemde dikeyde genişleye bilen esnek yuvarlık köşeli kutulara
ihytiyacımız olur. Bunun için yukarda uyguladığımız yöntemden biraz
farlı bir yöntem deneyeceğiz, iki resim değil de dört resime ihtiyacımız
olacak. Bu dört resim için artı katmanlara ihtiyacımız olacaktır, bu
katmanlar kodumuzu biraz temiz kod üretimi dışına çıkarsada işimizi
görecektir:

```html
<div class="yuvarlakKutu">
    <div class="yuvarlakKutuDisi">
        <div class="yuvarlakKutuIci">
        <h2>Başlık</h2>
        <p>İçerik</p>
        </div>
    </div>
</div>
``

Dört resimin iki tanesi üst köşeleri yuvarlamak için, iki tanesi alt
köşeleri yuvarlamak için kullanacağız.

![][5]

```css
 .yuvarlakKutu {
    width: 20em;
    background: #effce7 url(images/alt_sol.gif)
    no-repeat left bottom;
}
.yuvarlakKutuDisi {
    background: url(images/alt_sag.gif) no-repeat right bottom;
    padding-bottom: 5%;
}
.yuvarlakKutuIci {
	background: url(images/ust_sol.gif) no-repeat left top;
}
.yuvarlakKutu h2 {
    background: url(images/ust_sag.gif) no-repeat right top;
    padding-top: 5%;
}
.yuvarlakKutu h2, .yuvarlakKutu p {
    padding-left: 5%;
    padding-right: 5%;
}
```

Yukarıdaki örnekte esneklik sağlamak için değerler (% ve em) gibi görece
değerler verilerek font boyutunun arttırılması durumlarında esnek bir
kutu oluşturulmuş olur.

<iframe height="194" style="width: 100%;" scrolling="no" title="Yuvarlak Kenarlı Kutular" src="https://codepen.io/fatihhayri/embed/qBEmxjW?height=194&theme-id=13521&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

Yuvarlak kenarlı kutu yapımında bir çok örnek ve yöntem mevcut, aşağıda
ki link de bu metodları linkleri ile katagorize etmişler:

css-discuss.incutio.com/?page=RoundedCorners

  [100]: /images/ust_yuvarlak.gif
  [1]: /images/alt_yuvarlak.gif
  [2]: /images/ust2_yuvarlak.gif
  [3]: /images/alt2_yuvarlak.gif
  [4]: /dokumanlar/degradeli_yuvarlak_kenarli_kutu.zip
  [5]: /images/esnek_ornek.gif
  [6]: /dokumanlar/esnek_yuvarlak_kenarli_kutu.zip
