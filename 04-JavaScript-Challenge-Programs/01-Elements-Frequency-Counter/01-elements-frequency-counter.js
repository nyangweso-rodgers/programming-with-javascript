// elements frequency counter

const sampleArray = [1, 2, 3, 4, 5, 5];

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

elementsFrequencyCounter(sampleArray);
