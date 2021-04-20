
describe("countRegNumber", ()=>{
    it("should Count all the registration numbers and return 3",()=>{
        assert.equal(countRegNumber("('CA 182736,CY 523519,CJ 812328')"), 3, "function that take's a string parameter and returns the number os registrations.");
    });
    it("should count all the registration numbers and return 5",()=>{
        assert.equal(countRegNumber("('CA 182736, CA 182736,CY 523519,CJ 812328, CY 523519')"), 5, "function that take's a string parameter and returns the number of registrations.");
    });
})