title: htmlのtitleに現在時刻を表示させる
==========
date: 2015-11-15 15:19
tags: [javascript html]
categories: []
- - -

### 関数名が必要なのん
#### ﾜﾝﾗｲﾝ
これだと端が切れてしまう
```javascript
function ShowDateOnTitle(){ document.title = new Date(); setTimeout("ShowDateOnTitle()", 1000);}; ShowDateOnTitle();
```
### Multi Lines
年を非表示にした.
__このコードはGoogle Keppにも載せてある.__
Copy & Pasteで動く.
```sh
function ShowDateOnTitle(){
  var now = new Date();
  var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  document.title = day[now.getDay()]
    + ' ' + now.getMonth()
    + '/' + now.getDate()
    + ' ' + now.getHours()
    + ':' + now.getMinutes()
    + ':' + now.getSeconds();
  setTimeout("ShowDateOnTitle()", 1000);
}
ShowDateOnTitle();
```
### 即時関数 & 無名関数
#### 非推奨
arguments.calleeはstrictの場合,使えない.
他にも色々理由があると思うが良くないらしいね.
```javascript
(function() { document.title = new Date(); setTimeout(arguments.callee, 1000);})();
```
