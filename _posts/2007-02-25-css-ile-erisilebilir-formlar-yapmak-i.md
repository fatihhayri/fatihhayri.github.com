---
layout: post
title: CSS ile Erişilebilir Formlar Yapmak - I
Date: 2007-02-25 23:37
Category: CSS, Web Standartları, XHTML
---

Kullanıcı ile irtibatımızı sağlayan, sayfalarımıza interaktiflik
kazandıran html elementleridir formlar. Bu makalede hep beraber
Formların nasıl CSS ile tablo kullanılmadan oluşturulduğunu göreceğiz.

CSS ile daha erişilebilir ve esnek yapılı form kodlamayı iki kısma
ayırabiliriz. Formların etiketlerinin yerlerini
planlamak(konumlandırmak) ve form elementlerini güzelleştirerek daha
göze hoş gelen ve işlevsel bir hala getirmek.

Makalemizin başlığını "CSS ile Erişilebilir Formlar Yapmak" koyduk peki
bu Erişilebilirlik(Accessible) nedir? Erişilebilirlik kullanıcının bir
çok araç(bilgisayar, cep telefonu, pda vb.) ve durumda sayfa ve
öğelerine en kolay ve düzgün bir şekilde erişebilmesidir. Web
standartlarına uygun kodlamanın en önemli amaçlarından biridir
Erişilebilirlik.

## Basit Form yapılarının CSS ile kodlamak

Basit bir form yapısını planlayarak başlayalım. Web sitelerinde en çok
kullanılan formlar kullanıcı giriş formlarıdır. Beraberce CSS ile
planlanmış bir kullanıcı girişi formu yapalım. Xhtml kodunu yazalım.

	:::html
	<form action="/gonder/login" id="kullaniciGiris" method="post">
	    <dl>
	     <dt><label for="ad">Kullanıcı Adı :</label></dt>
	    <dd><input type="text" id"ad" name="ad" /></dd>
	     <dt><label for="eposta">Eposta:</label></dt>
	    <dd><input type="text" id="eposta" name="eposta" /></dd>
	     <dt><label for="hatirla">Beni hatırla</label></dt>
	    <dd><input type="checkbox" id="hatirla" name="hatirla" /></dd>
	     <dt><input type="submit" value="Gönder" /></dt>
	    </dl>
	</form>

![Login Ekranının Firefox Ekran görüntüsü](/images/loginform1.gif)

Bu tip küçük form sayfalarında tanım listelerinin(dl, dd ve dt) kullanılması düzen ve kullanım kolaylığı açısından çok önemlidir.
<label\> etiketinin kullanılması iki açıdan önemlidir. İlki küçük ekranlı
araçlarda(cep telefonu,pda vb.) form elementlerinin kullanımını
kolaylaştırır label/ID ilişkisi ile. İkinci olarak radyo buton ve işaret
kutularında metin ile tümleşik hareket etmemizi sağlar, yani Beni
hatırla metnine tıkladığımızda işret kutusu işlevi gösterir.

Şimdi CSS ile form elemanlarını yerlerine koyalım.

Bu formu tablo ile yaptığımız gibi yanyana koymak için genişlik ve float
tanımı yapıyoruz.

	:::css
	form dt {
	    width: 8em;
	    float: left;
	    text-align: right;
	    margin-right: 0.5em;
	    display: block;
	}

Sağdaki form elemanları ile soldakiler arasına boşluk bırakmak için
genişlik değeri veriyoruz.

	:::css
	form dd {
	    margin-left: 4.5em;
	}


![][100]

Bir çok sitede kullanılan kullanıcı giriş(login) formlarını CSS yardımı
ile kodladık. Şimdi görünüşünü düzeltelim.

Metinlerimizi font tanımı yapalım:

	:::css
	form dt {
	    width: 8em;
	    float: left;
	    text-align: right;
	    margin-right: 0.5em;
	    display: block;
	    font:12px Arial, Helvetica, sans-serif;
	}

Metin giriş alanlarını standart görünümünden çıkarıp kendi istediğimiz
renklere büründürelim.

	:::html
	<dd><input name="ad" type="text" class="metinAlani" id"ad" /></dd>

CSS kodu;

	:::css
	input.metinAlani{
	    color: #781351;
	    background-color: #b5c9e2;
	    border: 1px solid #31557f;
	    font:10px Arial, Helvetica, sans-serif;
	}

Gönder düğmesinin şeklini değiştirelim. Burada renk uyumu form
alanlarımızın daha hoş görünmesi için önemlidir. Renk seçimi yaparken
genelde site bütünlüğünü bozmamak için site genel renk değerleri
seçilir. Ama bu bir kural değildir.

	:::html
	<dt><input type="submit" class="gonder" value="Gönder" /></dt>

CSS kodu;

	:::css
	input.gonder{
		color: #224059;
	    background-color: #b5c9e2;
	    border-top: 2px #cce3ff solid;
	    border-left: 2px #cce3ff solid;
	    border-bottom: 2px #31557f solid;
	    border-right: 2px #31557f solid;
	    font:bold 12px Arial, Helvetica, sans-serif;
	}

Yukarıda gönder düğmesinin kenarlık renk seçimini yaparken sağ ve alt
kısma daha koyu, sol ve üst kısma daha açık renk vererek düğmemize 3
boyutlu bir görünüm kazandırdık.

Şimdide form alanını bir bütün haline getirelim ve forma bir başlık
yazalım. Bu işlemler için Html'in <fieldset\> ve <legend\> etiketlerini kullanacağız.

	:::html
	<form action="/gonder/login" id="kullaniciGiris" method="post">
		<fieldset>
		<legend>Kullanıcı Girişi</legend>
		<dl>
			<dt><label for="ad">Kullanıcı Adı:</label></dt>
			<dd><input name="ad" type="text" class="metinAlani" id"ad" /></dd>
			<dt><label for="eposta">Eposta:</label></dt>
			<dd><input name="eposta" type="text" class="metinAlani" id="eposta" /></dd>
			<dt><label for="hatirla">Beni hatırla</label></dt>
			<dd><input type="checkbox" id="hatirla" name="hatirla" /></dd>
			<dt><input type="submit" class="gonder" value="Gönder" /></dt>
		</dl>
		</fieldset>
	</form>

CSS ile yeni eklediğimiz alanların görünümünü düzeltelim.

	:::css
	fieldset{
	    border: 1px solid #31557f;
	    width: 15em;
	    padding-bottom:0.5em;
	}

	legend{
	    color: #224059;
	    background-color: #b5c9e2;
	    border: 1px solid #31557f;
	    padding: 2px 6px
	}

![][1]

Sonuç sayfasını görmek için [tıklayınız.][]

Formumuzun son hali yukarıda göründüğü gibi olacaktır. Bir sonraki
makalede daha karışık(gelişmiş) formların css ile yapılmasını göreceğiz.

  [100]: /images/loginform3.gif
  [1]: /images/loginform4.gif
  [tıklayınız.]: /dokumanlar/css_ile_form.html
