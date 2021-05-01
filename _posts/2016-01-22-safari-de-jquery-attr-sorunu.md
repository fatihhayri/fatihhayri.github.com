---
layout: post
title: Safari'de jquery attr() metodunun çalışmama sorunu
Date: 2016-01-22 11:40
categories: [Javascript]
tags: [jquery safari attr prop]
---

iPhone'da yazdığım bir kodun çalışmadığını gördüm. Aşağıdakine benzer bir **selectbox**'ın ilgili **option**'ununu seçmek için kullandığım bir kod parçası.

```javascript
$('#mySelect')
    .find('option')
        .filter(function() {
            return this.text == $('#selectedRejectReason').val(); 
        }).attr('selected', true)
```

Sorunun çözümü her zaman ki gibi [stackoverflow](http://stackoverflow.com/)'da

**attr** özelliği Safari'de çalışmıyor. Onun yerine jquery 1.6'dan sonra gelen **prop** özelliğini kullanmak gerekiyor.

```javascript
$('#mySelect')
    .find('option')
        .filter(function() {
            return this.text == $('#selectedRejectReason').val(); 
        }).prop('selected', true)
```

Aklınızın bir köşesinde kalsın.

## Kaynak

 - [http://stackoverflow.com/a/9024232/296373](http://stackoverflow.com/a/9024232/296373)