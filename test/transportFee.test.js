
//---------undeclraded functions---///

describe('transportFee', () => {
    it("Function must return R20",()=>{
        assert.deepEqual(transportFee("morning"), "R20", "Check for transport price.");
    });
    it("Function must return R10",()=>{
        assert.deepEqual(transportFee("afternoon"), "R10", "Check for transport price.");
    });
    it("Function must return Free",()=>{
        assert.deepEqual(transportFee("nightshift"), "free", "Check for transport price.");
    });
});