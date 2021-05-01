---
layout: post
title: Sublime Text Linting
Date: 2018-01-18 16:37
categories: [Editör]
tags: [metin-editörü, sublime-text, SublimeLinter, ESLint]
---

Kod yazarken mümkün olduğu kadar hatasız kod üretmek isteriz. Ancak bu işin kaçınılmaz sonucudur hatalar. `Hatasız kod olmaz.` Amaç en az hata çıkaracak kod yazmak ve bunu sağlayacak süreçleri oturtmaktır.

Bu süreçlerin ilk başı kodu yazarken hataları ayıklamaktan geçer. Bunun için yazılan kod parçalarına linter, yapılan işe linting denir. Türkçe tam karşılığını bulamadım. Biz size burada Sublime Text'e linter nasıl kurulur ve çalıştırılır onu göstereceğiz.

## Linter nedir?

Linter, kodu stil veya programlama hataları için kontrol eden küçük programcıklardır. JavaScript, CSS, HTML, Python vb. gibi birçok dil için kullanılabilir. Örnek olarak  ESlint, JSLint, CSSLint, JSHint, Pylint verilebilir.

Biçimlendirme tutarsızlıklarını, kodlama standartlarını, belirli kuralları ve bazı mantıksal hataları düzeltmek için linter kullanılır.

## Sublime Text'e Linter eklenmesi

Sublime Text'e linter eklemek için [SublimeLinter](http://www.sublimelinter.com/) kurmak gerekiyor. SublimeLinter; linter kütüphanelerini Sublime Text üzerinde çalıştırmamızı sağlayan anaçatıdır.

SublimeLinter'ı Sublime Text Paket Kontrol (Package Control) yardımıyla kolayca kurabiliriz. 

 - Komut penceresini açalım (`cmd+shift+p` Mac OS, `ctrl+shift+p` Linux/Windows).
 - `install` yazın gelen listeden listeden `Package Control: Install Package` seçin. Tıkladıktan sonra tepki süresi 2-3 saniyeyi bulabilir. 
 - Kullanılabilir paket listesinden `SublimeLinter` seçin.
 - Birkaç saniye sonra yükleme işlemi başlayacak ve Sublimelinter yüklenecektir.
 - Yüklendi mesajı geldikten sonra Sublime Text'i kapatıp açın.

### Linter eklentileri eklemek

SublimeLinter ekledikten sonra sıra linter eklentilerini eklemeye geldi. SublimeLinter'ın desteklediği linter eklentileri listesine [https://github.com/SublimeLinter](https://github.com/SublimeLinter) bu bağlantıdan erişebilirisiniz. Bunların dışında bir çok eklentiye Sublime Text paket yöneticisinden erişebilirsiniz.

Ben bu makalede size javascript hatalarını yaklamak için kullanılan **ESLint** eklentisinin kurulumunu ve çalışmasını göstereeceğim. Javascript hatalarını yakalamak için birden fazla lint eklenetisi vardır. ESLint, JSLint, ve JSHint. Son zamanlarda ESLint popülerlik kazandı. ESLint'in geliştiricisi [Nicholas C. Zakas](https://www.nczonline.net/). ESLint dokümantasyonu da gayet başarılı.

### Sublime Text'e ESLint eklenmesi

**1.adım :** ESLint'i yüklemek için ilk başta bilgisayarımıza ESLint'i global olarak yüklememiz gerekiyor. 

```bash
npm install -g eslint
```
  
İsterseniz proje bazlı da ekleyebilirsiniz. 

**2.adım :** ESLint yapılandırma dosyasını oluşturmalıyız. Projemizin ana dizininde `.eslintrc` isminde bir dosya oluşturmalıyız. Kendi yapılandırma ayarlarımızı da yapabiliriz veya hazır yapılandırma dosyasını kullanıp üzerine ekleme yapabiliriz. Biz zingat'da airbnb'nin yapılandırma dosyasının üzerine kurduk `.eslintrc` dosyasını.

Başka örnek alınacak kodlar da var ama biz projede airbnb'kini kullandığımız için için onu örnek vereyim. Kullanacağımız yapılandırma dosyasının kodunu indirip

```bash
npm install --save-dev eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.#
```

terminalden yazıp paketi indirelim. Sonra `.eslintrc` dosyası şöyle olur.

```bash
{
  "extends": ["airbnb-base"]
}
```

**3.adım :** Sublime Text pkaet yönetiminden ESLint paketini yükleyelim.

 - Komut penceresini açalım (`cmd+shift+p` Mac OS, `ctrl+shift+p` Linux/Windows).
 - `install` yazın gelen listeden `Package Control: Install Package` seçin. Tıkladıktan sonra tepki süresi 2-3 saniyeyi bulabilir. 
 - `sublimelinter-contrib-eslint` aratalım. Gelen seçeneği yükleyelim.
 - Yüklendi mesajı geldikten sonra Sublime Text'i kapatıp açın.

Artık Sublime Text javascript hatalarını göstermeye başladı.

Örnek olması için javascript dosyasında 1431. satırın sonundaki noktalı virgülü sildim. 1-2 sn sonra Sublime Text hatayı gösterdi.

![Sublime Text linter](https://fatihhayrioglu.com/images/linting-gosterimi.gif)

Sağda satır sayısı yanında kırmızı yuvarlak bir uyarı, kod satırının içinde de kırmızı alt çizgi ile bie hatayı gösteriyor Sublime Text.

![Sublime Text linter statusbar](https://fatihhayrioglu.com/images/sublime-text-status-error.gif)

Alt durum çubuğunda hatanın satır ve kolonu belirtiliyor. Ayrıca hatayı nasıl düzelteceğimizin bilgisini veriyor. (Bende kurulu pretier eklentisi mi yapıyor bunu emin olamadım)

![Sublime Text linter console](https://fatihhayrioglu.com/images/sublime-text-console-hata.gif)

Sublime text konsolunda hatalar ve ikazlar liste halinde gösteriliyor. Uzun satırlı dosyalarda hataların takibi zorlaşıyor. Sublime Text konsolda hepsinin listesini görmek güzel oluyor.

Benzer şekilde CSS ve HTML hatalarımızı da görebiliriz. 

## Sonuç

Kod yazarken hataları görmek ve daha derlenmeden, tarayıcıya gitmeden düzeltmek süper bir kolaylık. 

Bizim gibi mevcut büyük bir projeniz varsa linter eklemek mevcut kodları düzeltmek için sıkıntılı oluyor. Biraz zaman alsa da linter hatalarını düzelttikten sonra sonuç güzel oluyor. Büyük projelerde ESLint yapılandırma dosyası biraz kabarabiliyor. ESLint dosyası hakkında daha detaylı bilgiyi belki [Doğan Öztürk](https://twitter.com/dodothebird) yazar.

Hatasız kod yazmak dileğiyle. Hadi kalın sağlıcakla.

## Kaynaklar

 - http://www.sublimelinter.com/en/latest/about.html
 - [https://eslint.org/](https://eslint.org/)
 - [https://helpx.adobe.com/tr/dreamweaver/using/linting-code.html](https://helpx.adobe.com/tr/dreamweaver/using/linting-code.html)
 - [http://aslanbakan.com/tr/blog/sublime-text-3-incelemesi-ve-en-iyi-33-eklenti/](http://aslanbakan.com/tr/blog/sublime-text-3-incelemesi-ve-en-iyi-33-eklenti/)
 - [https://stackoverflow.com/questions/8503559/what-is-linting](https://stackoverflow.com/questions/8503559/what-is-linting)
 - [https://www.youtube.com/watch?v=lEtWF3_FR2w](https://www.youtube.com/watch?v=lEtWF3_FR2w)
