'use strict';
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/css/main.min.css': [
            'assets/less/main.less'
          ]
        }
      },
      dev: {
        options: {
          compile: true,
          compress: false
        },
        files: {
          'assets/css/main.css': [
            'assets/less/main.less'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
    watch: {
      less: {
        files: [
          'assets/less/*.less',
          'assets/less/bootstrap/*.less'
        ],
        tasks: ['recess']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint','uglify']
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'recess',
    'uglify',
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};