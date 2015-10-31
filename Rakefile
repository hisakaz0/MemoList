
require 'rake'
require 'colorize'

desc 'Get memo files from github'
task :pull do
  Rake::Task[:fetch].invoke()
  puts "Getting files from remote".green
  system 'git pull origin master'
end

desc 'Push memo files to github'
task :push do
  msg = "#{Time.now}"
  puts 'Adding memo files'.green
  system 'git add . '
  puts 'Staging memo files'.green
  system "git commit -m '#{msg}'"
  puts 'Pushing to remote'.green
  system 'git push origin master'
end

desc 'Fetch changes from remote.'
task :fetch do
  puts 'Get changes from remote'.green
  system 'git fetch'
end

