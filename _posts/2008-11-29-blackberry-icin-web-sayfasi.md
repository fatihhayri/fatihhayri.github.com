---
layout: post
title: Blackberry için web sayfası
Date: 2008-11-29 20:07
Category: ASP.NET, CSS, Javascript
tags: asp, blackberry, web-programlama, web-sitesi
---

Blackberry css media="handheld" ile girdiğimiz kodları görmüyor, aslında
hiç bir şeyi adam gibi görmüyor. Neyse bu sebepten dolayı web
sitelerimizi Blackberry kullananlar için kodlamak için sunucu taraflı
bir kontrol ile istemcinin kullandığı aracı bulup ona göre yönlendirme
yapmalıyız. İstemci(örn: javascript) taraflı bir kontrolü yapamıyoruz
çünkü desteklemiyor. Bu nedenle sunucu taraflı kod ile yapıyoruz. Eğer
blackberry kullanıcı iseniz sizi BlackBerry.html sayfasına gönderecek.
ASP ile bunu yapalım.

	:::vb
	<%
		userAgent = Request.ServerVariables("HTTP_USER_AGENT")
		userAgent = lcase(userAgent)
		if Instr(userAgent, "blackberry") then
			response.redirect("BlackBerry.html")
		end if
	%>

Aynı şeyi php ve diğer sunucu taraflı kod ile de yapılabilir
