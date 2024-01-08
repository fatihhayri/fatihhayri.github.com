---
layout: post
title: 2023 nasıl geçti? 2024'den hedeflerim
description: 2023 nasıl geçti? 2024'den hedeflerim
lang: tr_TR
Date: 2024-01-08 10:30
Category: Genel
tags: [2023, 2024]
image:
  feature: 2023-2024.png
---

2023 senesinde genelde CSS'in yeni çıkan özelliklerini olabildiğince anlatmaya çalıştım. 

1.  [CSS ile tip tanımı @property](https://fatihhayrioglu.com/css-ile-tip-tan%C4%B1m%C4%B1-property/ "CSS ile tip tanımı @property")
2.  [::marker sözde (pseudo) elemanı](https://fatihhayrioglu.com/marker-sozde-pseudo-elemani/ "::marker sözde (pseudo) elemanı")
3.  [accent-color tanımı](https://fatihhayrioglu.com/accent-color/ "accent-color tanımı")
4.  [CSS scroll-snap](https://fatihhayrioglu.com/css-scroll-snap/ "CSS scroll-snap")
5.  [:user-invalid seçicisi](https://fatihhayrioglu.com/user-invalid-secicisi/ ":user-invalid seçicisi")
6.  [Yeni bakış alanı(viewport) değerleri](https://fatihhayrioglu.com/yeni-bakis-alani-viewport-degerleri/ "Yeni bakış alanı(viewport) değerleri")
7.  [Medya sorgularında aralıklı genişlik tanımlama](https://fatihhayrioglu.com/medya-sorgularinda-aralikli-genislik-tanimlama/ "Medya sorgularında aralıklı genişlik tanımlama")
8.  [CSS subgrid](https://fatihhayrioglu.com/css-subgrid/ "CSS subgrid")
9.  [Yeni text-wrap değerleri balance ve pretty](https://fatihhayrioglu.com/text-wrap-balanceve-text-wrap-pretty/ "Yeni text-wrap değerleri balance ve pretty")
10.  [CSS seçicilerin aranan ebeveyni bulundu :has()](https://fatihhayrioglu.com/css-secicilerin-aranan-ebeveyni-bulundu-has/ "CSS seçicilerin aranan ebeveyni bulundu :has()")
11.  [SASS'ın sonu geldi mi?](https://fatihhayrioglu.com/sass-in-sonu-geldi-mi/ "SASS'ın sonu geldi mi?")
12.  [CSS iç içe (nesting) yazım](https://fatihhayrioglu.com/css-ic-ice-nesting-yazim/ "CSS iç içe (nesting) yazım")
13.  [CSS aspect-ratio tanımı](https://fatihhayrioglu.com/css-aspect-ratio-tanimi/ "CSS aspect-ratio tanımı")

HTML'in yeni bileşenleri hakkında da yenilikleri paylaşmak gibi bir hedefim vardı ancak bu konuda eksik kaldım.

1.  [Popover API](https://fatihhayrioglu.com/popover-kullanimi/ "Popover API")

Sadece Popover bileşinini yazmışım. Bu sene daha fazla bileşen eklerim inşallah. 

## 2024 hedeflerim

2024'de daha çok CSS, HTML, PWA ve CSS ile yapılan basit işler hakkında birşeyler yazma planım var. 

### CSS 

Bu sene CSS'in yeni özellikleri hakkındaki yazılara devam etme hedefim var. 

Bunların dışında CSS ile yapılan basit işlerle alakalı yazılara da devam etmeyi düşünüyorum.

CSS'de ki gelişmelerinin devam edeceğini düşünüyorum. 2024 interrop'da hangileri dahil edilir bilemiyorum ama aşağıdaki birçok özelliğin sene sonuda kalmadan standartlaşmasını bekliyorum.

1.  Container Query
2.  linear() tanımı
3.  Cascade layer
4.  Yeni renk tanımları lch, oklab, oklch
5.  Logical properties
6.  CSS Scope
7.  Grid masonary
8.  Scroll-timeline
9.  Stil Query
10.  Anchor positioning
11. View Transitions
12. @when else
13. Trigonometrik fonksiyonlar

### HTML

HTML bileşenleri konusunda bir atılım bekliyorum. Bu sayede farklı UI kütüphaneleri yerine UI ihtiyacımızı görebilecek standartlar olacak. Burada kritik nokta bence **CSS ile yeterli derecede stillendirilebilir bileşenler** olursa iş görür yoksa `<select>` gibi beklenenin altında bir deneyimle kalır.

1.  [dialog elementi](https://fatihhayrioglu.com/dialog-elementi/ "dialog elementi")
2. [progress elementini stillendirelim](https://fatihhayrioglu.com/progress-elementini-stillendirelim/ "progress elementini stillendirelim")
3. [Popover API](https://fatihhayrioglu.com/popover-kullanimi/ "Popover API")
4. Akordiyon
5. Slider
6. Selectlist
7. Switch
8. Drawer
9. *Data table*
10. Tooltip
11. Date picker 
12. Form Validation
13. *Tabs*
14. *Carousel*

Çoğu beklenti ama umarım böyle bir liste çıkar sene sonu. :)

### PWA

Safari'ye push notification desteği gelmesiyle geçen sene PWA alanında ciddi bir atılım bekliyordum ancak gözle görülür bir sıçrama olmadı. Nasip diyelim. PWA'i birçok konuda avatajlı görmeme rağmen sektör bu konuda benimle aynı düşünmüyor galiba.  

 - **Tek kod bloku**: Mevcut sitelerde mobil için iki ayrı (iOS, Android) geliştirme ortamı var. Ayrıca hala Türkiye'de responsive olmayan birçok siteden dolayı web ve mobil web var. Bu 4 farklı ortam yerine tek ortamda işlerimizi halledebileceğimiz bir sistem var ve kimse kullanmıyor :)

 - **Tek platform öğrenme ihtiyacı:** Mobilde mevcut şartlarda Android için farklı iOS için farklı bir öğrenme eğrisi var. Bunun için React Native ve Flutter gibi çözümler olsa da hala birçok şirket native olanları tercih ediyor. PWA'in tüm bunlardan daha iyi bir çözümü var. Sadece HTML, CSS ve Javascript ile tüm her yerde çalışan siteler / uygulamalar yapma imkanı.

 - **SEO**: Mobil uygulamalrın arama motoru konusundaki sıkıntıları malum. PWA arama motorları konusunda olmazsa olmaz.
 
 - **Güncelleme kolaylığı:** Mobil uygulamaların Web marketlerinde güncellemenin  zorluğunu bilenler bu konuda PWA'nin ne kadar büyük bir nimet olduğunu anlar.
 
 - **Erişilebilirlik:** Bu konuda mevcut sitelerinde eksikleri olsa da PWA'nın erişilebilirlik çözümlerinin daha çok ve kolay olduğunu kabul etmeliyiz.
 
 - **Eski araçlarda çalışma:** Düşük kalitedeki araçlarda dahi çalışma imkanı sağlamasıyla mobil uygulamalara göre avantajı vardır. 

 - **Hız:** Web tekonolojileri hız konusunda daha fazla araç sunmaktadır. Hız ölçümü ve geliştirmesi daha kolay. Ön bellek yönetimi ve lazy load yöntemleri daha uzun süre  tecrübe edilmiştir. Örneğin [Orange Polska S.A.](https://www.orange.pl/)'nın verilerine göre %30 daha hızlıymış.

 - **Daha güvenli:** Web'in süregelen güvenlik araçları nedeniyle native uygulamalara göre avantajlıdır. HTTPS seçeneği ile güvenli siteler/uygulamalar yapma imkanı sağlar. 
 
 - **Daha az maliyetli:** Geliştirme ve idame ettirme maliyetleri daha düşüktür. 

Eksi olarak yazabileceğimiz iki konu var mobil cihazlarda cihaz özelliklerine erişim sıkıntılı ve animasyon. Animasyon konusunda kesin çözüm geldi diyebilirim. [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) bence mobil uygulamardaki animasyonu aratmayan tecrübe sunuyor. Apple'ıın yani Safari'nin iOS cihazlardaki cihaz özelliklerine erişim konusunda son yıllarda ki atağı da o eksiğinde yakında giderileceği konusunda ümitlendiriyor bizi. Ne diyelim umarım bu sefer "Bu sene PWA'nın yılı" dedirtiriz. :)

Kalın sağlıcakla.

## Kaynaklar

 - [https://survey.devographics.com/en-US/survey/state-of-html/2023](https://survey.devographics.com/en-US/survey/state-of-html/2023)
 - [https://medium.com/@julianneagu/progressive-web-app-pwa-statistics-2023-46950788b513](https://medium.com/@julianneagu/progressive-web-app-pwa-statistics-2023-46950788b513)
 - [https://web.dev/case-studies/orange?hl=en](https://web.dev/case-studies/orange?hl=en)