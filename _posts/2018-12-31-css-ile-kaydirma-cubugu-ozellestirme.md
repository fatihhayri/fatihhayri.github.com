---
layout: post
title: CSS ile kaydırma çubuğu özelleştirme
description: CSS ile kaydırma çubuğunu özelleştirme. Yeni çıkan Fİrefox sürümüyle birlikte glene kaydırma çubuğu özelliklerini açıklıyoruz
lang: tr_TR
Date: 2018-12-31 10:50
categories: [CSS]
tags: [css, scrollbar-color, scrollbar-width, Firefox]
image:
  feature: kaydirma-cubugu-ozellestirme.png
---

Daha önce bu konuda bir yazı yazmıştım. [CSS İle Özel Kaydırma Çubuğu Yapmak](https://fatihhayrioglu.com/css-ile-ozel-kaydirma-cubugu-yapmak/ "CSS İle Özel Kaydırma Çubuğu Yapmak") O yazıda yazdığım özelliğin Firefox desteği yoktu, Internet Explorer'un kısıtılı desteği vardı. Şimdi Firefox yeni sürümüyle (64) birlikte standartlara da giren yeni kaydırma çubuğu özelliklerini destekliyor.

Çok güzel haber ancak daha yetenekli **::-webkit-scrollbar** özellikleri varken niye daha yeteneksiz kaydırma çubuğu özellikleri standartlaştı anlayabilmiş değilim. Standartlara girmiş olması bu yönde gelişmeler olacağını gösteriyor. "CSS Scrollbars Module Level 1" ismiyle standartlaştı. Yani daha 1. seviye muhtemelen 2. veya 3. seviyede **::-webkit-scrollbar** yeteneklerine kavuşur.

Peki standartta neler var?

İki temel özellik var. **scrollbar-color** ve **scrollbar-width**

## scrollbar-color

Kaydırma çubuğu tutamacı ve yolunun rengini belirlediğimiz özellik.

**Yapısı :** scrollbar-color: [ deger ]\\
**Aldığı Değerler :** auto | dark | light | renk{2}\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** overflow uygulanan tüm elemanlar\\
**Kalıtsallık:** Var
{: .cssozelliktanimi} 

Bu özellik iki renk değeri alıyor birinci renk kaydırma çubuğu tutamacının rengi ikinci renk ise kaydırma çubuğu yolunun rengini tanımlıyor.

Mozilla'nın verdiği örneği inceleyelim. Örnek şu an sadece Firefox 64 sürümünde görünüyor.

<iframe height='300' scrolling='no' title='CSS Scrollbars Module Level 1 Test' src='//codepen.io/fatihhayri/embed/pqdrbd/?height=300&theme-id=13521&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

ilk renk mor (rebeccapurple) kaydırma çubuğu tutamacının rengi ikinci renk yeşil (green) kaydırma çubuğu yolunun rengidir.

Diğer değerleri (dark ve light) denediğimde çalışmadı.

## scrollbar-width

Bu özellik kaydırma çubuğu kalınlığını belirlememizi sağlıyor.

**Yapısı :** scrollbar-width: [ deger ]\\
**Aldığı Değerler :** auto | thin | none | değer\\
**Başlangıç değeri:** auto\\
**Uygulanabilen elementler:** overflow uygulanan tüm elemanlar\\
**Kalıtsallık:** Yok
{: .cssozelliktanimi} 

**auto, thin** ve **none** değerleri çalışırken elle verdiğim değerleri uygulamadı Firefox. Tarayıcının böyle bir hatası olabilir. 

## Sonuç 

Kaydırma çubuğu özelliştirme konusunda **::-webkit-scrollbar** özellikleri ve bu standardı kullanarak neredeyse tüm tarayıcıların desteğini sağlamış olduk. (IE11 ve Edge bittiğine göre)

Bence yetersiz ama güzel bir gelişme. Takipteyiz W3C :)

## Kaynaklar

 - [https://www.w3.org/TR/css-scrollbars-1/](https://www.w3.org/TR/css-scrollbars-1/)
 - [https://caniuse.com/#search=scrollbar-color](https://caniuse.com/#search=scrollbar-color)
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars)
 - [https://medium.com/@beraliv/scrollbar-customisation-31bd28652e9](https://medium.com/@beraliv/scrollbar-customisation-31bd28652e9)
 - [https://www.mozilla.org/en-US/firefox/64.0/releasenotes/](https://www.mozilla.org/en-US/firefox/64.0/releasenotes/)