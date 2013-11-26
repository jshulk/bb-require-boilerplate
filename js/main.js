require.config({

	baseUrl: 'js',

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
	map:{
		"*" : { 'jquery' : 'jquery-private' },
		'jquery-private' : { 'jquery' : 'jquery'}
	},
	paths: {
		'jquery' : 'libs/jquery.min',
		'jqueryui'  : 'libs/jquery-ui',
		'underscore' : 'libs/underscore-min',
		'backbone' : 'libs/backbone-min',
		'tpl' : 'libs/tpl',
		'jquery-private' : 'libs/jquery-private'
	}

});

require(["app"], function(App){
	App.initialize();
});