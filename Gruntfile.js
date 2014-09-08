module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    acetate: {
      build: {
        config: 'acetate.conf.js'
      },
      dev: {
        config: 'acetate.conf.js',
        options: {
          server: true,
          watch: true,
          keepalive: true
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
    },
    'gh-pages': {
      options: {
        base: 'build',
        repo: 'https://github.com/patrickarlt/acetate.git'
      },
      src: ['**']
    }
  });

  grunt.registerTask('default', ['acetate:dev']);
  grunt.registerTask('deploy', ['acetate:build', 'gh-pages']);
};