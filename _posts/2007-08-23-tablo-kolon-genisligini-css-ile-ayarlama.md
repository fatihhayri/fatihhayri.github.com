---
layout: post
title: Tablo kolon genişliğini css ile ayarlama
Date: 2007-08-23 09:40
Category: CSS, XHTML
tags: [CSS, gmail, tablo, tablo-hücre-genişliği, Tablolar, XHTML]
---

Tablolarda bazen içeriğe göre tablonun genişlemesini istemeyiz veya
içeriği aşağı kaymasını engellemek isteriz. İşte çözüm hemde Gmail'den.

Google bize web hakkında örnekleri ile de yardım ediyor. Gmail'de tablo
genişliğini sabitlemenin daha doğrusu metinin tablo genişliğine göre
overflow:hiden uygulamasını gösteren güzel bir yöntem

{% highlight css %}
.grid { 
    table-layout: fixed; 
} 

.grid * td {
    empty-cells: show; 
    overflow: hidden; 
    width: 100%; 
}
{% endhighlight %}

![Gmail Tablo genişliği][]

Güzel bir ayrıntıyı yakalamışlar. table-layout: fixed; tanımı işin püf
noktası.

Kayanak:
http://blog.opencomponentry.com/2007/08/22/gmail-table-column-sizing-css-fun


  [Gmail Tablo genişliği]: http://blog.opencomponentry.com/images/uploads/2007/08/gmail-column-size.png