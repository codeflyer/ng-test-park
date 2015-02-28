/*jshint camelcase: false */
module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      // Configurable paths
      app: 'src',
      dist: 'dist'
    },
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'dist/{,*/}*',
            '!dist/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          keepalive: true,
          open: true,
          base: [
            '.',
            '<%= config.app %>'
          ]
        }
      },
      protractor: {
        options: {
          base: [
            '.',
            '<%= config.app %>'
          ]
        }
      },
      test: {
        options: {
          keepalive: false,
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                  '/bower_components',
                  connect.static('./bower_components')
              ),
              connect.static('<%= config.app %>')
            ];
          }
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true
      },
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    jscs: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },
    plato: {
      options: {
        jshint: grunt.file.readJSON('.jshintrc')
      },
      main: {
        files: {
          'reports/plato/': ['src/**/*.js']
        }
      }
    },
    watch: {
      js: {
        files: ['test', 'sample/**/*', '<%= config.app %>/**/*.js'],
        tasks: ['jscs', 'jshint'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },
    protractor: {
      options: {
        keepAlive: true,
        configFile: 'test/protractor.conf.js'
      },
      run: {}
    }
  });

  grunt.registerTask('default', ['jshint', 'jscs']);

  grunt.registerTask('test', [
    'clean:server',
    'connect:protractor',
    'connect:test',
    'protractor:run'
  ]);
};
