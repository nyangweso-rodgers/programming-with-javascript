// elements frequency counter

const sampleArray = [1, 2, 3, 4, 5, 5];

// Option 1
const elementsFrequencyCounter = (array) => {
  const arrayCounterObject = {};

  array.forEach((element) => {
    if (arrayCounterObject[element]) {
      arrayCounterObject[element]++;
    } else {
      arrayCounterObject[element] = 1;
    }
  });
  console.log("Array Counter Object: ", arrayCounterObject);
  return arrayCounterObject;
};

// Option 2
const NonUniqueElementsArray = (array) => {
  let nonUniqueElements = array.filter((element, index) => {
    return array.indexOf(element) !== index;
  });
  console.log("Non unique elements: ", nonUniqueElements);
};

elementsFrequencyCounter(sampleArray); // Output: Array Counter Object:  { '1': 1, '2': 1, '3': 1, '4': 2, '5': 2 }
NonUniqueElementsArray(sampleArray); // Output: Non unique elements: [5]
