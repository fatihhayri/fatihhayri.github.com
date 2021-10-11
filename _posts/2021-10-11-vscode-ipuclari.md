---
layout: post
title: VS Code ipuçları
description: VS Code ipuçları, kullanım önerileri
lang: tr_TR
Date: 2021-10-11 11:00
Category: Editör
tags: [vscode, ipucu]
image:
  feature: vscode.png
---

Sublime Text'i bırakıp VS Code'a geçeli yaklaşık 1,5 sene oldu. Bu süreçte kullandığım bazı eklentileri iki yazıda paylaşmıştım. Bu yazı da ise sizlere kullanım deneyimlerimi ve bazı faydasını gördüğüm eklentileri paylaşacağım.

Genel olarak VS Code'dan memnunum

Artıları;

 - Hızlı olması
 - Açık kaynak olması ve devamlı güncellenmesi
 - Terminalden beklediğim tüm özelliklerin bütünleşik terminalde olması.
 - Eklentilerinin çok ve kullanışlı olması
 - Git yönetiminin tümleşik ve iyi çalışması. (Sublime'da ayrı bir uygulama kurmak gerekiyordu)
 - **Go to defination** özelliğinin güzel çalışması. (İlk denediğimde çok kötüydü)
 - Aramanın soldan aşağı alma seçeneğinin gelmesi
 - Sublime Text kısayollarını taşıyabilmem

Eksi yanı;

 - Otomatik kod tamamlama konusunda hala yolunun olması. **tabnine** eklentisi bu açığı kapatıyor ama paralı ve pahalı. 

Şimdiye kadar yazdığım VS Code paylaşımlarım:

 - [Sublime Text'ten Visual Studio Code'a geçiş](https://fatihhayrioglu.com/sublime-text-ten-visual-studio-code-a-gecis/ "Sublime Text'ten Visual Studio Code'a geçiş")
 - [VS Code HTML End Tag Labels eklentisi](https://fatihhayrioglu.com/vs-code-html-end-tag-labels-eklentisi/ "VS Code HTML End Tag Labels eklentisi")
 - [VS Code ile yazım denetimi](https://fatihhayrioglu.com/vs-code-ile-yazim-denetimi/ "VS Code ile yazım denetimi")

## Aktif kullanımda daha geniş alan kullanmak 

VS Code'a geçtikten sonra terminal'i de VS Code içinde kullandığımdan dolayı kod yazarken kod alanım küçük gelmeye başladı. 

İlk olarak kod yazarken alt terminal panelini kapalı tutuyorum. 

![VS Code ekranı](https://fatihhayrioglu.com/images/vscode-kod-ekrani.png)

İşi biraz daha ileri götürüp sol menüyü de kapatarak (Mac: Cmd+b | Windows / Linux: Ctrl+b) tümekranı kod yazmak alanı olarak kullanmak güzel oluyor.

## Dosyayı kaydettiğimizde kod düzeltmelerini Prettier otomatik yapsın

Projenizde Prettier ile kod düzeltme işi yapıyorsanız sizin için güzel ve basit bir ipucu vereceğim şimdi. Tek tek Prettier düzeltmeleri yapmak yerine dosyayı kaydettiğiniz de editörün sizin için bunu otomatik yapmasını sağlayacak ayar:

Ayarlar kısmında `editor.codeActionsOnSave` araması yapın eğer daha önce yoksa ekleyin ve aşağıdaki gibi değiştirin. 

```javascript
"editor.codeActionsOnSave": {
  "source.fixAll": true,
}
```

Süper.

## Çoklu imleç seçimi

Çoklu imleç seçimleri editörlerde en çok sevdiğim özelliklerden birisidir. Herkesin bildiği bir metin seçip Cmd + D tuşlarına bastıkça dokümanımız içindeki tüm aynı metinleri birlikte seçme özelliğinin iki yeni özeliğinden bahsedeceğim. 

**Tümünü seç**
Bulunduğumuz dokümanda seçtiğimiz metnin hepsini nasıl seçeriz. Metni seçip  Command Palette (⇧⌘P) açıp "Select All Occurrences of Find Match"  yazmanız yeterli. Kısayol olarak 

Windows + Linux: ctrl+shift+L
Mac: cmd+shift+L

yazıyor ama ben de Kntrl + Cmd + G olarak görünüyor.

**Geriye doğru seç**
Peki ileri doğru seçebiliyoruz da geriye doğru nasıl seçeriz. Preferences - Keyboard Shurtcuts tıklayıp açılan yerde arama kısmına `addSelectionToPreviousFindMatch` yazın gelen yerde kısayol olarak seçtiğiniz tuşları belirleyin. Ben Cmd + Shift + D yapmak istedim ama dolu diye Alt + J yaptım. Bir metin seçip her Alt + J'ye bastığım da önceki eşlesen metni buluyor.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I use ⌘+D a lot to select next match of a word or variable but I sometimes find myself wanting to select previous matches. Just added a shortcut for editor.action.addSelectionToPreviousFindMatch 👌 <a href="https://t.co/lfLtnaGzez">pic.twitter.com/lfLtnaGzez</a></p>&mdash; Wes Bos (@wesbos) <a href="https://twitter.com/wesbos/status/1105867956024684548?ref_src=twsrc%5Etfw">March 13, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## Parantez renklendirme

Normalde bunun için bir eklenti kullanıyordum. Ancak geçenlerde  VS Code ekibi bu eklentinin  yaptığı işi kendilerinin direk editörün içinde yaptıklarında 10.000 kez daha hızlı çalıştığını yazdılar. Yapmamız gereken sadece Ayarlarda `editor.bracketPairColorization.enabled` değerini bulup `true` yapmak.

Kaynak: [https://code.visualstudio.com/blogs/2021/09/29/bracket-pair-colorization](https://code.visualstudio.com/blogs/2021/09/29/bracket-pair-colorization)

## Arama ipuçları
Aramada fuzzy arama tipini iptal etmek için çifrt tırnak içine almalıyız diyor.

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">Today&#39;s <a href="https://twitter.com/code?ref_src=twsrc%5Etfw">@code</a> tip: disabling fuzzing matching in quick open<br><br>Use quotes in quick open (ctrl p / cmd p) to disable fuzzy matching on file names<br><br>Useful for short queries or filtering down the list of results<a href="https://twitter.com/hashtag/code2020?src=hash&amp;ref_src=twsrc%5Etfw">#code2020</a> <a href="https://t.co/Wyh31jlPKA">pic.twitter.com/Wyh31jlPKA</a></p>&mdash; Matt Bierner (@mattbierner) <a href="https://twitter.com/mattbierner/status/1443976501888630784?ref_src=twsrc%5Etfw">October 1, 2021</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Console'u daha kolay ve işlevsel kullanmak için

`console.log` javascript'te en çok kullandığımız koddur herhalde. Bu kodu daha işlevsel ve kolay hale getiren bir eklenti. **Turbo Console Log**

![Turbo Console Log](https://fatihhayrioglu.com/images/insert_log_message.gif)

Kaynak: [https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)

## import ettiğimiz dosyaların boyutu

Optimizasyon dünyasında yaşıyoruz. Kullandığımız kütüphanen ve dosyanın boyutunu bilmek bizim için önemli. Tam da bu işi gören bir eklenti var. **Import Cost**

Eklentiyi kurduğumuzda import ettiğimiz dosyaların boyutlarını bize gösteriyor. Bu eklentiyi ilk kurduğumda çalışmamıştı. İkinci denediğimde çalıştı.

Kaynak: [https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

## Ortak kod yazmak

Trendyol Front-end code camp'ın katılımcılarla beraber kod yazmak için ararken bulduğumuz bir eklenti. **Live Share**

Sisteme login olan kulanıcalar anlık bir oturum açıp diğer kullanıcılarla paylaşıp birlikte kod yazmasına olanak sağlıyor. Birçok güzel özellikleri olan bu eklenti bayağı başarılı.

![Live Share](https://fatihhayrioglu.com/images/vscode-liveshare.png)

Kaynak: [https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

## Git geçmişine hızlı erişim

**Git File History** eklentisi ile dosyanın daha önceki değikliklerini hızlıca görme imkanı sağlıyor. 

Command Palette (⇧⌘P) açıp "Git File History"  yazmanız yeterli. 

![enter image description here](https://fatihhayrioglu.com/images/git-file-history.gif)

Eklenti linki: https://marketplace.visualstudio.com/items?itemName=pomber.git-file-history

## Postman yerine VSCode 

Ben de henüz denemedim ama bi ara deneyesim var.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AbCTlemwZ1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Kaynaklar

 - [https://stackoverflow.com/a/65226466/296373](https://stackoverflow.com/a/65226466/296373)

