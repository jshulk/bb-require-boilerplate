define([
		"jquery", 
		"backbone"
		], function($, Backbone){

	return Backbone.View.extend({
		initialize: function(){
			console.log('test view initialized');
			console.log($.fn.jquery);
			console.log(typeof $.fn.tabs );
		}
	});

});