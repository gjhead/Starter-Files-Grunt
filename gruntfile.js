module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // this is a very, very , very simple templating engine.
    codekit: {
      
      dist: {
        src : 'a/kit/**/*.kit',
        dest : ''
      }
      
    },    
    
    sass: {
            
      dist: {
        options: {
          style: 'nested' // compact, compressed, nested or expanded
        },
        files: {
          'a/pre-css/screen-pre.css' : 'a/sass/screen.scss'
        }
      }
                  
    },
    
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})        
        ]
      },
      
      dist: {
        src: 'a/pre-css/screen-pre.css',
        dest: 'css/screen.css'
      }
    },
    
    jshint: {
      beforeuglify: 'a/js/script.js'
    },
    
    uglify: {
      
      dist: {
        
        files: {
          'js/jquery-min.js' : 'a/js/jquery/jquery-3.2.0.js',
          'js/script-min.js' : ['a/js/script.js', '/a/js/plugins/*.js']          
        } 
        
      }
      
    }, 
    
    // Watch options: what tasks to run when changes to files are saved
    watch: {
      options: {
        livereload: true
      },
      
      kit: {
        files: ['a/kit/**/*.kit'],
	    tasks: ['codekit']
      },
      
      sass: {
        files: ['a/sass/**/*.scss'],
        tasks: ['sass', 'postcss']
      },
      
     jstest: {
        files: ['a/js/script.js'],
        tasks: ['jshint']
      },
      
      jsmin: {
        files: ['a/js/**/*.js'], // Watch for changes in JS files except for script.min.js to avoid reload loops
        tasks: ['uglify']
      }
		}
    
    

  });
 
  grunt.loadNpmTasks('grunt-codekit');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  
  grunt.registerTask('default', ['codekit', 'sass', 'postcss', 'jshint', 'uglify', 'watch']);
  
  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('js', ['jshint', 'uglify']);
  
};