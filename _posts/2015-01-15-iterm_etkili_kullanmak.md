---
layout: post
title: iTerm'ü Etkili Kullanmak
Date: 2015-01-15 11:05
Category: genel
tags: iTerm kısayollar
---

Yaklaşık 4 senedir Mac ve aynı zamanda terminal kullanıyorum. Mac'in kendi terminali yerine biraz daha özellikli diye [Mustafa Paltun](https://twitter.com/mpaltun)'un önerisi ile [iTerm](http://iterm2.com/) kullanmaya başladım. 

## iTerm Kurmak

iTerm açık kaynak bir program. Kurulumu http://iterm2.com/ sitesinden indirip yapabilirsiniz. 

## Kısayol kullanımın önemi

Bir programı kullanıyorsanız hız için kısayolların kullanımı önemlidir. Bence kullandığınız programların kısayollarını öğrenmek kod yazan insanın olmazsa olmazı olmalı. iTerm'ün belli başlı kısayollarını sıralayalım.

 - **Cmd(⌘) + ,**  iTerm Özellikler penceresini açar
 - **Cmd(⌘) + T**  Yeni Sekme(Tab) açmak için
 - **Cmd(⌘) + →** ve **Cmd + ←** Sekmeler arasında geçiş için
 - **Cmd(⌘) + D** Ekranı dikeyde ikiye bölerek pencereyi çoklar.
 - **Cmd(⌘) + Shift(⇧) + D** Ekranı yatayda ikiye bölerek pencereyi çoklar.
 - **Cmd(⌘) + Alt(⌥) + →**, **Cmd(⌘) + Alt(⌥) ←**, **Cmd(⌘) + Alt(⌥) ↑** ve **Cmd(⌘) + Alt(⌥) ↓** Pencereler arası geçiş sağa, sola, yukarı ve aşağı
 - **Cmd(⌘) + Shift(⇧) + Enter(↵)** Mevcut pencereyi geçici olarak genişletir. İkinci kez aynı tuşlar eski haline getirir.
 - **Cmd(⌘) + W** Ekranı kapatır
 - **Cmd(⌘) + F** Arama kutusunu açar
 - **Cmd(⌘) + G** Arama sonuçları arasında geçiş
 - **fn + ←** Satır başı (Bu mac'in kısayolu galiba)
 - **fn + →** Satır sonu (Bu mac'in kısayolu galiba)
 - **Cmd(⌘) + -** Metinleri küçült
 - **Cmd(⌘) + kntrl + -** Metinleri büyüt

### Özel kısayol tanımı

iTerm'de kendimize özel kısayollar da ekleyebiliyoruz. 

Özellikler penceresini açalım (**Cmd(⌘) + ,**) **Keys** sekmesinden mevcut kısayollara kendi istediklerimiz ekleyebiliyoruz.

Örnek yapalım. Örneğin tek kelimeyi silmek ve tüm satırı silmek için **Alt(⌥) + Backspace(⌫)** ve **Cmd(⌘)+Backspace(⌫)** tanımlarını yapalım. 

![enter image description here](http://fatihhayrioglu.com/images/iterm/iterm_ozel_kisayol.gif)

 - Alttan artı(+) işaretine basıp yeni bir ekleme yapıyoruz.
 - **Keyboard Shortcut**'a ekleyeceğimiz kısayolunu tuşluyoruz.
 - **Action** kısmından **Send Hex Code** seçiyoruz
 - Alttaki girdi alanına kelime silmek için **0x17**
 - Aynı yolu tekrar uygulayarak satır silmek için **0x15** giriyoruz.

Kısa yol tanımlarımız tamam, artık kullanabiliriz.

### Bulunan kelimenin satırına gitmek

Bu özellikte süper. Bu özelliği kullanmak için önce iTerm'den Sublime Text açmak için [subl](https://www.sublimetext.com/docs/3/osx_command_line.html) ayarını yapmamız gerekiyor.  Detaylı bilgiyi [buradan](http://ashleynolan.co.uk/blog/launching-sublime-from-the-terminal) alabilirsiniz. Bu ayarı yaptıktan sonra; **Profiles > Advanced > Semantic History**

**Semantic History** sekmesinde girdi alanına aşağıdaki kodu yazalım.

{% highlight bash %}
/usr/local/bin/subl \1:\2
{% endhighlight %}

Ayar tamam. Şimdi bu özelliği uygulamak için **git grep -n** ile arama yaptıktan sonra **Cmd(⌘) + click** ile dosyaya tıkladığımızda ilgili satıra gideriz.

![enter image description here](http://fatihhayrioglu.com/images/iterm/iterm_ilgili_satir_sublime.gif)

**Cmd(⌘)** basıp metnin üzerine gelince el işareti çıkıyor, ekran görüntüsünde gözükmemiş.

Özellik süper değiil mi?

### Karakterler arasında gezmek

Örneğin bir satır kod yazdık ve ortada bir yerde yanlışlık yaptık o kelimeye gitmek istiyoruz. Bunu yapmak için genelde o kelimeye kadar silip yeniden yazarız, ancak şimdi yapacağımız tanımlama ile daha basit bir çözüm bulacağız.

 - iTerm Özellikler penceresini açalım(**Cmd(⌘) + ,**) ve **Keys** sekmesine gidelim. 
 - Alttan artı(+) işaretine basıp yeni bir ekleme yapıyoruz.
 - **Keyboard Shortcut**'a ekleyeceğimiz kısayolu tuşluyoruz. **Alt(⌥) + ←** ve  **Alt(⌥) + →**
 - **Action** kısmından **Send Escape Sequence** seçiyoruz
 - **Ecs+** alanına önceki karaktere gitme kısayolu için **b**
 - Aynı yolu izleyip sonraki karaktere geçme kısayolu için **f** giriyoruz.

Sonra **Alt(⌥) + ←** ile önceki kelimeye **Alt(⌥) +→** ile sonraki kelimeye geçebiliyoruz.

{% highlight bash %}
jekyl serve --config _config_dev.yml
{% endhighlight %}

**jekyl** yanlış yazmışım mesela bunu düzeltmek için satır başına(**fn + ←**) gidelim, sonra kelimeler aradına gezmek için kısayollara gidip aşağıdaki gibi bir tanım yapmalaıyız.

![enter image description here](http://fatihhayrioglu.com/images/iterm/karakterler_arasi_gezinme.gif)

### Geçmiş kodların listesi

Önceki yazdığımız kodların listesini görmek için **Cmd(⌘) + Shift(⇧) + H** kısayolunu kullanıyoruz. 

![enter image description here](http://fatihhayrioglu.com/images/iterm/pastehistory.png)

Daha efsane olan. **Cmd(⌘) + Alt(⌥) + B** ile altta çıkan bardan "oynat Uğurcum" yapabiliyoruz.

![enter image description here](http://fatihhayrioglu.com/images/iterm/instantreplay.gif)

### Otomatik tamamlama

Bir kaç karakter girdikten sonra **Cmd(⌘) + Shift(⇧) + ;** basarak daha önce kullandığınız ve girdiğiniz karakterlere uyan öneriler sunuyor. Burada şöyle bir şey var ilgili panelin geçmişinde arama yaptığı için daha faydalı oluyor.

![enter image description here](http://fatihhayrioglu.com/images/iterm/autocomplete.png)

Ayrıca [https://iterm2.com/features.html](https://iterm2.com/features.html) göz atmanızı öneririm.

## Kaynaklar

 - [https://coderwall.com/p/ds2dha/delete-word-and-delete-line-shortcuts-in-iterm2](https://coderwall.com/p/ds2dha/delete-word-and-delete-line-shortcuts-in-iterm2)
 - [http://hiltmon.com/blog/2013/02/13/make-iterm-2-more-mac-like/](http://hiltmon.com/blog/2013/02/13/make-iterm-2-more-mac-like/)
 - [https://coderwall.com/p/h27epq/iterm2-jump-to-location-in-sublime-text-2-3](https://coderwall.com/p/h27epq/iterm2-jump-to-location-in-sublime-text-2-3)
 - [http://iterm2colorschemes.com/](http://iterm2colorschemes.com/)
 - [https://coderwall.com/p/wl0lhq/alt-arrow-keys-produce-c-d](https://coderwall.com/p/wl0lhq/alt-arrow-keys-produce-c-d)
 - [http://bytearrays.com/iterm2-configuration-tricks/](http://bytearrays.com/iterm2-configuration-tricks/)
 - [http://teohm.com/blog/2012/03/22/working-effectively-with-iterm2/](http://teohm.com/blog/2012/03/22/working-effectively-with-iterm2/)