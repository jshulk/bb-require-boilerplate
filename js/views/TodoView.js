define([
		"jquery",
		"backbone",
		"tpl!templates/task.html"
		], function($, Backbone, taskTemplate ){

	return Backbone.View.extend({
		initialize: function(){
			this.model.on("change", this.render, this );
		},
		render: function(){
			this.$el.html( taskTemplate( this.model.toJSON() ));
			return this;
		}
	});
});