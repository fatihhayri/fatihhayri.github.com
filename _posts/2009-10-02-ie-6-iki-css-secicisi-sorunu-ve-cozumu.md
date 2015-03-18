---
layout: post
title: İE 6 iki CSS seçicisi Sorunu ve Çözümü
Date: 2009-10-02 14:42
Category: CSS, XHTML
tags: hata, Hata ayıklama, ie6, iki-seçici-sorunu
---

Yine bir ie6 sorunu ile karşınızdayız. Microsoft ie6 kullananları
düşünerek 2014'e kadar ie6 desteğini sürdüreceğini söylemiş, peki bizi
kim düşünüyor, Microsoft'un düşünmediği kesin. Neyse biz konumuza
gelelim.

Sorunumuz tam olarak şöyle; id atadığım bir elemana sınıf tanımladığımda
ve id ve sınıf tanımlarında aynı özellik tanımlamış isem diğer
tarayıcılar sorusuz çalışırken ie6 sorun çıkarıyor. Aynı şey iki adet
sınıf tanımladığımızdada yaşıyoruz. 

Uygulama olarak şöyle bir uygulama yaptım. Bir elemana bir id verip bu
id'li elemanın ardalan resmi olarak genel bir resim tanımladım. Daha
sonra farklı bölümler için bu elemena farklı resimler atamam
gerektiğinde aynı elemana .bolumA, .bolumB, vd. gibi sınıflar atadım.
Bir bölümü olmayan sayfalarda ana resmimi görünecek bölümü olan
sayfalarda ise ilgili resim görünecekti. 

{% highlight css %}
#tanitimAlani{
    background:transparent url(../images/genel.jpg) no-repeat scroll center top;
    text-align:center;
    width:100%;
}

#tanitimAlani.bolumA {
	background:transparent url(../images/bolumA.jpg) no-repeat scroll center top;
}

#tanitimAlani.bolumB {
	background:transparent url(../images/bolumB.jpg) no-repeat scroll center top;
}
{% endhighlight %}

Tanımı ile yapıyordum. Bu düşüncem tüm tarayıcılarda sorunsuz çalışırken
ie6 sorun çıkardı. İlk atanan genel resmini gösterdi sadece, bölüm
resimlerini göstermedi.

## Çözüm

id ile atadığım genel ardalan resmi tanımı kaldırıp genel içinde bir
sınıf(.bolumGenel) tanımladım ve bu sorunu aştım. Yani kodumu şöyle
değiştirdim.

{% highlight css %}
#tanitimalani{
    text-align:center;
    width:100%;
}

.bolumA {
	background:transparent url(../images/bolumA.jpg) no-repeat scroll center top;
}

.bolumB {
	background:transparent url(../images/bolumB.jpg) no-repeat scroll center top;
}

.bolumGenel {
	background:transparent url(../images/genel.jpg) no-repeat scroll center top;
}
{% endhighlight %}

hribar.info'nun yaptığı örnek güzel inceleyin.

[http://hribar.info/static/projects/multi-class_ie6_bug/error.html][]

##  Kaynaklar

-   [http://paulirish.com/2008/the-two-css-selector-bugs-in-ie6/][]
-   [http://blog.solutionset.com/wpmu/2008/02/15/internet-explorer-id-class-bug/][]
-   [http://hribar.info/en/archive/80/entrie.html][]
-   [http://www.ryanbrill.com/archives/multiple-classes-in-ie/][]
-   [http://sonspring.com/journal/ie6-multi-class-bug][]

  [http://hribar.info/static/projects/multi-class_ie6_bug/error.html]: http://hribar.info/static/projects/multi-class_ie6_bug/error.html
  [http://paulirish.com/2008/the-two-css-selector-bugs-in-ie6/]: http://paulirish.com/2008/the-two-css-selector-bugs-in-ie6/
    "http://paulirish.com/2008/the-two-css-selector-bugs-in-ie6/"
  [http://blog.solutionset.com/wpmu/2008/02/15/internet-explorer-id-class-bug/]: http://blog.solutionset.com/wpmu/2008/02/15/internet-explorer-id-class-bug/
    "http://blog.solutionset.com/wpmu/2008/02/15/internet-explorer-id-class-bug/"
  [http://hribar.info/en/archive/80/entrie.html]: http://hribar.info/en/archive/80/entrie.html
    "http://hribar.info/en/archive/80/entrie.html"
  [http://www.ryanbrill.com/archives/multiple-classes-in-ie/]: http://www.ryanbrill.com/archives/multiple-classes-in-ie/
    "http://www.ryanbrill.com/archives/multiple-classes-in-ie/"
  [http://sonspring.com/journal/ie6-multi-class-bug]: http://sonspring.com/journal/ie6-multi-class-bug
    "http://sonspring.com/journal/ie6-multi-class-bug"
