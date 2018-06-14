---
layout: post
title: MacOs veya Linux üzerinde Internet Explorer testi yapmak
Date: 2016-02-11 10:00
Category: genel
tags: virtualbox sanal-makine sistem-imajı internet-explorer
---


Her ne kadar son zamanlarda etkisini kaybetse de Internet Explorer testi hayatımızın bir gerçeği. Benim gibi MacOs kullananlar için veya Linux kullananlar için bu testleri yapmak bir eziyet halini alıyor. Ben uzun süredi Virtualbox üzerinde kurulu Windows'lar ile bu sorunu halletmekteyim. Bugün tekrar kurarken bunu yazmalıyım dedi. 

Sırası ile yaptığım adımları anlatayım. 

İlk olarak [VirtualBox](https://www.virtualbox.org/wiki/Downloads)'ı kuruyoruz.  Ben kendi makinem için **VirtualBox 5.0.14 for OS X hosts  amd64** olanı indirdim. Yaklaşık 90,5 Mb.

  > VirtualBox, Linux (veya MacOS) üzerinde yaygın olarak kullanılan sanallaştırma araçlarından birisidir. Böylece Windows ortamında çalışması gereken programları Linux (veya MacOS) altında kolaylıkla çalıştırabilirsiniz.

Kaynak [http://wiki.ubuntu-tr.net/index.php?title=VirtualBox](http://wiki.ubuntu-tr.net/index.php?title=VirtualBox)

Hazır bir paket olan kurulum paketini next - next - finish :) sırası ile kurdum. 

Sıra geldi istediğim işletim sistemini kurmaya. Bu konuda Microsoft bize çok güzel bir imkan sağlıyor. [https://dev.windows.com/en-us/microsoft-edge/tools/vms/](https://dev.windows.com/en-us/microsoft-edge/tools/vms/) adresi üzerinden istediğimiz Windows - Internet Explorer sürümünün imajını indirme imkanı sağlıyor.

İndirebileceğiniz Window ve Internet Explorer sürümleri. Bugün ( 11 Şubat 2016 ) itibari ile aşağıdaki gibidir.

 - IE6 on XP
 - IE7 on Vista
 - IE8 on XP
 - IE8 on Win7
 - IE9 on Win7
 - IE10 on Win7
 - IE10 on Win8
 - IE11 on Win81
 - **IE11 on Win7**
 - MSEdge on Win10


![enter image description here](https://fatihhayrioglu.com/images/microsft-imaj.png){:height="290px" width="550px"}

Ben Windows 7 üzerinde Internet Explorer 11 seçtim. Sonrada ( Select Platform ) kısmından VirtualBox'ı seçtim. 

![enter image description here](https://fatihhayrioglu.com/images/microsoft-imaj-2.png){:height="219px" width="500px"}

Sağ taraftan Download.zip'a tıklayıp windows imajını indirdim. Dosya boyutu **3,81 Gb**. Uygun zamanda indirmekte yarar var.

Bu dosyayı dokümanlarda uygun bir yere taşıyıp [Rar Extrator Free](https://itunes.apple.com/tr/app/rar-extractor-free/id646295438?mt=12) ile bu dosyayı açtım. **IE11 - Win7.ova** adlı bir dosyamız oluyor. Bu dosyaya çift tıklayarak Window imajını VirtualBox'a ekliyoruz. Yine next - next - finish sırası ile kurulumu yapıyoruz. Bazı ayarlar yapılabilir ben herhangi bir şeye dokunmadan kurulu yaptım, pardon küçük bir ayar yaptım. Sanal makinenin kullanacağı RAM'i başlangıç değeri olan 512Mb'dan 1024Mb'a çektim.

Sonuç aşağıdaki gibi.

![enter image description here](https://fatihhayrioglu.com/images/virtualbox-ie11.png){:height="442px" width="550px"}

Daha sonra Windows üzerinde ağ ayarlarını yaparak kendi bilgisayarınıza ağ üzerinden ulaşabilirsiniz. Ben daha önce bu konuda sorun yaşarken bu sefer sorun yaşamadım.

![enter image description here](https://fatihhayrioglu.com/images/virtualbox-ie11-acik.png){:height="436px" width="550px"}

Direk bilgisayarımın ip'sini yazarak İnternet Explorer testlerime başladım.

![enter image description here](https://fatihhayrioglu.com/images/ie11-testi.png){:height="436px" width="550px"}

Kalın sağlıcakla.

## Kaynaklar

 - [http://blog.reybango.com/2013/02/04/making-internet-explorer-testing-easier-with-new-ie-vms/](http://blog.reybango.com/2013/02/04/making-internet-explorer-testing-easier-with-new-ie-vms/)
 - [https://davidwalsh.name/free-ie-vms](https://davidwalsh.name/free-ie-vms)