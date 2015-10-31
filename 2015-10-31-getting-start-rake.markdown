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



