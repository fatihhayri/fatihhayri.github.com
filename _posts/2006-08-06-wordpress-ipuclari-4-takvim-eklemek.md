---
layout: post
title: WordPress İpuçları - 4 &#58; Takvim eklemek
Date: 2006-08-06 14:13
categories: [WordPress]
tags: [takvim-eklemek, tarih, WordPress]
---

WordPress'e takvim eklemek çok basit, zaten bunu için WordPress
seçmiyormuyuz. İsteklerimizi basit yoldan karşıladığı için. Takvim
eklemek istediğiniz yere aşağıdaki kodu yazmanız yeterli

[sourcecode language="php"]<?php get_calendar() ?>

Türkçe'ye çevirmek için yine Crimson Editörü kullanıyoruz. Peki kodlar
nerdemi? wp-includes/locale.php dosyasında


