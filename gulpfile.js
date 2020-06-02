const { src, dest } = require('gulp')
const minify = require('gulp-minify')
const babel = require('gulp-babel')

exports.default = function () {
  return src('src/*.js')
    .pipe(babel())
    .pipe(minify())
    .pipe(dest('dist/'))
}