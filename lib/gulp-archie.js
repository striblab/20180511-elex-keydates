const gulp = require('gulp');
const archiePipe = require('archieml-pipe').default;
const gulpPublish = require('./gulp-publish');
const ejs = require('gulp-ejs');
const _ = require('lodash');

let c = gulpPublish.getConfig();

const config = {
  googleDocId: c.archie.googleDocId,
  googleClientId: c.archie.googleClientId, // required
  googleClientSecret: c.archie.googleClientSecret, // required
  redirectPort: c.archie.redirectPort, // defaults to 6006
  exportPath: c.archie.exportPath, // defaults to ./data.json
  tokenPath: c.archie.tokenPath // defaults to ./archie-token.json
};

gulp.task('archie', (cb) => {
    archiePipe(config);
    cb();
});

// gulp.task('ejs', function() {
//   return gulp.src('pages/*.ejs.html')
//     .pipe(ejs(
//       { media: 'sources/archie.json' },
//       { ext:'.html',
//         package: pkg, _: _  }))
//     .on('error', gutil.log)
//     .pipe(gulp.dest('build/'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });
