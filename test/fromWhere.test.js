

describe('fromWhere', () => {
    it("should return from Bellville ",()=>{
        assert.equal(fromWhere("CY"), "Bellville", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
    it("should return from Paarl ",()=>{
        assert.equal(fromWhere("CJ"), "Paarl", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
    it("should return from Cape Town ",()=>{
        assert.equal(fromWhere("CA"), "Cape Town", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
     it("should return from Some other place! ",()=>{
        assert.equal(fromWhere("CK"), "Some other place!", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
});