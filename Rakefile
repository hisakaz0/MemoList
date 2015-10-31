
require 'rake'

desc 'Get memo files from github'
task :pull do
  Rake::Task[:fetch].invoke()
  sh 'git pull origin master'
end

desc 'Push memo files to github'
task :push do
  msg = "#{Time.now}"
  sh 'git add . '
  sh "git commit -m '#{msg}'"
  sh 'git push origin master'
end

desc 'Fetch changes from remote.'
task :fetch do
  sh 'git fetch'
end

