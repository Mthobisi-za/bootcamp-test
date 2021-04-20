
describe("totalPhoneBill", ()=>{
    it("Return R7.45",()=>{
        assert.deepEqual(totalPhoneBill("call, sms, call, sms, sms"), "R7.45", "the function should return R7.45");
    });
     it("Return R12.95",()=>{
        assert.deepEqual(totalPhoneBill("call, call, call, sms, call, sms, sms"), "R12.95", "the function should return R12.95");
    });
});
