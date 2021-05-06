---
layout: post
title: IE&#039;de Hata Ayıklamak için şartlı Yorumlar Kullanmak
Date: 2006-12-17 16:03
Category: CSS, Web Standartları, XHTML
tags: [CSS, hata, Hata ayıklama, ie-fix, Web Standartları, XHTML, yorum]
---

CSS ile web sitesi kodlamanın en büyük sorunu CSS'in özelliklerini
yorumlayamayan veya yanlış yorumlayan web tarayıcılarıdır. Bu nedenle
CSS ile web sitesi kodlarken bu tip hataları ayıklamamız gerekiyor. CSS
ile hata ayıklama web tarayıcı gruplarının veya bir kısım web tarayıcısı
için kuralları veya bildirimleri gizlemek veya göstermek şeklinde
uygulanır.

CSS kuralları ve bildirimlerini gizlemek için bazı yöntemler mevcuttur.
Biz bunlardan şartlı Yorumların kullanımını öğreneceğiz. şartlı Yorumlar
Internet Explorer 5 versiyonu ile birlikte kullanılmaya başlanmıştır.
şartlı Yorumlar xhtml kodunun yorumlanıp yorumlanmayacağını belirler.

	:::html
	<!--[if IE]> Bu kod Interner Explorer 5 ve üzeri versiyonlarda çalışır. <![endif]-->

Bu kodlama bizim bir çok hatayı ayıklamamız için biçilmiş kaftandır.
Ayrıca şartlı komutlar bize versiyon farklılıklarına göre kod
yazmamızıda sağlar

	:::html
	<!--[if IE 6]>
	<style type='text/css'>
		a:link, a:visited, a:active {
			text-decoration: none;
		}
	</style>
	<![endif]-->

Bu kod ile sadece IE 6 versiyonunda linklerin altının çizilmesini
engellemiş oluyoruz.

Eğer bir kuralı yugulamka istiyor isek ve bu kuralı belli bir web
tarayıcısından gizlemek istediğimiz durumlarda şartlı Komuta (!)
operatörünü ekleyerek bunu sağlayabiliriz.

	:::html
	<!--[if !IE 6]>
	<style type='text/css'>
		a:link, a:visited, a:active {
			text-decoration: none;
		}
	</style>
	<![endif]-->

Bu kod ile sadece IE6'da bu kodun uygulanmasını engelledik.

Bunun gibi başka işlevsel operatörlerde mevcuttur.

 | Operatör   | Açıklama                | Örnek					  |
 | :----------| -----------------------:|:-----------------------:|
 | gt         | - den büyük             | <!--[if IE gt 5.5]>	  |
 | gte        | - den büyük veya eşit   | <!--[if IE gte 5.5]>	  |
 | lt         | - den küçük             | <!--[if IE lt 5.5]>	  |
 | lte        | - den küçük veya eşit   | <!--[if IE lte 5.5]>	  |
 | !          | değilse                 | <!--[if !IE 5.5]>		  |
{:.table}
 

	:::html
	<!--[if lt IE 6]>
		<style type="text/css">
			@import ("ie.css");
		</style>
	<![endif]–>


Birçok hata ayıklama metodunda şartlı Komutlar kullanılabilir.

