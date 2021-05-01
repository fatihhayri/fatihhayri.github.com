---
layout: post
title: Css de kodumuzu İE6&#039;dan gizleme
Slug: css-de-kodumuzu-ieden-gizleme
Date: 2006-05-04 00:11
categories: [CSS]
tags: [CSS, düzeltme, Firefox, gizle, hack, ie, ie6, important, internet explorer]
---

Bir kodu İE'den gizlemek istiyorsak

```css
p{
  color:red !important; /* bu kısmı ie6 görmeyecek*/
  color:blue;
}
```

sayfa için kullandığımız paragraflar ie6 mavi ff kırmızı görünecektir. !important css ile etkinlik için kullanılan bir etikettir.
!important tanımlı özellik daha önce yapılmış aynı özelliğin üzerine çıkar. CSS ile etkinlik hakkında daha fazla bilgi için [tıklayınız.][]

  [tıklayınız.]: http://fatihhayrioglu.com/cssde-tanimlamalar-ve-etkinliklerispecificity
