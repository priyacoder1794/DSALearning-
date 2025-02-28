function reverseInPlace(str) {
    return str.split('').reverse().join('');
}

console.log(reverseInPlace("Priyanka")); 
// aknayirP


let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]



let arr1 = [1, 2, 3, 4, 5];
let reversedArr = [...arr1].reverse();
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
console.log(arr1); // Original array remains unchanged

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]


function reverseInPlace(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
        left++;
        right--;
    }
    return arr;
}

let arr2 = [1, 2, 3, 4, 5];
console.log(reverseInPlace(arr2)); // Output: [5, 4, 3, 2, 1]
