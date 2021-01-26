---
layout: post
title: FireBug - Genel Bakış
Date: 2008-08-13 10:47
Category: CSS, Javascript, XHTML
tags: [CSS Düzenleme, css ile site yapmak, CSS yazma, firebug, Firefox, Javascript, XHTML düzenleme]
---

Uzun zamandır kullandığım halde neden FireBug hakkında bir makale
yazmadığımı bilmiyorum. Aslında bu makaleyi yaklaşık 3 ay önce
yazacaktım ama biraz üşengeçlikten ve tembellikten dolayı ancak şimdi
yazabildim. Birazda [Volkan Görgülü'nün video anlatımı][] benim bu
makaleyi devam ettirmem için bir kıvılcım oldu diyebiliriz. FireBug
gelişmiş bir araç bu nedenle tek makalede anlatmamın mümkünatı yoktu ben
şimdilik iki makale ile anlatmaya çalışacağım. İlk makalemi [Michael Sync][] sitesinden çok fazla yararlanarak hazırlıyorum.
michaelsync.net sitesi bu konudaki en iyi kaynak
diyebilrim. FireBug FireFox internet tarayıcısının bir eklentisidir.
Bunu bilmeyen kalmamıştır diye düşünüyorum. En azın bilmeyen web kod
yazarı kalmamıştır.

FireBug web kod yazarları için olmazsa olmaz bir araç. Benim Firefox
sevgimin kaynağı diyebilirim. Kod yazarken bir sorunla karşılaşırız ve
sorunlarla uğraşmak her ne kadar güzel bir şey olmasada bu işin olmazsa
olmazıdır. Kod yazarken muhakkak bazı sorunlarla karşılaşacağız, burada
önemli olan sorunları ne kadar çabuk ve hızlı çözebildiğimizdir. FireBug
bize sorunların çözümünde çok büyük yararı var. Avantajlarından biride
hataları tarayıcı üzerinden müdahale etme imkanı sunması. FireBug web
üzerinde hata ayıklamanın bir miladıdır bence, yani FireBug öncesi ve
sonrası dönem. Ne kadar övsem azdır FireBug'ı.

FireBug eklentisini eklentiyi yazan [http://getfirebug.com/][]
sitesinden veya FireFox'un eklentiler indirebilirsiniz. FireFox 3.
sürümü ile birlikte FireBug 1.2 beta sürümünü kurabiliyoruz. Ben bu
sürümde bazı sorunlarla karşılaştım ve sırf bu yüzden FireFox 3 kaldırıp
FireFox 2 kurup FireBug'ın kararlı sürümü olan 1.05 kurdum.

FireBug'ı bu kadar övdükten sonra biraz tanımaya ne dersiniz. Aslında
ben bu makaleyi ilk yazmaya karar verdiğimde sadece CSS ile ilgili olan
bölümü anlatacaktım ama konuyu biraz araştırınca ilk başta aracı biraz
tanıtıp sonra CSS ile ilgili olan kısmı anlatmaya karar verdim. FireBug
javascript kodu yazarkende bize bir çok yararları var şimdilik
javascript kısmınıa değinmeyeceğim, nasip olursa yakında o kısmınıda
anlatırım.

FireBug'ı yukarıdaki linklerden birinden tıklayıp indirmek istediğinizde
aşağıdaki yükleme ekranı ile karşılaşacaksınız.

![][100]

Kurulum bitirdikten sonra sizden eklentinin aktif olmak için
FireFox'unuzu kapatıp açmanız yeterli olacaktır.

![FireBug pasif][]

![Fire Aktif][]

Kurulum tamamlanınca FireBug kullanıma hazır hale gelecektir. İlk
Firefox'unuzu açtığınızda FireBug pasif olabilir. Aktif hale getirmek
için FireFox'un sağ alt durum çubuğu üzerindeki FireBug işaretine sağ
tıklayıp "Disable FireBug" başındaki işareti kaldırmak için bu seçeneğe
tıklamanız yeterli. Alternatif bir yol olarak Araçlar - FireBug -
Disable FireBug yolunuda kullanabilirsiniz.

#### FireBug Menü

FireBug menüsündeki seçenekleri tek tek tanımlarsak:

![][1]

-   **Open Firebug** : FireBug konsolunu açar. Kısa yolu f12 tuşudur,
    bir kere basarsanız açar iki kere basarsanız kapatır.
-   **Open Firebug in New Window** : FireBug konsolunu farklı pencerede
    açmak için. Bu genelde popup pencereleri gibi küçük boyutlu
    pencerelerde FireBug konsolunun tüm sayfayı kapsadığı durumlarda çok
    işe yarıyor.
-   **Disable Firebug** : FireBug aracını pasif hale getiriyor. Bu
    özellik önemli, çünkü ajax tabanlı bazı sitelerde FireBug
    yavaşlamalara neden olabilir. Gmail'e girdiğinizde bazen bu yönde
    hatalar alırsınız.
-   **Disable Firebug for ******: Belli sitelerde firebug'ınızın
    pasif olmasını istediğinizde bu seçeneği tıklayınız. Ben Gmail için
    bu seçeneği işaretledim. Çünkü firebug'a her zaman ihtiyaç duyduğum
    için devamlı kapalı tutmak hoşuma gitmiyor.
-   **Allowed Sites** : İşaretlediğiniz siteyi firebug ile gezmeye
    tercih etmek için.
-   **Inspect the Element** : Bu menü ile HTML elemanlarını seçmek için
    kullanırız.
-   **Profile Javascript** : Bu özellik sadece FireBug aktif iken
    çalışıyor. Javascript işlemlerimizin gerçekleştiğinde nasıl
    davranacağını gösterir. Performans için önemli bir özellik.
-   **Clear Console** : FireBug "Console" tab'ını temizlemek için.
-   **CommandLine** : Console sekmesini açar.
-   **Search :** Mevcut sekmede arama alanına odaklar.

#### FireBug Konsolu

Şimdide FireBug konsolunu inceleyelim.

![FireBug Konsol][]

FireBug konsolunda 6 adet sekme vardır. Bu sekmelere bir göz atalım.

-   **Console tab** : Bu kısım işlemleri izlememizi sağlar ve aynı
    zamanda komut satırı içerir.
-   **HTML tab** : Bu sekme mevcut tarayıcı üzerinde çalışma zamanlı
    HTML elemanlarını yakalamamız, düzenlememiz ve değiştirmemizi
    sağlar. Bu sekmenin Style, Layout ve DOM isimlerinde 3 adet alt
    sekmesi vardır. İsmindende anlaşılacağı gibi Style sekmesi bizim çok
    işimize yarayacaktır.
-   **CSS tab** : Sayfaya eklenen css dosyalarını kontrol edebiliriz.
    Seçtiğimiz CSS dosyasında istediğimiz düzenlemeyi ve değişikliği
    yapabiliriz. Ben bu sekme yerine HTML sekmesi altındaki CSS
    sekmesini daha çok kullanıyorum.
-   **Script tab** : Bu sekme javascript hataları için. Bu sekmenin
    Watch ve Breakpoint adında iki alt sekmesi var.
-   **DOM tab** : DOm izlemek için kullanılan bir sekme.
-   **Net tab** : Network işlemlerini izlemek için kullanıyoruz.
    Sayfamızın ne kadar zaman yüklendiğini ve her nesnenin yüklenme
    zamanını gösterir.

#### Durum Çubuğu

FireBug Durum çubuğumuzun sağ tarafında yeşil ok ikonu ile kendini
gösterir. Burada ayrıca hata durumlarında sayfada kaç hata olduğunuda
gösterir. Bu hatalar Javascript hatalarıdır.

![FireBug Hata][]

FireBug klavye kısa yolları için [tıklayınız][]. Elinizin hızlanması
açısından önemli.

Bu yazımızda FireBug'ı genel olarak tanıdık bir sonraki yazımızda ise
CSS ve XHTML kodu yazarken FierBug'dan nasıl yararlanacağımızı
göreceğiz.

-   [http://getfirebug.com/][]
-   michaelsync.net/2007/09/08/firebug-tutorial-overview-of-firebug
-   [http://www.evotech.net/blog/2007/06/introduction-to-firebug/][]
-   yuiblog.com/blog/2007/01/26/video-hewitt-firebug/
-   [http://help.wildapricot.com/display/DOC/Using+Firefox+Firebug+Extension+for+Advanced+customization+(CSS)][]
-   thetruetribe.com/2008/03/firebug-tutorial-getting-started.html
-   [http://www.digitalmediaminute.com/screencast/firebug-js/][]
-   [http://www.ddj.com/development-tools/196802787][]
-   [http://ajaxian.com/archives/ajax-debugging-with-firebug][]
-   http://www.reybango.com/index.cfm/2007/7/22/VIDEO-Ajax-Debugging-Using-Firebug
-   [http://www.google.com/search?hl=en&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&q=Debugging+With+Firebug&btnG=Search][]
-   [http://www.youtube.com/watch?v=FsX6qwQqGgQ][]
-   http://alternateidea.com/blog/articles/2006/05/12/an-in-depth-look-at-the-future-of-javascript-debugging-with-firebug
-   [http://groups.google.com/group/firebug][]
-   [http://www.seifi.org/javascript/firebug_tips_and_tricks.html][]
-   bildirgec.org/yazi/firebug-web-gelistirimi-gelistirildi
-   [http://www.burcudogan.com/firebug-ve-hata-ayiklama-sanati-83.html][]
-   [http://code.google.com/p/fbug/source/browse/branches/firebug1.1/locale/tr-TR/firebug.dtd?r=350][]

  [http://getfirebug.com/]: http://getfirebug.com/
  [100]: /images/kurulum_penceresi.gif
  [FireBug pasif]: /images/pasif_firebug.gif
  [Fire Aktif]: /images/aktif_firebug.gif
  [1]: /images/firebug_menu.gif
  [FireBug Konsol]: /images/firebug_konsol.gif
  [FireBug Hata]: /images/firebug_hata.gif
  [tıklayınız]: http://getfirebug.com/keyboard.html "kısayollar"
  [http://www.evotech.net/blog/2007/06/introduction-to-firebug/]: http://www.evotech.net/blog/2007/06/introduction-to-firebug/
  [http://help.wildapricot.com/display/DOC/Using+Firefox+Firebug+Extension+for+Advanced+customization+(CSS)]: http://help.wildapricot.com/display/DOC/Using+Firefox+Firebug+Extension+for+Advanced+customization+(CSS)
  [http://www.digitalmediaminute.com/screencast/firebug-js/]: http://www.digitalmediaminute.com/screencast/firebug-js/
  [http://www.ddj.com/development-tools/196802787]: http://www.ddj.com/development-tools/196802787
  [http://ajaxian.com/archives/ajax-debugging-with-firebug]: http://ajaxian.com/archives/ajax-debugging-with-firebug
  [http://www.google.com/search?hl=en&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&q=Debugging+With+Firebug&btnG=Search]: http://www.google.com/search?hl=en&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&q=Debugging+With+Firebug&btnG=Search
  [http://www.youtube.com/watch?v=FsX6qwQqGgQ]: http://www.youtube.com/watch?v=FsX6qwQqGgQ
  [http://groups.google.com/group/firebug]: http://groups.google.com/group/firebug
  [http://www.seifi.org/javascript/firebug_tips_and_tricks.html]: http://www.seifi.org/javascript/firebug_tips_and_tricks.html
  [http://www.burcudogan.com/firebug-ve-hata-ayiklama-sanati-83.html]: http://www.burcudogan.com/firebug-ve-hata-ayiklama-sanati-83.html
  [http://code.google.com/p/fbug/source/browse/branches/firebug1.1/locale/tr-TR/firebug.dtd?r=350]: http://code.google.com/p/fbug/source/browse/branches/firebug1.1/locale/tr-TR/firebug.dtd?r=350
