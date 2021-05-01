---
layout: post
title:  NVM Nedir? Nasıl Kullanılır?
Date: 2017-12-30 15:37
categories: [Nodejs]
tags: [nodejs, nvm]
---

Node.js projeleri ile çalışırken birden farklı sürüm ile çalışmamız gerekebiliyor. Her projenin gereksinimleri farklı oluyor. Farklı sürümleri yönetmek için nvm (Node Version Manager - Nodejs Sürüm Yöneticisi) gibi güzel bir çözüm var. İşimizi kolaylaştıran ve bizi birçok  dertten kurtaran güzel bir araç.

## Nasıl kurulur

	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
	
MacOS için yukarıdaki kodu terminale eklemek yeterli. Diğer işletim sistemler için [nvm github sayfasında kurulum kısmına](https://github.com/creationix/nvm/blob/master/README.md) bakınız. Sonra terminali kapatıp açınca nvm kullanıma hazır.

Peki ihtiyacımız olan sürümü nasıl kuracağız. Kurabileceğimiz sürüm listesini 

```bash
nvm ls-remote
```

komutunu terminale yazarak görebiliriz. Sonra buradan istediğimiz sürümü

```bash
nvm install 8.9.3
```

Yazmanız yeterli. Hemen nodejs sürümü yükleniyor ve kullanıma hazır hale geliyor.

Peki yüklü sürümler arasında nasıl geçiş yapıyoruz.

```bash
nvm use 6.9.4
```

Hop geçtik. Süper değil mi?

Yüklü nodejs sürümleri görmek için 

```bash
nvm ls
         v4.4.2
->       v8.9.3
         system
default -> 8.9.3 (-> v8.9.3)
node -> stable (-> v8.9.3) (default)
stable -> 8.9 (-> v8.9.3) (default)
iojs -> N/A (default)
lts/* -> lts/carbon (-> v8.9.3)
lts/argon -> v4.8.7 (-> N/A)
lts/boron -> v6.12.2 (-> N/A)
lts/carbon -> v8.9.3
```

Peki her projeler arası geçişte böyle kod mu yazacağız? Onun içinde çözüm var.

Her proje klasörüne hangi nodejs sürümünü kullandığınıza dair bir nvm konfigürasyon dosyası eklemeniz yeterli.

```bash
/ .nvmrc (dosya adi)
6.94
```

Terminali kapatıp açın artık bu projede `nvm use` ile her geçişti nodejs sürümünü yazmanıza gerek yok.

## Sonuç

Daha önce defalarca ismini duymama rağmen nvm ile bir sorunun çözümünü ararken kurma gereği duydum. Parceljs kurarken yaşadığım bir problemi çözmek için, sorunun çözümüne ilaç gibi geldi. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://github.com/creationix/nvm/blob/master/README.md](https://github.com/creationix/nvm/blob/master/README.md)
 - [https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/)
 - [https://davidwalsh.name/nvm](https://davidwalsh.name/nvm)
 - [https://www.youtube.com/watch?v=YWqgwX-FNJM](https://www.youtube.com/watch?v=YWqgwX-FNJM)
 - [https://medium.com/@emreyartas/nvm-node-version-manager-nedir-aa675d88ecc6](https://medium.com/@emreyartas/nvm-node-version-manager-nedir-aa675d88ecc6)