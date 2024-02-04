// using forEach method

// Example 1
const students = ["Student 1", "Student 2", "Student 3"];

const getStudents = (data) => {
  data.forEach((student) => {
    console.log(student);
    //return student;
  });
};

// getStudents(students); //TODO: uncomment to execute

// Example 2: sum numbers within an array of saleOrders
const saleOrders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSalesOrders = (data) => {
  let total = 0;
  data.forEach((saleOrder) => {
    total += saleOrder;
  });
  //return total;
  console.log(total);
};

// sumSalesOrders(saleOrders); // TODO: uncomment to execute
