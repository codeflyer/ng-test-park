var path = require('path');
var gulp = require('gulp');
var connect = require('gulp-connect');
var protractor = require('gulp-protractor').protractor;
var runSequence = require('gulp-run-sequence');
var karma = require('karma').server;

var package = require('./package.json');

var config = {
  app: 'src',
  dist: 'dist'
};

gulp.task('connect', function() {
  return connect.server({
    port: 9000,
    hostname: 'localhost',
    root: [
      __dirname,
      config.app
    ]
  });
});

gulp.task('disconnect', function() {
  connect.serverClose();
});

gulp.task('e2e', function() {
  var params = process.argv.slice(2);
  console.log(params);
  var filter = '';
  if (params[1] === '-t') {
    filter = params[2];
  }

  console.log(path.join('src', filter) + '/**/*.specE2E.js');
  return gulp.src([path.join('src', filter) + '/**/*.specE2E.js'])
      .pipe(protractor({
        configFile: 'test/protractor.conf.js'
      }))
      .on('error', function(e) {
        throw e;
      });
});

gulp.task('test', function(cb) {
  return runSequence('connect', 'e2e', 'disconnect', cb);
});

gulp.task('unittest', function(done) {
  var params = process.argv.slice(2);
  var filter = '';
  if (params[1] === '-t') {
    filter = params[2];
  }
  karma.start({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true,
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-mocks/angular-mocks.js',
      path.join('src', filter) + '/**/scripts.js',
      path.join('src', filter) + '/**/*.spec.js'
    ]
  }, done);
});
