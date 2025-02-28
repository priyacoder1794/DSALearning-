//  String is a sequence of characters, typically used to represent text

// Create using Literals – Recommended
// Using Single Quote
let s1 = 'abcd';
console.log(s1);

// Using Double Quote
let s2 = 'abcd';
console.log(s2);


// Create using Constructor
let s = new String('abcd');
console.log(s);

// Template Literals (String Interpolation)
let b1 = 'gfg';
let b2 = `You are learning from ${b1}`;

console.log(s2);

//Empty String
let str1 = '';

let str2 = "";

console.log(str1);
console.log(str2);

//Multiline Strings (ES6 and later)

let strMultiplne = `
    This is a
    multiline
    string`;

console.log(strMultiplne);


// ---------- Basic Operations on JavaScript Strings -----------

// 1. String Length
let len = s.length;
console.log(len);

// 2. String Concatenation
let stri1 = "Hello";
let stri2 = "World";
let stri3 = stri1 + " " + stri2;
console.log(stri3);

// 3. Escape Characters

//  \' - Inserts a single quote
//  \" - Inserts a double quote 
//  \\ - Inserts a backslash

const s10 = "\'GfG\' is a learning portal";
const s11 = "\"GfG\" is a learning portal";
const s12 = "\\GfG\\ is a learning portal";

console.log(s10);
console.log(s11);
console.log(s12);

// 4. Breaking Long Strings
const s13 = "'GeeksforGeeks' is \
a learning portal";

console.log(s13);

// 5. Find Substring of a String

let s14 = 'JavaScript Tutorial';

let s15 = s1.substring(0, 10);

console.log(s15);


//6. Convert String to Uppercase and Lowercase

let string11 = 'JavaScript';

let uCase = string11.toUpperCase();

let lCase = string11.toLowerCase();

console.log(uCase);
console.log(lCase);

let s16 = 'def abc abc';

let i = s16.indexOf('abc');

console.log(i);

// 8. String Replace in JavaScript
let s17 = 'Learn HTML at GfG';

let s18 = s17.replace('HTML', 'JavaScript');

console.log(s18);

// 9. Trimming Whitespace from String

let s19 = '    Learn JavaScript       ';

let s20 = s19.trim();

console.log(s20);

// 10. Access Characters from String

let s21 = 'Learn JavaScript';

let s22 = s21[6];

console.log(22);

s23 = s21.charAt(6);

console.log(s23);


//11. String Comparison in JavaScript
let str11 = "John";
let str22 = new String("John");

console.log(str11 == str22);
console.log(str11.localeCompare(str22));

//12. Passing JavaScript String as Objects
const str = new String("GeeksforGeeks");
console.log(str);
const str111 = new String("GeeksforGeeks");
const str222 = "GeeksforGeeks";

console.log(str111 == str222);
console.log(str111 === str222);










