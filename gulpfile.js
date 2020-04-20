var gulp = require('gulp');
var javascriptObfuscator = require('gulp-javascript-obfuscator');
var transfer = require('multi-stage-sourcemap').transfer;
const del = require('del');
const fs = require('fs');
const path = require('path');

gulp.task('obfuscate', function () {
  return gulp
    .src(['dist/webapp/*.js', '!dist/webapp/vendor.*.js', '!dist/webapp/polyfills.*.js'])
    .pipe(
      javascriptObfuscator({
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: true,
        debugProtectionInterval: true,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        rotateStringArray: false,
        selfDefending: false,
        stringArray: false,
        sourceMap: false,
        unicodeEscapeSequence: false
      })
    )
    .pipe(gulp.dest('dist-obfs'));
});

gulp.task('combine-sourcemaps', function (done) {
  const folder1 = './dist/webapp';
  const folder2 = './dist-obfs';
  fs.readdirSync(folder1).forEach(file1 => {
    fs.readdirSync(folder2).forEach(file2 => {
      if (file1 === file2 && file1.endsWith('.map')) {
        let bMap = JSON.parse(
          fs.readFileSync(path.join(folder1, file1), 'utf8')
        );
        let cMap = JSON.parse(
          fs.readFileSync(path.join(folder2, file2), 'utf8')
        );
        var cToAMap = transfer({
          fromSourceMap: cMap,
          toSourceMap: bMap
        });
        fs.writeFileSync(path.join(folder1, file1), cToAMap);
      }
      if (file1 === file2 && file1.endsWith('.js')) {
        fs.renameSync(path.join(folder2, file2), path.join(folder1, file1));
      }
    });
  });
  done();
});

gulp.task('delete-sourcemaps', function () {
  return del(['dist/*.map', 'dist-obfs']);
});

//gulp.task('default', ['obfuscate', 'combine-sourcemaps']);

gulp.task('default', gulp.series('obfuscate', 'combine-sourcemaps', 'delete-sourcemaps'));
