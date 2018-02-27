---
layout: post
title: Sublime Text'de dosya ve klasörleri hariç tutma
Date: 2018-02-26 15:43
Category: Sublime Text
tags: [sublime-text, exclude, hariç-tutma]
image:
  feature: sublime-text-editor.png
---

Editörlerde proje geliştiriken bazı klasör ve dosyaları arama sonuçlarında, hızlı erişim menüsünde ve tanımlamaya git (Go to defination..) penceresinde görmek istemeyiz. Bu dosyalara örnek olarak harici kütüphane kodları, küçültülmüş kaynak dosyaları, yayına çıkma süreçleri için gereken yapılandırma dosyaları verilebilir. Bu gibi durumlar için birkaç çözüm önerisi var. Uygun olan çözümü kullanabilirsiniz.

![Akıllı arama](/images/akilli-arama-penceresi.gif)

Dosyaları hariç tutmanın editörün hızına da etkisi var. Daha az dosyayı tarayan editör daha hızlı çalışacaktır. 

## Sublime Text Yapılandırma dosyasıyla

Üst menüden **Sublime Text > Preferences > Settings** tıklayınca gelen ikili pencerede soldakiler bağlangıç olan değerleri gösterir. Sağdaki pencere ise bizim ayarlarımızı içerir. JSON tipi bir yapılandırma dosyası olan bu dosyaya çıkarmak istediğimiz dosya, klasör ve belirlediğimiz uzantılı dosyaları ekleyerek amacımız ulaşabiliriz.

Bu dosya Sublime Text ile geliştireceğimiz tüm projeler için geçerlidir. 

{% highlight bash %}
{
	"binary_file_patterns":
	[
		"*.tbz2",
		"*.gzip",
		"*.zip",
		"*.doc"
	],
	"file_exclude_patterns":
	[
		"*.exe",
		"*.o",
		"*.pdb",
		"*.pyc",
		".DS_Store",
		"*.min.js"
	],
	"folder_exclude_patterns":
	[
		".git",
		".yarnrc",
		".gitignore",
		"logs",
		"*.sublime-workspace",
		".svn",
		"node_modules"
	],
	"color_scheme": "Packages/Predawn/predawn.tmTheme",
	"draw_white_space": "all",
	"font_face": "Source Code Pro",
	"font_options": ["gray_antialias"],
	"font_size": 17,
	"highlight_line": true,
	"highlight_modified_tabs": true,
	"rulers": [100],
	"tab_size": 4,
	"translate_tabs_to_spaces": true,
	"word_separators": "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?",
	"word_wrap": true
}
{% endhighlight %}

 - **binary_file_patterns**: Belirlenen uzantılı dosya tiplerini hariç tutmak için
 - **file_exclude_patterns**: Belirlenen dosyaları hariç tutmak için
 - **folder_exclude_patterns**: Belirlenen klasörleri hariç tutmak için

Bu kullanımın eksileri;

 - Projeye özel dosya ve klasör belirleme imkanı yok.
 - Belirlenen dosya ve klasörlere sol menüden erişim imkanı kalkıyor

## *.sublime-project dosyasıyla

Çok fazla projede çalışıyorsanız Sublime Text'in genel yapılandırma dosyasındaki tanımlar çok işinize yaramayabilir. 

Çözüm olarak il başta proje oluşturmanız gerekiyor. Proje oluşturunca ana dizinde **proje_adi.sublime-project** adında bir dosya otomatik olarak eklenecektir. Bu dosya içinde yukarıdakine benzer bir tanım ile projeye özel dosya ve klasörleri hariç tutabiliriz. 

{% highlight bash %}
{
	"folders":
	[
		{
      "file_exclude_patterns": 
      [
        "sonar-project.properties",
        "README.md",
        "newrelic.js",
        "Dockerfile",
        "pm2_config.json",
        "docker-compose.yml",
        "Jenkinsfile",
        ".eslintignore"
      ],
      "folder_exclude_patterns":
      [
        ".history",
        ".vscode/**",
        "*.sublime-workspace",
        "styleguide",
        ".vscode",
        "node_modules"
      ],
			"path": "."
	   }
	]
}
{% endhighlight %}

Bu kullanımın eksileri;

 - Belirlenen dosya ve klasörlere sol menüden erişim imkanı kalkıyor

## Arama penceresinden

Arama penceresinden istediğimiz dosya ve klasörleri çıkarma imkanımız var. Aşağıdaki görüntüdeki gibi istediğimiz klasör ve dosyayı arama sonucundan hariç tutabiliyoruz. Hariç tutmak istediğimiz dosya ve klasörünü adının başına eksi (-) işareti koymamız yeterli.

![Sublime Text Arama Alanı](/images/sublime-text-arama-alani.gif)

Bu yöntem ile dışarı çıkardığımız dosya ve klasörler sol menüden gizlenmiyor.

Bu kullanımın eksileri;

 - Sublime Text açılıp kapanınca bu kurallar kayboluyor. 
 - Arama penceresinden bu kuralları yönetmek zor.

## ToggleExclude eklentiyle

Yukarıdaki dosyaları hariç tutma yöntemlerinde yaşadığımız sol menüde gözükmeme sorununu dikkat çekiyor. Bu sorunu düzeltmek için ToggleExclude eklentisini kullanmamız gerekiyor. [ToggleExclude](https://packagecontrol.io/packages/ToggleExclude) adresinden yükleyebileriz ya da paket kontrol ekranından 'ToggleExclude' yazarak yükleyebiliriz. 

![ToggleExclude eklentisi](/images/toggle-exclude.gif)

Eklenti kullanımı basit. İki adet yapılandırma dosyanız oluyor. **Default** ve **User**.  Default tüm klasör ve dosyaları içerebilir, User dosyası içinde yukarıdaki JSON yapının aynısını ekleyebiliriz.

{% highlight bash %}
{
	"conditional_file_exclude_patterns":
	[
		"views-njk/partial/build/_criticalCSS-sample.html",
		".gitignore",
		"README.md",
		"nodemon.json",
		"package-lock.json"
	],
	"conditional_folder_exclude_patterns":
	[
		"node_modules",
		"styleguide",
		"test",
		".history/**",
		".vscode/**"
	],
	"enabled": true
}
{% endhighlight %}

**User** dosyasındaki kuralları aktifleştirmek için Komut tablasını açıp (**Cmd+Shift+p** - windows için Ctrl+Shift+p) **ToggleExclude** yazarak seçenekleri görebilirsiniz. Karşınıza 3 senek çıkacaktır. Default, User ve Enable/disable seçenekleri. Bu seçenklerden sonuncusu olan Enebale/Disable ile User'daki kuralları aktifleştirebilirsiniz. Aynı yoldan giderek pasifleştirebilirsiniz.

Çalışma şartlarınız ve ortamınıza göre yukarıdaki yöntemlerden birini veya bir kaçını kullanabilirsiniz. 

Kalın sağlıcakla.

## Kaynaklar

 - [https://packagecontrol.io/packages/ToggleExclude](https://packagecontrol.io/packages/ToggleExclude)
 - [https://www.lugolabs.com/articles/90-exclude-files-and-folders-from-search-in-sublime-text-3](https://www.lugolabs.com/articles/90-exclude-files-and-folders-from-search-in-sublime-text-3)
 - [https://coderwall.com/p/dza-mw/exclude-files-folders-in-sublime-text](https://coderwall.com/p/dza-mw/exclude-files-folders-in-sublime-text)
 - [https://blog.lysender.com/2014/08/sublime-text-exclude-files-or-directories-from-go-to-anything-feature/](https://blog.lysender.com/2014/08/sublime-text-exclude-files-or-directories-from-go-to-anything-feature/)
 - [https://www.geekality.net/2015/03/13/ignoring-files-and-folders-in-sublime-text/](https://www.geekality.net/2015/03/13/ignoring-files-and-folders-in-sublime-text/)