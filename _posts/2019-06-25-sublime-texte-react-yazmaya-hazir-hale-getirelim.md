---
layout: post
title: Sublime Text'e React yazmaya hazır hale getirelim
description: Sublime Text'i react'a hazır hale geitrelim. 
lang: tr_TR
Date: 2019-06-25 14:10
Category: Sublime
tags: [sublime-text, react, linting]
image:
  feature: sublime-text-gorunum.png
---

 React ile kod yazmaya başladıktan sonra kullandığım editörde bazı eklemeler yaptım. Ben editör olarak Sublime Text kullanıyorum ve sizlere Sublime Text'te neler yaptığımı anlatacağım. Diğer editörler de benzer yoları izleyerek daha kullanışlı bir ortam oluşturabiliriz.

## Renklendirme ve otomatik tamamlama

React ile yazdığımız kodları daha göze hoş ve renklendirilmiş olarak görmek ve otomatik tamamlama için ilk olarak [Babel](https://packagecontrol.io/packages/Babel) paketini yükledim. Bir kaç yerde sorun yaşadım ve çözümünü bulamadım. Bu eklentinin geliştiricisi uzun süredir geliştirmeyi durdurduğu için [Js Custom](https://github.com/Thom1729/Sublime-JS-Custom) paketini yükledim. Şu ana kadar bir sorununu görmedim. Öneririm.

React otomatik tamamlama için [TypeScript React](https://github.com/Microsoft/TypeScript-Sublime-Plugin)'ı da öneriyorlar ama ben denemediğim için bu konuda birşey söyleyemiyeceğim. ES6 ototmaitk tamamlama paketi yeterli bence.

## ESLint

Bir teknolojiye yeni girdiğinizde hata yapma oranınız daha fazla oluyor. Bu hataları her defasında tarayıcı konsolunda görmek zaman kaybına neden oluyor. 

Bu sorunun çözümü: Linter kullanmak. 

Sublime Text'te hata yakalama işini yapmak için ilk olarak 
Sublime Linter'ı kurmak gerekiyor. Daha önce bu konuyu yazmıştım. [Sublime Text linting](https://fatihhayrioglu.com/sublime-text-linting/) Daha sonra ESlint paketini kurup ayarlarını yapmak gerekiyor.

```
npm install babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y  eslint-plugin-react
```
Sonra uygulamanın an kalsöründe `.eslintrc.json` oluşturup, başlangıç olarak aşağıdaki bir içerik yazabilirsiniz.

```json
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": ["react", "jsx-a11y", "import"]
}

```

Bir porojede birden fazla kişi çalışıyorsa bu hata düzeltme işini bu koda her giren kişinin yapması lazım. Eğer git kullanırsanız bu kolay. git ile gönderilen her kod öncesinde eslint kurallarını işletip hataları gösteren ve kodun yukarıya çıkmasını engelleyen bir yapı kurmak basit.

git precommit diye adlandırılan kodu yukarı gönderme öncesine aşağıdaki kodu eklemek yeterli.

1. Projenizin olduğu yerde `.git` kalsörü olacaktır.
2.   `.git/hooks` kalsörüne geçin.  `pre-commit.sample` adında bir dosya göreceksiniz.
3.  Bu dosyanın ismini `pre-commit` olarak değiştirin.
5.  İçindeki örnek kodları silin.
6.  https://gist.github.com/linhmtran168/2286aeafe747e78f53bf adresteki kodu içine kopyalayın.
7.  Son olarak `chmod +x .git/hooks/pre-commit` çalıştırın.
8.  Süper!

## Hızlı yazım kolaylığı için snippet

Babel Snippets ve React ES6 Snippets paketlerini kurarak devamlı kullanılan react yapılarını kısayollar yardımıyla kullanabilirisiniz.

Kurulu bir projede çok ihtiyaç duymuyoruz ancak yeni proje oluştururken güzel işlevi var. connected komponenet, class yapısını üç karakter ile yazmak hız kazandırıyor.

Bunun dışında otomatik düzeltme için Prettier kullananlar da var ama ben henüz kurup denemedim.

VSCode kullananlar için [https://flaviocopes.com/vscode-react-setup/](https://flaviocopes.com/vscode-react-setup/) bu yazıyı öneririm.

Sağlıcakla kalın.

## Kaynaklar

 - [Setting Up Sublime Text 3 for ReactJS](https://medium.com/@adrianmcli/setting-up-sublime-text-3-for-reactjs-3bf6baceb73a)
 - [Your new ReactJS on Sublime Text 3 workspace setup](https://medium.com/@dwardmr/your-new-reactjs-on-sublime-text-3-workspace-setup-9ce87c12e93a)
 - https://codepen.io/mi-lee/post/sublime-text-setup-for-react-js-development
 - https://css-tricks.com/turn-sublime-text-3-into-a-javascript-ide/
 - [http://cheng.logdown.com/posts/2015/07/10/setup-sublime-text-3-for-reactjs-development](http://cheng.logdown.com/posts/2015/07/10/setup-sublime-text-3-for-reactjs-development)
 - [Daha güçlü ve profesyonel React uygulaması geliştirmek](https://medium.com/@ozluy/daha-g%C3%BC%C3%A7l%C3%BC-ve-profesyonel-react-uygulamas%C4%B1-geli%C5%9Ftirmek-8a85fb41faf1)
 - [React Tutorial #1: Proje Kurulumu (React + Webpack + Babel + ESLint)](https://medium.com/@mozkarakoc/react-tutorial-1-proje-kurulumu-react-webpack-babel-eslint-166b4545d48c)
 - [How to run ESLint using pre-commit hook](https://medium.com/@rashtay/how-to-run-eslint-using-pre-commit-hook-25984fbce17e)
 - [https://flaviocopes.com/vscode-react-setup/](https://flaviocopes.com/vscode-react-setup/)
