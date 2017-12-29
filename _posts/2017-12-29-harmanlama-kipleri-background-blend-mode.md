Harmanlama kipleri (blend-mode) grafik işleme araçlarına aşina olanların bildiği bir özelliktir. İki farklı resmi veya yazıyı farklı filtreler ile harmanlayıp güzel tasarım sonuçları çıkaran bir yöntemdir. Bu yöntemi artık CSS ile yapabiliyoruz. CSS'in [filter](/css-filtre-efektleri/)'dan sonra **blend-mode** özelliği ile iyice grafik işlerini bünyesinde topladı. Harmanlama kiplerini iki farklı özellik ile uygulayabiliriz.

 - background-blend-mode
 - mix-blend-mode

## background-blend-mode

**background-blend-mode** özelliği, bir öğeye tanımlanmış ardalan resminin(background-**image**) ardalan rengiyle(background-**color**) nasıl harmanlanacağını tanımlar. Grafik işleme araçlarıyla çalışanların aşina olduğu bir resim harmanlama işlemidir.
Hemen bir örnek yapalım.

<iframe height='413' scrolling='no' title='blend-mode' src='//codepen.io/fatihhayri/embed/Kyxpgm/?height=413&theme-id=13521&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/Kyxpgm/'>blend-mode</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Yukarıdaki örnekte bir katmana atanmış ardalan resim ve ardalan rengi birbiriyle **screen** **blend-mode**'u ile birleştirilmiş ve sonuç alınmıştır. 

**Yapısı :** background-blend-mode: [ deger ]\\
**Aldığı Değerler :** normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity\\
**Başlangıç değeri:** normal\\
**Uygulanabilen elementler:** Tüm elementler\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi}

CSS'de 16 çeşit harmanlama kipi vardır. Tek tek aldığı değerleri tanımlamak yerine yukarıdaki örnek üzerinde her birini deneyimlemek daha anlaşılır olacaktır.

Not: Her bir resimde bu değerler farklı sonuçlar verecektir. 

<iframe height='436' scrolling='no' title='blend-mode' src='//codepen.io/fatihhayri/embed/gXdjdX/?height=436&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/gXdjdX/'>blend-mode</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Çoklu ardalan resmine blend-mode uygulamak

Yukarıdaki uygulamalar ardalan resmi ile ardalan rengi arasında harmanlama yapıyor. Peki iki resmi birbiriyle harmanlamak mümkünmü? [Çoklu ardalan kullanımı](/css3-coklu-ardalanmultiple-background/) sayesinde bu da mümkün. Çoklu ardalan resmi eklediğimiz bir alanda harmanlama yapalım.

<iframe height='289' scrolling='no' title='Çoklu ardalan ile blend-mode' src='//codepen.io/fatihhayri/embed/POdyaZ/?height=289&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/POdyaZ/'>Çoklu ardalan ile blend-mode</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Bu özellik ile birçok farklı sonuçlar almak mümkündür. [https://codepen.io/search/pens?q=blend-mode](https://codepen.io/search/pens?q=blend-mode) örneklerini incelemenizi öneririm.

## mix-blend-mode özelliği ile iki elementin harmanlanması

**background-blend-mode** ile sadece ardalan resmi ile işlem yapabiliyoruz. **mix-blend-mode** özelliği ile ise herhangi bir HTML elementi ile başka bir HTMlL elementini harmanlama yapabiliyoruz. Bu kullanıma örnek olarak resim üzerine konulan yazıları harmanlama örneklerini gösterebiliriz.

Bir örnek yapalım.

Bİr resmimiz olsun ve bu resmin üzerinde absolute ile çıkardığımız bir metnimiz olduğunu düşünelim. Resim ile metni harmanladığımızda sonuç aşağıdaki gibi olur.

<iframe height='275' scrolling='no' title='mix-blend-mode' src='//codepen.io/fatihhayri/embed/aEJyKv/?height=275&theme-id=13521&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/aEJyKv/'>mix-blend-mode</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Bir çok farklı efektler elde edilebilir. [codepen.io](https://codepen.io/) sitesindeki örnekler güzel. İncelemeye değer.

video örneği çok güzel. https://codepen.io/dudleystorey/pen/wavpGe

Kalın sağlıcakla.

## Kaynaklar

 - [https://css-tricks.com/almanac/properties/b/background-blend-mode/](https://css-tricks.com/almanac/properties/b/background-blend-mode/)
 - [https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/)
 - [https://css-tricks.com/basics-css-blend-modes/](https://css-tricks.com/basics-css-blend-modes/)
 - [https://www.webdesignerdepot.com/2014/07/15-css-blend-modes-that-will-supercharge-your-images/](https://www.webdesignerdepot.com/2014/07/15-css-blend-modes-that-will-supercharge-your-images/)
 - [https://getflywheel.com/layout/css-blend-modes/](https://getflywheel.com/layout/css-blend-modes/)
 - [https://tympanus.net/codrops/css_reference/background-blend-mode/](https://tympanus.net/codrops/css_reference/background-blend-mode/)
 - [https://code.tutsplus.com/tutorials/editing-images-in-css-blend-modes--cms-26058](https://code.tutsplus.com/tutorials/editing-images-in-css-blend-modes--cms-26058)
 - [https://developer.mozilla.org/tr/docs/Web/CSS/background-blend-mode](https://developer.mozilla.org/tr/docs/Web/CSS/background-blend-mode)
 - [https://webmaster.kitchen/css-de-goruntu-duzenleme-blend-modes/](https://webmaster.kitchen/css-de-goruntu-duzenleme-blend-modes/)
 - [http://thenewcode.com/1020/HTML5-Video-Effects-with-CSS-Blend-Modes](http://thenewcode.com/1020/HTML5-Video-Effects-with-CSS-Blend-Modes)