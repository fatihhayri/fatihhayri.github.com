---
layout: post
title: Windows Vista .net Framework güncelleme sorunu ve çözümü
Date: 2009-06-17 10:53
categories: [Haberler]
tags: [.net-framework, hata-kodu, windows-vista]
---

Windows vista sp 1 kullanıyorum ve yaklaşık 2-3 hafta önce bir
güncelleme kurmaya çalıştı ama hata verdi.

**Error code:80070645**

2-3 haftadır yükleyemeyince bende internette araştırma yaptım. Bir çözüm
buldum buraya yazmayı düşündüm.

Çözmek için bir iki işlem yapmak gerekiyor.

İlk olarak yüklü .net framework kaldırmak için
[http://blogs.msdn.com/astebner/archive/2006/05/30/611355.aspx][]
buradaki .NET Framework cleanup tool aracını yükleyip eski .net
framework sürüm veya sürümlerini kaldırmanız gerekiyor. Dosyayı direk
[http://cid-27e6a35d1a492af7.skydrive.live.com/self.aspx/Blog_Tools/dotnetfx_cleanup_tool.zip][]
buradan indirebilirsiniz.

Kurup eski sürümleri kaldır dedikten sonra bilgisayarınızı yeniden
başlatın.

Daha sonra .net Framework'ün son sürümünü indirip yükleyin

microsoft.com/downloads/details.aspx?displaylang=tr&FamilyID=ab99342f-5d1a-413d-8319-81da479ab0d7

yukarıdaki bağlantıdan indirebilirsiniz.

Son olarak Windows Update penceresini açıp son güncellemeleri yükleyin
işlem tamamdır.

Bir güncelleme için bizi bu kadar uğraştıran Microsoft'a ne demeli
bilmiyorum. Çıkmadı ki adam akıllı bir işletim sistemi ona geçelim. Ben
Apple'dan ümitliyim.

## Kaynaklar

-   [http://www.google.com/search?q=Windows+Update+80070645+vista+sp1&hl=en][]
-   [http://blogs.msdn.com/astebner/archive/2006/05/30/611355.aspx][]
-   http://social.answers.microsoft.com/Forums/en-US/vistawu/thread/a3a127a3-2dc5-42b9-8cd7-87e750a5a442

  [http://blogs.msdn.com/astebner/archive/2006/05/30/611355.aspx]: http://blogs.msdn.com/astebner/archive/2006/05/30/611355.aspx
    "http://blogs.msdn.com/astebner/archive/2006/05/30/611355.aspx"
  [http://cid-27e6a35d1a492af7.skydrive.live.com/self.aspx/Blog_Tools/dotnetfx_cleanup_tool.zip]: http://cid-27e6a35d1a492af7.skydrive.live.com/self.aspx/Blog_Tools/dotnetfx_cleanup_tool.zip
    "http://cid-27e6a35d1a492af7.skydrive.live.com/self.aspx/Blog_Tools/dotnetfx_cleanup_tool.zip"
  [http://www.google.com/search?q=Windows+Update+80070645+vista+sp1&hl=en]: http://www.google.com/search?q=Windows+Update+80070645+vista+sp1&hl=en
    "http://www.google.com/search?q=Windows+Update+80070645+vista+sp1&hl=en"