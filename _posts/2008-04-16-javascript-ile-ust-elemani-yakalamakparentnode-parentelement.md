---
layout: post
title: Javascript ile üst Elemanı yakalamak(parentNode &amp; parentElement)
Date: 2008-04-16 10:18
Category: Javascript
tags: Firefox, ie, Javascript, parentElement, parentNode
---

Ben şahsen 4-5 defa karşılaştığım bir sorun. İç içe bulunan bir kod
yığınında bir nesnenin üst elemanına erişmek için javascript'in hangi
özelliğini kullanayım.

Açıkçası ben <span>parantElement</span> özelliğini kullandım her
defasında. Ancak Firefox'da çalışmadığını görünce vazgeçtim her
seferinde.

Daha sonra aramalar sonucu her ikisininde çalıştırdığı
<span>parentNode</span> özelliğini kullanmaya karar verdim.

	:::html
	 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML
1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html
xmlns="http://www.w3.org/1999/xhtml"> <head> <meta
http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>parentNode örnek sayfası</title> </head> <body> <form
id="DugmeFormu"> <input id="Dugme" type="button" value="Üst elemanı
göster" onclick="ustEleman();"> </form> <script
language="JavaScript"> function ustEleman() { var m =
document.getElementById("Dugme").parentNode.id; alert("Üst elemanı:
"+'"'+m+'"'); } </script> </body> </html>

Örnek sayfayı görmek için [tıklayınız.][]

## Kaynaklar

-   [http://www.w3schools.com/htmldom/dom_nodetree.asp][]
-   [http://www.java2s.com/Code/JavaScriptReference/Javascript-Properties/parentNodeSyntaxandNote.htm][]
-   [http://ronsguide.com/js/parentnode/][]


  [tıklayınız.]: /dokumanlar/parentNode.htm
  [http://www.w3schools.com/htmldom/dom_nodetree.asp]: http://www.w3schools.com/htmldom/dom_nodetree.asp
  [http://www.java2s.com/Code/JavaScriptReference/Javascript-Properties/parentNodeSyntaxandNote.htm]: http://www.java2s.com/Code/JavaScriptReference/Javascript-Properties/parentNodeSyntaxandNote.htm
  [http://ronsguide.com/js/parentnode/]: http://ronsguide.com/js/parentnode/
