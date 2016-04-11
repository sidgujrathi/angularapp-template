var gulp = require('gulp'),
    gutil = require('gulp-util');

//gulp tasks entrypoint
 gulp.task('default',['watch']);

//Gulp watch task for all changes in src code
 gulp.task('watch',function(){
   gulp.watch(['app/src/assets/libs/**/*'],['build-lib']);	
});

//Gulp task to copy all minified libs in src to distribution
gulp.task('build-lib', function(){
	return gulp.src(['app/src/assets/libs/**/*.min.js','app/src/assets/libs/**/*.min.css'])
			.pipe(gulp.dest('app/dist/assets/libs/'));
});   