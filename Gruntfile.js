/*
 * grunt-wp2md
 * https://github.com/hariadi/grunt-wp2md
 *
 * Copyright (c) 2013 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp/**'],
    },

    // Configuration to be run (and then tested).
    wp2md: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options/': ['test/fixtures/*.xml']
        },
      },
      custom_options: {
        options: {
          format: '',
          posts: 'src/_posts',
          drafts: 'src/_drafts',
          pages: 'src/pages'
        },
        files: {
          'tmp/custom_options/': ['test/fixtures/*.xml']
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'wp2md', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
