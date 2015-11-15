title: htmlのtitleに現在時刻を表示させる
==========
date: 2015-11-15 15:19
tags: [javascript html]
categories: []
- - -

## ﾜﾝﾗｲﾝ
### 関数名が必要なのん
```javascript
function ShowDateOnTitle(){ var now =new Date(); document.title = now.getFullyear + '/' +  now.getMonth + '/' now.getDay + '/' + now.getHours + '/' + now.getMinutes + now.getSeconds; setTimeout("ShowDateOnTitle()", 1000);}; ShowDateOnTitle();
```
### 即時関数 & 無名関数
#### 非推奨
```javascript
(function() { document.title = new Date(); setTimeout(arguments.callee, 1000);})();
```
