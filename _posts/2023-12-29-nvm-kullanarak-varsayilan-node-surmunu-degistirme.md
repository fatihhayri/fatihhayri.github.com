---
layout: post
title: NVM kullanarak varsayılan nodejs sürmünü değiştirme
description: NVM kullanarak varsayılan nodejs sürmünü değiştirme
lang: tr_TR
Date: 2023-12-29 10:30
Category: Genel
tags: [nodejs, nvm]
image:
  feature: nvm-node-kapak.png
---

Farklı projelerde çalışırken her projenin node sürüm ihtiyacı farklı ise bunlarla baş etmek için [nvm kullanmaya](https://fatihhayrioglu.com/nvm-nedir-nasil-kullanilir/) başlamıştım. Ancak bazı durumlarda node sürümünü devamlı değiştirmek sorun oluyor. Varsayılan node sürümünü güncellemek gerektiğinde bu konuda NVM bize kolay bir yöntem sunuyor. 

İlk önce mevcut node sürmünü öğrenelim ve sonra sistemde yüklü `nodejs` sürümlerini `nvm` ile kontrol edelim.

![node version](https://fatihhayrioglu.com/images/nvm-node-1.png)

Mevcut durumda `nodejs` sürmümüz `v12.22.12` olarak görünüyor. Yukarıdaki listede istediğiniz sürüm yok ise `nvm` ile hemen istediğiniz sürümü yükleyebilirsiniz. `nvm install 19.5.0` gibi. Şimdi gelelim varsayılan `nodejs` sürümünü ayarlamaya

![nvm default node](https://fatihhayrioglu.com/images/nvm-node-2.png)

Evet varsayılan sürmümüz artık 19.5.0. `node -v` ile kontrol edebiliriz. Bazen hemen olmuyor terminali açıp kapamak gerekiyor.

Kalın sağlıcakla.

## Kaynaklar

 - [NVM Nedir? Nasıl Kullanılır?](https://fatihhayrioglu.com/nvm-nedir-nasil-kullanilir/ "NVM Nedir? Nasıl Kullanılır?")
 - [https://stackoverflow.com/a/47787025/296373](https://stackoverflow.com/a/47787025/296373)
 - [https://tiloid.com/p/setting-the-default-node-version-using-nvm](https://tiloid.com/p/setting-the-default-node-version-using-nvm)

