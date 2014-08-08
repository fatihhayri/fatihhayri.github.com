---
layout: post
title: WP:Popülarite Eklentisini Kurulumu ve Ayarlarının yapılması
Date: 2006-11-07 09:25
Category: WordPress
tags: en çok, hit, oy, popularity-contest, WordPress
---

http://alexking.org/projects/wordpress/plugins/popularity-contest.zip
adresinden eklentiyi indirin.

Zip'li dosya içindeki popularity-contest.php dosyasını
wp-content/plugins klasörüne atın. Admin-Etkinlikler
bölümünden Popularity Contest aktifleştirin. Bu aktifleştirme biraz
zaman alacaktır. 2-3 dak. kadar.

Tercihler - Popularity **Popularity Contest Template Tags** bölümünde
bahsedildiği gibi

[sourcecode language="php"] <?php akpc_most_popular(); ?> <h3>En
çok Hit alan Konular</h3> <ul> <?php akpc_most_popular(); ?>
</ul>

kısmını popülaritenin görünmesi gereken yer koyunuz.

Etkinlikler- Etkinlik Yönetici bölümünden Popularity Contest tıklayarak.
1284 ve 1287 deki Popularity - Popülarite: olarak değiştirin(veya
istediğiniz bir metin.) Ayrıca 1278 ide

[sourcecode language="php"]$suffix = '';

şeklinde değiştirin. İşte size güzel bir eklenti. Daha bir çok özelliği
olan bu eklentiyi incelemenizi öneririm. En çok göz atılan, bu sene
içinde en çok popüler olan, bu ay içinde en çok popüler olan vs. gibi
bir çok özelliği bünyesinde barındırıyor.


