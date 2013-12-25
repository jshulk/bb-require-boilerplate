define(["models/Todo"], function(Todo){

	return describe("Testing todo model", function(){

		it( "should have a default empty string for the title", function(){
			var todo = new Todo();
			expect( todo.get("title") ).toBe("");

		});

	});
});