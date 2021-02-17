---
layout: post
title: CSS ve Tipografi
Date: 2007-09-14 08:49
Category: CSS, Web Standartları, XHTML
tags: [CSS, font, font-family, font-size, font-weight, letter-spacing, line-height, satır-yüksekliği, tipografi, Web Standartları, word-spacing, XHTML, yazı tipi, yazı-tipi isimleri]
---

**"Tipografi**([Yunanca][]τύπος (*typos*)="form" ve γραφία
(*graphia*)="yazmak" sözcüklerinden) yazıyı bir forma sokma sanatı ve
tekniğidir. Font (yazı tipi), font büyüklüğü, satır uzunluğu, satır arası
boşluk ve benzeri unsurların kombinasyonları ile yapılır. Yayımlanacak
yazınsal içeriğin bir forma sokulması veya tasarımı olarak ta
tanımlanabilir. Türkçe *tipografya* olarak da çevrilmiştir.
Terim Türkçe'ye Fransızca'dan geçmiştir." Kaynak: [Vikipedi][]

İlk CSS derslerimizde CSS'in avantajlarını sıralarken metinlere daha
fazla hükmetme özelliğine sahip olduğumuzdan bahsetmiştik.
Tipografi hakkında sizlere genel bir bilgi verecek değilim, bu benim
haddimede değil zaten. Biz burada daha çok Stil Şablonlarının bize
tipografi adına kazandırdıklarını göstermeye çalışacağız ve CSS ile
sayfalarımızı daha dikkat çekici ve okunabilir hale getireceğimizi
göreceğiz. Tipografi hakkında genel bir bilgi vermesi açısından güzel bir
çalışma olan Doç. Hasip Bektaş'ın "[İnternetteki Tipografi Sorunları ve GörselKirlenmeye Karşı Öneriler][]" adlı makalesini okumanızı tavsiye
ederim. Ayrıca kaynakça kısmındaki linklerden de daha fazla bilgi
alabilirsiniz.

Diğer makaleleri yazarken bazı konularda kaynak bulma konusunda ciddi
sorunlar yaşadığım oldu, ancak tipografi hakkında makale yazmaya karar
verip bilgi toplamaya başladığımda önceki yazılarımın aksine tipografi
hakkında çok fazla bilgi bulunduğunu gördüm. Ne yazık ki bunların çoğu
yine İngilizce. Bu kaynak çokluğu bu makalemin gecikmesine neden oldu.
Ama olsun bilginin fazla olmasının bir sakıncası yok.

CSS ile birlikte gelen bir çok avantaj mevcut bunları önceki
derslerimizde yazdık. Şunu söyleyebilirim ki web sitelerine CSS en büyük
katkıyı tipografi kısmından yapmıştır. CSS ile birlikte gelen özellikler
sayesinde yazılarımızın birçok özelliğine tek elden kontrol imkanına
sahibiz. CSS'in tipografiye direk etkisi olan capitalize, uppercase,
lowercase, text-decoration, letter-spacing, word-spacing, text-indent ve
line-height özelliklerinin yanı sıra dolaylı etkisi olan margin, border,
padding, background-color ve background-images özelikleride vardır.

## Ölçü

İlk olarak sayfanın ölçüsüne bakalım. Okunabilir sayfalar yaparken
kullanıcıya sunulan metinlerin genişlikleri önem kazanmıştır. Birçok
kaynakta sayfanın ölçüsü verilirken karakter sayısı bir birine yakın
değerler verilmektedir. Genel olarak tek kolonlu yapı kullanan
sayfalarda kolon genişliği 52-78 karakter(boşluklar dahil) içerecek
şekilde ayarlanması tipografi bakımdan uygun görülmüştür. İki kolon bir
yapı düşünülüyor ise her bir kolonun 40-50 karakter içermesi daha uygun
görülüyor.

![Yazı Ölçüsü][]

400px genişliğinde bir katman içine 12px boyutunda 66 karakter
sığdırabiliriz. Ancak yazı boyutunu 16px çıkardığımızda karakter sayısı
50'ye düşecektir.

Eğer genişliklerimizi **em** cinsinden verir isek katman genişliğini
33em yapıp yazı boyutunu 1em olarak belirlediğimizde 77 karakter
sığacaktır. Yazı boyutunu arttırdığımızda mesela 1.5em'e çıkardığımızda
satır içindeki karakter sayısı değişmeyecektir, çünkü genişlik
değerimizde yazı boyutu ile bağlantılı olduğu için oda artacaktır. Em
genellikle elastik sayfalar oluştururken kullanırız. Em ve elastik
sayfalar hakkında daha ayrılı bilgi için [CSS Birimleri][] ve [CSS İLE WEB SAYFASI OLUŞTURMA II][] makalelerine göz atın.

## Yazı Tipleri

Tipografi yazı tipi seçimi ile başlar. Bir çok yazı tipi olmasına karşın
web'de sadece kullanıcıların bilgisayarında bulunan yazı tiplerini
kullanmamız gerekir. Web tarayıcı ve işletim sistemine göre yazı tipi
kullanılma oranları gösteren [visbone.com][] listesine bir göz atmanızı
tavsiye ederim. Kullanıcının bilgisayarında bulunmayan yazı tiplerinin
kullanımı sayfalarımızın kullanıcının bilgisayarında kötü görünmesine
neden olabilir.

Burada bir konuya daha değinmeliyiz ki kullanıcının bazı tercihlerine
karşı bizim yapacak pek bir şeyimiz kalmaz. Mesela Anti-aliasing(Yazı
kenarlarındaki keskin hatların, kırıklıkların giderilmesi, etrafının
yumuşak hatlar ile doldurulması.) seçimi genelde Windows kullanıcıları
ve Mac kullanıcıları için standart gelen bir seçimdir. Bu yazılarımızın
daha oval yani güzel görünmesini sağlar. Ancak kullanıcı anti-aliasing
özelliğini kapatması halinde sitemizde kullandığımız yazı tiplerinin
görünümü keskin kenarlı görünecektir ve bu bizim istediğimiz olay
değildir.

![][100]

Web üzerinde genel olarak yazı tiplerini iki gruba ayırabiliriz.
**serif** yazı tipi ailesi ve **san-serif**yazı tipi ailesi. Bu ayrımı
aşağıdaki resimde çok iyi bir şekilde görmekteyiz.

![serif sans-serif][]

serif fontlar yazılı alanda bayağı popülerdir. Web aleminde ise
sans-serif fontlar daha popülerdir. Bu söylediğimden web'de hiç serif
font kullanılmaz diye bir mana çıkaramayız elbette kullanılabilir ancak
sans-serif daha çok tercih edilir. Genel font kullanımı:

{% highlight css %}
body{
    font-family:Arial, Helvetica, sans-serif
}
{% endhighlight %}

Şeklindedir. Burada birincil fontumuz Arial'dir alternatifi Helvatica ve
yazı tipi ailesi sans-serif olduğunu belirtiyoruz. Normalde sadece Arial
yazmamızda yeterlidir, ancak kullanıcının bilgisayarında bu yazı tipinin
olmaması durumu düşünülerek alternatif yazı tipi ve yazı tipi ailesi
yazılmıştır.

Her ne kadar sadece kullanıcının bilgisayarında bulunan yazıtiplerinin
kullanılması önerilmekte ise farklı yazı tipi kullanımınada olanak
vardır. Macromedia Flash'ın font gömme özelliğinden yararlanarak
istediğimiz yazı tiplerini web sayfamızda kullanabiliriz. Yöntem biraz
karmaşık olasada isteyenler için iyi bir çözümdür. Ayrıntılı bilgi için
"[Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)][]"
makalemize bir göz atın. Ayrı Microsoft'un yazı tipi gömmek üzerine
çalışmaları sürmektedir. Eğer bu çalışmalar olumlu sonuç verirse
tipografi açısından çok güzel gelişmeler yaşanacağı kesindir.

Yazı tipi seçimi için bazı kaynaklarda öneriler vardır. Daha geniş ve
yüksek yazı tiplerinin web'de daha iyi seçilebildiği ve okunduğu
belirtilerek **Verdana, Trebuchet ve Helvatica** yazı tiplerinin
kullanılması önerilmektedir. Ancak ben bu konuyu tasarımcılara bırakmayı
yeğlerim açıkçası.

## Yazı Boyutu

Web tipografisinde en çok kullanılan özellik yazı boyutudur. Ekran
kullanımını en kolay şekilde ayarlamamıza yardımcı olur. Yazı boyutunu
belirlerken iki ölçümüz vardır sabit değerler(px vb.) ve göreceli
değerler(em, % vb.) Farklı yazı boyutları ile sayfamızdaki hiyerarşiyi
ayarlayabiliriz. Bölyelikle daha okunabilir ve düzenli sayfalar elde
edebiliriz.

![][1]

Bir çok web sayfası kodlayıcısı aşağı yukarı tüm sayfalarında belli
standart yazı boyutları kullanır. Bizde burada bu genel kullanılan yazı
boyutları önerilerini sıralayalım:

 -   İçerik metinleri için 11px/16.5px arasında değerler
 -   Ana başlıklar(Anasayfa, Ürünler gibi başlıklar için) 24px
 -   Ana başlıkların altındaki ikincil başlıklar için 18px
 -   Menü elemanları ve üçüncü derece başlıklar için 16px
 -   Diğer başlıklar için 13px

Genel bir css kodunu yazarsak

{% highlight css %}
body {font: 11px/1.5em "Lucida Grande"; }
h1, h2, h3, h4, h5, h6 {font-family: helvetica, arial, verdana, sans-serif; font-weight: normal;}
h1 { font-size: 24px; }
h2 { font-size: 18px; }
h3 { font-size: 16px; line-height:2; }
h4 { font-size: 13px; line-height:1.25; font-weight:bold; }
h5 { font-size: 12px; font-weight:bold; }
h6 { font-size: 12px; }
{% endhighlight %}

veya **em** cinsinden

{% highlight css %}
body {font: 11px/1.5em "Lucida Grande";}
h1, h2, h3, h4, h5, h6 {font-family: helvetica, arial, verdana, sans-serif; font-weight: normal;}
h1 { font-size: 3em; }
h2 { font-size: 2em; }
h3 { font-size: 1.5em; line-height:2; }
h4 { font-size: 1.2em; line-height:1.25; font-weight:bold; }
h5 { font-size: 1em; font-weight:bold; }
h6 { font-size: 1em; }
{% endhighlight %}

Bu konuda çok güzel bir doküman hazırlayan BluePrint CSS Anaçatısının tipografi kısmına göz atmanızı tavsiye ederim.

## Satır Yüksekliği(line-height)

Web tipografisinin en önemli özelliklerinden biridir satır yüksekliği
tanımı. Metinlerin görünümünde büyük etkisi vardır. Satır yüksekliği
için genel kabul **yazı boyutunun1.4-1.6 katı** kadar bir mesafedir.

![Satırlar arası yükseklik][]

{% highlight css %}
body {
    font-family: "Lucida Grande", Helvetica, Arial, Verdana, sans-serif;
    line-height: 1.5em;
}
{% endhighlight %}


CSS kısaltmalarında tek yazı tipi değerine tüm yazı özellikleri ekleme
imkanı sunar.

{% highlight css %}
body {
    font:11px/1.5em "Lucida Grande", Helvetica, Arial, Verdana, sans-serif;
}
{% endhighlight %}

## Yazılara Vurgu Eklemek

CSS ile yazılarımızın önemli kısımlarını vurgulamak için bir kaç yöntem
kullanırız.

**Kalın:** Vurgu için en çok kullanılan özellik yazıyı kalın yapmaktır.
Normalde yazı tiplerinin kalın halleride vardır ancak web yazı
tiplerinde böyle bir seçim yapamıyoruz bu nedenle yazılarımıza kalınlık
kazandırmak için

{% highlight css %}
h1{
    font-weight:bold;
}
{% endhighlight %}

kodunu kullanırız. Kalın yazılmış yazılar diğer yazılara göre  daha
dikkat çekici görünecektir. Genelde başlıklar ve önemli alanlar
kalınlaştırılır.

**Eğik:** Vurgu için ikinci olarak eğik(italik) yazı şekli kullanılır.
Eğik yazı şekli ekranda okunurluğu azaltsa da kullanıcıya farklı bir
görünüm ile dikkat çeker.

{% highlight css %}
blockquote {
    margin: 1.5em 0 1.5em 1.5em;
    color: #666;
    font-style: italic;
}
{% endhighlight %}

**Altıçizili:** Üçüncü olarak altı çizili yazılar kullanılır. Web'de
genelde altı çizili yazılar link olarak kullanılır ve böyle algılanır.

{% highlight css %}
a{
    color: #125AA7;
    text-decoration: underline;
    outline: none;
}
{% endhighlight %}

**Renk:** Yazılarımızda farklı alanlara vurgu yapmak için kullanılan
özelliklerden biride renk(color) özelliğidir. Meselahatalı alanları
belirlemek için kırmızı renk kullanımı yaygındır.

{% highlight css %}
.hata{
    color:#f00
}
{% endhighlight %}

**Büyük Yazı:** Vurgu yapmak için nadiren de olsa tipografi bakımdan
buda kullanılabilir bir seçenektir ama en azkullanılan vurgu tipidir.

## Metin hizalama

CSS'in metin ve sayfa yatay hizalaması
için **text-align** özelliğini
kullanırız. 

**Aldığı değerler:** **left**(metni sola yaslar), **right**(metni sağa
yaslar)ve  **justify** (metni iki yana yaslar) ve **center**(metini
ortalar). Genelde leftdeğeri kullanılır. justify değeri uzun içerikli
metinlerde kullanılanılabilir ancakbazı bölümlerde kötü görünüme neden
olabilir. Özellikle son satırda sorunları vardır.

![][2]

justify(iki yana hizalı)  kullanımında meydana gelen sorunları gören W3C
çalışmaları devam eden CSS3 ile birlikte **inter-word**
ve **inter-character** özelliklerini
eklenmiştir.Bu özellikler yardımı ile ileride justify özelliğini daha
fazla kullanacağımızıdüşünüyorum.

Ayrıca CSS3 ile birlikte
**text-align-last** özelliğide
gelmektedir ki  bu özellik sayesinde justify ataması
yaptığımızmetinlerin son satırında meydana gelen kelimeler arası fazla
boşluk sorununuçözmüş olacağız. Ancak biraz daha sabır gerekiyor.

## Harf Aralığı(letter-spacing)

Aslında bir kod yazarı letter-spacing özelliğine pek dokunmaz.
Webtarayıcılarının tercihine bırakır bu değeri. Genelde atanan değerler
makuldeğerlerdir, ancak mesela başlıklarda daha yüksek harf aralıkları
kullanarakbaşlık ve metin arası farklılığı belirtilmiş olur ve
başlıklarımız daha belirginhale getirebiliriz. Özel kullanımlarda
yararlı olabilecek bir özelliktir.

## Sözcükler Arası Mesafe(word-spacing)

Bu özellikte genelde dokunulmayan özellikler arasındadır. Ancak her web
sayfası aynıdeğerleri kullanacak diye bir şey yoktur. Bazen farklı
sonuçlar elde etmek içinfarklı değerler kullanabiliriz.

{% highlight css %}
p {
    word-spacing: .2em;
}
{% endhighlight %}

## Paragrafın ilk satırını içeriden başlatmak (text-indent)

Birçok dergi, gazete ve yazıda karşılaştığımız bu yöntemi CSS yardımı
ile çok basit bir şekilde yaparız.

{% highlight css %}
p {
    text-indent: 2.5em;
}
{% endhighlight %}

Göreceli değer kullanmak daha mantıklıdır.

## Sonuç

blueprint tipografi uygulamalarını göz atın .
http://bjorkoy.com/blueprint/typography-test.html

Web tipografisinde CSS'in yeri çok önemlidir. sFIR gibi yeni metotların
geliştirilmesi ile web'de tipografi bakımından daha iyi sonuçlar
alacağımıza inanıyorum. Ancak sFIR bana biraz zorlama bir metot gibi
geliyor. Bu konuda işletim sistemi üreticilerinin daha farklı çözümlere
gitmeleri gerektiğini düşünüyorum. Microsoft'un bu yönde çalışmaları
var ancak hala tam sonuçlanmış çözümler değil.

Son olarak CSS ile yapılabileceklere bir örnek olması açısından
[3point7designs.com][] yaptıklarına bir göz atmanızı öneriyorum.
Sınırları zorlayan güzel örnekler

## Kaynaklar

-   [http://webtypography.net/toc/][]
-   [http://www.sitepoint.com/print/anatomy-web-fonts][]
-   http://www.markboulton.co.uk/journal/comments/five_simple_steps_to_better_typography
-   [http://www.digital-web.com/articles/css_typography/][] (css ve tipografi hakkında genel bir yazı)
-   [http://www.digital-web.com/articles/css_101/][] (uygulamalı css ve tipografi)
-   [http://www.fotografya.gen.tr/issue-6/hasip.html][İnternetteki Tipografi Sorunları ve GörselKirlenmeye Karşı Öneriler] (genel tipografi bilgisi Türkçe)
-   http://www.webmonkey.com/design/fonts/tutorials/tutorial3.html
-   [http://clagnut.com/search/index.php?q=typography][] (tipografi linkleri)
-   [http://www.wpdfd.com/issues/23/typography/][] (genel bilgi)
-   [http://www.3point7designs.com/blog/2006/09/20/advanced-typography-techniques-using-css/][] 
-   [http://www.alistapart.com/articles/sizematters/][] (font boyutunu farklı tarayıcılarda farklı olma sorunu ve çözümü)
-   lifeclever.com/web-typography-40-resources-tools/
-   [http://www.mandarindesign.com/troops.html][] (uygulamlar var)
-   [http://www.3point7designs.com/blog/2007/08/16/web-typography-50-sources-for-inspiration-and-instruction/][]
-   [http://typetester.maratz.com/][]
-   http://www.webstyleguide.com/type
-   [http://www.sitepoint.com/blogs/2007/04/30/typography-baseline-rhythm-deciphered/][]
-   http://ceyhunaksan.com/css-ve-tipografi
-   [http://topfunky.com/baseline-rhythm-calculator/][] (tipografi çevirimiçi aracı)
-   [http://www.wpdfd.com/issues/23/typography/][]
-   [http://www.peachpit.com/store/product.aspx?isbn=0321305256][]

  [Yunanca]: http://tr.wikipedia.org/wiki/Yunanca "Yunanca"
  [Vikipedi]: http://tr.wikipedia.org/wiki/Tipografi "Tipografi tanımı"
  [İnternetteki Tipografi Sorunları ve GörselKirlenmeye Karşı Öneriler]: http://www.fotografya.gen.tr/issue-6/hasip.html
  [Yazı Ölçüsü]: /images/tipografi_olcu.gif
  [CSS Birimleri]: http://fatihhayrioglu.com/?p=95
  [CSS İLE WEB SAYFASI OLUŞTURMA II]: http://fatihhayrioglu.com/?p=179
  [visbone.com]: http://www.visibone.com/font/FontResults.html
  [100]: /images/anti_aliasing.gif
  [serif sans-serif]: /images/serif.gif
  [Metin Yerine Resim/Flash Ekleme Teknikleri (Image Replacement)]: http://fatihhayrioglu.com/?p=294
  [1]: /images/yazi_boyutlari.png
  [Satırlar arası yükseklik]: /images/line_height.gif
  [2]: /images/tipografi_hizalama.gif
  [3point7designs.com]: http://www.3point7designs.com/advanced_type.html
  [http://webtypography.net/toc/]: http://webtypography.net/toc/%20
  [http://www.sitepoint.com/print/anatomy-web-fonts]: http://www.sitepoint.com/print/anatomy-web-fonts
  [http://www.digital-web.com/articles/css_typography/]: http://www.digital-web.com/articles/css_typography/
  [http://www.digital-web.com/articles/css_101/]: http://www.digital-web.com/articles/css_101/
  [http://clagnut.com/search/index.php?q=typography]: http://clagnut.com/search/index.php?q=typography
  [http://www.wpdfd.com/issues/23/typography/]: http://www.wpdfd.com/issues/23/typography/
  [http://www.3point7designs.com/blog/2006/09/20/advanced-typography-techniques-using-css/]: http://www.3point7designs.com/blog/2006/09/20/advanced-typography-techniques-using-css/
  [http://www.alistapart.com/articles/sizematters/]: http://www.alistapart.com/articles/sizematters/
  [http://www.mandarindesign.com/troops.html]: http://www.mandarindesign.com/troops.html
  [http://www.3point7designs.com/blog/2007/08/16/web-typography-50-sources-for-inspiration-and-instruction/]: http://www.3point7designs.com/blog/2007/08/16/web-typography-50-sources-for-inspiration-and-instruction/
  [http://typetester.maratz.com/]: http://typetester.maratz.com/
  [http://www.sitepoint.com/blogs/2007/04/30/typography-baseline-rhythm-deciphered/]: http://www.sitepoint.com/blogs/2007/04/30/typography-baseline-rhythm-deciphered/
  [http://topfunky.com/baseline-rhythm-calculator/]: http://topfunky.com/baseline-rhythm-calculator/
  [http://www.peachpit.com/store/product.aspx?isbn=0321305256]: http://www.peachpit.com/store/product.aspx?isbn=0321305256
