
describe('countAllPaarl', () => {
    it('Count registration numbers from paarl and return 3', () => {
        assert.deepEqual(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), 3, "that takes a parameter and returns the number of registration numbers in the string for Paarl");
    });
    it('Count registration numbers from paarl and return 1', () => {
        assert.deepEqual(countAllPaarl("CJ 2345, CL 123-546, CK 345"), 1, "that takes a parameter and returns the number of registration numbers in the string for Paarl");
    });
    it('Count registration numbers from paarl and return 2', () => {
        assert.deepEqual(countAllPaarl("CJ 2345, CJ 2345, CL 123-546, CK 345"), 2, "that takes a parameter and returns the number of registration numbers in the string for Paarl");
    });
});