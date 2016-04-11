var gulp = require('gulp'),
    gutil = require('gulp-util')
    concat = require('gulp-concat')
    sourcemaps = require('gulp-sourcemaps')
    uglify = require('gulp-uglify')
    var merge = require('merge-stream');


//gulp tasks entrypoint
 gulp.task('default',['watch']);

//Gulp watch task for all changes in src code
 gulp.task('watch',function(){
   gulp.watch(['app/src/assets/libs/**/*'],['build-lib']);
   gulp.watch(['app/src/component/**/*','app/src/app.module.js','app/src/index.html'],['code-build']);	
});

//Gulp task to copy all minified libs in src to distribution
gulp.task('build-lib', function(){
	return gulp.src(['app/src/assets/libs/**/*.min.js','app/src/assets/libs/**/*.min.css'])
			.pipe(gulp.dest('app/dist/assets/libs/'));
}); 

gulp.task ('code-build',function(){
	var module = gulp.src('app/src/*.module.js')
	   .pipe(sourcemaps.init())
		.pipe(concat('app.module.js'))
	      //only uglify if gulp is ran with '--type production'
	      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist/'));

	var controller = gulp.src('app/src/component/**/*.controller.js')
	   .pipe(sourcemaps.init())
		.pipe(concat('app.controllers.js'))
	      //only uglify if gulp is ran with '--type production'
	      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist/'));

	var service = gulp.src('app/src/component/**/*.service.js')
	   .pipe(sourcemaps.init())
		.pipe(concat('app.services.js'))
	      //only uglify if gulp is ran with '--type production'
	    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist/'));	

	var index = gulp.src('app/src/index.html')
		.pipe(concat('index.html'))
	      //only uglify if gulp is ran with '--type production'
	    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
		.pipe(gulp.dest('app/dist/'));	
	
	return merge(controller,module,service,index);	
}); 