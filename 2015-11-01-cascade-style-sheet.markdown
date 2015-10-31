title: cascade style sheet
==========
date: 2015-11-01 00:22
tags: []
categories: []
- - -

### Position Fixed

position: fixedを使う場合は下の要素はmarginじゃなくてpaddingでづらそう.
そうしないとﾀﾞﾒみたい...

### Word Wrap
- [スタイルシート［CSS］/テキスト・フォント/長い英単語の折り返しを指定する - TAG index Webサイト](http://www.tagindex.com/stylesheet/text_font/word_wrap.html)

テキスト折り返しについて

```css
p {
  /* 単語とか関係なく折り返し*/
  word-wrap: break-word;
}
```

### Img size affect div size
たとえば,500x500の画像を無理やり100x100で表示しようとする.
その場合, デフォルトなら500x500のスペースとり,画像は右端に合わせて100x100で表示される.
__よって,左側に良くわからない余白ができる(developer toolで見ても分からない!!!!)__

### if longer title, over characters is hidden.

- [HTML - CSSだけで幅を超えた文字列を...で省略する - Qiita](http://qiita.com/ichikawa_0829/items/e0c364e74b5e22a7bc0d)
- [white-space－スタイルシートリファレンス](http://www.htmq.com/style/white-space.shtml)

```css
.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip; /* 余分な文字はきる*/
  text-overflow: ellipsis; /*...で表示*/
}
```

ちょっと困ったことがある.
`vertical-align`をしていしてるとﾃﾝﾃﾝﾃﾝには効かないので悲しくなる.

### css media queries

- [CSS3 Media Queries を使って、Webサイトをスマートフォンに対応させるときの注意書き](http://webdesignrecipes.com/web-design-for-mobile-with-css3-media-queries/)
- [BootstrapとMaterial Design Liteの違いを徹底検証！各ポイント10個まとめ - PhotoshopVIP](http://photoshopvip.net/archives/79897)

