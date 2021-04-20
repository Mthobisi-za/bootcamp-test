


describe("Greet", ()=>{
    it("should be able to greet Jane", ()=>{
        assert.equal(greet("Jane"), "Hello, Jane", "The function should Return Hello Jane");  
    });
    it("should be able to greet Mtho", ()=>{
        assert.equal(greet("Mtho"), "Hello, Mtho", "The function should Return Hello Mtho");
    });
    it("should be able to greet John", ()=>{
        assert.equal(greet("John"), "Hello, John", "The function should Return Hello john");
    });
})