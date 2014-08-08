---
layout: post
title: ie7 Renk Geçişi Sorunu ve Çözümü
Date: 2011-10-20 22:27
Category: CSS
tags: css sorunları, filtre, ie7, renk geçişi
---

CSS3 artık bazı özellikleri ile hayatımıza giriyor, tabi kod yığını
halinde girse de güzel sonuçları gördükçe kod yığını sorununu dert
etmiyoruz. Tabi sorunlardan bir taneside İnternet Explorer
desteklememesi. Daha önce İnternet Explorer için çözüm üretmiş olduğumuz
[box-shadow özelliğini][]anlatmıştık. Her şey buraya kadar güzel, ancak
geçenlerde bir sorunla karşılaştım ve sizlerle paylaşmak istedim.

Sorun şu ki ie7’de(ki ie6’yı öldürdük ama ie sorunlarından kurtulamadık)
uyguladığım filtre: uygulanmıyor.
[http://www.colorzilla.com/gradient-editor/][] sitesindeki aracı
kullanarak renk geçişi kodlarımı oluşturuyorum.

	:::css
	div{
	    background: #f6e6b4; /* Old browsers */
	    background: -moz-linear-gradient(top, #f6e6b4 0%, #ed9017 100%); /* FF3.6+ */
	    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f6e6b4), color-stop(100%,#ed9017)); /* Chrome,Safari4+ */
	    background: -webkit-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* Chrome10+,Safari5.1+ */
	    background: -o-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* Opera 11.10+ */
	    background: -ms-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* IE10+ */
	    background: linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* W3C */
	    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e6b4', endColorstr='#ed9017',GradientType=0 ); /* IE6-9 */
	    padding:5px 10px;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/S9eB2/embedded/result,html,css"></iframe>

Şöyle bir kodumuz olsun uygulamaya ie7’de baktığımızda background:#ffd65e; /* Old browsers */ satırının sonucunu görüyoruz, halbuki ie7
doğrusal renk geçişini destekliyor, ancak hasLayout sorunu nedeni ile bu
özelliği uygulamıyor. Bir yükseklik veya genişlik tanımı yapınca
düzeliyor, ancak bu benim işime yaramıyor. Gerçek çözüm ise hasLayout
sorunlarının kahramanı zoom:1 tanımı

	:::css
	div{
	    background: #f6e6b4; /* Old browsers */
	    background: -moz-linear-gradient(top, #f6e6b4 0%, #ed9017 100%); /* FF3.6+ */
	    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f6e6b4), color-stop(100%,#ed9017)); /* Chrome,Safari4+ */
	    background: -webkit-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* Chrome10+,Safari5.1+ */
	    background: -o-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* Opera 11.10+ */
	    background: -ms-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* IE10+ */
	    background: linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* W3C */
	    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e6b4', endColorstr='#ed9017',GradientType=0 ); /* IE6-9 */
	    padding:5px 10px;
	    zoom:1;
	}

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/fatihhayri/ReFgk/1/embedded/result,html,css"></iframe>

## Kaynaklar

-   [http://stackoverflow.com/questions/3268834/css-gradient-height-for-ie][]
-   [http://stackoverflow.com/questions/213750/gradient-colors-in-internet-explorer][]

  [box-shadow özelliğini]: http://www.fatihhayrioglu.com/kutulara-golge-vermek-box-shadow/
  [http://www.colorzilla.com/gradient-editor/]: http://www.colorzilla.com/gradient-editor/
  [http://stackoverflow.com/questions/3268834/css-gradient-height-for-ie]: http://stackoverflow.com/questions/3268834/css-gradient-height-for-ie
  [http://stackoverflow.com/questions/213750/gradient-colors-in-internet-explorer]: http://stackoverflow.com/questions/213750/gradient-colors-in-internet-explorer
