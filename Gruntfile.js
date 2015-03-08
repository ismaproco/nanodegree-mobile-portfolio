var mozjpeg = require('imagemin-mozjpeg');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                    files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/css',
                    ext: '.css'
                }]
            }
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
        },
        uglify: {
            options: {
              mangle: false,
              compress: false
            },
            my_target: {
                files: {
                    'build/js/main.js': ['src/js/main.js'],
                    'build/js/perfmatters.js': ['src/js/perfmatters.js']
                }
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/img',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'build/img'                  // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['cssmin', 'uglify','htmlmin','imagemin']);
};