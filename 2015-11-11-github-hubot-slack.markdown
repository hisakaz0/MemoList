title: github hubot slackでissue comment controll
==========
date: 2015-11-11 16:48
tags: []
categories: []
- - -

## 問題(かもかも?)
github, slackを使って開発をしている.
両方のﾂｰﾙは非常に便利かも, だがしかし!!! もうちょいほちいぃ｣｣

### ｲｼｭｰのｺﾒﾝﾄ系の問題
* ｲｼｭｰのｺﾒﾝﾄはｳｪﾌﾞﾌﾞﾗｳｻﾞで行うしかない.
  - web browser is 重い
  - ｲｼｭｰの通知はemail(えっ!古すぎ!?)
  - slackで通知して欲しい
  - slackからｺﾒﾝﾄしてgithubと同期したい

つまり, __slackからｷﾞｯﾊﾟﾌﾞのｺﾒﾝﾄを操作したい!!!!)__ です.
正確には, issueのｺﾒﾝﾄを操作したいんじゃぁああああ.

### 考えた機構
1. slackからissueを作る.
2. issueが出来たら, slackにissueのﾁｬﾈﾙが立ち上がる.
3. slackのissue内でｺﾒﾝﾄがgithubに同期される.
4. slackからissueを閉じれる.
5. issueが閉じられるとslackのissueﾁｬﾈﾙが閉じられる.

これだけ. ﾃﾞﾌﾟﾛｲ系はしばし待て.

