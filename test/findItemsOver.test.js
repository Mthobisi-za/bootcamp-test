

var itemLists = [
{"name":"apples","qty":40},
{"name":"pears","qty":9},
{"name":"bananas","qty":23},
{"name":"apples","qty":37}
];
var itemListss = [
    {"name":"apples","qty":40},
    {"name":"pears","qty":9},
    {"name":"bananas","qty":23},
    {"name":"apples","qty":37}
    ];
describe('findItemsOver', () => {
    it('should return products that are more than 20', () => {
        assert.equal(findItemsOver(itemLists, 20), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}], "The function should return products that have quantity higher than the threshold");
    });
    it('should return products that are more than 10', () => {
        assert.equal(findItemsOver(itemLists, 10), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}], "The function should return products that have quantity higher than the threshold");
    });
    it('should return products that are more than 30', () => {
        assert.equal(findItemsOver(itemListss, 30), [{"name":"apples","qty":40},{"name":"apples","qty":37}], "The function should return products that have quantity higher than the threshold");
    });
});