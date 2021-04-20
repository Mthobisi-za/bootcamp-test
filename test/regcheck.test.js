
describe('regCheck', () => {
    it("Function must check if registration number is for GP, L, EC, MP registration plates",()=>{
        assert.deepEqual(regCheck("DC 55 YU GP", "GP"), true, "Check for Gp registrations.");
    });
    it("Check for GP, L, EC, MP, if it is not then return false",()=>{
        assert.deepEqual(regCheck("DC 55 YU GP", "G"), false, "Function must check if registration number is for GP, L, EC, MP registration plates.");
    });
});