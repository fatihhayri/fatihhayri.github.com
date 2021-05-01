---
layout: post
title: Statik sayfalarda yönlendirme
Date: 2006-10-10 15:04
categories: [Javascript, HTML]
tags: [Javascript, yönlendirme]
---

Statik sayfalarda yönlendirme için javascript ve xhtml kullanırız.
Javascript'in **location.href** özelliği bize mevcut sayfa URL'sine
yazma ve okuma izni verir. Bir çok uygulamada kullanılabileceğimiz güzel
bir özelliktir bu. Örneğin yönlendirme için kullanalıbilir. Kodumuzu
yazarsak:

```html
<script>
	location.href ="DigerSayfa.html";
</script>
```

Ayrıca xhtml ile de bu işi yapabiliriz.

```html
<head>
	<meta http-equiv="Refresh" content="5; URL=DigerSayfa.html" />
</head>
```

Burdaki **5** değeri web tarayıcısının yönlendirmeden önceki beklediği
değeri gösterir. Değer saniye cinsindendir.

Eğer yönlendirme yapayım ama geri tuşuna basınca önceki sayfaya gitmesin
diyorsak **location.replace** özelliğini kullanmalıyız.

```html
<script>
	location.replace("DigerSayfa.html");
</script>
```
