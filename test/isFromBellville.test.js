
describe("isFromBellville",()=>{
    it("should Return True for CY registration.", ()=>{
        assert.equal(isFromBellville("CY 123"), true, "The test must return true");;
    });
    it("should Return false for CJ registration", ()=>{
        assert.equal(isFromBellville("Cj 123"), false, "The test must return true");;
    });
});