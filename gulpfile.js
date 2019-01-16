var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpSequence = require('gulp-sequence')
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var svgmin = require('gulp-svgmin');


var paths = {
    sass: ['./scss/**/*.scss'],
    templatecache: ['www/templates/**/*.html','./www/templates/**/*.svg'],
    ng_annotate: ['www/js/**/*.js'],
    useref: ['./www/*.html'],
    svg: ['./www/img/**/*.svg','/www/templates/**/*.svg']
};

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('templatecache', function (done) {
	console.log("Task templatecache");
    gulp.src('./www/templates/**/*.*')
      .pipe(templateCache({standalone:true}))
      .pipe(gulp.dest('./www/js'))
      .on('end', done);
});

gulp.task('ng_annotate', function (done) {
	console.log("Task ng_annotate");
    gulp.src('./www/js/**/*.js')
      .pipe(ngAnnotate({single_quotes: true}))
      .pipe(gulp.dest('./www/dist/dist_js/app'))
      .on('end', done);
});

gulp.task('useref', function (done) {
	console.log("Task useref");
  //  var assets = useref.assets();
    gulp.src('./www/*.html')
//     .pipe(assets)
//     .pipe(assets.restore())
      .pipe(useref())
      .pipe(gulp.dest('./www/dist'))
      .on('end', done);
  });

gulp.task('svg', function () {
	console.log("Task svg");
    return gulp.src('./www/img/**/*.svg')
        .pipe(svgmin(function getOptions (file) {
            if((file.stat.mode & 146) == 0) {
                file.stat.mode = file.stat.mode | 146;
            }
            return {
                plugins: [{
                    cleanupIDs: {
                        minify: true
                    }
                }]
            }
        }))
        //.pipe(svgstore())
        .pipe(gulp.dest('./www/dist/img'));
});

gulp.task('default', gulpSequence('templatecache',['sass', 'ng_annotate', 'useref', 'svg']));
//gulp.task('default', ['sass', 'templatecache', 'ng_annotate']);

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.templatecache, ['templatecache','svg']);
    gulp.watch(paths.ng_annotate, ['ng_annotate']);
    gulp.watch(paths.useref, ['useref','templatecache']);
	gulp.watch(paths.svg, ['svg']);
});
    // gulp.watch(paths.sass, ['sass']);
    // gulp.watch(paths.templatecache, ['templatecache','svg']);
    // gulp.watch(paths.ng_annotate, ['ng_annotate']);
    // gulp.watch(paths.useref, ['useref','templatecache']);
	// gulp.watch(paths.svg, ['svg']);