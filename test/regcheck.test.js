
describe('regCheck', () => {
    it("Check for Gp registrations and return true",()=>{
        assert.equal(regCheck("DC 55 YU GP", "GP"), true, "Function must check if registration number is for GP");
    });
    it("Check for GP return false",()=>{
        assert.equal(regCheck("DC 55 YU GP", "G"), false, "Function must check if registration number is for GP.");
    });
});