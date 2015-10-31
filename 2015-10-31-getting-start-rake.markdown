title: getting start rake
==========
date: 2015-10-31 23:31
tags: [ruby rake]
categories: []
- - -

## Install
```bash
bundle init
# install gemfile frame
vi Gemfile
# define you want to use gems
bundle install
# install gems
```

### いいジャム
- colorize

## Rakefile
```ruby
desc 'タスクの説明'
task :sample do
  puts 'This is sample task'
end
```

### システムコマンド呼び出す

```ruby
system 'echo $HOME'
# 実行するコマンドは表示されない
sh 'echo $HOME'
# 実行するコマンドが表示される
```

### あるタスクから内部タスクを呼び出す
```bash
desc 'this is sample task'
task :sample do
  Rake::Task[:name]
end

desc 'show your name'
task :name do
  puts 'Im hisakazu~'
end
```

- [Ruby - rakeタスク内で別のタスクを呼び出す - Qiita](http://qiita.com/paty-fakename/items/5df189681c92ce1e8004) 
- [ファイルを扱う作業をRakeで便利にしよう！（パート2：実践編1） - るびくる＆RBのRubyプログラミング大作戦！ - rubicle.net](http://rubicle.net/rubicle_talk_1-2.html)
- [colors - Colorized Ruby output - Stack Overflow](http://stackoverflow.com/questions/1489183/colorized-ruby-output)
- [Ruby - Rakeのshで外部コマンドを実行する - Qiita](http://qiita.com/vzvu3k6k/items/7e6e5520eeb829ec1c8b)

