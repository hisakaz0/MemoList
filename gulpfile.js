
var gulp  = require('gulp'),
    // util  = require('gulp-util'),
    shell = require('gulp-shell');


gulp.task('push', function () {
  return gulp.src('*.markdown')
    .pipe(shell([
      'git add .',
      'git commit -m "memo upload"',
      'git push origin master'
    ]))
});


gulp.task('watch', function () {
  gulp.watch('*.markdown', ['push']);
});


gulp.task('default', ['watch']);
