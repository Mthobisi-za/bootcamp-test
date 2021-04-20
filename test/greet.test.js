


describe("Greet", ()=>{
    it("Return Hello Jane", ()=>{
        assert.deepEqual(greet("Jane"), "Hello, Jane", "The function should Return Hello Jane");  
    });
    it("Return Hello Mtho", ()=>{
        assert.deepEqual(greet("Mtho"), "Hello, Mtho", "The function should Return Hello Mtho");
    });
    it("Return Hello John", ()=>{
        assert.deepEqual(greet("John"), "Hello, John", "The function should Return Hello john");
    });
})