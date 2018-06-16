---
layout: post
title: Kutu Modeli - Görünüm Efekti Özellikleri
Slug: kutu-modeli-gorunurluk-ozellikleri
Date: 2007-09-07 14:41
Category: CSS, Web Standartları, XHTML
tags: [clip, CSS, görünürlük-özellikleri, Kutu-Modeli, overflow, visibility, Web Standartları, XHTML]
---

Bu aralar CSS kitabına(e-kitap) ağırlık verdim. Kitaptaki eksik
bölümleri tamamlıyorum. İnşallah en yakın zamanda bitecek. Bu konuda
onlardan biri.

Kutu elementlerin görünümüne çeşitli etkiler yapan özellikleri göreceğiz
bu makalede çoğu CSS2 ile birlikte gelen bu özellikler aşağıda
sıralanmıştır.

-   **overflow** - taşma
-   **clip** - kırpma
-   **visibility** - görünürlük

## Overflow

**Yapısı:** overflow: (değer)
**Aldığı Değerler:** visible | hidden | scroll | auto | inherit\\
**Başlnagıç değeri:** visible\\
**Uygulanabilen elementler:** blok-level elementler ve replacement
elementlere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Türkçeye taşmak(overflow) olarak çevirdiğimiz bu özellik sınırlarını
belirlediğimiz kutu elementinin içeriğinin sınırları aşması durumunda
nasıl davranacağını bildiren bir özelliktir. Özelliğe atanan değerleri
tek tek incelersek.

-   inherit - kalıtsallık üst elementin değerini alabilir
-   visible - kutu sınırları dışına taşan alanları göster
-   hidden - kutu sınırları dışına taşan alanları gizle.
-   scroll - kutu sınırlarını taşan kısmı kaydırma çubuğu ile ulaşmamızı
    sağlar.
-   auto - kutu sınırlarını aşması durumunda scroll ile aynı etkiyi
    yapar.

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

**overflow:visible** Overflow'ın başlangıç değeri visible'dır. Bu değer
taşma olan kısımların gösterilmesini sağlar.

	:::css
	div#solMenu {
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 120px;
		background: #BBB;
		overflow: visible;
	}

![overflow][]

Kodun yeni nesil tarayıcılardaki görünümü

**overflow** özelliğinin değeri **visible** olduğu için içerik taşmasına
rağmen taşan bölümler gösterilmiştir.

**overflow:scroll** Eğer içeriğin taşmasını engellemek istiyorsak ama
yinede taşan kısımlara ulaşılması için kaydırma çubuğu çıkması için
scroll özelliği ekleriz.

	:::css
	div#solMenu {
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 120px;
		background: #BBB;
		overflow: scroll;
	}

![overflow scroll][]

overflow:scrool olma durumu

**overflow:hidden** Eğer overflow:hidden değeri atarsak. Sınırladığımız
kutunun dışına taşan kısımlar gösterilmeyecektir.

	:::css
	div#solMenu {
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 120px;
		background: #BBB;
		overflow: hidden;
	}

kodu bu şekilde değiştirdiğimizde görüntü aşağıdaki gibi olacaktır.

![overflow:hidden][]

**overflow:auto** Son olarakta otomatik değeri vardır. Bu değeri
atayınca kutu içeriğine göre otomatik işlem yapacaktır. Eğer taşma
olmuyorsa kaydırma çubuğu çıkmayacaktır. Ama eğer içerik taşıyorsa
kaydırma çubuğu çıkacaktır.

	:::css
	div#solMenu {
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 120px;
		background: #BBB;
		overflow: hidden;
	}

![overflow:auto][]

Dikkat ederseniz scroll'dan farklı olarak sadece dikey kaydırma çubuğu
çıkmıştır. Yatayda bir taşma olmadığı için yatay kaydırma çubuğu
çıkmamıştır.

Örneği görüntülemek için [tıklayınız.][]

Safari'nin eski sürümlerinde sorun çıkarıyor Javascript ile bir çözüm
var.
[http://blog.deconcept.com/2005/03/25/safari-and-links-to-elements-in-overflow-auto-content][]

Operadaki sorun için ise sadece min-height ve min-width özelliklerini
kullanmak yeterli. [http://nontroppo.org/test/Op7/overflowbug.html][]

Bunların dışında Internet Explorer'ün tescillediği ve CSS3
standartlarında yer alan iki adet özellik daha vardır. overflow-x ve
overflow-y

**overflow-x ve overflow-y:** Internet Explorer5x ve üzeri sürümlerden
itibaren desteklediği bu özellikler aslında overflow gibi çalışır.
Buradaki x ve y'dende anlaşıldığı gibi overflow özelliğini yatay ve
dikey olarak ikiye ayıran özelliklerdir. overflow-x özelliği yatayda
taşma olması durumunda taşan kısımlara uygulanacak özellikleri(visible,
scroll, hidden ve auto) atmamızı sağlar. overflow-y'de dikeyde aynı şeyi
yapar. Firefox'unda 1.1 versiyonundan itibaren bu özellikleri
desteklemesi kullanılabilirliğini arttırmıştır. Tabi biraz daha
beklemekte yarar var.

Örnekler için [tıklayınız.][1] (brunildo.org'dan)

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

## clip

**Yapısı :** clip: rect(<üst\>,<sağ\>,<alt\>,<sol\>)\\
**Aldığı Değerler :** rect(top, right, bottom, left) | auto | inherit\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** mutlak konumlandır uygulanmış elementler
(CSS2'den itibaren blok-level elementler ve replacement elementlere )\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}


**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

**Not**
W3C standartları belirlerken konumlandırmalar arasında virgül konmasını
öneriyor. Ancak garip bir şekilde IE virgül kullanılan örnekleri normal
modda farklı yorumlamaktadır. Acayip modda ise doğru yorumlamaktadır. Ne
yapalım bizde tüm tarayıcılara uygun olması için virgül kullanamayacağız

clip, elementin içeriğinin belli bir bölümünün gösterilmesi sağlar.
Başlangıç değerinin auto atanmış olması herhangi bir kırpmanın
olmayacağını gösterir.

Resim düzenleme araçlarında yaptığımız kırpma işini CSS yardımıyla
yapmamızı sağlayan bu özelliği Javascript ile birlikte kullanarak çok
güzel uygulamalar yapabiliriz.

Clip'e atanan değerler **em** cinsinden verilerek esnek sonuçlar elde
edilebilir. Ayrıca negatif değerlerde alabilir. Negatif değer
atandığında element kutusunun dışına doğru kırpma yapacaktır.

![kırpma][]

Bir örnek yapalım.

CSS kodu:

	:::css
	.kirpma{
		position:absolute;
		clip:rect(50px 130px 153px 40px);
	}

HTML kodu:

	:::html
	<div class="kirpma">
	<img src="recepemice.jpg" alt="ahmet emice" />
	</div>

![Kırpma][]

örneğin görüntüsü

Örneği görmek için [tıklayınız.][2]

## visibility

**Yapısı :** visibility: &lt;değer&gt;\\
**Aldığı Değerler :** visible | hidden | collapse | inherit\\
**Başlnagıç değeri:** visible\\
**Uygulanabilen elementler:** tüm elementlere\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

**Tarayıcı Uyumu **
Firefox
Chrome
Safari
Opera
İnternet Explorer
**Mobil Tarayıcılar**
iOS Safari
Opera Mobile
Android Browser
{: .tarayiciuyum}

Görünürlük(visibility) özelliği nesnelerin görünümünü belirler. Değeri
visible ise element görünür. Eğer değeri hidden ise element görünmezdir.
Eğer bir elementin görünürlük değeri hidden olarak atanmış ise element
sayfa yapısındaki yeri korur ancak gözle görülmez.

	:::html
	<html>
	<head>
	<title>visibility Örneği</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<style>
	  <li class="alternatifard">body {font-family: sans-serif; font-weight: bold; font-size: 14px}</li>
	</style>
	  <li class="alternatifard"></head>
	<body>
	<h1 style="visibility: visible">Görünür Başlık</h1>
	<h1 style="visibility: hidden; background-color:#f00; border:1px solid #000; margin:20px 0; padding-top:10px;">Görünmez Başlık</h1>
	<h1 style="visibility: visible">Görünür Başlık</h1>
	<p style="font-size: large">Görünür metin parçası<b style="visibility: hidden">görünmez metin parçası</b> ve burası görünüyor.</p>
	</body>
	</html>

![Visibility örneği][]

Örneği görmek için [tıklayınız.][3]

Örnekte gördüğümüz gibi element görünmediği halde sayfadaki yerini
korumaktadır. Ayrıca gizli nesneye atanan kenarlık ve zemin rengide
görünmemektedir. Ancak elementin konumu etkileyen kenar boşluğu(magrin)
ve padding değeri görünmese de sayfayı etkilemektedir.

Ata elementi görünmez olan bir çocuk elemente eğer görünür özelliği
atanmış ise ata element görünmez ancak çocuk element görünür. Bu ters
bir durum olarak görünür ancak bu bize avantaj sağladığı durumlarda yok
değildir. Örnek yaparsak

CSS kodu

	:::css
	p.gorunmez {
		visibility: hidden;
	}

	p.gorunmez strong {
		visibility: visible;
	}

HTML kodu

	:::html
	<p class="gorunmez" <strong>Lorem ipsum dolor sit amet</strong>, consectetuer adipiscing elit. Cras sem. In sagittis mauris eu turpis. Mauris ut lorem nec pede consequat suscipit. </p>

![visibility hiyerarşi][]

Örneği görmek için [tıklayınız.][4]

**visiblity:collapse** özelliği vardır. collapse tablo elementler için
hidden etkisi yapar. Ancak burada bir fark var gizlene elementler yerini
korumaz. Ayrıca bu özelliği tüm tarayıcılar desteklemiyor, bunun yerine
display:none özelliği kullanılır.

## Kaynaklar

-   [http://www.w3.org/TR/CSS21/visufx.html][]
-   [http://www.seifi.org/css/creating-thumbnails-using-the-css-clip-property.html][]
-   [http://www.ibloomstudios.com/articles/misunderstood_css_clip/][]
-   [http://www.w3schools.com/css/pr_pos_clip.asp][]

  [overflow]: /images/overflow.gif
  [overflow scroll]: /images/overflow_scroll.gif
  [overflow:hidden]: /images/overflow_hidden.gif
  [overflow:auto]: /images/overflow_auto.gif
  [tıklayınız.]: /dokumanlar/overflow_test.html
  [http://blog.deconcept.com/2005/03/25/safari-and-links-to-elements-in-overflow-auto-content]: http://blog.deconcept.com/2005/03/25/safari-and-links-to-elements-in-overflow-auto-content
  [http://nontroppo.org/test/Op7/overflowbug.html]: http://nontroppo.org/test/Op7/overflowbug.html
  [1]: http://www.brunildo.org/test/Overflowxy2.html
  [kırpma]: /images/kirpma.jpg
  [Kırpma]: /images/kirpma_ornek.jpg
  [2]: /dokumanlar/clip_test.html
  [Visibility örneği]: /images/visibility.gif
  [3]: /dokumanlar/visibility.html
  [visibility hiyerarşi]: /images/visibility2.gif
  [4]: /dokumanlar/visibility2.html
  [http://www.w3.org/TR/CSS21/visufx.html]: http://www.w3.org/TR/CSS21/visufx.html
  [http://www.seifi.org/css/creating-thumbnails-using-the-css-clip-property.html]: http://www.seifi.org/css/creating-thumbnails-using-the-css-clip-property.html
  [http://www.ibloomstudios.com/articles/misunderstood_css_clip/]: http://www.ibloomstudios.com/articles/misunderstood_css_clip/
  [http://www.w3schools.com/css/pr_pos_clip.asp]: http://www.w3schools.com/css/pr_pos_clip.asp
