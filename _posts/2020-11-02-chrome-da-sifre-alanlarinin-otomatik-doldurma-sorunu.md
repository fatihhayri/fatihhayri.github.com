---
layout: post
title: Chrome'da şifre alanlarının otomatik doldurma sorunu
description: Chrome'da şifre alanlarının istemsiz olarak otomatik doldurma sorunu
lang: tr_TR
Date: 2020-11-02 14:00
categories: [Genel]
tags: [chrome, şifre, sorun]
---

Bu hata ilk olarak 7-8 ay önce karşıma çıkmıştı. Chrome bir sitede kayıtlı şifreniz varsa sitedeki tüm type="password" girdi alanlarını otomatik olarak dolduruyor. Normalde bu sorunu çözmek için `autocomplete="no"` tanımı yeterli oluyordu, ancak bu kabulü Chrome kaldırmış. 

![chrome şifreli alanlarda sorun](https://fatihhayrioglu.com/images/chrome-autocomlete-problem.png)

Stackoverflow'da önerilen yötemler işe yaramamıştı. Bu sefer denediğimde `autocomplete="new-password"` tanımı işe yaradı. 

```html
<input type="text" name="tel">
<input type="password" name="password" autocomplete="new-password">
```

Kalın sağlıcakla.

 - [https://stackoverflow.com/a/38961567/296373](https://stackoverflow.com/a/38961567/296373)