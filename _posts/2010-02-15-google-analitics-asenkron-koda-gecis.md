---
layout: post
title: Google Analitics Asenkron Kod&#039;a Geçiş
Date: 2010-02-15 12:34
Category: Haberler, Javascript
tags: Google Analytics, Javascript, site izleme
---

Bir çok sitede site trafiğini izlemek için insanlar google analitics
hizmetini kullanıyor. Güzel bir hizmet, hemde ücretsiz. Bulunmaz bir
nimet. Zaten daha önce paralı idi. Sonra google alınca ücretsiz yaptı.

Sitelerinin performansına dikkat eden herkesin gözüne takılmıştır google
analitics'in kodları. Açıkçası ben sitemi yavaşlattığı için google
analitics'ten vazgeçicektim. Bir aralar site çok yavaştı. O zamanlar
düşünüyordum.

Google çalışanlarıda bu konudaki şikayetleri göz önüne alarak asenkron
kod geliştirmişler. Asenkron kod sayesinden bir yandan google kodu
çalışırken bir yandanda diğer içerikler taranabilme olanağı elde ediyor
sistem, buda sitemizin daha hızlı açılmasını sağlayacaktır.

Kodlar aşağıdaki gibi;

	:::html
	<!DOCTYPE html>
	<html>
	<head>
	<title>Başlık</title>
	</head>
	<body>
	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-XXXXX-X']);
	  _gaq.push(['_trackPageview']);
	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
	  })();
	</script>
	<!-- site icegi buradan sonra gelir -->
	</body>
	</html>

Kodumuz eskisi gibi karmaşık ama siz karmaşıklığa aldanmayın. Burada
yapacağımız şey çok basit. 9. satırdaki **UA-XXXXXXX-X** kısım yerine
gooagle analytics'in bize verdiği kodu yerleştirmek.

Burada dikkat edeceğimiz bir husus daha vardır. Normalde javascript
kodlarının </head\> öncesine yazmamız önerilir, sitemizin performansı
için. Ancak asenkaron nalytics kodları <head\> etiketi içinde yazmanız
öneriliyor.

Sonuçta ben kullanıyorum gayet iyi, hızlandı site. Çok büyük beklentiye
girmeyin ama hızda bir atış olduğu hissediliyor.

## Kaynak

-   [http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html][]
-   [http://www.electrictoolbox.com/google-analytics-asynchronous-tracking/][]
-   [http://davidwalsh.name/async-google-analytics][]
-   [http://webmasterformat.com/news/google-analytics-asynchronous-tracking][]
-   [http://www.webresourcesdepot.com/tracking-new-rss-subscribers-with-google-analytics-to-understand-them-better/][]
-   [http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html][]
-   [http://www.webmonkey.com/blog/New_Asynchronous_Script_Stops_Google_Analytics_From_Slowing_Down_Your_Site][]
-   [http://ajaxian.com/archives/google-analytics-unblocks-the-web-w-async-support][]
-   [http://www.webresourcesdepot.com/new-google-analytics-code-for-better-load-times/][]
-   [http://www.stevesouders.com/blog/2009/12/01/google-analytics-goes-async/][]
-   [http://googlesystem.blogspot.com/2009/12/optimized-google-analytics-code.html][]
-   [http://blog.chartbeat.com/2009/12/04/google-analytics-goes-asynchronous/][]
-   [http://www.further.co.uk/blog/New-Google-Analytics-Asynchronous-Tracking-Code-241][]
-   [http://www.highposition.net/article/google-analytics-launches-asynchronous-tracking-code-for-greater-speed/4561763][]

  [http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html]: http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
    "http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html"
  [http://www.electrictoolbox.com/google-analytics-asynchronous-tracking/]: http://www.electrictoolbox.com/google-analytics-asynchronous-tracking/
    "http://www.electrictoolbox.com/google-analytics-asynchronous-tracking/"
  [http://davidwalsh.name/async-google-analytics]: http://davidwalsh.name/async-google-analytics
    "http://davidwalsh.name/async-google-analytics"
  [http://webmasterformat.com/news/google-analytics-asynchronous-tracking]: http://webmasterformat.com/news/google-analytics-asynchronous-tracking
    "http://webmasterformat.com/news/google-analytics-asynchronous-tracking"
  [http://www.webresourcesdepot.com/tracking-new-rss-subscribers-with-google-analytics-to-understand-them-better/]: http://www.webresourcesdepot.com/tracking-new-rss-subscribers-with-google-analytics-to-understand-them-better/
    "http://www.webresourcesdepot.com/tracking-new-rss-subscribers-with-google-analytics-to-understand-them-better/"
  [http://www.webmonkey.com/blog/New_Asynchronous_Script_Stops_Google_Analytics_From_Slowing_Down_Your_Site]: http://www.webmonkey.com/blog/New_Asynchronous_Script_Stops_Google_Analytics_From_Slowing_Down_Your_Site
    "http://www.webmonkey.com/blog/New_Asynchronous_Script_Stops_Google_Analytics_From_Slowing_Down_Your_Site"
  [http://ajaxian.com/archives/google-analytics-unblocks-the-web-w-async-support]: http://ajaxian.com/archives/google-analytics-unblocks-the-web-w-async-support
    "http://ajaxian.com/archives/google-analytics-unblocks-the-web-w-async-support"
  [http://www.webresourcesdepot.com/new-google-analytics-code-for-better-load-times/]: http://www.webresourcesdepot.com/new-google-analytics-code-for-better-load-times/
    "http://www.webresourcesdepot.com/new-google-analytics-code-for-better-load-times/"
  [http://www.stevesouders.com/blog/2009/12/01/google-analytics-goes-async/]: http://www.stevesouders.com/blog/2009/12/01/google-analytics-goes-async/
    "http://www.stevesouders.com/blog/2009/12/01/google-analytics-goes-async/"
  [http://googlesystem.blogspot.com/2009/12/optimized-google-analytics-code.html]: http://googlesystem.blogspot.com/2009/12/optimized-google-analytics-code.html
    "http://googlesystem.blogspot.com/2009/12/optimized-google-analytics-code.html"
  [http://blog.chartbeat.com/2009/12/04/google-analytics-goes-asynchronous/]: http://blog.chartbeat.com/2009/12/04/google-analytics-goes-asynchronous/
    "http://blog.chartbeat.com/2009/12/04/google-analytics-goes-asynchronous/"
  [http://www.further.co.uk/blog/New-Google-Analytics-Asynchronous-Tracking-Code-241]: http://www.further.co.uk/blog/New-Google-Analytics-Asynchronous-Tracking-Code-241
    "http://www.further.co.uk/blog/New-Google-Analytics-Asynchronous-Tracking-Code-241"
  [http://www.highposition.net/article/google-analytics-launches-asynchronous-tracking-code-for-greater-speed/4561763]: http://www.highposition.net/article/google-analytics-launches-asynchronous-tracking-code-for-greater-speed/4561763
    "http://www.highposition.net/article/google-analytics-launches-asynchronous-tracking-code-for-greater-speed/4561763"
