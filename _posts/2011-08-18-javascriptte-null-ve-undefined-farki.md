---
layout: post
title: Javascript’te “null” ve “undefined” farkı
Date: 2011-08-18 14:19
Category: Javascript
tags: boş, null, tanımsız, typeof, undefined
---

Javascript diğer birçok dilden farklı olarak **null** ve **undefined**
iki ayrı durum olarak kabul eder.

**null;** boş değer anlamına gelen özel bir değerdir. **typeof null**
bize nesne döndürür.

{% highlight javascript %}
<script>
	var testDegiskeni = null;
	alert(testDegiskeni); //null
	alert(typeof testDegiskeni); //object
</script>
{% endhighlight %}

**undefined** değişken bildirilmiş ama henüz değeri atanmamış demektir.

{% highlight javascript %}
<script>
	var testDegiskeni;
	alert(testDegiskeni); // undefined
	alert(typeof testDegiskeni); //undefined
</script>
{% endhighlight %}


Yukarıdaki örneklerde gördüğümüz gibi **null** özel bir nesne iken
**undefined** tip olarak **undefiend** döndürür.

Atanmamış değişkenlerin değeri javascript tarafında otomatik olarak
**undefined** olarak atanır.

Javascript asla **null** değeri atamaz. Eğer bir elemanın değeri
**null** ise bu javascript tarafından değil, program tarafından atanmış
demektir.

## undefined ve null kontrolü

{% highlight javascript %}
if(typeof(test) !== 'undefined' && test != null) {
	//test değişkenin kullanabiliriz
}
{% endhighlight %}

## Kaynak

-   [http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property-in-javascript][]
-   [http://snipplr.com/view.php?codeview&id=14618][]
-   [http://www.bloggingdeveloper.com/post/JavaScript-null-vs-undefined-The-Difference-between-null-and-undefined.aspx][]
-   [http://bonsaiden.github.com/JavaScript-Garden/#core.undefined][]

  [http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property-in-javascript]: http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property-in-javascript
  [http://snipplr.com/view.php?codeview&id=14618]: http://snipplr.com/view.php?codeview&id=14618
  [http://www.bloggingdeveloper.com/post/JavaScript-null-vs-undefined-The-Difference-between-null-and-undefined.aspx]: http://www.bloggingdeveloper.com/post/JavaScript-null-vs-undefined-The-Difference-between-null-and-undefined.aspx
  [http://bonsaiden.github.com/JavaScript-Garden/#core.undefined]: http://bonsaiden.github.com/JavaScript-Garden/#core.undefined
