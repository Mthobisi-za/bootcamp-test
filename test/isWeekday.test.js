

describe('isWeekday', () => {
    it("should Return true for Monday",()=>{
        assert.equal(isWeekday("Monday"), true, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day.");
    });
    it("should Return true for weekday Tuesday",()=>{
        assert.equal(isWeekday("Tuesday"), true, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day");
    });
    it("should Return false for Sunday",()=>{
        assert.equal(isWeekday("Sunday"), false, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day");
    });
});