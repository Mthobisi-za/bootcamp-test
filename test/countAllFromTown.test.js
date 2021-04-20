

describe('countAllFromTown', () => {
    it("Should take a string and return 3", ()=>{
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3, "Suppose to return 3");
    });
    it("should take a string and retun 4", ()=>{
        assert.equal(countAllFromTown('CL 124, CL 124, CY 567, CL 345, CJ 456,CL 341','CL'), 4, "Suppose to return 4");
    });
});