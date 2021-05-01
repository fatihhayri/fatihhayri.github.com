---
layout: post
title: WordPress İpuçları - 2&#58; Çöp(spam) Yorumları nasıl engelledim?
Date: 2006-08-02 23:28
categories: [WordPress]
---

WordPress kurduğumdan beri her gün istisnasız çöp yorum geliyordu. Bunu
engellemek için eklenti aramaya koyuldum ve birtane buldum.
[Peter's Custom Anti-Spam Image Plugin for Wordpress][] buradan dosyayı
indirdim. - zipli dosyayı açtım ve **custom_anti_spam.php** dosyasını
wp-content/plugins ve jenkinsv.ttf font dosyasını da sitemin ana
dizinine(root) belirtildiği gibi koydum. - **custom_anti_spam.php**
dosyasında 15-24 satırlar arasındaki anti-çöp kelimlerini kendime göre
değiştirdim.(humurgan, vizara vd.) - **custom_anti_spam.php** içindeki
sayfada görünecek ingilizce bölümleri Türkçeleştirdim. -
**custom_anti_spam.php** düzenlerken [Crimson editor][]
kullandım.([Türkçe karakter sorunun][] çıkmasın diye) - wordpress admin
panelinden pluginler(eklentiler) kısmına girerek eklediğim bu eklentiyi
aktif ettim. Artık çöp yorum gelmiyor yaşasın.

  [Peter's Custom Anti-Spam Image Plugin for Wordpress]: http://www.theblog.ca/?p=21
  [Crimson editor]: http://www.crimsoneditor.com/
  [Türkçe karakter sorunun]: http://fatihhayrioglu.com/?p=12
