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
          watch: true,
          server: true
        }
      }
    },
    watch: {
      sass: {
        files: ['src/assets/sass/**/*'],
        tasks: ['sass'],
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/assets/css/main.css': 'src/assets/sass/main.scss'
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'build',
        repo: 'https://github.com/patrickarlt/acetate.git'
      },
      src: ['**']
    }
  });

  grunt.registerTask('default', ['sass', 'acetate:watch', 'watch']);
  grunt.registerTask('deploy', ['acetate:build', 'sass', 'gh-pages']);
};