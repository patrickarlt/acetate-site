module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'acetate': {
      build: {
        config: 'acetate.conf.js',
      },
      watch: {
        config: 'acetate.conf.js',
        options: {
          watcher: true
        }
      }
    },

    'watch': {
      sass: {
        files: ['src/assets/sass/**/*'],
        tasks: ['sass']
      },
      img: {
        files: ['src/assets/img/**/*'],
        tasks: ['newer:imagemin']
      }
    },

    // Build site sass
    'sass': {
      expanded: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'build/assets/css/main.css': 'src/assets/sass/main.scss'
        }
      }
    },

    // Optimize images
    'imagemin': {
      doc: {
        files: [{
          expand: true,
          cwd: 'src/assets/img',
          src: ['**/*.{png,jpg,svg}'],
          dest: 'build/assets/img/'
        }]
      }
    },

    'gh-pages': {
      options: {
        base: 'build',
        repo: 'https://github.com/patrickarlt/acetate.git'
      },
      src: ['**']
    },

    clean: ["build"],

    browserSync: {
      site: {
        options: {
          server: "./build",
          background: true
        },
        src : ['build/**.*'],
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['newer:imagemin', 'sass', 'acetate:watch', 'browserSync', 'watch']);
  grunt.registerTask('deploy', ['clean', 'acetate:build', 'sass', 'newer:imagemin', 'gh-pages']);
};