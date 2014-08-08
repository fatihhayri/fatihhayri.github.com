---
layout: post
title: Javascript kodlarımızı eski versiyon web tarayıcılarından gizlemek
Date: 2006-10-17 15:57
Category: Javascript, XHTML
tags: Javascript, kodu gizle, XHTML
---

Eski versiyon web tarayıcılarında javascript kodlarımız saklamak için
aşağıdaki yöntemi kullanırız.

	:::html
	 <script language="JavaScript"><!--// ...
//--></script>

Eğer bu yöntemi dışarıdan javascirpt kodu çağırdığımız sayfalarda
kullanırsak. Eski web tarayıcıları bu kodu göremeyecek ve geçecektir. Bu
da eski web tarayıcılarına daha az kod yorumlama olanağı sağlayacaktır.


