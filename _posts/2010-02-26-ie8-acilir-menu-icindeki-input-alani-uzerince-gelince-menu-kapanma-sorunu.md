---
layout: post
title: IE8 Açılır Menü İçindeki Input Alanı Üzerince Gelince Menü Kapanma Sorunu
Date: 2010-02-26 23:26
Category: CSS, jquery, XHTML
tags: ie8, input, menü, sorun
---

Sorun tam olarak şu; açılır bir menü eğer bir resim üzerinde ise menü
içindeki input alanı üzerine gelince menü istem dışı olarak kapanıyor.
Diğer hiç bir tarayıcıda sorun yokken ie8 bu durumda sorun oluşturuyor.

İnternet Explorer'ın sorunlarına alışmış bu bünye Microsoft'un bu yeni
nesil eskimiş tarayıcısından böyle bir sorun olmasını yadırgamadı
açıkçası. Soruna [ie7 gibi yorumlama kodunu][] ekleyerek çözmek istedim
ama kod sitenin dinamik kısımlarında çalışırken statik kısımlarında
çalışmadı.

Bu iş ile bir projede karşılaştım, proje ismini açıklamak sakıncalı
olabilir diye ben size benzer bir örnek kodunu vereceğim. 

{% highlight html %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript">
 $(document).ready(function() {
	$('a').hover(function(){
		$(this).children(':last').show();
	},
	function(){
		$(this).children(':last').hide();
	});
 });
</script>
<style type="text/css">
a{ position:relative;}
	a div{display:none; padding:20px; background-color:#999; width:250px; position:absolute; top:18px; left:0}
		a div input{ background:transparent}
</style>
</head>

<body>
<a href="javascript:;">menu aç
<div><input type="text" /></div>
</a>
<p><img src="http://fatihhayrioglu.com/images/ie7_kaydirma_cubugu.jpg" width="450" height="398" /></p>
</body>
</html>
{% endhighlight %}

Örneği görmek için [tıklayınız.][]

![][100]

Bende sorunu araştırmaya başladım ve sonunda buldum. Sorun **input**'a
atanan **background:none** veya **background:transparent**
tanımlamalarından kaynaklanıyor. backgorund'a renk veya resim tanımı
yapınca sorun çözülüyor.  

Ben tasarıma uymak için background'a resim tanımlayarak sorunu aştım.

## Kaynak

-   [http://ff.im/gwMR3][]

  [ie7 gibi yorumlama kodunu]: http://www.fatihhayrioglu.com/internet-explorer-8i-7-gibi-yorumla-kodu/
  [tıklayınız.]: /dokumanlar/ie8_popupmenu_input_sorunu.html
  [100]: /images/ie8_sorunu.gif
    "ie8_sorunu"
  [http://ff.im/gwMR3]: http://ff.im/gwMR3 "http://ff.im/gwMR3"
