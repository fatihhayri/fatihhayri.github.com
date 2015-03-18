---
layout: post
title: Mac Os’da Kısa Sürede Lokal Http Sunucu Oluşturma
Date: 2015-03-18 10:41
Category: genel
tags: HTTPServer MacOs python
---

Bazı projeleri geliştirmek için kendi bilgisayarımızda bir HTTP sunucuya ihtiyacımız oluyor. Mac OS'ta bu iş çok basit.

{% highlight bash %}
cd /ilgili/proje/dosyasi
{% endhighlight %}

Kodu ile ilgili projenin olduğu klasöre geçelim.

{% highlight bash %}
python -m SimpleHTTPServer 8080
{% endhighlight %}

Ta ta http://localhost:8080 adresi üzerinden gezebilirsiniz.

Bu kodları unutuyorum. Buraya yazayımda bulması kolay olsun :D

**Kaynak:** [http://www.andyjamesdavies.com/blog/javascript/simple-http-server-on-mac-os-x-in-seconds](http://www.andyjamesdavies.com/blog/javascript/simple-http-server-on-mac-os-x-in-seconds)
