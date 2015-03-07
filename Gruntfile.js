module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            css: {
                src: 'src/css/style.css',
                dest: 'build/css/style.css'
            },
            css: {
                src: 'src/css/print.css',
                dest: 'build/css/print.css'
            },
            css: {
                src: 'src/css/bootstrap-grid.css',
                dest: 'build/css/bootstrap-grid.css'
            },
            css: {
                src: 'src/css/pizza-style.css',
                dest: 'build/css/pizza-style.css'
            },
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'build/pizza.html': 'src/pizza.html',     // 'destination': 'source'
                'build/index.html': 'src/index.html',
                'build/project-2048.html': 'src/project-2048.html',
                'build/project-mobile.html': 'src/project-mobile.html',
                'build/project-webperf.html': 'src/project-webperf.html'
              }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js','htmlmin']);
};