 import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import paths from '../paths';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import notifier from 'node-notifier';
import gaze from 'gaze';
import save from 'gulp-save';

gulp.task('scripts:watch', () => {
    return gaze([`${paths.src.js}/bundle.js`], function (event, filepath) {
        // On changed/added/deleted 
        this.on('all', (event, filepath) => {
            gulp.start('scripts:build');
        });
    });
});


gulp.task('scripts:build',  () => {
    return gulp.src([
        `${paths.src.js}/libs/*.js`,
        `${paths.src.js}/bundle.js`])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(save('before-uglify'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(save.restore('before-uglify')) //restore all files to the state when we cached them
        .pipe(gulp.dest(paths.dist.js));
});


gulp.task('scripts:default', ['scripts:build', 'scripts:watch']);
