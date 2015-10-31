title: node version manager
==========
date: 2015-11-01 00:39
tags: []
categories: []
- - -

### node.jsはnvm(node version manager)からinstall

official web site
> [creationix/nvm](https://github.com/creationix/nvm)

__install__
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
```

__activate__
```bash
# A run command file is .profile, if mac
echo "source. ~/.nvm/nvm.sh" >> ~/.bashrc
source ~/.bashrc
```

__install__
```bash
nvm ls-remote # show installable node.js versions
  .
  ..
  ...
  v0.11.11
  v0.11.12
  v0.11.13
  v0.11.14
  ...
  ..
  .
# install ,then 'v' charector of version is not neccesarry.
nvm install <version> # 0.11.14
```

__Let's use node!!!__
```bash
# In linux default, you can use node.js installed with system(apt-get)
# if you type `nodejs`
nodejs # which node -> /usr/bin/nodejs
# you type 'node' if you use node installed by nvm
node #  which node -> /home/you/.nvm/versions/v0.12.7/bin/node
```

- [Debian/UbuntuでNode.jsをインストールする(nvm) - Qiita](http://qiita.com/tamurashingo@github/items/6348863668e1e3fd70c9)

