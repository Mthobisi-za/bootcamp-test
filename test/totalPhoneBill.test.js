
describe("totalPhoneBill", ()=>{
    it("should Return R7.45 for all the sms's and call's passed",()=>{
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45", "the function should return R7.45");
    });
     it("should Return R12.95 for all the sms's and call's passed",()=>{
        assert.equal(totalPhoneBill("call, call, call, sms, call, sms, sms"), "R12.95", "the function should return R12.95");
    });
});
