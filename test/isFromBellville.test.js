
describe("isFromBellville",()=>{
    it("Return True.", ()=>{
        assert.deepEqual(isFromBellville("CY 123"), true, "The test must return true");;
    });
    it("Return false", ()=>{
        assert.deepEqual(isFromBellville("Cj 123"), false, "The test must return true");;
    });
});