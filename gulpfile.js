const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');
const browserSync = require('browser-sync');
const del = require('del');

const server = browserSync.create();
const clean = () => del(['assets/production']);

const dirs = {
	src: 'assets/development',
	dest: 'assets/production'
};

const sources = {
	styles: `${dirs.src}/styles/**/*.scss`,
	scripts: `${dirs.src}/scripts/*.js`
};

function styles() {
	return gulp.src(`${dirs.src}/styles/style.scss`)
		.pipe(sass())
		.pipe(cleancss())
		.pipe(gulp.dest(`${dirs.dest}/styles/`));
}

function scripts() {
	return gulp.src(sources.scripts)
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest(`${dirs.dest}/scripts/`));
}

function reload(done) {
	server.reload();
	done();
}

function serve(done) {
	server.init({
		server: {
			baseDir: './'
		}
	});
	done();
}

const watch = () => {
	gulp.watch(sources.styles, gulp.series(styles, reload));
	gulp.watch(sources.scripts, gulp.series(scripts, reload));
};

const dev = gulp.series(clean, gulp.parallel(styles, scripts), serve, watch);

exports.default = dev;