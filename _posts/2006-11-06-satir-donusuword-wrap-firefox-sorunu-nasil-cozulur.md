---
layout: post
title: Satır Dönüşü(word wrap) Firefox sorunu nasıl çözülür?
Date: 2006-11-06 14:12
Category: CSS, XHTML
tags: [CSS, Firefox, problem, satır-başı, XHTML]
---

http://forum.ceviz.net/showthread.php?p=249585#post249585 Cevap
yazarken araştırdım da burayada yazayım dedim. Sabit bir genişlikte bir
katman oluştuurp bu genişliği aşan genişlikte içerikleri otomatik olarak
satırın başına tmak için ne yapabiliriz. Normalde bunu için IE5.5+ dan
itibaren word-wrap: break-word kodu ile bunu desteklemektedir, ancak
Mozilla tabanlı web tarayıcıları(örn Firefox) bu koda banamısın demiyor.
Çözüm


{% highlight css %}
pre {
	white-space: pre-wrap; /* css-3 */
	white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
	white-space: -pre-wrap; /* Opera 4-6 */
	white-space: -o-pre-wrap; /* Opera 7 */
	word-wrap: break-word; /* Internet Explorer 5.5+ */
}
{% endhighlight %}

HTML kodu

{% highlight html %}
	<pre>uzuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuunmetin</pre>
{% endhighlight %}

12 Şubat 2010'dan sonra düzenleme yapıldı

Bu yazıyı yazdığımda Firefox 2 vardı ve yazdığım çözüm işe yaramamıştı.
Şimdi işler değişti. white-space: pre-wrap özelliğini ve değerini
Firefox 3'dan itibaren desteklediği için artık kodumuzu aşağıdaki gibi
değiştirebiliriz. Opera eski sürümlerinide es geçerek tabi, gerçi Opera
10'nun desteklendiği söyleniyor, ama benim testimde olmadı.

{% highlight css %}
pre {
	white-space: pre-wrap; /* css-3 */
	word-wrap: break-word; /* Internet Explorer 5.5+ */
}
{% endhighlight %}

## Kaynaklar

-   [http://www.quirksmode.org/css/whitespace.html][]
-   [http://reference.sitepoint.com/css/white-space][]

  [http://www.quirksmode.org/css/whitespace.html]: http://www.quirksmode.org/css/whitespace.html
  [http://reference.sitepoint.com/css/white-space]: http://reference.sitepoint.com/css/white-space
