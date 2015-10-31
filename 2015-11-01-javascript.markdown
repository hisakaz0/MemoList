title: javascript 
==========
date: 2015-11-01 00:22
tags: []
categories: []
- - -



### Javascript Regular Expression

```javascript
str = 'hisakazu fukuoka'
str.replace(/hisa/, 'kazu');
```

デミリタの方にはクォーテーションいらないから!!!!1

### Check dom elemnt exist
- [jQuery - selectorの存在確認に便利な`$(selector).exists()`を実装しておく - Qiita](http://qiita.com/takoba/items/2c278b2838ab30432a54)
-  [[JS][jQuery] 要素の存在を確認する6通りのコードと実行速度 | きほんのき](http://kihon-no-ki.com/check-existence-element-by-javascript-and-jquery)

html要素が存在しているかどうかを調べる方法.
`.length`を使うといいらしいです.
存在してる数が返り値.

```js
if ( $('selector').length > 0 ){
  console.log( 'selector is exist!' );
}
```


### Input Selector in jquery

- [Bugle Diary: [jQuery]inputのname属性にアクセス](http://temping-amagramer.blogspot.jp/2011/08/jqueryinputname.html)

```js
$('input[name=commit]');
```

### javascriptの記録


- idでeventをかけるとき,同じidが複数あるときは最初の1つだけしか反応しない
- classやdata*でfireするときは, 複数の場合でもすべて発火する


ボタンで何かfireしたいときは`data*`でやったほうがいいかもしれない.

```html
<!-- button -->
<button data-card-more>MORE</button>
```
```javascript
$('[data-card-more]').click(function () {
    console.log( this );
});
// response
// <button data-card.....
```


### drawer lib

- [Pure Drawer](http://mac81.github.io/pure-drawer/)
- [Responsive left · Drawer · A small CSS3 and jQuery plugin for app style drawer menu.](http://git.blivesta.com/drawer/responsive-left/)
- [Slidebars](http://plugins.adchsm.me/slidebars/index.php#download)
- [Sidr - A jQuery plugin for creating side menus](http://www.berriart.com/sidr/#download)
- [Bouncy Material Design navigation drawer in CSS](http://materialdesignblog.com/bouncy-material-design-navigation-drawer-in-css/)

