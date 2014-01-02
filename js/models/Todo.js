define([
		"jquery",
		"backbone"
		], function($, Backbone){

	return Backbone.Model.extend({
		
		initialize: function ( attrs ) {

		},
		validate: function ( attrs ) {
			if( !$.trim( attrs.title ) )
				return "cannot have an empty title";
		},
		defaults:{
			title : "tdd",
			priority : 3
		}
	});
});