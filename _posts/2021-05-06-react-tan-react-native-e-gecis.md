---
layout: post
title: React'tan React Native'e geçiş
description: React'tan React Native'e geçiş sorunları ve çözümleri
lang: tr_TR
Date: 2021-05-06 11:00
Category: React Native
tags: [react, react-native]
image:
  feature: react-native-logo.jpg
---

React ile 1,5 sene geliştirme yaptıktan sonra yeni projede React Native (Netleşmemişti ama genel kanı bu yöndeydi) ile geliştireceğimizi öğrenince 1-2 ay kadar React Native kaynaklarına bakma fırsatım oldu. Şunu ifade etmeliyim ki kullanmadan önce tedirgindim ancak hiç tedirginliğe gerek yokmuş. Bir projeye dahil olunca hızlı ve kolay bir geçiş oluyor.

> Bu yazıya yaklaşık olarak 8 ay önce başlamıştım. Düzenleyip yayına almak bugüne (6 Mayıs 2021) nasipmiş.
 
 Yeni projeye expo ile başladık. Expo hakkında detay için [https://expo.io/](https://expo.io/) buraya bakabilirsiniz. Expo ile react native  projeleri geliştirmek gerçekten çok kolay. Projenizi gerçek cihazda test etmemiz çok kolaylaştırıyor. React Native'e hızlı giriş için süper bir platform.

Projeye başlayıp işleri aldıkça bazı problemlerle karşılaştım. Çözmek için [stackoverflow](https://stackoverflow.com/), [react native](https://reactnative.dev/) sitesi ve çalışma arkadaşlarımın yardımıylı geçiş tahminimden daha kolay oldu. İlerleyen zamanlarda bazı ciddi sorunlar yaşasak da genel olarak beklediğimden daha sorunsuz bir geçiş oldu. 

Geçiş sırasında karşılaştığım sorunlar ve çözümleri burada paylaşayım.

## HTML elementleri yerine muadillerini kullanmak

Web kodlarken alıştığımız div, span, image, ul, ol ve button yerine React Native'de aşağıdaki karşılıkları kullanılıyor. 

|HTML| React Native  |
|--|--|
| `<div>` | `<View>` |
| `<span>` ve `<p>` | `<Text>` |
| `<ul>`, `<ol>` | `<FlatList>` |
| `<image>` | `<Image>` |
| `<button>` | `<TouchableHighlight>` veya `<TouchableOpacity>` |
{:.table}
 
 Genel olarak sadece isimleri değişiyor. Kullanımda ufak değişikler olsa da dokümantasyondan kolaylıkla kavrayıp devam ediyoruz.
  
## SVG eklemek

React Native ile kodlama yaparken ilk yaşadığım sorunlardan bir tanesi web'de ikonları svg olarak eklediğim için burada da ekleyeyim dedim ancak React Native'in SVG desteğinin olmaması şaşırttı. SVG ikon kullanmak için [react-native-svg](https://github.com/react-native-svg/react-native-svg) kütüphanesini genelde tercih ediliyor. Ben de bunu kullanarak ikonları ekledim. [Zafer Ayan'ın makalesi](https://medium.com/@ZaferAyan/react-native-svg-kullan%C4%B1m%C4%B1-c8028367a95e) imdadıma yetişti. 

Kullanımı çok basit.

```js
import NoBellIcon from  'assets/icons/no-bell.svg';
```

şeklinde sayfamıza kaynağını ekledikten sonra 

```html
<NoBellIcon  width={52}  height={52}  />
```

şeklinde jsx kısmını ekleyerek svg resimlerimizi kolayca projelerimize ekleyebiliyoruz. 

## Renk geçişi kullanımı

Tam bu şoku atlattım derken renk geçişi(gradient) kullanmam gereken bir buton için ben CSS ile kodumu yazdım. O da nesi çalışmadı :( Meğer React Native'in renk geçiş desteği de yokmuş. Bunu çözmek için de bir kütüphane kullanmamız gerekiyormuş.  **[react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)** kütüpnesini kullanarak bu işe çözüm buldum.

```js
import LinearGradient from  'react-native-linear-gradient';
```
ve 

```html
<LinearGradient
    colors={['#4c669f', '#3b5998']}
    start={{x:  0, y:  1}}
    end={{x:  1, y:  0}}
    style={styles.gradient}>
    <Text  style={styles.gradientText}>KAPAT</Text>
</LinearGradient>
```

Genel olarak beklemediğim sorunlar olsa da çözümlerinin kolay olması sevindirici oluyordu. 

## Sabit satır sayısı

Eklediğim metnin uzayıp stilin bozulmasını istemediğim yerlerde metni tek satırda sabitlemek için css ile `white-space: no-wrap`  ve `overflow: hidden` hatta üç nokta koymak için de `text-overflow: ellipsis` kullanıyorum. Ancak React Native'de bu da farklı `<Text numberOfLines={1}>` kodu yetiyor. Daha az kod ile halletmek sevindirici.

## Telefon arama

Web'de bu işi yapmak için `<a href='tel:+9002125478833'>Ara beni</>` şeklindeki bir kullanımda React native'de karşılık bulmuyor. Bunun yerine React native'de 

```html
import {Linking} from 'react-native' 

<Text onPress={()=>{Linking.openURL('tel:+9002125478833');}}>Ara beni</Text>
```
şeklinde çözülüyor.

## Platforma özel kod

Eski İnternet Explorer 6 zamanı bu tip işler oluyordu. ie6'ya başka diğerlerine başka kod yazma ihtiyacının olduğu durumlar oluyordu. Mobilde iki büyük platform var. Android ve iOS. Bazen bir platforma özel kod yazmak gerekiyor.

```js
import  { Platform, StyleSheet }  from  'react-native';

const styles = StyleSheet.create({
    height: Platform.OS  ===  'ios'  ?  200  :  100
});
```

## Sonuç 

Başta nereye baksam sorun olarak gelse de zamanla oturuyor ve hepsine alışıyorsunuz. Sorunların kısa sürede ve kolayca halledilmesi geçişi kolaylaştırıyor. Bu yazıda ilk başta yaşadığım sorunları ve çözümleri yazdım. Zamanım olursa başka sorun ve çözümleri de paylaşmaya çalışırım.

Beraber çalıştığım arkadaşlarım trendyol-tech'de bu proje boyunca yaşadıklarımız ve kullandığımız metodları paylaştılar. Eğer hala okumadıysanız okumanızı öneririr.

 - [Trendyol GO — Bir Front-End Teknoloji Hikayesi](https://medium.com/trendyol-tech/trendyol-go-bir-front-end-teknoloji-hikayesi-1d741322a545)
 - [React, Google Maps ve WebSocket Performans Sorunu](https://medium.com/trendyol-tech/react-google-maps-ve-websocket-performans-sorunu-6572a1be177f)
 - [React Native ile Konum Takibi](https://medium.com/trendyol-tech/react-native-ile-konum-takibi-bfa51c4b2c98)
 - [Apple App Store Dışında Uygulama Dağıtma](https://medium.com/trendyol-tech/apple-app-store-d%C4%B1%C5%9F%C4%B1nda-uygulama-da%C4%9F%C4%B1tma-482e92ed3d06)
 - [Trendyol GO - React Native](https://medium.com/trendyol-tech/trendyol-go-react-native-96ab82c46662)

Beraber çalıştığım arkadaşlarımla bu proje boyunca çok fazla yardımlaştık. Hepsine teşekkürlerimi sunuyorum. [Sercan Eraslan](https://twitter.com/sercan_eraslan), [İsmail Hakkı Tekin](https://twitter.com/ihakkitekin), İsmail Demirci, [Tolga Cesur](https://twitter.com/tolga_cesur), [Doğan Öztürk](https://twitter.com/dodothebird), [Yusuf Zeren](https://twitter.com/yosooff), [Talha Turhan](https://twitter.com/tallhighs), Şeyda Taşkın Davut, Burak Yağdıran


Kalın sağlıcakla.

## Kaynaklar

- https://hackernoon.com/transitioning-from-react-web-to-react-native-development-c8e6df57a92e
- https://medium.com/react-native-now/my-journey-from-reactjs-to-react-native-d19986a47dec
- https://www.tablexi.com/learning-react-native
- https://www.linkedin.com/learning/from-react-to-react-native/welcome
- [https://stackoverflow.com/a/54906219/296373](https://stackoverflow.com/a/54906219/296373)
- [https://reactnative.dev/docs/platform-specific-code](https://reactnative.dev/docs/platform-specific-code)
