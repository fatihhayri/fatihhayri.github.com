---
layout: post
title: Sublime Text'ten Visual Studio Code'a geçiş
description: Sublime Text'ten Visual Studio Code'a geçiş 1 haftalık deneyimimi paylaştım
lang: tr_TR
Date: 2020-02-05 09:52
Category: Genel
tags: [sublime-text, visual-studio-code, editör]
image:
  feature: sublime-to-vscode.jpg
---

Çok sık olmasa da ara sıra kullandığım editörden daha iyi bir editör arayışım olur. Uzun senelerdir Sublime Text kullanıyorum. Hızı ve bazı özellikleri beni etkilediği için Sublime Text ile devam ediyorum. Ancak belli aralıklarla diğer editör ve IDE'leri deniyorum. 

Daha önceki denemelerimde yaşadığım sıkıntılar nedeniyle vazgeçtiğim Visual Studio Code editörüne geçişimi bu sefer

<blockquote class="twitter-tweet"><p lang="tr" dir="ltr">Yeni güncelleştirme ile çoğu hata fixlenmiş. JavaScript intellisense artık çalışıyor.<br><br>İncelemek isteyenler için : <a href="https://t.co/UxKQ3rEKsT">https://t.co/UxKQ3rEKsT</a> <a href="https://t.co/y1WQm855wd">pic.twitter.com/y1WQm855wd</a></p>&mdash; Yavuz Selim (@yvz_kahraman) <a href="https://twitter.com/yvz_kahraman/status/1217278570281783296?ref_src=twsrc%5Etfw">January 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Bu twitteki Javascript otomatik tamamlamadaki sorunların yeni sürümde düzeldiği haberiyle tekrar denemeye karar verdim.

## 1. gün

- Visual Studio Code'u [indirdim](https://code.visualstudio.com/).
- İlk açtığımda bana Sublime Text kısayolarını Visual Studio Code'a taşıyıp taşımayacağımı sordu. Sağ alttaki bildirimde Evet deyince Eklentiyi kurdu. Akıllıca.
 - **Monakai Pro** temasını kurdum. Sublime Text'ten göz aşinalığım var.
 - Terminal yazı tipinin **Source Code Pro**, yazı boyutunu (15px) yükselttim. Ayarlardan
	 - "terminal.integrated.fontFamily": "Source Code Pro",
     - "terminal.integrated.fontSize": 15,
     - "terminal.integrated.lineHeight":1,
 - Terminal'e tıklayınca kopyala özelliği ekledim.
	 - `terminal.integrated.copyOnSelection`
 - Bu satıra son commit kim atmışı gösteren **GitLens** eklentisini kurdum.
 - Arama alanını alt panale taşıdım. 
	 - `"search.location": "panel"`.
 - `console.log` sinppet kısayolu yerine `log` yazıp otomatik tamamlamayla eklemeye alışıyorum.
 - [Erdal](https://twitter.com/erdalsatik)'ın eklentilerini yükledim. 
	 - [Airbnb react snippets](https://marketplace.visualstudio.com/items?itemName=cobeia.airbnb-react-snippets)
	 - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
	 - [Better Align](https://marketplace.visualstudio.com/items?itemName=wwm.better-align)
	 - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
	 - Bracket Pair Colorizer
	 - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
	 - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
	 - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
	 - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
	 - [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
	 - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
	 - [Numbered Bookmarks](https://github.com/alefragnani/vscode-numbered-bookmarks)
	 - [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)
	 - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
	 - [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
	 - [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
	 - [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
 - Terminal açma kapama kısayolunu ⇧⌘⌥T ile değiştirdim. Terminali Visual Studio Code içinden kullanmak güzel ama kod yazarken çok yer kaplıyor.
 - Kodu belli kısmını gizleyen eklenti yüklendi
	 - [region folding for VS Code](https://marketplace.visualstudio.com/items?itemName=maptz.regionfolder)

Terminaldeki ilk izlenimlerin gayet güzel. Daha önce istediğim özellikleri bu sefer kolayca ekleyebildim. Böylelikle iTerm kullanımıma son verebilirim.

## 2. gün

- İkinci günün başında bir sorun ile karşılaştım. Otomatik tamamlama çok yavaş çalışıyordu.  Kodu belli kısmını gizleyen eklentiyi kaldırdım `region folding for VS Code` düzeldi.
- Sublime Text'in araması çok hızlı diyordum. Bugün fark ettim ki Visual Studio Code çok daha hızlı.
- Sublime'da alıştığım girintili yapıştırma kısayolu sorun çıkarıyor her seferinde. Çünkü Visual Studio Code normal yapıştırmaya da kendi otomatik girintiliyor kodu. (Uzun içeriklerde bazen sorun çıkarıyor)

## 3. gün

Daha önce vazgeçmeme sebep olan 
	- Yavaş arama sonuçları çözülmüş
	- Terminal'de istediğim özellikler eklenmiş (tıkla kopyala, renk değiştirme, otomatik tamamlama)
	- Açılıştaki gecikme giderilmiş.

 - Terminalden istediğim dosyası Visual Studio Code açmak için Command Palette (⇧⌘P) `shell`  ve çıkan sonuçlardan `Shell Command: Install 'code' command in PATH` enter a basmak yeterli. 
Artık terminalde `code dosya_adi.css` yazıp istediğim dosyayı açabiliyorum. [Detaylı bilgi için tıklayınız.](https://code.visualstudio.com/docs/setup/mac)

## 4. Gün

- Javascript otomatik tamamlamada sorun olduğu için projeyi aç/kapa yaptım düzeldi :(
- Terminali tam ekran açmak için cmd+shift+T kısayolu atadım. Terminale de iyice alıştım :)
- İkinci bir projeyi açtım. New Windows (Pencere demesi ilginç, gerçi Windows işte :)
- İki proje arasında geçiş için ctrl + r (kntrl + r) sonra ilgili projeyi seçip enter

## 5. Gün

Yeni bir dosyayı açtığımda anlık açıp başka bir dosyaya geçince onu kapatması sevimli değil. Sublime Text'te de vardı bu bi yerden kapatmıştım. Visual Studio Code'da bulamadım henüz ama can sıkıyor. Buldum. cmd+k+enter ile sabitleniyormuş.

- Bir şey arayıp sonra ilgili sayfada onu sildiğimde arama sonucunun anlık güncellemesi hoş.
- Otomatik tamamlama ile log yazıp **console** tamamlaması yavaş çalışıyordu. Bende çözümü daha gelişmiş bir **consol.log** ekleyici eklenti ile çözdüm. 
	- [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)

İkinci haftaya geçtim ve hala Sublime Text'e geçmediğime göre işler iyi gidiyor demektir. Visual Studio Code hızlı güncellenmesi ve eklentilerinin Sublime Text'e göre daha çok ve hızlı güncelleniyor olması cezbedici. Terminal için iTerm kullanıyorum, Visual Studio Code kullanırken iTerm kullanımımı sıfıra indirdi. Şimdiye kadar eksikliğini hissettiğim tek şey iyi bir javascript ve react otomatik tamamlamasını henüz gerçekleştiremedim. (Airbbnb React Snippet ve Javascript ES6 code snippet yüklü)

Son bir şey daha arama yaptıktan sonra arama ekranı ve sonuçları **Esc** tıklayınca kapatan bir kısayol tanımı bulamadım. Bilen varsa yorum olarak yazarsa sevinirim.

Niye Sublime Text'i bıraktığımı düşündüm, en bariz aklımda kalan güncellemelerin çok seyrek olması. VSCode ile gelen başarılı bir terminalin olması da bir artı.

Visual Studio Code ile devam. Bundan sonra yaşadıklarımı paylaşmaya çalışacağım.

Kalın sağlıcakla.

## Kaynaklar

 - [https://github.com/Microsoft/vscode/issues/21821](https://github.com/Microsoft/vscode/issues/21821)
 - [https://stackoverflow.com/questions/49096501/my-terminal-in-vscode-has-a-tiny-font-after-installing-zsh-and-changing-font-sty](https://stackoverflow.com/questions/49096501/my-terminal-in-vscode-has-a-tiny-font-after-installing-zsh-and-changing-font-sty)
 - [https://code.visualstudio.com/updates/v1_21#_horizontal-search](https://code.visualstudio.com/updates/v1_21#_horizontal-search)
