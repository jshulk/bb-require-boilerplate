define([
		"views/TodoView",
		"models/Todo"
		], 

		function(TodoView, Todo){

		return describe("Testing todo view", function(){

			beforeEach(function(){
				this.todo = new Todo({ title : "Get to work"});
				this.todoView = new TodoView({
					el : "#sandbox",
					model : this.todo
				});
			});

			afterEach( function(){
				this.todoView.$el.empty();
			});

			it("instantiating todo view", function(){
				expect(this.todoView).toBeDefined();
			});

			it("el should point to sandbox", function(){
				expect( this.todoView.$el[0].id ).toEqual("sandbox");
			});

			it("rendering the view should add an empty div ", function(){
				expect( this.todoView.render().$el.children("div").length).toEqual(1);
			});

			it("view should have a refernce to model", function(){
				expect( this.todoView.model ).toBeDefined();
			});

			it("should render the model into the view", function(){
				expect( this.todoView.render().$el.find("#task").text()).toEqual("Get to work");
			});

			it("view should listen to model's changes ", function(){
				
				this.todo.set("title", "Go to party");

				expect( this.todoView.$el.find("#task").text()).toEqual("Go to party");
			});

		});
});