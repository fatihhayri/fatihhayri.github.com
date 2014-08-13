---
layout: post
title: Sürüm Kontrol Sistemi Git
Date: 2011-05-21 12:15
Category: Haberler
tags: git, linux, mac, sürüm kontrol sistemi
---

![][100]

Daha önceleri pek kullanmadığım sürüm kontrol sistemleri
zamanla ihtiyaç haline geliyor. Sahibinden.com’da çalışmaya başladığımda
bazı yenilikler ile tanıştım, bunlardan biri de Git ile tanışmam oldu,
sağ olsun arkadaşların yardımı ile yavaş yavaş öğrenmeye başladım.

Ben burada kendi öğrenme sürecimde öğrenebildiklerimi sizlerle paylaşmak
istedim. Bu konuda daha başlangıç seviyesindeyim. Anlatacaklarım daha
çok başlangıç seviyesinde olacak.

Bir projede tek başına çalışıyor iken çalışma süreci boyunca belli
aralıklarla çalıştığım dosyaların bir yedeğini alıp arşiv klasörümde
saklıyorum. Farklı sürümlerin yedeklerini alıp çalışmak bilgisayarda iş
yapan herkesin kazanması gereken bir özelliktir, yoksa çok acı
örneklerle öğrenmek zorunda kalırız.

Tek başımıza çalışırken yedekleme ile aşabildiğimiz sürüm kontrolünü
birden fazla kişinin çalıştığı projelerde ise bir programcık vasıtası
ile yapmak şart halini aldı. Aslında tek kişi çalışılan durumlar içinde
sürüm kontrol araçları kullanılabilir.

Birden fazla kişinin çalıştığı durumlarda aynı dosya üzerinde çalışma
imkanı sağlar sürüm kontrol araçları. Projenin bir takım çalışması ile
ve veri kaybına neden olmadan çalışmasını sağlayan araçlardır sürüm
kontrol sistemleri.

![][1]

Sürüm kontrol sistemi olarak sadece Git yoktur, aşağıda diğer sistemleri
sıralanmıştır.

-   Subversion
-   Mercurial
-   Perforce
-   Bazaar

Sadece isimleri verip geçeceğim. Farklı sistemleri karşılaştıran birçok
site var. [http://whygitisbetterthanx.com/][] sitesinden Git’in
diğerlerine göre avantajlarını görebilirsiniz.

Git’in en büyük farkı merkezi değil, dağıtık olması. Bu şu anlama
geliyor tek merkezli bir yapı yerine dağıtık bir yapıya sahip bir sistem
kullanılır. Dağıtık sistemlerdeki avantaj sistemi kullanmak için merkezi
bir depoya sahip değildir, kullanıcı internetin olmadığı yerlerde
sistemi kullanma imkanı sağlıyor. İnternete veya sisteme bağlandığımızda
değişiklikler sisteme aktarılır. Bu bize çok büyük esneklik sağlar.

![][2]

Yukarıdaki grafikte çok iyi bir şekilde göstermektedir.

"…...
Merkezi sistemlerde tüm bilgi bir noktada saklanır. İstemciler ağ
üzerinden depo üzerinde yaptıkları değişiklikler gönderirler. Bu
değişiklikler merkezdeki depoya uygulanır ve depo yeni bir hal alır.
Değişikliklerden haberdar olmak için işlemcilerin merkeze uğraması
gerekir. Sürümler arasındaki farkları sorgulamak gibi temel bir takım
işlemler için hep merkezdeki bilgilere danışılması gerekir.

Dağınık sistemlerde ise bütün üstbilgiler (önceki sürümler v.b.) yerel
bilgisayarda saklanır. Bu nedenle bir merkeze ihtiyaç duymadan tüm
işlemleri yapabilmeniz mümkündür.

Çalışmalarınızla ilgili tüm üstbilgilerin bir merkezde saklanması, veri
yedeklemenin önemini arttırır. Halbuki bunun aksine, dağıtık sistemlerde
bir depoyu alan her geliştirici çalışmanın bütün kopyasına sahiptir,
dolayısı ile ne kadar geliştirici varsa, o kadar yedekleme yaparsınız.
Bu nedenle geliştiriciler birbirlerine de bağımlı değillerdir.
…........." (1)

Şirkette Mac kullanılıyor ve git işlemlerini komut sistemi üzerinden
yapıyoruz. Terminal üzerinde komutları yazıyoruz. Git kullanımı
kolaylaştırmak için bazı programlar var, ancak biz genelde komut
satırlarını kullanıyoruz.

## Git Komutları

İlk başta sadece master dallanması vardır.

**git status:** Bulunduğumuz durumu gösteren koddur. Yapılan
değişiklikleri, eklemeler ve silinen dosyaları gösterir.

{% highlight bash %}
$git status
{% endhighlight %}

**git branch:**Oluşturulan dallanmaları(brach) görmek için

{% highlight bash %}
$git branch
{% endhighlight %}

**git-create-branch:** Bu kod sadece bizim şirkete özel bir kod,
(kendime notlar) :D Yeni bir dallanma(branch) oluşturmak için. -x
kısayolu oluşturulan dalanmanın kategorisini belirler. Bizde en çok
kullanılan iki kategori var düzeltme(fix) ve özellik(feature).
Düzeltme(fix) için -x ; Özellik(feature) için -e kısa yollarını
kullanıyoruz.

{% highlight bash %}
$git-create-branch -x dallanma_ismi
{% endhighlight %}

**git pull:**master’dan güncel hali almak için

{% highlight bash %}
$git pull
{% endhighlight %}

**git add:**Depoya bir dosya eklemek için

{% highlight bash %}
$git add dosya_yolu/dosya_adi
{% endhighlight %}

Birden fazla dosya eklemek için arada boşluk bırakarak ekleme
yapılabiliyor.

{% highlight bash %}
$git add dosya_yolu/dosya_adi dosya_yolu/dosya_adi dosya_yolu/dosya_adi
{% endhighlight %}

**git commit:** Değişiklikleri yaptıktan sonra yorum ekliyoruz. -am
kısaltması all ve message baş harflerini ifade eder.

{% highlight bash %}
$git commit -am "yorum_yaz"
{% endhighlight %}

**git push:** Yorumu yazdıktan sonra dosyaları gönderiyoruz

{% highlight bash %}
$git push
{% endhighlight %}

**git checkout:** Dallanma(Branch) değiştirmek için

{% highlight bash %}
$git checkout branch_ismi
{% endhighlight %}

ilk defa geçilen bir branch ise

{% highlight bash %}
$git checkout origin/feature/branch_ismi --track
{% endhighlight %}

**git grep:** Mevcut branch içinde bir kelime veya ifadeleri bulamak
için

{% highlight bash %}
$git grep "aranacak_kelime"
{% endhighlight %}

komutunu kullanıyoruz.

**git merge:** Eğer yaptığımız değişiklik ile aynı anda başkasıda bir
şeyler yaptı ise çakışma(conflict) oluyor, düzeltmek için
birleştirme(merge) işlemini yapıyoruz.

{% highlight bash %}
$git merge master
{% highlight bash %}

veya

{% highlight bash %}
$git merge origin
{% endhighlight %}

yapıp değişiklikleri görebiliyoruz. Bu komutu yazdıktan sonra çakışmanın
olduğu dosyayı açıyoruz.

{% highlight bash %}
# MASTER / ORIGIN

git merge master
git merge origin

# <<<<< HEAD
@MASTER
======================
@REVISION-2
>>>>>>>>>>>>
{% endhighlight %}

Şeklinde bir işaretlerle karşılaşırız. Burada hangi alan doğru ise onu
bırakıp diğer alanı silerek dosyayı kaydediyoruz ve dosyanın son hali o
oluyor.

**git help:** son olarak bir komut hakkında yardım almak için

{% highlight bash %}
$git help komut_adi
{% endhighlight %}

ile komut hakkında bilgi alabiliyoruz.

## Sonuç

Başta söylediğim gibi Git konusunda daha yeniyim, öğrenme sürecim devam
ediyor. Bana öğrenme sürecimde yardımcı olan arkadaşlarımada teşekkür
ediyorum, özellikle [Doruk][], bu konuda bildiğim bir çok şeyi ondan
öğrendim.

## Kaynaklar

-   [http://inchoo.net/tools/basic-git-usage-from-console/][]
-   [http://www.foch.com.tr/versiyon-kontrol-git-svn-cvs.html][]
-   [http://mhazer.blogspot.com/2010/12/versiyon-yonetim-sistemi-olarak-git.html][]
-   [http://www.kodcu.com/2011/04/git-mi-subversion-mi/][]
-   [http://net.tutsplus.com/tutorials/other/the-perfect-workflow-with-git-github-and-ssh/][]
-   [http://net.tutsplus.com/tutorials/other/easy-version-control-with-git/][]
-   [http://tr.wikipedia.org/wiki/S%C3%BCr%C3%BCm_Kontrol_Sistemi][]
-   [http://book.git-scm.com/4_finding_with_git_grep.html][]
-   [http://www.kitware.com/products/html/DistributedVersionControlTheFutureOfHistory.html][]
-   [http://www.ndpsoftware.com/git-cheatsheet.html][]
-   [http://www.kimbs.cn/2010/11/git-essence/][]
-   [http://people.core.gen.tr/~aycan.irican/web/publish/GitSKS.html][]

  [100]: /images/git-logo.png "git-logo"
  [1]: https://lh5.googleusercontent.com/fm9u2bysZrSh8Kl-1TUzVT8bdKzgwrpEU0ztXz0gH-bALti4VlkvArqxqwcKhCC4PiXXoTyDm-cOw4aE46skicF6UWh95eAH8KlTiiJM8VTzDisO2A
  [http://whygitisbetterthanx.com/]: http://whygitisbetterthanx.com/
  [2]: https://lh6.googleusercontent.com/aaVMUy_pCM6En6Q48EF2M-7FrFFS44ADVrqkZQuDAOMQc6GPVx3sX_vYQnFcgYeqKLgGlw-CrREnbWcAvZYqLPb0hXdcYQFSILnNqQxV_XXfkSkXdw
  [Doruk]: http://twitter.com/#!/dorukozalp
  [http://inchoo.net/tools/basic-git-usage-from-console/]: http://inchoo.net/tools/basic-git-usage-from-console/
  [http://www.foch.com.tr/versiyon-kontrol-git-svn-cvs.html]: http://www.foch.com.tr/versiyon-kontrol-git-svn-cvs.html
  [http://mhazer.blogspot.com/2010/12/versiyon-yonetim-sistemi-olarak-git.html]: http://mhazer.blogspot.com/2010/12/versiyon-yonetim-sistemi-olarak-git.html
  [http://www.kodcu.com/2011/04/git-mi-subversion-mi/]: http://www.kodcu.com/2011/04/git-mi-subversion-mi/
  [http://net.tutsplus.com/tutorials/other/the-perfect-workflow-with-git-github-and-ssh/]: http://net.tutsplus.com/tutorials/other/the-perfect-workflow-with-git-github-and-ssh/
  [http://net.tutsplus.com/tutorials/other/easy-version-control-with-git/]: http://net.tutsplus.com/tutorials/other/easy-version-control-with-git/
  [http://tr.wikipedia.org/wiki/S%C3%BCr%C3%BCm_Kontrol_Sistemi]: http://tr.wikipedia.org/wiki/S%C3%BCr%C3%BCm_Kontrol_Sistemi
  [http://book.git-scm.com/4_finding_with_git_grep.html]: http://book.git-scm.com/4_finding_with_git_grep.html
  [http://www.kitware.com/products/html/DistributedVersionControlTheFutureOfHistory.html]: http://www.kitware.com/products/html/DistributedVersionControlTheFutureOfHistory.html
  [http://www.ndpsoftware.com/git-cheatsheet.html]: http://www.ndpsoftware.com/git-cheatsheet.html
  [http://www.kimbs.cn/2010/11/git-essence/]: http://www.kimbs.cn/2010/11/git-essence/
  [http://people.core.gen.tr/~aycan.irican/web/publish/GitSKS.html]: http://people.core.gen.tr/%7Eaycan.irican/web/publish/GitSKS.html
