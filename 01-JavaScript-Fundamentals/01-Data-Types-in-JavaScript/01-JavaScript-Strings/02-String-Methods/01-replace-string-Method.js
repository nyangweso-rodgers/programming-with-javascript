// replace() string Method

const fullName = "Rodgers Nyangweso";

const replaceStringMethod = (sampleString) => {
    sampleString = sampleString.replace("Nyangweso", "Omondi");
  return sampleString;
};

console.log(replaceStringMethod(fullName)); // Output: Rodgers Omondi