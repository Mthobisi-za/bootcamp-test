

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var itemLis = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 13},
    {name : 'bananas', qty : 3},
    {name : 'apples', qty : 3},
];
var itemLi = [];
describe('findItemsOver20', () => {
    it("should return all the products that have a quantity higher than 20", ()=>{
        assert.equal(findItemsOver20(itemList), [{"name":"pears","qty":37},{"name":"bananas","qty":27}], " The function should return all the products that have a quantity higher than 20.");
    });
    it("should return empty array", ()=>{
        assert.equal(findItemsOver20(itemLis), [], " The function should return empty array.");
    });
     it("should return 0", ()=>{
        assert.equal(findItemsOver20(itemLi), 0, " The function should return undefined.");
    });
});