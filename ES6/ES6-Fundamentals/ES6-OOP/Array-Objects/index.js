// Array Objects


let priceList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doublePriceList = priceList.map(
    doubleFunction = (i) => {
        return i* 2;
    }
);

console.log(doublePriceList); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

