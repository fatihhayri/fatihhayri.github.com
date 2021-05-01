---
layout: post
title: Form alanlarına odaklanma
Date: 2007-10-03 17:40
categories: [CSS]
tags: [CSS, focus, form, Javascript, odaklanma, HTML]
---

Form alanları genelde kullanıcıların en çok sıkıldıkları alanlardır. Bu
sıkıntıyı gidermek için kod yazarları çeşitli yöntemler
geliştirmektedir. CSS ve ajax tabanlı çözümlerle gayet güzel sonuçlar
çıkmaktadır. Biz burada fazla derine inmeden kullanıcının form
alanlarına odaklandığında form alanına farklılıklar vererek daha
belirgin hale getirmeyi göreceğiz.

İlk örneğimiz. Bir arama metin kutusuna başlangıç değeri olarak
açıklayaıcı bir bilgi gireceğiz ve kullanıcı bu alana
odaklandığında(onfocus) metni sileceğiz.

```html
<p> Ad Soyad<br /> <input type="text" id="ara" name="ara" value="Ara" onfocus="if(this.value=='Ara'){this.value=''};"
onblur="if(this.value==''){this.value='Ara'};" /> </p>
```

Örneği görmek için [tıklayınız.][]

metin kutusunun onfocus olayına eğer değer bizim girdiğimiz değer ise
boşaltmasını söylüyoruz. Tabi birde kullanıcının bu metin kutusu dışına
çıktığında bu alanı eski hali getirmek içinde onblur olayını
kullanıyoruz. Burada dikkat edilmesi gereken nokta metin kutusuna
atadğımız bağlangıç değeri(value="Ara") ile sorgudaki
alanın(if(this.value=='')) bir biri ile aynı olmasıdır.

İkinci örneğimizde bu efekte zemin rengi özelliğinide katarak daha güzel
bir etki vereceğiz.

```html
<p>Ad Soyad<br /> <input type="text" id="ara" name="ara" value="Ara" onfocus="if(this.value=='Ara'){this.value='';
this.style.backgroundColor='#efefef'};"
onblur="if(this.value==''){this.value='Ara';
this.style.backgroundColor='#ffffff'};" /> </p>
```

Örneği görmek için [tıklayınız.][]

Burada dikkat edilecek konu onblur durumunda zemin rengini ilk haline
döndürmektir.

Form alanları genelde örnekte verdiğimiz gibi tek metin kutusundan
oluşmaz. Genelde bir çok metin kutusu, işaret kutusu, açılır menü gibi
elemanların alt alta sıralanmasından oluşur. son örneğimizde bu
elementler arasında kullanıcının odaklandığı elementini kapsayan alanın
zemin rengini değiştirerek dikkati bu alana çekeceğiz.

```html
<style type="text/css"> .odaklan{
background-color: #FFFFE0; padding:10px 5px; border:1px solid #CCCCCC;
} .normal{ background-color:#FFFFFF; padding:10px 5px; } </style> <p
class="normal">Ad Soyad<br /> <input type="text" id="ara" name="ara"
value="Ara" onfocus="if(this.value=='Ara'){this.value='';
this.style.backgroundColor='#efefef';
this.parentNode.className='odaklan'};"
onblur="if(this.value==''){this.value='Ara';
this.style.backgroundColor='#ffffff';
this.parentNode.className='normal'};" /> </p>
``` 

Örneği görmek için [tıklayınız.][]

Burada form alanına ve kapsayan paragrafa farklı renk atayarak daha
fazla dikkat cekici lanlar oluşturduk.

Not: Bu örnekler FF1, IE5, Opera7.5 ve Safari3.0/Win çalışmaktadır.

Bu işlemleri aslında biz CSS ilede yapabiliriz. :focus özelliği bu
işlevi görür, ancak bu özellikleri IE desteklemediği için bu özelliği
kullanamıyoruz.

```css
input:focus {
	background-color: #FFFFE0;
	color: white;
}
```

Bu kodu IE'nin desteklemesi için bir javascript kodu eklememiz
gerekiyor.

```javascript
sfFocus = function() { var sfEls =
document.getElementsByTagName("INPUT"); for (var i=0; i<sfEls.length;
i++) { sfEls[i].onfocus=function() { this.className+=" sffocus"; }
sfEls[i].onblur=function() { this.className=this.className.replace(new
RegExp(" sffocusb"), ""); } } } if (window.attachEvent)
window.attachEvent("onload", sfFocus);
```

Örneği görmek için [tıklayınız.][1]


  [tıklayınız.]: /dokumanlar/odaklanma_ornek.html
  [1]: /dokumanlar/odaklanma_ornek2.html
