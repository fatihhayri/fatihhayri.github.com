---
layout: post
title: CSS ile Ziyaret Edilen Sayfa Bağlantılarına Şekil Vermek
Date: 2009-06-15 16:58
categories: [CSS]
tags: [bağlantı, ie6, kullanılabilirlik, sözde-elementler, sözde-sınıflar, visited, ziyaret-edilmiş-sayfa]
---

[Sözde sınıf ve elementler makalesinde][] değindiğim bir konu idi bu.
Ancak genelde bu özelliği tasarımcılar ve kod yazarları atlıyor. Şimdiye
kadar ki hiç bir projemde kullanma gereği duymadım açıkçası. Ama bence
kullanılabilirlik açısından önemli bir özellik. Bundan sonraki
projelerimde kullanmayı düşünüyorum.

[http://www.evalotta.net/][] sitedeki uygulamayı görünce çok hoş bir şey
olduğu aklıma geldi. Bende bu konuda bir şeyler yazmalıyım diye not
ettim. Nasip bu güneymiş.

İnternet tarayıcıları daha önce ziyaret ettiğimiz sayfa bağlantılarını
ön belleğinde tutar. Biz ön belleği silmediğimiz müddetçe hafızasında
kalır. CSS bize daha önce ziyaret ettiğimiz sayfa bağlantılarının
stilini değiştirme imkanı sunar, böylece kullanıcıya sen burayı daha
önce ziyaret etmiştin bilgisini verebiliriz. İnternet tarayıcıları
ziyaret edilmiş bağlantılara kendileri standart bir stil atarlar. Mesela
Firefox altını çizili ve mor renkli yapıyor.

![stadart_ff][]

Tarayıcılar bize bu ayrımı gösterir, tabi biz bağlantı tanımları
değiştirmediğimiz müddetçe. Biz bağlantıya genel tanım yaptığımızda bu
özellik bir bakıma göz ardı edilecektir. Bir çok projede bu tanımlamayı
yazpıyoruz.

```css
a {
    color:#f00;
}
```

![genel_bag_renk][]

Yukarıdaki tanımlama tüm bağlantı tipleri için genel bir tanımdır ve
ziyaret edilmiş sayfa stilinide belirler.

Bizim amacımız ziyaret edilmiş bağlantıları farklı stil ile belirterek
ayrımı göstermek. Bir çok yerde  yazı üstünü çizerek belirlenir.

```css
a:visited {
    text-decoration: line-through;
}
```

![ziy_sayfa_uzeri_ciz][]

Örneği görmek için [tıklayınız.][]

Diğer bir yöntemde ardalan resmi koymak. Bu yöntem ile hoş bir görüntüde
sağlamış oluyoruz. [http://www.evalotta.net/][] sitesi buna çok güzel
bir örnek.

```css
a:visited {
    padding-right:20px;
    background:url(images/ziyaret_edilmis_baglanti.gif) right top no-repeat;
    color:#666;
    text-decoration:none;
}
```

![ziy_sayfa_oki][]

Örneği görmek için [tıklayınız.][1]

Benzer yöntemlerle birçok alternatif oluşturulabilir. Ayrıca :before ve
:after ile oluşturulan örnekler var ama hala ie6 hayatta olduğu için ve
:before ve :after özelliklerini desteklemediği için pek kullanma
taraftarı değilim.

Kaynak
------

-   9lessons.blogspot.com/2009/06/css-visited-tips-strike-out.html
-   [http://webdesign.maratz.com/lab/visited_links_styling/][]
-   http://www.webmonkey.com/tutorial/Control_Visited_Link_Colors_With_CSS
-   [http://css-tricks.com/put-checkmarks-next-to-visted-links-with-pure-css/][]
-   [http://www.westciv.com/style_master/house/tutorials/quick/visited_links/index.html][]
-   [http://onemarco.com/2007/06/06/better-visited-links/][]
-   [http://www.sitepoint.com/blogs/2004/05/23/getting-creative-with-visited-links/][]
-   useit.com/alertbox/20040510.html

  [Sözde sınıf ve elementler makalesinde]: http://fatihhayrioglu.com/pseudo-siniflari-ve-pseudo-elementleri/
  [http://www.evalotta.net/]: http://www.evalotta.net/
  [stadart_ff]: /images/stadart_ff.gif
  [genel_bag_renk]: /images/genel_bag_renk.gif
  [ziy_sayfa_uzeri_ciz]: /images/ziy_sayfa_uzeri_ciz.gif
  [tıklayınız.]: /dokumanlar/ziyaret_edilmis_baglantilar.html
  [ziy_sayfa_oki]: /images/ziy_sayfa_oki.gif
  [1]: /dokumanlar/ziyaret_edilmis_baglantilar2.html
  [http://webdesign.maratz.com/lab/visited_links_styling/]: http://webdesign.maratz.com/lab/visited_links_styling/
  [http://css-tricks.com/put-checkmarks-next-to-visted-links-with-pure-css/]: http://css-tricks.com/put-checkmarks-next-to-visted-links-with-pure-css/
  [http://www.westciv.com/style_master/house/tutorials/quick/visited_links/index.html]: http://www.westciv.com/style_master/house/tutorials/quick/visited_links/index.html
  [http://onemarco.com/2007/06/06/better-visited-links/]: http://onemarco.com/2007/06/06/better-visited-links/
  [http://www.sitepoint.com/blogs/2004/05/23/getting-creative-with-visited-links/]: http://www.sitepoint.com/blogs/2004/05/23/getting-creative-with-visited-links/