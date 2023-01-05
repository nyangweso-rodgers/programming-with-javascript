// Hoisting

console.log(sumArrow(10, 20)); // sumArrow is not a function
console.log(sumArrow); // undefined

var sumArrow = (x, y) => {
    return x + y;
};