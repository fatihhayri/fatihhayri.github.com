---
layout: post
title: Javascript ile TC kimlik no doğrulama
Date: 2007-07-16 16:38
Category: Javascript
tags: Haberler, Javascript
---

[Ceviz forumda][] okudum. "TC kimlik numarasının ilk 10 rakamının
toplamının verdiği sonucun 1'ler basamağı 11. sayıya eşitir." bunun için
bir javascript kodu yazdım. Sizlerede lazım olur diye buraya yazıyorum.

javascript kodu:

{% highlight javascript %}
function tckimlikkontorolu(tcno) {
	var tckontrol,toplam; tckontrol = tcno; tcno = tcno.value; toplam = Number(tcno.substring(0,1)) + Number(tcno.substring(1,2)) +
	Number(tcno.substring(2,3)) + Number(tcno.substring(3,4)) +
	Number(tcno.substring(4,5)) + Number(tcno.substring(5,6)) +
	Number(tcno.substring(6,7)) + Number(tcno.substring(7,8)) +
	Number(tcno.substring(8,9)) + Number(tcno.substring(9,10));
	strtoplam = String(toplam); onunbirlerbas = strtoplam.substring(strtoplam.length,strtoplam.length-1);

	if(onunbirlerbas == tcno.substring(10,11)) {
		alert("doğru");
	} else{
		alert("yanlış");
	}
}
{% endhighlight %}

html kodu:

{% highlight html %}
<input name="tckimlikno" type="text" id="tckimlikno" onblur="tckimlikkontorolu(this);" maxlength="11" />
{% endhighlight %}

Ben bu kodu blur ile tetikledim siz bunu değiştirebilirsiniz.

<iframe scrolling="no" height="250" frameborder="0" style="width: 100%;border: none; overflow: hidden;" allowtransparency="true" data-height="250" src="http://codepen.io/fatihhayri/embed/kfdyH?type=result&amp;height=250" id="cp_embed_hgplm"></iframe>


  [Ceviz forumda]: http://forum.ceviz.net/
