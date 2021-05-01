---
layout: post
title: Sitemi cloudflare'den azad ettim
description: sitemi cloudflare'den çıkarıp github pages https ekledim.
lang: tr_TR
Date: 2018-09-02 14:06
categories: [Genel]
tags: [cloudflare, godady, github-pages]
image:
  feature: github-pages-htttps-aktif.png
---

fatihhayrioglu.com sitesini [github pages](https://pages.github.com/) üzerinde barındırıyorum. Alan adı godady'de kayıtlı. Bir arkadaşımın önerisiyle sitemi cloudflare'e ekledim. HTTPS, güvenlik ve performans yetenekleri nedeniyle tercih etmiştim. 

<blockquote class="twitter-tweet" data-lang="tr"><p lang="tr" dir="ltr">Tam siteyi github page&#39;den gitlab page geçirmeyi düşünürken bu haber iyi geldi. <a href="https://t.co/nQe1xZMs6W">https://t.co/nQe1xZMs6W</a></p>&mdash; Fatih Hayrioğlu (@fatihhayri) <a href="https://twitter.com/fatihhayri/status/991387772765310990?ref_src=twsrc%5Etfw">1 Mayıs 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Geçenlerde github pages HTTPS desteği vermeye başlayınca cloudflare'i sorgulamaya başladım. HTTPS yoksa performans etkisini çok görmedim, zaten güvenlikle ilgili sıkıntı çıkacak bir site değil. Ben en iyisi bu cloudflare'den kurtulayım dedim.

Benim gibi devamlı alan adı işleri ile uğraşmayan biriyseniz. Neyin ne olduğunu çabuk unutuyorsunuz. Amacım cloudflare'de olan yönlendirmemi bitirip alan adını direk github pages'e eklemek ve HTTPS'i aktifleştirmek.

İlk yaptığım şey [cloudflare.com](https://www.cloudflare.com/)'a gidip sitemi buradan silmek oldu. Duraklatmak değil silmek tüm bağlarınızı koparıyor cloudflare'den.

İkinci adım olarak alan adım yöneticinize gidip DNS Nameservers'larını normal değerine döndürmek. 

![manage domain](/images/godady-yonet.png)

Alan adını yönet(manage) butonuna tıkladıktan sonra gelen sayfada aşağı inerek DNS yönet linkine tıkladım.

![DNS Yönet](/images/godady-dns-yonet.png)

Custom olan seçme kutusundaki değeri default'a çektim. Artık alana adım godady tarafından yönetiliyor.

Aynı sayfayı yenilediğimizde sayada artık DNS yönetimi alanları geliyor.

Burada bir kaç değişiklik yapmamız gerekiyor. 

 - CNAME satırını “www” github pages website sitenizin adresi ile değiştirmeniz gerekiyor  (Benim için **fatihhayri.github.io**)
 - A tipi satırını github pages ip'siyle değiştirmemiz gerekiyor. 185.199.108.153 (HTTPS sonrası değişerek bu ip yi vermeye başladı.)
 - Sonra aşağıdan ekle(add) diyerek 3 kere sırasıyla 185.199.109.153, 185.199.110.153, 185.199.111.153 iplerini girmek yeterli. İlk kaydettiğimizde altta görünüyor ama sonra godady ekran göründüğü gibi üste alıyor bunları :)

![godady ip ekleme](/images/godady-a-type-ekleme.png)
 
Sonuç olarak godady DNS yönetimi ekranınınz aşağıdaki gibi bir görünüme kavuşacak. Yarım saat yazsa da 5 dak sonra güncelledi.
 
 ![godady DNS yönetimi son](/images/godady-dns-sonuc.png)
 
Eğer CNAME dosyanız yoksa root'a ekleyip kendi domainizi içine yazıp github pages'e eklemeniz gerekiyor. Ben bunu daha önce eklediğim için tekrar eklemedim.

Son olarak Github Pages ayarlar sayfasına gidip 

![github ayarlar](/images/github-pages-ayarlar.png)

Aşağıdaki HTPS kutucuğunu aktifleştirerek bu işe son veriyorsunuz.

![github pages https aktifleştirme](/images/github-pages-htttps-aktif.png)

Kalın sağlıcakla.

## Kaynak

 - [https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b](https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b)