module.exports = function(grunt){
        var pkg = require("./package.json");
        grunt.initConfig({
                
                            notify : {
                                build:{
                                    options:{
                                        title : "Build complete", 
                                        message : "Ready for deployment"
                                    }
                                }
                            },
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
                            },
                            jasmine:{
                            	dev: {
                            		src : "js/models/*.js",
                            		options:{
                            			specs: "test/spec/*Spec.js",
                                        vendor : ["js/libs/sinon-1.7.1.js", "js/libs/jasmine-sinon.js"],
                                        keepRunner:false,
                            			template : require("grunt-template-jasmine-requirejs"),
                            			templateOptions:{
                                            body : "<div id ='sandbox'></div>",
                            				requireConfigFile: 'js/main.js'
                            			}
                            		}
                            	}
                            }
        });

        grunt.loadNpmTasks('grunt-contrib-requirejs');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-jasmine');
        grunt.loadNpmTasks('grunt-notify');
        //grunt.registerTask('build', 'cleans the dist and rebuilds the project', ['clean', 'requirejs']);
        /* alternate approach */
        grunt.registerTask('build', "cleans the dist and rebuilds the project", function(){
                grunt.task.run(['jasmine', 'clean', 'requirejs', 'notify:build']);
                
        });
        grunt.registerTask('default', ['watch']);
};