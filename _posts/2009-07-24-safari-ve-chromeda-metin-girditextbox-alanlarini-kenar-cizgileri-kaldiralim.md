---
layout: post
title: Safari ve Chrome&#039;da metin girdi(textbox) alanlarını kenar çizgileri kaldıralım
Date: 2009-07-24 09:54
Category: CSS, XHTML
tags: dış-hat-çizgisi, Google Chrome, outline, özel-metin-girdi-alanları, safari, textbox
---

Safari ve Google Chrome tarayıcıları her hangi bir metin girdi
alanına(text input) odaklandığında bu elemanın etrafını bir şerit ile
belirliyor.

![][100]
**Google Chrome Normal Hali**

![][1]
**Google Chrome Odaklanmış Hali**

![][2]
**Safari Normal Hali**

![][3]
**Safari Odaklanmış Hali**

Bu normalde güzel bir özellik, ancak biz eğer standart metin girdi alanı
yerine kendi tasarladığımız bir metin girdi alanı koydu isek bu
odaklanma çizgileri sorun çıkarıyor. Bir örnek yapalım.

En son projelerimden bonus.com.tr'de böyle bir sorun ile karşılaştığımda
buna bir çözüm aradım. İlk kodum şöyle idi.

	:::html
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Untitled Document</title>
	<style type="text/css">
	body{background-color:#52c520;}

	.aramaMetinKutusu{
		background:url(images/arama_zemini.gif) 0 0 no-repeat;
		width:202px;
		height:29px;
	}

	.aramaMetinKutusuOdak{
		background:url(images/arama_zemini.gif) 0 -31px no-repeat;
		width:202px;
		height:29px;
	}

	.aramaMetinKutusu input{
		width:190px;
		margin:5px 0 0 4px;
		border:none;
	}

	.aramaMetinKutusuOdak input:focus{
		width:190px;
		margin:5px 0 0 4px;
		border:none;
		background-color:#F6FFD4
	}

	</style>
	</head>

	<body>
	<div class="aramaMetinKutusu">
	    <input type="text" name="arama" onfocus="this.parentNode.className='aramaMetinKutusuOdak'" onblur="this.parentNode.className='aramaMetinKutusu'" />
	</div>
	</body>
	</html>

Bu kodlarım Firefox ve IE'de sorunsuz çalıştı. Daha sonra sayfayı Google
Chrome'da test ettiğimde aşağıdaki gibi bir sorun ile karşılaştım.

![chrome_odak][]

Sorunun çözümünü araştırdığımda dış kenar çizgisini sıfırlamam
gerektiğini gördüm.  

	:::css
	input{
		outline:0
	}

tanımı bizi çözüme ulaştırdı.

Örnek kodu görmnek için [tıklayınız.][]

Peki dış hat çizgisini kaldrımayalım demiştik şimdi ise kaldırdık, ne
olacak şimdi? Burada odaklanma durumu için bir sınıf atayıp ona ayrı bir
tanım yaptığımız için klavye kullananlar için sorun olmayacaktır.

## Kaynaklar

-   [http://gandamanurung.com/css/how-to-get-rid-textinput-blue-border-in-safari/][]
    (google chrome safari de mavi kenarları yok etmek)
-   [http://forums.devshed.com/css-help-116/safari-input-focus-blue-border-477819.html][]
-   [http://dev.markhaus.com/blog/2009/03/how-to-annul-safaris-outline-effect-in-input-fields-and-friends/][]
-   [http://www.usabilitypost.com/2008/10/15/css-tip-remove-mac-osx-glowing-blue-outlin-for-custom-styled-input-fields/][]
-   [http://www.infoqu.com/dev/css-help/safari-input-fields-142336-1/][]

  [100]: /images/outline_kaldirma_01.gif
  [1]: /images/outline_kaldirma_02.gif
  [2]: /images/outline_kaldirma_03.gif
  [3]: /images/outline_kaldirma_04.gif
  [chrome_odak]: /images/chrome_odak.gif
  [tıklayınız.]: /dokumanlar/metingirdi_kaldir_2.html
  [http://gandamanurung.com/css/how-to-get-rid-textinput-blue-border-in-safari/]: http://gandamanurung.com/css/how-to-get-rid-textinput-blue-border-in-safari/
  [http://forums.devshed.com/css-help-116/safari-input-focus-blue-border-477819.html]: http://forums.devshed.com/css-help-116/safari-input-focus-blue-border-477819.html
  [http://dev.markhaus.com/blog/2009/03/how-to-annul-safaris-outline-effect-in-input-fields-and-friends/]: http://dev.markhaus.com/blog/2009/03/how-to-annul-safaris-outline-effect-in-input-fields-and-friends/
  [http://www.usabilitypost.com/2008/10/15/css-tip-remove-mac-osx-glowing-blue-outlin-for-custom-styled-input-fields/]: http://www.usabilitypost.com/2008/10/15/css-tip-remove-mac-osx-glowing-blue-outlin-for-custom-styled-input-fields/
  [http://www.infoqu.com/dev/css-help/safari-input-fields-142336-1/]: http://www.infoqu.com/dev/css-help/safari-input-fields-142336-1/
