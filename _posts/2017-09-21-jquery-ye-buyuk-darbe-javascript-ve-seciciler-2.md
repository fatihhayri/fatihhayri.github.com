---
layout: post
title:  jQuery'ye büyük darbe Javascript ve seçiciler - 2
Date: 2017-08-21 10:37
categories: [Javascript]
tags: [normal js, closest, siblings, jquery]
image:
  feature: tree-1132527_1280.jpg
---

## DOM ilişkili seçiciler

[İlk yazımda genel seçicilerden](/jquery-ye-buyuk-darbe-javascript-ve-seciciler/) bahsetmiştim bu yazımda ise DOM üzerinden ilişkilendirilen seçicilerden bahsedeceğim. DOM'daki elementler bir ağaç yapısı ile aile bağlarına benzer bir şekilde bir birlerine bağlıdır. Bu ilişkiden yararlanılarak oluşturulan seçicilere DOM ilişkili seçiciler denir.

Örnek bir HTML kodu verelim;

```html
<div>
  <h1>HTML <em>Hiyerarşisi </em></h1>
  <div><strong>Sitemize</strong> hoş geldiniz <strong class="es-gec">Merhaba</strong> biz <em>sizler için</em> <a href=""> 	bazı önemli konular!</a> hazırladık.</div>
</div>
```

Yukarıdaki koddaki HTML elemanlarının arasında bir aile yapısına benzer bir yapı vardır. Örneğin **h1**, **em** elementinin ebeveyni, diğer bir tanım ile **em**; **h1**'in çocuk elementidir.

<iframe height='300' scrolling='no' title='boEypx' src='//codepen.io/fatihhayri/embed/boEypx/?height=300&theme-id=13521&default-tab=js&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fatihhayri/pen/boEypx/'>boEypx</a> by Fatih  (<a href='https://codepen.io/fatihhayri'>@fatihhayri</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Ebevey (parent) seçicisi 

Örneğin **em** elementinin ebeveynini 

**jQuery ile**

```javascript
$('em').parent();
```

**Javascript ile**

```html
document.querySelector('em').parentNode;
```

**h1** sonucu bize verecektir.

### Çocuk (children) seçicisi

Alt eleman olarak da tanımladığımız çocuk seçicileri yaklamak için;

**jQuery ile**

```javascript
$('h1').children();
```

**Javascript ile**

```javascript
document.getElementsByTagName('h1').childNodes;
```

**text** ve **em**'i yakalarız.

```javascript
document.getElementsByTagName('h1').children;
```

ile sadece **em**'i yakalarız.

### Torun (Descendants) seçicisi

Bir elemanın alt eleman kümesindeki belirlenen tanıma uygun elemanları yakalamak için kullanılır. Yine CSS'den aşina olduğumuz bir kullanım.

**jQuery ile**

```javascript
$('div em');
```

**Javascript ile**

```javascript
document.querySelectorAll('div em');
```

Bu seçici bize her iki **em** elemanını verecektir.

### En yakın ebeveyn (closest) seçicisi

jQuery kullanırken en yakın ebeveyni yakalamak için **closest** metodunu kullandığımız oluyor. jQuery'de bunun için bir metot var. Örnek verelim.

**jQuery ile**

```javascript
$('a').closest('div');
```

ile kodumuz içindeki bağlantının en yakın div ebeveyni yakalanmış olur. Javascript'e de yeni gelen bu özellik ile aynı kolaylıkta elemanı yakalayabiliriz.

```javascript
document.getElementsByTagName('a').closest('div');
```

Bu yeni bir özellik olmasına rağmen şu an Türkiye'deki desteği %83 seviyesinde. Desteklmeyen tarayıcılar için [https://github.com/jonathantneal/closest](https://github.com/jonathantneal/closest) kullanılabilir.

{% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="6.2" %}

### Kardeş (siblings) seçicisi

Aynı ebeveyne sahip elemanlara **kardeş seçiciler** denir. Kardeş seçicileri ikiye ayırırız. Bitişik kardeş seçicileri birbiri ardına gelen seçiciler ve genel kardeş seçicileri. jQuery API'sindeki siblings metodu ise bunlardan biraz daha farklıdır. Tanımlanan elemanın seviyesindeki tüm elemanları (kendisi hariç) yakalar. Javascript'te bu durumu direk karşılayan bir metot yoktur. Basit bir fonksiyon ile bu isteği karşılabiliriz. 

CSS'deki kardeş seçici mantığı ile ilk kardeşi yakalayıp sonrakileri seçerek jQuery siblings metodunu karşılayabiliriz.

Bu tip javascript'te olmayan metotları kodumuza kazandırdığımız kodları genel erişilebilir bir yerde tutabiliriz.

Genel bir fonksiyon tanımlayıp siblings dizisini oluşturalım. Belirlediğimiz elemanın ebeveyni ve oradanda bu ebeveynin ilk elemanını yakalarız. Sonra bir döngü içinde *nextSibling* yardımı ile sonraki elemanları yakalayıp bir diziye atarak çözümü oluşturabiliriz. 


```javascript
var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    
    for (; sibling; sibling = sibling.nextSibling) {
      // kod gelecek
    }
};
```

Siblings içinde belirlediğmiz elamanın olmaması lazım. Bunun için bir if kontrolü koymalıyız.

```javascript
var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    
    for (; sibling; sibling = sibling.nextSibling) {
      if (sibling.nodeType !== 1 || sibling === elem) continue;
      siblings.push(sibling);
    }
    return siblings;
};
```

Son olarakta döngü bittiğinde sonuçları geri göndereceğiz. 

**jQuery ile**

```javascript
$('div.icerik .es-gec').siblings();
```

**Javascript ile**

```javascript
let elem = document.querySelector('div.icerik .es-gec');
let siblings = getSiblings(elem);
```

jQuery basitliğinde değil ancak çokta zor olmayan bir yardımcı fonksiyon ile işimizi halletik.

### Elemanları hariç tutmak (not)

Bazı elemanları seçimden hariç tutmak için

**jQuery ile**

```javascript
$('p strong').not('.es-gec');
```

**Javascript ile**

```javascript
document.querySelectorAll('p strong:not(.es-gec)');
```

Bu seçim sonrası sadece ilk strong elemnaı seçilmiş olur.

### Çoklu eleman seçimi

Birden fazla eleman seçmek istediğimizde 

**jQuery ile**

```javascript
$('h1, .es-gec, a');
```

**Javascript ile**

```javascript
document.querySelectorAll('h1, .es-gec, a');
```

yukarıdaki kodlar **h1**, **.es-gec** ve **link** elemanını verecektir.

## Sonuç

Bu iki yazılık javascript seçicileri yazımızda gördük ki jQuery'nin en büyük avanatajlarından birisi olan seçiciler konusunda javascript'te yeterli seviyede. 

jQuery'nin DOM üzerindeki hakimiyetinin çok fazla olması ve bu hakimiyeti oluşturmak için ürettiği metotlar(nextUntil, nextAll, offsetParent, parentsUntil, prevUntil, prevAll) çoğu zaman kırılgan ve anlışlmaz yapıların çıkmasına neden oluyor. Kırılganlığı önlemek ve daha esnek kodlar yazmak için DOM ilişkili seçicilerin kullanımına dikkat etmeliyiz. 

Bazı durumlar için **siblings** ve **closest** örneklerinde gördüğümüz gibi yardımcı fonksiyonlar ile kolay çözümlerde oluşturabiliriz.

Kalın sağlıcakla.

## Kaynaklar

 - [https://blog.garstasio.com/you-dont-need-jquery/selectors/](https://blog.garstasio.com/you-dont-need-jquery/selectors/#children)
 - [http://youmightnotneedjquery.com/](http://youmightnotneedjquery.com/)
 - [https://gomakethings.com/a-native-vanilla-javascript-way-to-get-the-closest-matching-parent-element/](https://gomakethings.com/a-native-vanilla-javascript-way-to-get-the-closest-matching-parent-element/)
 - [https://gomakethings.com/how-to-get-an-elements-siblings-with-vanilla-javascript/](https://gomakethings.com/how-to-get-an-elements-siblings-with-vanilla-javascript/)