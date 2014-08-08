---
layout: post
title: Git Öğreniyorum - 4
Date: 2013-09-26 14:59
Category: Git
tags: git, ipuçları, git-reset, git-stash, gitignore
---

##1- .gitignore kullanımı

.gitignore dosyası git reposundan hariç tutulacak dosyaların listesinin bulunduğu repo ana dizinde bulunan bir ayar dosyasıdır.

Ana dizinde oluşturduğumuz .gitignore dosyasını git okuyup belirtilen kriterleri es geçecektir. Her bir satır bir kuralı tanımlar. diyez(#) ile başlayan satırlar yorum satırıdır.

{% highlight bash %}
# Belirli bir dosyayı es geçmek için
config.php

# Belirli bir dizini es geçmek için
logs/

# Belirli bir uzantılı dosyaları es geçmek için
*.styl

# log dosyalarını es geç ama error.log dosyaları hariç.
*.log
!errors.log
{% endhighlight %}

##2- git stash ile çalışmalarımıza ara vermek

Bazen uzun çalışmalarımızın ortasında acil başka işler giriyor. Bu gibi durumlar için git’in stash gibi bir çözünü görmek güzel.

İşleyiş şöyle ara vermek istediğimiz brach’de iken

{% highlight bash %}
git stash save
{% endhighlight %}

komutunu yazarak işi saklıyoruz

{% highlight bash %}
Saved working directory and index state WIP on FATIH-195: f6e1ee0 Merge branch 'master' into FATIH-195
HEAD is now at f6e1ee0 Merge branch 'master' into FATIH-195
{% endhighlight %}

İşin saklandığını bize bildiren yukarıdaki gibi bir mesaj çıkacak.

Sonra diğer işimizi yapabiliriz. Diğer işimiz bittikten sonra yarım bıraktığımız işe geri dönüp

{% highlight bash %}
git stash pop
{% endhighlight %}

yazınca sakladığımız değişiklikleri gün yüzüne çıkarırız. İşe kaldığımız yerden devam edebiliriz.

##3- Önceki branch’a geç kısayolu

{% highlight bash %}
git co -
{% endhighlight %}

**Not:** Daha önceki ipuçlarda belirttiğim **checkout = co** kısayolunu tanımladığınızı varsayıyorum.

[@muratcorlu][1] teşekkür.

##4- ignore etmeden gizleme

{% highlight bash %}
git update-index --assume-unchanged <dosya_adi>
{% endhighlight %}

[@mpaltun][2] teşekkür.

##5- Son değişiklikleri geri almak

Bazen yaptığımız değişiklikleri geri almak isteriz. Yapacağımız geri alma işlemine göre aşağıdaki 5 seçenekten birini seçmemiz gerekecek. **Bu komutlar yaptığınız işlerin geri dönülmeyecek şekilde silinmesine neden olabilir. Yazdığınız kodları dikkatli kullanın.**

**git reset --hard**
Son gönderiye geri almak. Eğer birleştirme sonucu çakışmalar çıktı ise ve bu çakışmayı geri almak istiyorsanız bu kodu kullanabiliriz.

**git reset --hard ORIG_HEAD** veya **git reset --hard origin/master**
En son birleştirilmiş stabil duruma geri döndürür. Daha yeni birleştirme işleri için kullanışlıdır. Eğer birleştirme işinizde çakışma varsa “**git reset --hard**” kullanınız.

**git reset --soft HEAD^**
Son gönderinizde bazı şeyleri unuttunuz mu? Bu durumdan kurtulmak kolay. Son gönderiyi geri almak istiyorsak ve yapılan değişikliklerinde bir yerlerde saklanmasını istiyorsak bu komutu kullanmalıyız.

**git commit --amend**
Yaptığınız değişiklikleri koruyarak önceki gönderiyi yenilemek istiyorsak bu komutu kullanırız. Ayrıca önceki gönderi mesajını yenilemek içinde kullanılır bu komut.

**git checkout -- &lt;dosya_adi&gt;**
Sadece belirtilen dosyayı geri almak için kullanılır.

##6- Arama sonuçları dosyaya yazdırma

{% highlight bash %}
git grep “arama_metni” > dosya_adi
{% endhighlight %}

[@muratcorlu][3] teşekkür.

##7 - İki bilgisayar arasında dosya kopyalama

Git ile ilgisi yok ama bana lazım olur buraya kaydedeyim. Sanal bir makineye masaüstünden dosya kopyalamak için

{% highlight bash %}
cd Desktop
{% endhighlight %}

ile masaüstüne geçtikten sonra

{% highlight bash %}
scp dosya_adi kullanici@sunucu_ip:
{% endhighlight %}

ile dosyanızı belirtilen sunucunun ana klasörüne atabiliyoruz.

[@muratcorlu][4] teşekkür.

##Kaynaklar

- [http://mustafavelioglu.com/posts/2012/11/08/global-gitignore-kullanimi/][5]
- [http://git-scm.com/docs/gitignore][6]
- [http://vigo.github.com/git-tips/ipucu/2013/02/18/git-stash-anlik-mudahale-ya-da-zulalama/][7]
- [https://gist.github.com/mesuutt/4564848/raw/277478fa242fc5f0a5dddb862d51f79fa4fb9304/git_notlari.md][8]
- [http://marklodato.github.io/visual-git-guide/index-en.html][9]
- [http://git-scm.com/book/en/Git-Basics-Undoing-Things][10]
- [https://www.atlassian.com/git/tutorial/undoing-changes][11]


  [1]: https://twitter.com/muratcorlu
  [2]: http://twitter.com/mpaltun
  [3]: https://twitter.com/muratcorlu
  [4]: https://twitter.com/muratcorlu
  [5]: http://mustafavelioglu.com/posts/2012/11/08/global-gitignore-kullanimi/
  [6]: http://git-scm.com/docs/gitignore
  [7]: http://vigo.github.com/git-tips/ipucu/2013/02/18/git-stash-anlik-mudahale-ya-da-zulalama/
  [8]: https://gist.github.com/mesuutt/4564848/raw/277478fa242fc5f0a5dddb862d51f79fa4fb9304/git_notlari.md
  [9]: http://marklodato.github.io/visual-git-guide/index-en.html
  [10]: http://git-scm.com/book/en/Git-Basics-Undoing-Things
  [11]: https://www.atlassian.com/git/tutorial/undoing-changes
