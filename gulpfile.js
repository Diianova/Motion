var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var gcmq = require('gulp-group-css-media-queries');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var config = {
	src: './src/',
	html: {
		src: '*.html'
	},
	css: {
		watch: 'precss/**/*.scss',
		src: 'precss/styles.scss',
		dest: 'css'
	}
};

gulp.task('preproc', function(){
	gulp.src(config.src + config.css.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(gcmq())
		.pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.src + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch(config.src + config.css.watch, ['preproc']);
	gulp.watch(config.src + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});
