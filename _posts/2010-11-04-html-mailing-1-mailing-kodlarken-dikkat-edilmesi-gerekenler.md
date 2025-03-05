---
layout: post
title: HTML Mailing -1&#58; Mailing Kodlarken Dikkat Edilmesi Gerekenler
Date: 2010-11-04 00:27
Category: XHTML
tags: [e-posta, gmail, hotmail, mailing, spam]
---

İnsanlar bildirileri, duyuruları yaymak için çeşitli araçlara
başvururlar bu internet olmadan önce ve hala broşürler, mektuplar,
afişler vs ile yapılırdı internet ile birlikte ise mail yolu yapılmaya
başlandı. Normal metinsel mailinglerin yanı sıra html ile daha
görselliği arttırılmış maillerde gönderilmeye başlandı. İşte bu
görselliği arttırılmış html mail içeriğine mailing diyoruz.

Uzun bir aradan sonra bir mailing yapınca aklıma geldi, mailing yaparken
nelere dikkat edilmeli diye bir makale yazmak. Çok uzun süre mailing
yaptım diyebilirim, yaklaşık 3-4 sene mailing kestim. HTML
kodlayıcı(arayüz geliştirici) için mailing ilk ciddi test aracıdır.
Mailing her nekadar benim mantığıma göre çok işlevsel bir araç olmasa da
müşteri için helede kurumsal müşteriler için vazgeçilmezdir. Ben birçok
kurumsal mailingi okumadan çöpe atıyorum. Ama bir gerçek varki mailing
hala etkisini kaybetmeden devam ettiren bir araçtır(müşteri için).

Bu makalede sadece ipuçları verip bitirmeyi düşünüyordum, mailing kesmek
o kadar basit bir konu değil bu nedenle 2 başlık altında yazmaya karar
verdim. İlki bu makale mailing kodlarken nelere dikkat etmemiz
gerektiğini ve mail kodlarken nelere ihtiyacımız olduğunu
toparlayacağım, ikinci makalemde basit bir örnek ile mail kodlamayı
göstermeye çalışacağım. Mailing konusunda birde gönderim konusu var,
ancak ben işin bu kısmı ile fazla ilgilenmediğim için bir şey yazmam
mantıklı değil, bu konuda internette yeterli araştırmaları yaparak bilgi
edinebilirsiniz.

Şimdi ilk makalemizi yazalım.

## Mailing kodlarken nelere dikkat etmemiz gerekir

HTML kodlarken farklı tarayıcılar için kod yazarız bu kodlamadaki en
önemli noktadır, mailingde ise iş daha vahimdir, çünkü mailing okuma
araçları çok farklıdır ve bu araçlar normal html ve css standartlarının
bir çok özelliği desteklemez.

**Mailing Destekleme Listeleri**

İlk önce mailing standartlarını incelemekte yarar var bence, neyi
destekleyip desteklemediğini bilmek önemli.

Popüler mailing programlarının css destekleme listesini görmek için
[tıklayınız.][]

Benzer listeler webde çok var diğer bir liste email-standards.org

Bu listeleri incelmeliyiz ve kodumuzu yazarken buna göre hareket
etmeliyiz.

**HTML Görünümünü Tablo/Div ile Kodlama**

Her nekadar uzun süredir web sitelerini kodlarken katman(div) ile
kodlamayı savunsam da mailingde durum farklıdır, mailing planını
kodlarken tablolardan yardım almak daha mantıklıdır. Bunun nedeni
mailing destekleyicilerinin yeni standartları desteklememesidir.

Mailing yapısını oluştururken tablolu yapı kullanmalıyız. Uzun süredir
katmanlı yapı ile kod yazan biri için tablolu yapıya dönmek zor oluyor,
ama Allah'tan genelde basit yapılara sahip oldukları için sorun olmuyor.

**CSS Kodlarınızı Satıriçi Yazın**

Birçok mailng html çevrildikten sonra toplu olarak gönderim için çeşitli
programlar kullanılır. Bu programların göndericiler için çeşitli
kısıtlamaları vardır. Bunlardan bir tanesi, genelde hazırlana html
kodunun sadece <body\> etiketleri içerisindeki kodu eklememize izin
vermesidir.

Bu nedenle dışarıdan eklenen .css dosyaları mailinglerimize ekleyemeyiz.
Bunu destekleyen programlar var ise de benim çalıştığım birçok müşteride
bu programlar yoktu. Bundan dolayıdır ki css kodlarımızı satıriçi
yazmalıyız. Aşağıdaki örnekte görüldüğü gibi

{% highlight html %}
<p style="font-family:Arial; font-size:12px; color:#999">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
{% endhighlight %}

Tabi kodları yazarken yukarıdaki destek listelerini dikkate almalıyız.

**Resimleri ve Bağlantıları İnternet Üzerinden Verin**

Mailingler web siteleri gibi html çevrilseler de kullanıcının e-posta
kutusuna düşen kodlardır, bu nedenle kullanıcıya yükleyemeyeceğim ve
kullanıcı bilgisayarına göre hareket edemeyeceğimiz durumlar söz
konusudur.

Bunlardan bir tanesi resimlerdir, hazırladığımız resimleri kullanıcı
bilgisayarına yükleyemeyeceğimiz için bunları kendi sitemiz üzerine
yükleyip hazırladığımız mailing içeriğine bu resimleri kendi sitemiz
üzerinde okutmalıyız. Örneğin

{% highlight html %}
<img src="http://www.firmaadi.com/mailings/images/ustalan.jpg" width="450" height="120" alt="Firma_Adi" />
{% endhighlight %}

Web siteleri gibi hareket edemeyeceğimiz diğer bir konu ise bağlantıları
yerel olarak vermeyeceğimiz konusudur. Bağlantılarımızıda yerel
veremeyiz örneğin

{% highlight html %}
<a href="hakkimizda.html">Hakkımızda</a>
{% endhighlight %}

Şeklinde bir bağlantı kırık bir bağlantı olacaktır. Bunun yerine

{% highlight html %}
<a href="http://www.firmaadi.com/hakkimizda.html">Hakkımızda</a>
{% endhighlight %}

Şekline olmalıdır.

**Test Etmeyi Unutmayın**

Mailing yapılarının web sitelerinde daha sıkıntılı yapıları vardır.
Bunlardan en önemlisi mailing gönderildikten sonra html koduna müdahale
imkanımızın sıfır olmasıdır. Bu nedenlede mailing gönderilmeden tüm
sorunların giderilmiş olması lazımdır. Birçok zaman mailing ile ilgili
sorunlar yaşmışızdır, bu kaçınılmaz bir durumdur, ancak bunu en aza
indirmek için testlerimiz gönderimden önce yapmalıyız.

Web üzerinde; **Hotmail**, **Gmail** ve **Yahoo** üzerinden
PC'de ise **Outloook** ve **Thunderbird** üzerinden testlerimizi
yapmalıyız.
Farklı Tarayıclar ile İnternet Explore 6 ve 7 ve Firefox ile test
etmeliyiz.

**title ve alt Değerlerini Yazmayı unutmayın**

Şimdilerde birçok mail okuma programı resimleri ilk mail yüklenirken
yüklememekte ve kullanıcıdan izin istediğinden ve resimlerin yolunun
kırık olma ihtimalinide dikkate alarak resimlerin alt elemanını boş
bırakmayın. Aynı şekilde bağlantılarıda title özelliğini ekleyerek daha
kullanışlı hale getirin.

**Mailing Genişliğini**

Mailing genişliği web sitesi genişlik standartlarında farklıdır. Mailing
okuyucular olarak Outlook ve Thunderbird gibi araçların 3 kolonlu
yapıları göz önüne alınarak tasarlamalıyız. 1024*768px çözünürlüğe göre
mailingimizi tasarladığımızda 3 kolonlu bir yapıda mailing genişliğimiz
750px veya daha düşük olacaktır. Tasarım yaparken bunu dikkate almak
önemlidir.

Eğer 800x600 çözünürlük düşünüyorsak 6oopx genişlik mailingimizin
genişliği olmalıdır.

Mailing genişliğini 600px olarak düşünüp tasarlarsak bir sorun
yaşamayacağımızı bilmeliyiz ve ona göre davranmalıyız.

**Mailing İçeriğinde Kullanılmayacak Elemanlar**

Gerek Form elemanları ve gerekse javascript kodları mailing içinde
kullanmak sakıncalıdır. Birçok program ve mail sitesi güvenlik
açıklarında çok sıkı davranır. Bu nedenle hiç bir javascript ve form
işlemine izin vermez.

Daha önce yaşanan birçok script açıkları ile başı ağırmış bu araçlar
yazdığınız bu kodlar nedeni ile gönderdiğiniz mailleri spam olarak
niteleme ihtimali yüksektir.

Ayrıca birçok mailing programı flash desteklemez bu nedenle mailing
kodlarımıza flash import edemeyiz.

Bazı HTML etiketlerini kullanılması anlamsız ve sorun yaratabilir. Bu
etiketleri sıralayalım; `<META\>`, `<BASE\>`, `<LINK\>`, `<SCRIPT\>`,
`<FRAMESET\>`, `<FRAME\>`, `<IFRAME\>` ve yorum kodu

**Spam Mailden Kaçınmak için Yapmamız Gerekenler**

Spam mailller internet dünyasının baş belalarında biridir. Birçok mail
programı spam mailleri en aza indirmek için birçok filtre
uygulamaktadır. Bizlerin bu filtrelere mailinglerimizi hazırlamamız
gerekir. Spama düşen mailler hiç bir anlam ifade etmez ve müşteri ile
aramızın açılmasına neden olabilir.

Kısaca spama yakalanmamak için dikkat etmemiz gerekenleri listeleyelim

-   Mailinglerinizdeki bütün domainlerin "gönderen" kısmında görülen
    adresteki domainler aynı olmalı. Örneğin info@sirketadi.com
    adresinden gönderim yapıyorsanız, mailing bağlantılarında da
    www.sirketadi.com/xxx şekliden adreslere gitmeli.
-   Domaininiz karalistede mi değil mi kontrol edin. Çeşitli siteler var
    bu konuda tarama yapabileceğiniz.
    [http://www.blacklistmonitoring.com/lookup/email_blacklist_IP_address_lookup.php][]
-   Mailiniz yüklenmemesi durumunda alternatif bir bağlantı oluşturun ve
    mailinizi altına ekleyin.
-   Kullanıcıların listenizden çıkabilmelerin sağlayacak bir link
    ekleyin mailinizin sonuna
-   Tüm kelimeleri büyük harflerle yazmak. Örneğin: MERHABA BU
    KAMPANYADA...
-   Çok fazla yazı rengi kullanmak. Örneğin:
    `<span style="color:red"\>MERHABA</span\>`
    `<span style="color:blue"\>BU</span\>`
    `<span style="color:pink"\>KAMPANYADA...</span\>`
-   Bir çok spam içeriğinde geçen kelimelere yer vermek. Örneğin: Free,
    Casino, Mortgage, Ücretsiz vs.
-   Çok fazla noktalama işareti kullanmak. Örneğin Dikkat!!!!!!! Büyük
    Kampanya!!!!!!
-   Mailing'in tamamının resimlerden oluşması bazı mail okyucuları
    tarafından spam olarak işaretlenmesine neden olabilir. Mailing
    içinde metin olması önemlidir.
-   Mailing'in başına veya sonuna kullanıcının mail listesinden
    çıkmasını sağlayacak bir metin ekleyin.

Bu konu çok ayrıntısı olan bir konu ben bu kadarına değinmek ile
yetineyim.

Bir sonraki dersimde basit bir mailingin nasıl kodlanacağını anlatmak
olacaktır.

Kalın sağlıcakla.

## Kaynaklar

-   [http://www.viget.com/inspire/tips-for-coding-html-email/][]
-   thinkvitamin.com/features/design/ensuring-your-html-emails-look-great-and-get-delivered/
-   [http://www.anandgraves.com/html-email-guide][] (iyi)
-   email-standards.org/
-   [http://css-tricks.com/using-css-in-html-emails-the-real-story/][]
-   email-standards.org/clients/
-   [http://www.campaignmonitor.com/css/][]
-   [http://www.topluemailgonderimi.com/spamadusmedennasiltopluemailgonderilir.html][]


  [tıklayınız.]: http://www.campaignmonitor.com/css/ "tıklayınız."
  [http://www.blacklistmonitoring.com/lookup/email_blacklist_IP_address_lookup.php]: http://www.blacklistmonitoring.com/lookup/email_blacklist_IP_address_lookup.php
  [http://www.viget.com/inspire/tips-for-coding-html-email/]: http://www.viget.com/inspire/tips-for-coding-html-email/
  [http://www.anandgraves.com/html-email-guide]: http://www.anandgraves.com/html-email-guide
  [http://css-tricks.com/using-css-in-html-emails-the-real-story/]: http://css-tricks.com/using-css-in-html-emails-the-real-story/
  [http://www.campaignmonitor.com/css/]: http://www.campaignmonitor.com/css/
  [http://www.topluemailgonderimi.com/spamadusmedennasiltopluemailgonderilir.html]: http://www.topluemailgonderimi.com/spamadusmedennasiltopluemailgonderilir.html