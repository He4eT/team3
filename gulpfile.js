var publicPath = './public/';
var staticPath = './static/';


// Include gulp
var gulp = require('gulp'); 

process.env.production = false;

// Include Our Plugins
var less = require('gulp-less');
var rimraf = require('gulp-rimraf'); 
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglifyjs');
var autoprefixer = require('gulp-autoprefixer');

// Jade task
gulp.task('jadeProcessing', function(){
  return gulp.src(staticPath + 'm_*/jade/*.jade')
  .pipe(rename({dirname: ''}))
  .pipe(gulp.dest(publicPath + 'jade'));
});

// Compile Our less
gulp.task('styleProcessing', function() {
    gulp.src(staticPath + 'm_*/less/*.less')
    .pipe(concat('tmp_styles.less'))
    .pipe(gulp.dest(publicPath + 'css'))
    .pipe(less())
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest(publicPath + 'css'))
});

// Js task
gulp.task('scriptProcessing', function() {
    return gulp.src(staticPath + 'm_*/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(publicPath + 'js'))
});

// Move
gulp.task('move',['styleProcessing', 'scriptProcessing'], function(){
  gulp.src(staticPath + 'm_*/img/*')
  .pipe(rename({dirname: ''}))
  .pipe(gulp.dest(publicPath + 'img'));
});

// Clear 
gulp.task('clear', function () {
    return gulp.src(publicPath) // much faster
    .pipe(rimraf());
});

// Default Task
gulp.task('default', ['jadeProcessing', 'styleProcessing', 'scriptProcessing', 'move']);
