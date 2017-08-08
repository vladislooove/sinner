import gulp from 'gulp';
import gulpif from 'gulp-if';
import svgSymbols from 'gulp-svg-symbols';
import gutil from 'gulp-util';
import gaze from 'gaze';
import paths from '../paths'

gulp.task('sprite-svg:create', () => {
    const templates = [
        'default-svg',
        `${paths.src.stylus}/templates/svg-symbols.styl`,
        'default-demo'
    ];

    return gulp.src(`${paths.src.iconsSVG}/**/*.svg`)
        .pipe(svgSymbols({
            className: '.icon_%f',
            templates: templates
        }))
        .pipe(gulpif(/[.]svg$/, gulp.dest(paths.dist.images)))
        .pipe(gulpif( /[.]styl$/, gulp.dest(`${paths.src.stylus}/icons/`)))
});

gulp.task('sprite-svg:watch', () => {
    return gaze(['src/icons/**/*.svg'], function (event, filepath) {
        // On changed/added/deleted 
        this.on('all', (event, filepath) => {
            gulp.start('sprite-svg:create');
        });
    });
});

gulp.task('sprite-svg:default', ['sprite-svg:create', 'sprite-svg:watch']);