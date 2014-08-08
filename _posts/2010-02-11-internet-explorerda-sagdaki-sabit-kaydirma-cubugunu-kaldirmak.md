---
layout: post
title: İnternet Explorer&#039;da sağdaki sabit kaydırma çubuğunu kaldırmak
Date: 2010-02-11 18:12
Category: CSS
tags: ie, ie6, ie7, ipucu, kaydırma-çubuğu, overflow
---

![][100]

Pek nadirde olsa böyle bir istek ile karşılaşıyorum. Bu ikinci
oldu. İlk başta bunun bir çözümü yoktur diye düşündüm(Bunu düşünmemin
nedeni daha önce böyle bir istek ile karşılaştığımda çözümünü bulamadım
diye aklımda kalması). Ancak sonra bazı sitelerde böyle bir şey
yapıldığını görünce, araştırmaya karar verdim ve çözümü buldum. Genelde
%100 flash sayfalarda veya kendi içinde kaydırma çubuğu çıkan sayfalarda
bu tip bir istek geliyor. Firefox, İnternet Explorer 8, Safari, Google
Chrome gibi yeni nesil tarayıcılar eğer içerik uzun değilse kaydırma
çubuğunu göstermiyor. Ancak ie6 ve ie7 de durum böyle değil. İçerik
olsun yada olması sağda yatay kaydırma çubuğu daima görünüyor. Bu durumu
eşitlemek için çok basit bir kod yazmamız yeteli oluyor.

	:::css
	html{
		overflow:auto;
	}

## Kaynaklar

-   [http://www.webmasterworld.com/forum21/10389.htm][]
-   [http://www.experts-exchange.com/Web_Development/Web_Languages-Standards/HTML/Q_22759180.html][]

  [100]: /images/ie7_kaydirma_cubugu.jpg
    "ie7_kaydirma_cubugu"
  [http://www.webmasterworld.com/forum21/10389.htm]: http://www.webmasterworld.com/forum21/10389.htm
    "http://www.webmasterworld.com/forum21/10389.htm"
  [http://www.experts-exchange.com/Web_Development/Web_Languages-Standards/HTML/Q_22759180.html]: http://www.experts-exchange.com/Web_Development/Web_Languages-Standards/HTML/Q_22759180.html
    "http://www.experts-exchange.com/Web_Development/Web_Languages-Standards/HTML/Q_22759180.html"
