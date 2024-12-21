/**
 *  John Maxime Aritmetica
 * Sep 17, Javascript object
 */

console.log("John Maxime Aritmetica")
console.log("\n ---------- Example 1: defining a object ---------")
// create an object named 'car'
const car={
    type: "Fiat",
    model: 500,
    color: "White"
}
console.log(`The model of the car is ${car.model}`)

console.log("\n ---------- Example 2: use of 'this' keyword is an object ---------")
// create an obhect named 'person'
const person = {
    // defining properties
    firstname: "John",
    lastname: "Aritmetica",
    id : 1234,

    //defining methods
    fullname : function(){
        return `${this.firstname} ${this.lastname} `
    }
}

// accessing method 'fullname'
console.log(person.fullname())


console.log("\n ---------- Example 3: object constructor. ---------")
function course(title, instructor, code, session, students){
    this.title = title,
    this.instructor = instructor,
    this.code = code, 
    this.session = session,
    this.students = students
}
// set up values to the object
let course1 = new course("JavaScript programming", "Wu", "ET712", "H1", 12 )

// accessing properties
console.log(`The course ${course1.title} hsa ${course1.students} students`)

console.log("\n ---------- Example 4: methods ---------");

const myMath = {
    // defining methods
    square: function(num) {
        return num * num;
    },
    double: function(num) {
        return num * 2;
    }
};

// accessing methods
let number1 = myMath.double(3);
let number2 = myMath.square(5);

// print result
console.log(`The double of number 3 is ${number1}`);
console.log(`The square of number 5 is ${number2}`);


console.log("\n ---------- Exercise ---------")
// Define the mycalculator object
const mycalculator = {
    // Properties
    message: 'This one and only Calculator is for solving',
    side: 2,

    // Method to calculate the area of a square
    area_square: function() {
        return this.side * this.side;
    },

    // Method to calculate the volume of a cube
    volume_cube: function() {
        return this.side * this.side * this.side;
    }
};

// Example usage:
console.log(mycalculator.area_square()); // Output: 4
console.log(mycalculator.volume_cube()); // Output: 8

/**
 *  Sep 19
 * try-catach

 */

console.log("\n ---------- Example 1: try-catch ---------");

// Define a function to display a message in upper-case
function yell(message) {
    if (typeof message === 'string') {
        console.log(message.toUpperCase().repeat(3));
    } else {
        throw new Error("Input must be a string");
    }
}

try {
    // Call the function
    yell(" Good morning ");
    yell(123); // This will throw an error
} catch (e) {
    console.log(`ERROR! ${e.message}`);
}

finally{
    console.log("end of calling function yell()")
}
// Call the function again with a valid input
yell("Good Morning");

console.log("\n ------- lines after example 1 ------- \n");

console.log("\n---- EXERCISE ---- ")
//define a JavaScript function named 'divideNumbers' that takes two parameters, 'a' nad 'b' .
// The function should attempt to divide 'a' and 'b' and return the result
// if the division is undefined, return a message that says 'Error performing the division'
// use try-catch inside the function

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    } catch (e) {
        return "Error performing the division: " + e.message;
    }
}

// Example usage
console.log(divideNumbers(10, 2));  // Output: 5
console.log(divideNumbers(10, 0));  // Output: Error performing the division: Division by zero
console.log(divideNumbers(10, 'a')); // Output: Error performing the division: Division by zero (due to implicit conversion)

