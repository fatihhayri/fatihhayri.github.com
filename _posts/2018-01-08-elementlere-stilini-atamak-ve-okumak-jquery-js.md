---
layout: post
title: Elementlere Stilini Atamak ve Okumak  (jquery - js)
Date: 2018-01-08 08:37
categories: [Javascript]
tags: [javascript, jquery, stil]
---

zingat.com'da yaklaşık 4-5 aydır jquery yerine javascript ile yazmaya başladık. Çalışma arkadaşlarımın da yardımıyla jQuery'yi siteden çıkarma hedefimize doğru ilerliyoruz. Bu süreçte gördüklerimi sizlerle paylaşıyorum. Bu makalemde javascript ile elementlere nasıl stil atarız ve atanmış stil bilgisini nasıl okuruz sorularının cevabını bulacağız.

## Hesaplanan değer (Computed values) ve çözümlenmiş değer (resolved values) kavramları

Değerler konusunda CSS'de iki farklı anlayış vardır. 

1- **Hesaplanan değerler:** Bir elemana tanımlanmış değerler ve kalıtsal gelen değerlerin hepsinin olduğu değerlere denir. Örneğin `line-height: 1.3em` veya `font-size: 120%`.

2- **Çözümlenmiş değerler:** Elemana uygulanmış değerlerin son halidir. Yukarıdaki örneklerde `line-height: 1.3em` ve `font-size: 120%` değerleri göreceli değerlerdir. Tarayıcı bu değerleri uygulamadan önce mutlak değerlere çevirerek atar. Örneğin `line-height: 16px` ve `font-size: 18px` olarak çevirir ve uygular.

Standart oluşturucular başlangıçta **getComputedStyle** metodu hesaplanan değerleri almak için oluşturdu ancak sonra çözümlenmiş değerlerin alınmasının daha avantajlı olduğuna karar verip değiştirdi. Bundan dolayıdır ki **getComputedStyle** metodu çözümlenmiş değerleri bize verir.

## Stilleri okumak

Stilleri okumak için **getComputedStyle** metodunu kullanırız.

```javascript
var stiller = window.getComputedStyle(elem);
```

Bu elemana atanmış tüm stilleri aldık.

```javascript
var renk = window.getComputedStyle(elem).color;
```

Bu kod ile de elemana atanmış renk değerini alırız. Atanmış diğer stilleride aynı şekilde alabiliriz.

```javascript
var padding = window.getComputedStyle(elem).padding;
```

Elemanın padding değerini aldık.

## Elemente stil atamak

`elem.style` objesi style özniteliğine karşılık gelen bir nesnedir. 

```javascript
elem.style.color = 'red';
```

kodu

```html
<div id='deneme' style='color:red'></div>
```

şeklinde uygulanacaktır. 

Dikkat etmemiz gereken bir ayrıntı da birden fazla kelimeden oluşan tanımların CSS ile kebap-case şeklinde birleştirilirken, javascript ile birleştirilirken camelCase şeklinde yazarız. Örneğin `background-color` tanımını `elem.style.backgroundColor` şeklinde tanımlarız. 

### Çoklu stil tanımlamak

Birden fazla stil tanımlamak için `cssText` özelliğini kullanırız. 

```javascript
elem.style.cssText = 'background-color: red; color: white';
```

Bu özelliğin şöyle bir dezavantajı var. Mevcut tanımların üzerine yeni stilleri yazar, yeni ekleme yapmaz. Bunu çözmek için bir kaç yöntem var. [Çoklu tanım için yarımcı bir metot yazmak](https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/), ikincisi ise [global bir css dosyasını oluşturup ona tanımlamak.](https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/)

Kalın sağlıcakla.

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
 - [https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/](https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/)
 - [https://www.sitepoint.com/jquery-vs-raw-javascript-2-css3-animation/](https://www.sitepoint.com/jquery-vs-raw-javascript-2-css3-animation/)
 - [https://javascript.info/styles-and-classes](https://javascript.info/styles-and-classes)
 - [http://youmightnotneedjquery.com/](http://youmightnotneedjquery.com/)
 - [https://gomakethings.com/getting-an-elements-css-attributes-with-vanilla-javascript/](https://gomakethings.com/getting-an-elements-css-attributes-with-vanilla-javascript/)
 - [https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/](https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/)