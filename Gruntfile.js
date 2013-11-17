module.exports = function(grunt){
	grunt.initConfig({

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
	grunt.registerTask('default', ['requirejs']);
};