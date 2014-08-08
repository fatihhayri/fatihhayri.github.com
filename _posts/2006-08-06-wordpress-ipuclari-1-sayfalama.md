---
layout: post
title: WordPress İpuçları - 3 &#58; Konuları Sayfalama
Date: 2006-08-06 13:31
Category: WordPress
tags: eklenti, sayfalama, WordPress
---

![Sayfalama][]WoprdPress'de girdiğimiz konuların sayfalanması için
sağdaki gibi ne yaptım?

[http://www.lesterchan.net/portfolio/programming.php][] buradan
eklentiyi indirdim.

Daha sonra **pagenavi.php** dosyasını wp-content/plugins bölümüne koydum
ve admin ekranına gidip aktif ettim.

Daha sonra bu sayfalama bölümünün bulunduğu yere bende index.php(sizde
farklı dosyalar olabilir. footer.php gibi) aşağıdaki kodu ekledim.

[sourcecode language="php"]<?php if(function_exists('wp_pagenavi')) {
wp_pagenavi(); } ?>

Daha sonra **pagenavi.php** dosyasını Crimson Editörde açarak Türkçe
karakter ayarını yaparak (Document-Encoding-UTF-8 Encoding w/o BOM) 47.
satırdaki Pages yerine Sayfalar, 50. satırdaki first yerine ilk sayfa ve
64. satırdaki last yerine de Son Sayfa yazarak eklentiyi
Türkçeleştirdim.


  [Sayfalama]: /images/sayfalama.gif
  [http://www.lesterchan.net/portfolio/programming.php]: http://www.lesterchan.net/portfolio/programming.php
