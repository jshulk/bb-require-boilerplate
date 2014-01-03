require.config({

	baseUrl: './js',

	shim:{
		'underscore' : {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		jqueryui : {
			deps:['jquery'],
			exports: '$.ui'
		}
	},

	paths: {
		'jquery' : 'libs/jquery.min',
		'jqueryui'  : 'libs/jquery-ui',
		'underscore' : 'libs/underscore-min',
		'backbone' : 'libs/backbone-min',
		'tpl' : 'libs/tpl'
	}

});

require(["app"], function(App){
	App.initialize();
});