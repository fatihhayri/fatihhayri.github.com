---
layout: post
title: VMware Kurarken &quot;Setup failed to write data to the registry&quot; hatası aldım
Date: 2009-09-01 16:18
Category: Haberler
tags: hata, sanal-makina, VMware
---

VMware güzel bir program. Bilgisayarıma kurarken bi yerde takılıyor ve
kuramıyorda ve kendini kaldırıyordu ve sonrada aşağıdaki hatayı veriyor.

"**Setup failed to write data to the registry**"
**C:UsersAdministratorAppDataLocalTemp** Bu yol sizin
bilgisayarınıza göre değişebilir. **vminst.log** dokümanında aşağıdaki
bilgiler vardı. 

{% highlight bash %}
VMInst: 01/19/08 19:41:29 Setting up
registry VMInst: 01/19/08 19:41:29 Writing entries to
HKEY_LOCAL_MACHINESOFTWAREVMware, Inc.VMware Workstation VMInst:
01/19/08 19:41:29 Getting Property CustomActionData = VMware
Player;C:Program FilesVMwareVMware Player VMInst: 01/19/08
19:41:29 Failed to create key SOFTWAREVMware, Inc.VMware
Workstation: 5 VMInst: 01/19/08 19:41:29 Cannot add installation path to
registry. VMInst: 01/19/08 19:41:29 Attaching to window with title
"VMware Player" VMInst: 01/19/08 19:41:34 End Logging
{% endhighlight %}

## Çözüm

Sorunun çözümü ise Çalıştırı açıp(**ctrl + R** ) **regedit** Yazıyoruz
ve **HKEY_LOCAL_MACHINESOFTWARE** de "VMware, Inc." ve daha sonrada
bunun altında "VMware Workstation" diye alanlar oluşturup. Kurulumu
yapalım. 

Kaynak: [http://communities.vmware.com/message/843711](http://communities.vmware.com/message/843711)
