---
layout: post
title: Sql&#039;de Tekrarsız sonuçlar elde etmek - DISTINCT
Date: 2007-09-06 13:17
Category: Sql
tags: Distinct, Sql, tablo, Tekrarsız sonuçlar
---

Bu kodu her defasında kullanmadan önce nasıl kullanıldığını arıyorum. Bu
günde aradım ve buraya yazmaya karar verdim. Unutursam burada bulurum
diye. Belki sizlerede yarar.

Şimdi kullanıcıların uyelik'lerinin ve resimlerinin olduğu iki tablom
var. Bunları bir birine bağlıyorum ve sadece resimleri olanları
gösteriyorum. Ancak şöyle bir sorunum oldu. Her resim için sonuçlar
tekrarlıyor. Yani adam iki adet resim ekleyince sonuçta iki kere
gösteriliyor. Tekrarı engellemek için ise DISTINCT kullandım.

**DISTINCT:** SQL'de tablo içinde birbirinin aynı veriler
bulunabilir.Aynı satırların listeleme esnasında bir kez yazılması için
Distinct sözcügü kullanılır.

[sourcecode language="sql"]SELECT DISTINCT kullanici.Email,
kullanici.Name, kullanici.Surname FROM kullanici INNER JOIN images ON
kullanici.Id = images.UyeId

Şekline yazınca oluyor. Bu kod sonucu e-postalar tekil olduğu için
tekrar eden verilerden kurtulmuş oluyorum.


