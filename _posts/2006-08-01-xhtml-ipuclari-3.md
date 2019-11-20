---
layout: post
title: X(HTML) İpuçları - 3
Date: 2006-08-01 23:28
Category: XHTML
---

Bir form ekledik ancak bu formu <input type="submit" .../\> elementi
ile değil de, resimden linkle formu göndermek için:

```html
<a href="#" onclick="document.formun_adi.submit(); ">resim</a>
```

Aynı şekilde silme işlemi için:

```html
<a href="#" onclick="document.formun_adi.reset(); ">resim</a>
```

kullanılabilir.

