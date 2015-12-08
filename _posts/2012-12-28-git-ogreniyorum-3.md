---
layout: post
title: Git Öğreniyorum - 3
Date: 2012-12-28 14:28
Category: git
tags: git, sürüm kontrolü
---

##Git  grep

Git&rsquo;in önemli komutu grep hakkında bir kaç bilgi vereceğim.

Ben grep&rsquo;i git&rsquo;in arama komutu olarak biliyordum, ancak unix sistemlerde filtreleme komutu imiş. Geniş kullanım alanı varmış yani.

Genel söz dizimi

{% highlight bash %}
$ git grep [özellikler] arama_kelimesi [dosyalar]
{% endhighlight %}

Örneğin

{% highlight bash %}
$ git grep 'kapsayamama' /home/fatih/ana.css
{% endhighlight %}

Yukarıdaki örnek basit bir kullanıma örnek olarak veridi. /home/fatih/ana.css klasörü içinde kapsayamama kelimesini arayacaktır.

Grep&rsquo;in bazı özellikleri vardır. Bu kısayolları kullanarak aramalarımıza bazı özellikler ekleriz.

{% highlight bash %}
$ git grep -v 'kapsayamama' /home/fatih/ana.css
{% endhighlight %}

İçinde kapsayamama geçmeyen satırları bize verecektir. -v (invert-match)

{% highlight bash %}
$ git grep -c 'kapsayamama' /home/fatih/ana.css
{% endhighlight %}

Aradığımız dosya içinde kapsayamama kelimesinin kaç kere geçtiğini bize gösterir. -c (count)

{% highlight bash %}
$ git grep -i 'kapsayamama' /home/fatih/ana.css
{% endhighlight %}

Aramanın büyük-küçük harfe duyarsızlaştırır. Yani arama sonuçlarında Kapsayamama çıkar. -i (ignore-case)

{% highlight bash %}
$ git grep -r 'kapsayamama' /home/fatih/
{% endhighlight %}

Aramanın belirlene dizin ve alt dizinlerde yapılmasını belirler. -r (recursive)

{% highlight bash %}
$ git grep -n 'kapsayamama' /home/fatih/
{% endhighlight %}

grep ile listelenen sonuçların hangi satırda olduğunu gösterir. -n (line-number)

{% highlight bash %}
$ git grep '\&lt;script' /home/fatih/
{% endhighlight %}

&lsquo;\&rsquo;(ters bölü işareti) karakteri kendisinden sonra gelen karakterin özel bir karakter olduğunu gösterir ve aramaya dahil edilmesini sağlar.

{% highlight bash %}
$ git grep 'kapsayamama' /home/fatih/
{% endhighlight %}

Birden fazla arama bloğunu bir arada kullanmak için | boru(pipe) işaretini kullanırız.

{% highlight bash %}
$ git grep '^script' /home/fatih/
{% endhighlight %}

grep aramalarımızda Düzenli İfadeleri(regex) kullanabiliriz. Yukarıdaki örnekte script ile başlayan sonuçları getir demektir.

{% highlight bash %}
$ git grep 'script$' /home/fatih/
{% endhighlight %}

Yukarıdaki script ile biten satırları listeler. Düzenli ifadeler ile yapabileceklerimizi düşündüğümüzde aramalarımızı ne kadar özelleştirebileceğimizi anlarız.

{% highlight bash %}
$ git grep <script> /home/fatih | more
{% endhighlight %}

grep ile arama yaptığımızda pencere genişliği kadar çıktıları bize gösterir. Tüm satırın gösterilmesi için | more kullanırız.

##Git kodlarını renklendirmek için

git komutları ve işlemlerini renklendirmek mümkündür. Daha okunaklı ekranlar için Git&rsquo;in status, branch ve diff komutlarını renklendirelim.
Renklendirme için konfigürasyon dosyasına ~/.gitconfig aşağıdaki kodları eklemeniz yeterli.

{% highlight bash %}
[color]
  branch = auto
  diff = auto
  status = auto

[color "branch"]
  current = yellow reverse
  local = yellow
  remote = green

[color "diff"]
  meta = yellow bold
  frag = magenta bold
  old = red bold
  new = green bold

[color "status"]
  added = yellow
  changed = green
  untracked = cyan
{% endhighlight %}

##Git dallanmalarını düzenleme

Git'te master'a gitmiş bütün eski dallanmalarımızı(branch) -lokalden- silmek için şöyle bir komut kullanabiliriz:

{% highlight bash %}
git branch --merged master | grep -v 'master$' | xargs git branch -d
{% endhighlight %}

Kaynak: [http://devblog.springest.com/a-script-to-remove-old-git-branches](http://devblog.springest.com/a-script-to-remove-old-git-branches)

[Murat Çorlu](https://twitter.com/muratcorlu)

##Git te dosya adı arama

git'te dosya adıyla arama:

{% highlight bash %}
git ls-files '*kelime*'
{% endhighlight %}

![ls-files](https://lh5.googleusercontent.com/ssBLy7QzvOHj_9wV9Oc4HOG9-ORVPgYwF7StHQ4NSIGgXYvE-yk6LldHOJBwcLLZeULMD27xSrwI1tty3o-HEWjrSETgxDj7GAnWUC7eifiEMT1PyEWs)

##Git ile Suçluyu Bulmak

{% highlight bash %}
git blame
{% endhighlight %}

Bir örnek yapalım:

{% highlight bash %}
git blame source/css-ile-tablolari-sekillendirmek.md
{% endhighlight %}

kodu aşağıdaki sonucu döndürüyor. Her satırı tek tek en son kimin, ne zaman değiştirdiğini gösteriyor.

![blame](https://lh3.googleusercontent.com/ZFPqtLKQ_YrIZyJ6xBhvKcKXJvAU3YZBD38ed_-Qm5lrzEWOCTMICKB1iEF_aMiKCDXtKvzWY8ntKzbwiOokd7-5E8InMvIFoCfXw3aEY8tBCrqnuoq0)

##Git ile Sadece Belirlenen Dosyaları Gönderme

{% highlight bash %}
git add
{% endhighlight %}

ile eklenecek dosya veya dosyalar eklenir ve sonra

{% highlight bash %}
git commit -m "aciklama_yaz"
{% endhighlight %}

ile gönderim yapılır.
Bir örnek yapalım. Örneği 3 dosyada değişiklik yaptık.

![commit](https://lh4.googleusercontent.com/k05WDteZ-iehVkxeInyuuc3XhTbgfCDnQKhfC082AA4DiwkDx0mGrxMPbwiay4FZgkCSc2D12R6wr3MgX1rbuLO1gdOGRprmQSBJB-Ck9nrFVVgGNx_F)

Ancak biz bu değişikliklerden sadece bir tanesini(source/xhtml-ipuclari-1.md) göndermek istiyoruz

![commit add](https://lh4.googleusercontent.com/7EnKTSdWw4-N9UI9ojX_hsSTxDU9QZ0Q-vshOKFSoxURh7xXYdZn-7nZJwLu3KYAx1KuFrBzHmtMTBF9b4O92kZym3GX6i07yxVfKPeDstYlP1mCimYT)

Dosyayı gönderirken

{% highlight bash %}
git commit -m "xhtml makalesindeki duzeltme yapildi"
{% endhighlight %}

kullanımı önemli.

![commit push](https://lh5.googleusercontent.com/No5ftsIV8Cil11QD7XB2sSioo7Om7N2-1nNydeuA8N5j8CInsExY9--ZoHFWmUUj7rKKtEeHcfSwQ-UZvT4ONckc63ylJsarFhFEE5-cCTJUIcCcp2i7)

Sonuçta sadece source/xhtml-ipuclari-1.md dosyası gönderilirken diğer iki dosya  gönderilmedi.<br />

##Otomatik Tamamlama

Git ile terminalde kod yazarken en güzel özelliklerden birisi &lt;tab&gt; tuşu ile otomatik tamamlama yapabilme özelliği. Benim bilgisayarımda hazır geliyor eğer sizde yüklü değilse kaynak bağlantıda yükleme ayrıntıları mevcut.

{% highlight bash %}
$ git co<tab><tab>
commit config
{% endhighlight %}

Yukarıda görüldüğü gibi git co yazdık ve yazacağımız komutu unuttuk veya tamamını yazmak istemedik, ilk &lt;tab&gt; tuşuna bastığımızda eğer başka eşleşen kelime yoksa bize direk sonucu getirir, &lt;tab&gt; tuşuna iki kere basınca bu sefer eşleşen tüm kelimeler altta listelenir. Sonraki &lt;tab&gt; tuşuna basışlarımızda ise altta listelenen kelimeler arasında gezeceğiz.

Yukarıdaki örnekte eğer com&lt;tab&gt; yapsa idik commit tamamlamasını otomatik yapacaktı.

[http://git-scm.com/book/en/Git-Basics-Tips-and-Tricks](http://git-scm.com/book/en/Git-Basics-Tips-and-Tricks)


##Kaynaklar

 - http://bariseser.net/grep-komutu-ve-kullanimi-kendime-not/
 - [http://www.hostingsiteniz.com/grep-komutu-kullanimi-t24.0.html](http://www.hostingsiteniz.com/grep-komutu-kullanimi-t24.0.html)
 - [http://forum.ubuntu-tr.net/index.php?topic=17445.0](http://forum.ubuntu-tr.net/index.php?topic=17445.0)
 - http://oneromer.com/?p=76
 - [http://jblevins.org/log/git-colors](http://jblevins.org/log/git-colors)
 - http://www.thinkfirstblinksecond.com/2012/04/05/git-auto-completion/
