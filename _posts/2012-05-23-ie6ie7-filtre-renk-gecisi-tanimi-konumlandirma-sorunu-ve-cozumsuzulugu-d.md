---
layout: post
title: IE6/IE7 filtre &quot;Renk Geçişi Tanımı - Konumlandırma&quot; Sorunu ve Çözümsüzülüğü :D
Date: 2012-05-23 09:40
categories: [CSS]
tags: [filtre, gradient, ie6, ie7, problem]
---

CSS3 ile birlikte bir çok güzel özellik geldi. Bunlardan bir tanesi
[CSS3 renk geçişi(gradient) özelliği][]. Bu özelliği uygulamamızda en
büyük etki CSS3 renk geçişini desteklemeyen İnternet Explorer için
filtre ile çözüm oluşturuyor olabilmemiz.

Uygularımızda CSS3 renk geçişini uyguladıkça **filtre** uygulamalarında
yaşanan sorunlar ortaya çıkmaya başladı. Daha önce bu konuda “[İnternet Explorer’da Renk Geçişi Sorunu ve Çözümü][]” bir sorun ve çözümü
yazmıştım.

Bu seferki sorunu şöyle tanımlayabilirim. Renk geçişi uygulanan alanın
içindeki bir elemana **position:absolute** tanımı yapıp kapsayıcı eleman
dışına çıkarmak istediğimizde dışa çıkan kısım ie6/ie7 (ie7 beni
ilgilendiriyor artık :) görünmüyor.

Araştırdığım kadarı ile bir çözüm yok. Bulabilen varsa yazarsa çok
sevinirim. Ben kaçak bir çözüm buldum :D

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/fatihhayri/AErWW/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

ie7 için filtre tanımı kaldırarak sorunu giderdim. Ancak diğer ie
sürümlerin için bir çözüm oluşturmam gerekti. Bunun için **-ms-filtre**
özelliğini kullanmak bana mantıklı geldi. İnternet Explorer 7’nin %5’in altına düşmüş oranı ile görmezden gelinebileceğini düşünüyorum. :D

<iframe style="width: 100%; height: 300px" src="https://jsfiddle.net/tAFG2/1/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

IE7 masum görünüyor ama bizi uğraştırmıyorda değil. Yakınsa son bulacak
olması bizi sevindiriyor.

## Kaynak

-   clogsandmills.com/blog/ie6-ie7-filter-bug
-   http://www.briangervais.com/blog/css-gradients-with-internet-explorer-ie6-10
-   [http://brian.pontarelli.com/2011/09/20/ie-filter-gradient-and-positioning-bug/][]


  [CSS3 renk geçişi(gradient) özelliği]: http://fatihhayrioglu.com/css-renk-gecisleri-gradients/
  [İnternet Explorer’da Renk Geçişi Sorunu ve Çözümü]: http://fatihhayrioglu.com/internet-explorerda-renk-gecisi-sorunu-ve-cozumu/
  [http://brian.pontarelli.com/2011/09/20/ie-filter-gradient-and-positioning-bug/]: http://brian.pontarelli.com/2011/09/20/ie-filter-gradient-and-positioning-bug/
