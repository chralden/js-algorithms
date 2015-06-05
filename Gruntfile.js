module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Remove build directory
        clean: {
          build: ['build/']
        },

        browserify: {
          main: {
            options: {
              browserifyOptions: {
                 debug: true
              }
            },
            src: 'js/**/*.js',
            dest: 'build/module.js'
          }
        },

        // Run JS Linter
        jshint: {
          options: {
            jshintrc: 'jshintrc.json'
          },
          all: ['js/**/*.js']
        },

        watch: {
          options: {
            livereload: 35745, // 35731
          },
          src: {
            files: ['js/**/*.js'],
            tasks: ['build'],
          }
        },

        connect: {
          options: {
            port: 9021, 
            hostname: 'localhost',
            livereload: 35732
          },
          livereload: {
            options: {
              open: true,
              base: [
                ''
              ]
            }
          }
        }
    });

    //Plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');

    //Task Definitions
    grunt.registerTask('build', ['clean','browserify'] );
    grunt.registerTask('default', ['build']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);

};