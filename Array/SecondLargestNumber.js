function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    if (uniqueArr.length < 2) return null; // Handle case where there’s no second largest

    uniqueArr.sort((a, b) => b - a); // Sort in descending order
    return uniqueArr[1]; // Second largest element
}

console.log(secondLargest([10, 20, 4, 45, 99, 99])); // Output: 45
console.log(secondLargest([5])); // Output: null



function secondLargestWithoutSort(arr) {
    let largest = -Infinity, secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest; // Update second largest
            largest = num; // Update largest
        } else if (num > secondLargest && num < largest) {
            secondLargest = num; // Update second largest if it's not equal to largest
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // Handle cases with no second largest
}

console.log(secondLargestWithoutSort([10, 20, 4, 45, 99, 99])); // Output: 45
console.log(secondLargestWithoutSort([5])); // Output: null
console.log(secondLargestWithoutSort([10, 10, 10])); // Output: null


function secondLargestUsingReduce(arr) {
    let largest = -Infinity, secondLargest = -Infinity;

    arr.reduce((_, num) => {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }, null);

    return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargestUsingReduce([10, 20, 4, 45, 99, 99])); // Output: 45

