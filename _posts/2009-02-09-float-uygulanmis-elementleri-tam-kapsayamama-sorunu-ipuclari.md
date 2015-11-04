---
layout: post
title: Float Uygulanmış Elementleri Tam Kapsayamama Sorunu İpuçları
Date: 2009-02-09 10:18
Category: CSS
tags: float, ipucu, kapsayamama-sorunu, sorun
---

## 1- Firefox 3'de form elemenalarının Tıklanamaması Sorunu

Daha önce bir kaç kez bahsettiğim ve web kod yazarlarının birçok zaman
karşılaştığı 'Float uygulanmış elementlerin kapsayamama sorunu' bugün
xpur(Gökhan)'un bir sorusu üzerine bu yazıyı yazma gereği duydum.
Kapsayamama sorunu yaşadığımız katman içinde eğer selectbox var ise
Firefox 3'de bu selectbox tıklanabilir olmuyor. Açılmıyor yani Kodumuz
aşağıdaki gibi

{% highlight css %}
.kapsayamamaSorunu: after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.kapsayamamaSorunu {display: inline-block;}
/*IE-mac de bu bolumu sakla \ */
* html .kapsayamamaSorunu {height: 1%;}
.kapsayamamaSorunu {display: block;}
/* IE-mac bu bolumu saklam artik */
{% endhighlight %}

sorunu çözümü ise .kapsayamamaSorunu ile :after arasındaki boşluğu kapatmak .kapsayamamaSorunu:after

{% highlight css %}
.kapsayamamaSorunu:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
{% endhighlight %}

Küçük bir nokta olsa da zamanı gelince insanın çok zamanını alıyor.

## 2- Sorunun Kısayolu

Bu konuda hakkında bir başka ipucuda float'uygulanmış nesnelerde bu
sorun ile çok fazla karşılaşıyoruz, ben eskiden her bir sorunlu eleman
için bu kodu yazıyordum. Sonra bunu bir sınıfa atayıp gerekli yerlerde
bu sınıfı kullanmanın daha avantajlı olacağını düşündüm.

{% highlight css %}
.kapsayamamaSorunu:after {content: "."; display: block; height: 0; clear: both; visibility: hidden;}
.kapsayamamaSorunu {display: inline-block;}
/*IE-mac de bu bolumu sakla \ */
* html .kapsayamamaSorunu {height: 1%;}
.kapsayamamaSorunu {display: block;}
/* IE-mac bu bolumu saklam artik */
{% endhighlight %}


{% highlight html %}
<div id="icerik" class="kapsayamamaSorunu">
    <ul>
        <li>
            <select>
                <option value="-1">Seçiniz</option>
                <option value="1">Deneme1</option>
                <option value="2">Deneme2</option>
            </select>
        </li>
    </ul>
</div>
<div class="resimAlani kapsayamamaSorunu">
	<img src="images/deneme.jpg" width="150" height="80" />
</div>
{% endhighlight %}

\#icerik ve .resimAlani bu sorun ile karşılaştığımızı
düşünelim. Tek tek bu kodu yazmaktansa .kapsayamamaSorunu isimli bir
sınıf tanımlayıp sorunumuz ile karşılaştığımız her yerde bu sınıfı
tanımlarız. Tek tanımla ile işimizi hallettik.

  [100]: images/deneme.jpg
