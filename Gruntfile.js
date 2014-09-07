module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    acetate: {
      build: {
        config: 'acetate.conf.js'
      },
      watch: {
        config: 'acetate.conf.js',
        options: {
          watch: true
        }
      }
    },
    watch: {
      acetate: {
        files: ['src/**/*'],
        tasks: ['acetate:build'],
      }
    },
    concurrent: {
      dev: ['acetate:watch'],
    }
  });

  grunt.registerTask('default', ['acetate:build']);

};