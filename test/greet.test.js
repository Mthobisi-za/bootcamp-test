


describe("Greet", ()=>{
    it("The function should be able to greet Jane", ()=>{
        assert.equal(greet("Jane"), "Hello, Jane", " return Hello Jane");  
    });
    it("The function should be able to greet Mtho", ()=>{
        assert.equal(greet("Mtho"), "Hello, Mtho", "Return Hello Mtho");
    });
    it("The function should be able to greet John", ()=>{
        assert.equal(greet("John"), "Hello, John", "Return Hello john");
    });
})