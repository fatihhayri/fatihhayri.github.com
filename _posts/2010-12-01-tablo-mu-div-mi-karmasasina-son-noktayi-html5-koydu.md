---
layout: post
title: Tablo mu? Div mi? Karmaşasına Son Noktayı HTML5 koydu
Date: 2010-12-01 23:13
Category: CSS, HTML5
tags: [css ile kodlama, divli yapı, Erişebilirlik, html5, kullanılabilirlik, tablolu yapı]
---

Ben bu siteyi açtığımdan beri CSS tabanlı yani div ile kodlamanın
önemini ve avantajını anlatmaya çalışıyorum. Bu geçiş o kadar kolay
olmadı ve hala Türkiye’de birçok site tablo alt yapını kullanıyor. Bunda
standartların bu yönde bir telkini olmamasının önemi çoktur. Uzun
süredir yazmayı düşündüğüm bu makaleyi yazmak bu güne nasipmiş.

HTML5 bizim div ile oluşturduğumuz yapı yerine kendi yapısal etiketleri
yerleştirdi ve bu hareketli ile tablolu yapı ile site yapısına son
darbeyi indirdi.

Alışkanlıkları kolay bırakamayan insanlar hala tablo ile kodlamaya devam
ediyor. Ben çalışma hayatımın belli bir bölümün tablolu yapı ile kodlama
yaparak geçirdim, daha sonra div ile kodlamaya başladım. Her ikisininde
kolaylıklarını ve zorluklarını gördüm. Div ile kodlamanın tek
dezavantajı dikeyde ortalama diyebilirim. Onun dışında tablolu yapıya
göre avantajlıdır. Aşağıda genel başlıklar ile div’li yapının tablolu
yapıya olan avantajlarından bahsedeceğim.

-   **Daha hızlı sayfa yükleme zamanları**
    Tabloların yapısından kaynaklanan fazla kod ve kod karmaşası
    yazılan kodun boyutunu arttırır buda sitenin daha yavaş yüklenmesine
    nedendir. Siteyi hızlandırmak için divli yapıda çeşitli yöntemler
    vardır. Örn:(CSS sprite tekniği)
-   **Daha Düşük Barındırma ücretleri**
    Daha az yüklenme zamanı barındırma ücretleri ve bant genişliğinin
    az kullanılması demektir ve bunun sonucu barındırma hizmeti
    aldığımız şirkete daha az ödeme yaparız. Küçük sitelerde değilde
    büyük çaplı sitelerde bu konu büyük önem kazanır.
-   **Site düzenlemek daha daha kolay**
    Tablolu yapının zorluklarından biri karmaşık yapısından dolayı
    düzenlemek çok zor olur. Div ile hazırlana sitelerde düzenleme
    yapmak daha kolay olur
-   **Tekrar tasarlama daha ucuzdur**
    Hazır sistemlerde gördüğümüz gibi(wordpress vb.) aynı yapı üzerine
    farklı tasarımların adapte edilmesi kolaydır.
-   **Web sitesinde Görsel tutarlılık vardır**
    Tek yerden(css) kontrol edilen div’li yapı tablolu yapıya göre daha
    tutarlı olur.
-   **Daha iyi SEO için**
    Daha az kod olması ve kodlama yapısının tablolu yapıya göre daha
    düzenli olması arama motorlarının indekslemesi için bir avantajdır.
    Ayrıca h1, h2, h3 … ve ilgili elementlerin yerinde kullanılması ile
    arama motorlarına daha uygun kodlama yapabiliriz. Ayrıca CSS ile
    birçok javascript ile yapabileceğimiz işleri yapabiliriz. Örneğin
    menüler gibi.
-   **Hızlı web sitesi çapında güncellemeleri**
    CSS ile kontrol edilen siteler daha hızlı kontrol edilir ve
    düzenlenir. Bu projelerin daha hızlı oluşması için bir avantajdır.
-   **Takım çalışmalarına daha uygundur**
    Web sitesi önyüzü ve arka planı ayrımı yapılır. Bu sayede daha
    organize site üretimi yapılabilir. Arayüz geliştirici ve programcı
    arasında daha kolay ve güzel iletişim sağlanır. İki ayrı koldan iş
    yürür.
-   **Kullanılabilirlik ve Erişilebilirlik Artar**
    Farklı tarayıcılara göre kod yazmak daha kolaydır. ie6 ile
    uğraşırken bu başlığı pek inandırıcı bulmayabilirsiniz, ancak
    eskiden tablolu yapı zamanımda Netscape ile ie5.5 ile az uğraşmazdık
    ve bir çok yerinde sabunlardık(es geçerdik)

    Div ile kodlama yapılırken yazılan kodlar css yardımı ile farklı
    araçlar için ayrı ayrı kodlanmadan sadece css kodu değiştirilerek
    elde edilebilir. Mesela yazıcıdan çıktı almak için print medya tipi
    kullanılan css yorumlanır, benzer şekilde mobil araçlar için handle
    medya tipli css dosyası kullanır. Şimdi iPone, iPad içinde benzer
    ayrımı yapabiliyoruz.
-   **Daha karmaşık düzenler ve tasarımlar**
    Tablolar ile oluşturulan karmaşık yapılı siteler bazen içinden
    çıkılmaz haller alabiliyordu, ancak div ile kodlama yaparken birçok
    yapı kolay bir şekilde oluşturulabiliyor.
-   **Boş GIF kullanımı**
    Tablolu kodlamada düzeni sağlamak için kullandığımız 1x1 lik bir
    saydam gif hazırlanır ve tablo düzeni bu gifler yardımı ile
    sağlanır. Div ile kodlamada böyle bir ihtiyaca gerek yoktur. Bu
    fazla kod ve yükten bizi kurtarır.
-   **Geleceğe dönük bir yapıdır**
    HTML5 ile birlikte gelen yeni etiketler ve HTML5’in yapısı div ile
    kodlamanın devamı niteliğindedir. Daha önce yazdığım [HTML5’in yapısal elemanları][] adlı makaleye göz atın.


![][100]

Sonuç olarak şunu söyleyebilirim ki, 2002’den beri div ile kodlama
yapıyorum ilk başlarda çok zorlanıyordum, hatta ilk projemde(koc.net)
yarı div yarı tablolu bir yapı kurdum zorluklarında dolayı. Ama şimdi
daha fazla kaynak, örnek mevcut, birçok yöntem teknik ve araç  ile
div’li yapıda kodlama yapmak artık daha kolay.

Hala tablo ile kodlama yapanlara önerim bir sonraki projenizi muhakkak
div ile yapın ve ne kadar zorlansanız da tabloya geri dönmeyin, yani
gemileri yakın.

HTML5’in filizlenmeye başladığı bir dönemde bu konuya dikkat çekmek
istedim.

Kalın sağlıcakla

## Kaynaklar

-   [http://www.smashingmagazine.com/2009/04/08/from-table-hell-to-div-hell/][]
-   HTML Utopia Designing Without Tables Using CSS, 2nd Edition.pdf 1.konu
-   [http://phrogz.net/css/WhyTablesAreBadForLayout.html][] (madde madde)
-   [http://resources.bravenet.com/articles/site_building/CSS/tables_bad_css_good/][]
-   [http://www.sitepoint.com/article/tables-vs-css/][] (güzel anlatım, ama geniş)
-   [http://webdesign.about.com/od/layout/a/aa111102a.htm][] (güzel)
-   [http://www.chromaticsites.com/web-design-blog/2008-04-03/13-reasons-why-css-is-superior-to-tables-in-website-design/][]
-   [http://www.andybudd.com/archives/2004/05/an_objective_look_at_table_based_vs_css_based_design/][]
-   [http://www.stopdesign.com/present/2004/ddw-seattle/tables/][]
-   [http://erkana.wordpress.com/2006/09/15/tablosuz-tasarim-tableless/][]
-   [http://eskiz.ksahin.com/?category=web-tasarim/tablosuz-tasarm-tablolu-tasarma-kar][]
-   [http://alastairc.ac/2006/08/why-css-is-important-for-accessibility/][]
-   [http://www.w3.org/TR/CSS-access][]

  [HTML5’in yapısal elemanları]: http://www.fatihhayrioglu.com/html-5in-yeni-elementlerini-bir-goz-atalim/
  [100]: https://lh4.googleusercontent.com/mZ-OkglGxQIDuI_gn8dvqhjPy8Z0siTKY50T2gqGnoC8UeYLTURhiB15ebJ2YBeN5QViUQUz1wzfI_t6bu5kgOxDoTzL9_snx6OfkeVAqJ1zjjW1tA
  [http://www.smashingmagazine.com/2009/04/08/from-table-hell-to-div-hell/]: http://www.smashingmagazine.com/2009/04/08/from-table-hell-to-div-hell/
  [http://phrogz.net/css/WhyTablesAreBadForLayout.html]: http://phrogz.net/css/WhyTablesAreBadForLayout.html
  [http://resources.bravenet.com/articles/site_building/CSS/tables_bad_css_good/]: http://resources.bravenet.com/articles/site_building/CSS/tables_bad_css_good/
  [http://www.sitepoint.com/article/tables-vs-css/]: http://www.sitepoint.com/article/tables-vs-css/
  [http://webdesign.about.com/od/layout/a/aa111102a.htm]: http://webdesign.about.com/od/layout/a/aa111102a.htm
  [http://www.chromaticsites.com/web-design-blog/2008-04-03/13-reasons-why-css-is-superior-to-tables-in-website-design/]: http://www.chromaticsites.com/web-design-blog/2008-04-03/13-reasons-why-css-is-superior-to-tables-in-website-design/
  [http://www.andybudd.com/archives/2004/05/an_objective_look_at_table_based_vs_css_based_design/]: http://www.andybudd.com/archives/2004/05/an_objective_look_at_table_based_vs_css_based_design/
  [http://www.stopdesign.com/present/2004/ddw-seattle/tables/]: http://www.stopdesign.com/present/2004/ddw-seattle/tables/
  [http://erkana.wordpress.com/2006/09/15/tablosuz-tasarim-tableless/]: http://erkana.wordpress.com/2006/09/15/tablosuz-tasarim-tableless/
  [http://eskiz.ksahin.com/?category=web-tasarim/tablosuz-tasarm-tablolu-tasarma-kar]: http://eskiz.ksahin.com/?category=web-tasarim/tablosuz-tasarm-tablolu-tasarma-kar
  [http://alastairc.ac/2006/08/why-css-is-important-for-accessibility/]: http://alastairc.ac/2006/08/why-css-is-important-for-accessibility/
  [http://www.w3.org/TR/CSS-access]: http://www.w3.org/TR/CSS-access
