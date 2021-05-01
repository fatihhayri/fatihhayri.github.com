---
layout: post
title: Git Öğreniyorum -2
Slug: git-ogreniyorum-2
Date: 2011-09-07 21:40
categories: [Git]
tags: [git, macos, sürüm kontrol sistemi, terminal]
---

Daha önce [Sürüm Kontrol Sistemi Git][] adlı bir makale yazmıştım,
öğrenme sürecim devam ediyor. Git kullanırken komut satırını
kullanıyoruz. MacOs’da Terminal’e denk geliyor. Bu nedenle genel
Terminal komutlarınıda bilmekte yarar var. Benim gibi mac terminaline
yabancı biri iseniz(aslında linux komut satırı ile benzer kodlar)
aşağıdaki basit komutları bilmenizde yarar var.

![][100]

Terminal giriş görünümü yukarıdaki gibidir. (Renklere takılmayın bu
benim seçimim)

## ls (list files)

Çalıştığımız klasörün içeriğini göstermek için kullanılır. Windows’taki
dir ile aynı anlamdadır.

Sonuç aşağıdaki gibi olacaktır

```bash
ls
aFolder    another.txt    bilgilendirme.txt   deneme.html
```

## cd (Change Directory)

Bu komut ile dosyalar arası geçiş için kullanırız. Mesela image
klasörüne geçmek için

```bash
cd images
```

Tek seviyede değil birden fazla seviyede geçişte yapabiliriz.

```bash
cd images/icons/ust
```

Bir alt klasöre inmek için

```bash
cd ..
```

Kök dizinine(root) inmek için ise

```bash
cd
```

yazmak yeterlidir. Ufak bir ipucu klasör isimlerinin uzun olması
durumunda akılda tutmak zor oluyor. Klasör veya dosya isminin başında
bir kaç karakter yazdıktan sonra tab tuşuna basarak gerisini
tamamlayabilirsiniz.

## mkdir (Make Directory)

Yeni klasör oluşturmak için kullanıyoruz. Mac ve Windows’ta kullanımı
aynıdır.

```bash
mkdir yeniKlasor
```

## rm (remove)

Dosya ve klasörleri silmek için kullanılır. Silme işlemlerinde her zaman
dikkatli olmak lazım.

```bash
rm deneme.html
rm images_klasoru
```

## cp (copy) ve mv (move)

Çok basit bir kullanımı vardır. İlk parametre kopyalanacak dosyayı
ikinci parametre ise hedefi gösterir.

```bash
cp deneme.html ~/dosya/deneme.html
```

Eğer taşımak istiyorsanız, aynı şekilde kullanabiliriz.

```bash
mv deneme.html /dosya/deneme.html
```

mv komutu dosya ismini değiştirmek içinde kullanılabilir.

```bash
mv deneme.html /dosya/test.html
```

deneme.html dosyası ismi test.html olarak değiştirilip taşınmıştır.

## clear

Terminal ekranını temizlemek için kullanılır.

## Dosya Açmak

Komut satırlarından harici programlarda da açabiliyoruz veya kendi
içinde açabiliyoruz.

Mesela MacOs için ilgili klasörde iken

```bash
nano deneme.html
```

komutu deneme.html dosyamızı nano editöründe açmamızı sağlayacaktır.

## exit

Eğer uzak dosya yönetimi ile çalışıyorsanız. Kurduğunuz bağlantıyı
sonlandırır.  exit komutu ile Terminalide kapatmak mümkün. Terminal -
Preferences.. - Settings - Shell oradanda “Close the Window”
işaretleyerek exit komutu ile hem bağlantıyı hemde pencereyi
kapatabiliriz.

Benim ihtiyaç duyduğum komutlar bunlar tüm liste için
[http://ss64.com/osx/][] sitesineden yardım alabilirsiniz.

Git Kullanırken Öğrendiğim İpuçları
-----------------------------------

Yukarıda genel komutları anlattım, aşağıda ise kullandıkça gördüğüm
komutları ve ipuçlarını paylaşacağım.

## İki dosya arasındaki farkı görmek

Bir branchdeki veya bir dosya üzerindeki değişiklikleri görmek için
branchde iken

```bash
$git log
```

yazarız bu komut bize

```bash
commit f491239170cb1463c7c3cd970862d6de636ba787 Author: Matt McCutchen &lt;matt@mattmccutchen.net&gt; Date:   Thu Aug 14 13:37:41 2008 -0400 git format-patch documentation: clarify what --cover-letter does commit 7950659dc9ef7f2b50b18010622299c508bfdfc3 Author: Eric Raible &lt;raible@gmail.com&gt; Date:   Thu Aug 14 10:12:54 2008 -0700 bash completion: 'git apply' should use 'fix' not 'strip' Bring completion up to date with the man page.
```

gibi bir sonuç döndürür. O dosya veya o branch üzerinde yapılan tüm
değişiklikler hakkında bilgileri içeren bir listedir bu. Bu listede
commit … ile başlayan satırda verilen numara yapılan ve gönderilen her
iş için farklıdır biz bu sözdizimini kullanarak iki farklı gönderi
arasındaki farkı bulabiliriz.

```bash
$git diff f491239170cb1463c7c3cd970862d6de636ba787 7950659dc9ef7f2b50b18010622299c508bfdfc3  Html/index.html
```

İki farklı branchdeki HTML/index.html dosyasındaki farklılıkları
gösterir yukarıdaki kod. Farkları renkli görmek için --color
parametresini kullanabiliriz.

```bash
$git diff --color  d76192b2c7a61d2aea62c7aec21e14cda72f9e32 fe0dba7b841e86b095d2aefbd6bd755a0d9d1e90  Html/index.html
```

Eklenenleri yeşil, çıkarılanları kırmızı renkte gösterecektir. Ayrımı
görmek için renkler güzel oluyor.

## Dallanma (Brach) Silmek

git branch -d: Yanlışlıkla açtığımız branchlerı silmek için

```bash
$git branch -d branch_ismi
```

## Kısayol kullanmak

Git kullanırken aynı kodları tekrar tekrar çok kullanıyoruz. Bu
komutları kısaltarak daha hızlı kod yazabilme imkanı sağlıyor bize komut
sistemi.

git config dosyasına kısayolllarımızı ekleyebiliyoruz. git cofig ile ilgili ayrıntılı bilgiyi [http://tybarts.wordpress.com/2011/05/07/git-global-config-dosyasini-ayarlamak/][] bağlantısından edinebilirsiniz.

Global congif dosyasına eklemek için

```bash
$git config --global alias.ci commit
```

**ci** kısaltma **commit** normali. Eğer projeye özgü kısayollar
oluşturmak için

```bash
$git config alias.ci commit
```

**--global** parametresini kaldırmamız yeterli olacaktır. git config
dosyasını görmek için

```bash
$git config --edit
```

yazmamız yeterli burada eklediğimiz kısayolları görebiliriz. Benim
listem aşağıdaki gibi.

[alias]
st = status
br = branch
co = checkout
ci = commit

Siz bu listeyi kendinize göre düzenleyebilirsiniz.

## Git için kaynaklar

[http://sixrevisions.com/resources/git-tutorials-beginners/][] bu
bağlantıda Git kaynakları listelenmiş. Git’in güzel yanlarında birisi
öğrenmek için kaynağın bol olması.

## Başka Branch’den dosya almak

```bash
$git checkout branch_adi dosya_adi
```

Benzer bir şekilde branchde yaptığımız değişikliği geri almak için
master’dan dosyayı alabiliriz.

```bash
$git checkout master dosya_adi
```

## Değişen dosya isimleri

Çalıştığımız branchde değişiklik yaptığımız dosyaları görmek için

```bash
$git diff master --name-only
```

kodunu kullanıyoruz.

Bana üşenmeyip bunları ve aklımda kalmayan bir çok bilgiyi öğreten Onur
Yerlikaya'ya şükranlarımı sunarım. Gitmeyeydin Git daha kolay olacaadı.
:D

Kalın sağlıcakla

## Kaynaklar

-   [http://tybarts.wordpress.com/2011/05/07/git-global-config-dosyasini-ayarlamak/][]
-   [https://git.wiki.kernel.org/index.php/Aliases][]
-   [http://sixrevisions.com/resources/git-tutorials-beginners/][]
-   [http://ss64.com/osx/][]

  [Sürüm Kontrol Sistemi Git]: http://fatihhayrioglu.com/surum-kontrol-sistemi-git/
  [100]: /images/terminal-300x187.png "terminal"
  [http://ss64.com/osx/]: http://ss64.com/osx/
  [http://tybarts.wordpress.com/2011/05/07/git-global-config-dosyasini-ayarlamak/]: http://tybarts.wordpress.com/2011/05/07/git-global-config-dosyasini-ayarlamak/
  [http://sixrevisions.com/resources/git-tutorials-beginners/]: http://sixrevisions.com/resources/git-tutorials-beginners/
  [https://git.wiki.kernel.org/index.php/Aliases]: https://git.wiki.kernel.org/index.php/Aliases
