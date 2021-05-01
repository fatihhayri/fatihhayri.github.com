---
layout: post
title: Sabit Konumlandırma (Postion:fixed)
Date: 2007-12-11 22:41
categories: [CSS]
tags: [absolute, CSS, fixed, postion, sabit, sayfa-dibine-yapışık]
---

**Ocak 2016'da güncellendi.**

Bu konuya bir çalışmam dolayısıyla **position:fixed** özelliğini
kullanma gereksinimi duyduğum için girdim, sonra araştırma sonuçları bir
makale konusu olabileceğini düşünerek bu makaleyi yazdım. Sizlere bu süreci ve **postion:fixed**
hakkında genel bir bilgi sunacağım.

Bu konuya daha önce [CSS ile konumlandırma(positioning)][] kısmında
kısaca değinmiştik.

" Sabit konumlandırma (position:fixed) Mutlak Konumlandırmanın (position:absolute) bir alt kategorisidir. Sabit konumlandırılmış elementin sayfadaki görünümü çok farklıdır. Bunu özellikle web sayfasında bir elementin konumunu sabitlemek için kullanabiliriz. Sabit konumlandırma ile yerleştirilmiş element belirtilen yerde asılı kalacaktır. Web tarayıcısının kaydırma çubuğu aşağı yukarı kaydırılması ile Sabit Konumlandırma ile yerleştirilmiş elementin yeri değişmeyecektir ve sabit kalacaktır."

Sabit konumlandırmayı sayfanın belli bir alanını sabitleyip diğer
alanları bu kısmın yanından, altından kaydırmak için kullanırız genelde.

Mutlak konumlandırma (position: absolute) ile benzer özelliklere sahiptir; tanımlanan elementi normal akışın dışına çıkarır. Göreceli konumlandırılmış ana elemente bağlıdır. 

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style type="text/css">
.ustKisim {
  position: fixed;
  background: gray;
  color: yellow;
  height: 50px;
  width: 150px;
  top: 50px;
  margin-left: -170px;
}

.icerik {
  margin: 50px auto 0 auto;
  width: 400px;
}
</style>
</head>
<body>
<div class="icerik">
  <div class="ustKisim">Sabit alan</div>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam nec erat. Fusce magna massa, nonummy eget, aliquam tempus, imperdiet vel, odio. Sed mauris. Quisque sodales urna vitae lorem. Vestibulum aliquet, odio aliquam convallis lobortis, turpis metus semper ligula, ut vulputate sem justo eu quam. Sed feugiat, lectus sit amet porttitor auctor, nulla odio volutpat nisl, sit amet egestas augue diam at urna. Sed justo arcu, luctus eget, porta in, auctor sit amet, massa. Integer interdum. Nunc condimentum scelerisque enim. Pellentesque orci. Maecenas at neque. Sed non diam ac turpis pretium dictum. Phasellus ligula felis, aliquet nec, tristique non, posuere a, magna. Duis eu quam quis tortor vehicula sodales. Donec et mi eget augue bibendum interdum. Proin dapibus odio.</p>
</div>
</body>
</html>
```

<iframe height='323' scrolling='no' title='position: fixed' src='//codepen.io/fatihhayri/embed/qqEMJa/?height=323&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

## Kaynaklar

-   http://home.tampabay.rr.com/bmerkey/examples/fake-position-fixed.html
-   tagsoup.com/cookbook/css/fixed/
-   [http://annevankesteren.nl/test/examples/ie/position-fixed.html][]
-   [http://annevankesteren.nl/2005/01/position-fixed-in-ie][]
-   [http://annevankesteren.nl/2004/07/fixed-positioning][]
-   [http://www.howtocreate.co.uk/fixedPosition.html][]
-   [http://www.cssplay.co.uk/layouts/fixed.html][]
-   [http://www.cssplay.co.uk/layouts/body2.html][]
-   [http://www.cssplay.co.uk/layouts/fixit.html][]
-   [http://www.gunlaug.no/contents/wd_additions_15.html][]
-   [http://www.gunesintamicinde.com/ie-6-ve-position-fixed-problemi/][]

  [CSS ile konumlandırma(positioning)]: http://fatihhayrioglu.com/?p=151
    "konumlandırma makalesi"
  [tıklayınız.]: /dokumanlar/sabit_konum_ornek1.html
  [min-width ve min-height sorununu]: http://fatihhayrioglu.com/?p=182
  [Sabit Konumlandırma]: /images/sabit_konum_ust.gif
  [1]: /dokumanlar/sab_konum_ust.html
  [2]: /dokumanlar/sab_konum_alt.html
  [garip modda]: http://fatihhayrioglu.com/?p=164
  [http://annevankesteren.nl/test/examples/ie/position-fixed.html]: http://annevankesteren.nl/test/examples/ie/position-fixed.html
  [http://annevankesteren.nl/2005/01/position-fixed-in-ie]: http://annevankesteren.nl/2005/01/position-fixed-in-ie
  [http://annevankesteren.nl/2004/07/fixed-positioning]: http://annevankesteren.nl/2004/07/fixed-positioning
  [http://www.howtocreate.co.uk/fixedPosition.html]: http://www.howtocreate.co.uk/fixedPosition.html
  [http://www.cssplay.co.uk/layouts/fixed.html]: http://www.cssplay.co.uk/layouts/fixed.html
  [http://www.cssplay.co.uk/layouts/body2.html]: http://www.cssplay.co.uk/layouts/body2.html
  [http://www.cssplay.co.uk/layouts/fixit.html]: http://www.cssplay.co.uk/layouts/fixit.html
  [http://www.gunlaug.no/contents/wd_additions_15.html]: http://www.gunlaug.no/contents/wd_additions_15.html
  [http://www.gunesintamicinde.com/ie-6-ve-position-fixed-problemi/]: http://www.gunesintamicinde.com/ie-6-ve-position-fixed-problemi/
