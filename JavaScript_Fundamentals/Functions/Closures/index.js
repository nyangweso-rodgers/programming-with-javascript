// closures

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'Rodgers';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
    };

    return displayName;
};

const g1 = greet(); 
console.log(g1); // return the function definition
console.log(g1()); // returns the value
