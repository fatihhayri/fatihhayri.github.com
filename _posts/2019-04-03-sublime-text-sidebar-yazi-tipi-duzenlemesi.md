---
layout: post
title: Sublime Text Sidebar Yazı Tipi Düzenlemesi
description: Sublime Text Sidebar yazı tipi düzenlemesi, menü yazı tipi boyutu, mesafleri ve yazı tipini değiştirmeyi anlatıyoruz.
lang: tr_TR
Date: 2019-04-03 08:27
Category: SublimeText
tags: [sublime-text, sidebar, editor]
image:
  feature: sublime-text-gorunum.png
---

Benim gibi yaşlanmaya başlayınca editörlerdeki yazı boyutlarını yükseltmeye başlıyorsunuz. İlk bu işe başaladığımda favori **font-size** boyutum **11px** idi, sonra zamanla 12,14,16 diye büyümeye başladı. 

Sublime Text'te kod yazdığımız kısmın yazı boyutunu büyütmek çok kolayken menü (sidebar) kısmının yazı boyutunu arttırmak biraz daha zor oluyor. 

Ufak bir ara sonucunda stackoverlow'da bir cevabını buldum. 

 - **Sublime Text** -> **Preferences** -> **Browse Packages** yolunu izleyip ilgili klasörü açın. 
 - İkinci adım **User** klasörüne girin.
 - Eğer standart temayı kullanıyorsanız  `Default.sublime-theme`  adında bir dosya oluşturup aşağıdaki kodları ekleyin. Eğer standart harici bir tema kullanıyorsanız ilgili tema (benim için Monokai Pro.sublime-theme)  dosyasını açıp **sidebar_label** diye aratın.

```json
[
    {
        "class": "sidebar_label",
        "color": [0, 0, 0],
        "font.bold": false,
        "font.size": 15
    },
]
```

Yazı boyutunu **15** yazmak benim için iyi oldu. 

Bunu yapınca menü ögeleri bir birine çok yaklaştı onları düzeltmek için de aynı dosya içinde **sidebar_tree** aratıp 

```json
{
  "class": "sidebar_tree",
  "row_padding": [8, 3],
  "indent": 12,
},
```

row_padding değerini **[8, 6]** yapmak benim sorunlarımı çözdü. 

Siz kendi değerlerinizi tanımlayıp istediğiniz yapıya getirebilirsiniz.

Kolay gelsin.

## Kaynaklar

 - [https://stackoverflow.com/questions/18288870/sublime-text-3-how-to-change-the-font-size-of-the-file-sidebar](https://stackoverflow.com/questions/18288870/sublime-text-3-how-to-change-the-font-size-of-the-file-sidebar)
 - [https://stackoverflow.com/questions/29871902/change-line-height-in-sublime-text-default-theme-after-changing-the-font-size](https://stackoverflow.com/questions/29871902/change-line-height-in-sublime-text-default-theme-after-changing-the-font-size)