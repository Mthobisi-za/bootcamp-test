
//---------undeclraded functions---///

describe('transportFee', () => {
    it("Function must return R20 for Morning",()=>{
        assert.equal(transportFee("morning"), "R20", "Check for transport price.");
    });
    it("Function must return R10 for afternoon",()=>{
        assert.equal(transportFee("afternoon"), "R10", "Check for transport price.");
    });
    it("Function must return Free for nightshift",()=>{
        assert.equal(transportFee("nightshift"), "free", "Check for transport price.");
    });
});