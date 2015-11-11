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


## やって見てるなう

### Download Hubot with runtime libs
```sh
npm install -g hubot coffee-script redis
```
Ahead redis is cliend side redis.
So you need to install redis  for SEVER side.
To install that, you type following.
```sh
sudo apt-get install redis-server
```

Let's start!
```sh
hubot -c wanko
'hubot --create' is deprecated. Use the yeoman generator instead:
  npm install -g yo generator-hubot
  mkdir -p wanko
  cd wanko
  yo hubot
```
`hubot -c` is outdated. It's too old.
So you yoman-generator.

### おまじない
node_modulesにパスが通ってないのかも?
```sh
echo 'export NODE_PATH=$NODE_PATH:./node_modules' >> ~/.bashrc
```

### 通常のhubotを立ち上げる( Heroku test )
```sh
hubot
# hubot promptが立ち上がる
Hubot> hubot ping
Hubot> PONG
Hubot> hubot time
Hubot> Server time is: Wed Nov 11 2015 13:50:41 GMT+0000 (GMT)
Hubot> hubot pug me
Hubot> http://24.media.tumblr.com/tumblr_mc4u6lwZHr1qf4k86o1_500.jpg
```


### Slack Setting

1. Go to Configure Integrations
2. Hubotを選んで設定.
3. `HUBOT_SLACK_TOKEN`はherokuの設定で使うよ.
4. 名前関連はなんでもよい.
5. チャネルを立てて, Hubotのbotを招待する.

### Heroku Setting

### Redis Install

herokuでredisを使う場合はbelling(支払い系の設定が必要(=魔法のｶｰﾄﾞ)
そうしないとredis(add-onを設定することができない.

```sh
# pwd is hubot project
git init
git add -A
git commit -m 'initial commit'
git remote add origin git@github.com:pinkienort/hubot-test.git
git push -u origin master
# Heroku Cli tool install
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
# Heroku Variables Setings
heroku config:set HUBOT_SLACK_TOKEN="slack-integration--hubot--API-Token"
heroku config:set HUBOT_SLACK_BOTNAME="you-like-to-name-for-bot"
heroku config:set HUBOT_HEROKU_KEEPALIVE_URL=$(heroku apps:info -s  | grep web-url | cut -d= -f2)
heroku config:set REDISCLOUD_URL="redis://rediscloud:23kYgAGBwBDDooCq@pub-redis-11232.us-east-1-4.6.ec2.redislabs.com:11232"
```

`HUBOT_SLACK_BOTNAME`はslackでhubotを読みだすときの名前.


ここまでsettingが終わったら,
herukuで設定した`HUBOT_SLACK_BOTNAME`(ここではRuriを使って,
```sh
Ruri time
Server time is: Wed Nov 11 2015 15:33:15 GMT+0000 (UTC)
```
ってやってあげると返事してくれる.


### さんこうぶんけんっ!!!
- [slackにHubotを導入(Heroku経由) - Qiita](http://qiita.com/Katsumata_RYO/items/dc4543aa5827d4c3211c)
- [Slack / Hubot / GitHub / CircleCI によるChatOpsなデプロイ方法 - Qiita](http://qiita.com/s-kiriki/items/26bdf537169891b22653)
- [Node.js - node-redisを入れてみるメモ - Qiita](http://qiita.com/toshirot/items/63de388bf40cff40a096)
- [Hubotとchatworkを連携させてみる](https://monolog.linkode.co.jp/articles/kotoh/Hubot%E3%81%A8chatwork%E3%82%92%E9%80%A3%E6%90%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%BF%E3%82%8B)
