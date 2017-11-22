---
layout: post
title:  HTML Öznitelikleri ve DOM özellikleri
Date: 2017-09-25 10:37
Category: Javascript
tags: [normal js, jquery, getAttriubte, setAttribute, removeAttribute]
---

**DOM (Belge Nesnesi Modeli)** HTML ile javascript'i birbirine bağlar. DOM, HTML dokümanındaki tüm elamanları ağaç yapısı mantığıyla nesneye çevirir ve javascript'in erişebileceği hale getirir. Böylelikle dinamik olarak HTML elemanına ekleme, çıkarma ve biçimini değiştirme imkanı elde etmiş oluruz.

HTML'in yapısını etiketler (tag), attribute (öznitelik) ve elemanlar oluşturur. 

Bir HTML belgesinin temel yapısı, içeriğini saran ve ona bir anlam katan etiketlerden oluşur. Örneğin `<body>` bir etikettir. Etiketler ek bilgi parçaları olan özniteliklere (attribute) sahip olabilirler. Örneğin `<body id="anasayfa">` Öznitelikler iki bölümden oluşur. Öznitelik adı ve değeri. Elemanlar web sayfasını oluşturan bölümlerdir. 

Bu temel bilgileri verdikten sonra asıl konumuza gelelim. 

Biz bu makalede HTML öznteliklerini ve tarayıcıların yorumlaması sonucu oluşan DOM özelliklerine değineceğiz.


## HTML Öznitelikleri (attributes) ve DOM özellikleri (property)

Tarayıcılar HTML dokümanını tararken DOM nesneleri oluşturur. HTML öznitelikleri bu nesnelerin özellikleri olur. Örneğin `<body id="Haydaa">` tanımının DOM'daki karşılığı `document.body.id` dır. 

HTML dokümanındaki tüm elemanlar, etiketler ve öznitelikler bu şekilde DOM nesnelerine çevrilir. 

Standart öznitelikler bu şekilde DOM özelliklerine çevrilir. HTML'de standart dışı öznitelikler de tanımlanabilir. Örneğin `<body id="Haydaa" sampiyon="Trabzon">` gibi bir tanım yapmak mümkündür. Ancak bu öznitelikler tarayıcı tarafından DOM özelliklerine dönüştürülmez. 

{% highlight javascript %}
document.body.sampiyon;
{% endhighlight %}

gibi bir kod bize `undefined` sonucu dönecektir.

Bir etiket için standart olan öznitelik başka bir etiket için standart olmayabilir. Örneğin `<input type="text">` **input** için **type** standart iken **body** etiketine atanan **type** standart değildir. 

Peki standart dışı özniteliklere javascript'ten nasıl erişeceğiz? 

Bunun için hazır metotlar mevcut. 

 - elem.hasAttribute(name) – varlığını kontrol et.
 - elem.getAttribute(name) – değerini al.
 - elem.setAttribute(name, value) – değer tanımla.
 - elem.removeAttribute(name) – özniteliği sil.

Örneğin yukarıdaki **sampiyon** tanımına erişmek için;

{% highlight javascript %}
document.body.getAttribute('sampiyon');
{% endhighlight %}
 	
bize **Trabzon** sonucu dönecektir. 
 
Ayrıca `elem.attributes` ile de erişebiliriz. **elem.attributes** kodu bize tüm öznitelikleri adı ve değeri olan bir nesne koleksiyonu olarak dönecektir.

### DOM Özelliği - HTML Özniteliği senkrenizasyonu
 
Standart bir HTML özniteliği değiştiğinde, ilgili DOM özelliği otomatik olarak güncellenir. Burada bazı istisnalar var. Sırası gelince değineceğiz.

Aşağıdaki örnekte, `id` bir HTML özniteliği değiştirilmiştir ve DOM özelliği de değişmiştir. Benzer şekilde DOM özelliği değiştirildiğinde HTML özniteliği değişti.

{% highlight html %}
<input>

<script>
  var input = document.querySelector('input');

  input.setAttribute('id', '123');
  alert(input.id); // 123 (güncellendi)

  input.id = '456';
  alert(input.getAttribute('id')); // 456 (güncellendi)
</script>
{% endhighlight %}

Ancak, farklı durumlar vardır, örneğin `input.value` HTML özniteliği değiştirildiğinde DOM özelliği değişir, ancak DOM özelliği değiştirildiğinde HTML öznteliği güncellenmez.

{% highlight javascript %}
var input = document.querySelector('input');

input.setAttribute('value', 'çay');
alert(input.value); // çay

// Burada değişmez
input.value = 'kahve';
alert(input.getAttribute('value')); // çay (güncellenmedi!)
{% endhighlight %}
	
	
Bu dikkat edilmesi gereken bir durum. 

Başka bir durum, HTML özniteliği göreceli bir URL veya yalnızca `#hash` içerse bile, `href` DOM özelliği her zaman tam bir URL döner.

Örneğin:

{% highlight html %}
<a id="siteLink" href="#merhaba">link</a>
<script>
  // HTML özniteliği
  alert(a.getAttribute('href')); // #merhaba

  // DOM özelliği
  alert(a.href ); // tam URL http://site.com/page#merhaba
</script>
{% endhighlight %}

## Sonuç

jQuery'den kurtulmak için giriştiğim yolda bu tip farklılıkların olduğunu öğreniyorum. Eskiden jQuery'de sadece `attr()` metodu vardı. Sonra `prop()` metodu da eklendi. jQuery topluluğu ilk önce **prop**'un **attr**'nin yerini aldığını söyledi. Ancak yukarıdaki fark sebebi ile hatalarını anlayıp her iki metodu da koruma yoluna gittiler. Yukarıda anlattığım farkı jQuery ile biz `attr()` ve `prop()` metodu ile uyguluyoruz.

Ben bu ve benzer durumlarda  jQuery'nin javascript gerçeklerini tam anlamama engel olduğunu düşünüyorum. Bu durum da hatalar ile karşılaştığımızda saatlerce hatta günlerce zaman kaybetmemize neden oluyor. Bu bile tek başına jQuery'den vazgeçme sebebi olur.

Kalın sağlıcakla.

## Kaynaklar

 - [https://javascript.info/dom-attributes-and-properties#dom-properties-are-typed](https://javascript.info/dom-attributes-and-properties#dom-properties-are-typed)
 - [https://plainjs.com/javascript/attributes/](https://plainjs.com/javascript/attributes/)
 - [http://jquery-howto.blogspot.com.tr/2011/06/html-difference-between-attribute-and.html](http://jquery-howto.blogspot.com.tr/2011/06/html-difference-between-attribute-and.html)
 - [https://stackoverflow.com/questions/16051491/difference-between-prop-and-attr-in-jquery-and-when-to-use-attr-and-prop](https://stackoverflow.com/questions/16051491/difference-between-prop-and-attr-in-jquery-and-when-to-use-attr-and-prop)
 - [http://blog.jquery.com/2011/05/12/jquery-1-6-1-released/](http://blog.jquery.com/2011/05/12/jquery-1-6-1-released/)
 - [https://johnresig.com/blog/jquery-16-and-attr/](https://johnresig.com/blog/jquery-16-and-attr/)