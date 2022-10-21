---
layout: post
title: dialog elementi
description: dialog elementi hakkında detaylı bilgi
lang: tr_TR
Date: 2022-03-29 14:44
Category: HTML
tags: [HTML, dialog, modal]
image:
  feature: dialog-element.png
---

Bu makaleyi Safari (15.4) tarayıcısının dialog elementi desteği gelmesi sonrası yazmaya karar verdim. Genel olarak bir işi standartlarla yapabiliyorsam onu tercih ederim. Bu konuda en müzdarip olduğum element `<select>` elementidir. Tasarımcıların birçok farklı düşüncelerine karşı select elementine bizim müdahale edeceğimiz yerler kısıtlıdır. Her ne kadar ısrar etsek te tasarıma uymak için özel select kütüphanelerine yönelmek zorunda kalıyoruz. Benzer durum dialog/modal/popup için de geçerli. Tabi uzun süre bu işi yapacak bir HTML elementi olmadığı için normal olarak başka yollarla bu işi çözdük.

**`<dialog>`** elementi modal ve pop-up olarak adlandırdığımız yapıları kolayca ve bir HTML elementi olarak kodlamamıza olanak sağlar.

En basit hali aşağıdaki gibidir.

```html
<dialog>
  <h3>Konum bilginizi almak için izin istiyoruz</h3>
  <p>Bizimle konumunuzu paylaşır mısınız?</p>
  <div class="actions">
    <button>Tamam</button>
    <button>Kapat</button>
  </div>
</dialog>
```
Başlangıç durumunda bu içerik sayfada görüntülenmez. Eğer sayfa ilk açılışında görünür olmasını istiyorsak 

```html
<dialog open>
...
</dialog>
```
Sadece **open** özniteliğini eklemek yeterli oluyor.

## Js ile açma kapama 

Evet yukarıdaki kodu ekledik. Peki bu modal'ı nasıl açıp kapatacağız. Tabi ki basit iki javascript metoduyla

```js
const openModal = document.querySelector('.open-model');
const closeModal = document.querySelector('.close-modal');
const locationModal = document.getElementById('location-modal');

openModal.addEventListener('click', () => {
  locationModal.showModal();
});

closeModal.addEventListener('click', () => {
  locationModal.close();
});
```

**showModal()** ve **close()** metodlarıyla açma kapa işini kolayca yapabiliyoruz.  

> **showModal()** yerine **show()** metodunu kullanırsak içerik modal olarak değil normak içerik olarak ta sayfa içinde açtırabiliyoruz.

## Stil tanımları

`<dialog>` elementi normal bir HTML elementi gibi stillendirilebilir. Başlangıçta siyah bir kenar çizgisi, içeriğe göre genişlik ve backdrop olmadan gelir. Biz bu tanımları yaparak istediğimiz gibi modal stilleri kodlayabilriz.

```css
dialog::backdrop {
  background: rgba(0,0,0, .5);
}
```

`::backdrop` sözde sınıfı yardımıyla modal arkasını istediğimiz gibi stillendirebiliyoruz. 

```css
dialog[open] {
  display: flex;
  flex-direction: column;
  animation: lastik .15s cubic-bezier(0, 1.8, 1, 1.8);
}
```

Yukarıdaki tanımla da modal açılırken istediğimiz animasyonu verebiliyoruz.

## Form içeren dialog elementi

Modal içinde form alanlarını kullandığında formun method kısmına `method="dialog"` tanımlanarak formun gönderildiği durumlarda modal'ında kapanması sağlanır.  Form değerini modal'a **returnValue**  olarak geri döner.

```js
closeModal.addEventListener('click', () => {
  locationModal.close();
  outputBox.value = locationModal.returnValue + " modal kapandı - " + (new Date()).toString();
});
```

Tüm yukardaı anlattıklarımız bir örnek ile uygularsak.

<iframe height="500" style="width: 100%;" scrolling="no" title="dialog element" src="https://codepen.io/fatihhayri/embed/dyJWeJv?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## Sonuç

Her zaman standartta olan ögeleri kullanmak bize avantaj sağlar. Tabi gereksinimler bazen farklı yollara itebilir bizi. 

Genel olarak `<dialog>` elementinin artıları

- Her zaman içeriğin üstünde olacaktır. `z-index` değeri **99999** olan div'den bile üstte
- Klavyede hazır tanımlıdır. Enter ile açılır, esc ile kapanır
- Farklı araçlarda erişebilirlik açısından önemli artıları vardır.
- Kullanıcı tercihlerine sadık kalır. Karanlık mod durumları mesela
- Özel stil tanımlarına izin verir.
- İçeriğinde form kullanılması durumu için farklı davranış desteği vardır.
- Kullanım basitliği vardır.

Gördüğüm tek negatif yöne

 - Genel modal deneyimlerimizde yapmak istediğimiz backdrop'a tıklayınca modal'ın kapanması durumunu yapamıyoruz. Bu durum kullanıcı deneyimi için bir ihtiyaç mıdır? Tartışılır.  Bu konuda [Ercüment Laçın](https://twitter.com/ercument_lacin) bir çözüm gönderdi gayet güzel. Teşekkür edip kodunu paylaşıyorum. 

 ```js
 locationModal.addEventListener("click", event => {
    const rect = locationModal.getBoundingClientRect();
    if (event.clientY < rect.top || event.clientY > rect.bottom ||
        event.clientX < rect.left || event.clientX > rect.right) {
        locationModal.close();
    };
});
```

 {% include browser-usage.html ch="+" ie="-" ff="+" mch="+" sa="+" si="+" %}

## Kaynaklar

 - [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 - [https://css-tricks.com/some-hands-on-with-the-html-dialog-element/](https://css-tricks.com/some-hands-on-with-the-html-dialog-element/)
 - alligator.io/html/dialog-element/
 - [https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/](https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/)
 - [https://tympanus.net/codrops/2021/10/06/how-to-implement-and-style-the-dialog-element/](https://tympanus.net/codrops/2021/10/06/how-to-implement-and-style-the-dialog-element/)
 - [https://caniuse.com/dialog](https://caniuse.com/dialog)
 - [https://webkit.org/blog/12209/introducing-the-dialog-element/](https://webkit.org/blog/12209/introducing-the-dialog-element/)
 - [https://codepen.io/DigitalReligion/pen/rJWzQK](https://codepen.io/DigitalReligion/pen/rJWzQK)
 - [https://webmaster.kitchen/html5-dialog-elementiyle-popup-ve-modal-yapma/](https://webmaster.kitchen/html5-dialog-elementiyle-popup-ve-modal-yapma/)
 - [https://markdotto.com/2022/03/16/dialog-element/](https://markdotto.com/2022/03/16/dialog-element/)
 - [https://youtu.be/TAB_v6yBXIE](https://youtu.be/TAB_v6yBXIE)
