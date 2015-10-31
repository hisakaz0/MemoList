title: vagrant rails
==========
date: 2015-11-01 00:14
tags: []
categories: []
- - -

### attention for vagrant user
vagrantの共有フォルダで作業している場合、native extensionが入らないから
共有フォルダ以外を作業ディレクトリにしましょう
[Vagrant環境でのbundle installで失敗する | tamo's blog](https://tamosblog.wordpress.com/2015/02/22/bundle-install_on_vagrant/)

### rails s on vagrant
`-b`を付けないとhost側から見れない( on windows )
```bash
rails s -b 0.0.0.0
```

