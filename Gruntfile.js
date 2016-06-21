module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'acetate': {
      build: {
        options: {
          mode: 'build'
        }
      },

      server: {
        options: {
          mode: 'server',
        }
      }
    },

    'watch': {
      sass: {
        files: ['src/assets/sass/**/*'],
        tasks: ['sass', 'autoprefixer']
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

    autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        map: true
      },
      build: {
        src: 'build/assets/css/main.css',
        dest: 'build/assets/css/main.css'
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

    clean: ['build']
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clean', 'newer:imagemin', 'sass', 'autoprefixer', 'acetate:server', 'watch']);
  grunt.registerTask('deploy', ['clean', 'acetate:build', 'sass', 'autoprefixer', 'newer:imagemin', 'gh-pages']);
};
