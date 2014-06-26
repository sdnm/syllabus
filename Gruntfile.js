module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target1: ['jshint'],
      target2: ['compass'],
      target3: ['uglify']
    },
    //
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dynamic_mappings: {
        // Grunt will search for "*.js" under "js/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'js/',      // Src matches are relative to this path.
            src: ['*.js'], // Actual pattern(s) to match.
            dest: 'js/',   // Destination path prefix.
            ext: '.min.js',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          },
	      ],
      },
    },
    jshint: {
      beforeconcat: ['Gruntfile.js', 'js/*.js'],
      afterconcat: ['js/<%= pkg.name %>.js'],
      options: {
        ignores: ['js/*.min.js'],
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['compass:dist']
      },
      js: {
        files: ['<%= jshint.beforeconcat %>'],
        tasks: ['jshint']
      },
      img: {
        files: ['**/*.svg', '**/*.png'],
        tasks: ['svg-sprites']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-scss-lint');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['concurrent:target1', 'concurrent:target2', 'concurrent:target3']);
};