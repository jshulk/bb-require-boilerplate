module.exports = function(grunt){
	var pkg = require("./package.json");
	grunt.initConfig({
		watch:{
			files: pkg.filesToWatch,
			tasks : ["build"]
		},
		clean: {
			options:{ force : true},
			src : ['dist']
		},
		requirejs:{
			compile:{
				options:{
					appDir : ".", // relative to app.build.js file
					baseUrl : "./js",// relative to the app dir
					dir: "./dist",
					skipDirOptimize :true,
					mainConfigFile: "js/main.js", // relative to build.js
					modules: [
				        {
				            name: "app"
				        }
				    ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.registerTask('build', 'cleans the dist and rebuilds the project', ['clean', 'requirejs']);
	/* alternate approach */
	grunt.registerTask('build', "cleans the dist and rebuilds the project", function(){
		grunt.task.run(['clean', 'requirejs']);
		
	});
	grunt.registerTask('default', ['watch']);
};