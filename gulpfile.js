const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

async function buildStyles() {
  // Take source file and 'pipe' it into the SASS compiler
  return src('milo/**/*.scss')
    .pipe(sass())
    // Compile and output the file to the 'css' folder
    .pipe(dest('css'))
}

async function watchTask() {
  // Pass in an array of files to watch with the watch function, and pass in second argument with function to run when we make changes
  watch(['milo/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);