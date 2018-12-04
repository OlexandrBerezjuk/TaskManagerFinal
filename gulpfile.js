const gulp=require('gulp');
const image=require('gulp-image'); //подключаем модуль gulp-image
const connect =require('gulp-connect');
const plumber =require('gulp-plumber');
const notify =require('gulp-notify');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const concatCss = require('gulp-concat-css');
	


	

	//пишем таску для gulp-image
	gulp.task('imageGulp', function() {
		gulp.src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/**/*.jpeg'])     //ищем в корневой папке любой файл jpg
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	 	.pipe(image())
		.pipe(gulp.dest('./dest/img'))  //рез-т отработки taska вкинте в наново созданную папку dest
		.pipe(connect.reload())
	})

	gulp.task('minify', () => {
		return gulp.src(['./src/*.html'])
			.pipe(htmlmin({ collapseWhitespace: true }))
			.pipe(gulp.dest('./dest'))
			.pipe(connect.reload())
		});

	
	gulp.task('css', function () {
	return gulp.src(['./src/style/**/*.css'])
		.pipe(concatCss("main.css"))
		.pipe(gulp.dest('./dest/style'))
		.pipe(connect.reload())
	});


	gulp.task('babel', () =>
	gulp.src(['./src/includes/*.js'])
		.pipe(babel({"presets": ["@babel/preset-env"]}))
		.pipe(gulp.dest('./dest/includes'))
		.pipe(connect.reload())
	);

	gulp.task('watch', function() {
		gulp.watch('src/**/*.html', {cwd:'./'}, ['minify'])
		gulp.watch(['src/style/**/*.css'], {cwd:'./'}, ['css'])
		gulp.watch(['src/includes/*.js'], {cwd:'./'}, ['babel'])
		gulp.watch(['./src/img**/*.jpg', './src/img/**/*.png', './src/img/**/*.jpeg'], ['imageGulp'])
	})

	gulp.task('connect', function() {
		connect.server({
			port: 9000,
			livereload: true,
			root: './dest'
		})
	})

	gulp.task('default', ['minify','css','babel','watch', 'imageGulp', 'connect'])




