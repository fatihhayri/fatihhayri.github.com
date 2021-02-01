---
layout: post
title: CSS ile  Stil Vermek
Slug: css-ile-hr-stil-vermek
Date: 2007-03-17 01:37
Category: CSS, Web Standartları, XHTML
tags: [CSS, horizantal-rule, hr, Web Standartları, XHTML, yatay-çizgi]
---

CSS ile birlikte kodlama yaparken bir çok yerde <hr\> etiketi yerine
elementlerin üst ve alt kenarlık değeri ataması yapılarak kodlama
yapılmaktadır, bunun yerine <hr\> etiketini kullanabiliriz. <hr\>
daha kolay eklenir ve css desteklemeyen araçlarda sayfa görünümünün
bozulmasını engeller.

<hr\> elementinin kullanımı da kolaydır. <hr\> elementinin tek sorunu
farklı web tarayıcılarında farklı algılanmasıdır burada biz hepsine aynı
göstermeye çalışacağız. Aşağıdaki kodlar IE5+, Opera5+ ve FF1.0+ test
edilmiştir.

Bu konuyu yazmamın sebebi RSS besleyicimi feedburner'a ekledikten sonra
sağ kolonun üstüne RSS besleyici ikonu ve linki eklemem ve altına ayraç
olarak <hr\> etiketini koyduktan sonra karar verdim. Görünüm hoş
olmayan etiketi nasıl düzenlerim diye araştırdım ve sonucu sizlerle
paylaşmak istedim.

## <hr\> Elementi hangi özellikleri destekliyor

-   **width** ve **height** değerini tüm web tarayıcıları destekliyor.
-   **border** özelliği Explorer ve Firefox destekliyor. Opera
    desteklemiyor.
-   IE **color** özelliğini destekliyor.
-   Firefox ve Opera **background-color** özelliğini destekliyor.
-   Tüm tarayıcılar**background-image** özelliğini destekliyor ancak
    Explorer ve Opera'da bazı sorunları var.

CSS kodu;

	:::css
	hr {
		border: 0;
		width: 80%;
	}

Bu kodlama IE ve Opera'da düzgün görünecektir. Ancak Firefox'ta
görünmeyecektir. background-color ekleyerek kodumuzu Firefox'a da uygun
hala getiriyoruz.

	:::css
	hr {
		color: #f00;
		background-color: #f00;
		height: 5px;
	}

<hr\> elementine stil ataması yaparken color ve background-color
özelliklerin her ikisini de kullanmalıyız. Yüksekliği 3px'in altındaki
değerler için Opera'nın eski sürümleri sorun çıkarıyor.

## <hr\> hizalama

<hr\> etiketini hizalamada IE için **text-align** özelliği, Firefox
ve Opera için **margin** özelliği kullanılır.

	:::css
	hr {
		text-align: right; /* ie icin */
		margin-right: 0; /* diger brovserlar icin */
	}

<hr\> etiketini <hr\> şeklinde kullanmak Xhtml kuralları açısından
önemlidir. Bildiğiniz gibi Xhtml'de her etiket mutlaka kapatılmalıdır.
Eğer etiketin bir kapatma etiketi yoksa kapama işaretinden önce bir
bölme işareti(/) konarak bu işlem gerçekleştirilir. Örn: <img src=""
/\>, <br /\>, <meta /\> gibi.

## <hr/\> resim kullanmak

Web sitelerinde bölümleri ayırmak için basit resimler kullanırız. Bu
amaçla <hr /\> elementini kullanabiliriz. Bu işlem için
**background-image** özelliğini kullanmalıyız. Tabi bir kaç sorunumuz
çıkacaktır farklı web tarayıcılarda. Firefox gayet güzel çalışırken IE6-
ve Opera'nın eski sürümlerinde sorun çıkarır. resmin etrafında kenarlık
çıkarır. bunu engellemek için aşağıdaki şekilde kodlamamızı yapmalıyız.

	:::html
	<div class="hr"><hr /></div>

ve CSS kodu

	:::css
	div.hr {
	    background: #fff url(/images/ayrac_zr.gif) no-repeat scroll center;
	    height:28px;
	    width:180px;
	}
	div.hr hr {
		display: none;
	}

Tüm web tarayıcılarında sorunsuz çalışacaktır. Yukarıdaki kodda <hr /\>
etiketi bir <div\> içine alarak css ile <hr /\> etiketi görünmez
yapılarak esnek bir çözüm sağlanmıştır. Fazladan bir katman eklemek
standartlara uygun kodlama için istenmeyen bir durum olsa da kodlama
esnekliği ve tüm web tarayıcılarında aynı sonucu vermesi nedeni ile
kullanılabilir bir kodlamadır.

Burada bir iki ufak sorun var. Birincisi uygulanan zemin resmi çıktı
alırken görünmemesidir. Bunun için yazcı için CSS kodlarken bu özelliği
es geçmeliyiz. İkincisi <hr\> elementine margin ve/veya padding tanımı
yaptığımızda bazı web tarayıcılarında kaymalara neden oluyor, bu sorunu
çözmek için margin ve/veya padding değerini <div\> vermeliyiz.

## Kaynaklar

-   [http://www.sovavsiti.cz/css/hr.html][]
-   [http://sonspring.com/journal/styling-hr][]
-   bitesizestandards.com/bites/styling-horizontal-rules-with-css
-   http://www.blakems.com/experimental/hr
-   http://www.saila.com/usage/tips/defn.shtml?hr
-   sitepoint.com/examples/hr/

  [http://www.sovavsiti.cz/css/hr.html]: http://www.sovavsiti.cz/css/hr.html
  [http://sonspring.com/journal/styling-hr]: http://sonspring.com/journal/styling-hr
