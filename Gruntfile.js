module.exports = (grunt)=> {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed',
        },
        dist: {
            files: {
                'styles/main.css': 'main.scss'
            }
        },
    },
    watch: {
      sass :{

          files: ['**/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
          },

        },
      },
      jshint: {
    all: ['Gruntfile.js', 'main.js'],
  },
   concat: {
      basic: {
        src: ['src/main.js'],
        dest: 'dist/basic.js',
      },
      extras: {
      src: ['main.js', 'another.js'],
      dest: 'dist/theone.js',
      },
   },
     uglify: {
      my_target: {
        files: {
        'dist/output.min.js': ['dist/theone.js'],
        },
      },
  },

  });

  // Load the grunt plugins. javscript jshint concat uglify
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass','concat','uglify','jshint']);

};
