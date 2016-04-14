var gulp = require('gulp'),
    gutil = require('gulp-util')
    concat = require('gulp-concat')
    sourcemaps = require('gulp-sourcemaps')
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    merge = require('merge-stream');


//gulp tasks entrypoint
 gulp.task('default',['watch']);

//Gulp watch task for all changes in src code
 gulp.task('watch',['build-lib'],function(){
   gulp.watch(['app/src/component/**/*','app/src/app.module.js','app/src/index.html'],['code-build']);	
   gulp.watch('app/src/assets/scss/**/*.scss', ['build-css']);
   gulp.watch('app/src/shared/*', ['share-component-build']);
   gulp.watch(['app/src/assets/js/*.*'],['build-js']);
   gulp.watch(['app/src/assets/img/**/*'],['build-img']);

});

//Gulp task to copy all minified libs in src to distribution
gulp.task('build-lib', function(){
	return gulp.src(['app/src/assets/libs/**/*.min.js','app/src/assets/libs/**/*.min.css'])
			.pipe(gulp.dest('app/dist/assets/libs/'));
}); 

//Minify, concate all Controllers and models in one File.
//Put all HTML file in distribution directory
gulp.task ('code-build',function(){
	var module = gulp.src('app/src/*.module.js')
	   .pipe(sourcemaps.init())
		.pipe(concat('app.module.js'))
	    .pipe(uglify()) 
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist/'));

	var controller = gulp.src('app/src/component/**/*.controller.js')
	   .pipe(sourcemaps.init())
		.pipe(concat('app.controllers.js'))
	    .pipe(uglify()) 
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist/'));

	var service = gulp.src('app/src/component/**/*.service.js')
	   .pipe(sourcemaps.init())
		.pipe(concat('app.services.js'))
	    .pipe(uglify()) 
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist/'));	

	var index = gulp.src('app/src/index.html')
		.pipe(concat('index.html'))
	    .pipe(gulp.dest('app/dist/'));

	var component_files = gulp.src('app/src/component/**/*.html')
	    .pipe(gulp.dest('app/dist/component/'));  	
	
	return merge(controller,module,service,index,component_files);	
});

gulp.task ('share-component-build',function(){
	return gulp.src('app/src/shared/**/*')
	   .pipe(sourcemaps.init())
	   .pipe(uglify()) 
	   .pipe(sourcemaps.write())
	   .pipe(gulp.dest('app/dist/shared/'));
});
//Compiling SASS file to css, Miniinify, concat and ready for distr
gulp.task('build-css', function() {
  return gulp.src('app/src/assets/scss/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
      .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('app/dist/assets/css/'));
});
// Miniinify, concat all JS and ready for distr
gulp.task('build-js',function(){
	return gulp.src('app/src/assets/js/*.js')
	   .pipe(sourcemaps.init())
		//.pipe(concat('main.js'))
	    .pipe(uglify()) 
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist/assets/js/'));
});
//Get all images and put them to dist
gulp.task('build-img',function(){
	return gulp.src('app/src/assets/img/*.*')
	    .pipe(gulp.dest('app/dist/assets/img/'));
});
