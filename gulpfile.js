var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your html here.");
});

gulp.task('styles', function() {
  console.log("Imagine SASS or Postcss tasks running here.");
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles')
  });
});
