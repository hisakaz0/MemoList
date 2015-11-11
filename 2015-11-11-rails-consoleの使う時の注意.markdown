title: rails consoleの使う時の注意
==========
date: 2015-11-11 18:46
tags: []
categories: []
- - -

### rake db:*を全て終わらせてからrails sなりrails cなりする

例えば
1. `rails c` or `rails s`
2. `rake db:drop && rake db:migrate && rake db:seed`
3. another one
と打ったとき,

consoleとserverで見ているdbが異なる?ってﾜｹじゃないと思うけど,
ｱﾚ?ってなるから

1. `rake db:drop && rake db:migrate && rake db:seed`
2. `rails c` or `rails s`
3. another one

ってしましょう.
