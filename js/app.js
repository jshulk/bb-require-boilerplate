define([ 
		"jquery", 
		"jqueryui",
		"backbone", 
		"views/TestView"
		], function($, jqueryui,  Backbone, TestView){
	
	return {
		
			initialize: function(){
				console.log($.fn.jquery);
				this.testView = new TestView();
				console.log('app initialized recompiled');
			}
	}
});