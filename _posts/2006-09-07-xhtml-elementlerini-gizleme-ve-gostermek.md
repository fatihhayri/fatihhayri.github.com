---
layout: post
title: (X)Html Elementlerini gizleme ve göstermek
Date: 2006-09-07 19:11
Category: Javascript
tags: [eleman gizle, fonksiyon, göster-gizle, Javascript]
---

```javascript
	 function gostergizle(elementid){
document.getElementById(elementid).style.display=
(document.getElementById(elementid).style.display!="block")? "block" :
"none" }
```

kod kısmında da

```html
<a
href="javascript:gostergizle('haber')">haber</a> <div
id="haber">haberler .......</div>
```

Bu hem elementlerimizi göstermeye hemde gizlemeye yarayan bir fonksiyon.
Basit ve kullanışlı bir fonksiyon


