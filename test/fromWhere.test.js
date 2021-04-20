

describe('fromWhere', () => {
    it("return from Bellville ",()=>{
        assert.deepEqual(fromWhere("CY"), "Bellville", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
    it("return from Paarl ",()=>{
        assert.deepEqual(fromWhere("CJ"), "Paarl", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
    it("return from Cape Town ",()=>{
        assert.deepEqual(fromWhere("CA"), "Cape Town", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
     it("return from Some other place! ",()=>{
        assert.deepEqual(fromWhere("CK"), "Some other place!", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
});