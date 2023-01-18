---
layout: post
title: CSS İpucu 35 - dikey ve yatay tanımlar için pratik çözüm
description: Dikey ve yatay tanımlar için pratik çözüm
lang: tr_TR
Date: 2023-01-18 11:30
Category: CSS
tags: [inline, block, logical-property]
---

CSS mantıksal tanımları Arapça, Çince, İbranice vb. diller için kodlama yaparken büyük avantaj sağlıyor. Bu konuda Ahmad Shadeed'in güzel biz yazısı ([Digging Into CSS Logical Properties](https://ishadeed.com/article/css-logical-properties/)) var. Detayları bu yazıdan öğrenebilirsiniz. 


Burada size bu  özellikleri farklı bir amaç için kullanımını anlatacağım. Genelde dikeyde veya yatayda bir tanım yapacaksak özelliklerin dörtlü kısaltmalarını kullanırız. Sadece yatay veya sadece dikey tanımlama yapamıyorduk. İşte burada yardımımıza koşuyor mantıksal tanımlar. Örneğin klasik ortalama yöntemi `margin: 0 auto` aslında amaç sadece yatayda auto tanımı yapmak ama bunu yapamıyorduk.

```css
.kapsul {
    width: 800px;
    margin: 0 auto;
}
```

Evet şimdi bu kodu sadece şöyle yazabiliyoruz.

```css
.kapsul {
    width: 800px;
    margin-inline: auto;
}
```

Süper değil mi?

Benzer şekilde padding, margin, border tanımlarında aynı şeyi yapabiliyoruz. 

Örneğin bir elemanın sadece dikey kenarlarına kenarlık tanımlamak için

```css
.liste-ogesi {
    border-top: 1px solid blue;
    border-bottom: 1px solid blue;
}
```

gibi iki tanım yazmamız gerekirken

```css
.liste-ogesi {
    border-block: 1px solid blue;
}
```

şeklinde bu işi tek satırda yapabiliyoruz. 

Dikey için `block` yatay için `ìnline` eklemesi yeterli.