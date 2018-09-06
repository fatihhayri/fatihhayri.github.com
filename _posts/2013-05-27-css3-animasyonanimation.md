---
layout: post
title: CSS3 Animasyon(Animation)
Date: 2013-05-27 10:17
Category: CSS, CSS3
tags: [CSS3, Animasyon, anahtar-kare]
---

Bir önceki yazımda <a href="https://fatihhayrioglu.com/css3-gecis-efektleri-transitions/">CSS3 geçiş efektlerini</a> anlatmıştım. CSS3 animasyon özellikleri geçiş efektlerine benzer özellikleri ve daha fazlasını içermektedir. Animasyon işleri ile daha önce uğraşanlar için çok tanıdık kodları var. CSS3 Animasyon özelliği; javascript veya flash olmadan bize animasyon yapma imkanı sağlamaktadır.

Animasyon tanımlarında tanımlamalar ve zamanlama önceden yapılır sonra uygulanacak elemana tanımlanır.

Tarayıcı desteği konusunda ilk başta sıkıntılı olsa da şimdi daha iyi bir noktada. <a href="http://caniuse.com/#search=css3%20animation">http://caniuse.com/#search=css3%20animation</a> verilerine göre %72&rsquo;lik bir desteğe sahip.

CSS3 animasyon özelliğini ie10 hariç ön ek ile desteklemektedir. Ben buradaki örneklerde öneksiz göstereceğim.

## Anahtar Kare (Keyframes)

Daha önce flash ile uğraşmış insanlara yabancı olmayan bir kavram. Animasyonu bir süreç olarak kabul edersek, anahtar kare(keyframe) bize geçişin başlangıç ve bitişi arasındaki durumları tanımlamamız için olanak sağlar.

**@keyframes Kuralı**

CSS3 anahtar kare(keyframe) tanımı bir @kuralı olarak tanımlanır. Normal CSS tanımları içerir, ancak farklı olarak tanımlayıcı bir isim ve her kareye bir tanım yapmamızı sağlayan bir yapıya sahiptir.

{% highlight css %}
@keyframes animasyom_ismi {
  keyframe {
    property : value;
  }
}
{% endhighlight %}

animasyom_ismi tekil bir tanımıdır, daha sonra elemente animasyon uygulamak istediğimizde kullanılmak üzere.

{% highlight css %}
@keyframes soldanGelen {
  0% {
    left: 0;
  }
  50% {
    left: 100px;
  }
  100% {
    left: 200px;
  }
}
{% endhighlight %}


Yukarıdaki kod ile 'soldanGelen' animasyonumuza üç adet anahtar kare(keyframe) oluşturmuş olduk. Animasyonumuzun 0%, 50% ve 100%&rsquo;ün de anahtar kare (frame) meydana getirmiş olduk. Her kare&rsquo;de(frame) elemana istediğimiz animasyonu uygulayabiliyoruz.

Ayrıca (0% - 100%) kullanımı yerine (from - to) kullanımıda vardır.

## Animasyon Özellikleri

Anahtar kare(keyframe) tanımından sonra animasyon özellikleri tanımlarına geliyor sıra. Bu özellik tanımları CSS tanımlarına benzer bir yapısı vardır. Aşağıda bunları tek tek inceleyelim.

 - animation-name
 - animation-duration
 - animation-timing-function
 - animation-iteration-count
 - animation-direction
 - animation-delay
 - animation-play-state
 - animation-fill-mode
 - animation

### Animasyonun adı (animation-name)

**Yapısı :** animation-name: &lt;single-animation-name&gt;\\
**Aldığı Değerler :** none | IDENT [, none | IDENT ]*\\
**Başlangıç değeri:** none\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Bir elemana animasyon uygulayacağımız zaman ilk olarak bir isim tanımlamamız gerekiyor.

{% highlight css %}
#gonderGelsin {
  animation-name: gonder;
}
{% endhighlight %}

Tek değer alır ve tanımlanan değer yukarıda belirttiğimiz gibi anahtar kare&rsquo;ye parametre olarak eklenir. Bunun dışında none değeride alır. Animasyon ismini tırnak içinde yazınca Firefox&rsquo;da çalışmıyor.

### Animasyonun zamanı (animation-duration)

**Yapısı :** animation-duration: &lt;zaman&gt; [, &lt;zaman&gt;]*\\
**Aldığı Değerler :** &lt;zaman&gt; [, &lt;zaman&gt;]*\\
**Başlangıç değeri:** 0s\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Animasyonun ne kadar süreceğini belirtmek için bu özelliği kullanırız.

{% highlight css %}
#gonderGelsin {
  animation-name: gonder;
  animation-duration: 3s;
}
{% endhighlight %}

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/zhlHo?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Animasyonun 3 saniye devam edeceğini gösterir. Daha önce gördüğümüz transition-duration özelliğine benzer bir özelliktir. Zaman değerleri alır; ms, s ve 0 değerleri alır.

### Zamanlama fonksiyonu (animation-timing-function)

**Yapısı :** animation-timing-function: &lt;single-timing-function&gt; [ &lsquo;,&rsquo; &lt;single-timing-function&gt; ]*\\
**Aldığı Değerler :** ease | linear | ease-in | ease-out | ease-in-out | cubic- bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)\\
**Başlangıç değeri:** ease\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Geçiş efektlerinde benzer diğer bir tanımı animation-timing-function tanımıdır.  <a href="https://fatihhayrioglu.com/css3-gecis-efektleri-transitions/">transition-timing-function</a> özelliğine benzer bir özelliktir.

{% highlight css %}
div {
  animation-timing-function: keyword
  /* veya */
  cubic-bezier(x1, y1, x2, y2);
}
{% endhighlight %}

Aldığı değerler ease, linear, ease-in, ease-out, ve ease-in-out

{% highlight css %}
#gonderGelsin {
  animation-name: gonder;
  animation-duration: 3s;
  animation-timing-function:ease;
}
{% endhighlight %}


<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/xBgaA?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Animasyonun esnek bir şekilde meydana gelmesini sağlar.

### Animasyonun tekrar sayısı (animation-iteration-count)

**Yapısı :** animation-iteration-count: &lt;single-animation-iteration-count&gt; [ &lsquo;,&rsquo; &lt;single-animation-iteration-count&gt; ]*\\
**Aldığı Değerler :** infinite | &lt;sayı&gt;\\
**Başlangıç değeri:** 1\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Bu tanım animasyonun kaç kere tekrarlanacağını belirler.

{% highlight css %}
#gonderGelsin {
  animation-name: gonder;
  animation-duration: 3s;
  animation-timing-function:ease;
  animation-iteration-count: 3;
}
{% endhighlight %}

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/IAKJm?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

animation-iteration-count tanımı tüm pozitif rakamları alabilir. Animasyonun daimi olarak devam etmesini istiyorsak infinite değerini atamalıyız. Başlangıç değeri 1&rsquo;dir.

### Animasyonun yönünü (animation-direction)

**Yapısı :** animation-direction: &lt;single-animation-direction&gt; [ &lsquo;,&rsquo;&lt;single-animation-direction&gt; ]*\\
**Aldığı Değerler :** normal | reverse | alternate | alternate-reverse\\
**Başlangıç değeri:** normal\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Animasyonlar normalde başlangıçtan sona doğru hareket eder. Bazen ise bu akışı tersine çevirmek isteriz. Animasyonun yönünü belirleye biliyoruz, ileri doğru veya tersine aksın diyebiliyoruz.

Başlangıç değer normal olarak tanımlıdır. Aldığı değerler

  - **normal** Animasyon her çalışmadan baştan sona doğru çalışır. Yani animasyonun her döngüsünde baştan başlayacak. Bu özelliğin başlangıç değerdir.
  - **alternate** Animasyon sondan başa hareket eder. Animasyon terse oynarken her adımı geri doğru hareket eder. animation-timing-function foksiyonuda tersine döner, yani ease-in tanımlı ise bu tanım yapıldığında animasyon ease-out şeklinde oynayacaktır. Animasyon tekrar sayısı tanımlı ise, her tek ve çift sayı için bu durum tekrar edecektir.
  - **reverse** Animasyon her döngüde geriye doğru oynar. Animasyonun her döngüsünde sondan başa hareket eder.
  - **alternate-reverse** İlk döngüde sondan başa, sonra baştan sona doğru hareket eder. Animasyon tekrar sayısı tanımlı ise, her tek ve çift sayı için bu durum tekrar edecektir.

Örneğe devam;

{% highlight css %}
#gonderGelsin {
  animation-name: gonder;
  animation-duration: 3s;
  animation-timing-function:ease;
  animation-iteration-count: 3;
  animation-direction: alternate-reverse;
}
{% endhighlight %}

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/qLKAp?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Animasyonu tersine çevirecektir. Metin sağdan sola değil, soldan sağa doğru gelecektir.

### Animasyona ara verme (animation-delay)

**Yapısı :** animation-delay: &lt;zaman&gt; [, &lt;zaman&gt;]*\\
**Aldığı Değerler :** &lt;zaman&gt; [, &lt;zaman&gt;]*\\
**Başlangıç değeri:** 0ms\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

animation-delay tanımı animasyonun başlamadan önce belli bir süre bekletmemizi sağlar.

{% highlight css %}
#gonderGelsin {
  animation-name: gonder;
  animation-duration: 3s;
  animation-timing-function:ease;
  animation-iteration-count: 3;
  animation-direction:reverse;
  animation-delay: 4s;
}
{% endhighlight %}

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/qizfH?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Tanımı ile animasyon tetiklenmesinden itibaren 4 saniye sonra başlayacaktır. Bu tanım pozitif ve negatif rakam alabilir. Pozitif değerler animasyonu bekletirken, negatif değerler atandığında animasyon hemen başlayacak ve belirlenen saniyeden sonra görünmeye başlayacaktır.

### Animasyonu Durdurma (animation-play-state)

**Yapısı :** animation-play-state: &lt;single-animation-play-state&gt; [ &lsquo;,&rsquo; &lt;single-animation-play-state&gt; ]*\\
**Aldığı Değerler :** running | paused\\
**Başlangıç değeri:** running\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Diğer bir animasyon özelliğide animation-play-state özelliğidir, animasyon yürütme kontorolünü yapar. İki değer alır; çalıştır(running) veya durdur(paused). Bir animasyonu durdurmak için

{% highlight css %}
animation-play-state: paused;
{% endhighlight %}

Tanımını yapmamız yeterlidir. Örneğimizde elemanın üzerine geldiğimizde animasyonun durdurmak için

{% highlight css %}
.polyfill:hover{
  animation-play-state: paused;
}
{% endhighlight %}

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/yCDJc?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>

Tanımını eklememiz yeterli olacaktır. Bu özelliğe javascript ile erişerek daha dinamik örnekler oluşturabiliriz.

### animation-fill-mode

Bu özellik animasyonun bitiminden sonra veya animation-duration ile belirlenen zaman sırasında nasıl davranacağını belirler. animation-fill-mode aşağıdaki değerleri alır.

  - **none** başlangıç değeridir — Başlangıç değeri olarak kullanılan bu değer ile animasyon bittikten sonra geri dönmesini sağlar ve kendi tanımlarını alır. Animasyonun başındaki **animation-duration** ile tanımlanan zaman sırasında herhangi bir stil uygulanmaz.
  - **forwards** animasyon bittikten sonra; son anahtar karede animasyonda tanımlanan özellik korunur. **none** değerinde animasyonun başına dönerken, **forwards** tanımında son kare özellikleri korunarak kalır.
  - **backwards** Tanımlanan animasyon durdurma(animation-delay) zamanında, uygulanan animasyonun ilk karesindeki değer tanımlanır. **none** değerinde durdurma zamanında herhangi bir tanım almazken, backwards tanımında tanımlana animasyonun ilk kare özelliklerini alır.
  - **both** elemente **forwards** ve **backwards** aynı anda uygulanır. Hem animasyonun durdurma zamanında ilk kare özelliklerini alır, hemde son kare değerleri elemanda tanımlı kalır.


**Yapısı :** animation-fill-mode: &lt;single-animation-fill-mode&gt; [ &lsquo;,&rsquo; &lt;single-animation-fill-mode&gt; ]*\\
**Aldığı Değerler :** none | forwards | backwards | both\\
**Başlangıç değeri:** none\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

animation-fill-mode özelliği animasyonun dışında hedef elemana uygulanacak stillerin nasıl uygulanacağını tanımlar.

Bu özellik sayesinde bazı kesilme ve garip atlamaları engelleyebiliriz. animation-fill-mode özelliğini kullanarak fazladan kod yazmadan bu tip sorunları engelleyebilirsiniz.

### Animasyon Kısayolu(animation)

**Yapısı :** animation: &lt;single-animation&gt; [ &lsquo;,&rsquo; &lt;single-animation&gt; ]*\\
**Aldığı Değerler :** &lt;single-animation-name&gt; || &lt;time&gt; || &lt;timing-function&gt; || &lt;time&gt; || &lt;single-animation-iteration-count&gt; || &lt;single-animation-direction&gt; || &lt;single-animation-fill-mode&gt;\\
**Başlangıç değeri:** animation-name: none\\
**animation-duration:** 0s\\
**animation-timing-function:** ease\\
**animation-delay:** 0s\\
**animation-iteration-count:** 1\\
**animation-direction:** normal\\
**animation-fill-mode:** none\\
**Uygulanabilen elementler:** tüm elementler ve :before ve :after elementlerine\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

Yukarıda animasyon özelliklerini tanımladık. Bu tanımları önek ile birlikte yazdığımızda bir sayfaya yakın bir kod yığını ortaya çıkmaktadır. Bu kod yığınını azaltmak için ve daha kısa kod yazmak için animation tanımı ile yukarıdaki tanımları azaltabiliriz. Bu tanımlama ile animation-name, animation-duration, animation-timing-function, animation-iteration-count, animation-direction, animation-delay ve animation-fill-mode tanımlarını tek bir tanım içine almış oluruz.

Örneğimiz göz önüne alırsak;

{% highlight css %}
.canCanli {
  animation-name: gelsinGitsin;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-delay: 5s;
  animation-fill-mode: forwards;
}
{% endhighlight %}

Tanımı yerine

{% highlight css %}
.canCanli {
  animation: gelsinGitsin 2s ease-in-out 2 alternate 5s forwards;
}
{% endhighlight %}

7 satır kod tek satıra indi. Yukarıdaki sıra önemlidir; name, duration, timing function, count, direction, delay, and fill- mode. Her tanım birbirinden boşluk ile ayrılır. Sadece adı ve süresi yazılması gerekmektedir, diğer değerler isteğe bağlıdır.

Birden fazla tanımı virgül ile ayırırız.

{% highlight css %}
.polyfill {
  animation-name: gradientMove, reload;
  animation-duration: .8s, 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-timing-function: linear;
}
{% endhighlight %}

Yerine

{% highlight css %}
.polyfill {
  animation:gradientMove .8s 4 both linear alternate-reverse, reload 8s 4 both linear alternate-reverse;
}
{% endhighlight %}

<h3>Javascript, Flash ve CSS3 Animasyon Avantaj ve Dezavantajları</h3>

Animasyon işini daha önce ve hala javascript ve flash ile yaparken şimdi niye css ile yapıyoruz diye akıllara gelebilir. Bu başlık altında javascript flash ve css3 ile animasyon yapımının avantaj ve dezavantajlarını inceleyeceğiz.

**Flash Artıları**

  - Animasyon oluşturmak için köklü ve sağlam bir Editöre sahip
  - Actionscript ile daha programatik ve güçlü bir animasyon yeteneğine sahip

**Flash Eksileri**

  - Mobil ortam desteğinin az olması.
  - Bir plugin bağımlılığı olması ve devamlı güncelleme istegi
  - Arama motorları ve ekran okuyucuları gibi cihazlardan erişememe sorun.

**Javascript Artıları**

  - Gelişmiş ve iyi animasyon frameworkleri
  - Web geliştiricilerin alışık olduğu HTML, CSS ve DOM öğeleri üzerinden işlem yapma
  - CSS&rsquo;e göre daha avantajlı ve programatik güç ve esneklik.

**Javascript Eksileri**

  - Kullanıan frameworkler nedeniyle yavaşlık ve fazla HTTP isteği
  - Sözdizimindeki framework kullanım zorluğu
  - Javascript ile oluşturulan içeriğin arama motorlarının erişim sıkıntıları.

**CSS3 Artıları**

  - Bildik kullanım alanı
  - Standart CSS sözdizimi
  - Basit öğrenme
  - Javascripte göre daha yüksek frame oranları ve tarayıcıda daha hızlı ve esnek geçişler
  - Mevcut HTML elemanları üzerinde oynama imkanı ve SEO avantajı sayılabilir.

**CSS3 Eksileri**

  - Tarayıcı desteği bakımından sıkıntılar mevcut. (İnternet Explorer sorunu)
  - Animasyon araçları konusunda zengin bir alan yok, daha çok kod ile üretmek zorunluluğu var.


### Animasyon Olaylarının Kullanımı

Animasyon olaylarını kullanarak animasyonlara ekstra özellikleri kazandırabiliriz. AnimationEvent nesnesini kullanarak animasyonun başladığını, bittiğini ve döngüsünü tespit edebiliriz. Javascript ile kare kare kontrolün olmaması bir sorun.

Animasyonu dinleyen bir fonksiyon

{% highlight javascript %}
function setup() {
  var e = document.getElementById("anim");
  e.addEventListener("animationstart", listener, false);
  e.addEventListener("animationend", listener, false);
  e.addEventListener("animationiteration", listener, false);

  var e = document.getElementById("anim");
  e.className = "polyfill";
}
{% endhighlight %}


Tüm animasyon olaylarını dinleyen bir fonksiyon yaptık. İlk başlangıcı yakalamak için animasyonun uygulandığı sınıfı sonrada tanımlıyoruz. Olayları yakalamk için listener fonksiyonuna gönderiyoruz.

{% highlight javascript %}
function listener(e) {
    var l = document.createElement("li");
    switch(e.type) {
      case "animationstart":
        l.innerHTML = "Başlangıç: " + e.elapsedTime;
        break;
      case "animationend":
        l.innerHTML = "Son: " + e.elapsedTime;
        break;
      case "animationiteration":
        l.innerHTML = "Döngüye başlama: " + e.elapsedTime;
        break;
    }
    document.getElementById("output").appendChild(l);
}
{% endhighlight %}

Tarayıcılara göre metot isimleri farklılık gösteriyor.


<table style="border:1px solid #ccc">
  <tbody>
  <tr>
    <td>W3C standard - Firefox </td>
    <td>webkit </td>
    <td>Opera </td>
    <td>IE10 </td>
  </tr>
  <tr>
    <td>animationstart</td>
    <td>webkitAnimationStart</td>
    <td>oanimationstart</td>
    <td>MSAnimationStart</td>
  </tr>
  <tr>
    <td>animationiteration</td>
    <td>webkitAnimationIteration</td>
    <td>oanimationiteration</td>
    <td>MSAnimationIteration</td>
  </tr>
  <tr>
    <td>animationend</td>
    <td>webkitAnimationEnd</td>
    <td>oanimationend</td>
    <td>MSAnimationEnd</td>
  </tr>
  </tbody>
</table>


<iframe scrolling="no" height="250" frameborder="0" style="width: 100%; overflow: hidden;" allowtransparency="true" data-height="250" src="//codepen.io/fatihhayri/embed/DIvqF?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>


**Tarayıcı Desteği**

|![Chrome][chrome]|![explorer][explorer]|![Firefox][firefox]|
|:-----------------:|:---------------:|:-------------------:|
|**1.0+ (-webkit)**|**10+**|**4.0+ (-moz)**|
{: .tarayici-uyumi}

**Mobil Tarayıcılar**

|![Android][android] | ![Mobil Safari][msafari] | ![Chrome][chrome] |
|:------------------------:|:----------------------:|:-------------------:|
|**2.1+ (-webkit)**|**2.0+ (-webkit)**|**36+**|
{: .tarayici-uyumi}

## Sonuç

CSS3 animasyon özelliği CSS&rsquo;in web&rsquo;deki görselliği tek başına temsil etmesi açısından büyük bir adımdır. HTML elementlerine animasyon özelliği kazandırması gelecekte daha yaygın olarak kullanılmasına yol açacaktır. Basit ve genel kullanılan animasyonları normal CSS kodu yazar gibi kodlasak da daha gelişmiş animasyonlar için bir editör ihtiyacı ortaya çıkacağı kesindir. Bu konuda şimdi görünen en büyük editör <a href="http://html.adobe.com/edge/animate/">Adobe&rsquo;nin Egde</a> aracıdır. Flash ile büyük bir bilgi birikimine sahip olan Adobe CSS3 animasyonuna da büyük destek sağlayacağı ortadır. Tabi rekabetin olması ve farklı araçların çıkması her zaman bizim gibi geliştiricileri için bir artıdır.

Ben sizlere burada işi teorisini açıklamaya çalıştım bilgileriniz geliştirmek için yapılmış animasyon örneklerini incelemeniz ve kendi animasyonlarınızı hazırlamanız önemli. Kaynak bölümündeki örnekleri incelemenizi öneririm.

Kalın sağlıcakla.

## Kaynaklar

  - <a href="http://www.w3.org/TR/css3-animations/">http://www.w3.org/TR/css3-animations/</a>
  - <a href="http://coding.smashingmagazine.com/2011/09/14/the-guide-to-css-animation-principles-and-examples/">http://coding.smashingmagazine.com/2011/09/14/the-guide-to-css-animation-principles-and-examples/</a>
  - <a href="http://www.vanseodesign.com/css/animation/">http://www.vanseodesign.com/css/animation/</a>
  - <a href="http://www.w3schools.com/css/css3_animations.asp">http://www.w3schools.com/css/css3_animations.asp</a>
  - <a href="http://css3.bradshawenterprises.com/animations/">http://css3.bradshawenterprises.com/animations/</a>
  - http://daneden.me/animate/">http://daneden.me/animate
  - <a href="https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_animations">https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_animations</a>
  - <a href="http://www.netmagazine.com/tutorials/masterclass-css-animations">http://www.netmagazine.com/tutorials/masterclass-css-animations</a>
  - <a href="http://css-tricks.com/snippets/css/keyframe-animation-syntax/">http://css-tricks.com/snippets/css/keyframe-animation-syntax/</a>
  - <a href="http://www.webkit.org/blog/138/css-animation/">http://www.webkit.org/blog/138/css-animation/</a>
  - <a href="http://matthewlein.com/ceaser/">http://matthewlein.com/ceaser/</a> (animasyon aracı)
  - <a href="http://www.sitepoint.com/build-awesome-apps-with-css3-animations/#fbid=qIRziNGN-f6">http://www.sitepoint.com/build-awesome-apps-with-css3-animations/#fbid=qIRziNGN-f6</a>
  - <a href="http://caniuse.com/css-animation">http://caniuse.com/css-animation</a> (tarayıcı desteği)
  - <a href="http://www.hongkiat.com/blog/css3-animation-transition-demos/">http://www.hongkiat.com/blog/css3-animation-transition-demos/</a> (örnekler)
  - <a href="http://www.webdirections.org/blog/let-the-web-move-you-css3-animations-and-transitions/">http://www.webdirections.org/blog/let-the-web-move-you-css3-animations-and-transitions/</a>
  - <a href="http://samuli.hakoniemi.net/having-fun-with-css-keyframes/">http://samuli.hakoniemi.net/having-fun-with-css-keyframes/</a> (Örnekli anlatım)
  - <a href="http://westciv.com/tools/animations/">http://westciv.com/tools/animations/</a> (animasyon aracı)
  - <a href="http://www.inserthtml.com/2012/01/definitive-guide-css-animations-transitions/">http://www.inserthtml.com/2012/01/definitive-guide-css-animations-transitions/</a>
  - <a href="https://dev.opera.com/articles/css3-vs-jquery-animations/">https://dev.opera.com/articles/css3-vs-jquery-animations/</a>
  - <a href="http://www.onextrapixel.com/2011/08/31/enhance-your-sites-with-css3-animations/">http://www.onextrapixel.com/2011/08/31/enhance-your-sites-with-css3-animations/</a> (örnekli anlatım)
  - <a href="http://24ways.org/2009/css-animations/">http://24ways.org/2009/css-animations/</a> (örnekli anlatım, loading)
  - <a href="http://tympanus.net/codrops/2012/11/14/creative-css-loading-animations/">http://tympanus.net/codrops/</a>
  - <a href="http://tympanus.net/codrops/2012/11/14/creative-css-loading-animations/">http://tympanus.net/codrops/2012/11/14/creative-css-loading-animations/</a>
  - <a href="http://tympanus.net/codrops/2012/12/31/how-to-create-a-simple-multi-item-slider/">http://tympanus.net/codrops/2012/12/31/how-to-create-a-simple-multi-item-slider/</a>
  - <a href="http://tympanus.net/codrops/2012/06/25/timed-notifications-with-css-animations/">http://tympanus.net/codrops/2012/06/25/timed-notifications-with-css-animations/</a>
  - <a href="http://tympanus.net/codrops/?s=keyframe">http://tympanus.net/codrops/?s=keyframe</a>
  - <a href="https://dev.opera.com/articles/css3-animations/">https://dev.opera.com/articles/css3-animations/</a>
  - <a href="https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_animations?redirectlocale=en-US&amp;redirectslug=CSS%2FUsing_CSS_animations">https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_animations?redirectlocale=en-US&amp;redirectslug=CSS%2FUsing_CSS_animations</a>
  - <a href="http://www.sitepoint.com/css3-animation-javascript-event-handlers/">http://www.sitepoint.com/css3-animation-javascript-event-handlers/</a>
  - <a href="http://www.valhead.com/2013/01/04/tutorial-css-animation-fill-mode/">http://www.valhead.com/2013/01/04/tutorial-css-animation-fill-mode/</a>
  - <a href="http://www.kirupa.com/html5/all_about_css_animations.htm">http://www.kirupa.com/html5/all_about_css_animations.htm</a>


[firefox]: /images/ff.png
[chrome]: /images/ch.png
[explorer]: /images/ie.png
[msafari]:/images/sm.png
[android]:/images/an.png