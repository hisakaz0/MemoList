title: material design lite
==========
date: 2015-11-01 00:25
tags: []
categories: []
- - -

### Use Mdl with turbolinks

Turbolinksを有効にして,mdlを使う方法.
```javascript
// Material load
$(document).on('ready page:load', function (){
  if ('classList' in document.createElement('div') &&
      'querySelector' in document &&
      'addEventListener' in window && Array.prototype.forEach) {
    document.documentElement.classList.add('mdl-js');
    componentHandler.upgradeAllRegistered();
  } else {
    componentHandler.upgradeElement = function() {};
    componentHandler.register = function() {};
  }
});
```

### material design icons

material design iconsの使い方が乗っています.

- [material-design-icons/sprites at master · google/material-design-icons](https://github.com/google/material-design-icons/tree/master/sprites)

### rails with MDL development log

__app install__
```bash
rails new mdl --skip-bundle
```

__Gemfile(add this line)__
```ruby
gem 'bower-rails'
```

__setup mdl lib__
```bash
rails g bower_rails:initialize json
```

__bower.json(only this)__
```json
{
  "vendor": {
    "name": "bower-rails generated vendor assets",
    "dependencies": {
      "material-design-lite": "~1.0.4"
    }
  }
}
```
__install mdl from bower__
```bash
rake bower:install
```

__layouts/application.html.erb(add)__
```html
<!-- it's magic words -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- material design lite-->
<link rel="stylesheet" href="./material.min.css">
<script src="./material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

### material design instead of POLYMER
polymerなんて使うべきじゃなかった.
あれはframeworkだよ.闇..ただそれだけ.

その代わり material design を使おう!!!!!!!
drawerの解決に繋がりそうです.
- [Material Design Lite](http://www.getmdl.io/components/index.html)


__Material Design Color__
- [Color - Style - Google design guidelines](https://www.google.com/design/spec/style/color.html#color-color-palette)
- [Material Design Liteの文字色・背景色変更用class名と色の見本帳 | 岡山のWebプログラマー改め企画担当がつぶやくブログ](http://blog2.gods.holy.jp/?eid=196)

> [引用]Webページでよく使うさまざまなコンポーネントが簡単に利用できるCSSベースのフレームワーク -Materialize

- [Webページでよく使うさまざまなコンポーネントが簡単に利用できるCSSベースのフレームワーク -Materialize | コリス](http://coliss.com/articles/build-websites/operation/css/css-framework-materialize.html)


material design icons set
- [Material icons - Google Design](https://www.google.com/design/icons/)

github page
- [google/material-design-icons](https://github.com/google/material-design-icons)

bootstrap-material-designなんてあるけれども,純正を使うことにます(2015/09/29).


