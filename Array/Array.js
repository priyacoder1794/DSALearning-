// An array is an ordered list of values. Each value is called an element, and each element has a numeric position in the array, known as its index. Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

//1. Create Array using Literal
// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);


//2. Create using new Keyword (Constructor)
// Creating and Initializing an array with values
let a1 = new Array(10, 20, 30);

console.log(a1);

// Basic Operations on JavaScript Arrays
// Creating an Array and Initializing with Values
let a2 = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(a2[0]);
console.log(a2[1]);

// Accessing First Array Elements
let fst = a2[0];
console.log("First Item: ", fst);

// Accessing Last Array Elements
let lst = a2[a.length - 1];
console.log("First Item: ", lst);

//Modifying the Array Elements
a2[1]= "Bootstrap";
console.log(a2);

// Add Element to the end of Array
a2.push("Node.js");

// Add Element to the beginning
a2.unshift("Web Development");

console.log(a2);

console.log("Original Array: " + a);


//Removing Elements from an Array
// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.

// Removes and returns the last element
let lst1 = a2.pop();
console.log("After Removing the last: " + a2);

// Removes and returns the first element
let fst1 = a2.shift();
console.log("After Removing the First: " + a2);

// Removes 2 elements starting from index 1
a2.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a2);


// Array Length
let len = a2.length;

console.log("Array Length: " + len);

// Increase the array length to 7
a2.length = 7;

console.log("After Increasing Length: ", a2);

// Decrease the array length to 2
a2.length = 2;
console.log("After Decreasing Length: ", a2)


//Iterating Through Array Elements


// 1.Iterating through for loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

// 2.Iterating through forEach loop
a.forEach(function myfunc(x) {
    console.log(x);
});


// Array Concatenation

// Creating an Array and Initializing with Values
let a3 = ["HTML", "CSS", "JS", "React"];
let b3 = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = a3.concat(b3);

console.log("Concatenated Array: ", concateArray);


// Conversion of an Array to String
console.log(a.toString())

// Check type of array
console.log(typeof a);

//Recognizing a JavaScript Array
const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ", Array.isArray(courses))
console.log("Using instanceof method: ", courses instanceof Array)





