---
layout: post
title: :user-invalid seçicisi
description: :user-invalid sözde seçicisini açıklayalım
lang: tr_TR
Date: 2023-06-10 10:00
Category: CSS
tags: [form-kontrolu, user-invalid, user-valid]
image:
  feature: user-invalid.png
---

Form doğrulama işi önemli. Form doğrulama işini tarayıcılar ekledikleri özelliklerle eline almaya çalışsa da belli alanlarda yetersiz kaldığı için hala Javascript ile çözümler oluşturuyoruz.

CSS ile hata durumunu yakalayıp ona göre hatayı ve hata mesajını stillendirebildiğimiz `:valid` ve `:invalid` sözde sınflarımız var. 

```css
input:invalid {
  border-color: red;
}
```

Ancak uygulamada şöyle problemimiz oluyordu. `:valid` ve `:invalid` sözde sınflarımız ile stillendiğimiz form elemanları kullanıcı form alanına odaklandığında kontrole başladığı için kullanıcı daha giriş yapmadan yada işlemini tamamlamadan tetiklenip hatalı varmış gibi görüntü vermeye başlıyor. Bu durumu çözmek için arka kapıdan çözümler oluşturuyorduk.

```css
input:not(:focus):invalid {
  border-color: red;
}
```

hatta boş durumu da kapsayan en son şöyle çözümler var.

```css
input:not(:focus):not(:placeholder-shown):invalid {
  border-color: red;
}
```
Bu kadar kod kalabalığı gerektirmeyen bir çözüm olarak tarayıcılar bizlere `:user-invalid` sözde sınıfını sundu. En son Chrome'un da desteklemesi sonrası kullanılabilir hale geldi.

```css
input:user-invalid {
  border-color: red;
}
```

Basit ve kolay bir kod. 

<iframe height="300" style="width: 100%;" scrolling="no" title=":user-invalid" src="https://codepen.io/fatihhayri/embed/ZEwGXXz?default-tab=html%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fatihhayri/pen/ZEwGXXz">
  :user-invalid</a> by Fatih Hayrioğlu (<a href="https://codepen.io/fatihhayri">@fatihhayri</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Form doğrulama konusu bazen çok karmaşık haller alabiliyor. Burada herkesin ortak noktada birleştiği tarayıcıların kendi içinde halletiği bir çözüm bizi rahatlatacaktır. Tarayıcıların bu konuda geliştirmeleri var ancak hala bazı eksikleri var. [Progressively Enhanced Form Validation](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/) konu hakkında detaylı ve güzel bir yazı. 

## Tarayıcı Desteği

Şu anlık %66'lık bir destek var ama Chrome yeni destek açıkladığı için. 1-2 aya yüzdeler artar.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="-" %}

Kalın sağlıcakla.

## Kaynaklar

 - [https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/)
 - [https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/](https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/)
 - [https://pawelgrzybek.com/css-valid-invalid-vs-user-valid-user-invalid-pseudo-classes/](https://pawelgrzybek.com/css-valid-invalid-vs-user-valid-user-invalid-pseudo-classes/)
 - [https://css-tricks.com/almanac/selectors/u/user-invalid/](https://css-tricks.com/almanac/selectors/u/user-invalid/)
 - [https://caniuse.com/mdn-css_selectors_user-invalid](https://caniuse.com/mdn-css_selectors_user-invalid)
 - [https://codepen.io/IbeVanmeenen/pen/MobWmj](https://codepen.io/IbeVanmeenen/pen/MobWmj)