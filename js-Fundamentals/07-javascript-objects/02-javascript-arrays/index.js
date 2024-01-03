

var priceList = [10, 20, 30, 40, 50];

// using map()
var doublePriceList = priceList.map(
    (priceItem) => (priceItem * 2)
);
console.log(doublePriceList); // Output: [ 20, 40, 60, 80, 100 ]
console.log(doublePriceList[0]); // Output: 20