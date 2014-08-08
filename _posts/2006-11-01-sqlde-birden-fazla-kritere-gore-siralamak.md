---
layout: post
title: Sql&#039;de birden fazla kritere göre sıralamak
Date: 2006-11-01 13:02
Category: Sql
tags: order-by, sıralama, Sql
---

Bu gün başıma geldide öğrendim ve sizlerle paylaşmak istedim. Sql'de bir
kritere göre sıralama yaptığınızda aynı değere sahip alanların
sıralamasını yaparken duruma göre farklılık gösterebiliyor bunu
engellemek için ikinci bir kritere göre sıralama yapmak en güzel
çözüm.

1.  Select * From veritabani_adi Order by Tarih

şeklinde bir sıralama yaptığımızı düşünelim. Aynı tarihlerin
sıralamasında sorun çıkarsa ikinci bir kriter ekleyelim. Bu işlem çok
kolay virgülden sonra diğer kriteri yazmak yeterli.

1.  Select * From veritabani_adi Order by Tarih, ID

Bu kadar kolay. Bu bilgiyi bana öğreten Halil'e teşekkürlerimi sunarım.


