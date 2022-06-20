// Reverse Character Function

function reverseCharacters(input) {
if(typeof input === 'string') {
    return input.split('').reverse().join('');
} else if (typeof input === 'number') {
    return Number(input.toString().split('').reverse().join(''));
}
};
console.log(reverseCharacters('rodgers')); // sregdor
console.log(reverseCharacters(45));

function completeReversal(arr) {
    const retVal = [];
    for (let i = 0; i< arr.length; i++) {      
        const currentItem = arr[i];
        const reversedItem = reverseCharacters(currentItem);
        retVal.unshift(reversedItem);

    } return retVal;
};
let array1 = [1, 2, 3, 4, 5];
let array2 = ['rodgers', 'omondi', 'nyangweso'];
console.log(completeReversal(array1)); // [ 5, 4, 3, 2, 1 ]
console.log(completeReversal(array2)); // [ 'osewgnayn', 'idnomo', 'sregdor' ]