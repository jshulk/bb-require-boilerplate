define(["models/Todo"], function(Todo){

	return describe("Testing todo model", function(){


		it( "should have a default empty string for the title", function(){
			var todo = new Todo();
			expect( todo.get("title") ).toBe("tdd");



		});

		it( "should reflect the attributes it is initialized with ", function(){
			var todo = new Todo({title : "ABCD"});
			expect( todo.get("title") ).toBe("ABCD");
		});

		it( "should set the priority to default", function(){
			var todo = new Todo();
			expect( todo.get("priority") ).toEqual(3);
		});

		describe("Testing url ", function(){

			beforeEach(function(){
				
				this.todo = new Todo();

				var dummyCollection = {
					url : "/collection"
				};

				this.todo.collection = dummyCollection;


			});


			it("url without id set", function(){
				
				expect( this.todo.url() ).toEqual("/collection");
			});

			it("url with id set", function(){
				
				this.todo.set("id", 1);

				expect( this.todo.url() ).toEqual("/collection/1");
			});


			it("validating todo with sinon spy", function(){
				
				this.eventSpy = sinon.spy();

				this.todo.on( "invalid", this.eventSpy, this );
				
				this.todo.set({
					title : ""
				}, {validate : true});


				expect( this.eventSpy ).toHaveBeenCalled();

				expect( this.eventSpy ).toHaveBeenCalledWith( 
					this.todo,
					"cannot have an empty title"
				);

			});


		});








	});
});