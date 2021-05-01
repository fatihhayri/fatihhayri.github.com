---
layout: post
title: Sitemi düzenleme çabalarım I&#58; Etiket Bulutu ve etiketler
Date: 2008-03-16 19:04
categories: [WordPress]
tags: [etiket, Etiket bulutu, WordPress, yağmur]
---

Etiket bulutları kullanıcının isteğine hızlı erişmesini sağlayan ve
arama motorları açısından önemli olan bir araçtır. Türkçe günlük
yazarları pek tercih etmese de bence güzel bir uygulama. Etiket sistemi
hakkında ayrıntılı bilgiyi teknoseyir ve bildirgeç'ten
alabilirisiniz.



WordPress bize etiket bulutu eklem imkanı sağlıyordu ancak bazı
eklentiler yardımı ile, ancak önemine binaen WordPress 2.3 sürümünden
itibaren etiket sistemini normal paketin içine ekledi. Benim de sitemi
2.3.3 sürümüne yükseltmemim sebeplerinden biriside Ultimate Tag Warrior
eklentisi ile yaşadığım sorunlardı.

WordPress 2.3.3 sürümünü kurdum ancak birçok sorunuda beraberinde
getirdi. Bir süre bu sorunlarla uğraştım halada uğraşmaktayım.
Sorunlarla uğraşmaktan yeni sürümün yeniliklerinden yararlanmaya fırsat
olmadı.

Bu hafta sonu etiket bulutu ve etiket ekleme işlemini gerçekleştirdim.
Yaptığım işlemleri sizlerle paylaşmak istedim.
İlk olarak yeni sürüm ile eklediğim tabloların(wp_terms,
wp_term_taxonomy) içerik alanlarının karşılaştırma alanı kısmını
“utf8_general_ci” çevirmem oldu.

Daha sonra WordPress 2.3.3’ün ilk defa güzel bir yönün gördüm. Yönet ->
İçe aktar kısmında “Ultimate Tag Warrior etiketlerini yeni etiketleme
yapısına aktar.” Seçeneğini gördüm. Bu kısım 4 aşamadan oluşuyor ve bize
kolayca eski etiketlerimiz yeni sisteme adapte etmemizi sağlıyor.

Daha sonra etiketleri her yazının sonuna eklemek için Görünüm -> Tema
Editörü kısmından Tekil Yazı kısmını tıklayarak yazının sonuna

[sourcecode language="php"]<p class="etiketler"><?php
the_tags('<strong>Etiketler :</strong>', ', ', ' ');
?></p>

Kodunu ekledim. Ben sonuna ekledim ama siz bu kodu istediğiniz yere koya
bilirisiniz.

Daha sonra Ana sayfa’nın sağ tarafına

[sourcecode language="php"]<div id="etiketBulutu"><?php
wp_tag_cloud('smallest=8&amp;largest=16&amp;number=50&amp;unit=pt');
?></div>

Kodunu ekledim ve ilgili CSS kodlarını ana stil dosyama
ekledim.İkonlarımıda http://www.iconlet.com/ den aldım.

Sonuçta etiket bulutu ve etiketlerime kavuştum. Hemde Türkçe karakter
sorunumda yok.

Daha sonra “Ultimate Tag Warrior”dan alışık olduğum daha önce
kullandığım etiketlerin listesini görmek için "Advanced Tag Entry"
eklentisini kurdum. Ben çok fazla eklenti kurma taraftarı değilim ama
etiket tutarlılığı için bunu eklemek zorundaydım.

Herkese bulutlu ve yağmurlu günler diliyorum. Malum susuz kaldık.

## Kaynak

-   http://alexbrie.net/1836/how-to-import-ultimate-warrior-tags-into-wordpress-23-and-how-to-easily-backup-your-wordpress-database
-   [http://codex.wordpress.org/Template_Tags/wp_tag_cloud#Cloud_displayed_under_Popular_Tags_title][]
-   http://poplarware.com/tagplugin.html

  [http://codex.wordpress.org/Template_Tags/wp_tag_cloud#Cloud_displayed_under_Popular_Tags_title]: http://codex.wordpress.org/Template_Tags/wp_tag_cloud#Cloud_displayed_under_Popular_Tags_title
