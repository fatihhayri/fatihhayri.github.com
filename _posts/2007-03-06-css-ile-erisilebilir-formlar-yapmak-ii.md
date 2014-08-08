---
layout: post
title: CSS ile Erişilebilir Formlar Yapmak - II
Date: 2007-03-06 00:10
Category: CSS, Web Standartları, XHTML
tags: CSS, Web Standartları, XHTML
---

## Gelişmiş Form Yapıları

Gelişmiş yapılı formlarda tablo kullanmak daha kolayımıza geliyor. Ancak
burada bir sorunumuz varki formlar veri içeren tablolar değildir ve
doğru kodlama için form yapılarını oluştururken tablo kullanmak web
standartlarına uygun değildir.

Biz burada daha karışık yapılı bir formu nasıl tablo kullanmadan planlar
ve güzelleştiririz onu anlatmaya çalışacağız. Tabi bu kodlamanın bazı
zorlukları olacaktır ama genel yapı anlaşılırsa yapılamayacak form
kodlaması yoktur. Aşağıda kodlayacağımız formun resmini görüyoruz.

![CSS ile Form][]

Kodlamayı yaparken dikkat edeceğiz konu kullanıcıyı yormayan güzel
görünümlü ve erişilebilirliği yüksek formlar hazırlamaktır. [Bir önceki][] yazımızda **fieldset** ve **legend** ve **label**
etiketlerinden bahsettiğimiz için burada bu etiketler hakkında tekrar
bir bilgi vermeyeceğiz. Diğer makalelerden farklı olarak bu makalede tüm
kodları verip sonra açıklamalarını yapacağız, bunun nedeni form
alanlarına ait tanımların bir çoğunun genel tanımlama olması ve bir
tanımın bir çok etiketi etkilemesidir. XHTML Kodumuzu yazalım:

	:::html

    <form action="gonder.html" method="post" id="formset">
    <fieldset>
    <legend>Genel Bilgiler</legend>
    <label class="adAlani">Ad <em>&#42;</em>
    <input name="ad" type="text" id="ad" value="" />
    </label>
    <label class="soyadAlani">Soyad <em>&#42;</em>
    <input name="soyad" type="text" id="soyad" value="" />
    </label>
    <label class="adresAlani">Ev Adresi <em>&#42;</em>
    <input name="adres" type="text" id="adres" value="" />
    </label>
    <label class="sehirAlani">Şehir <em>&#42;</em>
    <input name="sehir" type="text" id="sehir" value="" />
    </label>
    <label class="postakoduAlani">Posta Kodu <em>&#42;</em>
    <input name="postakodu" type="text" id="postakodu" value="" />
    </label>
    <label class="epostaAlani hata">Eposta &#42;
    <input name="eposta" type="text" id="eposta" value="" class="hata" />
    </label>
    <label class="telAlani">Telefon<input name="tel" type="text" id="tel" value="" />
    </label>
    </fieldset>
    <fieldset>
    <legend>Konu <em>&#42;</em></legend>
    <input id="radiobutton_1" type="radio" name="radiobutton_type" value="" />
    <label class="konuRadyoButon" for="radiobutton_1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </label>
    <input id="radiobutton_2" type="radio" name="radiobutton_type" value="" />
    <label class="konuRadyoButon" for="radiobutton_2">Cras diam. Suspendisse potenti. In dictum bibendum est. Aliquam semper. Sed vel massa. Praesent imperdiet nisi eget lacus. </label>
    <input id="radiobutton_3" type="radio" name="radiobutton_type" value="" />
    <label class="konuRadyoButon" for="radiobutton_3">Phasellus quis enim. </label>
    <input id="radiobutton_4" type="radio" name="radiobutton_type" value="" />
    <label class="konuRadyoButon" for="radiobutton_4">Vestibulum ut lectus ac leo luctus aliquam. </label>
    </fieldset>
    <fieldset>
    <legend>Düşünceleriniz</legend>
    <label class="aciklamaAlani">Düşüncelerinizi aşağıdaki alana yazınız.<br /><textarea name="describe" cols="35" rows="5"></textarea>
    </label>
    </fieldset>
    <fieldset>
    <legend>Onay Alanı</legend>
    <input id="checkbox_1" type="checkbox" name="kabul" value="y" /><label for="checkbox_1" class="onayAlaniIsaretKutusu">Site kurallarını kabul ediyorum.</label>
    <input id="checkbox_2" type="checkbox" name="kabul" value="y" /><label for="checkbox_2" class="onayAlaniIsaretKutusu">Site kurallarını kabul etmiyorum.</label>
    </fieldset>
    <blockquote><strong>Not:</strong> Yanında (<em>*</em>) işareti olanlar zorunlu alanlardır.</blockquote>
    <input type="submit" name="submit" value="GÖNDER" class="formbutton" />
    </form>


Yukarıdaki kodlama aslında bir çok açıdan basit yapılı formalara
benziyor. "Bir çok karmaşık yapı basit yapıların birleşiminden oluşur"
genel kabulü tam durumumuzu açıklayan cümle. Bu kodlamanın farkı normal
akış dışına çıkacak(yani iki kolonlu olacak yerlerde) elementlere id
tanımı yaparak konumlandırma işlemi yapmaktır. Şimdi sıra CSS kodunu
yazmaya geldi.

	:::css

    /* genel stiller */
    * {
	    margin: 0;
	    padding: 0;
    }
    body {
	    font: 12px/14px Arial, Helvetica, sans-serif;
	    background-color:#07A;
	    text-align: center;
	    margin:20px 0;
    }
    /* form stilleri */
    form#formset {
	    width: 360px;
	    margin: 0 auto;
	    text-align: left;
	    color:#fff;
    }
    form#formset fieldset {
	    margin: 0 0 1em 0;
	    padding: 1.5em 1.5em 0 1.5em;
	    border: #DDD 1px solid;
    }
    form#formset fieldset legend {
	    font-weight: bold;
	    color: #fff;
	    padding:0 0.5em;
    }
    form#formset label {
	    display: block;
	    width: 290px;
	    font-size: 12px;
	    line-height: 14px;
	    padding: 0px 0px 12px 0px;
    }
    form#formset fieldset input {
	    display: block;
	    margin-top: 3px;
	    border:1px solid #fff;
	    border-left:5px solid #fff;
	    background-color:#09c;
	    color:#ffc;
    }
    form#formset label.adAlani, form#formset label.adresAlani,
    form#formset label.sehirAlani,
    form#formset label.epostaAlani {
	    clear: left;
    }
    form#formset label.adAlani,
    form#formset label.soyadAlani,
    form#formset label.sehirAlani,
    form#formset label.epostaAlani,
    form#formset label.telAlani {
	    float: left;
	    margin: 0px 10px 0px 0px;
	    width: 150px;
    }
    form#formset label.adAlani input,
    form#formset label.soyadAlani input,
    form#formset label.epostaAlani input,
    form#formset label.sehirAlani input,
    form#formset label.telAlani input {
	    float: left;
	    width: 150px;
	    padding: 0px;
    }
    form#formset label.postakoduAlani {
	    float: left;
	    width: 80px;
    }
    form#formset label.postakoduAlani input {
	    float: left;
	    width: 80px;
    }
    form#formset label.adresAlani {
	    float: left;
	    width: 310px;
	    margin: 0px 0px 0px 0px;
    }
    form#formset label.adresAlani input {
	    float: left;
	    width: 310px;
	    padding: 0px;
    }
    form#formset fieldset input#radiobutton_1,
    form#formset fieldset input#radiobutton_2,
    form#formset fieldset input#radiobutton_3,
    form#formset fieldset input#radiobutton_4 {
	    clear: left;
	    float: left;
	    padding: 0px;
	    border:0;
	    margin: 0px 0px 0px 0px;
	    background-color:#07a;
    }
    form#formset label.konuRadyoButon {
	    clear: none;
	    margin: 0px 0px 0px 25px;
	    padding: 0px 0px 15px 0px;
    }
    form#formset fieldset input#checkbox_1,
    form#formset fieldset input#checkbox_2,
    form#formset fieldset input#checkbox_3 {
	    clear: both;
	    float: left;
	    padding: 0px;
	    margin: 0px;
	    border:0;
	    background-color:#07a;
    }
    form#formset label.onayAlaniIsaretKutusu {
	    clear: none;
	    margin: 0px 0px 0px 25px;
	    padding: 0px 0px 15px 0px;
    }
    form#formset textarea {
	    display: block;
	    margin-top: 3px;
	    border:1px solid #fff;
	    border-left:5px solid #fff;
	    background-color:#09c;
	    color:#ffc;
    }
    form#formset blockquote{
	    margin-bottom:10px;
    }
	    form#formset fieldset em, form#formset blockquote em{
	    color:#ff0;
    }


Yukarıdaki kodlamada önemli görülen tanımları biraz daha açıklamaya
çalışalım:

-   Genel Seçicisi (***{}**) kullanarak tüm elementlerin margin ve
    padding'lerini sıfırlıyoruz, böylece tüm elementler için ayrıca bu
    tanımı yapmaya gerek duymuyoruz(özel durumlar hariç.)
-   **body** seçicisine atadığımız özelikler sayfayı ortalamak için
    **text-align** tanımı yapıldı.
-   **form#formset** şeklinde forma id vermemizin nedeni sayfa içinde
    eğer birden fazla form olursa veya sitede genel bir css dosyası
    kullanıyorsak diğer formları etkilememek. Burada yapılan tanımlar
    genel tanımlardır.
-   <span class="alternatifard"\>**form#formset fieldset**</span\>
    tanımında form alanlarını bir çerçeve içine aldık ve içerikle
    kenarlık arasına boşluk koyduk. Her bölümü ayrı çerçeveye almamızın
    nedeni bölümler arasındaki farka vurgu yapmaktır.
-   **form#formset fieldset legend** genel tanımı ile form bölümlerinin
    başlıklarına genel tanımlama yaptık.
-   <span class="alternatifard">**form#formset label**</span>
    tanımlaması ile formdaki tüm label'lar düşünülerek genişlik ve
    mesafe tanımları yapılmıştır.
-   **form#formset fieldset input** tanımlaması ile genel kullanıcı
    girişi(input) görünüm yerine kendi görünümümüze uygun tanımlar
    yapılmıştır.
-   **form#formset label.adAlani, form#formset label.adresAlani,
    form#formset label.sehirAlani, form#formset label.epostaAlani**
    seçicilerine **clear:left** tanımı yapılarak bu sınıflara ait
    alanları formun soluna yerleştiriyoruz.
-   Daha sonra Formun **Genel Bilgiler** kısmı içindeki form
    elementlerine genişlik ve float tanımı yapılıyor. Aynı şekilde
    kullanıcı girişlerinede(input) aynı tanımlar yapılıyor.
-   **57 - 74** satırları arasında Genel Bilgi Alanındaki diğer
    alanlardan farklı olan Ev adresi ve Posta Kodu alanlarına özel
    tanımlamalar yapılıyor. Genelde css kodlarken başta genel tanımalar
    yapılır sonra genelden farklı olan özel tanımlamalar yapılır.
-   **75 - 87** satırları arasında Form alanının **Konu** kısmı
    içeriğindeki radyo butonları ve içerik kısımlarına ait konumlandırma
    ve mesafe değerleri tanımlanmıştır.
-   **88 - 99** satırları arasında Form alanının **Onay** kısmı
    içeriğindeki işaret kutuları ve içerik kısımlarına ait konumlandırma
    ve mesafe değerleri tanımlanmıştır.
-   <span class="alternatifard">**form#formset textarea**</span>
    tanımlaması ile düşüncelerimiz alanı içindeki metin alanı tanımları
    girilmiştir.
-   Genelde forumlar oluşturulurken kullanıcıdan bazı alanların zorunlu
    doldurulması istenir. Bunu için
    <span class="alternatifard">**form#formset blockquote**</span>
    tanımlaması yapılmıştır.

Yukarıda gelişmiş form kodlamasını gördük son olarak formda doldurulması
gereken bir alanın doldurulmaması halinde çıkacak uyarı mesajı ve
bilginin girilmesi gereken alanın kullanıcının daha kolay görmesi için
stil tanımını yapalım. XHTML kodunu başına

	:::html
    <div class="hata">
    	Dikkat aşağıda sarı renk ile belirtilen yerlerde hata var.
    </div>


tanımlaması ve hataya neden olan alana(mesela e-posta girilmemiş olsun)
sınıf tanımlaması ekleyelim.

	:::html
    <label class="epostaAlani hata">Eposta &#42;
    <input name="eposta" type="text" id="eposta" value="" class="hata" />

CSS kodunu ekleyelim

	:::css
    form#formset fieldset input.hata {
	    display: block;
	    margin-top: 3px;
	    border:1px solid #ff0;
	    border-left:5px solid #ff0;
	    background-color:#ccc;
	    color:#ffc;
    }
    form#formset fieldset label.hata {
	    color:#ff0;
	    font-weight:bold;
    }
    div.hata {
	    background:#FFFFCC url(images/hata.png) no-repeat scroll 5px;
	    border:1px solid #FFCC66;
	    margin:0pt 0pt 10px;
	    padding:5px 10px 5px 35px;
	    color:#000;
    }


Hata mesajının yanına bir ünlem ikonu koyduk ve farklı zemin rengi ve
kenarlığı ile kullanıcının dikkatini buraya çektik. Ayrıca hatanın
meydana geldiği alanı sarı renk ile tanımlayarak daha dikkat çekici
yaptık. Dikkat ederseniz amaç devamlı kullanıcıya formumuzu daha
anlaşılabilir ve kolay erişilebilir yapmak.

En son gönder butonunun css kodunu yazalım.

	:::css
    .formbutton{
	    cursor:pointer;
	    border:0;
	    background:#999;
	    color:#666;
	    font-weight:bold;
	    padding: 1px 2px;
	    background:url(images/buton_bg2.gif) repeat-x left top;
    }


Buton zeminine degrade 1px genişliğinde bir resim koyarak hoş görünümlü
bir buton elde ettik.

Sonuç sayfasını görmek için [tıklayınız.][]

Aşağıda kaynaklar kısmında da erişebileceğiniz bir çok form stilleri ve
tasarımları mevcut göz atmanızı öneririm. Amaç web standartlarına uygun
ve kullanıcı taraflı formlar yapmak. Kodlama aşağıdaki web
tarayıcılarında test edilmiştir.

-   Firefox 1.0 +
-   Internet Explorer 5.5 +
-   Opera 7.54 +

**Not:** Görünümde Firefox ve Internet Explorer arasında ufak
farklılıklar mevcut, bu farklılıkların çok ufak olması nedeni ile bir
düzeltme kodu(fix) yazma gereği duymadık.

## Kaynaklar

-   [http://www.webcredible.co.uk][]
-   [http://www.websiteoptimization.com/][]
-   [http://www.picment.com/][]
-   [http://www.dynamicdrive.com/][]
-   [http://www.cssplay.co.uk/][]
-   [http://www.456bereastreet.com/][]
-   [http://www.smashingmagazine.com/][]
-   [http://www.skyrocket.be/][]
-   [http://www.subtraction.com/][]
-   [http://www.stuffandnonsense.co.uk/][]
-   [http://paularmstrongdesigns.com/][]
-   [http://nidahas.com/][]
-   [http://www.alistapart.com/][]
-   [http://www.roscripts.com/][]

  [100]: /images/yazici_ikon.gif
  [sayfanın çıktısını al]: javascript:print()
  [1]: /images/pdf_ikon.gif
  [pdf olarak indir]: /pdf/CSS_ile_Erisilebilir_Formlar_Yapmak_II.pdf
  [CSS ile Form]: /images/sonuc_sayfasi.kucukresim.gif
  ![CSS ile Form]: /images/sonuc_sayfasi.gif
  [Bir önceki]: http://www.fatihhayrioglu.com/?p=276
  [tıklayınız.]: /dokumanlar/css_ile_form_2.html
  [http://www.webcredible.co.uk]: http://www.webcredible.co.uk/user-friendly-resources/css/css-forms.shtml
  [http://www.websiteoptimization.com/]: http://www.websiteoptimization.com/speed/tweak/forms/
  [http://www.picment.com/]: http://www.picment.com/articles/css/funwithforms/
  [http://www.dynamicdrive.com/]: http://www.dynamicdrive.com/style/csslibrary/category/C6/
  [http://www.cssplay.co.uk/]: http://www.cssplay.co.uk/menu/form.html
  [http://www.456bereastreet.com/]: http://www.456bereastreet.com/archive/200701/styling_form_controls_with_css_revisited/
  [http://www.smashingmagazine.com/]: http://www.smashingmagazine.com/2006/11/11/css-based-forms-modern-solutions/
  [http://www.skyrocket.be/]: http://www.skyrocket.be/2006/01/09/semantic-horizontal-forms/
  [http://www.subtraction.com/]: http://www.subtraction.com/archives/2005/0822_free_form_fo.php
  [http://www.stuffandnonsense.co.uk/]: http://www.stuffandnonsense.co.uk/archives/trimming_form_fields.html
  [http://paularmstrongdesigns.com/]: http://paularmstrongdesigns.com/projects/awesomeform//
  [http://nidahas.com/]: http://nidahas.com/2006/01/12/forms-markup-and-css/
  [http://www.alistapart.com/]: http://www.alistapart.com/articles/prettyaccessibleforms
  [http://www.roscripts.com/]: http://www.roscripts.com/Tableless_forms-112.html
