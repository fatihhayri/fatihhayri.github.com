---
layout: post
title: Terminali (iTerm) güzelleştirmek ve iyileştirmek
description: iTerm'e özel yazı tipi ekleme, tema kurma ve otomatik tamamlama özelliği eklemesi anltılmaktadır
lang: tr_TR
Date: 2018-09-19 11:06
Category: Genel
tags: [iterm, Source Code Pro, honukai, autosuggestions]
image:
  feature: honukai-tema.jpg
---

Yeni işe başlayınca tüm ihtiyaçlarını tekrar kurmak gibi bir iş çıkıyor. Tabi yeni şirketin ihtiyaçlarını kurmakta gerekiyor derken bir yenilenme yaşıyor insan. Bu arada şunu fark ettim ki ben iterm'i güzelleştiren ve geliştiren **oh-my-zsh** kurulumunu ve sonra terminali güzelleştirme ve yeteneklerini arttırma konusunda buraya çok birşey yazmamışım. Tabi böyle olunca yaptıklarımı yeniden keşfetmek zorunda kalıyorum. Neyse hemen konuya geçeyim.

En azından Cengizhan kardeş "[Mac için Zsh ve Oh My Zsh kurulumu](https://medium.com/@cengizhanc/mac-i%C3%A7in-zsh-ve-oh-my-zsh-kurulumu-51b70b09945f)" adlı bir makale yazmışta beni işin o kısmından kurtardı. Ben üzerine özel yazı tipi ekleme, tema ve otomatik tamamlama eklentisini kurmayı anlatacağım. 

## Terminalin yazı tipini değiştirmek

[Daha önce bahsetmiştim](https://fatihhayrioglu.com/sublime-textde-dosya-ve-klasorleri-haric-tutma/). Sublime Text ve terminalde Adobe'un geliştirdiği ve ücretsiz olarak yayınladığı özel yazı tipi **Source Code Pro**'yu kullanıyorum. Hemen işe koyulalım.

 1. [https://www.fontsquirrel.com/fonts/source-code-pro](https://www.fontsquirrel.com/fonts/source-code-pro) adresinden yazı tipini indirebilirsiniz. 

 2. Daha sonra terminali (iTerm) açıp **Preferences > Profiles > Text** sekmesini açın.

 3. **Change Font** butonuna tıklayıp bilgisayarınıza indirdiğiniz **Source Code Pro Regular** yazı tipi seçip sonrada yazı boyutunu **16pt** (benim gözler bozuldu siz kendinize göre ayarlayın :) seçip kapatın. 

İlk adım tamam.

## Terminalin temasını değiştirmek

Bir sonraki adım terminalin (iTerm) temasını değiştirmek. Ben Sublime Text'te kullandığım temayı (Monakai) beğendiğim için terminale de yakın bir tema (honukai) yüklemeyi tercih ettim. [https://github.com/oskarkrawczyk/honukai-iterm-zsh](https://github.com/oskarkrawczyk/honukai-iterm-zsh) Dosyaları buradan indirin. 

Sırasıyla

 1. Github'dan indirdiğiniz kalsördeki `honukai.zsh-theme` dosyasını `~/.oh-my-zsh/custom/themes/`kalsörüne atın.

 2. oh-my-zsh'a bu temayı artık kullan demek için.   `~/.zshrc` dosyasını editörde açıp ZSH_THEME ksımını bulup `ZSH_THEME="honukai"`şeklinde değiştirin.

 3. Sekmeyi kapatıp tekrar açın tamam.

**Renkleri değiştirmek için**

 1. iTerm **Preferences > Profiles** sekmesini açın.

 2. Alttaki renkler açılır menüsünden **import** seçip yukarıda indirdiğimiz dosyadaki `honukai.itermcolors`seçin.

Bu kadar. Son görünüm aşağıdaki gibi olmalıdır.

![Honukai Tema Görüntüsü](/images/honukai-tema.jpg)

Ben burada kendi göz zevkime göre bir tema yükledim siz isterseniz internette bulabileceğiniz farklı seçenekleri aynı yolu izleyerek yükleyebilirsiniz.

##	Terminale otomatik tamamlama eklentisi yükleme

Termina ile çok iş yapınca bazı eklentiler çok iş görüyor. Bunlardan bir tanesi [Doğan](https://twitter.com/dodothebird) kardeşin kullandığı **zsh-autosuggestions** eklentisi. Bu eklenti daha önce yazdığınız komutlardan beslenen bir otomatik tamamlama eklentisi. Çok iş görüyor. 

Kurulumu

1- cd ~/.zsh  ile zsh kalsörüne geçip

{% highlight bash %}
git clone https://github.com/zsh-users/zsh-autosuggestions.git
{% endhighlight %}

adresinden dosyaları kopyalayalım. 

2-  Sonra terminale

{% highlight bash %}
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
{% endhighlight %}
yazıp aktifleştirelim.

Sonra istediğinizi yazın. 

[https://asciinema.org/a/37390](https://asciinema.org/a/37390) Adresindeki video daha güzel gösteriyor nasıl kullanıldığını.

Şimdilik bu kadar. Tema yüklerken normal indir / kopyala / yapıştır yöntemini kullandık. Otomatik tamamlama da ise **git clone** ile indirme yöntemi kullandık. Farklı seçenekler her zaman elimiz güçlendirir.

Kalın sağlıcakla.

## Kaynaklar

 - [https://asciinema.org/a/37390](https://asciinema.org/a/37390)
 - [https://github.com/zsh-users/zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
 - [https://medium.com/@cengizhanc/mac-i%C3%A7in-zsh-ve-oh-my-zsh-kurulumu-51b70b09945f](https://medium.com/@cengizhanc/mac-i%C3%A7in-zsh-ve-oh-my-zsh-kurulumu-51b70b09945f)
 - [https://github.com/oskarkrawczyk/honukai-iterm-zsh](https://github.com/oskarkrawczyk/honukai-iterm-zsh)