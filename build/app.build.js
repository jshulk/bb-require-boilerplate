//In general, if it is a path,
// it is relative to the build.js file used to hold the build options
({
	appDir : "../", // relative to app.build.js file
	baseUrl : "js",// relative to the app dir
	dir: "../dist",
	skipDirOptimize :true,
	mainConfigFile: "../js/main.js", // relative to build.js
	modules: [
        {
            name: "app"
        }
    ]
})