---
layout: post
title: HTML Mailing 2 - Mailing HTML Kodunun Yazılması
Date: 2010-11-11 00:15
categories: [CSS]
---

Mailin kodlamanın çeşitli yöntemleri var ben burada kendi tercih ettiğim
yöntemi anlatmaya çalışacağım. Basit bir mailing örnek olarak
kodlayacağım, ancak birçok mailing aynı yöntem ile kodlanabilir. </span\>

Tasarımcıdan gelen kaynak dosya(psd veya png) resim işleme programı ile
açılır. Benim elim daha çok Phoshop’a alışık olduğu için onun üzerinden
anlatacağım.

Burada kodlayacağım mailing Can Gürbüz’ün tasarladığı bir mailing,
biraz sağı-solu ile oynadık tabi. Bu arada Can’a teşekkürler tasarım
için.

Örnek psd'yi indirmek için [tıklayınız.][]

![][100]

Background harici kısmı istersek Adobe Photoshop programın Slice aracı
ile keseriz, isterseniz tek tek seçip kaydedip html kodumuza ekleriz.

![][1]

Adobe Photoshop Slice aracı ile psd’mizi resim formatlarını ve mailin
metin resim durumunu düşünerek parçalarız. Mesela orta resmin olduğu
alan ile yanındaki "Lorem ipsum..." yazısının olduğu kısmı ikiye bölme
nedenimiz soldaki kısım daha az renk içerdiği için gif formatında
kaydedeceğimiz bir alan iken sağdaki kısım ise daha fazla renk içerdiği
için jpg formatında kaydetmemiz daha mantıklı olacağını düşünerek iki
kısma böldük. Diğer kısımlar basit bir parçalamadır.

![][2]

Parçalara ayırdıktan sonra web için kaydet seçeneği ile kaydetme
ekranını açıyoruz. Ayrıca slice'lanmış dosyayı psd olarak kaydedip
arşivlemekte yara var. Çünkü mailinglerde bir çok revize gelir ve bu
slide'lanmış dosyaya ihtiyaç duyarız.

![][3]

Gerek web sitesi kodlarken ve gerekse mailing yaparken resimlerimiz
gerçek boyutları ile kullanmamız pek mantıklı değildir. Çünkü kullanıcı
sayfaların veya mailing’in hızlı açılmasını ister. Bizde bu nedenle
resimlerimizi optimize ederek web sitelerine ve mailnglere ekleriz.
Resim formatları ve seçimi için ayrı bir makale yazmak lazım, neyse işin
bu kısmını geçelim. Karşımıza aşağıdaki gibi bir ekran çıkacaktır. Ben
ekranı ikiye bölmeyi tercih ediyorum. Solda resmin orijinali sağda ise
optimize edilmiş şekli olacak şekilde ayarlıyorum. Bunu görünümü üstteki
sekmeden kolayca yapabiliyoruz.

![][4]

Sağdaki optimize ettiğimiz kısımdan her parçayı seçerek ilgili formatını
belirtiyoruz. Genelde mailinglerde gif veya jpg tercih edilir.
Şimdilerde png’de yapılıyor ama az tercih edilen bir formattır png. Gif
tercihi yaptıktan sonra

![][5]

Yukarıdaki ekranda gördüğümüz şekilde format tercihini yapıyoruz.
Genelde az renkli alanlar gif seçilir çok renk olan yerler ise jpg
seçilir. Her parça için bu işlem yapıldıktan sonra Kaydet butonuna
tıklıyoruz. Karşımıza çıkan pencerede Kayıt Türü seçeneğinden “HTML and
Images (*.html) ” seçeneğini seçiyoruz. Bu seçenek bizim yerimize html
oluşturur ve resimlerimizide otomatik olarak images klasörü içine
kaydeder.

Daha sonra ufak tefek düzeltmeler için html sayfamızı bir html editörü
ile açarız. <body\> bg rengi olarak beyaz atanmış olarak gelir
htmlimiz, bizim bg rengimiz gridir bu atamayı yaparız.

```html
<body bgcolor="#858585" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
```

Daha sonra mailing ortalamak için table elementine align=”center”
eklemesi yaparız.

```html
<table width="638" height="572" border="0" align="center" cellpadding="0" cellspacing="0" id="Table_01">
```

Daha sonra bir önceki makalemizde önerdiğimiz eklemeleri yaparız.
Resimlerin alt etiketini doldururuz. Resimlerin bulunduğu yeri tam
kavraması için style=”display:block” eklemesi yaparız, bu ekleme bir çok
zaman hayat kurtarır. Normal tarayıcıda düzgün görünen htmlimizde
mailing gönderim programında arada beyaz boşluklar bırakacak şekilde
göründüğü durumları engellemek için eklenir bu kod.

Daha sonra içerik metin kısmını resim olarak bırakmak yerine metin
olarak kodlamak için resmi bu tablo hücresine bg resmi olarak
tanımlarız. Resim tek renk görünsede aslında degradeli bir yapıya sahip
olduğu için tablo hücresinin bg resmi olarak tanımlıyoruz.

```html
<td colspan="2" background="images/odul_mailing_04.gif" width="638" height="172"></td>
```

Daha sonra metinleri bu hücrenin içine yerleştirip stillerini ve
biçimlerini tanımlıyoruz.

```html
<td colspan="2" background="images/odul_mailing_04.gif" width="638" height="172" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#444444; padding-left:15px; padding-right:15px"><p><a href="#" style="color:#95ad62">Phasellus vitae</a> metus at elit commodo sollicitudin. Quisque bibendum risus non urna consequat ut luctus erat pulvinar. <strong>Proin libero eros</strong>, dapibus vel accumsan sed, malesuada eu urna. Integer lorem urna, venenatis sit amet interdum tincidunt, tristique in sem. </p>
<p><a href="#"  style="color:#95ad62">Morbi ornare</a> , <strong>nterdum elit, ac sollicitudin enim convallis sit amet. Suspendisse potenti.</strong> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
<p>Cras porta aliquet viverra. Nulla facilisi. Praesent quam neque, suscipit <a href="#"  style="color:#95ad62">scelerisque</a></p></td>
```

CSS kodlarımızı satıriçine yazdık, bu nedenle dikkat ediniz bağlantılara
tanımladığımız rengi her bir bağlantıya tek tek tanımladık. Mailing
tasarındaki gibi sayfa yukarısından mesafe bırakmak için boş bir
paragraf ekleyelim.

Resimlerimize link vermek için resim haritalama(imagemap) yöntemini
kullanabiliriz. Gelişmiş editörlerde bu işlemi kolaylaştıran araçlar
mevcuttur. bu araçlar ile şirket logosuna, alttaki şirket web sitesine
link verelim, ayrıca telefon numarasını verdiğimiz alandan iletişim
sayfasına da link verebiliriz.

Son olarakta alttaki “Bu maili göremiyorsanız...” ve “Bu mail
listesinden çıkmak istiyorsanız..” metinlerini ekleyip mailimizi
bitirelim.

Örnek mailingi görmek için [tıklayınız.][6]

## Sonuç

Burada kodladığım mailing basit bir mailingdi belki, ancak burada
sizlere işin genel mantığını anlatmak için basit bir mailing seçtim.
Amaç işin mantığını anlatabilmekti. Genel çerçeveleri ile mailing
kodlarken bu adımları takip ederiz. Bir başka yöntemde tablo yapımızı
kurup ilgili resimleri tek tek kesip ilgili hücrelere ekleyerek
yapmaktır. İnternette yapılmış birçok mailing örneğini bulabilirsiniz
bunları inceleyerek işin mantığını kafanızda tam olarak
oturtabilirsiniz. [http://www.campaignmonitor.com/templates/][] buradaki
örnekler mesela.

Sağlıcakla kalın.

## Kaynaklar

-   http://www.mediaministryblog.com/2009/08/how-to-create-a-free-email-newsletter
-   [http://www.anandgraves.com/html-email-guide/#unnecessary_htmltags][]
-   [http://css-tricks.com/using-css-in-html-emails-the-real-story/][]
-   [http://www.devwebpro.com/create-an-email-newsletter-template-part-2/][]
-   [http://24ways.org/2009/rock-solid-html-emails][]
-   [http://www.tuttoaster.com/code-an-email-newsletter-from-psd-to-html/][]
-   [http://sixrevisions.com/web_design/creating-html-emails/][]</a>

  [Can Gürbüz]: cangurbuz.com
  [tıklayınız.]: /dokumanlar/mailing_yapmak/mailing.rar
  [100]: /images/mailing_ornegi.jpg
  [1]: /images/mail_yapmak_slice_araci.gif
  [2]: /images/mail_yapmak_slicelanmis-300x269.jpg
  [3]: /images/mail_yapmak_webicin_kaydet.gif
  [4]: /images/mail_yapmak_webicin_ekrani-300x172.jpg
  [5]: /images/mail_yapmak_format_drdn.gif
  [6]: /dokumanlar/mailing_yapmak/mailing.html
  [http://www.campaignmonitor.com/templates/]: http://www.campaignmonitor.com/templates/
  [http://www.anandgraves.com/html-email-guide/#unnecessary_htmltags]: http://www.anandgraves.com/html-email-guide/#unnecessary_htmltags
  [http://css-tricks.com/using-css-in-html-emails-the-real-story/]: http://css-tricks.com/using-css-in-html-emails-the-real-story/
  [http://www.devwebpro.com/create-an-email-newsletter-template-part-2/]: http://www.devwebpro.com/create-an-email-newsletter-template-part-2/
  [http://24ways.org/2009/rock-solid-html-emails]: http://24ways.org/2009/rock-solid-html-emails
  [http://www.tuttoaster.com/code-an-email-newsletter-from-psd-to-html/]: http://www.tuttoaster.com/code-an-email-newsletter-from-psd-to-html/
  [http://sixrevisions.com/web_design/creating-html-emails/]: http://sixrevisions.com/web_design/creating-html-emails/
