

describe('isWeekday', () => {
    it("Return true for Monday",()=>{
        assert.deepEqual(isWeekday("Monday"), true, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day.");
    });
    it("Return true for weekday Tuesday",()=>{
        assert.deepEqual(isWeekday("Tuesday"), true, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day");
    });
    it("Return false for Sunday",()=>{
        assert.deepEqual(isWeekday("Sunday"), false, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day");
    });
});