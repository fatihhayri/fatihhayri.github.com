---
layout: post
title: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment
description: React fragment kullanımı, React fragment nedir?
lang: tr_TR
Date: 2019-03-13 14:47
Category: React
tags: [react, hata, fragment, jsx]
image:
  feature: react.png
---

React'ı yeni yeni öğreniyorum. Öğrenirken en çok başlıkta yazdığım hatayla karşılaştım. Kendime ve size not düşerek aklımızın bir kenarında durmasını sağlamak için böyle bir not tutayım dedim.

```js
import React, { Component } from 'react'

class BasitOrnek extends Component {
  render() {
    return (
       <h1>{this.props.title}</h1>
       <p>{this.props.description}</p>
    )
  }
}
```

şeklinde `return` içinde iki elemanlı tanımlama yaptığımızda React

> ...ContentDetail.jsx: Adjacent JSX elements must be wrapped in an
> enclosing tag. Did you want a JSX fragment <>...</>? (72:16)

Yukarıdaki hatayı veriyor. Aslında hatada ne yapmamız gerektiğini de söylüyor. React jsx içinde `return` içinde birden fazla öge dönmeye izin vermiyor. Döneceksen bir tek sen dön diyor :)

React eğitim videolarını izlerken bunu belirtmişti eleman ama unutuyor insan. Çözüm bu elemanları saran kapsayıcı bir `<div>` tanımlamak.

```js
import React, { Component } from 'react'

class BasitOrnek extends Component {
  render() {
    return (
       <div>
	       <h1>{this.props.title}</h1>
	       <p>{this.props.description}</p>
       </div>
    )
  }
}
```

[React v16.2](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html) ile birlikte daha da basit bir çözüm gelmiş. 

```js
import React, { Component } from 'react'

class BasitOrnek extends Component {
  render() {
    return (
       <>
	       <h1>{this.props.title}</h1>
	       <p>{this.props.description}</p>
       </>
    )
  }
}
```

Sadece `<>` ve `</>` ile daha basit kullanımı var. Babel kullanıyorsanız 7+ sonrası destekliyormuş.

## Kaynaklar

 - [https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
 - [https://medium.com/@muratdogan/react-v16-2-0-ile-iyile%C5%9Ftirilen-%C3%A7ok-k%C4%B1ymetli-%C3%B6zellik-fragments-7a757094eafe](https://medium.com/@muratdogan/react-v16-2-0-ile-iyile%C5%9Ftirilen-%C3%A7ok-k%C4%B1ymetli-%C3%B6zellik-fragments-7a757094eafe)
 - [https://flaviocopes.com/react-fragment/](https://flaviocopes.com/react-fragment/)
 - [https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag](https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag)