// Gulpfile.js addons for newsletter

// npm install --save gulp-replace gulp-inline-css
// add  'styles_newsletter' 
// at line 146 

 //gulp.watch(['app/styles/**/*.scss'], [
 //   'styles'
 // ]);

// 
//  add line 111
//  .pipe(gulp.dest('newsletter/images/')) 



var replace = require('gulp-replace');
var inlineCss = require('gulp-inline-css');

gulp.task('styles_newsletter', function() {
  gulp.src('app/styles/newsletter.scss')
  //  .pipe(sourcemaps.init())
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  // .pipe(sourcemaps.write('./maps'))
  // Optionally add autoprefixer
  .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
  // These last two should look familiar now :)
  .pipe(gulp.dest('dist/css/'));
});

gulp.task('newsletter', function() {
    return gulp.src('dist/newsletter.html')

        .pipe(inlineCss({
              applyStyleTags: true,
              applyLinkTags: true,
              removeStyleTags: true,
              removeLinkTags: true
        }))
        .pipe(replace('./images/', 'http://myserver.com/newslettersimages/'))
        .pipe(gulp.dest('newsletter/'));
});


// readmore @ http://loige.co/gulp-and-ftp-update-a-website-on-the-fly/