---
layout: post
title: CSS3 Yazı Tipi Özellikleri
Date: 2011-11-16 23:33
Category: CSS
tags: font-effect, font-emphasize, font-face, font-smooth, font-stretch
---

Yazı tipi özellikleri her ne kadar CSS2.1 standartlarında olsada
tipografik birçok ihtiyacı karşılamadığı zamanla görüldü. En büyük sorun
kullanıcının bilgisayarında olmayan yazı tiplerini kullandığımızda bu
yazı tiplerini resim olarak kullanmak zorunda olmamızdı veyahut sIFR
veya cufon gibi çözümler üretilse dahi bunlar yan yol ile çözüm
üretmektir. Bu sorunu @font-face özelliği ile büyük ölçüde halleden CSS
standartları bunu dışında diğer sorunlarıda görüp CSS3 ile birlikte
çözüme kavuşturmaya çalışıyor.

Burada sizlere bu özellikleri anlatmaya çalışacağım.

## @font-face

Bu konuyda daha önce derinlemesine değinmiştim. [@font-face kullanımı][]
bağlantısından detaylı bilgi alabilirsiniz. Bu özelliği diğerlerine göre
avantajı mevcut tüm tarayıcılar tarafından desteklenmesidir.

## font-size-adjust

font-size-adjusting özelliği yazı tipinin x-yüksekliği değerini orantılı
olarak ayarlamamızı sağlar. x-yüksekliği değeri; aşağıdaki görselde de
görüldüğü gibi küçük x harfinin yüksekliğini gösterir.

![][100]

Bu özellik farklı platformlar için kod yazarken çok önem kazanacaktır.
Tasarımınız eğer belli sınırları var ise ve farklı işletim sistemlerinde
aynı görüntüyü elde etmek istiyorsanız yükseklik için aynı oranı
yakalamamıza yaracak güzel bir özellik.

Bir örnek verecek olursak; Verdana, Arial ve Trebuchet MS uyguladığımız
3 aynı metinin sonucu aşağıdaki gibi olacaktır.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/2VLW6/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Arial uyguladığımız 2. kolon ve Trebuchet Ms uyguladığımız 3. kolon aynı
yüksekliğe sahipken ilk kolondaki verdana uyguladığımız metin yüksekliği
daha yüksektir. Aynı yüksekiği yakalamak için

{% highlight css %}
.kolon1{
	font:12px/18px Verdana, Geneva, sans-serif;
	font-size-adjust:0.47;
}
{% endhighlight %}

aynı yüksekliği yakalamamızı sağlayacaktır.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/dkJye/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Bu özelliği daha iyi anlamak için [http://brunildo.org][] sitesindeki
örnek çok güzel.

Örneği görmek için tıklayınız.

## font-stretch

font-stretch özelliği CSS2 ile birlikte gelip CSS2.1 ile birlikte kalkan
özelliklerden biridir. CSS3 ile birlikte tekrar standartlara girmeye
çalışıyor. Henüz hiç bir tarayıcı desteklemiyor.

font-stretch özelliği metinlerin geniş veya dar olmasını ayarlar.

![][1]

Aldığı değerler;

**normal**
Yazı tipinin normal boyutlara getirir

**semi-condensed, condensed, extra-condensed, ultra-condensed**
Metni belirlene ölçülerde daraltır. Yarı, ekstra, normal ve ultra

**semi-expanded, expanded, extra-expanded, ultra-expanded**
Metni belirlene ölçülerde genişletir. Yarı, ekstra, normal ve ultra

**wider, narrower CSS3’de bu değerler önerilmiyor**
Göreceli değerlerdir. Kapsayıcı elemana göre göreceli olarak değer
alır. wider değeri alan eleman kapsayıcısından daha geniş olurken,
narrower değeri alan eleman kapsayıcısından daha dar olur.

## font-effect

Metinlere oymacılık efektlerini vermek için kullanabileceğimiz bir
özellik. CSS3 standartların eklenen bu özellik sayesinde biz kabartma,
oyma ve dış hat çizgisi uygulayabiliriz. Kullanma için pek mantıklı
gelmedi bana ama zaman vermek gerekiyor biraz.

## font-smooth

Yazı tipi uygulamalarında yumuşatma işlemi çok önemlidir. Ancak bu
sistemi işletim sistemleri ele aldığı için biz kod yazarları için işin
bu tarafı için ancak bir iki çakma yöntem uygulamak kalıyordu. Bu
özellik şimdilik pek etkili olmasada ilerisi için bir ümit benim için.
Her bilgisayar Mac olsa yada PC’ler daha iyi yazı tipi tarasa
font-face’in en büyük eksikliği ortadan kalkacaktır.

Gelecekle ümitle bakmak için bu özelliği daha etkin olması lazım.

## font-emphasize

Asya kökenli yazı tipleri için kullanılabilecek bir özellik. Zamanla
daha detaylı inceleriz. Lazım oldukça incelemek gereken bir özellik.

## Sonuç

Tipografi çok detaylı bir mecra zamanla daha güzel sonuçlar alacağımızı
düşünsemde şimdilik çok başarılı olduğunu söyleyemem. CSS3 ile Yazı tipi
özellikleri arasında en önemlisi font-face özelliği bence, hala belli
sorunları olsada tüm tarayıcıların destekliyor olması çok büyük bir
katkıdır.

İleride her şey daha güzel olacak.

Kalın sağlıcakla

## Kaynaklar

-   [http://www.w3.org/TR/css3-fonts/][]
-   [http://www.css3.info/more-type-control-with-css3-fonts/][]
-   [http://www.quackit.com/css/properties/css_font-size-adjust.cfm][]
-   [http://webdesignernotebook.com/css/the-little-known-font-size-adjust-css3-property/][]
-   [http://www.fonttester.com/help/css_property/font-size-adjust.html][]
-   [http://www.blackinci.com/css/15-css-font-ozellikleri.html#adjust][]
-   [http://webdesign.about.com/od/styleproperties/p/blspfontsizeadj.htm][]
-   [https://developer.mozilla.org/samples/cssref/font-size-adjust.html][]
-   [http://css-infos.net/property/-webkit-text-size-adjust][]
-   [http://www.impressivewebs.com/little-known-css3-type/][]
-   [https://developer.mozilla.org/en/CSS/font-size-adjust][]
-   [http://www.w3.org/TR/WD-font/#font-size-adjust][]
-   [http://babylon-design.com/mais-c-est-quoi-au-juste-font-size-adjust/][]
-   [http://www.peterkroener.de/schoenes-neues-css-font-size-adjust/][]
-   [http://www.webspaceworks.com/resources/fonts-web-typography/43/][]
-   [http://www.fonttester.com/help/css_property/font-size-adjust.html][]
-   [http://www.opera.com/docs/specs/presto27/css/fonts/][]
-   [http://stuff4designers.com/2011/03/15/how-to-use-font-size-adjust/][]
-   [http://www.fatihhayrioglu.com/css-ve-tipografi/][]
-   [http://brunildo.org/test/xheight.pl][]
-   [http://www.w3schools.com/cssref/css3_pr_font-stretch.asp][]
-   [https://developer.mozilla.org/en/CSS/font-stretch][] (font-stretch)
-   [http://msdn.microsoft.com/library/ff974090.aspx][] (font-stretch)
-   [http://meyerweb.com/eric/css/tests/css3/show.php?p=font-stretch][]
-   [http://log.edds.me.uk/post/436921532/firefox-3-6s-css-font-stretch-support][]
-   [http://clagnut.com/blog/2265/][]  (font-stretch)
-   [http://www.cssportal.com/css-properties/font-effect.htm][]
-   [http://www.handycss.com/wiki/font-effect/][]
-   [http://szafranek.net/works/articles/font-smoothing-explained/][]
-   [http://maxvoltar.com/archive/-Webkit-font-smoothing][]
-   [http://www.usabilitypost.com/2010/08/26/font-smoothing/][]

  [@font-face kullanımı]: http://www.fatihhayrioglu.com/font-face-kullanimi/
  [100]: https://lh6.googleusercontent.com/YW1f1GQqHZCiepSVsvkodxuovf2J1IIFEtdiaBZw4q2s6oM38friVO4jli_8FedEtou75rN8hzxyxal0ApDp1lYyM0Fgb4i0R3qH8yOWbIcbuoZqLYg
  [http://brunildo.org]: http://brunildo.org
  [1]: https://lh4.googleusercontent.com/aMIBse-JRBvgYWQD0dMw5EFWhV4HCBeSYKeLfJS-6UMGSdHv0YsQiIA60djkovRsZ0dK8zLYak1yxEt6LdGHv4WGE2cagkiMqBlmrPdT1c_zyURGC0g
  [http://www.w3.org/TR/css3-fonts/]: http://www.w3.org/TR/css3-fonts/
  [http://www.css3.info/more-type-control-with-css3-fonts/]: http://www.css3.info/more-type-control-with-css3-fonts/
  [http://www.quackit.com/css/properties/css_font-size-adjust.cfm]: http://www.quackit.com/css/properties/css_font-size-adjust.cfm
  [http://webdesignernotebook.com/css/the-little-known-font-size-adjust-css3-property/]: http://webdesignernotebook.com/css/the-little-known-font-size-adjust-css3-property/
  [http://www.fonttester.com/help/css_property/font-size-adjust.html]: http://www.fonttester.com/help/css_property/font-size-adjust.html
  [http://www.blackinci.com/css/15-css-font-ozellikleri.html#adjust]: http://www.blackinci.com/css/15-css-font-ozellikleri.html#adjust
  [http://webdesign.about.com/od/styleproperties/p/blspfontsizeadj.htm]: http://webdesign.about.com/od/styleproperties/p/blspfontsizeadj.htm
  [https://developer.mozilla.org/samples/cssref/font-size-adjust.html]: https://developer.mozilla.org/samples/cssref/font-size-adjust.html
  [http://css-infos.net/property/-webkit-text-size-adjust]: http://css-infos.net/property/-webkit-text-size-adjust
  [http://www.impressivewebs.com/little-known-css3-type/]: http://www.impressivewebs.com/little-known-css3-type/
  [https://developer.mozilla.org/en/CSS/font-size-adjust]: https://developer.mozilla.org/en/CSS/font-size-adjust
  [http://www.w3.org/TR/WD-font/#font-size-adjust]: http://www.w3.org/TR/WD-font/#font-size-adjust
  [http://babylon-design.com/mais-c-est-quoi-au-juste-font-size-adjust/]: http://babylon-design.com/mais-c-est-quoi-au-juste-font-size-adjust/
  [http://www.peterkroener.de/schoenes-neues-css-font-size-adjust/]: http://www.peterkroener.de/schoenes-neues-css-font-size-adjust/
  [http://www.webspaceworks.com/resources/fonts-web-typography/43/]: http://www.webspaceworks.com/resources/fonts-web-typography/43/
  [http://www.opera.com/docs/specs/presto27/css/fonts/]: http://www.opera.com/docs/specs/presto27/css/fonts/
  [http://stuff4designers.com/2011/03/15/how-to-use-font-size-adjust/]: http://stuff4designers.com/2011/03/15/how-to-use-font-size-adjust/
  [http://www.fatihhayrioglu.com/css-ve-tipografi/]: http://www.fatihhayrioglu.com/css-ve-tipografi/
  [http://brunildo.org/test/xheight.pl]: http://brunildo.org/test/xheight.pl
  [http://www.w3schools.com/cssref/css3_pr_font-stretch.asp]: http://www.w3schools.com/cssref/css3_pr_font-stretch.asp
  [https://developer.mozilla.org/en/CSS/font-stretch]: https://developer.mozilla.org/en/CSS/font-stretch
  [http://msdn.microsoft.com/library/ff974090.aspx]: http://msdn.microsoft.com/library/ff974090.aspx
  [http://meyerweb.com/eric/css/tests/css3/show.php?p=font-stretch]: http://meyerweb.com/eric/css/tests/css3/show.php?p=font-stretch
  [http://log.edds.me.uk/post/436921532/firefox-3-6s-css-font-stretch-support]: http://log.edds.me.uk/post/436921532/firefox-3-6s-css-font-stretch-support
  [http://clagnut.com/blog/2265/]: http://clagnut.com/blog/2265/
  [http://www.cssportal.com/css-properties/font-effect.htm]: http://www.cssportal.com/css-properties/font-effect.htm
  [http://www.handycss.com/wiki/font-effect/]: http://www.handycss.com/wiki/font-effect/
  [http://szafranek.net/works/articles/font-smoothing-explained/]: http://szafranek.net/works/articles/font-smoothing-explained/
  [http://maxvoltar.com/archive/-Webkit-font-smoothing]: http://maxvoltar.com/archive/-Webkit-font-smoothing
  [http://www.usabilitypost.com/2010/08/26/font-smoothing/]: http://www.usabilitypost.com/2010/08/26/font-smoothing/