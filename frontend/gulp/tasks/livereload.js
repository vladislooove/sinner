import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from '../paths';

gulp.task('browser-sync', () => {
	return browserSync({
		files: [
            `${paths.app}/css/**/*.css`
		],
		server: paths.app
	});
});