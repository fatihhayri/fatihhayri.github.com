---
layout: post
title: WordPress sürümümü yükselttim
Date: 2008-04-23 17:50
Category: Haberler
tags: WordPress, wordpress 2.5, yükseltme
---

WordPress sürümümü son sürüm olan 2.5'e yükselttim. Güvenlik ve e-posta
alamama gibi sorunlarımı halletmek için yükseltme yaptım. Bu sefer geçen
seferlere nazaran çok basit oldu. WordPress otomatik sürüm yükseltme
eklentisinin son sürümünü kurdum. Eski sürümde sorun çıktı. Sonra
eklentiyi kullanarak wordpress sürümümü yükselttim. Türkçe karakterlerde
sorun çıktı daha önceki yükseltmelerden bildiğim bu sorunu
[yakuter][]'den öğrendiğim gibi

1.  `$this->select($dbname);`

satırının üstüne

1.  `$this->query("SET NAMES 'UTF8'");`

kodunu yazarak halletim. Sonra eklentilerimin tümünü aktif ettim. İşlem
tamam. İlk izlenimlerim gayet güzel. Yönetici paneli yarı İngilizce yarı
Türkçe ama olsun böylede güzel. Görünümü gayet güzel. Etiket eklerken
mevcut etiketleri bulmak için eklenti kurmuştum. Yeni sürümde bu
eklentiye ihtiyaç kalmamış. Yorumlardan ve iletişim formlarından e-posta
gelmeme sorunum devam ediyor. Bu sorunu çözemedim. Zamanla çözerim
inşallah. Gayet hızlı ve başarılı bir geçiş olduğu için sevinçliyim.


  [yakuter]: http://www.yakuter.com
