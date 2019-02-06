const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');
const browserSync = require('browser-sync');
const del = require('del');
const webp = require('gulp-webp');

const server = browserSync.create();

const dirs = {
	src: 'assets/development',
	dest: 'assets/production'
};

const src = {
	styles: `${dirs.src}/styles/**/*.scss`,
	scripts: `${dirs.src}/scripts/*.js`,
	images: `${dirs.src}/images/*.{png,jpg}`,
	fonts: `${dirs.src}/fonts/*.**`
};

const dest = {
	styles: `${dirs.dest}/styles/`,
	scripts: `${dirs.dest}/scripts/`,
	images: `${dirs.dest}/images/`,
	fonts: `${dirs.dest}/fonts/`
}

function clean() {
	return del([dirs.dest]);
}

function styles() {
	return gulp.src(`${dirs.src}/styles/style.scss`)
		.pipe(sass.sync())
		.pipe(cleancss())
		.pipe(gulp.dest(dest.styles));
}

function scripts() {
	return gulp.src(src.scripts)
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest(dest.scripts));
}

function images() {
	return gulp.src(src.images)
		.pipe(webp())
		.pipe(gulp.dest(dest.images));
}

function fonts() {
	return gulp.src(src.fonts)
		.pipe(gulp.dest(dest.fonts));	
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

function watch() {
	gulp.watch(src.styles, gulp.series(styles, reload));
	gulp.watch(src.scripts, gulp.series(scripts, reload));
}

const dev = gulp.series(clean, gulp.parallel(styles, scripts, images, fonts), serve, watch);
const prod = gulp.series(clean, gulp.parallel(styles, scripts, images, fonts));

exports.default = dev;
exports.prod = prod;