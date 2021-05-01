---
layout: post
title: jQuery'den kurtulma seansları. sınıf (class) işlemleri
Date: 2017-08-17 18:37
categories: [Javascript]
tags: [normal js, classList, jquery]
---

jQuery'de en çok kullandığımız özelliklerinden birisi de sınıf tanımlama, silme, varlığını kontrol etme ve toggleClass.

Peki bunların normal javascript'te karşılığı var mı ve bu kadar kolay kullanabiliyor muyuz? Elbette. Sırası ile inceleyelim.

## Sınıf (class) ekleme

Seçtiğimiz elemana bir sınıf tanımlamak istediğimizde

**jQuery ile**

```javascript
  $el.addClass('aktif');
```

**Normal Js ile**

```javascript
  el.classList.add('aktif');
```

çok benzer tanımlar.

## Sınıf (class) silme

Seçtiğimiz elemana ait sınıfı silmek istediğimizde

**jQuery ile**

```javascript
  $el.removeClass('aktif');
```

**Normal Js ile**

```javascript
 el.classList.remove('aktif');
```

yine çok benzer tanımlar.

## Sınıfın varlığını kontrol edelim

Bir çok yerde seçilen eleman atanmış bir sınıfın olup olmadığını kontrol ederiz ve buna göre işlem yaparız.

**jQuery ile**

```javascript
 $el.hasClass('aktif');
```

**Normal Js ile**

```javascript
 el.classList.contains('aktif');
```

benzer kullanım.

## Sınıf geçişi (toggle)

Çok tercih edilen bir diğer sınıf işlemedir. 

**jQuery ile**

```javascript
 $el.toggleClass('aktif');
```

**Normal Js ile**

```javascript
 el.classList.toggle('aktif');
```

çok kullanışlı bu özelliğin normal js olması süper.

## Sonuç 

jQuery'den esinlenerek classList API'yi geliştirdiler. Artık aynı yetenekler normal javascript'te de var.

jQuery ile aynı kolaylıkta bir kullanım sağlayan normal js çözümlerini tercih etmek bize hız kazandıracaktır. 

IE10 ve sonrası için desteği olan bu özellikleri rahatlıkla kullanabiliriz.
	
## Kaynaklar

 - [https://github.com/oneuijs/You-Dont-Need-jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery)
 - [http://youmightnotneedjquery.com/](http://youmightnotneedjquery.com/)
 - [https://www.sitepoint.com/exploring-classlist-api/](https://www.sitepoint.com/exploring-classlist-api/)
 - [http://blog.teamtreehouse.com/manipulating-classes-using-classlist-api](http://blog.teamtreehouse.com/manipulating-classes-using-classlist-api)
 - [https://davidwalsh.name/classlist](https://davidwalsh.name/classlist)