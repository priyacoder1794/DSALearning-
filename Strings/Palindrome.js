function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false


function isPalindromeTwoPointApproach(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeTwoPointApproach("racecar")); // Output: true
console.log(isPalindromeTwoPointApproach("hello"));   // Output: false
