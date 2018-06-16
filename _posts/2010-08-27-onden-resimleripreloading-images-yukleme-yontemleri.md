---
layout: post
title: Önden Resimleri(Preloading images) Yükleme Yöntemleri
Date: 2010-08-27 22:44
Category: CSS, Javascript, XHTML
tags: [önyükleme, performans, resim, web site hızlandırma]
---

Web sitelerimizi hızlandırmak için çeşitli yöntemler ve metotlar
deneriz. Amacımız kullanıcıya daha hızlı cevap vermektir. Bunlardan bir
tanesi önden resimleri kullanıcı bilgisayarına yükletip sonra açılacak
sayfaların hızlı açılmasını sağlamak gibi bir amacımız olduğu
durumlardır. Rollover resimleri, araç ipucu(tooltip), background
resimleri vb. resimleri önceden yükletmek bize hem sayfa ilk açıldığında
kötü görüntüyü engellememizi sağlar hemde kullanıcıya daha sonraki
tercihlerinde daha hızlı cevap vermemizi sağlar.

Ben genelde daha önce kullanmadığım metotları kullanmadan önce bir
araştırma yaparım ve sonuçta bana göre iyi olan yöntemi uygularım. Web
ajanslarında çalışırken bu araştırmayı kısa tutmam gerekirken tek bir
proje geliştirirken bu iş için daha uzun zamanımız oluyor.

Bu işi çin CSS, javascript ve ajax ile çözümler mevcut.

Ben bu yöntemlerden javascript yöntemi ile yapmayı tercih ettim. Diğer
yöntemler hakkında genel bir bilgi verip geçeceğim.

**CSS Yöntemleri**

CSS Sprite yöntemide bu kategoriye girer.

CSS yöntemleri genelde sayfa içine konulan resimlerin tarayıcı
görüntüsünden kaçırılması ile yapılan yöntemlerdir ki işin bu kısmı
benim hoşuma gitmiyor.

CSS ile bu işi yapan bir örnek verelim.

{% highlight css %}
div#preloaded-images {
   position: absolute;
   overflow: hidden;
   left: -9999px;
   top: -9999px;
   height: 1px;
   width: 1px;
}
{% endhighlight %}

HTML kodu

{% highlight html %}
<div id="preloaded-images">
 <img src="http://deneme.com/image-01.png" width="1" height="1" alt="Image 01" />
 <img src="http://deneme.com/image-02.png" width="1" height="1" alt="Image 02" />
 <img src="http://deneme.com/image-03.png" width="1" height="1" alt="Image 03" />
</div>
{% endhighlight %}

Yukarıda görüldüğü gibi html içine eklenen resimler CSS yardımı ile
kullanıcının göremeyeceği bölgelere itilmiştir. Bu şekilde bir çözüm
üretilmiştir.

**Javascript Yöntemleri**

Javascript ile yapılan yöntemlerin genel yapısı bir sıraya sokulan
resimler dinamik olarak doküman içine eklenir.

Javascript ile bu işlemi yapan çeşitli kodlar var. Benim uyguladığım ise
aşağıdaki koddur. Bu kodun diğerlerine göre avantajı yükleme yaptığımız
sayfanın yüklenmesi bittikten sonra bizim önden yükleme yaptığımız
resimleri yüklemesidir.

{% highlight javascript %}
function preloader() {
  if (document.images) {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();

    img1.src = "http://domain.tld/path/to/image-001.gif";
    img2.src = "http://domain.tld/path/to/image-002.gif";
    img3.src = "http://domain.tld/path/to/image-003.gif";
  }
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
    if (oldonload) {
      oldonload();
    }
    func();
    }
  }
}
addLoadEvent(preloader);
{% endhighlight %}

Yukarıdaki javascript kodu işimizi görecektir.

jQuery ile daha kısa ve basit bir kod ile bu işi yapabiliriz.

{% highlight javascript %}
// resim onyükleme fonksiyonu
jQuery.preloadImages = function()
{
	for(var i = 0; i<arguments.length; i++)
{
	jQuery("<img>").attr("src", arguments[i]);
}
};

// yükleme yap
$.preloadImages("images/dexter.jpg", "images/saydam_ardalan1.gif", "images/ornek_sayfa.jpg");
{% endhighlight %}

![][100]

Yukarıdaki kodu yazınca yükleme yaptığımız sayfadaki öğeler yüklenirken
yükleme yaptığımız resimlerde yüklenir. Bu benim istediğim bir durum
değildir. Bence yükleme yapılacak sayfanın öğeleri yüklendikten sonra
yüklenecek resimler yüklenmelidir. Kullanıcı ilk önce mevcut sayfayı tam
görmelidir, sonra kullanıcıya göstermeden diğer sayfa resimlerini
yüklemeliyiz.

Bunun için kodumuzu aşağıdaki değiştirmeliyiz.

{% highlight javascript %}
 $(document).ready(function() {
 $(window).bind('load', function()
 {

   // resim onyükleme fonksiyonu
   jQuery.preloadImages = function()
   {
   for(var i = 0; i<arguments.length; i++)
   {
     jQuery("<img>").attr("src", arguments[i]);
   }
   };

   // yükleme yap
   $.preloadImages("images/dexter.jpg", "images/saydam_ardalan1.gif", "images/ornek_sayfa.jpg");

 });
});
{% endhighlight %}

Eklediğimiz sadece $(window).bind(‘load’ function()) kısmıdır. Burada
sayfa yüklendikten sonra bu işlemi yap diyoruz.

Örneği görmek için [tıklayınız.][]

![][1]

Örneklerde dikkatiniz bir yere çekmek istiyorum. Firebug Net sekmesini
açtım çünkü sayfa yüklenmesi anını görmenizi istedim. İlk resimde sayfa
yüklenirken sonradan görüntüleyeceğimiz resimleride içeren bir durum söz
konusu idi. Dikkat ederseniz ilk reismde dikey kırmızı çizgi en
sondadır. İkinci resimde ise kırmızı dikey çizgi sayfa öğelerini
sonuncusu olan resimden sonra çizilmiştir, daha sonra yükleme yapılan
resimler yüklenmiştir.

## Sonuç

Ben küçük bir araştırma sonucunda bu kodu kullanmayı uygun buldum.
Bulduğum bu kodun kendimce gerekçelerini yukarıda açıklamaya çalıştım,
eğer sizlerin daha iyi çözümleri ve önerileri varsa yorum kısmında
bizlerle paylaşırsanız sevinirim.

Kalın sağlıacakla

## Kaynaklar

-   [http://perishablepress.com/press/2009/12/28/3-ways-preload-images-css-javascript-ajax/][]
-   [http://engineeredweb.com/blog/09/12/preloading-images-jquery-and-javascript][]
-   [http://elouai.com/javascript-preload-images.php][]
-   [http://www.javascriptkit.com/script/script2/preloadimage.shtml][]
-   [http://stackoverflow.com/questions/761263/what-is-the-best-way-to-preload-multiple-images-in-javascript/761332][]
-   [http://www.filamentgroup.com/lab/update_automatically_preload_images_from_css_with_jquery/][]
-   [http://snipplr.com/view.php?codeview&id=9612][]

  [100]: /images/resim_on_yukleme_jquery-300x195.gif
  [tıklayınız.]: /dokumanlar/onyukleme.html
  [1]: /images/resim_on_yukleme_jquery2-300x194.gif
  [http://perishablepress.com/press/2009/12/28/3-ways-preload-images-css-javascript-ajax/]: http://perishablepress.com/press/2009/12/28/3-ways-preload-images-css-javascript-ajax/
  [http://engineeredweb.com/blog/09/12/preloading-images-jquery-and-javascript]: http://engineeredweb.com/blog/09/12/preloading-images-jquery-and-javascript
  [http://elouai.com/javascript-preload-images.php]: http://elouai.com/javascript-preload-images.php
  [http://www.javascriptkit.com/script/script2/preloadimage.shtml]: http://www.javascriptkit.com/script/script2/preloadimage.shtml
  [http://stackoverflow.com/questions/761263/what-is-the-best-way-to-preload-multiple-images-in-javascript/761332]: http://stackoverflow.com/questions/761263/what-is-the-best-way-to-preload-multiple-images-in-javascript/761332
  [http://www.filamentgroup.com/lab/update_automatically_preload_images_from_css_with_jquery/]: http://www.filamentgroup.com/lab/update_automatically_preload_images_from_css_with_jquery/
  [http://snipplr.com/view.php?codeview&id=9612]: http://snipplr.com/view.php?codeview&id=9612
