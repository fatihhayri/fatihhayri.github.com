---
layout: post
title: Arama motorları sitelerimize nasıl erişir ve indeksler
Date: 2007-05-18 18:53
categories: [Web Araçları]
---

Posted by Dan Crow, Product Manager, Çeviri: *eDe*

Google’ın ve arama motorlarının nasıl çalıştığı sorusu sıklıkla
karşılaştığım bir sorudur. Birinci anahtar soru: Arama sonuçlarında site
sahiplerinin sitenin hangi bölümlerinin gösterilmesini isteyeceğini
Google nasıl biliyor.? Yayıncılar sitelerinin bazı kısımlarını özel ve
araştırılamaz olarak belirleyebilirler mi? İyi haber şu ki; web
yayıncıları hangi sayfaların arama sonuçlarında görünebileceği üzerine
birçok kontrole sahiptirler.

Bu konunun anahtarı uzun yıllardır endüstri standardı olan *robots.txt*
isimli basit bir dosyadır. Bu, site sahibinin arama motorlarının onun
sitesine nasıl ulaşacağını kontrol etmesini sağlar. *robots.txt* ile
birçok seviyede erişimi -bütün siteye, belirli tipteki klasör ve
sayfalardan tekil sayfalara kadar- kontrol edebilirsiniz.
*robots.txt*’nin etkili kullanımı size sitenizin nasıl aranacağı
konusunda birçok kontrol imkanı sağlar, fakat tam olarak istediğinizi
nasıl başaracağınız her zaman açık değildir. Bu yazı *robots.txt*
dosyasının içeriğinize nasıl erişeceğinin kontrolü konusundaki yazı
dizisinin ilkidir.

#### *robots.txt* ne iş yapar.?

Web büyüktür. Gerçekten büyüktür. Ne kadar çok ve akıl almaz derecede
büyük olduğuna inanmak istemezsiniz. Bence web sitenizi devam ettirmek
için çok çalıştığınızı düşünebilirsiniz, fakat bu bütün webin yanında
devede kulak kalır. (Douglas Adams’tan çok özür dilerim.)
Google gibi arama motorları bütün bu bilgileri okurlar ve onlardan bir
indeks oluştururlar. İndeks, bir arama motorunun kullanıcılardan sorgu
almasına ve webte bu sorguyla eşleşen bütün sayfaları göstermesine izin
verir.

Google’ın bunu yapabilmesi için sürekli webte örümcek gibi gezinen
bilgisayarları vardır. Onlar Google’ın bildiği bütün web sitelerinin
listesini tutarlar ve bu sitelerdeki bütün sayfaları okurlar. Bu
makinelerin hepsi birlikte GoogleBot olarak bilinir. Genellikle
GoogleBot’un sitenize erişmesini ve böylece web sayfalarınızın Google’da
arama yapan insanlar tarafından bulunabilmesini istersiniz.

Ancak sitenizde Google indeksinde olmasını istemediğiniz birkaç sayfanız
olabilir. Mesela, dahili kayıtlarınızın -log- tutulduğu bir klasörünüz
veya paralı haber makaleleriniz olabilir. Sayfaları *robots.txt* isimli
bir text dosyası oluşturarak ve onu kök -root- klasöre koyarak Google
örümceğinin dışında bırakabilirsiniz. *robots.txt* dosyası arama
motorlarının erişmesi gereken sayfaların bir listesini içerirler. Bir
*robots.txt* dosyası oluşturmak basittir ve size arama motorlarının
sitenize nasıl erişecekleri konusunda gelişmiş kontrol imkanı sunar.

#### İnce ayar

*robots.txt* dosyasına -web sitenizin geneli üzerinde az ve öz talimat
belirlemeye izin veren- ek olarak sitenizdeki bağımsız sayfalar üzerinde
ince ayar yapmak için robotların META etiketlerini kullanabilirsiniz.
Her tekil sayfanın nasıl indeksleneceğini kontrol etmek için, basitçe
META etiketlerini HTML sayfalarına ekleyin. META etiketleri ve
*robots.txt*, hızlı ve karmaşık bir erişim güvenliği için size oldukça
kolay şekilde esneklik verirler.

**Basit bir örnek**
Burada *robots.txt* dosyası için basit bir örnek bulunmaktadır.
*User-Agent: Googlebot*
*Disallow: /logs/*
User-Agent satırı, sonraki kısmın yalnızca GoogleBot için bir talimat
seti olduğunu belirler. Belli başlı bütün arama motorları *robots.txt*
dosyasına koyduğunuz talimatları okur ve itaat ederler ve eğer
isterseniz farklı arama motorları için farklı kurallar
belirleyebilirsiniz. Disallow satırı, GoogleBot’a sitenizdeki
<u>logs</u> alt-klasöründeki dosyalara erişmemesini bildirir.
<u>logs</u> klasörüne koyduğunuz sayfaların içerikleri Google arama
sonuçlarında görünmeyecektir.

**Bir dosyaya erişimi önleme**
Sitenizde sadece kayıtlı üyelerinizin erişebilecekleri haber makaleleri
varsa onları Google sonuçlarının dışında bırakmak isteyebilirsiniz. Bunu
yapmak için basitçe bir META etiketini html dosyasına ekleyin, dosya
yaklaşık şöyle başlayacaktır:
*<html>*
*<head>*
*<meta name="googlebot" content="noindex">*
*...*
Bu ilgili dosyanın Google tarafından indekslenmesini durdurur. META
etiketleri özellikle tekil -bağımsız- dosyaları düzenleme izniniz varsa
fakat site geneli için olan *robots.txt* dosyasını düzenleme izniniz
yoksa kullanışlıdırlar. Bunlar size sayfa-sayfa karmaşık erişim-kontrol
güvenliği belirlemenizi sağlarlar.

**Daha fazla öğrenmek için**
*robots.txt* hakkında daha fazlasını [http://www.robotstxt.org][]’dan
ve aşağıdakiler gibi birçok faydalı bilgileri kapsayan [Google's Webmaster yardım merkezi][]’nden öğrenebilirsiniz:

-   [How to create a robots.txt file][]
-   [Descriptions of each user-agent that Google uses][]
-   [How to use pattern matching][]
-   [How often we recrawl your robots.txt file][]

*robots.txt* hakkında kullanışlı bulabileceğiniz aşağıdaki gibi birkaç
yazıyı [webmaster blog][]’umuzda yayınladık:

-   [Using robots.txt files][]
-   [All about Googlebot][]

> Bu çeviri makale için eDe'ye teşekkür ederim. Fatih Hayrioğlu


  [http://www.robotstxt.org]: http://www.robotstxt.org/
  [Google's Webmaster yardım merkezi]: http://www.google.com/support/webmasters/bin/topic.py?topic=8843
  [How to create a robots.txt file]: http://www.google.com/support/webmasters/bin/answer.py?answer=40362
  [Descriptions of each user-agent that Google uses]: http://www.google.com/support/webmasters/bin/answer.py?answer=40364
  [How to use pattern matching]: http://www.google.com/support/webmasters/bin/answer.py?answer=40367
  [How often we recrawl your robots.txt file]: http://www.google.com/support/webmasters/bin/answer.py?answer=40368
  [webmaster blog]: http://googlewebmastercentral.blogspot.com/
  [Using robots.txt files]: http://sitemaps.blogspot.com/2006/02/using-robotstxt-file.html
  [All about Googlebot]: http://googlewebmastercentral.blogspot.com/2006/08/all-about-googlebot.html