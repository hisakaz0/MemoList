
require 'rake'

desc 'Get memo files from github'
task :pull do
  Rake::Task[:fetch]
  puts 'Getting memo files from remote'
  system 'git pull origin master'
end

desc 'Push memo files to github'
task :push do
  Rake::Task[:fetch]
  Rake::Task[:pull]
  msg = "#{Time.now}"
  puts 'Adding memo files.'
  system 'git add . '
  puts 'Migrating files to staging.'
  system "git commit -m #{msg}"
  puts 'Pushing files to remote.'
  system 'git push origin master'
end

desc 'Fetch changes from remote.'
task :fetch do
  puts 'Fetching changes from remote.'
  system 'git fetch'
end

