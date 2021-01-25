---
layout: post
title: Mac OS'da Yavaş İnternet Durumunu Simüle Etmek
Date: 2014-11-12 18:05
Category: genel
tags: [Network Link Conditioner]
---

Biz web geliştiricilerin kullandığı makineler genelde genel ortalamaya nispeten iyi makinelerdir. Normal kullanıcının yaşadığı bazı sorunları biz kendi makinemizde yaşamayız. Genelde kod yazarının gelen soruna karşı cevabı "abi bende sorun olmuyor"

İnternetin hızının yavaş olduğu durumları simule etmek için bir program arayışına giridim. Şirkette Mac Os işletim sistemini kullandığı için, aradığım programda Mac Os'ta çalışan bir program olmalıyıdı. İlk önerilen program "Network Link Conditioner" 

Bu programı indirmek için Xcode > Open Developer Tool > More Developer Tools... yolu ile bu programı indirme sayfasına gidin. Bu sayfaya girmeden önce sizden Apple Id ve şifrenizi isteyecektir. 

![ncl01][ncl01]

Siteye giriş yaptıktan sonra karşınıza çıkan son Xcode için Hardware IO Tools .dmg uzantılı dosyayı indirip kurun.

![ncl02][ncl02]

Programı açtığınızda aşağıdaki gibi bir ekran ile karşılaşacaksınız. 

![ncl03][ncl03]

Profil selectbox'ın mevcut seçenekleri DSL, EDGE, 3G vd. seçebiliyoruz. Ayrıca kendi profilimizi oluşturup test edebiliyoruz. OFF'u ON haline getirdiğimizde bağlantımız seçtiğimiz internet hızına düşüyor. Dikkat ON durumunda unutmak sıkıntı oluyor. Eski Dialup'lı günleri tekrar yaşamak hoş değil :D


## Kaynaklar

 - [http://blog.tcs.de/simulate-slow-network-connection-on-mac-os-x/](http://blog.tcs.de/simulate-slow-network-connection-on-mac-os-x/)
 - thisbythem.com/blog/simulating-a-slow-internet-connection-on-osx


[ncl01]: /images/ncl_01.png
[ncl02]: /images/ncl_02.png
[ncl03]: /images/ncl_03.png